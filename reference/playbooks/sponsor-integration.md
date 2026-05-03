# Sponsor Integration — Full Lifecycle

> The full lifecycle of a sponsor relationship: inquiry → fit analysis → contract → integration scripting → disclosure → publish → reporting → follow-on. This playbook references INV-15 (sponsor disclosure compliance) and `spec/sponsor-disclosure.md` for jurisdiction-specific rules.

## When to invoke this playbook

- A sponsor inquiry has been received
- The creator is proactively pursuing a sponsor relationship
- An existing sponsor is exploring a follow-on integration
- A sponsor relationship is being terminated and the playbook documents the wind-down

## Stage 1 — Inquiry intake

### Inbound inquiries

Sponsor inquiries arrive via:

- Email (most common — direct from brand or agency)
- DM on a social platform
- Form submission (if the channel has a "sponsor inquiry" form)
- Sponsorship-marketplace platforms (less common for owned-offer creators)

Capture and normalize the inquiry into the standard intake record:

- Brand / company name
- Contact name + role
- Product / service being promoted
- Proposed integration type (preroll / mid-roll / dedicated / multi-video / Shorts)
- Proposed budget range (if disclosed; otherwise note "TBD")
- Proposed timeline / publish date
- Proposed length of integration (60s, 90s, dedicated video, etc.)
- Talking points / brief
- Any compliance notes (regulated category, jurisdiction-specific concerns)

### Outbound inquiries

When the creator initiates, document:

- Target sponsor list (with rationale per sponsor — why they fit)
- Outreach template (anonymized; no name-drop of the creator's audience by individual)
- Cold-outreach response rate (track for cycle-2 calibration)

## Stage 2 — Fit analysis

The fit analysis is the gate. Run `/sponsor-fit` skill. Six fit dimensions:

### 1. Audience fit

Does the sponsor's product align with the channel's audience? Specifically:

- The audience's demographics overlap with the sponsor's target demographics
- The audience's psychographics (pain points, desires, identity aspirations) align
- The audience's awareness level matches the sponsor's funnel stage

Misfit on audience = decline. Promoting a product the audience doesn't need wastes the audience's attention and degrades parasocial trust.

### 2. Authority alignment

Does the sponsor's product align with the operator's stated authority and worldview?

- The operator's parasocial-trust contract (compartment 1) — does it tolerate this sponsor?
- The operator's contrarian beliefs — does the sponsor contradict them?
- The operator's named enemies (if any) — does the sponsor align with them or against?

Misfit on authority = decline regardless of budget. A high-paying sponsor that contradicts the operator's worldview costs more than it pays in long-term trust erosion (INV-16).

### 3. Quality of product

Has the operator personally used the product? If not, can they evaluate it credibly before the integration?

- "Personally used and recommend" tier — the highest-trust integration; can be promoted with full conviction
- "Tested and approved for the audience" tier — the operator vetted the product, didn't necessarily integrate it into their own life
- "Reviewed and the brand checks out" tier — the operator hasn't tested it but has reviewed the brand's credibility

Below the third tier = decline. Promoting unvetted products violates INV-5 (truth gate).

### 4. Regulatory fit

For regulated categories (finance, health, alcohol, gambling, supplements, regulated tech), the regulatory framework adds gates:

- **Finance**: jurisdiction-specific regulator's finfluencer rules (US: SEC investment-advice; UK: FCA; EU: MiFID II)
- **Health / supplements**: FDA / equivalent regulator's claims rules; no medical claims
- **Alcohol / gambling / regulated tech (cannabis, crypto in some jurisdictions)**: jurisdiction-specific bans or constraints

Regulatory misfit = decline. Operating in violation of regulator rules generates liability.

### 5. Commercial fit

The integration's economics:

- Integration fee against channel's CPM band (see `youtube-long-form.md` RPM section)
- Typical industry rates: high-CPM niches (business, finance) command $20–$80 per CPM (i.e., $20–$80 per 1,000 expected views) for 60–90s integrations; lower-CPM niches command $5–$25 per CPM
- Multi-video deals typically discount per-video rate by 10–20%
- Dedicated videos command 3–5x integration rate
- Performance-based deals (affiliate %, custom-link tracking) supplement flat fees in some categories

Below the band = negotiate up or decline. Above the band = accept (with the other gates).

### 6. Brand-safety fit

Does the sponsor have any reputation issues that would reflect on the channel?

- Recent controversies
- Customer-experience reputation (significant complaint volume, Better Business Bureau issues, refund-policy concerns)
- Industry reputation (legal actions, regulator interventions)

Brand-safety misfit = decline. The creator's reputation is downstream of who they associate with.

### Fit-analysis output

Run `/sponsor-fit` skill. Output: a structured analysis document with:

- Fit score per dimension (pass / conditional pass / fail)
- Overall recommendation (accept / negotiate / decline)
- If accepted: integration brief with talking points, do's-and-don'ts, length, format
- If conditional: what conditions must be met for acceptance
- If declined: declination rationale (for log; not necessarily shared with sponsor)

## Stage 3 — Contract

If the fit-analysis recommends accept, proceed to contract. The contract documents:

### Standard contract elements

- Parties (creator's legal entity + sponsor's legal entity)
- Integration type, length, format
- Channel(s) and platform(s) the integration runs on
- Publish date(s)
- Talking points (sponsor's required messaging)
- Do's and don'ts (sponsor's required avoidances)
- Disclosure language (jurisdiction-specific, compliant with INV-15)
- Fee structure (flat, performance, hybrid)
- Payment terms (50% upfront / 50% on publish typical; or net-30 from publish; or other)
- Approval process (does the sponsor approve script before publish? does the sponsor approve final cut? — this is a key negotiation point)
- Rights (does the sponsor get the recorded footage? for how long? what's the use case?)
- Performance reporting (what metrics does the creator share? what's the cadence?)
- Term (single-video vs multi-video vs ongoing)
- Termination clauses (force majeure, breach, mutual termination)

### Negotiation points worth fighting for

- **Final-cut control**: the creator retains final editorial control. Sponsor can request changes but cannot mandate. Without final-cut control, the script can be sponsor-driven and dilute the parasocial-trust contract.
- **Length flexibility**: target ±15s on the agreed length. Strict-length integrations underperform structurally.
- **Disclosure language**: ensure the disclosure satisfies INV-15 + jurisdiction. Some sponsors push softer disclosure than required; the creator's compliance burden is higher than the sponsor's.
- **Performance reporting**: aggregate metrics (impressions, AVD, CTR if measurable) are reasonable; granular individual-viewer data is not.

### Negotiation points worth conceding

- Publish window flexibility (within a 7–14 day window, sponsor can usually accommodate)
- Talking points (within reason — the sponsor knows their product better than the creator)
- Do's-and-don'ts list (typical sponsor protective language)

## Stage 4 — Integration scripting

The integration script is written by the creator (60/40 principle — the script is the operator's craft, not the sponsor's). Use the `script-sponsor-integration.md` template.

### Integration structure

- **Pre-disclosure** (mandatory per INV-15): "This video is sponsored by [sponsor]." Verbal + on-screen text.
- **Hook into the integration** (10–20s): contextualize why the sponsor's product is relevant to the audience. Connect to the video's topic where possible.
- **Product introduction** (20–40s): what the product is, who it's for, what problem it solves
- **Personal connection** (20–40s, when applicable): the creator's own experience with the product. Specific, dated, anchored to a real use case. Generic praise underperforms specific anecdote.
- **Differentiation** (10–30s): why this product vs alternatives — based on the creator's evaluation
- **Call to action** (10–20s): the link, the discount code, the trial offer. Verbal + on-screen text + description link
- **Disclosure reaffirmed** (per INV-15 jurisdiction): on-screen #ad / #sponsored throughout the integration; verbal acknowledgment at start and (optionally) at end

Typical integration length: 60–90 seconds. Mid-roll integrations longer than 90s underperform structurally.

### Integration placement

- **Pre-roll**: 0:30–1:30 of the video. Lower retention impact than mid-roll because viewers haven't committed yet.
- **Mid-roll**: 4–6 minutes into a 12-minute video; 8–12 minutes into a 20-minute video. Highest retention impact (the audience is committed).
- **End-roll**: last 60–90 seconds. Lower performance for sponsors but lower retention impact for the channel.
- **Dedicated video**: the entire video is a sponsor integration. Different category — the creator's whole video is the integration. Compensation is higher; retention pattern is different.

### Disclosure (INV-15)

Disclosure language by jurisdiction:

- **US (FTC)**: clear and conspicuous disclosure within the first 30s of the integration. "This video is sponsored by [X]" verbal + on-screen #ad or #sponsored. Throughout the integration: visible label.
- **UK (ASA)**: "ad" labeling required. Disclosure must be clear and prominent. Specific guidance for influencer marketing.
- **EU**: country-specific. Many countries align with FTC-equivalent or stricter standards.
- **Australia / Canada / others**: vary; the OS's spec/sponsor-disclosure.md tracks current rules.

When in doubt, over-disclose. Under-disclosure is regulator risk and trust-contract risk.

### Banned integration patterns

- "This video is brought to you by..." without #ad / #sponsored disclosure (not compliant)
- "Quick word from a friend of the channel" without identifying the integration as sponsored (not compliant)
- Native-style integrations that don't telegraph the sponsorship (regulator-flag)
- Performance-tied claims without substantiation ("80% of users see X result" — must be backed)
- Health / financial / earnings claims without proper disclaimers (regulator-flag)

The OS refuses to publish a script with sponsor copy that fails INV-15.

## Stage 5 — Publish

Publish-day operations:

- **Pre-publish disclosure check** — the integration's disclosure language passes the spec gate
- **Sponsor approval (if contracted)** — sponsor reviews the cut; final-cut control is the creator's per the contract
- **Publish-checklist drill** — the integration's video runs through `reference/templates/publish-checklist.md`
- **Sponsor notification** — the sponsor is notified at publish-time of the publish
- **First-hour engagement** — the first-hour-only comment cadence applies; engage with comments

### Publish-day handoffs

- Editor delivers the final cut on Day -2 (two days before publish)
- Sponsor reviews on Day -1
- Creator approves final cut on Day -1
- Publish on Day 0

If the sponsor returns notes that conflict with the creator's editorial control, the creator's call governs (per contract). If the sponsor's notes don't conflict, accommodate.

## Stage 6 — Reporting

The reporting cadence depends on the contract. Common cadences:

- **24-hour report**: views, watch time, integration AVD (if measurable)
- **7-day report**: same metrics, full first-week
- **30-day report**: total views, watch time, performance summary
- **Affiliate-link reporting** (if applicable): clicks, conversions, revenue

Report formats are aggregated, not individual-viewer-level. Granular data violates audience privacy expectations.

### Report content

- Views / impressions
- Watch time / AVD
- Integration retention (the AVD specific to the integration segment, if measurable)
- Click-through to sponsor's link (via UTM tagging)
- Conversion (if affiliate-link tracked)
- Comments and audience reaction (qualitative summary)
- Notes on what worked / didn't / suggestions for next integration

## Stage 7 — Follow-on

After the integration ships and reports are delivered, the relationship enters one of three states:

### Healthy follow-on

- Sponsor satisfied with performance
- Sponsor wants additional integrations
- Negotiate multi-video deal at improved rate (existing-relationship discount + scale)
- Continue cadence

### Pause

- Sponsor's marketing strategy shifts
- Sponsor's product launches a new version (need to re-fit)
- Channel goes through positioning shift (needs to re-fit from creator's side)

Hold the relationship. Re-engage when conditions align.

### Termination

- Sponsor's product / service has a quality issue
- Sponsor's brand has a controversy
- Sponsor's category becomes regulatory-problematic
- Audience response is sufficiently negative that the integration cost the channel more than it paid

Termination is rare but necessary. The creator's reputation is the long-term asset; a single sponsor's relationship is short-term.

## Failure modes

### Disclosure compliance miss

**Failure**: integration ships without proper #ad / #sponsored disclosure. Regulator action; platform action; trust erosion.
**Prevention**: INV-15 enforcement at publish. The OS refuses to ship without compliant disclosure.

### Audience-fit miss

**Failure**: integration ships for a product the audience doesn't need. Comments are negative; the parasocial-trust contract erodes.
**Prevention**: Stage 2 fit-analysis is the gate. Decline is the right answer when audience-fit is poor.

### Authority-alignment miss

**Failure**: integration ships for a product that contradicts the operator's stated worldview. Audience perceives sellout; trust collapses.
**Prevention**: Stage 2 fit-analysis. Authority alignment is non-negotiable.

### Final-cut concession

**Failure**: contract gave sponsor final-cut control; sponsor's edits dilute the script's voice. Integration underperforms; future integrations lose conviction.
**Prevention**: contract negotiation. Final-cut control is the creator's. Walk away from sponsors who insist otherwise.

### Performance-claim violation

**Failure**: integration claimed "80% of users see X result" without substantiation. Regulator complaint or platform-policy action.
**Prevention**: claim review at Stage 4 scripting. Claims must be substantiated by sponsor's data and disclosed accordingly.

### Late delivery

**Failure**: editor / creator delivers final cut on publish day. Sponsor cannot review. Conflict.
**Prevention**: timeline buffer. Final cut delivered Day -2 minimum.

### Sponsor-negotiation underbid

**Failure**: creator accepts a rate below the channel's CPM band because they're new to sponsorship and don't know the band. Sponsor benefits; creator's per-integration revenue is suppressed; future negotiations anchor low.
**Prevention**: rate-band research before negotiation. The OS's `youtube-long-form.md` documents structural CPM bands.

## What this playbook doesn't cover

Sponsor-fit detailed scoring: see `/sponsor-fit` skill. Disclosure language by jurisdiction: see `spec/sponsor-disclosure.md`. Integration script template: see `reference/templates/sponsor-integration.md`. Publish-checklist template: see `reference/templates/publish-checklist.md`. (Note: `publish-checklist.md` referenced; if not yet built, see `/publish-checklist` skill output for current contract.)

---

*v1.0 — 2026-05-03. The full sponsor lifecycle, calibrated for owned-offer creators where sponsorship is supplemental revenue and the back-end offer is the primary monetization.*

*A Heuresis workspace template.*
