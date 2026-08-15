# LL - Technology Stack

Every tool on this list earns its spot by solving a problem LL actually has *today*. None of these are provisioned for scale the business hasn't earned. Pricing below was checked via web search on **2026-08-15**; verify again before actually signing up for anything, since free-tier terms and pricing drift over time - treat anything marked "TODO: verify" as unconfirmed.

For each tool: what it does, why it's needed, whether it's needed *now*, and expected cost.

---

## Google Drive

**What it does:** Central shared folder for the business-ops layer (see `docs/ARCHITECTURE.md`).
**Why needed:** One place both owners (and the mentor, at first) can see the same customer data and financial model.
**Needed now:** Yes - Week 2.
**Cost:** Free (15GB shared across Gmail/Drive/Photos on a standard Google account - plenty for this use).

## Google Sheets

**What it does:** The financial model, CRM, job log, and KPI tracking - see `sheets/SHEET_SPEC.md`.
**Why needed:** This is "the brain" - the one place that teaches and calculates the business's real numbers.
**Needed now:** Yes - Week 2.
**Cost:** Free (included with Google Drive).

## Gmail

**What it does:** Business email/communication identity.
**Why needed:** Customers and tools (Setmore, Google Business Profile) need a consistent business email.
**Needed now:** Yes - Week 2.
**Cost:** Free.

## Google Business Profile

**What it does:** Puts LL on Google Search/Maps, collects reviews, shows contact info.
**Why needed:** Highest-leverage free local-discovery channel available (bootstrap §16).
**Needed now:** Yes - Week 2, ongoing through launch.
**Cost:** Free. **TODO: verify current Google Business Profile eligibility/setup requirements for a home-based service business at implementation time** - requirements (e.g. service-area business setup, no storefront) can shift and are worth a fresh check right before setup.

## Google Calendar

**What it does:** Shared schedule.
**Why needed:** Keep track of where the owners need to be and when, alongside whatever the booking tool shows.
**Needed now:** Yes, lightweight use from Week 2.
**Cost:** Free.

## Setmore (Free plan)

**What it does:** Service-based booking/scheduling - customers pick a service, request/book a time, get reminders.
**Why needed:** Purpose-built for appointments (not generic meetings), mobile-friendly booking page, works from a phone.
**Needed now:** Yes - Week 2, this is the "front desk."
**Cost - verified 2026-08-15:** **Free** for up to **4 users** and **200 appointments/month**, with no time limit on the free tier. Includes payments, a branded booking page, email reminders/confirmations, app integrations, mobile apps, and team collaboration. Free tier does **not** include: removing Setmore branding, two-way calendar sync, SMS reminders, or video appointments. Paid **Pro** tier is **$12/user/month billed monthly, or $5/user/month billed annually** (as of June 2026, per source). LL should stay on Free - 200 appointments/month is far beyond what a two-person crew needs during its First 20 Lawns sprint.
Sources: [Setmore pricing overview via Koalendar](https://koalendar.com/blog/setmore-pricing), [Cal.com Setmore pricing breakdown](https://cal.com/blog/setmore-pricing).
**Upgrade trigger:** Approaching 200 appointments/month, or a genuine need for SMS reminders / 2-way calendar sync / recurring-appointment automation that the free tier can't do.

## Square Appointments (later, if triggered)

**What it does:** Integrated scheduling + payments - the likely replacement for Setmore + Venmo once both scheduling and payment friction justify combining them.
**Why needed:** Not needed yet. Documented here so the upgrade trigger and cost are known in advance, not guessed at under pressure.
**Needed now:** No - evaluate starting Week 9 per the trigger list in `docs/PRD.md` §8 / `docs/BUSINESS_RULES.md`.
**Cost - verified 2026-08-15:** **Free plan** has no subscription cost - you only pay payment-processing fees per transaction. On the Free plan: **in-person payments 2.6% + 15¢**, **online payments 3.3% + 30¢**. (Paid Plus/Premium tiers drop in-person to 2.5% + 15¢ and online to 2.9% + 30¢, but add a monthly fee - not needed at LL's volume.) Free plan includes one location, basic online booking, Google/Outlook calendar sync, automated reminders, and payment acceptance; it does not include email/SMS marketing, staff management, or advanced reporting.
Source: [Square Appointments pricing via Koalendar](https://koalendar.com/blog/square-appointments-pricing).
**Upgrade trigger:** See the 6-trigger Venmo→Square checklist in `docs/BUSINESS_RULES.md`.

## Venmo Business

**What it does:** Electronic payment collection at launch - LL's "starter cash register."
**Why needed:** Familiar to customers, zero setup complexity, works entirely from a phone, appropriate for very low transaction volume.
**Needed now:** Yes - Week 2, launch payment method.
**Cost - verified 2026-08-15:** **No setup fee, no monthly fee, no contract.** Standard goods-and-services transaction fee: **1.9% + $0.10**. In-person tap-to-pay: **2.29% + $0.10**. Standard bank transfers (1–3 business days) are free; instant transfer costs 1.75% of the amount. Venmo issues a **Form 1099-K** if the business profile receives **$600+** in a calendar year - worth flagging to whoever handles LL's taxes, not something Wren advises on. U.S.-only.
Sources: [NerdWallet Venmo Business review 2026](https://www.nerdwallet.com/business/software/reviews/venmo-business-account), [Swipesum Venmo for Business fees](https://www.swipesum.com/insights/venmo-for-business-fees-features-and-how-to-accept-payments).
**Upgrade trigger:** See the 6-trigger Venmo→Square checklist in `docs/BUSINESS_RULES.md`.

## Wave (accounting/invoicing)

**What it does:** Invoices, payment tracking, basic bookkeeping. **Not** a CRM - customer relationship data stays in the Sheets CRM.
**Why needed:** Free, simple financial record-keeping once there's enough transaction volume to want it.
**Needed now:** Evaluate in Weeks 2–4; not a blocker to launch (the Sheet's Job Log can carry the load at first).
**Cost - verified 2026-08-15:** **Wave Starter (free) plan is permanently free** - unlimited invoices, estimates, bills, and bookkeeping records, plus income/expense tracking and basic reporting. Paid **Wave Pro** is **$19/month** (or ~$16/month billed annually) and adds bank reconciliation, better reporting, and priority support - not needed at launch. **Payment processing fees apply regardless of plan:** **1% for bank-transfer payments**, **2.9% + $0.60 for most credit cards**, **3.4% + $0.60 for Amex**. (Wave Pro waives the flat $0.60 for card payments but keeps the 2.9%.) Optional add-ons not needed at launch: receipt scanning ($8/mo), payroll ($20/mo), bookkeeping services (from $149/mo).
Sources: [Wave pricing via ComparEdge](https://comparedge.com/tools/wave/pricing), [Wave pricing via CheckThat.ai](https://checkthat.ai/brands/wave/pricing).
**Upgrade trigger:** Bank reconciliation or reporting needs the Starter plan genuinely can't handle - unlikely before the business has significant transaction volume.

## GitHub

**What it does:** Version control / "filing cabinet" for the website and docs.
**Why needed:** Every change to the site and docs is tracked and reversible.
**Needed now:** Yes - this repo, set up now.
**Cost:** Free for a public repo (which this is, by design - see `docs/ARCHITECTURE.md` for why public was the right call).

## GitHub Pages

**What it does:** Free static hosting for the Logan Lawns website, built from this repo's `app/` folder.
**Why needed:** Free, version-controlled, no server to manage, plenty for low-traffic MVP site.
**Needed now:** Not yet built (Phase E, deferred). Will be turned on when `app/` has a real site to serve.
**Cost:** Free for a public repo on a personal GitHub account.

## Canva (Free)

**What it does:** Design tool for business cards and social graphics.
**Why needed:** Free, easy, phone/desktop both work, no design skill required to get something print-ready.
**Needed now:** Phase D (marketing assets) - deferred in this scaffold pass.
**Cost:** Free tier is generally sufficient for business cards and simple social graphics. **TODO: verify current Canva Free export/template limits at implementation time** - Canva's free-vs-Pro feature boundary shifts periodically and wasn't re-verified this pass.

## QR code generator

**What it does:** Turns the request-service/booking link into a scannable code for business cards.
**Why needed:** Fastest path from a physical business card to a phone booking a job.
**Needed now:** Phase D.
**Cost:** Free - most reliable static QR generators (e.g. Google's own, or any no-signup generator producing a permanent static code) cost nothing. **TODO: pick a specific generator and confirm the code doesn't expire/require a paid plan to stay live** - some "free" QR tools quietly require a subscription to keep dynamic codes working; a static code avoids that trap entirely and is the safer default for LL.

## AI (free tier)

**What it does:** Helps draft business card copy, website wording, review requests, explain spreadsheet formulas, and teach business concepts.
**Why needed:** A free-tier AI assistant is enough for LL's needs at launch - no paid subscription required.
**Needed now:** Yes, ongoing, free tier only.
**Cost:** Free (whatever free AI tool the owners already have access to).

---

## Summary table

| Need | Tool | Needed now? | Cost (verified 2026-08-15 unless noted) |
|---|---|---|---|
| Shared files | Google Drive | Yes | Free |
| Business model / CRM | Google Sheets | Yes | Free |
| Email | Gmail | Yes | Free |
| Local listing | Google Business Profile | Yes | Free (TODO: verify eligibility reqs) |
| Calendar | Google Calendar | Yes | Free |
| Scheduling | Setmore Free | Yes | Free up to 4 users / 200 appts/mo |
| Scheduling (later) | Square Appointments | No - trigger-based | Free plan + 2.6–3.3% + fee per transaction |
| Payments (launch) | Venmo Business | Yes | No fees to set up; 1.9–2.29% + $0.10 per transaction |
| Accounting | Wave | Evaluate Weeks 2-4 | Free (Starter); processing fees 1–3.4% + $0.60 |
| Version control | GitHub | Yes | Free (public repo) |
| Hosting | GitHub Pages | Not yet (Phase E) | Free |
| Design | Canva Free | Phase D | Free tier (TODO: verify limits) |
| QR codes | Static QR generator | Phase D | Free (TODO: pick specific tool) |
| AI help | Free-tier AI | Yes | Free |

## The one rule that governs this whole list

Free before paid, unless paid clearly creates revenue or prevents meaningful risk (bootstrap Product Principle #3). Every "later" tool above has a documented upgrade trigger - none of them get adopted just because the business "should" have them by now.
