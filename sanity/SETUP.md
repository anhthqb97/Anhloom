# Sanity CMS Setup — Anhloom

Create the Sanity project before running the local studio.

## 1. Create project

1. Sign in at [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project named **Anhloom**
3. Choose dataset **`production`** (default)
4. Note the **Project ID** from project settings

## 2. API token

1. Open **API** → **Tokens** in the Sanity project
2. Create a token with **Viewer** (read) permission for the Next.js app
3. Optionally create an **Editor** token for local studio writes

## 3. Environment variables

Copy values into `.env.local` at the repo root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
```

## 4. Verify

```bash
npm run dev
# Studio: http://localhost:3000/studio
```

## Project conventions

| Field | Value |
|-------|-------|
| Project name | Anhloom |
| Dataset | production |
| Studio path | `/studio` |
