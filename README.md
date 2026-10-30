# Anni Aguilar — local update candidate

The delivered replacement renders from `client/index.html`: a Spanish static landing page with inline CSS/JavaScript, anchor navigation, FAQs and WhatsApp links. It does **not** load `client/src/main.tsx`. The retained React sources are inactive; editing them does not change this landing page.

## Local verification

Use Node.js 22 and pnpm 10.4.1:

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm build
pnpm check
pnpm audit
pnpm preview --host 127.0.0.1
```

Build output is `dist/`. Images and `CNAME` are copied from `client/public/`. The workflow uses the root base path and a frozen lockfile. A push to `main` would trigger production deployment; keep this candidate on its review branch until approved.

## Approved replacement

Owner approved the Spanish-only landing page and retirement of the English toggle, Calendly booking, courses and testimonials. WhatsApp +1 832 472 5069 is confirmed as the intended contact destination. React sources are retained as inactive source history; they are not loaded or included in the page build.

`node scripts/finalize-static.mjs` runs after Vite and generates real directory index pages for retired URLs. `/about` leads to `/#anni`, `/services` to `/#servicios`, and `/contact` plus `/booking` to `/#contacto`. `/courses`, `/testimonials` and `/404` lead home. These use HTML refresh with a visible fallback link, not HTTP 301 redirects. Unknown paths return a genuine 404 with a home link.

The active landing page loads Google Fonts and opens WhatsApp only when clicked. No backend, database or application credentials are required.
