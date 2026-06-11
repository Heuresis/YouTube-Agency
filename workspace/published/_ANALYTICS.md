# ANALYTICS — the channel scoreboard (what's live, what it did, what it taught us)

> The feedback loop that closes the engine. `workspace/STRATEGY.md → VOICE.md → PROOF-BANK.md → CONTENT-ENGINE.md` say what to *make*; this file is what actually *happened* once it shipped. It is the highest-signal input to [`workspace/pipeline/SLATE.md`](../pipeline/SLATE.md) and to `/idea-farm`, `/audit-retention`, `/kpi-dashboard`, `/library-compound`.
>
> **Reading rule:** the north star is **conversion-assist**, not views. Read whether a video **carries proof that converts** the target buyer first; reach second. Log every new video here within ~48h and again at ~14 / 30 / 54 days. One published video = one scoreboard row here + one full record from [`_TEMPLATE.md`](_TEMPLATE.md).

---

## Channel snapshot (<date>)

| | |
|---|---|
| **YouTube** | @<handle> — <subs> subs, <N> videos |
| **Other surfaces** | <IG/X/LinkedIn handles + follower counts — note the biggest cross-surface gap; it's usually the #1 owned lever> |
| **Direction** | <the current slate thesis in one line — what kind of video the channel is betting on, per `workspace/pipeline/SLATE.md`> |
| **Audience state** | <% new vs regular viewers> → <the implication: e.g. pure discovery = every video is someone's first; self-contained hook + explicit reason-to-subscribe, every time> |

---

## The scoreboard — every published video

> Mode per INV-12. CTR target ≥6%, floor 4% (company.yaml). % viewed is the retention tell (INV-9). A starred row = analyzed in depth in the diagnosis below.

| Date | Video | Len | Mode / Format | Views | Impr | CTR | AVD | % viewed | Subs | Likes% |
|---|---|---|---|---|---|---|---|---|---|---|
| <YYYY-MM-DD> | <title> | <mm:ss> | <mode · format> | <n> | <n> | <%> | <mm:ss> | <%> | +<n> | <%> |

*Footnotes: normalize for age before comparing rows (views at 13 days ≠ views at 54 days). Track channel-average likes% and end-screen-click% here: <values>.*

---

## The diagnosis — the 8 reads that drive the slate

Run all eight after every publish cycle. Each read names its evidence (scoreboard rows) and lands an implication the SLATE can act on. The leak is rarely where it looks (INV-1) — the reads exist to find the constraint layer, not to admire the numbers.

**1. The constraint read — which layer is actually leaking?** CTR fine but % viewed low → retention, not packaging. CTR low on strong impressions → packaging. Impressions low → topic/distribution. Check the 0:30 hold before blaming the hook: a healthy 0:30 with a 3:00 cliff means the bleed is the intro/setup stretch, not the open. → *Name the one lever; route to `/audit-retention` or `/leak-audit` if structural.* `<evidence + implication>`

**2. The promise-vs-payoff read.** Compare each video's CTR against its % viewed and likes%. Out-clicked but under-delivered (high CTR, low retention/likes) = the title wrote a check the open cashed late — back-pay the flex with substance faster (INV-10's performance shadow). `<evidence + implication>`

**3. The distribution read.** Where did views come from (browse / suggested / search / external)? If the algorithm is already pushing, packaging + early retention are the *only* levers — fix retention and distribution scales free. If search-heavy, the SEO surface matters more than the thumbnail. `<evidence + implication>`

**4. The proven-home-run read.** The channel's biggest outlier — *why did it work, honestly?* Separate the durable cause (a grounded operator-opinion, a real receipt) from the incidental one (a trend term, a lucky push). The slate copies the durable cause only. `<evidence + implication>`

**5. The trend-vs-durable read.** For any trend-adjacent video: did the trend term out-pull the evergreen frame, and is the trend still alive? Trends decay; receipts don't. A real bleed number is a thumbnail, a hook, and a proof all at once — and competitors can't copy it. `<evidence + implication>`

**6. The audience-state read.** % new vs regular viewers. A discovery-heavy channel writes every video as someone's first: self-contained, one-line who-this-is, a concrete reason to subscribe. Don't write for a returning audience that isn't there yet. `<evidence + implication>`

**7. The length read.** Runtime vs AVD vs % viewed. If long runtimes carry sub-3-min AVD, test (a) tightening toward the 8–12 min band, or (b) keeping length but fixing the first 3 minutes hard. Flag the longest upcoming script in `workspace/drafts/` as the retention-risk case. `<evidence + implication>`

**8. The mechanics read.** Which small repeatable units worked — comment-keyword lead magnets, community posts, end-screen routes, pinned-comment prompts? Cheap reach + list-build units between long-forms compound; keep deploying what pulled. `<evidence + implication>`

---

## A/B test log

| Video | Variant A (live) | Variant B | Status / read |
|---|---|---|---|
| <video> | "<title A>" | "<title B>" | <running / done — what the result teaches beyond the winner: the durable lesson is usually about specificity, not the surface term> |

> Log the *hypothesis* when the test starts, not just the winner when it ends. One variable per test (same body, different hook — or same hook, different CTA). Hold winners after 72h per the packaging A/B plan (`workspace/drafts/` PACKAGING stage).

---

## Data flags to reconcile (public claims vs the bank)

Claims now live on the channel — on camera, in titles, in descriptions — that don't match `workspace/PROOF-BANK.md`. Surface each to the creator; **don't self-resolve** (INV-6). The bank and the channel must converge on one canonical version.

- **"<public claim as stated>"** (<which video>) vs PROOF-BANK <row>: "<bank version>". → Which is real? <action: confirm + promote the row, or correct the channel copy going forward>
- **<spelling/branding inconsistency now public>** → pick the canonical form, standardize the bank, fix forward.
- **<public pricing/offer statements>** → match against the bank's offer rows; log the public-facing version once reconciled.
- **<a published receipt not yet `[VERIFIED]`>** → nearly a gather item; tie to the real invoice/dashboard and promote.

---

## How to use this file

- **Before `/idea-farm` / re-ranking the SLATE:** read the 8 diagnoses. The next slate is *built from* what's durable and *against* what's leaking.
- **After every publish:** add a scoreboard row at ~48h; backfill at 14 / 30 / 54 days; drop the retention read + any A/B result into the logs above.
- **Per published video:** the full record (transcript + analytics + learnings) lives at `workspace/published/<date>--<slug>.md` — template: [`_TEMPLATE.md`](_TEMPLATE.md).

---

*The channel's analytics layer. Numbers come from YouTube Studio (or the API via `integrations/`); reads feed the SLATE.*
