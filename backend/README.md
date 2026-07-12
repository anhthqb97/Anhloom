# Anhloom Backend

FastAPI services for AI features (chatbot, estimator, search, recommendations).

## Local development

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Docker

```bash
docker compose -f docker-compose.dev.yml up --build
```

Health check: `GET http://localhost:8000/health`

## Environment

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis connection string |
| `INTERNAL_API_KEY` | Frontend-to-backend API key |
| `OPENAI_API_KEY` | Primary LLM provider |
| `ANTHROPIC_API_KEY` | Fallback LLM provider |
