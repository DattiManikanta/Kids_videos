@echo off
TITLE TinyToons Kids Studio - Launcher
echo ================================================================
echo           🌟 TINYTOONS KIDS VIDEO STUDIO & AUTO-PUBLISHER
echo ================================================================
echo.
cd /d "%~dp0"

set "NODE_CMD=%~dp0..\tools\node.exe"
if not exist "%NODE_CMD%" set "NODE_CMD=node"

echo Checking node: %NODE_CMD%
"%NODE_CMD%" -v >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: Node.js was not found at %NODE_CMD%
    pause
    exit /b 1
)

echo Starting server and opening browser...
timeout /t 1 >nul
start http://localhost:3000

echo.
echo ================================================================
echo 🌟 Studio server is RUNNING at: http://localhost:3000
echo Keep this window OPEN while using TinyToons Studio!
echo To stop the server, press Ctrl+C or close this window.
echo ================================================================
echo.

"%NODE_CMD%" server.cjs
