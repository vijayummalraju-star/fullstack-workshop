@echo off
echo.
echo  ========================================
echo   Full Stack Workshop - Starting Up...
echo  ========================================
echo.

:: Start the server in background (keep window open so you can see errors)
start "Workshop Server" cmd /k "cd /d C:\Users\yashwitha\.gemini\antigravity\scratch\fullstack-workshop && node server.js"

:: Wait for server to start
echo  Waiting for server to start...
timeout /t 3 /nobreak >nul

:: Open all tabs
echo  Opening Slides...
start "" "C:\Users\yashwitha\.gemini\antigravity\scratch\fullstack-workshop\slides.html"

timeout /t 1 /nobreak >nul

echo  Opening To-Do App (localhost)...
start "" "http://localhost:3000"

timeout /t 1 /nobreak >nul

echo  Opening GitHub Repo...
start "" "https://github.com/vijayummalraju-star/fullstack-workshop"

echo.
echo  ========================================
echo   All set! Press F12 in browser for DevTools
echo   Press F11 on slides for fullscreen
echo  ========================================
echo.
pause
