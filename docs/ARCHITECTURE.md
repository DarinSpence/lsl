# LSL — Architecture: What Lives Where

This doc exists because "where does X live?" was a real question the owners and mentor talked through. Read this before you go looking for something, and before you add a new tool to the stack.

## The three layers

LSL runs on three separate layers. They talk to each other through links and manual entry, not through any live API/database integration (at least not yet — see "When this changes" at the bottom).

```
┌─────────────────────────────────────────────────────────┐
│  1. GOOGLE DRIVE / GOOGLE SHEETS                          │
│     "The business-ops layer"                              │
│     Lives in Google Drive folder: LSL/ (NOT in this repo) │
│     CRM, financial model, forecasts, job log, roadmap     │
│     tracker, mentor dashboard                              │
├─────────────────────────────────────────────────────────┤
│  2. THIS GITHUB REPO (~/Developer/lsl)                     │
│     "Docs, specs, and the public site source"              │
│     Version-controlled. Public. No customer data,          │
│     no financial actuals, no secrets.                      │
├─────────────────────────────────────────────────────────┤
│  3. GITHUB PAGES                                            │
│     "Where the public site is actually hosted"              │
│     Built from this repo's app/ folder. Static only.        │
└─────────────────────────────────────────────────────────┘
```

Plus two more tools that plug into the picture at the edges:

- **Setmore → Square (booking/payments)** — external SaaS, not hosted here or in Drive.
- **Wave (accounting)** — external SaaS, not hosted here or in Drive.

## Layer 1 — Google Drive / Google Sheets (business-ops layer)

**Lives in a separate Google Drive folder, `LSL/`, per bootstrap §26 — NOT in this repo.**

This is deliberate, not an oversight: this repo is public (GitHub Pages on a free personal account requires a public repo), and the business-ops layer holds things that should never be public — real customer names, addresses, phone numbers, actual revenue and cost numbers, and the partnership's real financial details.

What lives in Drive:

- The 11-tab Google Sheets workbook (spec: `sheets/SHEET_SPEC.md`) — CRM, financial model, job log, weekly scoreboard, roadmap tracker, mentor dashboard, "what if" scenarios.
- Actual customer data (Tab 6 — CRM).
- Actual job records (Tab 7 — Job Log).
- Real financial actuals, real distribution calculations.
- Any scanned receipts, partnership-agreement signed copies, or other business records the owners want to keep.

Suggested Drive folder structure (from bootstrap §26):

```
LSL/
├── 00 - Start Here
├── 01 - Business Plan
├── 02 - Customers
├── 03 - Finance
├── 04 - Marketing
├── 05 - Operations
├── 06 - Partnership
├── 07 - Templates
└── 08 - Archive
```

**Not yet set up as of this scaffold pass** — Wren's contract explicitly defers Google Drive folder setup to a future, non-code dispatch. See "What's deferred" in the session report.

## Layer 2 — This GitHub repo (`~/Developer/lsl`)

Public repo, version-controlled, holds:

- **Docs** (`docs/`) — PRD, architecture, roadmap, stack, business rules, partnership template. These are the *specs and templates*, not the filled-in business data. The partnership template here is blank; the filled-in signed version (with real names, real percentages) belongs in Drive (`06 - Partnership`), not committed to a public repo.
- **Site source** (`app/`) — the actual marketing website, built as plain static HTML/CSS/JS, deployed via GitHub Pages. No customer data touches this layer — it's a one-way brochure/request-service front door, not a database-backed app.
- **Marketing asset specs** (`templates/`) — door hanger content specs, pricing sheet templates, scripts (review-request wording, etc.). These are *templates and copy*, not filled-in customer-specific content.
- **Sheet specs** (`sheets/`) — the spec and data dictionary for the Google Sheets workbook, so a non-technical mentor could rebuild the actual workbook by hand from these docs. The spec is public; the live workbook with real data is not.

**Why public repo, given it holds business docs?** Because GitHub Pages on a free personal account only serves a static site from a public repo, and this site is a public marketing site by design (it needs to be found by customers). The rule that keeps this safe: nothing that identifies a real customer, a real dollar amount, or a real credential goes in this repo. If in doubt, it belongs in Drive, not here.

## Layer 3 — GitHub Pages (hosting)

Free static hosting, built from this repo's `app/` folder (once built — see `app/README.md`, Phase E, not yet built). No backend, no database. The site's only "action" for a visitor is a request-service link/QR code that ultimately routes to Setmore (or later, Square).

## The booking/payments layer — Setmore → Square

Neither hosted here nor in Drive — external SaaS the owners log into directly.

- **Setmore Free** (launch) — service-based booking. Customers request/book through Setmore's own hosted booking page, linked from the site and from door hanger QR codes.
- **Square Appointments** (later, if triggered — see `docs/PRD.md` §8 and `docs/BUSINESS_RULES.md`) — the likely upgrade once scheduling + payments duplication becomes real administrative pain.

The CRM (Layer 1, Google Sheets) is updated manually (or later, semi-automatically) to reflect what happened in Setmore/Square — there's no live sync at MVP. That's an intentional simplicity choice, not a gap to be embarrassed about; see bootstrap §30 ("Do not build [an API layer] until there is a demonstrated business need").

## The accounting layer — Wave

External SaaS, not hosted here or in Drive. Wave holds invoices, payment history, and basic bookkeeping. Wave is explicitly **not** the CRM (bootstrap §19) — customer relationship data (service notes, Member status, preferred day, etc.) stays in the Google Sheets CRM, not in Wave.

## Quick lookup: "where does X live?"

| Thing | Lives in |
|---|---|
| A real customer's name, phone, address | Google Drive (Sheets CRM) |
| The financial model with real numbers plugged in | Google Drive (Sheets) |
| The blank partnership agreement template | This repo (`docs/PARTNERSHIP_TEMPLATE.md`) |
| The signed, filled-in partnership agreement | Google Drive (`06 - Partnership`) |
| The public marketing website | This repo (`app/`) → GitHub Pages |
| Door hanger copy/layout spec | This repo (`templates/door-hanger/`) |
| A completed job's actual date/amount/notes | Google Drive (Sheets Job Log) |
| The spec explaining what the Job Log's fields mean | This repo (`sheets/DATA_DICTIONARY.md`) |
| Actual booking/appointment data | Setmore (later, Square) — external, not in Drive or this repo |
| Actual invoices and payment history | Wave — external, not in Drive or this repo |
| API keys, passwords, any secret | Nowhere in this repo, ever. A gitignored `.env` locally if one is ever needed; otherwise a password manager. |

## When this changes

If LSL ever needs a live integration — for example, pulling Setmore bookings automatically into the Sheet, or a payments webhook — that live-wiring work is explicitly **out of scope for Wren** and hands off to **Mack** (the automation/integration specialist on the myPKA team). Until that's actually needed, the manual link-and-copy workflow between these layers is the correct level of complexity for a two-person lawn business — see bootstrap §29–§30 and product principle #6, "Simple processes before automation."
