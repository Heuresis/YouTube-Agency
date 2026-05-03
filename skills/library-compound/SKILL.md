---
name: library-compound
command: /library-compound
description: Compound the channel's library — extract patterns from successful + failed outputs into the swipe-file + framework annotations.
tier: opus
agent_owner: intelligence-head
agent_executor: postmortem-analyst
required_compartments:
  operations_intelligence: 40
mode_applicability: n/a
signal_5tuple:
  mode: BUILD
  genre: INFORM
  type: youtube.intelligence.library.compound
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Library Compound

## Purpose
Operate the encoding flywheel. Extract patterns from successful and failed outputs across the channel + program + audience and compound them into the swipe-file (anonymized specimens), framework annotations (creator-specific calibrations), hook-bank tier-up, retention-curve signature updates, and KPI band recalibrations. This skill makes the OS smarter every cycle.

## Decision Logic
The encoding flywheel is the long-term moat. Each cycle:
- Outputs that performed in top-decile become swipe-file entries (anonymized, framework-tagged) for cycle-N+1 reference
- Outputs that performed in bottom-decile become postmortem entries (anonymized) — patterns to avoid
- Frameworks calibrated against actual channel performance get annotations ("for this creator, this framework runs at X parameter")
- Hook bank tiers based on real hook performance
- Retention curve signatures update from real per-video curves
- KPI bands recalibrate from real channel data

The swipe-file + annotations form the channel's compound library — by cycle 5+, this library produces drafts so close to creator's voice that the Blind Output Test passes consistently.

## Tacit Principles
1. **Anonymize all outputs.** Swipe-file is for imitation surface, not attribution. Never name the original.
2. **Framework-tag every entry.** "PAST hook + Bound-Promise + Statistic in Reptilian-Limbic-Neocortex stack — predicted AVD HIGH actual AVD HIGH."
3. **Both top + bottom decile teach.** Don't only library top-decile. Bottom-decile postmortems prevent recurring failure.
4. **Calibrate frameworks per-creator.** Generic framework rule: "Re-hook every section." Creator-calibrated: "For this creator's analytical-explainer archetype, re-hook every 2 minutes works; every 1 minute reads frenetic."
5. **Recalibrate KPI bands quarterly.** Channel's CTR / AVD / RPM bands evolve.
6. **Hook-bank tier-up monthly.** Top-performing hook patterns get tier-1 status; under-performing tier-3.
7. **Voice-specific calibrations are the highest-leverage compound entries.** They produce the Blind Output Test pass rate gains.
8. **Library entries have an entry date + version.** Pattern from 6 months ago may not apply now.

## Process

### Step 0 — Gate check
operations_intelligence ≥ 40.

### Step 1 — Load context
- Last 4-12 weeks of published outputs
- Per-video retention audits
- Hook performance data
- Title + thumbnail performance
- KPI dashboard
- Existing swipe-file + framework annotations

### Step 2 — Identify top-decile outputs
Best-performing videos / hooks / titles / thumbnails / scripts. Anonymize.

### Step 3 — Extract patterns
What made them work? Framework + structure + voice element + audience-fit + mode-fit.

### Step 4 — Identify bottom-decile outputs
Worst-performing. Anonymize.

### Step 5 — Postmortem patterns
What failed? Framework misapplication / voice drift / audience mismatch / INV violation.

### Step 6 — Framework annotations
For each framework that's been used 5+ times: how does it actually run on this channel? What parameters worked / didn't?

### Step 7 — Hook-bank tier update
Tier hooks 1-3 based on actual performance.

### Step 8 — KPI band recalibration
Adjust bands based on actual channel data.

### Step 9 — Voice calibration update
Phrases / cadences that worked or drifted.

### Step 10 — Verify
Anonymization clean (zero real names), banned-vocab clean.

## Output Format

```markdown
# Library Compound Report — [Channel] — [Period]

**Date:** YYYY-MM-DD
**Period compounded:** [start - end]

## 1. New Swipe-File Entries (top-decile)
| # | Asset type | Framework tags | Anonymized specimen path | Why it worked |
|---|---|---|---|---|

## 2. New Postmortem Entries (bottom-decile)
| # | Asset type | Framework misapplication | Anonymized specimen path | What failed |
|---|---|---|---|---|

## 3. Framework Annotations (creator-specific calibrations)
| Framework | Generic rule | Creator-calibrated | Evidence |
|---|---|---|---|

## 4. Hook Bank Tier Update
### Tier 1 (high-performance, default to use)
- ...
### Tier 2 (mid-performance, conditional use)
- ...
### Tier 3 (under-performance, avoid)
- ...

## 5. KPI Band Recalibration
| Metric | Old band | New band | Reasoning |
|---|---|---|---|

## 6. Voice Calibration Update
- Phrases that compounded:
- Phrases that drifted:
- Cadence patterns that emerged:

## 7. Compartment Write-Backs
Updates to:
- `operations_intelligence.library_compounding`
- `hook_retention_os.signature_hook_patterns`
- `hook_retention_os.banned_hook_patterns`
- `hook_retention_os.retention_targets` (if KPI bands updated)
- `creator_identity_matrix.brand_voice_architecture.phrases_to_use` (if new high-performing phrases identified)

---
SIGNAL: S = (BUILD, INFORM, youtube.intelligence.library.compound, MARKDOWN, 0.7)
COMPARTMENTS_USED: [all 11 + outputs]
COMPARTMENTS_WRITTEN: [operations_intelligence.library_compounding, hook_retention_os, creator_identity_matrix.brand_voice_architecture (calibrations)]
FRAMEWORKS_USED: [encoding-flywheel, swipe-file-extraction, framework-creator-calibration, hook-tier-system, kpi-band-recalibration]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: encoding-flywheel]
- [framework: swipe-file-extraction]
- [framework: framework-creator-calibration]
- [framework: hook-tier-system]
- [framework: kpi-band-recalibration]

## Compartments Read
- All 11 + outputs from production cycle

## Compartments Written
- `{{operations_intelligence.library_compounding}}`, `{{hook_retention_os}}`, calibrations to `{{creator_identity_matrix.brand_voice_architecture}}`

## Verification Gates
- Formal: anonymization clean (zero creator/competitor/operator real names), banned-vocab clean
- Semantic: framework tags accurate, top-decile vs bottom-decile distinction valid
- Info-theoretic: entries tight (1-paragraph specimens, not full reproductions)

## Related Skills
- Upstream: `/audit-retention`, `/leak-audit`, `/kpi-dashboard`, every production skill
- Downstream: every skill (because library inputs every cycle)
- Alternative: none

## Failure Modes
- **Identifying real names** — anonymization fail. Strip + re-extract.
- **Generic patterns** — "good hooks open with curiosity" not actionable. Specify framework + parameter + result.
- **Top-decile only** — bottom-decile postmortems missing. Add.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the encoding-flywheel canon (every cycle makes the next cycle better) + the swipe-file extraction methodology + the framework-creator-calibration practice (frameworks shape themselves to the channel over time).
