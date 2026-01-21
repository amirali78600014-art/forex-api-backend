# Firebase Setup Guide

## Step 1: Firebase Project Banayein
1. [Firebase Console](https://console.firebase.google.com/) par jayein
2. "Add Project" par click karein
3. Project ka naam daalein aur create karein

## Step 2: Realtime Database Enable Karein
1. Firebase Console mein apne project ko open karein
2. Left sidebar mein "Realtime Database" par click karein
3. "Create Database" par click karein
4. Test mode select karein (baad mein rules change kar sakte hain)

## Step 3: Service Account Key Download Karein
1. Project Settings (gear icon) par click karein
2. "Service Accounts" tab par jayein
3. "Generate New Private Key" par click karein
4. Downloaded JSON file ko `firebase-service-account.json` naam se save karein

## Step 4: Configuration Update Karein
1. `firebase-config.js` mein apna database URL update karein
2. `firebase-service-account.json` mein downloaded credentials paste karein

## Step 5: Dependencies Install Karein
```bash
npm install
```

## Step 6: Server Start Karein
```bash
npm start
```

## Client Side Setup (Optional)
`firebase-client-example.html` mein apni Firebase config details daalein:
- Firebase Console > Project Settings > General
- "Your apps" section mein web app config milega

## Firebase Database Structure
```
prices/
  ├── EURUSD/
  │   ├── pair: "EURUSD"
  │   ├── price: 1.0850
  │   ├── open: 1.0845
  │   ├── high: 1.0855
  │   ├── low: 1.0840
  │   └── time: "2024-01-01T12:00:00.000Z"
  ├── BTCUSDT/
  └── ...
```

## Security Rules (Production ke liye)
Firebase Console > Realtime Database > Rules:
```json
{
  "rules": {
    "prices": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```
