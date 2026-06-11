---
name: _TEMPLATE
type: prompt-pack
purpose: The authoring template every pack in workspace/prompts/ follows. Copy it, fill every {{slot}}, delete the authoring notes, ship the pack.
reads: [workspace/VOICE.md, workspace/PROOF-BANK.md, workspace/CONTENT-ENGINE.md, workspace/STRATEGY.md, INVARIANTS.md, spec/voice-gates.md]
---

# _TEMPLATE — how to author a prompt-pack

> A **prompt-pack** is the fast lane: a single self-contained file that turns the workspace's calibration docs into one finished artifact type (a script, a hook set, a packaging block, a carousel). The production-grade big brothers live in `skills/` and run the full protocol with gates and orchestration; a pack is what you reach for mid-week when the calibration is already loaded and you need the artifact now. Every pack obeys the same contract so any operator — or any agent — can run any pack cold.

## The frontmatter contract

Every pack opens with exactly this frontmatter:

```yaml
---
name: {{pack-name}}              # matches the filename, no extension
type: prompt-pack
purpose: {{one sentence — the artifact this pack produces and the bar it must hit}}
reads: [{{canonical paths}}]     # the files the pack REQUIRES before generating
---
```

**`reads:` rules.** List only canonical repo-root paths, exactly as relevant to this pack — pick from: `workspace/VOICE.md`, `workspace/PROOF-BANK.md`, `workspace/CONTENT-ENGINE.md`, `workspace/STRATEGY.md`, `INVARIANTS.md`, `spec/voice-gates.md`, plus sibling packs (`workspace/prompts/<pack>.md`) when there is a hard handoff. A pack that generates without its `reads:` loaded is generating noise — that is the failure mode the contract exists to prevent.

## The required sections, in order

| # | Section | What it does |
|---|---|---|
| 1 | **Title + charter blockquote** | One `#` heading (`name — one-line job`), then a `>` blockquote: what the pack produces, for which surface, at what bar, and which skill is its production-grade big brother. |
| 2 | **Before you generate — read these** | Numbered list mirroring `reads:`, each with WHY it is non-negotiable (voice rules, proof discipline, format structures). |
| 3 | **Inputs (ask for any that are missing — don't guess)** | Every variable the pack needs: format, proof rows, mode, length, CTA destination. Missing input = ask, never assume. |
| 4 | **The procedure** | Numbered steps from inputs to artifact. Each step names the doc or sibling pack it leans on. Ends with the quality gates (voice-check per `spec/voice-gates.md`, signal-check per `workspace/prompts/signal-check.md` — target ≥7). |
| 5 | **Output structure** | A fenced code block showing the exact skeleton of the deliverable: `## METADATA` first, the artifact body, then `## OPEN SLOTS` last. The generator emits this shape verbatim. |
| 6 | **Hard constraints** | The fail-review list. Bullets, each one testable. Always includes: no invented numbers (every figure → a `[VERIFIED]` PROOF-BANK row or a `[CONFIRM: …]` slot), voice rules applied, banned vocabulary scrubbed (INV-7). |
| 7 | **Worked example slot** | A fenced or quoted example of the artifact at the bar — or, until the channel has produced one, a pointer to where the canonical example will live (usually a `workspace/drafts/` or `workspace/published/` file named in `workspace/CALIBRATION.md`). |

## Authoring rules (apply to every pack)

- **Tone:** declarative, spec-grade, second person to the operator. No filler, no hedging, no hype.
- **Mode taxonomy:** `authority | reach | hybrid` (INV-12). `workspace/CALIBRATION.md` may override or extend the taxonomy for this channel — packs note that and defer to it.
- **Proof discipline:** the only status tags are `[VERIFIED]`, `[CONFIRM]`, `[NEEDS-PROOF]` (defined in `workspace/PROOF-BANK.md`). Inline unverified figures ship as `[CONFIRM: $X — what's needed]` slots, surfaced in the OPEN SLOTS block. Never invent a number (INV-5, INV-6).
- **Voice:** the spoken-voice rules live in `workspace/VOICE.md`; the automated gate is `spec/voice-gates.md`. Packs cite both, redefine neither.
- **Handoffs:** when a pack's output feeds another pack or skill, name the exact file (`workspace/prompts/write-hook.md`, `/repurposing-cascade`). The per-video pipeline the packs slot into: `/idea-farm → /research-brief → /write-script → /title-thumbnail-pair → /description-builder → /editor-brief → /publish-checklist → /repurposing-cascade`.
- **OPEN SLOTS is mandatory.** Every pack's output ends with the list of every `[CONFIRM: …]` slot so nothing ships unverified. An empty OPEN SLOTS block is a statement, not an omission — it means every figure traced.
- **Versioning:** close the file with `*v{{n}} — {{YYYY-MM-DD}}.*` and bump it on any structural change.

---

## The skeleton (copy from here down into your new pack)

```markdown
---
name: {{pack-name}}
type: prompt-pack
purpose: {{what it produces, at what bar}}
reads: [{{canonical paths}}]
---

# {{pack-name}} — {{one-line job}}

> {{Charter: the artifact, the surface, the bar, the big-brother skill.}}

## Before you generate — read these
1. `workspace/VOICE.md` — {{why}}. Non-negotiable.
2. `workspace/PROOF-BANK.md` — every number traces to a row here. Never invent a number.
3. {{other reads, each with why}}

## Inputs (ask for any that are missing — don't guess)
- **{{input}}:** {{options / default}}
- **The proof:** which PROOF-BANK row(s)? Status of each.
- **Mode:** authority / reach / hybrid (INV-12; CALIBRATION may override).
- **CTA destination:** {{default}}.

## The procedure
1. {{step}}
2. {{step}}
3. Voice-check (`spec/voice-gates.md`) and signal-check (`workspace/prompts/signal-check.md`, target ≥7).

## Output structure
​```
## METADATA
{{the at-a-glance block: format · mode · proof rows · scans · scores}}

## {{THE ARTIFACT}}
{{body skeleton}}

## OPEN SLOTS
[every [CONFIRM: …] slot listed so nothing ships unverified]
​```

## Hard constraints ({{artifact}} fails review if any break)
- **No invented numbers.** Every figure → a PROOF-BANK `[VERIFIED]` row, or a `[CONFIRM: …]` slot.
- {{constraint}}
- {{constraint}}

## Worked example
{{the artifact at the bar — or the pointer to the canonical example named in workspace/CALIBRATION.md}}

*v1 — {{YYYY-MM-DD}}.*
```

---

*v1 — the prompt-pack authoring contract. Change this file and every pack inherits the change — treat it as a sacred format.*
