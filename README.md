# Mosaic School of Music — Website

Production-ready Next.js 15 website for **Mosaic School of Music** — a guitar education school based in Dwarka, Delhi, India. Optimized for SEO, AEO, and lead generation.

---

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3**
- **Framer Motion** — animations
- **React Hook Form** — lead capture form
- **next-sitemap** — sitemap & robots.txt
- **@vercel/analytics** — free Vercel analytics
- Deployed on **Vercel free tier**

---

## Local Development

### Prerequisites

- Node.js 18.17+ ([download](https://nodejs.org))
- npm 9+

### Setup

```bash
# 1. Clone / navigate to project
cd mosaic-school-of-music

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local
# Edit .env.local and add your Google Sheets webhook URL

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
# Required: Google Apps Script webhook URL (see setup below)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Optional: Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Google Sheets Webhook Setup

This captures all lead form submissions into a Google Sheet and sends you an email notification.

### Step 1 — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Mosaic Leads"**
3. Add these headers in row 1 (exact spelling matters):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
 

### Step 2 — Set up Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
// Mosaic School of Music — Lead Capture Google Apps Script
// Deploy as Web App: Execute as Me, Access: Anyone

const SHEET_NAME = "Sheet1"; // or your sheet tab name
const NOTIFICATION_EMAIL = "mosaicschoolofmusic@gmail.com";

function doPost(e) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://mosaicschoolofmusic.com",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    // Parse the incoming JSON
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: "Invalid JSON" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const { name, phone, email, mode, message, timestamp } = data;

    // Write to Google Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error("Sheet not found: " + SHEET_NAME);
    }

    sheet.appendRow([
      timestamp || new Date().toISOString(),
      name || "",
      phone || "",
      email || "",
      mode || "",
      message || "",
    ]);

    // Send email notification
    const subject = `New Lead: ${name} — Mosaic School of Music`;
    const body = `
New guitar class enquiry received!

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Mode: ${mode === "home-tuition" ? "Home Tuition (Delhi)" : "Online Classes"}
Message: ${message || "None"}
Timestamp: ${timestamp}

Reply to this lead within 24 hours.
    `.trim();

    GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Error in doPost:", err);
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight OPTIONS requests
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Mosaic Lead Webhook Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3 — Deploy the Script

1. Click **Deploy → New deployment**
2. Select type: **Web App**
3. Set:
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the deployment URL** (looks like `https://script.google.com/macros/s/XXXXX/exec`)

### Step 4 — Add to Vercel

1. In your Vercel project dashboard, go to **Settings → Environment Variables**
2. Add: `GOOGLE_SHEETS_WEBHOOK_URL` = your copied deployment URL
3. Redeploy the project

---

## Deploying to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Mosaic School of Music website"
git remote add origin https://github.com/YOUR_USERNAME/mosaic-school-of-music.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

### Step 3 — Add Environment Variables

1. In Vercel dashboard → Settings → Environment Variables
2. Add `GOOGLE_SHEETS_WEBHOOK_URL` with your Apps Script URL
3. Optionally add `NEXT_PUBLIC_GA_ID` for Google Analytics

### Step 4 — Connect Custom Domain

1. In Vercel → Settings → Domains
2. Add `mosaicschoolofmusic.com`
3. Vercel will provide DNS records (usually two CNAME or A records)
4. Log in to your domain registrar and update nameservers or DNS records
5. Wait 24–48 hours for DNS propagation

---

## Post-Deployment Checklist

After going live, complete these steps:

### SEO Setup
- [ ] Submit sitemap to **Google Search Console**: `https://mosaicschoolofmusic.com/sitemap.xml`
- [ ] Verify the domain in Google Search Console
- [ ] Set up **Google Analytics 4** and add `NEXT_PUBLIC_GA_ID` to Vercel env vars

### Content Replacement
- [ ] **Replace placeholder logo** (`public/images/logo.png`) with the actual Mosaic logo
- [ ] **Replace OG image** (`public/images/og-default.jpg`) with a branded 1200×630px image
- [ ] **Replace placeholder reviews** in `src/lib/constants.ts` → `TESTIMONIALS` array with real Google reviews
- [ ] **Replace instructor cards** in `src/app/about/page.tsx` with real names, photos, and bios
- [ ] **Replace school story** in `src/app/about/page.tsx` with the actual founding story
- [ ] **Update Google Business Profile link** in `src/lib/constants.ts` → `googleBusinessProfile`

### Testing
- [ ] Test lead form end-to-end: fill form → check Google Sheet → check email notification
- [ ] Test WhatsApp links open correctly
- [ ] Test phone click-to-call links
- [ ] Test on mobile (iOS Safari and Android Chrome)
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/) — target 90+ on all metrics
- [ ] Run [Google Rich Results Test](https://search.google.com/test/rich-results) with your domain
- [ ] Check [schema.org validator](https://validator.schema.org/)

---

## Content Update Guide

### Updating Business Info
Edit `src/lib/constants.ts` — all business details (phone, email, WhatsApp, social links) are in one place.

### Updating Reviews
In `src/lib/constants.ts`, find the `TESTIMONIALS` array and replace placeholder entries with real Google reviews.

### Updating FAQs
In `src/lib/constants.ts`, find the `FAQS` array. Add/edit/remove questions as needed.

### Updating the About Page
Edit `src/app/about/page.tsx`. All placeholder content is marked with comments starting with `REPLACE`.

### Adding New Pages
Create a new folder in `src/app/` with a `page.tsx` file. Import and use existing components. Add the new URL to `src/app/sitemap.ts`.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, Analytics, JSON-LD)
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── guitar-classes-delhi/  # SEO landing page — Delhi keywords
│   ├── online-guitar-classes/ # SEO landing page — pan-India keywords
│   ├── thank-you/          # Post-form submission (noindex)
│   ├── api/lead/           # Lead form API route → Google Sheets webhook
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── layout/             # Header, Footer, WhatsAppFloat
│   ├── sections/           # Page sections (Hero, LeadForm, FAQ, etc.)
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── constants.ts        # All business info & content
│   ├── schemas.ts          # JSON-LD structured data generators
│   ├── metadata.ts         # Shared metadata helpers
│   └── cookieUtils.ts      # Client-side cookie reader
└── styles/
    └── globals.css         # Tailwind + custom CSS variables
```

---

## SEO & AEO Features

- **Unique metadata** (title + description) on every page
- **JSON-LD structured data**: MusicSchool, LocalBusiness, FAQPage, Course, BreadcrumbList, WebSite
- **Dynamic sitemap** at `/sitemap.xml`
- **robots.txt** (disallows `/api/` and `/thank-you`)
- **Canonical URLs** on every page
- **Open Graph + Twitter Card** tags
- **FAQ accordion** with schema markup for Google's People Also Ask / AI Overviews
- **Geo-aware content ordering** (Delhi users see home tuition first)
- **Core Web Vitals optimized**: next/image, next/font, lazy loading

---

## License

Private project — all rights reserved by Mosaic School of Music.
