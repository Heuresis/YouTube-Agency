<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/heuresis-logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/heuresis-logo-light.png">
  <img alt="Heuresis" src="docs/assets/heuresis-logo-light.png" width="220">
</picture>

<br/><br/>

<h1>YouTube Agency</h1>

<p><strong>Your YouTube channel, encoded.</strong></p>

<p>
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/version-2.1.0-09090b?style=flat-square&labelColor=09090b&color=52525b" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Heuresis_Source-09090b?style=flat-square&labelColor=09090b&color=52525b" alt="License"></a>
  <a href="https://heuresis.ai"><img src="https://img.shields.io/badge/a-Heuresis%20workspace-b45309?style=flat-square&labelColor=09090b&color=b45309" alt="Heuresis"></a>
</p>

</div>

<br/>

<img alt="YouTube Agency workspace — authority script drafting live, retention signals, agents working" src="docs/assets/hero-workspace.png" width="100%">

<p align="center"><em>Your YouTube channel, in one folder.</em></p>

---

## What is this?

A great channel has departments — research, hooks, retention, scripting, thumbnails, distribution, and the back-end offer that turns viewers into customers. **YouTube Agency is that whole org chart, written down as a folder of plain files** any AI can read and run.

## How do I use it?

Hand this repo to your AI agent — Claude, ChatGPT, Cursor, whatever you use — and tell it to set itself up. Then just talk to it. It learns your channel and guides you from there: ask it to write a script, design a title and thumbnail, or run a retention audit on your last video.

No setup ceremony. You talk, it works.

---

## How it fits together

Every Heuresis workspace is the same shape — a boot layer reads your channel context, then runs the org chart, the skills, the reference brain, and the trigger manifest.

```text
┌──────────────────────────────────────────────────────────────┐
│                    THE ENCODED WORKSPACE                     │
│                                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │ SYSTEM.md │  │ ENCODING  │  │ INVARIANTS│  │  company  │  │
│  │ boot file │  │  schema   │  │   rules   │  │  context  │  │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │
│                                                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐  │
│  │  agents/  │  │  skills/  │  │ reference/│  │  triggers │  │
│  │ org chart │  │  outputs  │  │   brain   │  │  manifest │  │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘  │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
        any agent runtime that reads files — 11 ship
```

<br/>

---

## What's inside the folder

```text
youtube-agency/
│
├── README.md            ←  the pitch
├── SYSTEM.md            ←  boot file · any AI becomes a YouTube channel operator
├── INVARIANTS.md        ←  17 sacred rules
├── ENCODING.md          ←  11-compartment schema
├── company.yaml         ←  YOUR channel · fill once
│
├── agents/              ←  22 specialists · an org chart of a real studio
│      youtube-ceo                  top orchestrator
│      2 arc orchestrators  ·  8 department heads  ·  11 specialists
│
├── workspace/           ←  the operating layer · YOUR channel's living documents
│      STRATEGY · VOICE · PROOF-BANK · CONTENT-ENGINE   the 4-doc profile
│      CALIBRATION.md               binds every skill to this channel
│      pipeline/ → film-this-week/ → drafts/ → published/   the video lifecycle
│      published/_ANALYTICS.md      the feedback loop that re-ranks the slate
│
├── skills/              ←  35 capabilities · each produces one asset
│   │
│   │   FOUNDATIONS
│   ├── /build-niche                  Niche definition
│   ├── /build-audience               Audience intelligence
│   ├── /design-offer                 Back-end offer
│   ├── /build-channel-architecture   Channel architecture document
│   └── /extract-creator-voice        Brand voice + on-camera persona
│   │
│   │   CONTENT ENGINE
│   ├── /idea-farm                    Rolling backlog of ideas
│   ├── /research-brief               Per-video research pack
│   ├── /content-mix-strategy         Authority/reach ratio
│   └── /series-architect             Multi-video belief sequence
│   │
│   │   HOOK & RETENTION
│   ├── /write-hook                   First-30s hook stack
│   ├── /architect-loops              Open-loop placement
│   ├── /retention-engineer           AVD prediction pass
│   └── /audit-retention              Post-publish curve diagnosis
│   │
│   │   PRODUCTION
│   ├── /write-script              ★  Any script, end-to-end · the per-video entry point
│   ├── /write-authority-script       Niched script
│   ├── /write-reach-script           Broad-appeal script
│   ├── /write-shorts-script          Shorts script
│   ├── /thumbnail-brief              Thumbnail spec
│   ├── /title-thumbnail-pair         Title + thumbnail pair
│   └── /editor-brief                 Editor brief
│   │
│   │   DISTRIBUTION
│   ├── /title-options  ·  /description-builder  ·  /publish-checklist  ·  /repurposing-cascade
│   │
│   │   AUDIENCE & MONETIZATION
│   ├── /community-cadence  ·  /lead-magnet-bridge  ·  /cross-niche-bridge
│   ├── /write-pinned-vsl  ·  /build-application-funnel
│   └── /sales-call-script  ·  /sponsor-fit
│   │
│   │   OPERATIONS  ·  INTELLIGENCE
│   └── /build-sop  ·  /kpi-dashboard  ·  /leak-audit  ·  /library-compound
│
├── prompts/             ←  the fast lane · 10 one-shot prompt packs
│      content · repurposing · research · brand-voice · sales · offer · email · VSL · ads · analytics
│
└── reference/           ←  the brain that makes skills smart
    ├── frameworks/             53 methodology docs — hooks · loops · awareness · belief layers
    ├── operators/              12 archetyped playbooks
    ├── platforms/              long-form · Shorts · Live · Community Tab
    ├── playbooks/              8 multi-step playbooks
    ├── swipe-file/             262 anonymized specimens (hooks · intros · titles · thumbnails)
    ├── templates/              12 output templates + example-scripts corpus
    ├── benchmarks/             real performance bands by niche
    ├── verticals/              8 vertical packs
    └── canonical/              architecture bible + canonical specs
```

Each file is plain text. Each folder is owned by you. Nothing is locked behind an app.

<br/>

---

## Each video ships with

- **Script** — hook density verified, retention floor cleared, written in your voice
- **Title + thumbnail pair** — promise-aligned to the first 30 seconds
- **Editor brief** — cuts, b-roll, music, supers in the channel's editing rhythm
- **Description** — timestamps + link stack matching the channel architecture
- **Publish checklist** — end-screens, cards, community-tab pre-post, premiere config
- **Repurposing cascade** — 1 long-form into 8–12 distribution units (Shorts, posts, threads, email)
- **Post-publish audit** — retention curve diagnosed at T+7 days, fed back into the library

Every video updates the encoded brain. Every cycle, the channel gets sharper.

<br/>

---

## Runs while you sleep

Wire the workspace to a scheduler and the agents keep working without you in the room — queuing fresh video ideas each morning, firing the repurposing cascade the moment you publish, and running a retention audit a week later. Triggers live in [`paperclip.manifest.yaml`](paperclip.manifest.yaml).

<br/>

---

## What you get

Nine departments, ready to run:

- **Foundations** — niche · audience · offer · channel architecture · creator voice
- **Content Engine** — idea farm · research · dual-mode mix · series architecture
- **Hook & Retention** — hook formulas · loop architecture · retention engineering · post-publish audit
- **Production** — authority + reach + Shorts scripts · thumbnails · editor briefs
- **Distribution** — titles · descriptions · publish checklists · repurposing cascades
- **Audience Building** — community · email pipeline · cross-niche bridge
- **Monetization & Sales** — pinned VSL · application funnel · sales scripts · sponsor fit
- **Operations** — SOPs per team configuration
- **Intelligence** — KPI dashboard · leak audits · library compound

<br/>

---

## Multi-tool integrations

It's just files, so it runs in any major AI tool — no lock-in, no rewrite.

| Tool | Install |
|---|---|
| **Claude Code** | `./scripts/install.sh --tool claude-code` |
| **GitHub Copilot** | `./scripts/install.sh --tool copilot` |
| **Antigravity (Gemini)** | `./scripts/install.sh --tool antigravity` |
| **Gemini CLI** | `./scripts/install.sh --tool gemini-cli` |
| **OpenCode** | `./scripts/install.sh --tool opencode` |
| **Cursor** | `./scripts/install.sh --tool cursor` |
| **Aider** | `./scripts/install.sh --tool aider` |
| **Windsurf** | `./scripts/install.sh --tool windsurf` |
| **OpenClaw** | `./scripts/install.sh --tool openclaw` |
| **Qwen Code** | `./scripts/install.sh --tool qwen` |
| **Kimi Code** | `./scripts/install.sh --tool kimi` |

Full details per tool: **[integrations/README.md](integrations/README.md)**.

<br/>

---

## Documentation

- [Quickstart](docs/QUICKSTART.md) — setup in 30 minutes
- [Architecture](docs/ARCHITECTURE.md) — how the folder is built
- [Skill Authoring](docs/SKILL_AUTHORING.md) — write your own agents and skills

## License

**Heuresis Source License 1.0** — see [LICENSE](LICENSE). Free for solo developers, learning, and testing. Company use, client work, or anything resold: email [Syed@heuresis.ai](mailto:Syed@heuresis.ai) first.

Built by [Syed Hussain](https://heuresis.ai) at [Heuresis](https://heuresis.ai).
