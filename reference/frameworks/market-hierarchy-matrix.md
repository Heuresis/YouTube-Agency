---
name: Market Hierarchy Matrix (Awareness × Sophistication)
slug: market-hierarchy-matrix
type: framework
pillar: content
mode_applicability: both
referenced_by_skills: [content-mix-strategy, build-channel-architecture, series-architect, title-options, idea-farm, write-pinned-vsl]
referenced_by_invariants: [INV-13]
status: complete
---

# Market Hierarchy Matrix (Awareness × Sophistication)

## Origin archetype
Direct-response copywriting canon: the awareness-spectrum and sophistication-stage axes fused into one positioning matrix by funnel strategists, ported to channel strategy.

## What it solves
Awareness (what this viewer knows) and sophistication (how tired the niche is of vendor promises) are independent. A solution-aware viewer in a fresh niche needs a completely different video than the same viewer in a niche that's been pitched to death. Picking the awareness level without the sophistication stage — or vice versa — produces content that is right on one axis and dead on the other. The matrix gives every video a two-coordinate address, and every cell has a known winning play.

## Structure — the two axes

**Axis A — Viewer awareness (rows)** — per `five-awareness-levels-on-youtube`:
1. Unaware · 2. Problem-aware · 3. Solution-aware · 4. Product-aware · 5. Most-aware

**Axis B — Niche sophistication (columns)** — per `market-sophistication-five-stages`:
1. First claim · 2. Bigger claim · 3. Mechanism · 4. Better mechanism · 5. Identity / specificity

## Structure — the 25 cells

Row = what the viewer knows. Column = what the niche will still believe. Each cell names the dominant content frame, with a creator-economy title/hook shape.

### Row 1 — Unaware ("doesn't know the problem exists")

| Cell | Frame | Title/hook shape |
|---|---|---|
| 1.1 | Name the hidden problem | "The reason your [output] feels harder every month (you've never measured this)" |
| 1.2 | Size the hidden loss | "Most [niche avatar]s lose [bounded amount] a year to this — here's the math" |
| 1.3 | Reveal the structural cause | "There's a specific mechanism behind [felt symptom] — and it has a fix" |
| 1.4 | Contrast the usual explanation | "Everyone blames [common scapegoat]. The real cause is [structural cause]" |
| 1.5 | Paint the viewer they already are | "You're a [precise avatar] who [specific behavior] — here's what that's quietly costing" |

### Row 2 — Problem-aware ("feels the pain, can't name the fix")

| Cell | Frame | Title/hook shape |
|---|---|---|
| 2.1 | Sharp-edged problem naming | "Stop losing [specific thing] to [specific gap]" |
| 2.2 | Amplified, bounded promise | "How to fix [problem] in [timeframe] ([qualifier])" — `bound-promise-formula` territory |
| 2.3 | Introduce the cause-with-a-name | "Your [problem] isn't a discipline issue — it's [named mechanism]" |
| 2.4 | Contrast mechanisms | "Most fixes for [problem] treat the symptom. This one rewires the cause" |
| 2.5 | Speak as niche-peer | "For [precise avatar]s who refuse to keep [tolerating the problem]" |

### Row 3 — Solution-aware ("knows the category, not your method")

| Cell | Frame | Title/hook shape |
|---|---|---|
| 3.1 | Best-in-category claim | "The [category] approach that actually [outcome]s" |
| 3.2 | Quantified superiority | "[Method] vs [common method]: I tested both for [period]" |
| 3.3 | Your mechanism vs the category | "Why [category advice] stalls — and the [named mechanism] that doesn't" |
| 3.4 | Named proprietary mechanism | "The [Named System]: how it handles the [edge case] every other method ignores" |
| 3.5 | Niche-stack tribe claiming | "Built for [avatar] at [stage] with [constraint] — not for anyone else" |

### Row 4 — Product-aware ("knows this creator; comparing")

| Cell | Frame | Title/hook shape |
|---|---|---|
| 4.1 | Direct offer + path | "Here's exactly what working with me looks like" (pinned VSL territory) |
| 4.2 | Stacked proof | "[N] students, [period], same starting point as you — the full breakdown" (real numbers only — INV-6) |
| 4.3 | Mechanism as differentiator | "The one thing my program does that the others structurally can't" |
| 4.4 | Mechanism-upgrade story | "I rebuilt the [Named System] after [failure case] — here's v2" |
| 4.5 | Membership framing | "Inside the [named cohort/community]: who's in it and why" |

### Row 5 — Most-aware ("ready; needs the trigger")

| Cell | Frame | Title/hook shape |
|---|---|---|
| 5.1 | Calendar + deadline | "Doors open [date], close [date] — here's the decision information" |
| 5.2 | Largest concrete version | "Everything in the [program], priced and explained, no call required to know" |
| 5.3 | New-bonus mechanism | "Joining this cohort adds [specific new component] — here's why it exists" |
| 5.4 | Upgraded inclusion | "The [component] now includes [upgrade]; existing members get it too" |
| 5.5 | Closing-the-door identity | "Last cohort this year. You're in this round or you're in [next window]" — true dates only (INV-16) |

## Rules of movement

1. **Rows cannot be skipped.** A Stage-5 niche full of unaware viewers still needs problem-naming before identity-selling. Never pitch identity to viewers who don't yet know the gap exists.
2. **One asset can span two cells.** A long-form authority video can open in 2.4 (problem + mechanism contrast) and close in 4.3 (offer + differentiator). A VSL spans 4.x → 5.x by design.
3. **The more sophisticated the niche, the more weight in rows 3–4.** Stage-1 niches can grow from row-2 content alone; Stage-4 niches require mechanism- and proof-led content as the channel's center of gravity.
4. **Column 5 without columns 3–4 underneath produces guru-grade copy** — identity claims with no named mechanism convert once and refund. Always anchor identity in mechanism.

## Diagnostic — which cell is this video in?
- **Row:** what does the target viewer already know when the title reaches them? (Per-video awareness declaration — INV-13.)
- **Column:** how many channels are making the same claim to the same audience right now? 0 → col 1; a few → col 2; the claim is saturated → col 3; mechanisms are saturated → col 4; everything is saturated → col 5. (Detection signals in `market-sophistication-five-stages`.)

## Cell selection per output

| Output | Default cells |
|---|---|
| Reach-mode video | Rows 1–2, columns 2–3 (broad problem framing with a named cause) |
| Authority-mode video | Rows 2–3, columns 3–4 (mechanism-led, proof-backed) |
| Series arc (`series-architect`) | Walks one row down per act: 2.x → 3.x → 4.x |
| Pinned VSL | Spans 4.3 → 5.5 (mechanism, proof, calendar) |
| Community post | One cell only; usually 2.3 / 3.3 (diagnostic or mechanism beats) |
| Launch emails / DMs | Rows 4–5, column matched to the niche's stage |

A healthy channel covers multiple rows deliberately (see `multi-awareness-on-one-channel`); the matrix adds the column discipline so each of those videos also matches the niche's claim-fatigue.

## When to use
At channel-architecture time (which cells the channel will occupy and bridge between), at content-mix calibration (the cell distribution *is* the mix), and per-video at title/packaging time (every title gets a cell address before it ships).

## Why it works
The two axes fail independently: right-row/wrong-column content speaks to the correct knowledge state in a claim-form the audience has stopped believing; wrong-row/right-column content makes a believable claim to a viewer who can't parse it yet. Only the cell — both coordinates — predicts whether the promise lands. Channels that address cells instead of topics stop competing on volume and start competing on placement.

## Anti-patterns
- **Single-cell channels:** all content in 3.3 serves one slice and starves the bridge — new viewers have no row-1/2 entry, warm viewers have no row-4/5 path.
- **Column drift:** copying title shapes from a bigger channel in a *less* sophisticated adjacent niche imports column-2 claims into a column-4 audience.
- **Identity cosplay:** jumping to column 5 ("for the few who get it") before the channel has a demonstrated mechanism — converts attention into skepticism.
- **Static addressing:** the niche's column moves over time; a cell map older than two quarters is a guess. Re-scan with the stage-detection signals.

## Variants observed
Some operators run a 5×4 version (four sophistication stages) or collapse rows 4–5. Canonical form retained: 5×5, because the product-aware/most-aware split is exactly where creator funnels distinguish nurture content from conversion content, and collapsing it blurs the VSL's job.
