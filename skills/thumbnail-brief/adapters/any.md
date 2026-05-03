---
runtime: any
skill: thumbnail-brief
binding_type: chat
---

# Thumbnail Brief — Any-Runtime Adapter

## Invocation
"run /thumbnail-brief for [video]" or "brief the thumbnail."

## Inputs
- Title, script first-30s, mode, awareness level
- Compartments 4, 7, 2 from company.yaml

## Outputs
- Chat: brief per Output Format
- Filesystem (optional): `output/thumbnails/<title>-brief.md`

## Constraints
Refuses if INV-10 alignment fails or INV-14 fair-use fails.

## Fallback
Universal fallback.
