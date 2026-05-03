---
name: title-options
command: /title-options
description: Generate 8 title options across the 4-pillar formula split (40/30/20/10) with predicted CTR.
tier: sonnet
agent_owner: distribution-head
agent_executor: title-strategist
required_compartments:
  distribution_algorithm: 30
  audience_intelligence_system: 50
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.distribution.title.options
  format: MARKDOWN
  weight: 0.4
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Title Options

## Purpose
Generate 8 title options spanning the 4-pillar title-formula split (40% Pillar 1 / 30% Pillar 2 / 20% Pillar 3 / 10% Pillar 4). Each title scored on predicted CTR + INV-10 alignment with first-30s + Truth Gate + banned-vocabulary clean.

## Decision Logic
Title is the verbal half of the title-thumbnail unit. Generated standalone here for either (a) creator pre-selection before `/title-thumbnail-pair` or (b) Search-driven titles where the title is the primary discovery surface (vs. thumbnail-driven home-feed).

The 4 pillars (channel-customizable):
- Pillar 1 (40%): list + outcome (e.g., "The 6 Patterns of Failed X")
- Pillar 2 (30%): statistic + outcome (e.g., "Why 80% of X Fail at Y")
- Pillar 3 (20%): curiosity-gap + payoff (e.g., "Pattern 4 Catches Most X by Surprise")
- Pillar 4 (10%): contrarian-frame + reveal (e.g., "Hiring Better Doesn't Fix Delegation")

## Tacit Principles
1. **Specificity beats intensity.** "6 Patterns" beats "Many Failures." Numbers + nouns.
2. **First 5 words matter most.** Truncated in feed view.
3. **Banned vocab + engagement-bait → REJECT.** Title is the highest-visibility vocab surface.
4. **Truth Gate per title.** Don't title what the script doesn't deliver.
5. **Sophistication-stage shifts wording.** Skeptical audiences reject hype titles. Naive audiences forgive them.
6. **Search vs feed positioning.** Search titles include keywords ("how to delegate"). Feed titles include curiosity / specificity.
7. **Don't repeat the channel name in the title.** Wasted slot.

## Process

### Step 0 — Gate check
distribution ≥ 30, audience ≥ 50.

### Step 1 — Load context
Topic, first-30s promise, channel pillar split state, banned-vocab + creator anti-phrases.

### Step 2 — Generate 8 titles
2 in Pillar 1 / 2 in Pillar 2 / 2 in Pillar 3 / 2 in Pillar 4 — covers split + provides A/B variants per pillar.

### Step 3 — Predict CTR per title
From channel CTR history + pillar performance bands.

### Step 4 — INV-10 + Truth Gate per title
Each must align with first-30s + survive 30s screenshot test.

### Step 5 — Banned-vocab + engagement-bait scan
Each title clean.

### Step 6 — Recommend top 3
Best CTR + cleanest gates + pillar coverage.

## Output Format

```markdown
# Title Options — [Topic]

**Mode:** authority | reach | hybrid
**Pillar split target:** 40/30/20/10

| # | Title | Pillar | Predicted CTR | INV-10 | Truth Gate | Banned-vocab |
|---|---|---|---|---|---|---|
| 1 | "..." | Pillar 1 | N% | PASS | PASS | clean |
| 2 | "..." | Pillar 1 | N% | PASS | PASS | clean |
| 3 | "..." | Pillar 2 | N% | PASS | PASS | clean |
| 4 | "..." | Pillar 2 | N% | PASS | PASS | clean |
| 5 | "..." | Pillar 3 | N% | PASS | PASS | clean |
| 6 | "..." | Pillar 3 | N% | PASS | PASS | clean |
| 7 | "..." | Pillar 4 | N% | PASS | PASS | clean |
| 8 | "..." | Pillar 4 | N% | PASS | PASS | clean |

## Recommended Top 3
1. **#N** ([title]) — [reasoning]
2. **#N** — ...
3. **#N** — ...

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.distribution.title.options, MARKDOWN, 0.4)
COMPARTMENTS_USED: [audience_intelligence_system, distribution_algorithm]
FRAMEWORKS_USED: [4-pillar-title-formula, ctr-prediction-heuristic, truth-gate-per-claim]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 4-pillar-title-formula]
- [framework: ctr-prediction-heuristic]
- [framework: truth-gate-per-claim]

## Compartments Read
- `{{audience_intelligence_system}}`, `{{distribution_algorithm}}`

## Verification Gates
- Formal: 8 titles spanning all 4 pillars, banned-vocab + engagement-bait clean per title
- Semantic: Truth Gate per claim, INV-10 alignment per title
- Info-theoretic: specificity ≥ 3 per title (numbers + nouns)

## Related Skills
- Upstream: `/research-brief`, `/write-authority-script` (title hypothesis from script)
- Downstream: `/title-thumbnail-pair`, `/publish-checklist`
- Alternative: `/title-thumbnail-pair` (cross-coordinated title + thumbnail)

## Failure Modes
- **Pillar imbalance** — 6 titles in one pillar. Revise to span 4.
- **Banned vocab in title** — REJECT.
- **Title doesn't survive Truth Gate** — REJECT.
- **All titles same shape** — diversify.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the 4-pillar title formula split tradition (40/30/20/10).
