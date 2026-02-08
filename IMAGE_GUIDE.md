# Photography Website - Image Guide

This guide explains all the images you need to add to make your website fully functional.

## 📋 Quick Checklist

- [ ] Home page hero image
- [ ] Profile photo for About page
- [ ] 3 category cover images (Sport, Wildlife, Travel)
- [ ] 6+ photos for Sport gallery
- [ ] 6+ photos for Wildlife gallery
- [ ] 6+ photos for Travel gallery

**Total minimum**: 11 images to get the site working

---

## 🖼️ Required Images

### 1. Hero Image (Home Page)
**Location**: `/public/photos/hero.jpg`

- **Purpose**: Main landing page background image
- **Dimensions**: 1920x1080px or higher (16:9 landscape)
- **Format**: JPG
- **File size**: Under 500KB recommended
- **Description**: Your absolute best photograph that represents your style

---

### 2. Profile Photo (About Page)
**Location**: `/public/photos/about/profile.jpg`

- **Purpose**: Your headshot on the About page
- **Dimensions**: 800x800px or higher (1:1 square)
- **Format**: JPG
- **File size**: Under 200KB recommended
- **Description**: Professional portrait (will display with grayscale filter)

---

### 3. Category Cover Images (Portfolio Landing)
**Location**: `/public/photos/categories/`

#### sport.jpg
- **Dimensions**: 1200x800px or higher (3:2 landscape)
- **Format**: JPG
- **Description**: Representative image for Sport category

#### wildlife.jpg
- **Dimensions**: 1200x800px or higher (3:2 landscape)
- **Format**: JPG
- **Description**: Representative image for Wildlife category

#### travel.jpg
- **Dimensions**: 1200x800px or higher (3:2 landscape)
- **Format**: JPG
- **Description**: Representative image for Travel category

---

### 4. Gallery Images (Portfolio Categories)

Each category needs at least 6 photos. You can add more by continuing the numbering pattern.

#### Sport Gallery
**Location**: `/public/photos/sport/`

- sport-1.jpg through sport-6.jpg (minimum)
- **Dimensions**: 1200x1600px or higher (3:4 portrait)
- **Format**: JPG
- **File size**: Under 300KB each recommended
- **Content**: Action shots, athletes, competitions, training

#### Wildlife Gallery
**Location**: `/public/photos/wildlife/`

- wildlife-1.jpg through wildlife-6.jpg (minimum)
- **Dimensions**: 1200x1600px or higher (3:4 portrait)
- **Format**: JPG
- **File size**: Under 300KB each recommended
- **Content**: Animals, nature, habitats, behavior

#### Travel Gallery
**Location**: `/public/photos/travel/`

- travel-1.jpg through travel-6.jpg (minimum)
- **Dimensions**: 1200x1600px or higher (3:4 portrait)
- **Format**: JPG
- **File size**: Under 300KB each recommended
- **Content**: Landscapes, cultures, architecture, places

---

## 🚀 How to Add Your Images

### Step 1: Prepare Your Photos
1. Select your best photographs for each category
2. Optimize them for web (compress without losing quality)
   - You can use tools like:
     - [TinyPNG](https://tinypng.com/) - Online compression
     - [JPEGmini](https://www.jpegmini.com/) - Desktop app
     - Photoshop "Save for Web"

### Step 2: Rename Files
Follow the exact naming conventions shown above:
- `hero.jpg` (not Hero.jpg or hero.jpeg)
- `profile.jpg`
- `sport.jpg`, `wildlife.jpg`, `travel.jpg`
- `sport-1.jpg`, `sport-2.jpg`, etc.

### Step 3: Place in Correct Directories
Copy your renamed images into their respective folders in `/public/photos/`

### Step 4: Test Locally
```bash
npm run dev
```
Visit each page to verify images load correctly:
- http://localhost:3000 (home page)
- http://localhost:3000/about (profile photo)
- http://localhost:3000/portfolio (category covers)
- http://localhost:3000/portfolio/sport (sport gallery)
- http://localhost:3000/portfolio/wildlife (wildlife gallery)
- http://localhost:3000/portfolio/travel (travel gallery)

---

## ➕ Adding More Gallery Photos

If you want to add more than 6 photos per category:

1. **Add numbered files**: Continue the pattern (sport-7.jpg, sport-8.jpg, etc.)

2. **Update the page component**: Edit `/app/portfolio/[category]/page.tsx`

   Find the relevant category section and add entries:
   ```typescript
   photos: [
     { id: 1, src: "/photos/sport/sport-1.jpg", alt: "Sport photography 1", title: "Action Shot" },
     // ... existing entries ...
     { id: 7, src: "/photos/sport/sport-7.jpg", alt: "Sport photography 7", title: "New Photo" },
   ]
   ```

---

## 🎨 Image Optimization Tips

### Dimensions
- **Hero/Category covers**: Landscape (wider than tall) works best
- **Gallery photos**: Portrait (taller than wide) creates nice grid layout
- **Profile**: Square maintains aspect ratio

### File Size
- Next.js automatically optimizes images, but starting with smaller files improves load times
- Target: Under 500KB for hero, under 300KB for gallery photos

### Quality Settings
- JPG Quality: 80-85% is usually the sweet spot
- Use JPG for photographs (not PNG)
- Maintain original aspect ratio (don't stretch/distort)

### Color Profile
- Use sRGB color space for web
- Export at 72 DPI (web standard)

---

## ⚠️ Troubleshooting

### Image Not Showing?
- Check filename matches exactly (case-sensitive)
- Verify file is in correct directory
- Make sure it's a `.jpg` file (not .jpeg, .JPG, or .png)
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Image Looks Blurry?
- Source image may be too small
- Try uploading higher resolution version
- Ensure you're not upscaling from smaller original

### Page Loading Slowly?
- Image files may be too large
- Compress images more aggressively
- Target under 300KB per gallery photo

---

## 📊 File Structure Reference

```
public/photos/
├── hero.jpg                    # 1920x1080 landscape
├── .gitkeep                    # Instructions
├── about/
│   ├── profile.jpg             # 800x800 square
│   └── .gitkeep
├── categories/
│   ├── sport.jpg               # 1200x800 landscape
│   ├── wildlife.jpg            # 1200x800 landscape
│   ├── travel.jpg              # 1200x800 landscape
│   └── .gitkeep
├── sport/
│   ├── sport-1.jpg             # 1200x1600 portrait
│   ├── sport-2.jpg
│   ├── sport-3.jpg
│   ├── sport-4.jpg
│   ├── sport-5.jpg
│   ├── sport-6.jpg
│   └── .gitkeep
├── wildlife/
│   ├── wildlife-1.jpg          # 1200x1600 portrait
│   ├── wildlife-2.jpg
│   ├── wildlife-3.jpg
│   ├── wildlife-4.jpg
│   ├── wildlife-5.jpg
│   ├── wildlife-6.jpg
│   └── .gitkeep
└── travel/
    ├── travel-1.jpg            # 1200x1600 portrait
    ├── travel-2.jpg
    ├── travel-3.jpg
    ├── travel-4.jpg
    ├── travel-5.jpg
    ├── travel-6.jpg
    └── .gitkeep
```

---

## 🎯 Next Steps

1. Read through this guide
2. Select and prepare your photos
3. Add the 11 minimum required images
4. Run `npm run dev` to preview locally
5. Once satisfied, commit and push to GitHub
6. Deploy to production (Vercel/Netlify)

Need help? Check the `.gitkeep` files in each directory for specific requirements!
