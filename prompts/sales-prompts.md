---
name: sales-prompts
type: prompt-pack
purpose: One-shot prompts for the call funnel behind the channel — discovery-call question banks, objection reframe banks, same-day follow-through, stalled-applicant diagnostics, and the 15-minute call-prep one-pager.
reads:
  - company.yaml — sales_conversion_stack, offer_architecture (qualification, back_end_offers, economics_validation), audience_intelligence_system (objections, voice_of_viewer)
  - workspace/PROOF-BANK.md
  - workspace/VOICE.md
---

# Sales Prompts

> The channel produces applications; the call converts them. These leads are not cold — a YouTube-sourced applicant has often watched hours of you before booking, knows your frameworks by name, and arrives pre-sold or pre-skeptical (sometimes both). The call's job is diagnosis and fit, not persuasion theater. Production assets — the full script, the application funnel — live in the skills lane (`/sales-call-script`, `/build-application-funnel`).

---

## Before You Run

- **Receipts come from the bank.** Any client/student result cited on a call or in a follow-up traces to a `workspace/PROOF-BANK.md` `[VERIFIED]` row (INV-6). One fuzzy number caught by a skeptical buyer kills the funnel.
- **No income guarantees, ever** (NEVER-11). Results framing states the median, names the variance, and survives the screenshot test (INV-5).
- **Qualification is positioning.** Disqualifying wrong-fit applicants per `{{offer_architecture.qualification}}` is part of the offer, not lost revenue.
- **Calls feed content.** Every objection heard goes back into `{{audience_intelligence_system}}` and the idea farm — today's objection is next month's video.

---

## Prompt 1 — Discovery-Call Question Bank

```
You are a discovery-call architect. I'm about to run a
{{30/45}}-minute call with an applicant for {{offer_name}}
({{offer_type}} at {{price_point}}). Their application says:
{{situation_summary}}. Watch context: {{which videos / how long
they've followed, if known}}.

Build a question bank in 4 acts. Every question forces a SPECIFIC
answer (numbers, named attempts, concrete situations) — never "how's
it going with {{topic}}?"

Act 1 — Situation (5 min): 4 questions establishing where they
actually are. Pattern: "Walk me through {{their current process /
last attempt}} step by step — what happened at each stage?"
Calibrate to {{niche}}: a business-education buyer gets revenue and
pipeline questions; a fitness buyer gets routine and history
questions; a finance buyer gets position and goal questions.

Act 2 — Problem (10 min): 6 questions surfacing the real gap. Drill
until each pain binds to: the specific situation × how often it
bites × what it costs them (money, time, momentum, confidence —
named, not vague). Include: "What have you already tried? What
happened?" (their answer calibrates awareness level and
sophistication — what they've already bought tells you what
positioning is exhausted).

Act 3 — Implication (8 min): 4 questions that make the cost of
inaction concrete in THEIR math, out loud. Pattern: "If this stays
where it is for another 12 months, what does that actually cost
you?" Their number, their words — never me announcing it for them.

Act 4 — Need-payoff (7 min): 3 questions where they verbalize what
solving it is worth and what changes. Pattern: "If {{specific
outcome}} happened in the next 90 days, what does that change
downstream?"

Output: the 17-question bank with act structure visible, in my voice
(workspace/VOICE.md — conversational register, questions I'd
actually say aloud). Then mark the 12 to prioritize for THIS
applicant given their application answers.

Constraints: no consultant-speak ("alignment," "synergies"), no
leading questions that bake in my pitch, no fake-curiosity. The
YouTube context cuts both ways — skip the rapport theater (they
know me), but verify what they THINK my offer is before Act 4
(parasocial familiarity breeds wrong assumptions).
```

---

## Prompt 2 — Objection Reframe Bank (The 12)

```
You are an objection-library architect. For {{offer_name}}
({{offer_type}}, {{price_point}}), build the 12 most common
objections from {{icp}} in {{niche}} + the reframe for each.

Format per objection:
| # | Objection (verbatim) | The real concern underneath | Reframe (my voice) | Proof point (PROOF-BANK row ref) |

The canonical 12 for a creator back-end:
1. "It's too expensive."
2. "I need to think about it / talk to my {{spouse/partner}}."
3. "Your free videos already cover this — why would I pay?"
4. "I've bought {{courses/coaching}} before and it didn't work."
5. "What results can you guarantee?"
6. "I don't have time right now."
7. "Will this work for {{my sub-niche / my country / my situation}}?"
8. "I can figure it out myself with AI / YouTube."
9. "Can I start with something smaller first?"
10. "Why is this {{price}} when {{competitor}} charges less?"
11. "Now's not the right time — maybe next {{quarter/cohort}}."
12. "Send me the details and I'll review."

Reframe constraints:
- No defensiveness, no pressure scripts, no fake scarcity
- Every reframe carries a SPECIFIC proof point — a [VERIFIED]
  PROOF-BANK row with placeholders I fill ("{{student}}, same
  starting point, {{specific outcome}} in {{timeframe}}")
- Each reframe ENDS with a clean question that moves to a yes/no
  or surfaces the real blocker — not a soft "does that make sense?"
- Objection #3 gets the free-vs-paid line exactly right: the videos
  teach the what and the why; the program is {{the mechanism: proximity
  / feedback / sequence / accountability / done-with-you}}. Specific,
  not "the videos are just the tip of the iceberg."
- Objections #5 and #4 carry the honest-results discipline: median
  outcome stated, variance named, zero guarantees (NEVER-11). The
  reframe for #5 starts from "I can't guarantee outcomes — here's
  what I can show you," and shows the receipts.
- For #9: route per the offer ladder ({{offer_architecture.offer_ladder}})
  if a lower rung exists; otherwise say why no.

Output: the full 12-row bank, ready for my sales playbook
({{sales_conversion_stack.sales_call_script.objection_handling}}).
Flag any objection that appears 3+ times in recent calls as a
video topic for the idea farm.
```

---

## Prompt 3 — Same-Day Follow-Through (Post-Call)

```
You are a follow-up copywriter. I just finished a discovery call
with {{first_name}} for {{offer_name}}. Call outcome: {{enrolled /
verbal-yes pending payment / thinking / not-fit}}.

Call notes: {{3–5 specifics: their situation, the gap they named,
the number they said out loud in Act 3, the outcome they want, any
objection still live}}.

Write the same-day email (sent within 2 hours):

Structure:
1. Top (2–4 sentences): recap what THEY said — their situation,
   their cost-of-inaction number, their 90-day outcome. Their words
   from my notes, not my pitch language. Proof I listened.
2. The path (3–5 bullets): exactly what {{offer_name}} looks like
   for their specific situation — which components matter for them,
   the first 30 days, what happens in week 1 after enrolling.
   Concrete, not the generic curriculum dump.
3. The proof: 1 [VERIFIED] case matched to their situation, with the
   honest frame ("median student in your starting band: {{X}};
   {{name-blocked example}} did {{Y}} — here's why their case
   maps to yours").
4. The terms: price, payment structure, start date, what happens at
   signup. Plain. No "investment in yourself" framing.
5. If an objection is still live: address it in 2 sentences max
   using the Prompt 2 reframe — in writing it gets calmer, not
   pushier.
6. Next step (1 sentence): one action, one deadline. "Enrollment
   link: {{link}} — I hold the {{cohort/start-date}} spot until
   {{date}}." Real deadlines only; if the deadline is fake, there
   is no deadline.

Constraints: my voice; 250 words max; no pressure language; no
guarantee language; for not-fit outcomes write the honest
redirect instead (what I'd do in their position, no pitch — the
trust this builds routes back to the channel and converts later).
```

---

## Prompt 4 — Stalled-Applicant Diagnostic

```
You are a pipeline diagnostician. An applicant has stalled at
"{{stage}}" for {{N}} days. Stages I track
({{sales_conversion_stack.post_call_sequence}}):
applied → booked → showed → follow-up sent → enrolled.

Context: {{recap — call summary, what they said yes to, when they
went quiet}}.

Rank the likely real reasons:
1. Money timing (wants it, genuinely can't fund it this month)
2. Hidden decision-maker (spouse/partner/cofounder said wait)
3. Comparison shopping ({{competitor}} or DIY-with-my-free-videos)
4. A doubt they didn't voice on the call (usually self-belief —
   map to the limiting-belief triad in
   {{audience_intelligence_system.limiting_belief_diagnosis}}:
   Worthless / Helpless / Hopeless — the message differs per type)
5. Life got loud (nothing to do with me; I slipped down the stack)
6. Already decided no, avoiding the awkward email

For each cause: the 1-message diagnostic that would surface it
(short, direct, answerable in one line from a phone), and the
recovery move if confirmed (a payment-plan note, a partner-facing
one-pager, a specific video of mine that resolves the doubt, a
clean "should I close your file?" exit).

Then: rank the 6 for THIS person given the context; recommend the
1–2 messages to send today.

Constraints: no "just checking in," no "circling back," no
guilt-tripping, no fake deadline resurrection. Direct beats clever:
the best diagnostic often names the likely blocker outright ("If
the timing's the issue, say so and I'll stop emailing — if it's
something I said, I'd rather hear that"). Each message ≤60 words,
my voice.
```

---

## Prompt 5 — Call-Prep One-Pager (15 Minutes Before)

```
You are a pre-call analyst. Build my call-prep one-pager for
{{first_name}}, application below.

Inputs: their application answers [paste], their watch/engagement
context if known ({{videos referenced, comments, email-link
clicks}}), {{anything public they linked: channel / site /
LinkedIn}}.

The one-pager:
1. Snapshot (3 lines): who they are, where they are vs my
   qualification bar ({{offer_architecture.qualification}}), how
   warm (binge-watcher vs found-me-last-week — it changes Act 1)
2. The 3 most likely real gaps behind their stated problem, each
   with the evidence line from their application
3. Their probable awareness level (Problem / Solution / Product /
   Most-aware) and what that means for how much mechanism I explain
   vs assume
4. The 4 Act-1 questions tailored to them (from Prompt 1's bank)
5. The 1–2 [VERIFIED] receipts matched to their situation (pull the
   closest-situation PROOF-BANK rows — same niche, same starting
   band — with row numbers so I can cite cleanly)
6. The 2 disqualifiers to listen for — the signals this isn't a fit
   ({{out-of-scope conditions}}), and the honest redirect for each
7. The likely objection (predict ONE from the Prompt 2 bank based on
   their application language) + the reframe ready
8. Time plan: {{30}}-minute default — 5 / 10 / 8 / 7 across the
   4 acts.

Output: 1 page, print-ready, no placeholders left unfilled — if an
input is missing, name what to check in the 15 minutes instead of
guessing.
```

---

## Pre-Ship Validation On Sales Output

1. **Proof trace** — every result cited maps to a `workspace/PROOF-BANK.md` `[VERIFIED]` row; anything else is a `[CONFIRM]` slot left out of the conversation (INV-6).
2. **Honest-results gate** — median framing on any outcome discussion; zero guarantee language (NEVER-11); survives the 30-second screenshot test (INV-5).
3. **Voice gates** — `spec/voice-gates.md`: the call and the follow-up sound like the person from the videos. A buyer who watched 6 hours of you notices a different person in the email.
4. **Qualification integrity** — disqualifiers present and real; the bank never optimizes for closing wrong-fit buyers (refunds and reputation cost more than the deal).
5. **Feedback loop** — new objections and verbatim pain language get written back to `{{audience_intelligence_system}}` and the idea farm (ALWAYS-15).

## When To Escalate From Prompt To Skill

- The full call script (opening → discovery → pitch → objections → close) → `/sales-call-script`
- The application funnel itself (questions, qualification logic, booking flow) → `/build-application-funnel`
- Show-rate sequence between booking and call → `prompts/email-prompts.md` Prompt 4, or the funnel skill for the standing system
- Offer-level fixes surfacing on calls (price resistance everywhere = offer problem, not objection problem) → `/design-offer`
- Conversion-layer diagnostics → `/leak-audit` (Conversion layer)

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
