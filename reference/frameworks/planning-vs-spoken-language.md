---
name: Planning vs Spoken Language
slug: planning-vs-spoken-language
type: framework
pillar: content
mode_applicability: both
referenced_by_skills: [write-authority-script, write-reach-script, write-shorts-script, write-hook, write-pinned-vsl, retention-engineer]
referenced_by_invariants: [INV-7]
status: complete
---

# Planning vs Spoken Language

## Origin archetype
Working doctrine of script teams who reconciled structural narrative tools with voice-faithful spoken delivery after repeated "reads like an essay" rejection cycles.

## What it solves
Every structural tool in this OS — BUT/THEREFORE beats, open loops, belief installation, awareness levels, persuasion principles, hook formulas — is a **planning instrument**. The recurring failure mode is letting the instrument's vocabulary bleed into the spoken script: connective words used as essay logic, framework jargon spoken aloud, persuasion terms narrated to the viewer ("here's some social proof"). The result is the essay register — structurally correct, voice-dead, instantly recognizable as written-not-spoken. The doctrine: **structural tools live in planning artifacts only; the spoken layer carries their *effects*, never their *names or surface text*.** The audience must feel the mechanics and never hear them.

## Structure — the two layers

| Layer | Artifacts | Allowed vocabulary |
|---|---|---|
| **Planning** | Beat maps, loop registers, belief maps, awareness/sophistication declarations, hook-formula selections, CTA typing, retention annotations | Full framework vocabulary — precise, technical, jargon-encouraged |
| **Spoken** | Every line the creator will say on camera | Only words the creator would say to one person across a table — the encoded voice, nothing else |

The planning layer is *richer* than the spoken layer, on purpose. A well-planned script has more annotation than dialogue: every beat tagged with its job (which loop it opens, which belief it installs, which brain it addresses). None of the tags survive into the teleprompter text. The discipline cuts both ways: planning without the vocabulary is mush (un-auditable structure), and speech with the vocabulary is essay (dead voice). Keep both layers at full strength — separately.

## Structure — the reconciliation table

Template — every mechanic the workspace uses gets a row:

| Mechanic | Planning use | What the audience hears instead |
|---|---|---|

Filled, for the core mechanics:

| Mechanic | Planning use | What the audience hears instead |
|---|---|---|
| **BUT / THEREFORE beats** | Every story clause-pair joined by BUT (conflict) or THEREFORE (consequence) in the beat map — the test that no beat is an "and then" | Contrast carried by content and rhythm: "I did everything right. The video died anyway." — never "but" / "therefore" as essay connectors |
| **Open loop** | Loop register: ID, open timestamp, close timestamp, payoff | A specific unfinished thing in natural words: "there's one number on this dashboard that changed how I script — I'll show you when we get to the rewrite" |
| **Callback** | Callback map every 3–5 min, each tied to an earlier beat | The earlier moment re-surfacing as if remembered, not engineered: "remember the dead video from the start? Watch what this does to it" |
| **Pattern interrupt** | Interrupt cadence annotations (visual change, register shift, location cut) | A felt change of energy. The viewer notices nothing except that they're still watching |
| **Awareness level** | Per-video declaration (INV-13) driving word choice and assumed knowledge | Vocabulary calibrated to what this viewer already knows — the level itself is never mentioned |
| **Belief installation (ABBB)** | Belief map: which of the eight beliefs each section installs, in sequence | A story whose conclusion the viewer draws themselves before the creator says it |
| **Social proof** | Proof rows selected and placed at planned beats | The artifact on screen and the named result in plain speech: "this is her dashboard, sixty days apart" — never the phrase "social proof" |
| **Scarcity / urgency** | CTA typing + the real constraint documented (cap, date, reason-why) | The true constraint stated like a fact of life: "I take ten people because I review every channel myself. That's the whole reason" |
| **Hook formula (PAST / AID / Contrast / Statistic)** | Formula selected per awareness level; components checked | An opening that just sounds like the creator starting to talk — the formula is the skeleton, never the skin |
| **CTA framing** | Soft/hard typing by funnel position | An offer in the creator's own idiom: "if you want the deeper version, it's linked below" — no "smash," no "make sure to" (INV-7) |
| **Re-hook → Story → Lesson** | Section template in the outline | A new small question, a thing that happened, what it means — felt as narrative momentum, not as a repeating template |

Extend the table whenever a new mechanic enters the workspace: a mechanic without a "what the audience hears instead" entry is not ready to ship.

## Structure — worked beat pair

**Planning artifact (beat map):**
```
BODY §2 · installs Belief 3 ("the niche isn't saturated, the angles are")
BUT-beat: followed the proven title formula → video underperformed channel average
THEREFORE-beat: audited the field → every competitor used the same formula → formula = camouflage
Loop L2 closes here (opened 0:41). Proof row P-07 on screen. Re-hook into §3: "the fix took 11 minutes."
```

**Spoken text (what ships):**
> "So I did the thing you're supposed to do. Proven title structure, checked every box. That video did half my channel's average. And when I finally pulled up the search results I saw why — fourteen videos, *identical* title shape. I'd written camouflage. The fix took eleven minutes, and it's the next thing I'll show you."

Every planned mechanic is present — conflict, consequence, loop-close, proof, re-hook, belief — and none of its vocabulary survived.

## Structure — the test battery (run at script QA)
1. **Connector scan:** no spoken "but"/"therefore" doing essay-logic duty as clause connectors (incidental conversational use is fine; structural use is the violation — if removing it collapses the argument's signposting, it was structural).
2. **Jargon scan:** grep the spoken text for framework vocabulary — loop, hook, belief, awareness, sophistication, pattern interrupt, social proof, scarcity, CTA, mechanism (in the marketing sense), formula names. Any hit = rewrite the line.
3. **Meta-narration scan:** no "in this video we're going to," "before we get into it," "let me give you some context" — narrating the structure is speaking the planning layer (and most of it is banned filler anyway, INV-7).
4. **Read-aloud test:** the writer reads every line out loud; any stumble or "no one says this" moment gets rewritten in the creator's cadence.
5. **Dinner-table test:** could the creator say this line to one person at dinner without sounding like they're presenting? If not, it's written register.

## Relationship to the BUT-THEREFORE Narrative Engine
`but-therefore-narrative-engine` is the **planning side** of this doctrine: clauses joined by BUT or THEREFORE guarantee that every beat carries conflict or consequence, and "and then" beats get caught and cut. This framework is the **boundary** that keeps those connectives — and every other structural device — out of the spoken surface. The pair is one system: plan with BUT/THEREFORE, speak with neither; the contrast lives in the rhythm and the content of consecutive lines. The same pairing applies to every framework in this directory: each one is a lens for the planning layer, and none of them is a vocabulary for the spoken layer.

## When to use
At every script execution step (the writer drafts from the annotated beat map, then strips to spoken register) and at script QA (the test battery is part of the checklist in the script-writing skills). Also at voice-extraction time (`extract-creator-voice`): the encoded voice profile defines what the spoken layer is allowed to sound like, which is what the reconciliation table's right-hand column must match.

## Why it works
Spoken and written English are different registers with different signatures — connective density, clause length, signposting. Viewers can't name the difference, but they detect it within seconds: written-register speech reads as scripted, scripted reads as performed, performed breaks the parasocial sense of a person talking *to me* — which is the channel's core asset (INV-16). Meanwhile the structural tools genuinely work; they're why retention holds and beliefs land. The doctrine gets both: full structural rigor where rigor lives (planning), full human voice where voice lives (speech). The audience experiences the engineering only as the feeling that the video was effortless to watch.

## Anti-patterns
- **Spoken framework vocabulary** — "let me open a loop here," "quick pattern interrupt," "here's the social proof." The machinery narrating itself.
- **Essay connectors as spine** — "but," "therefore," "however," "moreover," "that said" carrying the argument's structure in speech.
- **Fragment-stacking as fake punch** — "No views. No leads. No plan." as the default rhythm; written-register minimalism is still written register. Fragments are rare punctuation, calibrated to the creator's real cadence.
- **Meta-narration of structure** — announcing the roadmap instead of opening a loop that makes the roadmap felt.
- **Planning annotations leaking into the teleprompter** — beat tags, (SHOW: …) cues, or [confirm] slots read aloud because the spoken layer was never cleanly separated.
- **The inverse failure: planning in spoken register** — beat maps written as loose prose with no framework vocabulary, producing scripts whose structure can't be audited. The discipline is two strong layers, not one diluted one.

## Variants observed
Some teams enforce this with a two-document workflow (beat map file + script file); others with inline annotations stripped at export. Canonical form retained: the two-layer doctrine with the reconciliation table, because the table — mechanic by mechanic, with the audience-facing substitute named — is what makes the rule teachable to new writers rather than a vibe enforced by rejection.
