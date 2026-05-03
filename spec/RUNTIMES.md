# RUNTIMES.md — Adapter Contract per Runtime

> **Runtime independence.** SKILL.md is the runtime-agnostic brain of every skill. `adapters/{runtime}.md` is the thin layer that translates the skill into a specific runtime's invocation surface. This file specifies the adapter contract per supported runtime.

---

## The principle

A skill is a **decision procedure**. It has Decision Logic + Tacit Principles + Output Format. None of those should bind to a specific runtime.

When the runtime changes (new IDE, new model surface, new orchestrator, new agentic platform), the skill survives. The adapter is the only file that rebuilds.

This is the load-bearing differentiator. Workspaces that encode at the runtime level break every 6–18 months. Workspaces that encode at the decision level survive every platform shift.

---

## Supported runtimes

| Runtime | Adapter file | Trigger surface | Notes |
|---|---|---|---|
| Claude Code | `adapters/claude-code.md` | Slash commands (`.claude/commands/`) | Primary development runtime |
| Claude Desktop | `adapters/claude-desktop.md` | MCP project / chat | For interactive sessions |
| Claude Agent SDK | `adapters/claude-sdk.md` | API-driven orchestration | For programmatic invocation |
| ChatGPT (Custom GPT) | `adapters/chatgpt.md` | Custom GPT instructions + actions | Read-mostly; tool use limited |
| Cursor | `adapters/cursor.md` | Composer + agent mode | Best for multi-file scripted work |
| Codex CLI | `adapters/codex.md` | CLI command surface | For headless agent runs |
| Paperclip | `adapters/paperclip.md` | Cron / webhook / event triggers | Production agentic runtime |
| BusinessOS | `adapters/businessos.md` | OSA terminal / SORX skill registry | Heuresis-internal runtime |
| Generic OpenAPI | `adapters/openapi.md` | HTTP orchestrator | For any HTTP runtime |

A skill MUST ship with at least the `any.md` adapter (universal fallback). Additional runtime adapters are optional but recommended for the runtimes the creator uses.

---

## Adapter contract

Every adapter file has the same shape, ≤25 lines:

```markdown
---
runtime: <runtime-id>
skill: <skill-slug>
binding_type: <slash-command | api | mcp | webhook | cron | trigger>
---

# <Skill Slug> — <Runtime> Adapter

## Invocation
<one short paragraph: how the runtime invokes this skill>

## Inputs
<list how the runtime supplies inputs to the skill — args, env, file refs>

## Outputs
<list where the runtime puts the skill's outputs — stdout, file, message, webhook response>

## Constraints
<list any runtime-specific constraints — rate limits, context limits, tool-use restrictions>

## Fallback
<what happens if this adapter is invoked on a runtime that doesn't support a feature — graceful degrade behavior>
```

That's it. No logic. No process steps. No decision trees.

Logic lives in `SKILL.md`. The adapter is dumb on purpose.

---

## Per-runtime quirks

### Claude Code
- Slash commands defined in `.claude/commands/<slug>.md` with the same name as the skill slug
- Commands route to `skills/<slug>/SKILL.md` for the actual procedure
- Multi-file edits supported via Edit/Write tools
- Tool catalog: Read, Write, Edit, Bash, Glob, Grep, Agent

### Claude Desktop
- Workspace loaded as MCP project root
- Skills discovered by scanning `skills/*/SKILL.md`
- No filesystem persistence across sessions unless project file is open
- Tool use surface narrower than Claude Code

### Claude Agent SDK
- Skills exposed as callable tools via the SDK's tool definition surface
- Skill name = tool name. Skill description = tool description.
- Inputs taken from the structured tool-call schema declared in `SKILL.md` frontmatter
- Outputs returned as structured tool-call output

### ChatGPT (Custom GPT)
- Workspace files uploaded to the GPT's knowledge base
- Skills invoked via natural language ("run the build-audience skill")
- Tool use limited — tools must be defined in the GPT's actions config
- Outputs returned in chat; no filesystem write unless the GPT has a code interpreter session

### Cursor
- Workspace loaded as project root
- Composer mode for batch edits across files
- Agent mode for autonomous multi-step skill execution
- Tool catalog: Read, Edit, Run

### Codex CLI
- Skills exposed as CLI subcommands
- `codex skill run <slug> --arg=...` invokes
- Outputs to stdout + optional file targets

### Paperclip
- Triggers declared in `paperclip.manifest.yaml` at workspace root
- Cron / webhook / event surfaces wired automatically
- Skills invoked via the trigger's `skill` field
- Outputs persisted to `output/` and optionally posted via webhook

### BusinessOS
- Workspace mounted in SORX skill registry
- Skills callable via the OSA terminal's slash-command surface
- Skills also wired to UI buttons in BusinessOS desktop apps
- Outputs persisted to PostgreSQL + emitted as Signal 5-tuple events

### Generic OpenAPI
- Skills exposed as POST endpoints under `/skills/<slug>`
- Inputs supplied as JSON body
- Outputs returned as JSON response (Output Format from SKILL.md serialized to JSON)
- Auth via standard OpenAPI security schemes

---

## The `any.md` adapter

Every skill ships with `adapters/any.md` as the universal fallback:

```markdown
---
runtime: any
skill: <slug>
binding_type: chat
---

# <Skill Slug> — Any-Runtime Adapter

## Invocation
The user invokes this skill in chat by naming it. Examples: "run /<slug>", "execute the <slug> skill", "do the <slug> procedure". The runtime reads `skills/<slug>/SKILL.md` and follows the Process section.

## Inputs
Supplied conversationally. The skill's frontmatter declares which compartments are read from `company.yaml`. Any per-invocation arguments are supplied in the chat message.

## Outputs
Returned in chat in the Output Format declared in `SKILL.md`. If the runtime supports filesystem write, also persisted to `output/<slug>/<timestamp>.<ext>`.

## Constraints
None beyond SKILL.md's stated constraints.

## Fallback
This adapter is the universal fallback. No further fallback exists.
```

If a skill has only `any.md` and the runtime is Claude Code or Cursor or Paperclip, the skill works — just less efficiently than with a runtime-specific adapter.

---

## When to write a runtime-specific adapter

Write a runtime-specific adapter when:
- The runtime supports an invocation surface that's faster than chat (slash commands, CLI, webhooks)
- The runtime has structured tool-use that lets the skill enforce input/output schemas
- The runtime has a persistence surface that the skill should use (filesystem, database, queue)
- The runtime has specific constraints the skill should know about (context window, rate limits, tool restrictions)

If none of those apply, `any.md` is sufficient.

---

## Validation

Boot validation checks:
1. Every skill has `adapters/any.md`
2. Every adapter file has valid frontmatter (`runtime`, `skill`, `binding_type`)
3. The `skill` field in every adapter matches the parent directory name
4. Adapters that declare a `binding_type: slash-command` have a corresponding file in `.claude/commands/`

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
