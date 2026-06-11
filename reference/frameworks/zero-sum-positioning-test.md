---
name: Zero-Sum Positioning Test
slug: zero-sum-positioning-test
type: framework
pillar: content
mode_applicability: both
referenced_by_skills: [research-brief, write-authority-script, write-reach-script, title-thumbnail-pair, idea-farm, publish-checklist]
referenced_by_invariants: []
status: complete
---

# Zero-Sum Positioning Test

## Origin archetype
Senior script consultancy for top-tier educational channels: the working insight that ranked attention is a contest, not a quality bar.

## What it solves
"Is this video good?" is the wrong QA question, and channels that ask it plateau while producing genuinely good work. Every impression is a ranking contest: the feed shows a finite set of candidates for this topic to this viewer, and the viewer picks **one**. A view a competitor earns is a view this channel doesn't. The right QA question is therefore comparative: **"does this beat the best existing video on this exact topic?"** A 7/10 video on a topic whose incumbent is a 5/10 wins; a 9/10 video against a 10/10 incumbent loses — quality in a vacuum predicts nothing.

## Structure — the principle
1. The suggested feed, search results, and browse surface are ranking contests over a finite attention pool.
2. For any topic, there is a current champion — the video the algorithm currently prefers for that intent.
3. A new video doesn't get judged against "good"; it gets judged against that champion, head-to-head, one impression at a time (packaging first, then first-30s delivery, then retention).
4. Therefore positioning is decided **before writing** — in the pre-work where the contest is studied — not in the polish. (This is the operational core of `twenty-eighty-inversion`: the 80% pre-work is where the contest is won.)

## Structure — the pre-write competitive scan
Run inside `research-brief`, before any outline exists:

1. **Pull the field.** Search the exact topic (not the niche — the topic). Capture the top 3–5 videos by relevance and recency: title, thumbnail, length, age, view velocity relative to channel size.
2. **Score the champion.** Assess the top 1–2 on the three sophistication pillars (`three-sophistication-pillars`): positioning claims, storytelling quality, insight quality/actionability. Note their awareness target and hook formula.
3. **Locate the ceiling and the gaps.** What does the champion do at a level this channel can't beat this cycle? Where is it weakest — generic positioning, listy storytelling, surface insights, dated information, no demonstrated proof?
4. **Pick the differentiation axes.** Choose **≥3 of the 6 differentiation paths** (`six-differentiation-paths-detailed`) aimed at the located gaps — different/better × positioning/storytelling/insights.
5. **Write the out-sophistication thesis in one sentence.** "This video beats [champion video] because it [axis 1], [axis 2], and [axis 3] for [the same viewer intent]." If the sentence can't be written honestly, **don't write the script** — change the angle, the depth, or the topic (back to `idea-farm`).

The thesis travels with the brief: the script, the title, and the thumbnail are all executions *of the thesis*, and QA checks them against it.

## Structure — gate placements

| Gate | Surface | Question asked |
|---|---|---|
| 1 | `idea-farm` (backlog triage) | Is this contest winnable by this channel this cycle? Topics with unbeatable champions get re-angled or shelved |
| 2 | `research-brief` (pre-write) | Competitive scan complete? Out-sophistication thesis written and honest? |
| 3 | Script QA — final checklist step in `write-authority-script` / `write-reach-script` | "Would the target viewer watch this over the champion video?" — not "is this good?" |
| 4 | `title-thumbnail-pair` | Placed next to the champion's actual packaging at feed size: which gets the click? The pair competes as a unit (INV-10 alignment still applies) |
| 5 | `publish-checklist` | Thesis still true at ship time? (A new champion may have appeared since the brief) |

The script-stage gate (gate 3) is the decisive one: it converts the shipping decision from self-referential ("we like it") to market-referential ("it wins its contest"). A script that fails gate 3 returns to the differentiation step, not to line edits — the failure is positional, and polish cannot fix position.

## Pass/fail rubric for gate 3
A video beats the champion when it **wins clearly on at least one declared axis and ties on the rest** — for the same viewer intent. "Slightly better at everything" is a fail-prone thesis: diffuse superiority is invisible at feed speed and collapses under the champion's incumbency advantages (watch history, channel authority, accumulated engagement signals). The challenger needs a legible, nameable win — the thing a viewer could say out loud about why they'd pick it.

## When to use
Every video, both modes. Reach mode contests are broader (the champion set spans adjacent niches); authority mode contests are narrower but sharper (the champion may be the viewer's current trusted source — the contest includes loyalty). Also at quarterly strategy: a channel whose theses keep failing in one content lane has a lane-level positioning problem, not a per-video one.

## Why it works
The algorithm is an arbiter of head-to-head outcomes: for each impression it estimates which candidate this viewer is most likely to click and watch, and the loser simply isn't shown. Optimizing "goodness" improves the video along axes the contest may not measure; optimizing the contest improves exactly what gets measured — click share against the field, then watch share against expectation. Channels that internalize the zero-sum frame also stop shipping redundant content: a video that can't articulate its win-condition was always going to lose its impressions to the incumbent, no matter how well it was made.

## Anti-patterns
- **Vacuum QA:** approving scripts on internal quality criteria alone — the most common failure mode this framework exists to delete.
- **Niche-level scanning:** studying "the niche's big channels" instead of the *exact topic's* champion videos. Contests happen per-intent, not per-niche.
- **Unwinnable-contest stubbornness:** spending production cycles against a champion with structural advantages (definitive treatment, massive proof) instead of re-angling the topic toward an adjacent intent with a weaker field.
- **The originality exemption:** "no one has made this video" usually means the contest is with the *adjacent* intent the viewer searches instead — there is always an incumbent for the attention, even when there's none for the exact topic.
- **Out-sophisticating on axes the viewer doesn't value:** beating the champion on production gloss when the contest's viewers reward insight depth (the scan's pillar-scoring step exists to prevent this).
- **Copying the champion:** matching them axis-for-axis produces the derivative version of a video the algorithm already has — incumbency wins ties.

## Relationship to other frameworks
- `twenty-eighty-inversion` supplies the effort allocation (pre-work over polish); this framework supplies the *content* of that pre-work and the gate that enforces it.
- `three-sophistication-pillars` / `six-differentiation-paths-detailed` supply the scoring axes and the differentiation menu the scan selects from.
- `engagement-heat-map-method` deepens step 3 of the scan — the champion's replay hotspots reveal what its audience actually valued.
- `market-sophistication-five-stages` sets the claim-form constraints the winning thesis must respect.

## Variants observed
Some operators run the scan only for search-intent content, arguing browse content has no champion. Canonical form retained: the test applies to both — browse contests are still head-to-head per impression; the field is just assembled by the algorithm instead of by a query.
