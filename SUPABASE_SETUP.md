# Supabase Setup Guide

This guide will walk you through setting up Supabase for the Mosaic School of Music project to track lead form submissions and user analytics.

## Prerequisites

- A Supabase account (free tier at https://supabase.com)
- Node.js and npm installed
- This project repository

---

## Step 1: Create a Supabase Project

1. **Sign up or log in** to [supabase.com](https://supabase.com)
2. **Click "New Project"**
3. **Fill in the form:**
   - **Name**: `mosaic-school-of-music` (or any name you prefer)
   - **Database Password**: Create a strong password and save it
   - **Region**: Choose closest to your location
4. **Click "Create new project"** and wait for it to initialize (2-3 minutes)

---

## Step 2: Get Your Credentials

Once your project is ready:

1. **Go to Project Settings** (⚙️ icon in bottom left)
2. **Click "API"**
3. **Copy these values** (you'll need them later):
   - **Project URL** (under "Project URL")
   - **Anon (public) Key** (under "Project API keys")

---

## Step 3: Create Database Tables

1. **In Supabase dashboard, go to "SQL Editor"** (top left sidebar)
2. **Click "New Query"**
3. **Copy and paste the following SQL**, then run it:

```sql
-- Create leads table
CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  mode text NOT NULL CHECK (mode IN ('online', 'home-tuition')),
  message text,
  ip_address text,
  created_at timestamp DEFAULT now()
);

-- Create indexes for faster queries
CREATE INDEX idx_leads_phone ON leads(phone);
CREATE INDEX idx_leads_mode ON leads(mode);
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- Create analytics_events table
CREATE TABLE analytics_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL CHECK (event_type IN ('form_view', 'form_submit', 'form_success')),
  page_path text,
  mode text CHECK (mode IN ('online', 'home-tuition') OR mode IS NULL),
  user_session_id text,
  created_at timestamp DEFAULT now()
);

-- Create indexes for analytics
CREATE INDEX idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_mode ON analytics_events(mode);
CREATE INDEX idx_analytics_created_at ON analytics_events(created_at);
```

4. **Click "Run"** ✓

---

## Step 4: Set Up Environment Variables

1. **Copy your Supabase credentials** from Step 2

2. **In your project root, create or edit `.env.local`:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with your actual Supabase URL and anon key.

3. **Save the file** (it's in `.gitignore` so it won't be committed)

---

## Step 5: Install Dependencies

Run this command in your project root:

```bash
npm install
```

This will install the new `@supabase/supabase-js` dependency.

---

## Step 6: Start the Dev Server

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`

---

## Step 7: Test the Integration

### Test Lead Form Submission

1. **Navigate to** http://localhost:3000
2. **Scroll to the contact form** ("Start Your Guitar Journey Today")
3. **Fill in the form:**
   - Name: `John Doe`
   - Phone: `9876543210`
   - Email: `john@example.com`
   - Mode: Select "Online Classes"
   - Message: `I'd like to learn rock guitar`
4. **Click "Book My Free Trial 🎸"**
5. **You should be redirected to** `/thank-you`

### Verify in Supabase

1. **Go to Supabase dashboard → "Table Editor"**
2. **Click on "leads" table** — you should see your test submission with:
   - name, phone, email, mode, message
   - created_at timestamp

3. **Click on "analytics_events" table** — you should see events:
   - `form_view` (when form loaded)
   - `form_submit` (when you submitted)

---

## Analytics Queries

You can now query your data in Supabase. Go to **SQL Editor** and run these:

### 1. **How many leads by class mode?**

```sql
SELECT 
  mode, 
  COUNT(*) as total_leads,
  COUNT(DISTINCT user_session_id) as unique_sessions
FROM leads
GROUP BY mode
ORDER BY total_leads DESC;
```

### 2. **Most popular class option (by conversions)**

```sql
SELECT 
  mode,
  COUNT(*) as submissions
FROM leads
GROUP BY mode
ORDER BY submissions DESC
LIMIT 1;
```

### 3. **Form conversion funnel**

```sql
SELECT 
  event_type,
  mode,
  COUNT(*) as count
FROM analytics_events
WHERE event_type IN ('form_view', 'form_submit')
GROUP BY event_type, mode
ORDER BY event_type, mode;
```

### 4. **Recent leads (last 24 hours)**

```sql
SELECT 
  name, 
  phone, 
  email, 
  mode, 
  created_at
FROM leads
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;
```

---

## Troubleshooting

### "Supabase credentials not found" warning

**Solution:** Check that `.env.local` has the correct:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Make sure there are no typos and the values are wrapped in quotes if needed.

### Form submits but nothing appears in Supabase

1. **Check browser console** (F12 → Console tab) for errors
2. **Check your Supabase URL and key** — they must be correct
3. **Verify the tables exist** — go to Table Editor in Supabase
4. **Check Row-Level Security (RLS)** — make sure it's disabled for testing:
   - Go to **Authentication → Policies**
   - If RLS is enabled, you'll need to add policies

### "CORS" or "Network" errors

This typically means the Supabase credentials are wrong or the URL is incorrect. Double-check the values in `.env.local`.

---

## Production Deployment

When deploying to production:

1. **Add environment variables** to your hosting platform (Vercel, etc.):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Consider enabling Row-Level Security (RLS)** for production security

3. **Set up automated backups** in Supabase settings

---

## Next Steps

- **View analytics dashboard** — Supabase has a built-in charting feature
- **Set up alerts** — get notified when you receive new leads
- **Export data** — download leads as CSV from Table Editor
- **Archive old leads** — keep your tables clean by archiving historical data

---

## Need Help?

- **Supabase Docs**: https://supabase.com/docs
- **Project Issues**: Check your browser console (F12) for detailed error messages
