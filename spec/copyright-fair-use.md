# copyright-fair-use.md — Pre-Publish Gate on Third-Party Material

> **INV-14 enforcement.** Any clipped, quoted, sampled, or referenced third-party material passes this gate before publish. The gate documents transformative use, attribution, and length-of-use. Failure to clear the gate = block publish.

---

## Why this matters

YouTube's Content ID system + manual claim system + DMCA takedown system together create a real-time legal risk for any channel using third-party material. A single claim can demonetize the video, redirect revenue to the claimant, or take it down entirely. Repeated strikes terminate channels.

The gate isn't legal advice. It's a structured pre-publish checklist that catches the most common failure modes — the ones that account for ~95% of strikes on creator channels.

---

## What this gate covers

| Material type | Gate coverage |
|---|---|
| Music tracks | Yes |
| Sound effects | Yes |
| Stock video clips | Yes |
| News clips | Yes (heightened scrutiny) |
| TV/film clips | Yes (heightened scrutiny) |
| YouTube clips from other channels | Yes |
| Quoted text (book/article excerpts) | Yes |
| Brand logos / product shots | Yes |
| Photographs from third parties | Yes |
| AI-generated material based on copyrighted work | Yes (heightened scrutiny) |

What this gate does NOT cover:
- Licensing for original commissioned music (creator's responsibility, documented separately)
- Trademark issues for branded references (separate trademark check)
- Defamation / libel / right-of-publicity (separate legal review)

---

## The fair-use analysis (US-centric, adapted per region)

US fair use considers four factors. The gate scores each:

### Factor 1: Purpose and character of use
- **Transformative**: the new work adds new meaning, expression, or message. (Strong fair-use signal)
- **Commentary/criticism**: the use is to comment on or criticize the original. (Strong)
- **Parody**: the use mocks the original. (Strong)
- **Educational**: the use is in an educational context. (Moderate — better if non-commercial, but creators on YouTube are commercial)
- **Decorative**: the use is to make the video look or sound nicer. (Weak — typical infringement)
- **Pure entertainment using the original**: the original is reproduced for its inherent value. (Very weak)

### Factor 2: Nature of the copyrighted work
- **Factual / informational**: documents, news, scientific facts. (Moderate fair-use signal)
- **Creative / expressive**: music, film, fiction, photography. (Weak signal — more protected)

### Factor 3: Amount and substantiality
- **Quantity**: how much of the original is used? Short clip (< 10s of a song, < 30s of video, < 200 words of text) is safer. Long use is riskier.
- **Substantiality**: did you use the "heart" of the work — the chorus of a song, the climactic scene of a film, the punchline of an essay? Heart-of-work use is risky regardless of length.

### Factor 4: Market effect
- **Substitutional**: your video could replace the need to consume the original. (Very weak signal — likely infringement)
- **Non-substitutional**: your video drives interest in or comments on the original. (Strong signal)

### Composite verdict
- 4/4 strong + transformative-purpose: PASS (low risk)
- 3/4 strong + transformative-purpose: PASS WITH NOTE
- 2/4 strong: REVIEW (flag for creator decision)
- 1/4 or 0/4 strong: FAIL (block publish, recommend license/replace)

---

## Music handling (most common failure mode)

The gate categorizes music sources:

| Source | Status | Action |
|---|---|---|
| Original commissioned (creator-owned) | Cleared | Document license file path, no further check |
| Licensed library (Epidemic Sound, Artlist, Musicbed, Soundstripe, etc.) | Cleared | Verify subscription is active, document license tier |
| Royalty-free public-domain sources | Cleared | Document source URL + license terms |
| YouTube Audio Library | Cleared | Document track ID |
| Creative Commons | Conditional | Verify license terms (BY-SA / BY-NC / BY-ND constraints) |
| Popular commercial music (chart hits) | Blocked | License directly or replace |
| Background ambient with vocals | Heightened scrutiny | Even instrumental versions can trigger Content ID |
| AI-generated music | Conditional | Verify the AI tool's commercial-use license + that training data didn't include copyrighted music |

When a script calls for music, the editor brief specifies which library/track. The gate verifies the cited library matches the operator's `company.yaml.operations_intelligence.ip_licensing.music_library_license`.

---

## Stock footage handling

| Source | Status | Action |
|---|---|---|
| Licensed stock library (Storyblocks, Shutterstock, Adobe Stock, Pexels-Plus, etc.) | Cleared | Verify subscription is active |
| Pexels free / Unsplash | Cleared (with caveats) | Verify license includes commercial use; document attribution if required |
| YouTube clips from other creators | Heightened scrutiny | Apply fair-use analysis. Short transformative clip (< 30s, commentary purpose) usually OK; longer or non-transformative use blocked |
| News footage | Heightened scrutiny | Commentary or criticism context required; short clips only |
| TV / film clips | Heightened scrutiny | Strict fair-use analysis required; consider replacing with original b-roll |

---

## Quoted text handling

For any direct quote from a book, article, or third-party text:

- ≤ 50 words: usually fair use with attribution
- 50–200 words: requires fair-use analysis (transformative purpose strongly recommended)
- > 200 words: likely requires permission

Attribution required: author + work title. URL preferred. Quotes shown on screen as supers should display attribution.

For paraphrasing instead of direct quotes — paraphrasing avoids copyright but still requires attribution if the idea is non-trivially attributable.

---

## Brand logos / product shots

| Use | Status |
|---|---|
| Editorial reference (e.g., showing a software dashboard while talking about it) | Cleared |
| Decorative use of logo (e.g., putting a brand logo behind the creator without context) | Heightened scrutiny |
| Comparative use ("X vs Y") | Cleared if the comparison is editorial |
| Sponsored integration of the brand | Different rule — see `sponsor-disclosure.md` |
| Product shot in a tutorial about the product | Cleared |
| Product shot to imply endorsement | Blocked unless permission |

---

## AI-generated material based on copyrighted work

This is an evolving area. Default conservative stance:

- AI-generated images derived from prompts referencing copyrighted characters / brands: blocked unless the underlying work is in the public domain or the use is clearly transformative parody
- AI-generated voice cloning: blocked without explicit consent from the cloned individual
- AI-music generation: see Music handling
- AI-text generation in the style of a copyrighted author: cleared (style is not copyrighted, expression is)

When in doubt, the gate flags for creator decision rather than auto-clearing.

---

## The pre-publish checklist

Before any video ships, the publish-checklist skill runs this gate:

```
COPYRIGHT/FAIR-USE CHECK

Music tracks used:
  - Track 1: <name> — source: <library/library-track-id> — status: <CLEARED|FLAGGED|BLOCKED>
  - Track 2: ...

Stock footage clips:
  - Clip 1: <description> — source: <library/clip-id> — status: <CLEARED|FLAGGED|BLOCKED>
  - ...

Third-party clips:
  - Clip 1: <description> — original source: <attribution> — duration: <s> — purpose: <commentary|criticism|illustration|other> — fair-use score: <X/4> — status: <CLEARED|FLAGGED|BLOCKED>
  - ...

Quoted text:
  - Quote 1: "<text>" — source: <attribution> — length: <words> — status: <CLEARED|FLAGGED|BLOCKED>
  - ...

Brand references:
  - Brand 1: <name> — use type: <editorial|decorative|comparative|sponsored> — status: <CLEARED|FLAGGED|BLOCKED>
  - ...

Composite verdict: <PASS | REVIEW | FAIL>
```

Verdict outcomes:
- PASS: video proceeds to publish
- REVIEW: creator must explicitly approve flagged items before publish (logged with reason)
- FAIL: at least one item is blocked. Replace or license before publish.

---

## Documentation

For every video that publishes with third-party material, the gate output is persisted to:

```
output/copyright-log/<video-id>.md
```

If a Content ID claim or DMCA notice arrives later, the log is the first reference for response.

---

## Limitations

This gate is **not legal advice**. It is a structured operational checklist designed to catch the most common failure modes. For high-stakes content (e.g., highly critical commentary on litigious entities, content using significant copyrighted material under aggressive fair-use claims), the creator should consult an actual entertainment lawyer.

The gate's verdict is advisory in REVIEW state and conservative-blocking in FAIL state. It cannot guarantee no claims will arrive — just that the most common failure modes have been considered.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template. Not legal advice.*
