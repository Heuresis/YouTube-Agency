---
runtime: any
skill: build-application-funnel
binding_type: chat
---

# Build Application Funnel — Any-Runtime Adapter

## Invocation
"run /build-application-funnel" or "design my application + booking flow."

## Inputs
- Compartments 3, 10 from company.yaml

## Outputs
- Chat: full funnel per Output Format
- Filesystem (optional): `output/application-funnel/<offer>.md`
- Compartment write-back: `sales_conversion_stack`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
