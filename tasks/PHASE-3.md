# Phase 3 — Polish (SDD Step 3: Tasks)

> **SDD chain:** [constitution](../docs/sdd/constitution.md) → [spec](../docs/sdd/spec.md) → [plan](../docs/sdd/plan.md) → **tasks** → implement → validate
> **52 tasks** · ~30–60 min each · Progress: [PROGRESS.md](../PROGRESS.md)
> **AI:** Follow [AGENTS.md](../AGENTS.md)

| Field | Value |
|-------|-------|
| **Spec refs** | Animations, SEO, Accessibility, Analytics |
| **Plan refs** | §5 Animations, §9 SEO, §10 Accessibility |
| **Weeks** | W9–W10 |
| **Gate** | M3 — Lighthouse ≥ 95 + WCAG AA |

**Goal:** Animations, dark mode, performance, accessibility, analytics.

**Progress:** `██████████` **100%** (52 / 52)

---

### 3.1 Framer Motion Setup `3/3`

- [x] **P3-001** Install `framer-motion` package
- [x] **P3-002** Create `FadeIn` wrapper component
- [x] **P3-003** Create `SlideUp` wrapper component

### 3.2 Scroll Animations `8/8`

- [x] **P3-004** Scroll reveal on homepage Hero
- [x] **P3-005** Scroll reveal on Services section
- [x] **P3-006** Scroll reveal on Projects section
- [x] **P3-007** Stagger animation on service card grid
- [x] **P3-008** Stagger animation on project card grid
- [x] **P3-009** Animated number counters on stats bar
- [x] **P3-010** Hover lift effect on all card components
- [x] **P3-011** `prefers-reduced-motion` — disable animations

### 3.3 Hero & Carousel Animations `4/4`

- [x] **P3-012** Hero gradient background animation
- [x] **P3-013** Hero floating card elements
- [x] **P3-014** Logo carousel smooth infinite scroll
- [x] **P3-015** Testimonials carousel slide transition

### 3.4 Dark Mode `8/8`

- [x] **P3-016** Dark mode Tailwind `dark:` variants for colors
- [x] **P3-017** `ThemeProvider` context + hook
- [x] **P3-018** Theme toggle button in Navbar
- [x] **P3-019** Persist theme in `localStorage`
- [x] **P3-020** Dark mode — Navbar + Footer audit
- [x] **P3-021** Dark mode — Homepage sections audit
- [x] **P3-022** Dark mode — Inner pages audit
- [x] **P3-023** Dark mode contrast check (4.5:1 body text)

### 3.5 Performance `8/8`

- [x] **P3-024** Convert all `<img>` to `next/image`
- [x] **P3-025** Configure WebP/AVIF image formats
- [x] **P3-026** Lazy load below-fold images
- [x] **P3-027** Font subsetting — load only used weights
- [x] **P3-028** Preload critical fonts in layout
- [x] **P3-029** Dynamic import for below-fold homepage sections
- [x] **P3-030** Bundle analysis — identify chunks > 50KB
- [x] **P3-031** Lighthouse audit — fix issues until ≥ 95

### 3.6 Accessibility `10/10`

- [x] **P3-032** Skip-to-content link in layout
- [x] **P3-033** Keyboard nav — tab through Navbar links
- [x] **P3-034** Keyboard nav — tab through all form fields
- [x] **P3-035** Keyboard nav — MegaMenu open/close with Enter/Escape
- [x] **P3-036** Focus ring styles on all interactive elements
- [x] **P3-037** `aria-label` on hamburger, social, icon buttons
- [x] **P3-038** Form labels linked with `htmlFor` + `id`
- [x] **P3-039** Form error messages with `aria-live`
- [x] **P3-040** Alt text audit on all images
- [x] **P3-041** Screen reader test — VoiceOver walkthrough

### 3.7 Analytics & Compliance `11/11`

- [x] **P3-042** Google Analytics 4 script in layout
- [x] **P3-043** GA4 — page view tracking
- [x] **P3-044** GA4 — CTA click event (`book_meeting`, `view_portfolio`)
- [x] **P3-045** GA4 — form submit event
- [x] **P3-046** Microsoft Clarity script integration
- [x] **P3-047** Cookie consent banner component
- [x] **P3-048** Block GA4/Clarity until consent accepted
- [x] **P3-049** Google Search Console — verify domain
- [x] **P3-050** Search Console — submit sitemap
- [x] **P3-051** reCAPTCHA on contact form
- [x] **P3-052** CSP headers configuration

### Phase 3 Gate `0/7` — SDD Step 5: Validate

> Verify against [spec.md](../docs/sdd/spec.md) Success Metrics, Accessibility, Analytics.

- [ ] Lighthouse all categories ≥ 95
- [ ] FCP < 1.5s, LCP < 2.5s, CLS < 0.1
- [ ] Dark mode works on all pages
- [ ] Animations respect `prefers-reduced-motion`
- [ ] WCAG 2.2 AA audit passes
- [ ] Analytics events fire on CTAs + forms
- [ ] Cookie consent blocks tracking until accepted

---

## Weekly Plan (Phase 3)

| Week | Groups | Tasks |
|------|--------|-------|
| **W9** | 3.1, 3.2, 3.3, 3.4 | 23 |
| **W10** | 3.5, 3.6, 3.7, Gate | 36 |

---

*SDD: [README](../docs/sdd/README.md) · Prev: [PHASE-2.md](./PHASE-2.md) · Next: [PHASE-4.md](./PHASE-4.md)*
