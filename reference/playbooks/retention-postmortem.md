# Retention Postmortem

> When AVD craters on a video that should have performed: structured diagnosis, library-compound entry, pattern-attribution. This playbook applies to videos where the predicted performance was within the channel's typical band but the actual AVD landed below the floor.

## When to invoke

Run this playbook when:

- A video's AVD lands below the channel's bottom-quartile band (per INV-9 retention floor)
- The video was published with a passing retention-floor pre-check (i.e., the pre-publish prediction was within band but the actual landed below)
- The video's CTR was acceptable (the issue is retention, not click)

If the video's CTR also missed, run a broader leak audit (see `/leak-audit`). This playbook is retention-specific.

## Step 1 — Confirm the diagnosis

Before running the postmortem, confirm:

- The video has been live ≥ 7 days (some videos start slow and recover; 7 days is typical for stable retention data)
- The AVD has stabilized (it's not still trending)
- The audience composition is comparable to other videos (the AVD miss is craft-related, not audience-composition-related)

If the AVD is still trending, wait 7–14 days more. If audience composition is off (the video pulled an unusual audience), the diagnosis is audience-fit, not retention-craft — see `/leak-audit`.

## Step 2 — Pull the retention curve

YouTube Studio shows the retention curve (Audience retention chart). Pull:

- **The full curve** — second-by-second AVD across the video's length
- **The intro retention** — % of viewers still watching at 0:30
- **The mid-roll retention** — % watching at 30%, 50%, 70% marks
- **The end retention** — % watching at the final 10% of the video

Compare against the channel's typical retention curve archetype (see `youtube-long-form.md` for retention archetypes per content-type).

## Step 3 — Identify the drop point(s)

Look at the curve for sharp drops. Categorize:

### Cliff drop (>15% in 5 seconds)

A specific moment causes mass abandonment. Common causes:

- **At 0:00–0:15**: hook miss. The first 30s didn't deliver on the title-thumbnail-promise (INV-10).
- **At 1:00–3:00**: the first major premise didn't land. Curiosity-gap closed too early or never opened.
- **At 4:00–7:00**: pacing collapse. A long block without pattern-interrupts. Tired viewers drop.
- **Mid-video at a sponsor integration**: integration was placed wrong, length was excessive, or didn't fit the video's tone.
- **At a section transition**: the transition signaled "wrap-up" prematurely, and viewers left.

### Steady decline (>2% per minute)

The video is losing viewers continuously. Common causes:

- **Information density too low**: the viewer feels they could have gotten the lesson in less time. Bored.
- **Pace too slow**: the operator is talking slower than necessary; pattern-interrupt cadence is below 60s.
- **Loop architecture missing**: no curiosity-gap is open; viewer has no reason to stay.
- **Wrong-mode content**: the video is authority-mode but the audience came in expecting reach-mode (or vice versa).

### Late-cliff drop (in the final 20% of the video)

A specific moment causes late abandonment. Common causes:

- **The CTA / pitch starts**: viewers who weren't going to convert leave when the offer-section starts. This is structural — not a problem unless the cliff is unusually large.
- **A factual error or inconsistency**: viewers caught a contradiction and dropped.
- **A weak resolution**: the video ended without the promised payoff.

## Step 4 — Diagnose the cause

For each drop point, run hypothesis testing.

### Hypothesis 1 — Hook craft

If the cliff is at 0:00–0:30:

- Was the hook tightly aligned with the title and thumbnail? (INV-10)
- Were 3+ retention mechanisms deployed in the first 30s? (INV-11)
- Was the Three-Brain Decision Sequence calibrated (Reptilian / Limbic / Neocortex)?
- Did the hook use voice-of-viewer language or generic copy?

If hook craft is the issue: the video can be re-cut with a stronger hook (the body is fine, the entry was wrong). Re-uploading is a platform-policy gray area; re-cutting and re-publishing as a new video is the safer path.

### Hypothesis 2 — Loop architecture

If the steady decline starts at 1:00–3:00:

- Was a loop opened by 0:08 (per the loop system canon)?
- Was the loop closed at the right window (typically before the 50% mark)?
- Were callbacks deployed in the body?
- Were sub-loops layered for sustained tension?

If loop architecture is the issue: the script needs structural revision. Future videos in the same content category should be re-architected.

### Hypothesis 3 — Pacing

If the decline is steady:

- Pattern-interrupt cadence (INV-11): is it ≥ every 60 seconds?
- Cut density: matches the channel's signature?
- Music shifts: present at section transitions?
- Energy variance: is the operator's delivery flat throughout?

If pacing is the issue: the editing rhythm needs revision. The script may also need shorter sections.

### Hypothesis 4 — Information density

If the decline is steady and the viewer-comments report "too long" or "skip-throughs":

- Is the video padded? (Length without lesson-add)
- Are there long stretches without new information?
- Is the operator restating points too frequently?

If information-density is the issue: the script should have been shorter. Re-edit to a tighter cut and re-publish (or apply the lesson to next video).

### Hypothesis 5 — Sponsor-integration placement

If the cliff is at the sponsor integration:

- Was the integration placed at the right moment (mid-roll, after the audience commits)?
- Was the integration's tone congruent with the video's tone?
- Was the integration over 90s?

If integration is the issue: revise the integration's placement and tone for next sponsor-bearing video.

### Hypothesis 6 — Title-thumbnail-promise mismatch

If the cliff is at 0:00–0:30 AND the comments report "this isn't what I expected" or similar:

- Did the title and thumbnail promise X but the first 30 seconds delivered Y?
- Did the hook deliver on the promise type / intensity / topic?

If title-thumbnail mismatch is the issue: re-thumbnail and re-title (where platform allows). For the next video, run the alignment check more rigorously (INV-10).

### Hypothesis 7 — Mode mismatch

If the audience composition data shows broad reach (the video pulled non-target audience):

- Was the video calibrated for the audience that actually watched?
- Did the title pull a reach-mode audience to an authority-mode video?

If mode mismatch is the issue: tag the video as the wrong-mode learning. Update the title-craft library to avoid the mismatch in future.

### Hypothesis 8 — Sophistication-stage match

If the audience comments report "too basic" or "too advanced":

- Did the video target the right awareness level (per INV-13)?
- Was the language calibrated (specialist vocabulary vs accessible)?

If sophistication-stage is the issue: revise the channel architecture so videos at this awareness level are routed differently. Update the audience compartment to reflect the actual awareness distribution.

## Step 5 — Form the hypothesis

After running the hypotheses, identify the most likely cause(s). Sometimes multiple causes compound:

- "Hook was OK but the first major premise didn't land at 2:30, and the viewer dropped because the loop wasn't open."
- "Pacing was fine in isolation, but the sponsor integration at 6:00 was too long and broke the flow."
- "Title pulled reach audience; video was authority-mode; audience-content mismatch produced the steady decline."

Prioritize the most-impactful cause for the corrective action.

## Step 6 — Decide on corrective action

Three categories:

### Category A — Re-edit and re-publish (rare, platform-policy gray)

If the video has a fixable issue (bad hook, bad sponsor-placement) AND the channel can absorb the platform-policy concern, re-edit and re-publish as a new video. Original goes unlisted.

This is rare. Most videos are kept as-is and the lessons applied to next video.

### Category B — Update title / thumbnail / description

If the issue is title-thumbnail-promise mismatch, update the title and/or thumbnail without re-uploading. The platform allows title and thumbnail edits; the video's URL stays the same. Test for 14–30 days post-update.

### Category C — Apply the lesson to next video

The most common path. Document the lesson; integrate into the next video's pre-production. The current video remains as-is in the library.

## Step 7 — Library-compound entry

Run `/library-compound` for the postmortem video specifically. The entry captures:

- **What went wrong** — drop point + diagnosis
- **Why it went wrong** — cause attribution
- **What's the fix** — corrective action category and details
- **Pattern attribution** — does this drop pattern match other underperforming videos? (Pattern emergence is the highest-leverage signal.)
- **Hook bank update** — if the hook was the issue, mark the hook formula as below-band for this channel
- **Retention-floor recalibration** — if the channel's retention floor was set too high (the predicted-band miss), recalibrate per actual data

The library-compound entry is the encoding mechanism. The lesson learned doesn't stay siloed — it updates compartments, feeds future videos, and sharpens the OS's prediction.

## Step 8 — Update the compartments

Based on the postmortem, update relevant compartments:

- **Compartment 6 (Hook & Retention OS)**: hook-bank tier-down for the failed hook formula; loop-architecture refinement; pattern-interrupt cadence revision
- **Compartment 8 (Distribution & Algorithm)**: title-craft adjustment; thumbnail-design-system revision
- **Compartment 7 (Production & Post)**: editing-rhythm calibration; cut-density revision

The compartment updates are durable. They're the cycle-2 calibration that prevents the same retention failure from recurring.

## Step 9 — Communicate to the team

If the channel has a team (editor, writer, thumbnail designer):

- Share the postmortem
- Share the corrective action
- Update each role's brief

The team learns alongside the operator. Without team-level communication, the same craft mistake recurs across team members.

## Step 10 — Resist over-correction

A retention failure on one video is data; it's not a verdict on the channel's strategy. Resist:

- Pivoting the channel's positioning based on one bad video
- Switching content modes based on one bad video
- Abandoning a content category based on one bad video

The OS's invariant is: diagnose, document, iterate. Over-correction is its own failure mode.

## Failure modes

### Skipped postmortem

**Failure**: a video tanks on retention; no postmortem runs. The same craft mistake recurs; the channel's retention floor doesn't recalibrate.
**Prevention**: postmortem is a non-negotiable response to a retention floor breach. Schedule the postmortem at Day 7–14 post-publish.

### Generic diagnosis

**Failure**: the postmortem says "the video was bad" without identifying the specific cause. No corrective action is meaningful.
**Prevention**: hypothesis-driven diagnosis per Step 4. Specific cause attribution.

### Single-cause attribution

**Failure**: the postmortem identifies one cause when multiple compound. The corrective action addresses one cause; the compound effect of the others remains.
**Prevention**: explicit compound-cause analysis per Step 5.

### No library-compound entry

**Failure**: the lesson is identified but not encoded into compartments. The next video makes the same mistake.
**Prevention**: Step 7 + Step 8. The compartment updates are the encoding.

### Over-correction

**Failure**: one bad video triggers a channel-wide pivot. The pivot underperforms the original positioning.
**Prevention**: Step 10. Diagnose, document, iterate — not pivot.

### Audience-blame

**Failure**: the diagnosis attributes the failure to "the algorithm" or "the audience didn't get it" rather than craft. The operator learns nothing.
**Prevention**: hypothesis-driven diagnosis is craft-first. Audience or algorithm explanations are later-resort, not first-resort.

### Postmortem-as-shame

**Failure**: the postmortem feels punitive; the operator avoids it; future failures don't get diagnosed.
**Prevention**: postmortem framed as encoding work, not blame. Failure is data; data is leverage.

## Calibrating the retention floor

A repeated retention floor breach across multiple videos signals that the floor is set too high (or that the channel's craft is below band). Diagnose:

- If multiple videos in a row miss the floor by similar margins: the floor is too high. Recalibrate to the channel's actual band.
- If videos miss the floor sporadically with diverse causes: the floor is right; craft is the variable. Apply per-video lessons.
- If videos miss the floor in a pattern (e.g., all reach-mode videos miss; all authority-mode videos hit): the floor is correct but mode-specific calibration is needed. Different floor per mode.

The retention floor (per INV-9) is a calibrated band, not a fixed value. Recalibration is part of the OS's lifecycle.

## What this playbook doesn't cover

Per-video retention engineering: see `/retention-engineer`. Per-video retention auditing: see `/audit-retention`. The retention-floor spec: see `spec/retention-floor.md`. Channel-wide leak diagnosis: see `/leak-audit`. Library compounding: see `/library-compound`.

---

*v1.0 — 2026-05-03. The structured response to a retention failure. Failure is encoded; the OS sharpens.*

*A Heuresis workspace template.*
