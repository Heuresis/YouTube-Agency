# Example: kpi-dashboard output

## Output

```markdown
# KPI Dashboard — [Channel] — Q3 2026

**North-Star Metric:** Inbound Applications/Month
**Date:** 2026-05-03

## 1. Daily KPIs
| Metric | Source | Alert threshold | Current value |
|---|---|---|---|
| Latest video CTR (24h after publish) | YouTube Studio | < 4% | 5.8% |
| Latest video AVD (24h after publish) | YouTube Studio | < 35% (early-stage adjusted) | 47% |
| Lead-magnet conversion (rolling 24h) | email platform | < 5% | 7.3% |

## 2. Weekly KPIs
| Metric | Source | Alert threshold | Current value |
|---|---|---|---|
| Published-week video CTR (7-day) | YouTube Studio | < 4% | 5.6% |
| Published-week AVD (7-day) | YouTube Studio | < 40% | 49% |
| Subscribers gained (week) | YouTube Studio | < 50 | 76 |
| Email subscribers gained (week) | email platform | < 30 | 42 |
| Pinned VSL views (week) | YouTube Studio | < 50 | 68 |
| Applications submitted (week) | application form | < 2 | 3 |
| Discovery calls booked (week) | Calendly | < 1 | 2 |
| Closes (week) | sales tracker | (n/a in early-stage) | 0 |

## 3. Monthly KPIs
| Metric | Source | Alert threshold | Current value |
|---|---|---|---|
| Total subscribers | YouTube Studio | (vanity — track but don't alert) | 1,247 |
| Email list size | email platform | (compounding — track) | 312 |
| Pinned VSL conversion (view → application) | combined | < 5% | 8.2% |
| Application → call show rate | combined | < 70% | 75% |
| Call → close rate | sales tracker | < 25% | (insufficient data — 4 calls so far) |
| Applications/month (north-star) | application form | < 8 | 11 |
| Cash collected/month | payment processor | (n/a in early-stage; 1 close so far) | $8,000 |

## 4. Quarterly KPIs
| Metric | Source | Alert threshold | Current value (8 weeks of data) |
|---|---|---|---|
| Mode mix realized (target 65/30/5) | content_engine log | drift > 10% | 67/25/8 — within tolerance |
| Pillar split realized (target 50/25/15/10) | content_engine log | drift > 5% per pillar | 58/21/14/8 — slight over-skew on primary |
| Channel CPM (sponsored) | sponsor payments | < $25 (early-stage band) | n/a (no sponsor yet) |
| Sequence conversion: VSL → app → call → close | combined | drift > 20% from baseline | trending baseline establishment phase |

## 5. Alert Protocol
- Daily alerts: community-manager checks at T+24h after publish; flags creator if any daily KPI breaches threshold
- Weekly alerts: intelligence-head reviews Friday; flags creator + adjusts /idea-farm or /retention-engineer if needed
- Monthly alerts: full-team review first Monday of month; structural change decisions
- Quarterly alerts: strategic review last week of quarter; mode mix + pillar split recalibration

## 6. Review Cadence
| Cadence | Reviewer | Duration | Output |
|---|---|---|---|
| Daily | community-manager + creator (auto-flag) | 5 min | escalation flags |
| Weekly | intelligence-head + creator | 30 min Friday | mode mix tune + idea-farm refresh + retention diagnosis if needed |
| Monthly | full team | 60 min first Monday | structural change decisions |
| Quarterly | creator + intelligence-head + monetization-head | 90 min | mode mix recalibration, pillar split, sponsor decisions, offer pricing review |

## 7. Compartment Write-Backs
Updates to `operations_intelligence.kpi_dashboard`:
- north_star_metric: "inbound_applications_per_month"
- daily_kpis: [3 metrics above]
- weekly_kpis: [8 metrics above]
- monthly_kpis: [7 metrics above]
- quarterly_kpis: [4 metrics above]

---
SIGNAL: S = (ANALYZE, INFORM, youtube.intelligence.kpi.dashboard, MARKDOWN, 0.5)
COMPARTMENTS_USED: [operations_intelligence, sales_conversion_stack, distribution_algorithm, content_engine, hook_retention_os]
COMPARTMENTS_WRITTEN: [operations_intelligence.kpi_dashboard]
FRAMEWORKS_USED: [north-star-metric-architecture, leading-vs-lagging-indicators, alert-threshold-system]
CONFIDENCE: HIGH (single north-star, KPIs distributed across 4 cadences, alert thresholds set, review cadence specific)
GAPS: [insufficient close data for call→close rate calibration; will calibrate after 10+ calls]
---
```

## Why this output is calibration-grade
Single north-star (inbound applications/month) — not three. KPIs distributed across 4 cadences with explicit purposes (daily = leading, weekly = act, monthly = structural, quarterly = strategic). Alert thresholds set per metric. Review cadence specific (who, when, what output). Dashboard tight (5-10 metrics per cadence) — not 50.
