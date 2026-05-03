# Example: leak-audit output

## Context
- Channel: 1.2K subs, 8 weeks post-launch
- Recent KPIs: CTR 5.6%, AVD 47% (target 50%), 11 applications/month, 0 closes (4 calls completed, all undecided/no)
- Creator's stated concern: "I think my retention is the problem"

## Output

```markdown
# Leak Audit — [Channel] — Q3 Week 8

**Date:** 2026-05-03
**Period audited:** weeks 1-8 post-launch (8 weeks)

## Layer-by-Layer Walk

### Layer 1 — Audience
- Compartment 2 completeness: 78% (HIGH)
- Drift since last cycle: minimal — recent comments echo VOC patterns
- VOC alignment: 9 of 12 recent comment themes match documented audience VOC
- **Verdict: PASS**

### Layer 2 — Offer
- Compartment 3 completeness: 85% (HIGH)
- 3:1 LTV:CAC valid: PASS at 12.2× (well above 3:1 floor)
- Offer matches dominant limiting belief: YES — Helpless / Capability transformation matches Step-Out Program structure
- **Verdict: PASS**

### Layer 3 — Topic-Hook
- Recent CTR (8-week avg): 5.6% — within band (target 6%, floor 4%)
- First-30s retention (8-week avg): 76% — above 70% threshold
- INV-10 violations across recent videos: 0 — title-thumbnail-promise alignment held
- **Verdict: PASS**

### Layer 4 — Retention
- AVD distribution: median 47%, range 38-56%
- Curve patterns: most videos curve normally; one outlier (week 4) had 38% with cliff at 4-6 min — single video issue, not pattern
- Hook density / loop density / pattern-interrupt cadence: per /retention-engineer scaffolding consistently
- **Verdict: PASS** with single-video flag (week 4 video)

### Layer 5 — Distribution
- Suggested + Search %: 68% Suggested / 22% Search / 10% other (healthy for early-stage authority channel)
- Subscriber bell-curve velocity: 76 subs/week last 4 weeks, accelerating slightly
- Cross-platform pull from repurposing: weak — only 8 subs/week from non-YouTube sources
- **Verdict: PASS** with note: cross-platform repurposing under-leveraged

### Layer 6 — Conversion
- VSL view → application: 8.2% (above 5% floor, in-target band)
- Application → call: 75% (above 70% floor)
- Call → close: 0/4 = 0% — INSUFFICIENT DATA but trending poorly
- **Verdict: LEAK** — call → close is the leak

## Upstream-Most Leak
- **Layer: 6 (Conversion) — specifically the discovery call**
- Issue: 4 calls completed, 0 closes. All 4 prospects: 2 stated "$8K is more than I planned to spend," 1 stated "I want to think about it," 1 stated "I'm not sure I'm capable yet."
- Why upstream of other layers: Layers 1-5 are PASSING. The leak is specifically in the call-to-close conversion. Upstream of THAT leak in the conversion stack: discovery call script + objection handling + close methodology.

## Fix-Path

| Order | Layer | Issue | Upstream skill | Action |
|---|---|---|---|---|
| 1 | 6 — Conversion (call-to-close) | 4/4 calls closed undecided/no; objections cluster around price + capability + readiness | `/sales-call-script` revision | Re-write objection handling for "$8K too expensive" + "I'm not sure I'm capable" + "I want to think about it" — pull reframes from compartment 2 objection library, calibrate close to crossroads methodology (better fit for Helpless audience than current open-question close) |
| 2 | 6 — Conversion (pre-call asset) | Calls may be starting cold | `/build-application-funnel` | Add 5-min pre-call asset (framework primer video) — moves prospect from cold to warm before call |
| 3 | 5 — Distribution (cross-platform) | Repurposing pull under-leveraged | `/repurposing-cascade` | Increase cascade rate per long-form to 3 Shorts + 4 social + email + newsletter |
| 4 | 4 — Retention (single-video issue) | Week 4 outlier: 38% AVD, cliff at 4-6 min | `/audit-retention` (per-video) + `/retention-engineer` | Diagnose week 4 video specifically; if cadence gap or unclosed loop, log to library-compound for future calibration |

## Re-Measure Schedule
- After Fix 1 (sales call script revision): re-measure call → close rate after next 3 calls (target 25%+ close rate)
- After Fix 2 (pre-call asset): re-measure call show rate + pre-call engagement (target sustained 75%+ show)
- After Fix 3 (repurposing): re-measure cross-platform subscribers (target 15+ subs/week from non-YouTube within 4 weeks)
- After Fix 4 (retention single-video): re-audit at week 12 to see if pattern repeats

---
SIGNAL: S = (ANALYZE, INFORM, youtube.intelligence.leak-audit.run, MARKDOWN, 0.85)
COMPARTMENTS_USED: [all 11]
FRAMEWORKS_USED: [six-layer-eagle-eye-diagnostic, upstream-first-fix-path, compartment-completeness-as-leak-predictor]
CONFIDENCE: HIGH (clear single-layer leak identified, fix-path upstream-first ordered, re-measure schedule specific)
GAPS: [call → close data still small sample (n=4); confidence will increase after 10+ calls]
---
```

## Why this output is calibration-grade
All 6 layers walked with verdicts. Upstream-most leak correctly identified as Conversion-Layer call-to-close (NOT retention as creator initially suspected). Fix-path is upstream-first inside the conversion layer (sales call script before pre-call asset before repurposing). Re-measure schedule is specific. The diagnostic protected the creator from "fix retention" intuition that wouldn't have addressed the actual leak.
