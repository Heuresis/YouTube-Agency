---
integration: GoHighLevel
auth_type: oauth2
skills: [/build-application-funnel, /sales-call-script, post-call-followup]
required_scopes: [contacts.read, contacts.write, opportunities.read, opportunities.write, calendars.read, calendars.write, conversations.read, conversations.write]
rate_limits:
  requests_per_minute: 60
fallback: GHL native operations continue; OS-side sync defers until reconnect
---

# GoHighLevel — Adapter Contract

## Setup

GoHighLevel (GHL) is a full-funnel CRM commonly used by operators with $100K+/mo back-end revenue. The OS integrates via OAuth 2.0 or API key for contact management, opportunity pipeline, scheduling, and conversation management.

## Auth flow

1. Creator initiates OAuth from OS settings
2. Redirected to GHL OAuth consent
3. Approves required scopes
4. OS receives access + refresh tokens
5. Tokens stored in `.env`

Required env vars:
- `GHL_TOKEN` (or OAuth credentials)
- `GHL_LOCATION_ID` (the sub-account / agency-location)

## API surface used

### Contact management

- `contacts.create` — add new contact (from application form, lead magnet)
- `contacts.list` — query contacts
- `contacts.update` — update contact metadata, custom fields, tags
- `contacts.upsert` — create-or-update by email

### Opportunity pipeline

- `opportunities.create` — create new opportunity (application received)
- `opportunities.update` — move opportunity through pipeline stages
- `opportunities.list` — query opportunities

Pipeline stages typical:
- Application received
- Application qualified
- Call booked
- Call attended
- Closed-won / Closed-lost / Disqualified

### Calendars

- `calendars.list` — list scheduling calendars
- `calendars.bookings.list` — list bookings
- Webhook integration for booking lifecycle

### Conversations

- `conversations.list` — list message threads with contacts
- `conversations.send` — send SMS / email / DM via GHL

## Output handling

The OS's outputs that go to GHL:

- **Application form submissions**: contacts created, custom fields populated, opportunity created at "Application received" stage
- **Qualified applications**: opportunity moved to "Application qualified"; calendar booking link sent
- **Call bookings**: opportunity moved to "Call booked"; SMS confirmation sequence triggered
- **Call outcomes**: opportunity moved to "Closed-won" / "Closed-lost" / "Disqualified"
- **Post-call sequences**: conversation messages sent per the post-call cadence

## Constraints

- GHL's API rate limit varies by subscription tier
- Some agency-level features require Pro / Agency tier
- GHL's data model is comprehensive but specific (custom fields must be pre-defined)

## Fallback behavior

When GHL is unavailable:
- Contact creation queues locally
- Pipeline updates defer
- Sync on reconnect
- Operators can continue using GHL's native UI

## Pipeline architecture

The OS expects a specific pipeline structure:

```
Pipeline: Application Funnel
  Stages:
    1. Application received
    2. Application qualified
    3. Call booked
    4. Call attended
    5. Closed-won
    6. Closed-lost
    7. Disqualified
```

The skill `/build-application-funnel` creates this structure if it doesn't exist (operator approval gate).

## Custom fields

The OS uses custom fields:
- `lead_magnet` — entry point
- `source_video` — entry video
- `awareness_level` — inferred awareness
- `application_score` — qualification score
- `call_outcome` — yes / soft-no / hard-no / disqualified
- `application_revenue` — current revenue (from application Q4)
- `application_budget_response` — yes / discuss / not-now (from application Q6)

## Webhooks

GHL fires webhooks for pipeline events:
- New contact
- Stage change
- Booking confirmed
- Booking canceled
- Conversation message received

The OS's webhook handlers process these events to trigger downstream sequences.

## Cost considerations

GHL subscription tiers (as of 2026):
- Starter: ~$97/mo
- Unlimited: ~$297/mo
- Agency Pro: ~$497/mo

For OS bullseye operators ($100K+/mo back-end), GHL is typically already in use; the OS integration is light. For operators below $100K/mo, GHL may be over-provisioned; simpler combinations (Calendly + ConvertKit + Stripe) work.

## Alternative platforms

The OS supports alternative CRMs with equivalent contracts:
- HubSpot
- Close.com
- Pipedrive
- Custom CRM combinations

---

*v1.0 — 2026-05-03. GoHighLevel integration contract. Full-funnel CRM for $100K+/mo back-end operators.*
