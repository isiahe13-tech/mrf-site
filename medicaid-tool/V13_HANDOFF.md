# V13 HANDOFF — Medicaid Market Intelligence & AE Enablement Engine
**Written:** July 17, 2026 (evening) · **Author:** Claude session with Isiah Edwards
**Purpose:** Complete spec + exact in-progress state so the next session finishes v13 without redoing or breaking anything.

---

## 1. THE VISION — WHAT V13 IS

v12.1 is an intelligence platform: 4 state models (LA / NC / NY / CA), National Playbook, Pilot Builder (real CookUnity comps: CABS Brooklyn + Anthem Sacramento), verified stakeholder maps, published rate anchors, RFP Builder + procurement portals, daily Regulatory Watch scraper, in-tool screener + mobile SDOH field screener with Louisiana compliance architecture.

**v13's job is to close the loop — convert intelligence into a working operating system for the actual AE job.** Three organs:

1. **Deal Desk** — a pipeline tab auto-seeded with every mapped account (≈20 across 4 states, exited plans excluded), tracked through stages with next actions and dates, persisted locally, CSV export. *"Here's how I run the book, day one."*
2. **Buyer One-Pager** — one click turns the current Pilot Builder design into a clean printable leave-behind (the artifact that goes in front of a CMO).
3. **Closed-Loop Referral Log** — in the mobile field screener: log referral → status → outcome, de-identified, device-local. Makes "closed-loop" literal; the loop-closure rate is the number payers buy. Also the seed of the standalone community-navigation venture (see the Louisiana compliance manual PDF in Downloads).

---

## 2. EXACT CURRENT STATE OF THE V13 FOLDER

Folder: `C:\Users\isiah\Downloads\Medicaid_Market_Intelligence_Desktop_v13\Medicaid_Market_Intelligence_Desktop_v13\`
(started as an exact copy of shipped v12.1)

### DONE (built this session, NOT yet tested):

**index.html**
- Tab button added: `<button class="tab" data-panel="dealdesk">Deal Desk</button>` (after National Playbook).
- Full `<section id="dealdesk">` added between the playbook and rfp sections: intro card with `#pipelineStats` callout + `#pipelineReset` and `#pipelineCsv` buttons; a "Stage Discipline" card (6-stage checklist + the "no account without a next action" rule); table with `#pipelineRows` tbody (columns: Account / State / Stage / Next action / By when / Notes).
- One-pager button added in the Pilot Builder output card: `<button id="onePagerPilot" class="primary">Buyer one-pager (print/PDF)</button>`.

**app.js**
- `blankStore` now includes `pipeline:[]` (shared localStorage key `medicaid-market-intelligence-v2`).
- Added before `renderStatePlaybook()`: `PIPELINE_STAGES` (Research / Outreach / Discovery / Pilot Design / Proposal · RFP / Won / Parked), `seedPipeline()` (seeds from `TOOL_DATA.companies` across all states, **skips `c.exited`**, merge-safe — only adds accounts not already stored), `persistPipeline()`, `renderPipeline()` (editable rows: stage select, next-action input, date input, notes textarea; change-handler persists), `renderPipelineStats()` (counts by stage, in-motion, missing-next-action, overdue), `pipelineCsv()`, `initDealDesk()`.
- `buildOnePager()`: calls `buildPilot()` + `pilotEconomics()`, generates a self-contained print-styled HTML (design table, 5 stat tiles incl. break-even stays, evidence bullets — JAMA $753/≈$939, Nature Medicine 31%, NC $164 — CABS/Anthem architecture bullets, "what we ask from the plan," modeled-targets footer, auto-`window.print()` on load). Opens via Blob URL in a new tab; **fallback: downloads the HTML + alert** if pop-up blocked.
- Wired: `$("onePagerPilot").addEventListener` (guarded with `if`) and `initDealDesk()` appended to `init()`.

**SDOH_Field_Screener_Mobile.html**
- Referral-log card HTML added (before the compliance `<details>`): `#refCase`, `#refDest` (10 destination options incl. MTM program, food pantry, SNAP/WIC, housing, transportation, utilities, clinic, behavioral health, community action agency, other), `#refNote`, `#refAdd` button, `#refStats`, `#refList`, `#refExport`, `#refClear`.

### NOT DONE — the remaining work list, in order:

1. **Referral-log JavaScript (the card is dead UI right now — buttons do nothing).** Spec:
   - Storage: separate localStorage key `sdoh-referral-log` (device-local; NOT the main tool's store).
   - `refAdd`: push `{id, date (auto ISO), caseRef, dest, note, status:"Sent"}`; prefill `#refCase` from `#caseref` if empty; require caseRef (alert if blank).
   - `refList` render: compact rows — caseRef · dest · date · a status `<select>` (Sent / Accepted / Service started / Completed / Declined / Unreachable) that persists on change · note in small text.
   - `refStats`: "X referrals · Y reached an outcome (Completed/Declined/Unreachable) · Z% loop closure" — loop closure = outcomes ÷ total.
   - `refExport`: download JSON (`sdoh_referrals_<date>.json`).
   - `refClear`: `confirm()` gate, then wipe key + re-render.
   - Style hooks already exist (`.opt`, `.note`, `.btnrow`, `.btn ghost`); keep 16px+ inputs (iOS zoom).
2. **Full browser test** (serve over localhost — file:// is blocked in the browser pane; his BAT uses file:// and works fine for him):
   - `~/.claude/launch.json` has `medicaid-tool-v12` on port 8794 pointing at the v12 folder — add/repoint a `medicaid-tool-v13` entry to the v13 folder (new port, e.g., 8795).
   - Deal Desk: seeds ~20 accounts (UHC-LA excluded because `exited:true`); edits persist across reload; stats update; CSV downloads.
   - One-pager: opens/prints from the CalAIM preset; numbers match the Pilot Builder; fallback path works.
   - Mobile screener at 375px viewport: no horizontal scroll; score flow still works; referral log add → status change → export → clear.
   - Regression smoke: all tabs render, all 15 presets build positive, Reg Watch renders, RFP generates, zero console errors, `TOOL_DATA.sources` integrity (no missing fields).
3. **README** — append a V13 section (Deal Desk / One-Pager / Referral Log, in the established voice).
4. **Package & deliver:** zip → `Downloads\Medicaid_Market_Intelligence_Desktop_v13.zip`; copy folder contents into `C:\Users\isiah\OneDrive\Desktop\AAA - COOKUNITY MEDICAID AE\MEDICAID TOOL - LIVE DEMO (open Launch_Medicaid_Tool.bat)\` (Desktop is OneDrive-redirected — never claim Desktop delivery without verifying that path).
5. **GitHub:** copy files into the scratchpad clone's `medicaid-tool/` (or re-clone `https://github.com/isiahe13-tech/mrf-site.git` branch `feature/medicaid-funding-sdoh-tool`; last shipped commit = `b26e128` v12.1), commit with a message file (PowerShell mangles inline quotes — use `git commit -F`), push, verify remote head advanced.
6. **Memory:** update `project_sales_role_interviews.md` (the CookUnity entry) with v13 shipped-state.

### Known gotchas for the next builder
- **The Saved Library "Clear Saved Data" button wipes the shared store — including the pipeline.** Decision point: either warn in the confirm text, or migrate the pipeline to its own localStorage key. Recommendation: own key (`medicaid-deal-desk`), small refactor of `seedPipeline/persistPipeline`.
- `escapeHtml`/`money`/`download` are in-IIFE utilities — all new code must live inside the same IIFE (it does).
- The one-pager template embeds `</script>` as `</${"script"}>` to avoid parser breakage — keep that if editing.
- No `node` on this machine — syntax-check via browser console only. Python 3.13 available.
- Version-agnostic Desktop folder name is deliberate — don't rename it per version.
- Never label anything "HIPAA compliant" — the shipped language is "de-identified by design; PHI use requires BAA-covered deployment." Keep it.

---

## 3. BEYOND V13 — THE "FULLY WORKING FRAMEWORK" ROADMAP (v14+ candidates, in value order)

1. **Discovery Kit tab** — per-persona question batteries (plan CMO / pop-health / health-equity / state agency / SCN lead), call-note capture that saves to the library and pushes a summary + next action into the Deal Desk row. Closes the meeting→pipeline gap.
2. **Pipeline math** — quota input + average-deal-value assumption → coverage ratio on the Deal Desk stats bar (pipeline coverage 3–4x quota is the standard sales discipline).
3. **Data-freshness panel** — every verified fact already carries a date; surface "oldest verified" per account and a quarterly re-verify checklist (leadership moves fast — two LA plan CEOs changed in spring 2026 alone).
4. **Automated Reg Watch** — Windows Task Scheduler entry running `Update_Regulatory_Watch.bat` daily (currently manual double-click). Note: scheduled runs die silently sometimes — surface the "last refreshed" stamp prominently (already shown in-tab).
5. **Gravity Project / FHIR-shaped export** — align the field screener's JSON keys to Gravity SDOH IG concepts (Observation/ServiceRequest/Task); interoperability fluency for payer IT conversations.
6. **Hosted demo** — a shareable URL. DECISION REQUIRED from Isiah: do NOT host on the mrf-site domain (MRF founder-brand separation from the CookUnity candidacy); a separate GitHub Pages repo or Netlify under a neutral name is the clean path.
7. **The venture fork** — the field screener + referral log + the Louisiana compliance manual (BA-inside-HIPAA, 164.508 consent, CHW billing codes 98960–98962/T1015, AO 26-16 food-as-medicine blueprint) is a standalone business: CHW-billable SDOH screening + closed-loop referral for LA clinics/FQHCs/CAAs. If CookUnity hires him, it's his day-one toolkit; if not, it's his next company. Keep the two stories separate in any public artifact.

---

## 4. STANDING BUILD RULES (non-negotiable, learned this week)
- Every number traces to a fetchable source or is labeled a planning estimate/target. Honest gaps ("rate not public") outperform guesses.
- No naked names: people ship with source + verified date + confidence tier; unverifiable seats say so.
- Test in the browser before every ship (localhost server, console errors, functional click-through), then zip + Desktop + GitHub in the same session.
- Corrections sweep downstream artifacts in the same session (call sheets, README, memory).
- GitHub: feature branch only (`feature/medicaid-funding-sdoh-tool`), never main, never the public MRF site content.

## 5. WHERE EVERYTHING LIVES
- **v13 (in progress):** `Downloads\Medicaid_Market_Intelligence_Desktop_v13\Medicaid_Market_Intelligence_Desktop_v13\`
- **v12.1 (last shipped):** same pattern v12; zip in Downloads; live copy in the Desktop LIVE DEMO folder; GitHub `b26e128`.
- **Prep kit:** `OneDrive\Desktop\AAA - COOKUNITY MEDICAID AE\` (game plan, call sheets, dossiers, playbooks — GTM playbook updated with SDOH→HRSN section + corrected exec names 7/16).
- **Reference PDFs (Downloads):** interview-prep intelligence brief · "Winning a State Medicaid RFP" manual (integrated into v12) · "Legally Compliant SDOH Screening…Louisiana" manual (integrated into v12.1).
- **Interview state:** Sheeba (Dir. Healthcare & Payors) cultural-add round went well 7/17; next = team round; her probes (RFP fluency, regulatory currency, Medicaid depth) drove v12; Nikesha Rodrigue (Aetna LA) call pending scheduling; memory file `project_sales_role_interviews.md` is current.
