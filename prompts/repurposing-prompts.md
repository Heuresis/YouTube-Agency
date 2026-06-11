---
name: repurposing-prompts
type: prompt-pack
purpose: One-shot multiplication prompts — one long-form video, case study, call insight, or quote becomes 5+ distribution surfaces. The fast-lane companion to the /repurposing-cascade skill.
reads:
  - company.yaml — distribution_algorithm.repurposing_cascade, content_engine, audience_intelligence_system.voice_of_viewer
  - workspace/VOICE.md
  - workspace/PROOF-BANK.md
  - workspace/CONTENT-ENGINE.md
---

# Repurposing Prompts

> One piece of substance, five-plus surfaces. The hub is the long-form YouTube video; everything else is a cut of it. Use these for fast one-off multiplications. When repurposing is a per-publish cadence, run `/repurposing-cascade` — it writes to the posting calendar and keeps the cascade ratios from `{{distribution_algorithm.repurposing_cascade}}`.

---

## The Repurposing Law

**Specifics survive the format change.** If the source video says "cutting the intro from 41 seconds to 9 lifted 30-second retention from 58% to 81% `[VERIFIED]`," the carousel does not soften it to "tightening your intro helps retention." Dollar amounts, named tools, exact metrics, and verbatim quotes carry across every surface — or the surface doesn't ship. A repurposed asset that loses its specifics fails the signal check by construction.

Direction is one-way: spokes reference the hub. A Short teases the long-form; a thread compresses it; an email points at it. Nothing on a spoke surface contradicts or out-promises the video it came from (INV-10 alignment applies to the pair).

---

## Prompt 1 — Long-Form Video → 5 Surfaces

```
You are a content multiplier for a YouTube-first creator in {{niche}}.
From this long-form video transcript, extract:

A. One 8–12 tweet X thread (structure per prompts/content-prompts.md
   Prompt 2)
B. One 8-slide IG carousel (per content-prompts.md Prompt 3)
C. One 80–220 word LinkedIn post (per content-prompts.md Prompt 1)
D. 3 standalone tweets — single-tweet hooks pulled from the most
   quotable verbatim lines
E. One email to my list (120–200 words) that delivers one beat of
   value and links the video

Source transcript: [paste — include timestamps if available]
Video mode: {{authority / reach / hybrid}} (INV-12 — the mode shapes
the CTA: authority cascades may bridge to the offer; reach cascades
route to channel architecture only)

For each output:
- Name the SPECIFIC anchoring moment in the source (timestamp)
- Recast for the surface's native grammar (X is tighter; LinkedIn is
  more narrative; carousel is visual-first; email is direct address)
- Keep my voice (workspace/VOICE.md) — the surfaces change, the voice
  does not
- Specifics survive: every number, tool name, and named step from the
  source arrives intact, still traced to its PROOF-BANK row

Output: 5 artifacts + anchoring moment for each + a suggested posting
order across the 7 days post-publish.
```

---

## Prompt 2 — Long-Form Video → Shorts Slate

For production Shorts scripts, fire `/write-shorts-script` (it enforces the 2-mechanisms-in-3-seconds rule, INV-11). Use this to find the cut points fast.

```
You are a Shorts extraction analyst. From this long-form transcript,
find the {{N: 3–6}} strongest Shorts candidates.

Source transcript: [paste with timestamps]

A Shorts candidate must be:
- A single self-contained beat (one claim, one demo, one reveal —
  not a compressed summary of the whole video)
- Frontloadable: the most arresting line can move to second 0–3
- Specific: contains a number, a named tool, or a visible artifact
- Loop-closeable inside 30–60 seconds

For each candidate output:
1. Timestamp range in the source
2. The beat in one line
3. The cold-open line (0–3s) — rewritten for vertical, not lifted
   verbatim if the source line warmed up first
4. The close: punchline + bridge ("full build in the long-form —
   pinned") routing per shorts_to_long_form_bridge
5. Predicted strength rank with reasoning (hook violence /
   specificity / loop tightness)

Numbers stay [VERIFIED]-traced. Reach-mode source videos produce
reach-mode Shorts — no offer pitch inside the Short (the channel
architecture does the converting).
```

---

## Prompt 3 — Case Study / Student Result → 5 Posts

```
You are a content multiplier. From this 1 verified case study, extract
5 posts spaced across the social pillar mix:

Case study: [paste — problem / what we did / result, with its
PROOF-BANK row references]

Post 1 — Proof (the hero post): the headline result, the anonymized
subject ("a {{icp}} in {{niche}}"), the 3-step what-happened, the
outcome. Hook = the verified number.
Post 2 — Diagnostic: extract the OBSERVABLE GAP the case study
exposed. "Most {{icp}} have this exact gap. Here's what it costs."
Post 3 — Mechanism: extract the SPECIFIC FIX as numbered steps with
named tools. The reader could attempt it themselves — that's the
point; doing it alone is the slow lane, and they know it.
Post 4 — Personality: the honest take. "What surprised me on this
one…" / "What I'd do differently…"
Post 5 — Offer-bridge: direct CTA referencing the case study. "If
you want the same teardown on your {{channel/situation}},
{{application CTA from content_to_offer_bridge}}."

For each post: 80–220 words, my voice, the hook line, the CTA
pattern, and a posting-date suggestion (space 5–7 days; same
audience, same story — don't fatigue it).

Constraints:
- Same case study, 5 genuinely different framings — not 5 rewrites
- Results framing uses the median-outcome discipline; no income
  guarantees (NEVER-11); consent/anonymization confirmed before any
  student or client detail ships
- Signal score 7+ per post before any of them ship

Output: 5 posts + mini-calendar.
```

---

## Prompt 4 — Sales-Call Insight → Content

The back-end feeds the front-end: objections heard on calls are tomorrow's video topics (`{{content_engine.idea_farm.sources}}` weights sales-calls for exactly this).

```
You are a content multiplier. On a recent {{discovery/coaching}} call,
this exchange happened:

Insight: "{{the objection, misconception, or question — verbatim as
the prospect/student said it}}"
Context: {{1 line — where in the call, what prompted it}}

Extract:
A. A long-form video pitch: working title (4-pillar title formula),
   mode (authority — it speaks to the ICP), target awareness level,
   and the belief the video installs (map against
   reference/frameworks/eight-required-beliefs.md)
B. A 30–60s Short script beat answering the objection head-on
C. A LinkedIn Diagnostic post built on the misconception
D. An email to the list opening with the verbatim question
E. An entry for audience_intelligence_system: which compartment field
   this updates (objections list / voice_of_viewer / limiting_belief)

Constraints: the verbatim phrasing is the asset — keep the
prospect's words as the hook material (anonymized). My voice for
everything around it. No fabricated dialogue: if I paraphrased the
quote, mark it [PARAPHRASE] and don't present it in quotation marks.

Output: A–E, each ready for its lane.
```

---

## Prompt 5 — Single Quote / Data Point → Multi-Format Asset

```
You are a content multiplier. I have one powerful verbatim quote or
verified data point:

Quote/datum: "{{exact words or exact figure}}"
Source: {{comment / call / survey / my own analytics — and its
PROOF-BANK row if it's a number}}

Extract:
A. A 30–60s Short built around it (the quote IS the hook)
B. A LinkedIn post using it as line 1
C. A standalone tweet (≤260 chars)
D. An IG carousel cover slide + caption opening
E. A community-tab post (1–3 lines + a genuine question — no
   engagement bait, INV-17)

Rules:
- The quote stays verbatim across every format, attributed honestly
  ("a subscriber commented," "a student on week 3," "my analytics,
  last 28 days")
- Each format adds only the context the quote needs to land there
- My voice for the framing; the quote keeps its own voice
- CTAs route per surface: hub first, lead magnet second

Output: 5 format adaptations of the same asset.
```

---

## Pre-Ship Validation

Every repurposed artifact passes the same gates as original content:

1. **Signal check** — `workspace/prompts/signal-check.md`, 0–10. 7+ ships; 4–6 recast; 0–3 reject.
2. **Voice gates** — `spec/voice-gates.md` + `spec/BANNED-VOCABULARY.md`.
3. **Substance-preservation check** (repurposing-specific) — diff the artifact against the source: did the numbers, tools, and named steps survive? Softened specifics = recast.
4. **Proof trace** — `workspace/PROOF-BANK.md` `[VERIFIED]` rows for every figure (INV-6); consent confirmed for any student/client material.
5. **Mode + CTA fit** — reach-derived assets carry no offer pitch; authority-derived assets bridge per `content_to_offer_bridge` (INV-12 discipline carried downstream).

## When To Escalate From Prompt To Skill

- Per-publish cascade as a standing cadence → `/repurposing-cascade` (it schedules, tracks surface coverage, and updates the calendar)
- Shorts scripts for production → `/write-shorts-script`
- 5+ source assets multiplied at once → `/repurposing-cascade` + `/content-mix-strategy`
- Pattern-mining the library for what repurposes best → `/library-compound`

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
