# `workspace/` — the creator operating layer

> This folder is **the per-creator instance** of the OS: the living documents that the generic [skills](../skills/_INDEX.md) bind to when they produce anything for this channel. The rest of the repo is the engine — the 17 invariants, the skills, the craft library, the quality specs. This folder is the channel: its strategy, its voice, its proof, its formats, its pipeline, and its scoreboard. Everything here ships blank with `{{fill_slots}}` and one invented worked example per section; fill it at intake and it becomes the channel's brain.
>
> **Two rules before anything else:** read [CALIBRATION.md](CALIBRATION.md) before running any skill, and never push a filled workspace (real client data, real numbers) to a public remote (INVARIANTS, NEVER rule 10).

---

## Read in this order

| # | File | What it is | When you touch it |
|---|---|---|---|
| 1 | **[STRATEGY.md](STRATEGY.md)** | *Why* the channel exists: the job statement, the funnel + buyer, the mode mix, the formats ranked, the kill list, the calendar. | Read once to orient; re-read when priorities feel fuzzy. |
| 2 | **[VOICE.md](VOICE.md)** | The one card to read **before writing any line**: the 14 spoken-voice rules, phase-vocabulary discipline, the frames, the Blind Output Test. | **Every** generation. Non-negotiable. |
| 3 | **[PROOF-BANK.md](PROOF-BANK.md)** | The single source of truth for every number and story. Status-tagged `[VERIFIED]` / `[CONFIRM]` / `[NEEDS-PROOF]`; ends in the proof-gather todo. | Every time a script needs a number. **Never invent one** (INV-6). |
| 4 | **[CONTENT-ENGINE.md](CONTENT-ENGINE.md)** | The format playbook: 5 archetypes, title + thumbnail systems, cadence, the repurposing cascade, the idea pipeline. | When deciding *what* to make and *how* it's structured. |

The four compound: **STRATEGY** says why → **VOICE** says how it sounds → **PROOF-BANK** says what's true → **CONTENT-ENGINE** says what shape it takes. For *what's done / what's next*, open [STATUS.md](STATUS.md) first on every return visit. For *how the skills run here*, [CALIBRATION.md](CALIBRATION.md).

---

## Anatomy — every file and folder

| Path | What lives there |
|---|---|
| [`README.md`](README.md) | This file — the front door. |
| [`STRATEGY.md`](STRATEGY.md) | The why: job, funnel, buyer, mode mix, kill list, calendar, forkability. |
| [`VOICE.md`](VOICE.md) | The how-it-sounds: spoken rules, vocabulary discipline, frames, CTA architecture, tone map, story beats, the ship gate. |
| [`PROOF-BANK.md`](PROOF-BANK.md) | The what's-true: tagged claims, the case-study table, the offer reconciliation, the honesty layer, the proof-gather todo. |
| [`CONTENT-ENGINE.md`](CONTENT-ENGINE.md) | The what-shape: format archetypes, packaging systems, cadence, cascade, idea sources. |
| [`STATUS.md`](STATUS.md) | The reconciliation ledger: mandate → built → pruned → next (P0–P4) + the sauce-mining ledger. |
| [`CALIBRATION.md`](CALIBRATION.md) | The skill-override layer: 5 global overrides, the skill→input map, the intelligence trio, the per-video pipeline. |
| [`prompts/`](prompts/) | The 9 operator prompt-packs — self-contained generators for scripts, hooks, packaging, repurposing, and short-form social, plus [`signal-check.md`](prompts/signal-check.md), the 0–10 ship/no-ship gate that runs on everything. |
| [`pipeline/`](pipeline/) | The forward slate: [`SLATE.md`](pipeline/SLATE.md) (ranked next videos), [`PITCHES.md`](pipeline/PITCHES.md) (candidates argued for), [`_INBOX.md`](pipeline/_INBOX.md) (raw idea capture, never lost, never authoritative). |
| [`film-this-week/`](film-this-week/) | On-deck scripts that passed the proof gate — `[VERIFIED]` numbers only. If it's in here, it's filmable. |
| [`drafts/`](drafts/) | Scripts + packaging in progress. Packages render record-ready via [`scripts/render-package.mjs`](../scripts/render-package.mjs). |
| [`published/`](published/) | The scoreboard: one record per live video (from [`_TEMPLATE.md`](published/_TEMPLATE.md)) + [`_ANALYTICS.md`](published/_ANALYTICS.md), the live reads that drive the slate. |

---

## The lifecycle (how a video moves through this folder)

```
 intake                    profile                      pipeline
 (sources, calls,    →     (company.yaml +        →     (_INBOX → PITCHES → SLATE,
  comments, analytics)      the 4 core docs)             ranked by /idea-farm)
                                                              │
                                                              ▼  proof rows [VERIFIED] — the gate
 analytics feedback        published/                    film-this-week/ → drafts/
 (/audit-retention,  ◄     (per-video record      ◄     (script → packaging →
  /kpi-dashboard,           + _ANALYTICS.md)             render-package → film → publish)
  /leak-audit,
  /library-compound)
        │
        └──► back into pipeline/SLATE.md + the core docs (close the loop after every publish)
```

The skill sequence that drives each pass lives in [CALIBRATION §5](CALIBRATION.md): `/idea-farm → /research-brief → /write-script → /title-thumbnail-pair → /description-builder → /editor-brief → /publish-checklist → /repurposing-cascade`, then `/audit-retention` + `/library-compound` post-publish.

> **Worked example (generic — invented B2B-services founder):** Monday, `/idea-farm` promotes "the $9,400/mo flow-rebuild teardown" from SLATE (its PROOF-BANK row went `[VERIFIED]` Friday when the client dashboard screenshot landed). The script clears the voice gates at 8/10, the package renders, it films Wednesday, publishes Friday, the cascade cuts 7 shorts + a thread, and Sunday's `_ANALYTICS.md` update notes the 0:30 hold beat the channel median — which re-ranks next week's slate.

---

## How this relates to `company.yaml`

Two encodings, one channel, different jobs:

- **[`company.yaml`](../company.yaml)** is the **structured encoding the OS boots from** — the compartments, completeness scoring, and threshold gates (INV-3) that decide *which skills are allowed to run*. Machine-shaped: fields, lists, percentages.
- **`workspace/`** is the **living operating layer** those skills read *while producing* — prose, tables, and judgment that don't fit in YAML: the kill list's reasoning, the phase-vocabulary table, the proof rows, the standing retention finding.

They must agree. The intake `/build-*` skills write `company.yaml` and seed these docs; operating sessions evolve these docs and mirror anything structural back (mode mix, voice fields, offer economics). When they drift, reconcile immediately and log it in [STATUS §Pruned](STATUS.md) — two disagreeing strategy layers is the definition of P0 drag.

---

## Filling this workspace (first run)

1. Run intake: `/build-niche` → `/build-audience` → `/design-offer` → `/build-channel-architecture` → `/extract-creator-voice` (INV-2 order). These populate [`company.yaml`](../company.yaml) and seed the 4 core docs.
2. Fill the remaining `{{slots}}` by hand from transcripts and source material — log every mined source in [STATUS §Sauce-mining ledger](STATUS.md).
3. Delete the worked examples as you go — they're invented calibration targets, not yours.
4. Set the overrides in [CALIBRATION.md](CALIBRATION.md), seed [`pipeline/SLATE.md`](pipeline/SLATE.md) with `/idea-farm`, and start the loop.

---

*A Heuresis workspace template.*
