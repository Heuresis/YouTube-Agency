# Interview Mode Prompt — Compartment Filling

> When a skill's required compartments are below threshold, the OS enters interview mode to fill the gap. This prompt is the runtime-agnostic interview-mode harness.

---

## Interview mode prompt

```
INTERVIEW MODE ACTIVATED

The creator has invoked /<skill> but the required compartments are below threshold:
- {{compartment.path}}: <current %> (required: <min %>)
- {{compartment.path}}: <current %> (required: <min %>)

Before /<skill> can produce creator-grade output, these compartments must reach threshold. We're going to fill them now.

I'll ask you a series of questions. Answer in your own voice — don't curate. Bullet points are fine. Stream-of-consciousness is fine. Real language beats marketing language. Specific beats general.

Each answer updates company.yaml directly. After all questions are answered, I'll re-score the compartments. If we're at threshold, /<skill> proceeds. If not, I'll ask the deeper-tier questions.

Ready? Question 1:

<dynamic question per compartment field>

[After each answer, parse it into the schema, write to company.yaml, advance to next question]

[After all questions answered, recompute completeness, report new tier]
```

---

## Question library by compartment

### Compartment 1 — Creator Identity Matrix

**basic_info:**
- What's your channel name (or working name if not yet decided)?
- What's the niche? Pick from: finance / business / mindset / tech / fitness / real-estate / productivity / creator-economy / other.
- What's your business model? Coaching / consulting / info-product / mastermind / agency / hybrid.
- Roughly what's your monthly revenue? Pre-revenue, $5K–$25K, $25K–$100K, $100K–$500K, $500K+.

**brand_voice_architecture:**
- How would you describe your communication style in one word? Direct / consultative / storytelling / analytical / contrarian / something else.
- Give me 5 phrases you literally say verbatim that signal "this is you" — phrases that, if removed from your content, would feel off.
- Give me 5 phrases that break your voice. Words or structures that you'd never write.
- What's your authority positioning? Category-king (you own the category) / challenger (you take on the incumbents) / insider (you're in the room) / outsider-with-edge (you broke in from outside)?

**unique_positioning:**
- What's your one-sentence worldview about your domain?
- What's your unique mechanism — the named thing you do that nobody else does?
- What contrarian beliefs do you hold that the niche doesn't share?

**parasocial_trust_contract:**
- What do you promise your audience long-term?
- What's the no-fly zone — what would you never do, even if it gained views?
- How does the on-camera persona relate to the off-camera you? Same / amplified / different character?

**archetype:**
- Pick: long-form-VSL specialist / contrarian-narrator / analytical-explainer / story-driven creator / contrast-format viral specialist / hybrid?

### Compartment 2 — Audience Intelligence System

**ideal_viewer_profile.demographics:**
- Age range of the ideal viewer?
- Gender split (rough percentages)?
- Top 3–5 countries by audience concentration?
- Income range (if relevant to the offer)?

**psychographics:**
- List 5–10 specific pain points your viewer experiences. Be specific — not "they want more time" but "they're losing 4 hours a week reconciling spreadsheets they can't trust."
- List 5–10 outcomes they want.
- List 5–10 fears they hold (often the inverse of desires, more visceral).
- List the 8 currently-held beliefs they have. (See `reference/frameworks/eight-required-beliefs.md` for the standard frame; map their actual beliefs against it.)
- List the 8 beliefs you need to install for them to become a customer.
- List 10+ objections that come up in sales calls.

**market_sophistication:**
- Where does the bulk of your audience sit on the awareness spectrum? Unaware / Problem-aware / Solution-aware / Product-aware / Most-aware?
- What's the sophistication stage of the market overall? Naive (new) / Aware (middle) / Skeptical (over-pitched) / Exhausted (saturated)?

**voice_of_viewer:**
- Pull 5–10 verbatim phrases from real comments / sales calls / surveys / DMs. Don't paraphrase — copy the exact words.
- What patterns show up in how they describe their pain?
- What patterns show up in how they describe their desired outcome?

**limiting_belief_diagnosis:**
- Pick: Worthless (they don't believe they deserve the outcome) / Helpless (they don't believe they can achieve it) / Hopeless (they don't believe it's possible at all)?

### Compartment 3 — Offer Architecture

**back_end_offers[0]:**
- Name of the back-end offer?
- Type? High-ticket 1:1 / group program / course / mastermind / membership / done-for-you?
- Price point in USD?
- One-sentence positioning?
- Core promise — the transformation?
- Unique mechanism — what makes the offer work?
- Value stack — list the components and their dollar values.
- Bonuses — list 3–5 with their objections countered.
- Guarantee?
- Risk reversal?

**economics_validation:**
- LTV (lifetime value per customer)?
- CAC (customer acquisition cost)?
- LTV:CAC ratio? (Must be 3:1+ for the OS to greenlight content scaling.)
- Gross margin %?

**content_to_offer_bridge:**
- Where's the pinned VSL? (URL or "to be built")
- Application funnel URL?
- Primary CTA on authority videos?
- Primary CTA on reach videos? (Should be channel-architecture-only, not a direct offer pitch.)

### Compartments 4–11

Continue the same pattern: read the compartment schema, ask the question for each field. Allow the creator to answer "I don't know yet" — that triggers a compartment-specific helper skill (e.g., for Channel Architecture: "let's run /build-channel-architecture to design this together").

---

## Interview mode rules

1. **Don't ask all questions at once.** Ask 3–5 per turn. Let the creator answer. Update company.yaml. Move to the next batch.
2. **Don't accept marketing-speak.** If the creator answers "we help entrepreneurs build dream lives," ask follow-up: "what would you say to a friend at dinner?"
3. **Pull verbatim language whenever possible.** The voice-of-viewer fields specifically need real phrases, not paraphrased ones. If the creator doesn't have them, ask them to pull from a comments / sales calls / surveys source.
4. **Allow "I don't know yet."** That's a valid answer. It marks the field as `[GAP]` and triggers a compartment-fill skill for that area.
5. **Re-score after each batch.** Show the creator how their tier changes as they answer. Motivation comes from seeing the progress bar move.
6. **Cap the session at 90 minutes.** Cognitive load matters. If the interview is going to take more than 90 minutes, split it across sessions. The OS persists company.yaml between sessions.

---

## Exit conditions

Interview mode exits when:

- Required compartments are all at threshold for the originally-invoked skill, OR
- The creator chooses to exit (interview mode is voluntary; creator can stop and run /<skill> with [GAP] flags)

On exit, the OS reports:

```
INTERVIEW MODE COMPLETE

Compartments updated:
- {{compartment.path}}: <was %> → <now %>
- {{compartment.path}}: <was %> → <now %>

Tier: <was tier> → <now tier>

Skills now unlocked:
- /<skill> (originally requested)
- /<other skill 1>
- /<other skill 2>

Recommended next: /<originally requested skill> with the new context.
```

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
