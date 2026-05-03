# Research-to-Script Handoff

> The contract between research (`/research-brief` output) and scripting (`/write-authority-script` or `/write-reach-script`). Defines what the script-writer receives and what they're expected to produce against it.

---

## What ships from research to script

When a research pass completes, the script-writer receives:

```
research-to-script-bundle/
├── research-brief.md            ← topic synthesis, source claims, contrarian angles, anti-hooks
├── audience-fit.md              ← which awareness level, sophistication stage, beliefs addressed
├── voice-of-viewer-snippets.md  ← 5–15 verbatim phrases pulled from real comments / sales calls / surveys
├── frameworks-recommended.md    ← 2–4 frameworks the script should apply (loop system, hook formula, etc.)
├── specimens-recommended.md     ← 3–8 swipe-file specimens to imitate structurally
├── mode-and-length.md           ← authority / reach / hybrid + target length
└── retention-targets.md         ← predicted-AVD floor for this video type, based on channel history
```

Every bundle is complete before script-writing starts. No "we'll figure out the framework as we go." The script-writer writes against a specified target with specified imitation surface.

---

## What the script-writer must produce

A draft script that:

1. **Declares mode + awareness level + beliefs-addressed** in its frontmatter (INV-12, INV-13)
2. **Hits the hook density requirement** — minimum 3 retention mechanisms in first 30s (INV-11)
3. **Implements the loop architecture** specified in `frameworks-recommended.md` — typically 3+ open-loops with specified placement
4. **Mirrors the voice-of-viewer language** from `voice-of-viewer-snippets.md` — verbatim phrases or close paraphrases at minimum 3 points
5. **Applies the hook formula** specified in `frameworks-recommended.md`
6. **Hits the length target** within ±15%
7. **Carries the CTA appropriate to the mode** — explicit for authority, soft for reach
8. **Passes the retention floor** (INV-9) on prediction
9. **Cites compartments and frameworks used** in the metadata block

---

## Verification on script delivery

When the script ships, the gates run:

1. Format compliance — all required sections present, frontmatter valid
2. Hook density check — 3+ mechanisms in first 30s
3. Loop architecture check — 3+ loops with placement matching the spec
4. Voice fidelity — `phrases_to_use` deployment, `phrases_to_avoid` absence
5. Mode coherence — script holds its declared mode through the body
6. Awareness-level match — copy register matches the declared level
7. Retention floor — predicted AVD ≥ channel bottom-quartile band
8. Banned vocabulary — zero matches against `spec/BANNED-VOCABULARY.md`
9. Truth Gate — every claim survives the 30-second screenshot test
10. No fabrication — no invented stats, testimonials, results

---

## What the script-writer DOES NOT decide

- The topic (research has decided)
- The mode (research has decided)
- The awareness level (research has decided)
- The beliefs to install (research has decided)
- The hook formula (research has recommended; script-writer can override only with explicit reasoning)
- The CTA destination (the channel architecture has decided — pinned VSL, application form, etc.)

The script-writer's job is execution, not strategy. Strategy was decided upstream.

---

## What the script-writer DOES decide

- The specific opening (within hook formula constraints)
- The specific examples / evidence used (within the source pool from research-brief)
- The specific section transitions
- The specific CTA wording (within the channel-architecture-declared destination)
- The specific b-roll / production cues to embed (within the brief)
- The specific length within ±15% of target

These are the taste-and-craft decisions that distinguish competent from elite script work.

---

## Failure handoff path

When the script fails verification, the failure type determines who fixes it:

| Failure | Owner | Fix |
|---|---|---|
| Mode-confused | script-writer | Revise to commit to one mode |
| Awareness-level mismatch | script-writer | Recalibrate copy register |
| Hook density too low | script-writer | Add hooks (revision attempt 1) |
| Loop architecture broken | script-writer | Rebuild loops (revision attempt 1) |
| Voice fidelity below threshold | script-writer | Voice pass (revision attempt 1) |
| Mode/awareness mismatch with research-brief | research → script-writer | Research re-runs (escalation) |
| Beliefs misaligned with channel arc | research → channel-architect | Channel-architecture review (escalation) |
| Retention floor failure on structural-pattern level | retention-head | Retention engineering pass |

---

## Library compounding

Every published script's research-vs-script deviation is logged. Patterns surface:

- Script-writer consistently softens hooks below research-recommended → calibrate the brief or the writer
- Script-writer consistently hits length under target → recalibrate length expectations
- Voice-of-viewer language gets dropped at certain script positions → strengthen the "use verbatim at minimum 3 points" rule

The handoff calibrates every cycle. Research output gets sharper; script output gets sharper.

---

## What changes by team config

### Solo
The creator wears both hats. Research informs scripting; same person both seats. The handoff is informal.

### Creator + editor
Creator does both research and scripting. Editor consumes the script for production. Same handoff structure.

### Full studio
Writer does research and scripting; creator does final taste-pass. The handoff IS a real handoff between two people in the same role.

When a writer does research-then-scripting, they should explicitly switch hats — produce the research-brief as a separate artifact first, then write the script against it. Without the formal split, scripts drift toward "what the writer wanted to write" instead of "what research said."

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
