---
runtime: any
skill: series-architect
binding_type: chat
---

# Series Architect — Any-Runtime Adapter

## Invocation
"run /series-architect" or "design my series" or "build the 8-video series for the offer."

## Inputs
- Compartments 1-4 from company.yaml

## Outputs
- Chat: full Series Architecture Document
- Filesystem (optional): `output/series-architect/<name>.md`
- Compartment write-back: `channel_architecture.playlist_architecture.series_playlists`

## Constraints
None beyond SKILL.md.

## Fallback
Universal fallback.
