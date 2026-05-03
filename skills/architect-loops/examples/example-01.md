# Example: architect-loops output

## Context
- Video: "The 6 Patterns of Failed Service-Business Delegation"
- Mode: authority
- Length: 12-15 min

## Output

```markdown
# Loop Architecture — The 6 Patterns of Failed Service-Business Delegation

**Mode:** authority
**Length:** 13 min
**Loops:** 4 (3 in-video + 1 end-screen)

## Loop Map
| # | Type | Open at | Open content | Close at | Close content |
|---|---|---|---|---|---|
| 1 | Cliffhanger | 0:08 (in hook) | "By the end of this video, you'll know which 2 you're probably running" | 11:30 (90%) | recap of patterns + diagnostic close |
| 2 | Mystery | 0:25 (Neocortex) | "Pattern 4 is the one that catches most operators by surprise" | 5:45 (44%) | reveal of pattern 4 with framing of why it surprises |
| 3 | Promise + Stakes | 1:30 | "There's one operator I followed who broke this pattern entirely — I'll tell you what she did differently at the end" | 9:30 (73%) | case study reveal — explicit callback to setup |
| 4 (end-screen) | End-screen | 12:30 | "Next video: why solo delegation attempts almost always fail — and the one exception I've seen work" | (next video, video 8 of series) | — |

## Callback In Close (final 60s)
"Earlier I said Pattern 4 is the one that catches most operators by surprise. You've now seen why — it doesn't look like a delegation problem; it looks like a pace problem, until the structure breaks. And remember the operator I mentioned at minute 1 — the one who broke the pattern entirely? She wasn't doing anything supernatural. She did one thing differently: she designed the role before she hired. That sequence-reversal is the structural fix that solves the most common variants of all 6 patterns. If you want the diagnostic that shows you which patterns you're running, the link is below."

(Callback explicitly references Loop 2 open and Loop 3 open; closes the bound-promise from the hook at the same beat.)

## Overlap Check
- Loop 1 open: 0:08 → Loop 1 close: 11:30
- Loop 2 open: 0:25 → Loop 2 close: 5:45
- Loop 3 open: 1:30 → Loop 3 close: 9:30
- End-screen loop opens at 12:30 (after Loop 1 closes)

Overlap pattern: at all times during the video, ≥ 1 loop is open. No gap.

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.retention.loops.architect, MARKDOWN, 0.6)
COMPARTMENTS_USED: [hook_retention_os, content_engine]
FRAMEWORKS_USED: [the-loop-system, 5-loop-types, 5-loop-placements, callback-architecture]
CONFIDENCE: HIGH (4 loops, all closes specified, callback explicit, no overlap gap)
GAPS: []
---
```

## Why this output is calibration-grade
4 loops with explicit open/close pairs. No unclosed loops. Callback in close references both Loop 2 and Loop 3 open content — pays off the contract. Overlap check confirms ≥ 1 loop open at every moment. End-screen loop drives series binge by promising what video 8 will deliver. Hard rules satisfied: opened by 0:08, closed before mid (Loop 2 closes at 44%), callback in close.
