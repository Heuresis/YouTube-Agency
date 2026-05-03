# Sponsor Integration Template

> Sponsor segment script template. Per region; default US/FTC. The sponsor integration is the segment within a video where the sponsor's product is promoted. INV-15 (sponsor disclosure) governs. The integration script is written by the creator, reviewed by the sponsor (where contracted), and shipped per the channel's editorial standards.

## Frontmatter

```yaml
video_id: <video this integration is in>
sponsor: <sponsor name>
sponsor_product: <product being promoted>
integration_type: <pre-roll | mid-roll | end-roll | dedicated>
integration_length_sec: <60-90 typical>
disclosure_jurisdiction: <US-FTC | UK-ASA | EU-country | other>
disclosure_required: yes
talking_points: [<from sponsor brief>]
do_dont_list: [<from sponsor brief>]
fee: <flat / performance / hybrid>
contract_finalcut: <creator | sponsor | shared>
```

## Section 1 — Pre-disclosure (mandatory per INV-15)

Verbal + on-screen text. First 5 seconds of integration.

### US (FTC)

```
[VERBAL]: "This video is sponsored by [Sponsor]."
[ON-SCREEN TEXT]: "#ad" or "#sponsored" — visible throughout the integration
```

### UK (ASA)

```
[VERBAL]: "Ad — this video is sponsored by [Sponsor]."
[ON-SCREEN TEXT]: "ad" — visible throughout the integration
```

### EU (country-specific)

Specific language varies; default to FTC-equivalent or stricter.

### Other jurisdictions

When in doubt, over-disclose. Verbal + visible on-screen disclosure throughout.

## Section 2 — Hook into the integration (10–20s)

Bridge from the video's content to the sponsor's product. Connect to the topic where possible.

```
"[Speaking of {topic}], [transition to sponsor]."

OR

"Quick break to talk about [sponsor product] — actually relevant to what we just covered."

OR

"This is supported by [Sponsor], which fits perfectly with the topic..."
```

The bridge is contextual; it doesn't feel like a hard cut. Forced bridges (where the sponsor is not topically related) feel awkward and underperform.

## Section 3 — Product introduction (20–40s)

What the product is, who it's for, what problem it solves.

```
[Sponsor] is [1-sentence product description].

It's for [audience description — overlapping with the channel's audience].

The specific problem it solves: [pain point + how the product addresses it].
```

The product introduction is honest and specific. Generic praise underperforms specific use-case anchoring.

## Section 4 — Personal connection (20–40s, when applicable)

The creator's own experience with the product. Specific, dated, anchored to a real use case.

```
"I've been using [Sponsor product] for [duration]. The specific case where it helped me was [specific moment / project / use case]. [What changed: outcome]."

OR (if the operator hasn't personally used it but vetted it):

"I've evaluated [Sponsor product] specifically because [audience type] keeps asking me about [problem it solves]. Here's what I found: [evaluation summary]."
```

If the operator has not personally used the product and cannot credibly evaluate it, the integration should not be accepted (INV-5 truth gate).

## Section 5 — Differentiation (10–30s)

Why this product vs alternatives. Based on the creator's evaluation.

```
"What makes [Sponsor product] different from [alternatives]: [specific structural difference]."

OR

"Other tools in the space [do X]. [Sponsor product] [does Y instead], which matters because [reason]."
```

Differentiation builds credibility. Generic "they're the best" underperforms.

## Section 6 — Call to action (10–20s)

The link, the discount code, the trial offer. Verbal + on-screen text + description link.

```
[VERBAL]: "Try it at [URL] — link is in the description. There's a [discount / trial / offer] for [audience]: use code [CODE] at checkout."

[ON-SCREEN TEXT]: "[URL] | Code: [CODE]"
```

## Section 7 — Disclosure reaffirmed

Throughout the integration: on-screen #ad / #sponsored visible. At the end of the integration:

```
[VERBAL]: "Thanks to [Sponsor] for sponsoring."
[ON-SCREEN TEXT]: continues "#ad" until integration ends
```

## Section 8 — Transition out

```
"Alright — back to the video."

OR

"With that out of the way, let's get back to [topic]."
```

The transition is clean. Lingering on the sponsor breaks the video's flow.

## Total integration length

| Length | Use case |
|---|---|
| 60s | Mid-video integration; topical alignment with the video's content |
| 75s | Standard mid-roll; medium-context product introduction |
| 90s | Slightly longer; for products needing more context (B2B, complex tools) |
| Dedicated video | The whole video is the integration; different format entirely |

Above 90s in mid-roll: retention typically degrades. Below 60s: the integration feels rushed.

## Banned integration patterns

INV-7 + INV-17 + INV-15 apply.

- "This video is brought to you by..." without #ad/#sponsored disclosure (not compliant)
- "Quick word from a friend of the channel" without identifying the integration as sponsored (not compliant)
- Native-style integrations that don't telegraph the sponsorship (regulator-flag)
- Performance-tied claims without substantiation ("80% of users see X result" — must be backed by sponsor's data)
- Health / financial / earnings claims without proper disclaimers (regulator-flag)
- Integration where the operator has not used / vetted the product (INV-5)
- Integration that breaks the operator's parasocial-trust contract (INV-16)

## Production cues for sponsor integrations

- **Visual treatment**: distinct from organic content — sponsor card, color shift, lower-third sponsor name
- **Audio treatment**: subtle music shift; the integration's tone is slightly different from the organic content
- **B-roll**: sponsor-provided B-roll (logo, product screenshot, etc.) layered with creator's b-roll
- **On-screen disclosure**: visible throughout the integration; "#ad" or "#sponsored" in the upper or lower third
- **Disclosure timing**: verbal disclosure within the first 5 seconds of the integration

## Verification checklist (pre-publish)

- [ ] Verbal disclosure within first 5 seconds (INV-15)
- [ ] On-screen disclosure visible throughout the integration (INV-15)
- [ ] Disclosure language matches jurisdiction
- [ ] Operator's claims about the product are accurate (INV-5)
- [ ] No fabricated performance claims (INV-6)
- [ ] No banned vocabulary (INV-7)
- [ ] Talking points from sponsor brief incorporated
- [ ] Do's-and-don'ts from sponsor contract respected
- [ ] Final cut control retained per contract
- [ ] Sponsor link working
- [ ] Discount code working
- [ ] Description includes sponsor disclosure + link
- [ ] Sponsor approval received (if contracted)

## Per-region quick reference

### US (FTC)

- "This video is sponsored by [Sponsor]" — verbal at start
- "#ad" or "#sponsored" — visible on-screen throughout
- Disclosure in description

### UK (ASA)

- "Ad — this video is sponsored by [Sponsor]" — verbal at start
- "ad" — visible on-screen throughout
- Disclosure in description

### EU (country-specific)

- Country-specific language; default to FTC-equivalent or stricter
- See `spec/sponsor-disclosure.md` for jurisdiction tracking

### Australia (ACMA / Ad Standards)

- "Sponsored content" or equivalent
- Visible disclosure throughout

### Canada (CRTC / Ad Standards)

- "This video contains sponsored content from [Sponsor]"
- Visible disclosure

## Repeat-sponsor integrations

For ongoing sponsor relationships:

- Each integration is its own script (no copy-paste)
- The talking points evolve based on what the audience responds to
- Disclosure remains compliant on every integration
- Performance reporting is delivered to the sponsor per the contract

## Sponsor escape clauses

If, during scripting, the operator concludes the integration cannot meet INV-15 / INV-5 / INV-16:

- Escalate to monetization-head
- Re-negotiate with sponsor (talking points, disclosure, format)
- If not resolvable, terminate the contract per the contract's termination clause

The OS refuses to ship integrations that violate the invariants, regardless of fee.

---

*v1.0 — 2026-05-03. Sponsor integration template, calibrated for US/FTC default. Compliance is the gate; the script is the asset.*

*A Heuresis workspace template.*
