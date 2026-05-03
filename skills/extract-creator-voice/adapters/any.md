---
runtime: any
skill: extract-creator-voice
binding_type: chat
---

# Extract Creator Voice — Any-Runtime Adapter

## Invocation
"run /extract-creator-voice" or "encode my voice" or "build my brand voice doc."

## Inputs
- `{{creator_identity_matrix.basic_info}}` from company.yaml
- Per-invocation: 5+ source artifacts (videos, blog posts, sales call transcripts, DMs, About page) supplied by creator

## Outputs
- Chat: full Creator Voice Document
- Filesystem (optional): `output/extract-creator-voice/<timestamp>.md`
- Compartment write-back: full update to `creator_identity_matrix` (creator approves before write)

## Constraints
Refuses to ship below ≥ 5 source artifacts referenced + ≥ 20 verbatim phrases. If insufficient, runs interview-mode against the prompts/.

## Fallback
Universal fallback. No further fallback.
