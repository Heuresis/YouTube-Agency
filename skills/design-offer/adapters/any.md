---
runtime: any
skill: design-offer
binding_type: chat
---

# Design Offer — Any-Runtime Adapter

## Invocation
"run /design-offer" or "design my offer" or "build the back-end offer doc."

## Inputs
- `{{creator_identity_matrix}}` and `{{audience_intelligence_system}}` from company.yaml
- Per-invocation: creator's existing offer (if any) including price, current customers, current results

## Outputs
- Chat: full Offer Document
- Filesystem (optional): `output/design-offer/<timestamp>.md`
- Compartment write-back: `offer_architecture` in company.yaml (creator approves before write)

## Constraints
Refuses to ship if LTV:CAC < 3:1. Enters revision loop or escalates to creator with the economics-gap diagnosis.

## Fallback
Universal fallback. No further fallback.
