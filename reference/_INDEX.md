---
name: Reference Library Index
type: index
status: complete
---

# Reference Library

> Creator-agnostic craft library. Everything here is stripped of operator names, brand names, and proprietary identifiers — only structural patterns, platform mechanics, benchmark envelopes, and canonical specs are preserved. Skills and playbooks cite into this library; the creator-specific layer (`company.yaml` + `workspace/`) cites out of it. Mode vocabulary throughout: **authority | reach | hybrid**.

## Directory map

| Directory | What lives here | When to reach for it |
|---|---|---|
| `benchmarks/` | Per-niche performance envelopes (CTR / AVD / RPM / sponsor-CPM bands) across 8 business-driven niches | Calibrating targets; `/leak-audit`, `/audit-retention`, `/kpi-dashboard`, `/sponsor-fit` |
| `canonical/` | The architecture bible plus the canonical specs (`spec/`) every output is judged against | Architectural decisions; quality, signal, and integration contracts |
| `examples/` | Filled end-to-end worked examples (brief → script → publish → postmortem), accumulated as the channel operates | Studying a complete pass through the system before running one |
| `frameworks/` | Structural patterns for content, retention, audience, foundations, and monetization — one file per framework, indexed in `frameworks/_INDEX.md` | Whenever a skill cites a framework; browsing for the right structure before scripting |
| `integrations/` | Per-tool integration contracts — auth, scopes, rate limits, bound skills, fallback behavior | Wiring or debugging an external tool; cross-registry in `canonical/spec/INTEGRATIONS.md` |
| `operators/` | Anonymized operator archetypes — the structural lineages a channel adopts (primary + secondary) | `/build-niche`, positioning work, archetype selection |
| `platforms/` | Per-YouTube-surface mechanics: long-form, Shorts, Live, Community tab | Surface-specific strategy, cadence, and bridge decisions |
| `playbooks/` | Multi-step operations (launch, series build, postmortems, VSL deployment) with gates and failure modes | Any operation that doesn't reduce to a single skill |
| `swipe-file/` | Anonymized structural specimens across eight categories: hooks, intros, script sections, outros, titles, thumbnails, contrast formats, series structures | Drafting any content asset; pattern selection at planning time |
| `templates/` | Fill-in scaffolds for scripts, briefs, and conversion assets, plus `example-scripts.md` — the annotated style-match calibration corpus | Producing any artifact; calibrating script quality against proven structures |
| `verticals/` | 8 deep niche playbooks — frameworks + benchmarks + archetypes calibrated per vertical | `/build-niche`, `/design-offer`, `/build-channel-architecture`, pillar-level work |

## Reading order for a new operator

1. `canonical/AGENT-ARCHITECTURE.md` — how agents, skills, compartments, and signals fit together
2. `canonical/spec/` — the contracts every output is held to
3. The `verticals/` file matching the channel's niche, then its `benchmarks/` file
4. `operators/` to pick the archetype; `frameworks/` + `swipe-file/` + `templates/` at production time

---

*v1.0 — 2026-06-11. Root navigation for the reference library.*

*A Heuresis workspace template.*
