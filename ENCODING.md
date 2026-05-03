# ENCODING — Creator Context Profile Schema

> **The variable substitution contract.** This file defines the 11-compartment schema that every skill pulls from. `company.yaml` stores the actual values for a specific creator. The completeness of each compartment determines which skills can execute.
>
> **Weighting maps to Strategic-Layer Bias:** Identity 15% + Audience 18% + Offer 12% = 45% (strategic layer drives the channel). Channel Architecture 10% + Content Engine 8% + Hook & Retention 10% + Production 7% + Distribution 7% + Audience Building 7% = 49% (execution layer). Sales & Conversion 4% + Operations & Intelligence 2% = 6% (compounding layer).

## The 11 Compartments

### Compartment 1 — Creator Identity Matrix (weight 15%)

```yaml
creator_identity_matrix:
  basic_info:
    creator_name: string                  # legal or stage name (private; never exfiltrated)
    channel_name: string
    channel_handle: string                # @handle
    niche: string                         # finance / business / mindset / tech / fitness / real-estate / productivity / creator-economy / other
    sub_niche: string                     # within-niche specialization
    business_model: string                # coaching / consulting / info-product / mastermind / agency / hybrid
    revenue_tier: string                  # pre-revenue | $5K-$25K/mo | $25K-$100K/mo | $100K-$500K/mo | $500K+/mo
    years_creating: integer
    total_subscribers: integer
    long_form_avg_views: integer
    short_form_avg_views: integer
    upload_cadence_long: string           # weekly / biweekly / monthly / irregular
    upload_cadence_short: string          # daily / weekly / never

  brand_voice_architecture:
    communication_style: string           # direct / consultative / storytelling / analytical / contrarian
    tone_framework:
      primary: string                     # e.g., "blunt"
      secondary: string                   # e.g., "warm-under-blunt"
    personality_traits: [string]          # 3-5 traits
    language_patterns: [string]           # signature cadence patterns
    phrases_to_use: [string]              # verbatim creator phrases
    phrases_to_avoid: [string]            # words/phrases that break voice
    persuasion_style: string              # authority-by-proof / story-first / mechanism-first / contrarian-provocation
    authority_positioning: string         # category-king / challenger / insider / outsider-with-edge

  on_camera_persona:
    delivery_style: string                # high-energy / measured / contrarian / warm-instructional / confessional
    posture_default: string               # standing / sitting / hybrid
    framing_default: string               # medium-close / waist-up / talking-head
    pace_baseline_wpm: integer            # words per minute
    pause_rhythm: string                  # rare / measured / frequent
    eye_line_default: string              # camera-direct / off-camera-occasionally
    energy_arc: string                    # flat / rising / wave / front-loaded
    signature_visual_elements: [string]   # consistent things in every video — outfit, framing, set element

  parasocial_trust_contract:
    what_creator_promises: [string]       # the long-term commitments to the audience
    what_creator_wont_do: [string]        # the no-fly zones (e.g., "never run drop-shipping ads")
    creator_vs_character_line: string     # how the on-camera persona relates to the off-camera person

  unique_positioning:
    unique_mechanism: string              # the named mechanism the creator owns
    category_positioning: string          # the category they own
    competitive_differentiation: string
    core_philosophy: string               # one-sentence worldview
    contrarian_beliefs: [string]          # things they believe that the niche doesn't

  archetype:
    primary: string                       # long-form-VSL specialist / contrarian-narrator / analytical-explainer / story-driven creator / contrast-format viral specialist / hybrid
    secondary: string
```

### Compartment 2 — Audience Intelligence System (weight 18% — HEAVIEST)

```yaml
audience_intelligence_system:
  ideal_viewer_profile:
    demographics:
      age_range: string
      gender_split: string
      geography: [string]
      income_range: string
      education: string
    psychographics:
      identity_aspirations: [string]      # who they want to become
      pain_points: [string]               # 5-10 specific pains
      desires: [string]                   # 5-10 outcomes they want
      fears: [string]                     # what they're afraid of
      beliefs_currently_held: [string]    # 8 standard belief frames mapped
      beliefs_to_install: [string]        # which beliefs the channel installs
      objections: [string]                # min 10
    behavioral_patterns:
      what_else_they_watch: [string]      # adjacent channels (anonymized as types)
      content_consumption_pattern: string # binge / scheduled / discover-via-search
      buying_triggers: [string]
      research_behavior: [string]
      trust_signals_required: [string]

  market_sophistication:
    awareness_level_distribution:         # the channel speaks to a mix
      unaware_pct: integer
      problem_aware_pct: integer
      solution_aware_pct: integer
      product_aware_pct: integer
      most_aware_pct: integer
    primary_awareness_target: string      # which level the channel is calibrated to
    sophistication_stage: string          # naive / aware / skeptical / exhausted
    market_maturity: string               # emerging / growing / mature / saturated
    competitive_density: string           # low / medium / high / saturated

  voice_of_viewer:
    actual_viewer_language: [string]      # verbatim phrases from comments, DMs, sales calls, surveys
    pain_language_patterns: [string]
    desire_language_patterns: [string]
    objection_patterns: [string]
    comment_themes: [string]              # recurring themes in comments
    survey_responses_summary: string      # if survey data exists

  limiting_belief_diagnosis:
    dominant_belief: string               # worthless | helpless | hopeless
    transformation_type: string           # status | capability | safety
```

### Compartment 3 — Offer Architecture (weight 12%)

```yaml
offer_architecture:
  back_end_offers:
    - offer_name: string
      offer_type: string                  # high-ticket 1:1 / group program / course / mastermind / membership / done-for-you
      price_point: number                 # USD
      positioning: string
      core_promise: string                # the transformation
      unique_mechanism: string
      transformation_delivered: string    # before → after
      target_avatar: string               # which segment from compartment 2
      value_stack:
        - component: string
          value_usd: number
      bonuses:
        - bonus_name: string
          value_usd: number
          objection_countered: string
      guarantee: string
      risk_reversal: string

  offer_ladder:
    lead_magnet: string                   # free entry offer
    tripwire: string                      # low-ticket entry ($7-$97) — optional
    core_offer: string                    # main back-end
    upsells: [string]
    high_ticket: string                   # top of ladder
    continuity: string                    # recurring revenue

  pricing_psychology:
    pricing_strategy: string              # identity-aligned / value-based / competitive / anchor-and-discount
    payment_options: [string]
    comparison_anchoring: string
    value_justification: string

  qualification:
    qualification_criteria: [string]
    disqualification_criteria: [string]
    filtering_mechanism: string           # application / call / typeform

  economics_validation:
    ltv: number
    cac: number
    ltv_cac_ratio: number                 # ≥ 3.0 required
    gross_margin_pct: number
    breakeven_per_cohort: string

  content_to_offer_bridge:
    pinned_vsl_url: string                # the channel's pinned VSL (set after build)
    application_funnel_url: string
    primary_cta: string                   # e.g., "apply for the program" / "book a call" / "join the waitlist"
    cta_placement_on_authority_videos: string  # end-only / mid-and-end / soft-throughout
    cta_placement_on_reach_videos: string      # channel-architecture-only / soft-end / none
```

### Compartment 4 — Channel Architecture (weight 10%)

```yaml
channel_architecture:
  niche_definition:
    primary_niche: string
    sub_niches_covered: [string]
    adjacent_niches_for_reach: [string]   # for reach-mode videos
    out_of_scope_topics: [string]

  channel_promise:
    one_sentence_promise: string          # what the channel promises every viewer
    deliverable_per_video: string         # what each video should deliver

  positioning:
    in_the_market: string                 # how the channel sits relative to competitors
    against_named_competitors: [string]   # anonymized as competitor archetypes
    differentiation_path: string          # one of 6 differentiation paths

  playlist_architecture:
    foundational_playlist: string         # the "start here" playlist
    pillar_playlists: [string]            # one per content pillar
    series_playlists: [string]            # multi-video belief installation paths

  video_sequencing_path:
    new_subscriber_path: [string]         # the suggested first 5–10 videos
    belief_installation_path: [string]    # the order videos should install beliefs
    handoff_to_offer_path: [string]       # the path from generic content to pinned VSL

  multi_awareness_strategy:
    unaware_videos_role: string           # what role unaware videos play (usually reach)
    problem_aware_videos_role: string
    solution_aware_videos_role: string    # usually authority
    product_aware_videos_role: string
    most_aware_videos_role: string        # usually pinned-VSL-equivalent
    bridges_between_levels: [string]      # how the channel architecture transitions viewers
```

### Compartment 5 — Content Engine (weight 8%)

```yaml
content_engine:
  content_pillars:
    - pillar_name: string
      pillar_objective: string
      topics: [string]
      mode: string                        # authority | reach | both
      conversion_bridge: string           # how this pillar bridges to offer
      target_volume_per_month: integer

  brand_pillar_split:                     # 50/25/15/10 default
    primary_pillar_pct: integer
    secondary_pillar_pct: integer
    tertiary_pillar_pct: integer
    experimental_pillar_pct: integer

  mode_mix:                               # the dual-mode ratio
    authority_pct: integer                # default 65
    reach_pct: integer                    # default 35
    hybrid_pct: integer                   # default 0

  idea_farm:
    rolling_backlog_size: integer         # min 20 live ideas
    sources:
      - source: string                    # comments / search / suggested / trends / competitor analysis / surveys / sales calls / book / newsletter
        weight: integer                   # how much to draw from this source

  research_cadence:
    research_hours_per_video: integer
    research_template_used: string        # path to research-brief template
    competitive_scan_frequency: string    # per-video / weekly / monthly

  topic_supply:
    evergreen_topics: [string]
    timely_topics_pipeline: [string]
    proven_topic_categories: [string]     # the categories that consistently perform on this channel
```

### Compartment 6 — Hook & Retention OS (weight 10%)

```yaml
hook_retention_os:
  hook_formulas_in_use: [string]          # PAST / AID / Contrast / Statistic / Curiosity-Gap / Bound-Promise / Contrarian-Frame / Social-Proof-Stack / Universal
  hook_bank_size: integer                 # how many proven hooks in the bank
  signature_hook_patterns: [string]       # patterns this creator's audience has come to expect

  loop_architecture:
    default_loops_per_long_form: integer  # min 3
    loop_open_window: string              # 0:00–0:15 default
    loop_close_window: string             # 50%-mark default
    callback_in_close: boolean            # default true

  pattern_interrupt_cadence:
    target_seconds_between_interrupts: integer  # 45–60 default
    interrupt_types_in_use: [string]      # cut / b-roll / super / music-shift / location-change

  retention_targets:
    long_form_avd_target_pct: integer     # default 50
    long_form_avd_floor_pct: integer      # bottom-quartile band
    short_form_avd_target_pct: integer    # default 75
    avg_view_duration_target_sec: integer

  retention_curve_signature:
    typical_drop_at_30s_pct: integer
    typical_drop_at_50pct_pct: integer
    typical_end_screen_drop_pct: integer
    known_problem_zones: [string]

  ctr_targets:
    long_form_ctr_target_pct: integer     # default 6
    long_form_ctr_floor_pct: integer      # default 4
    short_form_ctr_target_pct: integer

  banned_hook_patterns: [string]          # hook patterns that don't work for this creator
```

### Compartment 7 — Production & Post (weight 7%)

```yaml
production_and_post:
  script_formats:
    authority_template: string            # path
    reach_template: string                # path
    shorts_template: string               # path
    pinned_vsl_template: string           # path

  script_specs:
    authority_target_word_count: integer  # ~1500–3000 for 8–15 min
    reach_target_word_count: integer      # ~700–1500 for 4–8 min
    shorts_target_word_count: integer     # ~75–150 for 30–60s

  on_camera_direction:
    energy_baseline: string               # 1–10 scale
    pace_baseline: string                 # words per minute
    gesture_default: string               # animated / measured / minimal
    facial_expression_default: string

  b_roll_grammar:
    b_roll_density_per_minute: integer    # how often b-roll cuts in
    b_roll_sources: [string]              # stock library / archive / shot-for-this-video / screen-recording / animation
    avoid_b_roll_patterns: [string]

  editing_rhythm:
    cut_density_per_minute: integer
    music_use: string                     # underscore / hits-only / front-and-back / none
    sfx_use: string                       # sparingly / regularly / signature
    super_use: string                     # often / sparingly / never

  thumbnail_design_system:
    composition_default: string           # face-left-text-right / center-frame / split-half / object-focus
    contrast_rules: [string]
    accent_color: string                  # hex
    secondary_color: string               # hex
    typography: string                    # font + weight + style
    face_grammar: string                  # surprise / contrarian-stare / smile / open-mouth / no-face
    object_grammar: string
    text_density: string                  # 2-3 words / 3-5 words / phrase
    a_b_testing_protocol: string
```

### Compartment 8 — Distribution & Algorithm Surface (weight 7%)

```yaml
distribution_algorithm:
  title_strategy:
    formula_in_use: string                # 4-pillar split (40/30/20/10)
    primary_pillar: string                # the dominant title type for this channel
    title_length_band: string             # short (4-6 words) / medium (7-10) / long (10+)
    keyword_strategy: string

  description_template:
    description_path: string              # path to template
    timestamp_default: boolean
    link_stack_template: [string]         # ordered links — primary CTA, secondary CTA, social, etc.

  end_screens:
    default_pattern: string               # next-video + playlist / next-video + subscribe / next-video only
    next_video_logic: string              # belief-installation-path / suggested-by-algorithm / manual

  cards:
    cards_per_video_default: integer      # 1–3 typical
    card_placement_strategy: string

  community_tab_cadence:
    posts_per_week: integer
    post_types_in_use: [string]           # poll / image / text / clip / question
    post_objectives: [string]

  premiere_strategy:
    premiere_use: string                  # always / sometimes / never
    premiere_chat_strategy: string

  shorts_to_long_form_bridge:
    bridge_strategy: string               # pinned-comment / end-card / description-link
    expected_long_form_lift_pct: integer

  repurposing_cascade:
    long_form_to_short_count: integer     # how many shorts per long-form
    long_form_to_post_count: integer      # how many social posts per long-form
    long_form_to_email_count: integer
```

### Compartment 9 — Audience Building Loop (weight 7%)

```yaml
audience_building_loop:
  community_strategy:
    comment_reply_strategy: string        # first-hour-only / pinned-replies / full-engagement / minimal
    comment_reply_voice: string           # creator-direct / team-with-creator-voice / team-only
    comment_capture_protocol: string      # how high-signal comments get logged for content/library

  email_pipeline:
    email_platform: string                # ConvertKit / Beehiiv / Mailchimp / Ghost / Substack / Klaviyo
    list_size: integer
    primary_lead_magnet: string
    secondary_lead_magnets: [string]
    welcome_sequence_length_emails: integer
    welcome_sequence_path: string         # path to template
    nurture_cadence: string               # weekly / biweekly / variable
    promotion_cadence: string

  lead_magnet_strategy:
    primary_lead_magnet:
      name: string
      delivery_format: string             # PDF / video / Notion / email-course / community-invite
      value_proposition: string
      conversion_rate_target_pct: integer
    placement_on_videos:
      - placement: string                 # description / pinned-comment / end-screen / mid-roll-mention
        rate: integer

  superfan_mechanics:
    top_commenter_recognition: string
    case_study_pipeline: string           # how superfans become case studies
    referral_mechanism: string
    advocacy_opt_in_flow: string

  owned_audience_targets:
    email_subs_per_month_target: integer
    email_subs_per_video_target: integer
    advocate_count_target: integer
```

### Compartment 10 — Sales & Conversion Stack (weight 4%)

```yaml
sales_conversion_stack:
  pinned_vsl:
    url: string
    length_minutes: integer
    structure: string                     # 15-step / 11-step / 8-belief / custom
    cta: string
    conversion_rate_target_pct: integer

  application_funnel:
    application_form_url: string
    qualification_questions: [string]
    booking_tool: string                  # Calendly / SavvyCal / Acuity / custom
    confirmation_sequence_length: integer

  sales_call_script:
    script_path: string
    closing_methodology: string           # crossroads / assumptive / question / takeaway
    discovery_framework: string           # 8-stage / FST / SPIN
    pitch_structure: string
    objection_handling_path: string

  post_call_sequence:
    sequence_path: string
    touchpoint_count: integer
    touchpoint_cadence: [string]          # T+2h / T+24h / T+72h / T+7d / T+14d

  team:
    has_setter: boolean
    has_closer: boolean
    has_sdr: boolean
    commission_structure: string

  show_rate_stack:                        # if call-funnel
    confirmation_video_url: string
    sms_cadence: [string]                 # at-booking / T-24h / T-1h / T-5min
    dm_cadence: [string]
    pre_call_asset_url: string
```

### Compartment 11 — Operations & Intelligence (weight 2%)

```yaml
operations_intelligence:
  team_structure:
    config: string                        # solo / creator-plus-editor / full-studio
    roles: [string]
    responsibilities: {}                  # keyed by role
    communication_protocols: [string]

  workflows:
    content_creation_workflow_path: string
    publishing_workflow_path: string
    sponsor_integration_workflow_path: string
    launch_workflow_path: string

  ip_licensing:
    music_library_license: string
    stock_footage_license: string
    third_party_clip_protocol: string
    fair_use_doctrine_log_path: string

  tech_stack:
    publishing_tool: string               # YouTube Studio / TubeBuddy / VidIQ
    analytics_tool: string                # YouTube Studio / VidIQ / 1of10 / custom
    crm: string                           # GoHighLevel / Hubspot / Close / custom
    email_platform: string
    funnel_builder: string
    payment_processor: string
    automation_tools: [string]
    ai_tools: [string]                    # transcription / thumbnail / B-roll / voiceover

  kpi_dashboard:
    north_star_metric: string             # subscribers / inbound-applications / cash-collected / LTV
    daily_kpis: [string]
    weekly_kpis: [string]
    monthly_kpis: [string]
    quarterly_kpis: [string]

  attribution:
    utm_taxonomy: string
    application_source_tracking: string
    customer_source_tracking: string

  leak_audit_cadence: string              # weekly / biweekly / monthly

  library_compounding:
    swipe_file_growth_target_per_month: integer
    framework_extraction_target_per_month: integer
    pattern_review_cadence: string        # weekly / monthly
```

---

## Completeness Scoring

Each compartment is scored 0–100:

- **0%** = empty
- **25%** = skeleton (basic info, niche, name)
- **50%** = foundation (core fields populated)
- **75%** = solid (nested fields populated with voice-of-viewer evidence)
- **90%** = optimized (every field, verbatim viewer language, proven frameworks tagged)
- **100%** = elite (compartment output is blind-test indistinguishable from the creator's own)

The weighted sum = overall Context Quality Score.

## How Skills Use Compartments

Every skill declares required compartments + minimum completeness in its `SKILL.md` frontmatter:

```yaml
required_compartments:
  audience_intelligence_system: 70
  offer_architecture: 60
  hook_retention_os: 50
```

If any required compartment is below threshold, the skill refuses to execute and **interview-mode** activates to fill the gap.

## Variable Substitution

Throughout skill bodies, reference compartments with `{{path.to.field}}` notation:

- `{{creator_identity_matrix.basic_info.creator_name}}`
- `{{audience_intelligence_system.voice_of_viewer.pain_language_patterns}}`
- `{{offer_architecture.back_end_offers[0].core_promise}}`
- `{{channel_architecture.video_sequencing_path.belief_installation_path}}`
- `{{hook_retention_os.signature_hook_patterns}}`

Skills hydrate these at execution time from `company.yaml`.

## Authoritative Schema

This file is the **authoritative schema**. `company.yaml` must conform. If a creator has data outside this schema, extend this file first, then add to `company.yaml`. Never store schema-violating data in `company.yaml`.

---

*Version: 1.0.0 — 2026-05-03. Based on the Three-Layer Encoding Model + Strategic-Layer Bias + Dual-Mode Content Strategy.*

*A Heuresis workspace template. heuresis.ai*
