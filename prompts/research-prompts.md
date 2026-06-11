---
name: research-prompts
type: prompt-pack
purpose: One-shot research prompts — voice-of-viewer mining, niche-pain extraction, competitor-channel teardown, niche/market sizing, and buyer-persona builds. Fast research that feeds Compartment 2 (Audience Intelligence) without firing a full skill.
reads:
  - company.yaml — audience_intelligence_system, channel_architecture.niche_definition, offer_architecture
  - workspace/VOICE.md
  - workspace/STRATEGY.md
---

# Research Prompts

> Fast-lane research for when a question isn't worth a full skill ceremony. Every prompt defaults to a creator-economy niche from the benchmark catalog (`reference/benchmarks/_INDEX.md`): personal-finance, business-education, mindset-philosophy, tech-explainer, fitness-health, real-estate, productivity-career, creator-economy. Findings that survive validation get written into `company.yaml` — research that doesn't update a compartment evaporates.

---

## How To Use

1. Pick the prompt matching the research question.
2. Fill `{{niche}}`, `{{icp}}`, `{{competitor_channel}}`, `{{geo}}`.
3. Run against a research-capable model with browsing where the prompt mines live sources.
4. Validate before treating as ground truth (validation block at the bottom — LLMs invent citations; verify every URL).
5. Write surviving findings into the named compartment field. Verified third-party figures enter `workspace/PROOF-BANK.md` with their source URL.

---

## Prompt 1 — Voice-of-Viewer Mining (Comments + Communities)

Feeds `{{audience_intelligence_system.voice_of_viewer}}` — the compartment every script, hook, and email pulls verbatim language from (ALWAYS-10).

```
You are a research analyst for a YouTube creator in {{niche}} whose
back-end is {{offer_type}} serving {{icp}}.

I need the actual words my target viewers use to describe their #1
problem — NOT the words a marketer would use about them.

Mine these sources for verbatim voice-of-viewer:
1. Comment sections of the top 10 videos on {{topic}} in {{niche}}
   (mine the questions and the confessions, not the praise)
2. Reddit: r/{{niche_subreddit}} + 2–3 adjacent subreddits where
   {{icp}} discusses the problem
3. Reviews of the popular {{niche}} courses/books/tools (the 2–3 star
   reviews are the gold — they say what's missing)
4. Quora / community forums specific to {{niche}}

Return:
- 15 verbatim quotes describing the pain (exact words, no
  paraphrase), each with: source URL, date, and the stage of
  awareness it signals (Unaware / Problem-aware / Solution-aware /
  Product-aware / Most-aware)
- 10 verbatim quotes describing the desired outcome
- 5 verbatim objections to paid solutions in this niche ("I bought
  {{course}} and...")
- A pattern summary: which pain shows up most, in which words, at
  which awareness level

Reject vague pains that don't bind to a concrete situation. "I feel
stuck" is noise; "I've published 40 videos and still get 200 views
while channels 6 months younger pass me" is signal — it has a WHO, a
WHAT, and an implied cost.

Output format: table of quotes → then the pattern summary → then the
exact company.yaml fields each finding updates
(voice_of_viewer.pain_language_patterns, desired-outcome patterns,
objections list).
```

---

## Prompt 2 — Niche-Pain Extraction (From My Own Surfaces)

The highest-grade VOC is already on your channel and in your call notes. Mine owned sources before public ones.

```
You are an audience-intel analyst. I'll paste raw material from my
own surfaces:
- Comment exports from my last {{N}} videos
- {{Sales-call notes / application-form answers}} (anonymized)
- {{Community-tab replies / email replies / survey responses}}

[paste]

Extract:
1. The 5 most frequent pains, each as: the pain in the audience's
   verbatim words × how often it appears × the situation it binds to
2. The 3 pains my content has NOT addressed in the last 90 days
   (cross-check against this list of recent titles: {{titles}})
3. The 5 most common currently-held beliefs blocking a purchase —
   map each against reference/frameworks/eight-required-beliefs.md
   and name which required belief it contradicts
4. The limiting-belief diagnosis: does this audience skew Worthless
   (don't believe they deserve it) / Helpless (don't believe they
   can) / Hopeless (don't believe it's possible)? Cite the quotes
   that signal it.
5. 10 video-idea seeds derived from the gaps, each tagged with mode
   (authority / reach / hybrid) and target awareness level

Rules: verbatim quotes stay verbatim. No invented composite quotes.
If a pattern rests on fewer than 3 independent instances, mark it
[THIN — confirm with more data] rather than presenting it as a trend.

Output: the 5 sections + the company.yaml fields each updates.
```

---

## Prompt 3 — Competitor-Channel Teardown

```
You are a competitive-intel analyst. I'm a YouTube creator in
{{niche}}; a relevant competitor is {{competitor_channel}} — a
channel my target viewer also watches.

Tear down their public surface:
1. Channel promise — what does their banner/about/pinned content
   promise, and to whom?
2. Content architecture — their apparent mode mix (authority vs
   reach), upload cadence, length bands, series structures
3. Packaging system — last 20 titles + thumbnails: which title
   formulas recur, what thumbnail grammar (face/object/text density),
   which packaging outliers got outlier views (views vs their median)
4. Hook pattern — transcribe the first 30 seconds of their 3 most-
   viewed recent videos; name the retention mechanisms used
5. Back-end — what do they sell, at what visible price point, through
   what bridge (description links, pinned comment, end-screens,
   lead magnet)? Where in videos does the bridge appear?
6. Audience overlap signals — what do their commenters ask for that
   the channel doesn't deliver? (That's open territory.)
7. The 3 things they genuinely do better than me (honest)
8. The 3 positioning angles open to me — gaps in their coverage,
   their format, or their depth, backed by observable evidence

Output as a 1-page positioning brief. Offensive positioning only:
"they do X; I do Y; Y matters to {{icp}} because Z." No "they're
not as good" framing — and no copying their packaging; the output
feeds differentiation (reference/frameworks/six-differentiation-
paths-detailed.md), not imitation.

View counts and sub counts: report only what's publicly visible,
with the date checked. No estimated/invented figures presented as
fact.
```

---

## Prompt 4 — Niche / Market Sizing

Feeds the niche decision (`/build-niche`) and the economics gate (INV-4). Sizing has two layers for a creator: **audience demand** (is there watch volume?) and **buyer market** (is there a back-end to fund it?).

```
You are a market analyst. Size the opportunity for a YouTube channel
in {{niche}} ({{geo}}, default global-English) with a high-ticket
back-end ({{offer_type}} at {{price_point}}).

Layer 1 — Audience demand:
1. Search/watch demand: top 20 head terms in {{niche}} with relative
   volume; the format bands that dominate (long-form / Shorts / both)
2. Supply density: how many channels above 100K subs compete on the
   core promise; the gap bands (underserved sub-topics, underserved
   awareness levels, underserved formats)
3. Benchmark envelope: pull the {{niche}} band from
   reference/benchmarks/_INDEX.md (RPM / CTR / AVD) and state what
   typical-channel economics look like at 10K / 100K / 500K subs

Layer 2 — Buyer market:
4. TAM: total count of {{icp}} who could buy {{offer_type}} at
   {{price_point}} in {{geo}}
5. SAM: the subset reachable via YouTube + email in 24 months
6. SOM: a defensible 12-month share for one creator (state the
   assumption chain explicitly)
7. The realism check: "At a {{close_rate}}% close on
   {{applications_per_month}} applications, this channel supports
   ${{X}}/month back-end revenue." Show every step of the math.

Citation rule: every figure cites a checkable source (platform data,
industry report, census/statistics bureau). No source → mark
[ESTIMATE] with the assumption chain. Never present an estimate as
a sourced fact.

Output: 1-page sizing brief + the verdict — is {{niche}} +
{{offer_type}} viable at 3:1 LTV:CAC (INV-4), and what's the
binding constraint (demand, supply density, or price ceiling)?
```

---

## Prompt 5 — Buyer-Persona Build (The Viewer Who Buys)

The viewer and the buyer are not the same person. Subscribers are the audience; a narrow band of them funds the business. This persona feeds `{{audience_intelligence_system.ideal_viewer_profile}}` and `{{offer_architecture.qualification}}`.

```
You are a sales-intel analyst. Build the buyer persona for my
back-end: the specific viewer inside my {{niche}} audience who says
YES to {{offer_name}} at {{price_point}}.

From: [paste application-form answers, sales-call notes, customer
profiles — anonymized; supplement with public {{niche}} sources
where owned data is thin]

For the primary persona (and 1 secondary if the data supports it):
1. Situation: where they are concretely (revenue / role / stage —
   e.g., for business-education: "agency owner, $15–40K/mo, drowning
   in delivery"; for fitness: "35–50, desk job, 2 failed program
   attempts this year")
2. What they're measured on / what success means in their words
3. Top 3 pains in their verbatim language (from VOC, not inferred)
4. The 5 phrases that signal "this creator understands my situation"
   — their insider language, not vendor language about them
5. The 3 phrases that instantly disqualify me if I use them
   (the guru-speak their skepticism is calibrated against)
6. Buying context: who else weighs in (spouse / partner / CFO),
   typical decision window, what they've already bought and why it
   disappointed
7. The 30-day micro-outcome that would make them feel the purchase
   was right (feeds the offer's early-win design)
8. Watch behavior: which of my video modes they binge (authority
   depth vs reach breadth), and which awareness level they're at
   when they apply

Output: 1-pager per persona + the qualification thresholds for
{{offer_architecture.qualification}} (who gets on a call, who gets
routed to the lower rung of the offer ladder).

Evidence rule: every persona claim tags its source — [OWNED-DATA]
(my calls/applications), [VOC] (public verbatim), or [INFERRED]
(state the inference). No fictional-person backstory padding.
```

---

## Pre-Save Validation On Research Output

Before any of the above writes to `company.yaml` or informs a sales asset:

1. **Verify citations.** Check every URL exists and says what the output claims. LLMs hallucinate sources; a fabricated citation entering PROOF-BANK poisons everything downstream (INV-5, the 30-second screenshot test).
2. **Demand the chain.** Any cost/size figure without its calculation chain gets the chain demanded or the figure marked `[ESTIMATE]`.
3. **Verbatim means verbatim.** Spot-check 3 quotes against their sources. Paraphrases presented as quotes = reject the batch.
4. **Strip guru-speak.** Run output against `spec/BANNED-VOCABULARY.md`; recast drifted language before it contaminates voice_of_viewer fields.
5. **Score it** — `workspace/prompts/signal-check.md` on any research summary that will be quoted in content. 7+ or it stays internal.

## When To Escalate From Prompt To Skill

- Foundational audience build (Compartment 2 to 70%+) → `/build-audience`
- Niche decision with the out-of-scope guard → `/build-niche`
- Per-video research with source list and fact-check → `/research-brief`
- Standing topic intelligence → `/idea-farm`
- Routing adjacent-niche viewers → `/cross-niche-bridge`

Prompts answer a question. Skills change the system. If the finding should persist, it belongs in a compartment — and the compartment work belongs to the skill.

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
