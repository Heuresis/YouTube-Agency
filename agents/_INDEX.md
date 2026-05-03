# Agent Roster

22 agents. 1 top-level orchestrator + 2 arc orchestrators + 8 dept heads + 11 specialists.

## Top-level

| Agent | Role |
|---|---|
| youtube-ceo | Top-level orchestrator. Receives every creator intent, runs the six-layer diagnostic (Audience / Offer / Topic-Hook / Retention / Distribution / Conversion), routes to arc orchestrator or department head, carries the creator's strategic philosophy as the final filter. |

## Orchestrators

| Agent | Arc | Skills coordinated |
|---|---|---|
| content-orchestrator | ideation → research → script → thumbnail → editor brief → publish | `/idea-farm` `/research-brief` `/content-mix-strategy` `/series-architect` `/write-authority-script` `/write-reach-script` `/write-shorts-script` `/write-hook` `/architect-loops` `/retention-engineer` `/audit-retention` `/thumbnail-brief` `/title-thumbnail-pair` `/editor-brief` `/publish-checklist` `/title-options` `/description-builder` `/repurposing-cascade` |
| monetization-orchestrator | sponsor + product + affiliate + back-end conversion | `/write-pinned-vsl` `/build-application-funnel` `/sales-call-script` `/sponsor-fit` `/community-cadence` `/lead-magnet-bridge` `/cross-niche-bridge` |

## Department heads

| Agent | Pillar | Compartment | Owns skills |
|---|---|---|---|
| foundations-head | Foundations | 1 (Identity 15%) + 2 (Audience 18%) + 3 (Offer 12%) + 4 (Channel Architecture 10%) | `/build-niche` `/build-audience` `/extract-creator-voice` `/design-offer` `/build-channel-architecture` |
| content-head | Content engine | 5 (Content Engine 8%) | `/idea-farm` `/research-brief` `/content-mix-strategy` `/series-architect` `/write-authority-script` `/write-reach-script` `/write-shorts-script` |
| retention-head | Hook & retention | 6 (Hook & Retention OS 10%) | `/write-hook` `/architect-loops` `/retention-engineer` `/audit-retention` |
| production-head | Production | 7 (Production & Post 7%) | `/thumbnail-brief` `/title-thumbnail-pair` `/editor-brief` `/publish-checklist` |
| distribution-head | Distribution | 8 (Distribution & Algorithm 7%) | `/title-options` `/description-builder` `/repurposing-cascade` |
| audience-head | Audience-building | 9 (Audience Building Loop 7%) | `/community-cadence` `/lead-magnet-bridge` `/cross-niche-bridge` |
| monetization-head | Monetization & sales | 10 (Sales & Conversion Stack 4%) + slice of 3 | `/write-pinned-vsl` `/build-application-funnel` `/sales-call-script` `/sponsor-fit` |
| intelligence-head | Operations & intelligence | 11 (Operations & Intelligence 2%) | `/kpi-dashboard` `/leak-audit` `/library-compound` `/build-sop` |

## Specialists

| Agent | Reports to | Owns / runs |
|---|---|---|
| niche-architect | foundations-head | `/build-niche`. Niche definition, sub-niche map, adjacent-niche reach map, out-of-scope guard, 6 Differentiation Paths. |
| audience-researcher | foundations-head | `/build-audience`. Voice-of-viewer extraction, ICP psychographics, awareness-level distribution, comment-mining, survey design, limiting-belief-triad diagnosis. Owns the heaviest compartment (18%). |
| offer-architect | foundations-head | `/design-offer`. Back-end offer design, value stack, mechanism, qualification, 3:1 LTV:CAC validation (INV-4). |
| creator-voice-encoder | foundations-head | `/extract-creator-voice`. Brand voice architecture, on-camera persona, parasocial-trust contract (INV-16 source-of-truth), phrases-to-use / phrases-to-avoid library. |
| script-writer | content-head | `/write-authority-script` `/write-reach-script` `/write-shorts-script`. Voice-faithful, mode-aware, awareness-calibrated, BUT-THEREFORE beats, re-hook → story → lesson. |
| hook-writer | retention-head | `/write-hook`. First-30s hook stack (≥3 mechanisms per INV-11), three-brain calibrated, 4 primary + 5 secondary hook formulas, hook bank curation. |
| thumbnail-designer | production-head | `/thumbnail-brief`. Composition spec, contrast rules, face/object grammar, A/B test design, INV-10 visual-side gate. |
| title-strategist | distribution-head (cross-reports to production-head for `/title-thumbnail-pair`) | `/title-options` `/title-thumbnail-pair`. 4-pillar title formula split (40/30/20/10), CTR forecasting, INV-10 linguistic-side gate. |
| community-manager | audience-head | `/community-cadence`. Comment triage, community-tab cadence, top-commenter recognition, high-signal comment capture for content/library. |
| vsl-builder | monetization-head | `/write-pinned-vsl`. 15-step or 8-belief structure, all 8 required beliefs installed, minimum 10 objections handled, application-funnel CTA architecture, post-call follow-up sequence. |
| postmortem-analyst | intelligence-head | `/library-compound`. Retention-curve diagnosis, viral postmortem, leak attribution (six-layer), library-compound entry drafting (anonymized, framework-tagged), hook-bank tier-up. Operates the encoding flywheel. |

## Routing logic

`youtube-ceo` receives every creator intent and runs the six-layer eagle-eye diagnostic before routing. Routing rules:

1. **Strategic-layer intent** (niche / audience / offer / identity / channel architecture) → `foundations-head` directly
2. **Content-arc intent** (idea / research / script / series / hook / loop / retention / thumbnail / editor brief / publish / title / description / repurposing) → `content-orchestrator` which sequences content-head → retention-head → production-head → distribution-head in INV-2 dependency order
3. **Monetization-arc intent** (pinned VSL / application funnel / sales script / sponsor / lead-magnet bridge / community / cross-niche bridge) → `monetization-orchestrator` which coordinates monetization-head + audience-head + parts of distribution-head
4. **Intelligence intent** (KPI / leak audit / library compound / SOP) → `intelligence-head` directly
5. **Multi-pillar intent** → the relevant arc orchestrator decomposes and sequences

Department heads delegate skill execution to specialists; specialists return artifacts upward; department heads enforce pillar-level invariants (retention floor INV-9, title-thumbnail-promise alignment INV-10, sponsor disclosure INV-15, parasocial-honesty INV-16); arc orchestrators return bundled artifacts to the CEO; the CEO verifies against Triple-Layer Verification + Blind Output Test before delivery to the creator.

## Reporting tree

```
youtube-ceo (top-level orchestrator)
│
├── content-orchestrator (ideation → publish arc)
│   ├── content-head ──── script-writer
│   ├── retention-head ── hook-writer
│   ├── production-head ─ thumbnail-designer
│   │                     │
│   │                     └── (title-strategist cross-coordinates here)
│   └── distribution-head ─ title-strategist
│
├── monetization-orchestrator (sponsor + back-end arc)
│   ├── monetization-head ── vsl-builder
│   └── audience-head ────── community-manager
│
├── foundations-head (direct from CEO — strategic layer)
│   ├── niche-architect
│   ├── audience-researcher
│   ├── offer-architect
│   └── creator-voice-encoder
│
└── intelligence-head (direct from CEO — encoding flywheel)
    └── postmortem-analyst
```

## Invariant enforcement map

| Invariant | Primary enforcer | Secondary enforcers |
|---|---|---|
| INV-1 (six-layer diagnosis before any asset) | youtube-ceo | every department head |
| INV-2 (sequential dependency) | content-orchestrator | every department head |
| INV-3 (context threshold gates) | youtube-ceo | every department head |
| INV-4 (3:1 LTV:CAC economics) | offer-architect, monetization-head | foundations-head, monetization-orchestrator |
| INV-5 (truth gate) | every agent | postmortem-analyst (compound-entry gate) |
| INV-6 (no fabrication) | every agent | audience-researcher, vsl-builder, postmortem-analyst |
| INV-7 (banned vocabulary) | every agent | content-head, distribution-head, title-strategist |
| INV-8 (scope guard) | youtube-ceo, niche-architect | foundations-head |
| INV-9 (retention floor) | retention-head | hook-writer, content-orchestrator |
| INV-10 (title-thumbnail-promise alignment) | production-head | thumbnail-designer, title-strategist, distribution-head |
| INV-11 (hook density) | retention-head | hook-writer |
| INV-12 (mode declaration) | content-head | script-writer, content-orchestrator |
| INV-13 (sophistication-stage match) | content-head | audience-researcher, script-writer |
| INV-14 (copyright + fair use) | production-head | thumbnail-designer |
| INV-15 (sponsor disclosure) | monetization-head | monetization-orchestrator |
| INV-16 (parasocial-honesty) | creator-voice-encoder (source-of-truth) | every agent |
| INV-17 (engagement-bait ban) | every agent | community-manager, distribution-head, title-strategist |

---

*v1.0 — 2026-05-03. 22 agents across 9 pillars + orchestration. The encoded creator's channel runs on this org chart.*

*A Heuresis workspace template.*
