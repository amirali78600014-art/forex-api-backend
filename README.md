# Forex & Crypto Real-time API

Real-time forex, crypto, and stock prices using TradingView API with Firebase integration.

## Features
- 33+ Trading pairs (Forex, Crypto, Stocks, Indices)
- Real-time data updates
- Firebase Realtime Database integration
- API key authentication
- 24/7 cloud hosting

## Live Demo
- Frontend: https://tradingviewapi-d95ac.web.app
- Backend: Deploy on Render.com (see RENDER_DEPLOY.md)

## Local Setup

```bash
npm install
npm start
```

Server: http://localhost:3001

## Deployment

### Frontend (Firebase Hosting)
```bash
npx firebase login
npx firebase deploy --only hosting
```

### Backend (Render.com)
See `RENDER_DEPLOY.md` for complete guide.

## API Keys
Default keys:
- demo-key-123
- test-key-456
- live-key-789

Generate new: http://localhost:3001/admin

## Tech Stack
- Node.js
- WebSocket
- Firebase (Realtime Database + Hosting)
- TradingView API
