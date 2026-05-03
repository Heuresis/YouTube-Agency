# Script-to-Edit Handoff

> The contract between content-head (script delivery) and production-head (edit briefing). Defines what the editor receives and what they're expected to produce against it.

---

## What ships from content-head to production-head

When a script clears retention engineering and title-thumbnail-promise alignment, the production-head receives a bundle:

```
script-to-edit-bundle/
├── script.md                  ← the approved script with mode + awareness declared
├── editor-brief.md            ← cuts / b-roll / music / supers direction
├── thumbnail-brief.md         ← thumbnail composition spec
├── title-options.md           ← 5–10 title candidates with predicted CTR
├── description.md             ← description copy with link stack
├── publish-checklist.md       ← end-screens, cards, premiere config, community pre-post
└── metadata.yaml              ← signal 5-tuple, frameworks used, compartments cited
```

Every bundle is complete before edit starts. No "we'll figure out the title later." The editor edits against the title-thumbnail unit; that requires it to exist before the cut starts.

---

## The editor's authority

What the editor decides on their own:
- Specific cut placement (within the brief's density target)
- Specific b-roll selection (within the brief's source pool)
- Specific music track within the band declared in the brief
- Super placement and timing
- Caption styling (within channel-wide style)
- Color grading (within channel-wide grade)

What requires creator approval:
- Departures from the brief
- Music selections outside the licensed library declared in `company.yaml.operations_intelligence.ip_licensing.music_library_license`
- Anything that touches the creator-as-character distinction
- Sponsor segment treatment beyond the brief

---

## Edit verification before publish

When the editor finishes, the bundle goes to publish-checklist. The check:

1. Cut density per minute matches brief target (±10%)
2. B-roll sources match brief
3. Music attribution matches brief; license verified
4. Super placement matches brief
5. Captions present and styled per channel standard
6. Pattern-interrupt cadence sustained (≤60s gaps)
7. No accidentally-introduced banned vocabulary in supers
8. No accidentally-included third-party material that wasn't in the brief
9. Sponsor disclosure present at correct timing per `spec/sponsor-disclosure.md`
10. Final cut length within 10% of script-predicted length

If any check fails, the bundle returns to editor with specific diagnosis. Max 2 revisions; then escalation to creator (same pattern as quality-revision).

---

## What changes when team config changes

### Solo
The creator IS the editor. The brief is shorthand for themselves. Less detailed. Verification is informal (creator reviews own work).

### Creator + Editor
The brief is the editor's daily input. Detailed. Verification is the creator's pre-publish review.

### Full Studio
The producer manages the handoff. Editor receives the bundle from producer. Producer enforces the brief; editor executes.

---

## Common failure modes

1. **Brief not specific enough.** "Add some b-roll" → editor guesses. Fix: brief specifies density per minute + source pool + thematic categories.
2. **Editor freelances on music.** Editor uses a track outside the licensed library. Copyright risk. Fix: brief explicitly names the library; editor chooses within it.
3. **Edit drifts from script intent.** Editor cuts a section that the script flagged as load-bearing for retention (e.g., the loop-open). Cut breaks the loop. AVD craters. Fix: brief flags load-bearing sections explicitly; editor cannot remove without flagging.
4. **Title-thumbnail finalized after edit.** Editor edits without knowing the title-thumbnail unit. Final video doesn't deliver on the title-thumbnail promise. INV-10 fails at publish. Fix: title-thumbnail-pair runs BEFORE editor brief; editor edits to the title-thumbnail unit, not in isolation.
5. **No sponsor segment guidance.** Editor cuts the sponsor segment without disclosure. Publish-checklist catches it (or worse, doesn't). Fix: editor brief explicitly specifies sponsor segment timing + disclosure copy + on-screen super.
6. **Edit feedback loop too long.** Creator reviews edit, sends 30 notes, editor revises, creator reviews again. Days lost. Fix: limit creator review to 5 highest-priority notes; trust the editor on the rest.

---

## Library compounding

Every published video's edit-vs-brief deviation is logged. Patterns surface:

- Editor consistently cuts longer than briefed → recalibrate brief target up
- Editor consistently chooses music X over music Y from the band → narrow the band
- Editor consistently flags load-bearing sections as too verbose → script-writer recalibrates section length

The handoff's calibration improves every cycle. The encoded library remembers what worked; the brief gets sharper.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
