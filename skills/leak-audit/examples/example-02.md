# Example: leak-audit output (audience-layer leak)

## Context
- Channel: 4K subs, 18 weeks
- Recent KPIs: CTR 4.2% (just above floor), AVD 41% (below 50% target), 3 applications/month, 1 close in 4 months
- Creator's stated concern: "thumbnails aren't working — I need better thumbnails"

## Output (excerpted)

```markdown
# Leak Audit — [Channel] — Q3 Week 18

## Layer-by-Layer Walk

### Layer 1 — Audience
- Compartment 2 completeness: 55% (FOUNDATION tier — under target 70%)
- Drift since last cycle: SIGNIFICANT
  - Recent comments show 40% are non-target (creators asking about other topics, students, hobbyists)
  - VOC patterns documented in compartment 2 don't match recent comment themes
  - Sales-call data is thin (only 4 calls in 18 weeks despite 36+ applications)
- VOC alignment: 4 of 12 recent comment themes match documented audience VOC — 33% drift
- **Verdict: LEAK — audience compartment is stale/wrong + recent traffic suggests audience-fit is off**

### Layer 2 — Offer
- Compartment 3 completeness: 80%
- 3:1 LTV:CAC: PASS in modeling, but applications are coming from wrong-fit audience
- Offer matches dominant limiting belief: yes for the documented avatar; but recent applications show different transformation needs
- **Verdict: PASS structurally, MISMATCH operationally** — offer is right for documented audience but wrong for current actual audience

### Layer 3 — Topic-Hook
- Recent CTR: 4.2% — at floor but not below
- First-30s retention: 68% — below 70% threshold
- INV-10 violations: 2 of last 8 videos — thumbnail-script mismatch
- **Verdict: SUB-OPTIMAL but probably symptomatic of upstream audience leak**

### Layer 4 — Retention
- AVD distribution: median 41%, range 28-52%
- Curve patterns: 3 of 8 recent videos show 30s-cliff drops — hook is losing the audience that got pulled in by mismatched thumbnails
- **Verdict: SUB-OPTIMAL but symptomatic** — wrong-fit audience drops at 30s because content isn't for them

### Layer 5 — Distribution
- Suggested + Search %: 80% Suggested — but Suggested is feeding cross-niche traffic that doesn't convert
- **Verdict: ALGORITHMIC — distribution is "working" but sending wrong traffic**

### Layer 6 — Conversion
- VSL view → application: 9% (in-band)
- Application → call: 11% (CRITICALLY low — should be 70%+)
- Call → close: 1/4 = 25%
- **Verdict: LEAK — application-to-call conversion at 11% means most applicants don't show or don't qualify**

## Upstream-Most Leak
- **Layer 1 — AUDIENCE.** This is the upstream leak that drives every downstream symptom.
- Issue: audience compartment is stale (55% completeness, drift since launch, VOC patterns don't match recent comments). The channel has accumulated wrong-fit audience over 18 weeks. Suggested feed is amplifying this.
- Why upstream of other leaks:
  - Topic-Hook sub-optimal because hooks calibrated to documented audience don't engage actual current audience
  - Retention drops at 30s because actual audience expected something else
  - Application-to-call is crashing because applications are from wrong-fit audience who don't actually qualify or don't show
  - The thumbnail "problem" the creator perceives is downstream — fixing thumbnails won't fix audience-fit
- **The creator's intuition (fix thumbnails) would waste effort and not address the leak.**

## Fix-Path

| Order | Layer | Issue | Upstream skill | Action |
|---|---|---|---|---|
| 1 | 1 — Audience | Compartment stale + VOC drift + recent comments suggest mismatch | `/build-audience` (cycle 2) | Re-run audience build with last 18 weeks of real comment + sales call data; confirm or adjust avatar; update VOC patterns |
| 2 | 4 — Channel Architecture (downstream of audience refresh) | Architecture may need adjustment if avatar shifts | `/build-channel-architecture` | Update playlists + sequencing path + multi-awareness strategy if avatar shifts materially |
| 3 | 1 — Application qualification | Stricter qualification questions to filter wrong-fit applicants | `/build-application-funnel` | Tighten qualification criteria — add must-have business stage minimum + current delivery % (auto-disqualify outside band) |
| 4 | 3 — Topic-Hook | Adjust to match refreshed avatar | `/title-thumbnail-pair` | Re-run for next 4 videos against refreshed avatar |
| 5 | 4 — Retention | Re-engineer for refreshed avatar | `/retention-engineer` | Review hook formulas vs new-fit audience awareness state |

## Re-Measure Schedule
- After Fix 1 (audience refresh): comment-theme audit at week 22 to see if VOC drift closes
- After Fix 3 (application tightening): applicant volume + show-rate at week 22 (volume may drop, but show + qualify rate should rise)
- After Fix 4 + 5: CTR + first-30s retention at week 24

---
SIGNAL: S = (ANALYZE, INFORM, youtube.intelligence.leak-audit.run, MARKDOWN, 0.85)
COMPARTMENTS_USED: [all 11]
FRAMEWORKS_USED: [six-layer-eagle-eye-diagnostic, upstream-first-fix-path, compartment-completeness-as-leak-predictor]
CONFIDENCE: HIGH (audience-layer leak diagnosed against multiple inputs — compartment completeness, VOC drift, comment theme mismatch, downstream funnel symptoms; fix-path corrects creator's wrong intuition)
GAPS: [audience-fit hypothesis confirmed at high confidence but cycle-2 /build-audience required to lock]
---
```

## Why this output is calibration-grade
The audience-layer leak is correctly identified as upstream of all visible symptoms. The creator's intuition ("fix thumbnails") is shown to be downstream — addressing it wouldn't fix the leak. Multiple inputs corroborate the audience leak (compartment completeness, VOC drift, comment theme mismatch, funnel application-to-call collapse). Fix-path is upstream-first ordered. Re-measure schedule is specific.
