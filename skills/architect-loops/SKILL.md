---
name: architect-loops
command: /architect-loops
description: Design the loop architecture for a script — open by 0:08, close before mid-point, callback in close, ≥3 loops per long-form.
tier: sonnet
agent_owner: retention-head
agent_executor: retention-head
required_compartments:
  hook_retention_os: 50
  content_engine: 50
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.retention.loops.architect
  format: MARKDOWN
  weight: 0.6
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Architect Loops

## Purpose
Design the loop architecture for a script — opening curiosity gaps, closing them at engineered moments, and using callbacks to drive AVD beyond 50%. The loop system is one of the most load-bearing retention mechanics; a long-form video without ≥ 3 loops typically ships with bottom-quartile AVD.

## Decision Logic
The loop is a contract between the creator and the viewer: "I'm going to tell you something later." The contract opens curiosity (the gap), runs in the background while the viewer consumes content, and pays off when the gap closes. The unclosed gap pulls the viewer through the video.

The 5 loop types (per the loop-system architect tradition):
1. **Cliffhanger loop** — "Pattern 4 is the one most people miss" — closed at pattern 4
2. **Callback loop** — early reference revisited later
3. **Promise loop** — bound promise from hook fulfilled at close
4. **Mystery loop** — unanswered question that drives forward
5. **Stakes loop** — consequence raised early, resolved at end

The 5 placements:
1. **Open by 0:08** — first loop opens immediately
2. **Mid-script open (3-5 min)** — second loop opens
3. **Close before mid-point** — first loop closes by 50% mark
4. **Callback in close** — final close references early loop
5. **End-screen loop** — open a new loop that the next video closes (series binge mechanic)

Hard rules: open by 0:08, close before mid-point, callback in close, ≥ 3 loops per long-form.

## Tacit Principles
1. **Loops are layered, not parallel.** Loop 1 closes at 50%. Loop 2 opens at 30% and closes at 75%. Loop 3 opens at 60% and closes at end. Overlap creates continuous pull.
2. **Don't open more loops than you close.** Every opened loop is a debt; pay them all.
3. **The callback in close is the highest-leverage moment.** Reference the opening hook explicitly.
4. **Loop content has to deliver.** "Pattern 4 is the one most people miss" — and pattern 4 must actually be the surprising one.
5. **Reach-mode videos use 1-2 loops; authority-mode uses 3+.** Reach is shorter, doesn't sustain dense loop architecture.
6. **End-screen loop drives series binge.** Open a new loop that the next video closes — viewers binge to close it.
7. **Test: after the first loop closes, does the viewer have a reason to keep watching?** If no, you didn't design enough overlap.

## Process

### Step 0 — Gate check
hook_retention_os ≥ 50, content_engine ≥ 50.

### Step 1 — Load context
Research brief, hook draft, sectional beats, mode.

### Step 2 — Map sections
N sections at known time positions.

### Step 3 — Place ≥ 3 loops
- Loop 1: open by 0:08, close before 50% mark
- Loop 2: open mid-script (30-50% mark), close at 70-80%
- Loop 3: open in second half (50-70%), close at end OR end-screen handoff

### Step 4 — Specify callback in close
Reference an early loop or the opening hook explicitly.

### Step 5 — Optional end-screen loop
Open a new loop the next video answers (for series binge).

### Step 6 — Verify
≥ 3 loops, all opens have closes, hard rules hit.

## Output Format

```markdown
# Loop Architecture — [Title]

**Mode:** authority | reach | hybrid
**Length:** N min
**Loops:** N (target ≥ 3 for authority, ≥ 1-2 for reach)

## Loop Map
| # | Type | Open at | Open content | Close at | Close content |
|---|---|---|---|---|---|
| 1 | Cliffhanger | 0:08 | "Pattern 4 is the one most people miss" | 5:30 (45%) | reveal pattern 4 |
| 2 | Promise | 0:25 | "By the end you'll have a list of structural fixes" | 12:00 (close) | recap fixes |
| 3 | Mystery | 4:15 (35%) | "There's one operator I followed who broke this pattern entirely" | 9:30 (78%) | case study reveals |
| (end-screen) | End-screen | 12:30 | "Next video: why solo delegation almost always fails — and the one exception" | (next video) | — |

## Callback In Close
"Earlier I said Pattern 4 is the one most operators miss — and now you've seen why. The pattern that catches operators by surprise is also the easiest to fix structurally. Here's where to start..."

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.retention.loops.architect, MARKDOWN, 0.6)
COMPARTMENTS_USED: [hook_retention_os, content_engine]
FRAMEWORKS_USED: [the-loop-system, 5-loop-types, 5-loop-placements, callback-architecture]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: the-loop-system]
- [framework: 5-loop-types]
- [framework: 5-loop-placements]
- [framework: callback-architecture]

## Compartments Read
- `{{hook_retention_os}}`, `{{content_engine}}`

## Verification Gates
- Formal: ≥ 3 loops for long-form authority, all opens have closes, hard rules hit (open by 0:08, close before mid, callback in close)
- Semantic: loop content delivers on promise (Truth Gate)
- Info-theoretic: overlap structure (no gap between loop 1 close and loop 2 open)

## Related Skills
- Upstream: `/research-brief`, `/write-hook`
- Downstream: `/write-authority-script`, `/write-reach-script`, `/retention-engineer`
- Alternative: none

## Failure Modes
- **No callback in close** — INV violation. Add explicit reference to opening hook.
- **Open with no close** — broken contract. Either close it or remove the open.
- **Loops in parallel, not overlap** — gap between loop 1 close and loop 2 open. Restructure for overlap.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the loop-system architect tradition (5 types, 5 placements, hard rules — open by 0:08, close before mid, callback in close).
