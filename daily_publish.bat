@echo off
TITLE TinyToons - Daily Kids Video Auto-Publisher
echo ================================================================
echo           🌟 DAILY KIDS VIDEO GENERATOR & YOUTUBE PUBLISHER
echo             Target Channel: @manikantadatti6150
echo ================================================================
echo.
cd /d "%~dp0"

set "NODE_CMD=%~dp0..\tools\node.exe"
if not exist "%NODE_CMD%" set "NODE_CMD=node"

"%NODE_CMD%" daily_auto_publisher.cjs %*

echo.
echo ================================================================
echo Process completed! Video packages and logs are in "output" folder.
echo ================================================================
pause
