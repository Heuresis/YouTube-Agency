# Thumbnail Brief Template

> Composition spec template for thumbnails. The thumbnail is half of the title-thumbnail-unit (INV-10). The other half is the title; together they make the click-and-stay promise. This brief specifies what goes in the thumbnail, why, and how it aligns with the title and the first 30 seconds of the video.

## Frontmatter

```yaml
video_title: <full title>
video_length_min: <length>
mode: <authority | reach | hybrid>
content_pillar: <pillar from compartment 5>
thumbnail_designer: <name or "operator">
target_ctr_pct: <calibrated to channel band>
title_thumbnail_promise: <1-sentence statement of what the title+thumbnail promise>
first_30s_summary: <1-sentence summary of the first 30s content; for INV-10 alignment>
```

## Composition specification

### Visual hierarchy

What the eye sees first, second, third. In order:

1. **Primary subject** — face / object / contrast / number — what carries the click signal
2. **Secondary element** — context / supporting visual / second comparison
3. **Text overlay** — 2–5 words; reinforces but does not duplicate the title

### Layout

Choose the channel's signature composition or specify:

- **Face-left, text-right** — operator's face takes left third, text occupies right two-thirds
- **Face-right, text-left** — mirrored
- **Center-frame** — single focal subject centered
- **Split-half** — two halves comparison (works for contrast formats)
- **Object-focus** — object/screenshot dominant; operator small or absent
- **No-face** — text + visual without operator's face (rare for parasocial-trust channels)

### Face grammar (if face is in frame)

Specify the operator's facial expression:

- Surprise (eyes wide, mouth open) — energy, shock
- Contrarian-stare (level gaze, slight smirk) — authority, contrarian-frame
- Smile (warm) — approachability, story-driven content
- Open-mouth (mid-speech) — animation, energy
- Confident-stare (direct camera) — authority, mechanism content
- Vulnerability-tone (softer expression) — narrative content

### Object grammar (if object is in frame)

What object, why:

- Document / chart / number — analytical or finance content
- Screenshot — productivity / tool content
- Product — review or comparison
- Symbol / icon — abstract concept made concrete

### Color palette

The channel's accent color + secondary color from `production_and_post.thumbnail_design_system`. Specify:

- **Primary color** — dominant in the frame
- **Accent color** — for emphasis (text, highlights)
- **Background** — flat / textured / scene-based
- **Contrast ratio** — high contrast for readability on small phone screens

### Typography

The channel's font + weight + style:

- **Font** — from design system
- **Weight** — bold / extra-bold (thumbnails default heavy)
- **Style** — italic / regular / display
- **Size** — large enough for phone-screen-readability
- **Effect** — outline / shadow / glow (for legibility against background)

### Text density

How many words on the thumbnail:

- **2–3 words** — punchy, single concept
- **3–5 words** — slightly more context
- **6+ words** — typically too dense; viewers can't parse on scroll

The text on the thumbnail does not repeat the title. It complements: the title says X, the thumbnail text adds Y, together they signal X+Y.

## Title-thumbnail-promise alignment (INV-10)

This is the gate. Run before approving the thumbnail.

### The alignment check

1. **Read the title's promise**: what specifically does the title commit the video to?
2. **Read the thumbnail's visual promise**: what does the visual + text-overlay commit the video to?
3. **Read the first 30 seconds of the script**: what does the script deliver in the first 30s?

These three must match in:

- **Promise type** (what genre of payoff: insight / framework / contrast / story / case-study)
- **Promise intensity** (how strong is the implied payoff: stark / surprising / educational / contemplative)
- **Promise topic** (the specific subject)

### Misalignment markers

- Title promises a contrast; thumbnail shows a single subject (intensity mismatch)
- Title promises an insight; thumbnail shows a stark face (type mismatch)
- Title says X; thumbnail visual implies Y (topic mismatch)
- Thumbnail uses high-shock visual; first 30s is calm and contemplative (intensity mismatch)

If misalignment surfaces, revise. Misalignment costs more than CTR underperformance — it produces high CTR with poor retention, which the algorithm reads as a low-quality signal and suppresses long-term.

## A/B testing protocol

For channels using TubeBuddy or YouTube Studio's native A/B testing:

- **Test variants**: 2–3 thumbnails for the same video
- **Variant variation**: differ on one variable (face vs. object, text vs. no-text, color)
- **Test duration**: 14–30 days post-publish
- **Winner criterion**: the variant with the higher CTR + AVD-signal combination

Avoid: testing thumbnails that vary on multiple variables (you can't isolate the lever); declaring winners before 7 days (variance dominates short windows).

## Banned thumbnail patterns

INV-7 + INV-17 apply. Banned:

- Misleading visuals (showing something not in the video)
- Manufactured shock-faces unconnected to the content
- Fake "X marks the spot" arrows pointing at non-existent things
- Engagement-bait visual cues (e.g., a comment-box visual implying "comment YES")
- Thumbnails that imply violence, harm, or inappropriate content for clickbait
- Brand / channel / operator names not actually present in the video

## Production deliverables

Final thumbnail file:

- **Resolution**: 1280x720 minimum (16:9)
- **Format**: JPG or PNG
- **File size**: under 2MB (YouTube limit)
- **Color profile**: sRGB
- **File naming**: `<video-slug>-thumb-v1.jpg`

Variant files (for A/B test):

- `<video-slug>-thumb-v1.jpg`
- `<video-slug>-thumb-v2.jpg`
- `<video-slug>-thumb-v3.jpg`

## Verification checklist (pre-publish)

- [ ] Title-thumbnail-promise alignment confirmed (INV-10)
- [ ] Visual hierarchy clear (1, 2, 3 in order)
- [ ] Face grammar matches video tone
- [ ] Color palette matches channel design system
- [ ] Text overlay 2–5 words; does not duplicate title
- [ ] Phone-screen readability tested (preview at 200x113 px)
- [ ] No misleading visuals
- [ ] No engagement-bait
- [ ] File specs met (resolution, format, size)
- [ ] A/B variants prepared (if running test)

---

*v1.0 — 2026-05-03. Thumbnail brief template. Half of the title-thumbnail-unit; the other half is the title.*

*A Heuresis workspace template.*
