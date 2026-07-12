# Bundle Analysis

Identify JavaScript chunks larger than 50KB.

## Run analysis

```bash
ANALYZE=true npm run build
```

When `@next/bundle-analyzer` is enabled, the build opens a treemap in the browser.

## Current hotspots

| Chunk | Approx size | Notes |
|-------|-------------|-------|
| `/studio` | ~1.8 MB | Sanity Studio — admin only |
| Homepage shared | ~103 KB | Framer Motion + app shell |
| `/` route | ~165 KB | Hero animations + client sections |

## Recommendations

- Keep Sanity Studio isolated at `/studio`
- Lazy-load below-fold homepage sections (Process, Projects, TechStack, Testimonials)
- Prefer server components for static content blocks
