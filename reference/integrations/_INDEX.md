---
name: Integrations Index
type: index
status: complete
---

# Integrations

> Per-tool integration contracts. Each file declares the tool's auth type, required scopes, rate limits, the skills bound to it, and the fallback behavior when the tool is disconnected. The cross-skill registry lives in `canonical/spec/INTEGRATIONS.md`; the boot-time installer lives at the repo root (`integrations/`). Every integration degrades gracefully — skills queue actions and defer sync until reconnect.

| File | What it connects | When to reach for it |
|---|---|---|
| `youtube-studio.md` | YouTube Data API v3 + Reporting API — analytics, video metadata, comments, community posts | `/audit-retention`, `/leak-audit`, `/kpi-dashboard`, `/library-compound`, `/publish-checklist` |
| `vidiq.md` | Trend detection, search-volume estimation, competitive scan | `/idea-farm`, `/research-brief` |
| `tubebuddy.md` | Tag research, thumbnail/title A/B testing, bulk metadata | `/title-options`, `/thumbnail-brief`, `/title-thumbnail-pair` |
| `convertkit.md` | Email platform (Kit) — subscribers, sequences, broadcasts | `/lead-magnet-bridge`, `/community-cadence`, welcome-sequence automation |
| `beehiiv.md` | Email/newsletter platform — subscribers, automations, posts | `/lead-magnet-bridge`, `/community-cadence` (alternative to ConvertKit) |
| `gohighlevel.md` | CRM — contacts, opportunities, calendars, conversations | `/build-application-funnel`, `/sales-call-script`, post-call follow-up |
| `calendly.md` | Call booking for the application funnel | `/build-application-funnel`, `/sales-call-script` |
| `stripe.md` | Payments — charges, subscriptions, revenue tracking | `/kpi-dashboard` (cash-collected), `/build-application-funnel` |
| `notion.md` | Docs + databases — idea farm, SOPs, dashboards, human-facing reports | `/idea-farm`, `/series-architect`, `/build-sop`, `/kpi-dashboard` |
| `slack.md` | Team notifications and report delivery | Leak-audit delivery, KPI-dashboard delivery, team alerts |

## Contract shape

Every file in this directory carries the same frontmatter contract: `integration`, `auth_type`, `skills`, `required_scopes`, `rate_limits`, `fallback`. A skill that binds to a disconnected integration must follow the file's declared fallback — never fail silently, never block the content pipeline on a tool outage.

---

*v1.0 — 2026-06-11. Ten tool contracts, one registry.*

*A Heuresis workspace template.*
