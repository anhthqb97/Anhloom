import re

from fastapi import APIRouter
from pydantic import BaseModel, Field

from app.services.embeddings import blog_index

router = APIRouter(prefix="/search", tags=["search"])


class SearchRequest(BaseModel):
    query: str = Field(min_length=1, max_length=200)
    limit: int = Field(default=5, ge=1, le=10)


class SearchResult(BaseModel):
    slug: str
    title: str
    excerpt: str
    category: str
    snippet: str
    score: float


def highlight_snippet(text: str, query: str) -> str:
    words = [word for word in query.split() if len(word) > 2]
    snippet = text
    for word in words:
        snippet = re.sub(
            rf"({re.escape(word)})",
            r"**\1**",
            snippet,
            flags=re.IGNORECASE,
        )
    return snippet[:220]


@router.post("", response_model=list[SearchResult])
async def semantic_search(payload: SearchRequest) -> list[SearchResult]:
    query_vector = await blog_index.embed_query(payload.query)
    matches = blog_index.search(query_vector, limit=payload.limit)

    return [
        SearchResult(
            slug=match["slug"],
            title=match["title"],
            excerpt=match["excerpt"],
            category=match["category"],
            snippet=highlight_snippet(match["excerpt"], payload.query),
            score=float(match.get("score", 0)),
        )
        for match in matches
    ]
