# SEO Validation Checklist

Use this checklist after deploying to production.

## Structured Data (P2-097)

1. Open [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test these URLs:
   - `/` — Organization
   - `/services/ai-engineering` — Service
   - `/blog/shipping-rag-systems-to-production` — Article
   - `/careers` — JobPosting entries
   - Any inner page with breadcrumbs — BreadcrumbList
3. Confirm no errors and expected rich result types are detected.

## Google Search Console (P2-098)

1. Verify domain ownership in [Google Search Console](https://search.google.com/search-console)
2. Submit sitemap: `https://anhloom.com/sitemap.xml`
3. Monitor Coverage and Enhancements reports after 24–48 hours.

## Local verification

```bash
npm run build
curl -s http://localhost:3000/sitemap.xml | head
curl -s http://localhost:3000/robots.txt
```

Set `NEXT_PUBLIC_SITE_URL` in production to your canonical domain.
