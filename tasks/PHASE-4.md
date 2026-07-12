# Phase 4 — AI Features (SDD Step 3: Tasks)

> **SDD chain:** [constitution](../docs/sdd/constitution.md) → [spec](../docs/sdd/spec.md) → [plan](../docs/sdd/plan.md) → **tasks** → implement → validate
> **53 tasks** · ~30–60 min each · Progress: [PROGRESS.md](../PROGRESS.md)
> **AI:** Follow [AGENTS.md](../AGENTS.md)

| Field | Value |
|-------|-------|
| **Spec refs** | AI Features, Future Roadmap Phase 2–4 |
| **Plan refs** | §8 AI Features UX, §7.3 Docker, FastAPI |
| **Weeks** | W11–W14 |
| **Gate** | M4 — all AI features in production |

**Goal:** AI chatbot, cost estimator, search, recommendations in production.

**Progress:** `██████████` **100%** (53 / 53)

---

### 4.1 FastAPI Backend & Docker `15/15`

> **Spec:** Infrastructure · Docker · **Plan:** §7.3 Docker Architecture

- [x] **P4-001** Initialize FastAPI project in `backend/`
- [x] **P4-002** `backend/Dockerfile` — production multi-stage
- [x] **P4-003** `backend/Dockerfile.dev` — dev with hot reload + volume mount
- [x] **P4-004** `backend/.dockerignore`
- [x] **P4-005** Update `docker-compose.dev.yml` — add backend + postgres + redis
- [x] **P4-006** `docker-compose.yml` — production stack (FE + BE + PG + Redis)
- [x] **P4-007** `.env.docker.example` — all compose environment variables
- [x] **P4-008** Health checks for all services in compose
- [x] **P4-009** PostgreSQL connection + base models
- [x] **P4-010** Redis connection for caching
- [x] **P4-011** OpenAI API client wrapper
- [x] **P4-012** Claude API client wrapper (fallback)
- [x] **P4-013** Rate limiting middleware (per IP)
- [x] **P4-014** API key authentication for frontend
- [x] **P4-015** Input sanitization + validation middleware

### 4.2 AI Chatbot `10/10`

- [x] **P4-016** Chatbot floating button (bottom-right, purple)
- [x] **P4-017** Chat panel slide-up UI
- [x] **P4-018** Message bubble components (user + assistant)
- [x] **P4-019** Chat input + send button
- [x] **P4-020** FastAPI `/chat` endpoint with streaming SSE
- [x] **P4-021** System prompt with company services + FAQ context
- [x] **P4-022** Frontend SSE consumer — render streaming text
- [x] **P4-023** Chat session ID + history in PostgreSQL
- [x] **P4-024** Load previous messages on panel reopen
- [x] **P4-025** Chatbot responsive layout (full-screen on mobile)

### 4.3 AI Cost Estimator `10/10`

- [x] **P4-026** Estimator route or modal trigger
- [x] **P4-027** Step 1 — project type selection
- [x] **P4-028** Step 2 — scope + feature checklist
- [x] **P4-029** Step 3 — timeline + team size
- [x] **P4-030** Step 4 — review answers summary
- [x] **P4-031** FastAPI `/estimate` endpoint
- [x] **P4-032** AI prompt for cost breakdown generation
- [x] **P4-033** Estimate results display (cost range + breakdown)
- [x] **P4-034** PDF export of estimate
- [x] **P4-035** Lead capture form on estimate completion

### 4.4 AI Search `6/6`

- [x] **P4-036** Global search dialog (Cmd+K trigger)
- [x] **P4-037** Search input with debounce
- [x] **P4-038** Generate embeddings for blog posts
- [x] **P4-039** FastAPI `/search` semantic search endpoint
- [x] **P4-040** Search results list with highlighted snippets
- [x] **P4-041** Blog page search bar using same endpoint

### 4.5 AI Blog Recommendations `4/4`

- [x] **P4-042** Compute similarity between blog post embeddings
- [x] **P4-043** FastAPI `/recommendations` endpoint
- [x] **P4-044** "Related articles" section on blog article page
- [x] **P4-045** Display 3 recommended posts with thumbnails

### 4.6 AI FAQ Assistant `4/4`

- [x] **P4-046** FAQ expand + "Ask AI" button on service pages
- [x] **P4-047** Inline AI response below FAQ question
- [x] **P4-048** FastAPI `/faq` endpoint with service context
- [x] **P4-049** Follow-up question input under AI answer

### 4.7 AI Requirement Assistant `4/4`

- [x] **P4-050** Chat sidebar on service detail pages
- [x] **P4-051** Guided prompts ("What problem are you solving?")
- [x] **P4-052** FastAPI `/requirements` conversation endpoint
- [x] **P4-053** Export gathered requirements as PDF/Markdown

### Phase 4 Gate `6/8` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) AI Features, Security.
> Results: [phase4-validation.md](../docs/phase4-validation.md)

- [x] Chatbot responds in < 3s with relevant answers
- [x] Cost estimator works for 5 test scenarios
- [x] AI search returns semantically relevant results
- [x] Blog recommendations show on article pages
- [x] FAQ assistant answers service-specific questions
- [x] All endpoints rate-limited + input-sanitized
- [x] Full stack runs via `docker compose -f docker-compose.dev.yml up --build`
- [ ] API deployed on AWS with Docker — tracked in [PHASE-5.md](./PHASE-5.md) (M5 gate)

---

## Weekly Plan (Phase 4)

| Week | Groups | Tasks |
|------|--------|-------|
| **W11** | 4.1, 4.2 | 25 |
| **W12** | 4.3 | 10 |
| **W13** | 4.4, 4.5, 4.6 | 14 |
| **W14** | 4.7, Gate | 12 |

---

*SDD: [README](../docs/sdd/README.md) · Prev: [PHASE-3.md](./PHASE-3.md)*
