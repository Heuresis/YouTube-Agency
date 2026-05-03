---
runtime: any
skill: sponsor-fit
binding_type: chat
---

# Sponsor Fit — Any-Runtime Adapter

## Invocation
"run /sponsor-fit on [sponsor]" or "evaluate this sponsor fit."

## Inputs
- Sponsor pitch + product details
- Compartments 1, 2, 10 from company.yaml

## Outputs
- Chat: full evaluation per Output Format
- Filesystem (optional): `output/sponsor-fit/<sponsor-archetype>-<date>.md`

## Constraints
Refuses YES if creator hasn't tested 60+ days. Refuses if INV-15 or INV-16 violations.

## Fallback
Universal fallback.
