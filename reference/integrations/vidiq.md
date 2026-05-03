---
integration: VidIQ
auth_type: api-key
skills: [/idea-farm, /research-brief]
required_scopes: [trend-detection, search-volume-estimation, competitive-scan]
rate_limits:
  requests_per_minute: 30
  daily_quota: 1000
fallback: skills proceed without VidIQ data; flag gap; recommend YouTube-Studio-native suggestions
---

# VidIQ — Adapter Contract

## Setup

VidIQ is a YouTube optimization platform focused on trend detection, search-volume estimation, and competitive scanning. The OS integrates via API key. The creator obtains an API key from VidIQ's developer settings.

## Auth flow

1. Creator generates API key in VidIQ account settings
2. Adds `VIDIQ_API_KEY` to `.env`
3. OS validates the key on first use

Required env vars:
- `VIDIQ_API_KEY`

## API surface used

### Trend detection

- `trends.daily` — trending topics in specified niches
- `trends.related` — trending sub-topics
- Used by `/idea-farm` for backlog refresh

### Search-volume estimation

- `keywords.volume` — estimated search volume for given keywords
- `keywords.opportunity` — opportunity score combining volume + competition
- Used by `/research-brief` for topic prioritization

### Competitive scan

- `competitors.search` — surface competitive channels in a niche
- `competitors.recent` — recent uploads from competitor channels
- Used by `/research-brief` for competitive context (anonymized — never name competitors)

## Output handling

Trend data normalizes into the OS's idea-farm model:
- Per-trend: trend strength (rising / steady / falling), niche relevance, search volume estimate
- Per-keyword: estimated search volume, competition density, opportunity score
- Per-competitor (anonymized): recent uploads, performance signals

## Constraints

- API rate limits per VidIQ subscription tier
- Trend data is platform-aggregated; subject to algorithmic interpretation
- Search-volume estimates are estimates, not exact
- Competitive scan returns competitor data anonymized in the OS's internal data model (per anti-watchlist discipline)

## Fallback behavior

When VidIQ is unavailable or not configured:
- `/idea-farm` proceeds using comments / suggested-videos / trends from YouTube Studio
- `/research-brief` proceeds with manual research
- The skills function but produce slightly less data-rich outputs

## Optional vs required

VidIQ is **optional**. The OS's bullseye does not require it.

For channels without VidIQ:
- Use YouTube Studio's native search insights
- Use Google Trends for cross-platform trend confirmation
- Use the channel's own audience research (compartment 2) for content direction

## Anti-watchlist discipline

When VidIQ surfaces competitor channels, the OS internalizes them as anonymized archetype descriptors (e.g., "a long-form-VSL specialist with $X/mo conversion"), never as named real channels. This applies even in internal logs / analytics.

## Cost considerations

VidIQ subscription tiers (as of 2026):
- Free: limited
- Pro: ~$10–$15/mo
- Boost: ~$30–$50/mo
- Boost+: ~$80+/mo

For channels at $5K+/mo back-end revenue, the Boost tier's data depth typically justifies the cost.

## Migration / version updates

When VidIQ ships API changes:
1. Adapter file (`adapters/vidiq.md`) updated
2. Skills continue using cached trend data during migration

---

*v1.0 — 2026-05-03. VidIQ integration contract. Optional trend / keyword research enhancement.*
