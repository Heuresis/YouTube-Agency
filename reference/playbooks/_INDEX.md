# Playbooks — Multi-Step Operations Index

> 8 playbooks covering the channel's multi-step operations. Each playbook is a structured sequence of operations with named steps, gates, and failure modes. Use these when running a multi-step workflow that doesn't reduce to a single skill.

## Playbook map

| Playbook | When to invoke | Primary skills referenced | Typical duration |
|---|---|---|---|
| [channel-launch](channel-launch.md) | New channel; months 0–3 from setup to library compounding | `/build-niche`, `/build-audience`, `/design-offer`, `/build-channel-architecture`, `/extract-creator-voice`, `/write-authority-script`, `/leak-audit`, `/library-compound`, `/lead-magnet-bridge`, `/audit-retention` | 90 days |
| [series-build](series-build.md) | Designing a 5–15 video belief-installation series | `/series-architect`, `/write-authority-script`, `/architect-loops`, `/audit-retention`, `/library-compound` | 5–15 weeks |
| [sponsor-integration](sponsor-integration.md) | Sponsor inquiry / proactive outreach / follow-on | `/sponsor-fit`, `/write-authority-script`, `/publish-checklist` | Per integration: 4–8 weeks lifecycle |
| [viral-postmortem](viral-postmortem.md) | A reach-mode video goes viral (>5x channel median) | `/audit-retention`, `/leak-audit`, `/library-compound`, `/community-cadence`, `/lead-magnet-bridge` | 14–21 days |
| [dual-mode-mix-shift](dual-mode-mix-shift.md) | Mix-ratio adjustment per channel-stage / offer / awareness / CTR / AVD trigger | `/content-mix-strategy`, `/leak-audit`, `/audience-researcher` work | Quarterly evaluation |
| [lead-magnet-bridge-deployment](lead-magnet-bridge-deployment.md) | Building or revising the YouTube → email pipeline | `/lead-magnet-bridge`, `/community-cadence`, `/build-application-funnel` | 2–4 weeks initial; ongoing |
| [pinned-vsl-deployment](pinned-vsl-deployment.md) | First-time pinned VSL deployment OR revision | `/write-pinned-vsl`, `/build-application-funnel`, `/sales-call-script`, `/audit-retention`, `/library-compound` | 4–8 weeks deploy + 2–4 months iterate |
| [retention-postmortem](retention-postmortem.md) | A video tanks on AVD; structured diagnosis required | `/audit-retention`, `/library-compound`, compartment updates | 1–2 weeks per video |

## How playbooks differ from skills

- **Skills** are single-step procedures. They produce one artifact (a script, a brief, an audit, a thumbnail spec).
- **Playbooks** are multi-step orchestrations. They sequence multiple skills + non-skill operations (publish-day actions, community engagement, follow-up communication) over days, weeks, or months.

When the operator needs a single artifact, run the relevant skill. When the operator needs a structured multi-step operation, follow the relevant playbook.

## Playbook structure

Every playbook documents:

- **When to invoke** — trigger conditions
- **Pre-launch / pre-design prerequisites** — gate conditions (compartment thresholds, prior work)
- **Step-by-step operations** — sequenced operations with timing
- **Failure modes** — common ways the playbook fails + prevention
- **What this playbook doesn't cover** — boundaries; references to skills or other playbooks

## Cross-playbook dependencies

Some playbooks invoke other playbooks:

- **channel-launch** invokes **pinned-vsl-deployment** in week 11
- **channel-launch** invokes **lead-magnet-bridge-deployment** during the foundational-content phase
- **series-build** may include a **pinned-vsl-deployment** if the series's final video is the pinned VSL
- **viral-postmortem** invokes **lead-magnet-bridge-deployment** for the email-push step
- **dual-mode-mix-shift** is invoked by **pinned-vsl-deployment** for the pre-launch authority push

The cross-references are documented in each playbook's "what this playbook doesn't cover" section.

## Playbook ownership

Each playbook is operationally owned by:

- **channel-launch** — `youtube-ceo` orchestrates; foundations-head + content-head + production-head + distribution-head + monetization-head all execute
- **series-build** — `content-orchestrator` owns; content-head + retention-head primary
- **sponsor-integration** — `monetization-orchestrator` owns; monetization-head primary
- **viral-postmortem** — `intelligence-head` owns; postmortem-analyst primary
- **dual-mode-mix-shift** — `content-head` owns; content-orchestrator coordinates
- **lead-magnet-bridge-deployment** — `audience-head` owns; with monetization-head for offer-side
- **pinned-vsl-deployment** — `monetization-head` owns; vsl-builder primary
- **retention-postmortem** — `intelligence-head` owns; postmortem-analyst primary; retention-head consults

See `agents/_INDEX.md` for the full agent roster and reporting tree.

## Playbook updates

These playbooks are versioned. Updates are appended to the version line at each playbook's footer. Major revisions (structural changes to the playbook's flow) require creator sign-off.

Cycle-2 calibration: as the channel runs through these playbooks, lessons learned feed back into the playbook itself. A playbook that fails for a specific channel-archetype combination gets a calibrating note. Over cycles, the playbooks mature.

---

*v1.0 — 2026-05-03. 8 playbooks for the channel's multi-step operations. The OS's procedural surface for things that don't reduce to a single skill.*

*A Heuresis workspace template.*
