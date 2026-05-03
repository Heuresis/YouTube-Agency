# AGENT-ARCHITECTURE — The Architecture Bible

> The complete reference for how agents, skills, compartments, signals, and runtimes fit together. Every contributor to this workspace reads this document. Every architectural decision returns here.

---

## The premise

YouTube Content OS is built on a simple architectural insight: **the agent is thin, the workspace is smart**.

The classical AI-product architecture is the inverse: the agent is large (huge system prompt, many tools, complex chain-of-thought), and the workspace is dumb (a vector database, some files). When the platform changes (model upgrade, runtime swap, integration deprecation), the agent rebuilds. The workspace was decoration.

In this architecture, the workspace IS the product. The agent is a runtime. Any sufficiently capable LLM, when pointed at this workspace, becomes a YouTube Content OS specialist. Swap the LLM tomorrow — the workspace still works.

This isn't a stylistic choice. It's the only architecture that survives platform shifts in a 12–18-month cycle market.

---

## The five layers

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   LAYER 5 — Runtime Adapters (ephemeral, 6–18 mo lifetime)  │
│   skills/<slug>/adapters/<runtime>.md                       │
│   "How does this skill bind to Claude Code / Cursor / API?" │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   LAYER 4 — Skills (durable, 3–7 yr lifetime)               │
│   skills/<slug>/SKILL.md                                    │
│   "What is the decision procedure?"                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   LAYER 3 — Agents (persona overlays, durable)              │
│   agents/<slug>.md                                          │
│   "Who's speaking when this skill runs?"                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   LAYER 2 — Reference Library (compounding, durable)        │
│   reference/{frameworks,operators,swipe-file,...}/          │
│   "What knowledge does the skill draw from?"                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   LAYER 1 — Spine (timeless, decade+ lifetime)              │
│   SYSTEM.md, INVARIANTS.md, ENCODING.md, company.yaml       │
│   "Who is this OS, what's sacred, what's the schema?"       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Layer 1 is decision logic. It survives every platform shift.
Layer 2 is structured knowledge. It compounds with every cycle.
Layer 3 is persona. It calibrates the voice of every output.
Layer 4 is procedural. It executes the actual work.
Layer 5 is the technology binding. It rebuilds when the platform changes.

When YouTube ships a new Studio API, when the underlying LLM is upgraded, when a creator switches from Claude to BusinessOS to Cursor — only Layer 5 rebuilds. Layers 1–4 survive untouched.

---

## How a skill executes

When the creator says "draft me an authority-mode script about X":

```
1. Runtime receives intent (Claude Code slash command, ChatGPT message, Cursor agent invocation, etc.)

2. Runtime reads the spine:
   - SYSTEM.md → identity, routing, boot sequence
   - INVARIANTS.md → 17 sacred rules
   - ENCODING.md → 11-compartment schema
   - company.yaml → this creator's actual values

3. Runtime classifies intent:
   - Skill match? → /write-authority-script
   - Agent overlay? → script-writer (specialist) reporting to content-head (dept head)

4. Runtime checks gates:
   - Six-layer diagnostic — is the upstream constraint Audience? Offer? If yes, refuse and run upstream skill.
   - Compartment threshold gates — is Identity ≥ 70%, Audience ≥ 70%, Offer ≥ 60%, Hook & Retention ≥ 50%?
   - Mode declaration — authority confirmed?

5. Runtime reads skills/write-authority-script/SKILL.md:
   - Decision Logic
   - Tacit Principles
   - Output Format
   - Compartments to read
   - Frameworks to apply
   - Verification gates to run

6. Runtime executes:
   - Reads cited compartments from company.yaml
   - Reads cited frameworks from reference/frameworks/
   - Reads cited specimens from reference/swipe-file/
   - Applies the agent persona overlay (script-writer)
   - Generates draft per the Output Format

7. Runtime verifies:
   - Layer 1 (formal): banned-vocab scan, anonymization scan, AI-attribution scan, schema compliance
   - Layer 2 (semantic): voice fidelity, audience-language fidelity, sophistication-stage match, mode fidelity, framework correctness
   - Layer 3 (info-theoretic): SNR, compression, specificity density
   - Retention floor (INV-9): predicted AVD ≥ channel bottom-quartile
   - Title-thumbnail-promise (INV-10): N/A for script-only output
   - Truth Gate (INV-5): every claim survives 30s screenshot test
   - No fabrication (INV-6): no invented stats

8. If all gates pass: runtime returns the output with a metadata block (Signal 5-tuple, compartments cited, frameworks cited, confidence level, gaps flagged).

9. If any gate fails: runtime returns the failure diagnosis. Skill enters revision mode (max 2 attempts).

10. Runtime fires the post-execution hook: library-compound logs the output for cycle-N+1 calibration.
```

This sequence runs deterministically. No improvisation. No skipping steps. The creator's experience is "I asked for X, and X came back" — the architectural complexity is hidden.

---

## How agents map to skills

Agents are **persona overlays**. Skills are **decision procedures**. Multiple agents can execute the same skill with different personas; one agent typically executes multiple skills within their domain.

Example: `/write-authority-script` is owned operationally by `content-head` (department head), executed by `script-writer` (specialist). The output's voice is shaped by `creator_identity_matrix.brand_voice_architecture` (creator voice) overlaid with `script-writer.communication_style` (the agent's diagnostic register).

Agents don't have logic. The logic is in the skill's SKILL.md. Agents have personality, tone, decision-lens, and reporting structure.

---

## The compartment <-> skill <-> framework graph

Every skill declares:
- Which compartments it READS from
- Which compartments it potentially WRITES to (most skills are read-only on company.yaml; only meta-skills like `/build-audience` write to compartments)
- Which frameworks it applies
- Which specimens it draws from

This forms a directed graph:

```
compartment → skill → output

frameworks → skill (applied)
specimens → skill (referenced as imitation surface)
agent overlay → skill (voice/persona shaping)
```

The graph is queryable. `/leak-audit` walks the graph to identify which skills are blocked by which compartment gaps. `/library-compound` walks the graph backward — given a successful output, which compartments + frameworks + specimens contributed to it?

---

## How the workspace stays smart

Every cycle adds to the workspace:

1. **Compartments deepen.** Voice-of-viewer captures from real comments. Audience awareness-distribution updates from analytics. Offer iterations log to `offer_architecture`.
2. **Swipe-file grows.** Every published video that performs well gets distilled into specimens (anonymized as imitation surface). Every video that underperforms is logged for postmortem.
3. **Frameworks calibrate.** When a framework's structural rule fits a creator's channel poorly, the framework note in `reference/frameworks/` gets a `creator-specific calibration` annotation.
4. **Benchmarks recalibrate.** `reference/benchmarks/` updates from the channel's actual performance vs. niche bands.
5. **Skills self-improve.** Verification gate failures feed back into the skill's tacit principles. Skills that hit revision-loop max twice get flagged for skill-level redesign.

This is the encoding flywheel. Every cycle, the workspace gets sharper. The compounding gap to un-encoded competitors widens.

---

## Boot sequence (canonical)

When any agent runtime enters this workspace:

```
1. Read SYSTEM.md (this is the brain transplant)
2. Read INVARIANTS.md (these rules are non-negotiable)
3. Read ENCODING.md (this is the schema for company.yaml)
4. Read company.yaml (this is the creator's specific context)
5. Compute compartment completeness scores (% per compartment, weighted total)
6. Determine context quality tier (Skeleton / Foundation / Solid / Optimized / Elite)
7. Scan agents/_INDEX.md (registry of available personas)
8. Scan skills/_INDEX.md (catalog of available decision procedures)
9. Scan spec/ + reference/canonical/spec/ (quality gates)
10. Declare ready state with: tier + skill-availability summary + gap-priority list
```

Boot fails loudly if:
- SYSTEM.md / INVARIANTS.md / ENCODING.md / company.yaml missing
- company.yaml schema-violates ENCODING.md
- Any required-by-spec file missing (banned-vocab, context-thresholds, etc.)
- Any sacred-format invariant (e.g., no AI-attribution in committed files) detected

---

## File-system contract

The workspace is plain text. All semantic content is markdown + YAML. No proprietary formats.

```
youtube-content-os/
├── SYSTEM.md, INVARIANTS.md, ENCODING.md, README.md, company.yaml   (Layer 1)
├── LICENSE, CHANGELOG.md, .gitignore, paperclip.manifest.yaml
├── agents/                       (Layer 3)
├── skills/<slug>/                (Layer 4 + Layer 5)
│   ├── SKILL.md
│   ├── adapters/<runtime>.md
│   ├── examples/
│   ├── prompts/
│   └── evidence/
├── reference/                    (Layer 2)
│   ├── canonical/                ← architecture bible + spec/
│   ├── frameworks/
│   ├── operators/
│   ├── platforms/
│   ├── playbooks/
│   ├── swipe-file/
│   ├── templates/
│   ├── benchmarks/
│   ├── verticals/
│   ├── integrations/
│   └── examples/
├── workflows/
├── spec/
├── teams/
├── prompts/
├── docs/
└── .claude/commands/
```

Every file is git-tracked. Every file is portable.

---

## What this architecture refuses to do

1. **Refuses to be a chat tool.** Skills are deterministic procedures, not conversation. The creator says what they need; the OS executes; the OS returns. No "let me think about this" filler.
2. **Refuses to bind to the runtime.** SKILL.md is runtime-agnostic. Adapters are the only runtime-specific surface. The day the runtime breaks, only adapters rebuild.
3. **Refuses to skip upstream.** The six-layer diagnostic runs first. Generating thumbnails for a misdefined audience is waste.
4. **Refuses to ship below threshold.** Compartment gates are hard. The OS interview-modes to fill gaps before ungating.
5. **Refuses to fabricate.** No invented stats, testimonials, results. Truth Gate is sacred.
6. **Refuses to drift.** Banned vocabulary, sponsor-disclosure, retention-floor, title-thumbnail-promise, parasocial-honesty — all enforced pre-ship.
7. **Refuses to lock in.** Every file is plain text. The creator owns the workspace. Runtime is replaceable.

---

## What this architecture is great at

1. **Encoding strategic-layer judgement.** The 33% strategic-layer compartments (Identity 15 + Audience 18 + Offer 12) carry the decisions only the creator can make.
2. **Compounding across cycles.** Library-compound, retention-audit, and the encoding flywheel all increase the OS's quality every cycle.
3. **Onboarding new team members in days, not months.** A new editor / writer / community manager reads the spine + relevant compartments + skill files and is operational in 1–2 weeks.
4. **Surviving platform shifts.** When YouTube ships v2 of Studio, only Layer 5 adapters rebuild. Everything above survives.
5. **Producing voice-faithful output.** When compartments are at 90%+ completeness, the Blind Output Test passes — the OS produces output indistinguishable from the creator's own.

---

## What this architecture is NOT for

- One-off video generation. The OS isn't a script tool. It's an operating system. Use it when you want a channel that compounds, not when you want a single video.
- Channels with no back-end offer. The OS is calibrated for creators with an owned offer (coaching / mastermind / info-product / agency). Pure ad-revenue channels work but aren't the bullseye.
- Faceless niche channels. Different decision logic; separate workspace template.
- Agency services for managing other people's channels. Different decision logic; separate workspace template.

---

## Maintenance

This file is the architecture bible. Changes to it require creator + producer sign-off and re-read by every team member. Architectural drift is the long-term encoding-quality risk.

Quarterly architecture review:
- Are the layers still cleanly separated?
- Is anything that should be in Layer 1 leaking into Layer 5?
- Is the encoding flywheel still compounding (measured by Blind Output Test pass rate)?
- Are any skills routinely failing verification gates (a sign the skill needs redesign or the gates need calibration)?

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis canonical doc.*
