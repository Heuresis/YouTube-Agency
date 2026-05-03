---
name: build-niche
command: /build-niche
description: Define the channel's primary niche, sub-niche, adjacent reach niches, and out-of-scope guard.
tier: sonnet
agent_owner: foundations-head
agent_executor: niche-architect
required_compartments: {}
mode_applicability: n/a
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.foundations.niche.build
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Build Niche

## Purpose
Produce a niche definition document that locks the channel's primary niche, sub-niche, adjacent niches the channel will pull from for reach-mode videos, and the explicit out-of-scope topic list. This is the seeder skill — the channel's entire downstream architecture (audience, offer, channel architecture, content engine) is calibrated against this artifact. A weak niche definition produces compounding waste: misfit audience, misfit offer, misfit content. A sharp niche definition produces compounding clarity.

## Decision Logic
The niche question is not "what do I want to talk about." It is the intersection of three vectors: (1) what the creator can talk about with depth and longevity (5+ years of authority without burnout), (2) what an audience with buying-power looks for, (3) what aligns with the back-end offer's transformation. A niche that satisfies only one or two vectors produces a channel that runs out of fuel, runs out of audience, or runs out of revenue path. The niche must also pass the **6 Differentiation Paths test** — the channel must own one of: a unique mechanism, a unique enemy, a unique audience-segment, a unique format, a unique credibility source, or a unique philosophy. Without a differentiation path, the channel competes on volume — which is a losing game against incumbents.

The dual-mode strategy reframes the niche question. The primary niche is the **authority-mode anchor** — the topic that converts to the back-end offer. The adjacent niches are the **reach-mode pool** — the topics the channel pulls from to grow audience beyond the buying core. The out-of-scope list is the **integrity guard** — the topics the channel refuses to touch even when they would perform, because they break the parasocial-trust contract or misqualify viewers for the offer.

## Tacit Principles
1. **The niche is downstream of the offer, not upstream.** If the creator already has a paying offer, the niche is whatever audience converts to that offer. Trying to design the niche first and the offer second produces a channel that grows but doesn't monetize.
2. **Adjacent niches must share the limiting belief, not the topic.** A finance creator can pull reach-mode videos from career-change content because the limiting belief overlaps (hopelessness about money). Adjacent doesn't mean "thematically nearby" — it means "viewer overlap on the dominant belief."
3. **The narrower the niche, the broader the channel can reach.** Counterintuitive but consistent: channels with razor-sharp authority niches earn permission to do wider reach-mode content because the audience trusts the operator's voice. Wide niches with vague authority can never go broad — they have no anchor.
4. **Saturation is the wrong question. Differentiation is the right question.** "Is the niche saturated" is amateur framing. The right framing: "Which of the 6 Differentiation Paths can I credibly own in this niche?" If the answer is none, find a different niche. If the answer is one or more, the niche is open regardless of competitor count.
5. **Out-of-scope is a feature, not a limit.** Naming the 5–10 topics the channel will refuse to make (even profitable ones) compounds trust over time. The audience learns the channel has a spine.
6. **Sub-niche specificity matters more than primary niche.** "Personal finance" is not a niche. "Personal finance for self-employed creatives in their 30s who hate spreadsheets" is a niche. The sub-niche is where the audience self-identifies; the primary niche is the discoverability surface.
7. **Avoid niches where the audience can't transact.** If the natural audience is broke (students, early-career, hobbyists) and the offer is high-ticket, the niche is broken regardless of how well it performs on viewership. Niche viability includes economic viability.
8. **Run the 5-year test.** Can the creator make 250+ videos in this niche without becoming the person they don't want to become? If no, it's not the niche — it's the topic of a series.

## Process

### Step 0 — Gate check
This is a seeder skill. No compartment thresholds required. Proceed directly.

### Step 1 — Load context
Read whatever creator inputs are available:
- Existing creator background (years in domain, prior channels, prior offers)
- Existing audience size if any (subscribers, email list, social following)
- Existing offer if any (price point, transformation, current customers)
- Existing competitor archetypes (anonymized — never name real channels)

If all inputs are empty, run interview-mode against the niche-architect's question set (see `prompts/interview-prompt.md`).

### Step 2 — Map the three vectors
For each candidate niche, score on three vectors (0–10 each):
- **Creator depth**: can the creator author 250+ videos here without burnout? (longevity test)
- **Audience economics**: does the audience have buying power for the offer's price tier?
- **Offer alignment**: does the niche audience overlap with the back-end offer's avatar?

Total 0–30. Below 20 = reject. 20–24 = workable but flag risks. 25–30 = viable.

### Step 3 — Run the 6 Differentiation Paths test
For the leading candidate niche, identify which of the 6 paths the creator can credibly own:
1. Unique mechanism
2. Unique enemy / contrarian frame
3. Unique audience segment
4. Unique format
5. Unique credibility source (lived experience, credentialed expertise, insider access)
6. Unique philosophy / worldview

Reject any niche where zero paths are credibly ownable. Lock the 1–2 strongest paths as the channel's differentiation thesis.

### Step 4 — Define adjacent niches
Identify 3–5 adjacent niches the channel will pull from for reach-mode content. The test for each: does the audience share the dominant limiting belief with the primary niche audience? If yes, viable. If no, reject — pulling reach from non-overlapping niches grows audience without growing buyers.

### Step 5 — Define out-of-scope
List 5–10 topics the channel will refuse to cover even when they would perform. These break either:
- The parasocial-trust contract (misalignment with creator's stated values)
- The audience qualification path (would attract viewers who can never become buyers)
- The platform-policy or regulatory line (anything that risks demonetization or legal exposure)

### Step 6 — Verify
Run the 5-year test on the locked primary niche + sub-niche. Check the audience economics against the offer's price point. Confirm the differentiation thesis is defensible against incumbent competitors (by archetype, not by name).

## Output Format

```markdown
# Niche Definition — [Channel Handle]

**Date:** YYYY-MM-DD
**Version:** 1.0
**Confidence:** HIGH | MEDIUM | LOW

## 1. Primary Niche
[2-4 word descriptor]

## 2. Sub-Niche
[1-sentence specifier including audience demographic + psychographic + outcome]

## 3. The 3-Vector Score
- Creator depth: N/10 — [reasoning]
- Audience economics: N/10 — [reasoning]
- Offer alignment: N/10 — [reasoning]
- **Total: N/30** — viability verdict

## 4. Differentiation Thesis
- Primary path: [one of the 6] — [why this creator can own it]
- Secondary path: [one of the 6] — [why]
- Anti-positioning: [what the channel explicitly is NOT]

## 5. Adjacent Niches (Reach-Mode Pool)
| Adjacent Niche | Shared Limiting Belief | Reach-Mode Use Case |
|---|---|---|
| ... | ... | ... |

## 6. Out-of-Scope List
1. [topic] — [why refused]
2. ...

## 7. The 5-Year Test
- Can creator make 250+ videos here without burnout? [YES / NO / DEPENDS]
- Reasoning:

## 8. Compartment Write-Backs
Updates to `channel_architecture.niche_definition`:
- primary_niche: ...
- sub_niches_covered: [...]
- adjacent_niches_for_reach: [...]
- out_of_scope_topics: [...]

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.foundations.niche.build, MARKDOWN, 0.7)
COMPARTMENTS_USED: [creator_identity_matrix.basic_info, offer_architecture.back_end_offers]
COMPARTMENTS_WRITTEN: [channel_architecture.niche_definition]
FRAMEWORKS_USED: [6-differentiation-paths, 3-vector-niche-test, 5-year-longevity-test, dual-mode-content-strategy]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 6-differentiation-paths] — to lock the channel's defensible position
- [framework: dual-mode-content-strategy] — to define authority anchor + reach-mode pool
- [framework: limiting-belief-triad] — to test adjacent-niche viability
- [framework: market-sophistication-stages] — to calibrate niche viability against market maturity

## Compartments Read
- `{{creator_identity_matrix.basic_info}}` — to understand what the creator can credibly anchor
- `{{offer_architecture.back_end_offers}}` — to test offer-niche alignment (if offer exists)

## Compartments Written
- `{{channel_architecture.niche_definition.primary_niche}}`
- `{{channel_architecture.niche_definition.sub_niches_covered}}`
- `{{channel_architecture.niche_definition.adjacent_niches_for_reach}}`
- `{{channel_architecture.niche_definition.out_of_scope_topics}}`

## Verification Gates
- Formal: Output Format compliance, banned-vocabulary scan, anonymization scan (no real competitor names)
- Semantic: Does the differentiation thesis hold against archetypal competitor pressure? Does the sub-niche pass the specificity test?
- Info-theoretic: Is the niche descriptor compressed (one sentence, no padding)? Does the out-of-scope list have specificity density ≥ 3 per item?

## Related Skills
- Upstream: none (seeder skill)
- Downstream: `/build-audience`, `/design-offer`, `/build-channel-architecture`, `/extract-creator-voice`
- Alternative: none

## Failure Modes
- **Too broad** — primary niche is a category, not a positioning ("personal development," "business"). Detect: zero of 6 differentiation paths defensible. Revise: narrow until at least one path is credibly ownable.
- **Audience can't transact** — niche viable on viewership but audience can't buy at offer price. Detect: 3-vector score has audience economics ≤ 4. Revise: shift sub-niche to a higher-economic-power audience or reframe the offer.
- **Adjacent niches share topic but not belief** — reach-mode pool grows audience but not buyers. Detect: limiting-belief overlap test fails. Revise: replace adjacent niche with a true belief-overlap niche.
- **Out-of-scope too short or generic** — only obvious bans listed. Detect: list under 5 items or items are platform-policy obvious. Revise: surface the harder calls (the topics that would perform but break trust contract).

## Examples
- See `examples/example-01.md`

## Lineage
This skill draws from the dual-mode-content-strategy theorist tradition (authority anchor + reach pool), the 6-differentiation-paths sophistication-pillars practitioner, and the back-end-offer-first niche selection logic from the long-form-VSL specialist tradition.
