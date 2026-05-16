# Photography Website - Image Guide

This guide documents the current image structure used by the live site.

## Quick Checklist

- [ ] Home page hero image
- [ ] Profile photo for About page
- [ ] 3 category cover images (Sport, Nature, Places)
- [ ] Curated sport gallery images
- [ ] Curated nature gallery images
- [ ] Curated places gallery images

## Required Core Images

### 1) Hero Image (Home Page)
Location: `/public/photos/Hero.jpg`

- Purpose: Featured image on the homepage
- Recommended dimensions: 1920x1080 or larger
- Format: JPG

### 2) Profile Image (About Page)
Location: `/public/photos/about/profile.jpg`

- Purpose: Photographer portrait on About page
- Recommended dimensions: 800x800 or larger
- Format: JPG

### 3) Portfolio Category Cover Images
Location: `/public/photos/categories/`

- `nature-ls.jpg`
- `places-ls.jpg`
- `sport-ls.jpg`

Notes:
- These are shown on `/portfolio`
- `sport-ls.jpg` is also used as the first image in the Sport gallery

## Gallery Image Directories

### Sport Gallery
Location: `/public/photos/sport/`

- Current naming pattern is `sport-*-ls.jpg`
- Main cover image in this folder is `sport-ls.jpg`

### Nature Gallery
Location: `/public/photos/nature/`

- Current assets use legacy `wildlife-*` naming in many files
- This is expected and supported by the current data map

### Places Gallery
Location: `/public/photos/places/`

- Mixed naming is expected (for example `Travel101.jpg`, `travel-23-ls.jpg`, `travel-117.jpg`)
- Keep exact filename case when referencing in code

## Updating Gallery Content

All category image lists are maintained in:

- `app/portfolio/[category]/page.tsx`

When adding or removing files from `public/photos/<category>/`, update that file so every `src` matches a real image.

Example entry:

```ts
{ id: 999, src: "/photos/places/new-photo.jpg", alt: "Travel photography" }
```

## File Naming Rules

- Filenames are case-sensitive
- Use `.jpg` for photographic assets
- Keep names stable once published to avoid cache confusion
- If replacing an existing image, preserve exact path where possible

## Local Verification Checklist

Run the site locally:

```bash
npm run dev
```

Check these routes:

- `http://localhost:3000`
- `http://localhost:3000/portfolio`
- `http://localhost:3000/portfolio/sport`
- `http://localhost:3000/portfolio/nature`
- `http://localhost:3000/portfolio/places`

If an image is blank:

1. Confirm file exists in `public/photos/...`
2. Confirm exact path and casing in `app/portfolio/[category]/page.tsx`
3. Hard refresh browser (`Cmd+Shift+R`)

## Last Updated

May 16, 2026
