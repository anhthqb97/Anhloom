from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.llm import generate_completion

router = APIRouter(prefix="/faq", tags=["faq"])


class FaqRequest(BaseModel):
    service_title: str
    question: str = Field(min_length=1, max_length=1000)
    context: str = ""


class FaqResponse(BaseModel):
    answer: str


FAQ_SYSTEM_PROMPT = """
You are Anhloom's FAQ assistant.
Answer service-specific questions clearly and concisely.
If the question is outside scope, suggest contacting Anhloom.
"""


@router.post("", response_model=FaqResponse)
async def answer_faq(payload: FaqRequest) -> FaqResponse:
    prompt = (
        f"Service: {payload.service_title}\n"
        f"FAQ context: {payload.context}\n"
        f"Question: {payload.question}"
    )

    try:
        answer = await generate_completion(
            system_prompt=FAQ_SYSTEM_PROMPT,
            user_prompt=prompt,
        )
    except Exception:
        answer = (
            f"For {payload.service_title}, we typically tailor the approach to your "
            "product stage and technical constraints. Book a consultation for a "
            "detailed answer."
        )

    return FaqResponse(answer=answer.strip())
