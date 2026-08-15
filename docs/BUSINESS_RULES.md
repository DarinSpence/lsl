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

This is the single most important educational visual in the whole system. Money does not go straight from "customer paid us" to "the owner gets paid." It flows through these steps, in this order, every time.

**Ownership reminder, since this trips people up:** Logan owns 100% of LSL. His business partner (`[Partner Name]`) owns 0% — they are not a co-owner and get no profit share. Their entire economic relationship to the business is the flat $10-per-completed-job truck fee, which shows up below as a Direct Cost — the same category as fuel or trimmer line — because it's an expense that rises with job volume, not a distribution of profit. See `docs/PARTNERSHIP_TEMPLATE.md` §§1, 2, 5, 6 for the confirmed terms.

```
Customer Revenue
      ↓
Direct Costs / Cost of Service   (fuel, trimmer line, consumables, blade sharpening, payment fees,
                                   AND the $10/job truck fee paid to [Partner Name] — all costs that
                                   rise as jobs are performed, per §7 of the PRD)
      ↓
Gross Profit                      (Revenue − Direct Costs)
      ↓
Operating Expenses                (advertising, software, insurance, website, bank fees, general maintenance —
                                   costs that don't rise and fall with job count)
      ↓
Net Profit (Pre-Tax)              (Gross Profit − Operating Expenses)
      ↓
Taxes                             (an estimated tax reserve set aside here — see the Taxes callout below)
      ↓
Net Profit After Tax
      ↓
Distributed to Logan: 50%   |   Retained in the business: 50%
```

### Why cash and profit aren't the same thing

A business can be profitable on paper and still not have enough actual cash sitting in the account to safely pay Logan — because some of that "profit" needs to become next week's fuel, replacement trimmer line, or an equipment repair. **"Money in the bank does not automatically mean money available to spend personally."**

### The Taxes step — placeholder, not tax advice

The waterfall above adds an explicit **Taxes** step between Net Profit (Pre-Tax) and the 50/50 split, so LSL gets in the habit of setting aside money for taxes *before* deciding what to spend or distribute — not scrambling for it later. **This is a placeholder mechanism only.** Wren does not give tax advice (see Scope Boundaries in Wren's own contract, and bootstrap §41 / `docs/PRD.md` §41-equivalent). The actual tax rate, filing structure, and whether LSL even owes quarterly estimated taxes is a question for a real CPA, not a guess baked into a spreadsheet. Until Logan gets that answer, the sheet should hold an obviously-labeled "Estimated Tax Reserve %" input that's easy to change once a CPA gives a real number — see `sheets/DATA_DICTIONARY.md`.

### OPEN QUESTION FOR LOGAN — does the old reserve-target checklist still gate the 50/50 split?

The original bootstrap PRD (§37, "Distribution Guardrails") has a separate checklist below that has to be true *before any distribution happens at all* — fuel funded, consumables replenished, bills paid, cash reserve at target, etc. That checklist was written back when the model was more generic and didn't yet have a defined "50% retained in the business" step.

**Now that 50% of Net Profit After Tax automatically stays in the business every time, it's an open question whether:**

1. **The guardrail checklist is still a separate gate** that has to pass *before* the 50/50 split happens at all (i.e., even the 50%-to-Logan half doesn't go out if fuel isn't funded or the reserve is below target), **or**
2. **The 50%-retained half now functions as the reserve mechanism itself** — meaning the checklist gets folded into "is the retained-in-business pool big enough yet," rather than being a separate go/no-go gate every distribution cycle.

**This has not been decided. It needs Logan's actual decision, not an assumption baked into the sheet or this doc.** Whichever way Logan calls it, update this section and `sheets/SHEET_SPEC.md` Tab 5 to match — don't let the sheet and this doc silently disagree.

### Before any distribution, all of this has to be true (the Distribution Guardrail checklist — see the open question above for how this interacts with the 50/50 split)

- [ ] All completed jobs are recorded.
- [ ] All payments are reconciled.
- [ ] Fuel is funded.
- [ ] Consumables are replenished.
- [ ] Required maintenance is funded.
- [ ] Known bills are funded.
- [ ] The $10/job truck fee to `[Partner Name]` is recorded and paid as a Direct Cost.
- [ ] Estimated taxes have been set aside.
- [ ] Cash reserve is at or above target.
- [ ] No significant upcoming expense has been ignored.
- [ ] The distribution calculation follows the written partnership agreement (`docs/PARTNERSHIP_TEMPLATE.md`).

**If any item on this list fails, reduce or postpone the distribution.** No exceptions made casually — this is exactly the kind of shortcut that causes disputes later.

### Owner equity vs. revenue — don't confuse these

- **Owner contribution** (Logan putting cash into the ~$300 startup budget) increases **owner equity**. It is NOT revenue.
- **Revenue** is money customers pay for services.
- **The $10/job truck fee** is a Direct Cost paid to `[Partner Name]` — it's an expense, like fuel, not a distribution and not owner equity, since `[Partner Name]` isn't an owner.
- **Distribution** is business cash paid out to Logan personally, after the whole waterfall above (including Taxes), per the confirmed 50/50 distributed/retained policy in `docs/PARTNERSHIP_TEMPLATE.md`.

---

## Truck Reimbursement — Confirmed Terms

`[Partner Name]` supplies the truck LSL uses for jobs. `[Partner Name]` is **not an owner of LSL** — Logan owns 100% of the business. So this isn't a "partner reimbursement" in the owner-equity sense; it's LSL paying a non-owner a flat fee for a business input, the same way it'd pay for fuel or a rented tool.

**Confirmed model:**

1. The truck stays personally owned by `[Partner Name]`. It is never a business asset.
2. LSL pays `[Partner Name]` a flat **$10 per completed job**.
3. That $10/job is a **Direct Cost (Cost of Service)** — it scales with job volume, so it's counted **before Gross Profit**, alongside fuel and consumables. It is not counted against Logan's distribution share, because Logan doesn't split distributions with `[Partner Name]` at all — `[Partner Name]` gets no distribution, full stop.
4. Whatever's left after Direct Costs, Operating Expenses, and Taxes is Logan's Net Profit After Tax, of which 50% is distributed to Logan and 50% stays in the business — see Distribution Waterfall above.

Still to be confirmed between Logan and `[Partner Name]` (record in `docs/PARTNERSHIP_TEMPLATE.md` §5 once decided):

- Whether the $10/job includes fuel or fuel is billed/handled separately
- Whether the $10/job includes maintenance/wear or that's handled separately
- Who pays insurance on the truck

**Do not confuse this with a profit split.** $10/job is fixed regardless of job price, job profitability, or how the rest of the business is doing — it's an expense line, not equity.

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

These are the standing rules Logan and `[Partner Name]` should agree to before day one — the actual numbers (the truck fee, purchase-approval threshold, etc.) get filled into `docs/PARTNERSHIP_TEMPLATE.md`, but these principles govern how those numbers get used. (Logan is the sole owner; `[Partner Name]` is a non-owner business partner paid per job — see Distribution Waterfall above. These guardrails apply to how the business runs day to day, not to an ownership split that doesn't exist.)

- Business money is not personal money.
- Expenses require receipts or documentation.
- The $10/job truck fee follows the agreed policy — no ad hoc adjustments.
- Logan doesn't change the distribution policy (the 50/50 distributed/retained split) casually or unilaterally — see the OPEN QUESTION FOR LOGAN callout above for the one piece of this that's still genuinely unresolved.
- Major purchases require both Logan's and `[Partner Name]`'s approval, above whatever dollar threshold they set in `docs/PARTNERSHIP_TEMPLATE.md` §8.
- All customer money goes through the business process (no side cash deals).
- Every job gets recorded, no exceptions.
- Logan and `[Partner Name]` can both see the real business numbers, always.
- Disagreements get discussed before either one takes unilateral action with business money.

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
- `docs/PARTNERSHIP_TEMPLATE.md` — where the remaining open items behind Truck Reimbursement and Partnership Guardrails get filled in by Logan and `[Partner Name]`.
- `sheets/SHEET_SPEC.md` and `sheets/DATA_DICTIONARY.md` — how these rules get implemented as real spreadsheet fields and formulas.
