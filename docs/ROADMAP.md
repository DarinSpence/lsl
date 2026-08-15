# LSL — 16-Week Roadmap

This is the pacing mechanism for the whole engagement, not a suggestion. Each phase below is a teachable increment — do the objectives, hit the goal, learn something real, then move on. Source: `PROJECT_BOOTSTRAP.md` §44. Exact calendar dates are intentionally left open — track by week number relative to whenever Week 1 actually starts.

Every phase answers: **what do we do, and why now** (not before, not later)?

---

## Week 1 — Understand the Business

**Why this now:** You cannot price a lawn, split a distribution, or pick a payment tool until you've actually done the math on your own business. Skipping this step is the #1 way new owners end up guessing instead of knowing.

Objectives:
- Complete the business-model worksheet (capacity, pricing, growth, costs — see `PROJECT_BOOTSTRAP.md` §12).
- Agree on which services you're offering (mowing + trimming to start).
- Estimate pricing.
- Define startup contributions (who's putting in what, toward the ~$300).
- Discuss partnership economics (start filling in `docs/PARTNERSHIP_TEMPLATE.md`).
- Inventory equipment — what you already have vs. what you need.
- Identify legal/insurance questions to research (not answer yourselves — flag for a professional).

**Goal:** $0 revenue is fine. The goal is clarity, not cash yet.

---

## Week 2 — Build the Minimum System

**Why this now:** You can't accept a customer safely or fairly until booking, payment, and the partnership agreement exist — even in rough form. This week turns "we understand the business" into "we could actually take a job today."

Objectives:
- Create the shared Google Drive folder (`LSL/`) — see `docs/ARCHITECTURE.md` for structure.
- Build the Google Sheet from `sheets/SHEET_SPEC.md`.
- Set up business communication (shared Gmail or similar).
- Set up Venmo Business as the launch payment method (verify current terms first — see `docs/STACK.md`).
- Set up Setmore Free as the booking/request workflow.
- Configure the LSL Member rule inside the CRM (two future appointments = Member — see `docs/BUSINESS_RULES.md`).
- Finish drafting the partnership agreement.
- Create a simple landing page (or at minimum, a booking link you can hand out).
- Start Google Business Profile setup.

**Goal:** Be capable of accepting a customer.

---

## Week 3 — Go to Market

**Why this now:** All the setup in the world doesn't matter until real people see the offer. This is the first real test of the door-hanger + QR + booking chain end to end.

Objectives:
- Print a first small batch of door hangers (test run before a big print order).
- Distribute locally.
- Post in appropriate neighborhood channels (Facebook groups, etc. — free only, no paid ads yet).
- Contact personal network.
- Respond rapidly to any leads that come in.
- Complete first jobs.
- Ask every satisfied customer for a review.

**Goal:** First 1–3 customers.

---

## Week 4 — Learn From Reality

**Why this now:** Your Week 1 assumptions were guesses. Now you have real data — time per job, real costs, real customer reactions. This week is about correcting course before bad assumptions compound.

Objectives:
- Compare actual time/job to your Week 1 assumptions.
- Compare actual costs (fuel, consumables) to your estimates.
- Review pricing — does it still make sense?
- Improve the booking flow based on what was clunky.
- Improve the door hanger based on what did/didn't land.
- Keep distributing door hangers.

**Goal:** 3–5 active customers.

---

## Weeks 5–8 — Build the Recurring Base

**Why this now:** One-time customers are fine, but recurring customers are what makes the business predictable and less exhausting to sell into every week. This phase is about converting early wins into the LSL Member base.

Objectives:
- Convert customers to recurring service (pitch the two-future-appointments Member rule).
- Improve route density — cluster jobs by neighborhood and day.
- Introduce Member-only add-ons.
- Build up reviews.
- Track lead → job → recurring conversion in the Weekly Scoreboard tab.

**Goal:** 5–10 recurring customers.

---

## Weeks 9–12 — Improve Economics & Evaluate the Payment Stack

**Why this now:** By Week 9 you have enough real transaction volume to actually judge Venmo vs. Square on facts instead of guessing — and enough job history to sanity-check pricing and truck reimbursement against reality instead of the Week 1 worksheet.

Objectives:
- Analyze revenue/job and time/job from real data.
- Analyze add-on attach rate.
- Adjust pricing if the numbers say so.
- Review the cash reserve — still adequate?
- Review the truck reimbursement policy against actual mileage/use.
- Only make distributions according to the written policy (never casually).
- **Run the weekly Venmo → Square trigger check every Friday, starting this week** — the six-trigger list is canonical in `docs/PRD.md` §8 and `docs/BUSINESS_RULES.md`. Move to Square as soon as two triggers hold for two weeks running, or one trigger is clearly costing a job/time/trust — don't wait until Week 12 just because the calendar says so.
- If triggered, run the Square pilot (see `docs/PRD.md` §8, Phase 4).

**Goal:** Consistent positive unit economics, and a payment stack that actually matches how complex the business has become — not more, not less.

---

## Weeks 13–16 — Finish the First Planning Cycle

**Why this now:** Four months in, you have a full season of real data to compare against your original Week 1 forecast. This is where the business stops running on guesses entirely and starts running on its own history.

Objectives:
- Compare four-month actuals to the original forecast (Sheet Tab 4).
- Identify best customer types and best neighborhoods (route density payoff).
- Identify which add-ons were actually profitable.
- Review the partnership — is the split, the reimbursement, the workload division still fair?
- Decide, based on real friction, whether any new paid tool is now worth it.
- Build the next-season plan using this season's real numbers instead of assumptions.

**Goal:** Turn the first season's experience into a better second-season business.

---

## How to use this roadmap

- Don't skip a phase to "move faster." The order exists because each phase depends on the last one's real data.
- If a phase's goal isn't hit by its target week, that's useful information, not failure — go back to the "why this now" and figure out what's actually blocking it before adding new tools or tactics.
- Every "evaluate X" milestone (Square, new software in Weeks 13–16) is a decision gated on real operational pain and real economics — never on the calendar alone.
