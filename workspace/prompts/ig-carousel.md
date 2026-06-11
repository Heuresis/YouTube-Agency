---
name: ig-carousel
type: prompt-pack
purpose: Generate a finished IG/LinkedIn carousel — slide-by-slide copy + per-slide visual direction + caption + CTA — for the proof/diagnostic surface, at the proof-first voice bar.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, workspace/CONTENT-ENGINE.md]
---

# ig-carousel — IG + LinkedIn carousel generator

> Produces a finished carousel for the **proof / nurture surface**: every slide's copy, a `(VISUAL: …)` direction per slide, the caption, and the CTA. A carousel is where the skeptical buyer does their pre-call due-diligence, so it is a **proof + diagnostic** instrument — the diagnostic-lens teach, or a before→after case study with the real stack and the real number. Same voice as `workspace/prompts/write-script.md`; same proof discipline as `workspace/PROOF-BANK.md`. The buyer is researching, not entertaining themselves — earn the swipe, then pay it off.

## Before you generate — read these
1. `workspace/VOICE.md` — banned vocab + reserved-vocabulary discipline + the blind-output test (`spec/voice-gates.md`). **Non-negotiable.** (The spoken rules are written for *voiceover*; see "Voice deltas for carousels" below for what changes on a slide.)
2. `workspace/PROOF-BANK.md` — the case-study rows are the carousel fuel. Every tool and number on a slide traces to a row. **Never invent a number.** A `[CONFIRM]` row frames as "the kind of build we ship," not "this exact client," until verified.
3. `workspace/CONTENT-ENGINE.md` — pillar mix + format weighting. Carousels skew **Diagnostic** and **Receipt**.

## Inputs (ask for any that are missing — don't guess)
- **Type:** `Diagnostic` (the leak-map / "where you're bleeding" teach) or `Case Study` (one proof row, before→after). Default = whichever the proof allows.
- **Platform:** `IG` (default) / `LinkedIn` / both. (Changes link placement + density — see "Platform deltas".)
- **The proof:** which PROOF-BANK row(s)? Diagnostic touches several at one line each; Case Study goes deep on **one**. If a number isn't `[VERIFIED]`, it ships as `[CONFIRM: $X]`, never fabricated.
- **Slide count:** 8–10 (default 9).
- **Buyer question it answers** (`workspace/STRATEGY.md`): "can they do this?" / "have they done it for someone like me?" / "is this a real business?"
- **CTA destination:** book-a-call / pinned VSL (default). Launch window → the launch destination.
- **Rotation check:** which proof rows were the *deep anchor* of the last 3 carousels? (Dedup rule below.)

## The procedure
1. **Pick the type + one job.** One carousel installs one belief. Don't blend a diagnostic and a case study.
2. **Write the cover first and alone.** The cover is the whole game (next section). If it doesn't earn the swipe, nothing downstream matters. Treat it like a hook — borrow the discipline in `workspace/prompts/write-hook.md`.
3. **Lay the spine:** Cover → Setup → Substance (one idea/slide) → the penultimate payoff → CTA. Fill the skeleton.
4. **Make specifics survive.** Real tool, real niche, real number on every substance slide. Apply the blind-output test: if a competitor could paste their logo over this slide and it still reads true, it's too generic — sharpen with a named tool/number from the proof row.
5. **Direct every slide.** Each slide gets a `(VISUAL: …)` cue — this is the proof surface; the artifact carries the trust (payment screen, dashboard, booking screen, report, board, DM, missed-request log). Show, don't claim.
6. **Write the caption** (50–150 words) — opens on the *same* hook as the cover, recaps the substance for non-swipers, closes on the CTA. "Link in bio" lives **here, in the caption — never on a slide.**
7. **Voice-check + proof-check** (`spec/voice-gates.md`; PROOF-BANK numbers) and **log the deep-anchor row** for rotation.

## The cover is the whole game
60–90% of viewers decide on slide 1. 6–10 words, proof-first, no setup, no "swipe →" begging. Pick a pattern:

| Cover pattern | Shape | Example shape (fill from your proof rows) |
|---|---|---|
| **The Number** | result + niche, full | "We recovered {{$X}} a month for one {{niche}}." |
| **The List-promise** | count + universal | "The {{N}} places every {{audience}} is leaking money." |
| **The Contrarian** (paired declarative) | belief flip | "Your clients don't want {{the tech}}. They want {{the problem}} to stop." |
| **The Broken Workflow** | the specific bleed | "Every {{request type}} after {{time}} goes to {{the dead end}}." |
| **The Before→After** | delta + tease | "{{N}} hours a month on {{task}} → {{n}}. Here's how." |

Cover fails if: it's vague ("How automation saves time"), it's hype ("This trick made $50K"), it begs ("Swipe to find out"), or it leads with abstraction instead of a number/tool/niche.

## Voice deltas for carousels (what changes from the spoken rules)
- **Numerals on slides + in captions, not full-spoken numbers.** "{{$9K}}," "{{90}} hrs," "20–30%" scan; the say-it-in-full rule is for *voiceover only*.
- **Fragments win even harder.** A slide is one breath. "Never sleeps." "Gone." "Paid for itself in {{timeframe}}."
- **Still banned:** BUT/THEREFORE as mid-sentence connectors; question-mark CTAs; all banned vocab (INV-7); reserved program vocabulary (proof-first language only on IG/LI).
- **One idea per slide, ≤15 words where possible.** If a slide needs two ideas, it's two slides.
- **Paired declaratives and one-word punchlines** port directly — they're built for visual rhythm.

## The skeletons (fill one)
```
DIAGNOSTIC (the leak map) — 9 slides
1   COVER       the list-promise / contrarian. 6–10 words.
2   SETUP       reframe: it's not where they look. 1–2 fragments.
3–7 SUBSTANCE   one leak per slide: name it + the bleed (workflow × frequency × cost) + the niche. ≤15 words.
8   THE MATH    one leak's math laid out big: count × value × rate = {{$X}}/mo on the floor.
9   CTA         imperative + deliverable. (link in bio → caption)

CASE STUDY (before→after) — 8–9 slides
1   COVER       the Number / before→after. 6–10 words.
2   THE BLEED   the before-state + when it bleeds. ≤15 words.
3   THE COST    what each instance was worth (the math, humanized).
4–6 THE BUILD   the stack, one piece per slide, named tools.
7   THE RECEIPT build price + run cost + recovered $/mo + payback. The dashboard.
8   THE LESSON  the transferable frame (one of the channel's recurring frames).
9   CTA         "you have this leak too" → map + price it.
```

## CTA discipline
- **One ask, imperative, with a deliverable.** "We'll find your biggest leak and tell you what it'd cost to fix it." The deliverable is what separates this from a banned bare "free strategy call."
- **The slide carries the imperative + handle; the caption carries the link.** IG → "link in my bio." LinkedIn → "link in the first comment" (or post body).
- **Banned (strip on sight — INV-17):** "Drop a comment if this resonates." "Double-tap if you agree." "Save this for later." "Follow for more." Any question-mark close ("What do you think?"). "Link in bio" printed *on a slide*. Countdown/"doors close" fake urgency. Engagement-bait of any kind.
- **Earnings disclosure** (`workspace/PROOF-BANK.md` honesty section) only if the carousel implies what *the viewer* could earn. Client ROI ("we recovered {{$X}}/mo for them") is not an audience-income claim — no disclosure needed. Keep the two distinct; never guarantee income (NEVER-11).

## Rotation / dedup rule
**No proof row may be the *deep anchor* of two carousels inside any 3-post window.** A one-line mention of a row inside a diagnostic is a *passing mention* and does not spend the row — only a full Case Study, or a row used as the carousel's single subject, counts as the deep anchor. Log the deep-anchor row in the OPEN SLOTS block every time so the next carousel can rotate. (Practical pattern: anchor the diagnostic's worked-example line on a *different* row than the case study you plan to ship right after it.)

## Output structure
```
## METADATA
Type · Platform · Buyer question · Slide count · Pillar · Penultimate payoff (Math/Receipt/Step-list)
Cover pattern · Proof-bank rows used · Deep-anchor row (for rotation log) · CTA destination
Banned-vocab scan: clear · Reserved-vocab: clear · Voice-check: pass

## SLIDES
[Slide n — ROLE]
  COPY:    the on-slide words (≤15 where possible, fragments good)
  VISUAL:  (VISUAL: artifact + layout — the proof on screen)
... through CTA slide (no link on slide)

## CAPTION
[50–150 words. Opens on the cover hook. Recaps substance for non-swipers. CTA + link last.]

## OPEN SLOTS
[every [CONFIRM: …] number/client + the deep-anchor row logged for rotation]
```

## Hard constraints (fails review if any break)
- **No invented numbers / no fabricated client.** Every figure → a proof row, or a `[CONFIRM: …]` slot. `[CONFIRM]` rows frame as a representative build until verified.
- **Cover earns the swipe** — number/tool/niche/contrarian, 6–10 words, no begging, no hype.
- **One idea per slide; each slide stands alone yet advances the argument; ≤15 words where possible.**
- **Specifics survive the blind-output test** — named tool + named number, not swappable for a competitor's.
- **Reserved-vocabulary discipline** — proof-first language only (this is IG/LI, never most-aware program content).
- **CTA discipline** — imperative + deliverable, link in caption not on slide, zero engagement-bait (INV-17).
- **Rotation** — deep-anchor row logged; no repeat within 3 posts.

## Platform deltas
- **IG:** square (1080×1080) or 4:5; ~6 lines of text max per slide; link → bio; the caption does heavy lifting for non-swipers.
- **LinkedIn:** PDF/document carousel (1080×1080 or 1200×1500); tolerates ~30% more text and a slightly more measured register (still no corporate bloat); link → first comment or post body, never "link in bio."

## Worked example slot — fill from your own bank
Build the first two carousels in this order and log them here as the house examples:
1. **Diagnostic** — the leak-map teach, anchored on the channel's diagnostic lens, with each substance slide pulling a one-line passing mention from a different proof row (spends no deep anchor).
2. **Case Study** — the strongest `[VERIFIED]` row, before→after, deep anchor logged.

That order obeys the rotation rule by construction and gives the grid a teach + a receipt back to back.

*v1 — generalized prompt-pack.*
