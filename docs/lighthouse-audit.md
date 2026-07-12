# Lighthouse Audit Checklist

Target: all categories ≥ 95.

## Run audit

1. `npm run build && npm run start`
2. Open Chrome DevTools → Lighthouse
3. Test `/`, `/services`, `/blog`, `/contact` in mobile + desktop

## Optimizations applied

- Self-hosted Geist fonts via `next/font` (preload + swap)
- AVIF/WebP image formats in `next.config.ts`
- Lazy-loaded below-fold homepage sections
- `poweredByHeader: false`
- Semantic HTML and metadata on all routes
- Cookie consent blocks analytics until accepted

## Core Web Vitals targets

| Metric | Target |
|--------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |

## If score is below 95

- Verify no blocking third-party scripts before consent
- Check hero animation cost on low-end devices
- Confirm static generation for marketing routes
