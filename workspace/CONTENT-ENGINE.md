# CONTENT-ENGINE — what to make, how to produce it, how often

> **The "what shape" layer.** The format playbook under [STRATEGY.md](STRATEGY.md): the structure of each video archetype, the title + thumbnail systems, the cadence, and the repurposing cascade. Last in the reading order: [STRATEGY](STRATEGY.md) (why) → [VOICE](VOICE.md) (how it sounds) → [PROOF-BANK](PROOF-BANK.md) (what's true) → **CONTENT-ENGINE (what shape it takes)**. The operator prompt-packs that generate against this doc live in [`prompts/`](prompts/).
>
> Fill every `{{slot}}`. Worked examples are invented — delete each as you fill.

---

## The 5 format archetypes (priority order)

*Five archetypes ship with the OS. For each: keep the skeleton (it's retention-engineered), name your channel's variant, set the cadence, and confirm which [PROOF-BANK](PROOF-BANK.md) section feeds it. Your ranked ordering lives in [STRATEGY §4](STRATEGY.md). Every video declares its mode (INV-12) and carries ≥3 retention mechanisms in the first 30s (INV-11).*

### Format 1 — Client Case Study `★ usually the primary format`
*"This client paid us {{X}} — here's the exact system."* The receipt teardown.

**Your variant:** {{format_1_name}} · **Mode:** authority · **Cadence:** {{format_1_cadence}}

**Skeleton (≈8–12 min):**
1. **Cold open = the receipt.** State the result + show the artifact (VOICE rule 11).
2. **The bleed.** Name the problem + the cost math (workflow × frequency × cost).
3. **The diagnosis.** How you found it — your diagnostic lens, fast (VOICE §7 diagnostic frame).
4. **The build — on the board.** Walk the architecture visually; show it being drawn.
5. **The result.** After-number, timeline, payback.
6. **Lesson + CTA.** Imperative + image (VOICE rule 12 + §8).

**Production:** {{format_1_production}} — *e.g. whiteboard/screen-share + talking head + real dashboard B-roll.* **Fed by:** PROOF-BANK §2 — **rows must be `[VERIFIED]` before filming** (the filming gate). **Series play:** one per diagnostic category = an instant proof playlist (`/series-architect`).

> **Worked example (generic) — title:** "How a Skincare Brand Got Back $9,400/Month From Six Dead Email Flows (Full Teardown)"

### Format 2 — Mechanism / "How It's Built"
Proves depth *without* being a beginner tutorial. Frame as *"the architecture serious operators use,"* never *"how to start."*

**Your variant:** {{format_2_name}} · **Mode:** authority · **Cadence:** {{format_2_cadence}}

**Skeleton:** cold-open proof → the model (your named way of working) → the stack → the load-bearing detail (the thing only a practitioner would know) → how to think about it → CTA.
**Production:** {{format_2_production}} — *screen-recording heavy, intercut with talking head.* **Fed by:** PROOF-BANK §3.

> **Worked example (generic) — title:** "The 14-Point Audit I Run Before Touching Any Store's Email"

### Format 3 — Live Diagnosis / watch-me-work
Unscriptable proof of expertise. Raw production = trust; keep the dead ends in.

**Your variant:** {{format_3_name}} · **Mode:** hybrid · **Cadence:** {{format_3_cadence}} — *monthly is typical; high engagement*

**Skeleton:** take a real subject (a comment, a volunteer, a public example) → apply the diagnostic lens live → rank the fixes by dollar impact → "here's what I'd build first, and what it would cost."
**Production:** whiteboard / screen, low edit. **Fed by:** PROOF-BANK §4.

> **Worked example (generic) — title:** "Drop Your Store Below — I'll Find the Revenue Leak (Live Audit)"

### Format 4 — Operator Reality (sales / pricing / fulfillment) `the wedge`
Usually the white space (STRATEGY §6): competitors show *what to build*; almost nobody shows *how the business actually runs*. For a high-ticket buyer this is the most reassuring content there is.

**Your variant:** {{format_4_name}} · **Mode:** authority · **Cadence:** {{format_4_cadence}}

**Skeleton:** one operator truth, shown with real (anonymized) artifacts — how you scope, how you price, what a real call looks like, what you turn down.
**Production:** talking head + slides/board + redacted real documents. **Fed by:** PROOF-BANK §2 ladder + §6.

> **Worked example (generic) — title:** "How I Price a $21,000 Retention Program (The Exact Logic)"

### Format 5 — Founder / Story
The trust anchor + occasional reach. Powerful but thin as a steady diet — most channels run it monthly or less.

**Your variant:** {{format_5_name}} · **Mode:** reach · **Cadence:** {{format_5_cadence}}

**Skeleton:** one story beat from [VOICE §10](VOICE.md) (never the whole biography) → the lesson → soft bridge to an authority video (VOICE §8).
**Fed by:** PROOF-BANK §1 — *every number in the story is a tagged row.*

> **Worked example (generic) — title:** "I Spent Two Years on a Product Nobody Wanted. The Agency Took 60 Days."

---

## Short-form / secondary-platform formats

*The proven short-form patterns for THIS creator — pull from [PROOF-BANK §5](PROOF-BANK.md) (what already performed) rather than inventing. Scripts via `/write-shorts-script` (INV-11 shorts rule: 2 mechanisms in first 3s + 1 in 3–15s).*

| Format | Pattern | Source |
|---|---|---|
| {{short_format_1}} | {{pattern}} | PROOF-BANK §5 row {{n}} |
| {{short_format_2}} | {{pattern}} | PROOF-BANK §5 row {{n}} |

---

## Title system

*Lead with proof + specificity — a skeptical buyer reads vague clickbait as guru. Generate with `/title-options` (8 options on the [four-pillar split](../reference/frameworks/four-pillar-title-formula.md), 40/30/20/10) and package with `/title-thumbnail-pair` — title + thumbnail ship as one unit, promise-matched to the first 30s (INV-10, spec: [`title-thumbnail-promise`](../spec/title-thumbnail-promise.md)).*

- **Frameworks:** [`four-pillar-title-formula`](../reference/frameworks/four-pillar-title-formula.md) · [`curiosity-gap-formula`](../reference/frameworks/curiosity-gap-formula.md) · [`bound-promise-formula`](../reference/frameworks/bound-promise-formula.md) · [`contrarian-angle-formula`](../reference/frameworks/contrarian-angle-formula.md)
- **House patterns** *(fill with the 3–5 shapes that fit the formats above)*:
  - Receipt: `How {{we/[client type]}} [recovered/saved] $[number] — [full breakdown]`
  - Loss-frame: `This [segment] Was Losing $[number] — Here's the Fix` *(loss-aversion ≈ 2× pull)*
  - Mechanism: `The [N] [steps/files/checks] Inside [thing]` · `Why I [X], Not [Y]`
  - Contrarian: `Stop [common practice] in [year]`
  - {{house_pattern_5}}
- **Suffixes that work:** {{suffixes}} — *e.g. "(Full Breakdown)", "(The Exact Logic)", "(Live)"*
- **Avoid:** {{title_avoid_list}} — *e.g. the niche's commodity keyword as hero · curiosity-gap with no payoff · beginner framing on authority videos*

## Thumbnail system

*Brief with `/thumbnail-brief` (template: [`reference/templates/thumbnail-brief.md`](../reference/templates/thumbnail-brief.md)); the pair gate is `/title-thumbnail-pair`.*

- **Composition:** {{composition_rules}} — *e.g. high contrast, face 40–55% of frame, 2–3 words max*
- **Proof elements in frame:** {{proof_elements}} — *the number, the diagram, the dashboard, real tool logos*
- **Face grammar by format:** {{face_grammar}}
- **Never:** {{thumbnail_never_list}} — *e.g. generic stock imagery, cash-falling, lifestyle-flex props — instant authority drops for a skeptical buyer*

---

## Cadence

*Per platform: how often, and the mode mix it carries (mirror [STRATEGY §3](STRATEGY.md)). Don't trade depth for volume — one verified case study beats three commodity videos; the retention floor (INV-9, [`spec/retention-floor.md`](../spec/retention-floor.md)) is the quality gate.*

| Channel | Cadence | Mix |
|---|---|---|
| **YouTube long-form** | {{yt_cadence}} | {{yt_mix}} |
| **Shorts** | {{shorts_cadence}} | {{shorts_mix}} |
| **{{secondary_platform}}** | {{cadence}} | {{mix}} |
| **{{email_or_other}}** | {{cadence}} | {{mix}} |

> **Worked example (generic):** YouTube 1/week rotating Formats 1–2–4; Shorts 3/week cut from the cascade; LinkedIn daily (the attention surface per STRATEGY §2); email 1/week from the same cascade.

---

## The repurposing cascade (1 long-form → the week's content)

*Every long-form feeds everything else. Run `/repurposing-cascade` after every publish.*

```
1 YouTube long-form
   ├── 6–8 Shorts / Reels   (the receipt, the math, one build beat, the lesson, a contrarian clip…)
   ├── 1–2 carousels        (the diagnostic; the before→after)
   ├── 1 thread             (the build, beat by beat)
   ├── 1 LinkedIn post      (the operator-reality angle)
   └── 1 email              (to the list / nurture sequence)
```

**Rule: the specifics survive every format change.** The named number + named stack must not soften into "great results for a client" by the third derivative. Specificity is the whole point — every derivative still traces to its [PROOF-BANK](PROOF-BANK.md) row.

---

## The idea pipeline (where the next video comes from)

*The ranked output lives in [`pipeline/SLATE.md`](pipeline/SLATE.md); raw capture lands in [`pipeline/_INBOX.md`](pipeline/_INBOX.md); candidates are pitched in [`pipeline/PITCHES.md`](pipeline/PITCHES.md). Run `/idea-farm` to maintain a 20+ idea backlog, weighted by signal:*

0. **What actually performed** — [`published/_ANALYTICS.md`](published/_ANALYTICS.md). Real data outranks every guess; score every new idea against it first.
1. **Sales-call / support-call language** — the exact words buyers use → titles, hooks, objection-killer videos.
2. **Comments / DMs** — pain language, "can you do this for [my situation]?"
3. **Client + customer wins** — the case-study pipeline (PROOF-BANK §2 + § Proof-gather todo).
4. **The PROOF-BANK §2 backlog** — every row not yet filmed is a designed video waiting on verification.
5. **Competitor contrarian angles + live trends** — what everyone's saying that's wrong (checked against the STRATEGY §5 kill list before it enters the slate).

**The loop:** `published/_ANALYTICS.md` (what happened) → `pipeline/SLATE.md` (what's next, ranked) → script → film → `published/<date>--<slug>.md` (log it, from [`published/_TEMPLATE.md`](published/_TEMPLATE.md)) → back to `_ANALYTICS.md`. **Close it after every publish or the channel goes blind.** Draft packages in [`drafts/`](drafts/) render record-ready via [`scripts/render-package.mjs`](../scripts/render-package.mjs).

---

*Template v1 — once filled, stamp your own: `v1 — {{date}} — formats calibrated from {{sources}}`.*

*A Heuresis workspace template.*
