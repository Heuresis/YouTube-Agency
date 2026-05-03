# Example: library-compound output

## Output

```markdown
# Library Compound Report — [Channel] — Q3 Weeks 1-12 Cycle

**Date:** 2026-05-03
**Period compounded:** weeks 1-12 (12 weeks of post-launch outputs)

## 1. New Swipe-File Entries (top-decile)

| # | Asset type | Framework tags | Anonymized specimen path | Why it worked |
|---|---|---|---|---|
| 1 | Hook (long-form authority) | Contrarian-Frame + Statistic-Shock + Bound-Promise | swipe-file/hooks/SWIPE-001.md | First-30s retention 82%, top-decile against channel band; reads creator-typical |
| 2 | Title (Pillar 1 list+outcome) | "The 6 Patterns of [audience pain]" template | swipe-file/titles/SWIPE-005.md | CTR 7.2%, top-decile; specificity (number + audience + pain) drives feed click |
| 3 | Thumbnail (face-left-text-right) | Contrarian-stare 6/10 + accent-yellow text "Pattern 4 surprise" | swipe-file/thumbnails/SWIPE-008.md | A/B win vs Variant B by 1.2% CTR; surprise-text outperformed authority-text |
| 4 | Authority script section opening | Re-hook "Pattern X is the one most operators..." | swipe-file/script-sections/SWIPE-012.md | Section retention held at 75%+ across 4 videos using this re-hook pattern |
| 5 | Loop close (callback in close) | Full-hook callback + lead-magnet handoff | swipe-file/loop-closes/SWIPE-015.md | Appears in 3 top-decile videos; consistent late-third retention boost |

## 2. New Postmortem Entries (bottom-decile)

| # | Asset type | Framework misapplication | Anonymized specimen path | What failed |
|---|---|---|---|---|
| 1 | Hook (week 4 video) | Story-led PAST hook on Solution-aware audience without Reptilian mechanism in 0-3s | postmortem/hooks/POST-001.md | -28% drop at 30s; audience expected fast-tactical (per thumbnail), got slow-build story; INV-10 mismatch |
| 2 | Title-thumbnail pair (week 4) | Tactical thumbnail + conceptual script | postmortem/title-thumbnail/POST-002.md | Thumbnail signaled fast-tactical, script delivered slow-conceptual; comments confirmed mismatch |
| 3 | Mid-script cadence gap (multiple videos) | 2-min stretch without pattern-interrupt | postmortem/scripts/POST-003.md | Steeper drop across drop zones in any video where this pattern recurred |

## 3. Framework Annotations (creator-specific calibrations)

| Framework | Generic rule | Creator-calibrated | Evidence |
|---|---|---|---|
| Three-Brain Decision Sequence | Reptilian first, always | This creator: Reptilian via contrarian-frame consistently outperforms Reptilian via statistic-shock by 6-9% CTR — contrarian-frame is the channel default | 8 weeks of A/B variants |
| The Loop System | ≥ 3 loops per long-form | This creator: 4 loops works better than 3 — analytical-explainer archetype carries dense loop architecture without reading frenetic | retention curve comparison |
| Pattern-interrupt cadence | Every 45-60s | This creator: 50s cadence with ± 10s tolerance is optimal; tighter than 45s reads frenetic for measured-direct delivery style | 12 weeks of edits |
| Re-hook → story → lesson | Per section | This creator: works at section-length 90s-120s; longer sections lose audience even with re-hook | post-edit retention |
| 4-Pillar Title Formula split | 40/30/20/10 | Channel running 58/21/14/8 — over-skewed to Pillar 1; should rotate Pillar 2-4 more in upcoming videos | 12-week audit |

## 4. Hook Bank Tier Update

### Tier 1 (high-performance, default to use)
- Contrarian-Frame + Statistic-Shock + Bound-Promise stack (Reptilian / Limbic / Neocortex)
- "I've watched [N] businesses..." opening as Limbic mechanism
- "By the end of this video you'll know which 2 you're in" as Neocortex bound-promise pattern

### Tier 2 (mid-performance, conditional use)
- PAST hook openings (story-led) — work for case-study videos but underperform on Problem-aware audience
- Curiosity-Gap solo opening (without Reptilian backing) — tier 2 because relies on title alone

### Tier 3 (under-performance, avoid for now)
- Story-led PAST opening on Solution-aware audience (consistently underperforms)
- Soft openings ("let me tell you...") — drift away from creator's measured-direct voice
- Universal-Hook patterns — too generic for Skeptical-stage audience

## 5. KPI Band Recalibration

| Metric | Old band | New band | Reasoning |
|---|---|---|---|
| First-30s retention floor | 70% | 75% | 12-week median has been 78%; floor adjusted up |
| AVD floor (channel-stage-adjusted) | 40% | 42% | Recent videos have averaged 47%; floor should track up |
| CTR target | 6% | 5.8-6.2% | 12-week median is 5.8%; 6% was aspirational, 5.8% is realistic |
| Pinned VSL conversion floor (view → app) | 5% | 6% | 8.2% actual median; 5% was too low |

## 6. Voice Calibration Update
- **Phrases that compounded** (high audience response, reuse default):
  - "structural, not characterological"
  - "the role, not the person"
  - "[N] businesses I've watched"
  - "the bottleneck"
  - "design before hire"
  - "the structural fix"
- **Phrases that drifted** (avoid going forward):
  - "let me tell you a story" (story-led opening that didn't fit Solution-aware audience)
  - "transform your business" (drifted into the canonical banned list — needs flagging in voice doc)
- **Cadence patterns that emerged**:
  - "[Concept A] is structural. [Concept B] is characterological." pattern works as a thinking-tool reference (audience adopting the framing in comments)

## 7. Compartment Write-Backs
Updates to:
- `operations_intelligence.library_compounding`:
  - swipe_file_growth_target_per_month: 5 (matches current cadence)
  - framework_extraction_target_per_month: 3
  - pattern_review_cadence: "monthly"
- `hook_retention_os`:
  - signature_hook_patterns: [Tier 1 hooks above]
  - banned_hook_patterns: [Tier 3 patterns]
  - long_form_avd_floor_pct: 42 (adjusted up from 40)
  - long_form_avd_target_pct: 50 (held)
- `creator_identity_matrix.brand_voice_architecture`:
  - phrases_to_use: add 5 high-performing phrases identified above (with appearance counts)
  - phrases_to_avoid: add "let me tell you a story" (creator-specific)

---
SIGNAL: S = (BUILD, INFORM, youtube.intelligence.library.compound, MARKDOWN, 0.7)
COMPARTMENTS_USED: [all 11 + production outputs]
COMPARTMENTS_WRITTEN: [operations_intelligence.library_compounding, hook_retention_os, creator_identity_matrix.brand_voice_architecture]
FRAMEWORKS_USED: [encoding-flywheel, swipe-file-extraction, framework-creator-calibration, hook-tier-system, kpi-band-recalibration]
CONFIDENCE: HIGH (5 swipe + 3 postmortem + 5 framework calibrations + hook tiering + KPI bands recalibrated + voice updates)
GAPS: []
---
```

## Why this output is calibration-grade
Top-decile and bottom-decile both compounded (not only top). Framework annotations include specific creator-calibrations (Three-Brain optimization, loop count, cadence tolerance, re-hook section length). Hook bank tiered 1-3 with specific patterns. KPI bands recalibrated against actual data. Voice calibrations include both compounding phrases and drifted phrases. The library now produces sharper drafts in cycle 2.
