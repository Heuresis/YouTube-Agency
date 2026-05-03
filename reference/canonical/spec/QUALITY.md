# QUALITY.md — Triple-Layer Verification

> **Canonical spec.** Every output that reaches a creator-facing surface passes Triple-Layer Verification before delivery. Three independent layers, weighted 40/35/25, must clear their thresholds. Any single layer below threshold = revise + re-verify (or escalate after 2 revisions).

---

## The three layers

### Layer 1 — Formal Verification (40% weight)

Mechanical checks that are pass/fail. No subjectivity.

Checks:
- Output Format compliance — the output matches the structure declared in SKILL.md's Output Format section. Every required field present. No silent truncation.
- Banned vocabulary scan — zero matches against `spec/BANNED-VOCABULARY.md` (with creator overrides applied).
- Anonymization scan — zero matches against the operator/brand watchlist.
- AI-attribution scan — zero matches against "Co-Authored-By", "Generated with Claude", "Authored by", any model-name footer.
- Compartment threshold gate — every required compartment for this skill is at or above its declared minimum.
- Signal 5-tuple completeness — all 5 dimensions resolved.
- Citations present — every framework or compartment referenced is named in the metadata block.

Threshold: **100/100**. Layer 1 is binary — any failure rejects the output.

### Layer 2 — Semantic Verification (35% weight)

Quality-of-thinking checks that require LLM evaluation against the skill's declared standards.

Checks:
- Voice fidelity — does the output sound like the creator? Score against `creator_identity_matrix.brand_voice_architecture` (tone, language patterns, signature phrases).
- Audience-language fidelity — does the output use phrases from `audience_intelligence_system.voice_of_viewer`?
- Sophistication-stage match — is the copy register calibrated to the declared awareness level?
- Mode fidelity — does the output hold its declared mode (authority / reach / hybrid) consistently?
- Truth Gate — does every claim survive the 30-second screenshot test? (No fabrication, no unverifiable specifics.)
- Frameworks deployed correctly — are the cited frameworks applied per their structural rules (e.g., is the Three-Brain Decision Sequence actually engaged in 0–3s / 3–15s / 15s+, or just claimed)?
- Coherence — does the output hang together as one cogent piece, or is it stitched from disconnected sections?

Threshold: **≥ 28/35** (80%) for external-facing outputs, **≥ 21/35** (60%) for internal drafts.

### Layer 3 — Information-Theoretic Verification (25% weight)

Compression / expressiveness / signal-density checks that look at the output as a communication event.

Checks:
- Signal-to-noise ratio — what fraction of words carry meaningful signal vs. filler / hedging / decoration? Target: ≥ 0.7 for external output.
- Compression efficiency — if the output were 30% shorter, would it still convey the same signal? If yes, the output is over-padded. (This catches AI-generated bloat.)
- Specificity density — count of specific concrete claims / examples / numbers per 100 words. Target: ≥ 3 per 100 for authority output, ≥ 2 per 100 for reach.
- Predictability — is each next sentence predictable from the prior? High predictability = stale, slop-adjacent. Low predictability with maintained coherence = high-quality.
- Cognitive load — does the output respect the reader's working memory? (No more than 3 nested concepts per paragraph, no more than 2 simultaneous claims per sentence.)

Threshold: **≥ 17/25** (68%).

---

## Composite gate

```
Triple-Layer Score = Layer 1 (40) + Layer 2 (35) + Layer 3 (25) = max 100

External-facing pass: ≥ 80
Internal-draft pass: ≥ 60
Below 60: REJECT + revise (max 2 revisions, then escalate)

Layer 1 failure: REJECT regardless of Layer 2/3 (Layer 1 is binary)
```

---

## How verification runs

For every output, the skill calls into `workflows/handoffs/quality-revision.md`:

```
1. Compile Layer 1 checks (mechanical)
   - if any check fails → REJECT, return diagnosis with failed checks
   - if all pass → continue
2. Compile Layer 2 checks (semantic)
   - LLM evaluation pass with the skill's quality rubric
   - score per check, total Layer 2 score
3. Compile Layer 3 checks (info-theoretic)
   - compression test (rewrite at 70% length, compare signal preservation)
   - specificity-density count
   - SNR estimation
4. Composite score = L1 + L2 + L3
5. If composite ≥ threshold:
   - Output ships with metadata block including all three scores
6. If composite < threshold:
   - Diagnosis report with weakest-layer + weakest-check
   - Skill enters revision mode (max 2 attempts)
   - On revision-2 fail: escalate to creator with explicit "I tried X and Y, neither cleared. Need your judgement."
```

---

## Per-skill calibration

Different skills calibrate differently:

- **Strategic-layer skills** (`/build-niche`, `/build-audience`, `/design-offer`) emphasize Layer 2 (voice fidelity to creator's strategic worldview) more heavily.
- **Production skills** (`/write-authority-script`, `/write-pinned-vsl`) emphasize Layer 1 (Output Format compliance) and Layer 3 (compression) heavily — production output is read by the creator and must be clean.
- **Distribution skills** (`/title-options`, `/description-builder`) emphasize Layer 3 (specificity density) — titles that are vague fail commercially.
- **Intelligence skills** (`/leak-audit`, `/kpi-dashboard`) emphasize Layer 1 (mechanical) and Layer 2 (correct framework application).

The skill's SKILL.md may specify per-layer thresholds that override the defaults.

---

## What this gate is NOT

It is NOT:
- A guarantee of commercial success (that's the algorithm's verdict, not the gate's)
- A taste filter (that's the creator's role)
- A perfect detector of slop (LLM evaluators have blind spots; the Blind Output Test is the human-grade verdict)

It IS:
- A consistent, machine-runnable quality floor
- A diagnosis tool when revisions are needed
- A measurable trace of every output the OS ships

---

## Maintenance

This file's thresholds calibrate per channel over time. Channels with above-average Blind Output Test pass rates may have their L2/L3 thresholds tightened. Channels below the Blind Output Test threshold get tightened thresholds for the failing layers specifically.

Recalibration runs monthly via `/audit-retention` + `/library-compound`.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis canonical spec.*
