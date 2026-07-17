(() => {
"use strict";
const $ = id => document.getElementById(id);
const money = n => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(Number(n)||0);
const pct = n => `${Number(n||0).toFixed(0)}%`;
const now = () => new Date().toISOString();
const storeKey = "medicaid-market-intelligence-v2";
const blankStore = {scenarios:[], opportunities:[], stakeholders:[], pilots:[], knowledge:[], briefs:[]};
let db = loadStore();
let applyingPilotPreset=false;
let currentCalc = null, currentOpportunity = null, currentPilot = "", currentKnowledge = null, currentBrief = "";

function loadStore(){
  try { return {...blankStore, ...JSON.parse(localStorage.getItem(storeKey)||"{}")}; }
  catch { return structuredClone(blankStore); }
}
function persist(){ localStorage.setItem(storeKey, JSON.stringify(db)); renderSaved(); }
function saveItem(type, item){ db[type].unshift({...item,id:crypto.randomUUID?.()||String(Date.now()),savedAt:now()}); persist(); }
function escapeHtml(v=""){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function download(name, text, type="text/plain"){
  const blob=new Blob([text],{type}); const a=document.createElement("a");
  a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
async function copyText(text){ try{await navigator.clipboard.writeText(text); alert("Copied.");}catch{alert("Copy was blocked. Select the text and copy manually.");}}
function stateOptions(){
  return Object.entries(TOOL_DATA.states).map(([k,v])=>`<option value="${k}">${v.name}</option>`).join("");
}
function cohortOptions(){
  return Object.entries(TOOL_DATA.cohorts).map(([k,v])=>`<option value="${k}">${v.label}</option>`).join("");
}
["matchState","econState","oppState","stakeState","pilotState","screenState","briefState"].forEach(id=>$(id).innerHTML=stateOptions());
["matchCohort","cohort","pilotCohort","briefCohort"].forEach(id=>$(id).innerHTML=cohortOptions());
$("pilotPitch").innerHTML=["NC","LA"].map(st=>`<optgroup label="${st==="NC"?"North Carolina":"Louisiana"}">${TOOL_DATA.pilotPresets.filter(p=>p.state===st&&p.id!=="custom").map(p=>`<option value="${p.id}">${p.label}</option>`).join("")}</optgroup>`).join("")+`<optgroup label="Custom"><option value="custom">Custom configuration</option></optgroup>`;

document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab,.panel").forEach(x=>x.classList.remove("active"));
  btn.classList.add("active"); $(btn.dataset.panel).classList.add("active");
}));

function statusClass(status){return status==="active"?"activeB":status==="conditional"?"conditional":status==="inactive"?"inactive":"verify";}
function statusLabel(status){return {active:"Active",conditional:"Conditional",inactive:"Not currently funded",verify:"Verify / policy path"}[status]||status;}

function fundingScore(route, cohort, objective){
  const status={active:25,conditional:18,verify:8,inactive:2}[route.status]||0;
  const fit=(route.fits[cohort]||0)*8;
  const speed=route.speed*4;
  const obj=route.objectives.includes(objective)?15:route.objectives.includes("pilot")&&objective==="bridge"?6:0;
  return Math.min(100,status+fit+speed+obj);
}
function renderFunding(){
  const state=$("matchState").value, cohort=$("matchCohort").value, objective=$("matchObjective").value;
  const s=TOOL_DATA.states[state];
  $("stateSummary").innerHTML=`<b>${s.name} market note:</b> ${escapeHtml(s.summary)}`;
  const ranked=s.funding.map(r=>({...r,score:fundingScore(r,cohort,objective)})).sort((a,b)=>b.score-a.score);
  $("fundingMatches").innerHTML=ranked.map((r,i)=>`
    <article class="card fundcard">
      <div class="fundhead"><div><h3><span class="rank">${i+1}</span>${escapeHtml(r.name)}</h3><span class="badge ${statusClass(r.status)}">${statusLabel(r.status)}</span></div><div class="routeScore">${r.score}/100</div></div>
      <p>${escapeHtml(r.description)}</p>
      <p><b>Likely buyer:</b> ${escapeHtml(r.buyer)}</p>
      <p><b>Evidence needed:</b> ${escapeHtml(r.evidence)}</p>
      <div class="callout ${r.status==="inactive"?"danger":"amber"}"><b>Caution:</b> ${escapeHtml(r.caution)}</div>
    </article>`).join("");
  updatePilotFunding();
}
$("runMatch").addEventListener("click",renderFunding);
["matchState","matchCohort","matchObjective"].forEach(id=>$(id).addEventListener("change",renderFunding));

function cohortSavingsProfile(state, cohort){
  const c=TOOL_DATA.states[state].cohorts[cohort];
  const p=TOOL_DATA.cohortSavings[cohort];
  return {annual:c.annualCost, ...p};
}
function resolvedEvidenceBasis(state, cohort, selected, presetId){
  if(selected && selected!=="auto") return selected;
  return presetId ? "pitch" : "planning";
}
function evidenceScenario(state, cohort, scenario, basisSelected, programPmpm, annualOverride, customGross, presetId){
  const basis=resolvedEvidenceBasis(state,cohort,basisSelected,presetId);
  const annual=Number(annualOverride)||TOOL_DATA.states[state].cohorts[cohort].annualCost;

  if(basis==="custom" || scenario==="custom"){
    const gross=Number(customGross)||0;
    return {basis:"custom",grossPmpm:gross,netPmpm:gross-programPmpm,rate:annual?gross*12/annual:0,targetBcr:programPmpm?gross/programPmpm:0,label:"Custom payer-claims assumption",description:"User-entered gross medical reduction.",limitation:"Requires payer claims, evaluation design and approval."};
  }

  if(basis==="pitch"){
    const preset=TOOL_DATA.pilotPresets.find(p=>p.id===presetId);
    if(!preset) return evidenceScenario(state,cohort,scenario,"planning",programPmpm,annual,customGross,null);
    const targetBcr=Number(preset.bcr?.[scenario]??preset.bcr?.base??1);
    const grossPmpm=programPmpm*targetBcr;
    return {
      basis:"pitch",grossPmpm,netPmpm:grossPmpm-programPmpm,rate:annual?grossPmpm*12/annual:0,targetBcr,
      label:`${preset.label} — profitability target`,
      description:`Required performance for this exact pitch design: ${targetBcr.toFixed(2)}x gross benefit per program dollar.`,
      limitation:"Commercial performance target, not a published or guaranteed savings result."
    };
  }

  if(basis==="planning"){
    const model=TOOL_DATA.stateCohortProfitability[state][cohort];
    const targetBcr=Number(model.bcr?.[scenario]??model.bcr?.base??1);
    const grossPmpm=programPmpm*targetBcr;
    return {
      basis:"planning",grossPmpm,netPmpm:grossPmpm-programPmpm,rate:annual?grossPmpm*12/annual:0,targetBcr,
      label:model.label,
      description:`${model.anchor} Required ${scenario} performance: ${targetBcr.toFixed(2)}x gross benefit per program dollar.`,
      limitation:model.limitation
    };
  }

  const e=TOOL_DATA.evidenceBases[basis];
  const published=Number(e.scenarios[scenario]??e.scenarios.base);
  if(e.resultType==="net"){
    const grossPmpm=programPmpm+published;
    return {basis,grossPmpm,netPmpm:published,rate:annual?grossPmpm*12/annual:0,targetBcr:programPmpm?grossPmpm/programPmpm:0,label:e.label,description:e.description,limitation:e.limitation};
  }
  return {basis,grossPmpm:published,netPmpm:published-programPmpm,rate:annual?published*12/annual:0,targetBcr:programPmpm?published/programPmpm:0,label:e.label,description:e.description,limitation:e.limitation};
}
function economicProgramPmpm(){
  const members=+$("pilotMembers").value, weeks=+$("weeks").value, meals=+$("mealsWeek").value, meal=+$("mealCost").value, overhead=+$("programOverhead").value/100;
  const months=weeks/4.345, program=members*weeks*meals*meal*(1+overhead);
  return members&&months?program/(members*months):0;
}
function syncEconomicSavings(){
  const state=$("econState").value, cohort=$("cohort").value, scenario=$("savingsScenario").value;
  const annual=+$("annualCost").value, programPmpm=economicProgramPmpm();
  const result=evidenceScenario(state,cohort,scenario,$("evidenceBasis").value,programPmpm,annual,+$("pmpm").value);
  const editable=result.basis==="custom" || scenario==="custom";
  if(!editable) $("pmpm").value=Math.round(result.grossPmpm);
  $("pmpm").readOnly=!editable;
  $("savingRate").value=(result.rate*100).toFixed(1);
  $("netPmpmDisplay").value=`${money(result.netPmpm)} PMPM`; $("economicTargetBcrDisplay").value=`${result.targetBcr.toFixed(2)}x`;
  $("savingsBasis").innerHTML=`<b>${escapeHtml(result.label)}:</b> ${escapeHtml(result.description)}<br><span class="mini"><b>Selected interpretation:</b> ${money(result.grossPmpm)} gross medical reduction PMPM − ${money(programPmpm)} program PMPM = ${money(result.netPmpm)} net PMPM.<br><b>Limitation:</b> ${escapeHtml(result.limitation)}</span>`;
  return result;
}
function loadEconomicDefaults(){
  const state=$("econState").value, cohort=$("cohort").value;
  const s=TOOL_DATA.states[state], c=s.cohorts[cohort], model=TOOL_DATA.stateCohortProfitability[state][cohort], d=model.design;
  $("affected").value=c.affected; $("annualCost").value=c.annualCost; $("targetRate").value=c.targetRate;
  $("pilotMembers").value=d.members; $("weeks").value=d.weeks; $("mealsWeek").value=d.meals;
  $("mealCost").value=d.mealCost; $("programOverhead").value=d.overhead; $("savingsScenario").value="base";
  $("evidenceBasis").value="auto";
  $("evidenceNote").innerHTML=`<b>Design logic:</b> ${escapeHtml(model.anchor)}<br><b>Source limitation:</b> ${escapeHtml(c.sourceNote)}<br><span class="mini">The automatic model sets a positive return requirement by adjusting service intensity and target BCR by state and cohort. It is not a claim that every enrolled member will generate savings.</span>`;
  syncEconomicSavings(); calculate();
}
function calculate(){
  const state=$("econState").value, cohort=$("cohort").value;
  const affected=+$("affected").value, annual=+$("annualCost").value, target=+$("targetRate").value/100;
  const members=+$("pilotMembers").value, weeks=+$("weeks").value, meals=+$("mealsWeek").value, mealCost=+$("mealCost").value, overhead=+$("programOverhead").value/100;
  const months=weeks/4.345, foodCost=members*weeks*meals*mealCost, program=foodCost*(1+overhead), programPmpm=members&&months?program/(members*months):0;
  const selected=syncEconomicSavings();
  const gross=members*months*selected.grossPmpm, net=members*months*selected.netPmpm;
  const burden=affected*annual, targetBurden=burden*target, roi=program?gross/program:0, netRoi=program?net/program:0;
  $("burdenOut").textContent=money(burden); $("targetOut").textContent=money(targetBurden);
  $("programOut").textContent=money(program); $("grossOut").textContent=money(gross);
  $("netOut").textContent=money(net); $("roiOut").textContent=`${roi.toFixed(2)}x`;
  $("mealPriceOut").textContent=money(mealCost); $("programPmpmOut").textContent=money(programPmpm); $("programPmpmDisplay").value=`${money(programPmpm)} PMPM`;
  const ranges=["low","base","high"].map(k=>{const x=evidenceScenario(state,cohort,k,$("evidenceBasis").value,programPmpm,annual,+$("pmpm").value);return [k,members*months*x.grossPmpm,members*months*x.netPmpm,x];});
  const maxGross=Math.max(...ranges.map(x=>x[1]),1);
  $("scenarioRange").innerHTML=ranges.map(([l,g,n,x])=>`<div class="rangeRow"><b>${l[0].toUpperCase()+l.slice(1)}</b><div class="smallbar"><span style="width:${Math.min(100,g/maxGross*100)}%"></span></div><span>${money(n)} net</span><div class="mini">${money(x.grossPmpm)} gross · ${money(x.netPmpm)} net PMPM</div></div>`).join("");
  $("scenarioRange").innerHTML+=`<div class="callout"><b>Program break-even:</b> ${money(programPmpm)} gross medical reduction PMPM. Under an NC HOP net benchmark, gross reduction equals program PMPM plus the published net result.</div>`;
  currentCalc={type:"Cohort economics",state,cohort,affected,annual,targetRate:+$("targetRate").value,members,weeks,meals,mealCost,overheadPercent:overhead*100,foodCost,program,programPmpm,gross,net,roi,netRoi,pmpm:selected.grossPmpm,netPmpm:selected.netPmpm,scenario:$("savingsScenario").value,evidenceBasis:selected.basis,evidenceLabel:selected.label};
}
$("calculate").addEventListener("click",calculate);
$("saveScenario").addEventListener("click",()=>{calculate();saveItem("scenarios",currentCalc);alert("Scenario saved.");});
["econState","cohort"].forEach(id=>$(id).addEventListener("change",loadEconomicDefaults));
["savingsScenario","evidenceBasis"].forEach(id=>$(id).addEventListener("change",calculate));
$("pmpm").addEventListener("input",()=>{if($("savingsScenario").value==="custom"||$("evidenceBasis").value==="custom") calculate();});
["affected","annualCost","targetRate","pilotMembers","weeks","mealsWeek","mealCost","programOverhead"].forEach(id=>$(id).addEventListener("input",calculate));


function calculateTam(){
  const total=+$("tamTotal").value||0;
  const riskLow=(+$("tamRiskLow").value||0)/100;
  const riskHigh=(+$("tamRiskHigh").value||0)/100;
  const food=(+$("tamFood").value||0)/100;
  const trigger=(+$("tamTrigger").value||0)/100;
  const eligible=(+$("tamEligible").value||0)/100;
  const riskLowCount=Math.round(total*riskLow);
  const riskHighCount=Math.round(total*riskHigh);
  const riskBase=Math.round(total*((riskLow+riskHigh)/2));
  const base=Math.round(riskBase*food*trigger*eligible);
  const low=Math.round(riskLowCount*Math.max(.05,food-.05)*Math.max(.10,trigger-.05)*Math.max(.20,eligible-.10));
  const high=Math.round(riskHighCount*Math.min(.30,food+.05)*Math.min(.40,trigger+.05)*Math.min(.60,eligible+.10));
  window.currentTam={riskLowCount,riskHighCount,base,low,high};
  $("tamResult").innerHTML=`<b>Separate domain estimates:</b> Risk score above 1.00: ${riskLowCount.toLocaleString()}–${riskHighCount.toLocaleString()} members. LOCUS 3+ / SPMI planning range: 40,000–60,000 adults. High-acuity ICF/IID planning ceiling: fewer than 5,000.<br><br><b>Likely MTM proof-cohort funnel:</b> ${low.toLocaleString()} low · <b>${base.toLocaleString()} base</b> · ${high.toLocaleString()} high candidates.<br><span class="mini">The base estimate applies the selected food barrier, recent trigger and clinical/operational eligibility percentages to the midpoint of the risk-score range. It is an interview scenario—not a published Louisiana headcount.</span>`;
}
$("calculateTam").addEventListener("click",calculateTam);
$("useTamEstimate").addEventListener("click",()=>{
  calculateTam();
  $("affected").value=window.currentTam.base;
  $("targetRate").value=100;
  calculate();
});
["tamTotal","tamRiskLow","tamRiskHigh","tamFood","tamTrigger","tamEligible"].forEach(id=>$(id).addEventListener("input",calculateTam));

function renderCohortTable(){
  const rows=Object.entries(TOOL_DATA.cohorts).map(([id,meta])=>{
    const c=TOOL_DATA.states.LA.cohorts[id];
    return `<tr><td><b>${escapeHtml(meta.label)}</b></td><td>${escapeHtml(c.costLogic)}</td><td>${escapeHtml(c.nutritionFit)}</td><td>${escapeHtml(c.buyerQuestion)}</td></tr>`;
  }).join("");
  $("cohortTable").innerHTML=rows;
}

function renderOpportunityQuestions(){
  $("opportunityQuestions").innerHTML=TOOL_DATA.opportunityFactors.map(f=>`
    <div class="questionrow" data-factor="${f.id}">
      <p>${escapeHtml(f.label)} <span class="mini">(${f.weight}% weight)</span></p>
      <div class="options">
        ${[0,1,2,3,4,5].map(n=>`<label><input type="radio" name="opp_${f.id}" value="${n}" ${n===0?"checked":""}>${n}</label>`).join("")}
      </div>
      <div class="mini">0: ${escapeHtml(f.zero)} · 5: ${escapeHtml(f.five)}</div>
    </div>`).join("");
}
function scoreOpportunity(){
  let score=0, lows=[];
  TOOL_DATA.opportunityFactors.forEach(f=>{
    const val=+(document.querySelector(`input[name="opp_${f.id}"]:checked`)?.value||0);
    score+=(val/5)*f.weight; if(val<3) lows.push(f.label);
  });
  score=Math.round(score);
  let band,next;
  if(score<40){band="Research—not qualified";next="Do not propose. Confirm funding route, economic buyer and targetable cohort.";}
  else if(score<65){band="Discovery";next="Multithread the account and close the three lowest-scoring evidence gaps.";}
  else if(score<80){band="Pilot design";next="Build a mutual action plan, pilot protocol and data-sharing path.";}
  else{band="Advance to proposal";next="Validate final economics, procurement and executive approval path.";}
  currentOpportunity={type:"Opportunity score",state:$("oppState").value,account:$("oppAccount").value||"Unnamed account",score,band,lows,next};
  $("opportunityResult").className="";
  $("opportunityResult").innerHTML=`<div class="score">${score}/100</div><div class="scoreband">${band}</div><div class="bar"><span style="width:${score}%"></span></div><p><b>Next best action:</b> ${escapeHtml(next)}</p><p><b>Priority gaps:</b> ${escapeHtml(lows.slice(0,3).join("; ")||"No major low-scoring factors.")}</p>`;
}
$("scoreOpportunity").addEventListener("click",scoreOpportunity);
$("saveOpportunity").addEventListener("click",()=>{scoreOpportunity();saveItem("opportunities",currentOpportunity);alert("Opportunity scorecard saved.");});

let stakeholderData=[];
function companyOptions(state){
  return TOOL_DATA.companies[state].map(c=>`<option value="${c.id}">${escapeHtml(c.name)}</option>`).join("");
}
function refreshCompanyDropdown(){
  const state=$("stakeState").value;
  $("stakeCompany").innerHTML=companyOptions(state);
  selectCompany();
}
function selectedCompany(){
  const state=$("stakeState").value;
  return TOOL_DATA.companies[state].find(c=>c.id===$("stakeCompany").value)||TOOL_DATA.companies[state][0];
}
function selectCompany(){
  const company=selectedCompany();
  $("stakeAccount").value=company.name;
  $("contactFreshness").innerHTML=`<b>${escapeHtml(company.parent)}</b> · Public parent-company names are context, not assumed local buyers. Verify every local role immediately before outreach. <a href="${escapeHtml(company.accountSource)}" target="_blank" rel="noopener">Open account source</a>${company.hook?`<div class="topgap"><b>Live account intelligence:</b> ${escapeHtml(company.hook)}</div>`:""}`;
  defaultStakeholders();
}
function defaultStakeholders(){
  const company=selectedCompany();
  const publicRows=(company.contacts||[]).map(c=>({...c}));
  const covered=new Set(publicRows.map(c=>c.coversRole).filter(Boolean));
  const localRows=(company.exited?[]:TOOL_DATA.localBuyerRoles.filter(x=>!covered.has(x.role))).map(x=>({
    role:x.role,name:`${company.name} — public person not yet verified`,quality:"Research required",status:"Unknown",influence:x.influence,
    verified:"Not verified",source:company.accountSource,notes:"Company-specific role is pre-mapped. Confirm the current person from the plan site, state directory, press release or a user-verified relationship."
  }));
  stakeholderData=[...publicRows,...localRows];
  renderStakeholders();
}
function renderStakeholders(){
  $("stakeholderRows").innerHTML=stakeholderData.map((s,i)=>`
    <tr data-i="${i}">
      <td><input data-k="role" value="${escapeHtml(s.role)}"></td>
      <td><input data-k="name" value="${escapeHtml(s.name)}" placeholder="Name"></td>
      <td><select data-k="quality">${[...new Set(["Publicly verified","Company-level context","Company-level context — verify","Public plan team","Public plan fact","User-confirmed","Research required",...(s.quality?[s.quality]:[])])].map(v=>`<option ${v===s.quality?"selected":""}>${escapeHtml(v)}</option>`).join("")}</select></td>
      <td><select data-k="status">${["Unknown","Identified","Contacted","Engaged","Champion","Blocker"].map(v=>`<option ${v===s.status?"selected":""}>${v}</option>`).join("")}</select></td>
      <td><select data-k="influence">${[1,2,3,4,5].map(v=>`<option ${v==s.influence?"selected":""}>${v}</option>`).join("")}</select></td>
      <td><input data-k="verified" value="${escapeHtml(s.verified||"Not verified")}"><input data-k="source" value="${escapeHtml(s.source||"")}" placeholder="Source URL"></td>
      <td><textarea data-k="notes">${escapeHtml(s.notes||"")}</textarea></td>
      <td><button class="dangerbtn removeStake" data-i="${i}">×</button></td>
    </tr>`).join("");
  document.querySelectorAll("#stakeholderRows input,#stakeholderRows select,#stakeholderRows textarea").forEach(el=>el.addEventListener("change",e=>{
    const row=e.target.closest("tr"), i=+row.dataset.i, k=e.target.dataset.k;
    stakeholderData[i][k]=k==="influence"?+e.target.value:e.target.value; analyzeStakeholders();
  }));
  document.querySelectorAll(".removeStake").forEach(b=>b.addEventListener("click",()=>{stakeholderData.splice(+b.dataset.i,1);renderStakeholders();}));
  analyzeStakeholders();
}
function analyzeStakeholders(){
  if(!stakeholderData.length){$("stakeholderAnalysis").className="empty";$("stakeholderAnalysis").textContent="Load the company map.";return;}
  const engaged=stakeholderData.filter(s=>["Engaged","Champion"].includes(s.status)).length;
  const champions=stakeholderData.filter(s=>s.status==="Champion").length;
  const blockers=stakeholderData.filter(s=>s.status==="Blocker");
  const unverified=stakeholderData.filter(s=>s.quality==="Research required"||String(s.quality).includes("verify"));
  const critical=stakeholderData.filter(s=>s.influence>=4&&["Unknown","Identified"].includes(s.status));
  $("stakeholderAnalysis").className="";
  $("stakeholderAnalysis").innerHTML=`<div class="answer"><h3>${engaged}/${stakeholderData.length} roles engaged</h3><p><b>Champions:</b> ${champions} · <b>Blockers:</b> ${blockers.length} · <b>Contacts needing verification:</b> ${unverified.length}</p><p><b>Next best action:</b> ${critical.length?`Research and advance ${escapeHtml(critical[0].role)} from ${critical[0].status} to a live discovery conversation.`:"Strengthen the executive sponsor and procurement path."}</p><p><b>Coverage risk:</b> ${critical.slice(0,4).map(s=>escapeHtml(s.role)).join("; ")||"No critical unknowns detected."}</p><div class="callout amber"><b>Credibility rule:</b> A parent-company CEO is context—not the local buying committee. Local names remain “Research required” until sourced or user-confirmed.</div></div>`;
}
$("stakeState").addEventListener("change",refreshCompanyDropdown);
$("stakeCompany").addEventListener("change",selectCompany);
$("loadStakeholders").addEventListener("click",defaultStakeholders);
$("addStakeholder").addEventListener("click",()=>{stakeholderData.push({role:"Additional stakeholder",name:"Research required",quality:"Research required",status:"Unknown",influence:3,verified:"Not verified",source:"",notes:""});renderStakeholders();});
$("saveStakeholders").addEventListener("click",()=>{const company=selectedCompany();saveItem("stakeholders",{type:"Stakeholder map",state:$("stakeState").value,companyId:company.id,account:$("stakeAccount").value||company.name,stakeholders:stakeholderData});alert("Stakeholder map saved.");});

function updatePilotFunding(){
  const state=$("pilotState").value;
  $("pilotFunding").innerHTML=TOOL_DATA.states[state].funding.map(r=>`<option value="${r.id}">${r.name} — ${statusLabel(r.status)}</option>`).join("");
}
function populationBasesForState(state){return TOOL_DATA.populationBases[state]||[];}
function refreshPilotPopulationBases(selectedId){
  const state=$("pilotState").value,bases=populationBasesForState(state);
  $("pilotPopulationBasis").innerHTML=bases.map(b=>`<option value="${b.id}">${escapeHtml(b.label)}</option>`).join("");
  if(selectedId&&bases.some(b=>b.id===selectedId)) $("pilotPopulationBasis").value=selectedId;
  updatePilotPopulationMath();
}
function selectedPilotPopulationBase(){
  return populationBasesForState($("pilotState").value).find(b=>b.id===$("pilotPopulationBasis").value)||populationBasesForState($("pilotState").value)[0];
}
function updatePilotPopulationMath(){
  const b=selectedPilotPopulationBase(); if(!b)return;
  const share=+$('pilotEligibleShare').value||0;
  const candidates=Math.round((+b.count||0)*share/100);
  $("pilotUniverseCount").value=b.count?Number(b.count).toLocaleString():"Payer data required";
  $("pilotCandidatePool").value=b.count?candidates.toLocaleString():"Payer-defined";
  $("pilotPopulationStatus").value=b.status;
}
function pilotInterventionMultiplier(){
  const v=$("pilotIntervention").value;
  return v.startsWith("Medically tailored")?1:v.startsWith("Healthy home")?.9:v.startsWith("Healthy food")?.65:.45;
}
function applyPilotPreset(){
  const p=TOOL_DATA.pilotPresets.find(x=>x.id===$("pilotPitch").value)||TOOL_DATA.pilotPresets[0];
  applyingPilotPreset=true;
  $("pilotState").value=p.state;
  $("pilotCohort").value=p.cohort;
  updatePilotFunding();
  refreshPilotPopulationBases(p.populationBasis);
  $("pilotEligibleShare").value=p.eligibleShare;
  $("pilotSize").value=p.members;
  $("pilotWeeks").value=p.weeks;
  $("pilotMeals").value=p.meals;
  $("pilotIntervention").value=p.intervention;
  $("pilotMealCost").value=Number(p.mealCost).toFixed(2);
  $("pilotOverhead").value=p.overhead;
  $("pilotEvidenceBasis").value=p.evidenceBasis;
  $("pilotSavingsScenario").value=p.scenario;
  $("pilotAnnualCost").value=TOOL_DATA.states[p.state].cohorts[p.cohort].annualCost;
  if([...$("pilotFunding").options].some(o=>o.value===p.funding)) $("pilotFunding").value=p.funding;
  $("pilotGeo").value=p.geo;
  $("pilotTrigger").value=p.trigger;
  $("pilotPitchNote").innerHTML=`<b>${escapeHtml(p.label)}:</b> ${escapeHtml(p.note)}`;
  updatePilotPopulationMath();
  applyingPilotPreset=false;
  syncPilotEconomics();
}
function loadPilotDefaults(){
  const state=$("pilotState").value,cohort=$("pilotCohort").value;
  updatePilotFunding();
  refreshPilotPopulationBases();
  if(applyingPilotPreset)return;
  $("pilotMealCost").value=(TOOL_DATA.states[state].defaultMealCost*pilotInterventionMultiplier()).toFixed(2);
  $("pilotAnnualCost").value=TOOL_DATA.states[state].cohorts[cohort].annualCost;
  $("pilotOverhead").value=2; $("pilotSavingsScenario").value="base"; $("pilotEvidenceBasis").value="auto";
  $("pilotPitchNote").innerHTML='<b>Custom edit:</b> Values were reset for the selected state and cohort. Choose a pitch preset to reload its distinct profitability design.';
  syncPilotEconomics();
}
function pilotEconomics(){
  const state=$("pilotState").value,cohort=$("pilotCohort").value,members=+$("pilotSize").value,weeks=+$("pilotWeeks").value,meals=+$("pilotMeals").value;
  const mealCost=+$("pilotMealCost").value,overhead=+$("pilotOverhead").value/100,months=weeks/4.345,annual=+$("pilotAnnualCost").value,eventCost=+$("pilotEventCost").value;
  const foodCost=members*weeks*meals*mealCost,program=foodCost*(1+overhead),programPmpm=members&&months?program/(members*months):0;
  const selected=evidenceScenario(state,cohort,$("pilotSavingsScenario").value,$("pilotEvidenceBasis").value,programPmpm,annual,+$("pilotPmpm").value,$("pilotPitch").value);
  const gross=members*months*selected.grossPmpm,net=members*months*selected.netPmpm,roi=program?gross/program:0,netRoi=program?net/program:0;
  return {state,cohort,members,weeks,meals,mealCost,overheadPercent:overhead*100,foodCost,months,pmpm:selected.grossPmpm,netPmpm:selected.netPmpm,annual,eventCost,program,programPmpm,gross,net,roi,netRoi,breakEvenPmpm:programPmpm,events:eventCost?program/eventCost:0,impliedRate:selected.rate,evidence:selected};
}
function syncPilotEconomics(){
  const state=$("pilotState").value,cohort=$("pilotCohort").value,scenario=$("pilotSavingsScenario").value,s=TOOL_DATA.states[state],c=s.cohorts[cohort];
  if(!$("pilotMealCost").value) $("pilotMealCost").value=(s.defaultMealCost*pilotInterventionMultiplier()).toFixed(2);
  if(!$("pilotAnnualCost").value) $("pilotAnnualCost").value=c.annualCost;
  updatePilotPopulationMath();
  const e=pilotEconomics(),editable=e.evidence.basis==="custom"||scenario==="custom";
  if(!editable) $("pilotPmpm").value=Math.round(e.evidence.grossPmpm);
  $("pilotPmpm").readOnly=!editable; $("pilotNetPmpmDisplay").value=`${money(e.evidence.netPmpm)} PMPM`; $("pilotTargetBcrDisplay").value=`${e.evidence.targetBcr.toFixed(2)}x`; $("pilotProgramPmpmDisplay").value=`${money(e.programPmpm)} PMPM`;
  $("pilotEconomicsSummary").innerHTML=`<b>${escapeHtml(e.evidence.label)} — ${scenario[0].toUpperCase()+scenario.slice(1)}:</b> ${money(e.programPmpm)} program PMPM × ${e.evidence.targetBcr.toFixed(2)} target BCR = ${money(e.evidence.grossPmpm)} required gross reduction PMPM and ${money(e.evidence.netPmpm)} target net PMPM.<br><b>Pilot:</b> ${money(e.program)} program cost · ${money(e.gross)} required gross medical reduction · ${money(e.net)} target net savings.<br><span class="mini">${escapeHtml(e.evidence.description)} Limitation: ${escapeHtml(e.evidence.limitation)}</span>`;
  const positive=e.net>0;
  $("pilotCaseStatus").className=`callout ${positive?"positivecase":"danger"}`;
  $("pilotCaseStatus").innerHTML=positive?`<b>Positive benchmark case:</b> ${money(e.net)} modeled net savings over the pilot. This is positive because the preset sets a return requirement above break-even. It shows what the pilot must achieve—not what is guaranteed.`:`<b>Negative case:</b> The current custom settings cost more than the selected savings benchmark. Reload a pitch preset or revise the population, service intensity or evidence basis.`;
}

function presetEconomics(p, scenario="base"){
  const months=p.weeks/4.345;
  const foodCost=p.members*p.weeks*p.meals*p.mealCost;
  const program=foodCost*(1+p.overhead/100);
  const programPmpm=program/(p.members*months);
  const bcr=Number(p.bcr?.[scenario]??p.bcr?.base??1);
  const grossPmpm=programPmpm*bcr;
  const netPmpm=grossPmpm-programPmpm;
  const net=netPmpm*p.members*months;
  return {months,program,programPmpm,bcr,grossPmpm,netPmpm,net};
}
function renderPresetComparison(){
  const rows=TOOL_DATA.pilotPresets.filter(p=>p.id!=="custom").map(p=>{
    const e=presetEconomics(p,"base");
    return `<tr>
      <td><b>${escapeHtml(p.label)}</b></td>
      <td>${p.state}</td>
      <td>${p.members.toLocaleString()} / ${p.weeks}</td>
      <td>${p.meals}</td>
      <td>${money(p.mealCost)}</td>
      <td>${money(e.programPmpm)}</td>
      <td>${e.bcr.toFixed(2)}x</td>
      <td>${money(e.grossPmpm)}</td>
      <td>${money(e.netPmpm)}</td>
      <td>${money(e.net)}</td>
    </tr>`;
  }).join("");
  $("presetComparisonRows").innerHTML=rows;
}

function buildPilot(){
  syncPilotEconomics();
  const state=$("pilotState").value, cohort=$("pilotCohort").value;
  const s=TOOL_DATA.states[state], c=s.cohorts[cohort], route=s.funding.find(r=>r.id===$("pilotFunding").value);
  const e=pilotEconomics(), intervention=$("pilotIntervention").value, geo=$("pilotGeo").value||"Regional proof market";
  const ranges=["low","base","high"].map(k=>{const x=evidenceScenario(state,cohort,k,$("pilotEvidenceBasis").value,e.programPmpm,e.annual,+$("pilotPmpm").value,$("pilotPitch").value);const g=e.members*e.months*x.grossPmpm,n=e.members*e.months*x.netPmpm;return {k,pmpm:x.grossPmpm,netPmpm:x.netPmpm,rate:x.rate,gross:g,net:n,roi:e.program?g/e.program:0,netRoi:e.program?n/e.program:0};});
  const profile=e.evidence;
  currentPilot=`MEDICAID NUTRITION PILOT — WORKING DESIGN
Generated: ${new Date().toLocaleString()}

STATE
${s.name}

COMMERCIAL POSITION
Funding route: ${route.name}
Current status: ${statusLabel(route.status)}
Route caution: ${route.caution}
Likely buyer: ${route.buyer}

TARGET POPULATION
Pitch preset: ${(TOOL_DATA.pilotPresets.find(x=>x.id===$("pilotPitch").value)||{}).label||"Custom configuration"}
Cohort: ${TOOL_DATA.cohorts[cohort].label}
Population universe: ${selectedPilotPopulationBase()?.label||"Payer-defined"}
Official / selected universe count: ${selectedPilotPopulationBase()?.count?Number(selectedPilotPopulationBase().count).toLocaleString():"Payer data required"}
Estimated intervention-eligible share: ${$("pilotEligibleShare").value||0}%
Estimated addressable candidate pool: ${$("pilotCandidatePool").value}
Working pilot size: ${e.members} members
Geography: ${geo}
Duration: ${e.weeks} weeks
Intervention: ${intervention}
Service intensity: ${e.meals} units per member per week
Account trigger: ${$("pilotTrigger").value||"To be established in discovery"}
Population source/status: ${selectedPilotPopulationBase()?.source||"Payer data"} — ${selectedPilotPopulationBase()?.status||"Verification required"}

ILLUSTRATIVE ECONOMICS — NOT A SAVINGS GUARANTEE
Annual attributable cost / member: ${money(e.annual)}
Food-service cost / unit: ${money(e.mealCost)}
Illustrative food and delivery cost: ${money(e.foodCost)}
Program-cost benchmark check: approximately ${money(e.program/e.members/e.months)} PMPM versus the published JAMA benchmark of about $350 PMPM
Implementation, clinical and technology allowance: ${pct(e.overheadPercent)}
Total illustrative program cost: ${money(e.program)}
Economic design: ${profile.label}
Target benefit-cost ratio: ${profile.targetBcr.toFixed(2)}x
Required gross medical reduction: ${money(e.pmpm)} PMPM (${pct(e.impliedRate*100)} of annual attributable cost)
Target net savings after program cost: ${money(e.netPmpm)} PMPM
Selected gross modeled medical reduction: ${money(e.gross)}
Selected net modeled savings: ${money(e.net)}
Selected benefit-cost ratio: ${e.roi.toFixed(2)}x
Selected net ROI: ${(e.netRoi*100).toFixed(0)}%
Break-even savings requirement: ${money(e.breakEvenPmpm)} PMPM
Break-even avoided-event equivalent: ${e.events.toFixed(1)} events at ${money(e.eventCost)} each

SCENARIO RANGE
Low: ${money(ranges[0].pmpm)} gross PMPM | ${money(ranges[0].netPmpm)} net PMPM | ${money(ranges[0].net)} pilot net | ${ranges[0].roi.toFixed(2)}x BCR
Base: ${money(ranges[1].pmpm)} gross PMPM | ${money(ranges[1].netPmpm)} net PMPM | ${money(ranges[1].net)} pilot net | ${ranges[1].roi.toFixed(2)}x BCR
High: ${money(ranges[2].pmpm)} gross PMPM | ${money(ranges[2].netPmpm)} net PMPM | ${money(ranges[2].net)} pilot net | ${ranges[2].roi.toFixed(2)}x BCR
Performance-target logic: ${profile.description}
Important limitation: ${profile.limitation}

WORKING ELIGIBILITY
1. Medicaid enrollment and account-specific eligibility confirmed.
2. Target clinical condition and acuity confirmed by the payer/clinical workflow.
3. Documented food-access, preparation or nutrition barrier.
4. Delivery address, storage, contact and consent requirements satisfied.
5. No duplicative service or clinical contraindication.

PARTNER ROLES
Payer/MCO: cohort data, authorization, funding, compliance and outcome evaluation.
Clinical team: eligibility, referral, dietary protocol and escalation.
Community/HRSN partner: barrier intelligence, trusted engagement and warm handoffs.
CookUnity: configuration, onboarding, meals, delivery, service recovery and reporting.

MEASUREMENT PLAN
Operational: referral volume, eligibility pass rate, enrollment conversion, time to first delivery, successful delivery rate, issue resolution and completion.
Engagement/Equity: reach, contact success, member choice, satisfaction, reported barriers and geography.
Clinical: condition-appropriate measures where available and approved.
Utilization/Financial: ED visits, admissions/readmissions, condition-related utilization, total-cost trend, program cost and net savings.
Evaluation: baseline and definitions before launch; comparison method when feasible; attrition and missing-data reporting.

DATA QUALITY GATES
${TOOL_DATA.dataQualityGates.map((x,i)=>`${i+1}. ${x}`).join("\n")}

GO / NO-GO GATES
Feasible: members can be identified, enrolled and served reliably.
Valuable: engagement and outcome signals justify continued investment.
Scalable: funding, economics, delivery and data can expand without rebuilding the model.

OPEN QUESTIONS
- Is this funding route legally and contractually available for this account?
- Who owns the budget and final authorization?
- What procurement, credentialing and data-sharing requirements apply?
- Which outcome threshold triggers renewal or expansion?
- What CookUnity delivery coverage and clinical capabilities are confirmed?
- Which claims period, runout, comparison group and attribution method will be used?
- How will overlapping diabetes, heart-failure and CKD members be de-duplicated?

IMPORTANT
Public burden and savings inputs are starter assumptions. Replace them with payer claims and total program cost before presenting ROI. This is not an approved benefit, contract, clinical protocol or savings guarantee.`;
  $("pilotOutput").textContent=currentPilot;
}
$("buildPilot").addEventListener("click",buildPilot);
$("savePilot").addEventListener("click",()=>{buildPilot();const e=pilotEconomics();saveItem("pilots",{type:"Pilot design",state:$("pilotState").value,cohort:$("pilotCohort").value,program:e.program,gross:e.gross,net:e.net,roi:e.roi,text:currentPilot});alert("Pilot saved.");});
$("copyPilot").addEventListener("click",()=>copyText(currentPilot||$("pilotOutput").textContent));
$("downloadPilot").addEventListener("click",()=>download("Medicaid_Pilot_Design.txt",currentPilot||$("pilotOutput").textContent));
$("pilotPitch").addEventListener("change",applyPilotPreset);
$("pilotState").addEventListener("change",loadPilotDefaults);
$("pilotCohort").addEventListener("change",loadPilotDefaults);
$("pilotPopulationBasis").addEventListener("change",updatePilotPopulationMath);
$("pilotEligibleShare").addEventListener("input",updatePilotPopulationMath);
["pilotSavingsScenario","pilotEvidenceBasis"].forEach(id=>$(id).addEventListener("change",syncPilotEconomics));
$("pilotIntervention").addEventListener("change",()=>{$("pilotMealCost").value=(TOOL_DATA.states[$("pilotState").value].defaultMealCost*pilotInterventionMultiplier()).toFixed(2);syncPilotEconomics();});
["pilotSize","pilotWeeks","pilotMeals","pilotMealCost","pilotPmpm","pilotAnnualCost","pilotEventCost","pilotOverhead"].forEach(id=>$(id).addEventListener("input",syncPilotEconomics));

function renderHighAcuityScreen(){
  const groups=[...new Set(TOOL_DATA.highAcuityScreen.questions.map(q=>q.domain))];
  $("screenQuestions").innerHTML=groups.map(group=>`
    <div class="screenGroup">
      <h3>${escapeHtml(group)}</h3>
      ${TOOL_DATA.highAcuityScreen.questions.filter(q=>q.domain===group).map(q=>`
        <div class="questionrow screenQuestion" data-question="${q.id}">
          <p>${escapeHtml(q.question)}</p>
          <div class="options">
            <label><input type="radio" name="screen_${q.id}" value="yes">Yes</label>
            <label><input type="radio" name="screen_${q.id}" value="no">No</label>
            <label><input type="radio" name="screen_${q.id}" value="unknown" checked>Unknown</label>
          </div>
          <div class="mini">${escapeHtml(q.proof)}</div>
        </div>`).join("")}
    </div>`).join("");
}
function screenAnswer(id){
  return document.querySelector(`input[name="screen_${id}"]:checked`)?.value||"unknown";
}
function scoreHighAcuityScreen(){
  const qs=TOOL_DATA.highAcuityScreen.questions;
  let total=0,medical=0,barrier=0,fit=0,unknown=0;
  const yes=[],missing=[],no=[];
  const flags={acute:false,clinical:false,barrier:false,delivery:false,consent:false,blocker:false};

  qs.forEach(q=>{
    const answer=screenAnswer(q.id);
    if(answer==="yes"){
      total+=q.points;
      if(q.domain==="Medical urgency") medical+=q.points;
      if(q.domain==="Nutrition / SDOH barrier") barrier+=q.points;
      if(q.domain==="Intervention fit") fit+=q.points;
      if(q.hard) flags[q.hard]=true;
      yes.push(q.question);
    }else if(answer==="unknown"){
      unknown++;
      missing.push(q.question);
    }else{
      no.push(q.question);
    }
  });

  const dietSensitive=screenAnswer("dietSensitive")==="yes";
  const majorBarrier=screenAnswer("cannotPrepare")==="yes" || screenAnswer("foodShortage")==="yes" || screenAnswer("dietUnavailable")==="yes";
  const deliveryReady=screenAnswer("deliveryReady")==="yes";
  const willing=screenAnswer("memberWilling")==="yes";
  const rapidRule=flags.acute && dietSensitive && majorBarrier && deliveryReady && willing;

  let tierKey="low";
  if(unknown>=6) tierKey="incomplete";
  else if(flags.blocker || screenAnswer("deliveryReady")==="no" || screenAnswer("memberWilling")==="no") tierKey="blocked";
  else if(rapidRule || (total>=20 && medical>=8 && barrier>=6 && fit>=5)) tierKey="high";
  else if(total>=13 && medical>=5 && barrier>=3) tierKey="review";
  else if(barrier>=5 && medical<5) tierKey="sdoh";

  const tier=TOOL_DATA.highAcuityScreen.tiers[tierKey];
  const state=$("screenState").value;
  const account=$("screenAccount").value||"Unspecified account";
  const ref=$("screenReference").value||"Unspecified non-PHI reference";
  const notes=$("screenNotes").value.trim();

  const qualifying=yes.length?yes.map(x=>`- ${x}`).join("\n"):"- No qualifying facts confirmed.";
  const unresolved=missing.length?missing.map(x=>`- ${x}`).join("\n"):"- None.";
  const rapidText=rapidRule?"YES — rapid high-priority rule met":"NO — use the full score and clinical review";

  currentKnowledge={
    type:"High-acuity service screen",
    state,account,reference:ref,total,medical,barrier,fit,unknown,tier:tier.label,
    qualifying:yes,missing,notes,rapidRule
  };

  $("screenResult").className="";
  $("screenResult").innerHTML=`
    <div class="answer">
      <div class="score">${Math.max(0,total)}</div>
      <div class="scoreband">${escapeHtml(tier.label)}</div>
      <div class="screenScores">
        <div><span>Medical</span><strong>${medical}</strong></div>
        <div><span>SDOH barrier</span><strong>${barrier}</strong></div>
        <div><span>Service fit</span><strong>${fit}</strong></div>
        <div><span>Unknown</span><strong>${unknown}</strong></div>
      </div>
      <p><b>Rapid rule:</b> ${rapidText}</p>
      <p><b>Suggested service:</b> ${escapeHtml(tier.service)}</p>
      <p><b>Next action:</b> ${escapeHtml(tier.next)}</p>
      <div class="callout amber"><b>Interpretation:</b> This result identifies a likely service-need tier for payer or clinical review. It does not independently authorize Medicaid service.</div>
    </div>`;

  currentKnowledge.text=`HIGH-ACUITY NUTRITION SERVICE-NEED SCREEN
Generated: ${new Date().toLocaleString()}

ACCOUNT
${account}
State: ${TOOL_DATA.states[state].name}
Case reference: ${ref}

RESULT
${tier.label}
Total score: ${Math.max(0,total)}
Medical urgency: ${medical}
Nutrition / SDOH barrier: ${barrier}
Intervention fit: ${fit}
Unknown responses: ${unknown}
Rapid high-priority rule met: ${rapidRule?"Yes":"No"}

SUGGESTED SERVICE
${tier.service}

NEXT ACTION
${tier.next}

QUALIFYING FACTS
${qualifying}

UNRESOLVED QUESTIONS
${unresolved}

ADDITIONAL NOTES
${notes||"- None recorded"}

SAFEGUARDS
${TOOL_DATA.highAcuityScreen.safeguards.map(x=>`- ${x}`).join("\n")}`;

  $("screenSummary").textContent=currentKnowledge.text;
  return currentKnowledge;
}
function resetHighAcuityScreen(){
  TOOL_DATA.highAcuityScreen.questions.forEach(q=>{
    const radio=document.querySelector(`input[name="screen_${q.id}"][value="unknown"]`);
    if(radio) radio.checked=true;
  });
  $("screenReference").value="";
  $("screenNotes").value="";
  $("screenResult").className="empty";
  $("screenResult").textContent="Complete the questions to identify the likely service tier.";
  $("screenSummary").textContent="The referral-ready summary will appear here.";
  currentKnowledge=null;
}
function loadHighAcuityDemo(){
  const answers={
    acute30:"yes",repeatUtil:"yes",dietSensitive:"yes",clinicalInstability:"yes",
    foodShortage:"yes",cannotPrepare:"yes",dietUnavailable:"yes",transportBarrier:"yes",
    transitionRisk:"yes",clinicalReferral:"yes",deliveryReady:"yes",memberWilling:"yes",
    noDuplicate:"yes",deliveryBlocker:"no"
  };
  Object.entries(answers).forEach(([id,value])=>{
    const radio=document.querySelector(`input[name="screen_${id}"][value="${value}"]`);
    if(radio) radio.checked=true;
  });
  $("screenReference").value="High-acuity demonstration case";
  $("screenNotes").value="Demonstration only: recent discharge, repeated acute utilization, prescribed diet and documented inability to shop or prepare appropriate meals.";
  scoreHighAcuityScreen();
}
function useScreenInPilot(){
  const result=scoreHighAcuityScreen();
  const preset=result.state==="NC"?"nc_tailored_complex":"la_high_acuity";
  if([...$("pilotPitch").options].some(o=>o.value===preset)){
    $("pilotPitch").value=preset;
    applyPilotPreset();
  }
  $("pilotTrigger").value=`Service-need screen: ${result.tier}. Medical ${result.medical}; SDOH barrier ${result.barrier}; service fit ${result.fit}. ${result.rapidRule?"Rapid high-priority rule met.":"Requires further qualification."}`;
  document.querySelector('button[data-panel="pilot"]').click();
}
$("scoreScreen").addEventListener("click",scoreHighAcuityScreen);
$("loadDemoScreen").addEventListener("click",loadHighAcuityDemo);
$("resetScreen").addEventListener("click",resetHighAcuityScreen);
$("saveScreen").addEventListener("click",()=>{
  const result=scoreHighAcuityScreen();
  saveItem("knowledge",result);
  alert("Service-need screen saved.");
});
$("copyScreen").addEventListener("click",()=>copyText((currentKnowledge||scoreHighAcuityScreen()).text));
$("useScreenInPilot").addEventListener("click",useScreenInPilot);

function buildBrief(){
  const state=$("briefState").value, cohort=$("briefCohort").value;
  const matches=TOOL_DATA.states[state].funding.map(r=>({...r,score:fundingScore(r,cohort,"pilot")})).sort((a,b)=>b.score-a.score);
  currentBrief=`AE MEDICAID ACCOUNT BRIEF
Generated: ${new Date().toLocaleString()}

ACCOUNT
${$("briefAccount").value||"Unnamed account"}
State: ${TOOL_DATA.states[state].name}
Priority cohort: ${TOOL_DATA.cohorts[cohort].label}

KNOWN / CONFIRMED
${$("briefFacts").value||"- None recorded"}

ASSUMED — MUST VALIDATE
${$("briefAssumptions").value||"- Pilot size, economics, delivery coverage and savings assumptions remain unvalidated."}

OPEN QUESTIONS
${$("briefQuestions").value||"- Funding authority\n- Economic buyer\n- Cohort baseline\n- Procurement\n- Data-sharing and evaluation"}

RELATIONSHIP / TRIGGER
${$("briefTrigger").value||"- No trigger recorded"}

TOP FUNDING ROUTES TO INVESTIGATE
1. ${matches[0].name} (${matches[0].score}/100; ${statusLabel(matches[0].status)})
2. ${matches[1].name} (${matches[1].score}/100; ${statusLabel(matches[1].status)})
3. ${matches[2].name} (${matches[2].score}/100; ${statusLabel(matches[2].status)})

RECOMMENDED NEXT ACTION
Confirm the economic buyer, current funding authority and a claims-defined high-risk cohort before presenting pricing.

DISCOVERY AGENDA
1. Quantify the population and avoidable cost.
2. Confirm service and funding authority.
3. Map clinical referral, authorization and member operations.
4. Agree on data, baseline, evaluation and expansion gates.
5. Establish procurement and mutual action timeline.

GUARDRAIL
This brief separates known facts from assumptions. It is not an approved proposal or savings guarantee.`;
  $("briefOutput").textContent=currentBrief;
}
$("buildBrief").addEventListener("click",buildBrief);
$("saveBrief").addEventListener("click",()=>{buildBrief();saveItem("briefs",{type:"AE brief",state:$("briefState").value,account:$("briefAccount").value||"Unnamed account",text:currentBrief});alert("Brief saved.");});
$("copyBrief").addEventListener("click",()=>copyText(currentBrief||$("briefOutput").textContent));
$("downloadBrief").addEventListener("click",()=>download("Medicaid_AE_Account_Brief.txt",currentBrief||$("briefOutput").textContent));

function renderSources(){
  $("sourceTable").innerHTML=TOOL_DATA.sources.map(s=>`<tr><td><b>${escapeHtml(s.name)}</b></td><td>${escapeHtml(s.supports)}</td><td>${escapeHtml(s.date)}</td><td>${escapeHtml(s.confidence)}</td><td>${escapeHtml(s.limitation)}</td><td><a class="sourceurl" href="${escapeHtml(s.url)}" target="_blank" rel="noopener">Open source</a></td></tr>`).join("");
}
function summaryText(item){
  if(item.type==="Cohort economics") return `${TOOL_DATA.states[item.state].name} · ${TOOL_DATA.cohorts[item.cohort].label} · ${money(item.net)} modeled net`;
  if(item.type==="Opportunity score") return `${item.account} · ${item.score}/100 · ${item.band}`;
  if(item.type==="Stakeholder map") return `${item.account} · ${item.stakeholders.length} mapped roles`;
  if(item.type==="Pilot design") return `${TOOL_DATA.states[item.state].name} · ${TOOL_DATA.cohorts[item.cohort].label}`;
  if(item.type==="SDOH knowledge card") return `${item.state} · ${item.domain} · ${item.question}`;
  if(item.type==="High-acuity service screen") return `${item.account} · ${item.tier} · score ${item.total}`;
  if(item.type==="AE brief") return `${item.account} · ${TOOL_DATA.states[item.state]?.name||item.state}`;
  return item.type;
}
function removeSaved(category,id){db[category]=db[category].filter(x=>x.id!==id);persist();}
window.removeSaved=removeSaved;
function renderList(items,category){
  if(!items.length)return `<div class="empty">Nothing saved yet.</div>`;
  return items.map(x=>`<div class="saveditem"><h4>${escapeHtml(x.type)}</h4><p>${escapeHtml(summaryText(x))}</p><p class="mini">${new Date(x.savedAt).toLocaleString()}</p><div class="buttons"><button class="dangerbtn" onclick="removeSaved('${category}','${x.id}')">Delete</button></div></div>`).join("");
}
function renderSaved(){
  $("savedScenarios").innerHTML=renderList([...db.scenarios,...db.opportunities].sort((a,b)=>b.savedAt.localeCompare(a.savedAt)),"mixed");
  // mixed delete needs mapping; replace handlers below
  $("savedKnowledge").innerHTML=renderList([...db.stakeholders,...db.pilots,...db.knowledge,...db.briefs].sort((a,b)=>b.savedAt.localeCompare(a.savedAt)),"mixed2");
  document.querySelectorAll("#savedScenarios .dangerbtn").forEach((b,i)=>b.onclick=()=>{
    const all=[...db.scenarios,...db.opportunities].sort((a,b)=>b.savedAt.localeCompare(a.savedAt)); const x=all[i];
    const key=x.type==="Cohort economics"?"scenarios":"opportunities"; removeSaved(key,x.id);
  });
  document.querySelectorAll("#savedKnowledge .dangerbtn").forEach((b,i)=>b.onclick=()=>{
    const all=[...db.stakeholders,...db.pilots,...db.knowledge,...db.briefs].sort((a,b)=>b.savedAt.localeCompare(a.savedAt)); const x=all[i];
    const key=x.type==="Stakeholder map"?"stakeholders":x.type==="Pilot design"?"pilots":(x.type==="SDOH knowledge card"||x.type==="High-acuity service screen")?"knowledge":"briefs"; removeSaved(key,x.id);
  });
}
$("exportData").addEventListener("click",()=>download("Medicaid_Tool_Backup.json",JSON.stringify(db,null,2),"application/json"));
$("importData").addEventListener("change",e=>{
  const file=e.target.files[0]; if(!file)return;
  const reader=new FileReader(); reader.onload=()=>{try{db={...blankStore,...JSON.parse(reader.result)};persist();alert("Backup imported.");}catch{alert("Invalid backup file.");}};reader.readAsText(file);
});
$("clearData").addEventListener("click",()=>{if(confirm("Delete all saved local tool data?")){db=structuredClone(blankStore);persist();}});

function applyEvidenceDefaults(){
  ["matchCohort","cohort","pilotCohort","briefCohort"].forEach(id=>{ if($(id) && [...$(id).options].some(o=>o.value==="complex")) $(id).value="complex"; });
}
function init(){
  applyEvidenceDefaults(); renderCohortTable(); renderOpportunityQuestions(); renderHighAcuityScreen(); renderSources();
  refreshCompanyDropdown(); applyPilotPreset(); renderPresetComparison(); loadEconomicDefaults(); renderFunding(); calculateTam(); renderSaved();
}
init();
})();