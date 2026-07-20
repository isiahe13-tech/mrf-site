const TOOL_DATA = {
  states: {
    LA: {
      name: "Louisiana",
      summary: "Near-term strategy should focus on an MCO-funded pilot, care-management or quality budget, or a risk-bearing provider partnership. A broad statewide Medicaid nutrition authority has not been confirmed in this tool; waiver or in-lieu-of-services routes remain policy-development paths that require verification.",
      defaultMealCost: 11.15,
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
    description: "Verified net Medicaid spending reduction after including direct HOP services and administrative costs. Base estimate is $164.49 PMPM lower overall; low/high use the confidence-interval bounds. NOTE: this summative result supersedes the widely-circulated interim estimate of ~$85 PMPM (~$1,020/enrollee/yr) — if challenged with the smaller number, the bridge is 'interim analysis vs. final summative evaluation (June 2026), which found savings larger than previously estimated.'",
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
      id:"foodShortage", domain:"Nutrition / HRSN barrier", points:3, hard:"barrier",
      question:"During the last 30 days, has the member skipped meals, reduced portions or run out of food because appropriate food was unavailable or unaffordable?",
      proof:"Documents an active food-access barrier."
    },
    {
      id:"cannotPrepare", domain:"Nutrition / HRSN barrier", points:5, hard:"barrier",
      question:"Is the member unable to shop for or prepare the prescribed food because of physical, cognitive, behavioral-health or caregiver limitations?",
      proof:"Shows why education or a food referral alone may not solve the problem."
    },
    {
      id:"dietUnavailable", domain:"Nutrition / HRSN barrier", points:3, hard:"barrier",
      question:"Is the food currently available to the member inconsistent with the prescribed diet?",
      proof:"Shows a gap between the clinical plan and the food the member can actually access."
    },
    {
      id:"transportBarrier", domain:"Nutrition / HRSN barrier", points:2, hard:"",
      question:"Does a transportation or mobility barrier prevent reliable access to groceries or prepared food?",
      proof:"Shows why home delivery may be more appropriate than a retail referral."
    },
    {
      id:"transitionRisk", domain:"Nutrition / HRSN barrier", points:3, hard:"acute",
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
      next:"Clarify the missing medical or HRSN evidence before selecting service intensity."
    },
    sdoh: {
      label:"Documented HRSN — lower-intensity service may fit",
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
      {role:"Regional CMO (escalation path)", coversRole:"", name:"Madelyn M. Meyn, MD, MBA", quality:"Company-level context — verify", status:"Identified", influence:3, verified:"2026-07-16", source:"RESEARCH REQUIRED — prior link cited the wrong person (Logarbo); verify Meyn directly before any outreach", notes:"Prior ABHLA plan CMO (c. 2019–2022), now Executive Director / Regional CMO at Aetna — knows the Louisiana book; strong second door if the plan CMO stalls."},
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

// ------------------------------------------------------------------
// VERSION 10 — REAL-DOLLAR ECONOMICS (verified July 16, 2026)
// Every figure below traces to a fetchable primary source. Derived
// numbers are labeled DERIVED. The one number that is never public —
// CookUnity's contracted price — is exposed as the field the payer
// contract fills in, anchored by what real programs actually pay.
// ------------------------------------------------------------------

// 10.1 — Avoided-event benchmarks (replaces the unsourced $15,000 default).
TOOL_DATA.avoidedEventBenchmarks = {
  inpatientMedicaid: {value: 14550, label: "Average Medicaid inpatient stay (2022)", source: "HCUP Statistical Brief #316 (DERIVED from published payer shares: $113.0B / 7.76M stays)", url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb316-most-expensive-conditions-by-payer-2022.pdf"},
  inpatientAllPayer: {value: 16675, label: "Average all-payer inpatient stay (2022)", source: "HCUP SB #316 (DERIVED: $548.481B / 32.892M stays)", url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb316-most-expensive-conditions-by-payer-2022.pdf"},
  edVisitMedicaid: {value: 600, label: "Average Medicaid treat-and-release ED visit (2021)", source: "HCUP SB #311, Table 1", url: "https://hcup-us.ahrq.gov/reports/statbriefs/sb311-ED-visit-costs-2021.pdf"},
  readmissionMedicaid: {value: 14100, label: "Average Medicaid 30-day all-cause readmission (2018)", source: "HCUP SB #278", url: "https://www.ncbi.nlm.nih.gov/books/NBK573265/"},
  note: "HCUP figures are hospital production costs, not MCO payments. For payer-perspective ROI, the Healthy Louisiana capitation composites below are the cleaner anchor."
};

// 10.2 — Louisiana real payer economics (official actuarial certification + KFF/T-MSIS).
TOOL_DATA.laRealEconomics = {
  capitationSfy2026: {
    ssiExpected: 2786.29, expansionExpected: 1074.80, familyChildrenExpected: 513.62, compositeExpected: 883.92,
    effective: "7/1/2025–6/30/2026 (certified 8/18/2025, Milliman)",
    source: "https://www.ldh.la.gov/assets/docs/BayouHealth/Rate_Certification_Letters/FY26/SFY-2026-Healthy-Louisiana-Medicaid-Managed-Care-Rate-Certification_20250818.pdf",
    note: "Composite expected MCO payments PMPM by population. A high-acuity meal-program PMPM in the $400s is roughly 15% of the SSI revenue line — material but not implausible against certified rates."
  },
  perEnrolleeCy2023: {
    overall: 7450, seniors: 16566, disabilities: 19878, adults: 6456, expansionAdults: 6718, children: 3472,
    source: "https://www.kff.org/medicaid/state-indicator/medicaid-spending-per-full-benefit-enrollee/",
    note: "KFF State Health Facts from T-MSIS claims, CY2023. The $55,092 JAMA cohort baseline is ~2.8x the LA disabilities per-enrollee average — consistent with a deliberately extreme high-cost slice, and claims must confirm it for any specific plan."
  },
  concentration: "GAO (FY2009–2011): the top 5% of Medicaid-only enrollees drove ~48% of Medicaid-only spending each year; no newer Medicaid-specific share was found (all-payer MEPS 2021: top 5% = 51.2%). Source: https://www.gao.gov/products/gao-15-460"
};
TOOL_DATA.states.LA.summary += " Real-dollar context (SFY 2026 Milliman rate certification): composite expected MCO payments are $2,786 PMPM for the SSI population and $1,075 PMPM for expansion adults — the revenue lines a high-acuity nutrition program's cost and savings case are measured against.";

// 10.3 — 2026-dollar restatement of the JAMA benchmarks (BLS CPI Medical Care,
// 2017 annual avg 475.32 -> June 2026 592.750 = ×1.247, pulled live from the BLS API).
TOOL_DATA.medicalCpi = {factor2017to2026: 1.247, series: "CUUR0000SAM (BLS, pulled 2026-07-16)", note: "DERIVED restatements: JAMA $753 net PMPM ≈ $939; ~$350 program PMPM ≈ $436; $4,591 untreated total PMPM ≈ $5,725; $55,092 annual baseline ≈ $68,700 in June-2026 dollars. Label any restated figure as inflation-adjusted."};
TOOL_DATA.cohortSavings.complex.basis += " In June-2026 dollars (BLS medical CPI ×1.247, DERIVED): the $753 net becomes ≈$939 PMPM and the $350 program cost ≈$436 PMPM.";
if (TOOL_DATA.evidenceBases && TOOL_DATA.evidenceBases.jama) {
  TOOL_DATA.evidenceBases.jama.description += " Published in 2017 dollars; ≈×1.247 in June-2026 dollars (BLS medical CPI, labeled DERIVED).";
}

// 10.4 — CookUnity's REAL program designs (the comps a Louisiana pilot is modeled on).
TOOL_DATA.cookunityPrograms = [
  {name:"CABS Health Network × CookUnity (Brooklyn, NY Medicaid)", launched:"July 2025", funding:"NY 1115 waiver — Social Care Network program", design:"≥500 Medicaid recipients over 12 months; up to 6 months of meal deliveries per member (longer for pregnant/postpartum); $0 member cost; dietitian-personalized plans; MCO-linked eligibility (e.g., MetroPlus) with community screening", conditions:"Hypertension, diabetes, heart disease", notDisclosed:"Meals per week (payer-set; CookUnity never publishes dosing)", url:"https://mostlymedicaid.com/managed-care-cabs-health-network-and-cookunity-launch-medicaid-meal-initiative-to-tackle-food-insecurity-in-new-york-city/", confidence:"PROVEN (launch release)"},
  {name:"Anthem Blue Cross Medi-Cal × CookUnity (Sacramento, CA)", launched:"November 2025", funding:"CalAIM Community Supports — Medically Supportive Food / Medically Tailored Meals", design:"Weekly MTM delivery for up to 90 days, $0 member cost; phase 1 = hundreds of households; ~250K potentially eligible; statewide Medi-Cal expansion planned 2026. Matches the DHCS 12-week MTM cap effective 1/1/2026.", conditions:"Chronic-condition Medi-Cal members (Community Supports criteria)", notDisclosed:"Meals per week; enrollment to date", url:"https://www.dhcs.ca.gov/wp-content/uploads/2025/10/May-Community-Supports-Spotlight-Medically-Tailored-Meals.pdf", confidence:"STRONG (single syndicated release + DHCS policy + Anthem provider guide + live CookUnity eligibility checker)"},
  {name:"EmblemHealth × Dean Ornish × CookUnity (NY)", launched:"July 2025", funding:"Coverage with evidence development (first insurer to cover the Ornish program for early Alzheimer's)", design:"Plant-based MTM menu — 14 dishes expanding to 28; 3,000+ medically tailored meals weekly across CookUnity health programs (Oct 2025); five boroughs + Long Island via ACPNY", conditions:"Early-stage Alzheimer's / mild cognitive impairment", notDisclosed:"Per-member meals/week, duration, enrollment cap", url:"https://www.emblemhealth.com/news/dr-dean-ornish-cognition-brain-health-program-partnership", confidence:"PROVEN"},
  {name:"CookUnity marketed program shapes", launched:"Current site", funding:"1115 waivers, ILOS, Community Supports, MA supplemental benefits (positioning)", design:"'A 30-day post-discharge pilot or a 12-month diabetes support program'; weekly fresh delivery; ~4–7 day refrigerated shelf life; condition menus (Heart, Diabetes, Cancer Treatment, Post-Cancer Recovery); RDN-reviewed; payer reporting on adherence, satisfaction and cost impact", conditions:"Chronic + post-acute", notDisclosed:"Pricing; accreditation status", url:"https://www.cookunity.com/business/for-healthcare", confidence:"PROVEN as company positioning"}
];
TOOL_DATA.cookunityLouisianaNote = "No CookUnity kitchen or healthcare program exists in Louisiana today (structured MTM programs are CA+NY-anchored; nearest kitchens Austin and Atlanta). But delivery coverage IS live: Baton Rouge (70806) and Lafayette (70503) both verified on CookUnity's own zip checker July 16, 2026, and New Orleans is covered. A Louisiana Medicaid pilot would be CookUnity's FIRST in-state — the proven CABS/Anthem playbook applied to a new state, with the delivery feasibility gate already cleared for the I-10 corridor.";

// 10.5 — Published per-meal rate anchors (every rate traces to a fetched
// document; the NY gap is stated, not estimated). Rendered in Pilot Builder.
TOOL_DATA.mealRateAnchors = [
  {program:"MassHealth HRSN Supplemental Services (1115)", rate:"$14.86 expected / $18.58 max per MTM", date:"Schedule posted Jan 2026", url:"https://www.mass.gov/doc/hrsn-supplemental-services-fee-schedule-3/download", note:"Highest published state rate; up to 21 meals/member/week. The only published schedule that clears CookUnity's retail floor."},
  {program:"California CalAIM Community Supports", rate:"$9.50/meal midpoint (benchmark $7–$12)", date:"DHCS Pricing Resource, Dec 2025", url:"https://www.dhcs.ca.gov/wp-content/uploads/2026/05/Community-Supports-Pricing-Resource.pdf", note:"Non-binding benchmark; up to 3 meals/day for up to 12 weeks. The mechanism behind the Anthem × CookUnity Sacramento program."},
  {program:"North Carolina HOP fee schedule", rate:"$7.92/meal MTM ($7.70 healthy meal)", date:"Effective July 2024 — still current; restart funded July 2026, no new schedule yet", url:"https://www.ncdhhs.gov/healthy-opportunities-pilot-fee-schedule-and-service-definitions/open", note:"The low end of the band — the underpricing FIM providers flagged to CMS."},
  {program:"New York 1115 SCN (the CABS × CookUnity mechanism)", rate:"Per-meal rate NOT public", date:"Rate methodology CMS-approved Nov 2024", url:"https://www.medicaid.gov/medicaid/section-1115-demonstrations/downloads/ny-medicaid-rdsgn-team-cms-aprvd-hrsn-rate-meth-11212024.pdf", note:"Each regional SCN lead sets its rate from Feeding America county meal costs; distributed only to contracted providers. Anyone quoting 'the NY rate' is guessing — this tool doesn't."},
  {program:"CookUnity retail (live-fetched 7/16/2026)", rate:"$11.09–$14.23/meal by plan size + $9.99–$11.99 delivery", date:"cookunity.com pricing page, July 16, 2026", url:"https://www.cookunity.com/lp/cookunity-cost", note:"The retail CEILING: 16-meal tier $11.09, 12-meal $11.20, 4-meal $14.23. B2B program pricing is negotiated below retail."},
  {program:"Health Affairs national MTM cost model", rate:"$11.15/meal all-in (labor, ingredients, packaging, delivery, overhead)", date:"April 2025 (Deng et al., 50-state model)", url:"https://www.healthaffairs.org/doi/10.1377/hlthaff.2024.01307", note:"Research benchmark — converges with CookUnity's live retail program tiers, which is why the Louisiana presets plan at $11.15."}
];

// 10.6 — Pilot presets modeled on CookUnity's real Medicaid programs.
TOOL_DATA.pilotPresets.splice(TOOL_DATA.pilotPresets.findIndex(p => p.id === "custom"), 0,
  {
    id:"la_cabs_style", label:"Louisiana first-in-state — CABS-style MCO program (NY comp)", state:"LA", cohort:"complex",
    populationBasis:"la_claims", eligibleShare:0, members:250, weeks:26, meals:10, mealCost:11.15, overhead:3,
    evidenceBasis:"pitch", scenario:"base", bcr:{low:1.20,base:1.55,high:1.95}, funding:"la_mco_pilot",
    intervention:"Medically tailored home-delivered meals", geo:"Baton Rouge–Lafayette I-10 corridor (CookUnity delivery live-verified 7/16/2026 on their zip checker: 70806 + 70503)",
    trigger:"Model of CookUnity's real Brooklyn Medicaid program (CABS Health Network, July 2025): up to 6 months per member, MCO-linked eligibility, dietitian-personalized plans — applied to a Louisiana MCO's claims-defined high-cost cohort",
    note:"Design comp = CABS × CookUnity (≥500 members/12mo, up to 6-month member duration). Meals/week is PAYER-SET — CookUnity never publishes dosing; 10/week here follows the JAMA evidence standard. Meal price = $11.15 (Health Affairs 2025 all-in national MTM cost model, converging with CookUnity's live retail program tiers of $11.09–$11.20) — contracted program pricing replaces it. The actual NY SCN rate CookUnity bills is not public; this tool says so instead of guessing."
  },
  {
    id:"la_calaim_style", label:"Louisiana 12-week design — Anthem CalAIM comp (CA)", state:"LA", cohort:"complex",
    populationBasis:"la_claims", eligibleShare:0, members:200, weeks:12, meals:10, mealCost:11.15, overhead:3,
    evidenceBasis:"pitch", scenario:"base", bcr:{low:1.20,base:1.60,high:2.00}, funding:"la_mco_pilot",
    intervention:"Medically tailored home-delivered meals", geo:"Single-region Louisiana proof market (Baton Rouge and Lafayette delivery live-verified 7/16/2026)",
    trigger:"Model of CookUnity's real Sacramento Medi-Cal program (Anthem, Nov 2025): weekly MTM delivery up to 90 days under CalAIM Community Supports — the same 12-week shape as the DHCS MTM cap",
    note:"Design comp = Anthem Medi-Cal × CookUnity (weekly delivery, up to 90 days, hundreds of households in phase 1). The 12-week duration is a REAL regulatory shape (DHCS CalAIM cap eff. 1/1/2026), not an arbitrary pilot length. Meal price = $11.15 (Health Affairs all-in model ≈ CookUnity live retail program tiers); the CalAIM benchmark band is $7–$12 with a $9.50 midpoint — contracted pricing replaces it."
  }
);

TOOL_DATA.sources.unshift(
  {name:"HCUP Statistical Briefs #316 / #311 / #278 — event-cost benchmarks", supports:"Avoided-event defaults: Medicaid inpatient stay ≈$14,550 (2022, DERIVED from published aggregates); all-payer $16,675; Medicaid ED visit $600 (2021); Medicaid 30-day readmission $14,100 (2018)", date:"Data years 2018–2022; SB #316 published Feb 2026", confidence:"High — official AHRQ briefs; per-stay Medicaid figure labeled DERIVED", limitation:"Hospital production costs, not MCO payments; older dollars for ED/readmission figures.", url:"https://hcup-us.ahrq.gov/reports/statbriefs/sb316-most-expensive-conditions-by-payer-2022.pdf"},
  {name:"Healthy Louisiana SFY 2026 rate certification (Milliman)", supports:"Composite expected MCO payments: SSI $2,786.29 PMPM; expansion $1,074.80; family & children $513.62; program composite $883.92 (eff. 7/1/2025–6/30/2026)", date:"Certified August 18, 2025", confidence:"High — official LDH actuarial certification", limitation:"Composites, not individual rate cells; expected payments include state directed payments.", url:"https://www.ldh.la.gov/assets/docs/BayouHealth/Rate_Certification_Letters/FY26/SFY-2026-Healthy-Louisiana-Medicaid-Managed-Care-Rate-Certification_20250818.pdf"},
  {name:"KFF — Medicaid spending per full-benefit enrollee (CY2023, T-MSIS)", supports:"Louisiana: $7,450 overall; $19,878 disabilities; $16,566 seniors; $6,718 expansion adults — sanity anchors for annual attributable cost", date:"CY 2023", confidence:"High", limitation:"Averages across each group, not the high-cost slice a pilot targets.", url:"https://www.kff.org/medicaid/state-indicator/medicaid-spending-per-full-benefit-enrollee/"},
  {name:"BLS CPI — Medical Care (CUUR0000SAM)", supports:"2017→June 2026 medical inflation factor ×1.247 used for labeled 2026-dollar restatements of the 2017-dollar JAMA benchmarks", date:"Pulled from the BLS API July 16, 2026", confidence:"High", limitation:"All restated figures are DERIVED, not published.", url:"https://api.bls.gov/publicAPI/v2/timeseries/data/"},
  {name:"Hager et al., JAMA Network Open 2022 — national MTM model", supports:"Modeled year 1: 1,594,000 hospitalizations averted; $13.6B net savings (95% UI $0.2B–$28.5B) across 6.31M eligible adults (≈$2,155/patient/yr, DERIVED); −47% hospitalizations, −19.7% expenditures from pooled studies", date:"Published Oct 2022, 2019 dollars", confidence:"High for the published model", limitation:"Simulation, not a trial; the year-1 savings interval's lower bound is barely above break-even — quote the range, not just the point estimate.", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC9577678/"},
  {name:"Massachusetts Medicaid MTM study — Nature Medicine 2026", supports:"31% fewer hospitalizations, 20% fewer ED visits among 1,866 MTM recipients vs 1,372 matched comparators (2020–2023, 11 Massachusetts health systems, Community Servings meals); savings offset nearly the entire program cost", date:"Published June 2026", confidence:"High for the published study", limitation:"Observational, receipt-based (not randomized); Massachusetts Medicaid population — quote the design when citing.", url:"https://www.nature.com/articles/s41591-026-04407-5"},
  {name:"CABS Health Network × CookUnity — NY Medicaid program", supports:"CookUnity's real Medicaid design: ≥500 members/12 months, up to 6 months per member, 1115 SCN funding, dietitian-personalized, $0 member cost", date:"July 23, 2025", confidence:"High — launch release", limitation:"Meals/week and results not disclosed.", url:"https://mostlymedicaid.com/managed-care-cabs-health-network-and-cookunity-launch-medicaid-meal-initiative-to-tackle-food-insecurity-in-new-york-city/"},
  {name:"Anthem Medi-Cal × CookUnity (Sacramento) + DHCS CalAIM MTM policy", supports:"Weekly MTM delivery up to 90 days under CalAIM Community Supports; ~250K potentially eligible; DHCS 12-week MTM cap effective 1/1/2026 — validates the 12-week pilot shape", date:"November 2025 (program); DHCS spotlight Oct 2025", confidence:"Strong — syndicated release corroborated by DHCS policy, Anthem provider guide and CookUnity's live eligibility page", limitation:"Enrollment and dosing not disclosed.", url:"https://www.dhcs.ca.gov/wp-content/uploads/2025/10/May-Community-Supports-Spotlight-Medically-Tailored-Meals.pdf"},
  {name:"CookUnity scale + Louisiana coverage", supports:"$750M ARR at 2025 close; 40M+ meals delivered in 2025; 8 kitchens (nearest to LA: Austin, Atlanta); Louisiana delivery LIVE-VERIFIED on CookUnity's own zip checker 7/16/2026 — Baton Rouge 70806 and Lafayette 70503 both covered, plus New Orleans; no Louisiana healthcare program today (first-in-state opportunity)", date:"2025–July 16, 2026", confidence:"High — company-stated scale; delivery verified directly", limitation:"Retail price is a ceiling anchor, not program pricing.", url:"https://www.cookunity.com/blog/cookunity-750m-arr-2025-record-growth"},
  {name:"Published Medicaid MTM per-meal rate band", supports:"NC HOP $7.92 (2024) → CalAIM $9.50 midpoint, $7–$12 band (Dec 2025) → MassHealth $14.86 expected / $18.58 max (Jan 2026, up to 21 meals/wk); NY SCN rate (the CABS × CookUnity mechanism) is NOT public — set regionally from Feeding America county costs under a CMS-approved methodology", date:"2024–Jan 2026 documents, all fetched July 16, 2026", confidence:"High — official fee schedules and pricing resources", limitation:"CalAIM benchmarks are non-binding; NC's schedule predates the July 2026 restart appropriation; the NY per-meal dollar figure is contract-confidential.", url:"https://www.mass.gov/doc/hrsn-supplemental-services-fee-schedule-3/download"},
  {name:"CookUnity retail pricing (live) + Health Affairs MTM cost model", supports:"Retail per-meal tiers $14.23 (4) / $12.29 (6) / $11.72 (8) / $11.20 (12) / $11.09 (16) + $9.99–$11.99 delivery (fetched 7/16/2026); Health Affairs Apr 2025 (Deng et al.) models $11.15/meal all-in national MTM cost — the convergence behind the Louisiana presets' $11.15 planning price", date:"July 16, 2026 / April 2025", confidence:"High", limitation:"Retail is a ceiling; the modeled $11.15 is a national average, not a quote.", url:"https://www.cookunity.com/lp/cookunity-cost"}
);

TOOL_DATA.sources.unshift(
  {name:"Louisiana MCO local-leadership verification sweep", supports:"Named plan presidents/CEOs and CMOs for the five active Healthy Louisiana MCOs, with per-row source links, verified dates and confidence labels; LHCC leadership transition; Healthy Blue leadership change", date:"Verified July 16, 2026", confidence:"Per-row — see each stakeholder entry", limitation:"Plan leadership moves fast (two LA seats changed in March–May 2026 alone). Reverify any name immediately before outreach.", url:"https://ldh.la.gov/medicaid/medicaid2026"},
  {name:"Carolina Complete Health + WellCare of NC merger", supports:"April 1, 2026 combination under the CCH brand; 980,000+ members; provider-led structure; NC now has four Standard Plans", date:"April 2, 2026", confidence:"High — Centene investor release + NC Medicaid provider notice", limitation:"Post-merger clinical leadership not yet announced.", url:"https://investors.centene.com/2026-04-02-Carolina-Complete-Health-and-WellCare-of-North-Carolina-Combine-to-Form-Provider-Led-Managed-Care-Organization"},
  {name:"CookUnity for Healthcare — public capability anchors", supports:"Medically tailored meal programs (Heart, Diabetes, Cancer Treatment, Post-Cancer Recovery), registered-dietitian review, health-plan lines of business, CABS Health Network Medicaid initiative under NY's 1115 Social Care Networks (July 2025), EmblemHealth food-is-medicine program (announced July 29, 2025)", date:"Fetched July 2026", confidence:"High for company-stated capabilities; program results are not public", limitation:"Company marketing pages and press describe capabilities, not audited outcomes or Louisiana/North Carolina contracts.", url:"https://www.cookunity.com/business/for-healthcare"},
  {name:"LDH Monthly Medicaid Enrollment Trends — June 2026", supports:"~1.38M unduplicated Louisiana Medicaid enrollees (1,378,186) and a ~198K trailing-year decline; TAM base refresh", date:"June 2026", confidence:"High — official LDH report", limitation:"Monthly figure; refresh before each use.", url:"https://ldh.la.gov/assets/medicaid/MedicaidEnrollmentReports/EnrollmentTrends/2026/EnrollmentTrends_202606.pdf"},
  {name:"LDH Medicaid organizational chart (updated 06/01/2026)", supports:"Seth J. Gold as Medicaid Executive Director; deputy-director portfolios; Medicaid CFO", date:"Updated June 1, 2026", confidence:"High — official document", limitation:"Org charts lag real moves; verify before outreach.", url:"https://ldh.la.gov/assets/docs/OrgCharts/Medicaid-OrgChart.pdf"},
  {name:"LDH / Governor's office — Greenstein appointment", supports:"Bruce D. Greenstein as LDH Secretary (announced 2025-04-11; Senate-confirmed June 2025)", date:"Verified July 16, 2026", confidence:"High", limitation:"State leadership changes quickly; recheck before outreach.", url:"https://ldh.la.gov/office-of-the-secretary"},
  {name:"LDH — UnitedHealthcare exit from Louisiana Medicaid", supports:"Non-renewal announced December 2025; 90-day extension through March 31, 2026; five MCOs for 2026; ~330K members reassigned", date:"December 2025 – March 2026", confidence:"High — official LDH releases", limitation:"Member-reassignment distribution across the five plans is not published.", url:"https://ldh.la.gov/news/UHC-90-day-extension"},
  {name:"NCDHHS — Melanie Bush named Deputy Secretary, NC Medicaid", supports:"Current NC Medicaid decision owner; 3M+ member enrollment context", date:"April 21, 2026", confidence:"High — official release", limitation:"Appointment noted as contingent on General Assembly confirmation.", url:"https://www.ncdhhs.gov/news/press-releases/2026/04/21/ncdhhs-names-melanie-bush-deputy-secretary-nc-medicaid"},
  {name:"NC 2026 state budget — HOP partial funding restoration", supports:"$25M one-time HOP appropriation ($9M state + $16M federal match); restart at reduced scale; timeline unsettled mid-July 2026", date:"July 2026 (NC Health News 2026-07-01; WHQR 2026-07-09)", confidence:"Strong — two independent contemporaneous reports; no official NCDHHS restart page yet", limitation:"One-time money far below the $80M ask; do not present as full program reactivation.", url:"https://www.northcarolinahealthnews.org/2026/07/01/nc-full-budget-reflects-transformed-health-landscape/"}
);


// ------------------------------------------------------------------
// VERSION 11 — NEW YORK + CALIFORNIA (CookUnity's live home markets)
// and the National Playbook state-prioritization layer.
// NY and CA are the two states where CookUnity ALREADY operates
// Medicaid programs (CABS/Brooklyn under the NYHER 1115 SCN waiver;
// Anthem/Sacramento under CalAIM Community Supports). Population
// figures marked "starter estimate" are labeled planning inputs,
// never published Medicaid counts.
// ------------------------------------------------------------------

TOOL_DATA.states.NY = {
  name: "New York",
  summary: "CookUnity's home Medicaid market. The NYHER 1115 waiver (approved January 9, 2024; ~$7.5B over 3.25 years, expiring March 31, 2027) funds HRSN services through nine regional Social Care Networks, with nutrition reimbursement live since January 2025 and up to $500M for the SCN pool. Enhanced-population members can receive up to six months of meals (renewable once; ~11 months for high-risk pregnancy). CookUnity already bills this mechanism through the CABS Health Network initiative in Brooklyn (≥500 members) and separately partners with EmblemHealth on the Ornish early-Alzheimer's program. The waiver's 2027 expiration is the built-in urgency: programs that want renewal-proof evidence need pilots generating data NOW.",
  defaultMealCost: 11.15,
  defaultPmpm: 750,
  cohorts: {
    complex: { affected: 0, annualCost: 55092, targetRate: 100, foodFit: 5, sourceNote: "BEST PROOF COHORT. NYHER's own 'enhanced populations' definition (high utilizers, specific chronic conditions, justice-involved, foster youth) already encodes this cohort — eligibility is SCN/plan-determined, so the candidate count must come from SCN or MCO data; zero is intentional. Cost benchmark from the Berkowitz JAMA matched cohort.", buyerQuestion: "Which enhanced-population members have recent acute utilization, a diet-sensitive condition and a documented food barrier — and which SCN region are they in?", costLogic: "The waiver already pays for exactly this population; the question is share-of-network, not authority.", nutritionFit: "Strongest commercial proof cohort, and in NY the payment mechanism is already live." },
    diabetes: { affected: 1800000, annualCost: 12022, targetRate: 6, foodFit: 5, sourceNote: "Starter planning estimate (~1.8M adults with diagnosed diabetes statewide is the commonly cited NYSDOH-scale figure — all-payer, not Medicaid-specific). Replace with SCN/MCO claims.", buyerQuestion: "Which diabetic enhanced-population members have food-access barriers and recent avoidable utilization?", costLogic: "High prevalence, medication burden and preventable complications.", nutritionFit: "Strong fit; NYHER nutrition services are live for qualifying members." },
    heart: { affected: 380000, annualCost: 10500, targetRate: 12, foodFit: 5, sourceNote: "Starter planning estimate scaled from national heart-failure prevalence (~2% of adults) — all-payer, not Medicaid-specific. Replace with plan claims.", buyerQuestion: "Which members with heart failure and recent admissions can't follow a sodium-controlled diet?", costLogic: "Admissions and readmissions concentrate cost in a small population.", nutritionFit: "Strong fit for sodium-controlled medically tailored meals." },
    ckd: { affected: 2300000, annualCost: 9000, targetRate: 5, foodFit: 4, sourceNote: "Starter planning estimate scaled from national CKD prevalence (~14% of adults) — overlaps diabetes/hypertension heavily; never sum cohorts. Replace with staged claims.", buyerQuestion: "Which stage 3b–4 CKD members have nutrition insecurity and rising utilization?", costLogic: "Progression and renal replacement create high downstream cost.", nutritionFit: "Requires renal-specific clinical oversight." }
  },
  funding: [
    { id:"ny_scn", name:"NYHER 1115 — Social Care Network nutrition services", status:"active", speed:5, objectives:["pilot","benefit"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"The live statewide mechanism: nine regional SCN lead entities reimburse contracted providers for HRSN nutrition services (up to 3 meals/day, up to 6 months, renewable once) for enhanced-population Medicaid managed-care members. CookUnity already bills it via CABS in Brooklyn.", buyer:"SCN lead entities (e.g., Public Health Solutions in the Brooklyn region), MCO HRSN leads and care management", evidence:"SCN network contracting, enhanced-population eligibility screening, referral workflow and encounter reporting.", caution:"Per-meal rates are set regionally by each SCN and are not public; the waiver expires March 31, 2027 — build renewal-proof evidence into every program." },
    { id:"ny_ilos", name:"MCO ILOS / value-based purchasing route", status:"conditional", speed:4, objectives:["pilot","benefit","provider"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"Outside the SCN lane, NY plans can fund meals as in-lieu-of or value-added services, and NY's VBP framework has historically required social-determinant interventions with CBO participation at higher levels.", buyer:"Plan CMO, population health, HRSN and VBP contracting leadership", evidence:"Plan-specific ILOS/value-add authority, cohort definition and encounter coding.", caution:"Plan-by-plan authority — confirm the specific vehicle before pricing." },
    { id:"ny_mco", name:"Plan innovation, quality or health-equity budget", status:"conditional", speed:4, objectives:["pilot"], fits:{complex:5,diabetes:5,heart:4,ckd:4}, description:"A plan-funded pilot against a quality, equity or utilization objective — useful where SCN capacity or eligibility misses the target cohort.", buyer:"CMO, quality, population health or health-equity leadership", evidence:"Quality gap, member workflow, clinical referral and measurement plan.", caution:"Do not assume food is reimbursable merely because a quality gap exists." },
    { id:"ny_provider", name:"Risk-bearing provider / ACO partnership", status:"conditional", speed:4, objectives:["provider","pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"Health systems and risk-bearing groups fund meals against avoidable utilization — the EmblemHealth/ACPNY Ornish program is the in-market example of provider-linked clinical meal programs.", buyer:"Population-health and value-based care leadership at systems and IPAs", evidence:"Attributed lives, risk exposure, referral workflow and outcome attribution.", caution:"Verify actual risk exposure and budget." },
    { id:"ny_bridge", name:"Grant, philanthropy or community-benefit bridge", status:"conditional", speed:3, objectives:["bridge","pilot"], fits:{complex:5,diabetes:4,heart:4,ckd:3}, description:"Non-Medicaid capital funds a proof while SCN contracting or plan authority develops.", buyer:"Health-system community benefit, foundations, public-health grants", evidence:"Time-limited pilot with payer-relevant outcomes and a transition plan.", caution:"Not a durable reimbursement strategy." }
  ]
};

TOOL_DATA.states.CA = {
  name: "California",
  summary: "CookUnity's second live Medicaid market. CalAIM made medically tailored meals and medically supportive food a named Community Support (ILOS) that Medi-Cal managed care plans have offered since 2022, with DHCS-published benchmark pricing ($7–$12 per meal, $9.50 midpoint) and a 12-week MTM cap (extendable for medical necessity) effective January 1, 2026. CookUnity's Anthem Blue Cross Sacramento program (announced November 2025: weekly delivery up to 90 days, ~250K potentially eligible members) runs on exactly this mechanism, with statewide Medi-Cal expansion planned for 2026. The play here is expansion — ride the live Anthem footprint and add managed care plans.",
  defaultMealCost: 9.50,
  defaultPmpm: 750,
  cohorts: {
    complex: { affected: 0, annualCost: 55092, targetRate: 100, foodFit: 5, sourceNote: "BEST PROOF COHORT. Community Supports eligibility is MCP-determined (chronic-condition and utilization criteria), so the candidate count must come from plan data; zero is intentional. Cost benchmark from the Berkowitz JAMA matched cohort.", buyerQuestion: "Which high-utilizing chronic-condition members qualify for the MTM Community Support and have a documented food barrier?", costLogic: "The benefit exists; the commercial question is plan adoption and member identification.", nutritionFit: "Strongest proof cohort; the payment mechanism is live and priced." },
    diabetes: { affected: 3500000, annualCost: 12022, targetRate: 6, foodFit: 5, sourceNote: "Starter planning estimate (~3.5M adults with diagnosed diabetes statewide is the commonly cited CDPH-scale figure — all-payer, not Medi-Cal-specific). Replace with MCP claims.", buyerQuestion: "Which diabetic members meet Community Supports criteria and have recent avoidable utilization?", costLogic: "Scale plus preventable complications.", nutritionFit: "Strong fit under the existing MTM Community Support." },
    heart: { affected: 750000, annualCost: 10500, targetRate: 12, foodFit: 5, sourceNote: "Starter planning estimate scaled from national heart-failure prevalence (~2% of adults) — all-payer. Replace with MCP claims.", buyerQuestion: "Which post-discharge heart-failure members can't follow a sodium-controlled diet?", costLogic: "Concentrated admission and readmission spend.", nutritionFit: "Strong fit; 12-week post-discharge design matches the CalAIM cap." },
    ckd: { affected: 4400000, annualCost: 9000, targetRate: 5, foodFit: 4, sourceNote: "Starter planning estimate scaled from national CKD prevalence (~14% of adults) — heavy overlap with diabetes/hypertension; never sum cohorts.", buyerQuestion: "Which stage 3b–4 CKD members qualify and need renal-diet support?", costLogic: "Progression and dialysis avoidance.", nutritionFit: "Requires renal clinical oversight." }
  },
  funding: [
    { id:"ca_calaim", name:"CalAIM Community Supports — MTM / Medically Supportive Food (ILOS)", status:"active", speed:5, objectives:["pilot","benefit"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"The live, priced, statewide mechanism: MCPs offer medically tailored meals as a Community Support with DHCS benchmark pricing ($9.50/meal midpoint), up to 3 meals/day for up to 12 weeks (extendable for medical necessity). The Anthem × CookUnity Sacramento program runs on it today.", buyer:"MCP Community Supports / population health leadership, CMO and care management", evidence:"MCP election of the MTM Community Support, member eligibility criteria, referral pathway and encounter coding.", caution:"Benchmarks are non-binding and MCP adoption varies by county — confirm each plan's elected Community Supports before pricing." },
    { id:"ca_mco", name:"Plan innovation, quality or health-equity budget", status:"conditional", speed:4, objectives:["pilot"], fits:{complex:5,diabetes:5,heart:4,ckd:4}, description:"Plan-funded pilots against quality or equity objectives where a county's Community Supports election doesn't cover the target cohort.", buyer:"CMO, quality, population health or health-equity leadership", evidence:"Quality gap, workflow, referral and measurement plan.", caution:"Confirm budget authority; don't assume reimbursement." },
    { id:"ca_provider", name:"Risk-bearing provider / delegated group partnership", status:"conditional", speed:4, objectives:["provider","pilot"], fits:{complex:5,diabetes:5,heart:5,ckd:4}, description:"California's deeply delegated model means medical groups and IPAs carry real risk — a second buyer type that funds avoided utilization directly.", buyer:"Delegated group / IPA population-health and finance leadership", evidence:"Attributed lives, risk contract, baseline utilization.", caution:"Verify actual risk exposure — delegation structures vary widely." },
    { id:"ca_bridge", name:"Grant, philanthropy or community-benefit bridge", status:"conditional", speed:3, objectives:["bridge","pilot"], fits:{complex:5,diabetes:4,heart:4,ckd:3}, description:"Non-Medicaid capital funds a proof while an MCP elects or expands the Community Support.", buyer:"Health-system community benefit, foundations, public-health grants", evidence:"Time-limited pilot with payer-relevant outcomes.", caution:"Bridge capital, not durable reimbursement." }
  ]
};

TOOL_DATA.companies.NY = [
  { id:"ny_emblem", name:"EmblemHealth", parent:"EmblemHealth (NY nonprofit plan family)",
    accountSource:"https://www.emblemhealth.com/news/dr-dean-ornish-cognition-brain-health-program-partnership",
    hook:"EXISTING COOKUNITY PARTNER: the Ornish early-Alzheimer's food-is-medicine program (announced July 2025) runs with CookUnity meals via ACPNY. The expansion play is from within — new condition programs and Medicaid lines ride an existing relationship.",
    contacts:[
      {role:"Existing partnership — expand from within", name:"Partnership live since 2025 — route through the CookUnity account team first", quality:"Public plan fact", status:"Identified", influence:4, verified:"2026-07-16", source:"https://www.emblemhealth.com/news/dr-dean-ornish-cognition-brain-health-program-partnership", notes:"Internal etiquette: an existing account has an owner. Map expansion opportunities WITH the current account team, never around them."}
    ] },
  { id:"ny_metroplus", name:"MetroPlus Health Plan", parent:"NYC Health + Hospitals",
    accountSource:"https://mostlymedicaid.com/managed-care-cabs-health-network-and-cookunity-launch-medicaid-meal-initiative-to-tackle-food-insecurity-in-new-york-city/",
    hook:"Named as the example MCO in the CABS × CookUnity launch release — its members are eligible for the live Brooklyn program. The public-benefit NYC plan; deepening this relationship converts a program mention into a plan-level contract.",
    contacts:[
      {role:"CABS program linkage — verified context", name:"Cited as example MCO in the CABS initiative (July 2025)", quality:"Public plan fact", status:"Identified", influence:3, verified:"2026-07-16", source:"https://mostlymedicaid.com/managed-care-cabs-health-network-and-cookunity-launch-medicaid-meal-initiative-to-tackle-food-insecurity-in-new-york-city/", notes:"Local plan leadership research is required before outreach — no name is guessed here."}
    ] },
  { id:"ny_healthfirst", name:"Healthfirst", parent:"Hospital-sponsored nonprofit plan",
    accountSource:"https://healthfirst.org/",
    hook:"Among New York's largest Medicaid managed care plans (hospital-sponsored, ~2M members — verify current figure). The biggest single-plan prize in the state's SCN era; no public CookUnity relationship today.",
    contacts:[
      {role:"Scale context — verify before use", name:"~2M members (commonly cited — verify current)", quality:"Company-level context — verify", status:"Identified", influence:2, verified:"Recheck before outreach", source:"https://healthfirst.org/", notes:"Local Medicaid leadership must be researched and verified before any outreach — never pitch on a stale name."}
    ] },
  { id:"ny_medicaid", name:"NY State DOH / Medicaid + Social Care Networks", parent:"State agency + SCN lead entities",
    accountSource:"https://www.health.ny.gov/health_care/medicaid/redesign/sdh/scn/navigating_reimbursement.htm",
    hook:"NYHER: ~$7.5B over 3.25 years, nine regional SCN lead entities (Brooklyn region = Public Health Solutions), nutrition reimbursement live since January 2025, waiver expires March 31, 2027. SCNs set per-meal rates regionally from Feeding America county costs — the rate CookUnity bills is contract-level, not public.",
    contacts:[
      {role:"SCN lead entity — Brooklyn region", name:"Public Health Solutions (organization)", quality:"Publicly verified", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.health.ny.gov/health_care/medicaid/redesign/sdh/scn/navigating_reimbursement.htm", notes:"The regional gatekeeper for the live CABS mechanism. Individual leadership names require verification before outreach."}
    ] }
];

TOOL_DATA.companies.CA = [
  { id:"ca_anthem", name:"Anthem Blue Cross (Elevance Health) — Medi-Cal", parent:"Elevance Health",
    accountSource:"https://www.cookunity.com/business/check-my-eligibility-anthem",
    hook:"LIVE COOKUNITY PARTNER since November 2025: weekly MTM delivery up to 90 days for Sacramento Medi-Cal members under CalAIM (~250K potentially eligible — verify, single syndicated source), with statewide expansion planned for 2026. CookUnity even runs a live eligibility-checker page for Anthem members. The #1 expansion account in the country.",
    contacts:[
      {role:"Existing partnership — expand from within", name:"Sacramento program live; statewide expansion planned 2026", quality:"Public plan fact", status:"Identified", influence:5, verified:"2026-07-16", source:"https://www.cookunity.com/business/check-my-eligibility-anthem", notes:"Same etiquette as EmblemHealth: the account has an owner. The Medicaid AE's job is to map which counties and cohorts come next, with the account team."}
    ] },
  { id:"ca_lacare", name:"L.A. Care Health Plan", parent:"Public agency plan (Los Angeles County)",
    accountSource:"https://www.lacare.org/",
    hook:"Commonly cited as the largest publicly operated health plan in the U.S. (~2M+ members — verify current). Operates CalAIM Community Supports at LA-County scale; no public CookUnity relationship today — the biggest single-county prize once Sacramento proves out.",
    contacts:[
      {role:"Scale context — verify before use", name:"~2M+ members (commonly cited — verify current)", quality:"Company-level context — verify", status:"Identified", influence:2, verified:"Recheck before outreach", source:"https://www.lacare.org/", notes:"Community Supports leadership must be researched by name before outreach."}
    ] },
  { id:"ca_healthnet", name:"Health Net (Centene) — Medi-Cal", parent:"Centene",
    accountSource:"https://www.healthnet.com/",
    hook:"A major Medi-Cal plan inside the same parent as Louisiana Healthcare Connections — the Centene relationship playbook travels. Community Supports elections vary by county; map which counties elected MTM before pricing.",
    contacts:[
      {role:"Centene CEO — corporate context", name:"Sarah London", quality:"Publicly verified", status:"Identified", influence:2, verified:"2026-07-15", source:"https://www.centene.com/who-we-are/leadership.html", notes:"Corporate context only; California plan leadership requires separate verification."}
    ] },
  { id:"ca_dhcs", name:"DHCS / Medi-Cal (state agency)", parent:"State agency",
    accountSource:"https://www.dhcs.ca.gov/wp-content/uploads/2026/05/Community-Supports-Pricing-Resource.pdf",
    hook:"The policy engine: CalAIM Community Supports live since 2022, DHCS-published MTM benchmark pricing ($7–$12, $9.50 midpoint, Dec 2025 resource), 12-week MTM cap effective 1/1/2026. Medi-Cal is commonly cited around ~14M members (verify current) — the largest Medicaid program in the country.",
    contacts:[
      {role:"Published pricing + policy source", name:"DHCS Community Supports Pricing Resource (Dec 2025)", quality:"Publicly verified", status:"Identified", influence:4, verified:"2026-07-16", source:"https://www.dhcs.ca.gov/wp-content/uploads/2026/05/Community-Supports-Pricing-Resource.pdf", notes:"The document every California pricing conversation anchors on."}
    ] }
];

TOOL_DATA.populationBases.NY = [
  {id:"ny_enhanced", label:"SCN enhanced-population cohort (SCN/plan data required)", count:0, status:"SCN / payer data required", source:"NYHER enhanced-population criteria", note:"Eligibility is determined through SCN screening of Medicaid managed-care members (high utilizers, chronic conditions, justice-involved, foster youth). No public statewide count."},
  {id:"ny_cabs", label:"CABS × CookUnity documented program scale", count:500, status:"Official program figure", source:"CABS Health Network launch release (July 2025)", note:"At least 500 Medicaid recipients over 12 months — CookUnity's live Brooklyn program."},
  {id:"custom", label:"Custom payer-defined population", count:0, status:"User-entered / payer data required", source:"Payer claims", note:"Use when the SCN or plan supplies a defined cohort."}
];
TOOL_DATA.populationBases.CA = [
  {id:"ca_anthem", label:"Anthem Sacramento potentially-eligible members", count:250000, status:"Reported figure — verify (single syndicated source)", source:"Anthem × CookUnity launch coverage (Nov 2025)", note:"~250K Sacramento Medi-Cal members reported potentially eligible; phase 1 served hundreds of households."},
  {id:"ca_claims", label:"MCP claims-defined Community Supports cohort", count:0, status:"Payer data required", source:"Medi-Cal MCP claims", note:"Community Supports eligibility is plan-determined; use MCP data for the real universe."},
  {id:"custom", label:"Custom payer-defined population", count:0, status:"User-entered / payer data required", source:"Payer claims", note:"Use when the account supplies a verified cohort count."}
];

TOOL_DATA.stateCohortProfitability.NY = {
  complex: { label:"New York SCN complex-needs profitability design", bcr:{low:1.25,base:1.60,high:2.00}, design:{members:250,weeks:26,meals:10,mealCost:11.15,overhead:3}, anchor:"Mirrors the live CABS shape (up to 6 months per member) priced at the Health Affairs all-in model because the regional SCN rate is not public.", limitation:"Commercial target; the actual SCN rate is contract-level and replaces the $11.15 anchor." },
  diabetes: { label:"New York diabetes targeted-support design", bcr:{low:1.10,base:1.30,high:1.55}, design:{members:200,weeks:16,meals:5,mealCost:11.15,overhead:3}, anchor:"Lower-intensity design keeps the required net PMPM defensible for a screening cohort.", limitation:"Planning target, not a published NY outcome." },
  heart: { label:"New York heart-failure post-discharge design", bcr:{low:1.25,base:1.80,high:2.30}, design:{members:120,weeks:8,meals:10,mealCost:11.15,overhead:4}, anchor:"Short post-discharge design; avoided readmissions are the driver.", limitation:"Planning target." },
  ckd: { label:"New York pre-dialysis CKD design", bcr:{low:1.15,base:1.50,high:1.90}, design:{members:100,weeks:16,meals:7,mealCost:11.15,overhead:6}, anchor:"Renal oversight adds cost and a distinct return requirement.", limitation:"Planning target; renal clinical validation required." }
};
TOOL_DATA.stateCohortProfitability.CA = {
  complex: { label:"California CalAIM complex-needs profitability design", bcr:{low:1.25,base:1.65,high:2.05}, design:{members:200,weeks:12,meals:10,mealCost:9.50,overhead:3}, anchor:"12-week design matches the DHCS MTM cap (eff. 1/1/2026) and the live Anthem program shape; priced at the DHCS benchmark midpoint.", limitation:"Benchmark pricing is non-binding; MCP contracts replace it." },
  diabetes: { label:"California diabetes targeted-support design", bcr:{low:1.10,base:1.32,high:1.58}, design:{members:200,weeks:12,meals:5,mealCost:9.50,overhead:3}, anchor:"Lower intensity within the 12-week Community Supports window.", limitation:"Planning target, not a published Medi-Cal outcome." },
  heart: { label:"California heart-failure post-discharge design", bcr:{low:1.25,base:1.85,high:2.35}, design:{members:120,weeks:8,meals:10,mealCost:9.50,overhead:4}, anchor:"Eight-week post-discharge design inside the CalAIM cap; concentrated readmission opportunity.", limitation:"Planning target." },
  ckd: { label:"California pre-dialysis CKD design", bcr:{low:1.15,base:1.52,high:1.92}, design:{members:100,weeks:12,meals:7,mealCost:9.50,overhead:6}, anchor:"Renal design inside the 12-week window with medical-necessity extension as the continuation path.", limitation:"Planning target; extension requires documented medical necessity." }
};

TOOL_DATA.pilotPresets.splice(TOOL_DATA.pilotPresets.findIndex(p => p.id === "custom"), 0,
  { id:"ny_cabs_real", label:"New York — the LIVE CABS × CookUnity SCN program (home market)", state:"NY", cohort:"complex",
    populationBasis:"ny_cabs", eligibleShare:100, members:500, weeks:26, meals:10, mealCost:11.15, overhead:3,
    evidenceBasis:"pitch", scenario:"base", bcr:{low:1.20,base:1.55,high:1.95}, funding:"ny_scn",
    intervention:"Medically tailored home-delivered meals", geo:"Brooklyn / NYC — Public Health Solutions SCN region",
    trigger:"CookUnity's actual live Medicaid program: ≥500 members over 12 months, up to 6 months of meals each, funded through the NYHER Social Care Network mechanism (reimbursement live since January 2025)",
    note:"THE flagship: this models the program CookUnity runs today. Meals/week is payer-set (10/week follows the JAMA standard); the regional SCN per-meal rate is contract-confidential, so the $11.15 Health Affairs all-in model anchors price. Funding route shows ACTIVE — the only state mechanism in this tool already paying CookUnity." },
  { id:"ca_anthem_real", label:"California — the LIVE Anthem CalAIM program (home market)", state:"CA", cohort:"complex",
    populationBasis:"ca_anthem", eligibleShare:0.1, members:200, weeks:12, meals:10, mealCost:9.50, overhead:3,
    evidenceBasis:"pitch", scenario:"base", bcr:{low:1.20,base:1.60,high:2.00}, funding:"ca_calaim",
    intervention:"Medically tailored home-delivered meals", geo:"Sacramento County (statewide Medi-Cal expansion planned 2026)",
    trigger:"CookUnity's second live Medicaid program: weekly MTM delivery up to 90 days under CalAIM Community Supports (announced November 2025), phase 1 = hundreds of households",
    note:"Models the live Sacramento program at the DHCS benchmark midpoint ($9.50). The 12-week duration IS the DHCS cap (eff. 1/1/2026) — a regulatory shape, not a guess. Dosing note: if California's updated MTM definition's two-thirds-of-daily-food standard applies to the program, intensity moves toward 14–21 meals/week (2–3/day) — confirm the required dosing in plan design before pricing. Expansion story: statewide Medi-Cal in 2026." }
);

// The National Playbook — state prioritization (rendered in its own tab).
TOOL_DATA.statePlaybook = {
  updated: "July 16, 2026",
  policyWeather: "2025 federal actions narrowed HRSN flexibility (the March 2025 CMS rescission of the HRSN 1115 framework; DSHP financing phase-out) — existing waivers stand but new approvals are case-by-case. GTM rule: sell where dollars are already appropriated and contracting; treat proposed-waiver states as watchlist, not pipeline.",
  states: [
    { state:"New York", tier:"1 — NOW (live market)", mechanism:"NYHER 1115 → nine regional Social Care Networks; nutrition reimbursement live since Jan 2025; up to $500M SCN pool", rate:"Regional, contract-confidential (SCN-set from county food costs)", cookunity:"LIVE — CABS Brooklyn (≥500 members) + EmblemHealth Ornish program", whyNow:"The waiver expires March 31, 2027 — every program needs renewal-proof evidence generated NOW, and CookUnity is already inside the mechanism.", play:"Expand from the live footprint: more SCN regions, more MCOs (MetroPlus → Healthfirst), more conditions." },
    { state:"California", tier:"1 — NOW (live market)", mechanism:"CalAIM Community Supports (ILOS) — MTM a named, priced benefit since 2022; 12-week cap eff. 1/1/2026", rate:"$9.50/meal midpoint published ($7–$12 band, non-binding)", cookunity:"LIVE — Anthem Sacramento (Nov 2025); statewide expansion planned 2026", whyNow:"The Anthem expansion is scheduled — the question is which counties and plans come next, not whether the mechanism works.", play:"Ride the Anthem expansion; open L.A. Care and Health Net; map county-level Community Supports elections." },
    { state:"Massachusetts", tier:"2 — NEXT (premium market)", mechanism:"1115 HRSN Supplemental Services, authorized through 12/31/2027", rate:"$14.86 expected / $18.58 max per MTM — the HIGHEST published state rate; up to 21 meals/week", cookunity:"No public program today", whyNow:"The strongest local evidence in the country (the Nature Medicine study is a Massachusetts Medicaid study) plus the only fee schedule that clears CookUnity's retail floor with room.", play:"Premium-rate entry: lead with the in-state Nature Medicine evidence and the published rate." },
    { state:"North Carolina", tier:"2 — NEXT (reactivation window)", mechanism:"HOP 1115 — suspended July 2025; $25M one-time restart in the July 2026 budget ($9M state + $16M federal)", rate:"$7.92/meal (2024 schedule; new schedule pending restart)", cookunity:"No public program today", whyNow:"A funded restart at reduced scale means competitive vendor selection is imminent — positioning happens before the rules publish.", play:"Reactivation positioning: network readiness + adherence-value sell against the low-rate floor." },
    { state:"Louisiana", tier:"2 — BEACHHEAD (relationship moat)", mechanism:"No statewide food authority — MCO ILOS / value-add / quality budgets; ACLA's president publicly cited LDH permission to cover MTM (Fall 2025)", rate:"None published — $11.15 Health Affairs model anchors planning", cookunity:"No program; consumer delivery LIVE-VERIFIED to Baton Rouge + Lafayette (7/16/2026)", whyNow:"UHC's exit reassigned ~330K members to five plans (live churn trigger); a covered-benefit signal already exists; first-in-state = flagship story.", play:"Relationship-led MCO pilot: the CABS/Anthem playbook applied to a new state, powered by in-state relationships." },
    { state:"D-SNP / MA supplemental (nationwide)", tier:"1 — NOW (faster cycles)", mechanism:"SSBCI (three-prong chronically-ill gate, documented) + supplemental benefits; VBID's broad food path terminated end-2025, making SSBCI the dominant channel", rate:"Plan-negotiated — margins healthier than Medicaid ILOS per-meal rates", cookunity:"Natural fit: member-experience edge monetizes directly against Stars/CAHPS", whyNow:"KFF 2026 landscape: food-and-produce SSBCI is offered to just 8% of individual-plan enrollees (~1.8M people) but 93% of SNP enrollees — the food benefit is structurally a SNP/D-SNP product, so the lane IS the market. Faster contracting cycles than Medicaid procurement; the CMS-4205-F mid-year unused-benefit notice requirement hit its first mandatory June 30–July 31 window in 2026 — but CMS paused enforcement (announced July 29, 2025) and is weighing rollback, so plans face an unused-supplemental-benefit transparency spotlight with uneven compliance. Either way, benefit-utilization conversations are live.", play:"Sell the SSBCI qualification event as a documented screen wired to an intervention; Stars/HEDIS/CAHPS framing; the adherence edge is the pitch." },
    { state:"OR / WA / PA / DE (watchlist)", tier:"3 — WATCH (verify authority)", mechanism:"Among the 16 states with approved nutrition-service 1115 demonstrations (KFF waiver tracker, cited by NGA 2025)", rate:"Varies / not verified in this tool", cookunity:"No public programs", whyNow:"The March 2025 CMS rescission makes proposed-waiver status unstable — verify current authority before spending cycles.", play:"Monitor waiver dockets; enter only on confirmed, funded authority." }
  ]
};

TOOL_DATA.sources.unshift(
  {name:"Meltzer et al., JGIM 2024 (UPenn) — screening modality equity gradient", supports:"Of 24,597 eligible patients, 37.0% completed HRSN screening; tablet (point-of-care) completers were 62.8% Black / 19.7% Medicaid and screened POSITIVE at 35.6% vs. 19.6% via patient portal — the portal channel systematically misses the highest-need members", date:"Published 2024", confidence:"High — peer-reviewed", limitation:"Single health system; portal-vs-tablet gradient may vary by population.", url:"https://link.springer.com/article/10.1007/s11606-024-08630-z"},
  {name:"CMS Accountable Health Communities Model — final evaluation (RTI)", supports:"Largest HRSN screening test ever: 1.1M+ Medicare/Medicaid beneficiaries screened in person at point of care; 37% positive for ≥1 need; $200M+ net savings with reduced ED use; 79% of eligible beneficiaries opted into navigation", date:"Final evaluation report", confidence:"High — federal model evaluation", limitation:"Model population and navigation design differ from any single plan's program; use as benchmark, not guarantee.", url:"https://www.cms.gov/priorities/innovation/innovation-models/ahcm"},
  {name:"Screening-modality architecture (methodology)", supports:"Evidence-ranked cascade: self-administered digital first (self-administration ≈1.3x more honest disclosure of sensitive items vs. interviewer; SMS over portal — 28% of under-$30K households smartphone-dependent, Pew 2025), point-of-care tablet backstop, CHW face-to-face for the positive-dense tail, phone as warm follow-up only (~75% never answer unknown numbers; robocalls at a six-year high; ~10% annual Medicaid phone churn). Realistic completion bands: 20–30% telephonic / 35–55% digital-first / 60–75%+ with in-person backstop. Passive data (ADI/SVI ≤42% sensitivity vs. self-report; Z-codes documented on 0.5–2.4% of encounters) prioritizes outreach but cannot satisfy HEDIS SNS-E. NC referral data: only ~32.7% of referrals initiate service within 4 weeks — the 'bridge to nowhere' risk; for food-insecure positives a meal program IS the capacity", date:"Compiled July 17, 2026 from peer-reviewed + federal-evaluation sources; completion bands partly vendor-derived (directional)", confidence:"Mixed — each figure labeled; bands are planning guidance, not guarantees", limitation:"Louisiana-specific completion benchmarks are unpublished — validate against the pilot before writing bands into any contract.", url:"https://www.pewresearch.org/internet/fact-sheet/mobile/"},
  {name:"Berkowitz et al., Health Affairs 2018 — dual-eligible MTM cohort", supports:"Second peer-reviewed anchor: 50% fewer inpatient admissions, 70% fewer ED visits, ~$220 net savings per member per month (~16%) among dual-eligible MTM recipients", date:"Published 2018", confidence:"High — peer-reviewed", limitation:"Observational; dual-eligible population; not Louisiana-specific.", url:"https://www.healthaffairs.org/doi/10.1377/hlthaff.2017.0999"},
  {name:"Vendor-reported program results (GREY LITERATURE — rank below peer-reviewed/actuarial)", supports:"Mom's Meals × AmeriHealth Caritas DC: reported $10M total cost reduction, 20% fewer post-discharge readmissions (65% in the chronic-conditions cohort); a UnitedHealthcare Community & State spotlight cited a 45% readmission drop after a 90-day Medicaid meal benefit; CookUnity's own materials note meal benefits are often used by FEWER THAN 8% of eligible members (the engagement pain the chef-quality thesis sells against)", date:"Vendor/plan case studies, 2020s", confidence:"Vendor-reported — always label as such", limitation:"Not peer-reviewed; present after JAMA/Health Affairs/actuarial evidence in the hierarchy, never first.", url:"https://www.momsmeals.com/"},
  {name:"NYHER 1115 waiver / Social Care Networks", supports:"~$7.5B over 3.25 years (approved 1/9/2024, expires 3/31/2027); nine regional SCN lead entities; nutrition reimbursement live since January 2025; up to 6 months of meals (renewable once; ~11 months high-risk pregnancy); Brooklyn region led by Public Health Solutions", date:"Waiver approved Jan 2024; program live Jan 2025; verified July 16, 2026", confidence:"High — official NYSDOH SCN pages + CMS-approved rate methodology", limitation:"Regional per-meal rates are not public; waiver renewal beyond March 2027 is not guaranteed.", url:"https://www.health.ny.gov/health_care/medicaid/redesign/sdh/scn/navigating_reimbursement.htm"},
  {name:"National Playbook prioritization methodology", supports:"State tiering across NY / CA / MA / NC / LA + watchlist: live mechanism, published rate, CookUnity presence and timing trigger per state; 16 states with approved/proposed MTM waivers as of Jan 2025", date:"Compiled July 16, 2026", confidence:"Per-cell — each state row traces to the sources above", limitation:"Editorial prioritization for interview/planning use; the 2025 federal HRSN posture makes watchlist states unstable.", url:"https://www.healthaffairs.org/doi/10.1377/hlthaff.2024.01307"},
  {name:"New York / California starter cohort estimates", supports:"NY ~1.8M and CA ~3.5M adults with diagnosed diabetes; heart-failure (~2% of adults) and CKD (~14% of adults) scaling for starter planning inputs", date:"Commonly cited public-health scale figures — July 2026", confidence:"Low-to-moderate — planning inputs only", limitation:"All-payer, not Medicaid-specific; labeled starter estimates that must be replaced with SCN/MCP claims.", url:"https://www.cdc.gov/diabetes/php/data-research/index.html"}
);



// ------------------------------------------------------------------
// VERSION 12 — RFP RESPONSE BUILDER + MEDICAID REGULATORY WATCH
// Built July 17, 2026 — the same day the culture interview surfaced
// two questions ("have you written an RFP?" / "do you keep up with
// regulations?"). Both are now product features.
// ------------------------------------------------------------------

TOOL_DATA.rfpTypes = [
  {id:"state", label:"State Medicaid agency procurement (RFP/RFA/ITN)", note:"Formal competitive procurement — strict format compliance, mandatory forms, scored sections, public-records exposure. Deadlines are hard; late = disqualified. The vehicle shapes strategy: RFPs score as-submitted; ITNs (e.g., Florida) add a negotiation + best-and-final-offer phase where terms can move; many states gate with a minimum technical score (~70%)."},
  {id:"mco", label:"MCO / health plan vendor RFP", note:"Plan-run vendor selection — usually lighter format, heavier on outcomes, implementation credibility and pricing. Relationships matter before and after the drop."},
  {id:"scn", label:"SCN / network provider application (NY-style)", note:"Application to join an HRSN network (e.g., a Social Care Network lead entity) — eligibility, service capacity, geography, data/reporting readiness."},
  {id:"rfi", label:"RFI / market sounding response", note:"Not a bid — a chance to shape the eventual RFP. Educate the buyer, plant your differentiators as requirements, ask smart questions back."}
];

TOOL_DATA.rfpChecklist = [
  "CAPTURE — the win starts before the RFP drops (industry rule of thumb: ~70% capture, ~30% writing). Track the state's waiver renewals, quality strategy and enabling legislation (the Reg Watch tab), build the buying-committee relationships (the Stakeholder Map), and answer RFIs — RFI responses shape the requirements you'll later bid against.",
  "CAPTURE — analyze the incumbent honestly before bidding: results, corrective-action history, enrollment share, network reach. Then make a real bid/no-bid call against every mandatory gate (licensure, minimum experience, solvency). If you can't clear a mandatory, cure it by teaming — or no-bid.",
  "DAY ONE — build the compliance matrix immediately: shred the RFP into every single requirement and map each to a proposal section and a named owner. It is the most reliable safeguard against fatal non-compliance and doubles as the writing roadmap.",
  "DAY ONE — read the ENTIRE document twice before writing: mandatory forms, page limits, font/format rules, submission portal, Q&A deadline. One missed mandatory item is fatal regardless of quality.",
  "BLACKOUT — the moment the solicitation posts, contact rules change. Honor the blackout / cone-of-silence absolutely: multibillion-dollar awards have been overturned on conflict-of-interest appearances alone.",
  "WRITE — submit clarifying questions by the Q&A deadline; incorporate every addendum into the compliance matrix the day it lands.",
  "WRITE — confirm eligibility gates early: licensure, insurance certificates (GL/professional/cyber), W-9, financial statements, MWBE/DBE status, HIPAA/BAA readiness, data-security attestations.",
  "WRITE — map every scored section to the evaluation rubric and allocate page budget by points. Write to the score sheet, not to your own outline; answer the question asked, in the state's own vocabulary (waiver names, program names, quality-strategy language).",
  "WRITE — win themes use the APMP formula: a buyer hot-button + a discriminator (something few competitors offer) + a proof point. Keep 3–4 themes and thread them through every section.",
  "WRITE — past performance: 2–3 references with named programs, dates, scale and measurable results (CABS, Anthem Sacramento, EmblemHealth are CookUnity's public anchors).",
  "WRITE — pricing: anchor to the published rate band, state assumptions explicitly (meals/week, duration, delivery area), and offer an outcomes-based component where allowed.",
  "WRITE — name the implementation team and the week-by-week first-90-days plan; buyers score believability, not ambition, and states run formal readiness reviews before go-live.",
  "PROTEST-PROOF — never overstate capacity or coverage. Louisiana rescinded a ~$21B award cycle after a winning bidder's provider list included hundreds of doctors who didn't accept Medicaid. Claim only what you can evidence — this tool's verified-source discipline IS the protest-proofing.",
  "REVIEW — color-team it: Pink (structure + compliance at ~30–50% draft), Red (score it exactly as the state's panel would at ~60–80% — reviewers must NOT be the writers), Gold (executive final), White Glove (formatting + final compliance). Write the executive summary LAST.",
  "SUBMIT — upload EARLY and verify receipt; late = rejected regardless of quality. Keep proof of submission, and know the protest window and rules — you may be on either side of one."
];

// Where Medicaid procurements actually post — the revenue-event watchlist
// that pairs with the Reg Watch policy feed.
TOOL_DATA.procurementPortals = [
  {name:"Louisiana — LaPAC (Office of State Procurement)", url:"https://www.doa.la.gov/doa/osp/", note:"State agency solicitations incl. LDH. Local public entities (school boards, parishes) often post on Central Bidding instead — watch both."},
  {name:"New York — NYS Contract Reporter", url:"https://www.nyscr.ny.gov/", note:"State contracting opportunities; SCN network-provider openings also flow through SCN lead entities directly."},
  {name:"California — Cal eProcure", url:"https://caleprocure.ca.gov/", note:"State solicitations; Medi-Cal MCP vendor selection typically runs plan-side — track MCP procurement pages too."},
  {name:"North Carolina — eProcurement / IPS", url:"https://eprocurement.nc.gov/", note:"Watch for HOP-restart vendor and network solicitations as the $25M restart rules publish."},
  {name:"Texas — Electronic State Business Daily (ESBD)", url:"https://www.txsmartbuy.com/esbd", note:"The biggest Medicaid procurements in the country post here; protest-prone — read award histories."},
  {name:"Florida — MyFloridaMarketplace / AHCA", url:"https://www.myfloridamarketplace.com/", note:"SMMC re-procures on a statutory 6-year cycle; ITN vehicle with negotiation + BAFO."},
  {name:"Massachusetts — COMMBUYS", url:"https://www.commbuys.com/", note:"The premium-rate MTM market; watch MassHealth HRSN service procurements."},
  {name:"Federal — SAM.gov", url:"https://sam.gov/", note:"Federal Medicaid data/analytics and CMS-adjacent work."},
  {name:"Paid intelligence — HMA (HMAIS) / OPEN MINDS", url:"https://www.healthmanagement.com/", note:"Commercial trackers of upcoming state RFP cycles and re-procurement calendars — worth proposing as a CookUnity subscription, not a personal buy."}
];

// Standing policy baseline — always visible in the Regulatory Watch tab,
// independent of the daily feed. Each fact verified July 16–17, 2026.
TOOL_DATA.regBaseline = [
  {fact:"CMS rescinded the HRSN 1115 framework March 4, 2025 — existing waivers stand; new/expansion approvals are case-by-case.", why:"The single biggest headwind. Sell where dollars are already appropriated.", url:"https://www.medicaid.gov/medicaid/section-1115-demonstrations/health-related-social-needs/index.html"},
  {fact:"NYHER 1115 (New York): nutrition reimbursement live since Jan 2025 through nine Social Care Networks; waiver expires March 31, 2027.", why:"CookUnity's home mechanism (CABS). The 2027 cliff makes evidence-generation urgent NOW.", url:"https://www.health.ny.gov/health_care/medicaid/redesign/sdh/scn/navigating_reimbursement.htm"},
  {fact:"CalAIM Community Supports (California): MTM a named, priced benefit ($7–$12 benchmark, $9.50 midpoint); 12-week MTM cap effective 1/1/2026 (extendable for medical necessity).", why:"The mechanism behind Anthem × CookUnity Sacramento; the 12-week shape is regulatory, not arbitrary.", url:"https://www.dhcs.ca.gov/wp-content/uploads/2026/05/Community-Supports-Pricing-Resource.pdf"},
  {fact:"North Carolina HOP: suspended July 1, 2025; the July 2026 state budget restored $25M one-time ($9M state + $16M federal) to resume at reduced scale — restart mechanics unsettled as of mid-July 2026.", why:"A live reactivation window with competitive vendor selection coming.", url:"https://www.northcarolinahealthnews.org/2026/07/01/nc-full-budget-reflects-transformed-health-landscape/"},
  {fact:"MassHealth HRSN Supplemental Services: authorized through 12/31/2027; the highest published MTM rate ($14.86 expected / $18.58 max; up to 21 meals/week).", why:"The premium-rate market, and home of the Nature Medicine evidence.", url:"https://www.mass.gov/doc/hrsn-supplemental-services-fee-schedule-3/download"},
  {fact:"2024 Managed Care Final Rule (CMS-2439-F, eff. 7/9/2024): broadened ILOS to longer-term substitutes that 'reduce or prevent future need,' formalizing HRSN substitutes including medically tailored meals; total ILOS cost capped at 5% of capitation.", why:"The workhorse authority that lets an MCO pay for meals TODAY without a waiver.", url:"https://www.federalregister.gov/documents/2024/05/10/2024-08085/medicaid-program-medicaid-and-childrens-health-insurance-program-chip-managed-care-access-finance"},
  {fact:"Louisiana: no statewide Medicaid food authority; ACLA's market president publicly stated (Fall 2025) that LDH permitted MTM as a covered benefit; UHC exited LA Medicaid 4/1/2026 (~330K members reassigned).", why:"The beachhead: covered-benefit signal + member-churn trigger + zero incumbent.", url:"https://ldh.la.gov/medicaid/medicaid2026"},
  {fact:"2024 Managed Care Final Rule phase-ins the plans are bracing for: appointment wait-time standards (routine primary care/OB-GYN ≤15 business days, outpatient MH/SUD ≤10, at ≥90% availability) apply for rating periods beginning July 9, 2027; independent secret-shopper surveys phase in by 2029; a Medicaid/CHIP Quality Rating System is coming; 85% MLR reporting tightened.", why:"Fluency marker: access standards are the plans' next compliance burden. A vendor who knows their timeline talks like a partner, not a caterer — and meals-as-avoidable-utilization helps the exact metrics plans will be rated on.", url:"https://www.federalregister.gov/documents/2024/05/10/2024-08085/medicaid-program-medicaid-and-childrens-health-insurance-program-chip-managed-care-access-finance"},
  {fact:"OIG Advisory Opinion 26-16 (posted July 14, 2026): the FIRST published favorable federal opinion on a provider-sponsored food-as-medicine program — an FQHC giving free produce/vouchers to chronic-condition, financially-needy patients. OIG found kickback/inducement law implicated but exercised enforcement discretion given the safeguards (clinical objective, limited eligibility, capped value and duration, monitoring). Companion caution: AO 26-15 (June 30, 2026) rejected a referral-management software deal — platform fees must be fair-market-value and never referral-based.", why:"Days-old ammunition: the federal compliance door for provider-sponsored food programs just opened publicly — with a safeguard blueprint any CookUnity provider deal should copy. AOs bind only their requestor, but they telegraph OIG's analysis.", url:"https://oig.hhs.gov/compliance/advisory-opinions/"},
  {fact:"MEDICARE-SIDE MIRROR (verified 7/17/2026): SNP HRAs are MANDATORY (42 CFR 422.101(f) — initial within 90 days of enrollment + annually) and since CY2024 must screen housing stability, food security and transportation (CY2023 final rule CMS-4192-F) — with results required to be addressed in the individualized care plan. Meanwhile the payment value of screening-without-follow-up is collapsing: OIG (Oct 2024, OEI-03-23-00380) tied $7.5B of 2023 risk payments to diagnoses appearing ONLY on HRAs with no other service; CMS now RADV-audits all ~550 MA contracts annually with extrapolation (May 2025); and the CY2027 Rate Announcement (April 2026) excludes unlinked chart-review and audio-only diagnoses from risk scores. HRA diagnoses themselves still pay — full exclusion remains MedPAC recommendation + the un-enacted No UPCODE Act.", why:"The Medicare Advantage door for the HRSN field screener: SNP HRAs already must cover the screener's exact domains, and a screen WIRED TO A DOCUMENTED INTERVENTION converts audit exposure into defensible care plus quality credit — same closed-loop logic as Medicaid SNS-E, two books, one tool. Precision tripwires: attribute the housing/food/transportation HRA-question mandate to the CY2023 rule effective CY2024 (never the CY2025 rule), and say 'audit exposure and direction of travel' — never 'HRA diagnoses are already excluded.'", url:"https://oig.hhs.gov/reports/all/2024/medicare-advantage-questionable-use-of-health-risk-assessments-continues-to-drive-up-payments-to-plans-by-billions/"},
  {fact:"THE DUAL TRIGGER IS THE GATE (positioning-critical; per Manatt's summary of California's updated MTM/MSF definition — VERIFY against the current DHCS Community Supports policy guide before quoting in a proposal): CalAIM refocused meal eligibility on whether the member 'has a nutrition-sensitive health condition — whether or not the Member may also be experiencing food insecurity,' requires an RDN-conducted/overseen nutrition assessment, specifies medically tailored meals constitute two-thirds of the member's food, documents medical necessity in clinical notes (Z-code Z59.48 usable) — and states that meals 'solely addressing food insecurity will not be covered.' NY SCN enhanced services likewise target 11 criteria-defined high-utilizer populations; NC HOP required a qualifying condition AND a social risk factor. Everywhere that pays, the CLINICAL trigger gates eligibility.", why:"THE positioning rule: lead with HRSN clinical targeting and ROI (dual trigger: nutrition-sensitive condition + screened, Z-coded need), never macro SDOH/food-insecurity/dignity framing — in California, food-insecurity-only meals are literally non-covered. Chef quality is the adherence MECHANISM behind the ROI, not the headline. The 2025-26 federal pullback makes ROI proof MORE decisive, not less.", url:"https://www.manatt.com/insights"},
  {fact:"THE SCREENING FRONT DOOR IS FRAGMENTING (verified 7/17/2026): CMS's attempt to fold agent HRA payments into the broker-compensation cap NEVER took effect — stayed July 2024, vacated August 2025, not appealed (CMS's own June 2026 memo confirms pre-2025 rules remain) — but carriers gutted the channel voluntarily under OIG scrutiny: standard-MA agent HRA payments are gone (Aetna June 2024; UHC for 2025) while SNP HRA payments survive at only $35–$125 (Humana $35 / UHC $50 / Aetna $55 / Elevance $125, AEP-2026 tables). Members can always decline (SNPs: three documented attempts, refusal documented). And the food-benefit gate tightened: the VBID model — the broad food-benefit pathway — TERMINATED at end of 2025 (CMS cited ~$2.3B CY2021 / ~$2.2B CY2022 excess costs across 62 participating organizations, ~7M enrollees), leaving the three-prong SSBCI chronically-ill gate (documented, plan-verified) as the dominant food channel, with public eligibility criteria + real-time debit-card verification coming CY2027 — and the CMS-4205-F mid-year unused-supplemental-benefit notice requirement hitting its first mandatory June 30–July 31 window in 2026, though CMS paused enforcement (announced July 29, 2025) and is weighing rollback, so actual mailbox delivery is uneven.", why:"The engagement thesis with a LIVE catalyst: every traditional screening channel is shrinking while unused-supplemental-benefit transparency is now a named CMS policy fight — plans that get ahead of it voluntarily win the Stars/CAHPS story. A benefit members opt INTO (chef-quality meals) is the highest-completion screening moment a plan has — the field screener + referral log rides it, and the SSBCI qualification IS a documented health screen. Precision tripwire: never say 'carriers no longer pay agents for HRAs' — SNP payments survive; say 'the standard-MA payment is gone and the rest got cut to $35–$125 on SNPs only.'", url:"https://medicareadvocacy.org/court-strikes-down-key-medicare-marketing-regulations/"},
  {fact:"HEDIS SNS-E — Social Need Screening and Intervention (MY2023+, reported via ECDS): plans are measured on screening members for food, housing and transportation needs AND delivering a corresponding intervention within 30 days of a positive screen. NCQA Health Equity Accreditation adds parallel pull.", why:"The measure that makes a trusted screener with PROVABLE closed-loop follow-through directly valuable to a plan: the field screener's referral log computes interventions-within-30-days — the SNS-E numerator shape — from de-identified data. Sell the closure rate and the reporting, never the roster.", url:"https://www.ncqa.org/hedis/measures/social-need-screening-and-intervention/"},
  {fact:"Community health worker services are REIMBURSABLE: Louisiana Medicaid has paid CHW services incident-to a supervising physician/APRN/PA since Jan 1, 2022 (SPA 22-0003; CPT 98960–98962 professional, ~$18.11/30 min; T1015/H2020 FQHC/RHC; qualifying E/M within 30 days; 2 hrs/day, 10 hrs/month caps; CHW qualifies via LA CHW Workforce Coalition-recognized training or 3,000 documented hours). Medicare added CHI codes G0019/G0022 and PIN codes G0023/G0024 in 2024. G0136 stopped being an SDOH-assessment code 1/1/2026. A rate increase (~$51 vs $18.11 per 30 min) was under LDH Medicaid Advisory Committee discussion as of May 2026.", why:"The business-model unlock for the community layer: CHW-run HRSN screening under clinical supervision is a BILLABLE service line, not charity — the trusted-messenger enrollment engine can fund itself. Discipline required: documented supervision, initiating visit, time logs, consent, Z-codes (False Claims Act surface).", url:"https://ldh.la.gov/page/medicaid"}
];

TOOL_DATA.regSources = [
  {name:"Federal Register — Medicaid documents", url:"https://www.federalregister.gov/documents/search?conditions%5Bterm%5D=Medicaid", what:"Every proposed/final rule and notice touching Medicaid (pulled automatically by the updater)."},
  {name:"Medicaid.gov — 1115 demonstrations & HRSN", url:"https://www.medicaid.gov/medicaid/section-1115-demonstrations/index.html", what:"Waiver approvals, amendments and the HRSN framework status."},
  {name:"CMS Newsroom", url:"https://www.cms.gov/newsroom", what:"Agency announcements, guidance and enforcement posture."},
  {name:"NY DOH — Social Care Networks", url:"https://www.health.ny.gov/health_care/medicaid/redesign/sdh/scn/", what:"SCN program rules, rates methodology and reimbursement updates."},
  {name:"CA DHCS — CalAIM Community Supports", url:"https://www.dhcs.ca.gov/", what:"Community Supports policy guides, pricing resources and MCP elections."},
  {name:"NC DHHS / NC Medicaid — Healthy Opportunities", url:"https://www.ncdhhs.gov/about/department-initiatives/healthy-opportunities/healthy-opportunities-pilots", what:"HOP restart rules, fee schedules and evaluation reports."},
  {name:"LDH — Louisiana Medicaid", url:"https://ldh.la.gov/page/medicaid", what:"Managed-care changes, enrollment trends and rate certifications."},
  {name:"MassHealth — HRSN Supplemental Services", url:"https://www.mass.gov/", what:"Fee schedules and 1115 amendments in the premium-rate market."}
];

TOOL_DATA.sources.unshift(
  {name:"Regulatory Watch methodology", supports:"Daily-refresh feed (Federal Register API + targeted news queries via the bundled updater script) layered over a verified standing policy baseline; every baseline fact carries its source", date:"Built July 17, 2026", confidence:"Feed items are leads, not verified facts — click through before citing", limitation:"News items are unverified until read; the baseline facts were verified July 16–17, 2026 and age from that date.", url:"https://www.federalregister.gov/documents/search?conditions%5Bterm%5D=Medicaid"},
  {name:"RFP Response Builder methodology", supports:"Draft RFP-response scaffolding generated from the selected state model, pilot design, published rate anchors, CookUnity public case studies and the tool's measurement/compliance frameworks", date:"Built July 17, 2026", confidence:"Draft-quality output — every generated section requires human editing and verification against the actual RFP document", limitation:"A scaffold, not a submission. Format compliance, mandatory forms and final pricing are always document-specific.", url:"https://www.cookunity.com/business/for-healthcare"}
);



// ------------------------------------------------------------------
// VERSION 13.1 — SALES KIT (front-of-funnel coverage)
// Outreach composer templates, per-persona discovery bank, and
// objection/competitor battlecards. Completes end-to-end coverage of
// the sales motion: strategy -> account -> OUTREACH -> DISCOVERY ->
// qualification -> pilot -> proposal -> close -> measure -> expand.
// ------------------------------------------------------------------

TOOL_DATA.outreachRules = [
  "First touch is PLAIN TEXT and money-first. No links, no video, no attachments, no images — they trip filters and read as blast mail.",
  "One buyer problem, one proof point, one small ask (15 minutes). Never two asks.",
  "Reference the account's LIVE hook (their program, their market event) — never open with CookUnity's features.",
  "LinkedIn connection notes are ~300 characters — one sentence of relevance, one ask.",
  "Never name another plan's private conversations. Public facts only.",
  "Follow-up cadence: day 3 (add one new fact), day 8 (different channel), day 15 (final, give them an easy no). Then park with a revisit date in the Deal Desk."
];

TOOL_DATA.outreachPersonas = [
  {id:"president", label:"Plan president / CEO (economic sponsor)", angle:"portfolio economics + first-mover story", ask:"15 minutes to show the break-even math"},
  {id:"cmo", label:"CMO / medical director (clinical sign-off)", angle:"adherence-driven outcomes + evidence hierarchy", ask:"15 minutes to walk the clinical evidence and eligibility design"},
  {id:"pophealth", label:"Population health / care management (program owner)", angle:"member identification + a referral workflow that actually runs", ask:"15 minutes on how the cohort gets found and fed"},
  {id:"quality", label:"Quality / health equity (measure owner)", angle:"HEDIS SNS-E numerator + provable loop closure", ask:"15 minutes on screening-to-intervention reporting"},
  {id:"state", label:"State agency / SCN lead (mechanism owner)", angle:"network capacity + evidence-generation for renewal", ask:"a brief conversation about network readiness"}
];

TOOL_DATA.discoveryBank = {
  "Plan president / CEO": [
    "What is the cost trend that keeps showing up in your board deck — readmissions, high-cost members, pharmacy?",
    "Where does food-as-medicine sit on your priority list this year — funded initiative, watch list, or noise?",
    "If a nutrition pilot paid for itself in avoided admissions, whose budget would it live in?",
    "What would a vendor have to prove in 12 weeks for you to expand them statewide?",
    "Who else has pitched you meals — and why did it go nowhere?"
  ],
  "CMO / medical director": [
    "Which cohort worries you most clinically right now — post-discharge CHF, uncontrolled diabetes, pre-dialysis CKD?",
    "What evidence standard do you need — peer-reviewed only, or does actuarial program data count?",
    "How would your team want eligibility defined — claims-triggered, care-manager referral, or screening-based?",
    "What killed the last clinical pilot you ran with an outside vendor?",
    "Who on your side would own the referral workflow day to day?"
  ],
  "Population health / care management": [
    "How do you identify high-cost, food-insecure members today — claims flags, screening, care-manager judgment?",
    "What happens after a positive food-insecurity screen right now — and can you prove the follow-through?",
    "Where do referrals die in your current workflow?",
    "What is your current meal or food vendor relationship, and what do you wish it did better?",
    "If I handed you 150 eligible members tomorrow, what breaks first — outreach, consent, or delivery?"
  ],
  "Quality / health equity": [
    "How are you doing on SNS-E — screening rate is one thing, but where is the intervention numerator?",
    "Which HEDIS measures are within striking distance of the next rating threshold?",
    "What does your health-equity report to the state need that you cannot produce today?",
    "How do you currently document that a community referral actually landed?",
    "Would provable loop-closure reporting from a food program help your NCQA Health Equity story?"
  ],
  "State agency / SCN lead": [
    "What does network adequacy look like for nutrition services in your regions — where are the deserts?",
    "What evidence do you need to generate before the waiver or program renewal conversation?",
    "How do you decide which providers get contracted into the network — and what disqualifies them?",
    "Where are CBOs struggling with the referral and billing workflow?",
    "What would make a national vendor a good citizen in your network rather than a threat to it?"
  ],
  "Universal closers (any room)": [
    "What would make this a no for you? (Find the landmine early.)",
    "Who besides you has to say yes — and who can say no? (Decision process + economic buyer.)",
    "What does your procurement path look like for something like this? (Paper process — where Medicaid deals stall.)",
    "If the pilot hits its numbers, what happens next — automatically? (Pre-negotiated expansion trigger.)"
  ]
};

TOOL_DATA.objections = [
  {objection:"Too expensive per meal.", response:"Do not defend the meal price — move the denominator: one avoided admission at the HCUP Medicaid average ($14,550) funds well over a thousand meals. The flagship 12-week pilot breaks even at roughly 14–16 avoided stays (preset-dependent — the calculator shows the exact number live) against a cohort defined by recent utilization. And we will structure an outcomes-based component so you are sharing risk, not just spend."},
  {objection:"Is this even permissible in Medicaid? How would we pay?", response:"State-specific, from the tool: ILOS under the 2024 Managed Care Final Rule (capped at 5% of capitation), 1115/HRSN authority where live (NY SCNs, CalAIM Community Supports), quality or care-management budgets, or value-added benefits. Tell me your state and I will tell you the mechanism — that is exactly what my market model maps."},
  {objection:"The evidence is not randomized.", response:"Agree, then reframe: correct — the JAMA cohort is matched observational and I will never present it otherwise. That is why the pilot design fixes an agreed baseline, comparison method and attribution BEFORE launch — we generate YOUR evidence on YOUR claims. The NC result is actuarial program data; the Massachusetts Nature Medicine study is the strongest to date."},
  {objection:"Members will not use it — our current benefits get single-digit engagement.", response:"That is our pitch, not our problem: meal benefits are often used by fewer than 8% of eligible members, because the food is institutional. Chef-crafted, culturally relevant meals members actually WANT is the entire CookUnity thesis — adherence is where outcomes and ROI come from."},
  {objection:"We already work with Mom's Meals / another vendor.", response:"Never attack the incumbent: good — the infrastructure exists. Where we differ is the adherence tier: chef-quality, culturally tailored meals for the members whose outcomes depend on actually eating the food. Run us on the high-acuity cohort and compare completion rates."},
  {objection:"HRSN policy is shaky under this administration.", response:"Meet it head-on — currency is credibility: true, the HRSN framework was rescinded in March 2025, and I only sell where dollars are already appropriated — live SCN contracts in New York, CalAIM in California, plan-level ILOS and quality budgets everywhere else. Policy risk is why the pilot proves out inside one budget cycle."},
  {objection:"Can you actually deliver here?", response:"Facts, not promises: coverage is checkable — I verify delivery zips before I ever propose a geography. CookUnity runs eight kitchens, ~97% continental coverage, and live Medicaid programs in Brooklyn and Sacramento. Delivery feasibility is a gate in my pilot design, not an assumption."},
  {objection:"Send me some information. (the brush-off)", response:"Convert it: happy to — I will send a one-page pilot design built for your population, not a brochure. If the break-even math looks wrong to your actuaries, tell me and I will fix the assumptions. Can I get 15 minutes after they have marked it up?"}
];

TOOL_DATA.battlecards = [
  {competitor:"Mom's Meals", strength:"National scale (48 contiguous states plus AK/HI/PR per their site), deep payer relationships, low-price refrigerated model (self-pay from ~$6.99–7.99/meal per 2026 public menus), decades of MCO contracting — plus a credential and an evidence bar: founding member of FoodMed Certified (the Validation Institute's for-profit food-as-medicine seal; FIMC accreditation is nonprofit-only), and they market their own 2022 survey claiming 97% of members who used the meal benefit were likelier to retain their plan (vendor-stated)", gap:"Mass-produced institutional food — adherence and engagement suffer; limited cultural range; their retention claim is a member survey, not program data", counter:"Concede scale, win on adherence: for members where outcomes depend on actually eating the food — high-acuity, culturally diverse — chef-crafted meals win. Propose the completion-rate comparison, and answer their survey claim with measured activation + reorder data. Internally: push to close the credential gap (pursue FoodMed Certified) so procurement can't check a box we lack. Never quote their revenue — it's private and unverifiable."},
  {competitor:"Instacart Health", strength:"Grocery breadth, 1115/ILOS positioning in ~two dozen states, tech polish", gap:"Groceries require shopping, cooking, mobility — exactly what high-acuity members cannot do", counter:"Different rung of the ladder: groceries serve the food-insecure who can cook. Medically tailored, ready-to-eat meals serve the members driving admissions. We are the clinical tier."},
  {competitor:"NourishedRx / smaller MTM tech vendors", strength:"Health-plan-native workflows, data-integration stories", gap:"Thin kitchen networks — often aggregating third-party food; quality varies by market", counter:"Ask any vendor: who actually cooks the food, and what is the member reorder rate? Our kitchens and 150+ chefs are the product, not a procurement layer."},
  {competitor:"Nonprofit MTM providers (Community Servings model)", strength:"Clinical gold standard, deep evidence (the Nature Medicine meals came from a nonprofit), local trust", gap:"Regional and capacity-capped — cannot scale statewide or multi-state", counter:"Respect, then scale: they proved the model — we industrialize it. Where a nonprofit covers one metro, we cover the state with the same clinical governance, and we happily coexist regionally."},
  {competitor:"Do nothing / internal program", strength:"No procurement, no vendor risk, budget stays inside", gap:"No kitchens, no logistics, no adherence data — internal food programs stall at pilot scale and nobody measures them", counter:"The do-nothing cost is already on your claims: every avoidable admission in the target cohort. Start with 150 members, 12 weeks, an agreed baseline — smaller than most internal pilots, and actually measured."}
];

/* ===== VERSION 14.1 DATA — Stars 2026 reweighting + MA benefit-landscape hard numbers (added 7/19/2026) ===== */
TOOL_DATA.sources.unshift(
  {name:"CMS 2026 Star Ratings (Oct 2025 release) — member-experience reweighting", supports:"Patient-experience/complaints/access measures cut from 4x to 2x weight for the 2026 Star Ratings — member experience now ≈22% of the overall rating, down from ≈33%. The 2026 enrollment-weighted average MA-PD rating is ≈3.98 stars (the simple average is ≈3.66 — know both numbers, they get quoted interchangeably); ~64% of MA-PD enrollees sit in plans rated 4★+. The Health Equity Index replaces the reward factor starting with 2027 Stars, making documented reach into LIS/dual/disabled members a rated asset.", date:"CY2026 Star Ratings technical notes; verified July 19, 2026", confidence:"High — CMS technical notes + KFF/industry summaries", limitation:"Measure-level weights continue shifting as HEI phases in; impact is plan- and contract-specific.", url:"https://www.cms.gov/medicare/health-drug-plans/part-c-d-performance-data"},
  {name:"KFF 2026 MA supplemental-benefit landscape — food-benefit penetration", supports:"Food-and-produce SSBCI benefits are offered to just 8% of individual-plan enrollees (~1.8M people) versus 93% of SNP enrollees — structurally, the MA food benefit is a SNP/D-SNP product. VBID termination context: the model ended 12/31/2025 after CMS cited ~$2.3B (CY2021) and ~$2.2B (CY2022) in excess costs across 62 participating organizations (~7M enrollees).", date:"KFF 2026 MA plan-file analysis; CMS VBID termination announcement", confidence:"High — KFF plan-file analysis + CMS announcement", limitation:"Offer rates are not utilization rates; SSBCI eligibility is member-level (three-prong chronically-ill gate), so eligible ≠ enrolled.", url:"https://www.kff.org/medicare/issue-brief/medicare-advantage-2026-spotlight-a-first-look-at-plan-offerings/"},
  {name:"FoodMed Certified (Validation Institute) — for-profit food-as-medicine credential", supports:"FIMC (Food Is Medicine Coalition) accreditation is limited to nonprofit MTM providers (per STAT reporting), so FoodMed Certified is the quality-credential path open to for-profit vendors — and Mom's Meals is a founding member. A credential gap a payer procurement team can score.", date:"Verified July 2026", confidence:"Moderate-High — trade press + Validation Institute program pages", limitation:"Certification scope/rigor differs from FIMC accreditation; verify current member list before citing in a proposal.", url:"https://validationinstitute.com/"}
);

