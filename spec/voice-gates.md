# voice-gates.md — The Five Voice Gates Before Any Script Ships

> **Ship gate.** No script leaves the workspace until it clears all five voice gates: banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7. Structural gates (retention floor, promise alignment) catch scripts that won't hold viewers; the voice gates catch scripts that won't sound like the creator. Both kill a channel — the voice failure just kills it slower.

---

## Why this matters

A script can pass every structural check — hook density, loop architecture, belief installation, predicted AVD — and still read like nobody in particular wrote it. Viewers classify that register within seconds, the same way they classify slop vocabulary: as low-effort, low-trust content. Retention decays, comments flatten, and the parasocial contract (INV-16) erodes because the person on screen is reading words that aren't theirs.

The five gates below are the consolidated pass that catches this failure class. They run as one unit: a script that fails any single gate is rejected and revised, not shipped with a note.

---

## Gate 1 — Banned-vocab clear

**What it checks:** zero matches against the active banned list.

**The active list** = the canonical list in `spec/BANNED-VOCABULARY.md` (cross-vertical + YouTube-specific + engagement-bait + regulatory) **plus** the creator's `phrases_to_avoid` additions in `workspace/VOICE.md`, **minus** any per-word `phrases_to_use` overrides. The creator's voice doc extends the canon; it never silently disables it.

**Detection:** the grep pass specified in `spec/BANNED-VOCABULARY.md` § Detection — strip code blocks/URLs/proper nouns, lowercase, tokenize, match. Any match = REJECT with word + position + sentence returned to the writer.

**Pass:** 0 matches.

---

## Gate 2 — No spoken BUT/THEREFORE

**The doctrine: planning tools vs spoken text.** BUT/THEREFORE (the `but-therefore-narrative-engine`) is the **writer's beat-planning tool** — it guarantees every beat carries conflict + consequence instead of "and then." It belongs in planning notes and the reconciliation log. The **spoken script never contains "but" or "therefore" as connectors.** Contrast lives in rhythm, not in pivot words; spoken "but/therefore" is the essay register leaking into speech, and it is the single most reliable tell that a framework wrote the line instead of a person.

**Allowed (planning note — never reaches the prompter):**

```
[PLAN: she trusted the dashboard BUT the numbers lagged a week THEREFORE every
decision was seven days late.]
```

**Fails the gate (spoken):**

> "She trusted the dashboard, but the numbers lagged a week, and therefore every decision was late."

**Passes the gate (same beat, spoken):**

> "She trusted the dashboard. The numbers it showed her were a week old — every decision she made was seven days behind the business."

**The wider rule:** no framework vocabulary in spoken lines, ever. "Open loop," "re-hook," "belief install," "awareness level," "mechanism demo," "pattern interrupt" are planning words. The script *performs* them; it never *says* them.

**Detection:** scan spoken lines only (planning annotations `[PLAN: …]` and the reconciliation log are exempt) for "but"/"therefore" used as clause connectors, plus the framework-vocab list. Any hit = REJECT that line; rewrite so the contrast lives in sentence rhythm.

**Pass:** 0 connector hits, 0 framework-vocab leaks in spoken text.

---

## Gate 3 — Read-aloud clean

**What it checks:** the script survives being spoken.

Read the script aloud — every line, full speed, no skimming. Any stumble — a tangled clause, a breath that runs out, a word cluster the mouth trips on — means the creator's mouth will trip on it too, on camera, on take three. **Any stumble = rewrite that line.** Not "flag it"; rewrite it.

**Protocol:**
1. The writer performs the first read-aloud pass before the script leaves the skill and rewrites every stumble.
2. The script ships with **VOICE-CHECK markers** — the specific lines most likely to clunk, each ⚠-flagged with a proposed swap — so the creator (or operator) can run the second pass themselves. The runtime cannot perform the creator's mouth; it must always hand over the markers.

**Pass:** writer's pass clean + VOICE-CHECK markers attached for the human pass.

---

## Gate 4 — Blind Output Test ≥ 7

**What it checks:** could this plausibly have come from the creator?

The canonical protocol lives at `reference/canonical/spec/BLIND-OUTPUT-TEST.md` — three informed evaluators, mixed creator/system samples, single-blinded. That protocol is a **gating event** (skill graduation, per-creator calibration, drift checks), not a per-script step.

Per script, the gate runs as a calibrated proxy: score the draft 0–10 on the canonical test's question — *"would an informed reader who knows this creator's work believe the creator wrote this?"* — judged against `workspace/VOICE.md` (verbatim-phrase density, cadence match, zero `phrases_to_avoid`) and the workspace voice-anchor script if one exists.

**Pass:** ≥ 7/10. Below 7 = re-run the voice pass (sharpen verbatim phrases, reconnect cadence, kill generic lines) before any other revision — voice fails first, even when content is correct.

---

## Gate 5 — Signal-check ≥ 7

**What it checks:** the density of un-fakeable, creator-specific signal — named numbers, counted experience, real tools, owned positions — versus interchangeable filler any competitor could say.

Scored on the 0–10 bands defined in `workspace/prompts/signal-check.md`. The bands are the workspace's calibration; the ship threshold is fixed here.

**Pass:** ≥ 7/10. Below 7 = the script is structurally fine and substantively hollow; return to the proof rows (`workspace/PROOF-BANK.md`) and the differentiation paths, not to the prose.

---

## Where the gates run

The five gates execute as one consolidated pass at three points:

1. **`/write-script` Step 5 (QA)** — the primary enforcement point. The orchestrator refuses to emit a script with any gate failing. The mode-specific script skills (`/write-authority-script`, `/write-reach-script`, `/write-shorts-script`, `/write-pinned-vsl`) inherit the same pass at their verify steps.
2. **`workspace/prompts/*`** — every workspace prompt-pack embeds the five gates as hard constraints, so even a bare-chat runtime with no skill harness enforces them at generation time.
3. **`/publish-checklist`** — re-verified pre-upload as part of the 17-invariant sweep, catching anything edited after the script left the writing skill.

---

## Failure response

- Any gate fails → REJECT + revise. Gates re-run from Gate 1 after every revision (a voice rewrite can introduce a banned word).
- Maximum 2 revision cycles, then escalate to the creator with the failing gate's evidence attached.
- There is **no override path** for Gates 1–3 — they are mechanical and the fix is always cheap. Gates 4–5 may be creator-overridden with an explicit `[VOICE-OVERRIDE: gate=<N>, score=<X>, reason=<creator-supplied>]` flag; overridden scripts are excluded from the swipe-file positive-pattern pool, same as retention-floor overrides.

---

## What this is NOT

- NOT a style preference. Each gate maps to a measured failure mode: slop vocabulary → bottom-quartile AVD; spoken connectors → essay register → trust drop; stumbles → on-camera delivery cost; voice-foreign scripts → Blind Output Test fails → parasocial erosion; low signal → interchangeable content in a zero-sum feed.
- NOT a substitute for the structural gates. A script must clear both `spec/retention-floor.md` (INV-9) and these five. Voice without retention is a podcast; retention without voice is a template.
- NOT creator-optional in aggregate. Individual word overrides exist (`phrases_to_use`); skipping the pass does not.

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
