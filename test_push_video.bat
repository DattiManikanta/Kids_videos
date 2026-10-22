@echo off
title TinyToons - Test Video Uploader
cd /d "%~dp0"
echo ================================================================
echo 🚀 Running TinyToons Test Video Pusher
echo ================================================================
..\tools\node.exe test_push_video.cjs
pause
