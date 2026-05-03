---
runtime: any
skill: write-hook
binding_type: chat
---

# Write Hook — Any-Runtime Adapter

## Invocation
"run /write-hook for [topic]" or "draft the hook for video [N]."

## Inputs
- Research brief (or per-invocation supplied topic + audience + awareness)
- Compartments 1, 2, 6 from company.yaml

## Outputs
- Chat: 3 hook variants per Output Format
- Filesystem (optional): `output/write-hook/<title>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
