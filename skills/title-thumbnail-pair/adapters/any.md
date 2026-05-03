---
runtime: any
skill: title-thumbnail-pair
binding_type: chat
---

# Title + Thumbnail Pair — Any-Runtime Adapter

## Invocation
"run /title-thumbnail-pair for [video]" or "design the title + thumbnail unit."

## Inputs
- Title hypothesis, thumbnail brief, script first-30s
- Compartments 2, 4, 7, 8 from company.yaml

## Outputs
- Chat: 3-5 pairs per Output Format
- Filesystem (optional): `output/title-thumbnail-pairs/<title>.md`

## Constraints
Refuses pairs that fail INV-10 or INV-14.

## Fallback
Universal fallback.
