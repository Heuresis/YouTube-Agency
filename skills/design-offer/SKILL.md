---
name: design-offer
command: /design-offer
description: Architect the back-end offer (coaching/program/mastermind/info-product) with value stack, mechanism, and 3:1 LTV:CAC validation.
tier: opus
agent_owner: foundations-head
agent_executor: offer-architect
required_compartments:
  creator_identity_matrix: 60
  audience_intelligence_system: 60
mode_applicability: n/a
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.foundations.offer.design
  format: MARKDOWN
  weight: 0.9
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Design Offer

## Purpose
Architect the channel's back-end offer — the destination the YouTube channel converts into. The offer determines everything: who the channel speaks to, what the channel teaches, where the channel can monetize, and whether the channel scales economically. Produces an Offer Document with offer name, type, price, transformation, value stack, bonuses, mechanism, qualification criteria, guarantee, risk reversal, offer ladder, and economics validation hitting **3:1 LTV:CAC minimum** (INV-4).

## Decision Logic
The offer is the destination. Without a viable destination, the channel is a content treadmill — views without conversion, audience without revenue. The dual-mode strategy is meaningless if the authority videos point to nothing.

The offer must satisfy three constraints simultaneously:
1. **Audience-fit** — the avatar from `audience_intelligence_system` is who the offer serves. The transformation matches the dominant limiting belief (Worthless → Status offer / Helpless → Capability offer / Hopeless → Safety offer).
2. **Economics-fit** — LTV:CAC ≥ 3:1, gross margin ≥ 60%, breakeven within ≤ 6 months. Below these, the channel can't sustainably grow.
3. **Creator-fit** — the offer's delivery mechanics match the creator's life — solo? has team? wants to scale? wants to stay small? An offer that requires 60 hours/week of creator time is not viable for a channel-driven business.

The Math + Psychology = Results frame applies: math validates economics, psychology validates desire. An offer that's economically viable but psychologically wrong (doesn't address the dominant belief) won't convert. An offer that's psychologically right but economically broken can't sustain the channel.

The offer ladder design matters: lead-magnet (free) → optional tripwire ($7–$97) → core offer (the channel's primary back-end) → upsells → high-ticket → continuity. The OS recommends starting with one core offer + lead-magnet, adding ladder rungs later as the channel matures.

## Tacit Principles
1. **Price reveals positioning, not the other way around.** Setting price first forces clarity on positioning. A $200 offer and a $20K offer to the same audience are different offers — different audiences, different mechanics.
2. **The offer must remove the dominant blocker.** If the audience's dominant capability gap is "I can't delegate without quality dropping," the offer must include role-design + accompaniment. The capability gap is what the offer is paid to close.
3. **Promise specificity over promise size.** "Step out of delivery in 90 days using the role-design framework + 4 weekly accompaniment calls" beats "transform your business." Specific > grand.
4. **Mechanism > general framework.** A named, ownable mechanism ("the Role-Design-First framework") beats a generic one ("a delegation framework"). The mechanism is the differentiation surface.
5. **Value stack is psychological, not economic.** Stacked value isn't summed dollar values; it's the perception of "this exceeds the price by 3-10×." The stack must address every objection in the objection library.
6. **The guarantee absorbs risk-reversal pressure.** The guarantee structure is calibrated to the audience's primary fear. Money-back guarantees address Worthlessness ("I'm not worth the cost"). Outcome guarantees address Hopelessness ("It won't work"). Skill-acquisition guarantees address Helplessness.
7. **Qualification criteria filter for fit, not just intent.** The offer is calibrated for a specific archetype. Filtering out wrong-fit applicants protects program quality and creator time.
8. **Economics gate is non-negotiable.** Below 3:1 LTV:CAC, the channel can't scale. Either raise price, increase LTV (continuity / upsells), or reduce CAC (tighter audience targeting). Don't proceed with broken economics.
9. **The offer must produce content.** A good offer generates 50+ video topics across the limiting-belief installation path. If the offer doesn't generate that, it's too narrow or too vague.
10. **Match offer mechanics to channel-stage.** A new channel (< 5K subscribers) doing a $20K mastermind is mismatched. A 50K channel doing a $97 ebook is leaving money on the table. Offer-channel-stage fit matters.

## Process

### Step 0 — Gate check
Verify creator_identity_matrix ≥ 60% and audience_intelligence_system ≥ 60%. If either below, refuse + run upstream skill or interview-mode.

### Step 1 — Load context
- `{{creator_identity_matrix}}` (full)
- `{{audience_intelligence_system}}` (full — especially limiting belief, awareness level, transformation type, objection library, buying triggers, capability audit)
- `reference/frameworks/offer-architecture.md`
- `reference/frameworks/value-stack-design.md`
- `reference/frameworks/ltv-cac-validation.md`

### Step 2 — Pick offer type + price tier
Match dominant limiting belief + buying-power band:
- Helpless / Capability transformation → coaching, cohort, mastermind, done-with-you (mid- to high-ticket: $2K–$30K)
- Hopeless / Safety transformation → done-for-you, group program with strong proof, mastermind with case-study-heavy structure ($5K–$50K)
- Worthless / Status transformation → high-ticket mastermind, identity-aligned community ($10K+)

Choose offer type that matches creator's life (solo / team / scaling / ceiling) and audience economics.

### Step 3 — Define core promise + transformation
- One-sentence transformation: "from [before-state] to [after-state] in [timeframe] using [mechanism]"
- Specific timeframe + specific outcome + named mechanism
- Tested against Truth Gate (no fabrication, no income guarantees)

### Step 4 — Name the unique mechanism
- 2–4 word ownable name (e.g., "Role-Design-First Framework," "Belief-Sequenced Launch System")
- Differentiates from incumbent offers
- Captures the 1–2 key insights the creator brings that competitors miss

### Step 5 — Build value stack
Each component:
- Component name
- Component value (USD perception)
- Objection it addresses (linked to objection library entry)

Total stacked value should be 3–10× price.

### Step 6 — Add bonuses
Each bonus addresses a specific objection from the objection library. Bonus value contributes to stack.

### Step 7 — Design qualification + filtering
- Qualification criteria (3–5 must-haves)
- Disqualification criteria (3–5 must-not-haves)
- Filtering mechanism: application form / call / survey / typeform

### Step 8 — Set guarantee + risk reversal
- Guarantee structure calibrated to dominant fear
- Risk reversal language

### Step 9 — Design offer ladder
- Lead magnet (free) — list-builder, calibrated to audience's first-step pain
- Tripwire (optional, $7–$97) — qualifier
- Core offer — the channel's destination
- Upsells (optional) — adjacent capability extensions
- High-ticket (optional) — top of ladder
- Continuity (optional) — recurring revenue

### Step 10 — Validate economics (3:1 LTV:CAC)
- Estimate LTV: revenue per customer × % continuity attach × continuity term
- Estimate CAC: cost of YouTube production amortized over expected conversions + ad spend if any + sales operations cost
- Compute LTV:CAC ratio. Must be ≥ 3.0
- If below, iterate: raise price, increase LTV via upsells/continuity, reduce CAC via tighter targeting

### Step 11 — Verify
Banned-vocabulary scan, Truth Gate (no fabricated results, no guaranteed income), no engagement-bait, anonymization scan.

## Output Format

```markdown
# Offer Document — [Offer Name]

**Offer Type:** [coaching / cohort / mastermind / course / done-for-you / membership]
**Price Point:** $X,XXX (one-time) or $X,XXX/mo
**Target Avatar:** [from audience_intelligence_system avatar name]
**Transformation Type:** Status | Capability | Safety
**Date:** YYYY-MM-DD
**Confidence:** HIGH | MEDIUM | LOW

## 1. Core Promise (one sentence)
"From [before-state] to [after-state] in [timeframe] using [mechanism]."

## 2. Unique Mechanism
**Name:** [2-4 word ownable name]
**What it is (1 paragraph):**
**What it differentiates against:**
**Key insights it captures:**

## 3. Transformation Delivered
- Before state (specific, quantified):
- After state (specific, quantified):
- Timeframe to outcome:
- Required commitment from buyer:

## 4. Value Stack
| Component | Value (USD) | Objection Addressed |
|---|---|---|
| ... | $X | ... |

**Total stacked value:** $X
**Price:** $X
**Stack-to-price ratio:** Nx

## 5. Bonuses
| Bonus | Value | Objection Addressed |
| ... | ... | ... |

## 6. Qualification
### Must-have criteria
- ...
### Must-not-have criteria
- ...
### Filtering mechanism
[application / call / typeform]

## 7. Guarantee + Risk Reversal
- Guarantee structure: [money-back / outcome / skill-acquisition]
- Specific terms:
- Audience fear it absorbs:

## 8. Offer Ladder
- Lead magnet:
- Tripwire (optional):
- Core offer (this document):
- Upsell:
- High-ticket:
- Continuity:

## 9. Economics Validation
- LTV per customer: $X
- CAC estimate: $X
- LTV:CAC ratio: N.N — [PASS / FAIL]
- Gross margin: X%
- Breakeven cohort: X customers
- Channel-stage fit: [appropriate / mismatch]

## 10. Content Implications
- Belief-installation path the channel must run (ordered list of beliefs to install across videos)
- 50+ video topics this offer generates
- Pinned VSL structure recommendation: 15-step / 11-step / 8-belief / custom

## 11. Compartment Write-Backs
Updates to `offer_architecture.back_end_offers[0]`:
- offer_name, offer_type, price_point, positioning, core_promise, unique_mechanism, value_stack, bonuses, guarantee, qualification, economics_validation, content_to_offer_bridge

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.foundations.offer.design, MARKDOWN, 0.9)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system]
COMPARTMENTS_WRITTEN: [offer_architecture]
FRAMEWORKS_USED: [math-plus-psychology, value-stack-design, limiting-belief-to-transformation-mapping, ltv-cac-validation, offer-ladder-architecture]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: math-plus-psychology] — economics + desire validation
- [framework: value-stack-design] — stacked-value perception engineering
- [framework: limiting-belief-to-transformation-mapping] — Worthless→Status / Helpless→Capability / Hopeless→Safety
- [framework: ltv-cac-validation] — 3:1 minimum gate
- [framework: offer-ladder-architecture] — lead-magnet through high-ticket sequencing

## Compartments Read
- `{{creator_identity_matrix}}` — voice, archetype, positioning
- `{{audience_intelligence_system}}` — avatar, limiting belief, transformation type, objections, capability audit, buying triggers

## Compartments Written
- `{{offer_architecture}}` (full compartment populated)

## Verification Gates
- Formal: Output Format compliance, banned-vocabulary scan, no-fabrication scan, no-income-guarantee scan, anonymization scan
- Semantic: Truth Gate per claim, transformation matches dominant limiting belief, value stack addresses every top-5 objection, guarantee calibrated to dominant fear
- Info-theoretic: stack-to-price ratio ≥ 3, mechanism name compresses to ≤ 4 words, promise specificity ≥ 3 specifics per sentence
- Economics gate: LTV:CAC ≥ 3.0 (INV-4) — REJECT if below

## Related Skills
- Upstream: `/build-niche`, `/build-audience`, `/extract-creator-voice`
- Downstream: `/build-channel-architecture`, `/write-pinned-vsl`, `/build-application-funnel`, `/sales-call-script`, `/series-architect`
- Alternative: none

## Failure Modes
- **Generic transformation** — "transform your business" without specifier. Detect: lacks before-state / after-state / timeframe / mechanism. Revise: add 4 specifics.
- **Mechanism not ownable** — name is too generic. Detect: a competitor could plausibly use the same name. Revise: tighten mechanism name to capture creator's specific edge.
- **Value stack arithmetic only** — components stack to $50K but psychology doesn't justify $X price. Detect: components don't address objection library entries. Revise: align each component to a specific objection.
- **Economics fail** — LTV:CAC < 3:1. REJECT. Revise: raise price, add continuity, reduce CAC via tighter targeting.
- **Guarantee miscalibrated to fear** — money-back guarantee for an audience whose dominant fear is hopelessness ("it won't work for me"). Revise: outcome-guarantee or proof-loaded structure.

## Examples
- See `examples/example-01.md`

## Lineage
This skill draws from the offer-architect tradition (math + psychology = results, value stack engineering, limiting-belief-to-transformation mapping), the long-form-VSL specialist back-end-offer logic (offer must produce 8 beliefs of installation content), and the dual-mode-content-strategy theorist (offer is the destination of authority-mode videos and the routing target of reach-mode viewers).
