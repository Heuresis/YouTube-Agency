# PROOF-BANK — the verifiable claim library

> **The "what's true" layer.** The single source of truth for every number, client result, and story that appears in a video, short, caption, or email. Third in the reading order: [STRATEGY](STRATEGY.md) (why) → [VOICE](VOICE.md) (how it sounds) → **PROOF-BANK (what's true)** → [CONTENT-ENGINE](CONTENT-ENGINE.md) (what shape it takes).
>
> **Hard rules:**
> - **Never invent a number** ([INV-6](../INVARIANTS.md)). Every figure that goes on screen traces to a `[VERIFIED]` row below, or it appears in the script as a `[CREATOR: confirm X]` slot — not as a fact.
> - **Every claim survives the 30-second screenshot test** ([INV-5](../INVARIANTS.md)).
> - **The filming gate: a video cannot leave [`pipeline/`](pipeline/) for filming until every proof row it cites is `[VERIFIED]`.** `/publish-checklist` enforces this; [`film-this-week/`](film-this-week/) only holds proof-gated scripts. One fuzzy number, caught by one skeptical buyer, costs more than the video earns.
>
> Fill every `{{slot}}`, tag every line. Worked examples are invented — delete each as you fill.

---

## Status legend (canonical — do not rename)

| Tag | Meaning | Can it go on screen as fact? |
|---|---|---|
| `[VERIFIED]` | Traced to a creator-authored source or artifact: invoice, dashboard, platform analytics, signed testimonial, public post. | **Yes.** |
| `[CONFIRM]` | Plausible — appears in a draft or secondhand source, not yet traced to an artifact. | **No.** Appears in scripts only as a `[CREATOR: confirm X]` slot. |
| `[NEEDS-PROOF]` | The artifact does not exist yet (a placeholder, a "get the screenshot" note). | **No.** Collect the asset first — log it in **§ Proof-gather todo** below. |

*Channel-specific intermediate tags (e.g. for templated examples not yet tied to a real client) may be added — declare them in [CALIBRATION.md §1.3](CALIBRATION.md). The gate never moves: only `[VERIFIED]` films.*

---

## 1. Creator + business self-proof

*The identity facts, the arc, and the current state of the business — each line tagged. This section feeds founder/story videos (Format 5) and the story beats in [VOICE §10](VOICE.md). Standardize spellings of every business and product name here, once — inconsistent names on screen read as fake.*

**Identity**
- {{identity_fact_1}} `[{{tag}}]`
- {{identity_fact_2}} `[{{tag}}]`

**The arc** *(one line per story beat that states a checkable fact)*
- {{arc_fact_1}} `[{{tag}}]`
- {{arc_fact_2}} `[{{tag}}]`

**Current state** *(revenue bands, client counts, audience sizes — with date, because these go stale)*
- {{current_state_1}} `[{{tag}}]` — *as of {{date}}*
- {{current_state_2}} `[{{tag}}]` — *as of {{date}}*

**The businesses** *(canonical spellings + handles, one line each)*
- {{business_1}} — {{what_it_is}}
- {{business_2}} — {{what_it_is}}

> **Worked example (generic):** "Ran client accounts at a mid-size agency for 6 years before founding" `[VERIFIED — public LinkedIn]` · "First retainer closed 60 days after going independent" `[CONFIRM — in a draft, no artifact yet]` · "Agency at 11 active retainers as of 2026-05" `[VERIFIED — CRM screenshot]`.

---

## 2. Client results — the case-study fuel

*The core table. Each row is a potential video (CONTENT-ENGINE Format 1). The math that makes a row land is **workflow × frequency × cost** — name the bleed in dollars before naming the fix. Rows enter as `[CONFIRM]` or `[NEEDS-PROOF]` and are promoted to `[VERIFIED]` when tied to a real invoice/dashboard — that promotion is what unlocks filming.*

| # | Segment | Problem (the bleed + cost math) | Fix (the stack) | Price | Result | Status |
|---|---|---|---|---|---|---|
| 1 | {{segment}} | {{bleed_with_math}} | {{stack}} | {{price}} | {{result}} | `[{{tag}}]` |
| 2 | {{segment}} | {{bleed_with_math}} | {{stack}} | {{price}} | {{result}} | `[{{tag}}]` |
| 3 | {{segment}} | {{bleed_with_math}} | {{stack}} | {{price}} | {{result}} | `[{{tag}}]` |

**The pricing ladder these rows ascend** *(the story that lets one case study sell the next tier)*
- **Entry fix** — {{scope}} at {{price_band}}. Ships fast; proves delivery.
- **Mid build** — {{scope}} at {{price_band}}.
- **Flagship** — {{scope}} at {{price_band}} {{+retainer}}.

> **Worked example (generic):** Row — DTC skincare brand · "win-back + abandoned-cart flows dead for 8 months; at their AOV that's ≈ $9,400/mo unmailed revenue" · 6-flow rebuild on the email platform + SMS join · $4,800 · "+$9,400/mo attributable within 60 days" · `[CONFIRM — promote when the client dashboard screenshot lands]`. Ladder — audit $1,500 → flow rebuild $4,800 → full lifecycle program $21,000 + $1,200/mo.

---

## 3. Mechanism / build proof — "show me it's real"

*Claims provable by simply showing the screen: the system, the architecture, the process. This feeds CONTENT-ENGINE Format 2 (Mechanism). List every screen-recordable artifact the channel can lean on, tagged.*

- {{mechanism_artifact_1}} `[{{tag}}]` — *e.g. the internal dashboard, the template library, the build process*
- {{mechanism_artifact_2}} `[{{tag}}]`
- {{acquisition_truth}} `[{{tag}}]` — *how clients actually arrive (the honest origin story of the channel's "why trust me")*

> **Worked example (generic):** "The 14-point store-audit checklist, run live on screen" `[VERIFIED — it exists, record it]` · "First 9 clients came inbound from posts; cold outreach closed zero" `[VERIFIED — CRM source field]`.

---

## 4. The signature live demo

*The repeatable "watch me think" format — unscriptable proof of expertise (CONTENT-ENGINE Format 3). Name the demo, the framework it applies, and why it can't be faked.*

- **The demo:** {{demo_description}} `[{{tag}}]`
- **The lens it applies:** {{diagnostic_framework}} — *should match the diagnostic frame in [VOICE §7](VOICE.md)*

> **Worked example (generic):** "Drop your store URL in the comments — I'll run the five-leak teardown live": pull the public site, walk pop-up → welcome flow → cart → post-purchase → win-back, rank the leaks by dollar impact, name what the fix would cost.

---

## 5. Platform performance data — what the audience already voted on

*Top performing posts/videos across platforms, with the lesson each one teaches. This is `[VERIFIED]` by definition (public numbers) — date it. Feeds `/idea-farm` and the short-form formats in [CONTENT-ENGINE](CONTENT-ENGINE.md).*

| Post / video | Platform | Views | The lesson |
|---|---|---|---|
| {{post_1}} | {{platform}} | {{views}} | {{lesson}} |
| {{post_2}} | {{platform}} | {{views}} | {{lesson}} |

> **Worked example (generic):** "Screen-recording of a real flow audit, no intro, no music" · LinkedIn · 84K impressions · lesson: raw artifact + zero polish outperforms produced explainers — extend this on YouTube, don't fight it.

---

## 6. The offer — reconcile before any pricing claim

*If multiple price structures float across sources (deck vs site vs what sales actually quotes), reconcile them HERE before any video states a price. The program price and the client-build pricing ladder (§2) are different numbers — keep them distinct on screen.*

- **The offer:** {{offer_name}} — {{structure}} `[{{tag}}]`
- **Price as stated where:** {{source_a}}: {{price}} · {{source_b}}: {{price}} — **locked answer:** {{locked_price_or_CONFIRM_slot}}
- **Client-build pricing (public bands):** {{bands}} `[{{tag}}]`

> **Worked example (generic):** Site says "from $5K," the deck says $7,500, sales quotes $7,500 — locked: **$7,500 done-with-you** `[VERIFIED — current checkout]`. Client builds quoted in bands: $1.5K audit / $4–6K rebuild / $18–24K program.

---

## 7. The honesty layer — what protects the channel

*The disclosure discipline that keeps claims legal (FTC + platform policy) and credible. INV-5/INV-6 are the floor; this section is the channel's specific application.*

- **The median disclosure** *(attach to ANY income/results claim about students or clients, verbatim or close):* {{median_disclosure_statement}}
- **Claim-type discipline:** client ROI ("recovered $X/mo," tied to a §2 row) ≠ student/customer income claims. {{channel_specific_rules}}
- **Never publish as fact until verified:** any `[$X]` placeholder, "made us millions"-class lines, and any aggregate claim without a dated source.

> **Worked example (generic):** "Most clients don't see results in week one; the median flow rebuild pays back in 45–90 days, and stores under 10K subscribers usually shouldn't buy this" — said on camera, on purpose. Disqualification is proof.

---

## Proof-gather todo

> **The final section, always. This is the highest-value work in the workspace.** Every `[CONFIRM]` and `[NEEDS-PROOF]` above generates a gather task here, priority-ordered by which videos it unblocks. Closing a gather task promotes a row to `[VERIFIED]` — which is what moves a video from [`pipeline/`](pipeline/) to [`film-this-week/`](film-this-week/).

| Priority | Gather task | Unblocks | Status |
|---|---|---|---|
| 1 | {{gather_task_1}} — *e.g. invoice/dashboard screenshot, names redacted* | {{video_or_row}} | ☐ |
| 2 | {{gather_task_2}} | {{video_or_row}} | ☐ |
| 3 | {{gather_task_3}} | {{video_or_row}} | ☐ |
| 4 | {{resolve_inconsistencies}} — *conflicting spellings, durations, counts across sources: list and lock each* | everything | ☐ |

**Discipline:** when a proof asset lands, add it to the relevant section with a `[VERIFIED]` tag and a date, and check it off here. Scripts cite this file **by row** — never from memory.

> **Worked example (generic):** 1. Client dashboard screenshot showing the +$9,400/mo attribution (unblocks §2 row 1 → the first case-study video) ☐ · 2. Two redacted invoices, one entry-tier one flagship (unblocks the pricing-reality video) ☐ · 3. Permissioned testimonial with a real number (unblocks the offer page + VSL) ☐.

---

*Template v1 — once filled, stamp your own: `v1 — {{date}} — built from {{sources}}`. The §2 table is the content backlog; § Proof-gather todo is what makes it real.*

*A Heuresis workspace template.*
