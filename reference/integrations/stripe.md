---
integration: Stripe
auth_type: api-key (secret + publishable)
skills: [/build-application-funnel, /kpi-dashboard, revenue-tracking]
required_scopes: [charges.read, customers.read, payment_intents.read, subscriptions.read, products.read, invoices.read]
rate_limits:
  requests_per_minute: 100 (production)
fallback: revenue tracking defers until reconnect; checkout continues via Stripe directly
---

# Stripe — Adapter Contract

## Setup

Stripe is the OS's primary payment processor. The OS integrates via API key (secret + publishable) for read operations on customers, charges, subscriptions, and invoices. The integration is typically read-only on the OS side; payments themselves flow through Stripe Checkout / Payment Links / custom integrations on the operator's funnel.

## Auth flow

1. Creator generates API key in Stripe dashboard (Developers → API Keys)
2. Adds `STRIPE_SECRET_KEY` to `.env` (server-side only — never in client code)
3. Optionally adds `STRIPE_PUBLISHABLE_KEY` if the OS surfaces public-side checkout components
4. OS validates the key on first use

Required env vars:
- `STRIPE_SECRET_KEY`
- `STRIPE_PUBLISHABLE_KEY` (optional)
- `STRIPE_WEBHOOK_SECRET` (for webhook signature verification)

## API surface used

### Read operations (primary use)

- `customers.list` — query customers
- `customers.get` — fetch specific customer details
- `charges.list` — query charges (succeeded payments)
- `payment_intents.list` — query payment intents
- `subscriptions.list` — query active subscriptions
- `invoices.list` — query invoices (for subscription / recurring revenue)

### Webhooks (for real-time events)

The OS subscribes to webhooks:
- `payment_intent.succeeded` — successful payment
- `customer.subscription.created` — new subscription
- `customer.subscription.updated` — subscription change (upgrade / downgrade / cancel)
- `invoice.payment_succeeded` — recurring payment
- `invoice.payment_failed` — payment failure (for dunning)

### Webhook signature verification

The OS verifies webhook signatures using `STRIPE_WEBHOOK_SECRET` to prevent spoofed events.

## Output handling

Stripe data flows into the OS's revenue-tracking model:
- **Per-charge**: customer email, amount, currency, product, timestamp
- **Per-customer**: lifetime revenue, subscription status, churn signals
- **Per-product**: revenue per offer (back-end coaching, course, mastermind, etc.)

These metrics feed `/kpi-dashboard`:
- Daily / weekly / monthly cash collected
- LTV per customer (calculated)
- Churn rate (for subscription products)
- Average order value
- Revenue per video (when attribution is traceable)

## Constraints

- Stripe's API rate limit is ~100 req/min in production (lower in test mode)
- Stripe's data model has specific structures (test vs live mode separation)
- Customer matching across systems requires email-based join (no universal customer ID across platforms)

## Fallback behavior

When Stripe is unavailable:
- Revenue dashboard data defers until reconnect
- KPI dashboard flags "revenue data may be delayed"
- Checkout / payment processing continues via Stripe's native infrastructure (the OS's read-only integration doesn't affect payments)

## Attribution

The OS tracks attribution from video → application → call → close → payment:
- UTM parameters captured at application form
- UTM stored in customer metadata in Stripe (via custom fields)
- OS joins payment records to customer journey for full-funnel attribution

This enables `/kpi-dashboard` to surface "revenue per video" and "revenue per content pillar."

## Privacy / data handling

- Customer financial data stays in Stripe; OS reads aggregated metrics
- PII (customer name, email) is handled per the operator's privacy policy
- The OS does not push customer data to public remotes
- The OS does not export customer data outside the operator's environment

## Cost considerations

Stripe's pricing (as of 2026):
- Standard: 2.9% + $0.30 per charge
- Custom enterprise pricing for high-volume

The Stripe API is free; pricing applies to processed payments. The OS's integration adds no additional cost beyond Stripe's standard fees.

## Migration / version updates

When Stripe ships API version updates (annual):
1. Adapter file (`adapters/stripe.md`) updated
2. OS continues processing using cached webhook structure during migration

---

*v1.0 — 2026-05-03. Stripe integration contract. Payment-data primary; revenue tracking secondary.*
