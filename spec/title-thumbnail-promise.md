# title-thumbnail-promise.md — Alignment Rule for Title / Thumbnail / First-30s

> **INV-10 enforcement.** Every title-thumbnail-script triad passes the alignment gate before publish. Mismatch = the algorithm punishes the channel after CTR-driven first-watch produces low retention. This file specifies the alignment check, the failure modes, and the revision path.

---

## The principle

The title and thumbnail are a **promise**. The first 30 seconds of the video are a **delivery**. When the promise and delivery match, retention holds and the algorithm rewards. When they don't, viewers click, feel cheated, and bounce — and the algorithm interprets that as the channel publishing low-quality content.

This rule isn't about "honesty in copy" (that's the Truth Gate). It's about **structural promise-delivery alignment**. A title can be perfectly truthful and still mismatch the first 30s.

---

## What "promise" means

A title-thumbnail unit promises along four dimensions:

### 1. Topic promise
What is this video about? The viewer must be able to predict the topic from the title-thumbnail. Topic mismatch = bait. Example failure: title says "How I Made $1M," first 30s talks about a real-estate deal but the video is actually about content-creation. Even though both topics are "money," the topic-promise mismatched.

### 2. Format promise
What kind of video is this? Tutorial / case-study / contrarian-essay / vlog / interview / list / explainer. Format-promise comes from title structure + thumbnail composition. Example failure: title says "5 Steps to..." (list format) but video is a single-narrative case study.

### 3. Intensity promise
How charged is this content? Calm-explainer / contrarian-rant / dramatic-reveal / measured-analysis. Intensity-promise comes mostly from thumbnail (face expression, color contrast, text size) and partly from title word choice. Example failure: thumbnail has the creator's mouth wide open / wide-eyed / red-bordered text — promises a dramatic reveal — but the first 30s are calm and analytical. Viewer expectation crashed; CTR was high but retention drops.

### 4. Specificity promise
How concrete is the value? Precise-claim ("I went from $5K/mo to $50K/mo in 90 days") promises specific evidence. Vague-claim ("How to scale your business") promises general principles. Example failure: title is precise, video delivers vague. The viewer wanted the specific path; got generic advice.

---

## The alignment check

For every title/thumbnail/first-30s triad, the gate runs:

```
1. Extract the title's promise:
   - topic_promise: <topic noun phrase + scope qualifier>
   - format_promise: <format from title structure>
   - intensity_promise: <intensity from word choice + punctuation>
   - specificity_promise: <precise | vague>

2. Extract the thumbnail's promise:
   - topic_promise: <topic from visual elements + text>
   - format_promise: <format from composition>
   - intensity_promise: <intensity from face / color / text size>
   - specificity_promise: <precise | vague>

3. Extract the first-30s delivery:
   - topic_delivered: <topic introduced in first 30s>
   - format_delivered: <format signaled in first 30s>
   - intensity_delivered: <intensity of opening>
   - specificity_delivered: <how specific the opening is>

4. Match score per dimension:
   - exact_match: 100
   - close_match (same category, different scope): 70
   - drift_match (related but distinct): 40
   - mismatch: 0

5. Composite alignment score = avg(topic, format, intensity, specificity)
   - >= 80: PASS
   - 60-79: PASS WITH WARNING (revision recommended but not required)
   - 40-59: FAIL — revise required
   - < 40: REJECT — re-architect from scratch
```

---

## Failure modes (most common)

### FM-1: Topic promise too broad
Title: "How to Build a Business"
Video first 30s: dives into a specific case study about real-estate cold-outreach
Mismatch: title's topic promise was the universal "build a business" — viewer expected fundamentals — but the video is a tactical specific case
Fix: narrow the title to match. "How I Closed 12 Deals in 30 Days With Cold Email"

### FM-2: Thumbnail intensity exceeds delivery
Thumbnail: red-bordered text, mouth-open expression, "SHOCKING TRUTH" overlay
Video first 30s: calm voiceover starting with "So today I want to walk you through..."
Mismatch: thumbnail promised a dramatic reveal, opening delivered measured analysis
Fix: either rebuild the opening to match the thumbnail intensity, or replace the thumbnail with a calmer composition

### FM-3: Format mismatch (list ≠ narrative)
Title: "7 Things I Wish I Knew Before Starting My Coaching Business"
Video structure: a single chronological narrative with no enumerated list
Mismatch: title promised list format, video delivered narrative format
Fix: either restructure the script as an enumerated list, or change the title to match the actual format ("How I Started My Coaching Business — Lessons From 18 Months In")

### FM-4: Specificity promise broken
Title: "How I Went From $5K/mo to $50K/mo in 90 Days"
Video first 30s: "There are some really powerful principles I want to share..."
Mismatch: precise title promise, vague delivery — viewer expected the specific path, got generic
Fix: open with the specific story. The viewer clicked for the path, deliver the path.

### FM-5: Thumbnail-title fight each other
Title says one thing; thumbnail says another
Example: title is calm-analytical ("Why Most Coaches Stay Stuck at $10K/mo"), thumbnail is dramatic ("THIS WILL BLOW YOUR MIND")
Mismatch: viewer can't predict the video. CTR may be elevated by the thumbnail but viewers feel manipulated when the calm video plays
Fix: pick one tone and align both elements

### FM-6: Topic-bait
Title or thumbnail references a topic the video doesn't actually cover (or only covers in passing)
Example: title "What Famous-Mentor-Archetype Got Wrong About Cold Email" — video mentions the mentor archetype once at the 8-minute mark
Mismatch: viewer came for the named-perspective comparison, got generic content
Fix: either restructure the video around the promised comparison, or change the title

---

## Specifically banned mismatches

These ship-stoppers can't be overridden:

1. **Topic-bait** (title references content the video doesn't cover) — INV-5 Truth Gate violation
2. **Result-bait** (thumbnail/title shows result the creator didn't achieve) — INV-6 No Fabrication violation
3. **Engagement-bait phrasing in title** (e.g., "You won't believe what happened next") — INV-17
4. **Specificity-bait** (precise title, vague delivery without explicit framing) — INV-13 sophistication-stage match

---

## Revision path

When a triad fails, the agent (`production-head`) returns a structured diagnosis:

```
TITLE-THUMBNAIL-PROMISE CHECK — FAILED

Title: "<title>"
Thumbnail composition: <description>
First-30s delivery: <summary>

Alignment score: <composite>/100
- topic: <score>
- format: <score>
- intensity: <score>
- specificity: <score>

Failure mode: <FM-N>

Revision options:
A. Reshape opening to match title-thumbnail promise
   <bullet list of opening rewrites>
B. Reshape title-thumbnail to match opening
   <bullet list of title alternatives + thumbnail alternatives>
C. Re-architect (if mismatch is structural, not cosmetic)
   <rebuild plan>

Recommend: <A | B | C>
Reason: <why>
```

The creator picks A, B, or C and the appropriate skill (`/title-options`, `/thumbnail-brief`, `/write-authority-script` revision) executes.

---

## Calibration

The score weights and thresholds calibrate per-channel:

- Channels with above-average CTR but below-average AVD typically have over-promising thumbnails. The intensity-mismatch threshold tightens for these channels.
- Channels with below-average CTR but above-average AVD typically have under-promising thumbnails. The intensity-mismatch threshold loosens.
- Channels in skeptical/exhausted markets have stricter specificity-promise requirements (vague titles get punished harder).

Calibration runs monthly via `/audit-retention` on the past 30 days of published videos.

---

## What this gate does NOT do

- It does not predict CTR. That's the title-strategist's job.
- It does not optimize for the algorithm. It optimizes for the viewer's first-30s experience.
- It does not generate titles or thumbnails. It checks alignment between existing ones.
- It does not enforce niceness or honesty in titles. That's the Truth Gate.

It DOES:
- Catch the most common cause of low retention from high CTR
- Force the creator to commit to one promise across title, thumbnail, and opening
- Flag thumbnail-intensity mismatches that erode trust over time

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
