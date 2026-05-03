---
runtime: any
skill: description-builder
binding_type: chat
---

# Description Builder — Any-Runtime Adapter

## Invocation
"run /description-builder for [video]" or "build the description."

## Inputs
- Title + script + series state + offer CTAs
- Compartments 3, 4, 8 from company.yaml

## Outputs
- Chat: description per Output Format
- Filesystem (optional): `output/descriptions/<title>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
