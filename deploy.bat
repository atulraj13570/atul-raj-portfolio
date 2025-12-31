@echo off
echo Building project...
call pnpm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo Adding changes to git...
"C:\Program Files\Git\bin\git.exe" add .

echo Committing changes...
"C:\Program Files\Git\bin\git.exe" commit -m "Auto deploy: %date% %time%"

echo Pushing to remote...
"C:\Program Files\Git\bin\git.exe" push

echo Deployment complete!
pause