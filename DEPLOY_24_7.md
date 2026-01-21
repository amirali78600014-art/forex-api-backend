# 24/7 Deployment Guide

## Part 1: Frontend Deploy (Firebase Hosting)

### Step 1: Firebase Login
```bash
npx firebase login
```

### Step 2: Deploy Frontend
```bash
npx firebase deploy --only hosting
```

✅ Frontend Live: https://tradingviewapi-d95ac.web.app

---

## Part 2: Backend Deploy 24/7 (Render.com - FREE)

### Step 1: GitHub Repository Banayein
1. GitHub par jayein: https://github.com/new
2. Repository name: `forex-api-backend`
3. Create repository

### Step 2: Code Upload Karein
```bash
cd "c:\Users\multi tech\Desktop\Funded program\BEST API"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/forex-api-backend.git
git push -u origin main
```

### Step 3: Render.com Par Deploy
1. https://render.com par jayein
2. "Sign Up" with GitHub
3. "New +" → "Web Service"
4. Connect your GitHub repository
5. Settings:
   - Name: `forex-api-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: `Free`

### Step 4: Environment Variables Add Karein
Render Dashboard mein:
- "Environment" tab par jayein
- Firebase service account JSON ko environment variable mein add karein

✅ Backend 24/7 Live!

---

## Alternative: Railway.app (Easier)

### Step 1: Railway.app
1. https://railway.app par jayein
2. "Start a New Project"
3. "Deploy from GitHub repo"
4. Select your repository
5. Automatic deploy ho jayega!

✅ Done! 24/7 Running

---

## Quick Deploy Commands

```bash
# Frontend deploy
npx firebase deploy --only hosting

# Backend - Push to GitHub
git add .
git commit -m "update"
git push
```

Backend automatically redeploy ho jayega!
