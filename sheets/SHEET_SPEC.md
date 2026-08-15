# LSL — Google Sheets Workbook Spec

This is a build-by-hand spec for the LSL operating workbook. It's written so a non-technical mentor can open Google Sheets and build every tab described here without needing to code anything — every tab lists its purpose and its fields; formulas are described in plain English, not written as exact Sheets syntax, since the exact formula should be built (and understood) by whoever sets up the tab.

**The workbook itself lives in Google Drive (`LSL/03 - Finance` or similar), not in this repo** — see `docs/ARCHITECTURE.md` for why. This file is the spec/blueprint only.

## Design rules for every tab

- Optimize for phone entry: large input areas, minimal horizontal scrolling on input tabs, few required fields, dropdowns where useful.
- Freeze header rows.
- Protect formula cells (Sheets: Data > Protect sheets and ranges) so a phone tap doesn't accidentally overwrite a calculation.
- Color or otherwise visually distinguish **input cells** (owner types here) from **calculated cells** (formula, don't touch).
- Every formula should be simple enough to click on and understand by reading it — no deeply nested one-liners nobody can audit.
- Plain-English notes belong directly on the tab (a text box or a "what this means" column), not hidden in a separate doc nobody reads while working.

---

## Tab 1 — START HERE

**Purpose:** Orientation. The first thing anyone opens.

Contents:
- Current goal: "Mow 20 lawns"
- First-20-lawns progress (pulled from completed rows in Tab 7 — Job Log)
- Links to every other tab
- "What should I do today?" — a short pointer to the current roadmap week (Tab 9)
- One-paragraph plain-English description of each tab
- The core business rules in one glance: the LSL Member rule, the distribution waterfall order, the payments trigger reminder
- Current progress snapshot (customers, revenue this month, cash reserve)

---

## Tab 2 — INPUTS

**Purpose:** The one place the owners type the starting facts from Week 1. Use it instead of scattered notes or separate mini-documents; every other tab's math flows from these inputs. Leave an unknown field blank rather than stopping the first-20-lawns sprint to solve it.

### Week 1 facts to enter here

- Services offered: mowing, bagging, and weed eating.
- The initial flat price: $40.
- Startup contributions: **Logan provides all startup contributions.** Record the amount when it is known.
- **Do not inventory equipment yet.** It is not a Week 1 input or a blocker for the First 20 Lawns sprint.
- Week 1 priority: **Beat the streets** with one simple flyer, door hanger, or business card that gives people a number to text.
- The print-price check: VistaPrint's standard business-card page showed **$10 for 50 cards** on 2026-08-15, before shipping and tax. Recheck the cart before buying because promotions and delivery change the total.
- Working days, realistic lawns per day, and service neighborhood(s).
- The owners' initial responsibilities: who answers texts, who mows, and who writes the client/job rows in the Google Sheet.
- Partnership inputs already known (ownership, truck fee, and distribution percentages).

**Do not put legal or insurance research here as a Week 1 task.** That discovery belongs in Weeks 13–16 of `docs/ROADMAP.md`.

Inputs (all owner-entered, all in one column of clearly labeled cells):
- Services offered: **Mowing, Bagging, Weed Eating**
- Week 1 priority: **Beat the streets**
- Print item: flyer / door hanger / business card
- Text number: **913-563-0403**
- Startup contributor: **Logan**
- Startup contribution amount (enter when known)
- Working days/week
- Lawns/day (realistic capacity)
- Initial flat price per mow: **$40**, including mowing, bagging, and weed eating (fixed until the First 20 Lawns sprint is complete)
- Recurring/Member price
- One-time (non-Member) price
- Expected weekly customers
- Expected biweekly customers
- New customers/week target
- Average add-on revenue per job
- Add-on attachment rate (% of jobs that include an add-on)
- Fuel cost estimate (per job or per week)
- Consumables cost estimate (trimmer line, oil, etc.)
- Truck fee per job (confirmed: $10/job flat, paid to `Partner` — see `docs/BUSINESS_RULES.md`)
- Marketing budget
- Software/subscription costs
- Estimated tax reserve % (placeholder until a CPA gives Logan a real number — see `docs/BUSINESS_RULES.md` Taxes callout)
- Cash reserve target
- Ownership % — Logan (confirmed: **100%**, not editable — this is the legal/equity fact, not a variable)
- Ownership % — `Partner` (confirmed: **0%**, not editable)
- Distribution % — Logan (confirmed: **50%** of Cash Available for Distribution — a separate field from Ownership % above, don't link/derive one from the other)
- Distribution % — `Partner` (confirmed: **50%** of Cash Available for Distribution)

**Note:** these inputs drive Tabs 3, 4, 5, and 10 — changing a number here should ripple through the whole model. That's the point: it lets the owners ask "what if" questions safely.

---

## Tab 3 — CAN THIS WORK?

**Purpose:** A step-by-step, plain-English walk through whether the business model actually works at the assumptions entered in Tab 2.

Calculated (from Tab 2 inputs):
- Weekly capacity (working days × lawns/day)
- Expected weekly jobs
- Weekly revenue (core + add-on)
- Weekly direct costs (including the $10/job truck fee to `Partner`)
- Weekly gross profit (Revenue − Direct Costs)
- Weekly operating expenses
- Weekly net profit, pre-tax (Gross Profit − Operating Expenses)
- Estimated tax reserve (net profit pre-tax × the tax reserve % from Tab 2 — placeholder, not tax advice)
- Weekly net profit after tax
- Reserve contribution (amount held back to keep the cash reserve funded — the standard pre-distribution guardrail, see `docs/BUSINESS_RULES.md`)
- Cash available for distribution (nothing else is held back here — this whole amount gets split)
- Distributed to Logan (Distribution % × Cash available for distribution — confirmed 50%; this is Distribution %, not Ownership %, see Tab 2)
- Distributed to `Partner` (Distribution % × Cash available for distribution — confirmed 50%)
- `Partner`'s total take this week (truck fees already counted in Direct Costs above **plus** their distribution share on this row)

Each calculated row should have a one-line "what this means" note next to it — this tab is explicitly meant to teach the waterfall from `docs/BUSINESS_RULES.md`, not just spit out a number. Note that `Partner` shows up in two places: the truck fee in Direct Costs, and their 50% share in the distribution rows — their total take is both added together, not just the truck fee.

---

## Tab 4 — FOUR-MONTH FORECAST

**Purpose:** Week-by-week and month-by-month projection across the four-month planning horizon (see `docs/PRD.md` §5).

Columns, by week (16 columns) rolling up to 4 monthly totals:
- Customer count
- Jobs completed
- Core service revenue
- Add-on revenue
- Total revenue
- Direct costs (including the $10/job truck fee to `Partner`)
- Gross profit
- Operating expenses
- Net profit, pre-tax
- Estimated tax reserve (placeholder — see `docs/BUSINESS_RULES.md`)
- Net profit after tax
- Reserve contribution
- Cash available for distribution
- Distributed to Logan (Distribution %, confirmed 50%) / Distributed to `Partner` (Distribution %, confirmed 50%)
- `Partner`'s total take this period (truck fees already counted in Direct Costs above plus their distribution share)
- Ending cash

**Two scenarios required:** Expected and Conservative, side by side or on toggleable rows — build both, don't pick just one. A Stretch scenario is optional, add later if useful.

An optional annualized run-rate row can be shown, clearly labeled "illustrative only, not a real year-round forecast" (lawn care is seasonal — don't let anyone mistake this for a real annual number).

---

## Tab 5 — PARTNERSHIP & DISTRIBUTIONS

**Purpose:** Turns the filled-in `docs/PARTNERSHIP_TEMPLATE.md` terms into a live calculator. **Ownership % and Distribution % are two separate numbers — don't let the sheet conflate them.** Logan owns 100% of LSL (Ownership %). `Partner` is a non-owner (0% Ownership %), but receives 50% of every distribution (Distribution %) on top of the flat per-job truck fee — `Partner` appears in the Direct Costs line (truck fee) **and** in the distribution row (50% share). See `docs/BUSINESS_RULES.md` — Distribution Waterfall — before building this tab.

Inputs:
- Owner name (Logan Spence)
- Business Partner name (`Partner`)
- **Ownership % — Logan** — confirmed **100%**, not editable, this is the legal/equity fact
- **Ownership % — `Partner`** — confirmed **0%**, not editable
- Truck fee per job — confirmed **$10** (Direct Cost, paid before the distribution waterfall, not a distribution)
- Estimated tax reserve % — placeholder input until a CPA gives Logan a real number (see `docs/BUSINESS_RULES.md`)
- **Distribution % — Logan** — confirmed **50%** of Cash Available for Distribution (a separate field from Ownership % above — do not link or derive one from the other)
- **Distribution % — `Partner`** — confirmed **50%** of Cash Available for Distribution
- Initial owner contribution (Logan's cash into the ~$300 startup budget)
- Cash reserve requirement (the standard pre-distribution guardrail — see `docs/BUSINESS_RULES.md`)

Outputs (calculated):
- Net profit, pre-tax (pulled from Tab 3 or actuals)
- Estimated tax reserve amount (net profit pre-tax × tax reserve %)
- Net profit after tax
- Cash before distributions
- Required cash reserve
- Cash available for distribution (nothing is retained here — the full amount is split per the Distribution % inputs above)
- Distributed to Logan (Distribution % — Logan × Cash available for distribution)
- Distributed to `Partner` (Distribution % — `Partner` × Cash available for distribution)
- Truck fees paid to `Partner` this period (running total, informational — already subtracted upstream in Direct Costs, shown here for transparency)
- **Logan's total take this period** (= their distribution share)
- **`Partner`'s total take this period** (= truck fees + their distribution share)
- Ending business cash

**Required warning:** if a proposed distribution would push cash below the reserve requirement, the sheet should visibly flag it (conditional formatting — red cell or warning text). This is the live version of the Distribution Guardrail checklist in `docs/BUSINESS_RULES.md` — a standard pre-distribution gate that's separate from the 50/50 split itself. Nothing about the guardrail changes based on how the payout gets divided between Logan and `Partner`.

---

## Tab 6 — CUSTOMERS / CRM

**Purpose:** The living customer list. One row per customer. Field definitions: see `sheets/DATA_DICTIONARY.md`.

Fields (columns): Customer ID, Customer Name, Phone, Email, Service Address, Neighborhood, Lead Source, Lead Date, Status, Recurring Customer? (Y/N), Member Status, Future Appointments Booked, Member Eligible?, Membership Start Date, Frequency, Standard Service Price, Last Service Date, Next Service Date, Preferred Day, Gate/Access Notes, Service Notes, Add-On Interests, Last Add-On, Lifetime Revenue, Payment Status, Review Requested?, Review Received?, Referral Source, Active/Inactive.

Avoid storing anything more sensitive than needed for the job (no need for full addresses beyond service address + basic contact info).

---

## Tab 7 — JOB LOG

**Purpose:** One row per completed job. This becomes the real operating data — everything in Tabs 3/4's "actual vs. plan" comparisons pulls from here. Field definitions: see `sheets/DATA_DICTIONARY.md`.

Fields (columns): Job ID, Date, Customer, Service, Add-Ons, Amount Charged, Payment Method, Payment Status, Partner(s) Working, Start Time, End Time, Drive/Travel Estimate, Notes.

---

## Tab 8 — WEEKLY SCOREBOARD

**Purpose:** A weekly rollup that's motivating to look at, not overwhelming.

Track, by week: Active recurring customers, New leads, Quotes given, New customers, Jobs completed, Revenue, Add-on revenue, Average revenue/job, Gross profit, Net profit, Cash on hand, Reviews received, Referrals received, Door hangers distributed, Conversion rate (lead → customer).

Keep this tab visually simple — this is the "how are we doing" check the owners should actually want to open every week.

---

## Tab 9 — ROADMAP / GANTT

**Purpose:** The 16-week roadmap (see `docs/ROADMAP.md`) as a live tracker, not just a doc.

Structure: start with one sprint row, **First 20 Lawns**, before any 16-week planning. Its checklist is: print door hangers; show “Text 913-563-0403 if interested”; offer the fixed $40 mow/bag/weed-eat package; record every client in Tab 6; record every completed lawn in Tab 7; ask permission to text in two weeks; stop after lawn #20 and record the number of calendar days. Add future planning rows only after that sprint is complete.

Per row, track: planned weeks (which columns are shaded/marked), completion status, owner (which partner), milestone description, revenue/customer target for that activity.

---

## Tab 10 — WHAT IF?

**Purpose:** A safe scenario-testing sandbox — change an assumption, see the ripple effect, without touching the real Tab 2 inputs.

Suggested scenario inputs (separate from Tab 2, so testing a scenario never overwrites the real plan): Price +$5, two additional customers/week, lower conversion rate, higher fuel cost, more add-ons, different distribution split, different truck reimbursement, an equipment repair cost.

Outputs, recalculated live: Revenue, Profit, Cash, Distributions — shown side by side against the Tab 2 baseline so the owners can see the delta.

---

## Tab 11 — MENTOR DASHBOARD

**Purpose:** A quick health check for the mentor (or, later, the owners themselves) — not a duplicate of every other tab.

Red/yellow/green indicators for: Customer growth (vs. plan), Cash reserve (at/above target?), Revenue vs. plan, Profit vs. plan, Outstanding payments, Review count, Marketing activity level, Upcoming equipment needs.

Business maturity checklist (checkboxes):
- [ ] Partnership agreement completed
- [ ] Separate business money process established
- [ ] Payment system active
- [ ] Google Business Profile active
- [ ] Booking link active
- [ ] First lawn completed
- [ ] Ten lawns completed
- [ ] Twenty lawns completed and days-to-20 recorded
- [ ] Five reviews
- [ ] Monthly close completed
- [ ] Reserve funded

**Do not build a fake single "score" number unless every component behind it is visible and explained** — a black-box score defeats the whole point of a system meant to teach, not just report.

---

## Build order recommendation

Build in this order, since later tabs depend on earlier ones existing:

1. Tab 2 (Inputs) — the starting facts everything else needs.
2. Tab 6 (CRM) and Tab 7 (Job Log) — where real data starts landing.
3. Tab 3 (Can This Work?) and Tab 5 (Partnership & Distributions) — the core math.
4. Tab 4 (Four-Month Forecast) and Tab 8 (Weekly Scoreboard) — the tracking layer.
5. Tab 9 (Roadmap), Tab 10 (What If?), Tab 11 (Mentor Dashboard) — the coaching/planning layer.
6. Tab 1 (Start Here) last, once every other tab actually exists to link to.
