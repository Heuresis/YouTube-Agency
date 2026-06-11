# STRATEGY — why the channel exists

> **The "why" layer.** One page that states the channel's job, the funnel it serves, the buyer it answers, the mode mix, the formats ranked, and what the channel will never make. Every other workspace doc executes this one. Reading order for the whole layer: **STRATEGY (why) → [VOICE](VOICE.md) (how it sounds) → [PROOF-BANK](PROOF-BANK.md) (what's true) → [CONTENT-ENGINE](CONTENT-ENGINE.md) (what shape it takes).**
>
> Fill every `{{slot}}`. Worked examples are invented calibration targets — delete each one as you fill its section.

---

## 1. The channel job statement (one paragraph)

*Write one paragraph that names: what the business sells, what the channel's job inside that business is, who the one buyer is, and the one question the channel answers for them. If you can't name the question, the channel doesn't have a job yet — run `/build-niche` → `/build-audience` → `/design-offer` first (INV-2: foundations before content).*

{{channel_job_statement}}

> **Worked example (generic — invented B2B-services founder, replace):** The business sells a $7,500 done-with-you retention program to e-commerce founders doing $1–10M/yr. The channel is the proof layer of that funnel: where a skeptical buyer lands after a referral or an ad, before the sales call, asking one question — *"has this operator actually done this for a store like mine?"* Every video answers that question with a receipt on screen.

---

## 2. The funnel + the buyer

*Map the spine the channel serves: which surface gets attention, which surface sells, where YouTube sits, what closes. A channel without a funnel position drifts into making content for the algorithm instead of the buyer.*

```
ATTENTION                  SELL                      RESEARCH / NURTURE          CLOSE
─────────                  ────                      ──────────────────          ─────
{{attention_surfaces}}  →  {{selling_mechanism}}  →  ►► YOUTUBE ◄◄           →  {{close_mechanism}}
                                                     ({{youtube_job_one_line}})
```

| Slot | Fill |
|---|---|
| **The buyer** | {{buyer_profile}} — *one line: who, revenue band, default awareness level, skepticism level* |
| **The buyer's path** | {{buyer_path}} — *the literal sequence: where they first see you → what they watch → what they click → what they buy* |
| **North-star metric** | {{north_star_metric}} — *what the channel is accountable to: subscriber growth, conversion assist, booked calls, watch-to-application rate. Views are usually a secondary signal — pick deliberately, and encode the same answer in `/kpi-dashboard` (see [CALIBRATION.md §3](CALIBRATION.md)).* |

> **Worked example (generic):** Attention = LinkedIn posts + a weekly newsletter → Sell = a monthly live workshop → YouTube = bottom-funnel proof ("watch the operator work") → Close = a 30-minute audit call. Buyer: e-commerce founder, $1–10M, solution-aware, allergic to guru promises. North star: conversion assist — does a lead who watched 2+ videos show up to the call warmer and close at a higher rate.

---

## 3. The mode mix

*Canonical taxonomy: **authority | reach | hybrid** (INV-12 — every video declares its mode). If your channel renames the modes, declare the mapping once in [CALIBRATION.md §1.1](CALIBRATION.md) — the rename propagates to every skill. Set the percentages with `/content-mix-strategy` (frameworks: [`dual-mode-content-strategy`](../reference/frameworks/dual-mode-content-strategy.md), [`brand-pillar-split`](../reference/frameworks/brand-pillar-split.md)), then mirror the numbers into [`company.yaml`](../company.yaml) → `content_engine.mode_mix` so the two never disagree.*

| Mode | % | What this mode does for THIS channel |
|---|---|---|
| **authority** | {{authority_pct}} | {{authority_job}} — *belief-installation, mechanism, proof; carries the real CTA* |
| **reach** | {{reach_pct}} | {{reach_job}} — *broad-appeal top of channel; must bridge to an authority video, never dead-end* |
| **hybrid** | {{hybrid_pct}} | {{hybrid_job}} — *story + mechanism mixes; the trust anchor* |

> **Worked example (generic):** 65 / 25 / 10. Authority carries the call-booking CTA; reach exists to keep discovery alive and route into the case-study playlist; hybrid is one founder-story video a month that new leads binge before a call.

---

## 4. Ranked content formats (build in this order)

*Rank the 4–6 formats this channel makes, highest-leverage first. Each row points at its archetype in [CONTENT-ENGINE.md](CONTENT-ENGINE.md) and the [PROOF-BANK](PROOF-BANK.md) section that feeds it. Priority means: when filming time is scarce, the top row wins.*

| Rank | Format | Mode | Archetype | Fed by |
|---|---|---|---|---|
| 1 | {{format_1}} | {{mode}} | CONTENT-ENGINE §Format-{{n}} | PROOF-BANK §{{n}} |
| 2 | {{format_2}} | {{mode}} | CONTENT-ENGINE §Format-{{n}} | PROOF-BANK §{{n}} |
| 3 | {{format_3}} | {{mode}} | CONTENT-ENGINE §Format-{{n}} | PROOF-BANK §{{n}} |
| 4 | {{format_4}} | {{mode}} | CONTENT-ENGINE §Format-{{n}} | PROOF-BANK §{{n}} |
| 5 | {{format_5}} | {{mode}} | CONTENT-ENGINE §Format-{{n}} | PROOF-BANK §{{n}} |

> **Worked example (generic):** 1. Client case study (authority, Format 1, PROOF-BANK §2) · 2. Mechanism teardown (authority, Format 2, §3) · 3. Live store audit (hybrid, Format 3, §4) · 4. Pricing/operator reality (authority, Format 4, §2 ladder + §6) · 5. Founder story (reach, Format 5, §1).

---

## 5. The kill list — what this channel does NOT make

*Name the content types that would get views but damage the channel's actual job. Be specific about WHY each is banned — future sessions will be tempted. Every `/idea-farm` run checks candidate ideas against this list before they reach the slate.*

- ❌ {{killed_format_1}} — {{why}}
- ❌ {{killed_format_2}} — {{why}}
- ❌ {{killed_format_3}} — {{why}}

> **Worked example (generic):** ❌ "Best email tools 2026" listicles — funnels cheap beginner traffic that will never buy a $7,500 program, and signals beginner-channel to the real buyer. ❌ Trend-jacking news reactions — off-job; the buyer isn't researching news. ❌ Beginner tutorials — the buyer already runs a store; beginner framing tells them "this isn't for me."

---

## 6. The positioning wedge

*From competitor research (`/research-brief` extends this section): what do the 3–5 visible competitors in the niche all do, and what does NONE of them do that your buyer needs? That gap is the wedge — it should map directly onto your rank-1 and rank-2 formats above.*

- **Competitors profiled:** {{competitor_list}}
- **What they all do:** {{shared_pattern}}
- **The white space:** {{wedge}}
- **Formats proven in the niche worth adapting (not copying):** {{proven_niche_formats}}

> **Worked example (generic):** Every visible retention-niche channel teaches flow setups; none shows a real client's revenue-per-send before/after with the invoice. The wedge: "this store paid us $4,800 — here's the rebuild and the number it moved."

---

## 7. Language discipline (pointer)

The buyer determines the register. The full rule set — the spoken-voice rules, the phase-vocabulary table (plain-spoken vs reserved), the banned list — lives in [VOICE.md](VOICE.md). **Read it before writing a line.** The five voice gates every output must pass are specified in [`spec/voice-gates.md`](../spec/voice-gates.md).

---

## 8. The operating calendar (milestones)

*The next 2–4 weeks, two columns: what the creator films/records, and what the operator/system builds. Re-write this section each cycle; move completed rows into [STATUS.md](STATUS.md).*

| When | Creator films / records | Operator / system |
|---|---|---|
| {{week_1}} | {{creator_deliverables}} | {{system_deliverables}} |
| {{week_2}} | {{creator_deliverables}} | {{system_deliverables}} |
| {{ongoing}} | {{standing_creator_job}} | {{standing_system_job}} |

> **Worked example (generic):** Week 1 — creator films the first case-study video (proof-gated, see PROOF-BANK §Proof-gather todo); system drafts titles + thumbnail briefs. Week 2 — creator films the pricing-reality video; system cascades video 1 via `/repurposing-cascade`. Ongoing — creator's standing job is one authority video a week + guest podcasts.

---

## 9. Forkability

This operating layer is built to be pointed at another creator. To fork: **swap** [PROOF-BANK.md](PROOF-BANK.md) + [VOICE.md](VOICE.md) + the offer; **keep** this STRATEGY (re-tune §3's mix and §2's funnel) + [CONTENT-ENGINE.md](CONTENT-ENGINE.md) + [`prompts/`](prompts/). The generators are creator-agnostic; the proof and the voice are the instance.

---

*Template v1 — once filled, stamp your own: `v1 — {{date}} — encoded from {{sources}}`.*

*A Heuresis workspace template.*
