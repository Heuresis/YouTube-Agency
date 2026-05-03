# Description Template

> Description with timestamps + link stack template. The description appears below the video, partially visible above-fold in the YouTube viewer. Below-fold (after click "show more"), full description is shown. This template specifies what goes where and why.

## Frontmatter

```yaml
video_title: <full title>
video_length_min: <length>
primary_cta: <lead-magnet | pinned-VSL | application | subscribe | none>
secondary_cta: <secondary action>
keywords_to_include: [<list of search-relevant keywords>]
sponsor: <sponsor name if sponsored, with disclosure>
```

## The description structure

### Above-fold (first 2–3 lines, ~150 characters)

This is what viewers see without clicking "show more." Used for:

- Primary CTA / lead-magnet link
- Hook-equivalent description that complements the title

```
👋 Free [Magnet Name]: [link]
[1-sentence value proposition for the magnet]

✅ Subscribe for [content cadence]: [channel link]
```

### Below-fold

After "show more," full description.

#### Sponsor disclosure (if applicable, INV-15)

If the video is sponsored, disclosure is in the description AND verbally in the video. Description format:

```
This video is sponsored by [Sponsor]. Use code [CODE] for [discount] at [link].
#ad #sponsored
```

The disclosure is in the first 200 characters of the below-fold section. Compliance per jurisdiction (US: FTC; UK: ASA; EU: country-specific). See `spec/sponsor-disclosure.md`.

#### Video summary (3–5 sentences)

A summary of what the video covers. Useful for:

- Search algorithm context (keyword-rich)
- Viewers who scan before watching
- Description-link click-context

```
In this video, [creator first name] walks through [topic]. We cover [point 1], [point 2], and [point 3]. By the end, you'll [transformation / takeaway].

If you want to go deeper, [primary CTA link].
```

#### Timestamps (chapter markers)

YouTube uses 0:00 timestamps as chapter markers. Format:

```
📺 Timestamps:
0:00 — Intro
0:30 — [Section 1 name]
2:45 — [Section 2 name]
6:00 — [Section 3 name]
9:15 — [Section 4 name]
12:30 — [Synthesis]
14:00 — [CTA]
```

The first timestamp must be 0:00. Subsequent timestamps must be ≥ 10 seconds apart and in ascending order. Chapter markers improve AVD because viewers can scrub to relevant sections.

#### Resources mentioned

Links / references mentioned in the video, in order of mention:

```
🔗 Resources mentioned:
• [Resource 1] — [link]
• [Resource 2] — [link]
• [Resource 3] — [link]
```

#### Recommended next videos

The channel architecture's routing — videos in the foundational playlist or natural sequels:

```
📺 Watch next:
• [Video title 1] — [link]
• [Video title 2] — [link]
• [Video title 3] — [link]
```

#### Pinned-VSL routing (for authority videos)

If the channel has a pinned VSL, the description references it (positioned after the timestamps and watch-next, before social):

```
🎯 If [outcome / transformation], the next step is [back-end offer name]. Learn more here: [pinned VSL link]
```

The framing is value-driven, not pushy.

#### Channel resources / social

Links to:

```
🌐 More from [creator first name]:
• Email list: [link]
• Twitter/X: [link]
• LinkedIn: [link]
• Podcast: [link]
• Course / Program: [link]
```

#### Disclaimer (regulated niches)

For finance / health / regulated content, the disclaimer appears at the bottom of the description:

```
⚠️ Disclaimer: This video is for educational purposes only and does not constitute [financial / medical / legal] advice. Consult a [appropriate professional] before [taking action]. [Operator name] is not a [regulated professional title]. Past performance is not indicative of future results.
```

The disclaimer language is jurisdiction-specific and offer-specific.

#### Hashtags

YouTube allows up to 15 hashtags. The first 3 appear above the title in the viewer.

```
#[primary-niche] #[secondary-niche] #[topic] #[mechanism] #[creator-handle]
```

Hashtags should be relevant — generic spam-style hashtag stuffing reduces algorithmic surfacing.

## Description by mode

### Authority video description

- Above-fold: lead-magnet bridge OR foundational playlist link
- Sponsor disclosure (if sponsored)
- Summary (keyword-rich)
- Timestamps
- Resources mentioned
- Pinned-VSL routing
- Watch next (foundational playlist routing)
- Channel resources

### Reach video description

- Above-fold: subscribe + foundational playlist (no offer pitch)
- Sponsor disclosure (if sponsored)
- Summary (broad, keyword-rich for reach)
- Timestamps
- Resources mentioned (if any)
- Watch next (foundational playlist routing)
- Channel resources
- (No direct pinned-VSL pitch in description for reach mode — channel architecture routes)

### Pinned VSL description

- Above-fold: application link prominent
- Summary of what the VSL covers + invitation to apply
- Timestamps
- Resources mentioned (if any)
- Channel resources
- Disclaimers as required

### Shorts description

- Brief: 2–4 lines maximum
- Bridge target (long-form video link or pinned-VSL)
- 3–5 hashtags
- Channel handle

## Verification checklist (pre-publish)

- [ ] Above-fold has primary CTA / lead-magnet link
- [ ] Sponsor disclosure (if sponsored — INV-15)
- [ ] Timestamps formatted correctly (first is 0:00; ascending; ≥10s apart)
- [ ] Resources mentioned with working links
- [ ] Watch-next routing matches channel architecture
- [ ] Pinned-VSL routing present (for authority videos with developed back-end)
- [ ] Disclaimers (for regulated niches)
- [ ] Hashtags relevant (no spam-stuffing)
- [ ] No banned vocabulary in description (INV-7)
- [ ] No engagement-bait language (INV-17)
- [ ] Working links audited (no broken URLs)

## Description maintenance

The description is a maintainable artifact:

- **Quarterly link audit** — broken-link sweep across the library
- **Lead-magnet rotation** — when the magnet changes, descriptions update
- **Pinned-VSL update** — when the pinned VSL is revised, descriptions reference the latest version
- **Tool-version notes** (for productivity / tech videos) — note in the description if the video uses an old tool version, with link to updated version

Library hygiene is operations work; descriptions are part of the surface that hygienes.

---

*v1.0 — 2026-05-03. Description template. The text below the video; the channel architecture's routing surface.*

*A Heuresis workspace template.*
