---
name: title-thumbnail-pair
command: /title-thumbnail-pair
description: Produce title + thumbnail as one inseparable unit, predicting CTR and aligning the promise with first-30s script.
tier: opus
agent_owner: production-head
agent_executor: thumbnail-designer
required_compartments:
  channel_architecture: 60
  audience_intelligence_system: 60
  production_and_post: 50
mode_applicability: both
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.production.title-thumbnail.pair
  format: MARKDOWN
  weight: 0.8
banned_when: []
verification_layers: [formal, semantic, info-theoretic, title-thumbnail-promise, copyright-fair-use]
---

# Title + Thumbnail Pair

## Purpose
Produce title + thumbnail as **one inseparable unit** — they are read together, click together, and promise together. The pair gates INV-10 (title-thumbnail-promise alignment) and is the channel's CTR engine. This skill cross-coordinates `thumbnail-designer` + `title-strategist` to ship the unit.

## Decision Logic
A title and thumbnail evaluated separately can both be "good" while the pair is broken. The pair must:
1. Promise the same thing (visual + verbal alignment)
2. Match the first 30s of the script (INV-10)
3. Compete in the home/suggested feed against 10-30 alternatives
4. Earn CTR ≥ channel floor (typically 4-6% for established channels, 6-10% for thumbnail-strong channels)

The pair is generated together. Title alone or thumbnail alone produces fragmentation. The skill produces 3-5 pair variants — each pair is a complete unit, not 5 titles + 5 thumbnails recombined.

## Tacit Principles
1. **Treat as one unit.** A title + thumbnail evaluation is "does this pair earn the click + deliver the promise" — not two separate scores summed.
2. **The viewer reads thumbnail first, title second, but they fuse into one impression.** Design for the fusion, not the sequence.
3. **Curiosity-gap belongs in one of the two, not both.** Don't put a curiosity gap in both title and thumbnail — overload reads as bait.
4. **The promise type must match.** Both verbal + visual signal "tactical" / "story" / "framework" / "case study." Mismatch = INV-10 fail.
5. **Predicted CTR is a heuristic, not a guarantee.** Estimate from channel CTR history + competitive thumbnail position + title-formula performance — but recognize the limits.
6. **Test 1 variable per A/B.** Don't change title + thumbnail simultaneously in A/B; the data won't be interpretable.
7. **Banned-vocab applies in titles strictly.** Engagement-bait language in titles is platform-policy-flagged.
8. **Mode determines the pair's energy.** Authority pair = measured + specific. Reach pair = curiosity + character.

## Process

### Step 0 — Gate check
channel_architecture ≥ 60, audience ≥ 60, production_and_post ≥ 50.

### Step 1 — Load context
Title hypothesis from `/title-options` (or generate if not yet run), thumbnail brief from `/thumbnail-brief` (or generate), script first-30s, channel CTR history.

### Step 2 — Generate pair variants
3-5 complete pairs. Each: title + thumbnail composition + face grammar + text + INV-10 alignment statement.

### Step 3 — Predict CTR per variant
Use channel CTR history + title-formula performance bands + thumbnail-system performance bands.

### Step 4 — INV-10 alignment per pair
Three-way check: visual promise + verbal promise + first-30s promise.

### Step 5 — Banned-vocab + engagement-bait + Truth Gate per title
Each title clean.

### Step 6 — INV-14 per thumbnail
Each thumbnail's imagery licensed.

### Step 7 — Recommend lead pair + A/B variant
Lead pair = highest predicted CTR with INV-10 PASS. A/B variant changes one variable.

### Step 8 — Verify
All gates per pair.

## Output Format

```markdown
# Title + Thumbnail Pair — [Topic]

**Mode:** authority | reach | hybrid
**Awareness:** [level]
**Length of video:** N min
**First-30s promise:** [3-line summary of what script delivers]

## Pair A (Lead)
**Title:** "[verbatim]"
**Title formula:** [4-pillar split slot]
**Thumbnail composition:** [layout]
**Thumbnail face grammar:** [type + intensity]
**Thumbnail text:** "[copy]"
**Predicted CTR:** N% (channel band: N-N%)
**INV-10 alignment:** PASS — [3-line verification]
**INV-14 fair-use:** PASS

## Pair B
[same structure]

## Pair C
[same structure]

## Recommended Lead + A/B
- Lead: Pair A (predicted CTR + INV-10 PASS)
- A/B variant: Pair B (changes [one variable])

## Compartment Write-Backs
- Update to `distribution_algorithm.title_strategy` (formula slot used) — log
- Update to `production_and_post.thumbnail_design_system.a_b_testing_protocol` — log

---
SIGNAL: S = (BUILD, DIRECT, youtube.production.title-thumbnail.pair, MARKDOWN, 0.8)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, production_and_post, distribution_algorithm]
FRAMEWORKS_USED: [4-pillar-title-formula, title-thumbnail-promise-alignment, thumbnail-design-system, ctr-prediction-heuristic]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
TITLE_THUMBNAIL_PROMISE: PASS | FAIL per pair
COPYRIGHT_FAIR_USE: PASS | FAIL per pair
---
```

## Frameworks Applied
- [framework: 4-pillar-title-formula]
- [framework: title-thumbnail-promise-alignment]
- [framework: thumbnail-design-system]
- [framework: ctr-prediction-heuristic]

## Compartments Read
- Compartments 2, 4, 7, 8

## Verification Gates
- Formal: 3-5 pairs, each with title + thumbnail spec + INV-10 + INV-14, banned-vocab + engagement-bait clean
- Semantic: pairs are complete units (not recombinations), promise types align, awareness/mode match
- Info-theoretic: predicted CTR computed from real channel band
- Title-thumbnail-promise (INV-10): three-way alignment per pair
- Copyright/fair-use (INV-14): per pair

## Related Skills
- Upstream: `/research-brief`, `/title-options`, `/thumbnail-brief`
- Downstream: `/publish-checklist`, `/editor-brief` (for thumbnail final design)
- Alternative: `/title-options` + `/thumbnail-brief` separately (lower-leverage)

## Failure Modes
- **Title and thumbnail recombined, not paired** — treat as 5 titles × 5 thumbnails. Revise: each pair complete unit.
- **Curiosity gap in both** — bait reading. Revise: one or the other.
- **INV-10 mismatch in any pair** — REJECT pair. Revise.
- **Banned title language** — engagement-bait, "you won't believe," etc. REJECT.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
Draws from the title-thumbnail-unit theorist (INV-10 source — title + thumbnail as one inseparable promise), the 4-pillar title formula split, and the CTR-prediction methodology.
