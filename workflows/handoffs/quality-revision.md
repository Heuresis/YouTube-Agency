# Quality Revision Handoff

> The contract for what happens when an output fails verification. Two revision attempts max; then escalation. This is the same pattern across every skill.

---

## The flow

```
Skill produces output
    ↓
Verification gates run (per skill's declared verification_layers)
    ↓
All gates pass? → ship
    ↓ no
First failure: skill enters revision mode (attempt 1)
    ↓
Revision attempt 1: skill rewrites the failed sections, re-runs verification
    ↓
All gates pass? → ship
    ↓ no
Second failure: skill enters revision mode (attempt 2)
    ↓
Revision attempt 2: deeper rewrite, may re-load context, re-runs verification
    ↓
All gates pass? → ship
    ↓ no
Escalation: surface to creator with explicit diagnosis
    ↓
Creator decides:
    (a) override with reason logged
    (b) take manual action
    (c) revise themselves
    (d) close the gap upstream (e.g., add more compartment context)
```

---

## What the revision attempts do differently

### Attempt 1 — Targeted fix

Reads the failure diagnosis. Identifies the specific failed gate(s). Rewrites only the sections that contributed to the failure. Re-runs only the failed gates (other gates already passed; assume stable).

Typical fixes:
- Banned vocabulary → swap matched words for synonyms in the creator's `phrases_to_use`
- Retention floor failed on hook density → add 1–2 more retention mechanisms in the first 30s
- Title-thumbnail-promise failed on intensity → soften thumbnail composition or sharpen opening
- Voice fidelity below threshold → re-load `phrases_to_use` and `voice_of_viewer`, do a voice-pass

### Attempt 2 — Structural rewrite

If Attempt 1's targeted fix didn't pass, the skill assumes the structural approach was wrong. Reloads context. Reconsiders the upstream mode/awareness/format decision. Rewrites more aggressively.

Typical structural fixes:
- Shift mode declaration (the script was authority but mode-confused; rewrite as reach)
- Shift awareness level (script was speaking to Solution-aware; reset to Problem-aware)
- Change framework choice (was using Bound-Promise hook; switch to Contrarian-Frame)
- Restructure the script outline (section order was creating drag in mid-section)

---

## When to escalate vs. continue

Escalate after 2 attempts. Do not loop indefinitely. Reasons:

1. **Cost** — each attempt costs LLM tokens + creator review attention
2. **Signal** — if 2 attempts can't pass the gate, the gate's failing for a structural reason the OS can't see; the creator's judgement is needed
3. **Trust** — the creator needs to know the OS isn't silently shipping failed work

Escalation message format:

```
[ESCALATION — 2 revisions exhausted on /<skill>]

Original verdict: <FAIL on Layer/Gate>
Attempt 1 (targeted fix): <FAIL on Layer/Gate>
Attempt 2 (structural rewrite): <FAIL on Layer/Gate>

Diagnosis:
- <observation 1>
- <observation 2>

Likely root cause:
<best hypothesis>

Options:
A. Override the gate (logged with reason) and ship as-is
B. Manual fix by creator/team
C. Close the upstream gap (e.g., {{compartment.path}} is at 45% — bringing it to 70%+ should resolve this)
D. Skill design issue — the /<skill> SKILL.md may need updating in cycle 2

Recommend: <A | B | C | D>
```

The creator picks. The OS waits.

---

## Override path

If the creator chooses (A) Override:

```
[OVERRIDE LOGGED]
Skill: /<skill>
Failed gate: <gate>
Override reason: <creator-supplied>
Confidence: LOW (gate failure preserved in metadata)
Output ships with: [GATE-OVERRIDE: <gate> failed; creator override applied]
```

Override outputs:
- ship with the gate-override flag in their metadata block
- are excluded from the channel's library-compound positive-pattern pool
- log a TODO entry to revisit if the actual outcome diverges from prediction

Overrides are tolerated when the creator is making an experimental judgement call. Overrides are NOT tolerated as the default path. If a channel has > 20% override rate on any single gate, the gate needs recalibration, not the gate disabled.

---

## Cycle-level metric

The OS tracks revision-loop metrics:

- Mean revisions per skill per cycle
- Skills with > 30% revision rate (signal that the skill needs redesign)
- Skills with > 10% escalation rate (signal that the underlying compartments are starved)
- Override frequency per gate (signal that the gate is mis-calibrated)

These metrics surface in the monthly `/leak-audit` channel-wide pass.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
