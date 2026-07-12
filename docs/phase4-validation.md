# Phase 4 Validation (M4 Gate)

Validated on: 2026-07-12  
Environment: `docker compose -f docker-compose.dev.yml up --build`

## Automated checks

| Gate item | Result | Notes |
|-----------|--------|-------|
| Full Docker stack | Pass | frontend, backend, postgres, redis healthy |
| API key auth | Pass | Missing key returns 401 |
| Rate limiting | Pass | 65 rapid requests → 50×200, 15×429 |
| Input sanitization | Pass | Script tags stripped before FAQ handler |
| Cost estimator (5 scenarios) | Pass | MVP, SaaS, AI, Mobile, Enterprise all return ranges |
| AI search | Pass | `kubernetes cost` returns relevant Cloud article |
| Blog recommendations | Pass | RAG article returns 3 related posts |
| FAQ assistant | Pass | Service-specific fallback answer returned |
| Requirement assistant | Pass | Reply + markdown export returned |
| Frontend lint (container) | Pass | `npm run lint` clean |
| Frontend `/api/*` proxies | Pass | After `INTERNAL_API_URL=http://backend:8000` fix |

## Manual checks (browser)

- [ ] Chatbot responds in < 3s with relevant answers
- [ ] Cost estimator wizard UI on `/estimate`
- [ ] Cmd+K search dialog
- [ ] Related articles on blog detail pages
- [ ] FAQ Ask AI on service pages
- [ ] Requirements sidebar on service pages

## Not validated (requires infra)

- [ ] API deployed on AWS with Docker

## Commands

```bash
# Start stack
docker compose -f docker-compose.dev.yml up --build

# Backend health
curl http://localhost:8000/health

# Search via frontend proxy
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"query":"nextjs marketing","limit":2}'
```

## Fix applied during validation

Server-side Next.js API routes now use `INTERNAL_API_URL` (Docker: `http://backend:8000`) instead of `NEXT_PUBLIC_API_URL` (`http://localhost:8000`), which fails inside the frontend container.
