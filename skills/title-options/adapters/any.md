---
runtime: any
skill: title-options
binding_type: chat
---

# Title Options — Any-Runtime Adapter

## Invocation
"run /title-options for [topic]" or "give me 8 title options."

## Inputs
- Topic + first-30s promise
- Compartments 2, 8 from company.yaml

## Outputs
- Chat: 8 titles per Output Format
- Filesystem (optional): `output/title-options/<topic>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
