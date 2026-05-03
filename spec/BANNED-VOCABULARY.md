# BANNED-VOCABULARY.md — Anti-Slop Filter

> **Pre-ship gate.** Every output is grep'd against this list before it ships. Any match = reject + revise. The creator can override per-word via `phrases_to_use` in `company.yaml.creator_identity_matrix.brand_voice_architecture` — that creator's outputs are then permitted to use the word. Default: banned.

---

## The reasoning

Banned vocabulary is not "words I don't like." It's **words that signal generic AI-generated content** — phrases that make a viewer mentally categorize the script as low-effort. Once the viewer makes that classification, retention falls off a cliff. The banned list is empirically the words that show up disproportionately in the bottom-quartile of any video AVD distribution.

---

## Cross-vertical generic banned list

These are banned across every output type unless the creator's `phrases_to_use` explicitly permits them:

```
unlock
unleash
supercharge
game-changing
revolutionary
next-level
dive into
dive deep
harness (as verb)
leverage (as verb)
explore
navigate (metaphorical)
journey (generic, e.g., "your journey to success")
elevate
transform (generic)
empower (generic)
holistic
master (as verb, e.g., "master the art of")
unleash your potential
unlock your potential
take it to the next level
embark
embracing
cutting-edge (when not literal)
state-of-the-art (when not literal)
paradigm shift
synergy
disruptive (when not literal)
revolutionize
innovative (when not specific)
seamless
robust (overused)
streamline (when meaning "make easier")
optimize (when meaning "improve")
maximize (when meaning "increase")
foster (in metaphorical sense)
cultivate (in metaphorical sense)
champion (as verb)
spearhead
trailblazing
groundbreaking
visionary
thought-provoking
mind-blowing
mind-bending
life-changing (unless literal)
crystal clear (cliché)
the bottom line is
at the end of the day
when push comes to shove
in today's fast-paced world
in today's digital age
```

## YouTube-specific additions

These are banned in any script, title, description, or community-tab post:

```
smash that subscribe
hit that bell
guys in this video we're going to
without further ado
what's up YouTube
let's get into it (as filler)
make sure to (as filler)
blow your mind
this changed everything
you won't believe
wait until you see
buckle up
strap in
sit back and enjoy
hope you're having a great day
hope you're well
welcome back
welcome to my channel (in opening — only acceptable if the channel is < 100 subscribers and the line serves a clear function)
in this video I'll be showing you
in this video I will show you
without you the channel wouldn't be possible
let me tell you
let me ask you something
the question is (as filler)
here's the thing (as filler)
the truth is (as filler unless followed by a contrarian claim)
listen
look (as opener filler)
okay so (as opener filler)
alright so (as opener filler)
basically (as filler)
literally (as intensifier)
honestly (as filler)
to be honest
absolutely (as filler)
incredible (overused)
amazing (overused)
awesome (overused)
guys (as repeated address)
my friend (as repeated address — once is fine, twice+ is banned)
beautiful (overused)
gorgeous (overused, except in literal description)
wonderful (overused)
fantastic (overused)
```

## Engagement-bait phrasing (banned per INV-17)

```
comment YES if you
comment YES below
type X in the comments
let me know in the comments (when generic)
drop a comment
hit subscribe to win
subscribe to win
like and subscribe (as standalone CTA without function)
do me a favor
all I ask is
if you found this helpful, leave a like
if this helped, hit like
ring the notification bell
ring that bell
turn on notifications
share this video with someone
tag a friend
who needs to hear this
this is going to BLOW your mind (capitalized for emphasis = banned)
you will NOT believe
nobody is talking about this (when used as hook without delivering)
the secret nobody tells you (when used as hook without delivering)
they don't want you to know (conspiracy framing without delivering)
```

## Sales-y / regulatory-risk phrasing

These trigger Truth Gate (INV-5) failures or platform/regulator policy issues:

```
guaranteed income
guaranteed earnings
guaranteed results (when no actual guarantee structure)
guaranteed in <timeframe>
make $X in <timeframe> (when not the creator's literal own result)
proven to work (when no proof shipped)
risk-free (unless there's a literal money-back guarantee)
no work required
passive income (when not literally passive)
overnight success
get rich quick
zero risk
foolproof
fail-proof
lifetime deal (when terms are not actually lifetime)
limited time only (when there's no actual deadline)
last chance (when there's no actual deadline)
only X spots left (when there's no actual cap)
```

## Sophistication-aware exceptions

The market sophistication level (`audience_intelligence_system.market_sophistication.sophistication_stage`) modulates the banned list:

- **Naive market** (the audience hasn't seen these tactics before): the cross-vertical generic list applies. The audience is still calibrating quality and slop sounds amateur.
- **Aware market**: the cross-vertical list + the YouTube-specific list applies. The audience has seen the patterns and rejects them.
- **Skeptical market**: full list + meta-rejection of "selling" language. Even legitimate sales phrasing reads as untrustworthy.
- **Exhausted market**: every word in the list reads as parody. The creator's only path is contrarian-frame + new-mechanism positioning that explicitly distances from the cliché vocabulary.

The banned list is therefore most strict for skeptical/exhausted markets — which is where most info-product audiences sit.

---

## Override mechanism

A creator's `phrases_to_use` list takes precedence on a word-by-word basis. If "unlock" is in `phrases_to_use`, then "unlock" is unbanned for this creator's outputs. The OS is per-creator-aware.

Conversely, the creator's `phrases_to_avoid` adds to the banned list. That list is the creator's voice-specific calibration on top of the canonical banned list.

---

## Detection

Pre-ship gate runs:

```
1. Strip code blocks, URLs, and proper nouns
2. Lowercase and tokenize remaining text
3. Match against the active banned list (canonical - phrases_to_use + phrases_to_avoid)
4. For each match, log: word + position + sentence
5. If matches > 0: output is REJECTED, return matches to author with revision instruction
6. If matches = 0: pass to next gate (Truth Gate, Triple-Layer Verification)
```

Multi-word phrases match as substrings on the lowercased token stream.

---

## Maintenance

This file is updated when:
1. A creator's market shifts sophistication stage (audit cycle)
2. A platform policy update introduces a new flagged phrase
3. The library-compound process surfaces a new emerging cliché in the corpus

Version log at end of file.

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
