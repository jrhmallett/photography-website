# LIVE DEPLOYMENT - REAL-TIME WALKTHROUGH
## jonathanmallett.com on Google Domains + Vercel

**Start Time:** Now  
**Expected Duration:** 15 minutes to live  
**Total Cost:** ~$12/year (domain only)

---

## ✅ PRE-FLIGHT CHECK (Do this now in terminal)

```bash
cd /Users/jonathanmallett/Photography-website

# Verify production build works
npm run build
# ✅ Look for: "✓ Generating static pages using 9 workers (10/10)"

# Commit final changes
git add .
git commit -m "Production ready: deployment configuration"
git push origin main
# ✅ Should complete without errors
```

**Stop here and run those commands. Reply when complete.**

---

## 🌐 STEP 1: PURCHASE DOMAIN (5 minutes)

### 1.1 Open Google Domains

Go to: **https://domains.google.com**

### 1.2 Search for Your Domain

1. In the search box at top, type: **jonathanmallett.com**
2. Click: **Search** (or press Enter)
3. You'll see results showing:
   - `jonathanmallett.com` - AVAILABLE ✅ (or similar pricing info)
   - Price per year: ~$12/year

### 1.3 Add to Cart

1. Click the domain result
2. Click: **Select** button
3. You'll see cart with domain(s)
4. Select duration:
   - **2 years** (~$24) - Best value
   - Or: 1 year (~$12)
5. Click: **Checkout**

### 1.4 Create/Login to Google Account

- If you have Google account: **Sign in**
- If not: Create one (free, takes 2 minutes)
- Use: jrhmallett@gmail.com (your existing email) or create new

### 1.5 Review & Purchase

1. You'll see order review:
   - Domain: jonathanmallett.com
   - Duration: 1 or 2 years
   - Price: ~$12 (1 year) or ~$24 (2 years)
   - Auto-renew: Turn OFF for now (can enable later)

2. **IMPORTANT SETTINGS:**
   - ☑️ Keep "Use Google's nameservers" selected (we'll change this later)
   - ☑️ Privacy enabled (extra layer of privacy - it's free)

3. Enter payment info (credit card)

4. Click: **Complete Purchase**

5. You'll see: **"Your domain is ready!"** ✅

**Save/screenshot this page** - you'll need the nameservers that Google shows.

✅ **CHECKPOINT: Domain purchased - you own jonathanmallett.com!**

---

## 🔧 STEP 2: CREATE VERCEL ACCOUNT (3 minutes)

### 2.1 Open Vercel

Go to: **https://vercel.com/signup**

### 2.2 Sign Up with GitHub

1. Click: **"Continue with GitHub"**
2. You'll see GitHub authorization page
3. Click: **"Authorize Vercel"** (green button)
4. You'll be back at Vercel

### 2.3 Complete Profile

1. Enter:
   - Full name: **Jonathan Mallett**
   - Email: **jrhmallett@gmail.com**
2. Click: **"Create Team"** or **"Skip for now"** (skip is fine)
3. Accept terms & conditions
4. Click: **Create**

You're now in Vercel dashboard!

✅ **CHECKPOINT: Vercel account created**

---

## 📤 STEP 3: DEPLOY TO VERCEL (3 minutes)

### 3.1 Import Your GitHub Repository

1. Click: **"Add New"** (top right of dashboard)
2. Select: **"Project"**
3. You should see your GitHub repositories
4. Find: **"photography-website"**
5. Click: **"Import"** button next to it

### 3.2 Configure Deployment

You'll see import settings - **all are correct by default:**

```
Framework Preset: Next.js ✅
Root Directory: ./ ✅
Build Command: npm run build ✅
Output Directory: .next ✅
Install Command: npm ci ✅
```

**Don't change anything - just click: "Deploy"**

### 3.3 Watch Build Progress

You'll see:
```
Building...
[Log entries scrolling]
✓ Compiled successfully
✓ Generating static pages
✓ Production Deployment Ready
```

This takes about 1 minute.

✅ **CHECKPOINT: Site deployed and live on temporary Vercel URL!**

---

## 🔗 STEP 4: GET YOUR VERCEL URL

### 4.1 Find Your Live URL

After deployment completes:
1. You'll see: **"Congratulations! Your project has been deployed"**
2. Click the blue domain link: `photography-website-[xxxxx].vercel.app`
3. **YOUR SITE IS NOW LIVE!** 🎉

### 4.2 Test It Works

1. Click through:
   - [ ] Home page loads with hero image
   - [ ] Portfolio shows 4 categories
   - [ ] Click a category to see gallery
   - [ ] Click an image to open lightbox
   - [ ] Click "About" to see profile
   - [ ] All responsive (shrink window)

✅ **CHECKPOINT: Site works perfectly on Vercel!**

---

## 🌐 STEP 5: CONNECT CUSTOM DOMAIN (3 minutes setup)

### 5.1 Add Domain to Vercel

1. Back in Vercel dashboard
2. Click your project name at top
3. Go to: **Settings** tab
4. Click: **"Domains"** (left sidebar under Project)
5. Click: **"Add Domain"** button

### 5.2 Enter Your Domain

1. In the text field, type: **jonathanmallett.com** (exactly)
2. Click: **"Add"** or press Enter

Vercel will show: **"Nameservers configuration"**

### 5.3 Copy Vercel Nameservers

You'll see 4 nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

**Copy these (select all, Cmd+C)**

✅ **CHECKPOINT: Vercel awaiting nameserver update**

---

## 🔑 STEP 6: UPDATE NAMESERVERS IN GOOGLE DOMAINS (2 minutes)

### 6.1 Open Google Domains

Go to: **https://domains.google.com**

### 6.2 Select Your Domain

1. You should see your domain list
2. Click: **jonathanmallett.com**
3. Left sidebar, click: **"DNS"**

### 6.3 Change Nameservers

1. Near the top, look for: **"Name Servers"** section
2. You'll see: Google's nameservers (currently)
3. Click: **"Edit"** or **"Change Nameservers"**
4. Toggle or select: **"Use custom nameservers"**
5. Clear existing nameservers
6. Paste Vercel's 4 nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```
7. Click: **"Save"** or **"Update"**

You'll see: **"Nameserver changes will be effective within 24-48 hours"**

✅ **CHECKPOINT: Nameservers updated - propagation in progress**

---

## ⏳ STEP 7: WAIT FOR PROPAGATION (24-48 hours)

### 7.1 What's Happening Behind the Scenes

- Google Domains updates its DNS records
- Changes propagate globally across internet
- Usually completes within 24 hours
- Vercel automatically monitors and generates SSL certificate

### 7.2 You Can Use Vercel URL in the Meantime

Your site is **already live** at:
```
https://photography-website-[xxxxx].vercel.app
```

Share this link while waiting for jonathanmallett.com to propagate!

### 7.3 Check Propagation Status (Optional)

Visit: **https://www.whatsmydns.net/**
- Enter: `jonathanmallett.com`
- You'll see DNS servers worldwide
- Green checks = nameservers propagated
- All green = ready to use custom domain!

---

## 🔒 STEP 8: VERIFY CUSTOM DOMAIN (After 24-48 hours)

### 8.1 Test Your Domain

After nameservers propagate:

1. Visit: **https://jonathanmallett.com**
2. You should see your photography site! 🎉
3. Check green 🔒 padlock - HTTPS enabled!

### 8.2 Test All Paths

- `https://jonathanmallett.com` - Home
- `https://jonathanmallett.com/portfolio` - Portfolio
- `https://jonathanmallett.com/portfolio/wildlife` - Gallery
- `https://jonathanmallett.com/about` - About

All should work!

✅ **CHECKPOINT: Custom domain fully live with HTTPS!**

---

## 📋 YOUR DEPLOYMENT CHECKLIST

### Right Now (15 minutes)
- [ ] Run production build check
- [ ] Commit and push to GitHub
- [ ] Create Vercel account
- [ ] Import and deploy to Vercel
- [ ] Test temporary .vercel.app URL works
- [ ] Purchase jonathanmallett.com on Google Domains
- [ ] Update nameservers to Vercel
- ✅ **RESULT: Site live on temporary URL, awaiting domain propagation**

### Tomorrow/Next Day (Check these)
- [ ] Visit https://www.whatsmydns.net/, check if jonathanmallett.com propagated
- [ ] Once propagated: Visit https://jonathanmallett.com
- [ ] Verify green 🔒 HTTPS padlock
- [ ] Test all pages and gallery
- [ ] ✅ **RESULT: Site live on custom domain with HTTPS!**

### After Live (Good to Do)
- [ ] Enable Vercel Analytics (Settings → Analytics → Enable)
- [ ] Submit to Google Search Console (search.google.com/search-console)
- [ ] Update LinkedIn/social media with new URL
- [ ] Add to resume footer

---

## QUICK REFERENCE

**Your New URLs:**
- Portfolio: `https://jonathanmallett.com`
- Portfolio: `https://jonathanmallett.com/portfolio`
- About: `https://jonathanmallett.com/about`
- Gallery: `https://jonathanmallett.com/portfolio/[category]`

**Management Dashboards:**
- Vercel: https://vercel.com/dashboard
- Google Domains: https://domains.google.com

**Important Info:**
- Domain: jonathanmallett.com
- Registrar: Google Domains
- Hosting: Vercel (free)
- Auto-deploy: Yes (any git push to main)
- HTTPS: Automatic with Let's Encrypt

---

## SUPPORT

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Google Domains Help: https://support.google.com/domains
- DNS Propagation: https://www.whatsmydns.net/

**Common Issues:**
- Site shows 404: Domain hasn't propagated yet (wait 24-48 hrs)
- No HTTPS padlock: Certificate still generating (wait 24-48 hrs)
- Images not loading: Clear browser cache (Ctrl+Shift+Delete)

---

## YOU'RE READY! 🚀

**Next Action:** Run the pre-flight checks in your terminal and let me know what you see!

Commands to run:
```bash
cd /Users/jonathanmallett/Photography-website
npm run build
git add .
git commit -m "Production ready: deployment configuration"
git push origin main
```

Reply when complete, and I'll guide you to Google Domains!
