# Quickstart — 30 minutes to first output

> The fastest path from "I cloned this repo" to "the OS just produced a draft I can ship."

---

## What you'll have at the end of this 30 minutes

- Workspace booted in your runtime of choice
- `company.yaml` filled with enough context to clear the Foundation tier (50%+ on key compartments)
- Your first OS-produced output: an audience profile + an idea-farm backlog of 10–20 ideas + a draft script outline for one of them
- A clear next step (which compartment to deepen, which skill to run next)

---

## Step 0 — Pick a runtime (2 min)

The workspace runs anywhere that reads markdown + YAML. Pick one:

| If you have... | Use this runtime |
|---|---|
| Claude Code installed | Claude Code (best slash-command experience) |
| ChatGPT Plus | Custom GPT pointed at the workspace files |
| Cursor | Cursor with composer / agent mode |
| Codex CLI | Codex with this workspace as the project |
| Notion + a chat AI of your choice | Upload key files to the AI's knowledge, run interactively |
| BusinessOS / Paperclip | Native runtime with cron / webhook support |

For the rest of this guide we'll assume Claude Code, but every step works on any runtime — the only difference is how you invoke skills (slash commands vs. natural language).

---

## Step 1 — Clone or copy the workspace (1 min)

```bash
cp -r "/path/to/youtube-content-os" "/path/to/your-channel-os"
cd "/path/to/your-channel-os"
```

Don't edit the template directly — copy first, fill the copy.

---

## Step 2 — Fill the strategic-layer compartments (15 min)

Open `company.yaml`. Fill the three highest-weighted compartments:

### Compartment 1 — Creator Identity Matrix (15%)

Aim for at least:
- `basic_info.creator_name`
- `basic_info.channel_name` (use a placeholder if not yet decided)
- `basic_info.niche` (pick from the 8 in `reference/verticals/`)
- `basic_info.business_model` (coaching / consulting / info-product / mastermind / agency / hybrid)
- `brand_voice_architecture.communication_style` (direct / consultative / storytelling / analytical / contrarian)
- `brand_voice_architecture.phrases_to_use` — at least 5 verbatim phrases the creator says
- `brand_voice_architecture.phrases_to_avoid` — at least 3 phrases that break the creator's voice
- `unique_positioning.core_philosophy` — one-sentence worldview
- `archetype.primary` — pick one: long-form-VSL specialist, contrarian-narrator, analytical-explainer, story-driven creator, contrast-format viral specialist, hybrid

That's the minimum to clear ~50% on this compartment.

### Compartment 2 — Audience Intelligence System (18% — heaviest)

Aim for at least:
- `ideal_viewer_profile.demographics.age_range`
- `ideal_viewer_profile.demographics.geography` (top 3–5 countries)
- `ideal_viewer_profile.psychographics.pain_points` — at least 5
- `ideal_viewer_profile.psychographics.desires` — at least 5
- `ideal_viewer_profile.psychographics.objections` — at least 5
- `market_sophistication.primary_awareness_target` (Unaware / Problem-aware / Solution-aware / Product-aware / Most-aware)
- `market_sophistication.sophistication_stage` (Naive / Aware / Skeptical / Exhausted)
- `voice_of_viewer.actual_viewer_language` — at least 5 verbatim phrases from real comments / sales calls / surveys

If you don't have voice-of-viewer language yet, the OS can extract it. Run `/extract-voice-of-viewer` (interview mode) — it'll ask you for sources (comment screenshots, sales-call recordings, survey responses) and produce the verbatim phrases for you.

### Compartment 3 — Offer Architecture (12%)

Aim for at least:
- `back_end_offers[0].offer_name`
- `back_end_offers[0].offer_type`
- `back_end_offers[0].price_point`
- `back_end_offers[0].core_promise`
- `back_end_offers[0].transformation_delivered`
- `economics_validation.ltv_cac_ratio` (rough estimate — you'll refine)

If you don't have a back-end offer yet, that's OK for v0 of the OS but it's the highest-leverage gap to close. Run `/design-offer` to scaffold one.

---

## Step 3 — Boot the workspace (1 min)

In Claude Code, from inside the workspace directory, start a new session and prompt:

> Boot this workspace. Read SYSTEM.md, INVARIANTS.md, ENCODING.md, and company.yaml. Score my compartment completeness. Tell me what tier I'm at and what skills are unlocked.

The OS will read the spine, score your compartments, and report back. Expected output:

> Context Quality Tier: **Foundation** (52%)
>
> Compartment scores:
> - Creator Identity Matrix: 60%
> - Audience Intelligence System: 55%
> - Offer Architecture: 50%
> - Channel Architecture: 0% (gap)
> - Content Engine: 0% (gap)
> - Hook & Retention OS: 0% (gap)
> - Production & Post: 0% (gap)
> - Distribution: 0% (gap)
> - Audience Building: 0% (gap)
> - Sales & Conversion: 0% (gap)
> - Operations & Intelligence: 0% (gap)
>
> Skills unlocked at this tier:
> - /build-channel-architecture
> - /idea-farm
> - /research-brief
> - /content-mix-strategy
> - /design-offer (refinement mode)
> - /extract-creator-voice (refinement mode)
> - /build-audience (refinement mode)
> - /write-hook
>
> Recommended next: /build-channel-architecture (closes the Channel Architecture gap, which unlocks production-side skills)

---

## Step 4 — Run your first skill (5 min)

Following the OS's recommendation:

> /build-channel-architecture

The OS will read your filled compartments, run the Six-Layer Diagnostic on the upstream layers (Audience + Offer), and produce:

- A channel promise (one-sentence)
- A positioning statement
- A playlist architecture
- A new-subscriber path (the suggested first 5–10 videos)
- A belief-installation path (the order videos should install beliefs)
- A handoff-to-offer path (how generic content bridges to the back-end)

Review the output. The OS will flag any low-confidence sections with `[INFER: ...]` markers. Tighten those by adding more compartment context.

---

## Step 5 — Run the idea farm (3 min)

> /idea-farm

The OS produces a rolling backlog of 20+ ideas, tagged by:
- mode (authority / reach / hybrid)
- target awareness level
- content pillar
- estimated production effort

Pick one idea you want to pursue this week.

---

## Step 6 — Run a research + script outline (3 min)

> /research-brief on idea: [pick from the idea farm output]

The OS produces a research pack: angle options, audience-language to mirror, frameworks to apply, anti-hooks to avoid, structural recommendations.

Then:

> /write-authority-script with the research-brief output as input

The OS drafts a full long-form script (10–15 min, ~2000 words) with:
- First 30s hook stack (3+ retention mechanisms)
- Loop architecture (3+ open-loops with placement)
- Pattern-interrupt cadence
- Section structure with re-hooks
- CTA aligned to your back-end offer
- Metadata block (mode, awareness level, frameworks, compartments)

The script will pass the retention-floor check or come back with a revision diagnosis.

---

## You now have

- Booted workspace with compartment completeness score
- Channel architecture document
- Idea-farm backlog of 20+ ideas
- A research brief
- A draft authority-mode script ready for your taste pass

**Total time elapsed: ~30 minutes.**

---

## What to do next

Priority actions in order:

1. **Close the lowest-weighted gap that blocks the most skills.** The OS's leak-audit will tell you. Usually it's Audience Intelligence (because it's the heaviest compartment) or Channel Architecture (because it gates all production skills).
2. **Record the first video.** Run the script through your taste pass; record. The first cycle of the encoding flywheel needs a real publish.
3. **After publish, run `/audit-retention`** (delayed 7 days) to see how the actual retention curve compared to the OS's prediction. This is the calibration loop — the OS gets sharper from here.
4. **Run the leak-audit weekly.** Monday mornings. The OS surfaces the upstream constraint; you act on it.
5. **Add team config when ready.** Solo → creator-plus-editor → full-studio. Each step ships when current capacity is at the ceiling.

---

## Troubleshooting

**The OS keeps asking for more context.** That means you're below the threshold for the skill you invoked. Either fill the missing compartment or invoke an upstream skill that helps fill it (e.g., `/extract-creator-voice` to deepen Identity, `/build-audience` to deepen Audience).

**The output sounds generic.** The voice fidelity layer is below threshold. Add more `phrases_to_use` and `phrases_to_avoid` to your brand voice architecture. Add more `voice_of_viewer` actual language. Re-run.

**The script fails the retention floor.** The diagnosis report will list the weakest signal. Fix in the order: hook density → loop architecture → pattern-interrupt cadence → Three-Brain compliance.

**I don't know what awareness level my audience is at.** Run `/build-audience` in interview mode. It'll ask you a series of questions about who's currently watching and produce the awareness-distribution table.

**I'm a solo creator and this feels like a lot to manage.** Read `teams/solo.md`. The OS handles ~80% of the work; you focus on on-camera + taste calls + sales calls. Total weekly creator time should be 12–18 hours.

---

## Where to go for more

- [Architecture](ARCHITECTURE.md) — how the workspace is built
- [Channel Architecture Deep Dive](CHANNEL_ARCHITECTURE.md) — designing the path-of-the-viewer
- [Dual-Mode Content Strategy](DUAL_MODE.md) — when to use authority vs reach
- [Skill Authoring](SKILL_AUTHORING.md) — write your own skills

---

*Version: 1.0.0 — 2026-05-03.*
*A Heuresis workspace template.*
