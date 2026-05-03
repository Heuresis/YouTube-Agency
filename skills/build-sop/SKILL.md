---
name: build-sop
command: /build-sop
description: Build a Standard Operating Procedure for any recurring channel workflow.
tier: haiku
agent_owner: intelligence-head
agent_executor: intelligence-head
required_compartments:
  operations_intelligence: 30
mode_applicability: n/a
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.operations.sop.build
  format: MARKDOWN
  weight: 0.5
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Build SOP

## Purpose
Build a Standard Operating Procedure (SOP) for any recurring channel workflow — content creation, publishing, sponsor integration, launch sequence, comment triage, etc. The SOP is durable team-level documentation that survives team churn.

## Decision Logic
SOPs ship with: outputs (what the SOP produces), decision-rights (who decides what), checkpoints (when to escalate), inputs needed, the steps themselves, edge cases, and revision rules.

The role-design-first principle applies to SOPs themselves: the SOP needs an owner — the role responsible for updating it, deciding when to deviate, and handling edge cases. Without ownership, the SOP becomes a snapshot that dies.

## Tacit Principles
1. **The role owns the SOP.** Not the founder.
2. **Outputs first, steps second.** Define what the SOP produces before listing how.
3. **Decision-rights explicit.** Who decides at each branch.
4. **Checkpoints + escalation.** When to stop and consult.
5. **Edge cases enumerated.** Don't pretend the SOP covers all cases.
6. **Revision rules.** When does the SOP get updated, by whom.
7. **Voice-faithful where audience-facing.** Comment-reply SOPs use creator voice.

## Process

### Step 0 — Gate check
operations_intelligence ≥ 30.

### Step 1 — Define the workflow
What recurring task does this SOP cover?

### Step 2 — Define outputs
What does running the SOP produce?

### Step 3 — Define inputs needed
What's required to start?

### Step 4 — Define decision-rights
Who decides what at each branch?

### Step 5 — Define steps
Sequence of actions.

### Step 6 — Define checkpoints + escalation
Where the operator pauses + consults.

### Step 7 — Define edge cases
Known exceptions + how to handle.

### Step 8 — Define ownership + revision
Role-owner + cadence for review.

### Step 9 — Verify
Banned-vocab if audience-facing, voice-faithful if so.

## Output Format

```markdown
# SOP — [Workflow Name]

**Owner role:** [role name]
**Last updated:** YYYY-MM-DD
**Revision cadence:** monthly / quarterly

## 1. Outputs
[What this SOP produces]

## 2. Inputs Needed
[Required to start]

## 3. Decision-Rights
| Branch | Decision-rights with |
|---|---|

## 4. Steps
1. [step]
2. [step]
...

## 5. Checkpoints + Escalation
| When to pause | Who to consult |
|---|---|

## 6. Edge Cases
| Case | How to handle |
|---|---|

## 7. Ownership + Revision
- Owner: [role]
- Revision cadence: [monthly / quarterly]
- Revision criteria: [when to revise outside cadence]

---
SIGNAL: S = (BUILD, DIRECT, youtube.operations.sop.build, MARKDOWN, 0.5)
COMPARTMENTS_USED: [operations_intelligence]
FRAMEWORKS_USED: [role-design-first-applied-to-sops, decision-rights-architecture, edge-case-enumeration]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: role-design-first-applied-to-sops]
- [framework: decision-rights-architecture]
- [framework: edge-case-enumeration]

## Compartments Read
- `{{operations_intelligence}}`

## Verification Gates
- Formal: outputs + inputs + decision-rights + steps + checkpoints + edge cases + ownership defined
- Semantic: voice-faithful if audience-facing, no banned vocab in audience-facing copy
- Info-theoretic: SOP tight (not bloated)

## Related Skills
- Upstream: any skill that produces a recurring workflow
- Downstream: SOP execution by team
- Alternative: none

## Failure Modes
- **No owner** — orphaned SOP. Add role-owner.
- **No edge cases** — first edge case will break workflow. Enumerate.
- **No revision rules** — SOP stales. Add cadence.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the role-design-first methodology applied to SOPs themselves (the meta-application of the channel's own framework to its own operations).
