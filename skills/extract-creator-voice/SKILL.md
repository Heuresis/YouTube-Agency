---
name: extract-creator-voice
command: /extract-creator-voice
description: Extract creator brand-voice architecture, on-camera persona, and parasocial-trust contract into Compartment 1.
tier: opus
agent_owner: foundations-head
agent_executor: creator-voice-encoder
required_compartments:
  creator_identity_matrix: 30
mode_applicability: n/a
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.foundations.voice.extract
  format: MARKDOWN
  weight: 0.8
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Extract Creator Voice

## Purpose
Encode the creator's brand voice architecture, on-camera persona, parasocial-trust contract, and unique positioning into Compartment 1 (Creator Identity Matrix). This compartment is what every script-writing skill, every hook-writing skill, every title-strategist invocation, and every sales-copy skill reads to produce voice-faithful output. Voice fidelity is the difference between "AI-generated content" and "creator-written content" in the Blind Output Test.

## Decision Logic
Voice is not "tone." Voice is the encoded combination of (a) communication style, (b) language patterns / signature cadence, (c) phrases-to-use / phrases-to-avoid, (d) persuasion style, (e) authority positioning, (f) on-camera persona, (g) parasocial-trust contract. The compartment captures all seven layers.

The output is a usable spec — readable by every skill, machine-checkable against output drafts. Voice-fidelity verification (Layer 2 of Triple-Layer Verification) reads from this compartment. Without it, every output is judged against a generic LLM voice.

The parasocial-trust contract is INV-16's source-of-truth. The creator names what they promise the audience long-term + what they explicitly will not do. The OS refuses to generate content that violates this contract.

## Tacit Principles
1. **Voice is captured from existing artifacts, not described in the abstract.** Read the creator's actual writing / videos / DMs / sales calls. Pull verbatim. Don't ask "describe your voice" — ask "send me your last 5 long-form pieces."
2. **Phrases to use are signature cadence, not vocabulary alone.** "I think the answer is X — but the bigger question is Y" is a cadence pattern. "Holistic" is a vocabulary item. Cadence patterns are 10× more load-bearing.
3. **Phrases to avoid are creator-specific calibration on top of the canonical banned list.** Each creator has 10–30 personal anti-phrases (words their voice rejects).
4. **The on-camera persona is a layer over the off-camera person, not identical to it.** The creator-vs-character line must be explicit. The persona is what the audience parasocially relates to; the off-camera person is private.
5. **Parasocial-trust contract is sacred + load-bearing.** Long-term promises (e.g., "I will never run drop-shipping ads") and no-fly zones (e.g., "I won't manufacture personal-emergency content") encode integrity over time. Compounds trust.
6. **Authority positioning shapes hook + script structure.** Category-king → declarative authority opens. Challenger → contrarian opens. Insider → privileged-access opens. Outsider-with-edge → fresh-eye opens.
7. **Language patterns include sentence rhythm.** Short-staccato vs. long-cumulative shapes script wpm pacing + edit cuts + transitions.
8. **Persuasion style determines belief-installation method.** Authority-by-proof → case-study heavy. Story-first → narrative heavy. Mechanism-first → diagram + framework heavy. Contrarian-provocation → pattern-interrupt heavy.
9. **Capture contradictions, not consistency.** Real voices contradict themselves: serious about work + playful about life, blunt about strategy + soft about people. Capturing the contradictions makes the voice human.
10. **Test the encoded voice with a Blind Output Test.** Generate 3 sample outputs from this compartment + creator writes 3. Three evaluators try to tell them apart. PASS = encoding is creator-grade.

## Process

### Step 0 — Gate check
Verify creator_identity_matrix.basic_info ≥ 30%. If creator hasn't even stated niche/name, run interview.

### Step 1 — Load source artifacts
Request from creator:
- Last 5 long-form artifacts (videos, blog posts, newsletter issues, sales call transcripts)
- 20+ DMs / social posts they personally wrote
- 10+ minutes of unscripted speaking (interview, podcast, sales call)
- Existing About-page copy, bio, channel-trailer script
- Any prior brand-voice docs they've made

If sources are thin: run interview-mode to surface voice through guided prompts (see prompts/).

### Step 2 — Extract communication style
- Direct / consultative / storytelling / analytical / contrarian
- Evidence: specific passages from sources

### Step 3 — Tone framework
- Primary tone (one word: blunt, warm, sharp, dry, intense)
- Secondary tone (modifier: warm-under-blunt, playful-under-serious, etc.)
- Evidence

### Step 4 — Personality traits (3–5)
Pull from source artifacts. Each trait: 1 word + 1-sentence supporting passage.

### Step 5 — Language patterns (signature cadences)
Identify 5–10 sentence-level patterns. Each:
- Pattern (e.g., "X. But here's the thing — Y.")
- Supporting passages

### Step 6 — Phrases to use (verbatim)
Pull 20–50 specific phrases the creator uses repeatedly. Verbatim from source.

### Step 7 — Phrases to avoid
Pull 10–30 specific words/phrases the creator's voice rejects. Combination of:
- Creator-stated rejections (interview)
- Inferred from sources (words conspicuously absent)
- Banned-vocabulary canonical list (default applies)

### Step 8 — Persuasion style
- Authority-by-proof / story-first / mechanism-first / contrarian-provocation
- Evidence per

### Step 9 — Authority positioning
- Category-king / challenger / insider / outsider-with-edge
- Evidence

### Step 10 — On-camera persona
- Delivery style (high-energy / measured / contrarian / warm-instructional / confessional)
- Posture default (standing / sitting / hybrid)
- Framing default (medium-close / waist-up / talking-head)
- Pace baseline (wpm)
- Pause rhythm (rare / measured / frequent)
- Eye-line default (camera-direct / off-camera-occasionally)
- Energy arc (flat / rising / wave / front-loaded)
- Signature visual elements (consistent across videos)

### Step 11 — Parasocial-trust contract
- What creator promises (long-term commitments)
- What creator won't do (no-fly zones)
- Creator-vs-character line (how persona relates to off-camera person)

### Step 12 — Unique positioning
- Unique mechanism (named, ownable)
- Category positioning
- Competitive differentiation
- Core philosophy (one-sentence worldview)
- Contrarian beliefs (5+)

### Step 13 — Archetype
- Primary archetype (long-form-VSL specialist / contrarian-narrator / analytical-explainer / story-driven creator / contrast-format viral specialist / hybrid)
- Secondary archetype

### Step 14 — Verify
Banned-vocab scan, anonymization, no-fabrication. Run Blind Output Test (sample voice-faithful output vs. creator-written; 3 evaluators).

## Output Format

```markdown
# Creator Voice Document — [Creator/Channel]

**Date:** YYYY-MM-DD
**Confidence:** HIGH | MEDIUM | LOW
**Source Artifacts:** [list]

## 1. Communication Style
- Style: [direct / consultative / storytelling / analytical / contrarian]
- Evidence: [2-3 verbatim passages]

## 2. Tone Framework
- Primary: [one word]
- Secondary: [modifier]
- Evidence:

## 3. Personality Traits
1. [trait] — [supporting passage]
... [3-5 total]

## 4. Language Patterns (Signature Cadences)
1. Pattern: "[template]"
   Examples: [3+ verbatim instances]
... [5-10 total]

## 5. Phrases to Use (Verbatim)
[20-50 phrases]
- "[phrase]" — [source]
- ...

## 6. Phrases to Avoid
[10-30 phrases]
- [word/phrase] — [reason: creator-stated / inferred / canonical-banned]

## 7. Persuasion Style
- Style: [authority-by-proof / story-first / mechanism-first / contrarian-provocation]
- Evidence:

## 8. Authority Positioning
- Position: [category-king / challenger / insider / outsider-with-edge]
- Evidence:

## 9. On-Camera Persona
- Delivery style:
- Posture: standing / sitting / hybrid
- Framing: medium-close / waist-up / talking-head
- Pace: N wpm
- Pause rhythm: rare / measured / frequent
- Eye-line: camera-direct / off-camera-occasionally
- Energy arc: flat / rising / wave / front-loaded
- Signature visual elements: [list]

## 10. Parasocial-Trust Contract
### What I promise (long-term)
- ...
### What I won't do (no-fly zones)
- ...
### Creator-vs-character line
[how on-camera persona relates to off-camera person]

## 11. Unique Positioning
- Unique mechanism: [name]
- Category positioning:
- Competitive differentiation:
- Core philosophy (1 sentence):
- Contrarian beliefs (5+): [list]

## 12. Archetype
- Primary: [one of 6]
- Secondary: [one of 6]

## 13. Compartment Write-Backs
Full update to `creator_identity_matrix.brand_voice_architecture`, `on_camera_persona`, `parasocial_trust_contract`, `unique_positioning`, `archetype`.

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.foundations.voice.extract, MARKDOWN, 0.8)
COMPARTMENTS_USED: [creator_identity_matrix.basic_info]
COMPARTMENTS_WRITTEN: [creator_identity_matrix (full)]
FRAMEWORKS_USED: [voice-extraction-from-artifacts, parasocial-trust-contract, archetype-mapping, sentence-cadence-analysis]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: voice-extraction-from-artifacts] — pull verbatim, don't ask abstract
- [framework: parasocial-trust-contract] — INV-16 source-of-truth
- [framework: archetype-mapping] — 6 operator archetypes
- [framework: sentence-cadence-analysis] — pattern + rhythm + structure

## Compartments Read
- `{{creator_identity_matrix.basic_info}}` (initial)
- Source artifacts (creator-supplied)

## Compartments Written
- `{{creator_identity_matrix.brand_voice_architecture}}`
- `{{creator_identity_matrix.on_camera_persona}}`
- `{{creator_identity_matrix.parasocial_trust_contract}}`
- `{{creator_identity_matrix.unique_positioning}}`
- `{{creator_identity_matrix.archetype}}`

## Verification Gates
- Formal: ≥ 5 source artifacts referenced, ≥ 20 verbatim phrases, ≥ 5 language patterns with examples, parasocial contract populated
- Semantic: Blind Output Test pass on voice-faithful sample (or scheduled if not yet runnable)
- Info-theoretic: voice patterns are specific (not generic), phrases are verbatim (not paraphrased)

## Related Skills
- Upstream: `/build-niche` (often runs in parallel)
- Downstream: every script-writing skill, every hook-writing skill, `/title-options`, `/title-thumbnail-pair`, `/write-pinned-vsl`, `/sales-call-script`
- Alternative: none

## Failure Modes
- **Voice described in abstract** — "professional but warm" without evidence. Detect: no verbatim passages cited. Revise: pull specific passages from source artifacts.
- **Phrases-to-use are creator-stated, not extracted** — creator says "I use X" but X doesn't appear in their actual artifacts. Revise: cross-check phrases against ≥ 5 source artifacts.
- **Parasocial contract too generic** — "I'll be authentic." Revise: name specific commitments + specific no-fly zones.
- **Archetype is "hybrid" without specificity** — defaults to hybrid because no single archetype fits. Revise: name primary + secondary explicitly.

## Examples
- See `examples/example-01.md`

## Lineage
This skill draws from the brand-voice-architecture extraction tradition (verbatim from artifacts), the parasocial-trust-contract theory (INV-16's source), and the archetype-mapping methodology (6 operator archetypes).
