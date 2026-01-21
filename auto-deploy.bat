@echo off
echo ========================================
echo Automated Deployment Script
echo ========================================
echo.

echo Step 1: Checking Git status...
git status
echo.

echo Step 2: GitHub Repository Setup
echo.
echo Please create a repository on GitHub:
echo 1. Go to: https://github.com/new
echo 2. Repository name: forex-api-backend
echo 3. Click "Create repository"
echo.
set /p github_url="Enter your GitHub repository URL (e.g., https://github.com/username/forex-api-backend.git): "

echo.
echo Step 3: Pushing to GitHub...
git remote remove origin 2>nul
git remote add origin %github_url%
git branch -M main
git push -u origin main

echo.
echo ========================================
echo GitHub Push Complete!
echo ========================================
echo.

echo Step 4: Deploy to Cloud
echo.
echo Choose deployment platform:
echo 1. Railway.app (Easiest)
echo 2. Render.com (Recommended)
echo.
set /p choice="Enter choice (1 or 2): "

if "%choice%"=="1" (
    echo.
    echo Opening Railway.app...
    start https://railway.app/new
    echo.
    echo Follow these steps:
    echo 1. Click "Deploy from GitHub repo"
    echo 2. Login with GitHub
    echo 3. Select "forex-api-backend"
    echo 4. Go to Variables tab
    echo 5. Add: FIREBASE_SERVICE_ACCOUNT
    echo 6. Copy value from .env.render file
    echo 7. Deploy!
) else (
    echo.
    echo Opening Render.com...
    start https://render.com/
    echo.
    echo Follow these steps:
    echo 1. Sign up with GitHub
    echo 2. New + -^> Web Service
    echo 3. Connect "forex-api-backend"
    echo 4. Build: npm install
    echo 5. Start: npm start
    echo 6. Add Environment Variable: FIREBASE_SERVICE_ACCOUNT
    echo 7. Copy value from .env.render file
    echo 8. Create Web Service
)

echo.
echo ========================================
echo.
echo Step 5: Deploy Frontend to Firebase
echo.
set /p deploy_frontend="Deploy frontend now? (y/n): "

if /i "%deploy_frontend%"=="y" (
    echo.
    echo Logging into Firebase...
    call npx firebase login
    echo.
    echo Deploying to Firebase Hosting...
    call npx firebase deploy --only hosting
    echo.
    echo ========================================
    echo Frontend Live: https://tradingviewapi-d95ac.web.app
    echo ========================================
)

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Wait for backend deployment to complete
echo 2. Check backend URL from Railway/Render dashboard
echo 3. Test: https://tradingviewapi-d95ac.web.app
echo.
pause
