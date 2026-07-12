# Sanity Seed Data

Import service documents into your Sanity dataset.

## Import via Studio

1. Start the studio: `npm run dev` → `/studio`
2. Create documents matching the seed files in `sanity/seed/services/`

## Import via CLI

```bash
npx sanity dataset import sanity/seed/exports/services.ndjson production
```

Generate the export bundle:

```bash
npx tsx sanity/seed/build-exports.ts
```
