---
runtime: any
skill: kpi-dashboard
binding_type: chat
---

# KPI Dashboard — Any-Runtime Adapter

## Invocation
"run /kpi-dashboard" or "build the KPI dashboard."

## Inputs
- Compartments 3, 8, 10, 11 from company.yaml

## Outputs
- Chat: dashboard per Output Format
- Filesystem (optional): `output/kpi-dashboard.md`
- Compartment write-back: `operations_intelligence.kpi_dashboard`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
