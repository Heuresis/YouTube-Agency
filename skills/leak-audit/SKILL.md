---
name: leak-audit
command: /leak-audit
description: Six-layer leak audit — diagnose where the channel is losing across Audience / Offer / Topic-Hook / Retention / Distribution / Conversion.
tier: opus
agent_owner: intelligence-head
agent_executor: postmortem-analyst
required_compartments:
  hook_retention_os: 40
  distribution_algorithm: 40
  sales_conversion_stack: 40
  operations_intelligence: 40
mode_applicability: n/a
signal_5tuple:
  mode: ANALYZE
  genre: INFORM
  type: youtube.intelligence.leak-audit.run
  format: MARKDOWN
  weight: 0.85
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Leak Audit

## Purpose
Diagnose where the channel is leaking across the six-layer ecosystem (INV-1): Audience / Offer / Topic-Hook / Retention / Distribution / Conversion. Produces a fix-path with upstream-first ordering — the leak is rarely where the creator looks first.

## Decision Logic
The eagle-eye diagnostic walks each layer top-to-bottom:
1. **Audience**: does this niche even watch? Is the audience compartment populated and accurate? Are recent comments matching the avatar?
2. **Offer**: does the watch-time even have a destination? Is the back-end real, viable, 3:1 LTV:CAC?
3. **Topic-Hook**: do they click and stay 30s? CTR + first-30s retention.
4. **Retention**: do they finish? AVD + curve shape.
5. **Distribution**: does the algorithm push it? Suggested + Search performance.
6. **Conversion**: does watch-time turn into back-end revenue? Pinned VSL → application → call → close stages.

**Always fix upstream before downstream.** Generating thumbnails for a misdefined audience is waste.

## Tacit Principles
1. **Upstream first.** Audience leak → no point fixing thumbnails. Offer leak → no point optimizing CTR.
2. **The leak is rarely where the creator looks first.** They blame retention; the leak is in audience match.
3. **Compartment completeness predicts leaks.** Low-completeness compartments produce downstream symptoms.
4. **One leak at a time.** Fix the upstream-most leak. Re-measure. Then move down.
5. **Quantify when possible.** "AVD 38% vs target 50%" beats "retention is bad."
6. **Cross-reference with /audit-retention.** Per-video data feeds layer-level diagnosis.

## Process

### Step 0 — Gate check
hook_retention_os ≥ 40, distribution ≥ 40, sales_conversion ≥ 40, intelligence ≥ 40.

### Step 1 — Load context
KPI dashboard, last 12 weeks of channel performance, recent video audits, compartment completeness, comments themes, application data, sales call notes.

### Step 2 — Walk Layer 1: Audience
- Compartment 2 completeness
- Recent comments match avatar?
- VOC drift since last cycle?
- Awareness distribution still accurate?

### Step 3 — Walk Layer 2: Offer
- Compartment 3 completeness
- Economics still valid (3:1 LTV:CAC)?
- Offer matches dominant limiting belief?

### Step 4 — Walk Layer 3: Topic-Hook
- Recent CTR vs band
- Recent first-30s retention vs band
- Title + thumbnail vs script-first-30s alignment
- INV-10 violations across recent videos

### Step 5 — Walk Layer 4: Retention
- AVD distribution across recent videos
- Curve shapes (cliff at 30s? mid-point drop? end-screen drop?)
- Hook density / loop density / pattern-interrupt cadence in recent scripts

### Step 6 — Walk Layer 5: Distribution
- Suggested + Search %
- Subscriber bell-curve velocity
- Cross-platform pull from repurposing

### Step 7 — Walk Layer 6: Conversion
- VSL view → application rate
- Application → call rate
- Call → close rate
- Funnel drop locations

### Step 8 — Identify upstream-most leak
The leak that, if unfixed, makes downstream fixes wasted.

### Step 9 — Fix-path
Upstream-most leak first. Specify upstream skill that produces the fix.

### Step 10 — Verify
Banned-vocab, anonymization, no-fabrication.

## Output Format

```markdown
# Leak Audit — [Channel] — [Period]

**Date:** YYYY-MM-DD
**Period audited:** [start - end]

## Layer-by-Layer Walk

### Layer 1 — Audience
- Compartment 2 completeness:
- Drift since last cycle:
- VOC alignment with recent comments:
- Verdict: [PASS / LEAK / UNCLEAR]

### Layer 2 — Offer
- Compartment 3 completeness:
- 3:1 LTV:CAC valid:
- Verdict:

### Layer 3 — Topic-Hook
- Recent CTR (12-week):
- Recent first-30s retention:
- INV-10 violations:
- Verdict:

### Layer 4 — Retention
- AVD distribution:
- Curve patterns:
- Verdict:

### Layer 5 — Distribution
- Suggested + Search %:
- Subscriber velocity:
- Verdict:

### Layer 6 — Conversion
- VSL → app:
- App → call:
- Call → close:
- Verdict:

## Upstream-Most Leak
- Layer: [N]
- Issue:
- Why upstream of other leaks:

## Fix-Path
| Order | Layer | Issue | Upstream skill | Action |
|---|---|---|---|---|
| 1 | [upstream-most] | ... | /skill | ... |
| 2 | ... | ... | ... |
| 3 | ... |

## Re-Measure Schedule
- After Fix 1 implemented, re-measure [Layer N metric] in N weeks
- After Fix 2 ...

---
SIGNAL: S = (ANALYZE, INFORM, youtube.intelligence.leak-audit.run, MARKDOWN, 0.85)
COMPARTMENTS_USED: [all 11]
FRAMEWORKS_USED: [six-layer-eagle-eye-diagnostic, upstream-first-fix-path, compartment-completeness-as-leak-predictor]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: six-layer-eagle-eye-diagnostic]
- [framework: upstream-first-fix-path]
- [framework: compartment-completeness-as-leak-predictor]

## Compartments Read
- All 11 compartments + KPI data + per-video audits

## Verification Gates
- Formal: all 6 layers walked, verdict per layer, upstream-most leak identified, fix-path ordered
- Semantic: leak diagnosed against multiple inputs (not single-cause), upstream-first ordering, fix-path actionable
- Info-theoretic: layers walked tight (not over-analyzed)

## Related Skills
- Upstream: `/audit-retention`, `/kpi-dashboard`
- Downstream: every upstream skill named in fix-path
- Alternative: per-video `/audit-retention` if scope is single-video

## Failure Modes
- **Single-layer focus** — auditing only retention. Walk all 6.
- **Downstream-first fix-path** — recommends fixing thumbnails when audience is leaking. Reorder upstream-first.
- **Vague verdicts** — "retention seems off." Quantify.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
Draws from the six-layer-eagle-eye-vision diagnostic + upstream-first-fix-path tradition + compartment-completeness predictive analysis.
