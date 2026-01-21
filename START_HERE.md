# ⚡ QUICK DEPLOYMENT - 3 STEPS

## Step 1: GitHub Repository (2 minutes)
1. Open: https://github.com/new
2. Repository name: `forex-api-backend`
3. Click "Create repository"
4. Copy the URL (e.g., https://github.com/username/forex-api-backend.git)

## Step 2: Push Code (Run these commands)
```bash
git remote add origin YOUR_GITHUB_URL_HERE
git push -u origin main
```

## Step 3: Deploy Backend (Choose one)

### Option A: Railway.app (Fastest)
1. Open: https://railway.app/new
2. Click "Deploy from GitHub repo"
3. Login with GitHub
4. Select `forex-api-backend`
5. Click Variables → Add Variable:
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: (Open `.env.render` file and copy the complete JSON)
6. Done! ✅

### Option B: Render.com
1. Open: https://render.com
2. Sign up with GitHub
3. New + → Web Service
4. Connect `forex-api-backend`
5. Settings: Build=`npm install`, Start=`npm start`, Free tier
6. Environment → Add: `FIREBASE_SERVICE_ACCOUNT` (value from `.env.render`)
7. Create Web Service ✅

---

## Step 4: Deploy Frontend (Run command)
```bash
npx firebase login
npx firebase deploy --only hosting
```

---

## ✅ DONE!
- Frontend: https://tradingviewapi-d95ac.web.app
- Backend: Check Railway/Render dashboard for URL
- Database: https://console.firebase.google.com/project/tradingviewapi-d95ac/database

---

## Current Status:
✅ Code committed to Git
⏳ Waiting for GitHub push
⏳ Waiting for cloud deployment
