---
name: retention-engineer
command: /retention-engineer
description: Engineer pattern-interrupt cadence, callbacks, and retention scaffolding throughout a script.
tier: sonnet
agent_owner: retention-head
agent_executor: retention-head
required_compartments:
  hook_retention_os: 60
  audience_intelligence_system: 60
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.retention.engineer
  format: MARKDOWN
  weight: 0.7
banned_when: []
verification_layers: [formal, semantic, info-theoretic, retention-floor]
---

# Retention Engineer

## Purpose
Engineer the script-wide retention scaffolding: pattern-interrupt cadence (every 45-60s minimum), callback architecture, re-hook → story → lesson per-section pattern, retention-curve drop-zone protection. This skill takes a draft script + loop architecture and tunes it to predicted AVD ≥ channel target. Also performs gate enforcement for INV-9 (retention floor).

## Decision Logic
Retention engineering is the difference between a 50% AVD video and a 35% AVD video on the same content. The mechanics:
- **Pattern-interrupt cadence**: cut / b-roll / super / music shift / location shift every 45-60s
- **Callback architecture**: references-back to opening beats, prior loops, signature visual elements
- **Re-hook → story → lesson**: each major section opens with a re-hook, develops a story, lands a lesson
- **Drop-zone protection**: known channel drop zones (typical 30s drop, mid-point drop, end-screen drop) get specific reinforcement

Predicted AVD = function(hook density, loop density, pattern-interrupt cadence, callback presence, mode-fit, sophistication-stage match, channel-historical-bands).

INV-9 enforcement: predicted AVD must be ≥ channel bottom-quartile band. Below = REJECT + revise (max 2 attempts).

## Tacit Principles
1. **Cuts every 45-60s minimum.** The default — across edit, b-roll, music shift, super placement.
2. **Callbacks compound trust.** When a script references something said earlier, the viewer feels rewarded for paying attention. That feeling is retention currency.
3. **Re-hook every section.** A new section without a re-hook loses 5-15% of viewers.
4. **Drop zones are predictable.** The 30s drop, the mid-point drop, the end-screen drop. Specifically reinforce.
5. **Music shifts mark sections.** Underscoring transitions through music shift = subliminal retention pull.
6. **Don't over-engineer.** A script that switches mood every 30s reads frenetic. Match the cadence to the channel's archetype.
7. **Voice-faithful retention is the highest target.** Generic retention engineering reads AI-produced; voice-faithful retention engineering reads creator-produced.

## Process

### Step 0 — Gate check
hook_retention_os ≥ 60, audience ≥ 60.

### Step 1 — Load context
Script draft, loop architecture, hook, channel retention curve signature.

### Step 2 — Map sections + cadence
Identify section boundaries; place pattern-interrupts every 45-60s.

### Step 3 — Re-hook each section
Section opens get a 1-2 sentence re-hook (mini-bound-promise).

### Step 4 — Place callbacks
Reference earlier beats / opening hook / signature visual elements at engineered moments.

### Step 5 — Drop-zone protection
At 30s, 50%, end-screen — specific reinforcement (loop close / case-study reveal / emotional pulse).

### Step 6 — Predict AVD
Compute predicted AVD using channel-historical bands.

### Step 7 — Verify INV-9
If predicted AVD < bottom-quartile band → revise. Max 2 attempts.

## Output Format

```markdown
# Retention Engineering — [Title]

**Mode:** authority | reach | hybrid
**Length:** N min
**Predicted AVD:** N% (target ≥ N%, floor ≥ N%)
**Cadence target:** every N seconds

## Pattern-Interrupt Cadence Map
| Time | Type | Note |
|---|---|---|
| 0:30 | cut + b-roll insert | section break |
| 1:15 | super | "Pattern 1" overlay |
| 2:00 | cut | new beat |
| ... |

(Every 45-60s minimum across the script)

## Section Re-Hook Map
| Section | Opens at | Re-hook line |
|---|---|---|
| 1 (Hook + setup) | 0:00 | (covered by hook) |
| 2 (Pattern 1) | 1:30 | "First pattern: this is the one most people don't realize is happening — even when it's killing every delegation attempt." |
| 3 (Pattern 2) | 3:00 | "Pattern 2 is the one operators recognize — but they fix the wrong layer." |
| ... |

## Callbacks
| Time | Reference | Why |
|---|---|---|
| 5:45 | opening hook claim "80 businesses" | reinforces credibility at midpoint |
| 9:30 | callback to operator from minute 1 | closes Loop 3 |
| 12:30 | full hook callback | callback in close (INV) |

## Drop-Zone Protection
- 30s drop: hook's Neocortex bound-promise + loop 2 open immediately at 0:25
- Mid-point drop (50% / 6:30): pattern 4 reveal (Loop 2 close) — highest-curiosity payoff at the drop
- End-screen drop (12:30+): callback in close + lead magnet + end-screen loop

## Predicted AVD Computation
- Channel band: 50% target / 65% bottom-quartile floor
- Hook density score: HIGH (3 mechanisms)
- Loop density score: HIGH (4 loops)
- Pattern-interrupt cadence score: HIGH (cuts every 40-55s)
- Callback presence: HIGH
- Mode-fit: authority on Solution-aware audience — match
- Sophistication-stage match: voice + format aligned with Skeptical
- **Predicted AVD: 56-62%** — PASS (above 50% target + above 65% bottom-quartile floor)

INV-9 gate: PASS

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.retention.engineer, MARKDOWN, 0.7)
COMPARTMENTS_USED: [hook_retention_os, audience_intelligence_system, channel_architecture]
FRAMEWORKS_USED: [pattern-interrupt-cadence, re-hook-story-lesson, callback-architecture, drop-zone-protection]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
RETENTION_FLOOR: PASS | FAIL
---
```

## Frameworks Applied
- [framework: pattern-interrupt-cadence]
- [framework: re-hook-story-lesson]
- [framework: callback-architecture]
- [framework: drop-zone-protection]

## Compartments Read
- `{{hook_retention_os}}`, `{{audience_intelligence_system}}`, `{{channel_architecture}}`

## Verification Gates
- Formal: pattern-interrupt cadence < 60s gaps, every section has re-hook, ≥ 1 callback in close, ≥ 3 callbacks total
- Semantic: re-hooks are specific (not "alright so"), callbacks land
- Info-theoretic: cadence consistent (no 2-min stretches without interrupts)
- Retention-floor (INV-9): predicted AVD ≥ channel bottom-quartile band — REJECT if below

## Related Skills
- Upstream: `/architect-loops`, `/write-hook`, `/research-brief`
- Downstream: `/write-authority-script`, `/write-reach-script`, `/audit-retention`
- Alternative: none

## Failure Modes
- **Cadence > 60s gap** — boring stretch. Insert pattern-interrupt.
- **Section without re-hook** — drop risk. Add 1-2 sentence re-hook.
- **No callback in close** — INV violation. Add explicit callback.
- **Predicted AVD below floor** — INV-9 REJECT. Revise script structure (more loops, more pattern-interrupts, voice fix).

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the retention-engineering canon (pattern-interrupt cadence every 45-60s, callback architecture, re-hook → story → lesson per section).
