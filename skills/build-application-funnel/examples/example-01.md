# Example: build-application-funnel output

## Output

```markdown
# Application Funnel — The Step-Out Program ($8K)

**Date:** 2026-05-03

## 1. Application Form (6 questions)
1. **Business stage** (revenue band + years in business) — surfaces fit
2. **What % of delivery work do you personally produce right now?** — surfaces fit + readiness (operators ≥ 70% are core ICP)
3. **What's your last 12 months looked like in terms of delegation/hiring attempts? Specifically, what did you try and what happened?** — surfaces specificity + readiness (writes their own narrative)
4. **What changes if you step out of delivery in 90 days vs. staying where you are now?** — surfaces fit + readiness (their stake)
5. **Are you in a position to commit 5 hours/week for 12 weeks + invest $8K?** — surfaces readiness explicitly
6. **What's the specific role you'd want to delegate first? (E.g., client onboarding owner, project delivery lead, etc.)** — surfaces specificity + sets up call

## 2. Qualification Logic
| Answer pattern | Verdict | Action |
|---|---|---|
| Q1: $150K-$500K + Q2: ≥ 70% delivery + Q3: ≥ 1 prior attempt + Q5: yes | qualify | book call |
| Q1: < $150K OR Q5: no on commitment OR Q5: no on budget | auto-disqualify | "Thanks — based on your application, the program isn't the right fit right now. Recommend [free diagnostic + email sequence]." |
| Q1: > $500K (might be too established for this program) | human review | flag for creator — possible referral to higher-tier mastermind or direct enrollment |
| Q3: zero prior attempts | human review | flag — might be too early-stage for this specific program |

## 3. Booking Tool
- Tool: Calendly
- Call length: 25 min discovery
- Available slots: 4 slots/week (Mon/Wed afternoons)

## 4. Confirmation Sequence
| Touchpoint | Channel | Content |
|---|---|---|
| T+0 (booking confirmed) | email + SMS opt-in | "Confirmed — call is [date]. Please watch this 5-min framework primer before our call: [pre-call asset link]" |
| T-24h | email + SMS | "Reminder for tomorrow + the 3 questions we'll cover on the call" |
| T-1h | SMS | "Call in 1 hour — same link" |
| T-5min | SMS | "Joining now?" |

## 5. Pre-Call Asset
- Format: 5-min video on the Role-Design-First framework primer
- Content: 4 components walked through quickly + 3 questions the discovery call will cover (their current role-design state, their constraints, their fit)
- Goal: move prospect from "I watched the VSL and applied" to "I have specific questions about my situation"

## 6. No-Show Recovery
| Time | Channel | Content |
|---|---|---|
| T+4h | email + SMS | "We missed you on the call — rebook here: [link]" |
| T+24h | email | "Second invite — if your situation has shifted, no pressure. Here's a slot if it's still relevant: [link] + the program walkthrough if you want to revisit: [VSL link]" |
| T+72h | email | "If now's not the time, here's a slot in 30 days when things might be different: [link]. Also keeping you on the email list for updates." |

## 7. Compartment Write-Backs
Updates to `sales_conversion_stack.application_funnel`:
- application_form_url: [link]
- qualification_questions: [list of 6]
- booking_tool: "Calendly"
- confirmation_sequence_length: 4

Updates to `sales_conversion_stack.show_rate_stack`:
- confirmation_video_url: [pre-call asset link]
- sms_cadence: ["at-booking", "T-24h", "T-1h", "T-5min"]
- pre_call_asset_url: [pre-call asset link]

---
SIGNAL: S = (BUILD, DIRECT, youtube.monetization.application.build, MARKDOWN, 0.7)
COMPARTMENTS_USED: [offer_architecture, sales_conversion_stack]
COMPARTMENTS_WRITTEN: [sales_conversion_stack.application_funnel, sales_conversion_stack.show_rate_stack]
FRAMEWORKS_USED: [application-qualification-logic, show-rate-cadence, pre-call-state-shift, no-show-recovery]
CONFIDENCE: HIGH (6 questions tight, qualification logic explicit, 4-touchpoint confirmation, pre-call asset specified, 3-touchpoint no-show recovery)
GAPS: []
---
```

## Why this output is calibration-grade
6 questions surface fit + readiness + specificity. Qualification logic explicit — including auto-disqualification paths that protect call calendar. 4-touchpoint confirmation (email + SMS) drives show rate. Pre-call asset is specific (5-min video on framework primer + 3 call questions). No-show recovery has 3 touchpoints with descalating urgency.
