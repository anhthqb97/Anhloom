# Phase 1 — Foundation (SDD Step 3: Tasks)

> **SDD chain:** [constitution](../docs/sdd/constitution.md) → [spec](../docs/sdd/spec.md) → [plan](../docs/sdd/plan.md) → **tasks** → implement → validate
> **143 tasks** · ~30–60 min each · Progress: [PROGRESS.md](../PROGRESS.md)
> **AI:** Follow [AGENTS.md](../AGENTS.md)

| Field | Value |
|-------|-------|
| **Spec refs** | Tech Stack, Homepage, About, Contact, CMS Requirements |
| **Plan refs** | §2 Design System, §3 Components, §4.1–4.2, §7 Architecture |
| **Weeks** | W1–W4 |
| **Gate** | M1 — staging + CMS + CI |

**Goal:** Runnable Next.js app with design system, homepage, About/Contact, CMS, CI/CD.

**Progress:** `████████░░` **84%** (120 / 143)

---

### 1.1 Project Setup `12/12`

- [x] **P1-001** Run `create-next-app` with App Router + TypeScript
- [x] **P1-002** Enable TypeScript `strict` mode in `tsconfig.json`
- [x] **P1-003** Install Tailwind CSS v4
- [x] **P1-004** Configure PostCSS for Tailwind
- [x] **P1-005** Install ESLint (`next/core-web-vitals`)
- [x] **P1-006** Install Prettier + add `format` script
- [x] **P1-007** Add `.prettierrc` and `.editorconfig`
- [x] **P1-008** Configure `@/` path alias in `tsconfig.json`
- [x] **P1-009** Install Geist font package
- [x] **P1-010** Configure `next/font` — Geist Sans
- [x] **P1-011** Configure `next/font` — Geist Mono + Inter fallback
- [x] **P1-012** Create folder structure (`app`, `components`, `lib`, `hooks`, `types`, `styles`)

### 1.2 Design Tokens `19/19`

- [x] **P1-013** Add primary Indigo color scale (50–900) to Tailwind
- [x] **P1-014** Add secondary Cyan tokens
- [x] **P1-015** Add accent Purple tokens
- [x] **P1-016** Add neutral gray scale
- [x] **P1-017** Add semantic colors (success, warning, error, info)
- [x] **P1-018** Add light mode bg/surface/text CSS variables
- [x] **P1-019** Add dark mode bg/surface/text CSS variables
- [x] **P1-020** Add display font sizes (xl, lg, md)
- [x] **P1-021** Add heading font sizes (xl, lg, md)
- [x] **P1-022** Add body font sizes (lg, md, sm) + label
- [x] **P1-023** Add spacing scale (4px base unit)
- [x] **P1-024** Add border radius tokens (sm → 2xl, full)
- [x] **P1-025** Add shadow tokens (sm, md, lg, xl, glow)
- [x] **P1-026** Add gradient CSS variables (hero, subtle, glow)
- [x] **P1-027** Define 5 breakpoints (mobile → ultra)
- [x] **P1-028** Write `globals.css` base styles + CSS vars
- [x] **P1-029** Build `Container` component (max-width per breakpoint)
- [x] **P1-030** Build `Section` component (padding variants)
- [x] **P1-031** Add `cn()` utility (clsx + tailwind-merge)

### 1.3 UI Primitives `16/16`

- [x] **P1-032** `Button` base component with `forwardRef`
- [x] **P1-033** `Button` — primary variant
- [x] **P1-034** `Button` — secondary variant
- [x] **P1-035** `Button` — ghost variant
- [x] **P1-036** `Button` — accent variant
- [x] **P1-037** `Button` — size variants (sm, md, lg, xl)
- [x] **P1-038** `Button` — loading + disabled states
- [x] **P1-039** `Card` base wrapper
- [x] **P1-040** `CardHeader` sub-component
- [x] **P1-041** `CardBody` sub-component
- [x] **P1-042** `Badge` component
- [x] **P1-043** `Pill` component with tone variants
- [x] **P1-044** `Input` base component
- [x] **P1-045** `Textarea` component
- [x] **P1-046** `Select` component
- [x] **P1-047** `Checkbox` component

### 1.4 Layout — Navbar `10/10`

- [x] **P1-048** `Navbar` shell (logo slot + nav area)
- [x] **P1-049** Desktop nav links (Services, Solutions, Portfolio, Blog, Careers)
- [x] **P1-050** `useScrollPosition` hook for sticky behavior
- [x] **P1-051** Navbar transparent → blurred bg on scroll
- [x] **P1-052** `MegaMenu` dropdown container + animation
- [x] **P1-053** MegaMenu — Services column with 6 links
- [x] **P1-054** MegaMenu — Solutions column with 7 links
- [x] **P1-055** Mobile hamburger toggle button
- [x] **P1-056** Mobile `Drawer` overlay + slide-in panel
- [x] **P1-057** Mobile drawer nav links + CTA buttons

### 1.5 Layout — Footer `5/5`

- [x] **P1-058** Footer 4-column link groups (Company, Services, Resources, Legal)
- [x] **P1-059** Footer newsletter email input + submit
- [x] **P1-060** Footer social icon links
- [x] **P1-061** Footer copyright + bottom bar
- [x] **P1-062** Root `layout.tsx` — wrap pages with Navbar + Footer

### 1.6 Homepage — Hero `8/8`

- [x] **P1-063** Hero 2-column layout (text left, visual right)
- [x] **P1-064** Hero headline — *We Help Products Bloom — From MVP to Scale*
- [x] **P1-065** Hero subtext — Anhloom growth + services copy
- [x] **P1-066** Hero primary CTA — "Book a Meeting"
- [x] **P1-067** Hero secondary CTA — "View Portfolio"
- [x] **P1-068** Hero animated gradient background
- [x] **P1-069** Hero dashboard mockup image/placeholder
- [x] **P1-070** Hero responsive layout (stack on mobile)

### 1.7 Homepage — Stats & Trusted By `6/6`

- [x] **P1-071** `StatCard` component (label + value)
- [x] **P1-072** Stats bar section with 5 metrics
- [x] **P1-073** `LogoCarousel` component shell
- [x] **P1-074** Add 6 partner logos to carousel
- [x] **P1-075** Logo carousel CSS infinite scroll animation
- [x] **P1-076** Trusted By section heading + wrapper

### 1.8 Homepage — Services & Solutions `8/8`

- [x] **P1-077** `ServiceCard` (icon, title, description, link)
- [x] **P1-078** Services 3×2 grid layout
- [x] **P1-079** Populate 6 service cards with content
- [x] **P1-080** Services section heading + intro text
- [x] **P1-081** `SolutionCard` component
- [x] **P1-082** Solutions section layout (grid / horizontal scroll)
- [x] **P1-083** Populate 7 solution cards with content
- [x] **P1-084** Solutions section heading + intro text

### 1.9 Homepage — Process & Projects `9/9`

- [x] **P1-085** `Timeline` step component (number + title)
- [x] **P1-086** Process timeline — 8 steps vertical layout
- [x] **P1-087** Process section heading
- [x] **P1-088** `ProjectCard` (cover, category, tech, results)
- [x] **P1-089** Project filter tabs (AI, SaaS, FinTech, etc.)
- [x] **P1-090** Featured projects 3-column grid
- [x] **P1-091** Seed 6 sample project cards
- [x] **P1-092** Filter tab click → filter grid logic
- [x] **P1-093** Projects section heading

### 1.10 Homepage — Tech, Testimonials, CTA `10/10`

- [x] **P1-094** `TechCategory` group component
- [x] **P1-095** Tech stack grid — Frontend category
- [x] **P1-096** Tech stack grid — Backend, Cloud, Database, AI categories
- [x] **P1-097** Tech stack section heading
- [x] **P1-098** `TestimonialCard` (photo, rating, quote, company)
- [x] **P1-099** Testimonials carousel with 3+ slides
- [x] **P1-100** Testimonials section heading
- [x] **P1-101** `CTABanner` gradient section
- [x] **P1-102** CTA headline + "Schedule Consultation" + "Contact Sales" buttons
- [x] **P1-103** Assemble all sections in `app/page.tsx`

### 1.11 About Page `8/8`

- [x] **P1-104** About page route `app/about/page.tsx`
- [x] **P1-105** About hero with page title
- [x] **P1-106** Company story section (text + image)
- [x] **P1-107** Vision + Mission side-by-side cards
- [x] **P1-108** Core values 4-icon grid
- [x] **P1-109** Leadership `TeamCard` component
- [x] **P1-110** Leadership team 3-column grid
- [x] **P1-111** Company timeline vertical section

### 1.12 Contact Page `7/7`

- [x] **P1-112** Contact page route `app/contact/page.tsx`
- [x] **P1-113** Contact form — name, email, company fields
- [x] **P1-114** Contact form — service dropdown + message textarea
- [x] **P1-115** Contact form client-side validation
- [x] **P1-116** Contact info panel (email, phone, address)
- [x] **P1-117** Google Maps embed placeholder
- [x] **P1-118** Social links in contact panel

### 1.13 Privacy Page `2/2`

- [x] **P1-119** Privacy Policy page route with static content
- [x] **P1-120** Privacy page prose typography styling

### 1.14 Sanity CMS `0/11`

- [ ] **P1-121** Create Sanity project on sanity.io
- [ ] **P1-122** Install `@sanity/client` + `next-sanity` packages
- [ ] **P1-123** Sanity Studio config + local dev
- [ ] **P1-124** Schema — `siteSettings`
- [ ] **P1-125** Schema — `page`
- [ ] **P1-126** Schema — `teamMember`
- [ ] **P1-127** Schema — `service`
- [ ] **P1-128** Schema — `testimonial`
- [ ] **P1-129** Schema — `faq`
- [ ] **P1-130** `lib/sanity.ts` client + GROQ fetch helpers
- [ ] **P1-131** Connect Hero + About content to Sanity queries

### 1.15 CI/CD `0/4`

- [ ] **P1-132** GitHub Actions — lint + type-check on PR
- [ ] **P1-133** GitHub Actions — build on merge to main
- [ ] **P1-134** Staging deployment (Vercel or AWS)
- [ ] **P1-135** `.env.example` with all required variables

### 1.16 Docker — Frontend `0/8`

> **Spec:** Infrastructure · Docker · **Plan:** §7.3 Docker Architecture

- [ ] **P1-136** Create `frontend/` directory structure (or root if monolith)
- [ ] **P1-137** `frontend/Dockerfile` — multi-stage production (deps → build → run)
- [ ] **P1-138** `frontend/Dockerfile.dev` — dev image with hot reload
- [ ] **P1-139** `frontend/.dockerignore` — exclude node_modules, .next
- [ ] **P1-140** Enable `output: 'standalone'` in `next.config.ts`
- [ ] **P1-141** `docker-compose.dev.yml` — frontend service (port 3000)
- [ ] **P1-142** Verify `docker compose -f docker-compose.dev.yml up frontend --build`
- [ ] **P1-143** `backend/` placeholder + stub `backend/Dockerfile` for Phase 4

### Phase 1 Gate `0/8` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) Homepage, CMS, Deliverables.

- [ ] Build passes (`npm run build`) with zero errors
- [ ] Homepage all 10 sections render on mobile + desktop
- [ ] Navbar mega menu + mobile drawer work
- [ ] About + Contact pages responsive
- [ ] Sanity Studio accessible and editable
- [ ] CI pipeline runs on every PR
- [ ] Staging URL accessible
- [ ] Docker frontend builds and runs (`docker compose -f docker-compose.dev.yml up frontend`)

## Weekly Plan (Phase 1)

| Week | Groups | Tasks |
|------|--------|-------|
| **W1** | 1.1, 1.2, 1.3 | 47 |
| **W2** | 1.4, 1.5, 1.6, 1.7, 1.8 | 31 |
| **W3** | 1.9, 1.10, 1.11, 1.12, 1.13 | 36 |
| **W4** | 1.14, 1.15, 1.16, Gate | 30 |

---

*SDD: [README](../docs/sdd/README.md) · Next: [PHASE-2.md](./PHASE-2.md)*
