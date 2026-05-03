# Dual-Mode Mix Shift

> When to shift the authority/reach mix ratio, why, and how. The dual-mode strategy is the OS's central content-strategy primitive (see `reference/frameworks/dual-mode-content-strategy.md`). The default ratio is 60–70% authority + 30–40% reach. The ratio is not static — it shifts with channel-stage, offer launches, awareness-distribution changes, and CTR/AVD pattern changes. This playbook documents the triggers and the procedure for shifting.

## What the dual-mode mix is

The mix is set in `company.yaml.content_engine.mode_mix`:

```yaml
mode_mix:
  authority_pct: 65
  reach_pct: 35
  hybrid_pct: 0
```

Every video in the channel's calendar is tagged authority / reach / hybrid. The mix is enforced in the content calendar — over a 12-week rolling window, the published videos must match the declared ratio within ±5%.

## Why the mix matters

The two modes serve different functions:

- **Authority mode** — converts existing audience to the back-end offer. Mode-strength: belief installation, niche-specific content, structured education, conversion-driving. Audience: target ICP; awareness levels solution-aware → most-aware.
- **Reach mode** — grows audience beyond the niche. Mode-strength: broad-appeal hooks, contrast formats, contrarian frames, story-driven content with viral potential. Audience: broader pool, mostly problem-aware, sometimes unaware.

The wrong mix produces predictable failure modes:

- **Too much authority** — channel grows slowly because reach is starved; existing audience saturates and the pinned VSL conversion plateaus
- **Too much reach** — audience grows but the audience composition doesn't match the back-end offer; conversion rate drops below benchmark; sponsorship CPM drops because audience-quality declines

The right mix is dynamic. It changes as the channel changes.

## Triggers for mix shift

### Trigger 1 — Channel size milestone

As the channel grows, the optimal mix shifts. Approximate guidance:

- **0–10K subs (early stage)**: 50–60% authority / 40–50% reach
  - Reasoning: early-stage channels need audience growth as much as conversion. Reach mode feeds the growth pool.
- **10K–100K subs (growth stage)**: 60–70% authority / 30–40% reach
  - Reasoning: the audience pool is growing; conversion infrastructure matters more.
- **100K–500K subs (scaling stage)**: 65–75% authority / 25–35% reach
  - Reasoning: the audience pool is large enough that authority-mode conversion is the primary lever.
- **500K+ subs (mature stage)**: variable based on offer scale and channel strategy
  - Reasoning: at scale, the channel may diversify into new offers, new niches, or reach-mode-as-flywheel for adjacent niches.

These are guidance bands, not hard rules. Channel-specific calibration is required.

### Trigger 2 — Offer launch

When the back-end offer is launching (new program, new cohort, new product):

- **6 weeks before launch**: shift to 80% authority / 20% reach. The audience needs concentrated belief-installation in the weeks leading to launch.
- **Launch week**: 100% authority. Every video is offer-adjacent; reach videos are deferred.
- **2 weeks after launch**: return to baseline mix.

The offer-launch shift is temporary. The shift's leverage is in the concentrated belief-installation; sustaining it long-term saturates the existing audience without growth.

### Trigger 3 — Awareness-distribution shift

Run `/audience-researcher` quarterly to check the audience's awareness distribution (compartment 2). If the distribution shifts:

- **Distribution moving toward unaware / problem-aware** — the channel is acquiring less-qualified audience. Increase authority mix to deepen existing audience and slow the dilution.
- **Distribution moving toward product-aware / most-aware** — the channel's audience is saturating with already-converted viewers. Increase reach mix to bring in new pools.
- **Distribution stable** — hold the mix.

Awareness-distribution shifts happen slowly (over 3–6 months typical). The OS resists reactive mix shifts based on a single video's data.

### Trigger 4 — CTR pattern change

If the channel's CTR drops below the floor band consistently for 4–6 weeks:

- **Diagnose first**: is it title-craft, thumbnail-craft, audience-fit?
- **If audience-fit is the issue**: the audience composition has shifted; the channel's authority content isn't pulling like it used to. Increase reach mix to refresh the audience pool.
- **If title-craft / thumbnail-craft is the issue**: the mix isn't the problem; run `/audit-retention` and revise per-video craft.

The mix shift addresses audience-fit; per-video craft addresses title-craft / thumbnail-craft.

### Trigger 5 — AVD pattern change

If the channel's AVD drops below the floor band consistently for 4–6 weeks:

- **Diagnose first**: is it retention-engineering or audience-mismatch?
- **If audience-mismatch is the issue**: the audience the channel acquired isn't the audience the content is calibrated for. The mix shift can correct — typically by slowing reach or shifting reach format to one that better aligns with the niche.
- **If retention-engineering is the issue**: the mix isn't the problem; run `/retention-engineer` per video.

### Trigger 6 — Sponsorship CPM change

If sponsorship CPM offers are dropping:

- **Diagnose**: is the audience-quality dropping? The mix is the lever.
- **Increase authority mix**: better-qualified audience signals to sponsors and improves CPM negotiation.
- **Resist reach mode that pulls broad-low-CPM audiences**: not all reach is equal. Reach-mode content that pulls wrong audience hurts long-term.

### Trigger 7 — Burnout / production constraint

Reach-mode content (contrast formats, viral-structured) is production-heavy. If the operator is approaching production burnout:

- **Temporarily increase authority mix**: authority-mode content (talking-head with structured script) is lower-production-cost than reach-mode.
- **The shift is operational, not strategic**: return to baseline once production capacity recovers.

## Procedure for mix shift

### Step 1 — Confirm the trigger

Don't shift the mix reactively. Confirm:

- Has the trigger condition held for 4–6 weeks (channel-size, awareness, CTR/AVD)?
- Is the diagnosis correct (mix-shift is the right lever, not per-video craft)?
- Is the offer-launch / sponsorship trigger structured and not panicked?

If confirmed, proceed.

### Step 2 — Document the new ratio

Update `company.yaml.content_engine.mode_mix`:

```yaml
mode_mix:
  authority_pct: 70    # was 65
  reach_pct: 30        # was 35
  hybrid_pct: 0
```

Document the trigger and the rationale in the change log.

### Step 3 — Recalibrate the content calendar

Walk through the next 12 weeks of planned content:

- Tag each planned video as authority / reach / hybrid
- Compute the current planned ratio
- Adjust to match the new ratio (typically: replace 1–2 reach videos with authority videos, or vice versa)

The recalibration is a 30-minute exercise once the calendar is in order.

### Step 4 — Communicate to the team

If the channel has an editor, writer, thumbnail designer, or other team:

- Share the new ratio
- Share the trigger and rationale
- Update each role's brief (the script-writer's brief now has different mode-distribution; the thumbnail designer's brief now has different style-tier distribution)

### Step 5 — Monitor for 6–8 weeks

After the shift, monitor:

- CTR by mode (authority videos vs reach videos)
- AVD by mode
- Subscriber growth
- Application / conversion volume
- Email-list growth

The mix shift's effect is visible within 6–8 weeks. If the shift's intended effect doesn't materialize, re-diagnose.

### Step 6 — Iterate

The mix is not a one-time decision. Re-evaluate quarterly:

- Has the trigger condition resolved or persisted?
- Are new triggers active?
- Should the mix shift again?

The dual-mode mix is a continuous calibration, not a fixed value.

## Mix-shift patterns by archetype

### Long-form-VSL specialist channels

Default: 70% authority / 30% reach. The pinned VSL is the conversion engine; authority videos route to it. Reach videos exist to fill the funnel.

Shift triggers:
- Pre-launch: 90% authority / 10% reach for 6 weeks
- Audience saturation: increase reach to 35–40%
- Production burnout: temporary 80% authority

### Contrarian-narrator channels

Default: 60% authority / 40% reach. Contrarian frames work as reach hooks; the channel does both modes naturally.

Shift triggers:
- Sub-niche shift: increase authority briefly to anchor new positioning
- Audience composition shift: reach-vs-authority recalibration

### Analytical-explainer channels

Default: 70–80% authority / 20–30% reach. The channel is information-dense; reach videos are harder to produce. Reach mix typically stays low.

Shift triggers:
- Specific viral opportunity: ad-hoc reach video
- Sponsorship deal in adjacent niche: ad-hoc reach video

### Story-driven creator channels

Default: 50–60% authority / 40–50% reach. The narrative format works in both modes; the operator can tilt either direction.

Shift triggers:
- Narrative arc reaches a crescendo: increase authority during the resolution arc
- Audience growth needed: increase reach

### Contrast-format viral specialist channels

Default: 30–40% authority / 60–70% reach. The channel's primary lever is reach.

Shift triggers:
- Conversion-rate concerns: increase authority
- Pinned-VSL deployment: increase authority for 4–6 weeks around the deployment

### Case-study archivist channels

Default: 80% authority / 20% reach. Cases are inherently authority-mode. Reach is occasional.

Shift triggers:
- Case-flow constraint (insufficient new cases): increase reach mix temporarily; resume cases when flow returns

### Mechanism-first educator channels

Default: 70% authority / 30% reach. Mechanism content is authority-mode; reach is supplementary.

Shift triggers:
- Mechanism-launch (first publishing of a major framework): 90% authority for 6 weeks
- Audience saturation: increase reach

### Personal-finance mentor archetype channels

Default: 75% authority / 25% reach. The credibility-gated nature of the niche favors authority mode. Reach is selective.

Shift triggers:
- Regulatory window (new finfluencer rules): authority temporarily; ensure compliance content; minimize reach
- Audience growth: increase reach within compliance

### Productivity systems builder channels

Default: 65–75% authority / 25–35% reach. System demonstrations are authority-mode. Reach is contrast-format adjacent.

Shift triggers:
- Tool-version-update wave: more authority videos to refresh the library
- Audience-growth need: contrast-format reach

### Creator-economy meta-creator channels

Default: 50% authority / 50% reach. The niche is reach-friendly; the channel can do both modes.

Shift triggers:
- Course launch: authority push
- Audience-saturation: reach push
- Platform-mechanic update: authority videos teaching the new mechanic

### Mindset / philosophical creator channels

Default: 80% authority / 20% reach. The slow-pace philosophical format does not lend itself to viral reach. Reach is selective.

Shift triggers:
- Audience-growth window: occasional contrast or contrarian reach video
- Otherwise: hold the authority dominance

### Agency-acquisition operator archetype channels

Default: 75% authority / 25% reach. Agency-content is authority-mode. Reach is for adjacent audiences.

Shift triggers:
- Cohort launch: 85–90% authority for the launch window
- Adjacent-niche reach: occasional reach to pull adjacent audiences

## Failure modes

### Reactive mix shifting

**Failure**: shifting the mix every time a single video underperforms. The mix becomes noise rather than strategy.
**Prevention**: trigger conditions held for 4–6 weeks before shifting. Patience.

### Mix-shift without recalibration

**Failure**: the operator declares "more reach" but doesn't change the content calendar. Nothing actually shifts.
**Prevention**: Step 3 (recalibrate the calendar) is non-negotiable.

### Permanent shift without re-evaluation

**Failure**: the mix shifts to address a specific trigger and never shifts back. The temporary becomes the permanent.
**Prevention**: quarterly re-evaluation cycle.

### Mix-shift to compensate for craft problems

**Failure**: the operator's CTR is dropping; they shift the mix instead of fixing the title-craft. The wrong lever pulls.
**Prevention**: diagnose first (per `/leak-audit`). Mix-shift is the right lever for audience-fit issues; per-video craft is the right lever for craft issues.

### Offer-launch shift without return

**Failure**: pre-launch authority push is sustained for months after launch. The audience saturates; growth slows.
**Prevention**: the offer-launch shift is documented as temporary. Return to baseline scheduled.

## What this playbook doesn't cover

The dual-mode strategy itself: see `reference/frameworks/dual-mode-content-strategy.md`. Per-video mode declaration: see `/write-authority-script`, `/write-reach-script`. Content-mix planning: see `/content-mix-strategy`. Awareness-distribution diagnosis: see `/audience-researcher` work.

---

*v1.0 — 2026-05-03. The dual-mode mix as a continuous calibration, not a fixed value.*

*A Heuresis workspace template.*
