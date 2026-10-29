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

## Review before release

- Confirm Spanish-only content is intended; the current bilingual React experience is replaced.
- Confirm WhatsApp +1 832 472 5069 belongs to Anni and accepts inquiries.
- Decide whether to retain Calendly booking, email contact, English content and old page URLs (`/about`, `/services`, `/courses`, `/testimonials`, `/contact`, `/booking`). The generated `404.html` shows the landing page but does not preserve these routes' original content.
- Confirm credentials, service claims, images and social profile destinations. Social handle text is not a clickable link.

No backend/database or credentials are needed by the active landing page. It loads Google Fonts and opens WhatsApp only when clicked. The unused React booking component contains a Calendly embed.
