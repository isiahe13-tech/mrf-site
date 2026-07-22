"""v15 Morning Intelligence engine — runs nightly via the same scheduled task as regwatch.py.
Pulls three verified public feeds and writes v15_data.js for the platform to render.
Every feed fails gracefully; errors are reported IN the output, never crash the run.
Stdlib only (no pip dependencies). Verified live 7/21/2026:
  1. data.medicaid.gov datastore API  - managed-care enrollment by plan (keyless JSON)
  2. GovTrack API v2                  - federal bill status for S.2834 / H.R.5439 (keyless JSON)
  3. KFF 1115 waiver tracker          - page-change detection via content hash
"""
import json, re, hashlib, urllib.request, datetime, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
STATE_PATH = os.path.join(HERE, "v15_state.json")
OUT_PATH = os.path.join(HERE, "v15_data.js")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

TARGET_STATES = {"louisiana", "california", "new york", "massachusetts", "north carolina"}
BILLS = [
    ("S.2834 — Medically Tailored Home-Delivered Meals Program Pilot Act (Senate)",
     "https://www.govtrack.us/api/v2/bill?congress=119&bill_type=senate_bill&number=2834"),
    ("H.R.5439 — Medically Tailored Home-Delivered Meals Program Pilot Act (House)",
     "https://www.govtrack.us/api/v2/bill?congress=119&bill_type=house_bill&number=5439"),
]
KFF_URL = "https://www.kff.org/medicaid/issue-brief/medicaid-waiver-tracker-approved-and-pending-section-1115-waivers-by-state/"
ENROLL_URL = "https://data.medicaid.gov/api/1/datastore/query/0bef7b8a-c663-5b14-9a46-0b5c2b86b0fe/0?limit=2000&offset={off}"


def fetch(url, timeout=40):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="replace")


def load_state():
    try:
        with open(STATE_PATH, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {}


def num(v):
    try:
        return int(float(str(v).replace(",", "")))
    except Exception:
        return 0


def feed_enrollment(errors):
    rows = []
    for off in range(0, 10000, 2000):
        txt = fetch(ENROLL_URL.format(off=off))
        chunk = json.loads(txt).get("results", [])
        rows.extend(chunk)
        if len(chunk) < 2000:
            break
    skip_prog = re.compile(r"dental|transportation|behavioral", re.I)
    target = [r for r in rows
              if str(r.get("state", "")).strip().lower() in TARGET_STATES and r.get("plan_name")
              and not skip_prog.search(str(r.get("program_name", "")))]
    years = [num(r.get("year")) for r in target if num(r.get("year"))]
    latest = max(years) if years else 0
    # latest year only; one row per plan per state (regions summed)
    agg = {}
    for r in target:
        if num(r.get("year")) != latest:
            continue
        st = str(r.get("state", "")).strip().title()
        plan = str(r.get("plan_name", "")).strip()
        key = (st, re.sub(r"[^a-z0-9]", "", plan.lower()))
        if key not in agg:
            agg[key] = {"plan": plan[:60],
                        "parent": str(r.get("parent_organization", "")).strip()[:40],
                        "program": str(r.get("program_name", "")).strip()[:40],
                        "total": 0, "duals": 0, "state": st}
        agg[key]["total"] += num(r.get("total_enrollment"))
        agg[key]["duals"] += num(r.get("dual_enrollment"))
    out = {"dataYear": latest, "states": {}}
    for v in agg.values():
        out["states"].setdefault(v["state"], []).append(
            {k: v[k] for k in ("plan", "parent", "program", "total", "duals")})
    for st in out["states"]:
        out["states"][st].sort(key=lambda p: -p["total"])
        out["states"][st] = out["states"][st][:5]
    return out


def feed_bills(prior, errors):
    out = []
    for label, url in BILLS:
        try:
            j = json.loads(fetch(url))
            obj = (j.get("objects") or [{}])[0]
            status = obj.get("current_status", "unknown")
            date = obj.get("current_status_date", "")
            key = "bill::" + label
            changed = prior.get(key) not in (None, status)
            prior_status = prior.get(key)
            prior[key] = status
            out.append({"bill": label, "status": status, "date": date,
                        "changed": bool(changed), "prior": prior_status})
        except Exception as e:
            errors.append(f"bill feed ({label.split(' ')[0]}): {e}")
    return out


def feed_kff(prior, errors):
    txt = fetch(KFF_URL)
    body = re.sub(r"\s+", " ", re.sub(r"<script.*?</script>", "", txt, flags=re.S))
    h = hashlib.sha256(body.encode()).hexdigest()[:16]
    old = prior.get("kff_hash")
    prior["kff_hash"] = h
    return {"changed": bool(old and old != h), "firstRun": old is None,
            "lastChecked": datetime.date.today().isoformat()}


TRIGGER_RULES = [
    ("RFP / PROCUREMENT POSTED",
     r"\b(rfp|request for proposals?|solicitation|procurement|invitation to bid|vendor selection|contract award)\b",
     "Shred it same-day (RFP tab) — bid/no-bid decision within 48 hours."),
    ("WAIVER / MECHANISM ACTION",
     r"\b(1115|waiver|in lieu of|ilos|community supports?|hrsn)\b",
     "The mechanism map may have moved — check the state row (Targeting tab) and open evidence-pack conversations with programs on that authority."),
    ("PLAN EXIT / ENTRY / RE-PROCUREMENT",
     r"\b(exits?|withdraws?|terminat\w+|re-?procurement|awarded contract|new mco|plan selection)\b",
     "Member churn window — receiving plans need engagement wins; land the reassigned-member pitch inside 90 days."),
    ("LEADERSHIP CHANGE",
     r"\b(appoints?|names?|hires?|new (?:ceo|cmo|president|director)|steps? down|resigns?|succeeds?)\b",
     "New priorities, no incumbent loyalty — congratulations + market-intel note within 2 weeks (Targeting tab owns the map)."),
    ("COMPETITOR / FOOD-AS-MEDICINE MOVE",
     r"\b(mom'?s meals|instacart|season health|nourishedrx|foodsmart|medically tailored|food as medicine|food is medicine|produce prescription)\b",
     "Validated budget or a bar to beat — ladder pitch; pull the battlecard (Sales Kit tab)."),
    ("BILL / STATUTE MOVEMENT",
     r"\b(passes|passed|enacted|signed into law|advances|committee approv\w+|markup)\b",
     "A mechanism being born — check the Champions card below and the bill watch above."),
    ("STARS / QUALITY EVENT",
     r"\b(star ratings?|cahps|hedis|quality bonus)\b",
     "Renewal-defense conversation opener (Account Health tab)."),
]


def feed_triggers(errors):
    """Classify today's Reg Watch feed items against the Targeting tab's trigger doctrine."""
    path = os.path.join(HERE, "regwatch_data.js")
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    data = json.loads(raw.replace("window.REGWATCH_DATA =", "").rstrip("; \n"))
    hits, seen = [], set()
    for item in data.get("items", []):
        text = (str(item.get("title", "")) + " " + str(item.get("bucket", ""))).lower()
        for name, pattern, move in TRIGGER_RULES:
            m = re.search(pattern, text, re.I)
            if m and item.get("title") not in seen:
                seen.add(item.get("title"))
                hits.append({"trigger": name, "title": str(item.get("title", ""))[:160],
                             "url": item.get("url", ""), "date": item.get("date", ""),
                             "source": item.get("source", ""), "move": move,
                             "why": f"matched \"{m.group(0)}\""})
                break
    return {"scanned": data.get("itemCount", len(data.get("items", []))),
            "feedGenerated": data.get("generated", ""), "hits": hits[:12],
            "capped": len(hits) > 12}


def main():
    errors = []
    prior = load_state()
    data = {"generatedAt": datetime.datetime.now().strftime("%A, %B %d, %Y at %I:%M %p"),
            "enrollment": {}, "bills": [], "kff": {}, "triggers": {}, "errors": errors}
    try:
        data["triggers"] = feed_triggers(errors)
    except Exception as e:
        errors.append(f"trigger classifier: {e}")
    try:
        data["enrollment"] = feed_enrollment(errors)
    except Exception as e:
        errors.append(f"enrollment feed: {e}")
    data["bills"] = feed_bills(prior, errors)
    try:
        data["kff"] = feed_kff(prior, errors)
    except Exception as e:
        errors.append(f"kff feed: {e}")

    with open(STATE_PATH, "w", encoding="utf-8") as f:
        json.dump(prior, f)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write("window.V15_DATA = " + json.dumps(data, ensure_ascii=False) + ";\n")
    print(f"v15 intel written: {len(data['enrollment'].get('states', {}))} states, "
          f"{len(data['bills'])} bills, kff={'changed' if data['kff'].get('changed') else 'unchanged'}, "
          f"{len(errors)} errors")
    return 0


if __name__ == "__main__":
    sys.exit(main())
