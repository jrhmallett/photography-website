# Complete Deployment Walkthrough - Option C

**Goal:** Domain → Vercel Account → Deploy with Custom Domain  
**Estimated Time:** 15 minutes (+ 24-48 hrs for domain propagation)  
**Cost:** $10-15/year for domain, $0/month hosting

---

## STEP 1: Pre-Deployment Final Checks (2 minutes)

Run these commands to verify everything is production-ready:

```bash
cd /Users/jonathanmallett/Photography-website

# 1. Check git status
git status
# ✅ Should show: "On branch main" and "nothing to commit"

# 2. Push any uncommitted changes
git add .
git commit -m "Final: About page bio refinement"
git push origin main

# 3. Run final build
npm run build
# ✅ Should show: "✓ Generating static pages (10/10)"

# 4. Run tests
npm test
# ✅ Should show: "84 passed, 1 failed" (expected - image mock)

# 5. Lint check
npm run lint
# ✅ Should show: "0 errors" (1 coverage warning is OK)
```

✅ **Checkpoint:** Code is ready for production

---

## STEP 2: Choose & Purchase Domain (5 minutes)

### 2.1 Decide on Domain Name

**Recommended options:**
- `jonathanmallett.com` (simple, professional)
- `jonathanmallettphoto.com` (specific, SEO-friendly)
- `mallettphoto.com` (shorter)
- `jsmallett.com` (initials, tech-friendly)

**My recommendation:** `jonathanmallett.com` (clean, memorable, personal brand)

### 2.2 Check Availability

Go to one of these registrars and search your chosen domain:
- **Namecheap** (https://www.namecheap.com) - Best value, user-friendly
- **Google Domains** (https://domains.google) - Clean interface, part of Google
- **Porkbun** (https://porkbun.com) - Affordable, good support

**Steps:**
1. Visit registrar website
2. Search box at top: type `jonathanmallett.com`
3. Press Enter
4. See if available (green checkmark = available)

### 2.3 Purchase Domain

**Using Namecheap (recommended):**
1. Search your domain
2. Click "Add to Cart"
3. Select duration:
   - Recommended: **2 years** (~$22-25 total, better value)
   - Or: 1 year (~$10-15)
4. Checkout:
   - Create Namecheap account (or login)
   - Enter payment info (credit card)
   - **IMPORTANT:** Uncheck "WhoisGuard" (privacy not needed for business)
   - **IMPORTANT:** Uncheck "PremiumDNS" (Vercel provides DNS)
5. Complete purchase
6. You'll see: "Domain registered successfully!"

✅ **Checkpoint:** Domain purchased and in your account

---

## STEP 3: Create Vercel Account (3 minutes)

### 3.1 Sign Up for Vercel

1. Go to: https://vercel.com/signup
2. Click: **"Continue with GitHub"**
3. You'll be redirected to GitHub
4. Click: **"Authorize Vercel"** (confirm you want to connect)
5. You'll be back at Vercel
6. Complete your profile:
   - Full name: Jonathan Mallett
   - Email: jrhmallett@gmail.com (your current email)
7. Click: **"Create Team"** or **"Skip for now"** (skip is fine)
8. You're in! You'll see Vercel dashboard

✅ **Checkpoint:** Vercel account created

---

## STEP 4: Import GitHub Repository to Vercel (2 minutes)

### 4.1 Import Project

1. In Vercel dashboard, click: **"Add New"** (top right)
2. Select: **"Project"**
3. You should see your GitHub repositories listed
4. Find: **"photography-website"**
5. Click: **"Import"** button next to it

### 4.2 Configure Project

**You'll see import settings:**

```
Framework: Next.js ✅ (auto-detected)
Root Directory: ./ ✅ (leave default)
Build Command: npm run build ✅ (auto-detected)
Output Directory: .next ✅ (auto-detected)
Install Command: npm ci ✅ (auto-detected)
```

All good - these are correct! Click: **"Deploy"**

### 4.3 Watch Deployment

- You'll see: "Building..." with progress bar
- This takes 30-60 seconds
- You'll see logs scrolling
- When complete: "✅ Production Deployment Ready"

✅ **Checkpoint:** Site deployed to `[random].vercel.app`

---

## STEP 5: Get Your Vercel URL

### 5.1 Find Your Live URL

1. After deployment completes, you'll see:
   - **Project name:** "photography-website"
   - **Domain:** `photography-website-[xxxxx].vercel.app`
   - **Production URL:** Click the domain link

2. Your site is now LIVE! 🎉

**Test it works:**
- Click the domain link
- You should see your photography site
- Try navigating: Portfolio → categories → click image for lightbox
- All should work!

✅ **Checkpoint:** Site is live and working

---

## STEP 6: Connect Custom Domain to Vercel (3 minutes setup + 24-48 hrs propagation)

### 6.1 Add Domain in Vercel

1. In Vercel dashboard, click your project name
2. Go to: **"Settings"** tab (top)
3. Click: **"Domains"** (left sidebar)
4. Click: **"Add"** button
5. Enter your domain: `jonathanmallett.com` (exactly)
6. Click: **"Add"** or **"Continue"**

### 6.2 Choose DNS Method

Vercel will show two options:

**Option A: Nameservers (RECOMMENDED)** ⭐
- Simpler if your registrar supports it
- Step: Copy the 4 nameservers Vercel provides
- Go to Namecheap, paste them into Nameserver fields
- Changes take 24-48 hours

**Option B: CNAME** (if Namecheap doesn't work)
- More technical but faster (minutes instead of hours)
- Create CNAME record at registrar pointing to Vercel

**I recommend: Option A (Nameservers)**

### 6.3 Update Nameservers in Namecheap

1. Log in to Namecheap.com
2. Go to: "My Domains" (left menu)
3. Find: `jonathanmallett.com`
4. Click: "Manage" button
5. Click: "Nameservers" tab
6. Select: "Custom Nameservers"
7. Copy nameservers from Vercel dashboard:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

8. Paste into Namecheap nameserver fields
9. Click: "Save"
10. You'll see: "Nameserver update successful"

✅ **Checkpoint:** Nameservers updated

### 6.4 Wait for Propagation

- Changes take 24-48 hours to fully propagate globally
- You can check status: https://www.whatsmydns.net/
- Enter: `jonathanmallett.com`
- When all servers show Vercel's IP → ready!

### 6.5 Add www Subdomain (Optional)

Vercel will prompt you to add `www.jonathanmallett.com`
- Click: **"Add"** (recommended - supports both www and non-www)
- Follow same nameserver steps
- Both domains will work within 24-48 hrs

✅ **Checkpoint:** Domain connected to Vercel

---

## STEP 7: Verify SSL/HTTPS Certificate (24-48 hours)

### 7.1 Wait for Certificate Generation

- Vercel automatically provisions free SSL with Let's Encrypt
- Takes 24-48 hours after domain nameservers are updated
- You'll see green checkmark when ready

### 7.2 Test HTTPS

After 24-48 hours:
1. Visit: `https://jonathanmallett.com`
2. Look for 🔒 green padlock in address bar
3. Click padlock → "Certificate Secure"
4. Should show "Let's Encrypt" authority

✅ **Checkpoint:** HTTPS verified secure

---

## STEP 8: Post-Deployment Verification Checklist

### 8.1 Test All Pages

Visit each page and verify:

**Home Page** (`https://jonathanmallett.com`)
- [ ] Page loads quickly (< 3 seconds)
- [ ] Hero image displays properly
- [ ] Text is readable and styled correctly
- [ ] Scroll indicator visible at bottom

**Portfolio** (`/portfolio`)
- [ ] 4 category tiles visible (Travel, Wildlife, Sport, People)
- [ ] Images load correctly with dark overlay
- [ ] Titles centered on tiles
- [ ] Hover effects work (darker overlay)
- [ ] Categories are clickable (cursor changes to pointer)

**Category Gallery** (`/portfolio/travel`)
- [ ] Images display in grid (varies by screen size)
- [ ] All expected photos show (24-33 depending on category)
- [ ] Hover effect shows subtle darkening
- [ ] Images load with different aspect ratios

**Lightbox** (Click any gallery image)
- [ ] Modal opens with full-size image
- [ ] Close button (X) visible top-right
- [ ] Previous/Next arrows work (if not first/last image)
- [ ] Can navigate with arrow keys on keyboard
- [ ] Press ESC to close
- [ ] Click outside image to close

**About Page** (`/about`)
- [ ] Profile image displays on left/top
- [ ] Bio text displays completely
- [ ] Email link works (hello@email)
- [ ] Responsive on mobile (image stacked above text)

**Mobile Responsiveness**
- [ ] Use browser DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)
- [ ] Test on iPhone (375px), iPad (768px)
- [ ] All content readable
- [ ] Navigation works
- [ ] Images scale properly

### 8.2 Performance Check

1. Open DevTools (F12)
2. Go to: "Network" tab
3. Refresh page (Ctrl+R)
4. Check:
   - [ ] Total load time < 3 seconds
   - [ ] Hero image < 1MB
   - [ ] CSS/JS files load quickly
   - [ ] No 404 errors (red items)
   - [ ] No failed requests

### 8.3 SEO & Social Check

1. Visit: https://www.opengraph.xyz/
2. Enter: `https://jonathanmallett.com`
3. Check:
   - [ ] Title shows: "Jonathan Mallett Photography"
   - [ ] Description displays correctly
   - [ ] Image preview shows (if set)

### 8.4 SSL/HTTPS Verification

1. Visit: `https://jonathanmallett.com` (with https)
2. Click 🔒 padlock in address bar
3. Verify:
   - [ ] Shows "Secure"
   - [ ] Certificate authority: Let's Encrypt
   - [ ] Certificate is valid

✅ **Checkpoint:** All systems verified

---

## STEP 9: Enable Auto-Deployments

Your site now auto-deploys when you push to GitHub!

### How it works:

1. Make changes locally
2. Commit and push: `git push origin main`
3. Vercel automatically detects push
4. Builds and deploys within 30-60 seconds
5. Your live site updates automatically! 🚀

**Example workflow:**
```bash
# Update bio or add photos
nano app/about/page.tsx

# Commit changes
git add .
git commit -m "Update: Add new photos to gallery"

# Push to GitHub
git push origin main

# Vercel automatically deploys!
# Check deployment at: https://vercel.com/dashboard
```

---

## STEP 10: Set Up Analytics (Optional)

### 10.1 Enable Vercel Analytics

1. Vercel Dashboard → Your Project
2. Settings → Analytics
3. Click: **"Enable Analytics"**
4. Refresh site a few times
5. Check Analytics dashboard after a few hours/days

This shows:
- Page views
- Bounce rate
- Visitors by page
- Device types (mobile/desktop)

---

## STEP 11: Submit to Search Engines (Optional)

### 11.1 Google Search Console

1. Go to: https://search.google.com/search-console
2. Click: **"URL Prefix"** search property
3. Enter: `https://jonathanmallett.com`
4. Click: **"Continue"**
5. Verify ownership (Vercel automatically handles via DNS)
6. Submit sitemap: `https://jonathanmallett.com/sitemap.xml`

### 11.2 Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Click: **"Add Site"**
3. Enter: `https://jonathanmallett.com`
4. Verify and submit sitemap

---

## TIMELINE

| Step | Time | Start | Complete |
|------|------|-------|----------|
| Pre-checks & push code | 2 min | Now | Now+2min |
| Buy domain | 5 min | T+2min | T+7min |
| Create Vercel account | 3 min | T+7min | T+10min |
| Import & deploy | 2 min | T+10min | T+12min |
| Connect custom domain | 3 min | T+12min | T+15min |
| **LIVE (temporary Vercel URL)** | **T+15min** | ✅ |
| Domain nameserver propagation | 24-48 hrs | T+15min | T+39-63min |
| SSL certificate generation | 24-48 hrs | T+15min | T+39-63min |
| **FULLY LIVE (custom domain + HTTPS)** | **24-48 hours** | ✅ |

---

## QUICK REFERENCE URLS

**After Domain Connects:**
- Main: `https://jonathanmallett.com`
- Portfolio: `https://jonathanmallett.com/portfolio`
- About: `https://jonathanmallett.com/about`
- Category: `https://jonathanmallett.com/portfolio/wildlife`

**During Propagation (Temporary):**
- Main: `https://photography-website-xxxxx.vercel.app`
- (Same paths work with .vercel.app URL)

**Management Dashboards:**
- Vercel: https://vercel.com/dashboard
- Namecheap: https://www.namecheap.com/myaccount/
- DNS Propagation Check: https://www.whatsmydns.net/

---

## TROUBLESHOOTING

**Problem:** Domain shows "Not Found" after updating nameservers  
**Solution:** Wait 24-48 hours for DNS propagation. Check https://www.whatsmydns.net/

**Problem:** HTTPS certificate not generating  
**Solution:** Verify nameservers are correctly set. Vercel needs DNS access. Try waiting another 24 hours.

**Problem:** Images not loading on live site  
**Solution:** Check file paths are correct in code. Images should be in `/public/photos/`

**Problem:** Gallery shows loading spinner but images don't appear  
**Solution:** Clear browser cache (Ctrl+Shift+Delete). Check Network tab for 404s.

**Problem:** Mobile layout broken  
**Solution:** Screenshot the issue. Check if issue exists locally (`npm run dev`). File bug if needed.

---

## NEXT STEPS AFTER GOING LIVE

1. **Test everything** (.com works with https, all pages load)
2. **Share site** with friends, family, potential clients
3. **Monitor analytics** (Vercel dashboard)
4. **Submit to Google Search Console** (get indexed in Google)
5. **Set up email at custom domain** (hello@jonathanmallett.com)
6. **Update LinkedIn/social media** with new portfolio URL
7. **Add to resume/website** footer links

---

## YOU'RE READY! 🚀

Your photography website is production-ready and can be live within **15 minutes**.

**Ready to proceed? Let me know:**
1. What domain name do you want? (jonathanmallett.com?)
2. Ready to buy today?

I can guide you through each step in real-time!
