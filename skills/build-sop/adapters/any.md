---
runtime: any
skill: build-sop
binding_type: chat
---

# Build SOP — Any-Runtime Adapter

## Invocation
"run /build-sop for [workflow]" or "write the SOP for [workflow]."

## Inputs
- Workflow description
- Compartment 11 from company.yaml

## Outputs
- Chat: SOP per Output Format
- Filesystem (optional): `output/sops/<workflow>.md`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
