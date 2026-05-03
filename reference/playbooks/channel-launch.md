# Channel Launch — Months 0–3

> The 90-day playbook for launching a new YouTube channel calibrated to convert into an owned offer (coaching / mastermind / info-product / agency service). This playbook assumes the operator already has a defined niche, a defined audience, and a back-end offer (the strategic-layer foundations are pre-existing). What's being launched is the channel itself: the foundational playlist, the first videos, the pinned VSL deployment, and the leak-audit cadence that catches early failures before they compound.

## Pre-launch prerequisites

Before Day 0, the following must be in place:

1. **Niche locked** — `/build-niche` complete. Primary niche, sub-niche, adjacent reach niches, out-of-scope topics defined.
2. **Audience compartment ≥ 60%** — `/build-audience` complete enough to script. Voice-of-viewer phrases captured. Limiting belief diagnosed. Awareness-level distribution mapped.
3. **Offer architecture ≥ 60%** — `/design-offer` complete enough to determine how the channel monetizes. Back-end offer named, priced, qualified.
4. **Creator voice extracted ≥ 50%** — `/extract-creator-voice` complete. Brand voice architecture, on-camera persona, parasocial-trust contract documented.
5. **Channel architecture sketched** — `/build-channel-architecture` complete. Foundational playlist named. Pillar playlists defined. Belief-installation path mapped.

Without these, the channel launches into the void. The OS gates this — without 60% completeness on the strategic-layer compartments, channel-launch refuses to execute.

## Month 0 — Setup and first 3 videos

### Week 1 — Channel infrastructure

**Day 1–3: Channel setup**
- Channel name, handle, description, banner, profile image
- About-section copy (one-paragraph positioning + 6 Differentiation Paths reflection + back-end offer link)
- Channel trailer plan (recorded in week 2)
- Featured-section plan (which videos go here when they exist)

**Day 4–5: Tech stack**
- Recording setup (camera, audio, lighting baseline)
- Editing pipeline decided (in-house vs editor, software, file management)
- Thumbnail design system locked (`production_and_post.thumbnail_design_system`)
- Title-thumbnail-promise alignment protocol established (INV-10)
- YouTube Studio configured, integration adapter wired (see `reference/integrations/youtube-studio.md`)

**Day 6–7: Content engine setup**
- `/idea-farm` populated with 30+ initial ideas, mapped to content pillars
- Content calendar template selected (Notion / Airtable / similar)
- Research-brief template (`reference/templates/research-brief.md`) staged for use

### Week 2 — Foundational content

The first 3 videos build the channel's identity, demonstrate the differentiation thesis, and seed the foundational playlist.

**Video 1: The channel-thesis video**
- 6–12 minutes
- Authority mode
- Awareness target: solution-aware (the audience knows the problem and is open to a different framing)
- Hook: the channel's central thesis, stated clearly. "Most people in [niche] tell you X. Here's what I think instead." Or: "There's a question that everyone in [niche] avoids. Here's why it matters."
- Body: walk through the operator's worldview, the differentiation thesis, what the channel will and won't cover
- Close: identity-aspirational close, light invitation to subscribe (no offer pitch yet — the back-end isn't built into the channel architecture yet)
- This video becomes the anchor of the foundational playlist

**Video 2: The mechanism / framework introduction**
- 8–15 minutes
- Authority mode
- Awareness target: solution-aware → product-aware
- Hook: name the mechanism. "I built [named framework] over [years]. Here's how it works." Or: "Most people approach [problem] tactically. The structural lever is [named mechanism]."
- Body: introduce the mechanism, walk through its core operations, give one example
- Close: invitation to subscribe + soft preview of the next video that goes deeper on the mechanism
- This video introduces the channel's IP

**Video 3: The case-study or proof video**
- 10–18 minutes
- Authority mode
- Awareness target: product-aware
- Hook: a specific outcome, named with anonymized specificity. "Here's how a [segment] operator went from [before-state] to [after-state] in [time-frame]."
- Body: case-study spine (background → challenge → intervention → outcome → lesson)
- Close: identity-aspirational close + invitation to subscribe + link to channel-thesis video (Video 1)
- This video is the social-proof anchor

These three videos form the foundational playlist. Later videos route end-screens to one of these three depending on the viewer's awareness level.

### Week 3 — Channel trailer and first-publish prep

- **Channel trailer**: 60–90 second video that pitches the channel to non-subscribers landing on the channel page. Hook + thesis + invitation. This plays automatically for non-subscribers.
- **Featured section setup**: Foundational playlist + Channel trailer at top. Pillar playlists below.
- **Publish-checklist drill**: walk through `reference/templates/publish-checklist.md` for Video 1 dry-run

### Week 4 — Publish Video 1

- Publish day: Tuesday or Wednesday morning typical (avoid Friday/weekend for authority videos)
- First-hour-only comment engagement strategy (see `youtube-community.md`)
- Pinned comment with link to lead-magnet (if exists) or "more videos like this coming next week"
- Title-thumbnail-promise alignment audit BEFORE publish (INV-10)
- Retention floor check before approving (INV-9)
- Verification gates: triple-layer + truth gate + banned-vocabulary scan

## Month 1 — Cadence establishment + leak audit

### Weeks 5–8: Publish Videos 2–5

Cadence: 1 video per week, every week. No exceptions in month 1. The audience needs predictability; the algorithm needs cadence signal.

**Week 5: Publish Video 2** (mechanism / framework introduction)
**Week 6: Publish Video 3** (case study / proof)
**Week 7: Publish Video 4** — first reach-mode video
- 6–10 minutes
- Reach mode (broad-appeal, contrast or contrarian framing)
- Awareness target: problem-aware (broader than authority videos)
- Hook: contrast format or contrarian frame
- Body: structurally surprising; teaches a lesson but doesn't pitch the offer
- Close: end-screen routes to Video 1 (channel-thesis)
- Purpose: test reach-mode mechanics; pull non-target audience to see who clicks

**Week 8: Publish Video 5** — return to authority mode
- Authority video on a recurring channel theme
- Build out the channel's pillar playlists

### Week 8 (end-of-month-1) — First leak audit

Run `/leak-audit` for the first time. Six-layer diagnostic:

- **Audience layer**: Who's watching? Does the audience composition match the target ICP? (analytics: age, gender, geography, watch-time-by-video, traffic source)
- **Offer layer**: Does the back-end offer alignment hold up against the audience that actually showed? Any audience-offer mismatch surfaced?
- **Topic-Hook layer**: Click-through rate per video. Below 4% structurally signals title-thumbnail-promise issues. Above 8% structurally signals strong topic-fit.
- **Retention layer**: AVD per video. Below the floor band signals retention-engineering issues.
- **Distribution layer**: Traffic source per video. Browse vs Search vs Suggested. New channels typically get most traffic from Browse + Suggested in month 1; Search comes later.
- **Conversion layer**: Email list growth per video. (Pinned VSL is not deployed yet; conversion at month 1 is lead-magnet-bridge-driven only)

The first leak audit is diagnostic — surface what's working, what's not. Decide: do we need to revise the niche definition (audience layer leak)? do we need to refine hook craft (topic-hook layer leak)? do we need to revise retention engineering (retention layer leak)?

If the audit surfaces a critical leak (audience misfit, offer-content mismatch), pause new content and run the relevant upstream skill. The OS resists publishing into a known leak.

## Month 2 — Pinned VSL deployment + cadence continuation

### Weeks 9–12: Publish Videos 6–9 + deploy Pinned VSL

The cadence continues: 1 long-form per week. Mid-month 2, deploy the pinned VSL.

**Week 9: Publish Video 6** (authority, deeper mechanism content)
**Week 10: Publish Video 7** (reach video — second reach-mode test)
**Week 11: Deploy Pinned VSL**

The pinned VSL is the channel's conversion engine. See `reference/playbooks/pinned-vsl-deployment.md` for the full deployment playbook. Quick summary:
- 30–60 minute video, structure choice (15-step / 11-step / 8-belief) based on audience and offer
- Production approach: high-investment (one-shot, high-quality recording, no re-shoots without reason)
- Application-funnel build: form, qualifying questions, calendar tool, post-call sequence
- First-month performance benchmarking: target 1–3% video-to-application rate in month 1

**Week 12: Publish Video 8** (authority video that references the pinned VSL via end-screen)

### Week 12 (end-of-month-2) — Second leak audit

Same six-layer diagnostic, but now with conversion data:

- **Conversion layer is live**: applications received, application-to-call rate, call-to-close rate, cash collected
- Compare against benchmarks: target 1–3% video-to-application from authority videos in month 1; 0.5–1% from reach videos
- If the application-to-call rate is below 35%, the application is too weak (qualifying gate); if above 55%, the application is over-filtering. Adjust.
- If the call-to-close rate is below 25%, the pinned VSL is not installing the 8 beliefs adequately, OR the call script needs work. Run `/audit-retention` on the pinned VSL specifically.

## Month 3 — Library compounding + cadence sustainability

### Weeks 13–16: Publish Videos 9–12 + library hygiene

The cadence continues. The first quarter of content is now in the library. Library compounding begins.

**Week 13: Publish Video 9** (authority — pillar 1 deepening)
**Week 14: Publish Video 10** (reach — third reach-mode video; iterate based on month-2 reach learnings)
**Week 15: Publish Video 11** (authority — pillar 2 deepening)
**Week 16: Publish Video 12** (mixed — could be a community-led piece, a Q&A-driven content, or an audience-research-informed topic)

### Week 16 (end-of-month-3) — Third leak audit + library compound

The third leak audit is more substantive than the first two. By month 3:

- Channel has 12+ videos
- Pinned VSL has 4–6 weeks of conversion data
- Audience composition is more stable (initial-launch-spike viewers have churned out; durable audience remains)
- Browse / Search / Suggested traffic mix has stabilized
- Email list has 50–500 subs depending on niche / lead-magnet quality

Run `/library-compound` for the first time. Pattern extraction:
- Which videos performed above benchmark? Why structurally?
- Which videos performed below benchmark? Diagnose.
- Which hooks landed? Tier them in the hook bank.
- Which thumbnails performed? Update the thumbnail design system.
- Which retention curve archetypes are emerging? Calibrate the retention-floor (INV-9) per-channel from the first 3 months of data.

## Cadence after month 3

The channel transitions from launch mode to ongoing-operation mode. Cadence sustains at 1 long-form per week (or whatever the stable cadence is for the channel — see `youtube-long-form.md`). Leak audits move from monthly to weekly cadence. Library-compound runs weekly. The dual-mode mix calibrates: 60–70% authority, 30–40% reach typically; adjust per `/dual-mode-mix-shift.md`.

## Failure modes and prevention

### Cadence break

**Failure**: the operator skips a week in month 1 or 2. The audience expectation breaks; the algorithm de-prioritizes the channel.
**Prevention**: pre-record videos 2–3 weeks ahead. Buffer is cadence insurance.

### Premature offer pitch

**Failure**: the operator embeds the back-end offer pitch in early videos, before audience trust is built. The audience reads it as marketing, not value.
**Prevention**: the back-end offer is mentioned only in pinned VSL and end-screen. Authority videos in months 0–2 do not pitch the offer; they install belief.

### Niche drift

**Failure**: the operator publishes off-niche content in early months because they have a topic they're excited about. The audience composition becomes muddied; the algorithm can't classify the channel.
**Prevention**: out-of-scope list (from `/build-niche`) is a hard guard in months 0–3. Off-niche topics defer until the channel architecture is established.

### Production-quality variance

**Failure**: video 1 is high-production, video 5 is low-production. The audience perceives degradation; the parasocial-trust contract erodes.
**Prevention**: production baseline is set in week 1 and held constant. Quality is sustainable; perfection is not. Choose a production tier and hold it.

### Skipped retention-floor check

**Failure**: a video ships with predicted AVD below the channel's bottom-quartile band. It tanks; algorithmic surfacing dies; the channel's momentum stalls.
**Prevention**: INV-9 enforces. The retention floor check is non-negotiable in pre-publish.

### Skipped title-thumbnail-promise alignment check

**Failure**: the title and thumbnail promise X; the first 30 seconds delivers Y. Click-through is high; retention is low; the algorithm punishes the mismatch.
**Prevention**: INV-10 enforces. The alignment check is non-negotiable in pre-publish.

### Audience-research neglect

**Failure**: the operator publishes 12 videos in 3 months without doing audience research. The audience grows slowly; conversions are low.
**Prevention**: month-end leak audit + comment-capture protocol. The voice-of-viewer evidence captured in months 1–3 feeds compartment 2 and improves all subsequent skills.

## End-of-month-3 deliverables

By the end of month 3, the channel should have:
- 12+ published long-form videos
- Active pinned VSL with 4–6 weeks of conversion data
- 50–500 email subscribers (niche-dependent)
- 100–10,000 total subscribers (highly niche-dependent; broad reach niches grow faster)
- 3 leak audits completed
- 1 library-compound pass completed
- Hook bank tiered with the first round of performance data
- Calibrated retention-floor band specific to the channel
- Calibrated CTR benchmark band specific to the channel
- Thumbnail design system refined based on first 3 months
- A cadence the operator can sustain into month 4+

## Triggers for early cycle exit

If by the end of month 1 or 2 the leak audit surfaces a critical structural issue (audience misfit, offer-channel mismatch, niche drift, retention-floor failure), the channel-launch playbook may pause and route back to `/build-niche` or `/build-audience` or `/design-offer`. Iterating with broken upstream is compounding waste.

The OS resists "ship more content despite the leaks." When upstream is broken, fix upstream first.

---

*v1.0 — 2026-05-03. The 90-day launch playbook. Strategic-layer foundations assumed; channel infrastructure built here.*

*A Heuresis workspace template.*
