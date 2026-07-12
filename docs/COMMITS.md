# Commit Convention — Anhloom

> **Rule: one task ID = one commit**
> Each `P1-001` maps to exactly one git commit.

---

## Format

```
<type>(<scope>): <TASK-ID> <imperative summary>

- <what changed>
- <optional second bullet>
Validate: <command> ✓
```

### Subject parts

| Part | Required | Examples |
|------|----------|----------|
| **type** | yes | `chore`, `feat`, `fix`, `docs`, `style`, `ci` |
| **scope** | yes | `setup`, `tokens`, `ui`, `navbar`, `hero`, `cms`, `docker`, `api` |
| **TASK-ID** | yes | `P1-001`, `P2-081`, `P4-020` |
| **summary** | yes | imperative, lowercase, no trailing period |

---

## Type guide

| Type | When to use |
|------|-------------|
| `chore` | Setup, config, dependencies, folder structure |
| `feat` | New component, page, section, API endpoint |
| `fix` | Bug fix for a task |
| `style` | Design tokens, CSS, visual-only |
| `docs` | Documentation-only tasks |
| `ci` | GitHub Actions, Docker, deploy |
| `refactor` | Same-task restructure, no behavior change |

---

## Examples

### Phase 1 — Setup

```
chore(setup): P1-001 initialize next.js with app router

- run create-next-app with TypeScript
Validate: npm run dev ✓
```

```
chore(setup): P1-008 configure @ path alias in tsconfig

- add paths @/* -> ./src/*
Validate: npx tsc --noEmit ✓
```

### Phase 1 — UI

```
feat(ui): P1-032 add button base component with forwardref

- create components/ui/button.tsx
Validate: npm run build ✓
```

```
feat(hero): P1-064 add anhloom hero headline and subtext

- headline and subtext from plan.md §4.1
```

### Phase 1 — Docker

```
ci(docker): P1-141 add docker-compose dev frontend service

- frontend on port 3000 with Dockerfile.dev
Validate: docker compose -f docker-compose.dev.yml up frontend --build ✓
```

### Phase 4 — API

```
feat(api): P4-020 add fastapi chat endpoint with sse

- POST /chat streaming response
Validate: curl localhost:8000/chat ✓
```

---

## Do not

```
# Multiple tasks in one commit
feat(setup): P1-001 P1-002 P1-003 bootstrap project

# Missing task ID
feat: add navbar

# Task ID only in body (must be in subject)
chore: initialize next.js
```

---

## Workflow

```
Task P1-001 → implement → validate → commit → check off → PROGRESS.md
Task P1-002 → implement → validate → commit → check off → PROGRESS.md
```

---

*Also enforced in `docs/sdd/constitution.md` §9 and `.cursor/rules/commit-convention.mdc`*
