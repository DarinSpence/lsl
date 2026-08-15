# LSL — Product & Business Requirements (Working Doc)

**This is the working, evolving PRD.** It starts as a summary of `../PROJECT_BOOTSTRAP.md` — the frozen origin document — and changes as Logan and his partner make real decisions. When this doc and `PROJECT_BOOTSTRAP.md` disagree, **this doc wins** for anything the owners have since decided; `PROJECT_BOOTSTRAP.md` stays untouched as the historical record of what we started from.

Every section below links back to the bootstrap doc by section number so you can always go read the original reasoning in full.

---

## 1. What LSL is (bootstrap §1–§5)

Logan Spence Lawncare (DBA **LSL**, web brand **LSL Lawns**) is a neighborhood lawn-mowing and trimming business, run mostly from a phone, starting on roughly **$300** of owner-contributed cash. **Logan is the sole owner — 100% Ownership %.** Logan works alongside a business partner (`[Partner Name]`) who holds no equity, but is paid two ways: a flat $10-per-completed-job fee for use of their truck, and 50% of every cash distribution (Distribution %, a separate number from Ownership %). See `docs/BUSINESS_RULES.md` (Distribution Waterfall) and `docs/PARTNERSHIP_TEMPLATE.md` for the confirmed terms.

The goal of this whole project is **not** to build software. It's to help two first-time owners:

- Get their first 10 recurring customers.
- Make booking and payment nearly frictionless.
- Actually understand how the business makes (or doesn't make) money.
- Keep revenue, costs, profit, cash reserve, and owner distributions cleanly separated.
- Put a fair partnership agreement in writing before money causes an argument.
- Grow recurring revenue through the **LSL Member** program and member-only add-ons.

Guiding principle, unchanged from the bootstrap: **Get customers first. Keep the system simple. Learn the numbers. Automate only after the process works.**

Current status of the first 10 customers, actual pricing, and actual costs: **TBD — not yet launched.** This doc gets updated with real numbers as Weeks 1–4 happen (see `ROADMAP.md`).

## 2. Core services (bootstrap §4)

- Lawn mowing
- String trimming / weed eating

Kept deliberately simple so pricing and time-per-job stay easy to reason about.

## 3. The LSL Member rule (bootstrap §4, §17 — canonical version lives in `BUSINESS_RULES.md`)

A customer becomes an **LSL Member** the moment they have **their next two lawn-service appointments booked**. No monthly fee, no season prepay, no contract. In exchange for that scheduling certainty, Members get preferred pricing on the core service and access to Member-only add-ons (weed pulling, light yard cleanup, driveway/sidewalk washing, minor safe outdoor maintenance).

Full rule, verification method, and the "why" (this trades a small price break for route density and lower selling effort) is documented once, in `docs/BUSINESS_RULES.md` — this PRD just points there to avoid duplicating the fact in two places.

## 4. Startup budget & owner equity (bootstrap §6–§8)

~$300 total owner contribution, recorded as **owner equity**, not revenue. Full waterfall (contribution → cash → expenses/assets → revenue → profit → reserve → distributions) is taught in `BUSINESS_RULES.md` §Distribution Waterfall.

## 5. Financial model shape (bootstrap §7, §11–§13)

Revenue → Direct Costs (including the $10/job truck fee to `[Partner Name]`) → Gross Profit → Operating Expenses → Net Profit (Pre-Tax) → Taxes (estimated reserve, placeholder — not tax advice) → Net Profit After Tax → Cash Available for Distribution → **50% to Logan / 50% to `[Partner Name]`.** That split is Distribution %, a separate number from Ownership % (Logan 100% / `[Partner Name]` 0%, unchanged) — see §6 below. Full waterfall lives in `docs/BUSINESS_RULES.md`.

Planning horizon: **four months**, not a full year — the business is seasonal and real data beats a long guess. An annualized run-rate can be shown as a clearly-labeled illustrative extra, never as the real forecast.

The actual spreadsheet that implements this model is specced in `sheets/SHEET_SPEC.md` (11 tabs) and `sheets/DATA_DICTIONARY.md` (every CRM/Job Log field defined). The live workbook itself lives in Google Drive, not in this repo — see `docs/ARCHITECTURE.md` for that boundary.

## 6. Partnership economics (bootstrap §9–§10)

**Confirmed by Logan (2026-08-15): Logan owns 100% of LSL — that's Ownership %, a legal/equity fact.** His business partner (`[Partner Name]`) holds 0% ownership, but is not uncompensated: they're paid two separate ways — a flat **$10 per completed job** truck fee (a Direct Cost, paid before the distribution waterfall even starts, see `docs/BUSINESS_RULES.md`) and **50% of every distribution** (Distribution %, a different number than Ownership % above — sometimes called a "profits interest": `[Partner Name]` is paid like a 50% partner without holding any equity). Cash Available for Distribution is split 50% to Logan / 50% to `[Partner Name]` — nothing is retained in the business as part of that split. This replaces the earlier generic "two-owner split, TBD" framing — see `docs/BUSINESS_RULES.md` (Distribution Waterfall) for the full formula, and for the standard pre-distribution cash-reserve gate, which is separate from the 50/50 mechanic.

Remaining items — responsibilities, purchase-approval threshold, dispute handling, and exit terms — still get filled in together by Logan and `[Partner Name]` using `docs/PARTNERSHIP_TEMPLATE.md`. This PRD does not pre-decide those (bootstrap §52).

**Status: ownership and distribution economics confirmed. Responsibilities, approval threshold, dispute process, and exit scenarios still open — template partially filled in, rest pending Logan and `[Partner Name]`.**

## 7. Booking (bootstrap §17)

Preferred MVP tool: **Setmore Free** (service/appointment-based scheduler, not a generic meeting calendar). Verified current pricing/limits are in `docs/STACK.md`.

Booking flow: **QR / Google / Facebook → landing page → choose/request service → enter address → select/request time → confirmation.** Because lawn care is location-dependent, LSL should favor "Request Service / Request a Quote" over guaranteed-slot booking until yard size, address, and route feasibility are known.

Member booking flow: after the first successful job, invite the customer to book their next two visits, which is what actually triggers Member status.

## 8. Payments — canonical policy (supersedes bootstrap §18's original 8-trigger list)

**This is the one canonical version.** The original bootstrap PRD (§18) shipped an 8-point trigger list for the Venmo→Square decision. A tighter, weekly-checkable 6-trigger version was drafted afterward as a refinement — same intent, easier for an 18-year-old to actually run every Friday. That tighter version is what LSL uses going forward. The two lists aren't both kept active; the original 8-point list is preserved only inside `PROJECT_BOOTSTRAP.md` as the historical record of how we got here.

### Phase 1 — Launch on Venmo Business

Use **Venmo Business** at launch: familiar to customers, no setup complexity, appropriate for very low transaction volume, avoids paying for software before LSL has customers. Never run business payments through a personal Venmo account — that violates Venmo's own terms for business use.

### Phase 2 — Watch for friction (ongoing, starting Week 3)

Track weekly: number of electronic payments, time spent matching payments to jobs, customers asking for card/tap-to-pay, unpaid/outstanding invoices, and how many different payment methods customers are actually using.

### Phase 3 — Weekly trigger check, starting Week 9

Every **Friday starting Week 9**, Logan checks these six triggers. **Move to Square when two or more are true for two weeks running, or the moment any single trigger is clearly costing LSL a job, time, or a customer's trust** — don't wait for Week 12 just because the calendar says so.

1. **Payment volume is climbing.** ~20+ payments/month, or payment-matching is becoming a real weekly chore.
2. **Scheduling and payment don't talk to each other.** Customers book through the scheduler, but Logan has to manually track who paid and for which appointment.
3. **The Member/recurring workflow needs more than Venmo offers.** Deposits, saved cards, recurring invoices, or an easier way to bill repeat visits.
4. **Reconciliation is eating real time.** More than ~30 minutes/week spent matching Venmo payments to jobs or figuring out who still owes.
5. **Customers are asking for more ways to pay.** More than a couple of customers want card, tap-to-pay, Apple Pay/Google Pay, or an invoice link Venmo can't do well.
6. **The math works.** Square's per-payment fee is worth it once it's clearly saving more in missed-payment chasing and manual tracking than it costs — compare monthly Square fees against hours saved and jobs that would otherwise slip through.

Do **not** switch because Square "looks more professional." Switch because it makes getting paid or running the week easier.

### Phase 4 — Square rollout, once triggered

1. Keep Venmo live for 30 days for existing customers during the transition.
2. Turn on Square payment links/invoices first. Add Tap to Pay or a card reader only if customers will actually use it.
3. Connect Square Appointments only if it cleanly replaces the current scheduler — don't run two schedulers.
4. Pilot with one customer group or one week of new bookings before making Square the default.
5. Every Friday during the pilot, confirm Square payouts, the Job Log, and the CRM all agree.

### The three questions Logan answers every Friday, starting Week 9

1. Did every completed job get marked paid or unpaid?
2. How long did payment tracking take this week?
3. Did a customer ask for a payment option Venmo doesn't make easy?

Recurring friction on any of these is the actual signal — Square is the upgrade for real pain, not a reward for getting bigger. Full roadmap placement of this milestone is in `docs/ROADMAP.md` (Weeks 9–12).

## 9. Accounting (bootstrap §19)

**Wave** for invoices, payment records, and basic bookkeeping — never as a CRM. Verified current pricing in `docs/STACK.md`.

## 10. CRM (bootstrap §20)

Google Sheets, not a paid CRM, until manual tracking genuinely breaks down. Full tab spec in `sheets/SHEET_SPEC.md`.

## 11. Website & hosting (bootstrap §21–§23)

Extremely simple, mobile-first static site: home, services, Member/recurring benefit, add-ons, service area, request-service CTA, contact, reviews. No accounts, no database, no ecommerce, no AI chat at launch. Hosted on **GitHub Pages**, sourced from this repo's (future) `app/` folder. Custom domain is optional and should never delay customer acquisition. This is **Phase E** — not built yet as of this scaffold pass.

## 12. Tech stack (bootstrap §24–§25)

Full table with plain-English explanations and verified current pricing in `docs/STACK.md`.

## 13. Marketing & acquisition (bootstrap §16, §33, §46–§48)

Google Business Profile (high priority), door hangers (high priority), referrals, and free neighborhood channels (Facebook, etc.) before any paid advertising. Door hanger content spec, QR strategy, and review-request flow are **Phase D** — deferred to a later dispatch. Marketing funnel: Door Hangers/Google/Facebook/Referral → Lead → Quote → First Job → Recurring → Add-On → Review → Referral.

## 14. Pricing philosophy & route density (bootstrap §34–§35)

Not a race to the bottom — price for labor, travel, fuel, wear, and required margin, same as any local service business. Recurring/Member customers can get preferred pricing because they lower selling effort and improve route density. Full logic in `docs/BUSINESS_RULES.md`.

## 15. Operating rhythm & guardrails (bootstrap §36–§42)

Weekly/monthly operating rhythm, the distribution guardrail checklist (never distribute past the reserve), partnership guardrails, customer-experience guardrails, and safety/scope guardrails (no regulated trade work) all live as durable rules in `docs/BUSINESS_RULES.md`.

## 16. Roadmap (bootstrap §43–§44)

16-week phased plan, teachable increments, in `docs/ROADMAP.md`.

## 17. Non-goals for MVP (bootstrap §49)

No full SaaS platform, custom payment processor, custom calendar/accounting/CRM, native apps, AI chatbot, route optimizer, payroll, or tax engine. Use existing tools until real pain justifies replacing them.

## 18. Definition of MVP complete (bootstrap §54)

The MVP is done when the owners can, from their phones: see this week's priorities, receive a service request, add a customer, schedule and complete a job, collect payment through the current approved payment system, record an expense, see whether the business made money, see cash and reserve, calculate a distribution without breaking the reserve, track progress toward 10 recurring customers, ask for a review, and explain what every tool in the stack is for.

## 19. Open questions the owners still need to answer (bootstrap §52)

**Resolved 2026-08-15** (see §6 above and `docs/BUSINESS_RULES.md` Distribution Waterfall): Ownership % (Logan 100%, `[Partner Name]` 0%), truck reimbursement method/rate ($10/job flat, Direct Cost), and Distribution % (Cash Available for Distribution split 50% to Logan / 50% to `[Partner Name]` — a separate number from Ownership %, nothing retained as part of the split). The cash-reserve guardrail checklist (bootstrap §37) is a standard pre-distribution gate, unrelated to how the payout itself is divided — it still has to pass before any distribution goes out.

Still not yet answered — tracked here so nobody forgets, and moved into `PARTNERSHIP_TEMPLATE.md` / `BUSINESS_RULES.md` once decided:

- City/neighborhood/service area
- `[Partner Name]`'s actual name and Logan's initial cash contribution amount
- What purchases require both Logan's and `[Partner Name]`'s approval, and the dollar threshold
- Required cash reserve amount
- Working days/hours and realistic lawns/day capacity
- Average price, base-mow scope, initial add-on menu and which are Member-only
- Exact Member preferred-pricing discount
- Who responds to customers day-to-day, who keeps the records
- Dispute-resolution and exit-scenario terms
- The actual tax rate/treatment for the Taxes step in the waterfall — needs a real CPA, not a placeholder (see `docs/BUSINESS_RULES.md`)

## Changelog

- **2026-08-15** — Initial working PRD created from `PROJECT_BOOTSTRAP.md`. Payments section reconciled: the staged 6-trigger weekly-check addendum supersedes the original bootstrap's 8-point list as the one canonical payments-migration policy (see §8 above for the reasoning). Repo and doc scaffold built by Wren.
- **2026-08-15** — Partnership/distribution economics confirmed by Logan: sole ownership (Logan 100% Ownership %, `[Partner Name]` 0% Ownership %), a $10/job flat truck fee booked as a Direct Cost, and Cash Available for Distribution split 50/50 between Logan and `[Partner Name]` (Distribution %, a separate number from Ownership % above), with a new explicit Taxes step (placeholder, not tax advice) added to the waterfall. §6 above and `docs/BUSINESS_RULES.md` updated to match.
- **2026-08-15 (correction)** — An earlier pass of this doc briefly modeled the split as "50% distributed to Logan / 50% retained in the business," based on a misread of Logan's answer. Logan corrected this directly: **the 50/50 split is between Logan and `[Partner Name]`, not between Logan and a business reserve — nothing is retained as part of the split.** §6 above, `docs/BUSINESS_RULES.md`, `docs/PARTNERSHIP_TEMPLATE.md`, `sheets/SHEET_SPEC.md`, and `sheets/DATA_DICTIONARY.md` were all corrected to match. The cash-reserve guardrail checklist (bootstrap §37) is a separate, standard pre-distribution gate, unrelated to how the payout itself gets divided — the previously-open question about how it interacts with the split is resolved: it's just the original checklist, unchanged.
