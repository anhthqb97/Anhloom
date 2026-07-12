from app.services.claude_client import create_claude_completion
from app.services.openai_client import create_openai_completion


async def generate_completion(
    *,
    system_prompt: str,
    user_prompt: str,
) -> str:
    try:
        return await create_openai_completion(
            system_prompt=system_prompt,
            user_prompt=user_prompt,
        )
    except Exception:
        return await create_claude_completion(
            system_prompt=system_prompt,
            user_prompt=user_prompt,
        )
