---
name: repurpose
type: prompt-pack
purpose: Cascade ONE long-form video (or one podcast appearance) into the week's multi-surface content — 6–8 Shorts/Reels, 1–2 carousels, 1 X thread, 1 LinkedIn post, 1 email — with every receipt, number, and tool name surviving the format change.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, workspace/CONTENT-ENGINE.md, workspace/prompts/write-script.md]
---

# repurpose — the repurposing-cascade generator

> Operationalizes the repurposing cascade in `workspace/CONTENT-ENGINE.md`. One long-form proof asset feeds the whole week. Input = a transcript/outline (case study or mechanism) **or** one podcast appearance. Output = the full cascade, scheduled, with the specifics intact. This is the downstream of `workspace/prompts/write-script.md` (its REPURPOSING section hands off here). The production-grade big brother is the **`/repurposing-cascade` skill** — use it for the full protocol; this pack is the fast lane.

```
1 YouTube long-form (case study / mechanism)  — or 1 podcast appearance
   ├── 6–8 Shorts / Reels   (the receipt · the cost-math · each architecture beat · the lesson · a contrarian clip)
   ├── 1–2 carousels         (the diagnostic-lens teach · the before→after teardown)
   ├── 1 X thread            (the build, post by post)
   ├── 1 LinkedIn post       (operator-reality angle — where the high-ticket buyers read)
   └── 1 email               (the case study, retold for the inbox)
```

---

## The two iron rules (read before anything)

### Rule 1 — Specificity must survive every format change
The specifics ARE the product on a proof channel. They do not get sanded off when the format gets smaller.

- **FAIL:** "great results for a client" · "helped a business with automation" · "recovered a lot of revenue" · "used some tools."
- **PASS:** "{{$X}}/mo recovered with {{named tool}} wired into {{named system}}."

**The survivors list** (per build, derived from the long-form). At minimum the **number + the tool + the mechanism** must appear in *every* asset that references the build — typically also the price band and the payback line. Pull this list once in STEP 1; check it against every artifact in validation.

**Never invent a number** (INV-6 / `workspace/PROOF-BANK.md`). Every figure traces to a `[VERIFIED]` row or ships as a `[CONFIRM: $X]` slot. A `[CONFIRM]` row stays tagged until verified — the cascade inherits that tag on every surface.

### Rule 2 — Anti-fatigue spacing (5–7 days)
One audience must not get the same case study twice inside a **5–7 day** window, or it fatigues and the proof stops converting.

- Stagger this cascade's **heavy same-audience assets** (the carousels, the LinkedIn post, the email) across the week — never two inside 48h on the same surface.
- Do **not** start the *next* case study's cascade on a given audience until this one's primary assets have cleared (~5–7 days). Rotate next week to a **different leak/build** so the feed never repeats itself.
- Shorts can run more frequently because they fan across distinct surfaces (YT Shorts / IG Reels / TikTok) — but the same Short doesn't hit the same audience twice in 48h.

---

## Before you generate — read these
1. `workspace/VOICE.md` — the spoken-voice rules, reserved-vocabulary discipline, banned vocab, the recurring frames, CTA architecture. Every surface obeys it. **Non-negotiable.**
2. `workspace/PROOF-BANK.md` — the row(s) this long-form is built on. Numbers trace here or ship as `[CONFIRM: …]`.
3. `workspace/CONTENT-ENGINE.md` — the cascade spec + the per-surface format menu.
4. `workspace/prompts/write-script.md` — the upstream generator; match its `(SHOW: …)` artifact discipline and proof-first language.

## Inputs (ask for any that are missing — don't guess)
- **The source.** The long-form transcript or beat-outline, or the podcast transcript. Timestamps if available.
- **Source type.** YouTube long-form (default) / podcast appearance.
- **PROOF-BANK row(s).** Which build is this? Flag any non-`[VERIFIED]` number.
- **Week-start date + cadence anchor.** The day the long-form drops (drives the calendar; default the channel's publish day per `workspace/STRATEGY.md`).
- **CTA destination.** book-a-call / pinned VSL (default for authority) / lead magnet — or the launch-window destination if `workspace/STRATEGY.md` declares one open.
- **Audience-overlap note.** Did last week's cascade hit the same social audience? (Enforces Rule 2.)

---

## STEP 1 — Atomize: pull the substance moments
Read the source and break it into discrete **substance moments** — the load-bearing units the whole cascade is cut from. Tag each with its type, a one-line summary, the verbatim specifics, and the source timestamp.

| Moment type | What it is | Surfaces it seeds |
|---|---|---|
| **The receipt** | Headline result + the artifact (payment screen / dashboard). The cold-open number. | Short #1 · thread T1 · carousel-B cover · email subject · LinkedIn hook |
| **The cost-math (the bleed)** | `workflow × frequency × cost`. Why the number is real. | Short #2 · thread T2 · carousel-B · email body |
| **The diagnosis** | The diagnostic lens applied — which leak, how you found it fast. | Short #3 · carousel-A (diagnostic) · thread T3–4 |
| **Architecture beat** (×2–3) | One stack move at a time — the tool + what it does. Keep tool names. | one Short each · thread T5–7 · carousel-B middle |
| **The result** | After-number, timeline, ROI, payback. | Short · thread T8 · email · LinkedIn |
| **The lesson** | The transferable principle (one of the channel's recurring frames). | Short · LinkedIn body · email close |
| **The contrarian line** | The "stop doing X" / wrong-framing line. | Short (highest-spread) · standalone post |
| **The honest cut** | "Here's the part I got wrong." Build-in-public trust mechanic. | Reel · standalone post · LinkedIn aside |

Output of STEP 1: a numbered moment list (`M1…Mn`, ~8–12 for a case study) + **the survivors list** (Rule 1).

## STEP 2 — Cascade: map moments → surfaces
Assign every surface to its anchoring moment(s). Each surface names the moment it's cut from and the source timestamp, so editing is "go to 4:00, cut to 5:15." No surface is generated from thin air — it's a recast of a real moment, tightened for its surface (X is terse; LinkedIn is narrative; carousel is visual-first; email is one-to-one).

## STEP 3 — Generate each surface

### Shorts / Reels — 6–8
For **each**, output: **(a) the hook line** (channel voice — full numbers, fragments, one-word punchline ok), **(b) which moment** it's cut from, **(c) the source timestamp**, **(d) the survivor specifics it must keep**.
- Default cut set for a case study: the receipt · the cost-math · the diagnosis · 2–3 architecture beats · the result · the lesson · the contrarian line. (Pick 6–8.)
- Hooks obey the banned-opener list (`workspace/prompts/write-hook.md`) and the no-BUT/THEREFORE rule. Cold open — never "In this video…".
- **Handoff:** the first-3s hook stack → `workspace/prompts/write-hook.md`; the 30–60s build → `workspace/prompts/ig-reel.md` (or the `/write-shorts-script` skill). This pack supplies the hook + moment + timestamp; the sibling builds the cut.

### Carousels — 1–2
For **each**, output: **the cover line + the angle + the slide skeleton.** Two default angles:
- **Carousel A — the diagnostic.** Cover: the channel's diagnostic-lens list-promise ("The {{N}} places every {{audience}} is leaking {{money/time}}"). One slide per leak; this build is the worked example for one of them. Angle = teach the lens.
- **Carousel B — the before→after teardown.** Cover = the loss-framed receipt. Slides: the bleed → the cost-math → the stack (tool by tool) → the result → CTA. Angle = prove this one build.
- **Handoff:** cover + angle + skeleton → `workspace/prompts/ig-carousel.md` for the full slide copy + design notes.

### X thread — 1 (post by post)
Output the **full thread, T1…Tn** (8–12 posts). T1 = the receipt (hook post, with the artifact image cue). Then bleed → diagnosis → each architecture beat → result → lesson → CTA. Rules: **no thread-emoji "1/n" framing, no "Bookmark this," no "Listen,"** (delete-on-sight shapes, `workspace/VOICE.md`). Each post stands alone. Specifics survive in T1 and recur. CTA post = imperative + link, proof-first.

### LinkedIn post — 1 (operator-reality angle)
~180–220 words. This is where the high-ticket operator buyers read — so lead with the **operator-reality / pricing / fulfillment** angle (the white space competitors skip): how it was scoped, priced, what was templated vs custom, what most operators get wrong. Narrative, not terse. Hook = the loss-framed number. Close = the lesson + a soft offer bridge (link in comments). **The earnings-disclosure frame** (`workspace/PROOF-BANK.md` honesty section) attaches **only if the CTA implies the *reader* will earn** that result — client-ROI statements about the creator's own build don't require it, but must trace to a `[VERIFIED]` row.

### Email — 1
Output **subject + body.** Subject = the loss-framed receipt, short. Body = the case study retold one-to-one: the receipt → the bleed → the stack (bulleted) → the result → one CTA (the long-form link + the destination). Plain, conversational, no hype. One ask.

## STEP 4 — Schedule (the 7-day anti-fatigue calendar)
Lay the cascade across the week from the long-form's drop day. Default skeleton (tune to the cadence anchor):

| Day | Surface(s) | Anchoring moment |
|---|---|---|
| **1** | YT long-form live · **X thread** · **Short 1** (YT Shorts + Reels + TikTok) | the receipt |
| **2** | Short 2 | the cost-math |
| **3** | **Carousel A** · Short 3 | the diagnostic / the diagnosis |
| **4** | **LinkedIn post** · Short 4 | operator-reality / architecture beat 1 |
| **5** | Short 5 · Short 6 | architecture beat 2 / the result |
| **6** | **Email** to the list | the full case study |
| **7** | **Carousel B** · Short 7 · Short 8 | before→after / the lesson / the contrarian |

**Spacing guard (Rule 2):** the two carousels land ≥4 days apart; no two heavy same-audience assets inside 48h; the **next** case study's cascade does not touch this audience before Day 8+, and rotates to a **different leak/build**.

## Output structure (the deliverable)
```
## CASCADE METADATA
Source (title/type) · PROOF-BANK row(s) · CTA destination · Week-start
Survivors list: [number · tool · mechanism · price · payback]
Banned-vocab scan: clear · Reserved-vocab: clear · Specificity gate: pass

## SUBSTANCE MOMENTS
M1…Mn — type · one-liner · verbatim specifics · timestamp

## CASCADE MAP
surface → moment(s) → timestamp

## SHORTS / REELS (6–8)
#n — hook · moment · timestamp · survivors kept · → write-hook / ig-reel

## CAROUSELS (1–2)
A/B — cover · angle · slide skeleton · → ig-carousel

## X THREAD
T1…Tn (full)

## LINKEDIN POST
(full — operator-reality)

## EMAIL
Subject + body (full)

## CALENDAR
7-day table + spacing guard

## OPEN SLOTS
every [CONFIRM: …] number, so nothing ships unverified
```

## Hard constraints (the cascade fails review if any break)
- **Specificity survives** every surface (Rule 1). Number + tool + mechanism in each referencing asset. No softening.
- **No invented numbers.** `[VERIFIED]` or `[CONFIRM: …]`; non-verified tags carry through to every surface.
- **Anti-fatigue spacing** enforced (Rule 2) — calendar honors the 5–7 day window.
- **Voice rules on every spoken/written surface;** no BUT/THEREFORE mid-sentence; full-number reads in VO; cold opens; no banned vocab (INV-7); no thread-emoji framing.
- **Reserved-vocabulary discipline:** simple proof-first language only on channel/social/email surfaces.
- **Earn-the-pitch:** every CTA is imperative + image, after the proof; offer bridges that imply *reader* earnings carry the disclosure frame; income never guaranteed (NEVER-11).
- **Every surface ties off** to one destination.
- **Signal ≥7** per artifact (`workspace/prompts/signal-check.md`); 9+ = indistinguishable from the creator.

---

## The prompt (runnable)
```
You are the channel's content multiplier. Read workspace/VOICE.md,
workspace/PROOF-BANK.md, and the cascade spec in workspace/CONTENT-ENGINE.md.
From the ONE source below, produce the full weekly cascade: 6–8 Shorts/Reels,
1–2 carousels, 1 X thread, 1 LinkedIn post, 1 email — scheduled across 7 days.

SOURCE (long-form transcript/outline, or podcast transcript): [paste]
PROOF-BANK row(s): [row + status]
CTA destination: [book-a-call / pinned VSL / lead magnet / launch destination]
Week-start: [date]   Same-audience last week?: [y/n]

Do this:
1. Atomize the source into substance moments (receipt, cost-math, diagnosis,
   each architecture beat, result, lesson, contrarian, honest cut) with
   timestamps. Build the SURVIVORS LIST (number + tool + mechanism + price +
   payback) — these must appear in every asset that references the build.
2. Map each surface to its anchoring moment(s) + timestamp.
3. Generate every surface in the channel voice (workspace/VOICE.md; proof-first
   language; no BUT/THEREFORE; full-number reads in VO; cold opens; no banned
   vocab). For each Short: hook + moment + timestamp + survivors kept. For each
   carousel: cover + angle + slide skeleton. X thread post-by-post. LinkedIn =
   operator-reality angle for the high-ticket buyer. Email = subject + body,
   one CTA.
4. Schedule across 7 days. Enforce 5–7 day anti-fatigue spacing: no two heavy
   same-audience assets inside 48h; don't start the next case study on this
   audience for 5–7 days.

Hard rules: specificity survives every format (never "great results for a
client" — keep "{{$X}}/mo via {{tool}} on {{system}}"). Never invent a number —
[VERIFIED] or [CONFIRM: …]; carry non-verified tags through. Disclosure frame
on any offer bridge implying reader earnings. Signal ≥7 each
(workspace/prompts/signal-check.md).

Output in the structure in repurpose.md → "Output structure". Hand Shorts to
write-hook.md / ig-reel.md and carousels to ig-carousel.md.
```

---

## Podcast variant (one appearance → the cascade)
Same machine, different atomization. Substance moments come from the **conversation**: the quotable contrarian lines, any receipts the creator drops, the origin-story beats. Timestamps reference the episode.
- Shorts = the most quotable 30–60s clips (the contrarian line, a receipt, a story beat) + a lower-third super of the claim.
- X thread = "the case I made on [podcast]," post by post.
- LinkedIn = the operator-reality takeaway, framed as "I said this on [podcast] and meant it."
- Email = "I went on [podcast] — here's the part worth your 3 minutes" + the clip link.
- Same two rules apply: specifics survive (real numbers/tools from what was actually said — never embellish a podcast claim), and space the clips 5–7 days on the same audience.

## Validation + handoffs
Before scheduling, run each artifact through the same gates as original content (`spec/voice-gates.md` + `workspace/prompts/signal-check.md`, ≥7):
1. **Specificity gate** — survivors list present in every referencing asset? Any softening → rewrite.
2. **Number gate** — every figure `[VERIFIED]` or flagged `[CONFIRM: …]`? Tags carried through?
3. **Voice gate** — no BUT/THEREFORE; full-number VO reads; no banned vocab; no thread-emoji framing; read-aloud clean.
4. **Reserved-vocab gate** — proof-first language only; no program vocabulary.
5. **Spacing gate** — calendar honors the 5–7 day window.

**Handoffs:** Shorts → `workspace/prompts/write-hook.md` + `workspace/prompts/ig-reel.md` · carousels → `workspace/prompts/ig-carousel.md` · the X thread, LinkedIn post, and email are produced inline here (no sibling generator). Upstream: `workspace/prompts/write-script.md` feeds this pack.

*v1 — generalized prompt-pack.*
