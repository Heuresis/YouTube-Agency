---
name: cross-niche-bridge
command: /cross-niche-bridge
description: Design the cross-niche routing — how reach-mode viewers from adjacent niches get routed to the offer.
tier: sonnet
agent_owner: audience-head
agent_executor: audience-head
required_compartments:
  channel_architecture: 70
  offer_architecture: 60
  audience_building_loop: 50
mode_applicability: reach
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.audience.cross-niche.bridge
  format: MARKDOWN
  weight: 0.6
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Cross-Niche Bridge

## Purpose
Design how reach-mode videos pull viewers from adjacent niches and route them through the channel architecture toward the back-end offer — without injecting offer copy into the reach videos themselves. The bridge is the channel architecture's job, not the script's job (per dual-mode strategy).

## Decision Logic
Reach videos pull cross-niche audience based on the limiting-belief overlap (per `/build-niche` output). Once pulled, the bridge converts cross-niche viewers into either:
1. Subscribers who go on to engage with authority pillar content
2. Lead-magnet captures who enter the welcome sequence

The bridge tools:
- End-screens (next video into authority pillar)
- Pinned comments (lead magnet bridge)
- Channel home pinned VSL
- Community tab (welcome message for cross-niche viewers)
- Description CTA stack (subset of full stack — lead magnet + newsletter only, no application)

The bridge accepts that not every cross-niche viewer will convert — many won't. The job is engineering the path for those who do.

## Tacit Principles
1. **No offer pitch in reach video.** Routing happens in channel architecture only.
2. **Bridge per adjacent niche.** Each adjacent niche has its own optimal bridge path.
3. **End-screen video is the highest-leverage bridge.** Pulls reach viewer into authority pillar.
4. **Cross-niche lead magnets exist if needed.** Sometimes a separate lead magnet for the adjacent niche works better than the primary lead magnet (different first-step pain).
5. **Don't try to convert cold cross-niche viewers immediately.** Subscribe → 3-5 video views → email capture → VSL — multi-step bridge.
6. **Track bridge conversion separately.** Cross-niche viewers convert at lower rate than direct authority viewers; measure separately.

## Process

### Step 0 — Gate check
channel_architecture ≥ 70, offer ≥ 60, audience_building_loop ≥ 50.

### Step 1 — Load context
Adjacent niches from `/build-niche`, channel architecture, offer, lead-magnet bridge.

### Step 2 — Per adjacent niche, define bridge path
End-screen target / pinned comment / lead magnet variant / time-to-VSL expected.

### Step 3 — Optional: design adjacent lead magnet
If primary lead magnet is too niche-specific for adjacent audience.

### Step 4 — Set conversion expectations
Cross-niche bridge typically 30-50% of direct-authority conversion rate.

### Step 5 — Verify
No offer copy in reach video, banned-vocab, anonymization.

## Output Format

```markdown
# Cross-Niche Bridge — [Channel]

**Date:** YYYY-MM-DD

## 1. Adjacent Niches (from /build-niche)
| Adjacent Niche | Shared Limiting Belief | Reach Format Used |
|---|---|---|

## 2. Per-Niche Bridge Path
### Bridge 1: [adjacent niche name]
- Reach format: [1-vs-N / before-vs-after / etc.]
- End-screen target: [video — typically into authority pillar]
- Pinned comment: [bridge text + link]
- Lead magnet (primary or variant): [name + link]
- Time-to-VSL: [expected weeks from first reach watch to VSL]
- Conversion expectation: [N% of direct-authority rate]

### Bridge 2: ...

## 3. Optional Adjacent Lead Magnets
If a separate lead magnet outperforms the primary for an adjacent niche:
| Adjacent niche | Lead magnet | Conversion target |

## 4. Channel-Architecture Tooling
- End-screen pattern for reach videos: [next-authority-video pattern]
- Pinned comment pattern: [bridge-script]
- Description CTA stack on reach videos: [subset — lead magnet + newsletter only, no application]
- Channel home routing for cross-niche traffic: [pinned VSL feature + foundational playlist visibility]

## 5. Compartment Write-Backs
Updates to `audience_building_loop` + `channel_architecture.video_sequencing_path`.

---
SIGNAL: S = (BUILD, DIRECT, youtube.audience.cross-niche.bridge, MARKDOWN, 0.6)
COMPARTMENTS_USED: [channel_architecture, offer_architecture, audience_building_loop]
COMPARTMENTS_WRITTEN: [audience_building_loop, channel_architecture.video_sequencing_path]
FRAMEWORKS_USED: [cross-niche-bridge-architecture, channel-architecture-design, dual-mode-content-strategy]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: cross-niche-bridge-architecture]
- [framework: channel-architecture-design]
- [framework: dual-mode-content-strategy]

## Compartments Read
- Compartments 3, 4, 9

## Compartments Written
- `{{audience_building_loop}}`, `{{channel_architecture.video_sequencing_path}}`

## Verification Gates
- Formal: per-niche bridge path defined, end-screen target named, pinned comment script
- Semantic: no offer copy in reach video plan, channel-architecture handles all conversion
- Info-theoretic: time-to-VSL expectations realistic

## Related Skills
- Upstream: `/build-niche`, `/build-channel-architecture`, `/lead-magnet-bridge`
- Downstream: `/write-reach-script`, `/title-thumbnail-pair`, `/repurposing-cascade`
- Alternative: none

## Failure Modes
- **Hard pitch attempted in reach script** — INV violation. Route via architecture.
- **No bridge per adjacent niche** — generic routing. Differentiate per niche.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the dual-mode-content-strategy theorist (reach-mode stays clean) + the channel-architecture awareness-bridge designer.
