@echo off
if "%~1"=="" (
    echo Please provide a commit message
    exit /b 1
)

git add .
git commit -m "%*"
git push
