# LSL - Partnership Agreement Template

**This is a business-planning template, not legal advice.** It exists so Logan and his business partner can put a fair agreement in writing *before* money creates a disagreement - not after. A qualified local attorney or CPA should review this once it's filled in, especially anything touching business structure, liability, or taxes. Wren (the specialist who built this template) does not give legal, tax, or entity-formation advice - that's explicitly out of scope, see `docs/PRD.md`.

**How to use this:** Both partners fill this in together, out loud, in the same room (or call) - not separately. If you disagree on an answer, that disagreement is exactly the kind of thing this document exists to surface *now*, while it's cheap to resolve, instead of later, when there's real money involved. Every `[ ]` below is a blank for the owners to fill in - Wren has deliberately not pre-filled any of these, per the source PRD's own instruction not to invent answers the owners are supposed to decide (bootstrap §52).

Once filled in and both partners have agreed, the completed version should live in the Google Drive `LSL/06 - Partnership` folder (see `docs/ARCHITECTURE.md`) - **not** committed to this public GitHub repo, since it will contain real names and real financial terms.

---

## 1. The Owner and the Business Partner

**Confirmed by Logan (2026-08-15): LSL is not a two-owner equity partnership - Logan is the sole owner, holding 100% of the company's equity.** His business partner holds zero equity, but is economically compensated two separate ways: a flat per-job truck fee (Section 5) and 50% of every cash distribution (Section 6). **Ownership % and Distribution % are two different numbers - don't let one imply the other.** The rest of this document uses "Owner" for Logan and "Business Partner" for the non-owner partner, instead of "Partner A / Partner B," so the ownership structure stays unambiguous everywhere it's referenced.

- Owner name: Logan Spence
- Business Partner name: `Partner`
- Business legal name: Logan Spence Lawns
- DBA: LSL
- Date this agreement was completed: `[ ]`
- Date this agreement was last reviewed/updated: `[ ]`

## 2. Ownership

- Owner (Logan Spence) ownership: **100%**
- Business Partner (`Partner`) ownership: **0%** - the Business Partner is not an owner of LSL.
- Basis: Logan is the sole owner of the business. The Business Partner's contribution (use of their truck) is compensated as a flat per-job fee, not as an equity stake - see Section 5.
- **Important - Ownership % is not the same thing as Distribution %.** This section (Ownership) is about who legally owns the company: Logan, 100%. Section 6 (Distribution) is a separate number about how *cash payouts* get divided: 50/50 between Logan and the Business Partner, regardless of the 100/0 ownership split above. Read both sections - don't assume one from the other.

## 3. Initial Contributions

- Owner (Logan) initial cash contribution: $`[ ]`
- Total starting owner equity: $`[ ]` (100% Logan's, since Logan is the sole owner)
- Non-cash contributions (equipment, tools, etc.) - list each item and who contributed it. Note: the Business Partner's truck is *not* a capital contribution to the business - it stays their personal property, compensated per Section 5, not listed here as owner equity.

| Item | Contributed by | Estimated value | Owned by business or by individual? |
|---|---|---|---|
| `[ ]` | `[ ]` | $`[ ]` | `[ ]` |
| `[ ]` | `[ ]` | $`[ ]` | `[ ]` |

## 4. Equipment Ownership

- Does each piece of major equipment belong to the business, or stay personally owned?

| Equipment | Owned by | Business or personal? | Notes |
|---|---|---|---|
| Mower | `[ ]` | `[ ]` | `[ ]` |
| Trimmer | `[ ]` | `[ ]` | `[ ]` |
| Truck | `Partner` | Personal (stays owned by the Business Partner) | Compensated per completed job - see Section 5. Not a business asset. |
| Other: `[ ]` | `[ ]` | `[ ]` | `[ ]` |

## 5. Truck Reimbursement - Confirmed Terms

*(See `docs/BUSINESS_RULES.md` - Truck Reimbursement section - for the "why" behind this model.)*

**Confirmed (2026-08-15): the $10/job flat fee is what `Partner` gets paid for truck use and wear - it does not include fuel or materials.** Fuel and materials are handled the same way every other job cost already is: they're **Direct Costs (Cost of Service)**, which come out of revenue *before* Gross Profit - before the waterfall ever reaches Cash Available for Distribution, which is what gets split 50/50 in Section 6. Because Direct Costs reduce that shared distribution pool before the 50/50 split happens, fuel and materials end up economically split evenly between Logan and `Partner` automatically - that's what "split evenly and deducted from the 50/50 share of net profit" already means inside this model, not a new mechanism on top of it. ("Materials" here - mowing/job consumables like trimmer line, bags, or blade sharpening - maps to the "consumables" Direct Cost line already defined in `docs/BUSINESS_RULES.md`; it isn't a new, undefined cost category.)

- Who owns the truck? `Partner` (the Business Partner - not an owner of LSL)
- Reimbursement method: **Flat rate per completed job**
- Reimbursement rate: **$10 per completed job**
- Does the reimbursement include fuel? **No.** Fuel is not folded into the $10/job fee - it's a Direct Cost, same as any other job expense, and reduces Cash Available for Distribution before the 50/50 split, so Logan and `Partner` end up bearing it evenly through that reduced distribution pool rather than through the flat fee itself. The same treatment applies to materials/consumables (trimmer line, bags, blade sharpening, etc.) - see the "consumables" Direct Cost line in `docs/BUSINESS_RULES.md`.
- Does the reimbursement include maintenance/wear? **Read as: yes** - the flat per-job fee is what compensates `Partner` for truck use and wear specifically; fuel and materials are handled separately as Direct Costs, per above, not folded into the $10 fee. (This is a reading of the confirmed statement above, not a separate answer Logan and `Partner` gave directly - flag this if that's not what was meant.)
- Who pays truck insurance? `[ ]` - still to be confirmed between Logan and `Partner`
- Accounting treatment: this $10/job fee is a **Direct Cost (Cost of Service)** - it rises with job volume, so it's counted before Gross Profit, not after. It is paid to `Partner` as ordinary compensation for a business input (truck use), the same way fuel or trimmer line is a Direct Cost. **It is not a distribution and not an owner reimbursement** - `Partner` isn't an owner, so there's nothing to "reimburse" in the owner-equity sense. It is paid earlier in the waterfall, before the distribution step, and is completely separate from the 50/50 distribution split described in Section 6. See `docs/BUSINESS_RULES.md` - Distribution Waterfall - for exactly where this sits in the money flow.

## 6. Distribution Policy - Confirmed Terms

*(Full formula lives in `docs/BUSINESS_RULES.md` - Distribution Waterfall. This section records the confirmed split; it does not re-derive the math.)*

**Two separate numbers - don't confuse them:**

| | Ownership % (Section 2) | Distribution % (this section) |
|---|---|---|
| Logan | 100% | 50% |
| `Partner` | 0% | 50% |

Ownership is a legal/equity fact: Logan owns the entire company, and that never changes as part of this policy. Distribution is a separate, negotiated compensation arrangement: every dollar of **Cash Available for Distribution** gets split 50/50 between Logan and `Partner`, regardless of the 100/0 ownership split above. This is sometimes called a "profits interest" - `Partner` is paid like a 50% partner without holding any equity stake.

- Cash Available for Distribution is split: **50% to Logan, 50% to `Partner`.** Nothing is retained in the business as part of this split - it is not "half distributed, half retained." See `docs/BUSINESS_RULES.md` Distribution Waterfall for exactly where "Cash Available for Distribution" sits, and for the separate (and standard) pre-distribution cash-reserve gate.
- `Partner`'s total economic take from LSL each period = the $10/job truck fee (Section 5, already paid earlier in the waterfall as a Direct Cost) **plus** their 50% share of that period's distribution.
- How often will Logan review and approve distributions? `[ ] Weekly  [ ] Monthly  [ ] Other: [ ]`

## 7. Responsibilities

- Who primarily responds to customer inquiries/leads? `[ ]`
- Who primarily does the mowing/trimming work? `[ ] Both equally  [ ] Split as follows: [ ]`
- Who keeps the Google Sheet / CRM / Job Log updated? `[ ]`
- Who handles marketing (business cards, Google Business Profile, social posts)? `[ ]`
- Who handles the money (payments, Wave, reconciliation)? `[ ]`
- Other responsibilities and who owns them: `[ ]`

## 8. Purchase Approval

**Confirmed (2026-08-15): Logan has sole purchase authority at every dollar amount - there is no joint-signoff threshold, and `Partner` has no purchase-approval veto at any dollar figure.** This isn't a dollar-amount decision, it's a structural one: the original draft of this section assumed both partners sign off above some threshold, but that only makes sense if both people are owners. Per Section 1 and Section 2, `Partner` isn't an owner of LSL - they hold 0% equity and are compensated through the truck fee and the distribution split, not through an ownership stake. Purchase authority is an owner right, and Logan is the only owner, so Logan can buy things for the business unilaterally, at any dollar amount, without needing `Partner`'s agreement. `Partner`'s standing in the business is "profit-sharing partner in net profit after expenses" (their 50% of Cash Available for Distribution, per Section 6) - not "co-decision-maker on how the business spends money." That distinction is what Section 8 needs to reflect.

- Purchase authority: **Logan, as sole owner, can make any purchase for the business at any dollar amount, unilaterally.** There is no dollar threshold requiring `Partner`'s sign-off, and no dollar amount at which `Partner`'s agreement is required - because `Partner` is not an owner (Section 2), only a profit-sharing partner (Section 6).
- Does `Partner` have approval authority or a veto over any purchase, at any dollar amount? **No.** `Partner`'s economic interest is in net profit sharing after expenses, not in a say over what the business buys.
- How is approval given/documented (text thread, verbal + Sheet note, etc.)? `[ ]`

## 9. Dispute Handling

**Confirmed (2026-08-15): Logan and `Partner` will resolve disagreements by talking it out directly, first - there is no mandatory process layered on top of that.** No cooling-off period is built in, and no neutral third party is automatically brought in. The reasoning: at this size, a business owner and a truck-fee/profit-sharing partner can usually work things out in one honest conversation, and pre-building an escalation ladder (mandatory waiting periods, an appointed mediator) adds process for a problem that hasn't happened yet. If direct conversation doesn't resolve something, that's treated as a decision to revisit later - a sign the agreement needs updating (see Section 13), not a trigger for an automatic next step.

- How will Logan and `Partner` resolve a disagreement about money, workload, or a business decision?
  **Direct conversation first.** They talk it through between themselves; there is no other required process at this time.
- Is there a cooling-off step before either one takes unilateral action (e.g. withdrawing money, refusing to work)? **No** - no mandatory cooling-off period is built into this agreement.
- Who (if anyone - e.g. the mentor) can be brought in as a neutral third party if they can't resolve something between themselves? **None designated by default.** No neutral third party is automatically pulled in; if direct talk doesn't settle something, that's revisited as a standalone decision when it comes up, not handled by a pre-set escalation rule.

## 10. What Happens If the Business Partner Stops Working

*(Since `Partner` holds 0% ownership (Section 2) but 50% of distributions (Section 6), this section covers both the truck-fee working relationship and their distribution share, not an ownership change - ownership stays 100% Logan either way.)*

**Confirmed (2026-08-15): if `Partner` becomes temporarily unable or unwilling to provide the truck or do the work, both halves of their pay pause together for that period, then resume normally once they're back.** The $10/job truck fee stops accruing on any job where their truck wasn't actually used - the fee is tied to the truck showing up, not to `Partner`'s status as a person. Their 50% distribution share pauses the same way, on the same logic: distribution is pay for helping earn the profit in that period, so if `Partner` isn't contributing during the pause, they don't collect a share of profit earned on jobs they didn't help with. Both pieces come back exactly as they were - same $10/job rate, same 50% split - the moment `Partner` is back to providing the truck and working. This keeps Section 6's core idea intact: `Partner` is paid for active, ongoing contribution, not for holding a title.

- If `Partner` becomes unable or unwilling to keep providing the truck / working (temporarily or permanently), what happens to:
  - The $10/job truck fee going forward: **Pauses.** No fee accrues on jobs where `Partner`'s truck wasn't used during the pause. Resumes at $10/job once `Partner` is back providing the truck.
  - Their 50% distribution share going forward: **Pauses.** No distribution share on profit from jobs `Partner` didn't help earn during the pause. Resumes at 50% once `Partner` is back working.
  - The business's ability to keep operating without their truck: `[ ]` - not yet answered; this wasn't part of what was confirmed this session.
  - Whether Logan needs a replacement vehicle arrangement: `[ ]` - not yet answered; not a direct consequence of the pause decision above, and not something to infer from it.

## 11. What Happens If the Business Partner Leaves the Business

*(Logan remains the sole owner either way - this section is about winding down the truck-fee and distribution-share relationship, not dividing ownership.)*

- Notice period required before `Partner` can step away: `[ ]`
- Is any payout owed to `Partner` beyond truck fees and distribution share already earned for completed jobs/prior periods? `[ ] No - nothing accrues beyond what's already been paid out  [ ] Other: [ ]`
- Does `Partner`'s 50% distribution share continue after they stop working, or end when they leave? **Confirmed (2026-08-15): it ends immediately when `Partner` stops working - no wind-down period, and no continued share on jobs already booked at the time they leave.** The reasoning is the same as the temporary-pause logic in Section 10: `Partner`'s pay is tied directly to active, ongoing contribution, not to having once been involved. Once they permanently leave, there's no more contribution to pay for, so the distribution share stops at that point rather than tapering off or covering work already on the calendar.
- What happens to the truck once `Partner` is no longer involved (it stays their personal property either way)? `[ ]`
- Does Logan have the right to continue the business alone? `[ ] Yes (default, since Logan is sole owner)  [ ] Other - explain: [ ]`

## 12. What Happens If the Business Closes

- How are remaining business assets (cash, equipment owned by the business) handled? `[ ]` (Note: since Logan is the sole owner, this is about winding down the business, not dividing assets between owners.)
- How are any outstanding debts/obligations handled? `[ ]`
- Who has authority to formally close accounts (bank, Venmo Business, Wave, etc.)? `[ ]`

## 13. Review Cadence

- How often will this agreement be revisited as the business changes? `[ ] Monthly  [ ] Quarterly  [ ] End of season  [ ] Other: [ ]`
- Both Logan and `Partner` must agree to any change to this document. Changes should be dated and both should re-initial below.

## 14. Signatures / Acknowledgment

By filling in and agreeing to this document, Logan and `Partner` confirm they've discussed and agreed to everything above.

- Owner (Logan Spence) signature/initials: `[ ]`  Date: `[ ]`
- Business Partner (`Partner`) signature/initials: `[ ]`  Date: `[ ]`
- Mentor reviewed (optional, recommended): `[ ]`  Date: `[ ]`

---

**Reminder:** this document does not replace legal or tax advice. Once the business is generating real revenue, or if the partners want liability protection (an LLC, for example), a licensed attorney and/or CPA should review this template and the business's actual structure. See `docs/PRD.md` §41 (bootstrap §41) for the full list of insurance/legal/tax items that need professional verification, not guessing.
