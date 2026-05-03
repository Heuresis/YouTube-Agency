---
name: write-reach-script
command: /write-reach-script
description: Write a voice-faithful reach-mode script (4-8 min) — broad-appeal, contrast format, retention-heavy, channel-architecture routing.
tier: opus
agent_owner: content-head
agent_executor: script-writer
required_compartments:
  creator_identity_matrix: 60
  audience_intelligence_system: 50
  hook_retention_os: 70
  channel_architecture: 60
mode_applicability: reach
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.production.script.reach
  format: MARKDOWN
  weight: 0.8
banned_when:
  - hook_retention_os:70
  - channel_architecture:60
verification_layers: [formal, semantic, info-theoretic, retention-floor, title-thumbnail-promise]
---

# Write Reach Script

## Purpose
Write a voice-faithful reach-mode script — typically 4-8 min, 700-1500 words. Reach-mode = broad-appeal, contrast format (1-vs-N, before-vs-after, then-vs-now, A-vs-B), curiosity-driven, retention-heavy, mass-appeal hooks, character-driven storytelling. The reach video stays clean (no in-script offer pitch); the channel architecture handles cross-niche routing.

## Decision Logic
Reach-mode pulls non-target viewers. The script's job: high retention + mass-appeal narrative + clean exit to channel architecture. The viewer who arrives via reach is routed by the end-screen + pinned VSL + community tab to the authority pillars and the offer — never by injecting offer copy into the reach video.

The contrast formats are reach's structural signature:
- **1-vs-N**: 1 [thing] succeeded while N tried — what was different?
- **Before-vs-after**: started X, became Y — what changed structurally?
- **Then-vs-now**: at time A, now at time B — what shifted?
- **A-vs-B**: option A and option B — which wins and why?

These formats earn the reach because they're cognitively shaped for binge consumption.

The reach hook leans curiosity-gap + statistic-shock + contrarian-frame. The narrative arc is character-driven (someone vs. someone, this vs. that). The lesson is implicit, not explicit.

The CTA is the end-screen + channel architecture handoff — never a hard pitch. The reach video's spine: clean stay-clean exit.

## Tacit Principles
1. **Stay clean.** No offer pitch inside reach scripts. Channel architecture does the conversion.
2. **Contrast formats > talking-head explanations.** Reach succeeds on structure, not delivery.
3. **Curiosity-gap hooks > authority hooks.** Reach viewers don't know the creator yet; "I've seen 80 businesses" doesn't land. "1 founder escaped, 10 tried" lands.
4. **Character > concept.** Anonymized character drives the story. Concept supports.
5. **Voice still matters.** Reach is voice-faithful too — the creator's tone reaches further than generic narration.
6. **End-screen hooks the next video.** Reach binge mechanic depends on the next video being a step deeper into the channel's authority surface.
7. **The implicit lesson lands at the end.** Don't lecture; let the contrast structure deliver the lesson.
8. **Reach-mode AVD target is higher than authority** (75-85%) because the script is shorter + more retention-engineered.
9. **Banned vocab strictness applies.** Even moreso than authority — reach pulls Skeptical-stage viewers from adjacent niches who reject slop on sight.

## Process

### Step 0 — Gate check
identity ≥ 60, audience ≥ 50, hook_retention_os ≥ 70+10 = 80 (reach overlay), channel_architecture ≥ 60+10 = 70.

### Step 1 — Load context
Research brief, hook, loop architecture, retention engineering, channel architecture.

### Step 2 — Pick contrast format
1-vs-N / Before-vs-after / Then-vs-now / A-vs-B based on topic shape.

### Step 3 — Write hook (curiosity-gap heavy)
Different formula stack than authority — Curiosity-Gap + Statistic + Contrarian-Frame.

### Step 4 — Write contrast structure
- Opening contrast set
- Beats developing the contrast
- Twist or reveal
- Implicit lesson

### Step 5 — Write loop closes + callbacks
1-2 loops typical (reach is shorter).

### Step 6 — Clean close
- Synthesis (implicit)
- End-screen handoff (next video — typically into authority pillar or another reach video)
- No offer pitch

### Step 7 — Voice pass
Same as authority but with reach-specific calibration (faster pace, more visual cues, tighter sentences).

### Step 8 — Production cue pass
[VISUAL] [CUT] [SUPER] [B-ROLL] [MUSIC] embedded.

### Step 9 — Verify
Banned vocab, anonymization, no-fabrication, Truth Gate, INV-9, INV-10.

## Output Format

```markdown
# Script — [Title]

**Mode:** reach
**Contrast format:** 1-vs-N | Before-vs-after | Then-vs-now | A-vs-B
**Awareness:** [level — usually Problem-aware or below]
**Length target:** N min
**Word count target:** N words
**WPM baseline:** N
**Title hypothesis:** [for INV-10 check]
**Date:** YYYY-MM-DD

## Hook (0:00 - 0:20)
[Reptilian — Curiosity-Gap + Statistic + Contrarian]
[Limbic — character / contrast set introduction]
[Neocortex — bound-promise of payoff]

## Contrast Setup
[The two sides of the contrast established]

## Beats (developing contrast)
[3-5 beats]

## Twist / Reveal
[the surprising element]

## Close
[Implicit lesson lands. End-screen handoff.]

[END-SCREEN: next video link — cleanly into channel architecture]

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.production.script.reach, MARKDOWN, 0.8)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, hook_retention_os, channel_architecture, content_engine]
FRAMEWORKS_USED: [contrast-format-theory, curiosity-gap-hook, character-driven-storytelling, dual-mode-content-strategy]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
RETENTION_FLOOR: PASS | FAIL
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
---
```

## Frameworks Applied
- [framework: contrast-format-theory]
- [framework: curiosity-gap-hook]
- [framework: character-driven-storytelling]
- [framework: dual-mode-content-strategy]

## Compartments Read
- Compartments 1, 2, 4, 6

## Verification Gates
- Formal: contrast format declared, no offer copy inside script, banned-vocab scan, anonymization
- Semantic: implicit lesson lands, character-driven structure, voice fidelity, mode fidelity
- Info-theoretic: SNR ≥ 0.7, retention-mechanism density appropriate for length
- Retention-floor (INV-9): predicted AVD ≥ 75% (reach floor higher than authority)
- Title-thumbnail-promise (INV-10): first 20s delivers what title promises

## Related Skills
- Upstream: `/research-brief`, `/write-hook`, `/architect-loops`, `/retention-engineer`
- Downstream: `/editor-brief`, `/title-thumbnail-pair`, `/title-options`, `/description-builder`, `/publish-checklist`, `/repurposing-cascade`
- Alternative: `/write-authority-script` for authority mode

## Failure Modes
- **Offer pitch inside script** — INV violation. Remove. Route via channel architecture.
- **Lecture format instead of contrast** — fails reach-mode test. Restructure to 1-vs-N or before-vs-after.
- **Authority hook on reach video** — "I've seen 80 businesses" doesn't land for cold viewers. Replace with curiosity-gap + character.
- **Generic narration voice** — reads AI. Voice-pass with creator phrases.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the contrast-format-theory tradition (1-vs-N structural pattern, before-vs-after, then-vs-now, A-vs-B), the character-driven storytelling craft, and the dual-mode-content-strategy theorist (reach-mode stays clean; channel architecture handles conversion).
