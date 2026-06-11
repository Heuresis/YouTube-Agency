---
name: analytics-prompts
type: prompt-pack
purpose: One-shot diagnostic prompts — channel-to-cash funnel bottleneck diagnosis, LTV:CAC stress test, churn-cause categorization, and cohort analysis. Reads the scoreboard, names the constraint layer, and prices the leak in dollars — then routes the verdict to the SLATE, a compartment, or a skill.
reads:
  - company.yaml — operations_intelligence (kpi_dashboard, attribution), offer_architecture.economics_validation, sales_conversion_stack, hook_retention_os (ctr_targets, retention_targets)
  - workspace/published/_ANALYTICS.md
  - workspace/pipeline/SLATE.md
  - workspace/PROOF-BANK.md
---

# Analytics Prompts

> Diagnosis runs on data, not vibes. These prompts need a real corpus — a scoreboard with rows in it (`workspace/published/_ANALYTICS.md`) and, for the economics prompts, 5–10+ closed buyers' worth of back-end data. A pre-revenue channel running a churn analysis produces fiction; ship first, diagnose second. Channel KPIs (CTR, AVD, % viewed, conversion-assist) and business KPIs (applications, calls booked, show rate, close rate, LTV:CAC) are read together — for a YouTube-first creator with a high-ticket back-end, the funnel leaks across both layers or neither.

---

## How To Use

1. Pick the prompt matching the question.
2. Pipe in actuals — scoreboard rows from `workspace/published/_ANALYTICS.md`, YouTube Studio exports, CRM/funnel numbers. Real figures, not recalled approximations (INV-6 applies to inputs too).
3. Normalize for age before comparing videos — views at 13 days ≠ views at 54 days (the scoreboard's footnote rule).
4. Read output against the channel's own targets first (`hook_retention_os.ctr_targets`, `retention_targets`), then the niche envelope (`reference/benchmarks/_INDEX.md`).
5. Route the verdict: SLATE re-rank, compartment update, or skill escalation (bottom of this file). A diagnosis with no destination evaporates.

---

## Prompt 1 — Funnel Bottleneck Diagnosis (Channel → Cash)

The full path from impression to closed buyer, read as one funnel. The stage names the symptom; the six-layer diagnostic (INV-1) names the cause.

```
You are a funnel analyst for a YouTube-first creator in {{niche}}
whose back-end is {{offer_type}} at {{price_point}}. Diagnose where
the channel-to-cash funnel is leaking the most revenue.

My funnel data (last {{timeframe}}, age-normalized):

| Stage | Volume | Conv% to next |
|---|---|---|
| Impressions | {{N}} | |
| Views (CTR) | {{N}} | {{%}} |
| Avg % viewed / AVD | {{%}} / {{mm:ss}} | |
| Bridge clicks (end-screen / description / pinned comment) | {{N}} | {{%}} |
| Lead-magnet opt-ins / pinned-VSL views | {{N}} | {{%}} |
| Applications completed | {{N}} | {{%}} |
| Qualified | {{N}} | {{%}} |
| Calls booked | {{N}} | {{%}} |
| Showed | {{N}} | {{%}} |
| Closed | {{N}} | {{%}} |

My LTV: ${{LTV}} (offer_architecture.economics_validation)
Target closes/month: {{target}} — current: {{actual}}

Diagnose:

1. The biggest leak — the stage with the worst conversion against
   its reference band:
   - Channel stages: my own targets first (CTR target/floor, AVD
     target/floor from hook_retention_os), then the {{niche}} band
     in reference/benchmarks/_INDEX.md
   - Business stages: the INV-4 bands — application-to-call ≥40%
     from the pinned-VSL/end-screen path; close rate ≥25% on
     $3K–5K offers, ≥15% on $10K+
   - For the leak: stage, current %, reference %, and the gap in
     dollars/month (closes lost × LTV — show the chain)

2. Which of the six layers the leak lives in (INV-1): Audience /
   Offer / Topic-Hook / Retention / Distribution / Conversion.
   Low CTR on strong impressions = Topic-Hook. Healthy CTR, low
   % viewed = Retention. Healthy watch, no bridge clicks =
   Conversion architecture. Healthy calls, no closes = Offer or
   sales craft. The leak is rarely where it looks first.

3. The 3 likeliest root causes, ranked by probability, each with:
   - The diagnostic test to confirm (which scoreboard read, which
     A/B, which call recordings to review)
   - The specific fix (prompt, skill, or asset change)

4. The 2nd-worst leak — same analysis, second priority.

5. The compound effect — if both leaks close to their reference
   band, projected monthly revenue lift over 90 days. Mark it
   [PROJECTION] with the assumption chain visible.

Constraints:
- Conversion-assist is the north star, not views — a fix that adds
  views without warming buyers ranks below a smaller fix that does
- Every diagnosis = specific stage + specific number + specific
  fix. "Improve the funnel" is not a finding.
- No invented benchmarks: cite the band's source or mark [ESTIMATE]

Output: 1-page diagnostic — 2 leaks, 3 fixes, the 90-day
[PROJECTION] — closing with the ONE constraint to work this month.
```

---

## Prompt 2 — LTV:CAC Stress Test

The economics gate (INV-4): a viable path to 3:1+ LTV:CAC before content production scales. A creator's CAC hides in production hours — count them.

```
You are a unit-economics analyst. Stress-test my creator business
against the 3:1 LTV:CAC gate (INV-4).

My data (offer_architecture.economics_validation + actuals):
- Core offer: {{offer_name}} at {{price_point}}
- Ladder take-rates per rung: {{%s}}; ascension rate to the rung
  above: {{%}}
- Continuity/renewal (if any): ${{X}}/mo × {{N}} months average
- Refund rate: {{%}}
- CAC, all-in: ${{CAC}} — include content-production cost per
  acquired buyer (editor, thumbnails, tools, my hours at a real
  rate), paid amplification if any, and sales time

Calculate:
1. LTV — initial purchase + ascension probability-weighted +
   continuity probability-weighted × months − refunds. Show every
   step of the math.
2. LTV:CAC against the 3:1 bar (INV-4)
3. Payback period — months to recover CAC per buyer
4. Cost-per-application and cost-per-call implied by current
   funnel volumes — and the ceiling each can rise to before the
   ratio breaks 3:1
5. The 3 sensitivity levers — which input, moved 10%, moves
   LTV:CAC most; the specific action behind each lever

If LTV:CAC < 3:1 — name the cause: price too low for the delivery
load, CAC inflated by production scope, ascension absent, or churn
eating the tail. Prescribe the fix and which surface owns it
(offer doc / application funnel / content scope).

If LTV:CAC > 5:1 — under-investment in acquisition. Name what to
add (paid amplification per prompts/ad-creative-prompts.md, more
production capacity, a second format lane) and the spend ceiling
that keeps the ratio above 3:1.

Output: 1-page unit-econ report. Every forward number marked
[PROJECTION] with its assumptions. Verified actuals update
offer_architecture.economics_validation; the headline ratio is a
standing row in operations_intelligence.kpi_dashboard.
```

---

## Prompt 3 — Churn-Cause Categorization

Back-end retention: who leaves the program/membership/continuity, what they said, what was actually true, and what would have held them.

```
You are a retention analyst for my back-end ({{offer_type}}:
program / membership / mastermind / continuity). Categorize my
churn and refunds.

My data (last {{timeframe}}):
| Buyer | Joined | Churned/Refunded | Months in | Reason (stated) |
Reason (real, if known) | Source video/funnel |

Diagnose:
1. The 3 most common STATED reasons + their frequency
2. The 3 most common REAL reasons — stated and real usually
   differ:
   - "Too busy" is often "no early win by week 3"
   - "Not what I expected" is often the offer page promising what
     the delivery under-delivers — an INV-5 problem upstream
   - "Got what I needed" is often "no visible next rung"
3. The qualification check — were the churned buyers inside
   offer_architecture.qualification at admit? If the churned
   cluster fails the entry criteria, the leak is the application
   gate, not the program.
4. The leading indicators, visible 30+ days before the cancel:
   call attendance drops, submissions stop, community goes quiet,
   email opens fall. Name the 2–3 visible in MY data and a trigger
   threshold for each.
5. The 3 retention plays matched to MY real reasons — early-win
   redesign in the first 14 days, milestone check-in cadence,
   visible next-rung path — each priced in my hours/week.
6. Per churned buyer: preventable or not. If preventable, the
   specific play and the week it needed to fire.

Rules: stated reasons stay verbatim. Real-reason inferences are
marked [INFERRED] with the evidence behind each. No composite
"typical buyer" stories (INV-6).

Output: 1-page churn diagnostic + the 3 plays ranked by saved-LTV
per hour of my time + the fields this updates
(audience_intelligence_system objections; the offer doc's
early-win design).
```

---

## Prompt 4 — Cohort Analysis (By Month × By Source Video)

The creator-specific cohort cut: not just when buyers joined, but which video produced them. This is conversion-assist ground truth — and the SLATE re-ranks on it.

```
You are a cohort analyst. Slice my buyers by month-of-enrollment
AND by acquisition source, then read the trends.

My data:
| Cohort month | Buyers | Still active | LTV-to-date | Ascended a
rung (%) | Primary source (video / series / lead magnet / other) |

(Source attribution per operations_intelligence.attribution — if
source tracking is empty, that is finding #1: instrument it before
the next launch.)

Diagnose:
1. The retention curve — % of each cohort active at 1 / 3 / 6 / 12
   months
2. Cohort effects — newer cohorts retaining better (delivery is
   improving) or worse (admit quality or expectation-setting
   slipped)? Name the evidence rows.
3. The LTV trend per cohort and its driver — ascension rate,
   continuity length, or price changes
4. The source read — which videos/series produced the longest-LTV
   buyers. A video that produced 3 buyers at 2× median LTV
   outranks the channel's view-count outlier. Hand the verdict to
   workspace/pipeline/SLATE.md — the slate re-ranks on
   conversion-assist, and this is its hardest evidence.
5. The ascension candidates — of buyers active 6+ months, who fits
   the top rung ({{high_ticket_offer}}), and which shared traits
   define the candidate profile
   → offer_architecture.qualification gets the traits.

Output: 1-page cohort report + 2 actions for the next 30 days +
the SLATE implication in one line ("make more of {{X}} — the
buyers it produces stay {{N}}× longer").
```

---

## Pre-Save Validation On Analytics Output

1. **Input integrity (INV-6)** — output is only as good as the rows fed in. Real exports, not recalled approximations; age-normalized before comparison; gaps flagged, never filled with invented figures. A diagnosis on soft inputs is noise wearing a chart.
2. **Projection discipline** — every forward number carries `[PROJECTION]` + its assumption chain. Projections never enter content, PROOF-BANK, or an offer page; verified actuals may, after the 30-second screenshot test (INV-5).
3. **Conversion-assist first** — any read that ranks videos by raw views gets re-run; the scoreboard's reading rule ranks proof-that-converts first, reach second.
4. **Findings land somewhere** — a verdict that doesn't re-rank `workspace/pipeline/SLATE.md`, update a compartment field, or fire a skill evaporates. Name the destination before saving.
5. **Signal check** — `workspace/prompts/signal-check.md` on any finding that will be quoted in content (a real-numbers video, an email, a post); 7+ or it stays internal. **Voice gates** — `spec/voice-gates.md` on any buyer-facing surface the finding ships to.

## When To Escalate From Prompt To Skill

- The standing dashboard with daily/weekly/monthly/quarterly cadence → `/kpi-dashboard`
- The formal six-layer structural audit with fix-path → `/leak-audit`
- One video's retention curve, drop zones, and fix-path → `/audit-retention`
- Pattern extraction across the published library → `/library-compound`
- Economics fail (< 3:1) traced to the offer itself → `/design-offer`

A prompt reads the scoreboard; a skill changes what gets made. If the verdict should outlive the session, it goes through the skill.

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
