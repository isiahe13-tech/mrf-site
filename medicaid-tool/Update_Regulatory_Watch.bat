@echo off
cd /d "%~dp0"
echo Refreshing the Medicaid Regulatory Watch (takes ~20 seconds)...
python regwatch.py
echo.
pause
