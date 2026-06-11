---
name: signal-check
type: prompt-pack
purpose: The objective 0–10 ship/no-ship quality gate for every artifact the workspace produces — script, hook, title, caption, carousel, reel, DM. Replaces subjective review. <7 does not ship.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, spec/voice-gates.md]
---

# signal-check — the content quality gate

> Run this on anything before it ships. It is the single objective check that replaces "does this feel right?" Score 0–10 across 5 dimensions, then run the 3 creator veto gates. **7+ ships. 4–6 recasts. 0–3 rejects. Any gate fail = reject regardless of score.** Referenced by `workspace/prompts/write-script.md` (target ≥7) and the blind-output step of `spec/voice-gates.md` — where **9+ = "indistinguishable from the creator."** This is the S/N root objective (`INVARIANTS.md`) made operational at the artifact level.

---

## The 4 principles (why the dimensions exist)

Every high-signal artifact obeys all four. They compound — drop one and it slides toward noise.

| Principle | The rule | The one-line test |
|---|---|---|
| **1. Specificity > abstraction** | Named tools, named (anonymized) clients, real numbers beat generalized claims. | Could you swap one industry for another and lose nothing? Then it's abstract. Recast. |
| **2. Density > length** | Information per word. Cut anything that doesn't advance understanding. | The **50% cut test**: can you cut half the words and keep 100% of the substance? Then the original was bloat. |
| **3. Asymmetry > balance** | Take a position; defend it with evidence. "On one hand / on the other" reads as no position. | By the end, does the reader know what you think the right answer is? No → recast. (Asymmetry ≠ contrarianism. The line is the evidence.) |
| **4. Verifiability > claim** | Every claim survives **"show me the receipt."** | For every number, is there a path to a `[VERIFIED]` PROOF-BANK row or the honesty frame in `workspace/PROOF-BANK.md`? No → cut or mark `[CONFIRM: …]`. |

**Compounding failure map** (which combo you land in when one drops):

| Have | Missing | Result |
|---|---|---|
| Specificity + Density | Asymmetry | Listicle bloat — facts, no position |
| Density + Asymmetry | **Verifiability** | **Guru-grade opinion** — strong claims, no receipts (the exact thing this channel is against) |
| Asymmetry + Verifiability | Specificity | Abstract argument — defensible but not concrete |
| Specificity + Verifiability | Density | Verbose case study — true but unreadable |
| **All four** | — | **Operator-grade. Channel canon.** |

---

## The Five-Tuple (the short-form gate)

The journalist questions. Every **short-form** artifact must encode all five — **miss 2 → fail.**

| Tuple | Captures | Canonical anchor shape (not this →) |
|---|---|---|
| **WHO** | The specific niche + revenue band + role | "{{city}} {{niche}}, {{revenue band}}" — not "businesses" |
| **WHAT** | The specific broken workflow or installed fix | "quote requests lost to an unread inbox" — not "low conversion" |
| **WHERE** | The named tool stack + data path | "{{form tool}} → an inbox nobody checks" — not "their lead flow" |
| **WHEN** | The frequency / timing / cadence | "{{N}}% of requests after close; first 30 days" — not "after hours" |
| **WHY** | The dollar/hour cost (workflow × frequency × cost) | "{{$X}}/mo recovered" — not "missed revenue" |

**Scope.** The five-tuple is the **hard gate on short-form**: hooks, titles, captions, carousel covers + slides, Reels, Shorts, DMs, and the **first 15s of any script**. For **long-form scripts**, score the five-tuple at the cold-open hook + each receipt claim, not across the whole runtime — long-form is governed by the 4 principles. (Doesn't apply to verbatim creator-voice transcripts — those stay verbatim per `workspace/VOICE.md`.)

---

## The 0–10 rubric — 5 dimensions, each 0–2

| Dimension (0–2) | 0 | 1 | 2 |
|---|---|---|---|
| **Specificity** | Pure abstraction ("businesses," "AI," "growth") | Some specifics, mostly generic ("a client we helped") | Named tool + named (anon) client + real number |
| **Density** | >30% cuttable; throat-clearing, hedges, adjective-stacks | 10–30% cuttable | <10% cuttable; every beat advances; passes the 50% cut test |
| **Asymmetry** | No position; balanced encyclopedia | Position implied but hedged ("might be worth considering") | Position taken + defended; reader knows the answer |
| **Verifiability** | Claim with no receipt ("studies show," "save tons of time") | Some claims sourced, others bare | Every number → a PROOF-BANK `[VERIFIED]` row **or** carries the honesty frame. Survives "show me the receipt." |
| **Five-tuple** | 3+ of WHO/WHAT/WHERE/WHEN/WHY missing | 1–2 missing, or present only by inference | All 5 explicit, with niche-canonical WHERE/WHEN anchors |

**TOTAL = /10.**

### Bands

| Score | Band | Action |
|---|---|---|
| **0–3** | NOISE | **Reject.** Generic slop. Re-invoke the generator with PROOF-BANK rows + `workspace/VOICE.md` pulled in. If output keeps landing here, the generator has a bug. |
| **4–6** | MIXED | **Recast.** Fix the single weakest dimension (below), re-score. Loop until 7+. (Respect the Max-2-Revisions cap — ALWAYS-17.) |
| **7** | Operator-grade floor | **Ship.** |
| **8** | Strong | Ship. |
| **9** | **Channel canon** | Ship. "Indistinguishable from the creator." (= the blind-output bar, `spec/voice-gates.md`.) |
| **10** | Hero-tier | Rare. Usually wants a creator voice-pass first. |

### Weakest-dimension → specific fix

| Weakest | The move |
|---|---|
| Specificity ≤1 | Add a named anon client + a real number + a named tool. |
| Density ≤1 | Cut 30%+. Kill throat-clearing, hedges, adjective stacks. Run the 50% cut test. |
| Asymmetry ≤1 | Pick a position. Defend it with the receipt. Delete every hedge. |
| Verifiability ≤1 | Trace every number to a PROOF-BANK `[VERIFIED]` row, attach the honesty frame, or mark `[CONFIRM: …]`. |
| Five-tuple ≤1 | Add the missing tuples using the niche-canonical anchors. |

*Tie at 0 → fix Five-tuple first: it's the structural root. Encoding WHO/WHAT/WHERE/WHEN/WHY drags Specificity and Verifiability up with it.*

---

## The creator veto layer (overrides the score)

Three hard gates. **Any one fails → reject, even at 9/10.** The score measures signal; these measure *whether it's the creator's*.

- **V1 — Voice compliance.** Any banned-vocab word (INV-7, `spec/BANNED-VOCABULARY.md`), banned phrase, or banned CTA shape per `workspace/VOICE.md` → fail. Also fails the hard spoken rules: **BUT/THEREFORE as mid-sentence connectors**, studio openers ("In this video…"), or any line that breaks rhythm read aloud (`spec/voice-gates.md`). → Strip and re-score.
- **V2 — Reserved-vocabulary discipline.** Proprietary program/category vocabulary (the right-column terms in `workspace/VOICE.md`) in proof-first content (channel, paid, social) → fail. Reserve program vocabulary for most-aware/program content only. *Example shape: a caption scores 8 but opens on the program's internal framework name. Veto. Recast to the simple proof-first phrasing.*
- **V3 — Verified numbers only.** Any number stated as fact that does **not** trace to a PROOF-BANK `[VERIFIED]` row, and does not carry the honesty frame or a `[CONFIRM: …]` slot → fail. **Never invent a number** (INV-5, INV-6). A skeptical high-ticket buyer catching one fuzzy figure kills the funnel.

---

## Output format

Run the gate. Return exactly this:

```
SIGNAL CHECK — <artifact type / name>

| Dimension     | Score |
|---------------|-------|
| Specificity   | _/2   |
| Density       | _/2   |
| Asymmetry     | _/2   |
| Verifiability | _/2   |
| Five-tuple    | _/2   |
| TOTAL         | _/10  |

Creator gates: PASS | FAIL → <gate + the exact violation>
Weakest dimension: <name> (_/2)
Fix: <the one move that raises it>
Verdict: SHIP (≥7) | RECAST (4–6) | REJECT (0–3)   ← gate FAIL = REJECT regardless of total
```

---

## Worked example 1 — channel canon (9/10) · *illustrative, invented*

Short-form, founder-story pillar. Assume the figures trace to `[VERIFIED]` PROOF-BANK rows in this channel's bank.

> *"I sent three hundred cold emails to land my first client. Four replies. Zero deals. So I stopped pitching strangers and published the teardown of our own onboarding instead. Eleven clients later, that teardown still books calls."*

| Dimension | Score | Reasoning |
|---|---|---|
| Specificity | 2 | "three hundred," "four replies," "eleven clients" — concrete; the cold-email-vs-published-teardown contrast is named, not abstract. |
| Density | 2 | Fragments, one-word-adjacent punchline ("Zero deals."), full-number reads. Nothing to cut — passes the 50% test. |
| Asymmetry | 2 | Clear defended position: published proof > cold outreach, proven by the eleven-client receipt. |
| Verifiability | 2 | Every number traces to a `[VERIFIED]` row. Survives "show me the receipt." |
| Five-tuple | 1 | WHO (operator, first-person), WHAT (cold outreach failed → published teardown worked), WHEN (first client → eleven clients later) encoded. WHERE (no tool stack) + WHY ($ cost) soft — it's a founder beat, not a build. |
| **TOTAL** | **9/10** | **Channel canon.** |

Creator gates: **PASS** — no banned vocab; no BUT/THEREFORE; proof-first language only; all numbers `[VERIFIED]`.
Weakest dimension: Five-tuple (1/2).
Fix: **none required.** Founder-story content runs a soft WHERE/WHY by design — bolting a tool stack and $ figure onto a founder beat would break the voice. 9 ships as canon.
Verdict: **SHIP.**

---

## Worked example 2 — generic slop (2/10) · *illustrative*

> *"AI is the biggest opportunity of the decade. We helped a business save 20 hours a week with automation — and you can too. Stop doing manual work. DM me to scale."*

| Dimension | Score | Reasoning |
|---|---|---|
| Specificity | 1 | "20 hours a week" is a number, but "a business," "automation," "AI" — no named tool, no named client, no niche. Mostly generic. |
| Density | 1 | Short, but "biggest opportunity of the decade," "and you can too," "Stop doing manual work" are platitudes. 10–30% filler. (Note the tell: slop writes "20 hours"; the spoken voice writes "twenty hours.") |
| Asymmetry | 0 | "Biggest opportunity of the decade" is consensus hype, not a defended position. No answer taken. |
| Verifiability | 0 | "save 20 hours a week" — no client, no math, no PROOF-BANK trace. Bare assertion. |
| Five-tuple | 0 | WHO (vague), WHAT (abstract), WHERE (no tool), WHEN (none), WHY (no $ math) — 3+ missing. |
| **TOTAL** | **2/10** | **NOISE.** |

Creator gates: **FAIL** (independent of the score) → **V1**: "biggest opportunity of the decade," "scale" as bare verb, "DM me to" (vague CTA). **V3**: "20 hours a week" traces to no PROOF-BANK row.
Weakest dimension: tie at 0 — Asymmetry, Verifiability, Five-tuple → fix **Five-tuple** first (structural root).
Fix: rebuild as a receipt. Pick a PROOF-BANK row; name the niche + tool + workflow + the workflow × frequency × cost math + the `[VERIFIED]` outcome.
Verdict: **REJECT.**

---

*v1 — generalized prompt-pack. The Verifiability dimension is wired to `workspace/PROOF-BANK.md`; the veto gates enforce `workspace/VOICE.md` via `spec/voice-gates.md`.*
