# Example: title-thumbnail-pair output

## Context
- Topic: "6 patterns of failed delegation"
- Mode: authority, 13 min
- First-30s: contrarian-frame + 80-businesses statistic + bound-promise
- Channel CTR floor 4%, target 6%

## Output

```markdown
# Title + Thumbnail Pair — 6 Patterns of Failed Delegation

**Mode:** authority
**Awareness:** Problem-aware → Solution-aware
**Length of video:** 13 min
**First-30s promise:** "Your last delegation hire failed. The problem wasn't the person. 80 businesses, 6 patterns. By the end you'll know which 2 you're in."

## Pair A (Lead) — Reframe + Pattern Specificity
**Title:** "The 6 Patterns of Failed Service-Business Delegation"
**Title formula:** Pillar 1 (List + outcome) — 40% of channel
**Thumbnail composition:** face-left-text-right
**Thumbnail face grammar:** contrarian-stare, intensity 6/10, eye-line camera-direct
**Thumbnail text:** "WHY DELEGATION FAILS" (top, 14% height) + "(Pattern 4 will surprise you)" (bottom, 7% height, italic accent yellow)
**Predicted CTR:** 5.5-6.5% (channel band 4-7%)
**INV-10 alignment:** PASS — visual signals "reframe + pattern + surprise" / verbal signals "6 patterns of failure" / first-30s delivers reframe ("not the person") + 80-businesses stat + 6-pattern preview. All three promise the same: list of failure patterns + reframe of why delegation fails + specific surprise insight (Pattern 4).
**INV-14 fair-use:** PASS (creator's own face + creator's whiteboard background)

## Pair B — Authority + Counted Experience
**Title:** "Why 80+ Service Businesses Failed at Delegation (And the 6 Patterns)"
**Title formula:** Pillar 2 (Statistic + outcome) — 30% of channel
**Thumbnail composition:** face-left-text-right
**Thumbnail face grammar:** measured intensity 5/10, eye-line camera-direct
**Thumbnail text:** "80+ BUSINESSES" (top, large) + "6 FAILURE PATTERNS" (bottom)
**Predicted CTR:** 5.0-6.0% (slightly lower than Pair A — statistic-led titles run slightly behind list-led for authority pillar in early-stage channels)
**INV-10 alignment:** PASS — visual emphasizes "80+ + 6 patterns" / verbal emphasizes "80+ + 6 patterns" / first-30s delivers same with reframe layered. All three same content type, intensity, topic.
**INV-14 fair-use:** PASS

## Pair C — Surprise + Specificity
**Title:** "Pattern 4 Catches Most Operators by Surprise (Why Delegation Fails)"
**Title formula:** Pillar 3 (Curiosity-gap + payoff) — 20% of channel
**Thumbnail composition:** face-left-text-right
**Thumbnail face grammar:** contrarian-stare with subtle eyebrow furrow, intensity 7/10
**Thumbnail text:** "PATTERN 4" (large) + "the one nobody expects" (small italic)
**Predicted CTR:** 5.0-7.5% (highest variance — curiosity-gap titles have higher upside but also higher INV-10 mismatch risk if script doesn't deliver pattern 4 strongly)
**INV-10 alignment:** PASS but tighter — visual + verbal both emphasize "Pattern 4 surprise" / first-30s loop opens "by the end you'll know which 2 you're in" + Pattern 4 reveal at 5:30 is a strong surprise beat. Alignment holds because the script delivers the specific surprise.
**INV-14 fair-use:** PASS

## Recommended Lead + A/B
- **Lead: Pair A** — list+pattern formula has best CTR consistency for this audience + clean INV-10 alignment + lowest variance.
- **A/B variant: Pair B** — tests whether statistic-led title outperforms list-led for this audience. Single variable changed (title formula); thumbnail composition + face + system identical.

(Pair C is held in reserve — would test as A/B vs Lead in cycle 2 if Pair A vs Pair B gets clear data.)

## Compartment Write-Backs
- `distribution_algorithm.title_strategy` — log Pillar 1 + Pillar 2 used (40+30 = 70% of recent slate); rotate Pillar 3 + 4 in upcoming videos to maintain split
- `production_and_post.thumbnail_design_system.a_b_testing_protocol` — log A/B test method (single-variable, 7-day test window, decision threshold 0.5% CTR delta)

---
SIGNAL: S = (BUILD, DIRECT, youtube.production.title-thumbnail.pair, MARKDOWN, 0.8)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, production_and_post, distribution_algorithm]
FRAMEWORKS_USED: [4-pillar-title-formula, title-thumbnail-promise-alignment, thumbnail-design-system, ctr-prediction-heuristic]
CONFIDENCE: HIGH (3 complete pairs, INV-10 PASS each, INV-14 PASS each, A/B design specified)
GAPS: []
TITLE_THUMBNAIL_PROMISE: PASS (all 3 pairs)
COPYRIGHT_FAIR_USE: PASS (all 3 pairs)
---
```

## Why this output is calibration-grade
3 complete pairs (each title + thumbnail evaluated as a unit, not recombined). Each pair gets predicted CTR with reasoning + INV-10 alignment with three-way verification + INV-14 fair-use check. A/B test changes one variable. Pillar split logged for cycle-aware mixing. Lead pair is the highest-confidence + lowest-variance unit.
