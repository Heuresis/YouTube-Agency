---
name: thumbnail-brief
command: /thumbnail-brief
description: Brief the thumbnail — composition, face/object grammar, contrast, text density, A/B test design.
tier: sonnet
agent_owner: production-head
agent_executor: thumbnail-designer
required_compartments:
  production_and_post: 40
  channel_architecture: 50
  audience_intelligence_system: 50
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.production.thumbnail.brief
  format: MARKDOWN
  weight: 0.6
banned_when: []
verification_layers: [formal, semantic, info-theoretic, title-thumbnail-promise, copyright-fair-use]
---

# Thumbnail Brief

## Purpose
Produce a thumbnail brief — composition, face grammar, object grammar, contrast rules, accent/secondary colors, typography, text density, A/B test design — for the channel's thumbnail designer to execute. The thumbnail is half of the title-thumbnail-unit (INV-10): together with the title, it makes the promise the first 30s of video must deliver.

## Decision Logic
The thumbnail competes against 10-30 other thumbnails on every viewer's home / suggested feed. Its job: get the click, then deliver the promise.

The composition system is encoded in `production_and_post.thumbnail_design_system`. Each video's thumbnail honors the system but varies the face/object/text density per topic.

The face grammar matters: surprise / contrarian-stare / smile / open-mouth / no-face. Each conveys different promise. Authority videos lean contrarian-stare or measured. Reach videos lean surprise or open-mouth.

The text density matters: 2-3 words for tight visual punch / 3-5 words for clarity / phrase for context. More text = lower CTR usually. Test exceptions.

The accent color and typography system is locked at the channel level — the thumbnail brief works within the system, not against it.

## Tacit Principles
1. **Visual hierarchy: face → text → object.** The viewer reads in this order.
2. **Contrast wins clicks.** Background + face + text must have separable visual contrast (test grayscale).
3. **One emotion at a time.** Don't mix surprise + smile + contrarian-stare. Pick one.
4. **The text doesn't repeat the title.** Title says one thing; thumbnail says complementary thing.
5. **Awareness level shapes face grammar.** Problem-aware → surprise / open-mouth (curiosity). Solution-aware → contrarian-stare / measured (authority). Most-aware → measured / no-face (offer).
6. **A/B test deliberately, not constantly.** Two variants per video. Lock the system, test the variables.
7. **Title-thumbnail-promise alignment is sacred (INV-10).** What the thumbnail visually promises = what the title verbally promises = what the first 30s of script delivers.
8. **Stock-footage face is banned.** Use creator's face or no face. Never stock.
9. **Copyright/fair-use clear (INV-14).** Any image not original must be licensed. Document the license source.

## Process

### Step 0 — Gate check
production_and_post ≥ 40, channel_architecture ≥ 50, audience ≥ 50.

### Step 1 — Load context
Title, script first-30s, channel thumbnail system, mode, awareness level.

### Step 2 — Composition
Composition default from compartment 7 (face-left-text-right / center-frame / split-half / object-focus).

### Step 3 — Face grammar
Choose per awareness + mode.

### Step 4 — Object grammar
What object (if any) reinforces the promise.

### Step 5 — Text
2-3 / 3-5 words / phrase. Lock copy.

### Step 6 — Color + typography
Per system. Accent color choice if exception.

### Step 7 — A/B test design
Two variants — test one variable (face vs no-face / different text / different background).

### Step 8 — INV-10 alignment check
Thumbnail promise matches title promise matches first-30s promise.

### Step 9 — INV-14 fair-use check
Any non-original image documented with license.

### Step 10 — Verify
Formal checks, banned-vocab in text, anonymization.

## Output Format

```markdown
# Thumbnail Brief — [Title]

**Mode:** authority | reach | hybrid
**Awareness:** [level]
**Title:** [verbatim]
**Date:** YYYY-MM-DD

## 1. Composition
- Layout: face-left-text-right / center-frame / split-half / object-focus
- Visual hierarchy: face → text → object

## 2. Face Grammar
- Type: surprise / contrarian-stare / smile / open-mouth / no-face / measured
- Eye-line: camera-direct / off-axis
- Expression intensity: 1-10

## 3. Object Grammar
- Object included: [yes / no — what]
- Reason:

## 4. Text
- Copy: "[2-3 / 3-5 words]"
- Font: [from system]
- Size:
- Color:

## 5. Colors
- Background: [hex from system]
- Accent: [hex]
- Secondary: [hex]

## 6. A/B Test
| Variant | Variable changed |
| A | baseline |
| B | [face vs no-face / different text / different background] |

## 7. INV-10 Alignment Check
- Thumbnail visual promise: [type + intensity]
- Title verbal promise: [type + intensity]
- First-30s script promise: [type + intensity]
- Alignment: PASS | FAIL

## 8. INV-14 Fair-Use Check
- Any non-original image used: [yes / no]
- License source documented: [yes / no — link]
- Verdict: PASS | FAIL

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.production.thumbnail.brief, MARKDOWN, 0.6)
COMPARTMENTS_USED: [production_and_post, channel_architecture, audience_intelligence_system]
FRAMEWORKS_USED: [thumbnail-design-system, face-grammar-rules, contrast-rules, title-thumbnail-promise-alignment]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
COPYRIGHT_FAIR_USE: PASS | FAIL
---
```

## Frameworks Applied
- [framework: thumbnail-design-system]
- [framework: face-grammar-rules]
- [framework: contrast-rules]
- [framework: title-thumbnail-promise-alignment]

## Compartments Read
- `{{production_and_post}}`, `{{channel_architecture}}`, `{{audience_intelligence_system}}`

## Verification Gates
- Formal: composition + face + text + colors specified, A/B test designed
- Semantic: face grammar matches awareness level + mode, text doesn't repeat title verbatim
- Info-theoretic: text density appropriate, contrast separable
- Title-thumbnail-promise (INV-10): three-way alignment confirmed
- Copyright/fair-use (INV-14): non-original imagery licensed

## Related Skills
- Upstream: `/research-brief`, `/title-options`
- Downstream: `/title-thumbnail-pair` (cross-coordination), `/editor-brief`, `/publish-checklist`
- Alternative: `/title-thumbnail-pair` runs both as one unit

## Failure Modes
- **Visual repeats title text** — wasted real estate. Revise text complementary.
- **Face emotion mismatched** — surprise on authority video. Revise per awareness/mode.
- **No A/B variant** — leaves data on the table. Add second variant testing one variable.
- **INV-10 mismatch** — thumbnail signals fast-tactical, script is slow-conceptual. REJECT + revise.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the thumbnail-design-system tradition (composition + face/object grammar + contrast), the title-thumbnail-unit theorist (INV-10 source), and the visual-hierarchy-of-thumbnail canon.
