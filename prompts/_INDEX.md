---
name: Prompts Index
type: index
status: complete
---

# Prompts Index

> Root navigation for `prompts/` — the fast lane. Two harness prompts (boot, interview mode) plus ten prompt packs of one-shot, fill-and-run prompts. Every pack carries the same contract: YAML frontmatter declaring its `reads`, `{{placeholder}}` prompts in fenced blocks, a pre-save validation block, and an escalation map to the skills it hands off to.

## The two lanes

**PROMPTS = the fast lane.** One-shot drafting and exploration — variants, banks, stress-tests, teardowns, diagnostics. No threshold gates, no ceremony. Output is raw material in the session, not a shipped asset.

**SKILLS = the production lane.** Gated (compartment thresholds, INV-3), verified (six-layer diagnostic, retention floor, truth gate), and shipped — output lands in `workspace/` and the pipeline. Catalog: `skills/_INDEX.md`.

**Which lane — the routing rule.** If the output ships to a buyer-facing surface, persists (updates a compartment, enters the pipeline), or claims to be done, it belongs to the skills lane. If the output is a draft, a variant set, a stress-test verdict, or a question answered, it belongs here. The border is one-way permeable: fast-lane material that turns out ship-worthy still passes the gates — `workspace/prompts/signal-check.md` at 7+ and `spec/voice-gates.md` — before it leaves the building.

## The files (12)

| File | What it generates | Primary reads |
|---|---|---|
| `boot.md` | The universal runtime-initialization prompt + per-runtime adaptations — boots any model surface into the OS and reports tier, compartment scores, and the next skill | SYSTEM.md, INVARIANTS.md, ENCODING.md, company.yaml |
| `interview-mode.md` | The compartment-filling interview harness + per-compartment question library — fills sub-threshold compartments so a gated skill can run | ENCODING.md, company.yaml |
| `ad-creative-prompts.md` | 4×5 ad hook grid, single-variable angle variants, creator-shot vertical ad scripts | company.yaml (audience, offer bridge, economics), PROOF-BANK, VOICE |
| `analytics-prompts.md` | Funnel-bottleneck diagnosis, LTV:CAC stress test (INV-4), churn-cause categorization, cohort reads | published/_ANALYTICS.md, pipeline/SLATE.md, company.yaml (operations_intelligence, economics_validation) |
| `brand-voice-prompts.md` | Voice extraction, phrase mining, per-surface tone calibration, in-voice rewrites, drift audits | company.yaml (creator_identity_matrix), VOICE.md, spec/voice-gates.md |
| `content-prompts.md` | LinkedIn / X / IG drafts, YouTube hook variants, the 30-day cross-platform calendar | company.yaml (content_engine, voice_of_viewer), VOICE.md, PROOF-BANK, CONTENT-ENGINE |
| `email-prompts.md` | Subject-line banks, welcome / launch / show-rate sequences, deliverability triage | company.yaml (audience_building_loop, show_rate_stack), VOICE.md, PROOF-BANK |
| `offer-prompts.md` | Core-offer structure, ladder rungs, pricing stress-tests, guarantee design, value stacks | company.yaml (offer_architecture), PROOF-BANK, STRATEGY |
| `repurposing-prompts.md` | One long-form → 5+ surfaces — Shorts maps, post batches, email pulls | company.yaml (repurposing_cascade), VOICE.md, PROOF-BANK, CONTENT-ENGINE |
| `research-prompts.md` | VOC mining, niche-pain extraction, competitor teardowns, market sizing, buyer personas | company.yaml (audience_intelligence_system), VOICE.md, STRATEGY |
| `sales-prompts.md` | Discovery question banks, objection reframes, follow-through, stalled-applicant diagnostics, call prep | company.yaml (sales_conversion_stack, qualification), PROOF-BANK, VOICE |
| `vsl-prompts.md` | Pinned-VSL hook banks, 15-step spine outlines, mechanism positioning | company.yaml (pinned_vsl, offer_architecture), PROOF-BANK, fifteen-step-vsl-spine framework |

## Reading order for a new operator

1. `boot.md` — initialize the runtime before anything else
2. `interview-mode.md` — when boot reports compartments below threshold
3. The pack matching today's question; its escalation map names the skill when the work should persist

---

*v1.0 — 2026-06-11. Root navigation for the prompt library.*

*A Heuresis workspace template.*
