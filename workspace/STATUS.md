# STATUS — the reconciliation ledger

> **Read this first when you reopen the workspace.** STATUS reconciles the mandate (what this operating layer was asked to do) against what's actually on disk: **mandate → built → pruned → next.** It's the defense against the two ways an operating layer rots — silent drift (work happened but wasn't logged) and silent contradiction (two docs disagree about strategy and nobody executed the supersession).
>
> **Discipline:** newest dated block on top. Every entry carries a date. When a doc supersedes another, *execute* the supersession (banner the stale doc, repoint the links) and log it under § Pruned — a declared-but-unexecuted supersession is the #1 source of drag.
>
> Fill every `{{slot}}`. The worked examples are invented — delete them as you fill.

---

## ⏱ {{date}} — {{headline_of_this_cycle}}

*One short block per working cycle: what changed, in 3–6 bullets, each linking to the artifact. This is the "what happened since you last looked" digest.*

- {{change_1}}
- {{change_2}}
- **Current bottleneck:** {{bottleneck}} — *name the ONE thing gating the next ship (it's usually the [PROOF-BANK § Proof-gather todo](PROOF-BANK.md), not ideas).*

> **Worked example (generic):** "Pipeline instrumented — `published/_ANALYTICS.md` live with the first 3 video records · SLATE v2 ranked from real retention data · bottleneck: the §2 row-1 dashboard screenshot; the case-study video is written and gated on it."

---

## § Mandate

*The operating brief in one paragraph: who asked for what, when, and what "done" looks like. Quote the actual ask — paraphrase drifts.*

{{mandate_paragraph}} — *as of {{date}}, from {{source — kickoff meeting / intake doc / founder brief}}*

> **Worked example (generic):** "Re-orient the channel as the proof layer of the paid-traffic funnel, encode the strategy + voice + proof so any session can generate film-ready scripts, and get the first case-study video shot this month." — founder kickoff, {{date}}.

---

## § Built

*What exists and works, traceable. One row per shipped artifact or capability.*

| Date | Built | Where |
|---|---|---|
| {{date}} | {{artifact}} | {{path_or_link}} |
| {{date}} | {{artifact}} | {{path_or_link}} |

---

## § Pruned / superseded

*What was killed or replaced, and why — so no future session resurrects it or, worse, obeys it. If a stale doc must stay on disk (history, raw research), banner it SUPERSEDED at the top and log the banner here.*

| Date | Pruned / superseded | Why | Disposition |
|---|---|---|---|
| {{date}} | {{what}} | {{why}} | {{deleted / bannered / archived-to}} |

> **Worked example (generic):** {{date}} · "SLATE v1 (trend-chasing plan)" · "violated STRATEGY §5 kill list; trend was stale" · "superseded by SLATE v2; v1 ideas archived in `pipeline/_INBOX.md`".

---

## § Next — P0 → P4

*Priority bands, worked top-down. P0 starves everything below it.*

| Band | Definition | Items |
|---|---|---|
| **P0 — contradictions + drag** | Two docs disagreeing on strategy, unexecuted supersessions, anything that makes the next session slower or wrong-footed. Kill first, always. | {{p0_items}} |
| **P1 — structural debt** | Pruning, link integrity, missing indexes, taxonomy reconciliation (e.g. mode names consistent across [CALIBRATION](CALIBRATION.md) / [`company.yaml`](../company.yaml) / skills). | {{p1_items}} |
| **P2 — unported source material** | Mined-but-not-encoded material: frameworks catalogued in sources that haven't reached the operating docs or prompts yet. | {{p2_items}} |
| **P3 — production** | Actually making the content: close proof-gather slots, film, publish, cascade, log. | {{p3_items}} |
| **P4 — missing engine pieces** | New capability builds (e.g. the pinned VSL via `/write-pinned-vsl`, a new prompt-pack). Important, not urgent. | {{p4_items}} |

---

## § Sauce-mining ledger

*Every source document that feeds this workspace, what was extracted, and where it landed. This is how you know what's still un-mined — and prove what isn't. "Catalogued" ≠ "ported": a framework indexed in a sources folder but absent from the operating docs is still P2 work.*

| Source doc | What was extracted | Where it landed | Status |
|---|---|---|---|
| {{source_1}} | {{extraction}} | {{target_doc_section}} | {{ported / partial / unmined}} |
| {{source_2}} | {{extraction}} | {{target_doc_section}} | {{ported / partial / unmined}} |
| {{source_3}} | {{extraction}} | {{target_doc_section}} | {{ported / partial / unmined}} |

> **Worked example (generic):** "Founder interview transcript" → story beats + the two die-on beliefs → [VOICE §1, §10](VOICE.md) → ported. "Sales-call recordings, May batch" → buyer objection language → nothing yet → **unmined (P2)**.

---

*Template v1 — this file has no version of its own; it IS the version history. First entry: `{{date}} — workspace initialized from intake`.*

*A Heuresis workspace template.*
