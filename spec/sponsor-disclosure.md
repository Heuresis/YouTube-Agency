# sponsor-disclosure.md — Sponsor + Affiliate Disclosure Compliance

> **INV-15 enforcement.** Every sponsored integration (preroll/mid-roll/end-roll/affiliate/dedicated) inserts FTC + local-regulator disclosure at the correct moment per integration type. The OS refuses to ship a script with sponsor copy lacking compliant disclosure.

---

## Why this matters

The FTC (US), ASA (UK), local consumer-protection bodies (EU, AU, CA) all require clear and conspicuous disclosure of any material connection between a creator and a brand. Failure to disclose creates:

1. Regulatory risk (FTC has fined channels and brands; ASA can ban content; EU jurisdictions have €100K+ fines)
2. Platform risk (YouTube's policy mirrors regulator requirements; non-disclosure can demonetize or strike)
3. Trust risk (the parasocial-trust contract — INV-16 — collapses faster from undisclosed sponsorship than almost any other failure mode)

The gate isn't a legal substitute. It's an operational guardrail that catches the most common failure modes per region.

---

## Material connections that require disclosure

A "material connection" exists when the creator received any of the following in exchange for the content:

- Cash payment (sponsorship deal, sponsored video fee)
- Free product or service worth more than nominal value
- Affiliate commission (any % of sale)
- Free travel, lodging, meals, events
- Discount codes that the creator has a financial interest in
- Equity, options, or revenue share
- Pre-release access to product (when used to influence content)
- Any other "material connection" that a reasonable viewer would want to know about

Any of these triggers the disclosure requirement. The OS asks the creator at sponsor-fit-analysis time whether a material connection exists; the answer flows into the disclosure copy.

---

## Disclosure timing per integration type

The "clear and conspicuous" standard requires disclosure BEFORE the sponsored claims are made — not buried in the description and not at the end of the video.

| Integration type | Required disclosure timing |
|---|---|
| **Preroll sponsor** (0:00–0:30 dedicated to sponsor) | Verbal disclosure within first 5 seconds of the sponsor segment + on-screen text super throughout the preroll segment |
| **Mid-roll sponsor** (mid-video dedicated segment) | Verbal disclosure as the creator transitions into the segment ("real quick before we continue, this video is sponsored by X") + on-screen text super for first 5 seconds of the segment |
| **End-roll sponsor** (post-content sponsor segment) | Verbal disclosure at the start of the segment + on-screen text super throughout |
| **Dedicated sponsor video** (entire video is about the sponsor) | Verbal disclosure within first 30 seconds + #ad or #sponsored in title + on-screen text super in first 30 seconds + description-line disclosure |
| **Inline product mention** (creator mentions product naturally during organic content) | Verbal disclosure at the moment of mention ("…and full disclosure, the company sponsors this channel") + description-line disclosure |
| **Affiliate links in description** (no on-camera mention) | "This description contains affiliate links" line at the top of the description, before the links — and `#aff` or `#affiliate` flag in any on-camera mention of the linked product |
| **Equity / revenue-share relationship** | More explicit disclosure required — "I am an investor in X" or "I have a financial interest in X" — verbal + on-screen + description |

---

## Required disclosure copy by region

The exact wording varies by region. The OS templates the copy per region declared in `company.yaml.creator_identity_matrix.basic_info.geography` (or, if missing, defaults to US).

### United States (FTC)
- Verbal: "This video is sponsored by [BRAND]" or "Today's video is brought to you by [BRAND]" or "Thank you to [BRAND] for sponsoring today's video"
- On-screen text: "Sponsored by [BRAND]" or "AD" or "Paid Promotion"
- Title hashtag: `#ad` or `#sponsored` (for dedicated sponsored videos)
- Description line: "This video is sponsored by [BRAND]. The links below may include affiliate links from which I may earn a commission."

### United Kingdom (ASA / CAP)
- Verbal: "This video includes paid promotion for [BRAND]" or "Ad: [BRAND] sponsored this video"
- On-screen text: "AD" must be visible at the start of the sponsored segment
- Title: must include "Ad" prefix for dedicated sponsored videos: "[Ad] [original title]"
- Description: "Includes paid promotion for [BRAND]"

### European Union (varies by jurisdiction; conservative default)
- Verbal: "This video contains paid advertising for [BRAND]" / equivalent in local language
- On-screen text: "Werbung" (DE) / "Publicité" (FR) / equivalent in local language
- Title: "Werbung" / "Publicité" / equivalent prefix for dedicated sponsored videos
- Description: full disclosure line in local language

### Canada (Competition Bureau)
- Verbal disclosure equivalent to FTC
- On-screen "AD" or "Sponsored"
- Description disclosure
- Bilingual disclosure (EN + FR) if the channel publishes for Canadian francophone audiences

### Australia (ACCC)
- Verbal: "This video is sponsored by [BRAND]"
- On-screen "AD" or "Sponsored"
- Description disclosure
- Title hashtag for dedicated sponsored videos

---

## Disclosure copy templates (loaded by region)

The OS stores templated disclosure copy at:

```
reference/templates/sponsor-disclosure/
├── us-ftc.md
├── uk-asa.md
├── eu-de.md
├── eu-fr.md
├── ca-en.md
├── ca-fr.md
├── au-accc.md
└── universal-fallback.md
```

The `sponsor-fit` skill reads the creator's region and selects the appropriate template, then customizes for the specific brand.

---

## What the gate checks

For every script with a sponsored or affiliate integration, the gate runs:

```
SPONSOR DISCLOSURE CHECK

Sponsored segment(s) detected: <count>
Affiliate links detected: <count>

For each sponsored segment:
  segment_start: <timecode>
  segment_type: <preroll | mid-roll | end-roll | dedicated | inline>
  brand: <name>
  region: <US | UK | EU-DE | EU-FR | CA-EN | CA-FR | AU>

  Verbal disclosure present: <yes | no>
  Verbal disclosure timing: <within required window | late | missing>
  On-screen text disclosure present: <yes | no>
  On-screen text timing: <correct | late | missing>
  Description disclosure line present: <yes | no>
  Title hashtag (if dedicated video): <yes | no | n/a>

  Verdict: <PASS | FAIL>
  Failure reason: <if FAIL>
  Required fix: <copy template + insertion point>

For affiliate links in description:
  "Affiliate links" disclosure line at top: <yes | no>
  Verdict: <PASS | FAIL>

Composite verdict: <PASS | FAIL>
```

If composite verdict is FAIL, the script returns to monetization-head with the specific missing disclosure and the inserted-copy template ready for placement.

---

## Common failure modes

### FM-1: Verbal disclosure too late in the segment
The creator says "Before I tell you about my sponsor..." (gap of 30+ seconds where the actual sponsor message starts) or burys the disclosure mid-pitch. The disclosure must come BEFORE the sponsor claims, not during them.

Fix: move the disclosure to the first 5 seconds of the segment.

### FM-2: On-screen text disclosure too brief
A 1-second flash of "AD" doesn't satisfy "clear and conspicuous." The text super must be visible long enough for a typical viewer to read it (3+ seconds minimum), in legible size, with sufficient contrast.

Fix: extend the super duration; verify size and contrast.

### FM-3: Title disclosure missing on dedicated sponsor videos
A video that is entirely about a sponsor must have the disclosure in the title. Missing this is the highest-risk failure mode for FTC scrutiny.

Fix: prepend `[Ad]` or `#sponsored` or equivalent to the title.

### FM-4: Affiliate links not disclosed in description
The description has affiliate links but no "this description contains affiliate links" line. Creators sometimes assume the affiliate program's disclosure is sufficient. It isn't.

Fix: add the disclosure line at the top of the description.

### FM-5: Material connection beyond cash sponsorship not disclosed
The creator received free product, free travel, or revenue share — and treats it as "not a sponsorship" because no cash changed hands. Material connections beyond cash require disclosure.

Fix: add disclosure copy reflecting the actual material connection ("the company gave me this product to review" / "I'm an investor in this company" / etc.)

### FM-6: Disclosure language too vague
"Thanks to my friends at [BRAND]" is not adequate disclosure. "Friends" doesn't communicate a paid relationship.

Fix: use explicit "sponsored by" / "paid promotion" / "ad" language.

---

## Override mechanism

There is no override path on this gate. Disclosure is a regulatory requirement, not a stylistic choice. If the creator believes the gate's reading of the integration is incorrect (e.g., the gate flags an editorial mention as a sponsored integration), the correct response is to mark the integration type explicitly in the script (`<sponsor_segment="false" reason="editorial mention, no material connection">`) and re-run the gate. The gate will then not require disclosure for that segment.

If the creator wants to ship without disclosure on what is genuinely a sponsored integration, the OS refuses. This is one of the very few hard blocks. INV-15 is non-negotiable.

---

## Ongoing maintenance

This file updates when:
1. FTC, ASA, EU, CA, or AU regulator updates their guidance
2. YouTube updates its monetization / sponsorship policies
3. A new integration type emerges (e.g., AI-driven product placement) that the gate doesn't yet cover

Version log at end of file.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template. Not legal advice.*
