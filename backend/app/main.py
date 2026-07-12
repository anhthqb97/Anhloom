from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import init_db
from app.middleware.api_key import ApiKeyMiddleware
from app.middleware.rate_limit import RateLimitMiddleware
from app.middleware.sanitization import SanitizationMiddleware
from app.routers.chat import router as chat_router
from app.routers.estimate import router as estimate_router
from app.routers.faq import router as faq_router
from app.routers.health import router as health_router
from app.routers.recommendations import router as recommendations_router
from app.routers.requirements import router as requirements_router
from app.routers.search import router as search_router
from app.services.embeddings import blog_index


@asynccontextmanager
async def lifespan(_: FastAPI):
    blog_index.build()
    init_db()
    yield


app = FastAPI(title=settings.app_name, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.cors_origins.split(",")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(SanitizationMiddleware)
app.add_middleware(ApiKeyMiddleware)
app.add_middleware(RateLimitMiddleware)

app.include_router(health_router)
app.include_router(chat_router)
app.include_router(estimate_router)
app.include_router(search_router)
app.include_router(recommendations_router)
app.include_router(faq_router)
app.include_router(requirements_router)


@app.get("/")
def root() -> dict[str, str]:
    return {"service": settings.app_name, "status": "running"}
