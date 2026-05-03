---
name: write-pinned-vsl
command: /write-pinned-vsl
description: Write the channel's pinned VSL (15-step or 8-belief structure, 25-45 min) — the conversion engine.
tier: opus
agent_owner: monetization-head
agent_executor: vsl-builder
required_compartments:
  creator_identity_matrix: 75
  audience_intelligence_system: 75
  offer_architecture: 80
mode_applicability: authority
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.monetization.vsl.write
  format: MARKDOWN
  weight: 0.95
banned_when:
  - creator_identity_matrix:75
  - audience_intelligence_system:75
  - offer_architecture:80
verification_layers: [formal, semantic, info-theoretic, retention-floor, title-thumbnail-promise]
---

# Write Pinned VSL

## Purpose
Write the channel's pinned VSL — the long-form video sales letter (typical 25-45 min) that lives at the top of the channel home, embedded as the primary back-end conversion engine. The pinned VSL installs all 8 required beliefs, handles ≥10 objections, demonstrates the mechanism, and routes the viewer to application. This is the highest-leverage script in the workspace; conversion math depends on it.

## Decision Logic
The pinned VSL is the channel's belief-installation engine in concentrated form. Where the 8-video series installs beliefs across 8 watches, the VSL installs them in one 30-min watch. The structure: 15-step VSL spine (or 8-belief structural variant), Three-Brain hook, sustained retention scaffolding, mechanism demonstration, case study, objection handling, final pitch.

Required components:
- All 8 beliefs explicitly installed (mapped to script sections)
- ≥ 10 objections handled (from audience objection library)
- Mechanism demo (named, ownable, repeatable)
- ≥ 1 case study (anonymized; no fabrication)
- Application CTA architecture (form / call / typeform handoff)
- Soft urgency and scarcity (only when factually true — Truth Gate)

## Tacit Principles
1. **Voice fidelity above all.** The VSL is read by Most-aware viewers ready to invest — voice mismatch kills conversion. Use creator phrases at high density.
2. **One belief per section.** 8 beliefs = 8 sections (or pairs of sections). Don't mix.
3. **Objections handled at the moment they arise, not at the end.** As the viewer gets to the price, the objections fire. Address them at that moment.
4. **Case study with real numbers, anonymized.** No fabrication. Mark `[PROOF GAP]` if creator lacks a real case.
5. **Mechanism is named and demonstrated.** Not "we have a process." "Role-Design-First framework, 4 components: outputs / decisions / checkpoints / SOP-ownership."
6. **Risk reversal absorbs dominant fear.** Money-back / outcome / skill-acquisition guarantee per audience's dominant belief.
7. **Application CTA is specific and reasonable.** Not "click here." "Apply with the 6-question application; reply within 48 hours."
8. **Truth Gate per claim.** Every number, every result, every testimonial sourced + verifiable.
9. **No fabricated income claims.** INV-6 + regulatory + platform.
10. **Predicted AVD ≥ 35% target on long-form VSL.** Lower than channel average because length + price-discussion drops some viewers naturally; the 35% conversion-mode AVD is the floor.

## Process

### Step 0 — Gate check
identity ≥ 75, audience ≥ 75, offer ≥ 80.

### Step 1 — Load context
Compartments 1, 2, 3, 4. Existing case studies (real, anonymized).

### Step 2 — Pick structure
15-step VSL / 11-step / 8-belief / custom. Default: 8-belief mapped to 15-step spine.

### Step 3 — Write hook (5-7 minutes worth of content)
- 0-3s Reptilian
- 3-15s Limbic
- 15s-1min Neocortex bound-promise
- 1-5min belief 1 install + setup
- 5-7min belief 2 + storytelling
Three-Brain extended through opening 5-7 min.

### Step 4 — Write belief installation core (15-20 min)
Beliefs 3-7 sequenced. Each belief: re-hook + story / mechanism / case-study + lesson.

### Step 5 — Mechanism demonstration
Named mechanism walked through with components.

### Step 6 — Case study
1-2 anonymized case studies with real numbers (creator's own results or client results).

### Step 7 — Objection handling
≥ 10 objections from audience library handled at the moment they arise (typically clustered around the price reveal at 70-80% mark).

### Step 8 — Belief 8 + close
Final belief (often "the cohort + accompaniment closes the implementation gap" or equivalent).

### Step 9 — Application CTA
Specific, reasonable, time-bound.

### Step 10 — Risk reversal
Guarantee structure absorbing dominant fear.

### Step 11 — Voice pass + production cues
Same as `/write-authority-script` but extended.

### Step 12 — Verify
Banned-vocab, Truth Gate per claim, no fabricated case studies, INV-9 (≥35% on conversion-mode), INV-10 (title-thumbnail-promise on the VSL itself), INV-15 if any sponsor (rare in VSL).

## Output Format

```markdown
# Pinned VSL — [VSL Title]

**Mode:** authority (conversion variant)
**Length target:** N min (typical 25-45)
**Word count target:** N words
**WPM baseline:** 145
**Beliefs installed:** all 8
**Objections handled:** N (≥ 10)
**Date:** YYYY-MM-DD

## Section 0: Hook (0:00 - 3:00)
[Reptilian / Limbic / Neocortex extended through 3 min]

## Section 1: Belief 1 (3:00 - 6:00)
[Setup + belief installation]

## Section 2: Belief 2 (6:00 - 9:00)
[Storytelling + belief installation]

## Section 3: Belief 3 (9:00 - 12:00)
[Mechanism intro + belief installation]

## Section 4: Belief 4 (12:00 - 15:00)
[Mechanism deepening]

## Section 5: Belief 5 + Case Study (15:00 - 21:00)
[Anonymized case study with real numbers]

## Section 6: Belief 6 + Objection Cluster A (21:00 - 25:00)
[Differentiation + objections 1-4 handled]

## Section 7: Belief 7 + Objection Cluster B (25:00 - 29:00)
[Timeline + objections 5-7 handled]

## Section 8: Belief 8 + Objection Cluster C (29:00 - 33:00)
[Cohort + objections 8-10 handled]

## Section 9: Mechanism Demo + Risk Reversal (33:00 - 36:00)
[Named mechanism walked through + guarantee structure]

## Section 10: Application CTA + Close (36:00 - 38:00)
[Specific application path + final close]

## Beliefs Map
| # | Belief | Section |
|---|---|---|

## Objections Map
| # | Objection (verbatim) | Section addressed | Reframe |

## Case Studies Used
| # | Case study (anonymized) | Real numbers documented |

---
SIGNAL: S = (BUILD, DIRECT, youtube.monetization.vsl.write, MARKDOWN, 0.95)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, channel_architecture, hook_retention_os]
FRAMEWORKS_USED: [15-step-vsl-spine, 8-required-beliefs, three-brain-decision-sequence, the-loop-system, voice-fidelity-pass, objection-handling-architecture, risk-reversal-by-belief, dual-mode-content-strategy]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
RETENTION_FLOOR: PASS | FAIL (≥ 35% AVD target on conversion-mode)
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
TRUTH_GATE: PASS | FAIL
NO_FABRICATION: PASS | FAIL
NO_INCOME_CLAIMS: PASS | FAIL
---
```

## Frameworks Applied
- [framework: 15-step-vsl-spine]
- [framework: 8-required-beliefs]
- [framework: three-brain-decision-sequence]
- [framework: the-loop-system]
- [framework: voice-fidelity-pass]
- [framework: objection-handling-architecture]
- [framework: risk-reversal-by-belief]
- [framework: dual-mode-content-strategy]

## Compartments Read
- Compartments 1, 2, 3, 4, 6

## Verification Gates
- All 8 beliefs explicitly installed (mapped)
- ≥ 10 objections handled
- ≥ 1 anonymized real case study
- Banned-vocab + engagement-bait clean
- No fabrication (case studies real, numbers real)
- No income guarantees
- INV-9 ≥ 35% AVD on long-form VSL
- INV-10 title-thumbnail-promise alignment
- Truth Gate per claim
- Voice fidelity (phrases_to_use density ≥ 50%)

## Related Skills
- Upstream: `/build-audience`, `/design-offer`, `/build-channel-architecture`, `/extract-creator-voice`
- Downstream: `/build-application-funnel`, `/sales-call-script`
- Alternative: short-form pitch video (different skill, different conversion strategy)

## Failure Modes
- **Belief installation incomplete** — only 6 of 8. REJECT + add missing.
- **Fabricated case study** — Truth Gate REJECT.
- **Income guarantee language** — REJECT (regulatory + platform).
- **Voice generic** — Blind Output Test fails. Re-pass voice.
- **Objections clustered at end only** — viewer drops at price reveal because objections aren't yet handled. Move objection cluster earlier.
- **No mechanism name** — VSL feels like generic coaching pitch. Name + demonstrate.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
Draws from the long-form-VSL specialist tradition (15-step VSL spine + 8 required beliefs + 6 blockage diagnostic), the three-brain-decision-sequence theorist (extended through the longer 5-7 min hook), the awareness-spectrum theorist (VSL targets Most-aware as conversion event), the loop-system architect (loops sustained across 30+ minutes), and the offer-architect (Math + Psychology = Results).
