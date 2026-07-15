# AGENTS.md

## Cursor Cloud specific instructions

This is a single-process full-stack TypeScript app (`anni-aguilar-website`): an Express + tRPC backend that also serves a Vite/React frontend, backed by MySQL (Drizzle ORM). Package manager is **pnpm** (`pnpm@10.4.1`). Standard scripts live in `package.json` (`dev`, `build`, `start`, `check`, `test`, `db:push`).

### Services

- **Web app (frontend + backend, one process):** `pnpm dev` → http://localhost:3000. Backend serves the API at `/api/trpc` and Vite HMR for the client. Port auto-increments up to +20 if 3000 is busy.
- **MySQL database (required for full E2E):** used by all course/enrollment/payment/auth-persistence flows and by the DB-backed test suite. DB access is written to fail gracefully, so the marketing site boots even without a DB, but course/enrollment data will be empty.

### Non-obvious setup/run caveats

- **A local MySQL server is NOT auto-started.** This VM uses MariaDB (installed via apt); there is no systemd, so start it manually and, on first run, initialize the data dir:
  - `sudo mysqld_safe --datadir=/var/lib/mysql &` (initialize once with `sudo mariadb-install-db --user=mysql --datadir=/var/lib/mysql` if `/var/lib/mysql/mysql` is absent).
  - Dev DB/user (already created in the snapshot): database `anni`, user `anni` / password `anni_pass`.
- **`.env` is git-ignored** and must exist for the app to run. Required keys for local dev:
  - `DATABASE_URL=mysql://anni:anni_pass@127.0.0.1:3306/anni`
  - `JWT_SECRET=<any non-empty value>`
  - `STRIPE_SECRET_KEY=<non-empty>` — **required even when not testing payments**, because `server/stripe.ts` constructs the Stripe client at import time (routers import it), so the dev server and the whole test suite crash on boot if it is empty. A dummy `sk_test_...` value is fine for non-payment work.
  - `VITE_OAUTH_PORTAL_URL` and `VITE_APP_ID` — set to any non-empty placeholder; `client/src/const.ts` builds a `new URL()` from `VITE_OAUTH_PORTAL_URL` and throws if it is undefined when the login button is used.
- **`pnpm db:push` reads only `process.env`** (it does not load `.env`). Export the vars first, e.g. `set -a; . ./.env; set +a; pnpm db:push`. Likewise export them (or run via a dotenv-loading command) for `pnpm test`, since the DB-backed tests need `DATABASE_URL`.
- **Tests:** `server/courses.test.ts` needs a live MySQL DB (it inserts real rows into the `anni` database). `server/auth.logout.test.ts` only needs the Stripe key present (import-time constructor).
- **OAuth login and Stripe checkout require external hosted services** (Manus OAuth server, Stripe API) and cannot be exercised end-to-end locally without real credentials. The admin course-management UI (`/admin`) is gated behind OAuth. The `/courses` page frontend is intentionally a "Coming Soon" placeholder, but the backend `courses.list` tRPC procedure returns real DB data.
- The `[OAuth] ERROR: OAUTH_SERVER_URL is not configured` log and the missing `VITE_ANALYTICS_*` warnings on boot are expected when those optional services are unconfigured; the server still runs.
