@echo off
echo ========================================
echo Firebase Frontend Deployment
echo ========================================
echo.

echo Step 1: Firebase Login...
call npx firebase login

echo.
echo Step 2: Deploying to Firebase Hosting...
call npx firebase deploy --only hosting

echo.
echo ========================================
echo Deployment Complete!
echo Your site: https://tradingviewapi-d95ac.web.app
echo ========================================
pause
