from anthropic import AsyncAnthropic

from app.config import settings

_client: AsyncAnthropic | None = None


def get_claude_client() -> AsyncAnthropic | None:
    global _client
    if not settings.anthropic_api_key:
        return None
    if _client is None:
        _client = AsyncAnthropic(api_key=settings.anthropic_api_key)
    return _client


async def create_claude_completion(
    *,
    system_prompt: str,
    user_prompt: str,
    model: str = "claude-3-5-haiku-latest",
) -> str:
    client = get_claude_client()
    if client is None:
        raise RuntimeError("Anthropic API key is not configured.")

    response = await client.messages.create(
        model=model,
        max_tokens=1024,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}],
    )

    text_blocks = [
        block.text for block in response.content if block.type == "text"
    ]
    return "".join(text_blocks)
