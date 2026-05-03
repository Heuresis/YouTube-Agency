---
runtime: any
skill: leak-audit
binding_type: chat
---

# Leak Audit — Any-Runtime Adapter

## Invocation
"run /leak-audit" or "diagnose where my channel is leaking."

## Inputs
- All 11 compartments + KPI data + per-video audits

## Outputs
- Chat: full audit per Output Format
- Filesystem (optional): `output/leak-audits/<period>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
