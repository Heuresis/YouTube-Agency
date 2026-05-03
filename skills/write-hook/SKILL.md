---
name: write-hook
command: /write-hook
description: Write the first-30s hook stack — minimum 3 retention mechanisms calibrated to the Three-Brain decision sequence.
tier: sonnet
agent_owner: retention-head
agent_executor: hook-writer
required_compartments:
  audience_intelligence_system: 60
  hook_retention_os: 40
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.retention.hook.write
  format: MARKDOWN
  weight: 0.6
banned_when:
  - audience_intelligence_system:60
verification_layers: [formal, semantic, info-theoretic, retention-floor]
---

# Write Hook

## Purpose
Write the first 30 seconds of a video — the hook stack — with minimum 3 retention mechanisms calibrated to the Three-Brain Decision Sequence (Reptilian 0–3s / Limbic 3–15s / Neocortex 15s+) per INV-11. The hook is the highest-leverage 30 seconds in the video; bottom-quartile hooks lose 40-60% of viewers before the first content beat.

## Decision Logic
The hook isn't one mechanism — it's a stack. Three Brain layers, three time windows, three different jobs.

- **Reptilian (0–3s):** survival-relevant signal. Pattern interrupt, contrarian claim, threat-frame, statistic-shock, motion. Job: don't get clicked away.
- **Limbic (3–15s):** emotional + social-relevance signal. Story-trigger, identity-mirror, status-stake, curiosity-gap. Job: hook the viewer's emotional system.
- **Neocortex (15s+):** rational commitment. Bound-promise, structural preview, payoff-justification. Job: justify watch-time.

The 4 primary hook formulas (PAST, AID, Contrast, Statistic) and 5 secondary formulas (Curiosity-Gap, Bound-Promise, Contrarian-Frame, Social-Proof-Stack, Universal) map to specific Three-Brain layers. PAST + AID work Reptilian + Limbic; Bound-Promise works Neocortex; Contrarian-Frame works Reptilian; Statistic works Reptilian + Neocortex. Stack 3 mechanisms across the 3 layers minimum.

## Tacit Principles
1. **Reptilian first, always.** If the first 3s don't engage Reptilian, Limbic + Neocortex don't fire.
2. **Specificity beats intensity.** "I watched 80 service businesses fail at delegation" beats "Here's why most delegation fails." Numbers + nouns.
3. **The hook is built backward from the bound-promise.** What does the viewer get if they watch the next 12 minutes? That's the bound-promise. Hook delivers them to it.
4. **Awareness level shifts the hook.** Problem-aware → Statistic + Contrarian. Solution-aware → Bound-Promise + Mechanism. Product-aware → Social-Proof + Contrast. Most-aware → Direct-Pitch.
5. **Voice fidelity overrides hook formula.** A creator's voice always wins. Hook formula is the structural skeleton; voice is the muscle.
6. **No engagement-bait. Ever.** Even if the hook would perform.
7. **The "I'll show you exactly" has to be true.** If the bound-promise commits to "by the end you'll know X," the video must deliver X. Mismatch = INV-10 violation = title-thumbnail-promise alignment fails.
8. **The hook holds across the visual + audio + first-frame.** Static text on screen + the first spoken word + the first cut all serve the hook. Don't waste any of the three.
9. **For Shorts: 2 mechanisms in first 3s + 1 in seconds 3-15.** Hook density per second is much higher.

## Process

### Step 0 — Gate check
audience ≥ 60, hook_retention_os ≥ 40.

### Step 1 — Load context
- Research brief
- `{{audience_intelligence_system}}` (especially VOC + sophistication stage + dominant belief)
- `{{hook_retention_os}}` (signature hook patterns, banned hook patterns, formulas in use)
- `{{creator_identity_matrix.brand_voice_architecture}}` (phrases-to-use, language patterns)

### Step 2 — Pick formula(s)
Match awareness + sophistication + dominant belief. Stack 2-3 formulas across Reptilian / Limbic / Neocortex.

### Step 3 — Draft Reptilian (0-3s)
First sentence + first visual. Pattern interrupt or contrarian frame.

### Step 4 — Draft Limbic (3-15s)
Story / identity-mirror / curiosity-gap. Engage emotional system.

### Step 5 — Draft Neocortex (15-30s)
Bound-promise + structural preview. Justify watch-time.

### Step 6 — Voice-pass
Run draft against `phrases_to_use` + `phrases_to_avoid`. Mirror creator cadence.

### Step 7 — Density check
≥ 3 retention mechanisms in 30s. Each layer hit. Banned-vocab clean.

### Step 8 — Variant generation
Produce 3 hook variants (different formula stacks) for creator selection.

### Step 9 — Verify
Banned-vocab, engagement-bait scan, Truth Gate per claim, title-thumbnail-promise alignment (does this hook match the title's promise?).

## Output Format

```markdown
# Hook — [Title]

**Mode:** authority | reach | hybrid
**Awareness:** [level]
**Hook formulas stacked:** [list]
**Three-Brain coverage:** Reptilian ✓ Limbic ✓ Neocortex ✓
**Predicted first-30s retention:** [estimate vs. channel band]

## Variant A
**Reptilian (0-3s):** [first 1-2 sentences + visual cue]
**Limbic (3-15s):** [next sentences]
**Neocortex (15-30s):** [bound-promise + structural preview]

**Formulas:** [stack]
**Voice notes:** [creator cadence cues]

## Variant B
[same structure, different stack]

## Variant C
[same structure, different stack]

## Retention Mechanisms Count
| Variant | Reptilian | Limbic | Neocortex | Total |
| A | 2 | 1 | 1 | 4 |
| B | 1 | 2 | 1 | 4 |
| C | 2 | 1 | 1 | 4 |

(Minimum: 3 total per INV-11)

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.retention.hook.write, MARKDOWN, 0.6)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, hook_retention_os]
FRAMEWORKS_USED: [three-brain-decision-sequence, four-hook-formulas-primary, five-hook-formulas-secondary, hook-density-rule]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: three-brain-decision-sequence]
- [framework: four-hook-formulas-primary]
- [framework: five-hook-formulas-secondary]
- [framework: hook-density-rule]

## Compartments Read
- `{{creator_identity_matrix.brand_voice_architecture}}`, `{{audience_intelligence_system}}`, `{{hook_retention_os}}`

## Verification Gates
- Formal: ≥ 3 mechanisms across 3 brain layers, banned-vocab scan, engagement-bait scan
- Semantic: Truth Gate per claim, voice fidelity, awareness-stage match
- Info-theoretic: specificity ≥ 3 per hook (numbers + nouns)
- Retention-floor: predicted first-30s retention above channel bottom-quartile

## Related Skills
- Upstream: `/research-brief`, `/build-audience`
- Downstream: `/write-authority-script`, `/write-reach-script`, `/write-shorts-script`
- Alternative: hook-bank lookup if proven hooks exist for this topic

## Failure Modes
- **Reptilian not engaged in 0-3s** — first sentence is filler. Revise: lead with the contrarian / statistic / pattern-interrupt.
- **Bound-promise vague** — "I'll show you the secret." Revise: specific outcome + timeframe + mechanism.
- **Voice mismatch** — hook reads generic. Revise: insert creator cadence patterns from compartment 1.
- **Engagement-bait detected** — INV-17 violation. REJECT.
- **< 3 mechanisms** — INV-11 violation. REJECT.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the three-brain-decision-sequence theorist tradition (Reptilian/Limbic/Neocortex), the loop-system architect (open-loop in hook), and the 4 hook formulas + 5 secondary formulas tradition.
