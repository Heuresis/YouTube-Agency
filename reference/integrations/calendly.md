---
integration: Calendly
auth_type: oauth2
skills: [/build-application-funnel, /sales-call-script]
required_scopes: [scheduling.read, scheduling.write, user.read, organization.read]
rate_limits:
  requests_per_minute: 100
fallback: bookings continue working in Calendly directly; OS-driven booking deferred until reconnect
---

# Calendly — Adapter Contract

## Setup

Calendly is a calendar-booking platform. The OS integrates for application-funnel call booking.

## Auth flow

1. Creator initiates OAuth from OS settings
2. Redirected to Calendly OAuth consent
3. Approves scheduling scopes
4. OS receives access + refresh tokens
5. Tokens stored in `.env`

Required env vars:
- `CALENDLY_TOKEN` (or OAuth credentials)
- `CALENDLY_USER_URI`

## API surface used

### Event management

- `event_types.list` — list scheduling event types (call types)
- `scheduled_events.list` — list booked calls
- `scheduled_events.get` — fetch details of a specific booked call

### Webhooks

- `webhook_subscriptions.create` — register webhooks for booking lifecycle
- `webhook_subscriptions.list` — list active webhooks

Webhooks fired:
- `invitee.created` — new booking
- `invitee.canceled` — booking canceled
- `invitee.no_show` — marked as no-show

## Output handling

Calendly bookings flow into the OS's application-funnel data model:
- **Booking record** with applicant email, scheduled time, event type, custom fields from intake form
- **Status** updates as the booking lifecycle progresses (scheduled → confirmed → attended / no-showed / canceled)
- **Custom fields** (from Calendly's intake form) populated into the application data

The OS's `/build-application-funnel` skill creates the application-form-to-Calendly link bridge. The application-funnel sequence:
1. Applicant completes the application form (typically Tally / Typeform / GoHighLevel form)
2. On submission, applicant is routed to the Calendly link
3. Applicant books a call slot
4. Calendly fires webhook to the OS
5. OS triggers the confirmation sequence

## Confirmation sequence

The OS's confirmation sequence integrates with Calendly:
- T+0 (booking): Calendly's native confirmation email + OS-triggered confirmation video
- T-24h: SMS reminder (via SMS integration if configured)
- T-1h: SMS reminder
- T-15min: SMS reminder

## Constraints

- Calendly's API rate limit ~100 req/min
- Webhook delivery has slight lag (typically <5 seconds)
- Some Calendly features (rich routing, custom branded URLs) require higher subscription tiers

## Fallback behavior

When Calendly's API is unavailable:
- Bookings still happen via Calendly's native UI
- OS-side data sync defers until reconnect
- Confirmation sequences continue via Calendly's native automations

## Booking-cancellation handling

When a booking is canceled:
- Calendly fires `invitee.canceled` webhook
- OS updates the application-funnel record
- OS triggers the post-cancellation sequence (re-engagement / re-book offer)

## No-show handling

When a booking is marked no-show:
- Manually flagged in Calendly OR via webhook
- OS triggers the no-show sequence (re-book invitation)
- After 2 no-shows, the application is closed

## Cost considerations

Calendly subscription tiers (as of 2026):
- Basic: free
- Essentials: ~$10/mo
- Professional: ~$15/mo
- Teams: ~$20/user/mo

For most channels with an application funnel, the Professional tier is sufficient.

## Alternative platforms

The OS supports alternative calendar tools with equivalent contracts:
- SavvyCal
- Acuity
- GoHighLevel's native scheduler (covered in `gohighlevel.md`)
- Custom calendar apps via webhook

---

*v1.0 — 2026-05-03. Calendly integration contract. Application-funnel call booking primary.*
