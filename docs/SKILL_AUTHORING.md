# Skill Authoring — Writing Your Own Skills

> The 33 skills shipped in this template cover the bullseye work. Channels evolve; new skills are needed. This guide shows how to author one that fits the architecture.

---

## When to write a new skill

Write a new skill when:

1. **A creator workflow keeps recurring without an existing skill matching it.** If the creator finds themselves running the same multi-step procedure manually 3+ times, that's a skill.
2. **An existing skill is being routinely modified at invocation time.** The modification pattern is itself a skill — split it out.
3. **A creator has a unique decision logic that no existing skill encodes.** Their offer construction is fundamentally different from the templated `/design-offer`. Author a custom skill.
4. **A new platform feature emerges that needs encoded handling.** YouTube ships premieres-v2; the channel uses them; a `/premiere-strategy` skill is needed.

Don't write a new skill when:
- An existing skill works with a parameter change (just parameterize)
- The procedure is genuinely one-off (don't encode noise)
- The procedure isn't yet stable in the creator's hands (encode after it stabilizes, not during exploration)

---

## The shape of a skill

Every skill is a folder with at minimum:

```
skills/<slug>/
├── SKILL.md
└── adapters/
    └── any.md
```

Recommended additions:

```
├── examples/
│   ├── example-01.md
│   └── example-02.md
├── prompts/
│   └── interview-prompt.md
└── evidence/
    └── blind-output-test.md
```

---

## SKILL.md template

```markdown
---
name: <slug>
command: /<slug>
description: <one-line — what this skill produces — under 100 chars>
tier: haiku | sonnet | opus
agent_owner: <agent-id of the dept head who owns this skill>
agent_executor: <agent-id of the specialist who executes>
required_compartments:
  <compartment_path>: <min %>
mode_applicability: authority | reach | both | n/a
signal_5tuple:
  mode: EXECUTE | ASSIST | ANALYZE | BUILD | MAINTAIN
  genre: DIRECT | INFORM | COMMIT | DECIDE | EXPRESS
  type: youtube.<pillar>.<verb>
  format: MARKDOWN | YAML | JSON
  weight: <0.0-1.0>
banned_when:
  - <compartment>:<threshold>
verification_layers: [formal, semantic, info-theoretic, ...]
---

# <Skill Display Name>

## Purpose
<one paragraph: what does this skill produce, why does it exist?>

## Decision Logic
<the WHY — judgement, tradeoffs, principles. This is the timeless layer (Layer 1) that survives every platform shift. Should read like a senior practitioner explaining their decision-making.>

## Tacit Principles
<the unwritten rules that separate competent from elite output. 5–10 specific principles. Examples:
- "If the audience sophistication-stage is Skeptical, the hook must be contrarian-frame not bound-promise"
- "When the channel has < 20 published videos, default to niche benchmarks not channel history"
- "If the creator's voice is high-energy, scripts must front-load energy in 0–3s; measured-pace creators front-load specificity instead"
>

## Process

### Step 0 — Gate check
<verify compartment thresholds + signal context>

### Step 1 — <load context>
<which compartments + frameworks + specimens to read>

### Step 2 — <analyze / synthesize>
<step-by-step procedure>

### Step N — Verify
<run verification gates>

## Output Format

```
<exact structure of the output, including metadata block>

---
SIGNAL: S = (<mode>, <genre>, <type>, <format>, <weight>)
COMPARTMENTS_USED: [<list>]
FRAMEWORKS_USED: [<list>]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [<list>]
---
```

## Frameworks Applied
- [framework: <slug>] — <why this framework is applied>
- [framework: <slug>] — <...>

## Compartments Read
- `{{compartment.path.field}}` — <which fields, why>

## Compartments Written (if any)
- `{{compartment.path.field}}` — <when this skill writes back>

## Verification Gates
- <gate name> — <what it checks for this skill>

## Related Skills
- Upstream: `/<slug>` (must run before this one)
- Downstream: `/<slug>` (consumes this skill's output)
- Alternative: `/<slug>` (different mode or context)

## Failure Modes
- <common mistake 1> — <how to detect, how to revise>
- <common mistake 2>

## Examples
- See `examples/example-01.md`
- See `examples/example-02.md`

## Lineage
<2–3 sentence anonymized lineage — name the structural traditions the skill draws from, never operator names>
```

---

## Authoring guide — step by step

### Step 1 — Define the skill's job

Write one sentence: "Given X (inputs), produce Y (output) such that Z (success criterion)."

Examples:
- Given a creator's identity + audience + offer, produce a complete channel architecture document such that a viewer can be routed deterministically from any reach video to the back-end offer.
- Given a list of 10 candidate video ideas, produce the week's slate (3–5 ideas) such that the dual-mode mix is honored and every idea hits at least one belief in the belief-installation path.

If you can't write that sentence, the skill isn't ready to be authored. Refine the job first.

### Step 2 — Pick the slug + assign ownership

- Slug: kebab-case verb-or-noun (`/build-foo`, `/audit-bar`, `/write-baz`)
- Pillar: which of the 9 pillars does this skill belong to?
- Agent owner: the dept head whose pillar contains this skill
- Agent executor: the specialist who actually runs it (often the dept head themselves for newer skills; specialists when the skill is mature enough to delegate)

### Step 3 — Write the Decision Logic + Tacit Principles

This is where the skill earns its spot. The Decision Logic is the timeless WHY. The Tacit Principles are the moves a senior practitioner makes that a competent one wouldn't.

For Decision Logic: write 200–400 words on the underlying judgement. Why does this skill exist? What tradeoff is it navigating? What's the most common failure mode it prevents?

For Tacit Principles: write 5–10 specific rules. Each should be:
- Conditional ("when X, do Y")
- Specific (not "be thoughtful" — "if the audience is at sophistication-stage Skeptical, the hook must be contrarian-frame")
- Earned from real experience (don't make up principles you haven't seen play out)

The Tacit Principles section is what makes the skill "elite-grade." Without it, the skill produces competent output that any general-purpose AI could match. With it, the skill produces output calibrated to the creator's specific context.

### Step 4 — Write the Process

Step-by-step procedure. Number the steps. Be explicit about:
- Which compartments to read at which step
- Which frameworks to apply at which step
- Which decisions branch (and what conditions trigger each branch)
- When verification gates run

Write the process as if instructing a junior team member. No skipped steps. No "you'll figure it out."

### Step 5 — Define the Output Format

The exact structure. Use markdown code blocks. Be explicit about:
- Required sections
- Optional sections (and the conditions under which they appear)
- Metadata block (Signal 5-tuple, compartments cited, frameworks cited, confidence, gaps)

Output Format is checked by Layer 1 verification (formal). Schema-violating output is rejected mechanically.

### Step 6 — Declare verification gates

Most skills run formal + semantic + info-theoretic verification. Production skills add retention-floor + title-thumbnail-promise. Monetization skills add sponsor-disclosure. Skills that consume third-party material add copyright-fair-use.

If the skill needs a custom gate (e.g., a niche-specific check), document it in the SKILL.md and add a corresponding spec file in `spec/`.

### Step 7 — Write the adapter

Create `adapters/any.md` with the universal-fallback shape. If the creator uses a specific runtime that benefits from a tighter adapter (e.g., Claude Code with slash commands), add `adapters/claude-code.md`.

Adapters are ≤ 25 lines. No logic. No process steps. Just the binding contract.

### Step 8 — Write at least one example

Create `examples/example-01.md`. Show:
- The input that produced this output
- The full output (voice-faithful to a generic anonymized creator)
- Why this output is "calibration-grade" (2–3 sentences)

The example is what subsequent runs of the skill calibrate against. Without an example, the skill drifts.

### Step 9 — Run the Blind Output Test

Once the skill is authored:
1. Generate 3 sample outputs from the skill
2. Have the creator (or a writer they consider voice-accurate) generate 3 corresponding outputs
3. Show all 6 to 3 evaluators who know the creator's work
4. Score per the protocol in `reference/canonical/spec/BLIND-OUTPUT-TEST.md`

If the test passes (≥ 1 system sample receives ≥ 1 "creator" vote), the skill is production-ready. If it fails, revise the Tacit Principles + voice fidelity calibration; re-test.

### Step 10 — Add to the registry

Add the skill to `skills/_INDEX.md` in the right pillar table. Update `agents/_INDEX.md` if a new agent role was added. If the skill needs new compartment fields, propose them in `ENCODING.md` (sacred-format change — requires creator sign-off).

---

## Common skill-authoring failure modes

### FM-1: The skill is just a prompt
The skill is essentially "tell the AI to do X with the creator's context." No Decision Logic. No Tacit Principles. No structured Process. This is a chat, not a skill. Fix: invest in the Tacit Principles section. If the principles section is empty, the skill probably shouldn't exist.

### FM-2: The skill's Output Format is too loose
"Produce a script in the creator's voice." That's not an Output Format. A useful Output Format declares: opening structure, body structure, callback rules, CTA, metadata block, length target. Loose formats fail Layer 1 verification erratically. Fix: tighten until the output can be diff'd against the format.

### FM-3: Compartment thresholds set too low
The author sets `audience_intelligence_system: 30` because they want the skill to be runnable at low-context tiers. The output is generic AI slop dressed as creator content. Fix: set thresholds at the level where output is genuinely creator-grade, not the level where output is "passable."

### FM-4: No verification gates declared
The skill produces output and ships. No checks. The first slop output goes to the audience. Fix: every skill declares formal + semantic + info-theoretic at minimum. Production skills add retention-floor + title-thumbnail-promise. Monetization skills add sponsor-disclosure.

### FM-5: Tacit Principles written generically
"Use specific language. Be authentic. Match the creator's tone." These are not Tacit Principles — they're platitudes. Real Tacit Principles are conditional, specific, and earned from real outcomes. Fix: rewrite each principle as "when X, do Y because Z" and discard any that can't be specified that way.

### FM-6: No anti-watchlist check
The author imports a section from a real operator's framework (with the operator's name attached) and forgets to anonymize. The skill ships with operator names embedded. Fix: every skill goes through the anti-watchlist grep before commit. Zero matches required.

### FM-7: Lineage section flattened
"This skill draws from various frameworks." Useless. The Lineage section names the structural traditions the skill stands on — that's what activates the right pre-trained knowledge in the underlying LLM. Fix: name the traditions structurally and specifically.

---

## Examples in the wild

The 33 skills shipped with this template span the spectrum. Look at:

- **`/build-niche`** — a foundations skill with no upstream dependencies (a seeder)
- **`/write-authority-script`** — a high-threshold production skill that integrates 4+ frameworks and runs all verification gates
- **`/leak-audit`** — an intelligence skill that walks the compartment graph rather than producing creative output
- **`/sponsor-fit`** — a monetization skill with strict regulatory verification (sponsor-disclosure gate)
- **`/community-cadence`** — an audience-building skill that crosses into voice-mirroring territory and depends heavily on parasocial-trust contract

Read these for shape. Don't copy verbatim — your skill's Decision Logic is unique to its purpose.

---

## What gets you to "1-of-1"

- Decision Logic that reads like a senior practitioner thinking out loud, not generic best-practice
- Tacit Principles that are conditional, specific, and earned
- Output Format tight enough that schema violations are mechanically detectable
- Verification gates that catch the failure modes specific to this skill's domain
- Examples that demonstrate the elite-grade output the skill aspires to
- Blind Output Test passing on 80%+ of runs after 2–3 cycles of calibration

A skill that hits all six of these is encoding-grade. It produces output indistinguishable from creator-written. It runs deterministically. It survives platform shifts because nothing in SKILL.md binds to a runtime.

That's what shipping a 1-of-1 skill looks like.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
