# 🚀 Easy Deployment Guide

## Option 1: Railway.app (EASIEST - 5 Minutes)

### Step 1: GitHub Push
```bash
# Pehle GitHub par repository banayein: https://github.com/new
# Repository name: forex-api-backend

# Phir yeh commands:
git remote add origin https://github.com/YOUR_USERNAME/forex-api-backend.git
git push -u origin main
```

### Step 2: Railway Deploy
1. https://railway.app par jayein
2. "Start a New Project" click karein
3. "Deploy from GitHub repo" select karein
4. Login with GitHub
5. `forex-api-backend` repository select karein
6. Variables tab mein jayein:
   - Add variable: `FIREBASE_SERVICE_ACCOUNT`
   - Value: `.env.render` file se JSON copy karein
7. Deploy automatically start ho jayega!

✅ Done! URL milega: `https://forex-api-backend.up.railway.app`

---

## Option 2: Render.com (Manual Steps)

### Step 1: GitHub Push (same as above)

### Step 2: Render.com
1. https://render.com → Sign up with GitHub
2. New + → Web Service
3. Connect `forex-api-backend` repository
4. Settings:
   - Name: `forex-api-backend`
   - Build: `npm install`
   - Start: `npm start`
   - Free tier
5. Environment:
   - Key: `FIREBASE_SERVICE_ACCOUNT`
   - Value: `.env.render` file se JSON
6. Create Web Service

✅ Done! URL: `https://forex-api-backend.onrender.com`

---

## Option 3: Vercel (Alternative)

```bash
npm install -g vercel
vercel login
vercel --prod
```

Environment variables Vercel dashboard se add karein.

---

## Frontend Deploy (Firebase)

```bash
npx firebase login
npx firebase deploy --only hosting
```

✅ Live: https://tradingviewapi-d95ac.web.app

---

## Testing

1. Backend check: `https://YOUR-BACKEND-URL`
2. Frontend check: `https://tradingviewapi-d95ac.web.app`
3. Firebase data: https://console.firebase.google.com/project/tradingviewapi-d95ac/database

---

## Sabse Easy: Railway.app! 🚂
