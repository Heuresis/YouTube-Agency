# Changelog

All notable changes to this workspace template are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2.0.0] — 2026-06-11

### Added — the operating layer + deployment-proven upgrades

- **`workspace/` — the creator operating layer** (23 files). The living documents the day-to-day generators read, distilled from the template's first real channel deployment:
  - The 4-doc profile: `STRATEGY.md` (why) → `VOICE.md` (how it sounds) → `PROOF-BANK.md` (what's true) → `CONTENT-ENGINE.md` (what shape)
  - `CALIBRATION.md` — the override layer that binds all 35 skills to one channel (mode-taxonomy rename slot, skill → workspace-input map, performance-intelligence trio)
  - `STATUS.md` — reconciliation ledger (mandate → built → pruned → next, P0–P4)
  - Proof-gated pipeline: `pipeline/SLATE.md` (ranked by conversion-assist, gated on verified proof) → `pipeline/PITCHES.md` → `film-this-week/` → `drafts/` (script → spoken-pass → packaging lifecycle) → `published/`
  - The feedback loop: `published/_TEMPLATE.md` per-video records + `published/_ANALYTICS.md` scoreboard whose reads re-rank the slate
  - 9 creator-calibrated operator prompts in `workspace/prompts/` — write-script, write-hook, title-thumbnail, signal-check (the 0–10 ship gate), repurpose, IG carousel/reel/story, + authoring template
- **`/write-script` skill (35th)** — the per-video default entry point: gather → strategy → structure → execute → reconcile → QA. Carries the 20/80 inversion, zero-sum positioning, the ONE-belief rule, and the planning-vs-spoken reconciliation pass
- **`spec/voice-gates.md`** — the five ship gates: banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7
- **10 fast-lane prompt packs in `prompts/`** — content, repurposing, research, brand-voice, sales, offer, email, VSL, ad-creative, analytics — one-shot generators with pre-save validation gates, plus `prompts/_INDEX.md` with the prompts-vs-skills lane doctrine
- **15 new frameworks** (38 → 53) — market-sophistication five stages, four belief layers, six principles of influence, direct-response copy principles, limiting-belief triad, the awareness × sophistication market-hierarchy matrix, System-1/System-2 persuasion, awareness niche distribution, authority-provocation archetype, four community markers, community-to-customer translation, five emotional pillars, parasocial ethical guardrails, zero-sum positioning test, planning-vs-spoken language doctrine
- **`reference/templates/example-scripts.md`** — calibration corpus: steal the skeleton, never the surface
- **`workflows/client-onboarding/creator-intake-form.md`** — the artifact-gathering form that precedes the intake interview, with a routing table into workspace + company.yaml compartments
- **`scripts/render-package.mjs`** — renders a video packaging `.jsx` into self-contained, client-ready HTML
- **Navigation indexes** — `_INDEX.md` at reference/ root, canonical/, canonical/spec/, platforms/, templates/, examples/, integrations/, prompts/

### Changed

- **`company.yaml`** — added the `[SOLID] / [INFER] / [GAP]` confidence-tag convention (every filled value carries its data-quality source) and 9 new basic_info fields (channel_url, tagline, bio, contact_email, total_videos_published, Instagram presence, other platforms)
- **`skills/_INDEX.md`** — explicit per-video pipeline sequence (/idea-farm → /research-brief → /write-script → /title-thumbnail-pair → /description-builder → /editor-brief → /publish-checklist → /repurposing-cascade), voice-gates verification line, 35-skill count
- **`skills/library-compound`** — compounding targets made concrete: reference/swipe-file/ + reference/frameworks/ annotations + workspace/published/ records
- **`skills/audit-retention`** — full loop documented: top-decile → swipe-file entry, bottom-decile → postmortem, both log to workspace/published/_ANALYTICS.md which re-ranks the slate
- **`skills/write-pinned-vsl`** — upstream section now lists the documents read, not just the skills that produce them

## [1.0.0] — 2026-05-03

### Added — v1 ship state

- **Spine**: SYSTEM.md (5,500 words), INVARIANTS.md (2,500 words), ENCODING.md (3,800 words), README.md, company.yaml (full schema with all 11 compartments stubbed), LICENSE, CHANGELOG.md, .gitignore, paperclip.manifest.yaml
- **11-compartment Creator Profile schema** — Identity 15% / Audience 18% / Offer 12% / Channel Architecture 10% / Content Engine 8% / Hook & Retention 10% / Production 7% / Distribution 7% / Audience Building 7% / Sales & Conversion 4% / Ops & Intelligence 2%
- **17 sacred invariants** — six-layer diagnosis, sequential dependency, threshold gates, economics validation, truth gate, no fabrication, banned vocabulary, scope guard, retention floor, title-thumbnail-promise alignment, hook density, mode declaration, sophistication-stage match, copyright/fair-use, sponsor disclosure, parasocial-honesty, engagement-bait ban
- **Six-Layer Eagle-Eye diagnostic** — Audience → Offer → Topic-Hook → Retention → Distribution → Conversion
- **Dual-mode content strategy** — authority + reach with documented routing via channel architecture
- **22 agent personas** (1 CEO + 2 orchestrators + 8 dept heads + 11 specialists) — 17,237 words
- **34 skill folders** spanning 9 pillars; SKILL.md + adapter + examples per skill
- **38 framework documents** in reference/frameworks/ (32 fully encoded + 6 stubs flagged for cycle 2)
- **82 anonymized swipe-file specimens** across hooks (24), intros (12), scripts (12), outros (8), titles (16), thumbnails (10)
- **12 anonymized operator archetype dossiers** in reference/operators/
- **4 platform deep-dives** (long-form / Shorts / Live / Community Tab)
- **8 multi-step playbooks** (channel-launch, series-build, sponsor-integration, viral-postmortem, dual-mode-mix-shift, lead-magnet-bridge, pinned-VSL-deployment, retention-postmortem)
- **3 team configurations** (solo / creator-plus-editor / full-studio)
- **5 documentation files** (Quickstart, Architecture, Channel Architecture, Dual-Mode, Skill Authoring)
- **2 prompt harnesses** (boot, interview-mode)
- **7 workflow files** (handoffs, automations, execution-templates, client-onboarding, divisions/_INDEX)

### Specs

- spec/CONTEXT-THRESHOLDS.md — per-skill compartment gate table
- spec/BANNED-VOCABULARY.md — anti-slop filter (cross-vertical + YouTube-specific)
- spec/RUNTIMES.md — adapter contract per runtime
- spec/retention-floor.md — INV-9 enforcement (predicted-AVD gate)
- spec/title-thumbnail-promise.md — INV-10 enforcement (alignment gate)
- spec/copyright-fair-use.md — INV-14 enforcement (publish gate)
- spec/sponsor-disclosure.md — INV-15 enforcement (FTC + region)

### Canonical

- reference/canonical/AGENT-ARCHITECTURE.md — the architecture bible
- reference/canonical/spec/SIGNAL.md — Signal Theory 5-tuple encoding
- reference/canonical/spec/QUALITY.md — Triple-Layer Verification (40/35/25)
- reference/canonical/spec/BLIND-OUTPUT-TEST.md — human verification protocol
- reference/canonical/spec/INTEGRATIONS.md — tech stack + API contracts

### Anonymization audit (v1 ship gate)

- Anti-watchlist grep (word-boundary regex across 30+ operator/brand names): zero matches
- AI-attribution grep ("Co-Authored-By: Claude", "Generated with Claude Code", "🤖 Generated"): zero matches
- All operator/brand references in source corpus translated to anonymized archetype descriptors before reaching the template

### Cycle-2 deferred

- 180 world-class real-video specimens (API rate-limit during v1 build; retry post-reset)
- reference/benchmarks/ population (8 niche benchmark files — structural ranges from corpus + cycle-2 specimens)
- reference/verticals/ population (8 sub-vertical playbooks)
- reference/integrations/ light contract files (10 integration adapter contracts)
- reference/examples/ golden output exemplars
- 9 individual workflow division FSM files (master FSM in workflows/divisions/_INDEX is sufficient for v1)
- 6 framework stubs flagged in reference/frameworks/ (referenced but not fully decomposed in source)
- skills/_INDEX.md — present in v1; skill examples/ directories may be expanded in cycle 2 once Blind Output Test calibration runs

### Specs

- spec/CONTEXT-THRESHOLDS.md
- spec/BANNED-VOCABULARY.md
- spec/RUNTIMES.md
- spec/retention-floor.md
- spec/title-thumbnail-promise.md
- spec/copyright-fair-use.md
- spec/sponsor-disclosure.md

### Canonical

- reference/canonical/AGENT-ARCHITECTURE.md
- reference/canonical/spec/SIGNAL.md
- reference/canonical/spec/QUALITY.md
- reference/canonical/spec/BLIND-OUTPUT-TEST.md
- reference/canonical/spec/INTEGRATIONS.md
