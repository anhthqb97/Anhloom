import math
import re
from collections import Counter

from openai import AsyncOpenAI

from app.config import settings
from app.data.blog_index import BLOG_POSTS

_word_pattern = re.compile(r"[a-z0-9]+")


def tokenize(text: str) -> list[str]:
    return _word_pattern.findall(text.lower())


def local_embedding(text: str) -> dict[str, float]:
    counts = Counter(tokenize(text))
    total = sum(counts.values()) or 1
    return {token: count / total for token, count in counts.items()}


def cosine_similarity(left: dict[str, float], right: dict[str, float]) -> float:
    shared = set(left) & set(right)
    if not shared:
        return 0.0
    numerator = sum(left[token] * right[token] for token in shared)
    left_norm = math.sqrt(sum(value * value for value in left.values()))
    right_norm = math.sqrt(sum(value * value for value in right.values()))
    if left_norm == 0 or right_norm == 0:
        return 0.0
    return numerator / (left_norm * right_norm)


class BlogEmbeddingIndex:
    def __init__(self) -> None:
        self._entries: list[dict] = []
        self._vectors: list[dict[str, float]] = []

    def build(self) -> None:
        self._entries = BLOG_POSTS
        self._vectors = [
            local_embedding(
                f"{post['title']} {post['excerpt']} {post['body']} {' '.join(post['tags'])}",
            )
            for post in BLOG_POSTS
        ]

    async def embed_query(self, query: str) -> dict[str, float]:
        if settings.openai_api_key:
            client = AsyncOpenAI(api_key=settings.openai_api_key)
            response = await client.embeddings.create(
                model="text-embedding-3-small",
                input=query,
            )
            values = response.data[0].embedding
            return {str(index): value for index, value in enumerate(values)}

        return local_embedding(query)

    def search(self, query_vector: dict[str, float], limit: int = 5) -> list[dict]:
        if settings.openai_api_key:
            return self._search_openai(query_vector, limit)

        scored = [
            (cosine_similarity(query_vector, vector), entry)
            for vector, entry in zip(self._vectors, self._entries, strict=True)
        ]
        scored.sort(key=lambda item: item[0], reverse=True)
        return [
            {**entry, "score": score}
            for score, entry in scored[:limit]
            if score > 0
        ]

    def _search_openai(self, query_vector: dict[str, float], limit: int) -> list[dict]:
        query_values = [query_vector[str(i)] for i in range(len(query_vector))]

        def cosine_dense(left: list[float], right: dict[str, float]) -> float:
            right_values = [right[str(i)] for i in range(len(right))]
            numerator = sum(a * b for a, b in zip(left, right_values, strict=True))
            left_norm = math.sqrt(sum(value * value for value in left))
            right_norm = math.sqrt(sum(value * value for value in right_values))
            if left_norm == 0 or right_norm == 0:
                return 0.0
            return numerator / (left_norm * right_norm)

        scored = [
            (cosine_dense(query_values, local_embedding(
                f"{post['title']} {post['excerpt']} {post['body']}",
            )), post)
            for post in self._entries
        ]
        scored.sort(key=lambda item: item[0], reverse=True)
        return [{**entry, "score": score} for score, entry in scored[:limit]]

    def recommendations(self, slug: str, limit: int = 3) -> list[dict]:
        try:
            index = next(i for i, post in enumerate(self._entries) if post["slug"] == slug)
        except StopIteration:
            return self._entries[:limit]

        source_vector = self._vectors[index]
        scored = [
            (cosine_similarity(source_vector, vector), entry)
            for offset, (vector, entry) in enumerate(
                zip(self._vectors, self._entries, strict=True),
            )
            if offset != index
        ]
        scored.sort(key=lambda item: item[0], reverse=True)
        return [{**entry, "score": score} for score, entry in scored[:limit]]


blog_index = BlogEmbeddingIndex()
