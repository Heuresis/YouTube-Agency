---
name: write-authority-script
command: /write-authority-script
description: Write a voice-faithful authority-mode script (8-15 min) — belief-installation, mechanism demo, offer routing.
tier: opus
agent_owner: content-head
agent_executor: script-writer
required_compartments:
  creator_identity_matrix: 70
  audience_intelligence_system: 70
  offer_architecture: 60
  hook_retention_os: 50
mode_applicability: authority
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.production.script.authority
  format: MARKDOWN
  weight: 0.8
banned_when:
  - creator_identity_matrix:70
  - audience_intelligence_system:70
  - offer_architecture:60
verification_layers: [formal, semantic, info-theoretic, retention-floor, title-thumbnail-promise]
---

# Write Authority Script

## Purpose
Write a voice-faithful authority-mode script (typical 8-15 min, 1500-3000 words). Authority-mode = niched, belief-installation, mechanism-demonstration, conversion-driving. Reads from research brief + hook + loop architecture + retention engineering. Outputs a script with embedded production cues, ready for editor brief.

## Decision Logic
Authority mode is the channel's depth surface. The script is engineered to:
- Install one belief (from offer's 8-belief path)
- Demonstrate the mechanism with specifics (named, ownable, repeatable)
- Route the viewer toward the back-end offer via channel architecture (not a hard pitch inside the script)
- Maintain ≥ 50% AVD via hook + loops + cadence + callbacks
- Pass voice fidelity (Blind Output Test target)

The 20/80 inversion: 80% of script quality comes from upstream pre-work (research brief, hook, loops, retention engineering). The script-writer assembles + voice-overlays + adds production cues.

## Tacit Principles
1. **Voice fidelity > everything else.** Use creator's verbatim phrases (compartment 1) at 50%+ density. Mirror cadence patterns. Avoid `phrases_to_avoid`. The Blind Output Test fails first on voice — even when content is correct.
2. **Embedded production cues, not separate.** [VISUAL: ...] [SUPER: ...] [CUT: ...] [B-ROLL: ...] embedded in the script, not in a sidebar. The script reads as a director's pass.
3. **One belief per script.** Don't try to install 2 beliefs in 13 minutes. Sequence them across videos.
4. **Mechanism demo with specifics.** Generic "delegation matters" reads AI-generated. Specific "the role-design-first sequence is: define output → define decisions → define checkpoints" reads creator-generated.
5. **Soft offer routing only.** No hard pitches inside authority scripts. End-screen + lead magnet + pinned VSL handle conversion. The script's CTA is to one of those, not a direct sales close.
6. **Truth Gate per claim.** Every numeric claim sourced or framed against counted experience. No fabrication.
7. **Show-don't-tell wherever possible.** "Here's what I mean" + concrete example beats "this is important because…"
8. **Watch the wpm.** Authority scripts pace 140-160 wpm. Calculate target word count from length × wpm.
9. **The CTA is the channel-architecture handoff.** "If you want the diagnostic, link is below" → lead magnet → email → pinned VSL.
10. **2 revisions max, then escalate.** Per INV-17.

## Process

### Step 0 — Gate check
identity ≥ 70, audience ≥ 70, offer ≥ 60, hook_retention_os ≥ 50.
Authority overlay (CONTEXT-THRESHOLDS): offer ≥ 60+20 = 80? — wait, +20 above stated minimum: offer ≥ 60+20 = 80. Verify offer ≥ 80, sales_conversion_stack ≥ 30.
If below, REFUSE + run upstream.

### Step 1 — Load context
- Research brief (most load-bearing)
- Hook draft (final variant)
- Loop architecture
- Retention engineering map
- Compartments 1, 2, 3
- Title hypothesis (for title-thumbnail-promise alignment check)

### Step 2 — Set targets
- Length (min)
- Word count (length × wpm baseline)
- Awareness level
- Belief installed
- Mode: authority

### Step 3 — Write hook (use /write-hook output)
Insert chosen variant as section 1.

### Step 4 — Write sectional beats
Per `research-brief.beats`. For each beat:
- Re-hook (1-2 sentences)
- Story / example / mechanism demo
- Lesson / takeaway
- Production cues embedded

### Step 5 — Write loop closes + callbacks
Per `architect-loops.loop_map`. Place at engineered moments.

### Step 6 — Write close + CTA
- Synthesis (recap key beats — leverages callback architecture)
- Single CTA (lead magnet OR pinned VSL link OR application — never all three at once)
- End-screen loop open (link to next video in series)

### Step 7 — Voice pass
Run draft against `phrases_to_use` + `phrases_to_avoid` + cadence patterns. Adjust until voice fidelity passes.

### Step 8 — Production cue pass
Embed [VISUAL] [SUPER] [CUT] [B-ROLL] [MUSIC] cues per retention engineering map.

### Step 9 — Verify
Banned vocab, anonymization, no-fabrication, Truth Gate per claim, INV-9 retention floor (predicted AVD), INV-10 title-thumbnail-promise alignment (script delivers what title promises).

## Output Format

```markdown
# Script — [Title]

**Mode:** authority
**Awareness:** [level]
**Belief installed:** N
**Length target:** N min
**Word count target:** N words
**WPM baseline:** N
**Title hypothesis:** [for INV-10 check]
**Date:** YYYY-MM-DD

## Hook (0:00 - 0:30)

[Reptilian (0-3s)]
[script lines with embedded [VISUAL] / [CUT] / [SUPER] cues]

[Limbic (3-15s)]
...

[Neocortex (15-30s)]
...

[CUT to first beat]

## Section 1: [name] (0:30 - X:XX)

[Re-hook]
...

[Story / mechanism]
...

[Lesson]
...

[CUT / B-ROLL / SUPER cues embedded]

## Section 2: [name] ...
[continues for N sections]

## Synthesis + Close (X:XX - end)

[Callback to opening]
[Recap of key beats]
[Single CTA]
[End-screen loop open — link to next video]

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.production.script.authority, MARKDOWN, 0.8)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, channel_architecture, hook_retention_os, content_engine]
FRAMEWORKS_USED: [but-therefore-narrative-engine, re-hook-story-lesson, the-loop-system, three-brain-decision-sequence, voice-fidelity-pass, 8-belief-installation, dual-mode-content-strategy]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
RETENTION_FLOOR: PASS | FAIL
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
TRUTH_GATE: PASS | FAIL
---
```

## Frameworks Applied
- [framework: but-therefore-narrative-engine]
- [framework: re-hook-story-lesson]
- [framework: the-loop-system]
- [framework: three-brain-decision-sequence]
- [framework: voice-fidelity-pass]
- [framework: 8-belief-installation]
- [framework: dual-mode-content-strategy]

## Compartments Read
- Compartments 1, 2, 3, 4, 6, 5 (in priority order)

## Verification Gates
- Formal: Output Format compliance, banned-vocab scan (canonical + creator-specific), anonymization, no-fabrication
- Semantic: Truth Gate per claim, voice fidelity (`phrases_to_use` density ≥ 50%, `phrases_to_avoid` zero matches), mode fidelity (authority maintained throughout), awareness-level match
- Info-theoretic: SNR ≥ 0.7, specificity density ≥ 3 per 100 words, compression check (could 30% shorter still convey signal? if yes, revise)
- Retention-floor (INV-9): predicted AVD ≥ channel bottom-quartile band — REJECT if below
- Title-thumbnail-promise (INV-10): first 30s delivers what title promises — REJECT if mismatch

## Related Skills
- Upstream: `/research-brief`, `/write-hook`, `/architect-loops`, `/retention-engineer`
- Downstream: `/editor-brief`, `/title-thumbnail-pair`, `/title-options`, `/description-builder`, `/publish-checklist`
- Alternative: `/write-reach-script` for reach-mode

## Failure Modes
- **Voice generic** — reads AI-produced. Detect: phrases_to_use density < 50%. Revise: insert creator cadence + verbatim phrases.
- **Belief not installed** — script teaches the topic but doesn't shift the belief. Revise: re-anchor against the 8-belief path.
- **Hard pitch inside script** — INV violation. Revise to soft channel-architecture routing.
- **Predicted AVD below floor** — INV-9 REJECT. Return to retention-engineering.
- **Title-thumbnail mismatch** — INV-10 REJECT. Re-pair title or re-write first 30s.

## Examples
- See `examples/example-01.md` and `examples/example-02.md`

## Lineage
Draws from the long-form-VSL specialist (8-belief installation), the analytical-explainer archetype (mechanism-first persuasion), the BUT-THEREFORE narrative engine (Pixar primitive), the re-hook → story → lesson per-section pattern, the loop-system architect, and the dual-mode-content-strategy theorist.
