---
runtime: any
skill: build-audience
binding_type: chat
---

# Build Audience — Any-Runtime Adapter

## Invocation
"run /build-audience" or "build the audience profile" or descriptive ("help me write up my ICP for the channel").

## Inputs
- `{{creator_identity_matrix}}` from company.yaml
- `{{offer_architecture}}` from company.yaml (if populated)
- `{{channel_architecture.niche_definition}}` from company.yaml (if populated)
- Per-invocation: any creator-supplied VOC data — sales call transcripts, comment exports, survey responses, DMs, community thread links

## Outputs
- Chat: full Audience Intelligence Document per Output Format in SKILL.md
- Filesystem (optional): `output/build-audience/<timestamp>.md`
- Compartment write-back: full update to `audience_intelligence_system` in company.yaml (creator approves before write)

## Constraints
None beyond SKILL.md's stated constraints. The skill will refuse to ship below 70% compartment completeness — if the creator's VOC sources are too thin, the skill enters interview-mode + research-task mode.

## Fallback
This adapter is the universal fallback. No further fallback exists.
