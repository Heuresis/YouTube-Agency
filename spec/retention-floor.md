# retention-floor.md — Predicted-AVD Gate Before Script Approval

> **INV-9 enforcement.** No script ships if predicted Average View Duration falls below the channel's bottom-quartile band for that mode. This file specifies the prediction methodology, the floor calibration, and the override path.

---

## Why this matters

The single biggest failure mode of creator-content-from-an-agency is "script reads great, retention is terrible." Agencies optimize for what reads well at desk-review. The algorithm optimizes for retention. The two diverge.

The retention floor closes that gap by **predicting AVD before publish** and refusing to ship anything in the bottom quartile of the channel's known band.

---

## How AVD is predicted

AVD prediction is a weighted composite of seven structural signals plus three calibration signals:

### Structural signals (60% weight)

1. **Hook density** (12%) — count of retention mechanisms in the first 30 seconds. Mechanisms include: hook formula deployment (PAST/AID/Contrast/Statistic/Curiosity-Gap/Bound-Promise/Contrarian-Frame), open-loop statement, pattern-interrupt cue, statistic-shock, micro-callback to a previous video. Floor: 3 mechanisms in first 30s for long-form, 2 in first 3s for Shorts.

2. **Loop architecture density** (10%) — count of open-loops × placement quality. Open-loops scored on (a) opening before 0:15 mark, (b) closing before 50%-mark, (c) callback in close. Maximum score requires 3+ loops opened across the script with proper placement.

3. **Pattern-interrupt cadence** (8%) — average seconds between interrupt cues (cuts / b-roll / supers / music shifts / location changes). Target: 45–60 seconds. Penalty for stretches >90 seconds without interrupt.

4. **Three-Brain Decision Sequence compliance** (8%) — 0–3s engages Reptilian (survival/threat/contrast/movement), 3–15s engages Limbic (emotion/desire/identity), 15s+ engages Neocortex (reason/promise/structure). Sequence break = penalty.

5. **Mode-fit** (8%) — script declared mode matches structural signature. Authority mode = belief-installation arc, expertise demonstration, opinion-led. Reach mode = contrast-format, curiosity-driven, retention-heavy. Mismatch (e.g., authority script with reach hooks) = penalty.

6. **Sophistication-stage match** (8%) — script copy register matches the declared awareness level. Speaking like a Most-aware video to a Problem-aware audience = penalty.

7. **Script-length-to-density ratio** (6%) — long-form videos require sustained density. A 15-minute video with 3 retention mechanisms in the first 30s and none after the 5-minute mark scores poorly even if those first 30s are excellent.

### Calibration signals (40% weight)

8. **Channel history** (20%) — the channel's actual past AVD distribution by video type and length. Predicted AVD anchors against this empirical band. The floor is computed as the 25th percentile of this distribution.

9. **Niche benchmarks** (12%) — the niche's AVD bands from `reference/benchmarks/<niche>.md`. Used as a secondary anchor when the channel has < 20 published videos.

10. **Voice-fidelity** (8%) — Blind-Output-Test-style estimation of how creator-authentic the script reads. Voice-foreign scripts retain worse than voice-native scripts even when structural signals are strong.

---

## The floor band

For each video, the predicted AVD must clear:

```
floor_band = max(
  channel.bottom_quartile_avd_for_mode_and_length,
  niche.bottom_quartile_avd_for_mode_and_length,
  absolute_minimum_floor
)

where absolute_minimum_floor = {
  long_form: 35%,    # below this = the algorithm de-promotes
  shorts: 60%,
  pinned_vsl: 40%
}
```

If `predicted_avd < floor_band`, the script is **rejected** and returned to retention engineering with the specific weak signals flagged.

---

## The retention engineer's revision path

When a script fails the floor gate, the diagnosis report flags the weakest signal contributors. The creator (or `retention-engineer` agent) revises in this priority order:

1. **Hook density first** — if first 30s has < 3 mechanisms, add them. Easiest fix; biggest single-signal lift.
2. **Loop architecture second** — if loops are missing or poorly placed, restructure.
3. **Pattern-interrupt cadence third** — flag stretches >90s and add interrupt cues.
4. **Three-Brain compliance fourth** — verify sequence is intact.
5. **Mode-fit fifth** — if the script is mode-confused, rewrite the contested section to commit to one mode.
6. **Sophistication-stage match sixth** — if copy register is mismatched, recalibrate to the declared awareness level.
7. **Script-length-to-density seventh** — if density is front-loaded, redistribute.

The agent attempts at most 2 revisions before escalating to the creator for a human judgement call.

---

## Override path

The creator can override the floor with explicit acknowledgement:

```
[OVERRIDE — proceeding at <skill> with predicted AVD <X%> below floor <Y%>]
[Reason: <creator-supplied — e.g., "this is an experimental long-form essay, retention is not the goal">]
[Confidence: LOW — output marked DRAFT-ONLY, do not ship without further validation]
```

Overridden scripts:
- carry the `[FLOOR-OVERRIDE: predicted_avd=<X>%, floor=<Y>%]` flag in their metadata block
- are excluded from the channel's library-compound positive-pattern pool
- log a TODO entry to revisit the prediction model if the actual AVD significantly diverges from prediction

Overrides are tolerated when the creator is making an experimental judgement call. Overrides are NOT tolerated as the default path. If a channel has > 20% override rate, the prediction model needs recalibration, not the gate disabled.

---

## Calibration

The channel-specific bottom-quartile band is computed from:
- All long-form videos published in the past 90 days
- Bucketed by mode (authority / reach / hybrid) and length-band (< 6 min / 6–12 min / 12–20 min / 20+ min)
- 25th percentile of AVD% per bucket

When a channel has < 20 videos in a bucket, the niche benchmark substitutes until enough channel data accumulates.

The model recalibrates monthly via `/audit-retention` running on the past 30 days of published videos with actual AVD vs. predicted AVD. Mean Absolute Error logged. Model recalibration triggered when MAE > 8 percentage points sustained.

---

## What this is NOT

This is NOT:
- A guarantee that the actual AVD will hit predicted (variance is real)
- A substitute for creator taste (the creator can override)
- A binary publish/don't-publish gate on every dimension (only on retention)
- An algorithm-aware optimizer (it's a structural-signal predictor, not a YouTube-API integration)

It IS:
- A pre-ship sanity gate that catches structurally weak scripts before publish
- A revision-priority compass when retention is weak
- A learning loop that calibrates against the channel's actual performance over time

---

## Sample output (failed gate)

```
RETENTION FLOOR CHECK — FAILED

Script: "How I Built My Coaching Business in 18 Months"
Mode: authority
Length: 14 min
Predicted AVD: 38%
Floor: 47% (channel bottom-quartile, authority, 12-20min bucket)
Verdict: BELOW FLOOR — revise required

Weak signals (by impact):
1. Pattern-interrupt cadence: 78s avg, target 45–60s. Stretches at 4:30–6:15 (105s) and 9:00–10:45 (105s) without interrupt.
2. Loop architecture density: 1 loop opened (0:12), closed at 8:30. No second or third loop. Target: 3+ loops.
3. Three-Brain compliance: 0–3s neocortex-direct ("In this video I'll show you..."). Reptilian engagement skipped.
4. Hook density: 2 mechanisms in first 30s. Target: 3+.

Revision priorities (in order):
1. Rewrite first 30s — engage Reptilian in first 3s, add 2nd open-loop by 0:15.
2. Add 2 more open-loops at script-mid points. Plant callbacks.
3. Add interrupt cues at 4:45 and 9:30.
4. Re-run check.

Predicted AVD after revision: estimated 49–52% (above floor).
```

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
