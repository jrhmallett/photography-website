# Photography Website - Deployment Plan

**Current Status:** Production Ready ✅  
**Build Status:** Clean (10 routes prerendered)  
**Test Coverage:** 98.8% passing  
**Code Quality:** ESLint compliant

---

## Deployment Options

### Option 1: Vercel (RECOMMENDED) ⭐
**Best for:** Next.js sites, automatic CI/CD, zero-config deployment  
**Cost:** Free tier available ($0/mo for hobby projects)  
**Deployment Time:** < 2 minutes  
**Pros:**
- Built by Next.js creators
- Automatic deployments on git push
- Free SSL/HTTPS
- Preview URLs for pull requests
- 100GB/month bandwidth on free tier
- Global CDN included
- Analytics dashboard
- Environment variables management

**Cons:** Free tier has some limits on builds/deployments

---

### Option 2: Netlify
**Best for:** Fast setup, deployment forms, flexible pricing  
**Cost:** Free tier available ($0/mo basic)  
**Deployment Time:** < 2 minutes  
**Pros:**
- Easy drag-and-drop deployment option
- Automatic deployments on git push
- Free SSL/HTTPS
- Preview deployments
- Form handling (useful for contact forms later)
- 300 build minutes/month free

**Cons:** Lower free tier limits than Vercel

---

### Option 3: AWS Amplify
**Best for:** Larger projects, enterprise features  
**Cost:** Free tier available ($0/mo limited)  
**Deployment Time:** < 5 minutes  
**Pros:**
- AWS ecosystem integration
- Good long-term scalability
- Free tier includes 1000 build minutes

**Cons:** More complex setup than Vercel/Netlify

---

### Option 4: Self-Hosted (DigitalOcean/Linode)
**Best for:** Full control, learning DevOps  
**Cost:** ~$5-6/month  
**Deployment Time:** 15-30 minutes  
**Pros:**
- Full control over server
- No vendor lock-in
- Good for learning

**Cons:** Manual updates, need to manage server

---

## RECOMMENDED: Vercel Deployment

### Prerequisites
- ✅ GitHub account (for repo)
- ✅ GitHub repository pushed (you already have this)
- ✅ Vercel account (free)

### Step-by-Step Deployment

#### Phase 1: Prepare Code for Deployment

**1.1 Verify Git Repository**
```bash
cd /Users/jonathanmallett/Photography-website
git status                    # Check uncommitted changes
git log --oneline -5          # View recent commits
```

**1.2 Commit All Changes**
```bash
git add .
git commit -m "Production: Complete audit remediation and optimizations"
git push origin main
```

**Verify:**
- All changes pushed to GitHub
- No uncommitted code

---

#### Phase 2: Create Vercel Account & Connect GitHub

**2.1 Create Vercel Account**
- Go to: https://vercel.com/signup
- Click "Continue with GitHub"
- Authorize Vercel to access your repositories
- Complete signup

**2.2 Import Project**
- Click "Add New..." → "Project"
- Select "photography-website" repository
- Click "Import"

**2.3 Configure Project Settings**
- Framework Preset: **Next.js** (auto-detected)
- Root Directory: Use default `./`
- Build Command: Use default `next build`
- Output Directory: Use default `.next`
- Install Command: Use default `npm ci`

**2.4 Environment Variables** (if needed later)
- Leave empty for now (not needed for static site)
- Can add later for future features (contact form, analytics)

---

#### Phase 3: Deploy

**3.1 Deploy**
- Click "Deploy"
- Vercel builds and deploys your site
- Deployment takes 30-60 seconds
- You'll see a success message with URL

**3.2 Get Your Live URL**
- Your site will be at: `https://photography-website-[random].vercel.app`
- You can change the project name (Settings → General)
- Recommended: Rename to `jonathan-mallett-photography`

---

#### Phase 4: Custom Domain Setup

**Option A: Use Your Own Domain (Recommended)**

**4A.1 Buy Domain** (if don't already own one)
- Recommended registrars: Namecheap, Google Domains, Porkbun
- Cost: $8-15/year for `.com`
- Search for: `jonathanmallett.com` or `jonathanmallettphoto.com`
- Add to cart and purchase

**4A.2 Connect Domain to Vercel**
- In Vercel Dashboard → Settings → Domains
- Click "Add" under Domains
- Enter your domain: `jonathanmallett.com`
- Choose one:
  - **Option 1 (Recommended): Nameservers** 
    - Get nameservers from Vercel
    - Update nameservers in your domain registrar
    - Changes take 24-48 hours to propagate
  - **Option 2: CNAME** (if registrar doesn't support nameservers)
    - Add CNAME record pointing to Vercel
    - More complex but works immediately

**4A.3 Add www subdomain**
- Vercel will prompt: "Add www.jonathanmallett.com"
- Click "Add" to add www version
- Both `jonathanmallett.com` and `www.jonathanmallett.com` will work

**4A.4 Enable HTTPS/SSL**
- Vercel automatically provisions Let's Encrypt SSL
- HTTPS will be enabled automatically
- Takes 24-48 hours for full propagation

**Option B: Use Vercel Subdomain (Free, Instant)**
- Your site: `jonathan-mallett-photography.vercel.app`
- No custom domain setup needed
- Good for testing/staging

---

#### Phase 5: Post-Deployment Verification

**5.1 Verify Site Works**
```
Visit: https://your-domain.com (or .vercel.app)
- [ ] Home page loads with hero image
- [ ] Navigation links work (Portfolio, About)
- [ ] Portfolio shows 4 categories
- [ ] Click category to view gallery
- [ ] Click image to open lightbox
- [ ] Lightbox navigation works (⬅️ ➡️)
- [ ] Close lightbox (X button or ESC key)
- [ ] About page loads with bio
- [ ] Footer links work
- [ ] Mobile view responsive (test on phone/tablet)
```

**5.2 Check Performance**
- Open DevTools (F12)
- Check Network tab - images loading?
- Check Console - any errors?
- Load time < 3 seconds on 4G?

**5.3 Test on Different Devices**
- Desktop (Chrome, Safari, Firefox)
- Tablet (iPad, Android)
- Mobile (iPhone, Android phone)

**5.4 SSL Certificate Verification**
- Click 🔒 padlock in browser address bar
- Should show "Secure" with green padlock
- Certificate from "Let's Encrypt" (Vercel)

---

#### Phase 6: Set Up Auto-Deployments

**6.1 Connect GitHub to Vercel** (Already done during import)
- Every push to `main` branch triggers deployment
- Deployment completes in 30-60 seconds
- Vercel provides deployment notifications

**6.2 Preview Deployments**
- Create a feature branch: `git checkout -b new-feature`
- Make changes and push to GitHub
- Vercel creates a preview URL
- Great for testing before merging to main
- Delete branch to clean up preview

---

## Alternative: Netlify Deployment

### Quick Steps if Choosing Netlify

1. **Sign up:** https://netlify.com/signup (connect GitHub)
2. **Import site:** Click "Add new site" → "Import existing project"
3. **Select repository:** `photography-website`
4. **Build settings (auto-detected):**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Deploy:** Click "Deploy site"
6. **Custom domain:** Site settings → Domain management → Add domain

---

## Domain Registration + Email Setup

### Buy Domain
1. Go to Namecheap / Google Domains / Porkbun
2. Search: `jonathanmallett.com` (or variation)
3. Purchase for 1-3 years (~$10-15/year)
4. Add to cart → Checkout

### Optional: Add Email
- **Option A:** Use Vercel + Mailgun (forward emails)
- **Option B:** Use registrar's email forwarding (free)
- **Example:** `hello@jonathanmallett.com` → `jrhmallett@gmail.com`

### Connect Domain to Vercel
1. Copy Vercel nameservers
2. Paste into registrar's DNS settings
3. Wait 24-48 hours for propagation
4. Verify with `dig jonathanmallett.com`

---

## Timeline & Next Steps

| Step | Time | Status |
|------|------|--------|
| Create Vercel account | 2 min | 🟢 Ready |
| Import GitHub repo | 1 min | 🟢 Ready |
| Deploy to Vercel | 1 min | 🟢 Ready |
| Get live URL | Instant | 🟢 Ready |
| Buy custom domain | 5 min | ⏳ Optional |
| Connect domain to Vercel | 5 min | ⏳ Optional |
| Domain propagation | 24-48 hrs | ⏳ Wait |
| **TOTAL (with domain)** | **58 mins + propagation** | |
| **TOTAL (without domain)** | **4 minutes** | |

---

## Deployment Checklist

### Pre-Deployment
- [ ] All git commits pushed to GitHub
- [ ] Production build passes: `npm run build`
- [ ] All tests passing: `npm test`
- [ ] Linting clean: `npm run lint`
- [ ] No console errors in dev
- [ ] Images optimized and in place

### Deployment
- [ ] Vercel account created
- [ ] GitHub repository imported to Vercel
- [ ] Initial deployment successful
- [ ] Live URL working
- [ ] All pages accessible

### Post-Deployment
- [ ] Home page loads correctly
- [ ] Gallery displays all images
- [ ] Lightbox works with navigation
- [ ] About page loads
- [ ] Mobile responsive
- [ ] HTTPS working (green padlock)
- [ ] No 404 errors
- [ ] Performance acceptable (< 3s load)

### Custom Domain (Optional)
- [ ] Domain purchased
- [ ] Nameservers updated
- [ ] DNS propagated (can verify: `dig yourdomain.com`)
- [ ] Custom domain working on Vercel
- [ ] Both www and non-www versions work

---

## Monitoring After Deployment

### Set Up Alerts
- **Vercel Notifications:** Enable email alerts for failed deployments
- **Site Monitoring:** Consider Uptime Robot (free tier) for status checks
- **Analytics:** Enable Vercel Analytics (free tier available)

### Regular Maintenance
- Monitor build logs for errors
- Check for dependency updates monthly
- Review analytics for traffic patterns
- Test mobile experience periodically

---

## Future Enhancements (Post-Launch)

### Phase 2: Feature Additions
- [ ] Contact form with email backend
- [ ] Blog for photography posts
- [ ] Search functionality
- [ ] Image download/licensing
- [ ] Social media integration

### Phase 3: Performance
- [ ] Image optimization pipeline
- [ ] WebP format support
- [ ] Advanced caching strategies
- [ ] CDN optimization

### Phase 3: Analytics & SEO
- [ ] Add Vercel Analytics
- [ ] Set up Google Analytics
- [ ] Create sitemap.xml
- [ ] Submit to search engines
- [ ] Add meta tags per page

---

## Support & Help

### Resources
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/learn/basics/deploying-nextjs-app
- **Custom Domains:** https://vercel.com/docs/concepts/projects/domains
- **DNS Propagation Checker:** https://www.whatsmydns.net/

### Common Issues & Solutions

**Issue:** "Build failed"  
**Solution:** Check build logs in Vercel → check dependencies

**Issue:** Images not loading  
**Solution:** Verify images in `/public` folder, check image paths

**Issue:** Domain not connecting  
**Solution:** Check nameservers updated, wait 48 hours for propagation

**Issue:** HTTPS certificate not generating  
**Solution:** Verify domain DNS is set up, try redeploying

---

## Recommended Next Actions

1. **TODAY:** 
   - [ ] Create Vercel account (2 min)
   - [ ] Import photography-website repo (1 min)
   - [ ] Deploy to Vercel (1 min)
   - [ ] Test live URL (2 min)
   - **Total: ~6 minutes to go live!**

2. **THIS WEEK (Optional):**
   - [ ] Purchase custom domain
   - [ ] Connect domain to Vercel
   - [ ] Set up email forwarding

3. **NEXT WEEK (Optional):**
   - [ ] Set up analytics
   - [ ] Create sitemap
   - [ ] Submit to Google Search Console

---

## Questions & Decisions

**Do you want:**
- [ ] Vercel deployment? (recommended)
- [ ] Custom domain? (jonathanmallett.com?)
- [ ] Email setup? (hello@jonathanmallett.com?)
- [ ] Analytics? (traffic tracking?)

**Timeline preference:**
- [ ] Deploy today on vercel.app (fastest)
- [ ] Deploy today + add domain this week
- [ ] Full setup everything before going live

Let me know your preferences and I can walk you through the deployment!
