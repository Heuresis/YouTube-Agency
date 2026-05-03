---
runtime: any
skill: sales-call-script
binding_type: chat
---

# Sales Call Script — Any-Runtime Adapter

## Invocation
"run /sales-call-script" or "write the discovery call script."

## Inputs
- Compartments 1, 2, 3, 10 from company.yaml

## Outputs
- Chat: full script per Output Format
- Filesystem (optional): `output/sales-call-script/<offer>.md`
- Compartment write-back: `sales_conversion_stack`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
