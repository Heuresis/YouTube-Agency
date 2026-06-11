---
name: email-prompts
type: prompt-pack
purpose: One-shot prompts for the owned-audience layer — subject-line banks, welcome sequences, launch sequences, show-rate sequences, and deliverability triage. Email is the de-platformed insurance policy and the highest-intent bridge between the channel and the offer.
reads:
  - company.yaml — audience_building_loop (email_pipeline, lead_magnet_strategy, owned_audience_targets), offer_architecture.content_to_offer_bridge, sales_conversion_stack.show_rate_stack
  - workspace/VOICE.md
  - workspace/PROOF-BANK.md
---

# Email Prompts

> The algorithm rents you the audience; the list is the part you own. Every sequence here assumes the subscriber came from the channel — they know your face, your voice, and your frameworks, so the emails sound like the person from the videos writing directly, not a marketing department that bought the list. The standing welcome system is `/lead-magnet-bridge`; these prompts draft fast.

---

## Before You Run

- **Voice continuity.** A subscriber who joined from a video notices when the emails are written by someone else. `workspace/VOICE.md`, email register (direct address, 1:1 feel).
- **Numbers rule (INV-6).** Results in emails trace to `workspace/PROOF-BANK.md` `[VERIFIED]` rows. Median framing on outcomes; no income claims (NEVER-11).
- **Honest scarcity only.** State real numbers and real dates ("12 seats, doors close Thursday 11:59pm ET because the cohort starts Monday"). No countdown theater, no fake reopenings — list trust compounds or erodes, same as the channel's trust contract (INV-16).
- **One email, one job.** Deliver value or make an ask — an email that does both half-does both.

---

## Prompt 1 — Subject-Line Bank (25 Variants)

```
You are a subject-line writer for a creator in {{niche}} emailing a
list built from YouTube ({{list_size}}, source:
{{lead_magnet_name}}). Email topic: {{topic / the video it points
to / the launch beat}}.

Generate 25 subject lines across 5 patterns (5 each):

1. Specific-claim-led: the number or concrete outcome up front
   ("The 9-second intro change that lifted retention 23%") —
   only with a [VERIFIED] figure behind it
2. Question-led: the question my {{icp}} is already asking
   themselves, in their words (pull from voice_of_viewer)
3. Curiosity-gap-led: open a loop the body closes ("The video I
   almost didn't publish") — gap must be honest; the body MUST
   close it (a bait subject the body doesn't pay off is churn fuel)
4. Direct-named-value: exactly what's inside ("Your {{lead_magnet}}
   + the 3-step setup")
5. Personal/story-led: the first line of a story told plainly
   ("I deleted 40 videos last week")

Constraints:
- ≤45 characters where possible (mobile truncation)
- No clickbait escalation ("you won't believe"), no ALL CAPS, no
  emoji, no fake "Re:"/"Fwd:" prefixes — these spend trust and trip
  filters
- No banned vocabulary (spec/BANNED-VOCABULARY.md)

Rank all 25 by predicted open rate with reasoning: specificity ×
curiosity × trust-cost (a subject can win the open and lose the
subscriber). Flag the 3 best A/B pairs (same promise, different
pattern).

Output: table of 25 + scores + the 3 test pairs.
```

---

## Prompt 2 — Welcome Sequence (Lead Magnet → Pinned VSL)

The production version of this bridge — lead magnet, sequence, and VSL routing as one system — is `/lead-magnet-bridge`. Use this prompt for a draft or a refresh.

```
You are an email-sequence writer. A viewer just traded their email
for {{lead_magnet_name}}. Build the welcome sequence — {{5–7}}
emails over {{10–14}} days — that turns a video viewer into a
reader, then a watcher of the pinned VSL, then (for fits) an
applicant.

Sequence architecture:

Email 1 (instant) — Delivery + orientation: the {{lead_magnet}}
link up top, one line on how to use it for a first win today, one
line on what this list sends and how often. No pitch. PS: the one
video to watch if they're new ({{flagship video}}).

Email 2 (day 1) — The quick win: one complete, specific win from
the lead magnet ("Do section 2 first — here's the 10-minute
version"). Reply prompt: ask ONE real question I actually read
replies to (this is also the deliverability play — replies train
inboxes).

Email 3 (day 3) — The story: why this system exists. My
{{from_state}} → {{to_state}} arc in 200 words, plain telling, no
rags-to-riches inflation — every beat true and screenshot-safe
(INV-5). Soft route: the pinned VSL for the full system.

Email 4 (day 5) — The belief-shift: take the #1 limiting belief from
{{audience_intelligence_system.limiting_belief_diagnosis}} and
dismantle it with one [VERIFIED] case + the mechanism that explains
it. This email teaches; the proof carries the persuasion.

Email 5 (day 7) — The path: lay out the options honestly — keep
DIY-ing with the channel (fine, here's the playlist), or
{{offer_name}} if {{fit conditions}}. The pinned VSL as the full
walkthrough. First direct CTA: {{application / VSL link}}.

Email 6–7 (days 10–14, optional) — Objection + proof: answer the
top pre-purchase objection in writing; one deep case study told
properly. CTA repeated, calm.

Per email: subject (from Prompt 1 patterns), 80–200 word body, one
job, one link. My voice — the emails should read like I typed them
after a shoot, not like a funnel.

Output: the full sequence + per-email job label + the
company.yaml fields this feeds
({{audience_building_loop.email_pipeline.welcome_sequence}}).
```

---

## Prompt 3 — Launch Sequence (Cohort / Enrollment Window)

```
You are a launch-sequence writer. I'm opening {{offer_name}}
({{price_point}}) to my warm list for {{enrollment_window: e.g., 7
days / cohort start date}}. List context: {{size, how built, last
launch behavior if any}}.

Build a {{5–6}}-email sequence over {{7}} days:

Email 1 (Day 1) — The opening: lead with one [VERIFIED] receipt
(the strongest student/client case for this audience), then the
plain announcement: what's opening, for whom, the dates, the price.
CTA: the application/checkout link. No "I'm SO excited."

Email 2 (Day 3) — The mechanism: what the program actually does
that the free videos can't — the named mechanism from
{{offer_architecture}}, walked through concretely. One receipt per
major claim. CTA: same link.

Email 3 (Day 5) — The objection email: take the top 2 objections
from the objections list ("free videos cover this," "I've bought
courses before") and answer them in writing, straight — using the
reframes from prompts/sales-prompts.md Prompt 2. CTA.

Email 4 (Day 6) — Fit and honesty: who should NOT join, stated
plainly (the disqualifiers from {{offer_architecture.qualification}}).
The median-outcome disclosure on any results discussion: the median,
the variance, no guarantees (NEVER-11). For fits, the concrete
picture of week 1. CTA.

Email 5 (Day 7) — Close: ≤100 words. The real deadline and the real
reason it exists ({{cohort start / capacity}}). The one-line fit
check. The link. Nothing new — decision support, not new arguments.

(Optional Email 6, Day 7 late) — Last hours: 2 sentences. Honest,
zero theatrics.

Constraints: my voice; honest scarcity only (real numbers, real
dates); every receipt traces to PROOF-BANK; unsubscribes during a
launch are the filter working, not a problem to engineer away.

Output: full sequence with subjects + send times + the one metric
to watch per email (open / click / application rate).
```

---

## Prompt 4 — Show-Rate Sequence (Booking → Call)

Feeds `{{sales_conversion_stack.show_rate_stack}}`. An application funnel that books calls nobody attends is a leak, not a funnel.

```
You are a show-rate engineer. An applicant for {{offer_name}} just
booked a call {{N}} days out. Build the booking → call sequence to
push show-rate toward {{85%+}}.

Email 1 (instant) — Confirmation + investment: time, calendar file,
video link. Then 2–3 prep questions that make THEM invest before
the call ("Have your {{channel/situation specifics}} in front of
you"). One honest filter line: "If you're collecting quotes from
five programs, cancel now and keep the slot for someone ready —
no hard feelings. If you want a straight diagnosis of {{their
stated problem}}, see you {{day}}."

Email 2 (T-2 days) — Value-first: one asset matched to their
application ({{the video / case study / teardown}} closest to their
situation). One line of agenda-setting: what I'll ask, what they'll
leave with — diagnosis either way, enrollment only if fit.

Email 3 (T-24h) — Reminder + frame: time, link, the 2 prep
questions again, one [VERIFIED] receipt matched to their situation.

Message 4 (T-1h, email or SMS per {{show_rate_stack}} config) —
One line: "Call in an hour: {{link}}. Can't make it? Reply with 2
alternate times in the next 48h."

Per message: subject + ≤120 word body + my voice. No "quick
reminder!!" energy. The sequence treats the call as valuable
because it is — scarcity of my calendar is real, so it's stated
plainly, not performed.

Output: the 4-message sequence + the show-rate instrumentation note
(track: booked → confirmed-reply → showed, per
{{sales_conversion_stack.show_rate_stack}}).
```

---

## Prompt 5 — Deliverability Triage

```
You are a deliverability analyst. My list metrics moved:
open rate {{prior}}% → {{current}}%, on {{volume}}/send,
{{sends/week}}, platform {{ESP}}, list source: YouTube lead magnet.

Diagnose in ranked order:

1. Authentication + reputation — SPF/DKIM/DMARC alignment on
   {{sending_domain}}; domain reputation (Google Postmaster /
   Talos); recent volume spikes; shared-IP neighborhood if on a
   shared pool. Test: seed-account check across Gmail/Outlook/
   Yahoo. Fix: repair auth, throttle volume, warm back up on the
   engaged segment.

2. Engagement decay — list growing faster than engagement (lead
   magnet attracting freebie-collectors who never open). Test:
   open-rate by signup cohort. Fix: suppress 90-day-no-open
   segment; add a sunset sequence ("still want these?"); re-permission
   or remove.

3. Content triggers — recent change in link density (>2 links),
   image weight, spam-pattern phrases, or a new link domain
   (shorteners and unwarmed domains trip filters). Test: diff the
   last 5 sends against the prior 10. Fix: plain-text-lean format,
   one link, clean domains.

4. Subject-pattern fatigue — same pattern repeated to the same list
   reads as automation. Test: open-rate by subject pattern over the
   last 20 sends. Fix: rotate across the Prompt 1 categories.

5. Provider skew — list concentration shifting (e.g., 80% Gmail)
   so one provider's filter = the whole metric. Test: segment opens
   by provider. Fix: provider-specific diagnosis before global
   changes.

For MY numbers: rank the 5 by likelihood, give the one diagnostic
to run TODAY for the top 2, and the 48-hour action plan. Flag the
honest baseline too: pixel-based open rates are noisy (privacy
proxies) — anchor on clicks and replies before declaring a crisis.
```

---

## Pre-Ship Validation On Email Output

1. **Signal check** — `workspace/prompts/signal-check.md`; 7+ ships. The bar applies to email bodies same as posts.
2. **Voice gates** — `spec/voice-gates.md` + `spec/BANNED-VOCABULARY.md`; the sender is the person from the videos.
3. **Proof trace (INV-6)** — every figure to a `[VERIFIED]` row; median framing; no income claims (NEVER-11).
4. **Promise integrity** — subject promise ≤ body payoff (the email version of INV-10); honest scarcity only.
5. **One-job check** — each email has one job and one primary link; sequences escalate cleanly from value to ask.

## When To Escalate From Prompt To Skill

- Lead magnet + welcome bridge as a standing system → `/lead-magnet-bridge`
- The application funnel the emails point at → `/build-application-funnel`
- The VSL the welcome sequence routes to → `/write-pinned-vsl`
- List growth targets and owned-audience strategy → `/build-audience` (Compartment 9: `owned_audience_targets`)

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
