@echo off
cd /d "%~dp0"
python regwatch.py
python v15_intel.py
copy /Y "regwatch_data.js" "C:\Users\isiah\Downloads\Medicaid_Market_Intelligence_Desktop_v13\Medicaid_Market_Intelligence_Desktop_v13\regwatch_data.js" >nul 2>&1
copy /Y "v15_data.js" "C:\Users\isiah\Downloads\Medicaid_Market_Intelligence_Desktop_v13\Medicaid_Market_Intelligence_Desktop_v13\v15_data.js" >nul 2>&1
copy /Y "v15_state.json" "C:\Users\isiah\Downloads\Medicaid_Market_Intelligence_Desktop_v13\Medicaid_Market_Intelligence_Desktop_v13\v15_state.json" >nul 2>&1

