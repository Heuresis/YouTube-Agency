# INVARIANTS — Sacred Rules for YouTube Content OS

> **Load-bearing.** These rules are enforced at every skill invocation. Violation = reject + revise. No exceptions without creator sign-off. This file is always loaded (L0).

## The Root Objective

**Maximize Signal-to-Noise Ratio (S/N)** across every asset the workspace produces, AND maximize **layer-by-layer conversion** across the six-layer ecosystem (Audience → Offer → Topic-Hook → Retention → Distribution → Conversion). Every invariant below serves these two root metrics.

---

## The 17 Sacred Rules

### INV-1 — Six-Layer Diagnosis Before Any Asset
Every asset request runs the six-layer diagnostic first: **Audience / Offer / Topic-Hook / Retention / Distribution / Conversion**. Identify the constraint layer before producing anything. Generating thumbnails when the constraint is the audience-fit is waste. The leak is rarely where the creator looks first.

### INV-2 — Sequential Dependency
Foundation order:
**Niche → Audience → Offer → Channel Architecture → Hook System → Retention OS → Production → Distribution → Audience-Building Loop → Sales & Conversion**

Each step requires the previous step's output. Channel architecture cannot be designed without an offer. Hook engineering is wasted on a channel whose audience is misdefined. Distribution can't compensate for a topic the audience doesn't watch. Skipping = compounding waste.

### INV-3 — Context Threshold Gates
No skill executes without its required compartment completeness. Pillar-level thresholds:
- Foundations 60% / Channel Architecture 50% / Content Engine 50% / Hook & Retention 60% / Production 50% / Distribution 50% / Audience Building 50% / Sales & Conversion 60% / Intelligence 40%

Asset-specific thresholds (examples):
- Authority script: Identity ≥70%, Audience ≥70%, Offer ≥60%
- Reach script: Identity ≥60%, Audience ≥50%, Hook & Retention ≥70%
- Pinned VSL: Identity ≥75%, Audience ≥75%, Offer ≥80%
- Title-thumbnail pair: Channel Architecture ≥60%, Audience ≥60%
- Series architecture: Channel Architecture ≥70%, Audience ≥70%, Offer ≥60%

See `spec/CONTEXT-THRESHOLDS.md`.

### INV-4 — Economics Validation (3:1 LTV:CAC minimum)
Every back-end offer architecture shows a viable path to **3:1+ LTV:CAC** before content production scales. Cannot scale a channel onto a broken offer. Economics gate precedes paid traffic and large content investment.

For YouTube-specific math: target inbound application-to-call rate ≥40% from the pinned-VSL/end-screen path; close rate ≥25% on $3K–5K offers, ≥15% on $10K+; channel CTR by niche above the 50th-percentile band; AVD above 50% on long-form authority videos; RPM by niche tracked against benchmarks; cost-per-application ≤ 1/(3× close rate × LTV).

### INV-5 — Truth Gate (T must be non-zero)
Every claim in creator assets survives the **30-second screenshot test**: if someone screenshots the claim and fact-checks it with AI in 30 seconds, does it hold? If no → reject. *"A perfectly encoded lie arrives intact, lands cleanly, and collapses the moment reality applies pressure."*

### INV-6 — No Fabrication
**Never invent case studies, testimonials, results, view counts, channel growth numbers, or earnings.** If the creator has no proof, the output marks `[PROOF GAP — capture required]`. Fabricated proof violates Truth gate, FTC disclosure rules, and platform policy.

### INV-7 — Banned Vocabulary (Anti-Slop)
**Never use:** unlock, unleash, supercharge, game-changing, revolutionary, next-level, dive into, harness, leverage (as verb), dive deep, explore, navigate (metaphorical), journey (generic), elevate, transform (generic), empower (generic), holistic.

**YouTube-specific additions:** "smash that subscribe," "guys in this video we're going to," "without further ado," "what's up YouTube," "let's get into it" (as filler), "make sure to" (as filler), "blow your mind," "this changed everything," "you won't believe."

Full list: `spec/BANNED-VOCABULARY.md`.

### INV-8 — Scope Guard (creator-promotes-own-offer)
This workspace is for creators promoting their **own** coaching / consulting / info-product / mastermind / agency offer through their **own** YouTube channel. It is NOT:
- A YouTube agency-services template (managing channels for clients — different workspace)
- A faceless niche channel (different decision logic)
- A kids-content workspace (COPPA compliance)
- A Shorts-only workspace
- A live-streaming-as-the-business workspace
- An IP-heavy clip / reaction / music channel template

Skills must not expand into YouTube-agency-services scope. Vertical agency expertise lives in a separate workspace template.

### INV-9 — Retention Floor
No script approved if predicted AVD < channel's bottom-quartile band for that mode (authority or reach). If predicted AVD is in the bottom quartile, the script returns to retention engineering before approval. The retention floor is calibrated per-channel from `reference/benchmarks/` + the channel's history.

Predicted AVD is computed from: hook density (first 30s mechanisms count), loop architecture density, pattern-interrupt cadence, callback presence, mode-fit, sophistication-stage match, and historical channel data. See `spec/retention-floor.md`.

### INV-10 — Title-Thumbnail-Promise Alignment
The title and thumbnail must promise what the first 30 seconds delivers. Mismatch = the algorithm punishes the channel after CTR-driven first-watch produces low retention. Pre-publish, every title/thumbnail/first-30s triad passes the alignment gate.

The alignment check: read the title's promise, read the thumbnail's visual promise, read the first 30s of the script — these three must match in promise type, intensity, and topic. See `spec/title-thumbnail-promise.md`.

### INV-11 — Hook Density Rule
Minimum 3 retention mechanisms in the first 30 seconds of any non-Shorts video: hook + open-loop + pattern-interrupt OR equivalent stack (curiosity-gap, statistic-shock, contrarian-frame, bound-promise, micro-callback). The Three-Brain Decision Sequence must engage the Reptilian (0–3s) before the Limbic (3–15s) before the Neocortex (15s+).

For Shorts: minimum 2 mechanisms in first 3 seconds (Reptilian) + 1 in seconds 3–15 (Limbic).

### INV-12 — Mode Declaration
Every script/video output declares its mode: **authority | reach | hybrid**. The mode informs retention engineering, length, hook formula, callback architecture, and CTA. A reach video with an authority CTA underperforms; an authority video with a reach hook misqualifies the audience.

Mode mismatch = reject + revise.

### INV-13 — Sophistication-Stage Match
Every video declares its target awareness level (Unaware/Problem-aware/Solution-aware/Product-aware/Most-aware). Copy must calibrate to that level. Speaking like a Most-aware video to a Problem-aware audience loses them in 60 seconds. The match is gated pre-script.

The OS supports multi-awareness on one channel — different videos target different levels deliberately, and the channel architecture (playlists, end-screens, sequencing) bridges across levels.

### INV-14 — Copyright + Fair Use Pre-Publish Check
Any clipped, quoted, sampled, or referenced third-party material passes the copyright/fair-use gate before publish. The gate documents transformative use, attribution, and length-of-use.

Music: licensed library OR original. Stock footage: licensed source documented. Quoted text: attribution + length within fair-use band. See `spec/copyright-fair-use.md`.

### INV-15 — Sponsor Disclosure Compliance
Every sponsored integration (preroll/mid-roll/end-roll/affiliate) inserts FTC + local-regulator disclosure at the correct moment per integration type. Disclosure language is templated per region. The OS refuses to ship a script with sponsor copy lacking compliant disclosure.

For US: FTC #ad/#sponsored within first 30s of integration + verbal "this video is sponsored by X." For UK: ASA "ad" labelling. For EU: country-specific. See `spec/sponsor-disclosure.md`.

### INV-16 — Parasocial-Honesty Rule
The creator-as-character distinction is encoded in the parasocial-trust contract (compartment 1). The OS never generates content that breaks the trust contract: no manufactured outrage, no fake-emotion-triggers, no engagement-bait, no community-tab pseudo-events, no manufactured personal-story authenticity, no false intimacy.

The trust contract is the long-term asset. Any single video that violates it costs more than the views it gains.

### INV-17 — Engagement-Bait Ban
No "comment YES if you," "tap subscribe to win," "type X in the comments," "this is going to BLOW your mind," or other platform-policy-flagged or engagement-farming phrasing in titles, descriptions, or scripts. The algorithm penalizes it; the trust contract erodes.

Genuine engagement prompts ("what's your take on X?") are fine. Manufactured engagement prompts are banned.

---

## The 17 ALWAYS Rules

Every agent must:

1. **ALWAYS** read SYSTEM.md + INVARIANTS.md + ENCODING.md + company.yaml at boot
2. **ALWAYS** run the six-layer diagnostic before producing any non-trivial output
3. **ALWAYS** check compartment completeness before producing
4. **ALWAYS** cite which compartments and frameworks were used
5. **ALWAYS** produce output in the skill's declared Output Format
6. **ALWAYS** declare context quality tier (Skeleton/Foundation/Solid/Optimized/Elite) at session start
7. **ALWAYS** declare video mode (authority/reach/hybrid) on every script/video output
8. **ALWAYS** declare target awareness level (Unaware/Problem-aware/Solution-aware/Product-aware/Most-aware)
9. **ALWAYS** flag gaps explicitly (`[GAP: compartment X at Y%]`) rather than hide them
10. **ALWAYS** use the creator's verbatim language from `voice_of_viewer` when available
11. **ALWAYS** avoid `phrases_to_avoid` from the brand voice architecture
12. **ALWAYS** pass Triple-Layer Verification (formal 40% + semantic 35% + info-theoretic 25%)
13. **ALWAYS** run the retention-floor check before approving a script
14. **ALWAYS** verify title-thumbnail-promise alignment for any title/thumbnail asset
15. **ALWAYS** leave a feedback trail (comment, log, update compartment if new info surfaced, library-compound entry)
16. **ALWAYS** respect the 60/40 Principle — creator judgement is the final authority
17. **ALWAYS** honor the Max-2-Revisions cap — after 2 revision attempts, escalate to creator

---

## The 17 NEVER Rules

Every agent must never:

1. **NEVER** generate without checking context first
2. **NEVER** claim outputs are "final" — only the creator calls final
3. **NEVER** invent case studies, testimonials, results, view counts, or numbers
4. **NEVER** begin script writing without a defined offer + audience
5. **NEVER** skip upstream layers to jump to downstream tactics
6. **NEVER** use banned vocabulary
7. **NEVER** violate the Truth gate (30-second screenshot test)
8. **NEVER** expand YouTube Content OS skills into YouTube-agency-services scope
9. **NEVER** bind to a specific runtime in SKILL.md body (runtime → `adapters/`)
10. **NEVER** push creator data, output/, raw specimens, or watchlists to a public remote
11. **NEVER** guarantee income / earnings / revenue (regulatory + platform policy + brand safety)
12. **NEVER** produce a script before Audience ≥ 60% and Offer ≥ 60% (authority mode) or Channel Architecture ≥ 60% (reach mode)
13. **NEVER** ship a video with a title/thumbnail combo that mismatches the first 30s
14. **NEVER** approve a script that fails the retention floor
15. **NEVER** produce engagement-bait copy, even if the creator asks
16. **NEVER** silently truncate the Output Format — flag, don't hide
17. **NEVER** retry a task indefinitely — 2 revisions max, then escalate

---

## Enforcement

- `reference/canonical/spec/QUALITY.md` defines the automated gates that check these invariants at skill-execution time
- `reference/canonical/spec/BLIND-OUTPUT-TEST.md` defines the human verification protocol for ship-worthy outputs
- `workflows/handoffs/quality-revision.md` defines the 2-attempt revision loop
- When any invariant fails, the skill must: **(a)** log the failure, **(b)** attempt one revision if reasonable, **(c)** escalate to creator if revision fails

## Version

`INVARIANTS.md v1.0.0 — 2026-05-03`

Any change to this file is a **sacred-formats change** requiring creator sign-off + re-test of every skill against the new rules. Do not edit without authorization.

---

*A Heuresis workspace template.*
