# Weekly Content Cycle — The Operational Rhythm

> The week-by-week execution rhythm that turns the encoded workspace into a working channel. Calibrated per team configuration. The cycle compounds — week N+1 starts where week N ended.

---

## The shape of the week

The encoded channel runs a weekly rhythm. The rhythm is the same regardless of team size, but the ownership shifts as the team grows.

```
Monday:    Read leak audit. Set week priorities. Idea-farm review.
Tuesday:   Research + outline pass on the week's primary video.
Wednesday: Recording day. Often 1–2 videos shot.
Thursday:  Approve thumbnail brief, title, description, editor brief. Hand off to edit.
Friday:    Edit completes (or continues). Community cadence. Inbound application review.
Saturday:  Buffer day. Repurposing cascade. Optional second recording.
Sunday:    Library compound review. Set up next week.
```

This is the default rhythm. Some channels publish twice a week — the cycle compresses. Some publish biweekly — the cycle extends.

---

## Monday — Strategic-layer day

### What happens

The OS runs `/leak-audit` on Sunday night (cron) so the report is waiting Monday morning. The creator (or producer in full-studio config) reads the six-layer diagnostic:

- Where's the upstream constraint this week?
- What's the recommended fix?
- What's the priority skill to invoke?

### Owner

- **Solo**: creator
- **Creator + editor**: creator
- **Full studio**: producer reads daily, creator reads Monday

### Time investment

- Solo: 2–3 hours (read audit + idea-farm review + week's content priorities decided)
- Creator + editor: 2 hours
- Full studio: 1 hour for creator (producer has done the prep)

### Deliverables

- This week's video slate (1–3 videos depending on cadence)
- Mode mix decision (e.g., "this week is 2 authority + 1 reach")
- Awareness level decision per video
- Any strategic-layer compartment updates triggered by the audit

### Common Monday failure modes

- Skipping the leak audit because it feels long. Fix: it's the most-leveraged 30 minutes of the week.
- Letting the audit dictate the slate without creator judgement. Fix: the audit recommends; the creator decides.
- Adding "one more video" beyond capacity. Fix: respect the publishing cadence; the slate is fixed before Tuesday.

---

## Tuesday — Research + outline day

### What happens

For each video on the slate, run `/research-brief`. The OS produces a research pack: angle options, audience-language to mirror, frameworks to apply, anti-hooks to avoid.

The creator (or writer in full-studio) does a 30-90 minute outline pass per video. The outline becomes the input to script-writing.

### Owner

- **Solo**: creator
- **Creator + editor**: creator (editor not yet involved)
- **Full studio**: writer (creator approves outlines)

### Time investment

- Solo: 3–4 hours (1–2 videos × 1.5–2 hr each)
- Creator + editor: 3 hours
- Full studio: 30 min creator approval; writer's full-day work

### Deliverables

- Research brief per video
- Outline per video
- Hook formula choice per video
- Loop architecture decision (where loops open + close)

---

## Wednesday — Recording day

### What happens

The creator shoots all the week's videos. Often two videos in one session — efficiency comes from setup once + multiple shoots.

The script is the guide. The on-camera persona overlay (from Compartment 1) shapes delivery — pace, energy, gesture, eye line. The creator references the script's load-bearing sections (loops, callbacks, key claims) to make sure they're delivered correctly.

### Owner

- All configs: creator (the only irreducible work)

### Time investment

- 4–6 hours (setup + record + b-roll capture if any)

### Deliverables

- Raw footage for all week's videos
- Any on-camera deviations from script flagged for the editor

### Failure modes

- Recording without the script in front of you. Causes load-bearing section misses.
- Shooting too tired. Energy drops mid-script. Editor can't fix energy in post.
- Skipping the b-roll capture. Editor scrambles to find stock; can't recreate the creator's literal environment.

---

## Thursday — Production-prep day

### What happens

For each recorded video, the OS produces:

- `/thumbnail-brief` — composition spec
- `/title-thumbnail-pair` — 5–10 paired concepts with predicted CTR
- `/title-options` — title alternatives if more breadth needed
- `/description-builder` — description with timestamps + link stack
- `/editor-brief` — cuts/b-roll/music/supers direction

The creator (or producer) reviews all five outputs. Approves. The editor receives the bundle.

### Owner

- **Solo**: creator
- **Creator + editor**: creator approves; editor receives bundle
- **Full studio**: producer assembles bundle; creator approves at high-level; editor receives

### Time investment

- Solo: 1–2 hours
- Creator + editor: 1 hour creator + handoff
- Full studio: 30 min creator + 2 hours producer

### Deliverables

- Approved bundle per video, ready for edit

### Failure modes

- Approving thumbnails without checking title-thumbnail-promise (INV-10) alignment. Fix: trust the gate; if it flags, revise.
- Spending 3 hours on thumbnail iteration. Fix: pick fast; the title-thumbnail unit is recoverable post-publish; the retention is not.

---

## Friday — Edit + community day

### What happens

Edit progresses (1–2 day edit cycle is normal for long-form). The creator handles community cadence:

- Reply to high-signal comments from earlier-week videos
- Post on community tab per the cadence in `company.yaml`
- Check inbound applications, route to call or to nurture
- Take any sales calls (creator-only)

### Owner

- **Solo**: creator (everything)
- **Creator + editor**: editor on edit; creator on community + sales
- **Full studio**: editor on edit; community-manager on community; setter on calls

### Time investment

- Solo: 4–6 hours (community + sales calls)
- Creator + editor: 2 hours creator (community + sales); editor on edit
- Full studio: 1 hour creator; full team on respective work

### Deliverables

- Friday's edit milestone
- Community presence sustained
- Inbound applications triaged

---

## Saturday — Repurposing + buffer

### What happens

The week's published videos get processed by `/repurposing-cascade`:

- 1 long-form → 5–10 Shorts cuts
- 1 long-form → 3–5 social posts (LinkedIn / X / threads)
- 1 long-form → 1–2 emails

Optional: a second recording session if the week's slate requires it.

### Owner

- **Solo**: creator (often skipped if tired; the OS produces drafts; creator picks what to schedule)
- **Creator + editor**: editor handles cuts; creator may write social posts
- **Full studio**: short-form specialist handles cuts; community-manager handles social

### Time investment

- Solo: 2–4 hours
- Creator + editor: 1 hour creator; 4 hours editor
- Full studio: 30 min creator approval; full team on respective work

---

## Sunday — Library compound + next-week prep

### What happens

The OS runs `/library-compound` on Sunday night (cron) so the patterns are extracted into the library by Monday morning. The creator (or writer) reviews:

- New patterns surfaced from the week's published videos
- Compartment update suggestions (auto-applied for low-risk, queued for creator approval otherwise)
- Framework calibration notes
- Any library-grade specimens to add to swipe-file

The next week's slate starts forming from the idea-farm + the patterns surfaced.

### Owner

- All configs: someone (creator in solo; producer or writer in larger configs)

### Time investment

- 1–2 hours

---

## What changes by team config

### Solo
- Creator owns 100% of the strategic + execution work
- Total weekly hours: 12–18
- The OS absorbs 60% of the work that a full-studio team would do

### Creator + editor
- Creator owns strategic + recording + community + sales
- Editor owns edit + thumbnail + repurposing + publishing
- Total weekly hours: creator 12–14, editor 25–35

### Full studio
- Creator owns strategic + recording + sales (key calls)
- Producer owns coordination + ops + sponsor relationships
- Writer owns research + script voice-pass
- Editor (1–2) owns edit + repurposing
- Thumbnail designer owns thumbnails
- Community manager owns community + email
- Sales setter owns inbound calls
- Total weekly hours: creator 8–12; team total 100–150 (depending on volume)

---

## When the cycle breaks

The cycle is designed to be repeatable. When it breaks:

1. **Recording missed** — the week's slate slips. Fix: have a 2-video buffer in the publishing schedule so a missed day doesn't break the calendar.
2. **Edit takes too long** — the publish slot moves. Fix: the editor's brief should target a known edit-time-per-video; if it's drifting, the brief is too loose or the editor needs more support.
3. **Community lapses** — high-signal comments go unanswered. Fix: minimum 1 hour/week on community for solo + creator-plus-editor configs.
4. **Library compound skipped** — patterns don't get extracted. The OS doesn't compound. Fix: it's a 1-hour weekly task; non-negotiable.
5. **Sales calls pile up** — inbound velocity exceeds capacity. Fix: hire a setter; or reduce inbound rate (tighten the application qualification questions).

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
