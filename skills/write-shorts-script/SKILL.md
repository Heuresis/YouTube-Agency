---
name: write-shorts-script
command: /write-shorts-script
description: Write a 30-60s Shorts script — 2 Reptilian mechanisms in first 3s + 1 Limbic in 3-15s, single beat.
tier: sonnet
agent_owner: content-head
agent_executor: script-writer
required_compartments:
  creator_identity_matrix: 50
  audience_intelligence_system: 50
  hook_retention_os: 60
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.production.script.shorts
  format: MARKDOWN
  weight: 0.4
banned_when: []
verification_layers: [formal, semantic, info-theoretic, retention-floor]
---

# Write Shorts Script

## Purpose
Write a 30-60s Short — 75-150 words — for the channel's Shorts feed. Shorts run alongside long-form (never the only format) and bridge Shorts viewers into long-form via the Shorts-to-long-form bridge mechanic.

## Decision Logic
Shorts have a different retention math: 75-85% AVD target vs 50% on long-form. The hook must engage in the first 3 seconds (not 30). 2 Reptilian mechanisms minimum + 1 Limbic per INV-11 Shorts.

A Short delivers one beat. Not three. Not five. One. The beat is a single insight, contrast, or claim that lands cleanly in 30-60s.

The bridge to long-form is a pinned comment + description link. Don't talk about the long-form in the Short itself; the platform punishes "watch my full video" CTAs in Shorts.

## Tacit Principles
1. **3 seconds for Reptilian.** First 3s = hook. Not "let me set up." Hook.
2. **One beat.** Don't try to teach a concept. Hit one insight.
3. **Tight wpm.** Shorts pace 160-180 wpm to fit content.
4. **Visual-first.** Shorts viewers consume on mute. Strong visual + super text.
5. **No offer pitch in Short.** Channel architecture handles routing.
6. **Pinned comment is the bridge.** Long-form link in pinned comment.
7. **Banned vocab applies, more strictly.** Shorts viewers churn fastest on slop.
8. **Loop architecture: 1 mini-loop max.** Open in 0-2s, close in last 3s.

## Process

### Step 0 — Gate check
identity ≥ 50, audience ≥ 50, hook_retention_os ≥ 60.

### Step 1 — Load context
Topic, hook, retention engineering, voice phrases.

### Step 2 — Pick the one beat
Single insight / contrast / claim.

### Step 3 — Write 0-3s (Reptilian)
2 mechanisms (visual cue + spoken hook).

### Step 4 — Write 3-15s (Limbic)
1 mechanism. Story / character / contrast.

### Step 5 — Write 15-end (resolution)
Land the single insight.

### Step 6 — Pinned comment + description bridge
Long-form link.

### Step 7 — Verify
≥ 2 Reptilian mechanisms in first 3s, banned vocab, anonymization.

## Output Format

```markdown
# Shorts Script — [Topic]

**Length:** N seconds (30-60)
**Word count:** N (75-150)
**WPM baseline:** 160-180
**Bridge to long-form:** [video title]

## 0-3s (Reptilian — 2 mechanisms)
[Visual + spoken hook]

## 3-15s (Limbic — 1 mechanism)
[Beat development]

## 15-end (Resolution)
[Land the insight]

## Pinned Comment
"Full breakdown of [topic] in this video: [link]"

## Description
"[1-line description] — full video: [link]"

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.production.script.shorts, MARKDOWN, 0.4)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, hook_retention_os]
FRAMEWORKS_USED: [three-brain-decision-sequence, hook-density-rule-shorts, single-beat-shorts-architecture]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: three-brain-decision-sequence]
- [framework: hook-density-rule-shorts]
- [framework: single-beat-shorts-architecture]

## Compartments Read
- Compartments 1, 2, 6

## Verification Gates
- Formal: ≥ 2 Reptilian mechanisms in first 3s, ≥ 1 Limbic in 3-15s, single beat structure, banned-vocab clean
- Semantic: voice fidelity, no offer pitch in script, bridge mechanism in pinned comment
- Info-theoretic: SNR very high (75-150 words must be tight)
- Retention-floor: predicted Shorts AVD ≥ 75%

## Related Skills
- Upstream: long-form video (Short repurposes from it) or `/idea-farm` for original Shorts
- Downstream: `/repurposing-cascade`
- Alternative: `/repurposing-cascade` for direct repurposing from long-form

## Failure Modes
- **Hook in seconds 4-10 instead of 0-3** — too slow for Shorts. Front-load.
- **Multiple beats** — split into multiple Shorts.
- **Long-form CTA in Short** — platform-punished. Move to pinned comment.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the Shorts-specific retention canon (3-second Reptilian gate, single-beat architecture) and the Shorts-to-long-form bridge mechanic.
