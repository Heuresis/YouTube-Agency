---
name: write-script
command: /write-script
description: Write any video's script end-to-end — the per-video default entry point. Runs gather → strategy → structure → execute → reconcile → QA, orchestrating the hook, loop, retention, awareness, and belief frameworks into one voice-faithful script.
tier: opus
agent_owner: content-head
agent_executor: script-writer
required_compartments:
  creator_identity_matrix: 70
  audience_intelligence_system: 70
  hook_retention_os: 60
  content_engine: 50
mode_applicability: both
signal_5tuple:
  mode: BUILD
  genre: DIRECT
  type: youtube.production.script.write
  format: MARKDOWN
  weight: 0.9
banned_when:
  - creator_identity_matrix:70
  - audience_intelligence_system:70
verification_layers: [formal, semantic, info-theoretic, retention-floor, title-thumbnail-promise]
---

# Write Script — the Per-Video Orchestrator

## Purpose
Given a topic or pitch, write a film-ready script that **beats the current top video on that exact topic** — not one that is merely "good." This is the orchestrator skill: the hook formulas, the loop system, re-hook → story → lesson, belief installation, awareness mapping, and sophistication analysis are all *components* this skill assembles into a single script, end to end. The output must read like the creator's best writing — never like a capable generalist's.

`/write-script` is the **per-video default entry point** for the scripting stage. The mode-specific runtimes (`/write-authority-script`, `/write-reach-script`, `/write-shorts-script`) remain the depth surfaces; this skill runs the full decision procedure and hands off to them when mode-specific depth is warranted.

## Decision Logic — the zero-sum principle
YouTube is zero-sum: a view a competitor earns is a view this channel doesn't. So the test is never "is my hook good / is my retention optimized" in a vacuum — it's **"does this out-sophisticate the existing videos on this exact topic?"** That answer is decided in the **80% pre-work, not the 20% craft** (`reference/frameworks/twenty-eighty-inversion.md`). Before a line is written, the script is *positioned* against the niche.

The script architecture (assembled from the component frameworks):

```
HOOK (0:00–0:30)         Three-Brain: Reptilian (0–3s) → Limbic (3–15s) → Neocortex (15s+).
                         One of: PAST · AID · Contrast · Statistic. Delivers the title/thumbnail promise (INV-10/11).
INTRO (0:30–1:30)        Expand hook → authority (2–3 lines, not a bio) → audience call-out (You-not-They)
                         → content roadmap (open loops) → pre-handle 1–2 objections → reason-to-stay tease
BODY (bulk)              Per section: RE-HOOK (problem → agitate → delay) → STORY (planned on the
                         BUT/THEREFORE skeleton) → LESSON (deliver the promised value) → TRANSITION (bridge).
                         Callbacks every 3–5 min. Logic ladders under any implausible claim.
                         Loops: open by 0:15, close by 70–80%.
BINGE LOOP (last 15–30s) Link-back → new related problem → specific next-video promise
CTA                      Soft (next video / lead magnet) or hard (application / pinned VSL) — by funnel position
```

**Awareness + sophistication set the language and depth** — the two decisions that separate top-percentile scripts:
- **Awareness** (Unaware → Problem → Solution → Product → Most-aware, per `five-awareness-levels-on-youtube`) decides the *words of the hook* and how much problem-education the intro owes.
- **Market sophistication** (per `three-sophistication-pillars`) decides *how to differentiate* — pick **≥ 3 of the six paths** (different/better × positioning / storytelling / insights, per `reference/frameworks/six-differentiation-paths-detailed.md`).

## The Reconciliation — planning tools vs spoken text
The frameworks in `reference/frameworks/` supply the **structural mechanics**. `workspace/VOICE.md` + `INVARIANTS.md` **override the frameworks' surface wherever they conflict.** Adopt the skeleton; never the skin.

| The framework supplies | The spoken script does instead |
|---|---|
| **BUT/THEREFORE** beat logic (`but-therefore-narrative-engine`) | BUT/THEREFORE is the **writer's beat-planning tool** — it guarantees every beat carries conflict + consequence. The **spoken text never contains "but"/"therefore" as connectors.** Contrast lives in rhythm. |
| Power-word vocabulary ("easy, fast, simple, hack, secret") | **Banned** (`spec/BANNED-VOCABULARY.md`, INV-7). Use the creator's real numbers, named tools, verified proof. |
| Rhetoric-first persuasion / manufactured certainty | **Banned** (INV-16 parasocial-honesty, INV-17 engagement-bait). The durable wedge is earned candor — tell the viewer what the path actually costs. |
| "Make $X in Y" income framing | Truth Gate (INV-5/6): every result traces to a `workspace/PROOF-BANK.md` row, framed with the honest qualifier. Never a guarantee. |
| Machine-gun fragments as the default rhythm | The creator's **real cadence** from `workspace/VOICE.md`. Raw cadence beats cleaned cadence; fragments are rare punctuation, not the beat. |
| Hard pitch / fake scarcity ("only X spots") | Earn the pitch (proof before ask). Real deadlines only. Soft routing per channel architecture. |

The same rule covers every piece of framework vocabulary: "open loop," "re-hook," "belief install," "awareness level," "mechanism" never appear in spoken lines. If a tactic survives this filter, use it. If it doesn't, the mechanic underneath it almost always does — keep the mechanic, drop the skin.

## Tacit Principles
1. **Read it aloud, every line.** If the writer's mouth stumbles, the creator's will too. The read-aloud test is mandatory, not optional.
2. **One idea per sentence — then vary length.** Match the creator's connector style; never default to all-short or all-long.
3. **Show, don't tell.** Every claim pairs with an on-screen artifact (`(SHOW: …)`) — the dashboard, the document, the timeline.
4. **Earn the pitch.** No CTA before the mechanism/proof lands.
5. **Specificity beats abstraction every time.** A named number, day, tool, or count beats any adjective.
6. **Every line earns the next line.** If a sentence doesn't make the viewer want the next one, cut it.
7. **Belief before tactics.** Install the ONE belief the viewer needs *before* teaching the how.
8. **Voice fidelity is the moat.** Any line a generic competitor could say → sharpen with a named number, real tool, or contrarian belief.

## Process

### Step 0 — GATHER
Gate check: identity ≥ 70, audience ≥ 70, hook_retention_os ≥ 60, content_engine ≥ 50. Below gate, or essentials missing → `prompts/interview-prompt.md`.

Read, in order: `workspace/STRATEGY.md` · `workspace/VOICE.md` · `workspace/PROOF-BANK.md` · `workspace/CONTENT-ENGINE.md` · `workspace/CALIBRATION.md` · then the `company.yaml` compartments (`creator_identity_matrix`, `audience_intelligence_system`, `hook_retention_os`, `content_engine`). Where a workspace doc doesn't exist yet, the matching compartment is the fallback — log the gap.

Collect: topic/working title · the exact viewer (situation, not demographic) · desired action · the proof rows available · target length.

### Step 1 — STRATEGY (the 80%)
Per the 20/80 inversion, 80% of script quality is decided here — before a line is written.
- **Mode:** authority | reach | hybrid — or the channel's calibrated register of those modes per `workspace/CALIBRATION.md` (a calibration note may, e.g., tune authority proof-forward for a case-study-led channel; that's a register on authority, not a fourth mode).
- **Awareness level** — decides the hook's words and the intro's education load.
- **Market sophistication** — decides the differentiation. Pick **≥ 3 of the six differentiation paths**.
- **The ONE belief** this video installs (`eight-required-beliefs`): which belief, for which viewer, moved how far. One per video.
- **The zero-sum thesis:** "this script beats [the current top video on this topic] on [specific axes] by [specific method]." Write it down. No thesis, no script.

### Step 2 — STRUCTURE
- **Hook stack** — apply the logic of `/write-hook`: ≥ 3 mechanisms across Reptilian / Limbic / Neocortex, formula matched to the awareness level.
- **Open loops** — apply the logic of `/architect-loops`: ≥ 3 loops long-form, open by 0:15, close before 70–80%, callback in the close.
- **Retention scaffold** — apply the logic of `/retention-engineer`: pattern-interrupt cadence 45–60s, callbacks every 3–5 min, re-hook per section.
- Map the body to re-hook → story → lesson movements · pick the CTA type by funnel position · pick the binge-loop target (the specific next video).

### Step 3 — EXECUTE
Write it spoken, in the creator's voice: verbatim-phrase density from `workspace/VOICE.md` `phrases_to_use`, cadence anchored to the creator's *unedited* speech — raw cadence beats cleaned cadence. Place `(SHOW: …)` on every claim. Mark every loop open/close inline. Slot `[CREATOR: confirm …]` on any unverified number — never invent one.

### Step 4 — RECONCILE
Run the reconciliation table over the full draft, beat by beat, and produce the reconciliation log:
- Every body beat keeps its **planning note** (the BUT/THEREFORE skeleton) in the log — and its **spoken text carries zero "but"/"therefore" connectors** and zero framework vocabulary.
- Strip any surviving power-words, essay-register pivots, or fragment-stacked runs that fight the creator's cadence.

Hand off here if mode-specific depth is needed: `/write-authority-script` (belief-arc + offer routing), `/write-reach-script` (contrast format + cross-niche routing), `/write-shorts-script` (Shorts compression).

### Step 5 — QA (all gates must pass)
- **Zero-sum gate:** does this beat the current top video on this topic? If the Step-1 thesis isn't visibly delivered → back to Step 1.
- **Voice gates** (per `spec/voice-gates.md`): banned-vocab clear · no spoken BUT/THEREFORE · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7.
- **Invariant gates:** Truth Gate per claim (INV-5/6) · retention floor — predicted AVD ≥ channel band (INV-9, `spec/retention-floor.md`) · title-thumbnail promise — first 30s delivers the packaging promise (INV-10).
- **Structure:** hook delivers the title promise ≤ 30s · all loops closed · callbacks every 3–5 min · binge loop present · CTA earned.

## Output Format

```markdown
# SCRIPT — "[Working Title]"

**Mode:** authority | reach | hybrid
**Awareness:** [level] → [target level]
**Sophistication:** [stage] · **Differentiation paths:** [≥ 3 of 6]
**Belief installed:** [the ONE belief]
**Zero-sum thesis:** beats [competitor video archetype] on [axes] by [method]
**Length target:** N min · **WPM baseline:** N
**Hook formula:** [stack]
**Date:** YYYY-MM-DD

## THE SCRIPT
(0:00) — COLD OPEN [stage direction]
[spoken lines — (SHOW: …) cues on every claim, loop open/close marks, [CREATOR: confirm …] slots]
… HOOK · INTRO · BODY (re-hook → story → lesson × N) · BINGE LOOP · CTA …

## RECONCILIATION LOG — planning vs spoken
| Beat | Planning note (BUT/THEREFORE skeleton) | Spoken delivery (clean) |
|---|---|---|

## VOICE-CHECK — read-aloud markers
[lines to test aloud; ⚠ flag any clunky line with a proposed swap]

## OPEN SLOTS
[every [CREATOR: confirm …] collected in one list]

---
SIGNAL: S = (BUILD, DIRECT, youtube.production.script.write, MARKDOWN, 0.9)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, hook_retention_os, content_engine]
FRAMEWORKS_USED: [four-hook-formulas, three-brain-decision-sequence, universal-hook-success-formula, re-hook-story-lesson, but-therefore-narrative-engine, the-loop-system, logic-ladders, five-awareness-levels-on-youtube, three-sophistication-pillars, six-differentiation-paths-detailed, eight-required-beliefs, showing-not-telling, five-core-emotions-sequence, twenty-eighty-inversion]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
ZERO_SUM: PASS | FAIL
RETENTION_FLOOR: PASS | FAIL
TITLE_THUMBNAIL_PROMISE: PASS | FAIL
TRUTH_GATE: PASS | FAIL
BANNED_VOCAB: PASS | FAIL
BUT_THEREFORE_NOT_SPOKEN: PASS | FAIL
READ_ALOUD: PASS | FAIL
BLIND_OUTPUT_TEST: N/10 (ship ≥ 7)
SIGNAL_CHECK: N/10 (ship ≥ 7)
---
```

Packaging (title/thumbnail/description/SEO) is a **separate** invocation → `/title-thumbnail-pair` + `/description-builder`. Do not bundle it into the script file unless asked.

## Frameworks Applied
- [framework: four-hook-formulas] · [framework: three-brain-decision-sequence] · [framework: universal-hook-success-formula]
- [framework: re-hook-story-lesson] · [framework: but-therefore-narrative-engine] · [framework: the-loop-system]
- [framework: logic-ladders] · [framework: five-core-emotions-sequence] · [framework: showing-not-telling]
- [framework: five-awareness-levels-on-youtube] · [framework: three-sophistication-pillars] · [framework: six-differentiation-paths-detailed]
- [framework: eight-required-beliefs] · [framework: twenty-eighty-inversion]
- Calibration corpus: `reference/templates/example-scripts.md` + `reference/swipe-file/scripts/`

## Compartments Read
- `{{creator_identity_matrix}}` (voice) · `{{audience_intelligence_system}}` (awareness / sophistication / objections) · `{{hook_retention_os}}` · `{{content_engine}}`
- Workspace docs: `workspace/STRATEGY.md` · `workspace/VOICE.md` · `workspace/PROOF-BANK.md` · `workspace/CONTENT-ENGINE.md` · `workspace/CALIBRATION.md`

## Verification Gates
- Formal: structure present (hook / intro / body / binge / CTA), all loops closed, callbacks ≥ every 5 min, banned-vocab scan
- Semantic: Truth Gate per claim, the ONE belief installed, promise-match (INV-10), mode + awareness register held throughout
- Info-theoretic: density passes the 50%-cut test (every beat advances), specificity ≥ 3 per 100 words, no filler section
- Retention-floor: predicted AVD ≥ channel band (INV-9)
- **Voice gates (the slop-catchers — `spec/voice-gates.md`):** banned-vocab clear · **no spoken BUT/THEREFORE** · read-aloud clean · Blind Output Test ≥ 7 · signal-check ≥ 7

## Related Skills
- Upstream: `/idea-farm`, `/research-brief` (the brief is the Step-1 raw material)
- Component logic applied in-line: `/write-hook`, `/architect-loops`, `/retention-engineer`
- Mode-depth handoffs: `/write-authority-script`, `/write-reach-script`, `/write-shorts-script`
- Downstream: `/title-thumbnail-pair`, `/description-builder`, `/editor-brief`, `/publish-checklist`, `/repurposing-cascade`; post-publish `/audit-retention` → `/library-compound`
- Entry prompt-pack: `prompts/interview-prompt.md` (the gather front-end)

## Failure Modes
- **Fragment-stacking ("Their deals. Their rules. Their map.")** → reads synthetic. Reconnect with the creator's real cadence; fragments are rare punctuation.
- **BUT/THEREFORE in spoken text** → essay register. Strip; let contrast live in rhythm.
- **Hype power-words / income framing** → banned-vocab REJECT; repels the skeptical buyer.
- **Pitch before proof** → move the CTA after the mechanism lands.
- **Generic line a competitor could say** → sharpen with named number / real tool / contrarian belief.
- **Invented number** → INV-6 REJECT; slot `[CREATOR: confirm]`.
- **Tutorial-first (no belief install)** → restructure: belief before tactics.
- **Skipping Step 1 to "just write"** → the 20/80 inversion violated; the draft polishes a losing position.

## Examples
- See `examples/example-01.md` (a full worked pass: decision trail + reconciled script excerpt).
- Style-match targets: `reference/templates/example-scripts.md` (proven scripts annotated for what transfers) + `reference/swipe-file/scripts/`.

## Lineage
Productionizes the master-script-architect tradition: the zero-sum / 20-80 / out-sophistication thesis from the awareness-and-sophistication tradition; the hook / loop / re-hook mechanics from the retention tradition; the belief-installation core from the direct-response tradition. Bound to the creator via `workspace/VOICE.md` + `INVARIANTS.md`, which **override** the frameworks' surface tactics wherever they conflict.
