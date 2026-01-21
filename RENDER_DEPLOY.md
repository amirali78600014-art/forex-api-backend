# Render.com Deployment - Step by Step

## Step 1: GitHub Repository Banayein

### Option A: GitHub Desktop (Easy)
1. GitHub Desktop download karein: https://desktop.github.com/
2. Open karein aur login karein
3. File → Add Local Repository
4. Path select karein: `c:\Users\multi tech\Desktop\Funded program\BEST API`
5. "Publish repository" click karein
6. Repository name: `forex-api-backend`
7. Publish!

### Option B: Command Line
```bash
cd "c:\Users\multi tech\Desktop\Funded program\BEST API"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/forex-api-backend.git
git push -u origin main
```

---

## Step 2: Render.com Par Deploy

1. **Render.com par jayein:** https://render.com
2. **Sign Up** with GitHub
3. **New +** button → **Web Service**
4. **Connect GitHub repository** (forex-api-backend)
5. **Settings fill karein:**
   ```
   Name: forex-api-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```
6. **Create Web Service** click karein

---

## Step 3: Environment Variable Add Karein

Render Dashboard mein:
1. **Environment** tab par jayein
2. **Add Environment Variable** click karein
3. Key: `FIREBASE_SERVICE_ACCOUNT`
4. Value: (Copy from `.env.render` file - complete JSON)
5. **Save Changes**

---

## Step 4: Deploy!

Automatic deploy shuru ho jayega!

✅ **Backend Live:** https://forex-api-backend.onrender.com

---

## Testing

Backend URL browser mein open karein:
- https://forex-api-backend.onrender.com

Data Firebase mein check karein:
- https://console.firebase.google.com/project/tradingviewapi-d95ac/database

Frontend check karein:
- https://tradingviewapi-d95ac.web.app

---

## Updates Deploy Karne Ke Liye

```bash
git add .
git commit -m "update"
git push
```

Automatic redeploy ho jayega! 🚀
