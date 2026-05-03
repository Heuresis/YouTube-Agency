---
runtime: any
skill: idea-farm
binding_type: chat
---

# Idea Farm — Any-Runtime Adapter

## Invocation
"run /idea-farm" or "fill the idea backlog" or "what should I make next."

## Inputs
- Compartments 2, 4, 5 from company.yaml
- Per-invocation: recent comments, sales-call themes, current trend windows

## Outputs
- Chat: backlog table per Output Format
- Filesystem (optional): `output/idea-farm/<timestamp>.md`
- Compartment write-back: `content_engine.idea_farm`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
