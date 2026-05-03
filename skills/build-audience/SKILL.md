---
name: build-audience
command: /build-audience
description: Populate the Audience Intelligence System compartment to 70%+ via VOC extraction, ICP, awareness levels, limiting beliefs.
tier: opus
agent_owner: foundations-head
agent_executor: audience-researcher
required_compartments:
  creator_identity_matrix: 30
mode_applicability: n/a
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.foundations.audience.build
  format: MARKDOWN
  weight: 0.9
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Build Audience

## Purpose
Populate Compartment 2 (Audience Intelligence System — the heaviest compartment at 18% weight) to ≥70% completeness. Produces the **Audience Intelligence Document** — a full ICP with demographics, psychographics, voice-of-viewer (20+ verbatim quotes), awareness-level distribution, limiting belief diagnosis, objection library, and behavioral patterns. This is the single most load-bearing artifact in the OS — every downstream skill (script writing, hook engineering, title strategy, thumbnail design, VSL, lead-magnet, sales script) reads from this compartment. If this is wrong or generic, every downstream output is corrupted.

## Decision Logic
Audience research on YouTube is structurally different from generic ICP work because the channel produces 50–500 videos per audience archetype, and the audience self-selects through retention curves. The audience is partially **revealed by the algorithm** rather than fully designed by the creator. So the audience profile is written iteratively: the creator's hypothesis → first cohort of videos → retention + comment data → refined audience profile. This skill produces the **first-draft hypothesis** rich enough to enable production, with explicit gaps marked for cycle-2 refinement after early publish data arrives.

The VOC (voice-of-viewer) extraction is non-negotiable. 20+ verbatim quotes minimum, sourced from real audience surface (comments, DMs, sales calls, surveys, Reddit threads, adjacent-channel comments). Verbatim language drives every hook, every thumbnail headline, every script open, every email subject line. Paraphrased VOC is 10× less valuable than verbatim VOC.

The limiting belief diagnosis (Worthless / Helpless / Hopeless from the limiting-belief-triad) determines the offer architecture and the channel's belief-installation path. One dominant belief per audience archetype. The diagnosis must be backed by 3+ pieces of behavioral evidence (what they search, what they click, what they say in comments, what they buy adjacent to).

The awareness-level distribution (Unaware / Problem-aware / Solution-aware / Product-aware / Most-aware) determines the dual-mode content mix. A channel mostly speaking to Solution-aware viewers needs different scripts, hooks, and CTAs than a channel speaking to Problem-aware viewers.

## Tacit Principles
1. **The aspirant, not the current.** If the creator's offer is $8K but their current customers are $2K, write the audience profile for the $8K buyer, not the $2K buyer. Past customers are input; the aspirant audience is the conclusion.
2. **One ICP per offer, one archetype per ICP.** Don't write a universal audience for the whole channel. Write it for the back-end offer's avatar. Multi-product creators get multi-ICPs (one per offer).
3. **Verbatim or paraphrase — flag which.** Every VOC quote tagged `[VERBATIM: source]` or `[PARAPHRASE: inferred]`. The verbatim/paraphrase ratio is a quality signal — under 50% verbatim = weak audience research.
4. **Decode every objection to a belief.** "It's too expensive" is the surface. The underlying belief is "I don't believe the value is real." Always map surface objection → underlying belief → reframe → proof required.
5. **Surface the unsexy buying trigger.** The buying trigger is rarely "I decided to invest in myself." Usually it's a specific external shock — "I just lost my biggest client," "my partner gave me an ultimatum about the business," "I turned 40 and panicked." Specific shock-events > aspirational framing.
6. **Find the in-group phrase.** Every audience has a phrase its members use that outsiders don't recognize. That phrase becomes hook fuel. Find it.
7. **Run the 3am Test on psychographics.** Can you describe what this audience worries about at 3am when they can't sleep, in vivid specific detail? If no, the psychographic section is too abstract.
8. **Awareness-level evidence is behavioral, not demographic.** What level the audience sits at is determined by what they search, what they click, what comments they leave — not by their job title. Behavioral evidence > demographic inference.
9. **The audience profile must produce hooks.** If you can read the finished audience document and not immediately generate 10 hook variants from it, the document is too abstract. Hook-readiness is a quality test.
10. **Watch for creator projection.** The biggest failure mode is the creator describing themselves projected onto the audience. The audience is not the creator at an earlier stage — the audience is a different person. Anchor every claim in real-world signal.

## Process

### Step 0 — Gate check
Verify `creator_identity_matrix` ≥ 30%. If below, run `/extract-creator-voice` first or interview-mode against the creator-identity questions.

### Step 1 — Load context
- `{{creator_identity_matrix.basic_info}}`, `{{creator_identity_matrix.unique_positioning}}`
- `{{offer_architecture.back_end_offers}}` if populated
- `{{channel_architecture.niche_definition}}` if populated
- Real-world VOC sources: comments / DMs / sales call transcripts / community threads / surveys / adjacent-channel comments / Reddit / Quora / forum threads
- `reference/frameworks/awareness-spectrum-on-youtube.md`
- `reference/frameworks/limiting-belief-triad.md`
- `reference/frameworks/voice-of-viewer-extraction.md`

### Step 2 — Demographics + life-stage profile
- Age range (narrow — 35–48, not 25–65)
- Gender split with %
- Geography (specific countries/regions)
- Income range (actual numbers, not tiers)
- Education / role / industry
- Marital + family status if relevant to pain/desire
- Generational + cultural markers

### Step 3 — Psychographic architecture (4-layer pain + 4-layer desire)
**Pain in 4 layers:**
- Surface: what they say publicly ("I want more revenue")
- Real: what they feel ("my business runs me")
- Private: what they wouldn't say publicly ("I'm scared my partner will leave if this fails")
- Secret: what they wouldn't admit to themselves ("I'm not sure I'm capable")

**Desire in 4 layers:**
- Functional: tangible outcome
- Emotional: how they want to feel
- Identity: who they want to become
- Legacy: what they want to leave behind

Min 5 items per layer. Run the 3am Test. If the section reads abstract, interview deeper.

### Step 4 — VOC extraction (≥20 verbatim quotes)
Categories:
- `actual_viewer_language` — 20+ verbatim phrases of how the audience describes their world
- `pain_language_patterns` — 15+ verbatim
- `desire_language_patterns` — 15+ verbatim
- `objection_patterns` — 15+ verbatim
- `comment_themes` — recurring themes from real comment data

Each tagged `[VERBATIM: source URL or ref]` or `[PARAPHRASE: inferred from {source}]`.

### Step 5 — Beliefs system + limiting belief diagnosis
- Current beliefs (8 standard belief frames the channel will need to install or shift)
- Aspiring beliefs (what they want to believe post-transformation)
- Limiting belief: Worthless | Helpless | Hopeless — backed by 3+ behavioral evidence pieces
- Required transformation type: Status | Capability | Safety

### Step 6 — Awareness level distribution
Estimate % at each of 5 levels (Unaware / Problem-aware / Solution-aware / Product-aware / Most-aware). Identify the **primary awareness target** — the level the channel is calibrated to. Provide behavioral evidence for the primary level.

### Step 7 — Sophistication stage + market context
- Market sophistication (Naive / Aware / Skeptical / Exhausted) per the sophistication-stages framework
- Market maturity (Emerging / Growing / Mature / Saturated)
- Competitive density
- Implications for hook formulas, banned vocabulary strictness, contrarian-frame requirement

### Step 8 — Behavioral patterns
- What else they watch (described as channel archetypes, never named)
- Content consumption pattern (binge / scheduled / discover-via-search)
- Buying triggers (5–10 specific external shock events)
- Research behavior (where they search, who they trust)
- Trust signals required (case studies / credentials / peer endorsement / lived experience)

### Step 9 — Objection library (≥10)
Each objection structured as:
- Surface objection (verbatim)
- Underlying belief
- Reframe
- Proof required
- Counter-story (isomorphic case study if available — never invented)

### Step 10 — Verify
Run banned-vocabulary scan, anonymization scan (no real channel/creator names), 3am Test on psychographics, hook-readiness test, verbatim/paraphrase ratio check (target ≥50% verbatim).

## Output Format

```markdown
# Audience Intelligence Document — [Channel Handle] — [Offer Name]

**Avatar Name:** [shorthand the team will use]
**Completeness Score:** N/100
**Confidence Distribution:** N HIGH / N MEDIUM / N LOW per section
**Date:** YYYY-MM-DD

## 1. Avatar Summary
[1-paragraph portrait + named avatar + dominant transformation type + primary awareness level + top 3 buying triggers]

## 2. Demographics
[narrow ranges, specific numbers]

## 3. Life-Stage / Firmographic
[B2C life-stage or B2B firmographic — specific]

## 4. Psychographic Architecture
### Pain (4 layers)
- Surface, Real, Private, Secret — 5+ items per layer

### Desire (4 layers)
- Functional, Emotional, Identity, Legacy

### Fears (5+)
### Aspirations (5+)

## 5. Beliefs System
### Current beliefs (8 frames)
### Aspiring beliefs
### Limiting Belief Diagnosis
- Dominant: Worthless | Helpless | Hopeless
- Behavioral evidence (3+):
- Required transformation: Status | Capability | Safety

## 6. Voice of Viewer
### actual_viewer_language (20+ verbatim)
- "[quote]" — [VERBATIM: source]
- ...
### pain_language_patterns (15+)
### desire_language_patterns (15+)
### objection_patterns (15+)
### comment_themes
### survey_responses_summary

## 7. Awareness Level Distribution
- Unaware: N% / Problem-aware: N% / Solution-aware: N% / Product-aware: N% / Most-aware: N%
- **Primary target:** [level]
- Behavioral evidence for primary:
- Content strategy implication:

## 8. Market Sophistication
- Sophistication stage: Naive | Aware | Skeptical | Exhausted
- Market maturity:
- Competitive density:
- Hook + copy implications:

## 9. Behavioral Patterns
### What else they watch (archetypes, anonymized)
### Consumption pattern
### Buying triggers (5–10)
### Research behavior
### Trust signals required (ranked)

## 10. Objection Library (≥10)
### Objection 1: "[verbatim]"
- Underlying belief:
- Reframe:
- Proof required:
- Counter-story:
[repeat ≥10]

## 11. Strategic Implications
- Offer design implications
- Channel architecture implications
- Hook formula implications
- Title-thumbnail implications
- VSL implications

## 12. Confidence + Gap Map
| Section | Confidence | Gap | Next research action |

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.foundations.audience.build, MARKDOWN, 0.9)
COMPARTMENTS_USED: [creator_identity_matrix, offer_architecture, channel_architecture]
COMPARTMENTS_WRITTEN: [audience_intelligence_system]
FRAMEWORKS_USED: [4-layer-pain, 4-layer-desire, limiting-belief-triad, awareness-spectrum-on-youtube, market-sophistication-stages, voice-of-viewer-extraction, 3am-test]
CONFIDENCE: HIGH | MEDIUM | LOW (% of sections at HIGH)
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 4-layer-pain] — surface → real → private → secret
- [framework: 4-layer-desire] — functional → emotional → identity → legacy
- [framework: limiting-belief-triad] — Worthless / Helpless / Hopeless
- [framework: awareness-spectrum-on-youtube] — 5-level distribution
- [framework: market-sophistication-stages] — Naive / Aware / Skeptical / Exhausted
- [framework: voice-of-viewer-extraction] — sourced verbatim mining

## Compartments Read
- `{{creator_identity_matrix.basic_info}}`, `{{creator_identity_matrix.unique_positioning}}`
- `{{offer_architecture.back_end_offers}}` (if populated)
- `{{channel_architecture.niche_definition}}` (if populated)

## Compartments Written
- `{{audience_intelligence_system}}` (full compartment, target ≥70% completeness)

## Verification Gates
- Formal: Output Format compliance, banned-vocabulary scan, anonymization scan, ≥20 verbatim VOC quotes, ≥10 objections in library, ≥50% VOC verbatim/paraphrase ratio
- Semantic: 3am Test pass on psychographics, limiting-belief diagnosis backed by ≥3 behavioral evidence pieces, awareness-level assignment backed by behavioral evidence (not just demographic inference), hook-readiness test
- Info-theoretic: specificity density ≥3 per 100 words, no creator-projection (audience ≠ creator-at-earlier-stage), compression test on summary section

## Related Skills
- Upstream: `/build-niche`, `/extract-creator-voice`
- Downstream: `/design-offer`, `/build-channel-architecture`, every script-writing skill, every distribution skill
- Alternative: none — this skill is the gateway to most production work

## Failure Modes
- **Generic psychographics** — sounds like every audience profile ever written. Detect: 3am Test fails. Revise: dig into specific shock-events, in-group phrases, secret beliefs.
- **VOC paraphrase-heavy** — < 50% verbatim. Detect: ratio check. Revise: source more real quotes from comments/DMs/calls.
- **Creator projection** — audience reads like the creator's own past self. Detect: too much demographic alignment with creator. Revise: anchor in real third-party signal.
- **Limiting belief assigned without evidence** — diagnosis is named but no behavioral backing. Detect: < 3 evidence pieces. Revise: surface 3+ specific behaviors that confirm the diagnosis.
- **Awareness level guessed by demographic** — assigned by job title, not behavior. Detect: behavioral evidence missing. Revise: cite specific search terms, comment themes, click patterns.
- **Hook-readiness fail** — finished doc doesn't generate 10 hooks immediately. Detect: try generating; if hooks come slow, doc is too abstract. Revise: deepen specifics.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
This skill draws from the awareness-spectrum theorist tradition (5-level distribution + behavioral evidence), the limiting-belief-triad model (Worthless/Helpless/Hopeless → Status/Capability/Safety), the voice-of-customer extraction methodology from the long-form-VSL specialist tradition, and the 4-layer pain/desire architecture from the offer-architect lineage.
