---
integration: Beehiiv
auth_type: api-key
skills: [/lead-magnet-bridge, /community-cadence, welcome-sequence-automation]
required_scopes: [subscribers.read, subscribers.write, automations.read, automations.write, posts.read, posts.write]
rate_limits:
  requests_per_minute: 60
fallback: skills queue email actions; sync deferred until Beehiiv reconnects
---

# Beehiiv — Adapter Contract

## Setup

Beehiiv is a newsletter / email-platform popular with creators. The OS integrates via Beehiiv's API for subscriber management, automation triggers, and post publishing. The creator generates an API key from Beehiiv's developer settings.

## Auth flow

1. Creator generates API key in Beehiiv account settings
2. Adds `BEEHIIV_API_KEY` to `.env`
3. Adds `BEEHIIV_PUBLICATION_ID` (Beehiiv's identifier for the creator's newsletter)
4. OS validates the key on first use

Required env vars:
- `BEEHIIV_API_KEY`
- `BEEHIIV_PUBLICATION_ID`

## API surface used

### Subscriber management

- `subscriptions.create` — add subscriber from lead-magnet bridge
- `subscriptions.list` — query subscribers (with filters)
- `subscriptions.update` — update subscriber metadata (segmentation, engagement tags)

### Automation

- `automations.list` — list welcome sequences, nurture sequences
- `automations.trigger` — programmatically trigger an automation for a subscriber

### Posts

- `posts.list` — query past newsletters
- `posts.publish` — publish a newsletter (used for cross-platform community broadcasts)

## Output handling

The OS's outputs that go to Beehiiv:

- **Lead-magnet captures**: subscribers added with magnet-tag, awareness-tag, video-source-tag
- **Welcome-sequence triggers**: subscribers entered into the appropriate welcome sequence based on which lead magnet they came in via
- **Engagement tags**: based on opens / clicks / replies, subscribers are segmented for differential nurture

## Constraints

- Rate limit ~60 req/min
- Some advanced features require Beehiiv's higher subscription tiers
- Bulk operations are throttled

## Fallback behavior

When Beehiiv is unavailable:
- Lead-magnet captures queue locally
- Welcome-sequence triggers deferred
- Sync runs on reconnect

The OS does not block on Beehiiv outage. Subscribers are not lost.

## Welcome sequence integration

The OS's `/lead-magnet-bridge` skill assumes 3+ welcome sequences pre-built in Beehiiv:
- One per lead magnet (the magnet's-specific welcome)
- A general nurture sequence for ongoing engagement
- A re-engagement sequence for inactive subscribers

The skill triggers the appropriate sequence based on subscriber metadata.

## Segmentation

Beehiiv supports tags + custom fields. The OS uses:
- **Magnet tag** — which lead magnet the subscriber came in via
- **Awareness tag** — awareness level inferred from entry video
- **Video-source tag** — which video the subscriber came in via
- **Engagement tier** — calculated from open/click/reply behavior

These segments enable differential email cadence.

## Cost considerations

Beehiiv subscription tiers (as of 2026):
- Launch: free up to 2,500 subscribers
- Scale: ~$42/mo at 5K subscribers
- Max: pricing scales with subscriber count

The free tier supports basic OS operation up to 2,500 subscribers. Channels with larger lists scale to paid tiers.

## Migration / version updates

When Beehiiv ships API changes:
1. Adapter file (`adapters/beehiiv.md`) updated
2. Lead-magnet captures continue queueing locally during migration

## Alternative platforms

The OS supports alternative email platforms with equivalent contracts:
- ConvertKit (`reference/integrations/convertkit.md`)
- Mailchimp
- Klaviyo
- Substack (light support)

The skills (Layer 4) are agnostic to email platform; only the adapter (Layer 5) varies.

---

*v1.0 — 2026-05-03. Beehiiv integration contract. Email pipeline primary.*
