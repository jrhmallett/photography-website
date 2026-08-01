# Photography Website - Image Guide

This guide documents the current image structure used by the live site.

## Quick Checklist

- [ ] Home page hero image
- [ ] Profile photo for About page
- [ ] 3 category cover images (Sport, Nature, Places)
- [ ] Sport gallery images following filename convention
- [ ] Nature gallery images following filename convention
- [ ] Places gallery images following filename convention

## Required Core Images

### 1) Hero Image (Home Page)
Location: `/public/photos/hero.jpg`

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
- `sport-ls.jpg` is the Sport category cover image on `/portfolio`

## Gallery Image Directories

### Sport Gallery
Location: `/public/photos/sport/`

- Required naming pattern: `sport-occasion-year-number.jpg`
- Example: `sport-silverstone-2026-1.jpg`
- Grouping behavior on `/portfolio/sport`:
	- Sub-heading per unique `occasion + year` (for example `Silverstone 2026`)
	- Photos under each sub-heading sorted by `number` ascending (`1, 2, 3, ...`)
	- Section order is newest year first, then occasion name

### Nature Gallery
Location: `/public/photos/nature/`

- Required naming pattern: `nature-animal-number.jpg`
- Example: `nature-birds-1.jpg`
- Grouping behavior on `/portfolio/nature`:
	- Sub-heading per unique `animal`
	- Photos under each sub-heading sorted by `number` ascending (`1, 2, 3, ...`)
	- Animal groups are displayed alphabetically

### Places Gallery
Location: `/public/photos/places/`

- Required naming pattern: `places-country-number.jpg`
- Example: `places-switzerland-1.jpg`
- Grouping behavior on `/portfolio/places`:
	- Sub-heading per unique `country`
	- Photos under each sub-heading sorted by `number` ascending (`1, 2, 3, ...`)
	- Country groups are ordered by the first number found for that country (ascending)

## Updating Gallery Content

Gallery pages now read the file system automatically from these folders:

- `public/photos/places/`
- `public/photos/sport/`
- `public/photos/nature/`

No manual image list updates are required as long as filenames follow the conventions above.

Implementation file:

- `app/portfolio/[category]/page.tsx`

## File Naming Rules

- Filenames are case-sensitive
- Use `.jpg` for photographic assets
- Keep names stable once published to avoid cache confusion
- Keep numeric suffixes contiguous when possible for cleaner sequencing

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
2. Confirm filename matches the category naming pattern
3. Hard refresh browser (`Cmd+Shift+R`)

## Last Updated

August 1, 2026
