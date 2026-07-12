from openai import AsyncOpenAI

from app.config import settings

_client: AsyncOpenAI | None = None


def get_openai_client() -> AsyncOpenAI | None:
    global _client
    if not settings.openai_api_key:
        return None
    if _client is None:
        _client = AsyncOpenAI(api_key=settings.openai_api_key)
    return _client


async def create_openai_completion(
    *,
    system_prompt: str,
    user_prompt: str,
    model: str = "gpt-4o-mini",
) -> str:
    client = get_openai_client()
    if client is None:
        raise RuntimeError("OpenAI API key is not configured.")

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=0.4,
    )

    return response.choices[0].message.content or ""
