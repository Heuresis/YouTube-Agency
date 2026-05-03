---
name: series-architect
command: /series-architect
description: Architect a multi-video series (5-30 videos) that installs the offer's belief sequence and routes to the back-end.
tier: opus
agent_owner: content-head
agent_executor: content-head
required_compartments:
  channel_architecture: 70
  audience_intelligence_system: 70
  offer_architecture: 60
mode_applicability: both
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.content.series.architect
  format: MARKDOWN
  weight: 0.8
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Series Architect

## Purpose
Design a multi-video series — typically 5-30 videos — that systematically installs the offer's belief sequence and routes a viewer along the awareness path (Problem-aware → Solution-aware → Product-aware → Most-aware). The series is a sequence playlist + a sequenced production schedule + a sequenced distribution surface (end-screens, descriptions, community posts) operating as one unit.

## Decision Logic
A series compounds. A standalone video earns one watch. A series earns a watch, a binge, an email subscribe, a return visitor, a deeper belief installation, and a pinned-VSL handoff. The series is the channel's primary conversion engine for Solution-aware and Product-aware viewers.

The 8-belief installation path becomes the series spine. Each video installs one belief. End-screens link to the next video in sequence. The final video routes to the pinned VSL.

For reach-mode series (e.g., a postmortem series): each video targets a different angle on the same theme, building a compounding curiosity arc.

## Tacit Principles
1. **One belief per video.** Trying to install 2 beliefs in 1 video splits attention. Sequence them.
2. **End-screens enforce sequence.** The end-screen of video N points to video N+1 explicitly.
3. **The series has a name.** "The Step-Out Sequence." Named series get binged; unnamed videos sit in playlists.
4. **Position the series at the channel home.** Featured. The pinned-VSL is beside it; the series is the entry path.
5. **Series videos cross-link in descriptions.** First-line description: "This is video N of [series name]."
6. **Don't release the whole series at once.** Drip 1-2 per week; the algorithm rewards consistent pace.
7. **Reach series ≠ authority series.** A reach series builds toward an authority series (entry funnel). Don't conflate.
8. **The series climaxes at a CTA video.** Final video is the offer-bridge or pinned-VSL link.

## Process

### Step 0 — Gate check
channel_architecture ≥ 70, audience ≥ 70, offer ≥ 60.

### Step 1 — Load context
Compartments 1-4. Especially `{{offer_architecture}}` for the 8 beliefs + `{{channel_architecture.video_sequencing_path.belief_installation_path}}`.

### Step 2 — Define series spine
Map the 8 beliefs (or the chosen subset for shorter series) to N videos. Each video installs one belief.

### Step 3 — Order the videos
Belief 1 → Belief 8 in install-order. Mode declared per video.

### Step 4 — Hook formula per video
Calibrate hook per belief's emotional terrain.

### Step 5 — End-screen routing
Each video's end-screen names the next video + provides the link.

### Step 6 — Description cross-link
First line: "This is video N of [series name]: [series promise]"

### Step 7 — Distribution surface
Community-tab posts, pinned comments, email sequence cross-links — all naming the series.

### Step 8 — Production schedule
Drip cadence (weekly default). Calendar.

### Step 9 — Verify
Sequence integrity, end-screen linking, mode mix, awareness progression.

## Output Format

```markdown
# Series Architecture — [Series Name]

**Series promise:** [1 sentence]
**Total videos:** N
**Cadence:** weekly / biweekly
**Date:** YYYY-MM-DD

## 1. Series Spine
| # | Video title hypothesis | Belief installed | Mode | Awareness | End-screen → |
|---|---|---|---|---|---|
| 1 | ... | Belief 1 | authority | Problem-aware | video 2 + lead-magnet |
| ... |
| N | ... | Belief 8 | authority | Most-aware | pinned VSL + application |

## 2. Hook Formulas Per Video
| # | Hook formula | Reasoning |

## 3. Description Cross-Link Template
"This is video N of [series name]: [series promise]. [link to next video] [link to lead magnet]"

## 4. Community-Tab Cadence
- Pre-launch teaser
- Per-video release post
- Mid-series recap
- Series-completion + offer mention

## 5. Email Sequence Cross-Link
[map to lead-magnet welcome sequence + post-VSL nurture]

## 6. Production Schedule
| Week | Video | Status |

## 7. Compartment Write-Backs
Updates to `channel_architecture.playlist_architecture.series_playlists`.

---
SIGNAL: S = (BUILD, DIRECT, youtube.content.series.architect, MARKDOWN, 0.8)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, channel_architecture]
COMPARTMENTS_WRITTEN: [channel_architecture.playlist_architecture.series_playlists]
FRAMEWORKS_USED: [8-belief-installation-sequence, awareness-spectrum-progression, channel-architecture-design]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 8-belief-installation-sequence]
- [framework: awareness-spectrum-progression]
- [framework: channel-architecture-design]

## Compartments Read
- Compartments 1, 2, 3, 4

## Compartments Written
- `{{channel_architecture.playlist_architecture.series_playlists}}`

## Verification Gates
- Formal: each video has belief + mode + awareness + end-screen target
- Semantic: belief sequence valid (1 → 8 in install-order), awareness progression valid
- Info-theoretic: series promise compresses to 1 sentence, video titles each have ≥ 3 specifics

## Related Skills
- Upstream: `/build-channel-architecture`, `/design-offer`
- Downstream: `/research-brief` (per video), `/write-authority-script`, `/title-thumbnail-pair`, `/publish-checklist`
- Alternative: none

## Failure Modes
- **Belief sequence out of order** — Belief 5 before Belief 3. Revise to install order.
- **End-screens not enforced** — videos don't explicitly link next. Revise.
- **Generic series promise** — "learn about delegation." Revise: 1 sentence with audience + outcome + mechanism.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the awareness-spectrum theorist (sequence-as-installation), the long-form-VSL specialist (8-belief structure), and the channel-OS director (playlist-as-routing-surface).
