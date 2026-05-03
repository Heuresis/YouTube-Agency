---
name: build-application-funnel
command: /build-application-funnel
description: Design the application funnel — questions, qualification, booking, confirmation sequence.
tier: sonnet
agent_owner: monetization-head
agent_executor: vsl-builder
required_compartments:
  offer_architecture: 70
  sales_conversion_stack: 40
mode_applicability: n/a
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.monetization.application.build
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Build Application Funnel

## Purpose
Design the application funnel — application form questions, qualification logic, booking tool integration, confirmation sequence (email + SMS), pre-call asset, no-show prevention. The application funnel converts pinned-VSL viewers into discovery calls, then discovery calls into enrollments.

## Decision Logic
The application is the qualifier between Most-aware viewers and the discovery call. Two failure modes:
1. Application too easy → unqualified prospects flood the call calendar
2. Application too hard → qualified prospects abandon

Calibrate per offer price + discovery-call capacity.

The booking + confirmation sequence drives show-rate from typical 50% (no protocol) to 75-85% (full protocol). Show-rate gains compound: every saved no-show is a potential close.

## Tacit Principles
1. **5-7 application questions max.** More = drop-off without proportionate qualification gain.
2. **Questions surface 2-3 things:** fit (avatar match), readiness (capability + budget), specificity (their situation in their own words).
3. **Disqualification is a feature.** Honest disqualification preserves call calendar + protects program quality.
4. **Confirmation cadence drives show.** Booking confirmation → T-24h reminder → T-1h reminder → T-5min reminder. 4 touchpoints minimum.
5. **Pre-call asset moves the prospect.** A 5-min video or PDF watched before the call shifts their state from cold to warm.
6. **No-show recovery sequence.** Within 4 hours of missed call: re-book invite. Within 24 hours: second reach. After: nurture sequence.
7. **Banned-vocab in application.** Same standard.
8. **Truth Gate per claim.** No "limited spots" if not capped.

## Process

### Step 0 — Gate check
offer ≥ 70, sales_conversion_stack ≥ 40.

### Step 1 — Load context
Compartments 3, 10. Existing application if any.

### Step 2 — Design 5-7 application questions
Each question maps to fit / readiness / specificity.

### Step 3 — Set qualification logic
Auto-qualify / auto-disqualify / human review.

### Step 4 — Pick booking tool
Calendly / SavvyCal / Acuity / custom.

### Step 5 — Design confirmation sequence
Booking → T-24h → T-1h → T-5min.

### Step 6 — Design pre-call asset
5-min video or 1-pager.

### Step 7 — Design no-show recovery sequence
T+4h / T+24h / T+72h.

### Step 8 — Verify
Banned-vocab, Truth Gate.

## Output Format

```markdown
# Application Funnel — [Offer]

**Date:** YYYY-MM-DD

## 1. Application Form (5-7 questions)
1. [question — what it surfaces (fit / readiness / specificity)]
2. ...

## 2. Qualification Logic
| Answer pattern | Verdict | Action |
|---|---|---|
| ... | qualify | book call |
| ... | disqualify | redirect to lead-magnet sequence |
| ... | human review | flag for creator |

## 3. Booking Tool
- Tool: Calendly / SavvyCal / Acuity / custom
- Call length: 25-30 min
- Available slots: [creator availability]

## 4. Confirmation Sequence
| Touchpoint | Channel | Content |
|---|---|---|
| T+0 (booking confirmed) | email + SMS opt-in | confirmation + pre-call asset link |
| T-24h | email + SMS | reminder + brief value reinforcement |
| T-1h | SMS | reminder |
| T-5min | SMS | "joining now?" |

## 5. Pre-Call Asset
- Format: 5-min video / 1-pager PDF / mini-case-study
- Content: framework primer + the 3 questions the call will cover
- Goal: move prospect from "considering" to "ready to commit if fit"

## 6. No-Show Recovery
| Time | Channel | Content |
|---|---|---|
| T+4h | email + SMS | "we missed you — rebook here" |
| T+24h | email | second invite + brief context |
| T+72h | email | final invite + nurture sequence handoff |

## 7. Compartment Write-Backs
Updates to `sales_conversion_stack.application_funnel`.

---
SIGNAL: S = (BUILD, DIRECT, youtube.monetization.application.build, MARKDOWN, 0.7)
COMPARTMENTS_USED: [offer_architecture, sales_conversion_stack]
COMPARTMENTS_WRITTEN: [sales_conversion_stack.application_funnel, sales_conversion_stack.show_rate_stack]
FRAMEWORKS_USED: [application-qualification-logic, show-rate-cadence, pre-call-state-shift, no-show-recovery]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: application-qualification-logic]
- [framework: show-rate-cadence]
- [framework: pre-call-state-shift]
- [framework: no-show-recovery]

## Compartments Read
- `{{offer_architecture}}`, `{{sales_conversion_stack}}`

## Compartments Written
- `{{sales_conversion_stack.application_funnel}}`, `{{sales_conversion_stack.show_rate_stack}}`

## Verification Gates
- Formal: 5-7 questions, qualification logic specified, confirmation sequence defined, pre-call asset specified, no-show recovery defined
- Semantic: questions surface fit + readiness + specificity, Truth Gate per claim
- Info-theoretic: questions tight (no padding)

## Related Skills
- Upstream: `/design-offer`, `/write-pinned-vsl`
- Downstream: `/sales-call-script`
- Alternative: none

## Failure Modes
- **Application too long** — > 10 questions. Cut to 5-7.
- **No disqualification logic** — every applicant gets a call. Add criteria.
- **Confirmation cadence missing** — show rate plummets. Add 4 touchpoints.
- **No pre-call asset** — calls start cold. Add.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the show-rate stack methodology + pre-call-state-shift practice.
