# YouTube long-form

> The primary platform. The format the YouTube Content OS is calibrated to. This document covers algorithm signals, the click-and-stay window, retention curve archetypes, end-screen mechanics, cards, premieres, members-only, and monetization (RPM). It does not cover Shorts (see youtube-shorts.md), Live (see youtube-live.md), or Community tab (see youtube-community.md).

## What "long-form" means in 2026

Long-form is anything ≥ 8 minutes for monetization purposes (the mid-roll-ad eligibility floor that has shaped the platform since 2018), and 10–35 minutes for what most authority creators publish as their core content. Sub-categories:

- **Short-long** (4–8 minutes) — entry-level long-form, often used for tightly-scoped how-to or contrast content; below the mid-roll threshold but eligible for pre-roll and end-roll ads
- **Mid-long** (8–18 minutes) — the platform's sweet spot for general audience long-form; mid-roll ads enabled, retention curves typical
- **Long** (18–35 minutes) — authority video, deep tutorials, podcasts, narrative content; mid-roll ads multiple, long-tail-leaning
- **Extra-long** (35–90 minutes) — deep authority content, full pinned VSLs, podcast episodes; the platform tolerates these well in 2026 if AVD is durable

Length is downstream of the topic. The OS does not pad short topics into long videos to chase mid-roll ads; the cost in retention drag is higher than the ad-revenue gain.

## Algorithm signals (as observed structurally in 2026)

The algorithm's job is to predict which video will produce the most session watch-time when surfaced to a given viewer. The dominant signals it uses, listed in approximate weight order:

### Click-through rate (CTR)

The percentage of impressions (the number of times a thumbnail+title was shown) that resulted in a click. Channel-level CTR varies by niche; structural ranges (calibrated per-channel from the channel's actual data over time):

- **Entertainment / lifestyle / reach-mode**: typical bands around 8–14% on home-feed impressions
- **Business / finance / education / authority-mode**: typical bands around 4–8% (lower because the audience is narrower)
- **B2B / niche-tech / specialized**: typical bands around 3–6%
- **Below 3% across most surfaces**: typically signals a title-thumbnail-promise problem (INV-10) or a wrong-niche fit; diagnose before publishing more

CTR is the gating signal — without acceptable CTR, the algorithm doesn't surface the video to enough impressions for the other signals to matter. The first 24–48 hours of CTR data is the most consequential window.

### Average view duration (AVD) and average percentage viewed (APV)

How long the viewer stays. Two related metrics:

- **AVD** (in seconds or minutes): the absolute average viewing time
- **APV** (as %): AVD divided by total video length

Both matter; APV is what the algorithm weighs for retention quality (independent of length), AVD is what mid-roll-ad revenue depends on. Structural ranges:

- **Authority long-form (8–25 min)**: target APV ≥ 50%, floor band 40–45%
- **Reach long-form (4–10 min)**: target APV ≥ 55%, floor band 45–50%
- **Extra-long (25–60 min)**: target APV ≥ 40%, floor band 30–35%

Below the floor band, the algorithm reduces surfacing. INV-9 enforces the retention floor pre-publish.

### Session start vs session continuation

The algorithm distinguishes between videos that start a viewing session (the viewer's first video on YouTube that day or hour) and videos that continue a session (the viewer is already on YouTube and this video is the next pick). Session-start videos earn more weight per view than session-continuation videos. Implication: hooks must work for cold viewers who just opened the app, not just for warm viewers in a binge.

### Browse vs search vs suggested traffic

Three primary surfaces:

- **Browse** (home feed) — the algorithm pushes the video to a viewer based on watch history, channel subscriptions, and platform signals. The dominant traffic source for established channels.
- **Search** — viewers type a query; the video is returned. Smaller absolute volume but higher intent — search traffic is product-aware → most-aware on the awareness spectrum and converts well to back-end offers.
- **Suggested** (sidebar / next-up / end-screen) — the video is surfaced next to a related video. Volume varies wildly; success depends on the related video's traffic.

Different videos get different traffic-source mixes. Authority videos with specific titles get more search traffic; reach videos with viral structure get more browse traffic; sequence videos get more suggested traffic. The library compounds as the suggested-traffic graph thickens.

### Subscriber feed

Subscribers see new uploads in their subscription feed and home feed. Subscriber-only views are not the dominant lever (most views come from broader algorithmic surfacing), but subscriber engagement is a leading indicator — high subscriber CTR/AVD signals the algorithm to push the video broader.

### Engagement signals

Likes, comments, shares, save-to-playlist, and "not interested" feedback. Comments weighted heaviest among these; shares second. Likes are noisy — high-quality and low-quality videos both get likes. The "not interested" signal is a hard down-vote and matters more than people realize for early surfacing.

## The click-and-stay window

The first 30 seconds determines whether the algorithm continues to push the video. Structurally:

- **0:00–0:08** (the click-confirmation window) — the viewer just clicked; they're verifying the title's promise. Hook must deliver what the title and thumbnail promised within 8 seconds. INV-10 enforces the alignment.
- **0:08–0:30** (the commit window) — the viewer decides whether to stay for the body. Loop must be open by 0:08 (INV-11) and the bound-promise / curiosity-gap / contrarian-frame must be active.
- **0:30–1:00** (the retention-floor window) — by 1:00, the typical channel loses 20–35% of viewers. The OS calibrates the floor per-channel; INV-9 prevents shipping below it.

A click-and-stay rate (the % of clickers who watch past 30s) below 60% on long-form generally signals a hook problem; below 50% signals a title-thumbnail-promise mismatch.

## Retention curve archetypes

Retention curves are not random; they fall into recognizable patterns. The OS uses six archetypes:

### 1. The clean staircase

AVD drops steadily through the video, with small recoveries at section transitions. This is the analytical-explainer's typical curve — information density holds the viewer, but no narrative cliffhangers cause sharp recoveries. APV typically 50–60%.

### 2. The narrative climb

AVD drops through the first half, then climbs through the resolution. This is the story-driven creator's curve — viewers commit to find out how the story resolves. APV often 55–65% on a 12-minute video.

### 3. The contrast-stack flat

AVD stays flat across the body because the contrast format produces uniform engagement at each section transition. This is the contrast-format viral specialist's curve — high CTR, high APV, viral surface. APV often 50–55% on shorter (6–10 minute) videos.

### 4. The objection-reversal staircase

AVD steps up at each objection-reversal as the viewer gets the next "aha." This is the contrarian-narrator's curve. Distinct visual: small upticks at regular intervals (60–120 seconds apart). APV typically 55–65%.

### 5. The screen-recording slow burn

AVD drops more steeply early (some viewers leave when they realize the video is screen-recording-heavy), then holds flat through the demonstration. This is the productivity systems builder's curve. APV often 45–55% on a 20-minute video.

### 6. The pinned-VSL trough-and-recovery

AVD drops through the price-anchoring section (around 60–70% mark), then recovers through the close. The drop is structural — viewers who dropped at price-anchoring weren't going to convert anyway. The recovery indicates the audience that did stay through price-anchoring is the converting audience. This is the long-form-VSL specialist's pinned-VSL curve.

When a video's curve doesn't match an expected archetype, run `/audit-retention` for diagnosis. The mismatch is signal — a story-driven video with a clean-staircase curve indicates the narrative didn't land; a pinned VSL with a clean staircase indicates the price-anchoring is too soft.

## End-screen mechanics

End screens appear in the last 5–20 seconds of the video. Up to 4 elements (next-video, playlist, subscribe, channel link). End-screen click-through rate (the % of viewers who reach the end-screen and click an element) varies:

- **Authority videos in a series**: 20–35% end-screen CTR if the next-video is the natural sequel
- **Reach videos surfacing to broad audiences**: 5–15% end-screen CTR
- **Pinned VSL with application CTA**: end-screen routes to application form; CTR irrelevant — the video's body did the conversion

End-screen logic is not "the algorithm-suggested next-most-likely video." It is the channel's belief-installation path. The end-screen routes the viewer to the next video the channel architecture says they should watch, not the one the algorithm guesses.

## Cards

Cards appear in the top-right of the player at scheduled timestamps. 1–3 cards per video typical. Used for:

- **Mid-video reference** to a related video or playlist (when the viewer would want it)
- **Disclosure-supplement** (sponsorship / affiliate links — INV-15)
- **Lead-magnet bridge** (link to gated content or email capture)

Card click-through rates are low (typically 0.5–2.5%). Cards are not a high-leverage lever; they are an occasional micro-routing tool.

## Premieres

A premiere is a scheduled video release with a live-chat element during the first viewing. Used by some creators; ignored by most. Mechanics:

- **Pre-premiere** — viewers can set reminders; the premiere appears in the subscription feed
- **Live premiere** — viewers watch together with a live chat; the creator can be present in chat
- **Post-premiere** — the video continues as a normal upload

Premieres trade some algorithmic surfacing optimization for community engagement. Typically used for: highly-anticipated content (e.g., a major reveal), community-led channels with active chat audiences, or creators who want a launch-event feel for a video.

## Members-only

Channel memberships allow tiered subscriber benefits — exclusive videos, behind-the-scenes, perks, badges. Members-only content is gated; it does not appear in public algorithmic surfacing. Used by:

- **Mid-sized channels (10K–500K subs)** as a recurring revenue layer ($5–$50/mo per member)
- **Niche channels with deep parasocial trust** where the audience converts to membership at higher rates

Membership conversion rates structurally fall in the 0.5–3% of subscriber count band, with niche-trust channels reaching higher.

## Monetization (RPM)

RPM = revenue per mille (per 1,000 views), after YouTube's revenue share. The channel sees ~55% of advertiser CPM. Structural RPM bands by niche (typical, calibrated per-channel from the channel's actual data over time):

- **Personal finance / investing**: $20–$45 RPM (high-CPM advertiser pool, qualified audience)
- **Business / B2B / sales / agency**: $25–$60 RPM (highest CPM band; advertiser pool includes SaaS, B2B services, education programs)
- **Tech / software / dev tools**: $15–$40 RPM
- **Real estate / mortgage / wealth**: $20–$50 RPM
- **Productivity / career / professional**: $12–$30 RPM
- **Mindset / philosophy / self-improvement**: $8–$20 RPM
- **Creator economy / marketing**: $10–$25 RPM
- **Fitness / health / wellness**: $6–$15 RPM (regulated CPM is lower than business)
- **Entertainment / lifestyle / vlog**: $2–$8 RPM (broadest audience, lowest CPM)

These bands are structural. The channel's actual RPM is calibrated against the bands over time. Above-band RPM signals strong audience qualification; below-band RPM signals an off-niche or off-quality issue.

For high-CPM niches with a high-ticket back-end offer, ad revenue is typically the smallest of three revenue layers — back-end offer + sponsorships + ads, in that order. Channels that lead with ad revenue as the primary monetization are typically not the OS's bullseye (see INV-8 — scope guard).

## Long-form publication cadence

Cadence ranges that work for the archetypes in this OS:

- **Weekly** — the standard for most authority channels. Predictable, sustainable, builds anticipation.
- **Biweekly** — common for high-production-value channels (analytical-explainer, productivity-systems-builder, contrast-format-viral-specialist). Reduces production burnout; lets each video be sharper.
- **Twice-weekly** — for high-velocity reach-mode channels. Hard to sustain at quality.
- **Irregular but regular within ranges** — some authority channels publish 2–4 videos a month with deliberate gaps for production-heavy content. Works if the channel's parasocial-trust contract supports it.

Daily long-form is structurally unsustainable for the archetypes in this OS — the production cost compresses quality below threshold within months.

## Library hygiene

The long-form library is the channel's compounding asset. Hygiene operations that matter:

- **Broken-link audits** — annual sweep of pinned-comment links, description links, end-screen links
- **Tool-version updates** — for productivity-systems-builder and tech archetypes: a "this video uses an old version" pinned comment with a link to the updated tutorial
- **Title and thumbnail revisions** — for evergreen videos where the original title/thumbnail underperformed; revise after 90 days when traffic patterns are stable
- **Playlist re-ordering** — as new videos enter playlists, the order should reflect the channel architecture's current sequencing, not historical order
- **Archive / unlist of off-brand videos** — videos that no longer fit the channel's positioning; unlisting is preferable to deleting (preserves view-count history)

Hygiene is operations work. Run quarterly minimum.

## What this document doesn't cover

Shorts mechanics: see `youtube-shorts.md`. Live-streaming: see `youtube-live.md`. Community tab and post-type strategy: see `youtube-community.md`. Adapter-level integration with YouTube Studio API: see `reference/integrations/youtube-studio.md`.

---

*v1.0 — 2026-05-03. The primary platform's mechanics, calibrated for coach / creator / info-product channels.*

*A Heuresis workspace template.*
