---
runtime: any
skill: publish-checklist
binding_type: chat
---

# Publish Checklist — Any-Runtime Adapter

## Invocation
"run /publish-checklist for [video]" or "pre-publish gate."

## Inputs
- All production assets + scripts + briefs from upstream
- All 11 compartments

## Outputs
- Chat: full checklist per Output Format
- Filesystem (optional): `output/publish-checklists/<title>.md`
- Compartment write-back: idea consumed, formula log, publish event

## Constraints
Refuses GO if any INV fails or any required asset missing.

## Fallback
Universal fallback.
