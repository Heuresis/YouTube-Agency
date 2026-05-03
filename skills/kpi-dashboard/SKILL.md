---
name: kpi-dashboard
command: /kpi-dashboard
description: Build the channel's KPI dashboard — north-star + daily / weekly / monthly / quarterly metrics.
tier: sonnet
agent_owner: intelligence-head
agent_executor: intelligence-head
required_compartments:
  operations_intelligence: 40
mode_applicability: n/a
signal_5tuple:
  mode: ANALYZE
  genre: INFORM
  type: youtube.intelligence.kpi.dashboard
  format: MARKDOWN
  weight: 0.5
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# KPI Dashboard

## Purpose
Build the channel's KPI dashboard — the north-star metric + daily / weekly / monthly / quarterly KPIs + alert thresholds + review cadence. The dashboard makes the channel measurable; without it, leak audits are guesses.

## Decision Logic
Every channel has a different north-star: subscribers / inbound applications / cash collected / LTV. The north-star drives all other metrics' weighting.

The cadence rule:
- Daily: leading indicators (today's CTR / today's AVD on freshest video)
- Weekly: published-week aggregate (this week's published video's first-7-day metrics)
- Monthly: cohort cadence (channel performance vs. last month)
- Quarterly: strategic pulse (mode mix realized / pillar split realized / offer conversion)

## Tacit Principles
1. **One north-star, not three.** Multiple north-stars dilute focus.
2. **Daily metrics are leading indicators only.** Don't make decisions on 1-day data.
3. **Weekly metrics get acted on.** Tune mode mix, idea-farm sourcing, retention engineering against weekly data.
4. **Monthly metrics drive structural changes.** Channel architecture, offer pricing.
5. **Quarterly metrics drive strategy.** Mode mix calibration, pillar split, sponsor decisions.
6. **Alert thresholds prevent drift.** When a metric crosses, automatic action.
7. **Don't track vanity metrics.** Likes per video doesn't predict revenue.

## Process

### Step 0 — Gate check
operations_intelligence ≥ 40.

### Step 1 — Pick north-star
Subscribers / inbound applications / cash collected / LTV — pick one based on channel-stage + offer.

### Step 2 — Daily KPIs (leading indicators)
Fresh-video CTR, fresh-video AVD, lead-magnet conversion, social click-through.

### Step 3 — Weekly KPIs
Published-week aggregate — CTR / AVD / subs gained / email subs gained / VSL views / applications / discovery calls / closes.

### Step 4 — Monthly KPIs
Cohort vs. previous month. Compounding metrics: total subs, email list, LTV.

### Step 5 — Quarterly KPIs
Strategic — mode mix realized, pillar split realized, conversion rate per stage of funnel, channel CPM.

### Step 6 — Alert thresholds
For each metric, set "alert if drops below X%."

### Step 7 — Review cadence
When to look at daily / weekly / monthly / quarterly.

### Step 8 — Verify
North-star single, no vanity metrics, alert thresholds set.

## Output Format

```markdown
# KPI Dashboard — [Channel] — [Period]

**North-Star Metric:** [single metric]
**Date:** YYYY-MM-DD

## 1. Daily KPIs (leading indicators)
| Metric | Source | Alert threshold | Current value |
|---|---|---|---|

## 2. Weekly KPIs (act on these)
| Metric | Source | Alert threshold | Current value |

## 3. Monthly KPIs (structural)
| Metric | Source | Alert threshold | Current value |

## 4. Quarterly KPIs (strategic)
| Metric | Source | Alert threshold | Current value |

## 5. Alert Protocol
- Daily alerts: [who notifies whom, threshold]
- Weekly alerts: ...
- Monthly alerts: ...

## 6. Review Cadence
| Cadence | Reviewer | Duration | Output |
|---|---|---|---|
| Daily | community-manager / creator | 5 min | flag escalations |
| Weekly | intelligence-head + creator | 30 min | mode mix tune, idea-farm refresh |
| Monthly | full team review | 60 min | structural changes if needed |
| Quarterly | strategic review | 90 min | mode mix recalibration, pillar split |

## 7. Compartment Write-Backs
Updates to `operations_intelligence.kpi_dashboard`.

---
SIGNAL: S = (ANALYZE, INFORM, youtube.intelligence.kpi.dashboard, MARKDOWN, 0.5)
COMPARTMENTS_USED: [operations_intelligence, sales_conversion_stack, distribution_algorithm, content_engine, hook_retention_os]
COMPARTMENTS_WRITTEN: [operations_intelligence.kpi_dashboard]
FRAMEWORKS_USED: [north-star-metric-architecture, leading-vs-lagging-indicators, alert-threshold-system]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: north-star-metric-architecture]
- [framework: leading-vs-lagging-indicators]
- [framework: alert-threshold-system]

## Compartments Read
- `{{operations_intelligence}}`, all metrics-relevant compartments

## Compartments Written
- `{{operations_intelligence.kpi_dashboard}}`

## Verification Gates
- Formal: north-star single, daily / weekly / monthly / quarterly KPIs defined, alert thresholds set, review cadence defined
- Semantic: KPIs measurable, no vanity metrics, alert thresholds reasonable
- Info-theoretic: dashboard tight (5-10 metrics per cadence, not 50)

## Related Skills
- Upstream: `/build-channel-architecture`, `/design-offer`
- Downstream: `/leak-audit`, `/library-compound`
- Alternative: none

## Failure Modes
- **Multiple north-stars** — focus diluted. Pick one.
- **Vanity metrics** — likes / shares / generic engagement. Replace with revenue-correlated metrics.
- **No alert thresholds** — dashboard ignored. Set thresholds.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the north-star-metric-architecture tradition + leading-vs-lagging indicators canon.
