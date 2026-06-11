---
runtime: any
skill: write-script
binding_type: chat
---

# Write Script — Any-Runtime Adapter

Runtime-agnostic binding for `/write-script`. The skill body (`../SKILL.md`) is the decision procedure; this adapter only specifies how to load context and emit output in any runtime (CLI agent, IDE, bare chat).

## Invocation
"run /write-script for [topic]" · "write the script for [working title]" · "turn this pitch into a script."

## Load order (always — later sources NEVER override earlier ones)
1. `INVARIANTS.md` — L0, the 17 sacred rules
2. `workspace/VOICE.md` — the spoken-voice rules, `phrases_to_use` / `phrases_to_avoid`, cadence anchors. **Non-negotiable: creator voice beats framework mechanics.**
3. `workspace/PROOF-BANK.md` — every number traces to a row; never invent one
4. `workspace/STRATEGY.md` + `workspace/CONTENT-ENGINE.md` — mode mix, format, awareness defaults, funnel position
5. `reference/frameworks/` — the craft mechanics (hooks, loops, beliefs, awareness, sophistication), applied **through** the reconciliation table in SKILL.md
6. `reference/templates/example-scripts.md` — the calibration corpus (style-match targets), plus `reference/swipe-file/scripts/` entries once the library compounds
7. The workspace voice-anchor script, if one exists — the creator-approved draft that sets the cadence bar

Because the order is an override hierarchy, a framework's surface tactic can never displace a VOICE.md rule, and no example script can displace an invariant. If a workspace doc is missing, fall back to the matching `company.yaml` compartment and log the gap.

## Emit
A single markdown script file in `workspace/drafts/YYYY-MM-DD--<slug>-SCRIPT.md` (or inline in chat if the runtime has no filesystem), in the Output Format from SKILL.md — including the reconciliation log, VOICE-CHECK markers, and OPEN SLOTS. Packaging (title/thumbnail/description/SEO) is a **separate** invocation (`/title-thumbnail-pair` + `/description-builder`) — do not bundle it into the script file unless asked.

## Constraints
- Refuses below identity 70 / audience 70 / hook_retention_os 60 / content_engine 50 → interview mode
- Refuses to ship if predicted AVD < channel bottom-quartile band (INV-9)
- Refuses to ship on title-thumbnail-promise mismatch (INV-10)
- All five voice gates per `spec/voice-gates.md` must pass before the script leaves the skill
- Max 2 revisions before escalating to the creator

## Runtime notes
- No runtime-specific tools are required; this is a writing skill. If the runtime can read the repo, load the files above directly. If not (bare chat), the operator pastes `workspace/VOICE.md` + `workspace/PROOF-BANK.md` + the relevant framework files first, in load order.
- The read-aloud test is performed by the operator/creator, not the runtime — always return the VOICE-CHECK markers so they can run it.

## Fallback
Universal fallback.
