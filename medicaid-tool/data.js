const TOOL_DATA = {
  states: {
    LA: {
      name: "Louisiana",
      summary: "Near-term strategy should focus on an MCO-funded pilot, care-management or quality budget, or a risk-bearing provider partnership. A broad statewide Medicaid nutrition authority has not been confirmed in this tool; waiver or in-lieu-of-services routes remain policy-development paths that require verification.",
      defaultMealCost: 7.92,
      defaultPmpm: 750,
      cohorts: {
        complex: { affected: 0, annualCost: 55092, targetRate: 100, foodFit: 5, sourceNote: "BEST PROOF COHORT. Claims-defined medically and socially complex adults with a recent hospitalization or other triggering event, at least one diet-sensitive serious condition, substantial food or meal-preparation barriers, and high baseline spending. The $55,092 annual benchmark comes from the untreated matched cohort in Berkowitz et al. (JAMA Internal Medicine, 2019). Candidate count must come from payer claims; zero is intentional.", buyerQuestion: "Which members had a recent hospitalization or triggering event, annualized spending near or above $50,000, a diet-sensitive condition, and a documented inability to obtain or prepare appropriate food?", costLogic: "This cohort matches the strongest observed MTM utilization and cost evidence because members have high short-term risk and enough avoidable spending to cover the intervention.", nutritionFit: "Strongest commercial proof cohort. Use a clinician-certified combination of medical, nutritional and social risk—not diagnosis alone." },
        diabetes: { affected: 480000, annualCost: 12022, targetRate: 6, foodFit: 5, sourceNote: "Starter estimate. Affected population is a modeled public-health estimate; $12,022 is a national annual medical cost attributed to diagnosed diabetes. Replace with Louisiana Medicaid claims.", buyerQuestion: "Which diabetic members have both food-access barriers and recent avoidable utilization?", costLogic: "High prevalence, medication burden, emergency use and preventable complications.", nutritionFit: "Strong fit when eligibility includes clinical acuity and a documented nutrition barrier." },
        heart: { affected: 90000, annualCost: 10500, targetRate: 12, foodFit: 5, sourceNote: "Starter estimate derived from public prevalence and national cost literature. Replace with Louisiana Medicaid heart-failure claims and admissions.", buyerQuestion: "Which members have heart failure, recent admission or readmission risk, and difficulty following a sodium-controlled diet?", costLogic: "Admissions and readmissions concentrate cost in a smaller high-risk population.", nutritionFit: "Strong fit for medically tailored meals with sodium and fluid-related clinical protocols." },
        ckd: { affected: 490000, annualCost: 9000, targetRate: 5, foodFit: 4, sourceNote: "Starter estimate. CKD overlaps heavily with diabetes and hypertension and must not be added to those burdens. Replace with staged CKD claims.", buyerQuestion: "Which stage 3–4 CKD members have nutrition insecurity and rising utilization before dialysis?", costLogic: "Progression, comorbidity and eventual renal replacement therapy create high downstream cost.", nutritionFit: "Potentially strong but requires renal-specific clinical oversight and individualized restrictions." }
      },
      funding: [
        { id:"la_mco_pilot", name:"MCO innovation or controlled pilot budget", status:"conditional", speed:5, objectives:["pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"A plan-funded test using a defined cohort, capped budget and agreed evaluation.", buyer:"Medicaid plan president, chief medical officer, care management, health equity or innovation leader", evidence:"Named budget owner, targetable claims cohort, implementation plan and stop/scale criteria.", caution:"Plan-specific authority and procurement must be confirmed." },
        { id:"la_care_quality", name:"Care-management, quality or health-equity budget", status:"conditional", speed:4, objectives:["pilot","benefit"], fits:{complex:5,diabetes:5,heart:4,ckd:4}, description:"Position nutrition as an intervention supporting an existing quality, disparity or utilization objective.", buyer:"Chief medical officer, quality, population health, care management or health equity", evidence:"Quality gap, member workflow, clinical referral and measurement plan.", caution:"Do not assume food is reimbursable merely because a quality gap exists." },
        { id:"la_vbp", name:"Risk-bearing provider or value-based partnership", status:"conditional", speed:4, objectives:["provider","pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"A provider group, health system or clinically integrated network funds the intervention against avoidable utilization or shared-savings goals.", buyer:"CFO, value-based care leader, medical group president or population-health executive", evidence:"Attributed population, risk contract, baseline utilization and savings-sharing method.", caution:"The provider must actually carry enough financial risk to support the investment." },
        { id:"la_policy", name:"Section 1115 / HRSN / in-lieu-of-services policy route", status:"verify", speed:1, objectives:["benefit"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"Longer-term pathway to secure state and federal authority for health-related social-needs nutrition services.", buyer:"Louisiana Medicaid leadership, state policy, CMS and managed-care contracting teams", evidence:"Legal authority, budget neutrality, service definitions, eligibility, rates and evaluation design.", caution:"No current broad Louisiana authority is confirmed here. Treat as policy development, not active revenue." },
        { id:"la_bridge", name:"Grant, philanthropy or community-benefit bridge", status:"conditional", speed:3, objectives:["bridge","pilot"], fits:{complex:5,diabetes:4,heart:4,ckd:3}, description:"Non-Medicaid capital funds an initial proof while payer contracting or state authority develops.", buyer:"Health-system community benefit, foundations, public-health grants or local government", evidence:"Time-limited pilot, clear transition plan and payer-relevant outcomes.", caution:"Bridge funding is not a durable reimbursement strategy." }
      ]
    },
    NC: {
      name: "North Carolina",
      summary: "North Carolina created the Healthy Opportunities Pilots under a Section 1115 demonstration. Food services and a published fee schedule provide a concrete model, but operations were suspended after July 1, 2025 when the General Assembly did not provide continued funding. Treat HOP as proven architecture and a reactivation opportunity—not as currently available revenue.",
      defaultMealCost: 7.92,
      defaultPmpm: 750,
      cohorts: {
        complex: { affected: 0, annualCost: 55092, targetRate: 100, foodFit: 5, sourceNote: "BEST PROOF COHORT. Claims-defined medically and socially complex adults with a recent hospitalization or other triggering event, at least one diet-sensitive serious condition, substantial food or meal-preparation barriers, and high baseline spending. The $55,092 annual benchmark comes from the untreated matched cohort in Berkowitz et al. (JAMA Internal Medicine, 2019). Candidate count must come from payer claims; zero is intentional.", buyerQuestion: "Which members had a recent hospitalization or triggering event, annualized spending near or above $50,000, a diet-sensitive condition, and a documented inability to obtain or prepare appropriate food?", costLogic: "This cohort matches the strongest observed MTM utilization and cost evidence because members have high short-term risk and enough avoidable spending to cover the intervention.", nutritionFit: "Strongest commercial proof cohort. Use a clinician-certified combination of medical, nutritional and social risk—not diagnosis alone." },
        diabetes: { affected: 1080000, annualCost: 12022, targetRate: 6, foodFit: 5, sourceNote: "Starter state estimate plus national attributed diabetes cost. Replace with NC Medicaid claims. HOP’s $164 PMPM result covered multiple HRSN domains and is not food-specific.", buyerQuestion: "Which eligible diabetic members also meet the required social-risk criteria and have avoidable utilization?", costLogic: "Large state prevalence plus preventable acute and chronic complications.", nutritionFit: "Strong fit under clinically appropriate food services and care-management authorization." },
        heart: { affected: 215000, annualCost: 10500, targetRate: 12, foodFit: 5, sourceNote: "Starter estimate; replace with NC Medicaid admissions, readmissions and allowed-amount data.", buyerQuestion: "Which members with heart failure and qualifying social risk drive potentially avoidable inpatient use?", costLogic: "High concentration of inpatient and readmission spending.", nutritionFit: "Strong fit when meals follow heart-failure clinical protocols." },
        ckd: { affected: 1190000, annualCost: 9000, targetRate: 5, foodFit: 4, sourceNote: "Starter estimate. CKD overlaps with diabetes and hypertension; do not sum cohorts.", buyerQuestion: "Which pre-dialysis CKD members meet clinical and social-risk criteria and are appropriate for renal nutrition support?", costLogic: "Progression and comorbid complications create high long-term spending.", nutritionFit: "Requires individualized renal nutrition and close clinical governance." }
      },
      funding: [
        { id:"nc_hop", name:"Healthy Opportunities Pilots Section 1115 route", status:"inactive", speed:1, objectives:["benefit","pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"CMS-authorized HRSN model covering food, housing, transportation and safety services through plans, network leads and human-service organizations.", buyer:"NC Medicaid, prepaid health plans, network leads and contracted human-service organizations", evidence:"Qualifying clinical condition, social risk, regional eligibility, authorization, HSO contracting and service compliance.", caution:"Operations are suspended because state funding was not continued after July 1, 2025. Do not pitch this as active payment." },
        { id:"nc_reactivation", name:"HOP reactivation or statewide-scaling readiness", status:"verify", speed:2, objectives:["benefit"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"Prepare contracting, service, data and geographic readiness for possible renewed funding or statewide scaling.", buyer:"NC Medicaid leadership, legislature, prepaid health plans and network infrastructure", evidence:"Current legislative funding, waiver status, fee schedule, geographic network and contracting requirements.", caution:"Reactivation depends on public funding and policy decisions outside vendor control." },
        { id:"nc_mco", name:"Plan-funded innovation or value-based pilot", status:"conditional", speed:4, objectives:["pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"A plan-funded pilot outside suspended HOP operations, using HOP evidence and infrastructure lessons.", buyer:"Prepaid health plan CMO, care management, quality, finance or innovation", evidence:"Plan authority, target cohort, non-duplication, procurement and evaluation.", caution:"Must be structured separately from inactive HOP payments." },
        { id:"nc_care", name:"Care-management, quality or health-equity budget", status:"conditional", speed:4, objectives:["pilot","benefit"], fits:{complex:5,diabetes:5,heart:4,ckd:4}, description:"Position nutrition as an intervention supporting an existing plan quality, disparity or utilization objective outside suspended HOP operations.", buyer:"Chief medical officer, quality, population health, care management or health equity", evidence:"Quality gap, member workflow, clinical referral and measurement plan.", caution:"Do not assume food is reimbursable merely because a quality gap exists." },
        { id:"nc_provider", name:"Risk-bearing provider partnership", status:"conditional", speed:4, objectives:["provider","pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"Partner with an accountable provider or health system that benefits from reducing avoidable utilization.", buyer:"Health-system population health, clinically integrated network or value-based provider", evidence:"Attributed lives, financial risk, referral workflow and outcome attribution.", caution:"Verify the provider’s actual risk exposure and available budget." },
        { id:"nc_bridge", name:"Grant or community-benefit bridge", status:"conditional", speed:3, objectives:["bridge","pilot"], fits:{complex:5,diabetes:4,heart:4,ckd:3}, description:"Use time-limited capital to maintain readiness or test a narrow cohort while public funding is unresolved.", buyer:"Health systems, foundations, public-health grants or local funders", evidence:"Transition strategy, buyer engagement and measurable payer-relevant outcomes.", caution:"Do not confuse bridge capital with sustainable Medicaid reimbursement." }
      ]
    }
  },
  cohorts: {
    complex:{label:"High-acuity, medically + socially complex (recommended)"},
    diabetes:{label:"Type 2 diabetes + food-access barrier"},
    heart:{label:"Heart failure / cardiovascular high-risk"},
    ckd:{label:"Pre-dialysis chronic kidney disease"}
  },
  opportunityFactors: [
    {id:"funding",label:"Funding authority and budget owner",weight:18,zero:"No route or owner",five:"Confirmed route and accountable budget owner"},
    {id:"cohort",label:"Targetable cohort and claims burden",weight:16,zero:"Broad population only",five:"Defined members, baseline spend and utilization"},
    {id:"buyer",label:"Economic buyer access",weight:13,zero:"No identified buyer",five:"Engaged decision-maker with urgency"},
    {id:"clinical",label:"Clinical champion and referral workflow",weight:12,zero:"No clinical owner",five:"Champion, criteria and workflow confirmed"},
    {id:"delivery",label:"Delivery and member operations readiness",weight:10,zero:"Coverage unknown",five:"Coverage, onboarding and service recovery proven"},
    {id:"data",label:"Data access and evaluation design",weight:13,zero:"No data path",five:"Files, definitions, baseline and comparison agreed"},
    {id:"procurement",label:"Procurement and contracting clarity",weight:10,zero:"Unknown process",five:"Path, timeline and requirements confirmed"},
    {id:"evidence",label:"Evidence-to-account fit",weight:8,zero:"Generic evidence only",five:"Evidence directly matches population and decision"}
  ],
  stakeholderRoles: [
    "Economic buyer / Medicaid plan president",
    "Executive sponsor",
    "Chief medical officer / clinical decision-maker",
    "Care-management or population-health leader",
    "Quality and health-equity leader",
    "Finance / actuarial reviewer",
    "Analytics and evaluation owner",
    "Procurement / contracting",
    "Legal, privacy and compliance",
    "Implementation and operations owner",
    "Community or HRSN network partner",
    "Internal CookUnity executive sponsor"
  ],
  sdoh: {
    Food: {
      "Is a meal program the right intervention?": {
        answer:"Only when the primary barrier includes inability to obtain or prepare clinically appropriate food and the member has a condition likely to benefit. Food insecurity alone does not prove that medically tailored meals are the right level of service.",
        owner:"Clinical lead + care management + member operations",
        evidence:["Clinical condition and acuity","Food-access and preparation barriers","Member preference and ability to receive/store meals","Less-intensive alternatives considered"],
        next:"Define the service intensity: tailored meals, healthy meals, food box, produce prescription or nutrition navigation.",
        red:"Do not use meals to solve a primarily housing, transportation or contact problem."
      },
      "Who can identify and authorize members?": {
        answer:"The payer or delegated care-management/clinical workflow should identify eligibility and authorize service. Community partners may support screening and warm handoffs but should not independently create Medicaid eligibility.",
        owner:"MCO HRSN administrator or designated clinical/care-management entity",
        evidence:["Eligibility criteria","Authorization policy","Referral source","Consent and data-sharing process"],
        next:"Map the exact referral-to-authorization-to-vendor file workflow.",
        red:"Do not describe community outreach as authorization."
      },
      "How should Community Action be used?": {
        answer:"Use Community Action for local barrier intelligence, trusted education, warm handoffs and feedback on member access. Use formal agreements, clear data boundaries and defined payment or capacity expectations.",
        owner:"Community partnerships + payer care management + implementation",
        evidence:["Service-area coverage","Defined role","Data-sharing limits","Referral and escalation process"],
        next:"Select one regional partner for the proof market before proposing statewide scale.",
        red:"A relationship or conversation is not a committed statewide partnership."
      }
    },
    Housing: {
      "Can nutrition succeed when housing is unstable?": {
        answer:"Meal delivery may fail when a member lacks a stable address, refrigeration, safe storage or cooking access. Housing stabilization or an alternate delivery model may need to precede or accompany nutrition support.",
        owner:"Care management + housing partner + operations",
        evidence:["Stable delivery location","Storage and reheating capability","Contact reliability","Housing risk and duplication review"],
        next:"Add a housing-readiness checkpoint to eligibility and onboarding.",
        red:"Do not count undeliverable meals as member noncompliance."
      }
    },
    Transportation: {
      "When is delivery better than transportation support?": {
        answer:"Home delivery is strongest when transportation barriers prevent reliable food access and delivery is operationally feasible. Transportation may be the better intervention when the member can shop and prepare food but cannot reach retailers.",
        owner:"Care management + logistics",
        evidence:["Distance and transportation barrier","Delivery coverage","Member cooking ability","Cost comparison"],
        next:"Compare delivered meals, food-box delivery and transportation alternatives.",
        red:"Do not default to the highest-cost intervention without documenting need."
      }
    },
    Safety: {
      "What safety issues affect meal delivery?": {
        answer:"Interpersonal violence, unsafe housing, cognitive impairment, pets, access restrictions and neighborhood conditions can affect delivery and communication. Safety protocols should protect members and drivers without excluding high-need populations.",
        owner:"Operations + care management + safety/compliance",
        evidence:["Safe contact method","Delivery instructions","Escalation protocol","Authorized representative where appropriate"],
        next:"Create a discreet communication and failed-delivery escalation plan.",
        red:"Never include sensitive safety information in unrestricted delivery notes."
      }
    }
  },
  sources: [
    {name:"Berkowitz et al., JAMA Internal Medicine — Medically Tailored Meals",supports:"Best proof-cohort definition, 10 meals/week, $350 PMPM program-cost benchmark, $4,591 untreated PMPM, $3,838 treated total PMPM, $753 net monthly difference and fewer inpatient/SNF admissions",date:"Published 2019; costs in 2017 dollars",confidence:"Moderate-High for observed association",limitation:"Retrospective matched/instrumental-variable cohort, not randomized and not state-specific.",url:"https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2730768"},
    {name:"North Carolina Healthy Opportunities Pilots",supports:"Program status, $650M authorization, service domains, eligibility and entity roles",date:"Updated June 26, 2026",confidence:"High",limitation:"Operations suspended after July 1, 2025 because state funding was not continued.",url:"https://www.ncdhhs.gov/about/department-initiatives/healthy-opportunities/healthy-opportunities-pilots"},
    {name:"NCDHHS HOP Cost Evaluation Press Release",supports:"Preliminary average net Medicaid savings of $164 per participant per month; fewer ED visits and hospital stays",date:"June 2, 2026",confidence:"High for reported preliminary result",limitation:"All-domain HOP result, not food-only; preliminary and not presented as a CookUnity outcome.",url:"https://www.ncdhhs.gov/news/press-releases/2026/06/02/healthy-opportunities-pilots-lead-healthier-outcomes-and-reduce-nc-medicaid-costs"},
    {name:"NC HOP Fee Schedule",supports:"2024 service prices, including $7.92 medically tailored home-delivered meal",date:"Effective July 1, 2024",confidence:"High",limitation:"Historical HOP fee schedule; current payment availability depends on program funding and contracts.",url:"https://www.ncdhhs.gov/healthy-opportunities-pilot-fee-schedule-and-service-definitions/open"},
    {name:"CDC National Diabetes Statistics Report",supports:"National diabetes prevalence and population burden",date:"Updated Jan. 21, 2026",confidence:"High",limitation:"National statistics do not substitute for Medicaid claims or state-specific prevalence.",url:"https://www.cdc.gov/diabetes/php/data-research/index.html"},
    {name:"American Diabetes Association — Economic Cost",supports:"National annual medical cost attributed to diagnosed diabetes used as a starter benchmark",date:"2022 economic-cost study",confidence:"Moderate-High",limitation:"National all-payer estimate, not state Medicaid allowed amounts.",url:"https://diabetes.org/about-diabetes/statistics/cost-diabetes"},
    {name:"CDC Chronic Kidney Disease",supports:"CKD prevalence and overlap with diabetes and hypertension",date:"Current public-health reference",confidence:"High",limitation:"Prevalence estimates do not identify the high-risk targetable Medicaid subgroup.",url:"https://www.cdc.gov/kidney-disease/php/data-research/index.html"},
    {name:"CDC Heart Disease Facts",supports:"Cardiovascular burden and cost context",date:"Current public-health reference",confidence:"High",limitation:"Heart disease is broader than the heart-failure pilot cohort.",url:"https://www.cdc.gov/heart-disease/data-research/facts-stats/index.html"},
    {name:"CMS Medicaid HRSN Framework",supports:"Policy structure for health-related social-needs services under demonstrations",date:"2023 framework; verify current guidance",confidence:"High",limitation:"A federal framework does not establish Louisiana-specific authority.",url:"https://www.medicaid.gov/medicaid/section-1115-demonstrations/health-related-social-needs/index.html"}
  ]
};
// Version 2 credibility extensions
TOOL_DATA.cohortSavings = {
  complex: {
    label: "High-acuity, medically + socially complex (recommended)",
    rates: {low: 0.12, base: 0.163, high: 0.24},
    evidenceLevel: "Evidence-aligned range — strongest available fit, still nonrandomized",
    basis: "Built from the JAMA Internal Medicine matched cohort: untreated total cost was $4,591 PMPM, the MTM program cost benchmark was $350 PMPM, and total cost including the program was $3,838 PMPM. The high case reproduces the implied gross medical reduction of about $1,103 PMPM; lower cases haircut that observed association.",
    primaryDrivers: "Recent hospitalization or triggering event, high baseline spending, multiple serious conditions, food/meal-preparation barriers, inpatient and skilled-nursing utilization"
  },
  diabetes: {
    label: "Type 2 diabetes + food-access barrier",
    rates: {low: 0.02, base: 0.04, high: 0.07},
    evidenceLevel: "Screening cohort — lower confidence for short pilot savings",
    basis: "Diabetes diagnosis alone is too broad. Positive ROI requires added high-acuity criteria such as recent admission, unstable medication access, multiple comorbidities and high baseline claims.",
    primaryDrivers: "Emergency use, admissions, medication instability and preventable complications"
  },
  heart: {
    label: "Heart failure / cardiovascular high-risk",
    rates: {low: 0.08, base: 0.14, high: 0.22},
    evidenceLevel: "High-potential disease filter — moderate confidence",
    basis: "Heart failure is a strong disease filter because hospital and readmission spending is concentrated and sodium-sensitive nutrition is clinically relevant. Use only with recent discharge, prior utilization and food-access barriers; disease diagnosis alone is insufficient.",
    primaryDrivers: "Admissions, readmissions, post-discharge instability and sodium-sensitive disease management"
  },
  ckd: {
    label: "Pre-dialysis chronic kidney disease",
    rates: {low: 0.03, base: 0.07, high: 0.12},
    evidenceLevel: "Specialized cohort — low-to-moderate confidence",
    basis: "Use stage 3b–4 CKD plus rising utilization and food barriers. Renal-specific clinical oversight is mandatory, and overlapping diabetes/heart-failure savings must be de-duplicated.",
    primaryDrivers: "Progression, acute complications, comorbidity and avoidable utilization before dialysis"
  }
};

TOOL_DATA.externalBenchmarks = {
  jamaMtmComplex: {
    value: 753,
    label: "Observed net total-cost difference after including MTM program cost",
    status: "Primary evidence benchmark — observational matched cohort",
    source: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2730768",
    limitation: "Not randomized, not Louisiana-specific and not a heart-failure-only cohort. Use to set an evidence-aligned range, not to guarantee results."
  },
  jamaProgramCost: {
    value: 350,
    label: "Approximate all-in MTM program cost PMPM used in the JAMA study",
    status: "Historical 2017-dollar program benchmark",
    source: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2730768",
    limitation: "Historical nonprofit program cost; actual CookUnity contracting, inflation, delivery area and clinical support may differ."
  },
  ncHopAllDomainPmpm: {
    value: 164,
    label: "North Carolina HOP preliminary all-domain net Medicaid savings",
    status: "Context only — not food-specific",
    source: "https://www.ncdhhs.gov/news/press-releases/2026/06/02/healthy-opportunities-pilots-lead-healthier-outcomes-and-reduce-nc-medicaid-costs",
    limitation: "The $164 PMPM result reflects the full Healthy Opportunities Pilots model across multiple HRSN domains. It must not be used as a universal food-intervention PMPM."
  }
};

TOOL_DATA.companies = {
  LA: [
    {
      id:"la_aetna", name:"Aetna Better Health of Louisiana", parent:"Aetna / CVS Health",
      accountSource:"https://www.aetnabetterhealth.com/louisiana/",
      contacts:[
        {role:"Corporate executive context — Aetna President",name:"Steve Nelson",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.reuters.com/business/healthcare-pharmaceuticals/cvs-taps-former-unitedhealth-executive-run-insurance-unit-aetna-2024-11-06/",notes:"Public parent-company leader; not presumed to be the Louisiana economic buyer."}
      ]
    },
    {
      id:"la_amerihealth", name:"AmeriHealth Caritas Louisiana", parent:"AmeriHealth Caritas",
      accountSource:"https://www.amerihealthcaritasla.com/",
      contacts:[
        {role:"Corporate executive context — President & CEO",name:"Kelly A. Munson",quality:"Company-level context — verify",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.amerihealthcaritas.com/about-us/executive-leadership.aspx",notes:"Verify current title before use; not presumed to be the Louisiana economic buyer."}
      ]
    },
    {
      id:"la_healthyblue", name:"Healthy Blue Louisiana", parent:"Elevance Health / Blue Cross and Blue Shield of Louisiana joint venture",
      accountSource:"https://www.myhealthybluela.com/",
      contacts:[
        {role:"Corporate executive context — Elevance President & CEO",name:"Gail K. Boudreaux",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.elevancehealth.com/who-we-are/leadership.html",notes:"Corporate context only; local plan decision-maker must be researched."}
      ]
    },
    {
      id:"la_humana", name:"Humana Healthy Horizons in Louisiana", parent:"Humana",
      accountSource:"https://www.humana.com/medicaid/louisiana",
      contacts:[
        {role:"Corporate executive context — Humana President & CEO",name:"Jim Rechtin",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://humana.gcs-web.com/corporate-governance/management",notes:"Corporate context only; local Medicaid leadership must be verified."}
      ]
    },
    {
      id:"la_lhcc", name:"Louisiana Healthcare Connections", parent:"Centene",
      accountSource:"https://www.louisianahealthconnect.com/",
      contacts:[
        {role:"Corporate executive context — Centene CEO",name:"Sarah London",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.centene.com/who-we-are/leadership.html",notes:"Corporate context only; identify Louisiana plan president and CMO."}
      ]
    },
    {
      id:"la_uhc", name:"UnitedHealthcare Community Plan of Louisiana", parent:"UnitedHealthcare",
      accountSource:"https://www.uhc.com/communityplan/louisiana",
      contacts:[
        {role:"Corporate executive context — UnitedHealthcare CEO",name:"Tim Noel",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.reuters.com/business/healthcare-pharmaceuticals/unitedhealth-taps-medicare-head-ceo-insurance-business-2025-01-23/",notes:"Corporate context only; identify the Louisiana Community Plan CEO/president."}
      ]
    },
    {
      id:"la_medicaid", name:"Louisiana Medicaid / Louisiana Department of Health", parent:"State agency",
      accountSource:"https://ldh.la.gov/page/medicaid",
      contacts:[
        {role:"State executive context — LDH Secretary",name:"Research current officeholder",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://ldh.la.gov/",notes:"State leadership changed recently. Verify the current Secretary, Medicaid Executive Director and managed-care contracting leaders before outreach."}
      ]
    }
  ],
  NC: [
    {
      id:"nc_amerihealth", name:"AmeriHealth Caritas North Carolina", parent:"AmeriHealth Caritas",
      accountSource:"https://www.amerihealthcaritasnc.com/",
      contacts:[
        {role:"Corporate executive context — President & CEO",name:"Kelly A. Munson",quality:"Company-level context — verify",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.amerihealthcaritas.com/about-us/executive-leadership.aspx",notes:"Verify current title; identify NC market president and CMO."}
      ]
    },
    {
      id:"nc_healthyblue", name:"Healthy Blue North Carolina", parent:"Blue Cross NC / Elevance Health",
      accountSource:"https://www.healthybluenc.com/",
      contacts:[
        {role:"Corporate executive context — Blue Cross NC President & CEO",name:"Tunde Sotunde",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.bluecrossnc.com/about-us/leadership",notes:"Corporate context only; identify Healthy Blue Medicaid market leadership."},
        {role:"Corporate executive context — Elevance President & CEO",name:"Gail K. Boudreaux",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.elevancehealth.com/who-we-are/leadership.html",notes:"Corporate context only; not presumed to be the local buyer."}
      ]
    },
    {
      id:"nc_uhc", name:"UnitedHealthcare Community Plan of North Carolina", parent:"UnitedHealthcare",
      accountSource:"https://www.uhc.com/communityplan/north-carolina",
      contacts:[
        {role:"Corporate executive context — UnitedHealthcare CEO",name:"Tim Noel",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.reuters.com/business/healthcare-pharmaceuticals/unitedhealth-taps-medicare-head-ceo-insurance-business-2025-01-23/",notes:"Corporate context only; identify the NC Community Plan CEO/president."}
      ]
    },
    {
      id:"nc_wellcare", name:"WellCare of North Carolina", parent:"Centene",
      accountSource:"https://www.wellcarenc.com/",
      contacts:[
        {role:"Corporate executive context — Centene CEO",name:"Sarah London",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.centene.com/who-we-are/leadership.html",notes:"Corporate context only; identify NC plan president and CMO."}
      ]
    },
    {
      id:"nc_cch", name:"Carolina Complete Health", parent:"Centene / provider-led partnership",
      accountSource:"https://www.carolinacompletehealth.com/",
      contacts:[
        {role:"Corporate executive context — Centene CEO",name:"Sarah London",quality:"Company-level context",status:"Identified",influence:2,verified:"2026-07-15",source:"https://www.centene.com/who-we-are/leadership.html",notes:"Corporate context only; map provider-partner and local market leadership separately."}
      ]
    },
    {
      id:"nc_medicaid", name:"NC Medicaid / NCDHHS", parent:"State agency",
      accountSource:"https://medicaid.ncdhhs.gov/",
      contacts:[
        {role:"State executive context — NCDHHS Secretary",name:"Devdutta Sangvai",quality:"Publicly identified — verify before outreach",status:"Identified",influence:5,verified:"2026-07-15",source:"https://www.ncdhhs.gov/about/leadership/secretary",notes:"State policy context; identify the current NC Medicaid deputy secretary and Healthy Opportunities leaders."}
      ]
    }
  ]
};

TOOL_DATA.localBuyerRoles = [
  {role:"Local Medicaid plan president / market CEO",influence:5},
  {role:"Chief medical officer / clinical decision-maker",influence:5},
  {role:"Care-management / population-health leader",influence:4},
  {role:"Quality and health-equity leader",influence:4},
  {role:"Finance / actuarial reviewer",influence:4},
  {role:"Analytics and evaluation owner",influence:4},
  {role:"Procurement / contracting",influence:4},
  {role:"Legal, privacy and compliance",influence:3},
  {role:"Implementation and operations owner",influence:4},
  {role:"Community or HRSN network partner",influence:3},
  {role:"Internal CookUnity executive sponsor",influence:5}
];

TOOL_DATA.dataQualityGates = [
  "For an ROI proof pilot, require medical risk + nutritional/social risk + recent high utilization; diagnosis alone does not qualify.",
  "Cohort definition and exclusions are reproducible from claims or care-management data.",
  "At least 12 months of baseline medical and pharmacy claims are available, with adequate runout.",
  "Overlapping conditions are flagged so savings are not double counted.",
  "Comparison method, attribution window and regression-to-the-mean risk are documented.",
  "Program cost includes food, delivery, onboarding, member support, clinical oversight, technology and evaluation.",
  "Results report enrollment, completion, attrition, missing data and confidence intervals—not only point estimates.",
  "Break-even PMPM and avoided-event equivalents are shown alongside ROI.",
  "Every public contact has a source and last-verified date; local titles are rechecked before outreach."
];


TOOL_DATA.sources.push(
  {name:"Corporate leadership and account-source registry",supports:"Public parent-company leadership context and current plan/company dropdowns",date:"Verified July 15, 2026",confidence:"Moderate-High",limitation:"Corporate leaders are not presumed to be local Medicaid buyers. Local roles require separate verification before outreach.",url:"https://www.reuters.com/business/healthcare-pharmaceuticals/unitedhealth-taps-medicare-head-ceo-insurance-business-2025-01-23/"},
  {name:"CVS / Aetna leadership update",supports:"Steve Nelson as Aetna leader",date:"Nov. 6, 2024; recheck before outreach",confidence:"High for published appointment",limitation:"Does not identify Louisiana Medicaid plan leadership.",url:"https://www.reuters.com/business/healthcare-pharmaceuticals/cvs-taps-former-unitedhealth-executive-run-insurance-unit-aetna-2024-11-06/"},
  {name:"Company and plan homepages",supports:"Account identity and local leadership research starting points",date:"Review before each outreach",confidence:"Variable",limitation:"Web leadership details can be removed or change. Save a last-verified date and source for each person.",url:"https://ldh.la.gov/page/medicaid"}
);


// ------------------------------------------------------------------
// VERSION 4: evidence-aligned economics, TAM planning and enriched
// Louisiana account maps. These overrides are intentionally explicit.
// ------------------------------------------------------------------
TOOL_DATA.states.LA.cohorts.complex.affected = 4500;
TOOL_DATA.states.NC.cohorts.complex.affected = 4500;
TOOL_DATA.states.LA.cohorts.complex.targetRate = 100;
TOOL_DATA.states.NC.cohorts.complex.targetRate = 100;
TOOL_DATA.states.LA.cohorts.complex.sourceNote =
  "Interview planning estimate: 4,500 Louisiana candidates from a high-acuity funnel, not a published Medicaid headcount. Replace it with payer claims. The cost benchmark is based on the untreated matched cohort in Berkowitz et al.";
TOOL_DATA.states.NC.cohorts.complex.sourceNote =
  "Interview planning estimate used for demonstration. Replace the candidate count and baseline PMPM with plan claims before proposal.";

TOOL_DATA.cohortSavings.complex.fixedPmpm = {
  low: 630,
  base: 1103,
  high: 1575
};
TOOL_DATA.cohortSavings.complex.basis =
  "JAMA matched-cohort benchmark. The published net difference after including an approximately $350 PMPM meal-program cost was $753 PMPM, with a 95% confidence interval of $280 to $1,225 lower. Adding the program cost back produces implied gross medical reductions of approximately $630 / $1,103 / $1,575 PMPM for low / base / high scenarios. Observational association—not a guarantee.";

TOOL_DATA.louisianaHighAcuityPlanning = {
  totalMedicaid: 1500000,
  riskAboveOneLow: 0.15,
  riskAboveOneHigh: 0.25,
  locusAdultsLow: 40000,
  locusAdultsHigh: 60000,
  icfHighAcuityUpper: 5000,
  foodBarrierBase: 0.15,
  recentTriggerBase: 0.25,
  eligibleBase: 0.40,
  note: "CDPS >1.00, LOCUS 3+ and ICF/IID acuity are different overlapping domains. The ranges are planning estimates rather than a published unified Louisiana count."
};

TOOL_DATA.interviewBenchmarks = [
  {
    label: "High-acuity medically tailored meals — observed net difference",
    value: "$753 PMPM net after program cost",
    source: "Berkowitz et al., JAMA Internal Medicine",
    limitation: "Retrospective matched cohort; not randomized or Louisiana-specific."
  },
  {
    label: "High-acuity medically tailored meals — all-in program cost",
    value: "Approximately $350 PMPM",
    source: "Berkowitz et al., JAMA Internal Medicine",
    limitation: "2017-dollar nonprofit program benchmark; replace with CookUnity pricing."
  },
  {
    label: "North Carolina Healthy Opportunities Pilots",
    value: "$164 PMPM average net Medicaid savings",
    source: "NCDHHS preliminary evaluation",
    limitation: "All HRSN domains combined—not food-only."
  },
  {
    label: "North Carolina medically tailored home-delivered meal",
    value: "$7.92 per meal",
    source: "2024 NC HOP fee schedule",
    limitation: "Historical public fee; not CookUnity pricing."
  }
];

const V4_COMPANY_CONTACTS = {
  la_aetna: [
    {role:"Aetna President — corporate executive context",name:"Steve Nelson",quality:"Publicly verified",status:"Identified",influence:2,verified:"2024-11-06 appointment; recheck",source:"https://apnews.com/article/bf26a0671d28f71da1c650ebbdbba32d",notes:"Corporate context only. Do not treat as the Louisiana buying contact."},
    {role:"CVS Health President & CEO — parent context",name:"David Joyner",quality:"Publicly verified",status:"Identified",influence:1,verified:"Current parent-company context; recheck",source:"https://www.cvshealth.com/about/leadership.html",notes:"Parent-company context, not local Medicaid buyer."},
    {role:"Louisiana Medicaid plan president / market CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.aetnabetterhealth.com/louisiana/",notes:"Highest-priority local executive research target."},
    {role:"Louisiana chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.aetnabetterhealth.com/louisiana/providers/",notes:"Validate through provider leadership, press release or user-confirmed introduction."},
    {role:"Provider experience / network-management route",name:"Aetna Better Health of Louisiana Provider Experience",quality:"Public plan team",status:"Identified",influence:3,verified:"Plan website",source:"https://www.aetnabetterhealth.com/louisiana/providers/",notes:"Useful routing team; not necessarily economic buyer."}
  ],
  la_amerihealth: [
    {role:"President & CEO — corporate executive context",name:"Kelly A. Munson",quality:"Company-level context — verify",status:"Identified",influence:2,verified:"Recheck before outreach",source:"https://www.amerihealthcaritas.com/about-us/executive-leadership.aspx",notes:"Corporate context only."},
    {role:"Louisiana Medicaid plan president / market CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.amerihealthcaritasla.com/",notes:"Primary executive research target."},
    {role:"Louisiana chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.amerihealthcaritasla.com/provider/index.aspx",notes:"Target for cohort criteria and clinical sponsorship."},
    {role:"Provider network / contracting route",name:"AmeriHealth Caritas Louisiana Provider Services",quality:"Public plan team",status:"Identified",influence:3,verified:"Plan website",source:"https://www.amerihealthcaritasla.com/provider/index.aspx",notes:"Routing and contracting intelligence; confirm decision authority."}
  ],
  la_healthyblue: [
    {role:"Elevance Health President & CEO — corporate context",name:"Gail K. Boudreaux",quality:"Publicly verified",status:"Identified",influence:2,verified:"Current corporate context; recheck",source:"https://www.elevancehealth.com/who-we-are/leadership.html",notes:"Not presumed to be the Louisiana Medicaid buyer."},
    {role:"Blue Cross and Blue Shield of Louisiana President & CEO — joint-venture context",name:"Steven Udvarhelyi",quality:"Company-level context — verify",status:"Identified",influence:2,verified:"Recheck before outreach",source:"https://www.bcbsla.com/about-us",notes:"Joint-venture context. Confirm current title and Healthy Blue authority."},
    {role:"Healthy Blue Louisiana market president / CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.myhealthybluela.com/",notes:"Primary executive research target."},
    {role:"Healthy Blue Louisiana chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://provider.healthybluela.com/",notes:"Target for clinical design and outcome sponsorship."},
    {role:"Provider relations / contracting route",name:"Healthy Blue Louisiana Provider Relations",quality:"Public plan team",status:"Identified",influence:3,verified:"Plan website",source:"https://provider.healthybluela.com/",notes:"Useful routing team; verify procurement path separately."}
  ],
  la_humana: [
    {role:"Humana President & CEO — corporate context",name:"Jim Rechtin",quality:"Publicly verified",status:"Identified",influence:2,verified:"Current corporate context; recheck",source:"https://humana.gcs-web.com/corporate-governance/management",notes:"Corporate context only."},
    {role:"Humana Healthy Horizons Louisiana market president / CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.humana.com/medicaid/louisiana",notes:"Primary local economic-buyer research target."},
    {role:"Louisiana Medicaid chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.humana.com/medicaid/louisiana/providers",notes:"Target for clinical sponsorship and cohort rules."},
    {role:"Provider contracting / network route",name:"Humana Healthy Horizons Louisiana Provider Relations",quality:"Public plan team",status:"Identified",influence:3,verified:"Plan website",source:"https://www.humana.com/medicaid/louisiana/providers",notes:"Routing and contracting intelligence."}
  ],
  la_lhcc: [
    {role:"Centene CEO — corporate context",name:"Sarah London",quality:"Publicly verified",status:"Identified",influence:2,verified:"2026 corporate context",source:"https://www.centene.com/who-we-are/leadership.html",notes:"Corporate context only."},
    {role:"Louisiana Medicaid plan president / CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.louisianahealthconnect.com/",notes:"Primary executive research target."},
    {role:"Louisiana chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.louisianahealthconnect.com/providers.html",notes:"Target for pilot clinical sponsorship."},
    {role:"Account scale / member context",name:"Louisiana Healthcare Connections — 400,000+ Medicaid members",quality:"Public plan fact",status:"Identified",influence:2,verified:"Public company page; recheck",source:"https://www.louisianahealthconnect.com/about-us.html",notes:"Useful account-sizing context, not a person."},
    {role:"Provider relations / contracting route",name:"Louisiana Healthcare Connections Provider Services",quality:"Public plan team",status:"Identified",influence:3,verified:"Plan website",source:"https://www.louisianahealthconnect.com/providers.html",notes:"Routing and contracting intelligence."}
  ],
  la_uhc: [
    {role:"UnitedHealthcare CEO — corporate context",name:"Tim Noel",quality:"Publicly verified",status:"Identified",influence:2,verified:"2025 appointment; recheck",source:"https://www.reuters.com/business/healthcare-pharmaceuticals/unitedhealth-taps-medicare-head-ceo-insurance-business-2025-01-23/",notes:"Corporate context only."},
    {role:"UnitedHealth Group CEO — parent context",name:"Stephen Hemsley",quality:"Company-level context — verify",status:"Identified",influence:1,verified:"Recheck before outreach",source:"https://www.unitedhealthgroup.com/people-and-businesses/leadership.html",notes:"Parent-company context, not local Medicaid buyer."},
    {role:"Louisiana Community Plan president / CEO",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.uhc.com/communityplan/louisiana",notes:"Primary executive research target."},
    {role:"Louisiana Community Plan chief medical officer",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://www.uhcprovider.com/en/health-plans-by-state/louisiana-health-plans/la-comm-plan-home.html",notes:"Target for cohort and evaluation design."},
    {role:"Provider network / contracting route",name:"UnitedHealthcare Community Plan Louisiana Provider Relations",quality:"Public plan team",status:"Identified",influence:3,verified:"Provider website",source:"https://www.uhcprovider.com/en/health-plans-by-state/louisiana-health-plans/la-comm-plan-home.html",notes:"Routing and contracting intelligence."}
  ],
  la_medicaid: [
    {role:"Interim LDH Secretary — state context",name:"Drew Maranto",quality:"Company-level context — verify",status:"Identified",influence:5,verified:"Public reporting; verify immediately",source:"https://ldh.la.gov/",notes:"State leadership has changed. Confirm current officeholder before use."},
    {role:"Louisiana Surgeon General — state context",name:"Evelyn Griffin",quality:"Company-level context — verify",status:"Identified",influence:4,verified:"Public reporting; verify immediately",source:"https://ldh.la.gov/",notes:"Public-health context; may not own Medicaid contracting."},
    {role:"Louisiana Medicaid executive director",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://ldh.la.gov/page/medicaid",notes:"Primary state Medicaid policy and contracting research target."},
    {role:"Medicaid managed-care contracting leader",name:"Public name not verified",quality:"Research required",status:"Unknown",influence:5,verified:"Not verified",source:"https://ldh.la.gov/page/medicaid",notes:"Target for authority, procurement and MCO contract questions."}
  ]
};

for (const plan of TOOL_DATA.companies.LA) {
  if (V4_COMPANY_CONTACTS[plan.id]) plan.contacts = V4_COMPANY_CONTACTS[plan.id];
}

TOOL_DATA.sources.unshift(
  {name:"Louisiana high-acuity TAM planning framework",supports:"Editable risk-score, LOCUS/SPMI and ICF/IID domain ranges plus the meal-intervention funnel",date:"Planning model — July 2026",confidence:"Low-to-moderate",limitation:"LDH does not publish a unified current count for these overlapping clinical/payment acuity domains. Treat as interview scenario until replaced with claims.",url:"https://ldh.la.gov/page/medicaid"},
  {name:"Louisiana Medicaid enrollment context (superseded)",supports:"Approximately 1.5 million enrollees — the original 2025 TAM base, superseded in V9 by the June 2026 LDH trends report (~1.38M)",date:"2025 public estimate — superseded July 2026",confidence:"Historical",limitation:"Kept for lineage. Use the June 2026 LDH Monthly Enrollment Trends figure instead.",url:"https://apnews.com/article/ba2510481af6098cdacd2e7faa73e320"}
);


// VERSION 5 — VERIFIED NORTH CAROLINA EVIDENCE MODES
TOOL_DATA.evidenceBases = {
  jama: {
    label: "National high-acuity medically tailored meals",
    resultType: "gross",
    scenarios: {low:630, base:1103, high:1575},
    netReference: {low:280, base:753, high:1225},
    sourceLabel: "Berkowitz et al., JAMA Internal Medicine",
    description: "Meal-specific observational matched-cohort evidence for medically and socially complex adults. Gross medical reduction is the published net difference plus the approximately $350 PMPM program cost.",
    limitation: "Not randomized, not Louisiana- or North Carolina-specific, and not a disease-only cohort."
  },
  ncAdult: {
    label: "North Carolina HOP — nonpregnant adults",
    resultType: "net",
    scenarios: {low:16.37, base:161.27, high:306.16},
    sourceLabel: "NCDHHS Healthy Opportunities Pilots summative evaluation",
    description: "Verified net Medicaid spending reduction after including direct HOP services and administrative costs. Base estimate is $161.27 PMPM lower for nonpregnant adults; low/high use the confidence-interval bounds.",
    limitation: "Program-wide HRSN result across food, housing, transportation and safety. It is not food-only and not disease-specific."
  },
  ncOverall: {
    label: "North Carolina HOP — all participants",
    resultType: "net",
    scenarios: {low:17.32, base:164.49, high:311.67},
    sourceLabel: "NCDHHS Healthy Opportunities Pilots summative evaluation",
    description: "Verified net Medicaid spending reduction after including direct HOP services and administrative costs. Base estimate is $164.49 PMPM lower overall; low/high use the confidence-interval bounds.",
    limitation: "Program-wide HRSN result across all participant groups and service domains. It is not food-only and not condition-specific."
  }
};

TOOL_DATA.ncHopVerified = {
  enrolled: 31597,
  receivedAnyService: 27141,
  reportedFoodNeed: 23743,
  receivedFoodWithNeed: 20076,
  foodServiceRecipients: 22682,
  totalServices: 691504,
  totalClaims: 141123308.89,
  foodServices: 579179,
  foodClaims: 85858230.97,
  meanFoodServiceCost: 148.24,
  adultNetPmpm: 161.27,
  overallNetPmpm: 164.49,
  overallEdReductionPer1000Pm: 13.8,
  adultEdReductionPer1000Pm: 19.3,
  overallInpatientReductionPer1000Pm: 7.2,
  adultInpatientReductionPer1000Pm: 10.5,
  note: "Verified HOP program results. Do not convert these into disease-specific causal estimates."
};

TOOL_DATA.sources.unshift(
  {name:"North Carolina HOP Summative Evaluation — Spending",supports:"Net PMPM reduction after services and administration: $164.49 overall and $161.27 for nonpregnant adults, with confidence intervals",date:"Published June 2026",confidence:"High for reported evaluation result",limitation:"All HRSN domains combined; not food-only or disease-specific.",url:"https://www.ncdhhs.gov/healthy-opportunities-pilots-summative-evaluation-report/open"},
  {name:"North Carolina HOP Summative Evaluation — Enrollment and Food Services",supports:"31,597 enrolled; 27,141 received a service; 23,743 reported food need; 20,076 received food service; 22,682 total food-service recipients",date:"Published June 2026",confidence:"High",limitation:"Program totals do not identify diabetes-, heart-failure- or CKD-specific savings.",url:"https://www.ncdhhs.gov/healthy-opportunities-pilots-summative-evaluation-report/open"},
  {name:"North Carolina HOP Summative Evaluation — Utilization",supports:"Lower ED and inpatient use, with larger reductions for nonpregnant adults",date:"Published June 2026",confidence:"High for evaluation estimates",limitation:"Quasi-experimental program result; service-specific comparative analyses were exploratory.",url:"https://www.ncdhhs.gov/healthy-opportunities-pilots-summative-evaluation-report/open"}
);


// VERSION 6 — OFFICIAL NC POPULATION BASES + POSITIVE PITCH PRESETS
TOOL_DATA.populationBases = {
  NC: [
    {id:"nc_tailored_2025",label:"2025 Behavioral Health & I/DD Tailored Plan enrollment",count:253549,status:"Official statewide enrollment",source:"NC Medicaid SFY 2025 Annual Report",note:"Primary lower-bound proxy for North Carolina beneficiaries enrolled in the dedicated complex-needs plan model as of June 2025."},
    {id:"nc_tcm_2025",label:"2025 Tailored Care Management enrollment",count:309000,status:"Official statewide enrollment",source:"NC Medicaid SFY 2025 Annual Report",note:"Broader complex-needs upper-bound proxy; many beneficiaries have high-intensity needs."},
    {id:"nc_tailored_2024",label:"2024 expected Tailored Plan population",count:220000,status:"Official state estimate",source:"NC Medicaid SFY 2024 Annual Report",note:"Expected population around the July 2024 Tailored Plan launch."},
    {id:"nc_tcm_2024",label:"2024 Tailored Care Management eligible population",count:252980,status:"Official statewide eligibility",source:"NC Medicaid SFY 2024 Annual Report",note:"Broader 2024 care-management-eligible complex-needs population."},
    {id:"nc_hop_food",label:"HOP food-service recipients",count:22682,status:"Official evaluation count",source:"NC HOP Summative Evaluation",note:"People who received at least one food service; this is program participation, not the full addressable market."},
    {id:"nc_hop_all",label:"HOP enrolled participants",count:31597,status:"Official evaluation count",source:"NC HOP Summative Evaluation",note:"All enrolled HOP participants across service domains."},
    {id:"custom",label:"Custom payer-defined population",count:0,status:"User-entered / payer data required",source:"Payer claims",note:"Use when the plan supplies a claims-defined cohort."}
  ],
  LA: [
    {id:"la_claims",label:"MCO claims-defined high-cost nutrition cohort",count:0,status:"Payer data required",source:"Louisiana MCO claims",note:"Louisiana does not publish one comparable statewide complex-needs roll-up. Use payer claims for the actual market universe."},
    {id:"la_narrow_high_needs",label:"Expansion–High Needs rate cell (narrow category)",count:128,status:"Official narrow average-monthly count",source:"Healthy Louisiana SFY 2025 rate materials",note:"Not Louisiana's total high-acuity Medicaid population and not comparable with North Carolina Tailored Plans."},
    {id:"custom",label:"Custom payer-defined population",count:0,status:"User-entered / payer data required",source:"Payer claims",note:"Use when the account supplies a verified cohort count."}
  ]
};



// VERSION 7 — DISTINCT PROFITABILITY DESIGNS
// These are transparent commercial performance targets. They are not claims-derived forecasts.
TOOL_DATA.stateCohortProfitability = {
  NC: {
    complex: {
      label:"NC complex-needs profitability design",
      bcr:{low:1.25,base:1.55,high:1.90},
      design:{members:150,weeks:12,meals:10,mealCost:7.92,overhead:2},
      anchor:"Sits below the national high-acuity MTM net benchmark and above break-even.",
      limitation:"Commercial target created from program cost and desired return; replace with plan claims."
    },
    diabetes: {
      label:"NC diabetes targeted-support profitability design",
      bcr:{low:1.10,base:1.35,high:1.60},
      design:{members:200,weeks:16,meals:5,mealCost:7.70,overhead:2},
      anchor:"Lower-intensity service is used so the required net PMPM remains below the NC HOP adult program-wide benchmark.",
      limitation:"Not a diabetes-specific NC HOP outcome."
    },
    heart: {
      label:"NC heart-failure post-discharge profitability design",
      bcr:{low:1.25,base:1.80,high:2.25},
      design:{members:120,weeks:8,meals:10,mealCost:7.92,overhead:3},
      anchor:"Higher target reflects concentrated admission/readmission opportunity in a narrowly defined post-discharge population.",
      limitation:"Planning target; not a published heart-failure-only result."
    },
    ckd: {
      label:"NC pre-dialysis CKD profitability design",
      bcr:{low:1.15,base:1.50,high:1.85},
      design:{members:100,weeks:16,meals:7,mealCost:7.92,overhead:5},
      anchor:"Moderate meal intensity plus added renal oversight produces a distinct break-even and return requirement.",
      limitation:"Planning target; requires renal clinical validation and claims."
    }
  },
  LA: {
    complex: {
      label:"Louisiana high-cost complex-needs profitability design",
      bcr:{low:1.20,base:1.60,high:2.00},
      design:{members:150,weeks:12,meals:10,mealCost:10.00,overhead:3},
      anchor:"Uses a Louisiana commercial meal-price assumption and a high-cost claims-defined cohort.",
      limitation:"No unified public Louisiana cohort or claims result; payer validation is required."
    },
    diabetes: {
      label:"Louisiana diabetes avoidable-utilization profitability design",
      bcr:{low:1.10,base:1.28,high:1.55},
      design:{members:200,weeks:16,meals:5,mealCost:10.00,overhead:3},
      anchor:"Lower service intensity makes a diabetes pitch financially achievable without using the high-acuity MTM result for everyone.",
      limitation:"Planning target, not a Louisiana diabetes outcome."
    },
    heart: {
      label:"Louisiana heart-failure post-discharge profitability design",
      bcr:{low:1.25,base:1.80,high:2.30},
      design:{members:120,weeks:8,meals:10,mealCost:10.00,overhead:4},
      anchor:"A narrow post-discharge cohort supports a higher required return because admissions are the intended avoided-cost driver.",
      limitation:"Planning target, not a published Louisiana result."
    },
    ckd: {
      label:"Louisiana pre-dialysis CKD profitability design",
      bcr:{low:1.15,base:1.48,high:1.90},
      design:{members:100,weeks:16,meals:7,mealCost:10.00,overhead:6},
      anchor:"Renal oversight and seven weekly meals produce a distinct program cost and savings requirement.",
      limitation:"Planning target; claims and clinical oversight are required."
    }
  }
};

TOOL_DATA.pilotPresets = [
  {
    id:"nc_tailored_complex",label:"NC Tailored Plan — complex-needs nutrition pilot",state:"NC",cohort:"complex",
    populationBasis:"nc_tailored_2025",eligibleShare:2,members:150,weeks:12,meals:10,mealCost:7.92,overhead:2,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.25,base:1.55,high:1.90},funding:"nc_mco",
    intervention:"Medically tailored home-delivered meals",geo:"One Tailored Plan region",
    trigger:"Complex-needs members with a documented food or meal-preparation barrier and recent avoidable utilization",
    note:"Official 253,549-member Tailored Plan universe, editable 2% eligibility filter, 10 weekly meals and a 1.55x base performance target."
  },
  {
    id:"nc_tcm_intensity",label:"NC Tailored Care Management — high-intensity needs",state:"NC",cohort:"complex",
    populationBasis:"nc_tcm_2025",eligibleShare:1.5,members:180,weeks:16,meals:8,mealCost:7.92,overhead:3,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.15,base:1.45,high:1.75},funding:"nc_mco",
    intervention:"Medically tailored home-delivered meals",geo:"One TCM service region",
    trigger:"TCM members with high-intensity needs, nutrition risk and a verified access barrier",
    note:"Broader 309,000-member TCM universe, eight weekly meals and a lower 1.45x base target reflecting a care-management-led design."
  },
  {
    id:"nc_diabetes",label:"NC diabetes + documented food need",state:"NC",cohort:"diabetes",
    populationBasis:"nc_tailored_2025",eligibleShare:1.5,members:200,weeks:16,meals:5,mealCost:7.70,overhead:2,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.10,base:1.35,high:1.60},funding:"nc_care",
    intervention:"Healthy home-delivered meals",geo:"Regional proof market",
    trigger:"Adults with diabetes, documented food need, medication instability or recent avoidable utilization",
    note:"Five weekly meals lower the program PMPM. The 1.35x base target is deliberately lower than the post-discharge pitches."
  },
  {
    id:"nc_heart",label:"NC heart-failure post-discharge stabilization",state:"NC",cohort:"heart",
    populationBasis:"nc_tailored_2025",eligibleShare:0.75,members:120,weeks:8,meals:10,mealCost:7.92,overhead:3,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.25,base:1.80,high:2.25},funding:"nc_mco",
    intervention:"Medically tailored home-delivered meals",geo:"Hospital-to-home regional pathway",
    trigger:"Recent heart-failure discharge, sodium-sensitive need and inability to reliably obtain or prepare meals",
    note:"Shorter eight-week post-discharge intervention with a higher 1.80x target because avoided admissions/readmissions are the economic driver."
  },
  {
    id:"nc_ckd",label:"NC pre-dialysis CKD nutrition-risk pilot",state:"NC",cohort:"ckd",
    populationBasis:"nc_tcm_2025",eligibleShare:0.5,members:100,weeks:16,meals:7,mealCost:7.92,overhead:5,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.15,base:1.50,high:1.85},funding:"nc_provider",
    intervention:"Medically tailored home-delivered meals",geo:"Nephrology / value-based provider region",
    trigger:"Stage 3b–4 CKD, rising utilization, food barrier and renal-diet oversight",
    note:"Seven weekly meals and a 5% clinical-coordination allowance create a distinct 1.50x base target."
  },
  {
    id:"nc_hop_reactivation",label:"NC HOP food-service reactivation readiness",state:"NC",cohort:"complex",
    populationBasis:"nc_hop_food",eligibleShare:100,members:250,weeks:12,meals:14,mealCost:7.92,overhead:2,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.05,base:1.32,high:1.65},funding:"nc_reactivation",
    intervention:"Medically tailored home-delivered meals",geo:"Former HOP region / reactivation market",
    trigger:"Demonstrate service and network readiness against the documented food-service participant base",
    note:"Fourteen weekly meals create the highest program PMPM. The 1.32x base target produces net PMPM close to the verified NC HOP program-wide result."
  },
  {
    id:"la_high_acuity",label:"Louisiana MCO — high-cost complex-needs pilot",state:"LA",cohort:"complex",
    populationBasis:"la_claims",eligibleShare:0,members:150,weeks:12,meals:10,mealCost:10.00,overhead:3,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.20,base:1.60,high:2.00},funding:"la_mco_pilot",
    intervention:"Medically tailored home-delivered meals",geo:"Louisiana regional proof market",
    trigger:"Claims-defined high-cost members with recent acute use, a diet-sensitive condition and a documented food barrier",
    note:"Uses a $10 Louisiana commercial meal-price assumption and a 1.60x base performance target. Candidate count remains payer-defined."
  },
  {
    id:"la_diabetes",label:"Louisiana diabetes — avoidable-utilization pilot",state:"LA",cohort:"diabetes",
    populationBasis:"la_claims",eligibleShare:0,members:200,weeks:16,meals:5,mealCost:10.00,overhead:3,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.10,base:1.28,high:1.55},funding:"la_care_quality",
    intervention:"Healthy home-delivered meals",geo:"Louisiana regional proof market",
    trigger:"Diabetes plus food-access barrier, medication instability and recent ED or inpatient utilization",
    note:"Five weekly meals reduce program cost. The 1.28x base target is different from and more conservative than the high-acuity pitch."
  },
  {
    id:"la_heart",label:"Louisiana heart-failure — post-discharge pilot",state:"LA",cohort:"heart",
    populationBasis:"la_claims",eligibleShare:0,members:120,weeks:8,meals:10,mealCost:10.00,overhead:4,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.25,base:1.80,high:2.30},funding:"la_vbp",
    intervention:"Medically tailored home-delivered meals",geo:"Health-system discharge region",
    trigger:"Recent heart-failure discharge, elevated readmission risk and inability to follow a low-sodium meal plan",
    note:"Eight-week post-discharge design and 1.80x base target reflect a concentrated avoidable-admission opportunity."
  },
  {
    id:"la_ckd",label:"Louisiana pre-dialysis CKD — renal nutrition pilot",state:"LA",cohort:"ckd",
    populationBasis:"la_claims",eligibleShare:0,members:100,weeks:16,meals:7,mealCost:10.00,overhead:6,
    evidenceBasis:"pitch",scenario:"base",bcr:{low:1.15,base:1.48,high:1.90},funding:"la_vbp",
    intervention:"Medically tailored home-delivered meals",geo:"Nephrology / value-based provider region",
    trigger:"Stage 3b–4 CKD, rising utilization, a food barrier and renal-diet clinical oversight",
    note:"Seven weekly meals and added renal oversight create a unique 1.48x base target."
  },
  {
    id:"custom",label:"Custom configuration",state:"NC",cohort:"complex",
    populationBasis:"custom",eligibleShare:0,members:150,weeks:12,meals:10,mealCost:7.92,overhead:2,
    evidenceBasis:"custom",scenario:"custom",bcr:{low:1.00,base:1.00,high:1.00},funding:"nc_mco",
    intervention:"Medically tailored home-delivered meals",geo:"Custom market",
    trigger:"Enter the account-specific trigger",
    note:"Fully editable mode. Enter payer pricing, claims, service intensity and a custom gross PMPM."
  }
];

TOOL_DATA.sources.unshift({
  name:"Version 7 profitability-design methodology",
  supports:"Distinct state/cohort and pitch-specific gross PMPM, net PMPM and benefit-cost targets",
  date:"Commercial planning model — July 2026",
  confidence:"Planning assumption",
  limitation:"The tool calculates the performance required to produce a positive return. It does not claim that the payer will realize that result.",
  url:"https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2730768"
});


TOOL_DATA.states.NC.cohorts.complex.affected = 253549;
TOOL_DATA.states.NC.cohorts.complex.sourceNote = "Official 2025 lower-bound complex-needs proxy: 253,549 Tailored Plan members. A broader official TCM upper bound is 309,000. Neither count equals the final meal-eligible population; apply clinical, food-need, utilization and operational filters.";
TOOL_DATA.sources.unshift(
  {name:"NC Medicaid SFY 2025 Annual Report — Tailored Plans and TCM",supports:"253,549 Tailored Plan members as of June 2025 and 309,000 Tailored Care Management members",date:"SFY 2025",confidence:"High",limitation:"Complex-needs population proxies, not a count of members eligible for meals.",url:"https://medicaid.ncdhhs.gov/medicaid-state-fiscal-year-2025-report/download?attachment="},
  {name:"NC Medicaid SFY 2024 Annual Report — Tailored Plans and TCM",supports:"Approximately 220,000 expected Tailored Plan members and 252,980 TCM-eligible members",date:"SFY 2024",confidence:"High",limitation:"Launch-era estimate and broader care-management eligibility, not meal-program eligibility.",url:"https://medicaid.ncdhhs.gov/medicaid-annual-report-sfy-2024-english/open"}
);


// VERSION 8 — HIGH-ACUITY SERVICE-NEED SCREENER
TOOL_DATA.highAcuityScreen = {
  questions: [
    {
      id:"acute30", domain:"Medical urgency", points:5, hard:"acute",
      question:"Has the member had an unplanned hospital admission, emergency visit or facility discharge within the last 30 days?",
      proof:"Shows an immediate transition or deterioration risk."
    },
    {
      id:"repeatUtil", domain:"Medical urgency", points:4, hard:"acute",
      question:"Has the member had two or more emergency visits, or at least one unplanned inpatient admission, during the last six months?",
      proof:"Shows repeated potentially avoidable acute utilization."
    },
    {
      id:"dietSensitive", domain:"Medical urgency", points:4, hard:"clinical",
      question:"Does the member have a serious condition for which food is part of the treatment plan, such as heart failure, advanced CKD, uncontrolled diabetes or malnutrition?",
      proof:"Connects the nutrition intervention directly to the medical need."
    },
    {
      id:"clinicalInstability", domain:"Medical urgency", points:3, hard:"clinical",
      question:"Is there current clinical instability, such as worsening symptoms, rapid weight change, abnormal labs, medication problems or missed follow-up care?",
      proof:"Shows the member may deteriorate without timely support."
    },
    {
      id:"foodShortage", domain:"Nutrition / SDOH barrier", points:3, hard:"barrier",
      question:"During the last 30 days, has the member skipped meals, reduced portions or run out of food because appropriate food was unavailable or unaffordable?",
      proof:"Documents an active food-access barrier."
    },
    {
      id:"cannotPrepare", domain:"Nutrition / SDOH barrier", points:5, hard:"barrier",
      question:"Is the member unable to shop for or prepare the prescribed food because of physical, cognitive, behavioral-health or caregiver limitations?",
      proof:"Shows why education or a food referral alone may not solve the problem."
    },
    {
      id:"dietUnavailable", domain:"Nutrition / SDOH barrier", points:3, hard:"barrier",
      question:"Is the food currently available to the member inconsistent with the prescribed diet?",
      proof:"Shows a gap between the clinical plan and the food the member can actually access."
    },
    {
      id:"transportBarrier", domain:"Nutrition / SDOH barrier", points:2, hard:"",
      question:"Does a transportation or mobility barrier prevent reliable access to groceries or prepared food?",
      proof:"Shows why home delivery may be more appropriate than a retail referral."
    },
    {
      id:"transitionRisk", domain:"Nutrition / SDOH barrier", points:3, hard:"acute",
      question:"Is the member returning home from a hospital, skilled-nursing facility, correctional setting, shelter or another unstable transition?",
      proof:"Identifies a period when meal access and clinical stability are especially fragile."
    },
    {
      id:"clinicalReferral", domain:"Intervention fit", points:3, hard:"fit",
      question:"Has a clinician, dietitian or care manager documented that structured meal support is medically appropriate?",
      proof:"Provides clinical support for the service level."
    },
    {
      id:"deliveryReady", domain:"Intervention fit", points:3, hard:"delivery",
      question:"Does the member have a safe delivery location, reliable contact method and the ability to store and reheat the meals?",
      proof:"Confirms that the proposed service can be delivered successfully."
    },
    {
      id:"memberWilling", domain:"Intervention fit", points:2, hard:"consent",
      question:"Is the member willing to receive the meals and participate in follow-up?",
      proof:"Confirms member choice and likely engagement."
    },
    {
      id:"noDuplicate", domain:"Intervention fit", points:1, hard:"",
      question:"Has the payer confirmed that the member is not already receiving a duplicative meal or nutrition benefit?",
      proof:"Supports appropriate use of funds and clean attribution."
    },
    {
      id:"deliveryBlocker", domain:"Delivery blocker", points:-4, hard:"blocker",
      question:"Is unstable housing, interpersonal safety, lack of refrigeration or another condition likely to make home delivery unsafe or unreliable?",
      proof:"Identifies when the need is real but a different service or stabilization step is required first."
    }
  ],
  tiers: {
    high: {
      label:"Likely high-priority MTM profile",
      service:"Clinically reviewed medically tailored meals, generally 8–12 weeks with intensity based on the care plan.",
      next:"Confirm clinical authorization, payer eligibility, delivery coverage and baseline utilization."
    },
    review: {
      label:"Clinical review / targeted meal-support profile",
      service:"Consider healthy meals, fewer weekly meals, nutrition support or a short stabilization period after clinical review.",
      next:"Clarify the missing medical or SDOH evidence before selecting service intensity."
    },
    sdoh: {
      label:"Documented SDOH need — lower-intensity service may fit",
      service:"Consider food boxes, produce support, transportation, SNAP/community navigation or healthy meals rather than intensive MTM.",
      next:"Match the intervention to the primary barrier and avoid over-serving."
    },
    blocked: {
      label:"Service need identified, but home delivery is not ready",
      service:"Resolve housing, storage, contact or safety barriers, or use an alternate delivery/community model.",
      next:"Create a stabilization and alternate-service plan before home-delivered meals."
    },
    incomplete: {
      label:"Insufficient information",
      service:"No service level should be selected yet.",
      next:"Resolve the unknown medical, nutrition-barrier and delivery-readiness questions."
    },
    low: {
      label:"Intensive meal service not currently supported",
      service:"Continue routine care management and reassess after a new clinical or social trigger.",
      next:"Document why a lower-cost resource or no current intervention is appropriate."
    }
  },
  safeguards: [
    "Do not use this score as the sole Medicaid eligibility or authorization decision.",
    "Do not enter names, Medicaid IDs, diagnoses tied to an identifiable person or other PHI in this local prototype.",
    "A high score proves a need for clinical review; it does not guarantee savings.",
    "A social barrier without clinical urgency may justify support, but not necessarily intensive medically tailored meals."
  ]
};


// ------------------------------------------------------------------
// VERSION 9 — LIVE MARKET REFRESH (verified July 16, 2026)
// State leadership, enrollment, program-status and account-map updates
// sourced the night before use. Every name carries a source and a
// last-verified date; unverifiable roles remain "Research required."
// ------------------------------------------------------------------

// 9.1 — Louisiana enrollment refresh: ~1.5M was accurate in Jan 2026 but is
// stale. LDH's June 2026 Monthly Enrollment Trends report shows 1,378,186
// unduplicated enrollees, down ~198K year over year.
TOOL_DATA.louisianaHighAcuityPlanning.totalMedicaid = 1380000;
TOOL_DATA.louisianaHighAcuityPlanning.note =
  "CDPS >1.00, LOCUS 3+ and ICF/IID acuity are different overlapping domains. The ranges are planning estimates rather than a published unified Louisiana count. TAM base refreshed to ~1.38M unduplicated enrollees (LDH Monthly Enrollment Trends, June 2026); enrollment has declined ~198K over the trailing year, which itself pressures MCO revenue and raises the value of avoidable-cost programs.";
TOOL_DATA.states.LA.cohorts.complex.affected = 4140;
TOOL_DATA.states.LA.cohorts.complex.sourceNote =
  "Interview planning estimate: approximately 4,100 Louisiana candidates from the high-acuity funnel applied to ~1.38M current enrollees (LDH, June 2026) — not a published Medicaid headcount. Replace it with payer claims. The cost benchmark is based on the untreated matched cohort in Berkowitz et al.";

// 9.2 — Louisiana market summary refresh: UHC exit + ACLA covered-benefit signal.
TOOL_DATA.states.LA.summary =
  "Near-term strategy should focus on an MCO-funded pilot, care-management or quality budget, or a risk-bearing provider partnership. Two current market facts sharpen the play: (1) UnitedHealthcare exited Louisiana Medicaid (wind-down completed March 31, 2026), so roughly 330,000 members were reassigned to the five remaining plans — a live onboarding and risk-stratification window; (2) AmeriHealth Caritas Louisiana's market president publicly stated in the plan's Fall 2025 member newsletter that LDH permitted the plan to make medically tailored meals a covered benefit — direct evidence that a Louisiana MTM payment path can be approved; verify current authority in discovery. A broad statewide Medicaid nutrition authority is still not confirmed in this tool.";

// 9.3 — North Carolina HOP status refresh: partial funding restored July 2026.
TOOL_DATA.states.NC.summary =
  "North Carolina created the Healthy Opportunities Pilots under a Section 1115 demonstration. Food services and a published fee schedule provide a concrete model. Operations were suspended after July 1, 2025 when the General Assembly did not provide continued funding — but the state budget passed around July 1, 2026 appropriates $25M one-time ($9M state + $16M federal match) to resume the pilots at reduced scale; the restart timeline and distribution rules were still unsettled as of mid-July 2026. Treat HOP as proven architecture entering a live but underfunded reactivation window — not as broadly available revenue yet.";
(() => {
  const hop = TOOL_DATA.states.NC.funding.find(r => r.id === "nc_hop");
  if (hop) hop.caution = "Operations were suspended July 1, 2025 when state funding lapsed. A $25M one-time appropriation (July 2026 budget) is intended to resume the pilots at reduced scale, but restart rules and timing were unsettled as of mid-July 2026. Do not pitch HOP as active payment until services are formally restarted.";
  const react = TOOL_DATA.states.NC.funding.find(r => r.id === "nc_reactivation");
  if (react) {
    react.speed = 3;
    react.description = "Prepare contracting, service, data and geographic readiness for the funded restart: the July 2026 state budget restored $25M one-time ($9M state + $16M federal) — far below the $80M ask, so the resumed pilot will be smaller and vendor selection more competitive.";
    react.caution = "Funding is one-time and materially below the original program scale. Reactivation mechanics (regions, service mix, network lead allocations) were still being defined as of mid-July 2026.";
  }
})();

// 9.4 — State agency leadership (verified against official pages July 16, 2026).
TOOL_DATA.companies.LA = TOOL_DATA.companies.LA.filter(c => c.id !== "la_medicaid");
TOOL_DATA.companies.LA.push({
  id: "la_medicaid", name: "Louisiana Medicaid / Louisiana Department of Health", parent: "State agency",
  accountSource: "https://ldh.la.gov/page/medicaid",
  hook: "Leadership refreshed July 16, 2026 from official LDH pages. Enrollment ~1.38M and falling (June 2026 trends report) — avoidable-cost programs get CFO attention in a shrinking-revenue year.",
  contacts: [
    {role:"LDH Secretary — state executive", coversRole:"", name:"Bruce D. Greenstein", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://ldh.la.gov/office-of-the-secretary", notes:"Appointed April 2025 (announced by the Governor 2025-04-11), Senate-confirmed June 2025. Previously ran the agency 2010–2013. Sets department priorities; not the day-to-day Medicaid contracting owner."},
    {role:"Louisiana Medicaid Executive Director", coversRole:"", name:"Seth J. Gold", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf", notes:"Named November 2025 (LDH release); shown as Medicaid Executive Director on the official org chart updated 06/01/2026. ~10 years federal health-policy background (House Energy & Commerce; Sen. Portman health advisor). Primary state Medicaid policy owner."},
    {role:"Medicaid Deputy Director — Program Ops, Compliance & Pharmacy (interim)", coversRole:"", name:"Brandon Bueche", quality:"Publicly verified", status:"Identified", influence:4, verified:"2026-07-16", source:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf", notes:"Official org chart (06/01/2026). Managed-care program operations most plausibly sit in this portfolio — that mapping is an inference to validate, not a stated fact."},
    {role:"Medicaid Deputy Director — Policy, Waiver & Public Affairs", coversRole:"", name:"Tangela Womack", quality:"Publicly verified", status:"Identified", influence:4, verified:"2026-07-16", source:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf", notes:"Official org chart (06/01/2026). Relevant to any waiver / in-lieu-of-services nutrition authority question."},
    {role:"Medicaid CFO", coversRole:"", name:"Michael Devall", quality:"Publicly verified", status:"Identified", influence:4, verified:"2026-07-16", source:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf", notes:"Managed-care finance sits under the Medicaid CFO (Teresa Bravo manages the function). Economics-side validation path for any rate or ILOS conversation."}
  ]
});
(() => {
  const nc = TOOL_DATA.companies.NC.find(c => c.id === "nc_medicaid");
  if (nc) {
    nc.hook = "Leadership refreshed July 16, 2026. NC Medicaid serves 3M+ members; HOP received a $25M one-time restart appropriation in the July 2026 budget.";
    nc.contacts = [
      {role:"NCDHHS Secretary — state executive", name:"Devdutta \"Dev\" Sangvai, MD", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.ncdhhs.gov/about/leadership", notes:"Sworn in January 2025; confirmed still current on the official leadership page July 16, 2026."},
      {role:"Deputy Secretary, NC Medicaid (State Medicaid Director)", name:"Melanie Bush", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.ncdhhs.gov/news/press-releases/2026/04/21/ncdhhs-names-melanie-bush-deputy-secretary-nc-medicaid", notes:"Named April 21, 2026 after Jay Ludlam's departure (Feb 2026); General Assembly confirmation was still pending at appointment. Ran managed-care transformation and expansion as NC Medicaid COO — the decision owner for the HOP restart."}
    ];
  }
})();

// 9.5 — Louisiana MCO account maps: local plan leadership verified July 16, 2026
// against official plan releases, state documents and current press. Where a
// seat could not be verified, the row says so — no name is ever guessed.
const V9_LA_COMPANY_UPDATES = {
  la_aetna: {
    hook: "Aetna Better Health of Louisiana already funds food-as-medicine: a $400K 'Food is Medicine' mobile-market collaboration with Goodr (CVS Health release, May 2026). Its Medicaid contract was canceled and then restored by LDH in December 2025. Pitch medically tailored meals as the clinical tier above the existing produce program — this is not a cold concept for this plan.",
    contacts: [
      {role:"Plan CEO — Louisiana", coversRole:"Local Medicaid plan president / market CEO", name:"Bridget Galatas", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.cvshealth.com/news/community/aetna-better-health-of-louisiana-collaborates-with-goodr.html", notes:"Quoted as CEO in the May 2026 CVS Health Goodr release; ~1 year in seat; prior Elevance GBD market CFO and Molina plan president. Executive sponsor of the plan's food-as-medicine program. LinkedIn profile located."},
      {role:"Chief Medical Officer — Louisiana", coversRole:"Chief medical officer / clinical decision-maker", name:"Ann Kay Logarbo, MD, FAAP", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.ajmc.com/view/population-health-reimagined-through-integrated-care", notes:"Confirmed current plan CMO (AJMC event coverage + LinkedIn). Pediatrician, LSU Med. Predecessor Dr. Madelyn Meyn moved up to Regional CMO — useful escalation/champion, not the plan seat."},
      {role:"Regional CMO (escalation path)", coversRole:"", name:"Madelyn M. Meyn, MD, MBA", quality:"Company-level context — verify", status:"Identified", influence:3, verified:"2026-07-16", source:"https://www.linkedin.com/in/ann-kay-logarbo-md-faap-0ab18b23/", notes:"Prior ABHLA plan CMO (c. 2019–2022), now Executive Director / Regional CMO at Aetna — knows the Louisiana book; strong second door if the plan CMO stalls."},
      {role:"Aetna President — corporate context", coversRole:"", name:"Steve Nelson", quality:"Publicly verified", status:"Identified", influence:2, verified:"2024-11-06 appointment; recheck", source:"https://apnews.com/article/bf26a0671d28f71da1c650ebbdbba32d", notes:"Corporate context only. Do not treat as the Louisiana buying contact."},
      {role:"Provider experience / network-management route", coversRole:"", name:"Aetna Better Health of Louisiana Provider Experience", quality:"Public plan team", status:"Identified", influence:3, verified:"Plan website", source:"https://www.aetnabetterhealth.com/louisiana/providers/", notes:"Routing team. Published plan line: 1-855-242-0802."}
    ]
  },
  la_amerihealth: {
    hook: "HOTTEST DOOR IN THE STATE: in the plan's Fall 2025 member newsletter, Market President Kyle Viator wrote that ACLA has run medically tailored meals for years, saw reduced avoidable readmissions, and that LDH recently permitted the plan to make MTM a COVERED BENEFIT — a live expansion window. Lead here; verify current benefit status in discovery.",
    contacts: [
      {role:"Market President — Louisiana", coversRole:"Local Medicaid plan president / market CEO", name:"Kyle Viator", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.amerihealthcaritasla.com/about/news/060425-acla-less-paperwork-and-more-care", notes:"Quoted as Market President in the plan's June 2025 release; Louisiana native; previously CEO of Aetna Better Health of Louisiana. Publicly championed MTM in the Fall 2025 newsletter. LinkedIn profile located."},
      {role:"Market Chief Medical Officer — Louisiana", coversRole:"Chief medical officer / clinical decision-maker", name:"Rodney Wise, MD", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.amerihealthcaritasla.com/about/news/060425-acla-less-paperwork-and-more-care", notes:"Quoted as Market CMO in the same official release. OB/GYN; former Louisiana Medicaid medical director — knows the state authority questions cold. LinkedIn profile located."},
      {role:"Director, Market Clinical Population Health", coversRole:"Care-management / population-health leader", name:"Suconda Smith, RN, BSN", quality:"Company-level context — verify", status:"Identified", influence:4, verified:"2026-07 (prior verification); recheck", source:"https://www.amerihealthcaritasla.com/", notes:"Runs day-to-day clinical population health — the referral-pipeline owner for an MTM program. LinkedIn profile located; reverify title before outreach. Published plan line: 1-888-922-0007."},
      {role:"Corporate Director, Health Equity — national context", coversRole:"", name:"Danielle Brooks, JD", quality:"Company-level context — verify", status:"Identified", influence:3, verified:"2026-07 (prior verification); recheck", source:"https://www.amerihealthcaritas.com/", notes:"National HRSN strategy owner at the parent — context for how the LA covered-benefit expansion fits corporate strategy."}
    ]
  },
  la_healthyblue: {
    hook: "LEADERSHIP RESET IN PROGRESS: Dr. Christy Valentine Theard — the plan's public food-as-medicine champion — left in March 2026 to run Anthem BCBS Medicaid New York. Heather Leschinsky (promoted from plan COO) was named President & CEO on March 26, 2026. A new president's first year is exactly when new clinical-program agendas get set; the plan already runs food-insecurity screening.",
    contacts: [
      {role:"President & CEO — Healthy Blue Louisiana", coversRole:"Local Medicaid plan president / market CEO", name:"Heather Leschinsky", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://healthcarejournalbr.com/news/healthy-blue-louisiana-names-heather-leschinsky-president-and-ceo", notes:"Named President & CEO March 26, 2026 (Healthcare Journal of Baton Rouge); promoted from Health Plan COO; 20+ years Medicaid managed care. Succeeds Dr. Christy Valentine Theard (now Anthem NY Medicaid) — do not pitch Valentine Theard as the LA leader."},
      {role:"Chief Medical Officer — verify currency", coversRole:"Chief medical officer / clinical decision-maker", name:"Cheryll Bowers-Stephens, MD, MBA", quality:"Company-level context — verify", status:"Identified", influence:4, verified:"2026-07-16 (LinkedIn only)", source:"https://www.linkedin.com/in/cheryll-bowers-stephensmdmba-410b0b6/", notes:"LinkedIn headline shows Healthy Blue LA CMO; long-tenured child/adolescent psychiatrist, former LA Office of Behavioral Health assistant secretary. No 2025–26 official corroboration found and a new president arrived March 2026 — verify before outreach. Published plan line: 1-844-521-6942."},
      {role:"Health Equity Director", coversRole:"Quality and health-equity leader", name:"Karen Kosinski", quality:"Company-level context — verify", status:"Identified", influence:4, verified:"2026-07 (prior verification); recheck", source:"https://www.myhealthybluela.com/", notes:"Owns the SDOH/HRSN framing a food-as-medicine pitch plugs into. LinkedIn profile located."},
      {role:"Elevance Health President & CEO — corporate context", coversRole:"", name:"Gail K. Boudreaux", quality:"Publicly verified", status:"Identified", influence:2, verified:"Current corporate context; recheck", source:"https://www.elevancehealth.com/who-we-are/leadership.html", notes:"Not presumed to be the Louisiana Medicaid buyer."}
    ]
  },
  la_humana: {
    hook: "Plan President Michelle Alletto is a former Louisiana Department of Health DEPUTY SECRETARY — she knows exactly how state nutrition authority gets approved. Humana announced $1M+ of Louisiana health-outcomes investments in May 2026. The plan CMO seat is not publicly named (launch CMO departed ~2025) — the phone path is the honest route to that name.",
    contacts: [
      {role:"Plan President — Humana Healthy Horizons in Louisiana", coversRole:"Local Medicaid plan president / market CEO", name:"Michelle Alletto", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://policy.humana.com/news-and-resources/news-press/2026/humana-invests-more-than--1-million-to-advance-health-outcomes", notes:"Named as plan president in Humana's official May 13, 2026 release; also appears in LDH accountability documents (April 2026). Former LDH deputy secretary and Texas HHS chief program officer — a state-authority-literate buyer."},
      {role:"Chief Medical Officer — not publicly named", coversRole:"Chief medical officer / clinical decision-maker", name:"Not publicly verifiable — get by phone", quality:"Research required", status:"Unknown", influence:5, verified:"Searched 2026-07-16", source:"https://www.humana.com/medicaid/louisiana", notes:"Launch CMO Dr. Shelly Gupta departed ~2025; successor undisclosed in any public source. Path: call 1-800-448-3810 and ask for the plan Medical Director for clinical program review. Do not guess a name."},
      {role:"VP/Director, LA Medicaid Utilization Management & Clinical", coversRole:"Care-management / population-health leader", name:"Nicole Thibodeaux", quality:"Company-level context — verify", status:"Identified", influence:4, verified:"2026-07 (prior verification); recheck", source:"https://www.humana.com/medicaid/louisiana", notes:"Documented standing clinical-operations decision-maker, Louisiana-based. Reverify title before outreach."},
      {role:"Humana President & CEO — corporate context", coversRole:"", name:"Jim Rechtin", quality:"Publicly verified", status:"Identified", influence:2, verified:"Current corporate context; recheck", source:"https://humana.gcs-web.com/corporate-governance/management", notes:"Corporate context only."}
    ]
  },
  la_lhcc: {
    hook: "BOTH TOP SEATS IN FLUX — AND THEY ALREADY BUY MEALS: LHCC (largest plan, ~530K members pre-UHC-exit) has delivered medically tailored meals for years (post-discharge + a prenatal program launched Dec 2025). CEO Jamie Schlottman announced retirement May 14, 2026 and Centene posted BOTH the Plan President & CEO and CMO jobs in May 2026. New leadership means new program agendas — time the approach to the announcements.",
    contacts: [
      {role:"Plan President & CEO — seat in transition", coversRole:"Local Medicaid plan president / market CEO", name:"Jamie Schlottman (retiring; announced 2026-05-14)", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.beckerspayer.com/executive-moves/centenes-louisiana-medicaid-ceo-to-retire/", notes:"15+ years at the plan. Centene posted the Plan President & CEO role (Covington, LA). COO Joe Sullivan reportedly serving as interim CEO — that claim traces only to broker-site aggregation; corroborate before quoting."},
      {role:"Chief Medical Officer — verify (backfill posted)", coversRole:"Chief medical officer / clinical decision-maker", name:"Stewart T. Gordon, MD, FAAP", quality:"Company-level context — verify", status:"Identified", influence:5, verified:"2026-07-16", source:"https://jobs.centene.com/us/en/jobs/1637124/chief-medical-officer/", notes:"Last official CMO mention Dec 2023; Centene posted the LHCC CMO job May 8, 2026 ($264K–$502K, Baton Rouge hybrid) — treat the seat as being backfilled. Pediatrician; ex-LA Medicaid. Published plan line: 1-866-595-8133 (Medical Management)."},
      {role:"SVP, Population Health & Clinical Operations", coversRole:"Care-management / population-health leader", name:"Dana Lawson, DNP, MHA, RN", quality:"Company-level context — verify", status:"Identified", influence:5, verified:"2026-07 (prior verification); recheck", source:"https://www.louisianahealthconnect.com/", notes:"Owns the existing medically-tailored-meals program (launched the Dec 2025 prenatal MTM program). The strongest program-level entry point while the CEO/CMO seats turn over. No public LinkedIn located — warm intro or plan line."},
      {role:"Centene CEO — corporate context", coversRole:"", name:"Sarah London", quality:"Publicly verified", status:"Identified", influence:2, verified:"2026 corporate context", source:"https://www.centene.com/who-we-are/leadership.html", notes:"Corporate context only."}
    ]
  },
  la_uhc: {
    exited: true,
    hook: "EXITED LOUISIANA MEDICAID: LDH did not renew UnitedHealthcare for 2026 (drug-pricing document dispute involving Optum Rx and the AG); a 90-day extension ran through March 31, 2026 and the plan stopped serving members April 1, 2026. Its ~330,000 members were reassigned to the five remaining plans — which means every remaining plan just absorbed a wave of new, un-risk-stratified members with acute food-insecurity needs. That reassignment is a selling trigger at the OTHER five plans, not here.",
    contacts: [
      {role:"Market status — do not prospect", coversRole:"", name:"Exited Louisiana Medicaid effective April 1, 2026", quality:"Publicly verified", status:"Identified", influence:1, verified:"2026-07-16", source:"https://ldh.la.gov/medicaid/medicaid2026", notes:"Official LDH 'Changes to Medicaid Health Plans in 2026' page. Kept in this map only so the exit and the 330K-member reassignment trigger are visible. Do not spend cycles here."}
    ]
  }
};
for (const plan of TOOL_DATA.companies.LA) {
  const u = V9_LA_COMPANY_UPDATES[plan.id];
  if (u) { plan.contacts = u.contacts; plan.hook = u.hook; if (u.exited) plan.exited = true; }
}
(() => {
  const uhc = TOOL_DATA.companies.LA.find(c => c.id === "la_uhc");
  if (uhc) uhc.name = "UnitedHealthcare Community Plan of Louisiana — EXITED 4/1/2026";
})();

// 9.6 — North Carolina plan account maps (verified July 16, 2026).
// WellCare of NC and Carolina Complete Health merged April 1, 2026 under the
// Carolina Complete Health brand (980,000+ members) — NC went from five
// Standard Plans to four, so the WellCare entry is folded into CCH below.
TOOL_DATA.companies.NC = TOOL_DATA.companies.NC.filter(c => c.id !== "nc_wellcare");
const V9_NC_COMPANY_UPDATES = {
  nc_amerihealth: {
    hook: "Market President Heidi Chan (in seat since 2019, re-confirmed in May 2026 press) and CMO Dr. Steve Spalding (named in the plan's own January 2026 Provider Digest) are both publicly verified — a fully named buying pair.",
    contacts: [
      {role:"Market President — North Carolina", coversRole:"Local Medicaid plan president / market CEO", name:"Heidi Chan", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.businesswire.com/news/home/20190926005134/en/AmeriHealth-Caritas-Appoints-Heidi-Chan-Market-President", notes:"Appointed 2019; quoted as market president in May 2026 NC Community College System announcement. Ex-Market President, Blue Cross Complete of Michigan."},
      {role:"Chief Medical Officer — North Carolina", coversRole:"Chief medical officer / clinical decision-maker", name:"Steve Spalding, MD", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.amerihealthcaritasnc.com/provider/newsletters-and-updates/provider-digests/2026/january", notes:"Named CMO in the plan's own January 2026 Provider Digest. Same source names Melissa Nichols, VP Provider Network Management."}
    ]
  },
  nc_healthyblue: {
    hook: "Blue Cross NC took over administering Healthy Blue (and the Medicare D-SNP) effective January 1, 2026, shrinking the legacy Amerigroup/Elevance administrative role. Healthy Blue is the state's largest Medicaid plan (500K+ members) and launched the statewide foster-care specialty plan in Dec 2024.",
    contacts: [
      {role:"CEO — Healthy Blue (Blue Cross NC Medicaid)", coversRole:"Local Medicaid plan president / market CEO", name:"Angela Boykin", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://mediacenter.bcbsnc.com/news/angela-boykin-named-ceo-of-blue-cross-ncs-medicaid-plan", notes:"CEO since September 2023 (official Blue Cross NC release); at Blue Cross NC since 2004. LinkedIn current."},
      {role:"Chief Medical Officer — not publicly named", coversRole:"Chief medical officer / clinical decision-maker", name:"Not publicly verifiable", quality:"Research required", status:"Unknown", influence:5, verified:"Searched 2026-07-16", source:"https://www.healthybluenc.com/", notes:"No named Healthy Blue NC CMO in public sources or the provider manual. Honest gap — research via provider relations or press, do not guess."},
      {role:"Blue Cross NC President & CEO — corporate context", coversRole:"", name:"Tunde Sotunde", quality:"Publicly verified", status:"Identified", influence:2, verified:"2026-07-15", source:"https://www.bluecrossnc.com/about-us/leadership", notes:"Corporate context only."}
    ]
  },
  nc_uhc: {
    hook: "Plan CEO Anita Bachmann is publicly active in the market — most recently the February 2026 $715K UNCG School of Nursing investment. Unlike Louisiana, UHC remains an active NC Standard Plan.",
    contacts: [
      {role:"CEO — UnitedHealthcare Community Plan of NC", coversRole:"Local Medicaid plan president / market CEO", name:"Anita Bachmann", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.unitedhealthgroup.com/newsroom/2024/2024-08-14-uhc-north-carolina-awarded-ncqa-health-equity-accreditation.html", notes:"Quoted as plan CEO in UHG newsroom (2024) and February 2026 UNCG investment coverage; LinkedIn current."},
      {role:"Chief Medical Officer — not publicly named", coversRole:"Chief medical officer / clinical decision-maker", name:"Not publicly verifiable", quality:"Research required", status:"Unknown", influence:5, verified:"Searched 2026-07-16", source:"https://www.uhc.com/communityplan/north-carolina", notes:"UHC does not publish a named NC Community Plan CMO. Honest gap — do not guess."}
    ]
  },
  nc_cch: {
    hook: "MERGER JUST RESHAPED THE MARKET: WellCare of NC and Carolina Complete Health combined April 1, 2026 under the CCH brand — a provider-led MCO serving 980,000+ members. New combined organizations re-evaluate vendor programs; the plan CMO seat post-merger is not yet publicly named.",
    contacts: [
      {role:"CEO — Carolina Complete Health (combined entity)", coversRole:"Local Medicaid plan president / market CEO", name:"Chris Paterson, PhD", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://investors.centene.com/2026-04-02-Carolina-Complete-Health-and-WellCare-of-North-Carolina-Combine-to-Form-Provider-Led-Managed-Care-Organization", notes:"Named CEO of the combined CCH + WellCare NC organization in the April 2, 2026 merger release."},
      {role:"Chief Medical Officer — combined entity, verify", coversRole:"Chief medical officer / clinical decision-maker", name:"Eugenie M. Komives, MD, FAAFP (pre-merger WellCare NC CMO)", quality:"Company-level context — verify", status:"Identified", influence:4, verified:"2026-07-16", source:"https://medicaid.ncdhhs.gov/amh-technical-advisory-group-meeting-june-10-2025-presentation/download?attachment=", notes:"WellCare NC CMO since 2019, still listed in a June 2025 NC Medicaid document; her role in the combined entity is unverified and no post-merger CMO has been announced. Pre-merger WellCare president Troy Hildreth's post-merger role also unstated."},
      {role:"Centene CEO — corporate context", coversRole:"", name:"Sarah London", quality:"Publicly verified", status:"Identified", influence:2, verified:"2026-07-15", source:"https://www.centene.com/who-we-are/leadership.html", notes:"Corporate context only."}
    ]
  }
};
for (const plan of TOOL_DATA.companies.NC) {
  const u = V9_NC_COMPANY_UPDATES[plan.id];
  if (u) { plan.contacts = u.contacts; plan.hook = u.hook; }
}
(() => {
  const cch = TOOL_DATA.companies.NC.find(c => c.id === "nc_cch");
  if (cch) { cch.name = "Carolina Complete Health (combined with WellCare of NC, 4/1/2026)"; cch.parent = "Centene / NC Medical Society provider-led partnership"; }
})();

TOOL_DATA.sources.unshift(
  {name:"Louisiana MCO local-leadership verification sweep", supports:"Named plan presidents/CEOs and CMOs for the five active Healthy Louisiana MCOs, with per-row source links, verified dates and confidence labels; LHCC leadership transition; Healthy Blue leadership change", date:"Verified July 16, 2026", confidence:"Per-row — see each stakeholder entry", limitation:"Plan leadership moves fast (two LA seats changed in March–May 2026 alone). Reverify any name immediately before outreach.", url:"https://ldh.la.gov/medicaid/medicaid2026"},
  {name:"Carolina Complete Health + WellCare of NC merger", supports:"April 1, 2026 combination under the CCH brand; 980,000+ members; provider-led structure; NC now has four Standard Plans", date:"April 2, 2026", confidence:"High — Centene investor release + NC Medicaid provider notice", limitation:"Post-merger clinical leadership not yet announced.", url:"https://investors.centene.com/2026-04-02-Carolina-Complete-Health-and-WellCare-of-North-Carolina-Combine-to-Form-Provider-Led-Managed-Care-Organization"},
  {name:"CookUnity for Healthcare — public capability anchors", supports:"Medically tailored meal programs (Heart, Diabetes, Cancer Treatment, Post-Cancer Recovery), registered-dietitian review, health-plan lines of business, CABS Health Network Medicaid initiative under NY's 1115 Social Care Networks (July 2025), EmblemHealth food-is-medicine program (Sept 2025)", date:"Fetched July 2026", confidence:"High for company-stated capabilities; program results are not public", limitation:"Company marketing pages and press describe capabilities, not audited outcomes or Louisiana/North Carolina contracts.", url:"https://www.cookunity.com/business/for-healthcare"},
  {name:"LDH Monthly Medicaid Enrollment Trends — June 2026", supports:"~1.38M unduplicated Louisiana Medicaid enrollees (1,378,186) and a ~198K trailing-year decline; TAM base refresh", date:"June 2026", confidence:"High — official LDH report", limitation:"Monthly figure; refresh before each use.", url:"https://ldh.la.gov/assets/medicaid/MedicaidEnrollmentReports/EnrollmentTrends/2026/EnrollmentTrends_202606.pdf"},
  {name:"LDH Medicaid organizational chart (updated 06/01/2026)", supports:"Seth J. Gold as Medicaid Executive Director; deputy-director portfolios; Medicaid CFO", date:"Updated June 1, 2026", confidence:"High — official document", limitation:"Org charts lag real moves; verify before outreach.", url:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf"},
  {name:"LDH / Governor's office — Greenstein appointment", supports:"Bruce D. Greenstein as LDH Secretary (announced 2025-04-11; Senate-confirmed June 2025)", date:"Verified July 16, 2026", confidence:"High", limitation:"State leadership changes quickly; recheck before outreach.", url:"https://ldh.la.gov/office-of-the-secretary"},
  {name:"LDH — UnitedHealthcare exit from Louisiana Medicaid", supports:"Non-renewal announced December 2025; 90-day extension through March 31, 2026; five MCOs for 2026; ~330K members reassigned", date:"December 2025 – March 2026", confidence:"High — official LDH releases", limitation:"Member-reassignment distribution across the five plans is not published.", url:"https://ldh.la.gov/news/UHC-90-day-extension"},
  {name:"NCDHHS — Melanie Bush named Deputy Secretary, NC Medicaid", supports:"Current NC Medicaid decision owner; 3M+ member enrollment context", date:"April 21, 2026", confidence:"High — official release", limitation:"Appointment noted as contingent on General Assembly confirmation.", url:"https://www.ncdhhs.gov/news/press-releases/2026/04/21/ncdhhs-names-melanie-bush-deputy-secretary-nc-medicaid"},
  {name:"NC 2026 state budget — HOP partial funding restoration", supports:"$25M one-time HOP appropriation ($9M state + $16M federal match); restart at reduced scale; timeline unsettled mid-July 2026", date:"July 2026 (NC Health News 2026-07-01; WHQR 2026-07-09)", confidence:"Strong — two independent contemporaneous reports; no official NCDHHS restart page yet", limitation:"One-time money far below the $80M ask; do not present as full program reactivation.", url:"https://www.northcarolinahealthnews.org/2026/07/01/nc-full-budget-reflects-transformed-health-landscape/"}
);
