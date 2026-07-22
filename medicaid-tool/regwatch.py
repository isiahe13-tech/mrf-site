# Medicaid Regulatory Watch updater
# Double-click Update_Regulatory_Watch.bat to run this. It pulls the latest
# Medicaid rulemaking from the Federal Register API and targeted news
# queries, then writes regwatch_data.js so the Regulatory Watch tab shows
# fresh items the next time the tool is opened (or refreshed).
# Standard library only - no installs needed.

import json
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime
from email.utils import parsedate_to_datetime
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "regwatch_data.js")

def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 MedicaidRegWatch/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()

items = []
errors = []

# ---- 1. Federal Register: newest Medicaid documents (official rulemaking) ----
try:
    fr_url = ("https://www.federalregister.gov/api/v1/documents.json"
              "?conditions%5Bterm%5D=Medicaid&order=newest&per_page=15")
    data = json.loads(fetch(fr_url).decode("utf-8", "replace"))
    for d in data.get("results", []):
        agency = ""
        if d.get("agencies"):
            agency = (d["agencies"][0] or {}).get("name", "") or ""
        items.append({
            "bucket": "Federal rulemaking (official)",
            "source": "Federal Register",
            "title": (d.get("title") or "").strip(),
            "date": d.get("publication_date") or "",
            "url": d.get("html_url") or "",
            "note": (" ".join(filter(None, [d.get("type", ""), agency]))).strip()
        })
except Exception as e:
    errors.append("Federal Register: " + str(e))

# ---- 2. Targeted news queries (leads, not verified facts) ----
QUERIES = [
    ("Medicaid \"food as medicine\"", "Food-as-Medicine news"),
    ("\"medically tailored meals\" Medicaid", "Food-as-Medicine news"),
    ("Louisiana Medicaid", "Louisiana"),
    ("CalAIM \"community supports\"", "California"),
    ("\"Healthy Opportunities\" North Carolina Medicaid", "North Carolina"),
    ("New York Medicaid \"social care\"", "New York"),
    ("Medicaid 1115 waiver HRSN", "1115 / HRSN policy"),
]
seen_titles = set()
for q, bucket in QUERIES:
    try:
        url = ("https://news.google.com/rss/search?q=" + urllib.parse.quote(q)
               + "&hl=en-US&gl=US&ceid=US:en")
        root = ET.fromstring(fetch(url))
        count = 0
        for it in root.iter("item"):
            if count >= 4:
                break
            title = (it.findtext("title") or "").strip()
            key = re.sub(r"\W+", "", title.lower())[:80]
            if not title or key in seen_titles:
                continue
            seen_titles.add(key)
            link = (it.findtext("link") or "").strip()
            pub = it.findtext("pubDate") or ""
            try:
                date = parsedate_to_datetime(pub).strftime("%Y-%m-%d")
            except Exception:
                date = ""
            src = it.find("source")
            src_name = src.text.strip() if (src is not None and src.text) else "News"
            items.append({
                "bucket": bucket,
                "source": src_name,
                "title": title,
                "date": date,
                "url": link,
                "note": "News lead - click through and verify before citing."
            })
            count += 1
    except Exception as e:
        errors.append(q + ": " + str(e))

# newest first inside each bucket run; overall sort by date desc
items.sort(key=lambda x: x.get("date") or "0000-00-00", reverse=True)

out = {
    "generated": datetime.now().strftime("%Y-%m-%d %H:%M"),
    "itemCount": len(items),
    "items": items[:80],
    "errors": errors,
}
with open(OUT, "w", encoding="utf-8") as f:
    f.write("window.REGWATCH_DATA = " + json.dumps(out, ensure_ascii=True, indent=1) + ";\n")

print("Regulatory Watch refreshed: %d items, %d source errors." % (len(items), len(errors)))
for e in errors:
    print("  warning:", e)
print("Wrote", OUT)
print("Reopen (or refresh) the tool to see the update.")
