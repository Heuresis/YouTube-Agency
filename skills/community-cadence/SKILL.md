---
name: community-cadence
command: /community-cadence
description: Set the comment-reply + community-tab cadence and protocols.
tier: haiku
agent_owner: audience-head
agent_executor: community-manager
required_compartments:
  creator_identity_matrix: 60
  audience_building_loop: 30
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.audience.community.cadence
  format: MARKDOWN
  weight: 0.4
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Community Cadence

## Purpose
Set the comment-reply cadence + community-tab cadence + comment-capture protocol for the channel. Defines who replies, when, in what voice, and which comments get logged for content / library compounding.

## Decision Logic
Comments are the highest-density VOC source. The first hour of a video's lifetime is the highest-leverage comment-engagement window. The community tab is the channel's between-videos communication surface — calibrated cadence keeps the channel "alive" without demanding constant attention.

## Tacit Principles
1. **First-hour reply window matters.** Reply to the first 10-20 comments within the first hour for algorithm + parasocial-trust compounding.
2. **Reply voice = creator voice.** Even when delegated, replies use creator's phrases.
3. **Pin the highest-signal comment.** Algorithm + visibility.
4. **Capture high-signal comments for /idea-farm and /library-compound.** VOC mining.
5. **Community-tab cadence: 2-3 posts/week.** Underposting reads dead; overposting reads desperate.
6. **No engagement-bait posts.** INV-17 applies.

## Process

### Step 0 — Gate check
identity ≥ 60, audience_building_loop ≥ 30.

### Step 1 — Set comment-reply protocol
First-hour-only / pinned-replies / full-engagement / minimal — pick per channel-stage + creator capacity.

### Step 2 — Set comment-reply voice
Creator-direct / team-with-creator-voice / team-only.

### Step 3 — Set comment-capture protocol
Logging high-signal comments to a queue.

### Step 4 — Set community-tab cadence
2-3 posts/week. Mix of: poll / image / text / clip / question.

### Step 5 — Set comment pinning rules
Which comments get pinned. Auto-pin lead-magnet promo comment.

### Step 6 — Verify
Banned-vocab + engagement-bait + parasocial-honesty.

## Output Format

```markdown
# Community Cadence — [Channel] — [Period]

**Date:** YYYY-MM-DD

## 1. Comment-Reply Protocol
- Strategy: first-hour-only / pinned-replies / full-engagement / minimal
- Voice: creator-direct / team-with-creator-voice / team-only
- Reply target: first N comments / first N hours
- Reply tone:

## 2. Pinned Comment (per video)
- Default: lead magnet + series cross-link
- Custom: per-video override if applicable

## 3. Comment-Capture Protocol
- High-signal definition: [criteria]
- Logging destination: [queue]
- Review cadence: weekly

## 4. Community-Tab Cadence
| Day | Post type | Topic source |
|---|---|---|
| Mon | Question (engages audience pre-video drop) | from current series |
| Wed | Clip / image (mid-week pulse) | latest video beat |
| Fri | Behind-the-program / case study | offer-bridge |

## 5. Comment Pinning Rules
- Always pin: lead-magnet promo
- Sometimes pin: highest-signal audience comment
- Never pin: engagement-bait, off-topic, hostile

## 6. Compartment Write-Backs
Updates to `audience_building_loop.community_strategy`.

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.audience.community.cadence, MARKDOWN, 0.4)
COMPARTMENTS_USED: [creator_identity_matrix, audience_building_loop, distribution_algorithm]
COMPARTMENTS_WRITTEN: [audience_building_loop.community_strategy]
FRAMEWORKS_USED: [first-hour-reply-window, parasocial-trust-mechanic, voc-capture-protocol]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: first-hour-reply-window]
- [framework: parasocial-trust-mechanic]
- [framework: voc-capture-protocol]

## Compartments Read
- `{{creator_identity_matrix}}`, `{{audience_building_loop}}`, `{{distribution_algorithm}}`

## Compartments Written
- `{{audience_building_loop.community_strategy}}`

## Verification Gates
- Formal: cadence specified, voice protocol defined, capture protocol defined
- Semantic: voice matches creator brand, parasocial-honesty preserved (no manufactured engagement)
- Info-theoretic: cadence reasonable (2-3/week, not 0 or 7+)

## Related Skills
- Upstream: `/extract-creator-voice`
- Downstream: `/idea-farm` (comment-mining), `/library-compound`
- Alternative: none

## Failure Modes
- **Engagement-bait posts** — INV-17. REJECT.
- **Inconsistent voice across replies** — voice protocol not enforced. Re-train team.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the parasocial-trust-mechanic theorist + the first-hour-reply-window canon.
