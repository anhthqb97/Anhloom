# Task Execution Guide (SDD Step 3)

> Atomic implementation tasks. Each task ≈ 30–60 min.
> AI agents: read [AGENTS.md](../AGENTS.md) before executing.

---

## Task Format

Every task follows this SDD structure:

```markdown
- [ ] **P1-032** Task title
  - **Spec:** spec.md → Shared Components
  - **Plan:** plan.md §3.2 Buttons
  - **AC:** Acceptance criteria (what "done" means)
  - **Validate:** `npm run build` passes
```

| Field | Meaning |
|-------|---------|
| **ID** | `P{phase}-{number}` — unique, sequential |
| **Spec** | Requirement in `docs/sdd/spec.md` |
| **Plan** | Design/architecture in `docs/sdd/plan.md` |
| **AC** | Acceptance criteria — must all pass |
| **Validate** | Command or check to confirm |

---

## Execution Rules

1. Work **top to bottom** within a phase
2. Complete **one task** per session when possible
3. Pass **AC** before checking off
4. Run **Validate** step
5. Update **[PROGRESS.md](../PROGRESS.md)**
6. Do **not** skip to next phase until gate passes

---

## Commit Rules

**One task = one commit.** Format:

```
<type>(<scope>): <TASK-ID> <imperative summary>

- <what changed>
Validate: <command> ✓
```

Example: `chore(setup): P1-001 initialize next.js with app router`

See [docs/COMMITS.md](../docs/COMMITS.md) for full guide.

---

## Phase Files

| File | Phase | Spec focus | Weeks |
|------|-------|------------|-------|
| [PHASE-1.md](./PHASE-1.md) | Foundation | Homepage, CMS, **Docker FE** | W1–W4 |
| [PHASE-2.md](./PHASE-2.md) | Content Pages | Services, Portfolio, Blog, SEO | W5–W8 |
| [PHASE-3.md](./PHASE-3.md) | Polish | Animations, A11y, Performance | W9–W10 |
| [PHASE-4.md](./PHASE-4.md) | AI Features | Chatbot, Estimator, **Docker BE** | W11–W14 |
| [PHASE-5.md](./PHASE-5.md) | AWS Infrastructure | Terraform, ECS, staging + prod | W15–W18 |

---

## Traceability Matrix

| Task group | Spec reference | Plan reference |
|------------|----------------|----------------|
| 1.1 Setup | Tech Stack | §7.1 Frontend Structure |
| 1.2 Tokens | Color Palette, Typography | §2 Design System |
| 1.3 Primitives | Shared Components | §3 Component Library |
| 1.4–1.5 Layout | Shared Components | §3.1 Navigation, Footer |
| 1.6–1.10 Homepage | Homepage | §4.1 Homepage Layout |
| 1.11 About | About Page | §4.2 About Page |
| 1.12 Contact | Contact | §4.8 Contact |
| 1.14 CMS | CMS Requirements | §7.2 CMS Models |
| 1.16 Docker FE | Infrastructure | §7.3 Docker Architecture |
| 4.1 Backend & Docker | Infrastructure | §7.3 Docker Architecture |
| 4.x AI | AI Features | §8 AI Features UX |
| 5.1–5.2 TF Modules | Infrastructure | §7 Architecture, §7.3 |
| 5.3–5.6 Deploy | Production Deployment | §7 |
| 5.7 Observability | Security | §7 |
| 2.1–2.4 Services/Solutions | Services, Solutions | §4.3–4.4 |
| 2.5–2.6 Portfolio | Portfolio, Case Studies | §4.5 |
| 2.7 Blog | Blog | §4.6 Blog |
| 2.10 SEO | SEO Requirements | §9 (plan) |
| 3.x Polish | Animations, Accessibility | §5, §10 |

---

*SDD: Specify → Plan → **Tasks** → Implement → Validate*
