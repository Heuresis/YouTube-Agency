<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/heuresis-logo-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/heuresis-logo-light.png">
  <img alt="Heuresis" src="docs/assets/heuresis-logo-light.png" width="220">
</picture>

<br/>
<br/>

<h1>YouTube Agency</h1>

<p><strong>Your YouTube channel, encoded.</strong></p>

<p>
  <a href="CHANGELOG.md"><img src="https://img.shields.io/badge/version-1.0.0-09090b?style=flat-square&labelColor=09090b&color=52525b" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-09090b?style=flat-square&labelColor=09090b&color=52525b" alt="License"></a>
  <a href="https://heuresis.ai"><img src="https://img.shields.io/badge/a-Heuresis%20workspace-b45309?style=flat-square&labelColor=09090b&color=b45309" alt="Heuresis"></a>
</p>

</div>

<br/>

<img alt="YouTube Agency workspace — authority script drafting live, retention signals, agents working" src="docs/assets/hero-workspace.png" width="100%">

<p align="center"><em>Your YouTube channel, in one folder.</em></p>

<br/>

---

## What is this?

Think of it like this: a great YouTube channel has departments — research, hook engineering, retention, scripting, thumbnails, distribution, and the back-end offer that turns viewers into customers. Each one has standards, instincts, and reps the creator carries in their head.

**YouTube Agency is that whole org chart, written down as a folder of plain markdown files.**

Open the folder. Hand it to any AI agent — Claude, ChatGPT, Cursor, OpenClaw. The agent reads `SYSTEM.md`, learns your channel, and starts running a department.

You stay in the loop on the calls that need taste. Hook decay gets caught the day it starts, not after three videos buried by the algorithm.

| Step | What happens |
|---|---|
| **01** | Clone the folder |
| **02** | Fill in `company.yaml` with your channel — niche, audience, voice, back-end offer |
| **03** | Hand the folder to any agent. It reads `SYSTEM.md`, becomes a YouTube channel operator, and starts shipping |

<br/>

---

## Without this · With this

| Without | With |
|---|---|
| The editor drifts off-style by month 3. The cuts feel like someone else's channel. | Editing rhythm is encoded. Every editor brief ships with the channel's exact pacing. |
| Hook quality decays the moment you stop writing every script. | Hook patterns from your top-decile videos are encoded. Every script clears the hook density floor. |
| The channel becomes whatever the last freelancer made — not what you would have made. | Your taste lives in `agents/` and `reference/`. Every output is judged against it before it ships. |
| You upload, the algorithm decides, and you guess what to do next. | A six-layer leak audit runs every Monday. CTR, AVD, and back-end conversion get diagnosed, not guessed. |
| One long-form ships. The eight pieces of distribution gets done sometimes. | Every published video triggers a repurposing cascade — 8 shorts, 4 threads, an email — automatically. |

<br/>

---

## Try it

```bash
git clone https://github.com/Heuresis/YouTube-Agency.git your-channel
cd your-channel
```

Fill in `company.yaml` with your channel context. Then ask for what you need:

```
/build-niche                 a niche definition
/build-audience              an ideal viewer profile
/design-offer                a back-end offer document
/build-channel-architecture  a channel architecture document
/idea-farm                   a 20+ idea backlog
/write-authority-script      a niched script
/write-reach-script          a broad-appeal script
/write-pinned-vsl            a pinned video sales letter
/title-thumbnail-pair        title + thumbnail concepts with predicted CTR
/leak-audit                  a six-layer funnel diagnostic
```

Works with Claude, ChatGPT, Cursor, OpenClaw — anything that reads files.

Full setup walkthrough: **[Quickstart](docs/QUICKSTART.md)** · 30 minutes.

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
├── skills/              ←  34 capabilities · each produces one asset
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
└── reference/           ←  the brain that makes skills smart
    ├── frameworks/             38 methodology docs
    ├── operators/              12 archetyped playbooks
    ├── platforms/              long-form · Shorts · Live · Community Tab
    ├── playbooks/              8 multi-step playbooks
    ├── swipe-file/             262 anonymized specimens (hooks · intros · scripts · titles · thumbnails · contrast formats · series)
    ├── templates/              11 output templates
    ├── benchmarks/             real performance bands by niche
    ├── verticals/              8 vertical packs
    └── canonical/              architecture bible + canonical specs
```

Each file is plain text. Each folder is owned by you. Nothing is locked behind an app.

<br/>

---

## Each video ships with

- **Script** — authority or reach mode, hook density verified, retention floor cleared
- **Title + thumbnail pair** — promise-aligned to the first 30 seconds
- **Editor brief** — cuts, b-roll, music, supers per the channel's editing rhythm
- **Description** — timestamps + link stack matching the channel architecture
- **Publish checklist** — end-screens, cards, community-tab pre-post, premiere config
- **Repurposing cascade** — 1 long-form into 8–12 distribution units (Shorts, posts, threads, email)
- **Post-publish audit** — retention curve diagnosed at T+7 days; pattern fed back into the library

Every action leaves a receipt. Every video updates the encoded brain. Every cycle, the channel gets sharper.

<br/>

---

## Runs while you sleep

Wire the workspace into a runtime with **cron, webhook, and event triggers**. The agents keep working without you in the room.

- **Daily 06:00 (cron)** — idea-farmer queues new candidates from comments, suggested, and trends
- **Monday 09:00 (cron)** — leak-auditor runs the six-layer funnel review, sends report
- **On `video.published` (event)** — repurposing-cascade fires; T+7d audit-retention queued
- **On `application.received` (webhook)** — qualification + routing through the application funnel
- **On `call.completed` (event)** — post-call sequence kicks off
- **Continuous (event)** — title-strategist watches CTR, suggests retitles after 48h if underperforming

Triggers are declared in [`paperclip.manifest.yaml`](paperclip.manifest.yaml). Wire them to your scheduler and the workspace operates as a 24/7 channel team.

<br/>

---

## What you get

**9 agent-first departments. 22 agents. 34 skills.**

- **Foundations** — niche · audience · offer · channel architecture · creator voice
- **Content Engine** — idea farm · research · dual-mode mix · series architecture
- **Hook & Retention** — hook formulas · loop architecture · retention engineering · post-publish audit
- **Production** — authority + reach + Shorts scripts · thumbnails · editor briefs
- **Distribution** — titles · descriptions · publish checklists · repurposing cascades
- **Audience Building** — community · email pipeline · cross-niche bridge
- **Monetization & Sales** — pinned VSL · application funnel · sales scripts · sponsor fit
- **Operations** — SOPs per team configuration
- **Intelligence** — KPI dashboard · leak audits · library compound

Each department is a full department rebuilt as agent-first — agents that carry your taste, read signals, and make decisions.

<br/>

---

## Runs in any compatible agent runtime

The workspace is files. Files run anywhere that reads files.

- **[Paperclip](https://github.com/paperclip-dev/paperclip)** — open-source agentic runtime with cron, webhook, and event triggers
- **Claude** · **ChatGPT** · **Cursor** — interactive sessions and slash-command execution
- **Claude Agent SDK** — API-driven orchestration
- **BusinessOS** — desktop operating environment for operator teams
- Any HTTP orchestrator that speaks OpenAPI

Runtime-swappable. Your workspace is the asset. The runtime is replaceable.

<br/>

---

## Why this matters

Every founder-led creator business eventually hits the same wall: the founder IS every department.

The editor drifts off-style by month 3. Hook quality decays the moment you stop writing every script. The channel becomes whatever the last freelancer made — not what you would have made. You upload, the algorithm decides, and you guess what to do next.

Encoding changes the shape of the week. Your taste — hook style, retention instincts, sponsor judgement, the patterns you carry in your head — gets written into agents that run each department on your behalf. The creator stays. The taste scales. The channel compounds.

Every cycle, each department gets sharper. The gap between your channel and every creator operating off memory widens.

This is one template in the library. More shipping, vertical by vertical. Every outcome claim we publish traces to a real deployment with a real operator. Thesis, method, and source go public on ideas. Receipts wait their turn.

<br/>

---

## Documentation

- [Quickstart](docs/QUICKSTART.md) — setup in 30 minutes
- [Architecture](docs/ARCHITECTURE.md) — how the folder is built
- [Channel Architecture](docs/CHANNEL_ARCHITECTURE.md) — designing the path-of-the-viewer
- [Dual-Mode Content Strategy](docs/DUAL_MODE.md) — when to use authority vs reach
- [Skill Authoring](docs/SKILL_AUTHORING.md) — write your own agents and skills

## License

MIT. Free forever.

Built by [Syed Hussain](https://heuresis.ai) at [Heuresis](https://heuresis.ai).
