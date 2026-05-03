# Channel Architecture Template

> Channel architecture document template. The channel architecture is the path-of-the-viewer across the channel — playlists, sequencing, end-screen routing, foundational content, multi-awareness strategy. This document is the canonical reference for how the channel structures its surface area.

## Frontmatter

```yaml
channel_name: <from compartment 1>
channel_handle: <@handle>
primary_niche: <from compartment 4>
sub_niches_covered: [<list>]
adjacent_niches_for_reach: [<list>]
out_of_scope_topics: [<list>]
back_end_offer: <from compartment 3>
authority_pct: <from compartment 5 mode mix>
reach_pct: <from compartment 5 mode mix>
last_updated: <date>
```

## Section 1 — Channel positioning

### One-sentence promise

```
The channel promises: <1 sentence>
```

What the channel commits to delivering to every viewer. Specific, defensible, repeatable.

### Deliverable per video

```
Every video on this channel delivers: <1 sentence>
```

The structural commitment. What the viewer can expect from any video they watch.

### Differentiation thesis

Which of the 6 Differentiation Paths the channel owns:

- [ ] Unique mechanism: <named mechanism>
- [ ] Unique enemy / contrarian frame: <description>
- [ ] Unique audience segment: <description>
- [ ] Unique format: <description>
- [ ] Unique credibility source: <description>
- [ ] Unique philosophy / worldview: <description>

Typically 1–2 paths are credibly owned.

### Operator archetype(s)

Primary archetype (from `reference/operators/_INDEX.md`): <archetype slug>
Secondary archetype (if layered): <archetype slug>

## Section 2 — Playlist architecture

### Foundational playlist

The "start here" playlist. New subscribers' first 5–10 videos.

```
Foundational playlist name: <name>
Description: <what this playlist installs in new subscribers>

Videos in order:
1. <Video title> — installs <belief / framework / context>
2. <Video title> — installs <belief / framework / context>
3. <Video title> — installs <belief / framework / context>
...
```

### Pillar playlists

One per content pillar. The library's primary structural divisions.

```
Pillar 1: <pillar name>
- Pillar objective: <what this pillar achieves>
- Mode: <authority | reach | both>
- Video count: <integer>
- Top 3 videos: <list>

Pillar 2: <pillar name>
- ...

(typically 3–5 pillars)
```

### Series playlists

Multi-video belief-installation paths.

```
Series 1: <series name>
- Length: <video count>
- Awareness target: <one of 5>
- Beliefs installed: <list>
- Sequence: <video 1 → video 2 → ...>

Series 2: <series name>
- ...
```

## Section 3 — Video-sequencing path

### New-subscriber path

The first 5–10 videos a new subscriber should see, in order:

```
1. <Channel trailer> — first impression
2. <Channel-thesis video> — the worldview
3. <Mechanism video> — the IP
4. <Case-study video> — the proof
5. <Series first video> — entry to a multi-video arc
6. <Authority deep-dive> — depth signal
7. <Reach video> — broad appeal moment
8. <Pinned VSL> — conversion gate (last in the path)
```

### Belief-installation path

The order in which the channel installs the 8 required beliefs (or niche-calibrated equivalent):

```
Step 1: <Video title> — installs Reproduction
Step 2: <Video title> — installs Trust-Person
Step 3: <Video title> — installs Trust-Expertise
Step 4: <Video title> — installs Can-Fulfill
Step 5: <Video title> — installs Better/Faster
Step 6: <Video title> — installs Derivative-Desire
Step 7: <Video title> — installs Urgency
Step 8: <Pinned VSL> — installs This-Offer + recap
```

### Handoff-to-offer path

How the channel routes engaged viewers to the back-end offer:

```
Authority video → end-screen → next-step authority video → end-screen → pinned VSL → application
```

OR

```
Reach video → end-screen → foundational playlist → authority video → pinned VSL → application
```

The path is deterministic, not algorithmic. The channel architecture overrides the algorithm's default suggestions.

## Section 4 — Multi-awareness strategy

### Role per awareness level

```
Unaware video role: <description>
Problem-aware video role: <description>
Solution-aware video role: <description> (typically authority — the bullseye)
Product-aware video role: <description> (pinned VSL territory)
Most-aware video role: <description> (members-only / cohort-content territory)
```

### Bridges between levels

How a viewer transitions from one awareness level to the next:

```
Unaware → Problem-aware bridge: <video sequence or specific video>
Problem-aware → Solution-aware bridge: <video sequence>
Solution-aware → Product-aware bridge: <video sequence>
Product-aware → Most-aware bridge: <video sequence + email + community>
```

## Section 5 — End-screen logic

The default end-screen pattern:

```
Authority videos: end-screen routes to <next-step authority OR pinned VSL>
Reach videos: end-screen routes to <foundational playlist OR pinned VSL>
Series videos: end-screen routes to <next video in series>
Pinned VSL: end-screen routes to <application URL + foundational playlist for warming-up viewers>
```

The end-screen logic is documented per video category, not per video. Once the logic is set, individual videos follow it.

## Section 6 — Description / About / Banner architecture

### Description template

Standard description structure: see `reference/templates/description.md`.

### About-section copy

```
[Channel handle] — <1-paragraph positioning + 6 Differentiation Paths reflection>

[Primary CTA: lead-magnet / pinned VSL / email list]

[Featured links: pinned VSL / lead-magnet / social / podcast]
```

### Channel banner

Visual + text spec:
- **Banner image**: branded, includes the channel's signature visual elements
- **Banner CTA**: the channel's primary call-to-action (typically the lead-magnet bridge)
- **Banner text**: 1-line positioning + CTA

### Channel trailer

60–90 second video that pitches the channel to non-subscribers landing on the channel page. Specific to "this is what you'll get if you subscribe."

```
0:00–0:08: Hook — what the channel is about
0:08–0:30: The differentiation thesis
0:30–0:50: Sample of what's coming (clip from foundational playlist)
0:50–1:30: Subscribe + lead-magnet bridge CTA
```

## Section 7 — Featured-section setup

The channel's home page featured section (top of channel page) shows:

- Channel trailer (top)
- Foundational playlist (most visible)
- Pillar playlists (below the foundational)
- Pinned VSL (prominent placement)
- Most recent video (auto-feeds)
- Series playlists (below pillars)

The featured section is the first impression for non-subscribers. Update quarterly minimum.

## Section 8 — Community-tab strategy

Per `youtube-community.md`:

- **Cadence**: <posts per week target>
- **Post-type mix**: <% poll, % image, % text, % multi-image>
- **Engagement strategy**: <first-hour-only | pinned-replies | full-engagement | minimal>
- **Comment-capture protocol**: <how high-signal comments are logged>

## Section 9 — Cross-platform routing

How the channel connects to owned-audience surfaces:

```
YouTube Channel → Email list (via lead-magnet bridge)
Email list → Private community (Discord / Skool / Circle)
Private community → Back-end offer
Back-end offer → Case study → Channel content (closes the loop)
```

The cross-platform routing is the audience-building loop.

## Section 10 — Architecture maintenance cadence

The channel architecture is not static. Maintenance:

- **Weekly**: end-screen audit on new videos; description-link sweep
- **Monthly**: featured-section refresh; community-tab cadence calibration
- **Quarterly**: architecture review (this document); pillar-playlist update; foundational-playlist sequence revisit
- **Annually**: full architecture revision; channel-trailer re-record; about-section copy refresh

## Section 11 — Architecture decisions log

Track major architecture changes here for cycle-2 calibration:

```
2026-MM-DD: <change description> — <rationale> — <impact observed>
2026-MM-DD: <change description> — <rationale> — <impact observed>
...
```

## Verification checklist

- [ ] Channel positioning specific and repeatable
- [ ] Differentiation thesis credibly ownable
- [ ] Foundational playlist has 5+ videos
- [ ] Pillar playlists have 3+ videos each
- [ ] New-subscriber path is deterministic
- [ ] Belief-installation path maps to the 8 required beliefs
- [ ] End-screen logic documented per category
- [ ] Pinned VSL is featured prominently
- [ ] About-section pitches the back-end offer (soft, value-rich)
- [ ] Banner directs to primary CTA
- [ ] Cross-platform routing is the audience-building loop
- [ ] Architecture maintenance cadence is set

---

*v1.0 — 2026-05-03. Channel architecture template. The path-of-the-viewer; the channel's structural surface.*

*A Heuresis workspace template.*
