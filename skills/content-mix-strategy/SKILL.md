---
name: content-mix-strategy
command: /content-mix-strategy
description: Calibrate the channel's authority/reach/hybrid mode mix and brand-pillar-split per channel-stage and audience.
tier: sonnet
agent_owner: content-head
agent_executor: content-head
required_compartments:
  audience_intelligence_system: 60
  channel_architecture: 50
  content_engine: 40
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.content.mix.strategy
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Content Mix Strategy

## Purpose
Set and tune the channel's mode mix (authority/reach/hybrid) and brand-pillar-split (50/25/15/10 default) per channel-stage, audience awareness distribution, and offer-conversion needs. This skill produces the operating instruction for the next 3-6 months of content programming.

## Decision Logic
The dual-mode strategy doesn't run on autopilot. The mix is calibrated per channel-stage:
- Pre-launch / 0-1K subscribers: 50/50 mix — reach builds discoverability, authority builds depth
- 1K-10K: 60% authority / 35% reach / 5% hybrid — channel needs depth + still pulling
- 10K-50K: 65% authority / 30% reach / 5% hybrid — default
- 50K+: 70% authority / 25% reach / 5% hybrid — channel can lean authority because reach is overflowing

The pillar split (50/25/15/10) is the volume distribution across content pillars. Primary pillar gets 50% of volume because it carries the offer's belief-installation path.

When the channel's KPIs shift (CTR drops, AVD drops, conversion drops), the mix is the first lever to retune.

## Tacit Principles
1. **Reach without authority is audience without revenue.** A channel that pulls reach but has no authority depth grows but doesn't monetize.
2. **Authority without reach is depth without discoverability.** A channel that's all authority dies of small audience.
3. **Hybrid is rare and intentional.** Hybrid videos try to do both — usually fail at both. Use sparingly.
4. **Calibrate against the audience's awareness distribution.** A channel speaking to mostly Product-aware audiences leans authority. Mostly Problem-aware → leans reach.
5. **Reach is recalibrated quarterly, not weekly.** Don't whip the mix every time a video misses.
6. **Pillar split protects the primary pillar.** When experimental content underperforms, the primary pillar still ships at 50% volume.
7. **Track mode mix at the schedule level, not the per-video level.** Mode mix is a quarterly aggregate metric, not a weekly enforcement.

## Process

### Step 0 — Gate check
audience ≥ 60, channel architecture ≥ 50, content_engine ≥ 40.

### Step 1 — Load context
Compartments 2, 4, 5, 8, plus prior 12 weeks of channel KPI data if available.

### Step 2 — Channel-stage diagnosis
Determine current channel stage (pre-launch / 0-1K / 1K-10K / 10K-50K / 50K+).

### Step 3 — Audience-awareness audit
Read awareness distribution. Map to mix bias.

### Step 4 — KPI-driven adjustment
If recent CTR low → add reach. If recent AVD low on reach → tune reach format. If conversion low → add authority depth. If subscribers stagnant → add reach.

### Step 5 — Set the mix + pillar split
Lock authority/reach/hybrid % + brand pillar 50/25/15/10 split.

### Step 6 — Schedule next 12 weeks
Map the mix to a 12-week publish schedule.

### Step 7 — Verify
Match the mix to channel stage + audience + KPIs.

## Output Format

```markdown
# Content Mix Strategy — [Channel] — [Period]

**Channel stage:** [pre-launch / 0-1K / 1K-10K / 10K-50K / 50K+]
**Date:** YYYY-MM-DD

## 1. Mode Mix
- Authority: N%
- Reach: N%
- Hybrid: N%

## 2. Brand Pillar Split
- Primary (50%): [pillar name + objective]
- Secondary (25%): ...
- Tertiary (15%): ...
- Experimental (10%): ...

## 3. Reasoning
- Audience awareness distribution: [mapping]
- KPI-driven adjustment (if any):
- Channel-stage fit:

## 4. 12-Week Schedule (mix realized)
| Week | Pillar | Mode | Title hypothesis | Awareness target |
|---|---|---|---|---|
| 1 | Primary | authority | ... | Solution-aware |
| 2 | Secondary | reach | ... | Problem-aware |
... [12 rows]

## 5. Compartment Write-Backs
Updates to `content_engine.brand_pillar_split`, `content_engine.mode_mix`.

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.content.mix.strategy, MARKDOWN, 0.7)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, content_engine, distribution_algorithm, operations_intelligence (KPIs)]
COMPARTMENTS_WRITTEN: [content_engine.mode_mix, content_engine.brand_pillar_split]
FRAMEWORKS_USED: [dual-mode-content-strategy, brand-pillar-split-50-25-15-10, channel-stage-mix-calibration]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: dual-mode-content-strategy]
- [framework: brand-pillar-split-50-25-15-10]
- [framework: channel-stage-mix-calibration]

## Compartments Read
- `{{audience_intelligence_system}}`, `{{channel_architecture}}`, `{{content_engine}}`, channel KPIs

## Compartments Written
- `{{content_engine.mode_mix}}`, `{{content_engine.brand_pillar_split}}`

## Verification Gates
- Formal: mix sums to 100%, pillar split sums to 100%
- Semantic: mix aligned with channel stage + awareness distribution + KPI signal
- Info-theoretic: 12-week schedule realizes the mix proportionally

## Related Skills
- Upstream: `/build-channel-architecture`, `/build-audience`
- Downstream: `/idea-farm`, `/series-architect`, every script-writing skill
- Alternative: none

## Failure Modes
- **Mix doesn't match channel stage** — too authority for early channel, too reach for established. Revise to channel-stage default.
- **Schedule doesn't realize mix** — week-by-week says 50/50 when target is 65/30/5. Rebalance.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the dual-mode-content-strategy theorist tradition + the brand-pillar-split practitioner.
