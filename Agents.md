# Photography Website - Agent Instructions

## Project Overview

**Site:** Jonathan Mallett Photography Portfolio  
**Type:** Next.js static photography portfolio with masonry gallery  
**Live:** https://jonathanmallett.com  
**Repository:** https://github.com/jrhmallett/photography-website  
**Deployed on:** Netlify (auto-deploy on GitHub push)

---

## Key Technologies

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Images:** Next.js Image optimization (WebP format, quality: 85)
- **Deployment:** Netlify (automatic on push)
- **Domain:** jonathanmallett.com (Google Domains)
- **Email:** contact@jonathanmallett.com → forwards to Gmail

---

## Project Structure

```
/app
  /portfolio/[category]/page.tsx    ← Category pages (People, Travel, Sport, Wildlife)
  /about/page.tsx                    ← About page with contact email
  layout.tsx                         ← Root layout
/components
  /GalleryGrid.tsx                   ← Masonry layout (auto orientation detection)
  /Lightbox.tsx                      ← Full-screen image viewer
  /Header.tsx                        ← Site navigation
  /Footer.tsx                        ← Footer with contact email
/public/photos
  /people/                           ← Portrait & landscape images (12 existing)
  /travel/                           ← Travel photography (30 existing + 9 new: Travel101-109)
  /sport/                            ← Sport photography (25+ all landscape)
  /wildlife/                         ← Wildlife photography (21+ existing)
  /categories/                       ← Category card images
  /about/                            ← Profile photo
/next.config.ts                      ← Image optimization settings
```

---

## Gallery Features

### Masonry Layout (GalleryGrid.tsx)

**How it works:**
- CSS Grid with automatic row-span based on image aspect ratio
- Orientation detected via `onLoadingComplete` callback (reads naturalWidth/naturalHeight)
- No filename suffix needed (auto-detection replaces `-ls` convention)
- Row heights: base 200px, variable based on aspect ratio
  - Very tall portraits (ratio <0.85): 3 row span
  - Standard portraits/squares (0.85-1.15): 2 row span
  - Slightly wide (1.15-1.5): 2 row span
  - Landscape (>1.5): 1 row span
- `grid-auto-flow: dense` for intelligent gap filling
- Creates visually interesting layouts with minimal whitespace

**Key settings:**
```typescript
grid-auto-rows: minmax(200px, auto)
grid-auto-flow: dense
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

**Responsive behavior:**
- Mobile (base): 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns

### Lightbox Performance

- Changed from `priority` to `loading="eager"` to prevent eager loading of all images
- Full-resolution images only load when lightbox opens
- Improves initial page load performance

---

## Adding New Images

### Quick Process:

1. **Save image to correct folder:**
   ```
   /public/photos/[category]/[name].jpg
   ```

2. **Add to categoryData in app/portfolio/[category]/page.tsx:**
   - **Add at TOP of photos array** to appear first
   - Use higher ID numbers (100+) to avoid conflicts
   - Example:
   ```typescript
   { id: 101, src: "/photos/people/new-image.jpg", alt: "Description", title: "Optional Title" }
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add new images to [category]"
   git push
   ```
   - Netlify auto-deploys on push
   - Images processed by Next.js Image optimization

### Naming Convention:
- **No special suffix needed** (auto-detection handles portrait/landscape)
- Descriptive names recommended: `people-john-smith.jpg`, `travel-tokyo-sunset.jpg`
- Sequential IDs prevent conflicts

### Image Specifications:
- **Format:** JPG or PNG
- **File size target:** <300KB per image (before Next.js optimization)
- **Quality:** Next.js compresses to quality 85 (conservative for visual quality)
- **Responsive:** Next.js automatically serves WebP + multiple sizes (640px to 1920px)

---

## Performance Notes

### Large Images Needing Re-export:

These 17 images exceed 700KB and significantly impact lightbox load times:
1. wildlife/wildlife-ls.jpg (1.5MB) ✅ HIGH PRIORITY
2. categories/wildlife-ls.jpg (1.5MB) ✅ HIGH PRIORITY
3. travel/travel-21-ls.jpg (1.2MB)
4. people/people-3.jpg (1.0MB)
5-9. Multiple 1.0MB+ files (travel/sport/wildlife)
10-17. Multiple 700KB-900KB files

**Action:** Re-export at 70-80% quality to achieve <300KB. Next.js handles the rest.

### Image Optimization Pipeline:

1. **Source files** → uploaded to `/public/photos/`
2. **Next.js builds** → automatically converts to WebP, creates 6 responsive sizes
3. **Browser receives** → optimized WebP (30% smaller than JPEG)
4. **Lightbox** → loads full-res only when opened (not on page load)

---

## Content Categories

| Category | Path | Images | Mix | Best For |
|----------|------|--------|-----|----------|
| **People** | /portfolio/people | 12 existing | Portraits & landscapes | Human connection, portraiture |
| **Travel** | /portfolio/travel | 30 + 9 new (Feb 2026) | Portraits & landscapes | Global stories, culture |
| **Wildlife** | /portfolio/wildlife | 21+ existing | Mostly landscape | Animals, nature |
| **Sport** | /portfolio/sport | 25+ existing | All landscape | Action, sports |

---

## Contact & Email Setup

**Email Forwarding:**
- Address: contact@jonathanmallett.com
- Forwards to: Gmail (jrhmallett@gmail.com)
- Setup via: Google Domains email forwarding
- Status: Active as of Feb 2026

**Update locations if email changes:**
1. `/app/about/page.tsx` (About page text)
2. `/components/Footer.tsx` (Footer contact link)
3. Google Domains email forwarding rule

**Note:** DNS propagation for email takes 24-48 hours to complete globally (normal).

---

## Deployment Process

### Automatic (Recommended):
```bash
git add .
git commit -m "Your change description"
git push
```
- Netlify detects push automatically
- Builds Next.js site (~2-3 min)
- Auto-deploys when build succeeds
- Check status: https://app.netlify.com/

### Monitor Deployment:
1. **GitHub Commits:** https://github.com/jrhmallett/photography-website/commits/main
2. **Netlify Dashboard:** Check "Deploys" tab
3. **Live site:** https://jonathanmallett.com

---

## Common Tasks

### Task: Add 5 new travel images
```
1. Save to /public/photos/travel/
2. Open /app/portfolio/[category]/page.tsx
3. Find travel: { photos: [ section
4. Add at TOP:
   { id: 110, src: "/photos/travel/name.jpg", alt: "Description" },
5. git push → auto-deploys
```

### Task: Update About page text
```
1. Edit /app/about/page.tsx
2. Change text content
3. git push → auto-deploys
```

### Task: Change contact email
```
1. Update /app/about/page.tsx
2. Update /components/Footer.tsx
3. Update Google Domains forwarding rule
4. git push → auto-deploys
```

### Task: Debug image not showing
```
1. Verify file exists: /public/photos/[category]/filename.jpg
2. Check src path matches exactly in categoryData
3. Hard refresh browser (Cmd+Shift+R)
4. Check DevTools Network tab for 404 errors
```

### Task: Improve gallery performance
```
1. Re-export oversized source images (<300KB target)
2. Replace files in /public/photos/
3. Next.js auto-optimizes on next build
4. No code changes needed
```

---

## Important Notes for Future Agents

⚠️ **Critical:**
- DNS can take 24-48 hours to propagate (normal, don't panic)
- Image optimization happens at build time, not runtime
- Masonry layout reorders images densely (intentional for visual interest)
- WebP format requires JPEG fallback for older browsers (already configured)
- Never commit without testing locally: `npm run dev`

✅ **Best practices:**
- Always add new images at TOP of photos array (appear first)
- Test on mobile/tablet/desktop before deploying
- Use descriptive alt text for accessibility
- Keep source images under 300KB for optimal performance
- Write clear commit messages with details
- Verify production build locally: `npm run build`

📱 **Responsive breakpoints:**
- Mobile: <640px (1 column)
- Tablet: 640px-1024px (2 columns)
- Desktop: 1024px+ (3 columns)

---

## Build & Development Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Create optimized build
npm start            # Run production build locally

# Testing
npm test             # Run test suite

# Git workflow
git status           # Check changes
git add .            # Stage all changes
git commit -m "..."  # Commit with message
git push             # Deploy to production
```

---

## Contact
**Owner:** Jonathan Mallett  
**Email:** contact@jonathanmallett.com  
**Site:** https://jonathanmallett.com  
**GitHub:** https://github.com/jrhmallett

**Last updated:** February 28, 2026  
**Last major changes:** Masonry layout implementation, image optimization, new travel images (Travel101-109)
