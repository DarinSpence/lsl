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
- Current goal (e.g. "Get to 10 recurring LSL Members")
- First-10-customers progress (pulled from Tab 6 CRM count)
- Links to every other tab
- "What should I do today?" — a short pointer to the current roadmap week (Tab 9)
- One-paragraph plain-English description of each tab
- The core business rules in one glance: the LSL Member rule, the distribution waterfall order, the payments trigger reminder
- Current progress snapshot (customers, revenue this month, cash reserve)

---

## Tab 2 — BUILD MY BUSINESS

**Purpose:** The one place all the business's core assumptions get typed in. Every other tab's math flows from these inputs.

Inputs (all owner-entered, all in one column of clearly labeled cells):
- Working days/week
- Lawns/day (realistic capacity)
- Average price per mow
- Recurring/Member price
- One-time (non-Member) price
- Expected weekly customers
- Expected biweekly customers
- New customers/week target
- Average add-on revenue per job
- Add-on attachment rate (% of jobs that include an add-on)
- Fuel cost estimate (per job or per week)
- Consumables cost estimate (trimmer line, oil, etc.)
- Truck fee per job (confirmed: $10/job flat, paid to `[Partner Name]` — see `docs/BUSINESS_RULES.md`)
- Marketing budget
- Software/subscription costs
- Estimated tax reserve % (placeholder until a CPA gives Logan a real number — see `docs/BUSINESS_RULES.md` Taxes callout)
- Cash reserve target
- Distribution % to Logan (confirmed: 50%)
- Retained % in business (confirmed: 50%)

**Note:** these inputs drive Tabs 3, 4, 5, and 10 — changing a number here should ripple through the whole model. That's the point: it lets the owners ask "what if" questions safely.

---

## Tab 3 — CAN THIS WORK?

**Purpose:** A step-by-step, plain-English walk through whether the business model actually works at the assumptions entered in Tab 2.

Calculated (from Tab 2 inputs):
- Weekly capacity (working days × lawns/day)
- Expected weekly jobs
- Weekly revenue (core + add-on)
- Weekly direct costs (including the $10/job truck fee to `[Partner Name]`)
- Weekly gross profit (Revenue − Direct Costs)
- Weekly operating expenses
- Weekly net profit, pre-tax (Gross Profit − Operating Expenses)
- Estimated tax reserve (net profit pre-tax × the tax reserve % from Tab 2 — placeholder, not tax advice)
- Weekly net profit after tax
- Reserve contribution
- Distributable cash
- Distributed to Logan (50% of net profit after tax) / Retained in business (50% of net profit after tax)

Each calculated row should have a one-line "what this means" note next to it — this tab is explicitly meant to teach the waterfall from `docs/BUSINESS_RULES.md`, not just spit out a number. Note that `[Partner Name]` never appears in the distribution rows — they're compensated entirely through the truck fee already counted in Direct Costs above.

---

## Tab 4 — FOUR-MONTH FORECAST

**Purpose:** Week-by-week and month-by-month projection across the four-month planning horizon (see `docs/PRD.md` §5).

Columns, by week (16 columns) rolling up to 4 monthly totals:
- Customer count
- Jobs completed
- Core service revenue
- Add-on revenue
- Total revenue
- Direct costs (including the $10/job truck fee to `[Partner Name]`)
- Gross profit
- Operating expenses
- Net profit, pre-tax
- Estimated tax reserve (placeholder — see `docs/BUSINESS_RULES.md`)
- Net profit after tax
- Reserve contribution
- Distributed to Logan (50%) / Retained in business (50%)
- Ending cash

**Two scenarios required:** Expected and Conservative, side by side or on toggleable rows — build both, don't pick just one. A Stretch scenario is optional, add later if useful.

An optional annualized run-rate row can be shown, clearly labeled "illustrative only, not a real year-round forecast" (lawn care is seasonal — don't let anyone mistake this for a real annual number).

---

## Tab 5 — PARTNERSHIP & DISTRIBUTIONS

**Purpose:** Turns the filled-in `docs/PARTNERSHIP_TEMPLATE.md` terms into a live calculator. **This is not a two-owner equity split.** Logan owns 100% of LSL. `[Partner Name]` is a non-owner business partner paid a flat fee per job for truck use — they never appear in a distribution row, only in the Direct Costs line. See `docs/BUSINESS_RULES.md` — Distribution Waterfall — before building this tab.

Inputs:
- Owner name (Logan Spence) — 100% ownership, not editable, this isn't a variable
- Business Partner name (`[Partner Name]`) — 0% ownership, non-owner
- Truck fee per job — confirmed **$10** (Direct Cost, not a distribution)
- Estimated tax reserve % — placeholder input until a CPA gives Logan a real number (see `docs/BUSINESS_RULES.md`)
- Distribution % to Logan — confirmed **50%** of Net Profit After Tax
- Retained % in business — confirmed **50%** of Net Profit After Tax
- Initial owner contribution (Logan's cash into the ~$300 startup budget)
- Cash reserve requirement (subject to the OPEN QUESTION FOR LOGAN in `docs/BUSINESS_RULES.md` — flag it on this tab too, don't silently assume an answer)

Outputs (calculated):
- Net profit, pre-tax (pulled from Tab 3 or actuals)
- Estimated tax reserve amount (net profit pre-tax × tax reserve %)
- Net profit after tax
- Cash before distributions
- Required cash reserve
- Cash available for distribution
- Distributed to Logan (50% of net profit after tax)
- Retained in business (50% of net profit after tax)
- Truck fees paid to `[Partner Name]` this period (running total, informational — already subtracted upstream in Direct Costs, shown here for transparency, not as a distribution)
- Ending business cash

**Required warning:** if a proposed distribution would push cash below the reserve requirement, the sheet should visibly flag it (conditional formatting — red cell or warning text). This is the live version of the Distribution Guardrail checklist in `docs/BUSINESS_RULES.md` — and since it's an open question whether that checklist gates the 50/50 split or the 50%-retained half *is* the reserve, add a visible note on this tab pointing to the OPEN QUESTION FOR LOGAN callout so nobody quietly picks an answer while building the sheet.

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

Structure: weeks as columns (1–16), activities as rows. Initial activity rows: Partnership, Business setup, Equipment readiness, Pricing, Google Business Profile, Door hangers, Website, Booking, Payments (Venmo launch → Square evaluation Weeks 9-12 or earlier if triggered), Customer acquisition, Reviews, Recurring memberships, Add-ons, Financial review, Process improvement.

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
- [ ] First customer
- [ ] Five customers
- [ ] Ten recurring customers
- [ ] Five reviews
- [ ] Monthly close completed
- [ ] Reserve funded

**Do not build a fake single "score" number unless every component behind it is visible and explained** — a black-box score defeats the whole point of a system meant to teach, not just report.

---

## Build order recommendation

Build in this order, since later tabs depend on earlier ones existing:

1. Tab 2 (Build My Business) — the inputs everything else needs.
2. Tab 6 (CRM) and Tab 7 (Job Log) — where real data starts landing.
3. Tab 3 (Can This Work?) and Tab 5 (Partnership & Distributions) — the core math.
4. Tab 4 (Four-Month Forecast) and Tab 8 (Weekly Scoreboard) — the tracking layer.
5. Tab 9 (Roadmap), Tab 10 (What If?), Tab 11 (Mentor Dashboard) — the coaching/planning layer.
6. Tab 1 (Start Here) last, once every other tab actually exists to link to.
