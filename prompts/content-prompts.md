---
name: content-prompts
type: prompt-pack
purpose: One-shot drafting prompts for the distribution surfaces around the channel — LinkedIn post, X thread, IG carousel, IG story sequence, YouTube hook variants, and the 30-day cross-platform calendar. YouTube is the hub; these surfaces are spokes.
reads:
  - company.yaml — creator_identity_matrix, audience_intelligence_system.voice_of_viewer, content_engine, offer_architecture.content_to_offer_bridge
  - workspace/VOICE.md
  - workspace/PROOF-BANK.md
  - workspace/CONTENT-ENGINE.md
---

# Content Prompts

> One-shot prompts for cross-platform content. Use for drafts, variants, and exploration. Anything that ships still passes the gates (`workspace/prompts/signal-check.md` + `spec/voice-gates.md`). For production assets — scripts, title/thumbnail pairs, the repurposing cascade — use the skills lane (`prompts/_INDEX.md` has the routing rule).

---

## Before You Run

1. **Load the voice.** Pull `workspace/VOICE.md` and `{{creator_identity_matrix.brand_voice_architecture}}` — phrases_to_use, phrases_to_avoid, sentence shapes. A draft in the wrong voice is a draft you rewrite twice.
2. **Numbers rule (INV-6).** Every figure in any output traces to a `workspace/PROOF-BANK.md` row tagged `[VERIFIED]`. Untraced numbers become `[CONFIRM]` slots — never stated as fact, never invented.
3. **CTA discipline.** Pull CTAs from `{{offer_architecture.content_to_offer_bridge}}`. Authority surfaces point at the lead magnet or application funnel. Reach surfaces point at channel architecture only. No engagement-bait CTAs (INV-17).
4. **Banned vocabulary** per `spec/BANNED-VOCABULARY.md` (INV-7). The prompts below repeat the worst offenders; the spec file is canonical.

## The Social-Post Pillar Mix

Posts on the spoke surfaces (LinkedIn / X / IG) follow a 5-pillar taxonomy, distinct from the channel's video pillar split (`{{content_engine.brand_pillar_split}}`):

| Pillar | Weight | What it is |
|---|---|---|
| **Proof (receipts)** | 40% | A specific verified result — yours or a student's/client's — with the mechanism visible |
| **Diagnostic** | 25% | A named, observable problem your `{{icp}}` has, with the cost made concrete |
| **Mechanism** | 20% | The exact steps of a framework you use, numbered, with named tools |
| **Personality** | 10% | A contrarian take, an honest miss, a worldview beat from `{{creator_identity_matrix.unique_positioning}}` |
| **Offer-bridge** | 5% | Direct CTA to the lead magnet, pinned VSL, or application funnel |

---

## Prompt 1 — LinkedIn Post

```
You are a LinkedIn writer for a YouTube-first creator in {{niche}}
(e.g., personal-finance, business-education, fitness-health,
tech-explainer) with a high-ticket back-end ({{offer_type}}:
coaching / program / mastermind / info-product).

Write 1 LinkedIn post, 80–220 words, in my voice (voice card pasted
below or loaded from workspace/VOICE.md).

Pillar (pick one, or select the next-due pillar per the 40/25/20/10/5
weighting):

A. Proof (40%) — "{{verified_result — e.g., 'A student went from 11
   applications/mo to 31 by re-cutting one video's first 30 seconds'}}.
   Here's the 3-step breakdown." Pull the result from a PROOF-BANK
   [VERIFIED] row. No row → no post.
B. Diagnostic (25%) — "Most {{icp}} are losing {{specific cost: views /
   watch-time / qualified leads}} to {{specific observable gap}}.
   Here's the math."
C. Mechanism (20%) — "The exact {{N}}-step process we use for
   {{specific workflow — e.g., 'turning one long-form video into 14
   pieces of distribution'}}."
D. Personality (10%) — the contrarian take or honest miss. "Why I
   stopped {{common niche practice}}." / "What I got wrong about
   {{topic}} for two years."
E. Offer-bridge (5%) — direct CTA: "The full system is in
   {{lead_magnet_name}} — link in comments." or "Applications for
   {{offer_name}} are open — {{application_url}}."

Structure:
- Line 1 — Hook: ≤12 words. A specific number, named tool, named
  outcome, or contrarian claim. NOT "Here's what I've learned about…"
- Lines 2–3 — Bridge: 1–2 sentences setting up the substance.
- Body — Substance: specifics throughout. Proof posts: situation +
  what changed + outcome. Diagnostic posts: gap × frequency × cost.
  Mechanism posts: numbered steps with named tools.
- Close — CTA: one CTA from content_to_offer_bridge. NEVER a
  question-mark close ("What do you think?"). NEVER "drop a comment
  if this resonates."

Voice constraints:
- First person, my registered sentence shapes, no emoji
- No banned vocabulary (no "unlock," "game-changing," "dive into,"
  "leverage" as a verb — full list in spec/BANNED-VOCABULARY.md)
- If the post implies an outcome others can expect: state the median
  outcome, not the outlier, and never guarantee income (NEVER-11)

Inputs: pillar = {{A/B/C/D/E}}; anchor = {{PROOF-BANK row / observation
/ step list}}; niche = {{niche}}; icp = {{icp}}.

Output: 1 post formatted for LinkedIn line-break scanning + a 0–10
signal score (per workspace/prompts/signal-check.md) with the weakest
dimension named.
```

---

## Prompt 2 — X Thread (5–12 Tweets)

```
You are an X thread writer for a YouTube-first creator in {{niche}}.
Write a {{length}}-tweet thread.

Thread topic: {{topic — typically a verified result, a diagnostic
walkthrough, or a contrarian take from a recent video}}.

Structure:
- Tweet 1 — Hook: ≤180 chars. Specific number, specific mechanism, or
  specific contrarian claim. Must earn the next tap as a standalone.
- Tweets 2–N — Substance: 1 idea per tweet. Numbers from PROOF-BANK
  [VERIFIED] rows only. 1 contrarian beat mid-thread to break
  monotony. If Diagnostic: 1 "here's the math" tweet. If Mechanism:
  1 numbered-steps tweet. If Proof: 1 receipt tweet with the
  verifiable specifics.
- Final tweet — CTA: route to the hub. "Full breakdown in the video:
  {{video_url}}" or "{{lead_magnet_name}}: {{link}}". NOT "follow me
  for more."

Voice constraints:
- My voice card (pasted / loaded from workspace/VOICE.md)
- No emoji, no "🧵 1/{{n}}" threadbot furniture
- No "Bookmark this" / "Save for later" guru-talk
- Median-outcome framing on any results claim; no income guarantees

Output: the thread tweet-by-tweet with character counts, plus a 0–10
signal score for the hook tweet specifically.
```

---

## Prompt 3 — IG Carousel (8–10 Slides)

```
You are an IG carousel writer for a YouTube-first creator in
{{niche}}. Write the copy for an {{N}}-slide carousel.

Carousel topic: {{topic}} — usually a Mechanism or Diagnostic beat
extracted from a published long-form video.

Structure:
- Slide 1 — Cover: 6–10 words. Specific claim, specific number, or
  contrarian take. The cover earns or loses the swipe; it is the
  entire game.
- Slide 2 — Setup: 1–2 sentences framing the problem in the viewer's
  own language (pull from audience_intelligence_system.voice_of_viewer).
- Slides 3–{{N-1}} — Substance: 1 idea per slide, ≤15 words per slide.
  Numbers, named tools, named steps.
- Slide {{N-1}} — The Math (Diagnostic) OR The Receipt (Proof) OR
  The Step List (Mechanism).
- Slide {{N}} — CTA: route to the hub or the lead magnet. The link
  lives in the caption/bio, not on the slide.

Plus the caption (50–150 words): opens with the Slide-1 hook, recaps
the substance for non-swipers, closes with the CTA.

Voice constraints: my voice card; anti-hype; each slide stands alone
but advances the argument; no emoji on slides.

Output: {{N}} slides as bullet copy + the caption.
```

---

## Prompt 4 — IG Story Sequence (5–7 Stories)

```
You are an IG Stories writer for a YouTube-first creator in {{niche}}.
Build a {{N}}-story sequence designed to:
- Open at top-of-funnel (Story 1)
- Show the work (Stories 2–5)
- Filter for fit (Story 6)
- Convert to the bridge (Story 7)

Story 1 — Hook: 1 line of text over a real visual (a YouTube Studio
screen, a comment, an edit timeline, a whiteboard). Specific entity.
Story 2–3 — Problem: the gap your {{icp}} lives with. One line per
story, in viewer language.
Story 4–5 — The work: what you built / found / changed. Show the
artifact (analytics screen, before/after, the framework sketch).
Story 6 — Disqualifier: "If {{out-of-scope condition — e.g., 'you
haven't published 10 videos yet'}}, skip this." Filters for fit;
raises the quality of what comes through.
Story 7 — CTA: link sticker to {{lead_magnet / video / application}},
or a DM keyword prompt. One ask.

For each story: text overlay (≤10 words), visual description, and any
interactive element (poll / question / link).

Voice: mine. Anti-hype. No emoji unless visually load-bearing
(default: none). Numbers shown on screen trace to PROOF-BANK.

Output: {{N}} stories, formatted.
```

---

## Prompt 5 — YouTube Hook Variants (Authority Mode)

For production hooks, fire `/write-hook` — it runs the Three-Brain sequence and the retention-mechanism count gate (INV-11). Use this prompt to explore angles before committing.

```
You are a YouTube hook writer. Write 3 hook variants for an
authority-mode video on my channel in {{niche}}, targeting
{{awareness_level}} viewers.

Video topic: {{topic}}. Mode: authority (declare it — INV-12).

Constraints:
- ≤15 seconds of voiced text (~35–40 words)
- Opens cold. NO "what's up everyone," NO "welcome back," NO
  "before we dive in."
- Contains ≥1 specific entity: a number from PROOF-BANK, a named
  tool, a named workflow, or a bounded promise
- Opens a loop the video will close (the punch is promised, not
  delivered)
- Hook formulas available (reference/frameworks/four-hook-formulas.md):
  PAST / AID / Contrast / Statistic / Curiosity-Gap / Bound-Promise /
  Contrarian-Frame / Social-Proof-Stack

Variant A — open with the number: lead with the verified figure,
then the mechanism promise.
Variant B — open with the broken thing: show the artifact ("This is
a {{tool/screen}}. Here's what's silently going wrong in it."), then
the cost, then the fix promise.
Variant C — open with the contrarian frame: name the consensus
practice, state why it's wrong, promise the demonstration.

For each variant: the hook text + which retention mechanisms it
stacks (needs ≥3 in the first 30s per INV-11 once extended) +
predicted hold ranking with reasoning (specificity / curiosity /
verifiability).

Numbers: [VERIFIED] PROOF-BANK rows only; otherwise write the
{{[CONFIRM]}} slot into the hook draft.
```

---

## Prompt 6 — 30-Day Cross-Platform Calendar

```
You are a content-calendar architect for a YouTube-first creator in
{{niche}}. YouTube is the hub; every other surface is distribution.

Volume (calibrate to my actuals in workspace/CONTENT-ENGINE.md):
- YouTube: {{N}} long-form/month + {{N}} Shorts/month (the spine)
- LinkedIn: 3–5 posts/week
- X: 1 thread + 5–10 standalone tweets/week
- IG: 3–4 posts/week + stories around publish days
- Email: 1–2 sends/week (list from audience_building_loop.email_pipeline)

Rules:
- Every long-form video spawns its repurposing cascade (Shorts, posts,
  thread, email mention) in the 7 days after publish — spoke content
  references the hub, not the reverse
- Social posts follow the 40/25/20/10/5 pillar mix (Proof /
  Diagnostic / Mechanism / Personality / Offer-bridge)
- Video slots follow the channel's mode mix
  ({{content_engine.mode_mix}}: authority/reach/hybrid) and pillar
  split ({{content_engine.brand_pillar_split}})
- No two consecutive posts on the same pillar; ≥1 Personality post
  per week; Offer-bridge ≤1 per week per surface
- No PROOF-BANK row referenced more than 3× in the 30 days; every
  [VERIFIED] result gets at least one long-form treatment

For each slot output: date, surface, pillar (or video mode), 1-line
topic, the hook line, the CTA pattern, and the source it draws from
(video / PROOF-BANK row / VOC quote).

Inputs: {{N_verified_proof_rows}}, {{recent_videos_published}},
{{upcoming_launch_or_open_cohort_dates}}.

Output: 30-day calendar as a table sorted by date.
```

---

## Pre-Ship Validation

Drafts are free; shipping is gated. Before anything from this pack goes live:

1. **Signal check** — score 0–10 against `workspace/prompts/signal-check.md`. 7+ ships. 4–6 recast the weakest dimension. 0–3 reject.
2. **Voice gates** — `spec/voice-gates.md`: banned vocabulary, sentence shapes, phase/CTA discipline. Any gate fail = reject regardless of score.
3. **Proof trace** — every number resolves to a `workspace/PROOF-BANK.md` `[VERIFIED]` row or carries its `[CONFIRM]` slot (INV-6). Results claims state the median, never a guarantee (NEVER-11).
4. **CTA check** — CTA matches the surface: authority → lead magnet / application; reach → channel architecture. No engagement bait (INV-17).
5. **Promise alignment** — if the asset points at a video, its promise matches the video's title/thumbnail/first-30s promise (INV-10).

## When To Escalate From Prompt To Skill

- Video hooks for a committed script → `/write-hook`
- Scripts → `/write-authority-script`, `/write-reach-script`, `/write-shorts-script`
- The full post-publish multiplication → `/repurposing-cascade`
- Calendar at mode-mix / pillar-split level → `/content-mix-strategy` + `/idea-farm`
- Title + thumbnail → `/title-thumbnail-pair` (never one without the other)

If you run the same prompt twice on the same artifact, you're doing skill work. Switch lanes.

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
