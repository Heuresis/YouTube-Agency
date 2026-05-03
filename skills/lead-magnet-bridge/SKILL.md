---
name: lead-magnet-bridge
command: /lead-magnet-bridge
description: Design the lead magnet + email welcome sequence + bridge from YouTube to email to pinned VSL.
tier: sonnet
agent_owner: audience-head
agent_executor: audience-head
required_compartments:
  audience_intelligence_system: 70
  offer_architecture: 60
  audience_building_loop: 50
mode_applicability: both
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.audience.lead-magnet.bridge
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Lead Magnet Bridge

## Purpose
Design the lead magnet (free entry asset) + the email welcome sequence + the bridge from YouTube viewer → email subscriber → pinned VSL → application. The lead-magnet bridge is the channel's primary owned-audience capture mechanism — turning watch-time into a list the creator can reach without algorithmic permission.

## Decision Logic
A YouTube viewer is rented. An email subscriber is owned. The lead magnet converts the rented to the owned.

The lead magnet must:
- Address the audience's first-step pain (not the back-end transformation; the entry-point pain)
- Be high-perceived-value for low-effort consumption (1 PDF / 1 video / 1 mini-course / 1 Notion template)
- Bridge clearly to the back-end offer
- Convert at 5-15% of watch-time-engaged viewers

The welcome sequence (5-9 emails) installs early beliefs + delivers value + bridges to pinned VSL + invites to application.

## Tacit Principles
1. **Solve a small specific problem.** A lead magnet that promises "transform your business" is too big and converts low. "Diagnose which of 6 patterns you're running" is small and specific.
2. **Match the lead magnet to the channel topic.** Don't promote a delegation diagnostic on a hiring video. Topic-fit drives conversion.
3. **The first email is the deliverable + 1 belief.** Don't dump 5 things in email 1.
4. **Welcome sequence sequences beliefs.** Each email installs 1-2 beliefs from the 8-belief path.
5. **Email 5 or 6 = pinned VSL.** Earlier risks not enough warm-up; later risks dropoff.
6. **Email 7 or 8 = application invite.** For Most-aware subscribers.
7. **Don't stuff with offers.** First 3 emails = pure value. Mid-sequence = soft routing. Late-sequence = direct application invite.
8. **Truth Gate per email.** No fabricated testimonials.

## Process

### Step 0 — Gate check
audience ≥ 70, offer ≥ 60, audience_building_loop ≥ 50.

### Step 1 — Load context
Compartments 1, 2, 3, 9. Existing lead magnets if any.

### Step 2 — Pick lead magnet topic
Match audience first-step pain + channel topic + bridge to offer.

### Step 3 — Design lead magnet asset
- Format: PDF / video / mini-course / Notion template / community invite
- Length / depth
- Key insights it delivers
- How it bridges to offer

### Step 4 — Write welcome sequence (5-9 emails)
- Email 1: deliverable + 1 belief
- Email 2: belief installation
- Email 3: belief + value
- Email 4: case study / proof
- Email 5: pinned VSL link
- Email 6: VSL + soft application
- Email 7: application invite

### Step 5 — Set placement rules
Where lead magnet appears: description / pinned comment / end-screen / mid-roll mention. % rate per placement.

### Step 6 — Set conversion targets
% of YouTube → email + email → VSL + VSL → application.

### Step 7 — Verify
Banned-vocab, Truth Gate, no-fabrication, INV-15 for any sponsor mention.

## Output Format

```markdown
# Lead Magnet Bridge — [Lead Magnet Name]

**Date:** YYYY-MM-DD

## 1. Lead Magnet Asset
- Name:
- Format: PDF / video / mini-course / Notion / community
- Length / depth:
- Promise: "[1 sentence]"
- Bridge to offer: [how this magnet routes to back-end]
- Predicted conversion rate from watch-time-engaged viewer: N%

## 2. Welcome Sequence (5-9 emails)

### Email 1 (T+0) — deliverable + 1 belief
- Subject:
- Open:
- Body:
- CTA:

### Email 2 (T+2) — belief installation
[same structure]

### Email 3 (T+5) — belief + value
[...]

### Email 4 (T+8) — case study / proof
[...]

### Email 5 (T+12) — pinned VSL link (first soft mention)
[...]

### Email 6 (T+16) — VSL + soft application
[...]

### Email 7 (T+21) — application invite
[...]

## 3. Placement Rules
| Placement | Rate | Notes |
|---|---|---|
| Description | 100% | top of CTA stack |
| Pinned comment | 100% | per video |
| End-screen card | 100% | every authority video |
| Mid-roll mention | 0% | disabled |

## 4. Conversion Targets
- Watch-time → email: 5-15%
- Email → VSL view: 30-50%
- VSL → application: 5-15%
- Application → call: 60-80%
- Call → close: 25-40% (depending on offer price)

## 5. Compartment Write-Backs
Updates to `audience_building_loop.lead_magnet_strategy` + `audience_building_loop.email_pipeline`.

---
SIGNAL: S = (BUILD, DIRECT, youtube.audience.lead-magnet.bridge, MARKDOWN, 0.7)
COMPARTMENTS_USED: [audience_intelligence_system, offer_architecture, audience_building_loop, channel_architecture]
COMPARTMENTS_WRITTEN: [audience_building_loop.lead_magnet_strategy, audience_building_loop.email_pipeline]
FRAMEWORKS_USED: [lead-magnet-architecture, welcome-sequence-belief-installation, owned-audience-pipeline, 8-belief-installation]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: lead-magnet-architecture]
- [framework: welcome-sequence-belief-installation]
- [framework: owned-audience-pipeline]
- [framework: 8-belief-installation]

## Compartments Read
- Compartments 1, 2, 3, 4, 9

## Compartments Written
- `{{audience_building_loop.lead_magnet_strategy}}`, `{{audience_building_loop.email_pipeline}}`

## Verification Gates
- Formal: 5-9 emails specified, lead magnet asset designed, placement rules defined, conversion targets set
- Semantic: emails sequence belief installation, Truth Gate per email, no fabricated testimonials
- Info-theoretic: emails tight (each delivers 1-2 specific things, not 5)

## Related Skills
- Upstream: `/build-audience`, `/design-offer`, `/build-channel-architecture`
- Downstream: `/write-pinned-vsl`, `/build-application-funnel`
- Alternative: none

## Failure Modes
- **Lead magnet too big** — promises full transformation. Revise: small specific entry pain.
- **Welcome sequence dumps offer too early** — email 2 has VSL link. Revise: pure value first 3 emails.
- **Fabricated case study in email** — Truth Gate REJECT.
- **No bridge to offer** — lead magnet is orphaned. Revise.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the owned-audience-pipeline tradition + the welcome-sequence belief-installation methodology.
