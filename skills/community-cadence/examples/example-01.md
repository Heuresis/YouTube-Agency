# Example: community-cadence output

## Output

```markdown
# Community Cadence — [Channel] — Q3 2026

**Date:** 2026-05-03

## 1. Comment-Reply Protocol
- Strategy: **first-hour-pinned-replies** — creator personally replies to first 10-20 comments in the first hour after publish; remainder gets logged for response in 24-48 hours by team
- Voice: creator-direct for first hour; team-with-creator-voice after
- Reply target: top 10-20 comments in first hour, full engagement on lead-magnet-related comments
- Reply tone: measured, direct, pattern-recognition framing ("yes — that's pattern X" / "what you're describing is the role-design layer")

## 2. Pinned Comment (per video)
- Default: "The 6 Failure Patterns Diagnostic — the 1-page tool I mentioned in this video: [link with UTM]"
- Custom override per series video to point to next video in series

## 3. Comment-Capture Protocol
- High-signal definition:
  - Verbatim audience phrase that hasn't been captured before
  - Specific buying trigger described
  - Objection in raw form
  - Case-study material (operator describing their situation in detail)
- Logging destination: weekly comment-mining queue
- Review cadence: Friday afternoon — 30 min weekly review

## 4. Community-Tab Cadence
| Day | Post type | Topic source |
|---|---|---|
| Monday | Question post (T-minus on video drop) | "Which delegation pattern hits closest to home this week?" — pulls from current series |
| Wednesday | Behind-the-program insight post (image + 100 words) | screenshot from program cohort + commentary |
| Friday | Clip from latest video (Pattern reveal) | latest published long-form |

## 5. Comment Pinning Rules
- Always pin: lead-magnet promo comment (per video)
- Sometimes pin: highest-signal audience comment that captures the channel's thesis well (1 per month or less)
- Never pin: engagement-bait, off-topic, hostile

## 6. Compartment Write-Backs
Updates to `audience_building_loop.community_strategy`:
- comment_reply_strategy: "first-hour-pinned-replies"
- comment_reply_voice: "creator-direct first hour, team-with-creator-voice after"
- comment_capture_protocol: "weekly comment-mining queue, Friday review"

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.audience.community.cadence, MARKDOWN, 0.4)
COMPARTMENTS_USED: [creator_identity_matrix, audience_building_loop, distribution_algorithm]
COMPARTMENTS_WRITTEN: [audience_building_loop.community_strategy]
FRAMEWORKS_USED: [first-hour-reply-window, parasocial-trust-mechanic, voc-capture-protocol]
CONFIDENCE: HIGH
GAPS: []
---
```

## Why this output is calibration-grade
Specific reply protocol (first-hour creator-direct, after-hours team-with-creator-voice). Voice tone matches creator brand. Comment-capture protocol has high-signal definition + logging destination + review cadence. Community-tab cadence is 3/week with platform-native post types. Pinning rules explicit.
