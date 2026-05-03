---
runtime: any
skill: content-mix-strategy
binding_type: chat
---

# Content Mix Strategy — Any-Runtime Adapter

## Invocation
"run /content-mix-strategy" or "set my content mix" or "what's my mode mix for the next quarter."

## Inputs
- Compartments 2, 4, 5, 8 from company.yaml
- Recent channel KPIs (CTR, AVD, subscribers, conversion) if available

## Outputs
- Chat: full strategy doc + 12-week schedule
- Filesystem (optional): `output/content-mix-strategy/<period>.md`
- Compartment write-back: `content_engine.mode_mix`, `content_engine.brand_pillar_split`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
