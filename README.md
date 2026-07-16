# Anni Aguilar — Coaching Website

Fully static bilingual (EN/ES) coaching website built with Vite + React + Tailwind.
No backend, no database — booking runs through the embedded Calendly widget.

## Develop

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # static build → dist/
pnpm preview    # preview the production build
```

## Deploy (GitHub Pages)

1. Push this repo to GitHub (branch `main`).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Every push to `main` builds and deploys automatically via
   [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

The workflow auto-detects the base path (`/<repo-name>/` for project sites,
`/` for `username.github.io` sites). **If you add a custom domain**, set
`BASE_PATH=/` in the workflow's "Set base path" step.

The site also works as-is on any static host (Netlify, Cloudflare Pages,
Vercel): build command `pnpm build`, output directory `dist`.

## Pages

- `/` — Home
- `/about` — About Anni
- `/services` — Coaching services
- `/courses` — Online courses (coming soon)
- `/testimonials` — Client testimonials
- `/contact` — Contact info
- `/booking` — Calendly booking embed
