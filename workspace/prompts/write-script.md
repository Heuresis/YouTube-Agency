---
name: write-script
type: prompt-pack
purpose: Generate a film-ready long-form script (case study, mechanism, or sales-reality) at the channel's spoken-voice bar — every figure proof-traced, every claim carrying an on-screen artifact.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, workspace/CONTENT-ENGINE.md, workspace/STRATEGY.md, INVARIANTS.md, spec/voice-gates.md]
---

# write-script — long-form proof-script generator

> Produces a film-ready long-form script for the channel. Default format is the **Client Case Study** — the primary proof asset on a channel that sells a back-end offer. Also handles **Mechanism** and **Sales-Reality** formats. The output must read like the channel's canonical spoken-pass draft (the `-v2-spoken` file named in `workspace/CALIBRATION.md`) — that file is the bar.
>
> **This pack is the fast lane.** The production-grade big brother is the **`/write-script` skill (`skills/write-script/`)** — the full script-architect protocol (gather → strategy → structure → execute → QA) with context-threshold gates (INV-3). Use the skill for flagship videos and anything novel; use this pack when the calibration docs are loaded and you need a known format executed now. Pipeline position: `/idea-farm → /research-brief → **/write-script** → /title-thumbnail-pair → /description-builder → /editor-brief → /publish-checklist → /repurposing-cascade`.

## Before you generate — read these
1. `workspace/VOICE.md` — the spoken-voice rules + the reserved-vocabulary discipline + banned vocab. **Non-negotiable.** The automated gate is `spec/voice-gates.md`.
2. `workspace/PROOF-BANK.md` — every number you use must trace to a row here. **Never invent a number** (INV-5, INV-6).
3. `workspace/CONTENT-ENGINE.md` — the beat structure for the format you're writing.
4. `workspace/STRATEGY.md` — the buyer questions this channel exists to answer, and the one CTA destination per funnel stage.

## Inputs (ask for any that are missing — don't guess)
- **Format:** Case Study (default) / Mechanism / Sales-Reality / Live-Diagnosis / Founder-Story. The canonical format set lives in `workspace/CONTENT-ENGINE.md`.
- **Mode:** authority (default for proof content) / reach / hybrid — INV-12. `workspace/CALIBRATION.md` may override the taxonomy.
- **The proof:** which PROOF-BANK row(s) is this built on? If the core number isn't `[VERIFIED]`, mark it `[CONFIRM: $X]` in the script — do not fabricate.
- **The buyer question it answers** (`workspace/STRATEGY.md`): "can they do this?" / "have they done it for someone like me?" / "is this a real business?"
- **Awareness target:** Unaware / Problem / Solution / Product / Most-aware (INV-13). Proof content skews solution- and product-aware.
- **Length:** default 8–12 min (~1,400–2,100 spoken words).
- **CTA destination:** book-a-call / pinned VSL (default for authority) / lead magnet — or the launch-window destination if `workspace/STRATEGY.md` declares one open.

## The procedure
1. **Pick the proof + the one belief** the video installs. One video, one job.
2. **Outline the beats** using the chosen format's structure (`workspace/CONTENT-ENGINE.md`). Mark where each loop opens (first loop inside 0:08) and closes (spine loop before 50%) — INV-11 hook density applies to the first 30s.
3. **Write it spoken** — apply every rule in `workspace/VOICE.md`. Short beats, fragments where natural, no BUT/THEREFORE as mid-sentence connectors, key numbers read in full, one-word punchlines where earned.
4. **Place the artifacts** — every claim gets a `(SHOW: …)` cue (payment screen, dashboard, whiteboard, message thread, invoice). On a proof channel the visual carries the trust; a claim without an artifact is a claim the buyer discounts.
5. **Earn the pitch** — the CTA lands only after the mechanism/proof has paid off. Never before.
6. **Gate it** — voice-check (`spec/voice-gates.md` blind-output test) and signal-check (`workspace/prompts/signal-check.md`, target ≥7; 9+ = indistinguishable from the creator).

## Output structure
```
## METADATA
Format · Mode (authority/reach/hybrid) · Awareness target · Belief installed · Length · Word count · CTA destination
Hook formula · Loops (open→close timestamps) · Proof-bank rows used · Banned-vocab scan: clear
Voice-check: pass · Signal score: N/10

## THE SCRIPT
(0:00) — [cold-open stage direction: setting, energy, what's already on screen]
[spoken beats with (SHOW: …) cues, timestamps on every major section]
...
(close) — CTA (imperative + image, not a question)
(END CARD: next-video + playlist + subscribe)

## VOICE-CHECK — read-aloud markers
[lines to test out loud; flag any clunky one with a swap]

## TITLE + THUMBNAIL
[handoff to workspace/prompts/title-thumbnail.md — or 3 title options + 1 thumbnail concept inline]

## REPURPOSING
[handoff to workspace/prompts/repurpose.md — list the 6–8 short cuts this long-form yields]

## OPEN SLOTS
[every [CONFIRM: …] slot listed so nothing ships unverified]
```

## Hard constraints (the script fails review if any break)
- **No invented numbers.** Every figure → a PROOF-BANK `[VERIFIED]` row, or a `[CONFIRM: …]` slot (INV-6).
- **Voice rules from `workspace/VOICE.md` applied throughout;** read-aloud clean (`spec/voice-gates.md`).
- **No BUT/THEREFORE as spoken mid-sentence connectors.** Contrast lives in rhythm, not connectors. (A standalone "But…" as its own beat is fine.)
- **Cold open** — never "In this video…". Lead with the receipt, the bleed, or the moment before the realization.
- **Earn-the-pitch** — no CTA before the proof lands.
- **One destination per video.** Every video ties off to exactly one CTA (mode-matched — INV-12).
- **Reserved-vocabulary discipline:** simple, proof-first language only; proprietary program vocabulary stays in most-aware content (per `workspace/VOICE.md`).
- **Earnings claims** carry the channel's disclosure frame (`workspace/PROOF-BANK.md` honesty section); client ROI ≠ audience income. Never guarantee income (NEVER-11).

## The Case Study skeleton (default — fill it)
```
(0:00) COLD OPEN — the receipt. Result stated + artifact shown.
       "We {{recovered/saved}} {{$amount}} for a {{niche}}. Here's the exact system."
(0:30) THE BLEED — name the leak + the cost math (workflow × frequency × cost).
(1:30) THE DIAGNOSIS — how you found it ({{your diagnostic lens}}, fast).
(2:30) THE BUILD (on the board) — walk the architecture on a whiteboard/diagram. The stack. The flow. What was templated vs custom.
(6:00) THE RESULT — after-number, timeline, payback. "Paid for itself in {{timeframe}}."
(7:30) THE LESSON — the transferable principle ({{one of the channel's recurring frames, workspace/VOICE.md}}).
(8:30) CTA — "{{imperative + image}}. Link in the description."
```

## Worked example
The canonical pass is the channel's own spoken-voice draft — `workspace/drafts/{{YYYY-MM-DD--slug}}-v2-spoken.md`, named as the voice anchor in `workspace/CALIBRATION.md`. Study its rhythm before generating: the full-number cold open, fragment punchlines, `(SHOW: …)` cues on every claim, implicit transitions, the imperative close. Match it. Until that draft exists, the structure above plus `workspace/VOICE.md` is the spec.

*v1 — generalized prompt-pack.*
