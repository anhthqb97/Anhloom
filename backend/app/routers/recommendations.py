from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.embeddings import blog_index

router = APIRouter(prefix="/recommendations", tags=["recommendations"])


class RecommendationResult(BaseModel):
    slug: str
    title: str
    excerpt: str
    category: str
    score: float


class RecommendationRequest(BaseModel):
    slug: str = Field(min_length=1)
    limit: int = Field(default=3, ge=1, le=6)


@router.post("", response_model=list[RecommendationResult])
def blog_recommendations(payload: RecommendationRequest) -> list[RecommendationResult]:
    matches = blog_index.recommendations(payload.slug, limit=payload.limit)
    return [
        RecommendationResult(
            slug=match["slug"],
            title=match["title"],
            excerpt=match["excerpt"],
            category=match["category"],
            score=float(match.get("score", 0)),
        )
        for match in matches
    ]
