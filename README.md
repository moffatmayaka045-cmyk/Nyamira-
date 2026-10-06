# Nyamira Serve 🌿
### Your County, At Your Fingertips

A full-stack public services platform for Nyamira County Government, Kenya.

---

## 🚀 What's Built So Far

### Phase 1 — Complete ✅
- Full interactive UI prototype (12 departments, 60+ services)
- English / Kiswahili toggle
- Service search

### Phase 2 — Web Frontend ✅
- **index.html** — Complete production web app
  - Home page with hero, stats, department grid
  - All 12 departments with full service listings
  - Online / In-Person service badges
  - Application form modal with submission flow
  - Application tracker (with progress bars)
  - M-Pesa payment guide & fee schedule
  - County info page (for tourists & investors)
  - Fully responsive (mobile + desktop)
  - English ↔ Kiswahili toggle

---

## 📁 Project Structure

```
nyamira-serve/
├── index.html              ← Main web app (open this in browser)
├── src/
│   ├── data/
│   │   └── services.js     ← All service data (reusable for React Native)
│   ├── components/         ← React components (Phase 3)
│   ├── pages/              ← Page components (Phase 3)
│   └── styles/             ← Shared styles (Phase 3)
└── README.md
```

---

## 🗺️ Full Roadmap

| Phase | What | Status |
|-------|------|--------|
| 1 | UI/UX Prototype | ✅ Done |
| 2 | Web Frontend (HTML/CSS/JS) | ✅ Done |
| 3 | React.js Web App | 🔜 Next |
| 4 | React Native Mobile App | 🔜 Soon |
| 5 | Node.js Backend API | 🔜 Soon |
| 6 | PostgreSQL Database | 🔜 Soon |
| 7 | M-Pesa Daraja Integration | 🔜 Soon |
| 8 | Admin Dashboard | 🔜 Soon |
| 9 | Cloud Deployment | 🔜 Soon |

---

## 🏗️ Phase 3 Plan — React Web App

### Tech Stack
- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **State**: React Context + useReducer
- **Routing**: React Router v6
- **Mobile**: React Native (Expo) — shared data layer

### Setup Commands (Phase 3)
```bash
# Create React app
npm create vite@latest nyamira-serve-web -- --template react
cd nyamira-serve-web
npm install

# Install dependencies
npm install react-router-dom tailwindcss @headlessui/react
npm install axios react-query

# Run dev server
npm run dev
```

---

## 💳 M-Pesa Integration (Phase 7)

Uses Safaricom **Daraja API** (STK Push):
- Paybill: **222333** (placeholder — replace with real county paybill)
- API: `https://sandbox.safaricom.co.ke/mpesa/`
- Required: Consumer Key, Consumer Secret, Passkey from Safaricom Developer Portal

---

## 🌐 Deployment (Phase 9)

- **Web**: Vercel (free tier) → `vercel deploy`
- **API**: Railway or Render
- **Database**: Railway PostgreSQL
- **Mobile**: Expo → Google Play & App Store

---

## 📞 County Contacts (Placeholder)
- Hotline: 0800 720 000
- Email: info@nyamira.go.ke
- Paybill: 222333

*Update these with real Nyamira County Government contacts before launch.*
