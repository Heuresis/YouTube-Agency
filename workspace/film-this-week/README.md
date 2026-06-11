# film-this-week/ — the shoot queue

> This folder holds **only** scripts that are cleared to film: every dollar figure on the page traces to a `[VERIFIED]` row in `workspace/PROOF-BANK.md`, and the video has a film slot on the calendar. Nothing speculative lives here. If a script's proof rows are still `[CONFIRM]` or `[NEEDS-PROOF]`, it stays in `workspace/drafts/` (or sits in `SLATE.md` as `gated`) — **a rehearsal draft is not a film-ready script.** The honesty layer is the funnel's protection: a skeptical buyer who catches one fuzzy number on camera is gone (INV-5, INV-6).

## The two entry conditions (both, always)

1. **Proof verified.** Every figure the script states as fact → a `[VERIFIED]` PROOF-BANK row. Any remaining `[CONFIRM: …]` slots are production items only (links, artifact pulls, spelling standardization) — never the core numbers.
2. **Scheduled.** The video has a film date. The filename carries it.

A file that loses either condition (a proof row gets retagged, the shoot slips indefinitely) moves back to `workspace/drafts/` and its `SLATE.md` row reverts to `gated`.

## Naming convention

```
YYYY-MM-DD--slug.md
```

- **`YYYY-MM-DD`** — the scheduled film date (not the date the file was written).
- **`slug`** — kebab-case from the working title, e.g. `2026-07-14--after-hours-quote-flow.md`.
- One file = one video. Reshoots keep the same file; the date updates.

## What a film-ready file contains (in order)

Every file in this folder follows the same skeleton — it's the output of `workspace/prompts/write-script.md` (or the `/write-script` skill), carried to the verified stage:

| # | Section | What it holds |
|---|---|---|
| 1 | **Title + gate banner** | `# FILM THIS WEEK — "{{title}}" ({{format}})`, then a blockquote: where the script came from (which prompt/skill, which PROOF-BANK rows), and the read-before-filming note. |
| 2 | **METADATA** | Fenced block: format · mode (authority/reach/hybrid, INV-12) · awareness target (INV-13) · belief installed · length + word count · hook formula · loops (open→close timestamps) · proof-bank rows used · CTA destination · banned-vocab scan · voice-check · signal score. |
| 3 | **THE SCRIPT** | The full spoken text — the teleprompter. Timestamped section headers (`(0:00)`, `(2:00)`…), stage directions in italics, and a `(SHOW: …)` cue on **every claim** (the artifact carries the trust). Includes the close + CTA and the end-card spec (next-video / playlist / subscribe). If a launch window may be open at publish, include the alternate CTA block. |
| 4 | **VOICE-CHECK — read-aloud markers** | The lines to test out loud before filming; each flagged line carries a ready swap. Per `spec/voice-gates.md`. |
| 5 | **TITLE + THUMBNAIL** | The 5 ranked titles + 3 thumbnail concepts from `workspace/prompts/title-thumbnail.md`, with the INV-10 promise-match verdict. The shipping pair is marked. |
| 6 | **REPURPOSING** | The 6–8 short cuts this long-form yields, each with its timestamp — the handoff list for `workspace/prompts/repurpose.md` / `/repurposing-cascade`. |
| 7 | **OPEN SLOTS** | The remaining production items, as a table: slot → what it claims → what's required. In this folder, this table contains **no unverified core numbers** — only artifact pulls (the dashboard to screen-record, the board to draw), link confirms, and production checkboxes. |
| 8 | **SIGNAL CHECK** | The scored rubric from `workspace/prompts/signal-check.md` (must be ≥7 to sit in this folder) + the verdict. |

## Production checklist (before the camera rolls)

- [ ] Every `(SHOW: …)` artifact exists and is pullable (dashboard screen, board, invoice with names blocked). No artifact = not a proof video.
- [ ] The on-screen numbers equal the `[VERIFIED]` numbers exactly — title, thumbnail, and cold open all match (INV-10).
- [ ] The end-card destination video/playlist exists or is next in the queue.
- [ ] Names, brands, and tool spellings standardized per `workspace/PROOF-BANK.md`.
- [ ] `/publish-checklist` is scheduled for the upload day (all 17 invariants gate there).

## After the shoot

Filmed → the file's `SLATE.md` row moves to `filmed`. Published → log the video in `workspace/published/` (within ~48h, per `workspace/published/_TEMPLATE.md`) and move or archive this file per the workspace's retention convention. The published record — not this file — becomes the source of truth for what was actually said on camera.
