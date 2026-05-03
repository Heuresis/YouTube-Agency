---
runtime: any
skill: repurposing-cascade
binding_type: chat
---

# Repurposing Cascade — Any-Runtime Adapter

## Invocation
"run /repurposing-cascade for [video]" or "cascade this long-form."

## Inputs
- Long-form video + transcript + retention engineering map
- Compartments 5, 8 from company.yaml

## Outputs
- Chat: cascade per Output Format
- Filesystem (optional): `output/repurposing-cascades/<title>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
