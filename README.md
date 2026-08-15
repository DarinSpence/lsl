# LSL — Logan Spence Lawns

**Logan Spence Lawns** (DBA **LSL**, brand: **LSL Lawns**) is a neighborhood lawn mowing and trimming business run by two first-time owners, built on a philosophy of "get customers first, keep the system simple, learn the numbers, automate only after the process works." This repo is the docs, specs, and website source for the business — it is not the business's private operating data.

## What's in this repo vs. what lives in Google Drive

This is a **public** repo (GitHub Pages on a free personal account requires that). It holds:

- Business docs and specs (`docs/`)
- The public marketing website source (`app/`)
- Marketing asset templates/specs (`templates/`)
- The Google Sheets workbook spec + data dictionary (`sheets/`) — the *blueprint*, not the live workbook

It does **not** hold: real customer data, real financial numbers, the filled-in partnership agreement, or any credentials/secrets. That business-ops data lives in a separate, private **Google Drive** folder (`LSL/`). See `docs/ARCHITECTURE.md` for the full, explicit boundary between the two — that split was a deliberate decision, not an accident.

## Key docs

- [`PROJECT_BOOTSTRAP.md`](PROJECT_BOOTSTRAP.md) — the original, frozen PRD this whole project started from. Historical record — read it once for full context, then use the docs below for anything that's since evolved.
- [`docs/PRD.md`](docs/PRD.md) — the working, evolving product/business requirements doc. Start here for current decisions.
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — what lives in Drive vs. this repo vs. GitHub Pages vs. external tools.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — the 16-week phased launch plan.
- [`docs/STACK.md`](docs/STACK.md) — every tool in the stack, what it does, why it's needed, and current verified pricing.
- [`docs/BUSINESS_RULES.md`](docs/BUSINESS_RULES.md) — the LSL Member rule, pricing philosophy, distribution waterfall, route density, and operating guardrails.
- [`docs/PARTNERSHIP_TEMPLATE.md`](docs/PARTNERSHIP_TEMPLATE.md) — a fillable partnership-agreement template for the two owners.
- [`sheets/SHEET_SPEC.md`](sheets/SHEET_SPEC.md) — the 11-tab Google Sheets workbook spec (the live workbook lives in Drive).
- [`sheets/DATA_DICTIONARY.md`](sheets/DATA_DICTIONARY.md) — plain-English definitions of every CRM and Job Log field.

## Mobile-friendly first-20-lawns plan

The first public site slice is the mobile-friendly [first-20-lawns plan](https://darinspence.github.io/lsl/) in `app/`. It is intentionally a plain static HTML/CSS/JS page with no build step. The page fetches and formats [`docs/ROADMAP.md`](docs/ROADMAP.md), which remains the single source of truth for the plan.

GitHub Pages deploys the `app/` folder whenever a change to it is pushed to `main`. Before the first deployment, enable **Settings → Pages → Source: GitHub Actions** in the GitHub repository.

## Marketing assets

`templates/` holds specs for print-ready marketing assets (door hangers, pricing sheets, review-request scripts). Not built yet — Phase D of the build.

## Who's building this

This repo is built and maintained by **Wren**, the small-business launch coach on the myPKA AI team, working alongside Logan and his business partner. The mentor (Logan's family member) initially administers this GitHub repo and the Google Drive folder, with ownership transitioning to the actual business owners over time, per the project's own stated pattern.
