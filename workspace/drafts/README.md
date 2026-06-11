# drafts/ — the draft → spoken-pass → package lifecycle

> Working files for videos between **pitch** (`workspace/pipeline/PITCHES.md`) and **shoot** (`workspace/film-this-week/`). A video moves through up to four staged files here, each gated before the next exists. Nothing in this folder is publishable — drafts carry `[CONFIRM: …]` slots by design. When every core number verifies against `workspace/PROOF-BANK.md` and a film slot is booked, the script graduates to `workspace/film-this-week/`.

## Naming convention

```
YYYY-MM-DD--slug-STAGE.ext
```

- **`YYYY-MM-DD`** — the date the stage file was created (each stage gets its own date).
- **`slug`** — kebab-case working title, stable across stages so the set sorts together.
- **`STAGE.ext`** — one of: `-SCRIPT.md` · `-v2-spoken.md` · `-PACKAGING.md` · `-PACKAGE.jsx` (+ its rendered `-PACKAGE.html`).

Example set for one video:

```
2026-07-02--after-hours-quote-flow-SCRIPT.md
2026-07-03--after-hours-quote-flow-v2-spoken.md
2026-07-04--after-hours-quote-flow-PACKAGING.md
2026-07-04--after-hours-quote-flow-PACKAGE.jsx
2026-07-04--after-hours-quote-flow-PACKAGE.html
```

---

## Stage 1 — `-SCRIPT.md` (the written draft)

The output of `/write-script` (or the fast lane, `workspace/prompts/write-script.md`). Contains:

- A header note: the voice anchor it was written against, and what the previous pass got wrong (if a rebuild).
- A fenced **metadata block** — mode (authority/reach/hybrid, INV-12) · awareness · belief installed · length + spoken word count · hook formula · voice anchor · the honesty line ("every number real `[VERIFIED]` or a `[CONFIRM: …]` slot — never invented").
- **THE SCRIPT** — timestamped sections; cues in *(parenthesized italics)*; honesty slots inline as `[CONFIRM: …]`; spoken text is everything else — that's the teleprompter.

**Gate to Stage 2:** structure approved (beats, loops, earn-the-pitch in place). Don't polish prose that might be re-beated.

## Stage 2 — `-v2-spoken.md` (the read-aloud rewrite — the voice bar)

The draft rebuilt **for the mouth, not the page**. Written drafts fail on camera in predictable ways: connector words the creator never says, essay sentences, balanced clauses. The spoken pass rebuilds every line from the creator's actual rhythm — and this file, once it survives a real read-aloud, becomes the channel's **voice anchor** (name it in `workspace/CALIBRATION.md`; every future script is measured against it).

What changes from Stage 1:
- Every line **read aloud and rewritten** until it sounds like a voice memo to a friend. If your mouth feels weird, the line is wrong (`spec/voice-gates.md`).
- No BUT/THEREFORE as spoken mid-sentence connectors; contrast moves into rhythm.
- Key numbers converted to **full spoken reads** ("nine thousand two hundred dollars," not "$9.2K").
- Fragments, "And"-openers, one-word punchlines where the creator actually uses them — and run-ons where the creator actually runs on. The target is *their* cadence, not a style guide's.
- A condensed metadata block at top (mode, length, word count, hook formula, loop close points, banned-vocab scan).

**Gate to Stage 3:** passes the blind-output test (`spec/voice-gates.md`) + signal-check ≥7 (`workspace/prompts/signal-check.md`).

## Stage 3 — `-PACKAGING.md` (titles · thumbnail · description · SEO)

The publish-surface package, generated against the **locked cold-open** of the spoken pass via `workspace/prompts/title-thumbnail.md` + `/description-builder`. Contains, in order:

1. **Header block** — format · mode · awareness · the first-30s promise (one line) · proof-bank rows · banned-in-titles scan · **promise-match gate (INV-10) verdict**.
2. **5 TITLES (ranked)** — one per pattern, each with its why; disqualified titles stay listed with the DQ reason; an **A/B plan** (ship #1 vs #2, hold the winner after 72h, reserve #3).
3. **THUMBNAIL — one locked direction** — not a brainstorm; the single concept that promise-matches title #1 (composition · face grammar · 2–3 word text · proof in frame · color · the NEVER-list check), ready to hand to a designer.
4. **DESCRIPTION (copy-paste ready)** — above-fold hook + subscribe, body summary, timestamps, mentioned-tools list, watch-next links, handles; every link a `[CONFIRM: …]` until real.
5. **SEO** — primary/secondary keywords (don't make the commodity term the hero — `workspace/STRATEGY.md`), the tags field paste, title/description keyword checks.
6. **PINNED COMMENT** — a genuine question prompt (INV-17 compliant) + the destination link.
7. **END SCREEN** — subscribe slot · next-video slot · playlist slot.
8. **PROMISE-MATCH GATE (INV-10)** — the four-row table: topic / format / intensity / specificity, title × thumbnail × first-30s, with a pass/fail composite.
9. **OPEN SLOTS** — every `[CONFIRM: …]` link and figure that must close before publish.

**Gate to Stage 4:** INV-10 gate passes; packaging matches the open (never the reverse).

## Stage 4 — `-PACKAGE.jsx` → `-PACKAGE.html` (the record-ready package)

The whole video — script, cues, assets, publish copy, pre-flight — compiled into **one interactive file** the talent and editor can open in a browser. The `.jsx` has two parts:

- **The `VIDEO` data object** — edit this per video: stage (TOF/MOF/BOF) · creator/brand/lower-third · runtime + word count · belief · title + alts · the script as `{time, label, deliver, read[], cues[]}` blocks (`read[]` = teleprompter lines; `cues[]` = typed on-screen cues: `show` / `text` / `confirm`) · assets · publish copy · pre-flight checklist.
- **The ENGINE** — leave untouched. Renders 5 tabs: **Teleprompter** (clean spoken script, auto-scroll) · **Shot List** (script + every cue, for the editor) · **Assets** (graphics as 16:9 frames + the external-asset list) · **Publish** (copy-paste title/description/tags/pinned comment) · **Pre-Flight** (confirm-slots, recording checklist, funnel-stage guide).

Render it to a self-contained HTML (Tailwind + React UMD + Babel, no build step, opens by double-click):

```bash
node scripts/render-package.mjs <input.jsx> <output.html> "<Title>"
```

See the header of `scripts/render-package.mjs` for brand/font/color overrides.

---

## Where files go next

| Event | Move |
|---|---|
| Every core number `[VERIFIED]` + film slot booked | Script (spoken pass + packaging) graduates → `workspace/film-this-week/YYYY-MM-DD--slug.md` (film-date in the name) |
| Video published | Record logged in `workspace/published/` within ~48h; draft set stays here as the working history |
| Video killed | Files stay; mark the SLATE row `killed` with the reason — drafts are strategy data |

One video = one slug = one staged set. Don't fork slugs mid-lifecycle; a re-write is a new dated file of the same stage.
