---
integration: TubeBuddy
auth_type: api-key
skills: [/title-options, /thumbnail-brief, /title-thumbnail-pair]
required_scopes: [tag-research, ab-testing, bulk-tag-update]
rate_limits:
  requests_per_minute: 30
  daily_quota: 1000
fallback: skills proceed without TubeBuddy data; flag the gap; recommend manual research
---

# TubeBuddy — Adapter Contract

## Setup

TubeBuddy is a YouTube optimization platform offering tag research, A/B test thumbnails, and bulk tag updates. The OS integrates via API key for read-only and bulk-write operations. The creator obtains an API key from TubeBuddy's developer settings.

## Auth flow

1. Creator generates API key in TubeBuddy account settings
2. Adds `TUBEBUDDY_API_KEY` to `.env`
3. OS validates the key on first use
4. No further auth required (key-based, no token refresh)

Required env vars:
- `TUBEBUDDY_API_KEY`

## API surface used

### Tag research

- `tags.search` — search-volume estimates, competitor density, tag suggestions
- `tags.related` — related-tag discovery for content optimization
- Used by `/title-options` for keyword strategy

### A/B testing

- `ab.create` — create thumbnail A/B tests
- `ab.results` — fetch test results
- Used by `/thumbnail-brief` and `/title-thumbnail-pair` for test orchestration

### Bulk tag updates

- `videos.tags.update` — bulk update tags across the channel's library
- Used during library hygiene operations

## Output handling

Tag-research results normalize into the OS's keyword-data model:
- Per-tag: search volume estimate, competition level, related tags
- Per-keyword set: opportunity score (calibrated to channel band)

A/B test results normalize into thumbnail-performance records:
- Variant CTRs, statistical significance, recommended winner
- Stored for `/library-compound` calibration

## Constraints

- API key has rate limits (30 req/min typical for standard subscription tier)
- Daily quota varies by subscription tier
- Tag-research data is estimated, not exact (TubeBuddy's algorithm-based estimation)
- Some features require higher subscription tiers (Pro / Legend)

## Fallback behavior

When TubeBuddy is unavailable or not configured:
- `/title-options` proceeds with manual keyword strategy
- `/thumbnail-brief` proceeds without A/B test infrastructure
- `/title-thumbnail-pair` flags A/B testing as deferred-to-publish-day setup

The OS does not require TubeBuddy. It enhances skills when available; skills function without it.

## Optional vs required

TubeBuddy is **optional**. The OS's bullseye does not require it; the integration enhances rather than enables.

For channels without TubeBuddy:
- Use YouTube Studio's native tag suggestions
- Use YouTube Studio's native A/B test (if available in account)
- Run keyword research manually via search-trend tools

## Migration / version updates

When TubeBuddy ships API changes:
1. Adapter file (`adapters/tubebuddy.md`) updated
2. Skills continue using cached keyword data during migration

## Cost considerations

TubeBuddy subscription tiers (as of 2026):
- Free: limited; not recommended for channel operations
- Pro: ~$10–$20/mo; suitable for standard channel use
- Legend: ~$50/mo; advanced features for scaling channels

For channels at $5K+/mo back-end revenue, the Legend tier's leverage typically justifies the cost.

---

*v1.0 — 2026-05-03. TubeBuddy integration contract. Optional enhancement layer.*
