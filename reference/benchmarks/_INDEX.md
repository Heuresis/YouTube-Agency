# Benchmarks Index

> 8 niche benchmark files. Each documents typical structural performance bands for that niche. Bands are calibrated per-channel from real data over time; what's documented is the typical-channel envelope as starting calibration.

## Niche map

| Niche | RPM band typical | CTR band typical (long-form) | AVD band typical (15-min video) |
|---|---|---|---|
| [personal-finance](personal-finance.md) | $20–$35 | 5–8% | 45–52% APV |
| [business-education](business-education.md) | $30–$50 | 5–7% | 42–50% APV |
| [mindset-philosophy](mindset-philosophy.md) | $10–$18 | 5–8% | 50–60% APV |
| [tech-explainer](tech-explainer.md) | $15–$30 | 4–6% | 50–60% APV |
| [fitness-health](fitness-health.md) | $6–$12 | 6–9% | 50–58% APV (8-min) |
| [real-estate](real-estate.md) | $20–$40 | 5–8% | 43–52% APV |
| [productivity-career](productivity-career.md) | $12–$25 | 5–8% | 50–58% APV |
| [creator-economy](creator-economy.md) | $12–$22 | 5–9% | 48–55% APV |

## How to use these benchmarks

These benchmarks are the structural envelope for a typical channel in each niche. They are not promises; they are the calibration band for new channels (start in the floor band, expect to reach typical band over 6–18 months) and the diagnostic baseline for established channels (compare actual data to bands; below-band signals craft issue or audience-fit issue).

When running:
- **`/leak-audit`**: compare channel's actual CTR / AVD / RPM against the niche's bands; below-band signals trigger six-layer diagnostic
- **`/audit-retention`**: compare per-video AVD against the niche's band; below-floor triggers retention-postmortem playbook
- **`/kpi-dashboard`**: surface band positioning visually (channel is in floor / typical / upper band)
- **`/sponsor-fit`**: use the niche's sponsor CPM band as negotiation anchor

## Benchmark structure

Each niche file documents:
- **CTR ranges** by length-band (long-form, short-long, Shorts)
- **AVD ranges** by length-band (8-min, 15-min, 25-min, pinned VSL where relevant)
- **RPM bands** (platform monetization)
- **Sponsor CPM bands** (sponsorship monetization)
- **Retention curve archetypes** (which curves are dominant in this niche)
- **Recurring topic categories that perform** (the topic categories that consistently produce above-band performance)
- **Audience composition characteristics**
- **Conversion benchmarks** (for channels with back-end offers)
- **Regulatory considerations** (per niche)
- **Banned content patterns** (per niche)
- **Calibration note** (how to interpret the bands for the niche)

## Calibration discipline

Bands shift over time as:
- The platform's algorithm evolves
- The niche's competitive density shifts
- The advertiser pool's CPM bidding shifts
- Audience composition in the niche evolves

These benchmark files should be reviewed annually minimum. Major platform changes (algorithm shifts, monetization-policy changes) trigger immediate review.

The OS's library-compound mechanism feeds this directory — as channels in each niche operate over multiple cycles, the bands recalibrate from observed reality, and the benchmark files update.

## Niche selection note

If a creator's niche doesn't map cleanly to one of these 8, identify the closest niche and use its bands as approximate. The OS is designed for the bullseye categories of coach / creator / info-product owner / thought-leader operating in business-driven niches; some niches outside this scope (entertainment, gaming, lifestyle vlog, kids content) are not covered because they fall outside the OS's bullseye (INV-8 — scope guard).

## Cross-niche common patterns

A few patterns that hold across most niches in this catalog:

- **Authority-mode AVD typically beats reach-mode AVD by 5–10 percentage points** in the same channel. The narrower audience commits more deeply.
- **CTR typically inversely correlates with CPM band**. High-CPM niches (business, finance, real-estate) have lower CTR than low-CPM niches (fitness, lifestyle) because audiences are narrower.
- **Pinned VSL RPM is typically higher than channel average** because the audience watching a 35–60 minute pinned VSL is structurally more qualified.
- **Sponsor CPM typically tracks 1.5–3x platform RPM** across niches.
- **Conversion rates from view to application typically fall in the 0.5–3% band** for high-ticket back-end offers across niches.

---

*v1.0 — 2026-05-03. 8 niche benchmark files. The structural envelopes for typical channels. Recalibrate per-channel from real data.*

*A Heuresis workspace template.*
