---
name: Spec Index
type: index
status: complete
---

# Spec

> The canonical contracts every output is measured against.

| File | What it defines | When to reach for it |
|---|---|---|
| `SIGNAL.md` | The 5-tuple encoding (Mode / Genre / Type / Format / Weight) carried by every skill output and cross-agent handoff | Producing or routing any skill output; debugging a handoff |
| `QUALITY.md` | Triple-Layer Verification gate (Formal 40% + Semantic 35% + Info-theoretic 25%) — the machine-runnable quality floor | Verifying any creator-facing output; tuning revision loops |
| `BLIND-OUTPUT-TEST.md` | The human creator-grade pass/fail — whether an informed evaluator can distinguish system output from creator-written | Calibrating encoding completeness; the month-2+ quality audit |
| `INTEGRATIONS.md` | Tech stack + API contracts — the cross-skill registry of every external system, its auth surface, and the skills bound to it | Wiring a new tool; auditing which skills touch which API |

---

*v1.0 — 2026-06-11.*

*A Heuresis workspace template.*
