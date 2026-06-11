---
name: title-thumbnail
type: prompt-pack
purpose: Generate 5 ranked title options (one per pattern) + 3 thumbnail concepts for any video, promise-matched to the first 30 seconds (INV-10).
reads: [workspace/VOICE.md, workspace/CONTENT-ENGINE.md, workspace/PROOF-BANK.md, INVARIANTS.md]
---

# title-thumbnail — packaging generator (5 titles + 3 thumbnails)

> Produces the **packaging** for a video: 5 ranked titles (one per pattern) and 3 thumbnail concepts. The packaging exists to serve the **first 30 seconds** — never the other way around. On an authority channel for skeptical high-ticket buyers, a vague-clickbait title reads as guru and a mismatched thumbnail gets the channel punished by the algorithm. Lead with proof. Match the open. This pack operationalizes the title + thumbnail systems in `workspace/CONTENT-ENGINE.md`; the production-grade big brother is the `/title-thumbnail-pair` skill (with `/title-options` and `/thumbnail-brief` as deep-dives).

## Before you generate — read these
1. `workspace/VOICE.md` — reserved-vocabulary discipline + banned vocab. Titles obey it too.
2. `workspace/CONTENT-ENGINE.md` — the title system + thumbnail system this pack operationalizes.
3. `workspace/PROOF-BANK.md` — every number in a title/thumbnail traces to a row here. **Never invent one.**
4. `INVARIANTS.md` — **INV-10** (promise alignment) is the law this pack enforces; INV-5/6/7 also bind. The full spec: `spec/title-thumbnail-promise.md`.

## The one invariant — PROMISE MATCH (INV-10)
**The title and thumbnail must promise exactly what the first 30 seconds delivers — in promise *type*, *intensity*, and *topic*.** CTR-driven first-watch with low retention tells the algorithm the video lied; it then buries the channel. So:

> A title the open can't cash is **cut, not softened, not ranked.** If the packaging out-promises the script, you fix the packaging — you do not stretch the open to chase it.

The check, run before shipping: read the title's promise → read the thumbnail's visual promise → read the first 30s → all three match. If not, revise the packaging.

## Inputs (ask for any that are missing — don't guess)
- **The first-30s promise** — the locked cold-open, or the one-line promise if the script isn't written yet. *Everything is ranked against this.*
- **The proof** — which PROOF-BANK row(s): the number(s), the niche, the stack. If a figure isn't `[VERIFIED]`, carry the `[CONFIRM: …]` marker into the title slot.
- **Format + mode** — Case Study / Mechanism / Sales-Reality (per `workspace/CONTENT-ENGINE.md`); authority / reach / hybrid (INV-12; `workspace/CALIBRATION.md` may override).
- **Awareness target** — proof videos skew solution-/product-aware (no beginner framing) — INV-13.

## The 5 title patterns (generate one of each)
| Pattern | Shape (template) | The promise the first 30s MUST keep |
|---|---|---|
| **Loss-frame** | `This {{niche}} Was Losing {{$bleed}} — Here's the Fix` | cold-open names the bleed + the cost math (workflow × frequency × cost) |
| **Receipt** | `How We {{Recovered/Saved}} {{$number}} for a {{niche}} (Full System Breakdown)` | cold-open states the result + shows the artifact (payment screen / dashboard) |
| **Mechanism** | `The {{N}} {{files/steps/parts}} Inside {{thing}}` · `Why I Build {{X}}, Not {{Y}}` | cold-open shows the architecture/stack — *serious-build* frame, never beginner |
| **Contrarian "Stop X"** | `Stop {{common practice}} in {{year}} ({{do this instead}})` | cold-open opens *contrarian* — the wrong thing everyone does, named first |
| **Curiosity-with-payoff** | `The {{$small}} {{tool/thing}} That {{big specific outcome}}` | cold-open pays the gap off fast — the tool *and* the number both land early |

## Ranking logic
- **Loss-aversion pulls roughly 2× the equivalent gain.** When the case has a clean, ownable **bleed number**, **loss-frame is the default #1**, receipt #2. When there's no single bleed number (most Mechanism / Sales-Reality videos), lead **Mechanism** or **Contrarian**.
- **Tie-breakers, in order:** (1) **promise-match** — a title that out-promises the open is *disqualified, not ranked* (INV-10); (2) **number-in-title** beats no-number; (3) **awareness-fit** — proof skews solution-/product-aware, kill beginner framing; (4) **specificity** — named niche + named stack + the channel's real price bands (per `workspace/PROOF-BANK.md`), never vague money language.
- Never rank a title the first 30s can't cash. Cut it.

## Title rules (proof-first) + banned in titles
- Lead with **proof + specificity**. The buyer is skeptical; vague clickbait reads as guru and drops authority.
- **Never:** the channel's commodity keyword as the hero term (see `workspace/STRATEGY.md` keyword notes) · beginner framing on a proof video ("How to start…", "…for Beginners") · pure curiosity-gap with no payoff · vague money language ("five-figure deals") — always the real band.
- Reserve proprietary program vocabulary for most-aware content — never in a proof-channel title (`workspace/VOICE.md` reserved-vocabulary discipline).
- **Banned words** (INV-7 + `spec/BANNED-VOCABULARY.md`): unlock · supercharge · "you won't believe" · "this changed everything" · "blow your mind" · "smash subscribe" · hype-stack money phrases ("$50K in 30 days") · "passive income" · "easy"/"simple" (of the work) · "guaranteed"/"risk-free."
- **Suffixes that work:** "(Full System Breakdown)" · "(The Exact Logic)" · "(Live)".

## The 3 thumbnail concepts (generate all three; pair each to a title pattern)
Each concept specifies: **composition · face grammar · 2–3 word text · object/number/diagram in frame · color.** Baseline for all three: high contrast, dark or saturated-brand background, face 40–55% of frame, 2–3 words max, one focal number/diagram, real tool logos as proof where licensed.

**Concept A — The Receipt** *(pairs Loss-frame / Receipt titles)*
- **Composition:** face one side (~45–55%); other half = the number + the artifact (payment screen / dashboard / the bleed log).
- **Face grammar:** open/shock — the "look at this" reveal face, eyes to camera.
- **2–3 word text:** the dollar number as the hero (+ optional one-word kicker).
- **Object/number/diagram:** the dashboard or bleed artifact; a real tool logo in a corner as proof.
- **Color:** near-black bg, the number in one saturated brand accent; red micro-accent *only* on the loss.

**Concept B — The Diagram** *(pairs Mechanism titles)*
- **Composition:** face to one side, sharp + pointing at a clean 3-node flow diagram (input → system → record).
- **Face grammar:** focused, not shocked — the "here's how it works" face.
- **2–3 word text:** "THE BUILD" or the transform (`{{$before}} → {{$after}}`).
- **Object/number/diagram:** the architecture diagram (3 nodes, arrows), tool logos on the nodes.
- **Color:** saturated-brand background, white diagram strokes, one accent on the payoff node.

**Concept C — The Contrarian** *(pairs "Stop X" titles)*
- **Composition:** face centered/large; the "wrong thing" small with a red strike-through (the crossed-out tool / practice / word).
- **Face grammar:** contrarian-stare — flat, direct, slight challenge.
- **2–3 word text:** "STOP THIS" or "STOP {{X}}".
- **Object/number/diagram:** the struck-through wrong practice + (optional) the right alternative beside it.
- **Color:** dark bg, red strike as the only loud color.

## Thumbnail rules + the NEVER list
- The thumbnail's visual promise must equal the title's verbal promise must equal the first 30s (INV-10). Text and title must not promise two different videos.
- **NEVER:** generic AI stock (robot hands, glowing blue brains, circuit-board overlays) · cash-falling / money-rain / fanned bills · lambo / mansion / yacht / private jet · more than 3 words · a number the script can't show on screen. Each one is an instant authority-drop, guru-coded, and nukes the skeptical buyer's trust.

## The procedure
1. **Anchor on the first 30s** — locked cold-open or the one-line promise. The packaging serves the open.
2. **Pull the proof** from the PROOF-BANK row — number(s), niche, stack. Never invent; carry any non-`[VERIFIED]` marker forward.
3. **Generate one title per pattern** (all 5). Proof-first language; run the banned-in-titles scan.
4. **Rank** — loss-aversion weighting + tie-breakers. **Disqualify** (don't rank) any title the open can't cash.
5. **Generate 3 thumbnails**, each paired to a top title pattern; specify composition / face grammar / 2–3 word text / object-number-diagram / color.
6. **Promise-match gate (INV-10)** — top title × top thumbnail × first-30s: type, intensity, topic all match. If not, revise the packaging, not the open.
7. **Flag** every unverified figure as `[CONFIRM: $X]` in its slot.

## Output structure
```
## PACKAGING — [video working title]
Format · Mode (authority/reach/hybrid) · Awareness target · First-30s promise (1 line)
Proof-bank row(s) used · Banned-in-titles scan: clear · Promise-match gate (INV-10): pass

## 5 TITLES (ranked)
1. [Pattern] "…"  — why #1 (promise-match + loss/specificity note)
2. [Pattern] "…"
3. [Pattern] "…"
4. [Pattern] "…"
5. [Pattern] "…"   (— DQ note if it out-promises the open)

## 3 THUMBNAILS
A — [pairs title #_] composition · face grammar · TEXT (2–3 words) · object/number/diagram · color
B — [pairs title #_] …
C — [pairs title #_] …

## PROMISE-MATCH CHECK (INV-10)
Top title promise ↔ top thumbnail promise ↔ first-30s delivery — match: yes/no per dimension (topic / format / intensity / specificity)

## OPEN SLOTS
[every [CONFIRM: $X] slot]
```

## Hard constraints (packaging fails review if any break)
- **PROMISE MATCH (INV-10) is the law.** Title + thumbnail promise == first-30s delivery, in type, intensity, topic. A title the open can't cash is cut, not ranked.
- **No invented numbers** (INV-6). Every figure → a `[VERIFIED]` row or a `[CONFIRM: …]` slot. A `[CONFIRM]` figure is not "this exact client" until verified.
- **Proof-first language only.** No commodity hero keyword. No beginner framing on proof videos. Program vocabulary stays in most-aware content.
- **Loss-aversion default:** a clean bleed number → loss-frame ranks #1.
- **Thumbnail NEVER list holds**, every time. **Banned vocab** scrubbed from every title (INV-7).
- **Real price bands only** (per `workspace/PROOF-BANK.md`) — never vague "five-figure."

## Worked example — illustrative (invented; swap in your own PROOF-BANK row)
*Format: Case Study · Mode: authority · Awareness: solution-aware. First-30s promise: "We recovered {{$X}}/mo for a commercial cleaning company with an after-hours auto-quote flow — here's the exact system." Row status `[VERIFIED]`.*

1. **[Loss-frame]** "This Cleaning Company Was Losing {{$X}} a Month After 5PM — Here's the Fix" — #1: clean ownable bleed + loss-aversion pull; matches a cold-open that names the bleed.
2. **[Receipt]** "How We Recovered {{$X}}/Month for a Cleaning Company (Full System Breakdown)" — #2: the primary proof-channel shape; matches the receipt cold-open exactly.
3. **[Curiosity-with-payoff]** "The {{$small}}/Month Flow That Recovered {{$X}} a Month" — #3: small-cost/large-return gap; only if the build reveals the run cost early.
4. **[Mechanism]** "Why Every Service Business Should Auto-Quote After Hours" — #4: architecture frame; ranks lower for a single-client case study.
5. **[Contrarian]** "Stop Letting Quote Requests Sit Overnight ({{niche}})" — **DQ for this cut (INV-10):** a receipt cold-open doesn't open contrarian, so this out-promises a rant the video never delivers. Rank it only if the first 30s is rebuilt to open contrarian.

*v1 — generalized prompt-pack.*
