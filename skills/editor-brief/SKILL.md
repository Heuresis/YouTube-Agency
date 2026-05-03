---
name: editor-brief
command: /editor-brief
description: Brief the editor — pacing, cut density, b-roll grammar, music use, supers, color grade, deliverables.
tier: sonnet
agent_owner: production-head
agent_executor: production-head
required_compartments:
  creator_identity_matrix: 60
  production_and_post: 40
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.production.editor.brief
  format: MARKDOWN
  weight: 0.5
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Editor Brief

## Purpose
Brief the video editor on pacing, cut density, b-roll grammar, music use, supers, color grade, and deliverables. The script ships with embedded production cues, but the editor brief consolidates them + adds editor-specific direction (timing tolerances, b-roll source library, music library, super system, color reference) so the edit lands voice-faithful and retention-engineered.

## Decision Logic
The editor is the channel's secondary voice. A great script edited carelessly is a slop video. A merely-good script edited tightly is a top-quartile video. The brief is the editor's contract.

The brief consolidates: production cues from the script + cadence map from `/retention-engineer` + b-roll grammar from compartment 7 + music + super system + color grade + final delivery specs.

## Tacit Principles
1. **Editor is voice-faithful too.** The cut rhythm, music choice, super style — all reflect the creator's voice.
2. **Pacing has tolerances.** "Cut every 45-60s" with ± 10s tolerance — not rigid.
3. **B-roll has grammar.** Specific patterns avoid (e.g., "no stock-people-in-suits b-roll" for an authority operations channel).
4. **Music use is signature.** Underscore-only / hits-only / front-and-back / none — locked at channel level.
5. **Supers reinforce, not replace.** Don't write the script in supers. Use sparingly for emphasis.
6. **Color grade matters.** Channel has a signature look. Don't drift.
7. **Delivery specs are non-negotiable.** Resolution, frame rate, captions, thumbnail file, end-screen card — all listed.
8. **Revision cap: 2.** Editor + creator alignment before second cut. Past 2 = creator/editor pairing review.

## Process

### Step 0 — Gate check
identity ≥ 60, production_and_post ≥ 40.

### Step 1 — Load context
Final script, retention engineering map, channel production system, music + b-roll libraries.

### Step 2 — Pacing brief
Cut density, music shifts, super placement.

### Step 3 — B-roll brief
Per cue from script. Source library. Avoid patterns.

### Step 4 — Music brief
Underscore choice, hit moments, music shifts.

### Step 5 — Super system brief
Font, color, size, placement, density.

### Step 6 — Color grade brief
Channel signature; reference frames.

### Step 7 — Delivery specs
Resolution, frame rate, captions, end-screen card, thumbnail file.

### Step 8 — Revision protocol
Max 2 revisions.

### Step 9 — Verify
Banned-vocab in supers, INV-14 (b-roll license sources documented).

## Output Format

```markdown
# Editor Brief — [Title]

**Mode:** authority | reach | hybrid
**Length:** N min target
**Date:** YYYY-MM-DD

## 1. Pacing
- Cut density: every N s ± Ns tolerance
- Music shifts: at [section transitions]
- Super density: N / minute

## 2. B-Roll
| Cue from script | Source | Pattern type | Notes |
|---|---|---|---|

## 3. Music
- Underscore choice: [name + license]
- Hit moments: [timestamps]
- Music shifts: [timestamps]

## 4. Supers
- Font: [from system]
- Color: [from system]
- Size + placement: [system default]
- Density: [N/minute]
- Specific copy:
  | Time | Super copy |

## 5. Color Grade
- Channel signature: [reference]
- Specific tweaks for this video: [if any]

## 6. Delivery Specs
- Resolution: 1080p / 4K
- Frame rate: 24 / 30 / 60 fps
- Captions: yes / no — burned vs uploaded
- End-screen card: yes — link [next video]
- Thumbnail file: separate deliverable
- Sound mix: -16 LUFS / -23 LUFS / channel default

## 7. Revision Protocol
- Cut 1 due: [date]
- Creator review window: [N days]
- Cut 2 (if needed) due: [date]
- Final delivery: [date]
- Revision cap: 2 (past 2 = creator-editor sync call)

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.production.editor.brief, MARKDOWN, 0.5)
COMPARTMENTS_USED: [creator_identity_matrix, production_and_post, hook_retention_os]
FRAMEWORKS_USED: [editor-brief-format, b-roll-grammar, music-use-systems, super-system, color-grade-system]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
COPYRIGHT_FAIR_USE: PASS | FAIL (b-roll + music sources licensed)
---
```

## Frameworks Applied
- [framework: editor-brief-format]
- [framework: b-roll-grammar]
- [framework: music-use-systems]
- [framework: super-system]
- [framework: color-grade-system]

## Compartments Read
- `{{creator_identity_matrix}}`, `{{production_and_post}}`, `{{hook_retention_os}}`

## Verification Gates
- Formal: pacing + b-roll + music + supers + color + delivery + revision protocol all specified
- Semantic: voice-faithful (editor's choices align with creator brand)
- Info-theoretic: brief is tight, not over-specified
- Copyright/fair-use (INV-14): b-roll + music sources licensed

## Related Skills
- Upstream: `/write-authority-script`, `/write-reach-script`, `/write-shorts-script`, `/retention-engineer`, `/title-thumbnail-pair`
- Downstream: editor delivers cut → `/publish-checklist`
- Alternative: none

## Failure Modes
- **Vague pacing** — "cut frequently" is not a brief. Specify cut density.
- **Unlicensed b-roll** — INV-14 violation. Document license sources.
- **Generic supers copy** — "important point" doesn't reinforce. Specific copy per super.
- **No revision protocol** — open-ended scope. Lock revision cap at 2.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the editor-brief-format tradition (consolidated production direction) and the channel-signature-color-grade canon.
