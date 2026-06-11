---
name: ad-creative-prompts
type: prompt-pack
purpose: One-shot prompts for paid amplification — the 4×5 ad hook grid, single-variable angle variants, and the creator-shot vertical ad script. Paid traffic amplifies what already converts organically; it cannot fix what doesn't.
reads:
  - company.yaml — audience_intelligence_system (awareness levels, voice_of_viewer), offer_architecture (content_to_offer_bridge, economics_validation), creator_identity_matrix
  - workspace/PROOF-BANK.md
  - workspace/VOICE.md
  - reference/frameworks/five-awareness-levels-on-youtube.md
---

# Ad Creative Prompts

> Paid is the amplifier, not the engine. For a YouTube-first creator, ads point at assets that already work — the lead magnet, the pinned VSL, an open enrollment window — and borrow their proof. These prompts draft creative fast; campaign architecture, testing matrices, and budget pacing are operator work the prompts deliberately don't pretend to cover.

---

## Readiness Gate

**Don't run paid if:**
- The organic funnel hasn't converted yet (no `[VERIFIED]` proof that view → lead → application → close works) — ads scale the leak along with the flow
- LTV:CAC headroom is unproven (INV-4: the 3:1 path must survive CAC going UP, because paid CAC always starts worse than organic)
- There's no test budget you can lose without flinching (a real test burns spend learning before it earns)
- The draw is "growth hacking" energy — run `/leak-audit` and fix the constraint layer instead

**Run when:** organic converts, a proof asset exists for retargeting to anchor on, the destination (lead magnet / VSL / application) is live, and the economics survive a 2–3× CAC stress case.

---

## Prompt 1 — Ad Hook Grid (4 Angles × 5 Hooks)

```
You are an ad-creative strategist for a creator in {{niche}} running
paid traffic to {{destination: lead magnet / pinned VSL / enrollment
window}} for {{offer_name}}.

Build the hook grid: 4 awareness angles × 5 hooks = 20.

The 4 angles (map: reference/frameworks/five-awareness-levels-on-youtube.md):

A. Problem-aware — they feel the pain, haven't named the fix. Hooks
   open with the pain in voice_of_viewer verbatim language + the
   cost made concrete.
B. Solution-aware — they know fixes exist, not mine. Hooks open
   with the mechanism differentiator: why the default approach in
   {{niche}} fails and what {{mechanism_name}} does instead.
C. Product-aware — they know me / my channel; skepticism is the
   barrier (they've seen {{niche}} promises before). Hooks open
   with disqualification + a [VERIFIED] receipt, no hype.
D. Unaware — they don't know the gap exists. Hooks open with the
   demonstration: the surprising artifact, the walkthrough moment,
   the before/after they didn't know was possible.

Per hook, output 4 layers:
- Text overlay (≤8 words, sound-off legible, no emoji)
- Voiceover line (first 5 seconds, ≤15 words, my voice, readable
  aloud)
- Visual hook (what's on screen seconds 0–3: the artifact, the
  screen-share, my face mid-demonstration — show, don't claim)
- Format (creator-to-camera vertical / screen-recording /
  whiteboard / b-roll + VO)

Constraints:
- Every number from a workspace/PROOF-BANK.md [VERIFIED] row —
  ad claims get screenshot-tested by strangers (INV-5) and reviewed
  by platforms
- NO income/earnings promises, stated or implied (NEVER-11 +
  platform ad policy — in {{niche}}, check the regulatory notes in
  reference/benchmarks/{{niche}}.md; finance and health niches
  carry extra claim restrictions)
- No banned vocabulary (spec/BANNED-VOCABULARY.md), no hype
  escalation — the operator-grade tone IS the differentiator in an
  ad feed full of gurus
- The hook promises only what the destination delivers (INV-10
  applies to ads hardest: mismatch = paid-for churn + rising CPMs
  from poor post-click signals)

Output: the 20-hook grid as a table, ranked by predicted hold rate
within each angle, with reasoning.
```

---

## Prompt 2 — Angle Variants (Single-Variable Iteration)

```
You are an ad copywriter. My current control ad:
- Hook: "{{current_hook}}"
- Body: "{{current_body}}"
- CTA: "{{current_cta}}"
- Metrics: {{CPM}}, {{CTR}}, {{cost_per_lead}}, {{cost_per_application}}
  over {{spend}} and {{days}}

Generate 8 variants testing ONE variable each (so the winner tells
me something):

1. Same hook — different mechanism explanation in the body
2. Same hook — different [VERIFIED] proof point
3. Same hook — different CTA depth (lead magnet vs VSL vs apply
   direct; shallower asks lower CPL and lower intent — name the
   tradeoff)
4. Same body+CTA — hook recut: curiosity-gap-led
5. Same body+CTA — hook recut: verified-number-led
6. Same body+CTA — hook recut: contrarian-frame-led
7. Same body+CTA — hook recut: disqualification-led ("this isn't
   for you if…")
8. Same everything — format swap (talking-head vertical vs
   screen-recording vs artifact-first b-roll)

Per variant: full copy (hook/body/CTA), the format note, the
hypothesis in one sentence ("curiosity lifts CTR but may lower
application quality"), and the decision metric (CTR for hooks, CPL
for body/CTA, cost-per-QUALIFIED-application as the true north —
cheap junk leads are expensive).

Constraints: my voice in every variant; [VERIFIED] numbers only; no
earnings claims; each variant honest enough to run unedited.

Output: 8 variants as a copy-test brief.
```

---

## Prompt 3 — Creator-Shot Vertical Ad Script (45–75s)

```
You are an ad scriptwriter. Write a vertical ad I record myself —
phone, real setting (desk mid-edit, studio corner, whiteboard), not
a polished set. The format signals "the actual person, mid-work,"
which out-converts produced ads for creator offers.

Target: {{angle from Prompt 1 grid}} / {{awareness_level}}
Destination: {{lead magnet / VSL / application}}

Structure with time markers:

0–5s — Hook: the grid winner for this angle. Cold open
mid-thought. No "hey guys."

5–20s — Problem: the specific gap, in voice_of_viewer language,
with one concrete cost. One beat, not a pain list.

20–40s — Proof + mechanism: what I/we/students actually did —
{{[VERIFIED] case}}, with the artifact ON SCREEN (the analytics
panel, the build, the before/after). One mechanism beat: why it
worked. Show > claim.

40–55s — Disqualifier: who this is NOT for, plainly. (Filters
clicks before they cost money; raises lead quality; reads as
confidence.)

55–70s — CTA: one action, concrete next step: "{{Grab the
lead_magnet / Watch the full breakdown / Apply}} — {{where}}."
What happens after they click, in one line.

70–75s — Honest sign-off: one line of operator credibility ("If
your situation doesn't match this, keep your money and watch the
free stuff — it's most of the system anyway.").

Output per beat: spoken line(s) + text overlay (≤8 words) + visual
cue. Then a read-aloud check: flag any line that trips the mouth.

Constraints: my voice card (workspace/VOICE.md); 1–2 [VERIFIED]
specifics minimum; no earnings claims (NEVER-11); no banned
vocabulary; the unpolished format is a choice, not an excuse — the
SUBSTANCE is still tight.
```

---

## Pre-Ship Validation On Ad Creative

1. **Readiness gate** (top of file) — organic converts; economics survive a 2–3× CAC stress case (INV-4).
2. **Signal check** — `workspace/prompts/signal-check.md` on the hook specifically; 7+ ships.
3. **Voice gates** — `spec/voice-gates.md`; an ad is the most-seen sentence you'll write this month.
4. **Claims compliance** — every claim `[VERIFIED]` (INV-6) + screenshot-safe (INV-5) + zero income promises (NEVER-11) + niche regulatory notes checked (`reference/benchmarks/{{niche}}.md`) + platform ad policy for the vertical.
5. **Destination alignment (INV-10)** — the ad's promise is delivered by the first screen of the destination, in the same language.
6. **One-variable discipline** — each new creative tests one thing; a "fresh batch" of 8 simultaneous changes teaches nothing.

## When To Escalate From Prompt To Skill

- The destination assets → `/lead-magnet-bridge` (magnet + bridge), `/write-pinned-vsl` (the VSL), `/build-application-funnel` (the funnel)
- Whether paid is even the right move this quarter → `/leak-audit` (find the constraint layer first)
- Tracking cost-per-application against targets → `/kpi-dashboard`
- Sponsor-side advertising (someone paying YOU) is a different system entirely → `/sponsor-fit` + INV-15 disclosure rules

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
