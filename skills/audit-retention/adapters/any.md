---
runtime: any
skill: audit-retention
binding_type: chat
---

# Audit Retention — Any-Runtime Adapter

## Invocation
"run /audit-retention on [video]" or "diagnose retention for [video URL or title]."

## Inputs
- Video metadata + analytics export (retention curve, comments, AVD, CTR)
- Compartments 4, 6, 11 from company.yaml

## Outputs
- Chat: full audit per Output Format
- Filesystem (optional): `output/audit-retention/<title>-<date>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
