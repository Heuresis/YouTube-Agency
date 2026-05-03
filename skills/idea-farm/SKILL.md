---
name: idea-farm
command: /idea-farm
description: Maintain a rolling backlog of 20+ video ideas sourced from comments, search, suggested, trends, sales calls.
tier: sonnet
agent_owner: content-head
agent_executor: content-head
required_compartments:
  audience_intelligence_system: 50
  content_engine: 30
mode_applicability: both
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.content.idea-farm.cultivate
  format: MARKDOWN
  weight: 0.5
banned_when: []
verification_layers: [formal, semantic, info-theoretic]
---

# Idea Farm

## Purpose
Cultivate and maintain a rolling backlog of ≥ 20 viable video ideas, scored, sequenced, and ready for `/research-brief` + script production. The idea farm is the channel's content fuel pipeline — when it's full, every weekly publish is calm. When it's empty, the creator panic-produces and quality drops.

## Decision Logic
Ideas come from real audience signal: comments (highest density), search behavior (organic intent), Suggested feed (algorithm signal), sales-call themes (highest buying-power signal), email replies (highest engagement signal), competitor content gaps (positioning signal), trend windows (timing signal). The farm weights sources by source-quality. Sales-call themes are 10× more valuable than competitor content gaps — they're closer to the buying decision. Comments themes are 5× more valuable than trend windows — they're closer to your audience.

Every idea is scored on:
- Audience-fit (does this speak to the avatar?)
- Mode-fit (authority / reach / hybrid?)
- Awareness-level fit (which level does this address?)
- Belief-installation contribution (does this advance the offer's 8-belief path?)
- Specificity (concrete claim or generic topic?)
- Compounding value (evergreen or timely?)

## Tacit Principles
1. **Comments and sales calls are the highest signal.** Real-world audience language = real ideas. Never start with the creator's brainstorm in a vacuum.
2. **One idea per row, with full context.** Each idea: title hypothesis, hook hypothesis, mode, awareness level, belief contribution, source, score. Skip context and the idea dies in the backlog.
3. **Score before sequence.** Ideas are not first-come-first-served. Score against criteria, then sequence by belief-installation path priority + timely-vs-evergreen mix.
4. **Reach-mode ideas use contrast or curiosity hooks.** Authority-mode ideas use mechanism + outcome hooks. Don't mismix.
5. **Backlog ≥ 20 means you never panic-produce.** Below 20, idea-farm runs at higher cadence.
6. **Kill ideas, don't cherish them.** If an idea hasn't been produced in 90 days, it's stale. Either produce or remove.
7. **Adjacent niches feed reach-mode ideas, not authority.** Reach pool comes from `channel_architecture.adjacent_niches_for_reach`, not from the primary niche directly.
8. **Trend ideas have a 14-day shelf life.** Trend windows close. Calendar them aggressively.
9. **Every published video produces 2-4 follow-up ideas.** Comments + retention drop-off zones + outliers = next-cycle fuel.

## Process

### Step 0 — Gate check
Verify audience ≥ 50, content_engine ≥ 30.

### Step 1 — Load context
- `{{audience_intelligence_system}}` (avatar, VOC, comment themes, buying triggers, objections)
- `{{channel_architecture}}` (8-belief path, content pillars, mode mix)
- `{{content_engine.idea_farm}}` (existing backlog state)
- Source data: recent comments, sales-call themes, email replies, search queries, Suggested feed observations, trend windows

### Step 2 — Source audit
Pull 5+ ideas from each of: comments / sales calls / search / Suggested / email / competitor gaps / trend windows. Tag every idea with its source.

### Step 3 — Score each idea
For each candidate, score 0-10 on: audience-fit, mode-fit, awareness-fit, belief-installation contribution, specificity, compounding value. Sum / 60.

### Step 4 — Sequence the backlog
Order by:
- Belief-installation path priority (authority videos that advance the path)
- Timely / trend ideas (calendared)
- Reach-mode interleaving (per mode_mix ratio)

### Step 5 — Cull stale ideas
Remove anything > 90 days old without being produced.

### Step 6 — Verify
Ensure ≥ 20 ideas live, ≥ 50% authority (per default mode mix), each has source + score.

## Output Format

```markdown
# Idea Farm Backlog — [Channel] — [YYYY-MM-DD]

**Live ideas:** N (target ≥ 20)
**Mode mix:** authority N% / reach N% / hybrid N% (target 65/30/5)

## Backlog Table
| # | Title hypothesis | Hook hypothesis | Mode | Awareness | Belief | Source | Score | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | ... | ... | authority | Solution-aware | Belief 3 | Sales call | 52/60 | ready |
| 2 | ... | ... | reach | Problem-aware | n/a | Comments | 47/60 | ready |
... [N rows]

## Trend Calendar (timely ideas)
| Window close date | Title | Score |
|---|---|---|

## Killed Ideas (last 30 days)
| Title | Reason |

## Compartment Write-Back
Updates to `content_engine.idea_farm.rolling_backlog_size`, `topic_supply.timely_topics_pipeline`.

---
SIGNAL: S = (EXECUTE, DIRECT, youtube.content.idea-farm.cultivate, MARKDOWN, 0.5)
COMPARTMENTS_USED: [audience_intelligence_system, channel_architecture, content_engine]
COMPARTMENTS_WRITTEN: [content_engine.idea_farm]
FRAMEWORKS_USED: [source-weighted-idea-extraction, belief-installation-path-prioritization, mode-mix-balancing]
CONFIDENCE: HIGH | MEDIUM | LOW
GAPS: [...]
---
```

## Frameworks Applied
- [framework: source-weighted-idea-extraction] — comments + calls > search > trends > brainstorm
- [framework: belief-installation-path-prioritization] — authority ideas sequenced for offer's 8-belief path
- [framework: mode-mix-balancing] — authority/reach/hybrid per `content_engine.mode_mix`

## Compartments Read
- `{{audience_intelligence_system}}`, `{{channel_architecture}}`, `{{content_engine}}`

## Compartments Written
- `{{content_engine.idea_farm}}`

## Verification Gates
- Formal: ≥ 20 live ideas, every idea sourced + scored, mode mix matches `content_engine.mode_mix`
- Semantic: ≥ 70% of ideas are specific (not generic categories), authority ideas advance 8-belief path
- Info-theoretic: title hypothesis specificity ≥ 3 specifics each

## Related Skills
- Upstream: `/build-audience`, `/build-channel-architecture`, `/content-mix-strategy`
- Downstream: `/research-brief`, every script-writing skill
- Alternative: none

## Failure Modes
- **Below 20** — backlog empty. Run extraction at higher cadence; pull from sales-call transcripts.
- **Mode mix off** — too much authority or too much reach. Rebalance against `content_engine.mode_mix`.
- **Generic titles** — "How to delegate." Detect: ≤ 3 specifics. Revise: add audience + outcome + mechanism.
- **Source bias** — all ideas from one source. Pull from ≥ 5 source types.

## Examples
- See `examples/example-01.md`

## Lineage
Draws from the content-OS director tradition (idea-as-asset) + the sales-call-mining methodology (highest-buying-power signal source) + the dual-mode-content-strategy theorist (mode-balanced backlog).
