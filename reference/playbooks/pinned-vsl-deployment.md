# Pinned-VSL Deployment

> First-time deployment of the pinned VSL. The pinned VSL is the channel's conversion engine — a 30–60 minute educational long-form video that runs the 15-step / 11-step / 8-belief spine, ends with an application CTA, and routes viewers into the back-end offer's funnel. This playbook covers structure choice, production approach, application-funnel build, post-call sequence build, and first-month performance benchmarking.

## Why the pinned VSL matters

The pinned VSL is structurally distinct from any other video on the channel. It is:

- The single video pinned to the channel's home page (highest visibility)
- The video the channel architecture routes most authority videos to (via end-screen, description, About section)
- The conversion gate from "engaged subscriber" to "qualified applicant"
- The asset that monetizes the channel's audience-building work

Without a pinned VSL, the channel's authority-mode work converts at a structurally lower rate. With a poorly-designed pinned VSL, the channel's conversion plateau is set artificially low. Getting the pinned VSL right is the single highest-leverage commercial decision in the OS's lifecycle.

## When to deploy

Pinned-VSL deployment is appropriate when:

- The channel has 6–10+ long-form videos published (the pinned VSL needs context)
- The back-end offer is locked (compartment 3 ≥ 80% completeness)
- The audience compartment is solid (≥ 70%)
- The creator's voice has been extracted (≥ 60%)
- The application-funnel infrastructure is ready (Stripe, Calendly, application form)
- The economics are validated (3:1 LTV:CAC minimum per INV-4)

Premature deployment (channel under 6 videos, audience under 70% completeness, offer ambiguous) burns the pinned-VSL slot — it can be replaced, but the operator only gets one canonical first-impression on the pinned slot.

## Step 1 — Structure choice

Three primary structures, each with different fit profiles:

### 15-step VSL spine

The classical long-form-VSL specialist's structure. Hook → Lead → Qualification → Problem & Question → Hero Story & Guru → Solution → Features & Benefits → Testimonials & Receipts → Price Anchoring → Guarantee & Risk Reversal → Urgency → Crossroads Close → Takeaway Close & Re-Qualification → Help Them Buy → Future Pace.

Length: 35–60 minutes typical.

Use when:
- The back-end offer is high-ticket ($5K+)
- The audience needs all 8 beliefs installed in one video
- The operator can sustain 35–60 minutes of camera-on production
- The audience awareness level is solution-aware → product-aware (the structure assumes some upstream context)

### 11-step VSL spine

A compressed variant. Hook → Lead → Problem & Question → Hero Story → Solution → Features & Benefits → Price Anchoring → Guarantee → Urgency → Crossroads → CTA & Future Pace.

Length: 20–35 minutes typical.

Use when:
- The back-end offer is mid-ticket ($1K–$5K)
- The audience is product-aware (already familiar with the niche; doesn't need extensive front-loading)
- The operator's strength is concision rather than long-form camera presence

### 8-belief spine

Structured around the 8 required beliefs in sequence rather than 15 steps. Each belief gets a dedicated section.

Length: 25–45 minutes typical.

Use when:
- The back-end offer's belief stack is the natural organizing principle (rather than the offer's mechanics)
- The operator's natural delivery is belief-driven rather than story-driven
- The audience responds to systematic belief-installation rather than narrative arc

The choice is structural fit — the operator's delivery style + the audience's awareness level + the offer's price tier all inform the choice. Run `/write-pinned-vsl` skill which factors all three.

## Step 2 — Pre-production preparation

### Compartment audit

Before scripting, confirm:
- Audience compartment ≥ 75% (per INV-3 pinned-VSL gate)
- Identity compartment ≥ 75%
- Offer compartment ≥ 80%
- Hook & Retention OS compartment ≥ 60% (for the script's hook and retention engineering)

If under threshold, route to upstream skills first.

### Voice-of-viewer harvest

Pull the voice-of-viewer phrases (compartment 2) from comments, sales calls, surveys, DMs. The pinned VSL's hook and pain-language must reflect verbatim viewer language. Generic copy underperforms structurally.

### Case-study harvest

Pull 5–10 case studies from the channel's catalog or the operator's client list. Anonymize per the case-study archivist's discipline (segment + scale + niche, never names). The pinned VSL's testimonials/receipts section uses these.

### Mechanism articulation

If the operator has a named mechanism, the mechanism's articulation is locked before scripting. The pinned VSL is the mechanism's canonical introduction (or for established channels, the canonical conversion-deployment of the mechanism).

## Step 3 — Scripting

The script is built section-by-section per the chosen structure. Run `/write-pinned-vsl` skill. Key principles:

### Section-by-section belief tagging

Each section is tagged with the belief it primarily installs. The 8 required beliefs:
1. Reproduction
2. Derivative Desire
3. Can-Fulfill
4. Urgency
5. This-Offer
6. Better/Faster
7. Trust-Person
8. Trust-Expertise

Every paragraph in the script answers: "this paragraph installs Belief #X." Generic copy without a belief tag is removed.

### Hook calibration

The hook follows INV-11 (minimum 3 retention mechanisms in first 30s). For the pinned VSL specifically:
- Hook density typically higher than standard authority videos (5+ mechanisms in the first 60s)
- Three-Brain Decision Sequence runs explicit (Reptilian 0–3s, Limbic 3–15s, Neocortex 15s+)
- Voice-of-viewer pain language in the first 15 seconds

### Price anchoring

Per the long-form-VSL specialist's mechanic: never sell before Step 9 (Price Anchoring). The price-anchoring section uses:

- Asking the viewer to estimate value
- Analogies to their world
- Cost of inaction comparison
- Letting them conclude the value
- Revealing the price

The viewer sells themselves on the number before the number is stated.

### Crossroads + Takeaway close

The video closes with the crossroads close (Path 1 Nightmare + Path 2 Dream + Burden-of-Proof) followed by the takeaway close (re-qualification). These are non-optional in high-ticket VSLs.

### Future Pace

The final section walks the viewer through the first 60 seconds after applying, the first week, the first month, the 6-month transformation. Calibrate emotional intensity to audience sophistication.

## Step 4 — Production approach

The pinned VSL is the channel's flagship asset. Production tier should be the highest the operator can sustain.

### Recording approach

- **Single-take with minimal edits** (preferred when the operator's delivery is camera-strong) — the script is rehearsed; the recording is one continuous take with sectional cuts only at natural breaks
- **Section-by-section recording** (when single-take exceeds the operator's stamina) — each section recorded separately; tightly edited together
- **Scripted with teleprompter** (when on-camera improvisation is weak) — script appears on a teleprompter; the operator delivers from it with practiced naturalism

### Visual production

- **Lighting**: 3-point setup minimum; quality matters because the video is long
- **Camera**: 4K or higher; multi-cam where possible (2 angles for variety)
- **Audio**: lavalier or boom microphone; quality is non-negotiable (long-form audio that's poor causes early drops)
- **Set / location**: stable, branded, on-character with the operator's persona
- **Wardrobe**: consistent with the operator's signature visual elements

### Editing

- **Cut density**: matches the operator's signature pace (typically 3–5 cuts per minute for authority delivery)
- **B-roll**: integrated at section transitions; visual variety prevents talking-head fatigue
- **On-screen text**: section titles, key statistics, callout boxes for retention
- **Music**: under-score throughout; no jarring music shifts
- **Transitions**: minimal flash; clean cuts; subtle motion graphics for major section changes

### Length discipline

The pinned VSL is long but not bloated. Each section earns its length. Editing pass: every minute of footage is asked "does this advance a belief?" If no, cut.

## Step 5 — Application-funnel build

The pinned VSL ends with an application CTA. The application-funnel infrastructure must be ready.

### Application form

8–12 questions. Filtering, not just collecting. Question architecture:

1. Full name, email, contact
2. What is the specific outcome you want in the next [timeframe]? (fit)
3. What have you tried? Why hasn't it worked? (readiness)
4. Current state — revenue, role, situation. (fit + budget signal)
5. What is the cost to you of NOT solving this? (pain scale + budget permission)
6. The program is $[X]. Are you able to invest at that level if it's a fit? (Yes / Need to discuss / Not right now) — explicit budget qualifier
7. On a 1–10, how committed are you to solving this in the next [timeframe]? (readiness)
8. Why now? (readiness + pain)
9. What would have to be true on our call for you to say yes to working together? (close-ready signal)
10. Anything else we should know? (wildcard)

The explicit price question (Q6) is non-negotiable. Operators who hide price get high show rates with low close rates. Operators who expose price get lower show rates with higher close rates. The second is structurally better for high-ticket offers.

### Booking tool

Calendly (or SavvyCal, Acuity, GHL). 30–60 minute calendar slots. The booking page is integrated to confirm the application before booking, OR the application is reviewed manually before the booking link is sent (higher-touch but better filtering).

### Confirmation sequence

Once the call is booked:

- T+0: confirmation email with call details, prep materials (a confirmation video where applicable)
- T-24h: reminder email + SMS (where consent permits)
- T-1h: reminder email + SMS
- T-15min: final SMS

Show-rate target: 65–75%. Below 65% signals confirmation-sequence weakness or qualification gaps.

### Pre-call materials

Optional but high-leverage: a 10–20 minute pre-call video that the booked applicant watches before the call. This:
- Reinforces belief installation
- Sets the call's frame
- Reduces objection volume on the call

Adoption is selective. Some operators include it; some prefer to do all the work on the call.

## Step 6 — Post-call sequence

After the call, every applicant gets a follow-up sequence.

### Closed-on-call applicants

If the applicant said yes on the call:

- T+0: payment link sent live during the call OR within 1 hour after
- T+1h: confirmation of payment + onboarding email
- T+24h: welcome to the program, next steps
- T+7d: first program-engagement check-in

### Soft-no applicants ("I need to think about it")

- T+24h: thank-you email with the recording or notes from the call
- T+72h: case-study email — anonymized client win that addresses their hesitation
- T+7d: follow-up offering a final question call OR final yes/no
- T+14d: respectful close-out — "if it's not a fit, no worries; here's what to watch on the channel"

### Hard-no applicants

- T+0 (after call): thank-you email; route to the channel's free content
- T+30d: re-engagement check-in if appropriate

### Disqualified applicants (didn't pass qualification)

- T+0 (after disqualification): polite explanation; route to lower-ticket entry point if available; route to channel's free content otherwise

## Step 7 — Pinned-comment + description build

The pinned VSL needs supporting infrastructure on YouTube.

### Pinned comment

Pinned to the top of the pinned VSL's comments. Examples:

> If this resonates, the next step is to apply for [program name]. The application is at [link]. We work with [audience profile] who want to [transformation]. — [creator first name]

The pinned comment is a soft echo of the video's CTA. Not pushy, but explicit.

### Description

The description includes:

- 2–3 sentence summary of the pinned VSL
- Application link prominent
- Timestamps (so viewers can scrub to specific sections)
- Channel links (foundational playlist, social, email list)
- Disclaimers as required (financial, health, etc., per niche regulation)

### Featured-section placement

The pinned VSL is featured at the top of the channel's home page. Channel banner can include "Watch the full breakdown — pinned video below" direction.

### End-screen routing from authority videos

Authority videos (across the channel) route their end-screens to the pinned VSL where appropriate. This is the channel architecture's primary conversion path.

## Step 8 — First-month performance benchmarking

The pinned VSL goes live. The first 30 days produce calibration data.

### Day 1–7 metrics

- Views on the pinned VSL
- AVD on the pinned VSL (target: APV ≥ 50%; below 40% signals retention issues)
- Click-through to application (link clicks from description / pinned comment / end-screen)
- Application starts vs. application completions
- Applications received

### Day 7–14 metrics

- Calls booked
- Show rate
- Initial calls held; data on objection patterns and close attempts

### Day 14–30 metrics

- Close rate on calls
- Cash collected
- Application-to-call rate (if below 35%, application is over-filtering or call confirmation is weak)
- Call-to-close rate (if below 25%, the pinned VSL or call script needs revision)

### Benchmarks

Structural bands (calibrated per-channel from real data over time):

- **View-to-application rate** (from pinned VSL): 1–3% in month 1 typical for high-CPM niches with strong fit
- **Application-to-call rate**: 35–55% (below 35% is application weakness; above 55% is under-filtering)
- **Call show rate**: 65–75%
- **Call-to-close rate**: 25–40% on $3K–5K offers; 15–25% on $10K+
- **Cost per application** (for paid traffic if applicable): ≤ 1 / (3 × close rate × LTV) per INV-4

Below the bands: diagnose. Above the bands: maintain.

### First-month diagnosis

At Day 30, run a focused diagnostic:

- Where in the pinned VSL is retention dropping? (Audit the retention curve.)
- Are applicants converting to calls at expected rate?
- Are calls closing at expected rate?
- What objections are recurring on calls? (Update the pinned VSL or call script accordingly.)

The pinned VSL is iterated based on this diagnostic. Common iterations:
- Re-record the hook (if early retention is the issue)
- Re-record price-anchoring section (if conversion drops at the price reveal)
- Strengthen specific belief installations (Trust-Person, Can-Fulfill commonly need reinforcement)

The first-month iteration is expected. The pinned VSL converges to its mature performance over 2–4 months.

## Failure modes

### Premature deployment

**Failure**: deploying the pinned VSL before the audience is at 70% completeness or the offer is at 80%. The pinned VSL underperforms because the upstream isn't ready.
**Prevention**: gate per Step 2.

### Generic hook

**Failure**: the hook uses generic copy rather than voice-of-viewer language. Early retention drops.
**Prevention**: voice-of-viewer harvest in Step 2; verbatim phrases in the hook.

### Selling before Step 9

**Failure**: the operator pitches the offer before the price-anchoring section. Prior beliefs are not installed; the price reveal lands wrong.
**Prevention**: section-by-section belief tagging in Step 3. The script is structurally constrained.

### Application without explicit price question

**Failure**: the application doesn't include the explicit price question. Show rates are high, close rates are low.
**Prevention**: Step 5 application architecture. Q6 is non-negotiable.

### Confirmation-sequence weakness

**Failure**: applicants don't get adequate reminders. Show rate craters.
**Prevention**: Step 5 confirmation sequence with T-24h, T-1h, T-15min.

### No post-call sequence

**Failure**: applicants who say "I need to think about it" never hear from the operator again. Conversions that would have closed in T+7d don't.
**Prevention**: Step 6 post-call sequence with case-study email and final yes/no follow-up.

### No iteration

**Failure**: the pinned VSL is published and never revised. The first-month performance plateau is treated as the permanent ceiling.
**Prevention**: Step 8 first-month diagnostic. Iteration is expected.

### Production-tier mismatch

**Failure**: the pinned VSL is the channel's flagship but the production tier is below the channel's average. The credibility signal is wrong.
**Prevention**: production-tier match per Step 4. The pinned VSL is the highest production tier on the channel.

### Banned-vocabulary slip

**Failure**: the pinned VSL contains banned vocabulary (INV-7) — generic phrases like "unlock" or "leverage" or YouTube-specific banned phrases. Operator's voice gets diluted; algorithm or audience response degrades.
**Prevention**: pre-publish banned-vocab scan. INV-7 enforced.

## What this playbook doesn't cover

The pinned VSL script writing: see `/write-pinned-vsl`. The application-funnel build: see `/build-application-funnel`. The sales call script: see `/sales-call-script`. The first-month leak audit: see `/leak-audit`.

---

*v1.0 — 2026-05-03. The single highest-leverage commercial deployment in the OS's lifecycle. Get this right, and the channel's audience-building work compounds into revenue. Get this wrong, and the channel converts at a structural floor.*

*A Heuresis workspace template.*
