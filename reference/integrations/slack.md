---
integration: Slack
auth_type: webhook + bot-token
skills: [leak-audit-delivery, kpi-dashboard-delivery, team-notifications]
required_scopes: [chat.write, channels.read, channels.history, files.write]
rate_limits:
  requests_per_minute: 100 (Slack standard)
fallback: messages queue locally; sync on reconnect; reports written to local markdown
---

# Slack — Adapter Contract

## Setup

Slack is the OS's primary team-communication and report-delivery surface for channels with a multi-person team. The OS integrates via incoming webhooks (for one-way report delivery) and bot tokens (for two-way interaction).

## Auth flow

### Webhook approach (simpler — one-way delivery)

1. Creator creates an incoming webhook in Slack (Apps → Incoming Webhooks → Add New)
2. Selects the destination channel
3. Adds `SLACK_WEBHOOK_URL` to `.env`

### Bot token approach (richer — two-way interaction)

1. Creator creates a Slack app
2. Configures OAuth scopes
3. Installs the app to the workspace
4. Receives bot token
5. Adds `SLACK_BOT_TOKEN` to `.env`

Required env vars:
- `SLACK_WEBHOOK_URL` (for webhook approach)
- `SLACK_BOT_TOKEN` (for bot approach)
- `SLACK_DEFAULT_CHANNEL` (the team's primary OS-update channel)

## API surface used

### Webhooks (one-way)

- POST to webhook URL with formatted message
- Used for: leak-audit deliveries, KPI-dashboard deliveries, publish-day notifications

### Bot API (two-way)

- `chat.postMessage` — send message to channel
- `chat.update` — update message
- `files.upload` — upload report file
- `conversations.history` — read recent messages (for context)
- `reactions.add` — add reactions to messages

## Output handling

The OS's outputs that go to Slack:

### KPI dashboard

Daily 08:00 (per cron schedule in INTEGRATIONS.md):
- Daily pulse to creator's primary channel
- Format: structured message with key metrics

### Leak audit (weekly)

Mondays 09:00:
- Weekly six-layer diagnostic
- Format: longer message or threaded report
- Files attached for detailed analysis

### Library compound (weekly)

Mondays 10:00:
- Pattern extraction from the prior week's content
- Format: structured message + file attachment

### Publish notifications

- Pre-publish: "Video [title] is ready for final review"
- Post-publish: "Video [title] published; tracking begins"
- Mid-week: "Video [title] performing [above / at / below] band; consider [action]"

### Sponsor-related notifications

- New sponsor inquiry received → "[sponsor] inquiry; run /sponsor-fit"
- Sponsor integration approved → "[sponsor] integration scripted; review"
- Sponsor integration published → "[sponsor] published; track performance"

## Constraints

- Slack's standard rate limit: 100 req/min (per app)
- Message length limit: 40,000 characters (effectively unlimited for OS use)
- File upload limit: 1GB per file (more than enough for OS reports)

## Fallback behavior

When Slack is unavailable:
- Messages queue locally
- Reports continue generating; written to local markdown
- Sync on reconnect

The OS's reports are not blocked by Slack downtime.

## Channel architecture (recommended)

For OS-driven team-channel structure:

```
#os-kpi          — daily KPI pulse, weekly summary
#os-leak-audits  — weekly leak audit reports
#os-library      — library-compound entries
#os-publish      — publish-day notifications
#os-sponsors     — sponsor-related notifications
#os-alerts       — urgent alerts (failures, threshold breaches)
```

For solo operators, a single channel is sufficient.

## Privacy / data handling

- The OS posts aggregated metrics, not individual customer data
- PII (customer names, emails) are not posted to Slack
- Sensitive data (revenue numbers, customer data) is shared per the team's data-handling agreement

## Cost considerations

Slack's pricing (as of 2026):
- Free: limited message history, 1:1 audio/video
- Pro: ~$7-$8/user/mo
- Business+: ~$13-$15/user/mo
- Enterprise Grid: custom

Most teams operate on Pro or Business+. The OS integration adds no additional cost.

## Migration / version updates

Slack's API is stable; major changes are infrequent. When changes ship:
1. Adapter file (`adapters/slack.md`) updated
2. Webhook-based integrations continue working during migration (webhooks are version-stable)

## Alternative platforms

The OS supports alternative team-communication platforms with equivalent contracts:
- Discord (for community-led teams)
- Microsoft Teams
- Telegram (for high-velocity comms)
- Email (lowest-friction, lowest-leverage)

---

*v1.0 — 2026-05-03. Slack integration contract. Team-communication and report-delivery primary.*
