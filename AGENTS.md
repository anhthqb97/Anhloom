# AI Agent Playbook

> Expert AI execution guide for this repository.
> Follow this document on every implementation session.

---

## Project Type

Premium **Anhloom** marketing website — Next.js + Sanity CMS + FastAPI AI features.

**Methodology:** Spec-Driven Development (SDD)

---

## Read Order (Every Session)

```
1. docs/sdd/constitution.md   — Guardrails (always)
2. docs/sdd/spec.md           — Relevant requirement section
3. docs/sdd/plan.md           — Relevant design/architecture section
4. tasks/PHASE-N.md           — Next unchecked task
5. PROGRESS.md                — Current state
```

Do **not** skip to code without reading the spec chain.

---

## Task Execution Loop

```
┌─────────────────────────────────────────┐
│ 1. FIND next `- [ ]` task in PHASE file │
│ 2. READ spec + plan refs for that task  │
│ 3. IMPLEMENT minimal correct diff       │
│ 4. VALIDATE acceptance criteria         │
│ 5. CHECK OFF task `- [x]`               │
│ 6. UPDATE PROGRESS.md counters          │
│ 7. REPEAT or stop at phase boundary     │
└─────────────────────────────────────────┘
```

### Per-task checklist

- [ ] Task ID identified (e.g. `P1-032`)
- [ ] Spec requirement understood
- [ ] Plan section consulted (design tokens, components, routes)
- [ ] Implementation matches existing code conventions
- [ ] Acceptance criteria met
- [ ] No unrelated files changed
- [ ] Task checked off in `tasks/PHASE-N.md`
- [ ] `PROGRESS.md` updated

---

## Phase Boundaries

| Phase | File | Gate before next |
|-------|------|------------------|
| 1 | `tasks/PHASE-1.md` | M1: staging + CMS + CI |
| 2 | `tasks/PHASE-2.md` | M2: full sitemap + SEO |
| 3 | `tasks/PHASE-3.md` | M3: Lighthouse ≥ 95 + WCAG |
| 4 | `tasks/PHASE-4.md` | M4: AI features on AWS |

**Stop and report** if a phase gate fails — do not proceed to next phase.

---

## Implementation Rules

### Do

- Use Tailwind design tokens from `plan.md` §2
- Follow folder structure from `plan.md` §7.1
- Use `@/` imports
- TypeScript strict — explicit types on exports
- Mobile-first responsive design
- Semantic HTML for SEO
- `next/image` for images (Phase 3+)
- Framer Motion for animations (Phase 3+)

### Do not

- Add dependencies not in constitution tech stack
- Hardcode colors — use CSS variables / Tailwind tokens
- Create commits unless user asks
- Modify spec/plan without user approval
- Implement multiple unrelated tasks in one diff
- Add tests unless task AC requires them
- Use `any` type without justification

---

## Key Spec References

| Feature | spec.md section | plan.md section |
|---------|-----------------|-----------------|
| Homepage | Homepage | §4.1 |
| Design system | Color Palette, Typography | §2 |
| Components | Shared Components | §3 |
| Services | Services Page | §4.3 |
| CMS | CMS Requirements | §7.2 |
| SEO | SEO Requirements | §9 |
| AI features | AI Features | §8 |
| Animations | Animations | §5 |

---

## Validation Commands

```bash
# Frontend (Phase 1+)
npm run lint
npm run build
npx tsc --noEmit

# Docker — frontend only (Phase 1)
docker compose -f docker-compose.dev.yml up frontend --build

# Docker — full stack (Phase 4)
docker compose -f docker-compose.dev.yml up --build

# Health check
curl http://localhost:3000        # frontend
curl http://localhost:8000/health # backend

# Phase 3 gate
npx lighthouse <url> --view

# Tear down
docker compose -f docker-compose.dev.yml down -v
```

---

## Progress Updates

After completing tasks, update `PROGRESS.md`:

1. Increment **Done** count for the phase
2. Update group row if entire group finished
3. Recalculate progress bar
4. Add row to **Progress Update Log**

## Commit Convention

**One task = one commit.** Each `P1-001` style ID gets exactly one commit.

### Format

```
<type>(<scope>): <TASK-ID> <imperative summary>

- <bullet: what changed>
Validate: <command> ✓
```

### Quick examples

| Task | Commit subject |
|------|----------------|
| P1-001 | `chore(setup): P1-001 initialize next.js with app router` |
| P1-032 | `feat(ui): P1-032 add button base component` |
| P1-064 | `feat(hero): P1-064 add anhloom hero headline and subtext` |
| P1-141 | `ci(docker): P1-141 add docker-compose dev frontend service` |
| P4-020 | `feat(api): P4-020 add fastapi chat endpoint with sse` |

### Types

`chore` setup · `feat` component/page/API · `fix` bug · `style` tokens/CSS · `docs` docs-only · `ci` pipeline/Docker

Full rules: [docs/COMMITS.md](./docs/COMMITS.md) · `.cursor/rules/commit-convention.mdc`

---

## Prompt Templates

### Start a task

```
Follow AGENTS.md. Implement task P1-032 from tasks/PHASE-1.md.
Read constitution, relevant spec.md and plan.md sections first.
Validate AC before marking done. Update PROGRESS.md.
```

### Start a phase

```
Follow AGENTS.md. Begin Phase 1 from tasks/PHASE-1.md.
Start at first unchecked task. Work sequentially.
```

### Validate a gate

```
Follow AGENTS.md. Run Phase 1 gate checklist in tasks/PHASE-1.md.
Report pass/fail for each criterion.
```

---

## Escalation

Stop and ask the user when:

- Spec is ambiguous for the current task
- Plan conflicts with spec
- Task requires dependency not yet implemented
- Phase gate criterion cannot be met
- Tech stack change needed

---

*See [docs/sdd/README.md](./docs/sdd/README.md) for full SDD workflow.*
