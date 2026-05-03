# SIGNAL.md — Signal Theory 5-Tuple Encoding

> **Canonical spec.** Every skill output declares its Signal encoding. Every cross-agent communication carries a 5-tuple. The OS is signal-theoretic at every layer — communication events are measurable, not vibes-based.

---

## The 5-tuple

Every communication event in this workspace is encoded as:

```
S = (Mode, Genre, Type, Format, Weight)
```

Where:

### Mode — the speech-act intent

| Mode | Meaning | When |
|---|---|---|
| `EXECUTE` | An action that writes / sends / commits something | A skill that drafts and ships, an agent that posts to community tab, a publish-checklist that triggers upload |
| `ASSIST` | A read-mostly response to a question | A query about the channel state, a status report, a lookup |
| `ANALYZE` | A diagnostic / measurement output | Leak audit, retention curve diagnosis, KPI dashboard pulse, postmortem |
| `BUILD` | A meta-construction event (creating new skills, new agents, new compartments) | Skill authoring, agent persona definition, compartment schema extension |
| `MAINTAIN` | A change to invariants, schemas, or sacred-format files | Edits to SYSTEM.md, INVARIANTS.md, ENCODING.md — always pauses for creator approval |

Default is `ASSIST` for chat queries, `EXECUTE` for skill invocations.

### Genre — the social register

| Genre | Meaning | Example |
|---|---|---|
| `DIRECT` | Imperative or declarative, no decoration | "draft the script" / "the script is ready" |
| `INFORM` | Neutral information flow, no requested action | Webhook payloads, status updates, audit reports |
| `COMMIT` | A binding promise (deadline, deliverable, milestone) | Sponsor integration commitment, publish-date commitment |
| `DECIDE` | A judgement call requiring authority | Creator approving a script, sponsor-fit yes/no, override of a quality gate |
| `EXPRESS` | Emotional / relational content | Direct message from a viewer with emotional content; flagged for human handling |

Default is `DIRECT` for skill invocations, `INFORM` for scheduled reports.

### Type — the namespaced operation identifier

`youtube.<pillar>.<verb>` — e.g.:

- `youtube.foundations.audience.build`
- `youtube.content.script.draft`
- `youtube.retention.hook.write`
- `youtube.production.thumbnail.brief`
- `youtube.distribution.title.options`
- `youtube.audience.lead-magnet.bridge`
- `youtube.monetization.vsl.write`
- `youtube.intelligence.leak-audit.weekly`
- `youtube.operations.sop.build`

Type is structured for routing and analytics. Every skill declares its Type in `SKILL.md` frontmatter.

### Format — the wire encoding

| Format | When |
|---|---|
| `MARKDOWN` | Most internal docs, agent prompts, reference files, long-form skill outputs |
| `YAML` | Schema files, manifests, structured config |
| `JSON` | API payloads, webhook bodies, tool-call inputs/outputs |
| `SSE` | Streaming chat responses, live skill execution updates |
| `IMAGE` | Thumbnail outputs, reference image specimens |
| `PDF` | Pinned VSL exports, sponsor briefs, channel architecture docs |
| `CSV` | KPI dashboards exported, batch idea-farm output |
| `MP4` | (Reference only — the OS does not produce video; it briefs the editor) |

Default is `MARKDOWN`.

### Weight — the cognitive cost / value

A 0.0–1.0 scalar approximating how much "thought" a communication carries:

| Weight | Meaning | Example |
|---|---|---|
| 0.0–0.2 | Trivial lookup or routine ack | "what's the channel handle?" / "noted" |
| 0.2–0.5 | Structured skill invocation, single-step output | `/title-options` returning 8 options |
| 0.5–0.8 | Multi-step skill with synthesis | `/write-authority-script` returning a full script with metadata |
| 0.8–1.0 | Strategic-layer call, novel synthesis, sacred-format edit | `/build-channel-architecture`, `/leak-audit` full diagnostic, MAINTAIN-mode edits |

Weight informs caching, runtime budget allocation, and human-attention triage. Higher-weight communications get more deliberation.

---

## Where the 5-tuple is declared

### In SKILL.md frontmatter

Every skill declares its default Signal:

```yaml
signal_5tuple:
  mode: EXECUTE
  genre: DIRECT
  type: youtube.content.script.draft
  format: MARKDOWN
  weight: 0.7
```

### In every output's metadata block

Every skill's output includes a metadata footer:

```
---
SIGNAL: S = (EXECUTE, DIRECT, youtube.content.script.draft, MARKDOWN, 0.7)
COMPARTMENTS_USED: [creator_identity_matrix, audience_intelligence_system, offer_architecture, hook_retention_os]
FRAMEWORKS_USED: [three-brain-decision-sequence, the-loop-system, four-hook-formulas, but-therefore-narrative-engine]
CONFIDENCE: HIGH (context 88%, voice-accurate, mode-fit)
GAPS: []
---
```

### In agent-to-agent handoffs

Agent handoff messages (between orchestrators / dept heads / specialists) carry the 5-tuple:

```
FROM: content-head
TO: retention-head
SIGNAL: S = (EXECUTE, DIRECT, youtube.retention.script.review, MARKDOWN, 0.6)
PAYLOAD: <draft script>
EXPECTED_RESPONSE: retention-floor verdict + revision diagnosis if FAIL
```

---

## Resolution requirement

Every output must resolve all 5 dimensions. No wildcards, no `unspecified`, no partial encoding. Unresolved dimensions are noise.

If a skill cannot determine a dimension at design time, it specifies the resolution rule (e.g., "weight is the average of input compartment completeness scores normalized to 0–1").

---

## Why this matters

Signal Theory is not decoration. It is a routing protocol.

- A `MAINTAIN` signal pauses for creator approval no matter where it originates.
- A `weight ≥ 0.8` skill execution gets the deliberation budget of an Opus-tier model.
- A `genre = COMMIT` signal triggers calendar / contract / deadline tracking automatically.
- A `format = JSON` output signals that downstream consumption is programmatic, so verbose markdown commentary is suppressed.
- A `type` namespace lets analytics aggregate by pillar (e.g., what % of cycles are `youtube.retention.*` vs `youtube.distribution.*`).

The 5-tuple turns "AI did something" into measurable channel-level operating data.

---

## Default mappings per pillar

Skills default to the following Signal envelope unless specifically overridden:

| Pillar | Mode | Genre | Default Weight |
|---|---|---|---|
| Foundations | EXECUTE | DIRECT | 0.7 |
| Content Engine | EXECUTE | DIRECT | 0.6 |
| Hook & Retention | EXECUTE | DIRECT | 0.6 |
| Production | EXECUTE | DIRECT | 0.6 |
| Distribution | EXECUTE | DIRECT | 0.4 |
| Audience Building | EXECUTE | DIRECT | 0.5 |
| Monetization & Sales | EXECUTE | DIRECT | 0.7 |
| Operations | EXECUTE | DIRECT | 0.5 |
| Intelligence | ANALYZE | INFORM | 0.5 |

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis canonical spec.*
