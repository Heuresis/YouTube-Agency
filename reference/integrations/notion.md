---
integration: Notion
auth_type: oauth2 / integration-token
skills: [/idea-farm, /series-architect, /build-sop, /kpi-dashboard, /community-cadence, all-human-facing-reports]
required_scopes: [databases.read, databases.write, pages.read, pages.write, blocks.read, blocks.write]
rate_limits:
  requests_per_second: 3
  daily_quota: unlimited (subject to Notion's general API rate)
fallback: skills proceed locally; reports written to local markdown; sync deferred until Notion reconnects
---

# Notion — Adapter Contract

## Setup

Notion is the OS's primary content-calendar and human-facing-reports surface. The OS integrates via Notion's official API (OAuth 2.0) or via internal integration token. Most creators use the integration-token approach — simpler setup, scoped to specific pages/databases.

## Auth flow

### Integration token approach

1. Creator creates a Notion integration in Notion's integration settings
2. Copies the integration token (`secret_xxx...`)
3. Shares specific pages/databases with the integration (per Notion's permission model)
4. Adds `NOTION_TOKEN` to `.env`

### OAuth 2.0 approach

For multi-workspace or shared deployments. Standard OAuth flow.

Required env vars:
- `NOTION_TOKEN` (or OAuth credentials)
- `NOTION_DATABASE_ID_IDEAS` — content idea backlog database
- `NOTION_DATABASE_ID_CALENDAR` — content calendar database
- `NOTION_DATABASE_ID_LIBRARY` — published-library database (optional)
- `NOTION_PAGE_ID_REPORTS` — reports root page (for KPI dashboards, leak audits)

## API surface used

### Database operations

- `databases.query` — query the idea-farm backlog, content calendar, library
- `databases.update` — update database properties as content moves through stages
- `pages.create` — create new content-calendar entries
- `pages.update` — update existing entries (status changes, performance updates)

### Page operations

- `pages.create` — create reports (KPI dashboards, leak audits, library-compound entries)
- `blocks.append` — add structured content to reports

### Search

- `search.query` — find existing pages / databases (used during setup)

## Output handling

The OS's outputs that go to Notion:

- **Idea-farm entries** → `NOTION_DATABASE_ID_IDEAS` with properties (status, pillar, mode, awareness target, score)
- **Content calendar** → `NOTION_DATABASE_ID_CALENDAR` with properties (publish date, status, mode, pillar, video URL post-publish)
- **Library entries** → `NOTION_DATABASE_ID_LIBRARY` with performance metadata
- **KPI dashboards** → child pages under `NOTION_PAGE_ID_REPORTS`, structured per `/kpi-dashboard` output format
- **Leak audits** → child pages under `NOTION_PAGE_ID_REPORTS`, structured per `/leak-audit` output format
- **Library-compound entries** → child pages under `NOTION_PAGE_ID_REPORTS`

## Constraints

- Notion's API rate limit is approximately 3 requests per second
- Large databases (>1000 rows) require pagination
- Some content blocks (advanced layouts, embeds) may not be expressible via the API
- Database property types must match the OS's data model expectations

## Fallback behavior

When Notion is unavailable:
- Skills write to local markdown files in the workspace's `output/` directory
- Sync to Notion deferred; runs on reconnect
- The creator can review reports locally during the outage

## Notion database schema

The OS expects specific schemas for its primary databases. Idea backlog example:

```
NOTION_DATABASE_ID_IDEAS schema:
- Title (title) — idea name / video working title
- Status (select) — backlog / scheduled / drafting / recording / editing / scheduled-to-publish / published
- Pillar (select) — content pillar from compartment 5
- Mode (select) — authority / reach / hybrid
- Awareness target (select) — unaware / problem-aware / solution-aware / product-aware / most-aware
- Hook formula (multi-select)
- Score (number) — opportunity score from /idea-farm
- Created (date)
- Last updated (date)
```

The OS validates schema on first connect. Schema mismatch = soft warning + adapt to whatever fields exist.

## Anti-watchlist discipline

Notion content is owned by the creator. However, when the OS writes to Notion:
- No real operator names in archetype references
- No real channel names in case studies
- Anonymized descriptors only (per the OS's anti-watchlist rules)

## Migration / version updates

When Notion ships API changes:
1. Adapter file (`adapters/notion.md`) updated
2. Skills continue writing to local markdown during migration window
3. Bulk re-sync to Notion after migration completes

## Cost considerations

Notion's API is free for use within the platform's standard limits. Most creators are on Notion's Personal Pro or Team plans (~$8–$15/user/mo) for the base platform.

---

*v1.0 — 2026-05-03. Notion integration contract. The OS's primary human-facing-reports surface.*
