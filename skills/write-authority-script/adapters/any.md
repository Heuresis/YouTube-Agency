---
runtime: any
skill: write-authority-script
binding_type: chat
---

# Write Authority Script — Any-Runtime Adapter

## Invocation
"run /write-authority-script for [title]" or "draft the authority script for video N."

## Inputs
- Research brief, hook, loop architecture, retention engineering (from upstream skills)
- Compartments 1, 2, 3, 4, 6 from company.yaml
- Title hypothesis (for INV-10 check)

## Outputs
- Chat: full script per Output Format with embedded production cues
- Filesystem (optional): `output/scripts/authority/<title>.md`

## Constraints
- Refuses to ship below identity 70 / audience 70 / offer 80 (with authority overlay) / hook_retention_os 50
- Refuses to ship if predicted AVD < channel bottom-quartile band (INV-9)
- Refuses to ship if title-thumbnail-promise mismatch (INV-10)
- Max 2 revisions before escalating to creator (INV-17)

## Fallback
Universal fallback.
