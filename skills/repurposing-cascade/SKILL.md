---
name: repurposing-cascade
command: /repurposing-cascade
description: Cascade one long-form video into N Shorts, social posts, email content, and newsletter mentions.
tier: sonnet
agent_owner: distribution-head
agent_executor: distribution-head
required_compartments:
  distribution_algorithm: 40
  content_engine: 40
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.distribution.repurposing.cascade
  format: MARKDOWN
  weight: 0.4
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Repurposing Cascade

## Purpose
Cascade one long-form video into the channel's full repurposing surface: N Shorts, M social posts (LinkedIn / X / Instagram), email content, newsletter mention. Maximizes the surface from one production effort.

## Decision Logic
A long-form video is the central asset. Without repurposing, it produces watch-time only. With repurposing, it produces:
- Shorts (1-3 per long-form) → audience growth + Short-to-long bridge
- Social posts (3-6 per long-form, native to each platform) → cross-platform pull
- Email (1-2 per long-form) → list engagement + click-through to video
- Newsletter mention → subscriber engagement + video pull

The cascade rate per `distribution_algorithm.repurposing_cascade` (typical: 2-3 Shorts, 3-5 social posts, 1 email, 1 newsletter mention).

## Tacit Principles
1. **Each piece is platform-native.** A LinkedIn post ≠ a Twitter thread ≠ an Instagram caption. Don't paste the same text everywhere.
2. **Each piece bridges back to the long-form.** Shorts → pinned comment. Social → link in bio / comment. Email → CTA in body.
3. **Don't repurpose mediocre content.** If the long-form underperforms, repurposing it amplifies the underperformance.
4. **Repurpose the surprise beat.** Pattern 4 / case study / contrarian claim — the highest-curiosity beat becomes the most-repurposed.
5. **Stagger the cascade.** Shorts T+3, T+5, T+7. Social T+1, T+4. Email T+2.
6. **Banned vocab + Truth Gate apply to all pieces.**

## Process

### Step 0 — Gate check
distribution ≥ 40, content_engine ≥ 40.

### Step 1 — Load context
Long-form video, transcript, beats, retention engineering map.

### Step 2 — Extract surprise beats
Highest-curiosity moments (often Loop closes / Pattern reveals / case studies / contrarian claims).

### Step 3 — Generate Shorts
1-3 Shorts per long-form. Each: hook in 3s + single beat + bridge in pinned comment.

### Step 4 — Generate social posts
LinkedIn / X / Instagram — platform-native. Each cites the long-form via link.

### Step 5 — Generate email content
1-2 emails for list — opening + body + CTA to long-form.

### Step 6 — Generate newsletter mention
1 paragraph for newsletter linking to video.

### Step 7 — Schedule cascade
Stagger across T+1 through T+7.

### Step 8 — Verify
Banned-vocab, Truth Gate, anonymization, INV-14 (any clipped material licensed).

## Output Format

```markdown
# Repurposing Cascade — [Long-form title]

**Long-form video:** [title + link]
**Date long-form publishes:** YYYY-MM-DD
**Cascade window:** T+0 through T+7

## 1. Shorts (N)
### Short 1 — [topic]
- Length: 30-60s
- Beat: [single beat]
- Schedule: T+3
- Bridge: pinned comment with long-form link
- Script: [link to /write-shorts-script output]

### Short 2 ...
### Short 3 ...

## 2. Social Posts (M)
### LinkedIn (native long-form post)
- Schedule: T+1
- Hook + body + CTA to YouTube video link

### X / Twitter (thread)
- Schedule: T+1 (or T+4 if running 2 X posts)
- 5-7 tweets

### Instagram caption (with carousel option)
- Schedule: T+4
- Caption + carousel hint if applicable

## 3. Email (1-2)
### Email 1 (newsletter list)
- Subject:
- Open:
- Body:
- CTA:
- Schedule: T+2

### Email 2 (lead-magnet sequence trigger if new lead)
- Same structure

## 4. Newsletter Mention
- 1 paragraph + link
- Issue: [next issue]

## 5. Cascade Schedule
| Day | Asset | Platform | Status |
|---|---|---|---|
| T+0 | Long-form | YouTube | publish |
| T+1 | LinkedIn post | LinkedIn | scheduled |
| T+1 | X thread | X | scheduled |
| T+2 | Email | newsletter list | scheduled |
| T+3 | Short 1 | YouTube Shorts | scheduled |
| T+4 | IG caption | Instagram | scheduled |
| T+4 | X follow-up | X | scheduled |
| T+5 | Short 2 | YouTube Shorts | scheduled |
| T+7 | Short 3 | YouTube Shorts | scheduled |

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.distribution.repurposing.cascade, MARKDOWN, 0.4)
COMPARTMENTS_USED: [content_engine, distribution_algorithm]
FRAMEWORKS_USED: [repurposing-cascade-architecture, platform-native-formatting, surprise-beat-extraction]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: repurposing-cascade-architecture]
- [framework: platform-native-formatting]
- [framework: surprise-beat-extraction]

## Compartments Read
- `{{content_engine}}`, `{{distribution_algorithm}}`

## Verification Gates
- Formal: cascade rate matches compartment 8 spec, each piece platform-native, all banned-vocab clean
- Semantic: each piece bridges to long-form, each piece passes Truth Gate
- Info-theoretic: pieces tight to platform conventions

## Related Skills
- Upstream: `/publish-checklist`
- Downstream: per-platform publishing
- Alternative: none

## Failure Modes
- **Same text everywhere** — not platform-native. Rewrite per platform.
- **No bridge** — repurposed pieces don't link back. Add.
- **Cascade too tight** — all pieces in T+0/T+1. Stagger.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the repurposing-cascade tradition (1 long-form → N pieces) and platform-native formatting practice.
