---
name: offer-prompts
type: prompt-pack
purpose: One-shot prompts for back-end offer design — core-offer structure, offer-ladder rungs, pricing stress-tests, guarantee design, and value-stack builds. The channel scales only on top of a validated offer (INV-2, INV-4).
reads:
  - company.yaml — offer_architecture (back_end_offers, offer_ladder, pricing_psychology, economics_validation, content_to_offer_bridge), audience_intelligence_system
  - workspace/PROOF-BANK.md
  - workspace/STRATEGY.md
---

# Offer Prompts

> The offer funds the channel; the channel feeds the offer. These prompts draft and stress-test back-end offers for a YouTube-first creator — coaching, group program, mastermind, info-product, productized service, or hybrid. Use them for variants and stress-tests. The foundational offer doc, with the full economics gate, is `/design-offer`.

**Sequence discipline (INV-2):** offer design follows audience definition. If `audience_intelligence_system` is below 60%, the prompts below generate fiction — run `/build-audience` first.

---

## Prompt 1 — Core Back-End Offer Structure

```
You are an offer architect. Design the core back-end offer for a
YouTube creator in {{niche}} serving {{icp}}.

Offer type: {{coaching 1:1 / group program / mastermind /
info-product / done-with-you / productized service}}
Target price: {{price_point}} (typical band: $1K–$3K info-product,
$3K–$10K group/coaching, $10K–$50K+ mastermind/done-with-you)
The transformation it sells: {{from_state}} → {{to_state}}

Design the 8 components:

1. Promise (1 sentence) — specific outcome + timeframe + mechanism
   shape: "{{Outcome}} in {{N}} {{weeks/months}} using {{named
   mechanism}}." Bounded and concrete. NOT "transform your
   {{life/business/body}}." No income promises (NEVER-11) — promise
   the capability, the system, the asset built, not the earnings.

2. The named mechanism — the 2–4 word name for HOW it works,
   and the 3–5 steps inside it. The mechanism is what the audience
   can't get from the free videos: {{sequence / feedback /
   proximity / accountability / done-with-you build / community of
   peers at their level}}. Name which of those it is and why it
   produces the outcome when free content doesn't.

3. Deliverables (5–8 items) — every item a tangible the buyer can
   point at: the curriculum modules, the call cadence
   (who/when/format), the review loops ("submit X, get feedback in
   {{N}} days"), the templates/systems, the community access, the
   direct-access channel and its boundaries. NOT "support" or
   "access" unqualified.

4. The journey (week-by-week for the first 30 days, then phase-level)
   — what the buyer does, what I do, the first win and WHEN it lands
   (early-win design: the persona's 30-day micro-outcome from
   research-prompts Prompt 5).

5. Pricing rationale — why {{price_point}}: anchored to the
   alternative costs ({{doing it alone for another year / hiring it
   done / the competing program}}), to the deliverable load, and to
   {{pricing_psychology}}. Show the reasoning, not "because value."

6. Guarantee / risk reversal — per Prompt 4 patterns. Action-bound,
   never earnings-bound.

7. What's NOT included (3–5 items) — scope protection: "{{1:1 access
   beyond X / done-FOR-you execution / niches outside Y}}."
   Exclusions make the included parts believable.

8. Qualification — who this is for (concrete entry conditions),
   who it is not for, and where not-yet-fits route (the ladder rung
   below, or "watch these 3 videos and apply in 90 days").

Output: 1-page offer doc, my voice, anti-hype, every claim concrete.
Mark every number that needs proof with its PROOF-BANK status:
[VERIFIED] / [CONFIRM] / [NEEDS-PROOF].
```

---

## Prompt 2 — Offer-Ladder Design (Entry Rungs)

```
You are an offer-ladder architect. My core back-end is {{offer_name}}
at {{price_point}}. Design the rungs below it so the channel has a
route for every awareness level:

Rung 0 — Free: the channel + {{lead_magnet_name}} (the email bridge;
see /lead-magnet-bridge for the production build)
Rung 1 — Low-ticket ({{$27–$200 band}}): a self-serve artifact that
delivers ONE complete win (a template system, a mini-course, a
toolkit, a paid workshop). Design: the win, the format, the price,
and the bridge it earns to Rung 2.
Rung 2 — Mid ({{$500–$2K band}}, optional): group intensive /
cohort-lite / paid community. Only if it doesn't cannibalize the
core or split my delivery focus — make the case for or against.
Rung 3 — Core: {{offer_name}} at {{price_point}}.

For each rung:
- What it delivers (complete at its level — a teaser product that
  withholds the win poisons trust and the trust contract, INV-16)
- What it deliberately does NOT solve (the honest reason the next
  rung exists — depth, speed, feedback, proximity)
- The bridge mechanic to the next rung (where in the consumption
  experience the next step appears, and the CTA language)
- The economics: price × expected take-rate from the rung above →
  does the ladder math feed 3:1 LTV:CAC overall (INV-4)?

Constraint: the ladder serves the CHANNEL strategy — every rung's
content-to-offer bridge maps to {{offer_architecture.content_to_offer_bridge}}
(authority videos → which rung; reach videos → channel architecture
only, never a direct pitch).

Output: the ladder as a table + per-rung 1-paragraph spec + the
take-rate assumptions marked [ESTIMATE] until real data replaces
them.
```

---

## Prompt 3 — Pricing Stress-Test

```
You are a pricing analyst. Stress-test this offer before it goes
live. Offer doc: [paste]

Run 5 tests:

1. The 3:1 LTV:CAC gate (INV-4) — with my actuals from
   {{offer_architecture.economics_validation}} (LTV, CAC including
   content-production cost per acquired customer) — does this price
   clear 3:1? Show the math. If the channel is pre-revenue, run it
   at 3 application-volume scenarios (conservative / expected /
   strong) from current channel data, all marked [ESTIMATE].

2. Anchoring test — against the visible alternatives my buyer
   actually compares: competing programs in {{niche}}, hiring it
   done, DIY-with-free-content. Below the band reads low-value;
   at the band reads commodity; above the band requires the named
   mechanism to be doing real work. Which am I, and is the
   mechanism strong enough to carry it?

3. Disqualification test — at this price, what fraction of warm
   applicants SHOULD say no? If nearly nobody balks, the price is
   under-filtering (wrong-fit buyers get in, refunds and reputation
   follow). If >80% balk, the price has outrun the proof I currently
   hold in PROOF-BANK.

4. Receipt test — list every claim in the offer doc; map each to a
   PROOF-BANK row tag ([VERIFIED] / [CONFIRM] / [NEEDS-PROOF]).
   An offer doc carrying [NEEDS-PROOF] claims doesn't ship — either
   capture the proof or cut the claim.

5. Delivery-load test — at {{N}} buyers/month, what does delivery
   cost ME in hours/week? Price must fund delivery without
   cannibalizing the publishing cadence — the channel IS the
   acquisition engine; an offer that eats the channel starves
   itself.

Output: verdict per test (pass / adjust, with the specific
adjustment) + overall: approved to ship / revise. No averaged
"7/10 overall" — the gates are individually binding.
```

---

## Prompt 4 — Guarantee Design

```
You are a guarantee architect. Design 3 alternative guarantees for
{{offer_name}} at {{price_point}}.

Hard constraints first:
- NO earnings/income guarantees, stated or implied (NEVER-11 —
  regulatory exposure + platform policy + the trust contract)
- Every guarantee is measurable and enforceable as written —
  no "satisfaction guaranteed," no "until you're happy"
- Conditions are completable by a real buyer with a job and a life,
  or the guarantee is theater

The 3 patterns:

A. Action-bound refund — "Complete {{the defined actions: modules,
   submissions, attendance}} within {{N}} days; if {{specific
   deliverable-bound outcome — e.g., 'you don't have your channel
   architecture, 8 packaged titles, and 2 reviewed scripts'}},
   full refund." Binds to artifacts produced, not results earned.

B. Milestone guarantee — "If by {{day N}} you don't have
   {{concrete milestone within my control to facilitate: the
   system built, the asset shipped, the review delivered}}, we work
   1:1 at no charge until you do." Binds my effort, not their
   outcome.

C. Fit-window exit — "Full refund inside the first {{14/30}} days,
   no conditions beyond {{showing up to the kickoff}}." Cleanest;
   prices in some abuse; strongest trust signal for audiences burned
   by past course purchases (check the objections list — if "I've
   been burned before" ranks top-3, pattern C pulls hardest).

For my offer give me:
- Best-fit pattern + reasoning against MY audience's objection
  profile ({{audience_intelligence_system}} objections list)
- Exact wording for the sales page and the checkout
- The 3 things to instrument from day 1 so the guarantee is
  enforceable fairly (action tracking, milestone dates, refund SLA)
- The abuse envelope: expected refund rate band and the cost at my
  volume, marked [ESTIMATE]
- The escape clauses that are FAIR (access provided on time,
  submissions reviewable) — and a flag on any clause that would
  read as weasel-wording on a screenshot (INV-5 applies to
  guarantees too)
```

---

## Prompt 5 — Value-Stack Build

```
You are a value-stack architect. For {{offer_name}} at
{{price_point}}, build the stack the buyer sees on the offer page.

Pattern (reference/frameworks/* — value-equation logic):
- 5–8 line items; each = deliverable + standalone value
- Total stack 3–5x the price — beyond 5x the numbers read as
  invented and the whole page loses credibility
- Each line item priced at what it would defensibly cost bought
  alone (a comparable course, a coach's hourly, an agency's
  deliverable rate) — note the comparable used
- Each line item names a real deliverable: "12 weekly script
  reviews with 48-hour turnaround" — not "ongoing support
  ($2,000 value)"

Shape:
| Deliverable | Standalone value | Comparable basis |
|---|---|---|
| {{core curriculum/system}} | ${{X}} | {{comparable}} |
| {{call cadence}} | ${{X}} | {{coach hourly × sessions}} |
| {{review loops}} | ${{X}} | {{editor/consultant rate}} |
| {{templates/systems}} | ${{X}} | {{sold-separately price}} |
| {{community/proximity}} | ${{X}} | {{paid-community comp}} |
| **Total** | **${{3–5x price}}** | |
| **Price** | **{{price_point}}** | |

Constraints: no "priceless," no "value: $10,000" on a PDF, no
bonus-stacking theater (3 bonuses max, each countering a named
objection from the objections list — name which). My voice.
Anti-hype. The stack should survive being read aloud by a skeptic.

Output: the stack table + 3 bonuses with their objection mapping +
the 1-line stack-summary sentence for the offer page.
```

---

## Pre-Ship Validation On Offer Output

1. **Economics gate (INV-4)** — 3:1 LTV:CAC path shown before the channel scales content toward the offer. A broken offer scaled is waste compounded.
2. **Proof trace (INV-6)** — every result, count, and testimonial maps to `workspace/PROOF-BANK.md` `[VERIFIED]`; `[NEEDS-PROOF]` claims are cut or captured, never shipped.
3. **Truth gate (INV-5)** — every promise survives the 30-second screenshot test; guarantees read clean, not clever.
4. **No income guarantees** (NEVER-11) — promises bind to capabilities, assets, and milestones.
5. **Signal check** — `workspace/prompts/signal-check.md` on the offer page copy; 7+ ships. **Voice gates** — `spec/voice-gates.md` on every buyer-facing surface.

## When To Escalate From Prompt To Skill

- The foundational offer doc with full value stack + 3:1 validation → `/design-offer`
- The funnel that sells it (application questions, qualification, booking) → `/build-application-funnel`
- The free rung and the email bridge → `/lead-magnet-bridge`
- The conversion engine on the channel → `/write-pinned-vsl`
- Pricing signals from real calls (everyone balks / nobody balks) → `/leak-audit` Offer layer

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
