---
integration: ConvertKit (also marketed as Kit)
auth_type: api-key
skills: [/lead-magnet-bridge, /community-cadence, welcome-sequence-automation]
required_scopes: [subscribers.read, subscribers.write, sequences.read, sequences.write, broadcasts.read, broadcasts.write]
rate_limits:
  requests_per_minute: 120
fallback: skills queue email actions; sync deferred until ConvertKit reconnects
---

# ConvertKit / Kit — Adapter Contract

## Setup

ConvertKit (rebranded as Kit) is an email-platform widely used in the creator economy. The OS integrates via API key.

## Auth flow

1. Creator generates API key in ConvertKit account settings (under Account → Advanced)
2. Adds `CONVERTKIT_API_KEY` and `CONVERTKIT_API_SECRET` to `.env`
3. OS validates on first use

Required env vars:
- `CONVERTKIT_API_KEY` (public key for read operations)
- `CONVERTKIT_API_SECRET` (secret for write operations)

## API surface used

### Subscriber management

- `subscribers.create` — add new subscriber from lead-magnet bridge
- `subscribers.list` — query subscribers
- `subscribers.update` — update subscriber metadata (custom fields, tags)
- `subscribers.tag` — add tags for segmentation

### Forms / sequences

- `forms.list` — list lead-capture forms
- `sequences.list` — list automated sequences
- `sequences.subscribe` — add subscriber to a sequence (welcome / nurture)

### Broadcasts

- `broadcasts.create` — create a broadcast (one-off email)
- `broadcasts.send` — schedule or send a broadcast

## Output handling

ConvertKit-specific data structures:
- **Subscriber** with email, first name, custom fields (lead magnet, awareness, source video)
- **Tags** for segmentation (magnet-X, awareness-X, source-video-X, engagement-tier-X)
- **Sequences** for automated nurture flows
- **Forms** for lead-capture (one per lead magnet)

The OS's `/lead-magnet-bridge` skill assumes:
- One ConvertKit form per lead magnet
- One sequence per major audience tier
- A general nurture sequence for ongoing engagement

## Constraints

- Rate limit ~120 req/min
- Some operations (bulk-update) are slower
- Legacy / new ConvertKit (Kit) API differences — adapter handles version detection

## Fallback behavior

When ConvertKit is unavailable:
- Lead-magnet captures queue locally
- Sequence triggers deferred
- Sync on reconnect

## Custom fields

ConvertKit custom fields used by the OS:
- `lead_magnet` — which magnet the subscriber came in via
- `source_video` — entry video URL or ID
- `awareness_level` — inferred awareness level
- `signup_date` — date of signup
- `last_engagement` — timestamp of last open / click / reply

These enable differential nurture cadence.

## Cost considerations

ConvertKit / Kit subscription tiers (as of 2026):
- Free: up to 10K subscribers (limited features)
- Creator: ~$15-$50/mo depending on subscriber count
- Creator Pro: ~$30-$100/mo

For most channels, the Creator tier is sufficient.

## Migration / version updates

ConvertKit underwent rebranding to Kit in 2024–2025. The adapter handles legacy `convertkit.com` and new `kit.com` API endpoints.

## Cross-skill use

ConvertKit is used by:
- `/lead-magnet-bridge` for primary subscriber capture
- `/community-cadence` for newsletter broadcasts and re-engagement campaigns
- Custom welcome-sequence automation

---

*v1.0 — 2026-05-03. ConvertKit / Kit integration contract. Email pipeline alternative to Beehiiv.*
