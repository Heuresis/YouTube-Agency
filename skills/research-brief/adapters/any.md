---
runtime: any
skill: research-brief
binding_type: chat
---

# Research Brief — Any-Runtime Adapter

## Invocation
"run /research-brief on [topic]" or "prep the brief for [video idea]."

## Inputs
- Idea row from `/idea-farm` (or creator-supplied topic)
- Compartments 2, 4, 5 from company.yaml
- Per-invocation: any sources / VOC data the creator surfaces

## Outputs
- Chat: brief per Output Format
- Filesystem (optional): `output/research-brief/<title>-<timestamp>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
