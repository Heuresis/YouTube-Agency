# Skills Catalog — 35 skills across 9 pillars

> Every skill is a runtime-agnostic decision procedure. Every skill declares the compartments it requires (per `spec/CONTEXT-THRESHOLDS.md`), the frameworks it applies, the verification gates it runs, and the agent persona that shapes its voice.
>
> Below is the catalog. Each skill folder contains: `SKILL.md` (the procedure) + `adapters/any.md` (universal-fallback runtime binding) + `examples/` (calibration targets, present for high-priority skills) + `prompts/` (interview-mode prompts where applicable).

---

## Foundations (5)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| build-niche | `/build-niche` | sonnet | foundations-head | niche-architect | n/a |
| build-audience | `/build-audience` | opus | foundations-head | audience-researcher | n/a |
| design-offer | `/design-offer` | opus | foundations-head | offer-architect | n/a |
| build-channel-architecture | `/build-channel-architecture` | opus | foundations-head | foundations-head | n/a |
| extract-creator-voice | `/extract-creator-voice` | opus | foundations-head | creator-voice-encoder | n/a |

## Content Engine (4)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| idea-farm | `/idea-farm` | sonnet | content-head | content-head | both |
| research-brief | `/research-brief` | sonnet | content-head | content-head | both |
| content-mix-strategy | `/content-mix-strategy` | sonnet | content-head | content-head | both |
| series-architect | `/series-architect` | opus | content-head | content-head | both |

## Hook & Retention (4)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| write-hook | `/write-hook` | sonnet | retention-head | hook-writer | both |
| architect-loops | `/architect-loops` | sonnet | retention-head | retention-head | both |
| retention-engineer | `/retention-engineer` | sonnet | retention-head | retention-head | both |
| audit-retention | `/audit-retention` | opus | retention-head | postmortem-analyst | both |

## Production (7)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| write-script ★ | `/write-script` | opus | content-head | script-writer | both |
| write-authority-script | `/write-authority-script` | opus | content-head | script-writer | authority |
| write-reach-script | `/write-reach-script` | opus | content-head | script-writer | reach |
| write-shorts-script | `/write-shorts-script` | sonnet | content-head | script-writer | both (shorts) |
| thumbnail-brief | `/thumbnail-brief` | sonnet | production-head | thumbnail-designer | both |
| title-thumbnail-pair | `/title-thumbnail-pair` | opus | production-head | thumbnail-designer | both |
| editor-brief | `/editor-brief` | sonnet | production-head | production-head | both |

★ `/write-script` is the **per-video default entry point** — the orchestrator that runs gather → strategy → structure → execute → reconcile → QA end-to-end and hands off to the mode-specific runtimes (`/write-authority-script`, `/write-reach-script`, `/write-shorts-script`) for mode-specific depth.

## Distribution (4)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| title-options | `/title-options` | sonnet | distribution-head | title-strategist | both |
| description-builder | `/description-builder` | haiku | distribution-head | distribution-head | both |
| publish-checklist | `/publish-checklist` | sonnet | distribution-head | distribution-head | both |
| repurposing-cascade | `/repurposing-cascade` | sonnet | distribution-head | distribution-head | both |

## Audience Building (3)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| community-cadence | `/community-cadence` | haiku | audience-head | community-manager | both |
| lead-magnet-bridge | `/lead-magnet-bridge` | sonnet | audience-head | audience-head | both |
| cross-niche-bridge | `/cross-niche-bridge` | sonnet | audience-head | audience-head | reach |

## Monetization & Sales (4)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| write-pinned-vsl | `/write-pinned-vsl` | opus | monetization-head | vsl-builder | authority |
| build-application-funnel | `/build-application-funnel` | sonnet | monetization-head | vsl-builder | n/a |
| sales-call-script | `/sales-call-script` | opus | monetization-head | monetization-head | n/a |
| sponsor-fit | `/sponsor-fit` | sonnet | monetization-head | monetization-head | n/a |

## Operations (1)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| build-sop | `/build-sop` | haiku | intelligence-head | intelligence-head | n/a |

## Intelligence (3)

| Skill | Command | Tier | Owner | Executor | Mode |
|---|---|---|---|---|---|
| kpi-dashboard | `/kpi-dashboard` | sonnet | intelligence-head | intelligence-head | n/a |
| leak-audit | `/leak-audit` | opus | intelligence-head | postmortem-analyst | n/a |
| library-compound | `/library-compound` | opus | intelligence-head | postmortem-analyst | n/a |

---

## Total: 35 skills across 9 pillars

## The per-video pipeline

The default execution path for one video, in INV-2 dependency order:

`/idea-farm` → `/research-brief` → `/write-script` ★ → `/title-thumbnail-pair` → `/description-builder` → `/editor-brief` → `/publish-checklist` → `/repurposing-cascade`

then post-publish: `/audit-retention` + `/library-compound` — the results re-rank the slate and compound the library for the next cycle.

`/write-script` is the per-video default entry point for the scripting stage: it applies the component logic of `/write-hook`, `/architect-loops`, and `/retention-engineer` in-line, and hands off to `/write-authority-script` / `/write-reach-script` / `/write-shorts-script` when mode-specific depth is warranted.

Every script that exits the pipeline passes the five voice gates — banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test · signal-check — per `spec/voice-gates.md`.

## Routing logic

When the user names what they need, the OS:
1. Classifies intent against the 35 skill descriptions
2. Reads the matching skill's `SKILL.md`
3. Runs the six-layer diagnostic (Audience / Offer / Topic-Hook / Retention / Distribution / Conversion)
4. Verifies compartment thresholds per the skill's `required_compartments`
5. Activates the agent_executor's persona overlay
6. Executes the Process section
7. Runs verification gates (formal + semantic + info-theoretic + skill-specific)
8. Returns output in the declared Output Format with metadata block (Signal 5-tuple, compartments cited, frameworks cited, confidence, gaps)

The OS routes per intent class:

1. **Strategic-layer intent** (niche / audience / offer / identity / channel architecture) → `foundations-head` directly. Skills: `/build-niche`, `/build-audience`, `/design-offer`, `/build-channel-architecture`, `/extract-creator-voice`.

2. **Content-arc intent** (idea / research / script / series / hook / loop / retention / thumbnail / editor brief / publish / title / description / repurposing) → `content-orchestrator` which sequences `content-head` → `retention-head` → `production-head` → `distribution-head` in INV-2 dependency order.

3. **Monetization-arc intent** (pinned VSL / application funnel / sales script / sponsor / lead-magnet bridge / community / cross-niche bridge) → `monetization-orchestrator` which coordinates `monetization-head` + `audience-head` + parts of `distribution-head`.

4. **Intelligence intent** (KPI / leak audit / library compound / SOP) → `intelligence-head` directly.

5. **Multi-pillar intent** → the relevant arc orchestrator decomposes and sequences.

If no skill matches, the OS asks a clarifying question. It never freestyles.

---

## Tier semantics

- **haiku** — high-frequency, low-cost skills (lookups, format generation, simple SOPs, descriptions, community cadence)
- **sonnet** — most production skills (idea-farm, research, hook, loops, retention engineering, scripts under 8 min, briefs, distribution)
- **opus** — strategic-layer + creative-novel-synthesis skills (audience build, offer design, channel architecture, series architecture, authority + reach + VSL scripts, title-thumbnail pair, leak audit, library compound)

The tier informs runtime cost / capability trade-offs. Most production runs default to sonnet; specific high-leverage skills opt into opus; lookups + simple SOPs use haiku.

---

## Mode semantics

- **authority** — the skill produces output for niched belief-installation videos calibrated to back-end conversion (`/write-authority-script`, `/write-pinned-vsl`)
- **reach** — the skill produces output for broad-appeal audience-growth videos calibrated to retention + channel-architecture routing (`/write-reach-script`, `/cross-niche-bridge`)
- **both** — the skill works in either mode; mode declared at invocation (most production / retention / distribution skills)
- **both (shorts)** — the skill produces Shorts in either mode style (`/write-shorts-script`)
- **n/a** — the skill operates outside the authority/reach distinction (foundations + intelligence + monetization-pre-content + operations)

---

## Compartment threshold gating

Every skill declares its required compartments + minimum % completeness. If thresholds aren't met, the skill refuses to execute and interview-mode activates. See `spec/CONTEXT-THRESHOLDS.md` for the authoritative gate table — every `SKILL.md` frontmatter must match.

## Verification gates per skill

Every skill output passes Triple-Layer Verification (formal 40 + semantic 35 + info-theoretic 25 = 100). Skills that produce production assets also pass:
- INV-9 retention-floor (predicted AVD ≥ channel band)
- INV-10 title-thumbnail-promise alignment
- INV-14 copyright/fair-use clear
- INV-15 sponsor disclosure (when applicable)

Script-producing skills additionally pass the five voice gates — banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7 — per `spec/voice-gates.md`.

See `reference/canonical/spec/QUALITY.md` and `reference/canonical/spec/BLIND-OUTPUT-TEST.md`.

---

*Version: 1.2.0 — 2026-06-11. The complete decision-procedure catalog of YouTube Content OS.*

*A Heuresis workspace template.*
