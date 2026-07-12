# Sanity Seed Data

Import service, solution, and project documents into your Sanity dataset.

## Import via Studio

1. Start the studio: `npm run dev` → `/studio`
2. Create documents matching the seed files in:
   - `sanity/seed/services/`
   - `sanity/seed/solutions/`
   - `sanity/seed/projects/`

## Import via CLI

```bash
npx sanity dataset import sanity/seed/exports/services.ndjson production
npx sanity dataset import sanity/seed/exports/solutions.ndjson production
npx sanity dataset import sanity/seed/exports/projects.ndjson production
```

Generate the export bundles:

```bash
npx tsx sanity/seed/build-exports.ts
```
