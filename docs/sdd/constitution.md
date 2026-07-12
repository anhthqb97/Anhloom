# Constitution — Project Guardrails

> Non-negotiable principles for humans and AI agents.
> All implementation must comply. Deviations require explicit approval.

---

## 1. Mission

Build the **Anhloom** website — a premium, high-converting company site serving as profile, sales platform, portfolio, lead generation, recruitment portal, and technical blog.

**North star:** *Where ideas bloom into products.*

---

## 2. Spec-Driven Development Rules

| Rule | Description |
|------|-------------|
| **Spec is source of truth** | `spec.md` defines *what* and *why*. Code must trace to spec. |
| **Plan before code** | Read `plan.md` before implementing. No architecture changes without updating plan. |
| **Task atomicity** | One task = one shippable unit (~30–60 min). Complete AC before marking done. |
| **Validate against spec** | Every phase gate must pass before next phase starts. |
| **Living documents** | Update spec/plan when requirements or design change — not just code. |

---

## 3. Tech Stack (Locked)

### Frontend (required)

- Next.js 15+ (App Router)
- React 19+
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion (animations)

### CMS

- Sanity (primary)

### Backend (Phase 4 only)

- FastAPI + PostgreSQL + Redis

### Infrastructure

- Vercel or AWS (staging + production)
- GitHub Actions (CI/CD)
- **Docker** — frontend + backend (required for local dev and production)

**Do not substitute** frameworks without updating `plan.md` and getting approval.

---

## 4. Code Standards

| Area | Rule |
|------|------|
| **Language** | TypeScript strict — no `any` unless justified |
| **Components** | Functional components, `forwardRef` for primitives |
| **Styling** | Tailwind tokens from plan — no hardcoded hex in components |
| **Imports** | Use `@/` path alias |
| **Files** | Match structure in `plan.md` §7.1 |
| **Naming** | PascalCase components, camelCase utilities, kebab-case routes |
| **Scope** | Minimal diff — no unrelated changes per task |

---

## 5. Design Standards

| Area | Rule |
|------|------|
| **Style** | Modern, minimal, premium — inspired by Vercel, Stripe, Linear |
| **Colors** | Indigo primary, Cyan secondary, Purple accent |
| **Fonts** | Geist → Inter → system fallback |
| **Responsive** | Mobile-first, 5 breakpoints |
| **Dark mode** | Required by Phase 3 gate |
| **Motion** | Purposeful only; respect `prefers-reduced-motion` |

---

## 6. Quality Gates

| Metric | Target | Phase |
|--------|--------|-------|
| Lighthouse Performance | ≥ 95 | 3 |
| Lighthouse Accessibility | ≥ 95 | 3 |
| Lighthouse SEO | ≥ 95 | 3 |
| FCP | < 1.5s | 3 |
| LCP | < 2.5s | 3 |
| WCAG | 2.2 AA | 3 |
| Build | Zero errors | Every PR |
| TypeScript | Zero errors | Every PR |

---

## 7. Security & Compliance

- HTTPS only in production
- CSP headers (Phase 3)
- Form validation client + server
- reCAPTCHA on contact form (Phase 3)
- Rate limiting on AI API (Phase 4)
- Input sanitization on all API endpoints
- Cookie consent before analytics (GDPR)

---

## 8. AI Agent Constraints

When implementing as an AI agent:

1. **Read order:** `constitution.md` → `spec.md` → `plan.md` → active `tasks/PHASE-*.md`
2. **One task at a time** — finish AC + validate before next task
3. **No scope creep** — implement only what the task specifies
4. **Update progress** — check off task, update `PROGRESS.md`
5. **No secrets** — never commit `.env`, API keys, credentials
6. **No destructive git** — no force push, no hard reset unless asked
7. **Match conventions** — read surrounding code before writing new code
8. **Tests** — add tests only when task AC requires them

---

## 9. Git & Commit Rules

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- One logical change per commit
- Reference task ID in commit body: `P1-032: add Button primary variant`
- No commit unless user requests or task AC includes it

---

## 10. Phase Gates (Sequential)

```
Phase 1 Gate → Phase 2 Gate → Phase 3 Gate → Phase 4 Gate → Launch
```

**Do not start Phase N+1 until Phase N gate passes.**

---

*Version 1.0 · Part of SDD workflow — see [README.md](./README.md)*
