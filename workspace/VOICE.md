# VOICE — the one card to read before writing anything

> **The "how it sounds" layer.** Operating voice card for every script, hook, title, caption, short, and CTA the system produces. Sits second in the reading order: [STRATEGY](STRATEGY.md) (why) → **VOICE (how it sounds)** → [PROOF-BANK](PROOF-BANK.md) (what's true) → [CONTENT-ENGINE](CONTENT-ENGINE.md) (what shape it takes). Build it with `/extract-creator-voice`; the structured encoding mirrors into [`company.yaml`](../company.yaml) → `creator_identity_matrix`.
>
> Every output must pass the **five voice gates** (spec: [`spec/voice-gates.md`](../spec/voice-gates.md)): **banned-vocab clear · no spoken BUT/THEREFORE connectors · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7** ([`prompts/signal-check.md`](prompts/signal-check.md)).
>
> Fill every `{{slot}}`. Worked examples are invented — delete each as you fill its section.

---

## 1. Who the creator is (one paragraph)

*One paragraph a stranger could write the channel from: age/place if they're part of the brand, the credential (and the anti-credential — what they're NOT, if that's the edge), the arc in one line, the businesses, the energy, and the 1–2 beliefs they'll die on. This paragraph is the prior every generator starts from.*

{{creator_one_paragraph}}

> **Worked example (generic):** Mid-30s operator, ex-agency account lead, no growth-hacker pedigree — and that's the edge: everything taught was learned on live client accounts. Runs a retention agency for e-commerce brands plus a small done-with-you program. Dry, precise, allergic to hype. Two beliefs held to the death: the list is the asset (rented attention is a trap), and shipped beats perfect.

---

## 2. The parasocial trust contract

*What the creator promises every viewer, every video — and what they will never do regardless of CTR or revenue lift. This is the long-term asset (INV-16: no manufactured outrage, fake intimacy, or engagement-bait survives contact with this section). Mirror into `company.yaml` → `parasocial_trust_contract`.*

**Promises — every video:**
- {{promise_1}} — *e.g. real numbers with artifacts behind them, never theory*
- {{promise_2}}
- {{promise_3}}

**Never — regardless of what it would earn:**
- {{never_1}} — *e.g. revenue guarantees, fear-bait, fake urgency, countdown timers*
- {{never_2}}
- {{never_3}}

> **Worked example (generic):** Promises — every claim has a screenshot behind it; the failures get shown alongside the wins; no pitch before the mechanism has landed. Never — income guarantees; pretending the work is easy; scarcity theater; talking down to the audience.

---

## 3. The 14 spoken-voice hard rules

*These are the difference between a script that reads fine and a script that survives being said on camera. Rules 1–2, 4, 8–12, 14 are structural and apply to every creator. Rules 3, 5–7, 13 carry `{{slots}}` — fill them from real transcripts, not from memory.* **Read scripts out loud. If your mouth feels weird, the line is wrong.**

1. **Short sentences. Fragments are good.** 1–3 line beats, never essay paragraphs.
2. **Never use BUT / THEREFORE as mid-sentence connectors in spoken text.** Contrast lives in *rhythm*, not connectors. Structure the narrative with the [but/therefore engine](../reference/frameworks/but-therefore-narrative-engine.md); *speak* it without the connectors. (A standalone "But…" as its own beat is fine.)
3. **{{sentence_openers}}** — *how does the creator actually open beats? "And"-openers, "So look", "Okay"? Pull from transcripts.*
4. **Say key numbers in full** for believability: *"nine thousand four hundred dollars a month,"* not "$9.4K."
5. **One-word punchlines.** {{punchline_examples}} — *two or three the creator already uses.*
6. **Paired declaratives** for emphasis: *"{{paired_declarative_example}}"* — *flat statement, then its sharper twin.*
7. **The catchphrase — {{catchphrase}} — once per video, max.** Only when genuine. Never forced. (No catchphrase? Leave empty; do not invent one.)
8. **Specific + weird + memorable beats abstract.** A named detail outperforms a category every time.
9. **Implicit transitions.** Don't speak section headers. "Now here's where…" twice per video, max.
10. **Cold opens beat studio openers.** Lead with the moment *before* the realization. **Banned:** "In this video I'll show you…", "What's up everyone, welcome back," "Hit subscribe before we dive in."
11. **Show, don't claim.** Every claim pairs with an on-screen artifact — the dashboard, the invoice, the DM, the graph. (INV-5: every claim survives the 30-second screenshot test.)
12. **CTAs close with an imperative + image, not a question.** *"Bring your numbers. We'll find the leak."* — never *"so… do you want help with that?"*
13. **Self-aware asides keep it human.** {{aside_flavor}} — *what flavor of aside is in-character: self-deprecating, deadpan, nerdy? One per few minutes, max.*
14. **Earn the pitch.** Never pitch before the mechanism/proof has landed. Proof first, ask second.

---

## 4. Phase-vocabulary discipline

*A skeptical buyer punishes both failure modes: lead **too hype** and you repel them (and draw regulator attention); lead **too abstract** — proprietary category-language before any proof — and you sound like a guru inventing words. The rule:*

> **Lead with the simple, plain-spoken language buyers actually use. Reserve the proprietary / coined vocabulary for product-aware and most-aware surfaces only** (program content, the pinned VSL, most-aware emails). See [`five-awareness-levels-on-youtube`](../reference/frameworks/five-awareness-levels-on-youtube.md).

| Use freely — plain-spoken (channel + paid + social) | Reserve — most-aware / program content only |
|---|---|
| {{plain_term_1}} | {{coined_term_1}} |
| {{plain_term_2}} | {{coined_term_2}} |
| {{plain_term_3}} | {{coined_term_3}} |
| {{plain_term_4}} | {{coined_term_4}} |
| *real tool names, real numbers, "receipts"* | *branded frameworks, invented categories, identity labels* |

> **Worked example (generic):** Left column — "win-back flows," "revenue per send," "the leaky-bucket math," real tool names. Right column — "the Retention Operating Model™," "Lifecycle Architect" (the identity label), "the Compounding-List Method." The left column closes skeptics; the right column only lands on people already sold.

---

## 5. Sentence shapes

**Shapes that ARE the voice (fill from transcripts, then use on purpose):**
- **The receipt:** {{receipt_shape}} — *specific stack + specific number in one line.*
- **Principle → evidence:** {{principle_evidence_shape}} — *state it flat, then prove it.*
- **The disqualifier:** {{disqualifier_shape}} — *filtering is authority: "if you're under X, this isn't for you."*
- **{{shape_4}}** — *e.g. the graduated reveal: small fix → bigger build → the whole system.*
- **{{shape_5}}** — *e.g. the honest cut: "here's the part I bombed" — the trust mechanic competitors can't fake.*

**Shapes to delete on sight (every creator):** "Imagine if…", "What if I told you…", "The secret to…", "Listen,", "Here's the thing about [vague]", "In today's fast-paced world", thread-bot "1/n", "Bookmark this."

---

## 6. Banned vocabulary

*Two layers. Strip both on every pass.*

1. **The global list** — always on, every channel: [`spec/BANNED-VOCABULARY.md`](../spec/BANNED-VOCABULARY.md) + INV-7 (anti-slop) + INV-17 (engagement-bait).
2. **Creator-specific additions** — words and frames that break THIS voice:
   - {{banned_addition_1}} — *e.g. the niche's hype-stack family ("$X in 30 days," "passive income")*
   - {{banned_addition_2}} — *e.g. vague money language — always use the real band ("$2–6K"), never "five figures"*
   - {{banned_addition_3}}

> **Worked example (generic):** "email money machine" · "set-and-forget" · "this one flow made us rich" · "easy" applied to the work — the buyer runs a real store; calling the work easy tells them you've never done it.

---

## 7. The recurring frames

*The 4–6 arguments the channel makes over and over, in the creator's words. Pick 1–2 per video; authority videos can stack three. If a frame is part of the reserved vocabulary (§4 right column), mark it — it only runs on most-aware surfaces.*

1. **{{frame_1_name}}** *(master frame)* — {{frame_1_one_liner}}
2. **{{frame_2_name}}** — {{frame_2_one_liner}}
3. **{{frame_3_name}}** *(diagnostic frame — the lens the live-demo format uses)* — {{frame_3_one_liner}}
4. **{{frame_4_name}}** — {{frame_4_one_liner}}
5. **{{frame_5_name}}** — {{frame_5_one_liner}}
6. **{{frame_6_name}}** *(honesty frame — build-in-public, what bombed)* — {{frame_6_one_liner}}

> **Worked example (generic):** 1. "Retention is cheaper than acquisition — you already paid for these customers." 2. "Boring flows beat clever campaigns." 3. "Every store leaks in the same five places" (the diagnostic). 4. "Mechanism over outcome — here's the build, the cost, the number it moved." 5. "Pricing is positioning." 6. "Here's the send that flopped, and why."

---

## 8. CTA architecture

*Mode → destination. The destination comes from [STRATEGY §2](STRATEGY.md) (the funnel); the delivery obeys rule 12: **imperative + image, never a question.** Authority videos carry the real ask; reach videos bridge, never pitch.*

| Mode | CTA destination | The line (shape) |
|---|---|---|
| **authority** | {{authority_cta_destination}} — *book-a-call / pinned VSL / application* | {{authority_cta_line}} |
| **reach** | {{reach_cta_destination}} — *a named authority video / playlist via end-screen+card; soft* | {{reach_cta_line}} |
| **hybrid** | {{hybrid_cta_destination}} | {{hybrid_cta_line}} |

**Banned CTA patterns (every channel):** "like and subscribe" as the *only* ask · "free strategy call" with no named deliverable · countdown timers / "doors close at midnight" · "click the link below" with no context (INV-17).

> **Worked example (generic):** Authority → *"If you want this exact teardown run on your store — link in the description. Bring your numbers. We'll find the leak."* Reach → end-screen to the case-study playlist, one sentence, no pitch.

---

## 9. Tone map by mode

*Same voice, different temperature per surface. Calibrate open/close energy 1–10 against real footage, not aspiration. Mirror the defaults into `company.yaml` → `on_camera_persona`.*

| Mode | Primary tone | Secondary tone | Open energy | Close energy |
|---|---|---|---|---|
| **authority** | {{tone}} | {{tone}} | {{n}}/10 | {{n}}/10 |
| **reach** | {{tone}} | {{tone}} | {{n}}/10 | {{n}}/10 |
| **hybrid** | {{tone}} | {{tone}} | {{n}}/10 | {{n}}/10 |
| **shorts** | {{tone}} | {{tone}} | {{n}}/10 | {{n}}/10 |
| **pinned VSL** | {{tone}} | {{tone}} | {{n}}/10 | {{n}}/10 |

> **Worked example (generic):** authority = sharp + diagrammatic / dry-funny, opens 6/10, closes 8/10 on the CTA; reach = curious + unguarded, opens 9/10, closes 6/10; shorts = direct + named-mechanism, 10/10 open, single CTA.

---

## 10. Story beats + cadence

*The creator's arc, broken into reusable beats. Every video pulls ONE beat, not the whole biography. Cadence rule: authority videos lean on the post-win arc (beats 5–7); reach and founder content leans on the early failure arc (beats 1–4); anti-guru moments pull from the almost-quit beat. Each beat that states a number must trace to [PROOF-BANK §1](PROOF-BANK.md).*

| # | Beat | The line (one sentence, creator's words) |
|---|---|---|
| 1 | Ordinary world | {{beat_1}} |
| 2 | The attempt that failed | {{beat_2}} |
| 3 | First real win | {{beat_3}} |
| 4 | The almost-quit moment | {{beat_4}} |
| 5 | The comeback / the unlock | {{beat_5}} |
| 6 | Current state (the transformation) | {{beat_6}} |
| 7 | The mission | {{beat_7}} |

> **Worked example (generic):** Beat 2 — "I spent two years on a SaaS nobody wanted; the landing page was beautiful and the inbox was empty." Beat 4 — "Month three of the agency I had one client and a notice period I almost re-signed."

---

## 11. The Blind Output Test (the ship gate)

*Run on every script, hook, title, and caption before it ships. Score 0–10; **≥ 7 ships**; 9 = "reads like the creator wrote it." This is gate 4 of the five voice gates ([`spec/voice-gates.md`](../spec/voice-gates.md)); gate 5 is the full [`prompts/signal-check.md`](prompts/signal-check.md) pass.*

1. Could this line come out of the creator's mouth on an unscripted Tuesday live? *(No → rewrite.)*
2. Could a generic creator in this niche say it and no one would notice? *(Yes → sharpen with a named number, real tool, or contrarian belief.)*
3. Any banned phrase — global list or §6 additions? *(Strip.)*
4. Read it aloud — does any line break the rhythm or trip the mouth? *(Flag → revise.)*
5. Does it earn the pitch at the point the pitch lands? *(Pitch before proof → move it.)*
6. Score it. **< 7 does not ship.** Two failed revisions → escalate to the creator (INVARIANTS: Max-2-Revisions).

---

*Template v1 — once filled, stamp your own: `v1 — {{date}} — distilled from {{transcripts_and_sources}}`. Deep encoding lives in [`company.yaml`](../company.yaml) → `creator_identity_matrix`; this card is the operating distillation.*

*A Heuresis workspace template.*
