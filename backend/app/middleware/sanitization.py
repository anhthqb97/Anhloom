import json
import re

import bleach
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint
from starlette.responses import Response

CONTROL_CHARS = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]")


def sanitize_text(value: str) -> str:
    cleaned = CONTROL_CHARS.sub("", value)
    return bleach.clean(cleaned, tags=[], attributes={}, strip=True).strip()


def sanitize_payload(data: object) -> object:
    if isinstance(data, str):
        return sanitize_text(data)
    if isinstance(data, list):
        return [sanitize_payload(item) for item in data]
    if isinstance(data, dict):
        return {key: sanitize_payload(value) for key, value in data.items()}
    return data


class SanitizationMiddleware(BaseHTTPMiddleware):
    async def dispatch(
        self,
        request: Request,
        call_next: RequestResponseEndpoint,
    ) -> Response:
        if request.method in {"POST", "PUT", "PATCH"}:
            content_type = request.headers.get("content-type", "")
            if "application/json" in content_type:
                body = await request.body()
                if body:
                    try:
                        payload = json.loads(body)
                        sanitized = sanitize_payload(payload)
                        request._body = json.dumps(sanitized).encode("utf-8")
                    except json.JSONDecodeError:
                        pass

        return await call_next(request)
