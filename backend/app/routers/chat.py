import asyncio
import json
from collections.abc import AsyncIterator
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.chat import ChatMessage, ChatSession
from app.services.chat_prompt import COMPANY_SYSTEM_PROMPT, FAQ_CONTEXT
from app.services.openai_client import get_openai_client

router = APIRouter(prefix="/chat", tags=["chat"])


class ChatRequest(BaseModel):
    session_id: str | None = None
    message: str = Field(min_length=1, max_length=4000)


class ChatMessageResponse(BaseModel):
    role: str
    content: str


def get_or_create_session(db: Session, session_id: str | None) -> str:
    resolved_id = session_id or str(uuid4())
    existing = db.scalar(
        select(ChatSession).where(ChatSession.session_id == resolved_id),
    )
    if existing is None:
        db.add(ChatSession(session_id=resolved_id))
        db.commit()
    return resolved_id


def get_session_messages(db: Session, session_id: str) -> list[ChatMessageResponse]:
    rows = db.scalars(
        select(ChatMessage)
        .where(ChatMessage.session_id == session_id)
        .order_by(ChatMessage.created_at.asc()),
    ).all()
    return [ChatMessageResponse(role=row.role, content=row.content) for row in rows]


async def stream_tokens(text: str) -> AsyncIterator[str]:
    for token in text.split():
        payload = json.dumps({"token": f"{token} "})
        yield f"data: {payload}\n\n"
        await asyncio.sleep(0.03)
    yield "data: [DONE]\n\n"


async def stream_openai_response(
    *,
    history: list[dict[str, str]],
    user_message: str,
) -> AsyncIterator[str]:
    client = get_openai_client()
    if client is None:
        fallback = (
            "I'm Anhloom's assistant. I can help you explore our services and "
            "next steps. Configure OPENAI_API_KEY for live AI responses."
        )
        async for chunk in stream_tokens(fallback):
            yield chunk
        return

    stream = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"{COMPANY_SYSTEM_PROMPT}\n\n{FAQ_CONTEXT}"},
            *history,
            {"role": "user", "content": user_message},
        ],
        temperature=0.4,
        stream=True,
    )

    async for chunk in stream:
        delta = chunk.choices[0].delta.content or ""
        if delta:
            payload = json.dumps({"token": delta})
            yield f"data: {payload}\n\n"

    yield "data: [DONE]\n\n"


@router.get("/{session_id}/messages", response_model=list[ChatMessageResponse])
def list_messages(session_id: str, db: Session = Depends(get_db)) -> list[ChatMessageResponse]:
    session = db.scalar(select(ChatSession).where(ChatSession.session_id == session_id))
    if session is None:
        raise HTTPException(status_code=404, detail="Chat session not found.")
    return get_session_messages(db, session_id)


@router.post("")
async def create_chat_message(
    payload: ChatRequest,
    db: Session = Depends(get_db),
) -> StreamingResponse:
    session_id = get_or_create_session(db, payload.session_id)

    db.add(
        ChatMessage(
            session_id=session_id,
            role="user",
            content=payload.message,
        ),
    )
    db.commit()

    history_rows = db.scalars(
        select(ChatMessage)
        .where(ChatMessage.session_id == session_id)
        .order_by(ChatMessage.created_at.asc()),
    ).all()
    history = [
        {"role": row.role, "content": row.content}
        for row in history_rows[:-1]
        if row.role in {"user", "assistant"}
    ]

    async def event_generator() -> AsyncIterator[str]:
        yield f"data: {json.dumps({'session_id': session_id})}\n\n"
        assistant_chunks: list[str] = []

        async for event in stream_openai_response(
            history=history,
            user_message=payload.message,
        ):
            if event.startswith("data: ") and not event.strip().endswith("[DONE]"):
                data = json.loads(event.removeprefix("data: ").strip())
                if "token" in data:
                    assistant_chunks.append(data["token"])
            yield event

        assistant_text = "".join(assistant_chunks).strip()
        if assistant_text:
            db.add(
                ChatMessage(
                    session_id=session_id,
                    role="assistant",
                    content=assistant_text,
                ),
            )
            db.commit()

    return StreamingResponse(event_generator(), media_type="text/event-stream")
