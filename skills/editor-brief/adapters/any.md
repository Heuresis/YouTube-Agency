---
runtime: any
skill: editor-brief
binding_type: chat
---

# Editor Brief — Any-Runtime Adapter

## Invocation
"run /editor-brief for [video]" or "brief the editor for [video title]."

## Inputs
- Final script + retention engineering map + title-thumbnail pair
- Compartments 1, 6, 7 from company.yaml

## Outputs
- Chat: brief per Output Format
- Filesystem (optional): `output/editor-briefs/<title>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
