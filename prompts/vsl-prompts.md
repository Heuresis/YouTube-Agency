---
name: vsl-prompts
type: prompt-pack
purpose: One-shot prompts for the pinned VSL — hook banks, the 15-step spine outline, and mechanism positioning. The pinned VSL is the channel's conversion engine; these prompts draft its parts fast. The full build is /write-pinned-vsl.
reads:
  - company.yaml — sales_conversion_stack.pinned_vsl, offer_architecture, audience_intelligence_system, creator_identity_matrix
  - workspace/PROOF-BANK.md
  - workspace/VOICE.md
  - reference/frameworks/fifteen-step-vsl-spine.md
---

# VSL Prompts

> The pinned VSL is one video that sells while the rest of the channel earns the right to send people to it. It runs 25–45 minutes, sits pinned on the channel and at the end of the email bridge, and converts Solution/Product-aware viewers into applicants. Drafting parts is fast-lane work (this pack); the full production build — belief sequence, retention engineering at VSL length, CTA architecture — is `/write-pinned-vsl` (thresholds: Identity ≥75%, Audience ≥75%, Offer ≥80% per `spec/CONTEXT-THRESHOLDS.md`).

---

## Readiness Gate

**Don't draft a VSL if:**
- The offer hasn't passed the economics gate (INV-4, 3:1 LTV:CAC path) — a VSL scales whatever it points at, including a broken offer
- `workspace/PROOF-BANK.md` holds no `[VERIFIED]` results — a VSL without receipts is a 30-minute opinion
- The channel has no authority-mode content yet (INV-2: the VSL is step 10 of the foundation order, not step 1)
- You're shopping for a magic funnel instead of fixing the layer that's actually leaking (run `/leak-audit` first)

**Draft when:** offer validated, proof banked, authority videos publishing, and the application funnel exists for the VSL to feed.

---

## Prompt 1 — VSL Hook Bank (15 Variants)

```
You are a VSL hook writer. For my pinned VSL selling {{offer_name}}
({{price_point}}) to {{icp}} in {{niche}}, write 15 hook variants
for the first 7–15 seconds.

The VSL viewer arrived deliberately (pinned video, email link,
end-screen) — the hook's job is not thumbstop, it's commitment:
earn the next 25–40 minutes by proving this video knows their
situation and holds the full answer.

Hook categories (3 variants each):

A. Verified-number hook — open with the strongest [VERIFIED]
   PROOF-BANK figure and the bounded promise: "{{Result}}. In the
   next {{N}} minutes I'll show you the exact system — every step,
   including the parts that didn't work."

B. Situation-mirror hook — open inside the viewer's exact moment,
   in voice_of_viewer language: "{{The verbatim-grade situation:
   'You've published every week for a year and the channel still
   doesn't pay you'}}. This video is the full diagnosis."

C. Contrarian-frame hook — name the consensus practice in {{niche}},
   state why it fails, promise the demonstration: "Everyone tells
   you to {{consensus advice}}. Here's the data on why that's
   backwards — and what the {{N}} people I've worked with did
   instead." (Numbers [VERIFIED] or absent.)

D. Mechanism-reveal hook — lead with the named mechanism: "There's
   a reason {{outcome}} keeps not happening for you, and it's not
   {{the thing they blame}}. It's {{the real constraint}}. I call
   the fix {{mechanism_name}} — this video walks the whole thing."

E. Disqualification hook — filter first: "This is only for {{fit
   conditions}}. If {{out-of-scope condition}}, close this video —
   it'll waste your time. Still here? Here's everything."

Per hook output:
- The text (≤40 words / ~15 seconds spoken, readable aloud in my
  voice — fragments allowed, hype banned)
- The retention mechanisms it stacks (the 30-second extension must
  reach ≥3 per INV-11)
- A 0–10 signal score (workspace/prompts/signal-check.md) and a
  hold-rate ranking with reasoning

Constraints: no "what's up everyone," no "what if I told you," no
income promises (NEVER-11), every number [VERIFIED] or replaced
with a {{[CONFIRM]}} slot.
```

---

## Prompt 2 — The 15-Step Spine (Outline Pass)

The spine is specified in `reference/frameworks/fifteen-step-vsl-spine.md`; the alternative 8-belief structure lives in `reference/frameworks/eight-required-beliefs.md`. This prompt drafts the outline; `/write-pinned-vsl` writes the script.

```
You are a VSL architect. Outline my pinned VSL on the 15-step spine
for {{offer_name}} at {{price_point}}, target runtime {{25–45}} min,
audience: {{awareness_level — typically Solution/Product-aware}}.

Steps 1–3 — Open the loop:
1. Hook (from Prompt 1 bank) + the bounded promise of the video
2. The pain, named in voice_of_viewer language — their exact words
   for the stuck state, plus the cost made concrete
3. Credibility anchor — why me: the [VERIFIED] receipts, stated
   plainly, fast (credibility is claimed in 30 seconds and proven
   across the rest)

Steps 4–7 — Shift the beliefs:
4. The real problem reframe — why what they've tried hasn't worked
   (the belief their failure installed, and why it's wrong)
5. The compounding cost — what staying stuck does at 12 and 24
   months (their math, made visible — no fear theater)
6. The receipt — one full case walked properly: situation → what
   changed → outcome [VERIFIED], including the non-linear part
   (honesty is the differentiator at this runtime)
7. The contrarian core — the belief I hold that {{niche}} consensus
   doesn't, and what it implies (pull from
   {{creator_identity_matrix.unique_positioning}})

Steps 8–11 — Present the path:
8. The named mechanism — the {{3–5}} steps, each with the artifact
   it produces (per Prompt 3 positioning)
9. The offer — deliverables, journey, who it's for
   ({{offer_architecture.back_end_offers[0]}} — concrete, no
   curriculum dump)
10. The guarantee / risk reversal — action-bound per
    prompts/offer-prompts.md Prompt 4; zero earnings guarantees
11. Results framing — the median-outcome disclosure: median, variance,
    the conditions that move someone above median (NEVER-11
    compliant; this step is where trust is won or lost)

Steps 12–15 — Close:
12. Objection preempts — the top 3 from the objections list,
    answered in 30–60 seconds each
13. The disqualifier — who should NOT apply, plainly
14. Honest scarcity — real capacity, real reason ("I review every
    application" / cohort dates), or NO scarcity claim at all
15. The CTA — one action: {{apply at application_url}}. What happens
    after they click, step by step (kills the fear of the unknown
    form).

Per step output: 2–4 sentences of draft script + the on-screen
visual cue + target % of runtime + which belief
(reference/frameworks/eight-required-beliefs.md) it installs.

Retention rules at VSL length: a pattern-interrupt every 60–90s
(visual change, receipt on screen, location/angle change), open
loops carried across sections, and a mid-video re-hook (~40% mark)
for the retention cliff. Mode declaration: authority (INV-12).
```

---

## Prompt 3 — Mechanism Positioning (The 90-Second Block)

```
You are a positioning analyst. Build the mechanism-positioning
segment of my VSL — the ~90-second block (~225 words) that explains
why MY method produces {{outcome}} when generic {{niche}} advice
doesn't.

Context: most {{niche}} creators pitch outcomes ("get {{result}}").
The VSL differentiates on mechanism: the named, inspectable process
that produces the outcome — and the specific reason the default
approach fails.

Build:

1. The mechanism name — 2–4 plain words ({{mechanism_name}}). Test:
   a viewer could repeat it to a friend tomorrow. No acronyms, no
   strained metaphors.

2. The {{3–5}} steps — each: what happens + the artifact it produces
   + roughly when ("Weeks 1–2: {{step}} → you walk out with
   {{artifact}}").

3. The "why this works" anchor — the one-sentence operational
   insight underneath: "Most {{icp}} fix {{surface symptom}}. The
   constraint is {{real constraint}}. {{Mechanism_name}} fixes the
   constraint, which is why the results hold instead of decaying."

4. The receipt — one [VERIFIED] case where the mechanism visibly
   produced the result, told in 3 sentences with the inspectable
   specifics.

5. The fit envelope — where the mechanism does NOT work, stated
   unprompted ("This assumes {{precondition}}. Without that, do
   {{honest alternative}} first."). The admission is the
   credibility play — every honest mechanism has edges.

Output: the 90-second block as spoken script (my voice, readable
aloud), + the 1-line mechanism summary for the offer page, + the
on-screen support per beat (diagram of the steps, the receipt
artifact, the fit-envelope card).
```

---

## Pre-Ship Validation On VSL Output

1. **Readiness gate** (top of this file) — offer validated, proof banked, funnel live.
2. **Signal check** — `workspace/prompts/signal-check.md` per segment; 7+ ships; the hook is scored separately.
3. **Voice gates** — `spec/voice-gates.md`; 30+ minutes of script drifts unless every section is read aloud.
4. **Proof trace (INV-6)** — every number to a `[VERIFIED]` row; median-outcome framing at step 11; zero income guarantees (NEVER-11); every claim screenshot-safe (INV-5).
5. **Retention floor (INV-9)** — predicted AVD checked against the pinned-VSL band for {{niche}} (`reference/benchmarks/`); a VSL that loses everyone at minute 6 converts nobody at minute 38.
6. **Alignment (INV-10)** — the VSL's title/thumbnail/first-30s promise matches what the email bridge and end-screens say it is.

## When To Escalate From Prompt To Skill

- The full scripted build → `/write-pinned-vsl` (belief sequence, retention engineering, CTA architecture, the deployment checklist in `reference/playbooks/pinned-vsl-deployment.md`)
- The funnel it feeds → `/build-application-funnel`
- The hook stack in production → `/write-hook`
- Retention scaffolding across the runtime → `/retention-engineer`, `/architect-loops`

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
