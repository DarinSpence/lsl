# LSL — Data Dictionary

Every field from the CRM (Tab 6) and Job Log (Tab 7) tabs, defined in one plain-English line each. This is the file that makes the Sheet teach instead of just calculate — anyone should be able to look up a column here and understand exactly what it means and why it exists.

See `sheets/SHEET_SPEC.md` for the full tab spec these fields belong to.

---

## Partnership & Distribution fields (Tabs 2, 3, 4, 5)

These fields exist because Logan is the **sole owner** of LSL (100%) and his business partner (`[Partner Name]`) is a **non-owner** paid a flat per-job fee — not a co-owner splitting profit. See `docs/BUSINESS_RULES.md` (Distribution Waterfall, Truck Reimbursement) and `docs/PARTNERSHIP_TEMPLATE.md` for the full "why."

| Field | Plain-English definition |
|---|---|
| Truck Fee per Job | The flat dollar amount LSL pays `[Partner Name]` every time a job is completed using their truck — confirmed at **$10/job**. It's counted as a Direct Cost (Cost of Service), the same bucket as fuel or trimmer line, because it rises with job volume. It is not a profit split and not owner equity — `[Partner Name]` isn't an owner. |
| Estimated Tax Reserve % | A placeholder percentage of Net Profit (Pre-Tax) that LSL sets aside for taxes before deciding what to distribute or spend. **This is not tax advice** — it's a rough placeholder until a CPA gives Logan an actual rate/treatment for LSL's real situation. Easy to find and change on Tab 2 once a real number exists. |
| Estimated Tax Reserve Amount | Net Profit (Pre-Tax) × Estimated Tax Reserve % — the dollar amount actually set aside this period under the placeholder above. |
| Net Profit After Tax | Net Profit (Pre-Tax) minus the Estimated Tax Reserve Amount. This is the number the 50/50 distribution split is actually calculated from — not the pre-tax number. |
| Distribution % to Owner | The share of Net Profit After Tax that gets paid out to Logan personally. Confirmed at **50%**. |
| Retained % | The share of Net Profit After Tax that stays inside the business as cash reserve/reinvestment instead of going to Logan. Confirmed at **50%**. Whether this retained half also satisfies the older Distribution Guardrail cash-reserve checklist, or whether that checklist is a separate gate on top of it, is an open question — see the "OPEN QUESTION FOR LOGAN" callout in `docs/BUSINESS_RULES.md`. |

---

## Tab 6 — CUSTOMERS / CRM

| Field | Plain-English definition |
|---|---|
| Customer ID | A unique number/code for this customer, so the same person is never accidentally entered twice under two different rows. |
| Customer Name | The customer's full name. |
| Phone | The best phone number to reach the customer — used for texts/calls about scheduling. |
| Email | The customer's email, if they gave one — used for confirmations/receipts. |
| Service Address | The address where LSL actually does the work (may differ from a billing address, though LSL likely doesn't need one). |
| Neighborhood | The neighborhood or subdivision name — used for route-density planning (see `docs/BUSINESS_RULES.md`). |
| Lead Source | How this customer found LSL (door hanger, Google, referral, Facebook, etc.) — used to learn which marketing channel is actually working. |
| Lead Date | The date this person first became a lead, before they were a paying customer. |
| Status | Where this customer currently sits (e.g. Lead, Quoted, Active, Inactive) — a simple pipeline stage. |
| Recurring Customer? (Y/N) | Whether this customer has a standing/repeat service arrangement, as opposed to a single one-time job. |
| Member Status | Whether this customer currently holds LSL Member status per the Member Rule in `docs/BUSINESS_RULES.md`. |
| Future Appointments Booked | How many upcoming lawn-service appointments this customer currently has on the calendar — this is the number the Member Rule checks. |
| Member Eligible? | A yes/no flag, ideally calculated automatically, that's true when Future Appointments Booked is 2 or more — the live check for the LSL Member Rule. |
| Membership Start Date | The date this customer first qualified as an LSL Member. |
| Frequency | How often this customer gets serviced (e.g. weekly, biweekly, one-time). |
| Standard Service Price | What this customer is normally charged for the core mow/trim service. |
| Last Service Date | The date of this customer's most recent completed job. |
| Next Service Date | The date of this customer's next scheduled job. |
| Preferred Day | The day of the week this customer prefers service — used for route/schedule planning. |
| Gate/Access Notes | Anything LSL needs to know to actually get onto the property and do the job safely (gate codes, dog on property, locked gate, etc.). |
| Service Notes | Any other notes specific to servicing this customer's yard (obstacles, sensitive plants, special requests). |
| Add-On Interests | Add-on services this customer has expressed interest in, even if they haven't bought one yet. |
| Last Add-On | The most recent add-on service this customer purchased, if any. |
| Lifetime Revenue | The total amount this customer has ever paid LSL — a running total, useful for seeing who LSL's best customers actually are. |
| Payment Status | Whether this customer is currently paid up, or has an outstanding balance. |
| Review Requested? | Whether LSL has asked this customer for a review yet. |
| Review Received? | Whether this customer has actually left a review. |
| Referral Source | If this customer was referred by another customer, who referred them. |
| Active/Inactive | Whether this customer is currently being served, or has stopped (moved away, canceled, seasonal pause, etc.). |

---

## Tab 7 — JOB LOG

| Field | Plain-English definition |
|---|---|
| Job ID | A unique number/code for this specific job — one row per completed job, never reused. |
| Date | The date the job was actually done. |
| Customer | Which customer this job was for (links back to the Customer ID in Tab 6). |
| Service | The core service performed (e.g. mow, mow + trim). |
| Add-Ons | Any add-on services performed as part of this job (e.g. weed pulling, driveway wash). |
| Amount Charged | The total dollar amount billed for this job, including any add-ons. |
| Payment Method | How the customer paid (Venmo, cash, Square, etc.). |
| Payment Status | Whether this specific job has actually been paid for yet. |
| Partner(s) Working | Which partner(s) did this job — used later for splitting labor credit/fairness discussions, not for changing the distribution split. |
| Start Time | What time the job actually started. |
| End Time | What time the job actually finished — combined with Start Time, this is how LSL learns real time-per-job data (compare against the Tab 2 assumption). |
| Drive/Travel Estimate | Roughly how much drive time it took to get to this job — feeds the route-density learning over time. |
| Notes | Anything worth remembering about this specific job (something broke, customer asked something, yard condition, etc.). |

---

## Why this file exists

The PRD's own hire brief for this build (see `Deliverables/2026-08-15-lsl-business-builder-hire-research.md` in the myPKA repo) specifically calls out an **annotated data dictionary** as the difference between an "adequate" spreadsheet and a "world-class" one — a sheet with columns nobody can explain isn't actually teaching anything, it's just data entry. If a new field ever gets added to the CRM or Job Log in the live Google Sheet, add its definition here too, so this file never drifts out of sync with the real workbook.
