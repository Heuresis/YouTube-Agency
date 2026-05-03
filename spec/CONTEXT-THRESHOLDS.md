# CONTEXT-THRESHOLDS.md — Per-Skill Compartment Gate Table

> **Load-bearing.** Every skill declares the minimum compartment completeness it requires. Below threshold = the skill refuses to execute and interview-mode activates to fill the gap. This file is the authoritative gate table — skill SKILL.md frontmatter must match.

---

## Pillar-level baseline gates

Before any skill in a pillar can execute, the pillar baseline must be met:

| Pillar | Baseline % |
|---|---|
| Foundations (Identity, Audience, Offer) | 60 |
| Channel Architecture | 50 |
| Content Engine | 50 |
| Hook & Retention OS | 60 |
| Production & Post | 50 |
| Distribution & Algorithm Surface | 50 |
| Audience Building Loop | 50 |
| Sales & Conversion Stack | 60 |
| Operations & Intelligence | 40 |

A pillar baseline of 60% means: the average completeness across all that pillar's compartments is ≥60%, AND no compartment in the pillar is below 30%.

---

## Per-skill thresholds

### Foundations (5)

| Skill | Required Compartments + Min % |
|---|---|
| `/build-niche` | _seeder skill — no thresholds_ |
| `/build-audience` | creator_identity_matrix ≥ 30 |
| `/design-offer` | creator_identity_matrix ≥ 60, audience_intelligence_system ≥ 60 |
| `/build-channel-architecture` | creator_identity_matrix ≥ 50, audience_intelligence_system ≥ 50, offer_architecture ≥ 40 |
| `/extract-creator-voice` | creator_identity_matrix ≥ 30 |

### Content Engine (4)

| Skill | Required Compartments + Min % |
|---|---|
| `/idea-farm` | audience_intelligence_system ≥ 50, content_engine ≥ 30 |
| `/content-mix-strategy` | audience_intelligence_system ≥ 60, channel_architecture ≥ 50, content_engine ≥ 40 |
| `/research-brief` | audience_intelligence_system ≥ 50, content_engine ≥ 50 |
| `/series-architect` | channel_architecture ≥ 70, audience_intelligence_system ≥ 70, offer_architecture ≥ 60 |

### Hook & Retention (4)

| Skill | Required Compartments + Min % |
|---|---|
| `/write-hook` | audience_intelligence_system ≥ 60, hook_retention_os ≥ 40 |
| `/architect-loops` | hook_retention_os ≥ 50, content_engine ≥ 50 |
| `/retention-engineer` | hook_retention_os ≥ 60, audience_intelligence_system ≥ 60 |
| `/audit-retention` | hook_retention_os ≥ 40, channel_architecture ≥ 50, intelligence ≥ 30 |

### Production (6)

| Skill | Required Compartments + Min % |
|---|---|
| `/write-authority-script` | creator_identity_matrix ≥ 70, audience_intelligence_system ≥ 70, offer_architecture ≥ 60, hook_retention_os ≥ 50 |
| `/write-reach-script` | creator_identity_matrix ≥ 60, audience_intelligence_system ≥ 50, hook_retention_os ≥ 70, channel_architecture ≥ 60 |
| `/write-shorts-script` | creator_identity_matrix ≥ 50, audience_intelligence_system ≥ 50, hook_retention_os ≥ 60 |
| `/thumbnail-brief` | production_and_post ≥ 40, channel_architecture ≥ 50, audience_intelligence_system ≥ 50 |
| `/title-thumbnail-pair` | channel_architecture ≥ 60, audience_intelligence_system ≥ 60, production_and_post ≥ 50 |
| `/editor-brief` | creator_identity_matrix ≥ 60, production_and_post ≥ 40 |

### Distribution (4)

| Skill | Required Compartments + Min % |
|---|---|
| `/title-options` | distribution_algorithm ≥ 30, audience_intelligence_system ≥ 50 |
| `/description-builder` | distribution_algorithm ≥ 30, offer_architecture ≥ 40 |
| `/publish-checklist` | distribution_algorithm ≥ 50, channel_architecture ≥ 50 |
| `/repurposing-cascade` | distribution_algorithm ≥ 40, content_engine ≥ 40 |

### Audience Building (3)

| Skill | Required Compartments + Min % |
|---|---|
| `/community-cadence` | creator_identity_matrix ≥ 60, audience_building_loop ≥ 30 |
| `/lead-magnet-bridge` | audience_intelligence_system ≥ 70, offer_architecture ≥ 60, audience_building_loop ≥ 50 |
| `/cross-niche-bridge` | channel_architecture ≥ 70, offer_architecture ≥ 60, audience_building_loop ≥ 50 |

### Monetization & Sales (4)

| Skill | Required Compartments + Min % |
|---|---|
| `/write-pinned-vsl` | creator_identity_matrix ≥ 75, audience_intelligence_system ≥ 75, offer_architecture ≥ 80 |
| `/build-application-funnel` | offer_architecture ≥ 70, sales_conversion_stack ≥ 40 |
| `/sales-call-script` | offer_architecture ≥ 70, audience_intelligence_system ≥ 70, sales_conversion_stack ≥ 50 |
| `/sponsor-fit` | creator_identity_matrix ≥ 70, audience_intelligence_system ≥ 60, sales_conversion_stack ≥ 30 |

### Operations (1)

| Skill | Required Compartments + Min % |
|---|---|
| `/build-sop` | operations_intelligence ≥ 30 |

### Intelligence (3)

| Skill | Required Compartments + Min % |
|---|---|
| `/kpi-dashboard` | operations_intelligence ≥ 40 |
| `/leak-audit` | hook_retention_os ≥ 40, distribution_algorithm ≥ 40, sales_conversion_stack ≥ 40, operations_intelligence ≥ 40 |
| `/library-compound` | operations_intelligence ≥ 40 |

---

## Mode-specific overlays

When the operator declares the video mode at intent time, an overlay applies on top of the baseline:

### Authority mode (back-end-conversion-driven videos)
Add to all production skills:
- offer_architecture ≥ +20% (above the skill's stated minimum)
- sales_conversion_stack ≥ 30% (so the channel architecture has somewhere to send converts)

### Reach mode (audience-growth videos)
Add to all production skills:
- hook_retention_os ≥ +10% (above the skill's stated minimum)
- channel_architecture ≥ +10% (because reach-mode videos lean on channel architecture for conversion)

### Hybrid mode
Both overlays apply.

---

## Override mechanism

The creator can override a threshold gate with explicit acknowledgement:

```
[OVERRIDE — proceeding at <skill> with <compartment> at <%> below threshold of <target%>]
[Reason: <creator-supplied>]
[Confidence: LOW — output marked DRAFT-ONLY, do not ship without further validation]
```

Override outputs:
- carry the `[GAP: ...]` flag in their metadata block
- are explicitly marked `confidence: LOW` in the Signal 5-tuple
- log a TODO entry in the encoding flywheel for the gap
- are excluded from the Blind Output Test pool until the gap is closed

Overrides are tolerated when the creator is making a judgement call. Overrides are NOT tolerated when the gap is fixable in a 30-minute interview — in that case, interview-mode runs instead.

---

## Schema validation

Every SKILL.md frontmatter declares its `required_compartments` block. The boot sequence runs a validation pass: any skill whose declared thresholds don't match this file fails boot validation. This file is the source of truth.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
