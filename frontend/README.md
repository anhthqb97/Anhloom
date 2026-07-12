# Frontend (monolith layout)

The Next.js app lives at the **repository root** (`package.json`, `src/`, `next.config.ts`).

Docker files are at the repo root for this monolith setup:

- `Dockerfile` — production multi-stage build
- `Dockerfile.dev` — development with hot reload
- `.dockerignore` — build context exclusions
- `docker-compose.dev.yml` — local frontend service on port 3000
