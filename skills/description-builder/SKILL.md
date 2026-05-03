---
name: description-builder
command: /description-builder
description: Build the video description with timestamped chapters, CTA stack, and link architecture.
tier: haiku
agent_owner: distribution-head
agent_executor: distribution-head
required_compartments:
  distribution_algorithm: 30
  offer_architecture: 40
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.distribution.description.build
  format: MARKDOWN
  weight: 0.3
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Description Builder

## Purpose
Build the video description: opening line, timestamped chapters, CTA stack, link architecture, hashtags. The description is a secondary-but-load-bearing surface — primary CTAs (lead magnet, pinned VSL, application) live here.

## Decision Logic
Description's job: chapter the video for skim consumption + house the CTA stack + reinforce title-promise. The CTA stack is ordered: (1) lead magnet, (2) pinned VSL, (3) application, (4) newsletter, (5) social.

Series videos have a series-cross-link in the first line.

Hashtags: 3-5 max, channel-specific not generic.

## Tacit Principles
1. **First line is the hook duplicate.** Repeats the bound-promise from the title in slightly different words.
2. **Timestamps drive skim retention.** Chapters help the algorithm understand structure.
3. **CTA stack is ordered.** Lead magnet first, application last.
4. **Hashtags are not SEO magic.** 3-5 specific tags > 30 generic tags.
5. **Link UTM tracking is required.** All links carry UTMs for attribution.
6. **Banned vocab applies.**

## Process

### Step 0 — Gate check
distribution ≥ 30, offer ≥ 40.

### Step 1 — Load context
Title, script, series state, offer CTAs, lead magnet.

### Step 2 — Opening line
Restate title's bound-promise.

### Step 3 — Timestamped chapters
Per script section breaks.

### Step 4 — CTA stack
Lead magnet → pinned VSL → application → newsletter → social.

### Step 5 — Hashtags
3-5 specific.

### Step 6 — Series cross-link if applicable
"This is video N of [series name]: ..."

### Step 7 — Verify
Banned-vocab, link integrity, UTM presence.

## Output Format

```markdown
# Description — [Title]

## First Line (hook duplicate)
[1 sentence restating bound-promise]

## Series Cross-Link (if applicable)
"This is video N of [series name]: [series promise]."

## Timestamped Chapters
00:00 [Chapter 1]
01:30 [Chapter 2]
...

## CTA Stack
### 1. Lead Magnet
[1 sentence + link with UTM]

### 2. Pinned VSL
[1 sentence + link with UTM]

### 3. Application
[1 sentence + link with UTM]

### 4. Newsletter
[1 sentence + link]

### 5. Social
[handle list]

## Hashtags
#tag1 #tag2 #tag3 #tag4 #tag5

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.distribution.description.build, MARKDOWN, 0.3)
COMPARTMENTS_USED: [distribution_algorithm, offer_architecture, channel_architecture]
FRAMEWORKS_USED: [description-architecture, cta-stack-ordering, utm-attribution]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: description-architecture]
- [framework: cta-stack-ordering]
- [framework: utm-attribution]

## Compartments Read
- `{{distribution_algorithm}}`, `{{offer_architecture}}`, `{{channel_architecture}}`

## Verification Gates
- Formal: chapters timestamped, CTA stack ordered, hashtags 3-5, banned-vocab clean, all links carry UTM
- Semantic: first-line restates bound-promise (Truth Gate)
- Info-theoretic: description is tight, not padded

## Related Skills
- Upstream: script + title-thumbnail pair
- Downstream: `/publish-checklist`
- Alternative: none

## Failure Modes
- **No timestamps** — algorithm doesn't read chapters. Add.
- **CTA stack out of order** — application first, lead magnet last. Reorder.
- **Generic hashtags** — #youtube #content. Replace with niche-specific.
- **Banned vocab** — REJECT.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the description-architecture tradition + CTA-stack ordering practice.
