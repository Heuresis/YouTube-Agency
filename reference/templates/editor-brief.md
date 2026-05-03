# Editor Brief Template

> Cuts / b-roll / music / supers brief template. The editor brief translates the script into a production blueprint. The brief reflects the channel's editing rhythm, b-roll grammar, and pattern-interrupt cadence — and ensures every video meets the channel's signature production tier.

## Frontmatter

```yaml
video_title: <working title>
video_length_target_min: <length>
mode: <authority | reach | hybrid>
script_path: <path to script file>
recording_files: [<list of recording files>]
deadline: <delivery date>
editor: <name>
production_tier: <standard | high | flagship>
target_avd_pct: <calibrated to channel band>
```

## Section-by-section spec

For each section of the script, specify:

### Section [N] — [Section name] — [timestamp range]

**Cut density**: <cuts per minute target>
**B-roll percentage**: <0-100>
**Music**: <under-score / hits / shift / silence>
**Supers**: <on-screen text moments — list>
**Pattern interrupts**: <list with timestamps>

Example:

> ### Section 1 — Hook stack — 0:00–0:30
>
> Cut density: 8–10 cuts (high — opening density)
> B-roll: 30% (operator's face dominant in opening for parasocial trust)
> Music: opens with hit, transitions to under-score at 0:08
> Supers: "[hook claim]" at 0:03; "[bound promise]" at 0:18
> Pattern interrupts: cut at 0:08 (first loop opens); cut at 0:18 (re-promise); music shift at 0:30

## B-roll grammar

The channel's b-roll signature:

- **Sources**: stock library / archive / shot-for-this-video / screen-recording / animation
- **Density per minute**: <calibrated to channel signature>
- **Style**: documentary / cinematic / minimal / informational
- **Avoid patterns**: <list>

Specify per-video:

- **Opening b-roll**: <description>
- **Mid-video b-roll moments**: <list with timestamps>
- **Case-study / example b-roll**: <if applicable>

## Music

- **Track**: <track name from licensed library>
- **Use**: under-score / hits-only / front-and-back / none
- **Energy curve**: <how the track shifts across the video>
- **Volume mix**: <0-100; typical: 15-30 under voiceover>

For different sections:

- **Opening**: <music spec>
- **Body**: <music spec>
- **Synthesis**: <music spec>
- **CTA**: <music spec>

## Supers (on-screen text)

Per-section:

- **Section title supers**: <yes/no>
- **Statistic / quote callouts**: <list with timestamps and text>
- **Key-phrase emphasis supers**: <list>
- **Lower-thirds**: for guests / testimonials / sources
- **Disclaimer supers**: required where regulated content (financial / health / sponsor disclosure)

Style:

- **Font**: from channel design system
- **Position**: <upper-third / lower-third / center / specific>
- **Animation**: <fade / slide / cut-in>
- **Duration**: <how long each super stays on screen>
- **Color**: <from design system>

## Pacing rules

- **Pattern-interrupt cadence**: every 45–60s minimum (INV-11)
- **Energy variance**: high-low alternation across the video; no flat sustained sections > 2 min
- **Transition cuts**: at section boundaries; shift in music or framing reinforces

## Sponsor integration (if applicable)

If the video includes a sponsored segment:

- **Placement**: pre-roll / mid-roll / end-roll
- **Length**: <60-90s typical>
- **Disclosure**: per INV-15 — "#ad" / "#sponsored" verbal at start + on-screen throughout
- **Visual treatment**: distinct from organic content (sponsor card, color shift) so the disclosure is unambiguous
- **Specific talking points**: <from sponsor brief>
- **Do's and don'ts**: <from sponsor contract>

See `reference/templates/sponsor-integration.md` for the integration script template.

## Pinned-VSL-specific cues (if pinned VSL)

For the pinned VSL, additional editing discipline:

- **Section transitions match the 15 steps**
- **Each step's belief-installation tagged in the timeline**
- **Energy arc rises through Steps 1–8; peaks at Steps 9–13; resolution in 14–16**
- **No accidental "wrap-up" energy before Step 12 (Crossroads)**
- **Application URL prominent on screen during Step 14 and Step 16**

## Reach-video-specific cues (if reach)

For reach mode:

- **Higher cut density** (4–7 cuts per minute typical)
- **Higher b-roll density** (50–70%)
- **More dynamic music** (energy shifts at every section)
- **Color grading / motion graphics** at higher production tier
- **Pattern-interrupts every 30–45s** (denser than authority's 60s)

## Quality control

The editor's deliverables:

- **First cut**: 100% of length, all sections, rough audio mix
- **Refined cut**: trimmed for pacing, retention engineering applied, color grade
- **Final cut**: full audio mix, all supers, all music, all b-roll, sponsor compliance check

The creator reviews each cut before approval (60/40 principle — the creator's taste is the final filter).

## Deliverables checklist

- [ ] Final cut .mp4 (resolution per channel: 1080p / 4K)
- [ ] Audio levels normalized to platform standard (-14 LUFS recommended)
- [ ] Captions / subtitles file (.srt)
- [ ] Thumbnail .jpg (per `thumbnail-brief.md`)
- [ ] Timestamp file for description (chapter markers)
- [ ] Pre-publish verification: title-thumbnail-promise alignment confirmed (INV-10)
- [ ] Pre-publish verification: retention-floor predicted ≥ band (INV-9)
- [ ] Sponsor disclosure compliance (if sponsored — INV-15)
- [ ] No banned vocabulary in supers / lower-thirds (INV-7)

## Communication protocol

- **Editor questions**: routed to creator OR production-head (per channel team structure)
- **Editor revisions**: max 2 revision rounds before escalation
- **Creator final approval**: required before publish
- **Post-publish notes**: editor receives feedback for next-cycle calibration

## Editor onboarding (first-cycle)

For new editors:

- Read SYSTEM.md + INVARIANTS.md + ENCODING.md
- Read `reference/canonical/AGENT-ARCHITECTURE.md`
- Read the channel's design system (compartment 7)
- Watch the channel's 5 highest-AVD videos with editing-eye
- Review 2–3 prior editor briefs and their resulting videos
- Begin with a video the creator has already edited (re-cut as a calibration exercise)

The encoding flywheel applies: cycles 1–2 are calibration; cycles 3+ are durable.

---

*v1.0 — 2026-05-03. Editor brief template. The script translated into production blueprint.*

*A Heuresis workspace template.*
