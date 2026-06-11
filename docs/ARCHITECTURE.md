# Architecture — File System Walkthrough

> A short user-facing walkthrough of the workspace structure. For the full architectural reference, see `reference/canonical/AGENT-ARCHITECTURE.md`.

---

## Top-level layout

```
youtube-agency/
├── README.md             ← the pitch
├── SYSTEM.md             ← brain transplant (any AI becomes a YouTube channel operator)
├── INVARIANTS.md         ← 17 sacred rules
├── ENCODING.md           ← 11-compartment Creator Profile schema
├── company.yaml          ← YOUR channel · fill once
├── LICENSE
├── CHANGELOG.md
├── .gitignore
├── paperclip.manifest.yaml
│
├── workspace/            ← the operating layer · the channel's living documents
├── agents/               ← 22 AI specialists organized as a real org chart
├── skills/               ← 35 capabilities · each produces one asset
├── reference/            ← the brain that makes skills smart
├── workflows/            ← multi-step automations (cron · webhook · event)
├── spec/                 ← invariants · context thresholds · banned vocab · voice gates · YouTube-specific gates
├── teams/                ← 3 team configurations (solo · creator+editor · full-studio)
├── prompts/              ← boot · interview-mode · 10 fast-lane prompt packs
├── scripts/              ← installers · format converters · package renderer
├── docs/                 ← Quickstart · Architecture · Channel Architecture · Dual-Mode · Skill Authoring
└── .claude/commands/     ← slash command bindings (Claude Code)
```

Every file is plain text. Every folder is yours. Nothing is locked behind an app.

---

## The 5 layers

| Layer | Lifetime | What lives here | Folder |
|---|---|---|---|
| **L1 — Spine** | decade+ | Identity, rules, schema, your context | Root |
| **L2 — Reference** | 3–7 years | Frameworks, archetypes, swipe-file, templates | `reference/` |
| **L3 — Agents** | 3–7 years | Persona overlays — who's speaking | `agents/` |
| **L4 — Skills** | 3–7 years | Decision procedures — verbs the OS executes | `skills/<slug>/SKILL.md` |
| **L5 — Adapters** | 6–18 months | Runtime bindings — how a skill invokes on Claude / ChatGPT / Cursor / etc. | `skills/<slug>/adapters/` |

When the platform changes (new model, new runtime, new integration), only L5 rebuilds. Everything above is durable.

---

## What the spine does

The spine (5 root files) is the brain transplant. Any AI agent that reads:

1. `SYSTEM.md` — gets identity, routing logic, boot sequence
2. `INVARIANTS.md` — gets 17 non-negotiable rules
3. `ENCODING.md` — gets the schema for company.yaml
4. `company.yaml` — gets your specific channel context
5. `README.md` — gets the pitch

…becomes a YouTube Content OS specialist for your channel. The same workspace, with a different `company.yaml`, produces different content because the compartments hold different values.

---

## What the workspace does

`workspace/` is the operating layer — the channel's living documents, where `company.yaml` is the structured encoding the OS boots from:

- The 4-doc profile, in reading order: `STRATEGY.md` (why) → `VOICE.md` (how it sounds) → `PROOF-BANK.md` (what's true) → `CONTENT-ENGINE.md` (what shape)
- `CALIBRATION.md` — the override layer that binds every generic skill to this specific channel
- `STATUS.md` — the reconciliation ledger (mandate → built → pruned → next)
- The proof-gated video lifecycle: `pipeline/SLATE.md` (ranked by conversion-assist) → `pipeline/PITCHES.md` → `film-this-week/` → `drafts/` (script → spoken-pass → packaging) → `published/`
- The feedback loop: `published/_ANALYTICS.md` — the scoreboard whose reads re-rank the slate
- `prompts/` — 9 creator-calibrated generators, including `signal-check.md`, the 0–10 ship gate

The iron rule of the layer: every on-screen number traces to a `PROOF-BANK.md` row tagged `[VERIFIED]`, `[CONFIRM]`, or `[NEEDS-PROOF]` — and a video cannot move to `film-this-week/` until its row is `[VERIFIED]` (INV-6 in operation).

---

## What the reference library does

`reference/` is the compounding knowledge. Every cycle, it gets sharper:

- `frameworks/` — 53 methodology docs (loop system, hook formulas, awareness spectrum, belief layers, influence principles, market-hierarchy matrix, community markers, ethical guardrails, etc.)
- `operators/` — 12 anonymized operator archetypes (long-form-VSL specialist, contrarian-narrator, etc.)
- `swipe-file/` — 240+ anonymized specimens (hooks, intros, scripts, titles, thumbnails, contrast formats, series)
- `templates/` — script + thumbnail brief + sponsor integration + channel architecture doc + pinned VSL
- `benchmarks/` — real performance bands by niche (CTR, AVD, RPM, sponsor CPM)
- `verticals/` — sub-vertical playbooks
- `playbooks/` — 8 multi-step playbooks (channel launch, series build, sponsor integration, viral postmortem, etc.)
- `platforms/` — long-form / Shorts / Live / Community Tab deep dives
- `integrations/` — API contracts (light — heavy work in adapters)
- `canonical/` — architecture bible + canonical specs

Skills draw from reference. Reference compounds with every published video via `/library-compound`.

---

## What the agents do

`agents/` holds 22 persona overlays organized as a real org chart:

```
agents/
├── youtube-ceo                   ← top-level orchestrator
├── orchestrators/                ← 2 arc orchestrators
└── department-heads/             ← 8 dept heads (foundations, content, retention, production, distribution, audience, monetization, intelligence)
└── (specialists, flat)           ← 11 specialists (script-writer, hook-writer, thumbnail-designer, etc.)
```

Agents don't have logic. The logic is in skills. Agents have voice, tone, decision-lens, and reporting structure. When a skill executes, the agent's persona shapes how the skill's output reads.

---

## What the skills do

`skills/` holds 35 decision procedures across 9 pillars:

- Foundations (5): build-niche, build-audience, design-offer, build-channel-architecture, extract-creator-voice
- Content Engine (4): idea-farm, research-brief, content-mix-strategy, series-architect
- Hook & Retention (4): write-hook, architect-loops, retention-engineer, audit-retention
- Production (7): write-script (the per-video entry point), write-authority-script, write-reach-script, write-shorts-script, thumbnail-brief, title-thumbnail-pair, editor-brief
- Distribution (4): title-options, description-builder, publish-checklist, repurposing-cascade
- Audience Building (3): community-cadence, lead-magnet-bridge, cross-niche-bridge
- Monetization & Sales (4): write-pinned-vsl, build-application-funnel, sales-call-script, sponsor-fit
- Operations (1): build-sop
- Intelligence (3): kpi-dashboard, leak-audit, library-compound

Each skill ships with: `SKILL.md` (runtime-agnostic procedure) + `adapters/any.md` (universal fallback) + `examples/` (calibration targets) + optional `prompts/` and `evidence/`.

For details on writing your own skills, see [SKILL_AUTHORING.md](SKILL_AUTHORING.md).

---

## What workflows do

`workflows/` ties skills together into multi-step processes:

- `divisions/` — one mermaid FSM per pillar (e.g., the content-creation pipeline from ideation through publish)
- `handoffs/` — department-to-department contracts (e.g., what content-head ships to retention-head)
- `automations/` — cron / webhook / event triggers (mirrors paperclip.manifest.yaml)
- `execution-templates/` — multi-step recipes (e.g., a complete viral-postmortem workflow)
- `client-onboarding/` — the creator intake flow: `creator-intake-form.md` (artifact gathering) then `intake.md` (the 30-minute expert-download interview)

---

## What the spec does

`spec/` enforces the rules:

- `CONTEXT-THRESHOLDS.md` — which skills can run when (per-skill compartment gates)
- `BANNED-VOCABULARY.md` — anti-slop filter
- `RUNTIMES.md` — adapter contract per runtime
- `voice-gates.md` — the five ship gates (banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7)
- `retention-floor.md` — INV-9 enforcement (predicted-AVD gate before script approval)
- `title-thumbnail-promise.md` — INV-10 enforcement (alignment between title, thumbnail, first 30s)
- `copyright-fair-use.md` — INV-14 enforcement (publish gate on third-party material)
- `sponsor-disclosure.md` — INV-15 enforcement (FTC + local-regulator disclosure compliance)

Plus the canonical specs in `reference/canonical/spec/`:

- `SIGNAL.md` — Signal Theory 5-tuple encoding
- `QUALITY.md` — Triple-Layer Verification (formal 40 + semantic 35 + info-theoretic 25)
- `BLIND-OUTPUT-TEST.md` — the human verification protocol
- `INTEGRATIONS.md` — tech stack + API contracts

---

## File-naming conventions

- **Files**: kebab-case (`build-audience.md`, `the-loop-system.md`)
- **Compartment paths in YAML**: snake_case (`creator_identity_matrix`, `audience_intelligence_system`)
- **Slash commands**: kebab-case (`/build-audience`)
- **Agent IDs**: kebab-case (`script-writer`, `audience-researcher`)
- **Framework references in skill bodies**: `[framework: <slug>]` (e.g., `[framework: the-loop-system]`)
- **Compartment references in skill bodies**: `{{compartment.path.field}}`

---

## Sacred-format files

Changes to these require creator sign-off + re-test of every dependent skill:

- SYSTEM.md
- INVARIANTS.md
- ENCODING.md
- spec/CONTEXT-THRESHOLDS.md
- reference/canonical/*

A change to a sacred-format file is logged in CHANGELOG.md with the rationale.

---

## File counts (target inventory)

| Category | Files |
|---|---|
| Spine + repo hygiene | 9 |
| spec/ | 8 |
| reference/canonical/ | 5 |
| agents/ | 23 |
| workspace/ | 23 |
| skills/ | ~170 |
| reference/frameworks/ | 54 |
| reference/operators/ | ~13 |
| reference/swipe-file/ | 240+ |
| reference/playbooks/ | 9 |
| reference/templates/ | 13 |
| reference/benchmarks/ | 9 |
| reference/verticals/ | ~9 |
| reference/integrations/ | ~11 |
| workflows/ | ~26 |
| teams/ | 3 |
| docs/ | 5 |
| prompts/ | 13 |
| scripts/ | 4+ |
| .claude/commands/ | 35 |

**Total: ~680 files.** In line with sibling templates.

---

## Where to go next

- New here? Read [QUICKSTART.md](QUICKSTART.md)
- Want the architectural deep-dive? See `reference/canonical/AGENT-ARCHITECTURE.md`
- Designing your channel's path-of-the-viewer? See [CHANNEL_ARCHITECTURE.md](CHANNEL_ARCHITECTURE.md)
- Confused about authority vs reach? See [DUAL_MODE.md](DUAL_MODE.md)
- Writing your own skill? See [SKILL_AUTHORING.md](SKILL_AUTHORING.md)

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
