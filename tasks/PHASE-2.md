# Phase 2 — Content Pages (SDD Step 3: Tasks)

> **SDD chain:** [constitution](../docs/sdd/constitution.md) → [spec](../docs/sdd/spec.md) → [plan](../docs/sdd/plan.md) → **tasks** → implement → validate
> **98 tasks** · ~30–60 min each · Progress: [PROGRESS.md](../PROGRESS.md)
> **AI:** Follow [AGENTS.md](../AGENTS.md)

| Field | Value |
|-------|-------|
| **Spec refs** | Services, Solutions, Portfolio, Blog, Careers, SEO |
| **Plan refs** | §4.3–4.8 Page Designs, §7.2 CMS Models |
| **Weeks** | W5–W8 |
| **Gate** | M2 — full sitemap + SEO metadata |

**Goal:** All content pages with CMS, SEO, structured data.

**Progress:** `██████░░░░` **63%** (62 / 98)

---

### 2.1 Services — Template `10/10`

- [x] **P2-001** Services listing page route `/services`
- [x] **P2-002** Services listing hero + grid of cards
- [x] **P2-003** Service detail route `/services/[slug]`
- [x] **P2-004** Service detail — hero (title + CTA)
- [x] **P2-005** Service detail — overview 2-column section
- [x] **P2-006** Service detail — benefits 3-column icon cards
- [x] **P2-007** Service detail — features alternating rows
- [x] **P2-008** Service detail — technologies logo cloud
- [x] **P2-009** Service detail — workflow numbered steps
- [x] **P2-010** Service detail — FAQ accordion + CTA banner

### 2.2 Services — CMS Content `6/6`

- [x] **P2-011** Seed CMS — AI Engineering
- [x] **P2-012** Seed CMS — Web Development
- [x] **P2-013** Seed CMS — Mobile Development
- [x] **P2-014** Seed CMS — Cloud & DevOps
- [x] **P2-015** Seed CMS — DevOps
- [x] **P2-016** Seed CMS — Dedicated Team

### 2.3 Solutions — Template `9/9`

- [x] **P2-017** Solutions listing page route `/solutions`
- [x] **P2-018** Solutions listing hero + card grid
- [x] **P2-019** Solution detail route `/solutions/[slug]`
- [x] **P2-020** Solution detail — hero + problem statement
- [x] **P2-021** Solution detail — business problems cards
- [x] **P2-022** Solution detail — proposed solution section
- [x] **P2-023** Solution detail — architecture diagram area
- [x] **P2-024** Solution detail — features + benefits + integrations
- [x] **P2-025** Solution detail — screenshots gallery + demo request form

### 2.4 Solutions — CMS Content `7/7`

- [x] **P2-026** Seed CMS — AI Chatbot
- [x] **P2-027** Seed CMS — AI Agent
- [x] **P2-028** Seed CMS — CRM
- [x] **P2-029** Seed CMS — ERP
- [x] **P2-030** Seed CMS — SaaS
- [x] **P2-031** Seed CMS — Marketplace
- [x] **P2-032** Seed CMS — E-commerce

### 2.5 Portfolio `10/10`

- [x] **P2-033** CMS schema — `project`
- [x] **P2-034** Portfolio listing route `/portfolio`
- [x] **P2-035** Portfolio filter bar (AI, Healthcare, Finance, etc.)
- [x] **P2-036** Portfolio project card grid
- [x] **P2-037** Project detail route `/portfolio/[slug]`
- [x] **P2-038** Project detail — hero image full bleed
- [x] **P2-039** Project detail — overview + challenges + solution
- [x] **P2-040** Project detail — architecture + technologies
- [x] **P2-041** Project detail — results metrics + image gallery
- [x] **P2-042** Seed 6 portfolio projects in CMS

### 2.6 Case Studies `8/8`

- [x] **P2-043** CMS schema — `caseStudy`
- [x] **P2-044** Case studies listing route `/case-studies`
- [x] **P2-045** Case study detail route `/case-studies/[slug]`
- [x] **P2-046** Case study — executive summary sidebar
- [x] **P2-047** Case study — challenges + research sections
- [x] **P2-048** Case study — solution + architecture diagram
- [x] **P2-049** Case study — development process timeline
- [x] **P2-050** Case study — results metrics + lessons learned

### 2.7 Blog `12/12`

- [x] **P2-051** CMS schema — `blogPost` with author + category
- [x] **P2-052** Blog listing route `/blog`
- [x] **P2-053** Blog featured post hero card
- [x] **P2-054** Blog category filter tabs
- [x] **P2-055** Blog search input (static filter first)
- [x] **P2-056** Blog 3-column card grid
- [x] **P2-057** Blog pagination component
- [x] **P2-058** Blog article route `/blog/[slug]`
- [x] **P2-059** Article — cover, author, date, reading time
- [x] **P2-060** Article — table of contents sidebar (desktop)
- [x] **P2-061** Article — share buttons + related articles
- [x] **P2-062** Seed 3 blog articles in CMS

### 2.8 Additional Pages `0/12`

- [ ] **P2-063** Technologies page route `/technologies`
- [ ] **P2-064** Technologies — categorized logo grid (8 categories)
- [ ] **P2-065** CMS schema — `technology`
- [ ] **P2-066** Pricing page route `/pricing`
- [ ] **P2-067** Pricing — 3 tier cards with feature lists
- [ ] **P2-068** Pricing — highlighted "popular" tier styling
- [ ] **P2-069** Careers page route `/careers`
- [ ] **P2-070** Careers — culture photo grid section
- [ ] **P2-071** Careers — benefits icon list
- [ ] **P2-072** CMS schema — `career`
- [ ] **P2-073** Careers — open positions list with filters
- [ ] **P2-074** Careers — online application form

### 2.9 Shared Components `0/6`

- [ ] **P2-075** `FAQAccordion` component
- [ ] **P2-076** `Breadcrumb` component
- [ ] **P2-077** `Pagination` component
- [ ] **P2-078** `BlogCard` component
- [ ] **P2-079** `TeamCard` component (reusable)
- [ ] **P2-080** `PricingCard` component

### 2.10 SEO & Structured Data `0/18`

- [ ] **P2-081** `lib/seo.ts` — `generateMetadata` helper
- [ ] **P2-082** Default site metadata in root layout
- [ ] **P2-083** Per-page dynamic `title` + `description`
- [ ] **P2-084** Open Graph `og:title`, `og:image`, `og:url` tags
- [ ] **P2-085** Twitter Card tags
- [ ] **P2-086** Canonical URL on all pages
- [ ] **P2-087** JSON-LD — `Organization` on homepage
- [ ] **P2-088** JSON-LD — `Service` on service pages
- [ ] **P2-089** JSON-LD — `Article` on blog posts
- [ ] **P2-090** JSON-LD — `JobPosting` on career listings
- [ ] **P2-091** JSON-LD — `BreadcrumbList` on inner pages
- [ ] **P2-092** `app/sitemap.ts` — dynamic XML sitemap
- [ ] **P2-093** `app/robots.ts` — robots.txt rules
- [ ] **P2-094** CMS SEO fields on `page` schema
- [ ] **P2-095** CMS SEO fields on `service` schema
- [ ] **P2-096** CMS SEO fields on `blogPost` schema
- [ ] **P2-097** Validate structured data in Google Rich Results Test
- [ ] **P2-098** Submit sitemap to Google Search Console

### Phase 2 Gate `0/6` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) Website Sitemap, SEO Requirements.

- [ ] All sitemap routes from requirement.md are live
- [ ] Every page has unique meta title + description
- [ ] CMS drives Services, Solutions, Portfolio, Blog, Careers
- [ ] Portfolio + Blog category filters work
- [ ] Structured data validates without errors
- [ ] `/sitemap.xml` accessible

---

## Weekly Plan (Phase 2)

| Week | Groups | Tasks |
|------|--------|-------|
| **W5** | 2.1, 2.2, 2.3 | 25 |
| **W6** | 2.4, 2.5 | 17 |
| **W7** | 2.6, 2.7 | 20 |
| **W8** | 2.8, 2.9, 2.10, Gate | 42 |

---

*SDD: [README](../docs/sdd/README.md) · Prev: [PHASE-1.md](./PHASE-1.md) · Next: [PHASE-3.md](./PHASE-3.md)*
