---
name: build-channel-architecture
command: /build-channel-architecture
description: Design the channel-promise, playlist architecture, video-sequencing path, and multi-awareness strategy.
tier: opus
agent_owner: foundations-head
agent_executor: foundations-head
required_compartments:
  creator_identity_matrix: 50
  audience_intelligence_system: 50
  offer_architecture: 40
mode_applicability: n/a
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.foundations.channel.architect
  format: MARKDOWN
  weight: 0.9
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Build Channel Architecture

## Purpose
Design the channel as a **system of routes** — not as a list of videos. Produces the Channel Architecture Document specifying: the one-sentence channel promise, playlist architecture (foundational + pillars + series), video-sequencing path (new-subscriber path + belief-installation path + handoff-to-offer path), multi-awareness strategy, and positioning against competitor archetypes. This is what turns an audience-fitting offer + a niche-locked-in topic into an actual operating channel — the routes through which a new viewer becomes a buyer.

## Decision Logic
A channel is not a content library; it's a **path-of-the-viewer**. The architecture answers: when a new viewer lands on a video, where does the channel send them next? What sequence of videos installs the beliefs required for the back-end offer to convert? How does the channel handle viewers at different awareness levels simultaneously?

The dual-mode strategy creates two paths:
- **Reach-mode entry path** — viewer arrives via a broad-appeal video (curiosity hook, contrast format), gets routed through 2-3 reach videos toward an authority video, then into the channel architecture
- **Authority-mode entry path** — viewer arrives via search or recommendation specifically looking for the offer's topic; lands on an authority video calibrated to their awareness level, gets routed deeper into the belief-installation path

The architecture must support **multi-awareness** — different videos targeting different awareness levels deliberately. A Problem-aware viewer should not be served the Most-aware pinned VSL on day one; they need bridge videos first. A Solution-aware viewer shouldn't be served Unaware reach content — they're past it.

The architecture is encoded in:
- Playlists (the algorithm's primary routing surface)
- End-screens (per-video "watch next")
- Pinned comments (per-video CTA capture)
- Community tab (channel-level routing)
- Channel page layout (the storefront)

## Tacit Principles
1. **The channel promise is one sentence the viewer can repeat.** If a viewer can't summarize what your channel does in one sentence after watching 3 videos, the architecture is muddled. Test it — ask three viewers.
2. **Foundational playlist is sacred.** The "start here" playlist is the first 5–10 videos that install the channel's worldview. It's the highest-leverage asset; it converts subscribers into believers.
3. **Pillar playlists own categories.** Each content pillar gets its own playlist. Algorithmic discoverability + viewer navigation both improve.
4. **Series playlists install beliefs in sequence.** The 8-belief installation path becomes 8 videos in a series playlist. Each belief = one video. Sequence is the architecture.
5. **The handoff-to-offer path is engineered, not assumed.** The path from "casual viewer" to "applied for the offer" is a 5–15-video sequence. Map it explicitly. Most channels skip this and wonder why their videos don't convert.
6. **Multi-awareness requires explicit bridges.** A viewer at Problem-aware level shouldn't be dropped into Most-aware content. The architecture builds bridges — videos that move a viewer one awareness step at a time.
7. **Anti-positioning is part of the architecture.** Naming what the channel is NOT, in the channel description / first videos / about page, filters the wrong audience early.
8. **Positioning is against archetypes, not names.** Never name competitor channels. Position against archetypes ("the productivity-tool-stack channel," "the hustle-hard creator").
9. **Cross-niche routing happens at the channel architecture level, not the video level.** Reach-mode videos pull cross-niche viewers; the channel architecture (pinned VSL, end-screen, community) routes them — not a CTA inside the reach video.
10. **Architecture survives algorithm shifts.** Tactical algorithm games rebuild every 12–18 months. Channel architecture (playlists + sequencing + multi-awareness logic) is durable.

## Process

### Step 0 — Gate check
Verify identity ≥ 50, audience ≥ 50, offer ≥ 40. Below: refuse + run upstream.

### Step 1 — Load context
- `{{creator_identity_matrix}}` (positioning, archetype, contrarian beliefs)
- `{{audience_intelligence_system}}` (avatar, awareness distribution, beliefs to install)
- `{{offer_architecture}}` (offer, 8-belief install path, content_to_offer_bridge)
- `{{channel_architecture.niche_definition}}` from `/build-niche` output
- `reference/frameworks/channel-architecture-design.md`
- `reference/frameworks/multi-awareness-on-one-channel.md`
- `reference/frameworks/playlist-architecture.md`

### Step 2 — Lock the channel promise
One sentence. Format: "[For audience], [channel name] [delivers what] so they can [outcome]." Test by asking three viewers (or simulating against the avatar) whether they can repeat it after viewing 3 videos.

### Step 3 — Define content pillars
Typically 3–5 pillars matching the brand-pillar-split (50/25/15/10 default). Each pillar:
- Pillar name
- Pillar objective (which belief it installs / which audience segment it serves)
- Mode (authority / reach / both)
- Conversion bridge (how this pillar routes to offer)
- Target volume per month

### Step 4 — Design playlist architecture
- **Foundational playlist** ("Start Here") — 5–10 videos installing channel worldview + introducing offer's mechanism (no hard sell)
- **Pillar playlists** — one per content pillar
- **Series playlists** — multi-video belief-installation paths (often the 8-belief sequence)
- **Reach-mode playlist** — broad-appeal videos curated for cross-niche entry
- **Pinned VSL feature** — featured at top of channel home

### Step 5 — Design new-subscriber path
First 5–10 videos a new subscriber should watch. Sequenced to install foundational beliefs + introduce mechanism + route toward Problem-aware → Solution-aware → Product-aware progression. Encoded in: foundational playlist + first end-screen + welcome community-tab post + email welcome sequence (cross-link).

### Step 6 — Design belief-installation path
Map the 8 beliefs from offer_architecture to 8 videos. Each video:
- Belief installed
- Hook formula (calibrated to belief's emotional terrain)
- Mode (authority dominant)
- Position in sequence

### Step 7 — Design handoff-to-offer path
The route from "viewer engages with a belief-installation video" → "viewer applies for offer." Typically:
- End-screen: link to next belief-installation video (deeper) + channel pinned VSL
- Description CTA: lead-magnet (mid-funnel capture) + pinned VSL
- Pinned comment: lead-magnet
- Email sequence (after lead-magnet): pinned VSL + application
- Community tab: periodic offer mention + case study posts

### Step 8 — Design multi-awareness strategy
Map awareness levels to video roles:
- Unaware viewers (entry point reach-mode videos): role = bring into Problem-aware
- Problem-aware: role = install solution category awareness, route to Solution-aware
- Solution-aware: role = differentiate the channel's mechanism, route to Product-aware
- Product-aware: role = differentiate the offer specifically, route to Most-aware (pinned VSL)
- Most-aware: pinned VSL = the conversion event

Bridges between levels are explicit videos (or end-screen links) that move a viewer one step.

### Step 9 — Define positioning + anti-positioning
- Channel position in market (against archetypes, not names)
- Differentiation path (one of 6 from `/build-niche`)
- What the channel is NOT (anti-positioning)

### Step 10 — Verify
Banned vocabulary, anonymization (no real channel names), one-sentence promise compressibility, 8-belief mapping completeness, awareness-bridge presence.

## Output Format

```markdown
# Channel Architecture Document — [Channel Handle]

**Date:** YYYY-MM-DD
**Confidence:** HIGH | MEDIUM | LOW

## 1. Channel Promise
"For [audience], [channel] [delivers what] so they can [outcome]."

## 2. Positioning
- Position in market: [archetypal positioning]
- Differentiation path: [one of 6]
- Against archetypes:
  - Like: [3-5 archetypes the channel resembles]
  - Unlike: [3-5 archetypes the channel explicitly is not]
- Anti-positioning (what the channel is NOT, encoded in About page + early videos):

## 3. Content Pillars
| Pillar | Objective | Mode | Conversion Bridge | Volume/month |
|---|---|---|---|---|
| Primary (50%) | ... | authority | ... | N |
| Secondary (25%) | ... | reach | ... | N |
| Tertiary (15%) | ... | hybrid | ... | N |
| Experimental (10%) | ... | both | ... | N |

## 4. Playlist Architecture
### Foundational ("Start Here")
- Title:
- 5-10 videos:
  1. [video role] — [belief installed]
  2. ...
- End-state: viewer is Problem-aware → Solution-aware

### Pillar Playlists
- [Pillar 1 playlist] — [target volume]
- [Pillar 2 playlist]
- ...

### Series Playlists (Belief-Installation)
- [8-belief series playlist]:
  1. Belief 1 video
  2. Belief 2 video
  ...

### Reach-Mode Playlist
- [curated broad-appeal videos]

### Pinned VSL Feature
- Featured at top of channel home

## 5. New-Subscriber Path (First 5-10 Videos)
1. Video 1 — [role / belief]
2. Video 2 — ...
...

## 6. Belief-Installation Path (8-belief)
| Order | Belief | Mode | Hook Formula | Awareness Level |
|---|---|---|---|---|
| 1 | ... | authority | Contrarian-Frame | Problem-aware |
| 2 | ... | authority | Bound-Promise | Solution-aware |
| ... |

## 7. Handoff-to-Offer Path
- End-screen pattern:
- Description CTA stack:
- Pinned comment pattern:
- Email sequence cross-link:
- Community-tab cadence:
- Pinned VSL access points:

## 8. Multi-Awareness Strategy
| Level | % of audience | Role | Example videos | Bridge to next |
|---|---|---|---|---|
| Unaware | N% | reach-entry | ... | ... |
| Problem-aware | N% | category-installation | ... | ... |
| Solution-aware | N% | mechanism-differentiation | ... | ... |
| Product-aware | N% | offer-differentiation | ... | ... |
| Most-aware | N% | pinned VSL conversion | ... | — |

## 9. Compartment Write-Backs
Updates to `channel_architecture` (playlist_architecture, video_sequencing_path, multi_awareness_strategy, channel_promise, positioning).

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.foundations.channel.architect, MARKDOWN, 0.9)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, channel_architecture.niche_definition]
COMPARTMENTS_WRITTEN: [channel_architecture (playlist + sequencing + multi-awareness + promise + positioning)]
FRAMEWORKS_USED: [channel-architecture-design, multi-awareness-on-one-channel, dual-mode-content-strategy, 8-belief-installation, brand-pillar-split-50-25-15-10]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: channel-architecture-design] — playlist + sequencing + path-of-viewer
- [framework: multi-awareness-on-one-channel] — distribution-bridges between awareness levels
- [framework: dual-mode-content-strategy] — authority anchor + reach pool routing
- [framework: 8-belief-installation] — belief-installation series structure
- [framework: brand-pillar-split-50-25-15-10] — pillar volume calibration

## Compartments Read
- `{{creator_identity_matrix}}`, `{{audience_intelligence_system}}`, `{{offer_architecture}}`, `{{channel_architecture.niche_definition}}`

## Compartments Written
- `{{channel_architecture}}` (playlist_architecture, video_sequencing_path, multi_awareness_strategy, channel_promise, positioning)

## Verification Gates
- Formal: Output Format compliance, banned-vocabulary scan, anonymization scan
- Semantic: 8-belief mapping completeness, awareness-bridge presence at every level transition, anti-positioning specificity
- Info-theoretic: channel promise compresses to one sentence (≤ 25 words)

## Related Skills
- Upstream: `/build-niche`, `/build-audience`, `/design-offer`
- Downstream: `/series-architect`, `/content-mix-strategy`, every script-writing skill, `/title-thumbnail-pair`, `/write-pinned-vsl`
- Alternative: none

## Failure Modes
- **Channel promise too vague** — not compressible to one sentence. Detect: > 25 words. Revise: tighten.
- **Playlist architecture missing series** — only pillars, no 8-belief series. Detect: belief-installation path absent. Revise: add series playlist.
- **No awareness bridges** — Problem-aware viewers have no path to Solution-aware. Detect: bridge column empty. Revise: name a specific bridge video for each transition.
- **Anti-positioning generic** — "we're not like other channels." Detect: vague. Revise: name specific archetypes the channel is not, with reasons.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
This skill draws from the content-OS director tradition (multi-awareness on one channel, brand-pillar split, playlist as routing surface), the awareness-bridge designer lineage (path-of-viewer engineering), and the dual-mode-content-strategy theorist (authority anchor + reach pool with channel architecture handling cross-niche routing).
