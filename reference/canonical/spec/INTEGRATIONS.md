# INTEGRATIONS.md — Tech Stack + API Contracts

> **Canonical spec.** Every external system the workspace integrates with is declared here, with its API contract, auth surface, and the skills that bind to it. Integration logic lives at Layer 5 (`skills/<slug>/adapters/<runtime>.md`); this file is the cross-skill registry.

---

## Integration registry

| Tool | Purpose | Auth | Skills bound | Adapter file |
|---|---|---|---|---|
| YouTube Studio (Data API v3) | Channel analytics, video metadata, comments, community-tab posts | OAuth 2.0 | `/audit-retention`, `/leak-audit`, `/community-cadence`, `/publish-checklist`, `/kpi-dashboard` | adapters/youtube-studio.md |
| YouTube Studio (Reporting API) | Bulk analytics dumps for `library-compound` | OAuth 2.0 | `/library-compound` | adapters/youtube-reporting.md |
| TubeBuddy | Tag research, A/B test thumbnails, bulk tag updates | API key | `/title-options`, `/thumbnail-brief`, `/title-thumbnail-pair` (optional) | adapters/tubebuddy.md |
| VidIQ | Trend detection, search-volume estimation, competitive scan | API key | `/idea-farm`, `/research-brief` (optional) | adapters/vidiq.md |
| 1of10 | Outlier detection on top-performing videos in niche (optional, premium) | API key | `/idea-farm`, `/audit-retention` (optional) | adapters/1of10.md |
| Notion | Compartment-state mirror, content calendar, idea-farm backlog | OAuth 2.0 / API key | `/idea-farm`, `/series-architect`, `/build-sop`, all human-facing reports | adapters/notion.md |
| Beehiiv | Email pipeline, newsletter, lead-magnet delivery | API key | `/lead-magnet-bridge`, `/community-cadence`, welcome-sequence automation | adapters/beehiiv.md |
| ConvertKit / Kit | Email pipeline (alternative to Beehiiv) | API key | same as Beehiiv | adapters/convertkit.md |
| Mailchimp | Email pipeline (alternative) | API key | same | adapters/mailchimp.md |
| Klaviyo | Email pipeline (alternative, e-commerce-friendly) | API key | same | adapters/klaviyo.md |
| Substack | Newsletter (lighter, less automation-friendly) | RSS / paste-only | `/lead-magnet-bridge` (light) | adapters/substack.md |
| Calendly | Application-funnel call booking | OAuth 2.0 | `/build-application-funnel`, `/sales-call-script` | adapters/calendly.md |
| SavvyCal | Application-funnel call booking (alternative) | API key | same | adapters/savvycal.md |
| GoHighLevel | Full-funnel CRM (when creator runs a $100K+/mo back-end) | OAuth 2.0 | `/build-application-funnel`, `/post-call-followup`, `/sales-call-script` | adapters/gohighlevel.md |
| HubSpot | CRM (alternative) | OAuth 2.0 | same | adapters/hubspot.md |
| Close.com | High-touch sales CRM (when setter/closer team is in place) | API key | `/sales-call-script`, `/post-call-followup` | adapters/close.md |
| Stripe | Payments | API key | `/build-application-funnel` (post-call checkout link), revenue tracking for `/kpi-dashboard` | adapters/stripe.md |
| Slack | Team communication, leak-audit + KPI delivery to creator's team | Webhooks + bot token | leak-audit delivery, kpi-dashboard delivery | adapters/slack.md |
| Discord | Community / cohort delivery | Bot token | `/community-cadence` (Discord-specific) | adapters/discord.md |
| Skool | Cohort / community delivery | Limited (export-only) | `/community-cadence` (Skool light) | adapters/skool.md |
| Circle | Cohort / community delivery | API key | `/community-cadence` (Circle) | adapters/circle.md |
| Loom / Riverside | Recorded async videos for sponsor pitches, customer onboarding | None (file-paste) | `/sponsor-fit`, `/build-application-funnel` (welcome video) | adapters/recorded-video.md |
| Stock library (Storyblocks / Artgrid / etc.) | B-roll source | Subscription | `/editor-brief` references | adapters/stock-library.md |
| Music library (Epidemic / Artlist / Musicbed) | Music source | Subscription | `/editor-brief` references | adapters/music-library.md |
| AI thumbnail tool (Midjourney / Ideogram / etc.) | Thumbnail generation aid | API key | `/thumbnail-brief` | adapters/ai-thumbnail.md |
| AI transcription (Whisper / AssemblyAI) | Script extraction from raw recordings, comment scraping | API key | `/audit-retention`, `/library-compound` | adapters/transcription.md |

---

## Adapter contract per integration

Every integration adapter file ships with this shape:

```markdown
---
integration: <name>
auth_type: <oauth2 | api-key | webhook | none>
skills: [<list of skills that bind>]
required_scopes: [<list of OAuth scopes needed>]
rate_limits:
  requests_per_minute: <int>
  daily_quota: <int>
fallback: <what happens if integration is unavailable>
---

# <Integration Name> — Adapter

## Setup
<one-paragraph setup instructions for the creator>

## Auth flow
<auth flow steps — link to vendor docs, list required env vars>

## API surface used
<list endpoints / methods this OS calls>

## Output handling
<how the OS handles responses — schema, error path, retry>

## Constraints
<rate limits, scope restrictions, quirks the skill author should know>

## Fallback behavior
<what skills do when this integration is unavailable — graceful degrade>
```

---

## Required vs optional integrations

### Always required

- **YouTube Studio Data API** — without this, `/audit-retention`, `/leak-audit`, `/library-compound` cannot run. Creator must authenticate.

### Strongly recommended

- One of the email platforms (Beehiiv / ConvertKit / Mailchimp / Klaviyo) — the audience-building loop and lead-magnet bridge skills require email
- One of the calendar tools (Calendly / SavvyCal) — for the application funnel
- Stripe — for revenue tracking and back-end payment

### Optional

- TubeBuddy / VidIQ / 1of10 — enhance idea-farm and competitive-scan, not required
- AI thumbnail / transcription tools — accelerate work but are not architectural dependencies
- Slack / Discord — for team communication, only when team-config > solo

---

## Auth + secret management

Auth credentials are stored in `.env` (gitignored). The workspace ships with `.env.template` listing every required and optional credential.

```
# .env.template

# YouTube Studio (required)
YOUTUBE_CLIENT_ID=
YOUTUBE_CLIENT_SECRET=
YOUTUBE_REFRESH_TOKEN=

# Notion (optional)
NOTION_TOKEN=
NOTION_DATABASE_ID_IDEAS=
NOTION_DATABASE_ID_CALENDAR=

# Email (one of these required)
BEEHIIV_API_KEY=
CONVERTKIT_API_KEY=

# Calendly (recommended)
CALENDLY_TOKEN=

# Stripe (recommended)
STRIPE_SECRET_KEY=

# ... etc
```

The OS validates `.env` on boot. Missing required credentials = boot failure with clear error message ("Set YOUTUBE_CLIENT_ID in .env to proceed").

---

## Webhook surface

For runtimes that support webhooks (Paperclip, BusinessOS, custom), the workspace registers:

| Webhook | Source | Skill triggered |
|---|---|---|
| `youtube.video.published` | YouTube push notification | `/repurposing-cascade`, `/audit-retention` (delayed 7d) |
| `youtube.comment.created` | YouTube push notification | `/community-cadence` (triage), `/idea-farm` (high-signal) |
| `youtube.subscriber.gained` | YouTube push notification | KPI dashboard update |
| `application.received` | Application form (Calendly / form-builder) | `/build-application-funnel` (qualify) |
| `call.booked` | Calendar tool | Confirmation cadence kicks off |
| `call.completed` | Manual or call-tool | `/post-call-followup` |
| `email.subscriber.created` | Email platform | Welcome sequence + KPI update |
| `payment.succeeded` | Stripe | Revenue tracking, customer-onboarding flow |
| `sponsor.inquiry.received` | Email parsing or form | `/sponsor-fit` (initial analysis) |

---

## Cron surface

For runtimes that support scheduled tasks:

| Schedule | Skill | Output |
|---|---|---|
| Daily 06:00 | `/idea-farm` | Refresh backlog from comments / suggested / trends |
| Daily 08:00 | `/kpi-dashboard` | Daily pulse to creator |
| Daily 09:00 | `/community-cadence` (pull-overnight-comments) | Comment triage report |
| Daily 18:00 | `/research-brief` (next-day-prep) | Research pack for next day's planned video |
| Mon 09:00 | `/leak-audit` (full-six-layer) | Weekly diagnostic |
| Mon 10:00 | `/library-compound` (last-7-days) | Pattern extraction |
| 1st of month 08:00 | `/kpi-dashboard` (monthly-deep-dive) | Monthly report |
| 1st of month 10:00 | `/audit-retention` (channel-wide) | Monthly retention recalibration |

---

## Failure modes

When an integration fails:

1. **Auth expired** — re-auth flow triggered, creator notified. Skills using that integration enter degraded mode (use cached data if available).
2. **Rate limit hit** — back-off + retry. If sustained, surface to creator with diagnosis.
3. **API deprecated** — adapter rewrite scheduled. Skills continue using old contract until new adapter ships.
4. **Vendor down** — graceful degrade per the adapter's `fallback` directive. Examples: YouTube Studio down → leak-audit runs without latest 24h data, flags the gap. Email platform down → community-manager queues outbound, ships when service restores.

---

## Migration path

When the creator switches integrations (e.g., Beehiiv → ConvertKit), the migration is:

1. Update `.env` with new credentials
2. Update `company.yaml.audience_building_loop.email_pipeline.email_platform`
3. The OS's relevant skills automatically use the new adapter
4. Optional: run a one-time migration script (provided per integration) to port subscriber list

The skills themselves (Layer 4) don't change. Only the adapter (Layer 5) is hot-swapped. This is the architectural payoff of runtime-independence applied to integrations.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis canonical spec.*
