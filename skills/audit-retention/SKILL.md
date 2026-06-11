---
name: audit-retention
command: /audit-retention
description: Diagnose a published video's retention curve, identify drop zones, and produce a fix-path.
tier: opus
agent_owner: retention-head
agent_executor: postmortem-analyst
required_compartments:
  hook_retention_os: 40
  channel_architecture: 50
  operations_intelligence: 30
mode_applicability: both
signal_5tuple:
  mode: ANALYZE
  genre: INFORM
  type: youtube.retention.audit.postpublish
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Audit Retention

## Purpose
Diagnose a published video's retention curve. Identify drop zones, root cause per drop, and produce a fix-path. The output feeds a full loop: top-decile videos → `reference/swipe-file/` pattern entries; bottom-decile videos → postmortem entries; and **both** verdicts log to `workspace/published/_ANALYTICS.md`, which re-ranks `workspace/pipeline/SLATE.md` so the next cycle's slate reflects what actually performed.

## Decision Logic
Retention curves are diagnostic. The shape tells you:
- **30s cliff drop**: hook problem (Reptilian didn't engage)
- **Slow taper to mid**: pacing problem (cadence too slow)
- **Mid-point cliff**: section-transition problem or unclosed loop debt
- **Late-third drop**: payoff disappointment (bound-promise undelivered)
- **End-screen drop > 50%**: end-screen design problem

The audit walks the curve, attributes drops to causes from the retention canon (hook density, loop density, cadence, callback presence, mode-fit, sophistication-stage match), and proposes specific fixes for next-cycle videos.

## Tacit Principles
1. **The drop is the data, not the metric.** AVD as a single number hides the curve. Always read the curve.
2. **Compare against the channel's signature.** Each channel has a typical curve shape; deviations from it are the diagnosis.
3. **Outliers (above + below) teach more than average videos.** The 95th-percentile-AVD video reveals what's working. The 5th-percentile reveals what's not.
4. **Drops have layered causes.** A 30s cliff is usually hook + title-mismatch + audience-fit. Don't attribute to one.
5. **Library-compound the patterns.** Repeated drops at similar moments across multiple videos = systemic pattern, not one-off.
6. **Fix-paths are upstream.** The fix is rarely "make the script better." It's "fix the audience targeting" or "fix the title-thumbnail-promise alignment."

## Process

### Step 0 — Gate check
hook_retention_os ≥ 40, channel_architecture ≥ 50, intelligence ≥ 30.

### Step 1 — Load context
- The video (title, length, mode, awareness target, hook, loop architecture)
- Retention curve data (per-second or per-30s buckets)
- Channel curve signature
- Comments + comment themes from this video

### Step 2 — Walk the curve
Identify drop zones (any moment where retention drops > expected for the section).

### Step 3 — Attribute causes
For each drop zone, attribute to: hook density / loop density / cadence / callback / mode-fit / sophistication / title-thumbnail mismatch / audience-fit / pacing / payoff disappointment.

### Step 4 — Outlier analysis
If video is in top or bottom decile, articulate what worked / what didn't.

### Step 5 — Fix-path
For each cause, specify the upstream skill that produces the fix.

### Step 6 — Library-compound entry + analytics log
Top-decile → draft the anonymized `reference/swipe-file/` pattern entry. Bottom-decile → draft the anonymized postmortem entry. Either way (including mid-decile), append the audit verdict to `workspace/published/_ANALYTICS.md` — that log is what re-ranks `workspace/pipeline/SLATE.md` for the next cycle.

### Step 7 — Verify
Banned-vocab, anonymization (no real channel names), Truth Gate.

## Output Format

```markdown
# Retention Audit — [Title]

**Published:** YYYY-MM-DD
**Length:** N min
**Mode:** authority | reach | hybrid
**AVD:** N% (channel target N%, channel signature N%)
**Decile rank:** top / mid / bottom

## 1. Curve Walk
| Time | Retention % | Drop magnitude | Channel signature delta |
|---|---|---|---|
| 0:30 | N% | -N% | +/-N% vs typical |
| ... |

## 2. Drop Zone Attribution
| Time | Drop | Likely causes | Confidence |
|---|---|---|---|
| 0:30 | 12% | hook 2nd-mech weak + title-thumbnail mismatch | HIGH |
| ... |

## 3. Outlier Analysis (if applicable)
- Why this video over/underperformed:
- Repeatable elements:
- Anti-patterns:

## 4. Fix-Path
| Issue | Upstream skill | Fix description |
|---|---|---|
| Hook 2nd-mech weak | /write-hook | rebuild Limbic mechanism |
| Title-thumbnail mismatch | /title-thumbnail-pair | re-pair against first-30s promise |
| ... |

## 5. Library-Compound Entry (top/bottom decile)
[anonymized swipe-file pattern entry (top-decile) or postmortem entry (bottom-decile) per `/library-compound` format]

## 6. Analytics Log Line
[the verdict row appended to `workspace/published/_ANALYTICS.md` + any resulting `workspace/pipeline/SLATE.md` re-rank notes]

---
SIGNAL: S = (ANALYZE, INFORM, youtube.retention.audit.postpublish, MARKDOWN, 0.7)
COMPARTMENTS_USED: [hook_retention_os, channel_architecture, operations_intelligence]
FRAMEWORKS_USED: [retention-curve-diagnosis, drop-zone-attribution, six-layer-leak-mapping]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: retention-curve-diagnosis]
- [framework: drop-zone-attribution]
- [framework: six-layer-leak-mapping]

## Compartments Read
- `{{hook_retention_os}}`, `{{channel_architecture}}`, `{{operations_intelligence}}`, video metadata + analytics

## Verification Gates
- Formal: every drop zone has cause + confidence + fix-path
- Semantic: causes attributed to multiple inputs (not single-cause), six-layer mapping applied
- Info-theoretic: outlier articulation specific (not "did well")

## Related Skills
- Upstream: published video + analytics
- Downstream: `/library-compound`, `/leak-audit`, every upstream skill named in fix-path; `workspace/published/_ANALYTICS.md` → `workspace/pipeline/SLATE.md` re-rank
- Alternative: none

## Failure Modes
- **Single-cause attribution** — every drop blamed on one thing. Revise: layer 2-3 causes.
- **No fix-path** — diagnosis without action. Revise: name upstream skill per cause.
- **Anonymization slip** — competitor archetypes named instead of described. Revise.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the postmortem-analyst tradition (curve-walking + drop-zone attribution) and the six-layer-eagle-eye-vision diagnostic.
