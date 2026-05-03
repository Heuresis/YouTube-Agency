---
runtime: any
skill: write-pinned-vsl
binding_type: chat
---

# Write Pinned VSL — Any-Runtime Adapter

## Invocation
"run /write-pinned-vsl" or "draft the pinned VSL."

## Inputs
- Compartments 1, 2, 3, 4, 6 from company.yaml
- Real anonymized case studies from creator's prior work

## Outputs
- Chat: full VSL script per Output Format
- Filesystem (optional): `output/scripts/vsl/<title>.md`

## Constraints
Refuses below identity 75 / audience 75 / offer 80. Refuses if no real case study available (no fabrication). Refuses if any income-claim language present.

## Fallback
Universal fallback.
