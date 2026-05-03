---
name: sponsor-fit
command: /sponsor-fit
description: Evaluate sponsor-fit per audience + brand + economics, with FTC disclosure compliance.
tier: sonnet
agent_owner: monetization-head
agent_executor: monetization-head
required_compartments:
  creator_identity_matrix: 70
  audience_intelligence_system: 60
  sales_conversion_stack: 30
mode_applicability: n/a
signal_5tuple:
  mode: ANALYZE
  genre: DECIDE
  type: youtube.monetization.sponsor.fit
  format: MARKDOWN
  weight: 0.6
banned_when: []
verification_layers: [formal, semantic, info-theoretic, sponsor-disclosure]
---

# Sponsor Fit

## Purpose
Evaluate sponsor-fit per audience match + brand match + parasocial-trust contract + economics. Produces a YES / NO / CONDITIONAL recommendation with FTC + local-regulator disclosure plan + integration script outline. Refuses sponsors that violate INV-16 (parasocial-honesty) or INV-15 (disclosure compliance).

## Decision Logic
A sponsor that's wrong-fit costs more than the income it produces — audience trust is the long-term asset; one bad sponsor erodes it.

Sponsor evaluation:
1. **Audience match**: would the audience plausibly use / benefit from this product?
2. **Brand match**: does the sponsor's positioning align with the channel's parasocial-trust contract?
3. **Quality threshold**: has the creator personally tested for ≥ 60 days and found it good?
4. **Economics**: CPM offered vs. channel's CPM band + audience size + integration type
5. **Disclosure**: FTC/ASA/EU compliance achievable

Reject any sponsor failing 1 or more of: audience match / brand match / quality / disclosure compliance / parasocial-trust contract.

## Tacit Principles
1. **Test 60+ days before agreement.** Sponsoring a product the creator hasn't tested is INV-16 violation.
2. **Disclosure is non-negotiable.** Pre-roll: "this video is sponsored by X" within first 30s of the integration. Mid-roll: same. End-roll: same. INV-15.
3. **Integration ≤ 90 seconds for mid-roll.** Longer reads as ad block.
4. **One sponsor per video max.** Multiple = ad block, parasocial-trust drop.
5. **Reject income-claim or hype-laden sponsors.** Even at high CPM.
6. **Channel CPM is calibrated to audience density of value, not raw subs.** A 10K-sub channel with high-buying-power audience can earn 3-5× the CPM of a 50K-sub general audience.
7. **Negotiate exclusivity windows.** 14-day exclusivity per category prevents back-to-back competitor sponsorships.
8. **Track sponsor performance.** Click-through, code redemption, viewer feedback. Renew or kill at 90 days.

## Process

### Step 0 — Gate check
identity ≥ 70, audience ≥ 60, sales_conversion_stack ≥ 30.

### Step 1 — Load context
Compartments 1, 2, 10. Sponsor pitch + product details.

### Step 2 — Audience-fit check
Would the audience plausibly use this product? Evidence?

### Step 3 — Brand-fit check
Does the sponsor's positioning align with the channel's parasocial-trust contract? List of `what_creator_wont_do` from compartment 1.

### Step 4 — Quality check
Has creator tested for 60+ days?

### Step 5 — Economics check
CPM vs. channel band. ROI for sponsor. Sustainability for channel.

### Step 6 — Disclosure compliance check
FTC US / ASA UK / EU per region. Required disclosure language.

### Step 7 — Verdict
YES / NO / CONDITIONAL (with conditions).

### Step 8 — If YES: integration script outline + disclosure script
60-90 sec integration + disclosure language + placement (preroll / mid-roll / end-roll).

### Step 9 — Verify
Banned-vocab in integration script, INV-15 disclosure compliance, INV-16 parasocial-honesty.

## Output Format

```markdown
# Sponsor Fit — [Sponsor Name (or sponsor archetype)]

**Date:** YYYY-MM-DD

## 1. Sponsor Profile (anonymized)
- Product / service:
- Sponsor archetype:
- Audience match claim:
- CPM offered:
- Integration type: preroll / mid-roll / end-roll / affiliate
- Term offered:

## 2. Audience-Fit Check
- Would the audience plausibly use this? [Yes / No / Conditional]
- Evidence:

## 3. Brand-Fit Check
- Aligns with parasocial-trust contract? [Yes / No]
- Conflicts with `what_creator_wont_do`? [List any conflicts]
- Channel philosophy alignment:

## 4. Quality Check
- Creator personally tested ≥ 60 days? [Yes / No / In progress]
- Quality verdict:

## 5. Economics Check
- Channel CPM band: [reference]
- CPM offered:
- ROI estimate for sponsor:
- Sustainability for channel:

## 6. Disclosure Compliance
- Region(s) of audience:
- Required disclosure (US FTC / UK ASA / EU country):
- Disclosure language:

## 7. Verdict
- **[YES | NO | CONDITIONAL]**
- Reasoning:
- Conditions (if CONDITIONAL):

## 8. Integration Script (if YES)
- Placement: preroll / mid-roll / end-roll
- Length: 60-90 sec
- Disclosure language: [verbatim, FTC/ASA-compliant]
- Integration outline:
  - 0-3s: disclosure ("This video is sponsored by X. Here's why I'm sharing them with you...")
  - 3-15s: framing — what's the audience pain it solves
  - 15-60s: specific use case + what the creator personally got from it (60+ day test)
  - 60-90s: CTA + code/link

## 9. Renewal Criteria
- 90-day performance review:
- KPIs to track: click-through, code redemption, comment sentiment
- Renewal threshold:

---
SIGNAL: S = (ANALYZE, DECIDE, youtube.monetization.sponsor.fit, MARKDOWN, 0.6)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, sales_conversion_stack]
FRAMEWORKS_USED: [sponsor-fit-evaluation, parasocial-trust-contract, ftc-disclosure-compliance, integration-script-architecture]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
SPONSOR_DISCLOSURE: PASS | FAIL
PARASOCIAL_HONESTY: PASS | FAIL
---
```

## Frameworks Applied
- [framework: sponsor-fit-evaluation]
- [framework: parasocial-trust-contract]
- [framework: ftc-disclosure-compliance]
- [framework: integration-script-architecture]

## Compartments Read
- `{{creator_identity_matrix}}`, `{{audience_intelligence_system}}`, `{{sales_conversion_stack}}`

## Verification Gates
- Formal: all 6 checks completed, verdict given, integration script if YES
- Semantic: parasocial-trust contract honored, audience match evidenced
- Info-theoretic: integration script tight (60-90s)
- Sponsor disclosure (INV-15): compliant per region
- Parasocial-honesty (INV-16): not violating no-fly zones

## Related Skills
- Upstream: existing sponsor pitch
- Downstream: `/write-authority-script` or `/write-reach-script` (with integration inserted)
- Alternative: none

## Failure Modes
- **YES verdict on untested product** — INV-16 violation. Revise to CONDITIONAL pending 60-day test.
- **Disclosure missing** — INV-15 violation. REJECT.
- **Audience match unevidenced** — generic "yes our audience would like this." Revise: specific evidence.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the sponsor-fit-evaluation tradition + parasocial-trust contract enforcement + FTC disclosure compliance.
