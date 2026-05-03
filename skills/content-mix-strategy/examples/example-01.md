# Example: content-mix-strategy output

## Context
- Channel stage: 1.2K subscribers (8 weeks post-launch)
- Audience awareness: 50% Solution-aware, 20% Problem-aware, 20% Product-aware
- Recent KPIs: CTR 5.8% (above 4% floor), AVD 47% (slightly below 50% target — reach videos pulling AVD down)

## Output

```markdown
# Content Mix Strategy — [Channel] — Q3 2026 (12 weeks)

**Channel stage:** 1K-10K (early growth)
**Date:** 2026-05-03

## 1. Mode Mix
- Authority: 65% (8/12 weeks)
- Reach: 30% (4/12 weeks)
- Hybrid: 5% (covered via Q&A pillar inside experimental)

(Adjusted slightly from 60/35/5 default for stage because AVD on reach is below target — tightening reach quality before expanding volume.)

## 2. Brand Pillar Split
- Primary (50%): Role-Design-First framework + delegation systems (authority pillar)
- Secondary (25%): Founder-archetype storytelling + agency-failure postmortems (reach pillar)
- Tertiary (15%): Service-business hiring + team-building (hybrid pillar)
- Experimental (10%): Q&A / community-driven / philosophy

## 3. Reasoning
- Audience awareness distribution: 50% Solution-aware → channel needs depth on mechanism (authority) more than awareness-building (reach)
- KPI-driven adjustment: AVD 47% is below 50% target. Reach-mode AVD pulling down because reach formats not yet calibrated. Tighten reach quality before increasing reach volume.
- Channel-stage fit: 1.2K subs needs reach to grow but already at 65/30/5 mix is consistent with rapid early growth (reach providing audience funnel).

## 4. 12-Week Schedule
| Week | Pillar | Mode | Title hypothesis | Awareness |
|---|---|---|---|---|
| 1 | Primary | authority | "The 6 Patterns of Failed Service-Business Delegation" | Problem→Solution |
| 2 | Secondary | reach | "I Built a Job, Not a Business — Here's What I Did About It" | Problem-aware |
| 3 | Primary | authority | "Tasks vs. Roles — the Distinction That Breaks Most Delegation" | Solution-aware |
| 4 | Tertiary | hybrid | "Why Most Service-Business Hiring Looks Right but Goes Wrong" | Solution-aware |
| 5 | Primary | authority | "Decision-Rights — the Missing Piece in Most SOPs" | Solution-aware |
| 6 | Secondary | reach | "1 Founder Who Escaped Delivery, 10 Who Tried" (1-vs-N) | Problem-aware |
| 7 | Primary | authority | "Why Hiring Better Doesn't Fix Delegation" | Problem→Solution |
| 8 | Experimental | hybrid | Q&A: "When to Hire Your First Strategic Role" | Solution-aware |
| 9 | Primary | authority | "How a $400K Agency Owner Stepped Out in 12 Weeks" (case study) | Solution→Product |
| 10 | Secondary | reach | "From $300K Doing-Everything to $700K Doing-Strategy" (before-vs-after) | Solution-aware |
| 11 | Primary | authority | "Why Every System You Build Dies in 60 Days" | Solution-aware |
| 12 | Primary | authority | "The 'My Business Is Too Unique to Systematize' Myth" | Product-aware |

Mode realization: 8 authority + 3 reach + 1 hybrid = 67/25/8. Slight skew toward authority — within tolerance, will rebalance Q4.

## 5. Compartment Write-Backs
Updates to:
- `content_engine.mode_mix.authority_pct: 65`
- `content_engine.mode_mix.reach_pct: 30`
- `content_engine.mode_mix.hybrid_pct: 5`
- `content_engine.brand_pillar_split: {primary: 50, secondary: 25, tertiary: 15, experimental: 10}`

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.content.mix.strategy, MARKDOWN, 0.7)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, content_engine, distribution_algorithm, operations_intelligence]
COMPARTMENTS_WRITTEN: [content_engine.mode_mix, content_engine.brand_pillar_split]
FRAMEWORKS_USED: [dual-mode-content-strategy, brand-pillar-split-50-25-15-10, channel-stage-mix-calibration]
CONFIDENCE: HIGH
GAPS: []
---
```

## Why this output is calibration-grade
The mix is justified by 3 inputs: channel stage, awareness distribution, recent KPI. The 12-week schedule realizes the mix proportionally. KPI-driven adjustment (AVD low on reach) drives a specific decision (tighten reach quality before increasing volume) — not a generic "make better content" recommendation.
