---
runtime: any
skill: retention-engineer
binding_type: chat
---

# Retention Engineer — Any-Runtime Adapter

## Invocation
"run /retention-engineer on [script]" or "engineer retention scaffolding for [video]."

## Inputs
- Script draft + loop architecture + hook
- Compartments 2, 4, 6 from company.yaml

## Outputs
- Chat: retention engineering doc per Output Format
- Filesystem (optional): `output/retention-engineer/<title>.md`

## Constraints
Refuses to ship script if predicted AVD < channel bottom-quartile band (INV-9).

## Fallback
Universal fallback.
