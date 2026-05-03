# Example: audit-retention output

## Context
- Video: "How to Step Out of Delivery in 90 Days"
- Length: 14 min, authority
- Channel target AVD: 50%, signature ~52%, this video ~38% — bottom-decile
- Comments theme: 5+ comments said "thumbnail led me to expect a fast tactical takeaway, video felt slow"

## Output

```markdown
# Retention Audit — How to Step Out of Delivery in 90 Days

**Published:** 2026-04-12
**Length:** 14 min
**Mode:** authority
**AVD:** 38% (channel target 50%, channel signature 52%)
**Decile rank:** bottom decile (-14% vs signature)

## 1. Curve Walk
| Time | Retention % | Drop | Signature delta |
|---|---|---|---|
| 0:30 | 72% | -28% | -8% vs typical (channel typically ~80% at 30s) |
| 1:00 | 64% | -8% | -4% |
| 2:00 | 55% | -9% | -3% |
| 4:00 | 47% | -8% | -3% |
| 6:00 | 41% | -6% | -5% (sharper) |
| 8:00 | 36% | -5% | -3% |
| 10:00 | 32% | -4% | -2% |
| 12:00 | 28% | -4% | -2% |
| 14:00 | 22% | -6% | -4% (sharp end-screen drop) |

## 2. Drop Zone Attribution
| Time | Drop | Likely causes | Confidence |
|---|---|---|---|
| 0:00-0:30 | -28% (vs expected -20%) | (1) Hook density: only 2 mechanisms (no Reptilian — opened with "let me tell you a story"), (2) Title-thumbnail mismatch: thumbnail showed "90 days fast tactical" energy, hook was slow story-led. Mismatch identified by 5+ comments. | HIGH |
| 4:00-6:00 | -8% then -6% (steeper than typical) | Cadence problem: section between 4:00 and 6:00 had a 2-minute stretch with no pattern-interrupt. Single talking-head shot, no b-roll, no super, no music shift. | HIGH |
| 12:00-14:00 (end-screen drop) | -10% across last 2 min | Bound-promise undelivered: hook promised "specific tactical fixes," script delivered conceptual reframing only. Late-third drop typical of payoff-disappointment. | MEDIUM-HIGH |

## 3. Outlier Analysis (bottom-decile)
- Why this video underperformed:
  1. Title-thumbnail-promise alignment failure (INV-10) — thumbnail signaled fast-tactical, video was slow-conceptual
  2. Hook missing Reptilian mechanism — opened with story instead of contrarian/statistic
  3. Mid-script cadence gap (4:00-6:00) — no pattern-interrupts
  4. Bound-promise undelivered — viewer felt misled
- Repeatable elements (avoid in next-cycle videos):
  1. Story-led hooks for Solution-aware audience (this audience is too sophisticated for slow-build openings)
  2. 2-min cadence gaps in mid-script
  3. Conceptual content under tactical thumbnails
- Anti-patterns to add to creator's `phrases_to_avoid`: opening with "let me tell you a story" for authority videos

## 4. Fix-Path
| Issue | Upstream skill | Fix description |
|---|---|---|
| Hook missing Reptilian mech | `/write-hook` | Rebuild with Contrarian-Frame or Statistic-Shock in first 3s |
| Title-thumbnail-promise mismatch | `/title-thumbnail-pair` | Re-pair: either tactical thumbnail + tactical script, or conceptual thumbnail + conceptual script |
| Mid-script cadence gap | `/retention-engineer` | Insert pattern-interrupts at 4:30, 5:00, 5:30 |
| Bound-promise undelivered | `/research-brief` | Recheck research brief — what did the bound-promise commit to vs. what the script delivered |
| Audience expectation calibration | `/build-audience` (cycle 2) | Update VOC: 5+ comments suggest audience expects tactical-first, not conceptual-first — adjust sub-segment weighting |

## 5. Library-Compound Entry
**Type:** Postmortem (bottom-decile)
**Anonymized swipe-file entry:**

```
[POSTMORTEM] Story-led hook on Solution-aware authority video — INV-10 mismatch
- Mode: authority
- Awareness: Solution-aware
- Sophistication stage: Skeptical
- Pattern: hook opened with "let me tell you a story" framing while thumbnail signaled fast-tactical
- Drop signature: -28% in first 30s (vs -20% typical), late-third drop -10%
- Lesson: Solution-aware audiences in Skeptical-stage markets reject slow-build hooks. Default for this segment = Contrarian-Frame or Statistic-Shock as Reptilian mechanism.
- Fix to bank: rebuild hook with first-3-seconds claim + 80-businesses statistic
- Severity: high — mismatched 4 of 6 retention layers
```

---
SIGNAL: S = (ANALYZE, INFORM, youtube.retention.audit.postpublish, MARKDOWN, 0.7)
COMPARTMENTS_USED: [hook_retention_os, channel_architecture, operations_intelligence]
FRAMEWORKS_USED: [retention-curve-diagnosis, drop-zone-attribution, six-layer-leak-mapping]
CONFIDENCE: HIGH (5+ comments confirming title-thumbnail-mismatch hypothesis, curve signature deltas measurable)
GAPS: []
---
```

## Why this output is calibration-grade
Every drop is layered to multiple causes (not single-cause). Title-thumbnail-promise mismatch supported by audience comment evidence (not just inferred). Fix-path routes each issue to specific upstream skill. Postmortem entry is anonymized, framework-tagged, and ready for library-compound. The diagnostic walks the actual curve, not just the AVD aggregate.
