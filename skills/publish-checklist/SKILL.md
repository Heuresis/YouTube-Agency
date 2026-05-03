---
name: publish-checklist
command: /publish-checklist
description: Pre-publish gate — verify all 17 invariants + production assets + distribution surface before upload.
tier: sonnet
agent_owner: distribution-head
agent_executor: distribution-head
required_compartments:
  distribution_algorithm: 50
  channel_architecture: 50
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: COMMIT
  type: youtube.distribution.publish.checklist
  format: MARKDOWN
  weight: 0.6
banned_when: []
verification_layers: [formal, semantic, info-theoretic, retention-floor, title-thumbnail-promise, copyright-fair-use]
---

# Publish Checklist

## Purpose
Pre-publish gate. Verify all 17 invariants + production assets + distribution surface before upload. The publish checklist is the last quality gate before the algorithm sees the video; if it fails, the cost is ranking penalty + audience trust loss.

## Decision Logic
Every video that ships passes this checklist. Items below get checked, fixed if needed, then ship. The checklist is exhaustive, not selective — completeness is the value.

## Tacit Principles
1. **No ship below 100% on the checklist.** Anything red = fix or don't ship.
2. **The checklist is the contract.** The creator's standard, encoded.
3. **Schedule from the checklist.** Don't check items at upload-time pressure.
4. **Compartment write-back at publish.** Update `content_engine` + `distribution_algorithm` + `operations_intelligence` with publish event.

## Process

### Step 0 — Gate check
distribution ≥ 50, channel_architecture ≥ 50.

### Step 1 — Verify production assets
Edit final / thumbnail final / title locked / description locked / captions / end-screen card.

### Step 2 — Verify all 17 invariants
Walk through INV-1 through INV-17. Each PASS or fix.

### Step 3 — Verify distribution surface
Pinned comment / community-tab post / email blast / Shorts repurposing scheduled.

### Step 4 — Verify analytics + tracking
UTMs on all CTAs / lead-magnet trigger working / pinned VSL link working / application form working.

### Step 5 — Verify schedule
Publish time matches channel publish cadence.

### Step 6 — Compartment write-back
Log publish event.

### Step 7 — Final gate
GO / NO-GO.

## Output Format

```markdown
# Publish Checklist — [Title]

**Date:** YYYY-MM-DD
**Scheduled publish:** YYYY-MM-DD HH:MM tz

## 1. Production Assets
- [ ] Edit final + reviewed
- [ ] Thumbnail final + 2 A/B variants
- [ ] Title locked
- [ ] Description locked
- [ ] Captions uploaded (SRT)
- [ ] End-screen card configured (next video link)
- [ ] Cards (1-3) configured

## 2. The 17 Invariants
- [ ] INV-1 (six-layer diagnosis run upstream): PASS
- [ ] INV-2 (sequential dependency held): PASS
- [ ] INV-3 (compartment thresholds met for all skills run): PASS
- [ ] INV-4 (3:1 LTV:CAC validated for offer): PASS
- [ ] INV-5 (Truth Gate per claim in script + thumbnail + description): PASS
- [ ] INV-6 (no fabrication): PASS
- [ ] INV-7 (banned vocabulary scan clean): PASS
- [ ] INV-8 (scope guard — not agency-services scope): PASS
- [ ] INV-9 (retention floor — predicted AVD ≥ channel band): PASS
- [ ] INV-10 (title-thumbnail-promise alignment): PASS
- [ ] INV-11 (hook density — ≥3 mechanisms first 30s): PASS
- [ ] INV-12 (mode declared): PASS — [authority/reach/hybrid]
- [ ] INV-13 (sophistication-stage match): PASS
- [ ] INV-14 (copyright + fair-use clear for b-roll, music, quoted): PASS
- [ ] INV-15 (sponsor disclosure if applicable): PASS or N/A
- [ ] INV-16 (parasocial-honesty contract honored): PASS
- [ ] INV-17 (no engagement-bait): PASS

## 3. Distribution Surface
- [ ] Pinned comment drafted (lead magnet + series cross-link)
- [ ] Community-tab launch post drafted
- [ ] Email blast drafted (welcome sequence trigger if new lead)
- [ ] Shorts repurposing scheduled (1-3 Shorts per long-form)
- [ ] Newsletter mention scheduled

## 4. Analytics + Tracking
- [ ] UTMs on all CTA links
- [ ] Lead-magnet trigger tested
- [ ] Pinned VSL link working
- [ ] Application form working
- [ ] Email automation tested

## 5. Schedule
- [ ] Publish time matches channel cadence
- [ ] Premiere if applicable (only "always/sometimes" per channel premiere policy)

## 6. Compartment Write-Back
Updates to:
- `content_engine.idea_farm.rolling_backlog_size: -1` (idea consumed)
- `distribution_algorithm.title_strategy.formula_in_use` log
- `operations_intelligence.kpi_dashboard.weekly_kpis` baseline T-0 captured

## 7. Final Gate
- [ ] GO — schedule publish
- [ ] NO-GO — fix [list of items]

---
SIGNAL: S = (EXECUTE, COMMIT, youtube.distribution.publish.checklist, MARKDOWN, 0.6)
COMPARTMENTS_USED: [content_engine, distribution_algorithm, operations_intelligence, hook_retention_os, channel_architecture]
COMPARTMENTS_WRITTEN: [content_engine, distribution_algorithm, operations_intelligence]
FRAMEWORKS_USED: [pre-publish-quality-gate, 17-invariant-checklist, distribution-surface-architecture]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
RETENTION_FLOOR: PASS | FAIL
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
COPYRIGHT_FAIR_USE: PASS | FAIL
SPONSOR_DISCLOSURE: PASS | N/A | FAIL
---
```

## Frameworks Applied
- [framework: pre-publish-quality-gate]
- [framework: 17-invariant-checklist]
- [framework: distribution-surface-architecture]

## Compartments Read
- All 11 compartments (verification surface)

## Compartments Written
- `{{content_engine}}` (idea consumed), `{{distribution_algorithm}}` (formula log), `{{operations_intelligence}}` (publish event log)

## Verification Gates
- All 17 INV checks
- Production assets complete
- Distribution surface complete
- Analytics + tracking working

## Related Skills
- Upstream: every production skill
- Downstream: `/audit-retention`, `/repurposing-cascade`, `/library-compound`
- Alternative: none — this is the publish gate

## Failure Modes
- **Checklist incomplete at upload time** — pressure to ship anyway. Hold + fix. Better delayed than broken.
- **INV-9 fail** — predicted AVD below floor. Return to retention engineering.
- **INV-10 fail** — title-thumbnail mismatch. Re-pair.
- **INV-14 fail** — unlicensed b-roll. License or remove.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the pre-publish quality gate canon + the channel-OS distribution-surface architecture.
