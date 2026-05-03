---
integration: YouTube Studio (Data API v3 + Reporting API)
auth_type: oauth2
skills: [/audit-retention, /leak-audit, /community-cadence, /publish-checklist, /kpi-dashboard, /library-compound, /idea-farm]
required_scopes: [youtube.readonly, youtube.force-ssl, yt-analytics.readonly, yt-analytics-monetary.readonly]
rate_limits:
  requests_per_minute: 60
  daily_quota: 10000
fallback: degrade-to-cached if API unavailable; surface gap to creator with timestamp of last successful sync
---

# YouTube Studio — Adapter Contract

## Setup

The creator authorizes the OS to access their YouTube Studio data via OAuth 2.0. Authorization grants access to channel analytics, video metadata, comments, and (for Reporting API) bulk historical data. Required scopes are listed in the frontmatter; the creator approves these at OAuth consent.

## Auth flow

1. Creator initiates OAuth from the OS's settings panel
2. Redirected to Google OAuth consent
3. Approves required scopes
4. Returns to OS with authorization code
5. OS exchanges code for access token + refresh token
6. Refresh token is stored in `.env` (see `reference/canonical/spec/INTEGRATIONS.md` for env-management contract)
7. Access tokens are refreshed automatically on expiry

Required env vars:
- `YOUTUBE_CLIENT_ID`
- `YOUTUBE_CLIENT_SECRET`
- `YOUTUBE_REFRESH_TOKEN`

## API surface used

### Data API v3

- `channels.list` — channel-level metadata (subscriber count, view count, channel branding)
- `videos.list` — per-video metadata (title, description, thumbnail, statistics)
- `commentThreads.list` — comment threads on the channel and per-video
- `playlists.list` + `playlistItems.list` — playlist architecture
- `search.list` — for competitive scan / idea-farm (use sparingly due to quota cost)
- `subscriptions.list` — subscription growth tracking

### Reporting API

- Channel reports — daily aggregated analytics
- Video reports — per-video performance over time
- Engagement reports — engagement metrics breakdown
- Used by `/library-compound` for bulk historical data analysis

### Analytics API

- Real-time + recent analytics
- Used by `/kpi-dashboard` for daily / weekly / monthly metrics
- Used by `/audit-retention` for retention curves
- Used by `/leak-audit` for traffic-source breakdown

## Output handling

Each API call's response is normalized into the OS's internal data model:
- Video records → `videos[]` with metadata, performance, retention curve
- Channel record → `channel` with growth metrics, audience composition
- Comments → captured for high-signal extraction (community-manager)

Errors:
- Rate limit hit → exponential back-off + retry; if sustained, surface to creator
- Auth expired → re-auth flow triggered
- API quota exhausted → graceful degrade; use cached data if available

## Constraints

- Daily quota of 10,000 units (varies by API endpoint cost)
- Rate limit of 60 requests per minute
- `search.list` is expensive (100 quota units per request); used sparingly
- Some metrics (revenue, RPM) require monetary scope and may not be available for all channels

## Fallback behavior

When YouTube Studio is unavailable:
- `/audit-retention` runs on cached data with explicit gap flag
- `/leak-audit` proceeds with most-recent-cached data
- `/library-compound` defers full bulk pull until API restores
- `/kpi-dashboard` flags "data may be delayed by [duration]"

The OS does not block on YouTube Studio downtime. Skills run with degraded data + flag.

## Webhook surface (for runtimes that support)

When configured:
- `youtube.video.published` — push notification on new video
- `youtube.comment.created` — push notification on new comments
- `youtube.subscriber.gained` — push notification on subscriber growth

## Migration / version updates

When YouTube Studio's API ships breaking changes (typically annual):
1. The adapter file (`adapters/youtube-studio.md`) is updated by the OS maintainer
2. Skills using YouTube Studio continue with cached data during the migration window
3. New API contract verified against test data before production switch

## Privacy / data handling

- All channel data stays in the creator's environment
- No data is exfiltrated to external services
- Analytics data is processed locally
- The OS does not push channel data to public remotes (per OS data-handling principles)

---

*v1.0 — 2026-05-03. YouTube Studio integration contract. The platform's primary data surface for the OS.*
