@echo off
TITLE Setup Daily Windows Scheduler Task
echo ================================================================
echo      🌟 REGISTER DAILY KIDS PUBLISHER IN WINDOWS SCHEDULER
echo ================================================================
echo.
echo This script sets up a Windows Task to automatically run every morning at 09:00 AM.
echo.

set "SCRIPT_PATH=%~dp0daily_publish.bat"
schtasks /create /tn "TinyToonsKidsAutoPublish" /tr "\"%SCRIPT_PATH%\"" /sc daily /st 09:00 /f

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================================
    echo SUCCESS! Task "TinyToonsKidsAutoPublish" is scheduled for 9:00 AM daily!
    echo ================================================================
) else (
    echo.
    echo Notice: To register in Windows Task Scheduler, please right-click this
    echo file and choose "Run as administrator".
)

echo.
pause
