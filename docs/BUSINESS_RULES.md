# LSL — Business Rules

This is the durable business logic that doesn't change week to week — the rules that make LSL a coherent business instead of an improvised one. If you find yourself explaining one of these rules more than once, point people here instead of re-explaining it (SSOT — one home per fact).

---

## The LSL Member Rule

**A customer becomes an LSL Member the moment they have their next two lawn-service appointments booked.**

That's it. No monthly membership fee. No prepaying for a season. No signed contract.

### Why this rule, and not a subscription

LSL is trading a modest pricing benefit for something more valuable to a brand-new business: **future demand certainty**. Two booked-ahead appointments means LSL knows it has that customer's yard on the calendar without having to re-sell them every visit. That certainty is worth real money to LSL because it:

- Improves route planning (see Route Density below).
- Lowers selling effort — no re-pitching the same customer every two weeks.
- Creates predictable revenue for the four-month forecast.
- Opens the door to add-on revenue (Members get access to Member-only add-ons).

### What Members get

- Preferred pricing on the core mow/trim service (exact discount amount: **TBD — owners to decide, see `docs/PRD.md` §19 open questions**).
- Access to Member-only add-ons (see below).
- Easier repeat booking.
- Scheduling priority where practical.

### How to talk about it (don't undersell it as "just a discount")

> "Keep your next two lawn visits booked and become an LSL Member. Members get preferred pricing and access to add-on services non-Members can't book."

Frame it as a membership/convenience benefit, not a coupon. The value is the relationship, not the price cut.

### How to verify Member status

The CRM (Sheets Tab 6) tracks **Future Appointments Booked** and a computed **Member Eligible?** flag (2+ future lawn-service appointments = Member). See `sheets/DATA_DICTIONARY.md` for the exact field definitions.

### Member-only add-ons (starting list — confirm/finalize with owners)

- Pulling weeds
- Light yard cleanup
- Driveway / sidewalk washing
- Tightening loose deck screws
- Other simple, safe, legal outdoor maintenance tasks within LSL's competence

**Guardrail:** every add-on gets checked against the Safety & Scope rule below before it's offered to anyone.

---

## Pricing Philosophy

**LSL does not compete by being the cheapest option in the neighborhood.**

Price for:

- Labor time (how long the job actually takes)
- Travel time/fuel to get there
- Equipment wear
- Payment processing costs
- Job difficulty (slopes, obstacles, overgrowth)
- Yard size
- The margin the business actually needs to be worth running
- What similar local services charge

Recurring/Member customers can reasonably get preferred pricing because they cost LSL less to serve — less selling effort, better route density, more predictable scheduling. That's a legitimate, explainable reason for a price difference, not favoritism.

**Minimum acceptable price per stop:** the spreadsheet (Sheet Tab 2/3) should eventually calculate this from real cost data — the lowest price LSL can charge a stop and still be worth doing. Until real job data exists, this number is a guess; treat it as a guess out loud, not a fact.

---

## Distribution Waterfall

This is the single most important educational visual in the whole system. Money does not go straight from "customer paid us" to "owners get paid." It flows through these steps, in this order, every time:

```
Customer Revenue
      ↓
Direct Job Costs        (fuel, trimmer line, consumables, blade sharpening, payment fees — costs that rise with each job)
      ↓
Gross Profit             (Revenue − Direct Job Costs)
      ↓
Operating Expenses       (advertising, software, insurance, website, bank fees, general maintenance)
      ↓
Net Profit                (Gross Profit − Operating Expenses)
      ↓
Required Cash Reserve / Future Obligations   (money that has to stay in the business — see below)
      ↓
Cash Available for Distribution
      ↓
Partner Distributions
```

### Why cash and profit aren't the same thing

A business can be profitable on paper and still not have enough actual cash sitting in the account to safely pay the owners — because some of that "profit" needs to become next week's fuel, replacement trimmer line, or an equipment repair. **"Money in the bank does not automatically mean money available to spend personally."**

### Before any distribution, all of this has to be true (the Distribution Guardrail checklist)

- [ ] All completed jobs are recorded.
- [ ] All payments are reconciled.
- [ ] Fuel is funded.
- [ ] Consumables are replenished.
- [ ] Required maintenance is funded.
- [ ] Known bills are funded.
- [ ] Truck reimbursement is recorded.
- [ ] Cash reserve is at or above target.
- [ ] No significant upcoming expense has been ignored.
- [ ] The distribution calculation follows the written partnership agreement.

**If any item on this list fails, reduce or postpone the distribution.** No exceptions made casually — this is exactly the kind of shortcut that causes partner disputes later.

### Owner equity vs. revenue — don't confuse these

- **Owner contribution** (e.g. each partner putting in $150 toward the ~$300 startup budget) increases **owner equity**. It is NOT revenue.
- **Revenue** is money customers pay for services.
- **Distribution** is business cash paid back out to an owner, after the whole waterfall above, according to the partnership agreement.

---

## Truck Reimbursement

If one partner supplies the truck, **the profit split does not change job to job** just because the truck was used. That's a recipe for constant re-negotiation and resentment.

The model instead:

1. The truck stays personally owned by whichever partner owns it.
2. The business pays that partner an agreed truck-use reimbursement.
3. That reimbursement counts as a business operating cost, calculated **before** distributable profit is figured — it comes out of the waterfall above Net Profit, not out of one partner's distribution share.
4. Whatever's left flows through the normal ownership/distribution split for both partners.

The two owners must explicitly agree on (and record in `docs/PARTNERSHIP_TEMPLATE.md`):

- Reimbursement method (per mile? per workday? per month? flat rate?)
- Reimbursement rate
- Whether fuel is included in the reimbursement or billed separately
- Whether maintenance/wear is included
- Who pays insurance on the truck

**There is no required split.** 50/50, 55/45, or 50/50-after-truck-reimbursement are all valid — whatever the owners agree to in writing. Do not treat any particular ratio as the "normal" one.

---

## Route Density

Because this is lawn care, distance matters more than it might seem.

**A $40 lawn next door to another LSL customer can be economically better than a $50 lawn that requires a long drive**, because drive time doesn't earn revenue — it just burns fuel and clock time between paying jobs.

Track (Sheets CRM):

- Neighborhood
- ZIP / service area
- Preferred service day
- Which customers are near each other

**Long-term objective:** cluster recurring/Member customers geographically and by service day, so a single day's route covers the least driving distance for the most paying stops. This is one reason Member customers (who guarantee future bookings) are worth a pricing break — they make route density easier to plan around.

---

## Safety and Scope Guardrail

LSL does not take on work outside its actual competence, no matter how tempting the extra revenue looks.

Before adding any new service or add-on, check it against:

- Safety (can this be done without real risk of injury?)
- Required licensing (does this legally require a license LSL doesn't have?)
- Insurance (is this covered by what LSL carries?)
- Equipment (does LSL actually have what's needed?)
- Property-damage risk
- Local laws
- Whether it's genuinely appropriate for a small mowing/trimming business to offer

**Hard rule: "minor handyman work" never becomes unqualified electrical, structural, roofing, plumbing, pesticide/chemical, tree-removal, or other regulated/high-risk work.** If a customer asks for something like this, the answer is a polite no and a referral elsewhere — not an improvised yes. This is exactly the kind of call that should go to a licensed professional, never to LSL winging it.

---

## Partnership Guardrails (the ground rules, not the filled-in agreement)

These are the standing rules both partners should agree to before day one — the actual numbers (ownership %, distribution %, etc.) get filled into `docs/PARTNERSHIP_TEMPLATE.md`, but these principles govern how those numbers get used:

- Business money is not personal money.
- Expenses require receipts or documentation.
- Reimbursements follow the agreed policy — no ad hoc adjustments.
- Neither partner changes the distribution split casually or unilaterally.
- Major purchases require both partners' approval.
- All customer money goes through the business process (no side cash deals).
- Every job gets recorded, no exceptions.
- Both owners can see the real business numbers, always.
- Disagreements get discussed before either partner withdraws money.

---

## Customer Experience Guardrails

Reliability is very likely a stronger competitive edge for a brand-new lawn business than being the cheapest option:

- Respond quickly to leads.
- Show up when promised.
- Communicate delays instead of going silent.
- Leave the property clean.
- Close gates.
- Avoid property damage.
- Be polite.
- Make payment easy.
- Make recurring service easy to say yes to.
- Ask every satisfied customer for a review.

---

## Weekly and Monthly Operating Rhythm

### Beginning of week
Review the schedule, check weather, check equipment, fill fuel, confirm supplies, respond to open leads.

### After every job
Mark the job complete, record the amount, record payment status, note anything important, schedule the next visit if recurring.

### End of week
Reconcile jobs and payments, record expenses, review customer count, review revenue/profit, check the cash reserve, request reviews, plan next week's marketing.

### Monthly
Close the month, pay/reimburse approved expenses, fund the reserve, calculate available distribution (running the Distribution Guardrail checklist above), approve distributions, review pricing, review any partnership issues, set next month's target.

---

## Cross-references

- `docs/PRD.md` §8 — the canonical Venmo→Square payments-migration trigger list (payments policy lives there, not duplicated here).
- `docs/PARTNERSHIP_TEMPLATE.md` — where the actual numbers behind Truck Reimbursement and Partnership Guardrails get filled in by the two owners.
- `sheets/SHEET_SPEC.md` and `sheets/DATA_DICTIONARY.md` — how these rules get implemented as real spreadsheet fields and formulas.
