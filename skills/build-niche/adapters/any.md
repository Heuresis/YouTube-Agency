---
runtime: any
skill: build-niche
binding_type: chat
---

# Build Niche — Any-Runtime Adapter

## Invocation
The user invokes this skill in chat: "run /build-niche" or "execute the build-niche skill" or by describing what they need ("help me lock my channel niche").

## Inputs
- `{{creator_identity_matrix.basic_info}}` — read from company.yaml
- `{{offer_architecture.back_end_offers}}` — read from company.yaml if populated
- Per-invocation: any creator-supplied notes on candidate niches, prior channel attempts, audience research

## Outputs
- Chat: full markdown niche-definition document per Output Format in SKILL.md
- Filesystem (optional): `output/build-niche/<timestamp>.md` — same content
- Compartment write-back: updates to `channel_architecture.niche_definition` in company.yaml (creator approves before write)

## Constraints
None beyond SKILL.md's stated constraints.

## Fallback
This adapter is the universal fallback. No further fallback exists.
