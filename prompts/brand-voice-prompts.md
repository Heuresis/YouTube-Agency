---
name: brand-voice-prompts
type: prompt-pack
purpose: One-shot prompts for voice extraction, phrase mining, per-surface tone calibration, in-voice rewriting, and voice-drift audits. The creator's voice is extracted from artifacts they actually produced — never from the brand voice they wish they had.
reads:
  - company.yaml — creator_identity_matrix.brand_voice_architecture, creator_identity_matrix.on_camera_persona, creator_identity_matrix.parasocial_trust_contract
  - workspace/VOICE.md
  - spec/voice-gates.md
  - spec/BANNED-VOCABULARY.md
---

# Brand Voice Prompts

> Voice is the moat. The audience subscribed to a specific human's way of saying things; every asset that drifts toward generic-LLM or generic-guru cadence spends trust. These prompts extract, bank, calibrate, and audit that voice. The authoritative voice card lives at `workspace/VOICE.md`; the foundational extraction ceremony is `/extract-creator-voice`.

---

## How To Use

Run on real creator artifacts — video transcripts (spoken voice), posts, emails, DMs (written voice). 5–15 samples minimum; fewer produces a horoscope, not a fingerprint. Spoken and written voice are related but distinct: extract both, and tag every sample with its register.

---

## Prompt 1 — Voice Extraction From Creator Artifacts

```
You are a voice analyst. I'll paste {{N}} samples of my real output —
video transcripts (mark these SPOKEN), posts/emails/DMs (mark these
WRITTEN). Extract my voice profile.

Samples: [paste 5–15, each tagged SPOKEN or WRITTEN]

Output:

1. Sentence-level patterns (per register):
   - Average sentence length; short:medium:long distribution
   - Fragment usage and where (rhetorical effect)
   - Active vs passive ratio; question vs statement ratio
   - Spoken-only: filler/connector habits, where I breathe, the
     rhythm a script must reproduce to be readable aloud

2. Vocabulary signature:
   - 15 most-frequent meaningful words
   - 5 favorite intensifiers; 5 favorite hedges (flag hedges that
     appear where the take should be declarative)
   - Idiosyncratic phrases (words I use that peers in {{niche}} don't)
   - Notable omissions (words common in {{niche}} content I never use)

3. Specificity markers:
   - Rate of concrete numbers per 100 words
   - Rate of named tools / named examples / named people
   - Rate of vague claims ("better results," "a lot of growth") —
     each is a drift signal

4. Drift risks (toward generic-guru or generic-LLM voice):
   - Any banned-vocabulary hits (spec/BANNED-VOCABULARY.md)
   - Any "what if I told you" / "in this video we're going to" /
     engagement-bait shapes (INV-17)
   - Hedge clusters in declarative contexts

5. Niche-fluency check: insider terms of {{niche}} I use without
   defining (signal of native fluency) vs terms I over-explain

6. The voice fingerprint — one paragraph that a stranger could use
   to pick my writing out of a lineup. Pattern: "Writes in {{length}}
   sentences. Frontloads {{numbers/claims/story}}. Names specific
   {{tools/examples}} at {{rate}}. Hedges only when {{condition}}.
   Drift risk: {{the habit to police}}."

7. The voice constraint card — the 8–12 line block every content
   skill injects:
   - sentence-length envelope and cut threshold
   - the always-rules (e.g., "≥1 concrete number per 100 words")
   - the never-list (my personal banned phrases, merged with
     spec/BANNED-VOCABULARY.md)
   - the signature moves (fragments, callbacks, the named catchphrase
     and its max frequency)
   - spoken-register deltas for scripts

Evidence rule: every claim in the profile cites counts from the
pasted samples ("uses X 7 times across 12 samples") — no invented
tendencies. Where samples conflict, say so.

Output: full profile, formatted to drop into workspace/VOICE.md and
{{creator_identity_matrix.brand_voice_architecture}}.
```

---

## Prompt 2 — Phrase Mining (The Personal Phrase Bank)

```
You are a phrase analyst. From the artifacts pasted, mine the 30
phrases that are uniquely mine (or rare enough to read as mine).

Categories (5 each):
- Opening moves (how I start videos/posts when it's working)
- Transition moves ("the thing is," "here's where it breaks," etc.)
- Intensifiers and softeners I actually use
- Metaphors/analogies — especially ones imported from my pre-creator
  background (these are the unfakeable ones)
- Contrarian-take signatures (how I disagree)
- Receipt-anchor phrases (how I introduce a number or result)

For each phrase:
- The verbatim phrase
- Count across the artifacts
- Context pattern (when it appears)
- Compatibility: does it pass spec/voice-gates.md and
  spec/BANNED-VOCABULARY.md? Flag any signature phrase that
  collides with a banned pattern — the creator decides the override
  (phrases_to_use beats the banned list only by explicit creator
  sign-off, per INVARIANTS boot rules).

Output: 30-phrase bank as a table → feeds
{{creator_identity_matrix.brand_voice_architecture.phrases_to_use}}.
Content skills inject this bank as preferred phrasing.
```

---

## Prompt 3 — Tone Calibration (Per Surface)

One voice, many registers. The fingerprint stays constant; intensity, sentence length, and formality flex per surface.

```
You are a tone calibrator. My voice profile is locked (pasted below /
workspace/VOICE.md). Calibrate it per surface:

| Surface | Register | Tone setting | Sentence envelope | Intensity |
|---|---|---|---|---|
| Long-form script (authority) | SPOKEN | direct, teaching | natural speech, readable aloud | high conviction, zero hype |
| Long-form script (reach) | SPOKEN | story-led, broader | shorter beats, faster cuts | high energy, still mine |
| Shorts script | SPOKEN | compressed, single-beat | fragments dominate | maximum, no warm-up |
| Pinned VSL | SPOKEN | measured, evidence-led | longer permitted | calm authority |
| LinkedIn post | WRITTEN | professional-direct | 12–18 words | medium |
| X / thread | WRITTEN | tightest register | 8–14 words | high |
| IG caption | WRITTEN | warmest register | short | medium |
| Email to list | WRITTEN | direct address, 1:1 feel | 10–18 words | medium-high |
| Community tab | WRITTEN | conversational | loose | low-key |
| Sales/application page | WRITTEN | specific, calm | 12–22 words | conviction without pressure |

For each surface output:
- 2–3 example sentences in MY voice at that setting (derived from my
  actual phrase bank, not invented mannerisms)
- The most common drift signal on that surface (what to watch for —
  e.g., LinkedIn pulls toward corporate bloat; Shorts pulls toward
  hypebait; email pulls toward newsletter-speak)
- The 1-line guideline I can recall under deadline pressure

The parasocial constraint: every register is the same person
({{creator_identity_matrix.parasocial_trust_contract}}). If a surface
calibration would read as a different character, flag it — that's a
trust-contract violation (INV-16), not a tone option.
```

---

## Prompt 4 — In-Voice Rewrite

```
You are an in-voice rewriter. I have a draft produced without my
voice profile. Rewrite it in my voice.

My voice profile/card: [paste or load workspace/VOICE.md]
The draft: [paste]
The surface: {{script / post / email / caption}} (sets the register
per Prompt 3 calibration)

Constraints:
- Substance is frozen: every number, named tool, claim, and PROOF-BANK
  trace survives unchanged
- Rewrite only structure, vocabulary, rhythm, and intensifier
  patterns to match the fingerprint
- Apply the constraint card: sentence envelope, never-list,
  signature moves at their natural frequency (a catchphrase forced
  into every paragraph reads as parody)
- The outer envelope still applies: my voice never overrides
  spec/voice-gates.md or spec/BANNED-VOCABULARY.md. If my natural
  voice and the gates collide, the gate wins and the collision gets
  flagged for my sign-off.
- SPOKEN surfaces: read the rewrite aloud; any line that trips the
  mouth gets rewritten until it doesn't

Output:
1. The rewritten draft
2. A sentence-level diff of what changed and why (which fingerprint
   rule drove each change)
3. A 0–10 voice-fidelity score against the fingerprint
4. Flags where voice and gates conflicted and how it was resolved
```

---

## Prompt 5 — Voice-Drift Audit (Post-Hoc)

Run monthly, or whenever output volume jumps (new editor, new writer, new AI workflow — drift loves scale).

```
You are a voice-drift auditor. Here are {{N}} pieces I shipped in the
last {{timeframe}}, across {{surfaces}}:
[paste artifacts, each tagged with surface + date]

Audit each against:
- My voice fingerprint (workspace/VOICE.md)
- spec/voice-gates.md (the hard gates)
- spec/BANNED-VOCABULARY.md (INV-7)
- The engagement-bait ban (INV-17)

Per artifact:
- Voice-fidelity score 0–10 vs the fingerprint
- Gate pass/fail with the exact violating line quoted
- Specific drift instances: the verbatim drifted phrase → the
  in-voice fix

Pattern analysis across all {{N}}:
- Dominant drift direction (generic-LLM flatness? guru hype?
  corporate bloat? someone else's voice bleeding in?)
- Which surface drifts most (usually the highest-volume one)
- Which production path produced the drifted pieces (me direct /
  edited / delegated / AI-assisted) — name the leak

Recommendations:
- 3 specific edits to the voice constraint card to prevent
  recurrence
- The 1 workflow step to add (e.g., read-aloud pass on scripts,
  signal-check before schedule)
- Whether workspace/VOICE.md needs a version bump — and if my voice
  has genuinely EVOLVED (vs drifted), say so: evolution updates the
  card; drift gets corrected. The tell: evolution shows up in my
  unscripted artifacts first; drift shows up only in produced ones.

Output: 1-page audit — per-artifact table + pattern analysis + the 3
recommendations.
```

---

## Pre-Save Validation

- **Evidence backing** — every voice claim traces to counts in real artifacts; a voice profile is data, not vibes.
- **Gate compatibility** — the constraint card is checked against `spec/voice-gates.md`; collisions are flagged for creator sign-off, never silently resolved.
- **Register tagging** — spoken vs written kept distinct; a written-register card applied to scripts produces mouth-unfriendly lines.
- **Authoritative-home rule** — profile updates land in `workspace/VOICE.md` + `{{creator_identity_matrix.brand_voice_architecture}}`; stray voice cards in random files create competing truths.

## When To Escalate From Prompt To Skill

- Foundational extraction (Compartment 1, on-camera persona, trust contract) → `/extract-creator-voice`
- Voice applied to production scripts → `/write-authority-script`, `/write-reach-script` (both run the voice pass natively)
- Library-wide pattern extraction → `/library-compound`

Use the prompts for spot-checks, single rewrites, and calibrating a new surface. Use the skill when the output becomes the authoritative card everything else reads.

---

*Version: 1.0.0 — 2026-06-11.*
*A Heuresis workspace template.*
