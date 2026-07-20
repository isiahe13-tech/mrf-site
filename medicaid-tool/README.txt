MEDICAID MARKET INTELLIGENCE & AE ENABLEMENT ENGINE
===================================================

HOW TO RUN
1. Copy the entire "Medicaid_Market_Intelligence_Desktop" folder to your Windows Desktop.
2. Double-click "Launch_Medicaid_Tool.bat".
3. Your default browser will open the tool locally.

No installation is required.

WHAT WAS ADDED
1. Medicaid Opportunity Score
   - Eight weighted qualification factors
   - Stage recommendation: research, discovery, pilot design or proposal
   - Next-best-action and evidence-gap output

4. Stakeholder / Buying Committee Map
   - Default Medicaid decision roles
   - Contact status, influence, notes and blocker tracking
   - Coverage analysis and next stakeholder action

5. Pilot Design Builder
   - State, cohort, funding route, intervention and service intensity
   - Working eligibility, roles, metrics, go/no-go gates and open questions
   - Copy, save and download functions

6. Funding-to-Cohort Matcher
   - Ranks routes by current state status, cohort fit, speed and objective
   - Explicit cautions prevent inactive or unconfirmed routes from being presented as active

OTHER TOOL CAPABILITIES
- Louisiana and North Carolina state models
- Three nutrition-sensitive cohorts
- Cohort economics and low/base/high savings scenarios
- SDOH ambiguity resolver
- AE account brief generator
- Local saved library
- JSON backup and restore
- Source and assumption registry

DATA & PRIVACY
- Saved scenarios remain in the browser's local storage on this computer.
- Export a JSON backup before moving browsers or computers.
- Do not enter protected health information or member-level identifiers.
- Public benchmarks are starting assumptions, not audited Medicaid claims.
- Replace public estimates with payer claims before using financial outputs in a proposal.

IMPORTANT NORTH CAROLINA STATUS
The Healthy Opportunities Pilots provide a valuable architecture and published evidence.
The state reports that operations were suspended after July 1, 2025 because ongoing state
funding was not provided. Do not present HOP as an active payment route without verifying
current legislative and program status.

VERSION
Desktop local build — July 2026


VERSION 2 CREDIBILITY UPGRADES
------------------------------
- Pilot Builder now calculates low/base/high gross savings, net savings, ROI, break-even PMPM and avoided-event equivalents.
- Cohort Economics uses different cohort-specific savings ranges. The NC HOP $164 PMPM is context only and is not reused as a food-only assumption.
- Stakeholder Map includes Louisiana and North Carolina company dropdowns, public corporate leadership context, source URLs, last-verified dates and local-role research placeholders.
- Parent-company executives are explicitly labeled as context and are not represented as local buyers.
- Data-quality gates address claims baseline, runout, comparison methods, attribution, overlap, full program cost, attrition and confidence intervals.
- Public names and titles may change. Reverify immediately before outreach.

FULL PROGRAM COST AND ROI
-------------------------
- Program cost now includes an editable implementation, clinical and technology allowance.
- “Benefit-cost ratio” means gross modeled savings divided by full program cost.
- Net ROI is also shown separately to avoid ambiguous ROI claims.
- Break-even PMPM and avoided-event equivalents are included.


VERSION 3 — EVIDENCE & ECONOMICS CORRECTION
===========================================
BEST PROOF COHORT
The default cohort is now:
- Recent hospitalization or other triggering event
- High baseline medical spending (working evidence benchmark about $55,000/year)
- One or more serious diet-sensitive conditions
- Clinician-confirmed nutritional need
- Documented food-access or meal-preparation barrier
- High short-term risk of deterioration

WHY THIS COHORT
The strongest published utilization/cost study did not target ordinary diabetes patients.
It targeted medically and socially complex adults with high prior spending and acute risk.
The study estimated:
- Untreated total cost: $4,591 PMPM
- MTM program cost: about $350 PMPM
- Treated total cost including program: $3,838 PMPM
- Net difference: $753 PMPM lower
- About half as many inpatient admissions

PROGRAM-COST CORRECTION
The prior default used $10 per meal plus a 20% allowance, which produced about $521 PMPM.
That likely double-counted delivery/operations relative to available benchmarks.

Version 3 uses:
- $7.92 per medically tailored meal, based on the 2024 NC HOP fee schedule
- 10 meals/week
- 2% additional allowance
- Approximate all-in cost: $350 PMPM

This is a benchmark, not CookUnity pricing. Replace it with an actual bid before proposal use.

IMPORTANT
Statewide cohort counts and state Medicaid burden cannot be verified from public prevalence alone.
For the recommended high-acuity cohort, the candidate count intentionally defaults to zero and must
be loaded from payer claims. This prevents the tool from inventing a state burden.


VERSION 4 — WORKING INTERVIEW BUILD
===================================
FIXES
- Restored visible cost per meal in both Cohort Economics and Pilot Builder.
- Added the missing economics and pilot implementation-allowance fields that caused
  the prior browser runtime failure.
- Added calculated total-program PMPM.
- Replaced the high-acuity cohort savings with transparent JAMA-derived gross PMPM
  scenarios: $630 low, $1,103 base and $1,575 high.
- Added a Louisiana high-acuity TAM funnel using an editable 1.5 million enrollee base.
- Added risk-score, LOCUS/SPMI and ICF/IID domain ranges with a double-counting warning.
- Enriched every Louisiana company map with public corporate context, local buyer roles,
  provider-routing teams, source links and verification labels.
- The stakeholder page now auto-loads a populated company-specific map.
- Buttons were tested in an actual Chromium browser, not only with JavaScript syntax checks.

INTERVIEW DEFAULT ECONOMICS
- $7.92 per medically tailored meal
- 10 meals per week
- 2% additional allowance
- Approximately $350 total program PMPM
- High-acuity base gross medical reduction: $1,103 PMPM
- Approximate base net difference after program cost: $753 PMPM

These are published evidence benchmarks and editable scenarios, not a CookUnity quote,
a Louisiana claims result or a savings guarantee.


VERSION 5 — NORTH CAROLINA VERIFIED EVIDENCE TOGGLE
===================================================
Evidence choices:
- National high-acuity MTM study: $630 / $1,103 / $1,575 gross PMPM.
- NC HOP nonpregnant adults: $16.37 / $161.27 / $306.16 net PMPM.
- NC HOP all participants: $17.32 / $164.49 / $311.67 net PMPM.
- Custom payer-claims assumption.

For NC HOP modes:
gross medical reduction PMPM = program PMPM + published net savings PMPM.
This prevents subtracting program cost twice.

Verified NC totals loaded:
31,597 enrolled; 27,141 received a service; 23,743 reported food need;
20,076 received food services among those reporting need; 22,682 total
food-service recipients.

The HOP result is program-wide across food, housing, transportation and safety,
not disease-specific or food-only.


VERSION 6 — POSITIVE PITCH PRESETS + OFFICIAL NC POPULATION TOGGLES
===================================================================
Pilot Builder pitch presets now load a positive base case using a matching evidence basis and service design.

North Carolina official population toggles:
- 253,549 Tailored Plan members in June 2025
- 309,000 Tailored Care Management members in SFY 2025
- 220,000 expected Tailored Plan members in 2024
- 252,980 TCM-eligible members in 2024
- 22,682 HOP food-service recipients
- 31,597 HOP enrolled participants

Pitch presets:
- NC Tailored Plan complex-needs nutrition pilot
- NC TCM high-intensity needs
- NC diabetes + food need
- NC heart-failure post-discharge stabilization
- NC pre-dialysis CKD nutrition risk
- NC HOP food-service reactivation readiness
- Louisiana MCO high-cost nutrition pilot
- Custom configuration

Every non-custom preset is positive in low, base and high evidence scenarios under its selected benchmark.
Positive results remain modeled planning cases and are not guaranteed outcomes.


VERSION 7 — DISTINCT PROFITABILITY MODELS
=========================================
Problem fixed:
Earlier versions reused the same NC HOP or national PMPM result across multiple
pitch labels. The labels changed, but the economics often did not.

Version 7 gives every pitch its own:
- Pilot population and duration
- Meals per week
- Cost per meal
- Coordination allowance
- Low, base and high target benefit-cost ratios
- Required gross medical reduction PMPM
- Target net savings PMPM
- Total pilot net-savings target

IMPORTANT INTERPRETATION
The default numbers are commercial performance targets:
"This is what the pilot must achieve to be financially viable."

They are not represented as guaranteed payer savings.

BASE PRESET EXAMPLES
- NC Tailored Plan complex needs: approximately 1.55x target BCR
- NC TCM high-intensity needs: approximately 1.45x
- NC diabetes: approximately 1.35x
- NC heart-failure post-discharge: approximately 1.80x
- NC CKD: approximately 1.50x
- NC HOP reactivation: approximately 1.32x
- Louisiana complex needs: approximately 1.60x
- Louisiana diabetes: approximately 1.28x
- Louisiana heart-failure post-discharge: approximately 1.80x
- Louisiana CKD: approximately 1.48x

The comparison table makes the different calculations visible side-by-side.


VERSION 8 — HIGH-ACUITY SERVICE-NEED SCREENER
==============================================
The previous SDOH Ambiguity Resolver has been removed from the interface.

The replacement tab asks structured questions across:
- Recent acute utilization and clinical instability
- Diet-sensitive medical need
- Food access and meal-preparation barriers
- Transportation and care-transition risk
- Clinical referral
- Delivery readiness, member choice and benefit duplication
- Housing, storage and safety barriers that could block delivery

The screen produces:
- Medical urgency score
- Nutrition / SDOH barrier score
- Intervention-fit score
- Rapid high-priority rule result
- Suggested service tier
- Referral-ready summary
- One-click handoff into the Pilot Builder

The screen identifies a likely service need for clinical/payer review. It does not
create Medicaid eligibility, authorize service or guarantee savings. Do not enter PHI.


VERSION 9 - LIVE MARKET REFRESH (verified July 16, 2026)
========================================================
Every update below was verified against an official page or dated press
source the day before use. Each stakeholder row carries its own source
link, last-verified date and confidence label. Unverifiable seats say so.

LOUISIANA
- Enrollment base refreshed: ~1.38M unduplicated enrollees (LDH Monthly
  Enrollment Trends, June 2026) replaces the stale ~1.5M figure. The
  high-acuity funnel planning estimate updates to approximately 4,100.
- UnitedHealthcare EXITED Louisiana Medicaid (stopped serving members
  April 1, 2026). Its ~330K members moved to the five remaining plans -
  shown in the tool as a selling trigger at those plans.
- All five active plan account maps now carry verified LOCAL leadership:
  Aetna (Galatas/Logarbo), AmeriHealth Caritas (Viator/Wise), Healthy Blue
  (Leschinsky - NEW March 2026), Humana (Alletto), LHCC (both top seats
  in transition, May 2026). Each row shows source + confidence.
- State agency map updated: LDH Secretary Bruce D. Greenstein, Medicaid
  Executive Director Seth J. Gold, deputy-director portfolios from the
  official org chart (06/01/2026).
- AmeriHealth Caritas covered-benefit signal (Fall 2025 newsletter) and
  Aetna's $400K Goodr food-as-medicine program (May 2026) surfaced as
  live account hooks in the Stakeholder Map.

NORTH CAROLINA
- HOP status updated: still suspended, but the July 2026 state budget
  restored $25M one-time ($9M state + $16M federal) to resume the pilots
  at reduced scale; restart mechanics unsettled as of mid-July 2026.
- WellCare of NC + Carolina Complete Health merged April 1, 2026 under
  the CCH brand (980K+ members); the account maps reflect the combined
  entity and its unresolved clinical leadership.
- NC Medicaid leadership: Deputy Secretary Melanie Bush (named April
  2026) replaces Jay Ludlam; NCDHHS Secretary Sangvai re-confirmed.

INTERFACE
- Stakeholder Map shows a "Live account intelligence" hook per account.
- Verified local leaders replace the generic placeholder rows they cover;
  remaining placeholders still say "Research required" honestly.
- Fixed: NC diabetes preset now maps to a real care-management/quality
  funding route instead of silently falling back to the inactive HOP row.
- Fixed: contact-quality dropdown no longer overstates unlisted values
  as "Publicly verified."


VERSION 10 - REAL-DOLLAR ECONOMICS (verified July 16, 2026)
===========================================================
Goal: the Pilot Builder runs on numbers that trace to real documents.

REAL PROGRAM COMPS (new card in Pilot Builder)
- CABS Health Network x CookUnity (Brooklyn, July 2025): >=500 Medicaid
  members/12 months, up to 6 months per member, NY 1115 Social Care
  Network funding - CookUnity's actual Medicaid program.
- Anthem Medi-Cal x CookUnity (Sacramento, Nov 2025): weekly MTM
  delivery up to 90 days under CalAIM - matches the DHCS 12-week MTM
  cap AND this tool's 12-week pilot shape.
- EmblemHealth x Ornish x CookUnity (NY): 3,000+ MTM weekly (Oct 2025).
- Two new Louisiana presets model these real designs ("CABS-style" 26-week
  and "CalAIM-style" 12-week); meal price uses the verified New Orleans
  retail ceiling (~$11.79) until a contracted rate replaces it.
- Louisiana reality check shown in-tool: no CookUnity kitchen or health
  program in LA today - a LA pilot is a FIRST-IN-STATE application of a
  playbook CookUnity already runs (delivery = explicit feasibility gate).

REAL DOLLARS
- Avoided-event default re-anchored: $14,550 = average Medicaid
  inpatient stay (HCUP SB #316, 2022, derived); ED visit $600; 30-day
  readmission $14,100 - each sourced in the registry.
- Healthy Louisiana SFY 2026 certified capitation composites added:
  SSI $2,786.29 PMPM / expansion $1,074.80 / composite $883.92
  (Milliman certification, 8/18/2025) - the revenue lines a program
  PMPM is measured against.
- KFF CY2023 per-enrollee spending anchors (LA disabilities $19,878).
- JAMA 2017-dollar benchmarks now carry labeled 2026-dollar
  restatements (BLS medical CPI x1.247): $753 net ~= $939 PMPM.
- Hager et al. 2022 national MTM model added to sources (quote the
  uncertainty range, not just the $13.6B point estimate).

INTERFACE
- "What real programs pay per meal" anchor table in Pilot Builder.
- CookUnity real-programs comp table + Louisiana reality-check callout.
- Removed the red "Do not add" box from Cohort Economics (the overlap
  caution lives in the funnel note and source registry).


VERSION 11 - FOUR-STATE NATIONAL PLATFORM (July 16, 2026)
=========================================================
NEW STATES: NEW YORK + CALIFORNIA (CookUnity's live home markets)
- New York: full state model - NYHER 1115 / nine Social Care Networks,
  nutrition reimbursement live since Jan 2025, waiver expires 3/31/2027;
  the SCN route is the tool's first ACTIVE-status funding mechanism.
  Account maps: EmblemHealth (existing CookUnity partner), MetroPlus
  (CABS example MCO), Healthfirst, NY DOH/SCNs (Public Health Solutions
  = Brooklyn region). Flagship preset: the LIVE CABS x CookUnity program
  (500 members, up to 6 months each).
- California: full state model - CalAIM Community Supports live since
  2022, DHCS benchmark pricing ($9.50 midpoint), 12-week MTM cap.
  Account maps: Anthem Blue Cross (LIVE CookUnity partner), L.A. Care,
  Health Net, DHCS. Flagship preset: the LIVE Anthem Sacramento program
  (12 weeks = the DHCS cap).
- NY/CA cohort counts are labeled starter planning estimates or
  payer-data-required; nothing is presented as a published count.

NEW TAB: NATIONAL PLAYBOOK
- Ranked state-prioritization table: NY + CA (Tier 1 - live markets),
  MA (premium rate) + NC (restart window) + LA (relationship beachhead)
  as Tier 2, and an OR/WA/PA/DE watchlist with the 2025 policy-weather
  caution. Directly answers "how would you prioritize states?"
- Tier logic: mechanism first, evidence second, relationships as the
  tiebreaker; sell where dollars are already appropriated.

Pilot presets now span four states (14 designs); the preset dropdown,
screener handoff and economics defaults all support NY and CA.


VERSION 12 - RFP BUILDER + REGULATORY WATCH (July 17, 2026)
===========================================================
Built the same day the culture interview surfaced two questions
("have you written an RFP?" / "do you keep up with regulations?").
Both are now product features.

NEW TAB: RFP BUILDER
- Generates a draft RFP-response scaffold from the selected state
  model, pilot design, published rate anchors, CookUnity public case
  studies, evidence base and measurement/compliance frameworks.
- Four opportunity types (state procurement / MCO vendor RFP /
  SCN network application / RFI) each with play-the-game notes.
- One-click "Load current Pilot Builder design"; copy, download,
  save to library. 10-point procurement readiness checklist.
- Output is explicitly a DRAFT SCAFFOLD - every section requires
  editing against the actual RFP document and rubric.

NEW TAB: REG WATCH (daily-use regulatory tracker)
- Standing policy baseline: 7 verified facts (HRSN rescission, NYHER
  cliff 3/31/2027, CalAIM 12-week cap, NC $25M restart, MassHealth
  rates, 2024 Managed Care Final Rule ILOS, Louisiana status) each
  with commercial "why it matters" and a source link.
- LIVE FEED: double-click Update_Regulatory_Watch.bat (~20 seconds)
  to pull the newest Federal Register Medicaid documents plus
  targeted news queries (food-as-medicine, LA/CA/NC/NY, 1115/HRSN)
  into the tab. Python standard library only - no installs.
  Feed items are labeled LEADS - verify before citing.
- First refresh ran 7/17/2026: 43 items, 0 source errors.

FILES ADDED: regwatch.py, Update_Regulatory_Watch.bat, regwatch_data.js


ADDED SAME DAY: SDOH FIELD SCREENER (MOBILE COMPANION)
======================================================
File: SDOH_Field_Screener_Mobile.html - a standalone, phone-first
screening form for community action agencies and clinic partners.

- Built on VALIDATED public instruments: the CMS Accountable Health
  Communities (AHC) HRSN core questions (housing, food, transportation,
  utilities, safety w/ standard scoring) + the Hunger Vital Sign,
  plus meal-program-fit questions (diet-sensitive condition,
  preparation barrier, delivery readiness, interest).
- DE-IDENTIFIED BY DESIGN: no PHI fields; site/case-reference codes
  only; nothing is transmitted - data stays on the device until the
  screener copies/downloads/shares the result into the organization's
  own secure, authorized system.
- Honest compliance posture (stated in the form itself): a form is
  only as compliant as the system around it. For identified (PHI)
  use, deploy inside BAA-covered infrastructure - the form carries
  the 4-point deployment checklist (BAA hosting, encryption + access
  controls + audit, minimum-necessary/retention policy, workforce
  training + approved consent language).
- Distribution: send the single HTML file to a partner (email, text,
  AirDrop) - opens in any phone browser, no install, works offline.
- Outputs: referral-ready text summary (copy/share) + structured JSON
  download for upload into the covered system.


V12 ADDENDUM - RFP OPERATING DISCIPLINE (July 17, 2026)
=======================================================
Integrated from the "Winning a State Medicaid RFP" operating manual:
- Readiness checklist rebuilt as a phased discipline: CAPTURE (the win
  starts 12-18 months before the RFP; ~70% capture / ~30% writing) ->
  DAY ONE (compliance matrix immediately) -> BLACKOUT rules -> WRITE
  (win-theme formula: hot-button + discriminator + proof point) ->
  PROTEST-PROOF (never overstate capacity - Louisiana rescinded a ~$21B
  award over an overstated provider network) -> color-team REVIEW
  (Pink/Red/Gold/White Glove) -> SUBMIT early with proof.
- New "Where Procurements Post" watchlist: LaPAC (LA), NYS Contract
  Reporter, Cal eProcure, NC eProcurement, Texas ESBD, Florida
  MyFloridaMarketplace, COMMBUYS (MA), SAM.gov + HMA/OPEN MINDS intel.
  Reg Watch tracks policy; these portals announce the money.
- Generated scaffold now includes a COMPLIANCE MATRIX STARTER section
  (requirement -> section -> owner -> status) and the win-theme formula.
- Reg Watch baseline adds the 2024 Managed Care Final Rule phase-in
  timeline (wait-time standards from rating periods beginning 7/9/2027;
  secret-shopper surveys by 2029; Medicaid/CHIP QRS) - the compliance
  burden plans are bracing for, and a fluency marker in any plan meeting.
- ITN/BAFO vehicle nuance added to the state-procurement opportunity type.


V12.1 ADDENDUM - LOUISIANA COMPLIANCE ARCHITECTURE (July 17, 2026)
==================================================================
Integrated from the "Legally Compliant SDOH Screening and Closed-Loop
Referral Tool for Louisiana" operating manual:

FIELD SCREENER UPGRADES
- Compliance section rebuilt as the real production architecture:
  operate INSIDE HIPAA as a Business Associate of physician/FQHC
  partners (never a standalone consumer app - the FTC Health Breach
  Notification Rule expansion covers non-HIPAA health apps); BAA with
  every provider partner; layered 45 CFR 164.508 patient authorization
  for any disclosure to a community-based organization (most CBOs are
  NOT HIPAA-covered - consent-per-referral, findhelp-style, plus a
  data-use agreement); 42 CFR Part 2 note (form asks no SUD questions
  by design; enforcement live Feb 16, 2026); Louisiana breach law
  timelines (La. R.S. 51:3071: consumer notice <=60 days, AG within 10
  days of consumer notice).
- Louisiana mandatory-reporter guidance added to the safety section
  (DCFS 1-855-452-5437; Elderly Protective Services 1-800-898-4910).
- Instrument-licensing note: AHC-HRSN (LOINC 96777-8) + Hunger Vital
  Sign are free/public - deliberately chosen over PRAPARE, which
  requires a NACHC vendor license for digital builds.

REG WATCH BASELINE ADDITIONS
- OIG Advisory Opinion 26-16 (July 14, 2026): FIRST favorable federal
  opinion on a provider-sponsored food-as-medicine program (FQHC
  produce/vouchers with safeguards). AO 26-15 caution: platform fees
  must be FMV, never referral-based.
- CHW reimbursement stack: LA Medicaid pays CHW services since 2022
  (CPT 98960-98962 / T1015/H2020, incident-to, caps + documentation
  discipline); Medicare CHI/PIN codes since 2024; G0136 remapped
  1/1/2026. The community screening layer is a BILLABLE service line.


VERSION 13 - THE OPERATING LOOP (July 17, 2026)
===============================================
The release that closes the loop: intelligence -> pipeline -> artifact
-> provable follow-through. Informed by the Team-Round Presentation &
Operationalization Playbook.

DEAL DESK (new tab)
- Pipeline auto-seeded with every mapped account (19 across LA/NC/NY/CA;
  exited plans excluded), tracked Research -> Outreach -> Discovery ->
  Pilot Design -> Proposal/RFP -> Won/Parked; edits persist locally;
  CSV export; "no account without a next action" rule enforced in stats.
- Coverage discipline built in: required coverage = 1 / win rate
  (the "3x pipeline" rule is retired) - at 20% that is ~5 active
  pursuits per win, at 15% ~7. Editable win-rate input.
- MEDDPICC card: the eight letters with Medicaid-specific meaning
  (Paper Process = where Medicaid deals stall).

BUYER ONE-PAGER (Pilot Builder)
- One click renders the current pilot design as a clean printable
  leave-behind: design table, five stat tiles (incl. break-even stays),
  evidence bullets (peer-reviewed first), the CABS/Anthem architecture,
  and the modeled-targets guardrail. Auto-opens print dialog.

CLOSED-LOOP REFERRAL LOG (mobile field screener)
- Log referral -> update status -> the tool computes the loop-closure
  rate AND interventions-within-30-days (the HEDIS SNS-E numerator
  shape) from de-identified, device-local data.
- "Load DEMO data" button for presentations - rows are labeled [DEMO]
  and the stats banner says so out loud.

EVIDENCE ADDITIONS
- Berkowitz Health Affairs 2018 dual-eligible anchor ($220/member/month
  net; 50% fewer admissions; 70% fewer ED visits).
- Vendor-reported comps added to the registry LABELED as grey
  literature (Mom's Meals/AmeriHealth DC; UHC 45%; <8% benefit
  engagement) - always ranked below peer-reviewed/actuarial.
- Reg Watch baseline: HEDIS SNS-E measure added (fact #11).


V13.2 - TEAM-SCALE HARDENING (July 17, 2026, from the build/buy gap analysis)
=============================================================================
- "Deal Desk" tab RENAMED "Pipeline" - a corporate deal desk is the
  cross-functional pricing/terms APPROVAL function, not a pipeline
  list; the tab now says so (RevOps fluency, not a naming collision).
- Pipeline moved to its OWN storage key (medicaid-pipeline-v1) with
  automatic one-time migration - "Clear Saved Data" can no longer
  touch the working book. Confirm dialog says so.
- CSV export reframed as the CRM IMPORT BRIDGE
  (Medicaid_Pipeline_CRM_Import.csv): the corporate CRM is the system
  of record; this tool is the personal thinking layer.
- Claims-governance discipline surfaced: Sources tab callout + one-pager
  footer note that external/member-facing use of any evidence figure
  requires marketing/legal claims review (FTC substantiation standard).
- Team-scale doctrine (in the master handoff): keep the verified-facts
  edge personal, buy the commodity stack, govern before a second user.

==================================================================
WHAT'S NEW IN V13 (July 2026)
==================================================================
- PIPELINE TAB ("The Working Book"): every mapped account across the 4
  states auto-seeded (exited plans excluded), tracked through 6 stages
  with next actions + dates. Edits save on this machine, in their own
  storage (the Saved Library "Clear Saved Data" button CANNOT touch it).
  Win-rate-driven coverage math + CSV export as the CRM import bridge.
- BUYER ONE-PAGER: one click in the Pilot Builder prints a clean
  leave-behind of the current pilot design (auto print dialog; if the
  pop-up is blocked it downloads instead).
- CLOSED-LOOP REFERRAL LOG (mobile screener): log referral -> status ->
  outcome, de-identified, device-local, JSON export. The loop-closure %
  is the number payers buy.
- REG WATCH hardening: a failed update can no longer overwrite a good
  feed with an empty one; a known-good backup (.bak) sits in this folder.


VERSION 14 - ACCOUNT HEALTH (July 19, 2026)
===========================================
New tab: the report that wins the renewal, one engine, two books.
- MA RENEWAL DEFENSE mode: activation vs the <8% industry norm, reorder
  rate as the adherence proof, closed-loop documentation, notice-wave
  activation plan (mid-year unused-benefit letters, first wave June
  30 - July 31 2026), member-experience ammunition for Stars.
- MEDICAID EVIDENCE PACK mode: waiver-renewal readiness - NYHER 1115
  authority expires March 31, 2027; the pack converts each quarter
  into renewal-proof evidence (enrollment, completion, loop closure,
  documented follow-through).
- Stars mechanics card (statutory, stable): 4.0+ stars = 5% quality
  bonus; rebate share rises 50% -> 65% -> 70% by rating tier. The
  dollar math is county/plan-specific - the plan's Stars team owns it;
  this report feeds it.
- Roadmap card: Provider Referral & Dual-Trigger Documentation Helper
  (condition + screened need + Z-code in one pass).
- All defaults are DEMONSTRATION data, labeled in-tool and on-report.

V14.1 (July 19, 2026) - Stars 2026 precision + competitive intel layer
- Stars card corrected/sharpened: CMS cut member-experience/CAHPS
  weight 4x -> 2x for 2026 Stars (~22% of the overall rating, down
  from ~33%) - activation and adherence evidence leads; satisfaction
  supports. Health Equity Index replaces the reward factor for 2027
  Stars (documented reach into LIS/dual/disabled members = rated asset).
- Competitor evidence bar in MA Renewal Defense mode: Mom's Meals
  markets its own survey claiming 97% of benefit-users were likelier
  to retain their plan (vendor-stated) - this report answers a survey
  claim with program data (double retention: the benefit retains the
  member; the report retains the contract).
- D-SNP playbook row hardened with KFF 2026 numbers: food/produce
  SSBCI offered to 8% of individual-plan enrollees (~1.8M) vs 93% of
  SNP enrollees - the food benefit is structurally a SNP/D-SNP product.
- VBID termination specifics added: ~$2.3B (CY2021) / ~$2.2B (CY2022)
  excess costs, 62 organizations, ~7M enrollees.
- Mom's Meals battlecard upgraded: FoodMed Certified founding member
  (FIMC accreditation is nonprofit-only) - a credential gap payer
  procurement can score; internal push: pursue FoodMed Certified.
- 3 new sourced entries (53 total); cache-busting version tags added
  to script includes so a demo never loads a stale data file.

V14.2 (July 19, 2026) - Instant inline reports (pop-up blockers defeated)
- Account Health reports and the Buyer One-Pager now render INSTANTLY
  inside the page, directly below the Generate button - no pop-up
  window, so pop-up blockers can never eat a report again.
- Each report ships with a Print / Save as PDF button (prints just the
  report) and a Download HTML button (standalone file you can email).
- Both Account Health modes (MA Renewal Defense + Medicaid Evidence
  Pack) and the One-Pager verified end-to-end in-browser, zero errors.

V14.3 (July 19, 2026) - Provider Referral & Dual-Trigger Documentation
Helper BUILT (was the roadmap card)
- New standalone clinic-facing tool: Provider_Referral_Helper.html
  (linked from the Account Health tab). One pass captures the
  nutrition-sensitive condition (9 ICD-10 families), the screened need
  (instrument + date + Z59.41/Z59.48), routed housing/transport flags,
  and the funding mechanism (CalAIM / NY SCN / NC HOP / MassHealth /
  SSBCI / MCO value-add) - then generates a printable referral order
  sheet with an auto-composed medical-necessity statement and a
  closed-loop report-back table.
- INTEGRITY FEATURE: refuses to generate an MTM order when the dual
  trigger is not met (negative/missing screen = "DO NOT ORDER").
- De-identified by design: patient identifiers are handwritten on the
  printed sheet inside the clinic's records environment - never typed
  into the tool. Production version = EHR-integrated under BAA.
- Clinical edges (RDN assessment content, condition list, coder Z-code
  preference) deliberately left open for clinical partners to shape.
- Renders inline (no pop-ups), same Print/Save-PDF + Download pattern.
