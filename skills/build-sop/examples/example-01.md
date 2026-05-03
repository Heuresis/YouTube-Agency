# Example: build-sop output

## Output

```markdown
# SOP — First-Hour Comment Triage

**Owner role:** community-manager
**Last updated:** 2026-05-03
**Revision cadence:** monthly

## 1. Outputs
- Top 10-20 comments replied to within first hour of video publish (creator voice or team-with-creator-voice)
- High-signal comments logged to weekly comment-mining queue
- Lead-magnet comment pinned at top
- Engagement-bait / spam / off-topic comments removed

## 2. Inputs Needed
- Video published (T+0)
- Pinned comment text drafted in advance
- Voice phrases reference (compartment 1.brand_voice_architecture.phrases_to_use)
- Banned-phrase reference

## 3. Decision-Rights
| Branch | Decision-rights with |
|---|---|
| Reply tone calibration | community-manager (within voice guidelines) |
| Reply to high-stakes / sensitive comment | flag for creator |
| Pin a non-default comment | community-manager (within rules) |
| Pin a creator-quote-style audience comment | flag for creator |
| Remove / hide a comment | community-manager (per criteria) |
| Block a user | flag for creator |

## 4. Steps
1. At T+0 (video published): pin the default lead-magnet comment immediately
2. At T+15min: scan first comments — reply to top 5 (genuine question / specific reaction / case-study material)
3. At T+30min: reply to next 5-10 — emphasize comments with specific audience pain language
4. At T+45min-T+60min: continue replies; flag any high-signal comments to weekly queue
5. Throughout first hour: hide / remove engagement-bait, spam, hostile, off-topic
6. At T+1h: lock effort; remaining comments handled in 24-48h sweep
7. Within 24h: pull high-signal comments to weekly queue (Friday review)
8. Update lead-magnet pin per channel cadence

## 5. Checkpoints + Escalation
| When to pause | Who to consult |
|---|---|
| Comment is sensitive / hostile / regulatory-risk | creator |
| Audience is asking detailed program-specific question | creator (reply same day, not in first hour) |
| High-signal case-study material (operator describing detailed turnaround) | flag to creator + weekly queue |
| Comment proposes content idea creator should evaluate | flag to /idea-farm queue + creator |

## 6. Edge Cases
| Case | How to handle |
|---|---|
| Comment from a known program participant | reply with creator-direct voice; don't out them as a participant unless they self-identify |
| Comment misquoting the video | correct gently with timestamp reference |
| Comment is a competitor archetype's audience attempting to redirect viewers | hide if obvious solicitation; otherwise leave |
| Comment quotes the video accurately but takes opposite stance | engage directly; this is high-signal disagreement |
| Comment uses banned vocab in own message | reply normally — banned vocab applies to creator output, not audience input |

## 7. Ownership + Revision
- Owner: community-manager
- Revision cadence: monthly review by community-manager + intelligence-head
- Revision criteria: any time creator flags a missed escalation, any time the channel ships a new pillar that changes the comment landscape, any time a Blind Output Test fails on community-manager replies

---
SIGNAL: S = (BUILD, DIRECT, youtube.operations.sop.build, MARKDOWN, 0.5)
COMPARTMENTS_USED: [operations_intelligence, creator_identity_matrix, audience_building_loop]
FRAMEWORKS_USED: [role-design-first-applied-to-sops, decision-rights-architecture, edge-case-enumeration]
CONFIDENCE: HIGH (owner role assigned, decision-rights explicit, edge cases enumerated, revision cadence + criteria specified)
GAPS: []
---
```

## Why this output is calibration-grade
Owner role explicit (community-manager). Decision-rights named per branch. Steps sequenced with timestamps. Checkpoints + escalations specific. Edge cases enumerated with handling. Revision cadence + criteria specified. The SOP itself follows the channel's Role-Design-First framework (the role owns the SOP, not the founder).
