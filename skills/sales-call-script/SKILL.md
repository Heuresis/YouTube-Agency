---
name: sales-call-script
command: /sales-call-script
description: Write the discovery call script — opening, discovery, pitch structure, objection handling, close.
tier: opus
agent_owner: monetization-head
agent_executor: monetization-head
required_compartments:
  offer_architecture: 70
  audience_intelligence_system: 70
  sales_conversion_stack: 50
mode_applicability: n/a
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.monetization.sales-call.script
  format: MARKDOWN
  weight: 0.8
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Sales Call Script

## Purpose
Write the discovery call script — opening, discovery framework (8-stage / FST / SPIN), pitch structure, objection handling, close methodology, post-call sequence handoff. The discovery call converts the qualified application into the enrolled program participant. For $5K-$30K offers, close rate of 25-40% is typical with a strong script + closer.

## Decision Logic
The script is a structural skeleton — not a verbatim recital. The closer adapts in real-time to what the prospect surfaces. The script exists to:
1. Make sure no critical question is missed
2. Surface the buying triggers + objections to address
3. Enforce a consistent close methodology (crossroads / assumptive / question / takeaway)
4. Protect against improvisation drift over time

The opening + discovery section is 60-70% of the call. The pitch is 15-20%. The close is 10-15%.

## Tacit Principles
1. **Discovery is the highest-leverage section.** A good discovery makes the pitch obvious.
2. **Listen for buying triggers verbatim.** When the prospect names a buying trigger, capture it; reuse their words in the pitch.
3. **Don't pitch until permission given.** "Would it be helpful if I walked you through how the program might apply?"
4. **Objection handling is calibrated.** Match objection to underlying belief from `audience_intelligence_system.objection_patterns`.
5. **Close methodology is set, not picked mid-call.** Crossroads / assumptive / question / takeaway — pre-decided per offer + audience.
6. **Truth Gate per claim made on call.** Same standard.
7. **Post-call sequence runs regardless of outcome.** Yes / no / undecided — each gets a sequence.

## Process

### Step 0 — Gate check
offer ≥ 70, audience ≥ 70, sales_conversion_stack ≥ 50.

### Step 1 — Load context
Compartments 1, 2, 3, 10. Application answers (the prospect's responses).

### Step 2 — Pick discovery framework
8-stage / FST / SPIN.

### Step 3 — Write opening (3-5 min)
Rapport + permission + agenda.

### Step 4 — Write discovery (15-18 min)
Per chosen framework. 8-10 questions surfacing pain + desire + capability + buying triggers + objections.

### Step 5 — Write pitch (5-7 min)
Mechanism + offer structure + value stack + price.

### Step 6 — Write objection handling (variable)
Top 8-10 objections + reframes from compartment 2.

### Step 7 — Write close (3-5 min)
Closing methodology + next-step specific.

### Step 8 — Post-call sequence handoff
Email + SMS cadence per outcome (yes / no / undecided).

### Step 9 — Verify
Banned-vocab, no-fabrication, Truth Gate, no-income-claims.

## Output Format

```markdown
# Sales Call Script — [Offer]

**Date:** YYYY-MM-DD
**Call length target:** 25-30 min
**Discovery framework:** 8-stage / FST / SPIN
**Closing methodology:** crossroads / assumptive / question / takeaway

## Opening (3-5 min)
- Rapport
- Permission + agenda

## Discovery (15-18 min)
- Question 1: [opening — context]
- Question 2: [pain]
- ...

(8-10 questions per framework)

## Pitch (5-7 min)
[Mechanism + offer structure + value stack + price reveal]

## Objection Handling (variable, until resolved)
| Objection | Underlying belief | Reframe (verbatim) | Proof to offer |
|---|---|---|---|

## Close (3-5 min)
- Methodology: crossroads / assumptive / etc.
- Specific next-step language

## Post-Call Sequence
### Yes (enrolled)
| Time | Channel | Content |
| T+0 | email | enrollment confirmation + onboarding |
| T+1d | SMS | welcome |
| T+3d | email | first orientation |

### No (declined)
| Time | Channel | Content |
| T+0 | email | "thanks for the time — here's the [diagnostic + nurture sequence]" |

### Undecided
| Time | Channel | Content |
| T+24h | email | "follow-up if you want to revisit" |
| T+5d | email | "checking in" |
| T+14d | email | "last invite for this cohort" |

---
SIGNAL: S = (BUILD, DIRECT, youtube.monetization.sales-call.script, MARKDOWN, 0.8)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, sales_conversion_stack]
COMPARTMENTS_WRITTEN: [sales_conversion_stack.sales_call_script, sales_conversion_stack.post_call_sequence]
FRAMEWORKS_USED: [8-stage-discovery, fst-framework, spin-framework, objection-handling-architecture, close-methodology]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 8-stage-discovery]
- [framework: fst-framework]
- [framework: spin-framework]
- [framework: objection-handling-architecture]
- [framework: close-methodology]

## Compartments Read
- Compartments 1, 2, 3, 10

## Compartments Written
- `{{sales_conversion_stack.sales_call_script}}`, `{{sales_conversion_stack.post_call_sequence}}`

## Verification Gates
- Formal: opening + discovery + pitch + close + post-call sequence specified
- Semantic: discovery questions surface pain + desire + capability + buying triggers + objections, objection handling matches audience library
- Info-theoretic: script is tight (not over-padded)
- Truth Gate per claim, no-fabrication, no-income-claims

## Related Skills
- Upstream: `/design-offer`, `/build-audience`, `/build-application-funnel`
- Downstream: `/post-call-sequence` (could be its own skill in v2)
- Alternative: none

## Failure Modes
- **Pitch before permission** — closes don't land. Add explicit permission ask.
- **Objections handled with generic reframes** — use audience library reframes.
- **No post-call sequence for "no" or "undecided"** — leaves nurture on the table.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the discovery-framework canon (8-stage + FST + SPIN), the objection-handling architecture tradition, and the close-methodology practice.
