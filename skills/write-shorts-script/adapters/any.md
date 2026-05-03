---
runtime: any
skill: write-shorts-script
binding_type: chat
---

# Write Shorts Script — Any-Runtime Adapter

## Invocation
"run /write-shorts-script for [topic]" or "make a Short from [long-form video]."

## Inputs
- Topic / hook / one-beat insight
- Compartments 1, 2, 6 from company.yaml
- Long-form bridge target (if repurposing)

## Outputs
- Chat: Short script per Output Format
- Filesystem (optional): `output/scripts/shorts/<topic>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
