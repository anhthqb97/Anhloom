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

**Progress:** `████░░░░░░` **47%** (25 / 53)

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

### 4.3 AI Cost Estimator `0/10`

- [ ] **P4-026** Estimator route or modal trigger
- [ ] **P4-027** Step 1 — project type selection
- [ ] **P4-028** Step 2 — scope + feature checklist
- [ ] **P4-029** Step 3 — timeline + team size
- [ ] **P4-030** Step 4 — review answers summary
- [ ] **P4-031** FastAPI `/estimate` endpoint
- [ ] **P4-032** AI prompt for cost breakdown generation
- [ ] **P4-033** Estimate results display (cost range + breakdown)
- [ ] **P4-034** PDF export of estimate
- [ ] **P4-035** Lead capture form on estimate completion

### 4.4 AI Search `0/6`

- [ ] **P4-036** Global search dialog (Cmd+K trigger)
- [ ] **P4-037** Search input with debounce
- [ ] **P4-038** Generate embeddings for blog posts
- [ ] **P4-039** FastAPI `/search` semantic search endpoint
- [ ] **P4-040** Search results list with highlighted snippets
- [ ] **P4-041** Blog page search bar using same endpoint

### 4.5 AI Blog Recommendations `0/4`

- [ ] **P4-042** Compute similarity between blog post embeddings
- [ ] **P4-043** FastAPI `/recommendations` endpoint
- [ ] **P4-044** "Related articles" section on blog article page
- [ ] **P4-045** Display 3 recommended posts with thumbnails

### 4.6 AI FAQ Assistant `0/4`

- [ ] **P4-046** FAQ expand + "Ask AI" button on service pages
- [ ] **P4-047** Inline AI response below FAQ question
- [ ] **P4-048** FastAPI `/faq` endpoint with service context
- [ ] **P4-049** Follow-up question input under AI answer

### 4.7 AI Requirement Assistant `0/4`

- [ ] **P4-050** Chat sidebar on service detail pages
- [ ] **P4-051** Guided prompts ("What problem are you solving?")
- [ ] **P4-052** FastAPI `/requirements` conversation endpoint
- [ ] **P4-053** Export gathered requirements as PDF/Markdown

### Phase 4 Gate `0/8` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) AI Features, Security.

- [ ] Chatbot responds in < 3s with relevant answers
- [ ] Cost estimator works for 5 test scenarios
- [ ] AI search returns semantically relevant results
- [ ] Blog recommendations show on article pages
- [ ] FAQ assistant answers service-specific questions
- [ ] All endpoints rate-limited + input-sanitized
- [ ] Full stack runs via `docker compose -f docker-compose.dev.yml up --build`
- [ ] API deployed on AWS with Docker

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
