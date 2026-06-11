---
name: write-hook
type: prompt-pack
purpose: Generate ≥3 cold-open hook variants (≤15s / ~35–40 words) for a long-form video's first 0:00–0:15 — reusable as Shorts/Reels openers. Receipt / bleed / reframe; each opens a loop that closes before 50% and matches the title-thumbnail promise.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, workspace/CONTENT-ENGINE.md, workspace/prompts/write-script.md, workspace/prompts/title-thumbnail.md, spec/voice-gates.md]
---

# write-hook — the 0:00–0:15 cold-open generator

> The hook is the only part of the video most of the audience will ever judge. On an authority channel selling a high-ticket back-end offer to a skeptical, experienced buyer, the hook's job is **not** curiosity — it's *credibility in three seconds*. Lead with a receipt, a bleed, or a reframe. Show the artifact. Open the loop. Match the title. Then earn the rest. The bar is the cold open of the channel's canonical spoken-pass draft (named in `workspace/CALIBRATION.md`). The production-grade big brother is the `/write-hook` skill; this pack is the fast lane.

## Before you generate — read these
1. `workspace/VOICE.md` — the spoken-voice rules. Hook-critical: cold opens beat studio openers, key numbers read in full, fragments over essay sentences, no BUT/THEREFORE connectors, one-word punchlines, show-don't-claim (every hook carries an artifact). Gate: `spec/voice-gates.md`. **Non-negotiable.**
2. `workspace/PROOF-BANK.md` — every number in a hook traces to a row here, or it's a `[CONFIRM: $X]` slot. **Never invent a number.** A fuzzy figure caught by a high-ticket buyer kills the funnel.
3. `workspace/CONTENT-ENGINE.md` — the format you're hooking (Case Study / Mechanism / Live-Diagnosis / Sales-Reality / Founder-Story) + the title system the hook must match.

## What a hook is — the 3-beat anatomy (~35–40 words, ≤15s)
1. **The punch (0:00–0:03)** — the receipt, the bleed, or the reframe. A full-number dollar, a named broken workflow, or a contrarian belief. Cold. No runway, no greeting, no "in this video." (Reptilian beat — INV-11.)
2. **The stakes (0:03–0:09)** — one beat of specificity that makes it real and verifiable: the niche, the named tool/stack, the cost math, the artifact going on screen. (Limbic beat.)
3. **The loop-opener (0:09–0:15)** — the promise of what's coming, phrased as the *exact* thing the title promised. "Here's the exact build." / "Here's the {{timeframe}} number." An imperative or a flat declarative — never a question, never a subscribe ask.

**Two non-negotiables (a hook that misses either fails review):**
- **It opens a loop that closes before 50%.** The hook opens Loop 1 — the spine loop. That loop pays off before the video's midpoint and gets a one-line callback in the CTA (see the `/architect-loops` skill). Never open a loop the video doesn't pay off — that's the banned curiosity-gap.
- **It matches the title-thumbnail promise word-for-promise (INV-10).** The hook delivers the same number / same fix the title and thumbnail claim. Generate hooks *with* the title in hand (`workspace/prompts/title-thumbnail.md`) — they ship as one unit.

## Inputs (ask for any that are missing — don't guess)
- **The video + format** — what it's about; Case Study (default) / Mechanism / Live-Diagnosis / Sales-Reality / Founder-Story.
- **Mode:** authority / reach / hybrid (INV-12; `workspace/CALIBRATION.md` may override).
- **The title + thumbnail promise** the hook must match. (If not set yet, generate the title first.)
- **The proof** — which PROOF-BANK row(s) carry the number? Status: `[VERIFIED]` = use freely · `[CONFIRM]` = write it, flag `[CONFIRM: …]`, don't ship as fact · `[NEEDS-PROOF]` = don't hook with it at all.
- **The one loop** that is this video's spine — what question does the hook open that the body closes before 50%?
- **Destination** — book-a-call / pinned VSL (default) / lead magnet / launch-window destination. (Affects the CTA callback, not the hook itself, but keep it in view so the loop points at the right payoff.)

## The procedure
1. **Lock the proof + the title.** The hook is downstream of both. No number → no hook.
2. **Write all three core variants** — A (receipt), B (bleed), C (reframe). Each ≤15s / ~35–40 words, cold, 3-beat anatomy.
3. **Attach the artifact** — every variant gets a `(SHOW: …)` cue. The visual carries the trust.
4. **Name the loop** each opens and where it closes (mm:ss, before 50%), and the title it matches.
5. **Full-number pass** — every spoken figure read long-form ("nine thousand dollars a month," not "$9K").
6. **Banned-opener + banned-vocab scan** (list below + INV-7), then **read aloud** (`spec/voice-gates.md`). If your mouth feels weird, the line is wrong.
7. **(Optional) Extend the bank** to 5 variants if this is going to paid and needs ≥5 to A/B test.

## The 3 required variants
- **Variant A — the receipt.** Opens on the dollar amount / the result. Best when the number is big and `[VERIFIED]`.
- **Variant B — the bleed.** Opens on the broken workflow / the cost of inaction. Best for loss-frame titles (loss-aversion pulls roughly 2× the equivalent gain).
- **Variant C — the reframe.** Opens contrarian — the belief the skeptical buyer already half-holds, flipped. Best for reach mode and the "Stop doing X" title family.

## Output structure
```
## METADATA
Video · Format · Mode · Title+thumbnail promise the hook must match
Proof-bank row(s) + status · Loop it opens (→ close mm:ss, must be <50%)
Full-number reads: pass · Banned-opener scan: clear · Reserved-vocab: clear

## THE 3 HOOKS  (film one; A/B test two on paid)

### A — Receipt
[spoken lines — ≤15s / ~35–40 words — fragments, full numbers, no BUT/THEREFORE]
(SHOW: the artifact, timed)
Opens Loop 1 → closes (mm:ss) on [payoff]. Matches title: "[…]". Callback in CTA: "[…]"

### B — Bleed
[…]  (SHOW: …)  Opens Loop 1 → closes (mm:ss). Matches title: "[…]".

### C — Reframe
[…]  (SHOW: …)  Opens Loop 1 → closes (mm:ss). Matches title: "[…]".

## VOICE-CHECK — read-aloud markers
[lines that land · flag any clunky one + a swap]

## OPEN SLOTS
[every [CONFIRM: $X] so nothing ships unverified]

## (optional) EXTENDED BANK — +D, +E for paid A/B (5 variants total)
```

## Hard constraints (the hook fails review if any break)
- **≤15s / ~35–40 words** each. Over → cut to the punch.
- **Cold open.** None of the banned openers below. Lead with the receipt, the bleed, or the moment before the realization.
- **No invented numbers.** Every figure → a PROOF-BANK `[VERIFIED]` row, or a `[CONFIRM: …]` slot. Never hook with a `[NEEDS-PROOF]` figure.
- **Key numbers read in full** — long-form, spoken (`workspace/VOICE.md`).
- **Every hook carries a `(SHOW: …)` artifact.** No artifact = not a proof hook.
- **Opens a loop that closes before 50%** + gets a callback in the CTA. No unpaid curiosity gaps.
- **Matches the title-thumbnail promise (INV-10).** Same number, same fix, same niche.
- **Reserved-vocabulary discipline:** simple proof-first language only; proprietary program vocabulary never opens a video (`workspace/VOICE.md`).
- **Client ROI ≠ audience income.** A hook may state client ROI or the creator's own revenue. If a hook implies what the *viewer* will earn, it's an earnings claim — the disclosure frame (`workspace/PROOF-BANK.md` honesty section) lands later in the script, **never in the hook** — and income is never guaranteed (NEVER-11).
- **All voice rules**, read-aloud clean.

## Banned openers (strip on sight — each one is an instant authority-drop)
"What's up everyone" · "Welcome back to the channel" · "In this video I'll show you…" · "Hit subscribe before we dive in" · "Like and subscribe" · "What if I told you…" · "Imagine if…" · "The secret to…" · "Listen," · "Here's the thing about [vague]" · "In today's fast-paced world" · generic curiosity with no concrete payoff ("You won't believe what happened…"). Plus everything in `spec/BANNED-VOCABULARY.md` and `workspace/VOICE.md`.

## Fill-in templates
- **A — Receipt:** `{{full-number $}} a month. That's what {{a niche client}} was {{losing/bleeding}} on {{specific workflow}}. We fixed it with {{named stack}}. Here's the exact {{build/system}}.`
- **B — Bleed:** `This is {{a niche client's tool/screen}}. Every {{volume}} of {{workflow}} {{rolls/drops/breaks}} {{where}}. That gap was bleeding {{full-number $}} a month. Here's the fix we shipped — and the {{timeframe}} number.`
- **C — Reframe:** `Most {{niche operators}} treat {{the problem}} like {{the small framing}}. We treat it like {{full-number $}} a month {{walking out the door}}. {{One fix}} recovered {{all of it}}. Let me show you the whole system.`

## Extended bank — 5 variants (for paid A/B at ≥5)
A, B, C above, plus:
- **D — Pattern-interrupt:** `Stop. Before you {{common action}}, look at this. {{Specific number/stat}}. Most {{niche operators}} are {{making the mistake}} — while the real {{full-number $}} leak sits right next to it. Here's what we'd build first.`
- **E — Authority-credential** (the creator's own `[VERIFIED]` proof): `{{N}} clients. {{N}} months. On ads — zero. Here's the {{system/playbook}} behind it, start to finish.`

## Worked example — illustrative (invented; swap in your own PROOF-BANK rows)

**Setup:** Case Study, authority mode. PROOF-BANK row: a commercial cleaning company losing inbound quote requests that arrived after close of business; an auto-quote + scheduling flow recovered `{{$X}}/mo` — row status `[VERIFIED]`. **Title it matches:** *"This Cleaning Company Was Losing {{$X}} a Month After 5PM — Here's the Fix."* **Loop opened:** "what's the exact system?" → closes ~3:30 at the build reveal.

> **A — Receipt:** "{{Full-number dollars}} a month. That's what a commercial cleaning company was losing — every quote request that landed in an inbox nobody checked after five p.m. We fixed it with one automated quote-and-schedule flow. Here's the exact build."
> *(SHOW: the recovered-revenue line on the dashboard — 1.5s)* — Opens Loop 1 → closes 3:30 on the architecture reveal. Callback in CTA: "That's the build that recovered {{the number}} a month."

> **B — Bleed:** "This is a cleaning company's quote inbox. Every request that comes in after five p.m. sits unread till morning. By then half of them booked someone else. That gap was bleeding {{full-number dollars}} a month. Here's the fix — and the {{timeframe}} number."
> *(SHOW: the unread-request count climbing → cut to the booked-jobs calendar)*

> **C — Reframe:** "Most service businesses treat a missed quote request like a missed email. We treat it like {{full-number dollars}} a month walking out the door. One automated flow recovered all of it. Let me show you the whole system."
> *(SHOW: split screen — unread inbox vs the recovered-revenue dashboard)*

**OPEN SLOT pattern:** if the row were `[CONFIRM]`, every variant above would carry `[CONFIRM: tie {{$X}}/mo to the real client dashboard before shipping as fact]`.

*v1 — generalized prompt-pack.*
