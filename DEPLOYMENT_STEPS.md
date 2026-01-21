# ✅ Git Setup Complete!

## Ab yeh karein:

### 1. GitHub par Repository Banayein
1. https://github.com/new par jayein
2. Repository name: `forex-api-backend`
3. Public ya Private select karein
4. **"Create repository"** click karein

### 2. Code Push Karein
GitHub par repository banne ke baad, yeh commands run karein:

```bash
git remote add origin https://github.com/YOUR_USERNAME/forex-api-backend.git
git branch -M main
git push -u origin main
```

**YOUR_USERNAME** ko apne GitHub username se replace karein!

---

### 3. Render.com par Deploy

1. **https://render.com** → Sign up with GitHub
2. **Dashboard** → **New +** → **Web Service**
3. **Connect GitHub repository:** `forex-api-backend`
4. **Settings:**
   ```
   Name: forex-api-backend
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   Instance Type: Free
   ```
5. **Environment Variables** section mein:
   - Click **"Add Environment Variable"**
   - Key: `FIREBASE_SERVICE_ACCOUNT`
   - Value: (Copy complete JSON from `.env.render` file)
   - Click **"Add"**

6. **"Create Web Service"** click karein

✅ **Backend 24/7 Live ho jayega!**

---

### 4. Frontend Deploy (Firebase)

```bash
npx firebase login
npx firebase deploy --only hosting
```

✅ **Frontend Live:** https://tradingviewapi-d95ac.web.app

---

## Done! 🚀

- Backend: https://forex-api-backend.onrender.com
- Frontend: https://tradingviewapi-d95ac.web.app
- Firebase Database: https://console.firebase.google.com/project/tradingviewapi-d95ac/database
