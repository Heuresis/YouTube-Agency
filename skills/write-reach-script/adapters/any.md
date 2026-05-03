---
runtime: any
skill: write-reach-script
binding_type: chat
---

# Write Reach Script — Any-Runtime Adapter

## Invocation
"run /write-reach-script for [title]" or "draft the reach script."

## Inputs
- Research brief, hook, loop architecture, retention engineering
- Compartments 1, 2, 4, 6 from company.yaml

## Outputs
- Chat: full script per Output Format
- Filesystem (optional): `output/scripts/reach/<title>.md`

## Constraints
Refuses if hook_retention_os < 80 or channel_architecture < 70 (reach overlays). Refuses if predicted AVD < 75% (reach floor). Refuses if INV-10 mismatch.

## Fallback
Universal fallback.
