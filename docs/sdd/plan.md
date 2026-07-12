# Plan — Anhloom Website Design & Architecture

> **SDD Step 2: Plan** — How to build. Derived from [spec.md](./spec.md).
> Guardrails: [constitution.md](./constitution.md) · Tasks: [tasks/](../../tasks/)

---

## 0. Brand — Anhloom

| Asset | Value |
|-------|-------|
| **Wordmark** | Anhloom |
| **Tagline** | Grow your product with us |
| **North star** | *Where ideas bloom into products.* |
| **Primary CTA** | Book a Meeting |
| **Secondary CTA** | View Portfolio |
| **Logo note** | Minimal wordmark; optional bloom/petal icon mark |

---

## 1. Design Vision

### Brand Positioning

| Attribute | Expression |
|-----------|------------|
| **Tone** | Confident, technical, approachable |
| **Visual** | Minimal, premium, high-contrast |
| **Motion** | Purposeful, never decorative-only |
| **Inspiration** | OpenAI clarity · Vercel precision · Stripe trust · Linear speed · Raycast polish |

### Design North Star

> *"Where ideas bloom into products."*

Every page should answer three questions within 5 seconds:
1. What do you build?
2. Why should I trust you?
3. What should I do next?

---

## 2. Design System

### 2.1 Color Tokens

```css
/* Light Mode (default) */
--color-primary-50:   #EEF2FF;
--color-primary-100:  #E0E7FF;
--color-primary-200:  #C7D2FE;
--color-primary-300:  #A5B4FC;
--color-primary-400:  #818CF8;
--color-primary-500:  #6366F1;   /* Primary — Indigo */
--color-primary-600:  #4F46E5;
--color-primary-700:  #4338CA;
--color-primary-800:  #3730A3;
--color-primary-900:  #312E81;

--color-secondary-500: #06B6D4;  /* Secondary — Cyan */
--color-accent-500:    #8B5CF6;  /* Accent — Purple */

--color-bg:            #FFFFFF;
--color-bg-subtle:     #F8FAFC;
--color-bg-muted:      #F1F5F9;
--color-surface:       #FFFFFF;
--color-surface-raised:#FFFFFF;

--color-text-primary:  #0F172A;
--color-text-secondary:#475569;
--color-text-muted:    #94A3B8;
--color-text-inverse:  #F8FAFC;

--color-border:        #E2E8F0;
--color-border-strong: #CBD5E1;

--color-success:       #10B981;
--color-warning:       #F59E0B;
--color-error:         #EF4444;
--color-info:          #3B82F6;
```

```css
/* Dark Mode */
--color-bg:            #0A0A0B;   /* Near Black */
--color-bg-subtle:     #111113;
--color-bg-muted:      #1A1A1D;
--color-surface:       #141416;
--color-surface-raised:#1C1C1F;

--color-text-primary:  #F1F5F9;
--color-text-secondary:#94A3B8;
--color-text-muted:    #64748B;

--color-border:        #27272A;
--color-border-strong: #3F3F46;
```

#### Semantic Usage

| Token | Usage |
|-------|-------|
| `primary-500` | CTAs, links, active states, focus rings |
| `secondary-500` | Badges, highlights, gradient endpoints |
| `accent-500` | AI features, premium accents, hover glows |
| `bg-subtle` | Section alternation, card backgrounds |
| `text-secondary` | Body copy, descriptions |

#### Gradient System

```css
/* Hero & CTA backgrounds */
--gradient-hero: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%);
--gradient-subtle: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-subtle) 100%);
--gradient-glow: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%);
```

---

### 2.2 Typography

**Font Stack**

```css
--font-sans: 'Geist', 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
--font-mono: 'Geist Mono', 'IBM Plex Mono', monospace;
```

| Scale | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display-xl` | 72px / 4.5rem | 1.05 | 700 | Hero headlines (desktop) |
| `display-lg` | 56px / 3.5rem | 1.1 | 700 | Hero headlines (tablet) |
| `display-md` | 40px / 2.5rem | 1.15 | 700 | Page titles |
| `heading-xl` | 32px / 2rem | 1.2 | 600 | Section headings |
| `heading-lg` | 24px / 1.5rem | 1.3 | 600 | Card titles |
| `heading-md` | 20px / 1.25rem | 1.4 | 600 | Subsection titles |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `body-md` | 16px / 1rem | 1.6 | 400 | Body text |
| `body-sm` | 14px / 0.875rem | 1.5 | 400 | Captions, meta |
| `label` | 12px / 0.75rem | 1.4 | 500 | Labels, badges |

**Rules**
- Max line width: `65ch` for body copy
- Letter-spacing: `-0.02em` on display sizes
- Headings use `font-feature-settings: "ss01"` when available (Geist)

---

### 2.3 Spacing Scale

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon gaps |
| `space-3` | 12px | Inline spacing |
| `space-4` | 16px | Card padding (mobile) |
| `space-6` | 24px | Card padding (desktop) |
| `space-8` | 32px | Section inner padding |
| `space-12` | 48px | Component gaps |
| `space-16` | 64px | Section gaps (mobile) |
| `space-24` | 96px | Section gaps (desktop) |
| `space-32` | 128px | Hero padding |

---

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Buttons, inputs |
| `radius-md` | 8px | Cards, badges |
| `radius-lg` | 12px | Large cards |
| `radius-xl` | 16px | Modals, hero cards |
| `radius-2xl` | 24px | Feature sections |
| `radius-full` | 9999px | Pills, avatars |

---

### 2.5 Shadows & Elevation

```css
--shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
--shadow-md:  0 4px 12px rgba(0,0,0,0.08);
--shadow-lg:  0 8px 24px rgba(0,0,0,0.12);
--shadow-xl:  0 16px 48px rgba(0,0,0,0.16);
--shadow-glow: 0 0 40px rgba(99,102,241,0.2);
```

Dark mode: reduce opacity by 50%, add subtle border `1px solid var(--color-border)`.

---

### 2.6 Breakpoints

| Name | Min Width | Container Max |
|------|-----------|---------------|
| `mobile` | 0 | 100% - 32px padding |
| `tablet` | 640px | 600px |
| `laptop` | 1024px | 960px |
| `desktop` | 1280px | 1200px |
| `ultra` | 1536px | 1400px |

---

## 3. Component Library

### 3.1 Navigation

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]   Services ▾  Solutions ▾  Portfolio  Blog  Careers     │
│                                          [Contact] [Book Meeting]│
└─────────────────────────────────────────────────────────────────┘
```

**Specs**
- Height: 64px (desktop), 56px (mobile)
- Sticky with backdrop-blur (`blur(12px)`) on scroll
- Mega menu: 3-column grid, 720px wide, fade + slide animation (200ms)
- Mobile: full-screen drawer from right, 280ms ease-out

**States**
- Default: transparent bg on hero pages
- Scrolled: `bg-surface/80` + bottom border
- Active link: `primary-500` underline animation

---

### 3.2 Buttons

| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| **Primary** | `primary-600` | white | none | Main CTAs |
| **Secondary** | transparent | `primary-600` | `primary-600` | Secondary actions |
| **Ghost** | transparent | `text-secondary` | none | Tertiary |
| **Accent** | `accent-500` | white | none | AI features |

**Sizes**: `sm` (32px), `md` (40px), `lg` (48px), `xl` (56px)

**Interaction**
- Hover: brightness +4%, `shadow-md`
- Active: scale(0.98)
- Focus: 2px `primary-400` ring, 2px offset
- Loading: spinner replaces label, width preserved

---

### 3.3 Cards

#### Service Card
```
┌──────────────────────────┐
│  [Icon]                  │
│  AI Engineering          │
│  Build intelligent...    │
│  Learn More →            │
└──────────────────────────┘
```
- Padding: 24px
- Hover: translateY(-4px), `shadow-lg`, border `primary-200`
- Icon: 40×40, `primary-100` bg circle

#### Project Card
```
┌──────────────────────────┐
│  [Cover Image 16:9]      │
│  ┌─────┐                 │
│  │ AI  │  FinTech        │
│  └─────┘                 │
│  Project Title           │
│  React · FastAPI · AWS   │
│  +40% conversion         │
└──────────────────────────┘
```

#### Testimonial Card
- Avatar 48px, 5-star rating, quote in `body-lg` italic
- Company logo 24px height, muted

#### Pricing Card
- Highlighted tier: `primary-500` top border 4px, `shadow-glow`
- Feature list with checkmarks (`success` color)

---

### 3.4 Form Elements

| Element | Height | Radius | Notes |
|---------|--------|--------|-------|
| Input | 44px | `radius-sm` | Floating label optional |
| Textarea | min 120px | `radius-sm` | Auto-resize |
| Select | 44px | `radius-sm` | Custom chevron |
| Checkbox | 20px | 4px | `primary-500` when checked |

**Validation**: inline error below field, `error` color, shake animation (300ms)

---

### 3.5 Shared Components Map

```
components/
├── layout/
│   ├── Navbar.tsx
│   ├── MegaMenu.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   └── Section.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Drawer.tsx
│   ├── Toast.tsx
│   ├── Accordion.tsx
│   ├── Breadcrumb.tsx
│   └── Pagination.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── LogoCarousel.tsx
│   ├── ServicesGrid.tsx
│   ├── ProcessTimeline.tsx
│   ├── ProjectGrid.tsx
│   ├── TechStack.tsx
│   ├── Testimonials.tsx
│   └── CTA.tsx
└── animations/
    ├── FadeIn.tsx
    ├── SlideUp.tsx
    ├── Counter.tsx
    ├── ParallaxLayer.tsx
    └── GradientBg.tsx
```

---

## 4. Page Designs

### 4.1 Homepage Layout

```
┌─────────────────────────────────────────────────────────────┐
│ NAVBAR (sticky)                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │ Headline (display-xl)   │  │ Dashboard mockup        │  │
│  │ Subtext (body-lg)       │  │ Floating cards          │  │
│  │ [Book Meeting] [Portfolio]│ │ AI visualization       │  │
│  └─────────────────────────┘  └─────────────────────────┘  │
│  Animated gradient background                               │
├─────────────────────────────────────────────────────────────┤
│ STATS BAR — animated counters                               │
│  150+ Projects │ 8+ Years │ 40+ Engineers │ 98% │ 12 Countries│
├─────────────────────────────────────────────────────────────┤
│ TRUSTED BY — infinite logo carousel                         │
├─────────────────────────────────────────────────────────────┤
│ SERVICES — 3×2 card grid with hover lift                    │
├─────────────────────────────────────────────────────────────┤
│ SOLUTIONS — horizontal scroll cards (mobile) / 4-col grid   │
├─────────────────────────────────────────────────────────────┤
│ PROCESS — vertical timeline with step icons                 │
├─────────────────────────────────────────────────────────────┤
│ FEATURED PROJECTS — filterable grid (tabs + cards)          │
├─────────────────────────────────────────────────────────────┤
│ TECH STACK — categorized logo grid                          │
├─────────────────────────────────────────────────────────────┤
│ TESTIMONIALS — carousel with photo + rating                 │
├─────────────────────────────────────────────────────────────┤
│ CTA BANNER — gradient bg, dual buttons                      │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — 4-column links + newsletter + social               │
└─────────────────────────────────────────────────────────────┘
```

#### Hero Copy (Anhloom)

- **Headline**: *We Help Products Bloom — From MVP to Scale*
- **Subtext**: *Anhloom engineers custom software, cloud infrastructure, and AI-powered systems for startups and global brands ready to grow.*
- **Primary CTA**: Book a Meeting
- **Secondary CTA**: View Portfolio

---

### 4.2 About Page

| Section | Layout | Animation |
|---------|--------|-----------|
| Hero | Full-width image + overlay text | Parallax scroll |
| Story | 2-column text + image | Fade in |
| Vision / Mission | Side-by-side cards | Stagger |
| Core Values | 4-icon grid | Scale on hover |
| Leadership | Team cards 3-col | — |
| Timeline | Vertical line + milestones | Scroll reveal |
| Certifications | Logo strip | — |

---

### 4.3 Services Page (Template)

Each service page follows this structure:

1. **Hero** — service name + one-liner + CTA
2. **Overview** — 2-column prose + illustration
3. **Benefits** — 3-column icon cards
4. **Features** — alternating image/text rows
5. **Technologies** — logo cloud
6. **Workflow** — numbered steps
7. **Pricing** — tier cards (if applicable)
8. **FAQ** — accordion
9. **CTA** — consultation banner

---

### 4.4 Solutions Page (Template)

1. **Hero** — problem statement headline
2. **Business Problems** — pain-point cards
3. **Proposed Solution** — architecture diagram
4. **Features** — feature grid
5. **Benefits** — metric highlights
6. **Integrations** — partner logos
7. **Screenshots** — device mockup gallery
8. **Demo Request** — inline form

---

### 4.5 Portfolio & Case Studies

**Portfolio Grid**
- Masonry or uniform 3-col grid
- Filter bar: AI · Healthcare · Finance · Retail · Manufacturing · Government
- Card → detail page

**Case Study Detail**
```
Hero Image (full bleed)
├── Executive Summary (sidebar meta: client, industry, duration)
├── Business Challenges
├── Research & Discovery
├── Solution Architecture (diagram)
├── Development Process (timeline)
├── Results (metric cards: +40% revenue, -60% cost)
└── Lessons Learned
```

---

### 4.6 Blog

**Listing**
- Featured post (hero card, full width)
- Category tabs
- Search bar (with AI search in Phase 2)
- 3-column card grid
- Pagination

**Article**
- Cover image, author, date, reading time
- Table of contents (sticky sidebar, desktop)
- Share buttons
- Related articles (3 cards)

---

### 4.7 Careers

- Culture section with photo grid
- Benefits icon list
- Open positions table/cards with filters
- Recruitment process timeline
- Application form (multi-step)

---

### 4.8 Contact

```
┌──────────────────────┬──────────────────────┐
│ Contact Form         │ Info Panel           │
│ - Name               │ Email                │
│ - Email              │ Phone                │
│ - Company            │ Address              │
│ - Service interest   │ Google Maps embed    │
│ - Message            │ Social links         │
│ - [Submit]           │ Calendly widget      │
└──────────────────────┴──────────────────────┘
```

---

## 5. Animation System

### 5.1 Motion Tokens

```ts
const motion = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    reveal: 800,
  },
  easing: {
    default: [0.4, 0, 0.2, 1],      // ease-out
    spring: { stiffness: 300, damping: 30 },
    bounce: [0.34, 1.56, 0.64, 1],
  },
}
```

### 5.2 Animation Catalog

| Name | Trigger | Effect | Library |
|------|---------|--------|---------|
| `fade-in` | Scroll into view | opacity 0→1 | Framer Motion |
| `slide-up` | Scroll into view | y: 40→0, opacity | Framer Motion |
| `stagger-children` | Parent in view | 80ms delay cascade | Framer Motion |
| `counter` | Stats in view | Number count up | Framer Motion |
| `hover-lift` | Mouse enter | y: -4, shadow | CSS + FM |
| `logo-scroll` | Always | Infinite x translate | CSS |
| `gradient-shift` | Always | Background position | CSS/GSAP |
| `parallax` | Scroll | Layer speed diff | Framer Motion |
| `float` | Always | Gentle y oscillation | CSS keyframes |

### 5.3 Performance Rules

- Use `transform` and `opacity` only (GPU-accelerated)
- `prefers-reduced-motion`: disable all non-essential animations
- Lazy-load GSAP/Three.js below the fold
- Max 3 simultaneous scroll-triggered animations per viewport

---

## 6. Information Architecture

```mermaid
graph TD
    Home["/"] --> About["/about"]
    Home --> Services["/services"]
    Services --> SvcAI["/services/ai-engineering"]
    Services --> SvcWeb["/services/web-development"]
    Services --> SvcMobile["/services/mobile-development"]
    Services --> SvcCloud["/services/cloud-devops"]
    Services --> SvcTeam["/services/dedicated-team"]
    Home --> Solutions["/solutions"]
    Solutions --> SolChat["/solutions/ai-chatbot"]
    Solutions --> SolCRM["/solutions/crm"]
    Solutions --> SolSaaS["/solutions/saas"]
    Home --> Portfolio["/portfolio"]
    Portfolio --> Project["/portfolio/:slug"]
    Home --> CaseStudies["/case-studies"]
    CaseStudies --> Case["/case-studies/:slug"]
    Home --> Technologies["/technologies"]
    Home --> Pricing["/pricing"]
    Home --> Blog["/blog"]
    Blog --> Post["/blog/:slug"]
    Home --> Careers["/careers"]
    Home --> Contact["/contact"]
    Home --> Privacy["/privacy"]
```

---

## 7. Technical Architecture

```mermaid
graph LR
    subgraph Client
        Next["Next.js 15 App Router"]
        FM["Framer Motion"]
        TW["Tailwind CSS"]
    end

    subgraph CMS
        Sanity["Sanity CMS"]
    end

    subgraph API
        FastAPI["FastAPI"]
        Laravel["Laravel API"]
    end

    subgraph Data
        PG["PostgreSQL"]
        Redis["Redis Cache"]
    end

    subgraph Infra
        AWS["AWS"]
        Docker["Docker"]
        TF["Terraform"]
        GHA["GitHub Actions"]
    end

    Next --> Sanity
    Next --> FastAPI
    Next --> Laravel
    FastAPI --> PG
    Laravel --> PG
    FastAPI --> Redis
    Next --> AWS
```

### 7.1 Frontend Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── services/[slug]/page.tsx
│   │   ├── solutions/[slug]/page.tsx
│   │   ├── portfolio/[slug]/page.tsx
│   │   ├── case-studies/[slug]/page.tsx
│   │   ├── technologies/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── careers/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/                   # See §3.5
├── lib/
│   ├── sanity.ts
│   ├── api.ts
│   └── seo.ts
├── hooks/
├── types/
└── styles/
    └── tokens.css
```

### 7.2 CMS Content Models (Sanity)

| Schema | Key Fields |
|--------|------------|
| `page` | title, slug, sections[], seo |
| `service` | title, slug, overview, benefits[], features[], faq[], pricing |
| `solution` | title, slug, problems[], architecture, integrations[] |
| `project` | title, slug, cover, category, tech[], results, gallery[] |
| `caseStudy` | project ref, executiveSummary, challenges, lessons[] |
| `blogPost` | title, slug, author, category, body, readingTime |
| `teamMember` | name, role, photo, bio, social |
| `testimonial` | client, company, photo, rating, quote, videoUrl |
| `career` | title, department, location, type, description |
| `faq` | question, answer, category |
| `siteSettings` | logo, social, contact, analytics |

### 7.3 Docker Architecture

Local development and production use **Docker Compose** to run frontend and backend together.

```
company-web/
├── frontend/                    # Next.js app (Phase 1)
│   ├── Dockerfile               # Multi-stage: deps → build → run
│   ├── Dockerfile.dev           # Dev image with hot reload
│   └── .dockerignore
├── backend/                     # FastAPI app (Phase 4)
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── .dockerignore
├── docker-compose.yml           # Production-oriented stack
├── docker-compose.dev.yml       # Local dev — FE + BE + Postgres + Redis
├── docker-compose.override.yml  # Optional local overrides (gitignored)
└── .env.docker.example          # Compose environment template
```

#### Services

| Service | Image | Port | Phase |
|---------|-------|------|-------|
| `frontend` | `frontend/Dockerfile` | 3000 | 1 |
| `backend` | `backend/Dockerfile` | 8000 | 4 |
| `postgres` | `postgres:16-alpine` | 5432 | 4 |
| `redis` | `redis:7-alpine` | 6379 | 4 |

#### Frontend Dockerfile (multi-stage)

```dockerfile
# Stage 1: deps
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: run
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

> Enable `output: 'standalone'` in `next.config.ts` for production Docker.

#### Backend Dockerfile

```dockerfile
FROM python:3.12-slim AS base
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### docker-compose.dev.yml

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:8000
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@postgres:5432/company_web
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: company_web
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

#### Commands

```bash
# Dev — full stack (after Phase 4)
docker compose -f docker-compose.dev.yml up --build

# Dev — frontend only (Phase 1)
docker compose -f docker-compose.dev.yml up frontend --build

# Production build test
docker compose up --build -d

# Tear down
docker compose -f docker-compose.dev.yml down -v
```

---

## 8. AI Features UX

| Feature | Placement | Interaction |
|---------|-----------|-------------|
| **AI Chatbot** | Floating button, bottom-right | Slide-up panel, streaming responses |
| **Cost Estimator** | `/contact` + homepage CTA | Multi-step wizard → estimate PDF |
| **Requirement Assistant** | Services pages | Inline chat sidebar |
| **AI Search** | Blog + global search | Semantic results with highlights |
| **Blog Recommendations** | Article footer | "You might also like" powered by embeddings |
| **FAQ Assistant** | FAQ sections | Expand + AI-generated follow-ups |

**Visual treatment**: AI features use `accent-500` purple accent, subtle pulse on trigger button.

---

## 9. SEO & Performance

### Metadata Template

```ts
export const siteConfig = {
  name: 'Anhloom',
  tagline: 'Grow your product with us',
  url: 'https://anhloom.com',
}

export const metadata = {
  title: '{Page Title} | Anhloom',
  description: '{155 char max}',
  openGraph: { type, images, locale, siteName: 'Anhloom' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical },
}
```

### Structured Data

- `Organization` on homepage
- `Service` on service pages
- `Article` on blog posts
- `JobPosting` on career listings
- `BreadcrumbList` on all inner pages

### Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| FCP | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| TTI | < 3.5s |
| JS bundle (initial) | < 150KB gzipped |

---

## 10. Accessibility Checklist

- [ ] WCAG 2.2 AA color contrast (4.5:1 body, 3:1 large text)
- [ ] Keyboard navigation for all interactive elements
- [ ] Skip-to-content link
- [ ] `aria-label` on icon-only buttons
- [ ] Focus visible on all focusable elements
- [ ] Form labels associated with inputs
- [ ] Alt text on all images
- [ ] Reduced motion support
- [ ] Screen reader tested (VoiceOver, NVDA)

---

## 11. Implementation Phases

### Phase 1 — Foundation (Weeks 1–4)
- Design system in Tailwind config
- Core components (Navbar, Footer, Button, Card)
- Homepage (all sections)
- About, Contact pages
- Sanity CMS setup
- CI/CD pipeline

### Phase 2 — Content Pages (Weeks 5–8)
- Services + Solutions templates
- Portfolio + Case Studies
- Blog with CMS
- Careers page
- SEO + structured data

### Phase 3 — Polish (Weeks 9–10)
- Animations (Framer Motion)
- Dark mode
- Performance optimization
- Accessibility audit
- Analytics integration

### Phase 4 — AI Features (Weeks 11–14)
- AI Chatbot
- Cost Estimator
- AI Search
- Blog recommendations

---

## 12. Figma Deliverables Checklist

| Artifact | Status |
|----------|--------|
| Design tokens page (colors, type, spacing) | Specified in §2 |
| Component library (all §3 components) | Specified in §3 |
| Homepage desktop + mobile | Wireframed in §4.1 |
| Inner page templates (6 types) | Specified in §4.2–4.8 |
| Dark mode variants | Tokens in §2.1 |
| Interaction prototypes (nav, cards, forms) | Animation in §5 |
| Responsive breakpoints (5 sizes) | §2.6 |
| Icon set (Lucide / Phosphor) | TBD in Figma |
| Illustration style guide | TBD in Figma |

---

## 13. Key Metrics & Success Criteria

| Metric | Target |
|--------|--------|
| Lighthouse score | ≥ 95 |
| Core Web Vitals | All pass |
| Mobile responsive | 5 breakpoints |
| WCAG compliance | 2.2 AA |
| Conversion rate (CTA clicks) | Baseline + track |
| Bounce rate | < 40% |
| Page load | < 2s on 4G |

---

*This document serves as the single source of truth for UI/UX design and frontend implementation. Update version on each design iteration.*
