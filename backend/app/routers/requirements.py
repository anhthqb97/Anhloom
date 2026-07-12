from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.llm import generate_completion

router = APIRouter(prefix="/requirements", tags=["requirements"])


class RequirementMessage(BaseModel):
    role: str
    content: str


class RequirementRequest(BaseModel):
    service_title: str
    messages: list[RequirementMessage] = Field(default_factory=list)
    user_message: str = Field(min_length=1, max_length=2000)


class RequirementResponse(BaseModel):
    reply: str
    export_markdown: str


REQUIREMENTS_SYSTEM_PROMPT = """
You are Anhloom's requirement discovery assistant.
Ask one focused follow-up question at a time and summarize gathered requirements.
Keep responses concise and actionable.
"""


def build_export_markdown(service_title: str, messages: list[RequirementMessage]) -> str:
    lines = [f"# Requirements — {service_title}", ""]
    for message in messages:
        role = "Client" if message.role == "user" else "Assistant"
        lines.append(f"## {role}")
        lines.append(message.content)
        lines.append("")
    return "\n".join(lines).strip()


@router.post("", response_model=RequirementResponse)
async def gather_requirements(payload: RequirementRequest) -> RequirementResponse:
    history = "\n".join(
        f"{message.role}: {message.content}" for message in payload.messages
    )
    prompt = (
        f"Service: {payload.service_title}\n"
        f"Conversation:\n{history}\n"
        f"Latest user message: {payload.user_message}"
    )

    try:
        reply = await generate_completion(
            system_prompt=REQUIREMENTS_SYSTEM_PROMPT,
            user_prompt=prompt,
        )
    except Exception:
        reply = (
            "What problem are you solving, who is the primary user, and what does "
            "success look like in the first 90 days?"
        )

    export_messages = [
        *payload.messages,
        RequirementMessage(role="user", content=payload.user_message),
        RequirementMessage(role="assistant", content=reply),
    ]

    return RequirementResponse(
        reply=reply.strip(),
        export_markdown=build_export_markdown(payload.service_title, export_messages),
    )
