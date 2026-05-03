# Triggers — Cron / Webhook / Event

> Mirror of `paperclip.manifest.yaml`, with full description of each trigger's purpose, owner agent, and downstream effects. The OS runs continuously when wired into a runtime that supports these surfaces.

---

## Cron triggers

### Daily 06:00 — Idea Farm Refresh
- **Skill**: `/idea-farm`
- **Mode**: refresh-backlog
- **Owner agent**: content-head
- **Sources scanned**: comments, suggested videos, trending searches
- **Output**: rolling backlog updated; new ideas tagged by mode + awareness level + content pillar
- **Downstream**: producer (full-studio) reviews backlog at start of day; creator reviews on Monday

### Daily 08:00 — KPI Daily Pulse
- **Skill**: `/kpi-dashboard`
- **Mode**: daily-pulse
- **Owner agent**: intelligence-head
- **Output**: short report showing yesterday's published video performance, week-to-date subscriber growth, week-to-date applications received, sponsor pipeline status
- **Downstream**: producer reads daily; creator reads weekly summary

### Daily 09:00 — Community Pulse
- **Skill**: `/community-cadence` (mode: pull-overnight-comments)
- **Owner agent**: audience-head
- **Output**: comment triage report, high-signal comments flagged for creator/team
- **Downstream**: community-manager replies (with creator's voice profile); high-signal comments escalate to creator

### Daily 18:00 — Tomorrow's Research
- **Skill**: `/research-brief` (mode: prepare-next-day, auto-run: false)
- **Owner agent**: content-head
- **Output**: research pack for the next day's planned video, ready for creator/writer to review
- **Downstream**: writer (full-studio) or creator does morning research-pass instead of starting from cold

### Monday 09:00 — Weekly Leak Audit
- **Skill**: `/leak-audit` (mode: full-six-layer)
- **Owner agent**: intelligence-head
- **Output**: six-layer diagnostic showing which layer is the upstream constraint this week + ranked next fixes
- **Downstream**: producer presents at weekly team sync; creator decides upstream priorities

### Monday 10:00 — Library Compound
- **Skill**: `/library-compound` (mode: extract-patterns-from-last-7-days)
- **Owner agent**: postmortem-analyst
- **Output**: new specimens extracted from the past 7 days of published videos; compartment update suggestions; framework calibration notes
- **Downstream**: writer (full-studio) reviews patterns; OS auto-applies low-risk compartment updates; high-risk updates queue for creator approval

### 1st of month 08:00 — Monthly Deep Dive
- **Skill**: `/kpi-dashboard` (mode: monthly-deep-dive)
- **Owner agent**: intelligence-head
- **Output**: monthly performance report, channel-architecture-fit analysis, recommended adjustments to mode mix / pillar split / threshold gates
- **Downstream**: creator + producer review; quarterly strategic-layer adjustments triggered

### 1st of month 10:00 — Channel-Wide Retention Recalibration
- **Skill**: `/audit-retention` (mode: channel-wide)
- **Owner agent**: postmortem-analyst
- **Output**: retention model recalibration (predicted AVD vs actual), bottom-quartile band update, niche-benchmark update
- **Downstream**: retention-floor gate uses updated bands going forward

---

## Webhook triggers

### `application.received`
- **Skill**: `/build-application-funnel` (mode: qualification-and-routing)
- **Owner agent**: monetization-head
- **Output**: applicant qualified, routed to appropriate next step (booking link, nurture sequence, decline)
- **Downstream**: setter (full-studio with sales setter role) receives qualified bookings; calendar tool fires booking event

### `sponsor.inquiry.received`
- **Skill**: `/sponsor-fit` (mode: initial-fit-analysis, review_required: true)
- **Owner agent**: monetization-head
- **Output**: sponsor-fit analysis with pass/fail recommendation, draft response if fit, decline draft if not
- **Downstream**: producer (full-studio) or creator (solo) reviews and decides

### `subscriber.milestone`
- **Skill**: `/community-cadence` (mode: milestone-acknowledgment-draft)
- **Owner agent**: audience-head
- **Output**: drafted community-tab post acknowledging the milestone (e.g., 100K subs)
- **Downstream**: creator reviews and posts (or auto-posts if low-stakes)

---

## Event triggers

### `video.published`
- **Triggers fired**:
  - `/repurposing-cascade` (mode: full-cascade) — produces Shorts cuts + social posts + email pack
  - `/audit-retention` (delayed 7 days) — runs retention curve diagnosis after data accumulates
  - `/title-options` (delayed 48 hours, mode: ctr-underperform-retitle-suggest, threshold: 4%) — suggests retitle if CTR is below threshold
- **Owner agents**: distribution-head, postmortem-analyst, title-strategist

### `call.booked`
- **Skill**: confirmation cadence kicks off (per `company.yaml.sales_conversion_stack.show_rate_stack`)
- **Owner agent**: monetization-head
- **Output**: pre-call asset shipped, SMS at booking + T-24h + T-1h + T-5min, DM in parallel
- **Downstream**: setter or creator runs the call

### `call.completed`
- **Skill**: post-call sequence kicks off
- **Owner agent**: monetization-head
- **Output**: T+2h thank-you / T+24h proof / T+72h objection handle / T+7d soft-close / T+14d final
- **Downstream**: applicant either converts or is added to long-term nurture

### `comment.flagged` (high-signal)
- **Skill**: `/idea-farm` (mode: comment-to-idea, review_required: true)
- **Owner agent**: content-head
- **Output**: drafted video idea derived from the comment thread; surfaced for creator review
- **Downstream**: creator decides whether to slot into the backlog

### `video.view-velocity-spike` (viral detection)
- **Skill**: `/audit-retention` (mode: viral-postmortem)
- **Owner agent**: postmortem-analyst
- **Output**: viral postmortem capturing what drove the velocity spike + recommendations to compound
- **Downstream**: creator considers follow-up content + community-tab response + email push

---

## Trigger gracefully degrades

If the runtime doesn't support a trigger surface (e.g., interactive-only Claude Code session), the OS still works — the cron/webhook/event triggers are simply not activated, and all skills run on-demand instead.

When a trigger fires but the underlying integration is down (e.g., YouTube Data API rate-limited):
- The skill's adapter handles the failure per its `fallback` directive
- The trigger is logged as a missed-event for replay when the integration recovers

---

## What runs even when no triggers fire

The OS works fully on demand without any trigger surface. Every skill is invocable manually. Triggers are leverage on top of the manual surface, not a replacement for it.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
