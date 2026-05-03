---
name: research-brief
command: /research-brief
description: Produce a per-video research brief — competitive scan, viewer-language pull, fact-checking, source list.
tier: sonnet
agent_owner: content-head
agent_executor: content-head
required_compartments:
  audience_intelligence_system: 50
  content_engine: 50
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.content.research.brief
  format: MARKDOWN
  weight: 0.5
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Research Brief

## Purpose
Produce the per-video research brief that prepares a script-writer with the audience-language, the competitive landscape, the fact-checked claims, and the source citations needed to write a voice-faithful, Truth-Gate-compliant draft. The brief is the 80% of pre-work behind the 20% of script craft.

## Decision Logic
Most scripts fail not because of script-writing skill, but because of insufficient pre-work. The 20/80 inversion: 20% script craft + 80% research / competitive analysis / VOC mining. The brief is the load-bearing 80%.

The brief always includes: (a) audience-language pull from VOC for this specific topic, (b) competitive scan (3-5 anonymized competitor archetypes covering this topic — what works, what's missing, where the angle differentiates), (c) fact-checked claim list with sources (everything that needs to survive the 30-second screenshot test), (d) the structural beats hypothesis (hook + sequence + close), (e) the awareness-level + mode declaration.

## Tacit Principles
1. **VOC first, structure second.** Pull verbatim audience phrases on this topic before designing the script structure. The phrases shape the hook + headlines + key beats.
2. **Competitive scan is for differentiation, not imitation.** Read what competitors do, then ask "what's the gap?" The brief surfaces the gap.
3. **Fact-check before script.** Every numeric claim, every "X% of operators…" sourced before drafting. No fabrication.
4. **One angle per brief.** Don't try to cover the topic; cover one angle on it. Specific > comprehensive.
5. **The brief drives the hook.** If the brief makes the hook obvious, it's a good brief. If the hook still requires invention, the brief is too thin.
6. **Write briefs cheap, scripts deliberately.** A 30-min brief saves 3 hours of script revision.

## Process

### Step 0 — Gate check
Verify audience ≥ 50, content_engine ≥ 50.

### Step 1 — Load context
- Idea row from `/idea-farm` backlog
- `{{audience_intelligence_system}}` (especially VOC + objections)
- `{{channel_architecture}}` (8-belief, mode, awareness)
- Competitive landscape (3-5 archetypes — anonymized)
- Source verification material

### Step 2 — VOC pull on topic
Pull 10+ verbatim audience phrases specifically about this topic. From comments, calls, DMs, surveys.

### Step 3 — Competitive scan
- 3-5 competitor archetypes who cover this topic
- What angle each takes
- What's working / what's missing
- Where the channel differentiates

### Step 4 — Claim fact-check
Every numeric / specific claim sourced. Sources cited.

### Step 5 — Structural beats hypothesis
- Hook hypothesis (formula + first 30s mechanisms)
- BUT-THEREFORE narrative arc
- 3-5 sectional beats
- Loop architecture
- Close + CTA

### Step 6 — Mode + awareness declaration
Declare authority/reach/hybrid + target awareness level. Lock script-writer's calibration.

### Step 7 — Verify
Banned-vocab check, anonymization, fact-check completeness.

## Output Format

```markdown
# Research Brief — [Title hypothesis]

**Mode:** authority | reach | hybrid
**Target awareness level:** [Problem-aware / Solution-aware / Product-aware / etc.]
**Target belief:** [from 8-belief path]
**Length target:** N min
**Date:** YYYY-MM-DD

## 1. VOC Pull (≥10 verbatim phrases on this topic)
- "[verbatim]" — [source]
- ...

## 2. Competitive Scan (3-5 archetypes)
| Archetype | Angle they take | Working | Missing |
|---|---|---|---|
| ... |

**Differentiation:** [the angle this channel uses]

## 3. Fact-Check (claims + sources)
| Claim | Source | Confidence |
|---|---|---|

## 4. Structural Beats Hypothesis
- Hook hypothesis (formula + 3+ first-30s mechanisms):
- BUT-THEREFORE arc: [this happened, BUT, THEREFORE]
- Beats:
  1. ...
  2. ...
- Loop architecture: [N loops, types, placements]
- Close + CTA:

## 5. In-Group Phrases to Use
[5-10 specific phrases from compartment + topic VOC]

## 6. Phrases to Avoid (for this topic specifically)
[topic-specific anti-vocabulary on top of canonical banned + creator-specific]

## 7. Recommended Hook Formula
[PAST / AID / Contrast / Statistic / Curiosity-Gap / Bound-Promise / Contrarian-Frame / Social-Proof-Stack — with reasoning]

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.content.research.brief, MARKDOWN, 0.5)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, content_engine]
FRAMEWORKS_USED: [20-80-inversion, voc-mining-per-topic, competitive-archetype-scan, but-therefore-narrative-engine]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: 20-80-inversion] — research drives script
- [framework: voc-mining-per-topic] — verbatim language for hook + headlines
- [framework: competitive-archetype-scan] — anonymized differentiation
- [framework: but-therefore-narrative-engine] — Pixar-style narrative primitive

## Compartments Read
- `{{audience_intelligence_system}}`, `{{channel_architecture}}`, `{{content_engine}}`

## Verification Gates
- Formal: ≥ 10 VOC phrases, ≥ 3 competitor archetypes, all claims sourced
- Semantic: differentiation angle is specific (not "we're better"), Truth Gate per claim
- Info-theoretic: brief produces obvious hook (test: hook generates from brief in < 5 min)

## Related Skills
- Upstream: `/idea-farm`, `/build-audience`, `/build-channel-architecture`
- Downstream: `/write-authority-script`, `/write-reach-script`, `/write-shorts-script`, `/write-hook`
- Alternative: none

## Failure Modes
- **No VOC pull on topic** — generic. Detect: < 10 verbatim phrases. Revise: dig deeper.
- **No competitive scan** — angle not differentiated. Revise: name 3+ archetypes + missing angle.
- **Unsourced claims** — Truth Gate risk. Revise: every numeric claim sourced or removed.
- **Multi-angle scope creep** — brief tries to cover too much. Revise: one angle per brief.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the 20/80 inversion principle (research-as-leverage), the VOC-mining methodology, and the competitive-archetype-scan tradition (differentiate from archetypes, not names).
