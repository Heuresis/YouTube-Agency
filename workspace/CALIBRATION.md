# CALIBRATION — how to run any skill on THIS channel

> The [35 skills](../skills/_INDEX.md) are **creator-agnostic** decision procedures. This file is the override layer that binds them to this channel: read it before running any skill. Precedence: [`INVARIANTS.md`](../INVARIANTS.md) (never overridable) → **this file + the workspace docs** → skill defaults. Where a skill default conflicts with the workspace, **the workspace wins.**
>
> In the per-video pipeline below, [`/write-script`](../skills/write-script/SKILL.md) is the per-video entry point: it runs gather → strategy → structure → execute → reconcile → QA, and hands off to the mode-specific runtimes — `/write-authority-script` · `/write-reach-script` · `/write-shorts-script` — per the declared mode (INV-12).
>
> Fill every `{{slot}}`. Worked examples are invented — delete each as you fill.

---

## 1. The 5 global overrides (apply to every skill)

### 1.1 Mode taxonomy + mix
Canonical taxonomy: **authority | reach | hybrid** (INV-12). A channel may rename its modes to match how it actually thinks — e.g. a proof-led channel might run **proof / reach / founder**, where *authority → proof* and *hybrid → founder*.

- **Taxonomy override:** {{mode_rename_map}} — *the mapping, stated as `canonical → channel term`. Leave empty to run canonical.*
- **Mix:** {{mode_mix}} — *must equal [STRATEGY §3](STRATEGY.md) and [`company.yaml`](../company.yaml) → `content_engine.mode_mix`.*
- **Propagation rule:** the override applies to **every** mode-aware skill (`/idea-farm`, `/content-mix-strategy`, the script skills, `/title-options`, `/title-thumbnail-pair`, …) and to every INV-12 mode declaration in their outputs. Translate at the boundary; never mix vocabularies inside one document.

> **Worked example (generic):** `authority → proof, reach → reach, hybrid → founder` at 60/25/15 — every skill output then declares `mode: proof`, not `mode: authority`.

### 1.2 Voice
Every script / hook / title / description / caption obeys [VOICE.md](VOICE.md) (the 14 spoken rules, phase-vocabulary, frames) and must pass the **five voice gates** ([`spec/voice-gates.md`](../spec/voice-gates.md)): banned-vocab clear · no spoken BUT/THEREFORE connectors · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7 ([`prompts/signal-check.md`](prompts/signal-check.md)).
- **Channel-specific voice overrides:** {{voice_overrides}} — *e.g. cadence exceptions, register notes, "no fragment-stacking — this creator speaks in run-ons."*

### 1.3 Numbers / proof
Every figure traces to a [PROOF-BANK.md](PROOF-BANK.md) row — `[VERIFIED]`, or it ships as a `[CREATOR: confirm X]` slot. Never invent (INV-6); every claim survives the screenshot test (INV-5); **the filming gate: nothing leaves [`pipeline/`](pipeline/) for filming until its proof rows are `[VERIFIED]`.**
- **Channel-specific claims discipline:** {{claims_rules}} — *e.g. client ROI ≠ customer income; the median disclosure (PROOF-BANK §7) attaches to every income claim; extra status tags declared here.*

### 1.4 Awareness default
Default target awareness for this channel: **{{default_awareness}}** (INV-13; [`five-awareness-levels-on-youtube`](../reference/frameworks/five-awareness-levels-on-youtube.md)).
- **Framing rules:** {{awareness_rules}} — *e.g. "buyer is solution-aware: no beginner framing on authority videos; reserved vocabulary (VOICE §4) only on most-aware surfaces."*

### 1.5 CTA routing
Mode → destination, from [VOICE §8](VOICE.md) + the funnel in [STRATEGY §2](STRATEGY.md):
- **authority →** {{authority_cta}} · **reach →** {{reach_cta}} · **hybrid →** {{hybrid_cta}}
- **Launch-window override:** {{launch_window_cta}} — *what replaces the default ask during a launch, and the dates it's active.*

---

## 2. Skill → workspace-input map

*What each major skill reads from this workspace beyond its own SKILL.md, plus the per-channel override. The creator-override column is yours — fill it as calibration decisions accumulate (an empty cell means "run the skill's default").*

| Skill | Reads from workspace | Creator override |
|---|---|---|
| `/idea-farm` | [`published/_ANALYTICS.md`](published/_ANALYTICS.md) (#0 source — what performed) + [`pipeline/SLATE.md`](pipeline/SLATE.md) + [CONTENT-ENGINE §idea-pipeline](CONTENT-ENGINE.md) + [PROOF-BANK §2](PROOF-BANK.md) + [STRATEGY §5 kill list](STRATEGY.md) | {{override}} — *the slate already exists: extend `SLATE.md`, don't start fresh* |
| `/research-brief` | [STRATEGY §6 wedge](STRATEGY.md) (competitors already profiled) + PROOF-BANK (every claim → a row) | {{override}} |
| `/content-mix-strategy` | [STRATEGY §3](STRATEGY.md) | {{override}} — *mix is set; re-run only to revise* |
| `/series-architect` | [CONTENT-ENGINE](CONTENT-ENGINE.md) formats + [STRATEGY §4](STRATEGY.md) | {{override}} |
| `/write-hook` | [VOICE](VOICE.md) + PROOF-BANK + the hook pack in [`prompts/`](prompts/) | {{override}} — *e.g. which hook formulas fit this creator* |
| `/write-script` (mode-appropriate) | VOICE + PROOF-BANK + CONTENT-ENGINE + STRATEGY, in that order | {{override}} |
| `/architect-loops` + `/retention-engineer` | CONTENT-ENGINE format skeletons + [`published/_ANALYTICS.md`](published/_ANALYTICS.md) retention reads | {{override}} — *e.g. the standing retention finding* |
| `/title-options` | [CONTENT-ENGINE §title-system](CONTENT-ENGINE.md) (house patterns) + PROOF-BANK | {{override}} — *e.g. house patterns override the generic 40/30/20/10 split* |
| `/title-thumbnail-pair` + `/thumbnail-brief` | CONTENT-ENGINE §title + §thumbnail + [`spec/title-thumbnail-promise.md`](../spec/title-thumbnail-promise.md) (INV-10) | {{override}} |
| `/description-builder` | CONTENT-ENGINE + STRATEGY §2 (the link stack's destination) | {{override}} — *e.g. keyword to avoid as hero, above-fold register* |
| `/editor-brief` | CONTENT-ENGINE production notes + the package in [`drafts/`](drafts/) | {{override}} — *e.g. every claim pairs to a `(SHOW:)` artifact* |
| `/publish-checklist` | PROOF-BANK (the `[VERIFIED]` gate) + open `[CREATOR: confirm]` slots + INV-10 | {{override}} — *block publish until every confirm-slot closes* |
| `/repurposing-cascade` | [CONTENT-ENGINE §cascade](CONTENT-ENGINE.md) + VOICE | {{override}} — *specifics survive every cut* |

---

## 3. The performance-intelligence trio

**`/leak-audit` · `/kpi-dashboard` · `/audit-retention` all read [`published/_ANALYTICS.md`](published/_ANALYTICS.md)** — the live scoreboard. Don't re-derive the channel state; it's logged there. Update it after every publish; `/library-compound` then folds the patterns back into the compartments.

| Skill | Use for | Channel override |
|---|---|---|
| `/leak-audit` | The six-layer audit — Audience / Offer / Topic-Hook / Retention / Distribution / Conversion (INV-1). The constraint is rarely where the creator looks. | {{current_constraint_read}} |
| `/kpi-dashboard` | The metric stack → `_ANALYTICS.md`. | {{kpi_override}} — *north star from [STRATEGY §2](STRATEGY.md); name the secondary signals (CTR, % viewed, subs/video)* |
| `/audit-retention` | Post-publish curve diagnosis → fix-path. | {{standing_retention_finding}} — *e.g. "hook holds, the leak is the 0:30→3:00 setup stretch"* |

**The loop:** `_ANALYTICS.md` → [`pipeline/SLATE.md`](pipeline/SLATE.md) → script → film → `published/<date>--<slug>.md` → `_ANALYTICS.md`. Close it after every publish.

---

## 4. Foundations — already encoded

`build-niche · build-audience · design-offer · build-channel-architecture · extract-creator-voice · build-application-funnel · sales-call-script · sponsor-fit · lead-magnet-bridge · cross-niche-bridge · community-cadence · build-sop` produce the outputs this workspace **already holds** — encoded into [`company.yaml`](../company.yaml) + [STRATEGY.md](STRATEGY.md) + [VOICE.md](VOICE.md) + [PROOF-BANK.md](PROOF-BANK.md) at intake. **Re-run them only to *revise* a foundation, never from scratch** — a from-scratch run that ignores the workspace will contradict it, and that contradiction is P0 drag ([STATUS §Next](STATUS.md)).

---

## 5. The per-video pipeline (what to run, in order)

```
/idea-farm            → pick the idea (mode-declared, kill-list-checked, scored)
/research-brief       → competitive white-space + claim inventory (every claim → a PROOF-BANK row)
/write-script         → the script (mode-appropriate skill; /write-hook + /architect-loops feed it)
/title-thumbnail-pair → packaging as one unit, INV-10 promise-matched to the first 30s
/description-builder  → description + chapters + link stack
/editor-brief         → production handoff (SHOW: cues, B-roll, board visuals)
/publish-checklist    → close every [CREATOR: confirm] slot, [VERIFIED] gate, 17-invariant pass, ship
/repurposing-cascade  → 6–8 shorts + 1–2 carousels + thread + LinkedIn + email
— after publish —
/audit-retention  ·  /library-compound     (+ standing: /kpi-dashboard, /leak-audit — §3)
```

Draft packages live in [`drafts/`](drafts/) and render record-ready via [`scripts/render-package.mjs`](../scripts/render-package.mjs); proof-gated scripts move to [`film-this-week/`](film-this-week/); published videos get logged from [`published/_TEMPLATE.md`](published/_TEMPLATE.md).

---

*Template v1 — once filled, stamp your own: `v1 — {{date}} — calibrated against {{workspace_docs_version}}`.*

*A Heuresis workspace template.*
