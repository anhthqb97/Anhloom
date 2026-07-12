from fastapi import APIRouter

from app.database import engine
from app.redis_client import ping_redis
from sqlalchemy import text

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, str | bool]:
    db_ok = False
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        db_ok = True
    except Exception:
        db_ok = False

    return {
        "status": "ok" if db_ok and ping_redis() else "degraded",
        "database": db_ok,
        "redis": ping_redis(),
    }
