# Photography Website – Agent Instructions

## Project Overview

**Site:** Jonathan Mallett Photography Portfolio  
**Type:** Next.js App Router photography portfolio with curated galleries and a lightbox
**Live:** https://jonathanmallett.com  
**Repository:** https://github.com/jrhmallett/photography-website  
**Deployment:** Vercel (GitHub-connected deployments)

This repository is a **minimal photography portfolio** designed to present original work in a clean, high-quality, performance-focused format.

Primary goals:

- Showcase photography in a distraction-free gallery
- Preserve image quality while maintaining fast load times
- Keep UX simple, responsive, and accessible
- Protect copyright and avoid misuse of images

Treat this repository as an **artist portfolio**, not a general content site.

---

## Core Principles

### Photography First

All design and development decisions should prioritize:

- image presentation
- simplicity
- performance
- accessibility

Avoid UI additions that compete with photography.

### Copyright and Image Protection

All photographs are the **copyrighted work of Jonathan Mallett**.

Agents **must not**:

- export or scrape images from the repository
- build image datasets from the repository
- use images to train AI models
- create derivative works or likenesses
- redistribute images outside the website

Images exist **only for display on this website**.

### AI Usage Restrictions

This repository and its images **must not** be used for AI training or dataset generation.

Prohibited actions include:

- computer vision model training
- style transfer training
- dataset extraction
- automated image scraping

---

## Current Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Images:** `next/image` with WebP output configured in `next.config.ts`
- **Analytics:** `@vercel/analytics` and `@vercel/speed-insights` enabled in `app/layout.tsx`
- **Deployment:** Vercel

---

## Project Structure (Current)

- `app/page.tsx` — Homepage with the curated portfolio gallery
- `app/work/page.tsx` — Portfolio collection overview
- `app/work/[slug]/page.tsx` — Individual collection galleries
- `app/stories/` — Optional stories index and detail routes
- `app/about/page.tsx` — About page
- `app/layout.tsx` — Root metadata, fonts, analytics, speed insights
- `content/photos.ts` — Photo catalogue, homepage sequence, image cache revision
- `content/collections.ts` — Collection details, preview selections and gallery sequences
- `content/stories.ts` — Optional stories, currently empty
- `components/Header.tsx` — Shared top navigation
- `components/GalleryGrid.tsx` — Responsive gallery + lightbox trigger
- `components/Lightbox.tsx` — Modal viewer with keyboard navigation
- `components/Footer.tsx` — Shared footer mounted on main pages
- `public/photos/*` — Image assets by category
- `next.config.ts` — Image format/size optimization config

Guidelines:

- Keep photos organized under `public/photos/<category>/`
- Avoid unnecessary directory nesting
- Do not rename existing image files unless required

---

## Gallery Behavior (Implemented)

### Balanced Gallery Layout (`components/GalleryGrid.tsx`)

Implemented features:

- Homepage and collection galleries use `balancedLayout`, with one column below the `md` breakpoint and two equal columns at `md` and above.
- Image order follows the configured sequence; intrinsic width and height reserve space and preserve proportions without cropping.
- On the homepage, portraits and squares are centered and limited to `min(75vh, 500px)` in height; landscapes use the available column width. In collection galleries, portraits are limited to `min(75vh, 600px)`, while landscapes and squares use the column width.
- Homepage uses the compact spacing variant; collection galleries use the standard gaps.
- Gallery buttons open the lightbox and have a subtle hover opacity change.

Responsive behavior:

- The optional story gallery uses the default editorial placements rather than `balancedLayout`.

### Lightbox Behavior (`components/Lightbox.tsx`)

- Lightbox opens only when a gallery item is clicked
- Keyboard controls: `Escape`, `ArrowLeft`, `ArrowRight`
- Previous/next controls and horizontal touch swipes navigate without wrapping
- Focus is contained in the dialog and restored to the trigger when closed
- Body scroll is disabled while lightbox is open
- Backdrop click closes the lightbox
- Lightbox image uses `loading="eager"` and `object-contain`

Note: Lightbox does **not** switch to a separate original-file endpoint; it requests the same source path at a larger display context via Next.js image optimization.

---

## Routing and Content Categories

The current application routes are:

- `/` — curated homepage gallery
- `/work` — Portfolio overview with separately selected previews
- `/work/people-and-places` — Places collection
- `/work/land-and-environment` — Nature collection
- `/work/movement-and-action` — Motorsport collection
- `/about` — biography and contact email
- `/stories` and `/stories/[slug]` — optional stories; the list is currently empty, so navigation is hidden and the index returns 404

The former `/portfolio` route tree was removed. `/portfolio` and its category URLs return 404. The category folders under `public/photos/` remain for asset organization.

---

## Adding New Images (Current Workflow)

1. Add image file to `public/photos/<category>/`.
2. Add a new photo object to `photoCatalog` in `content/photos.ts`.
3. Ensure each item has:
   - unique numeric `id`
   - valid `src` with exact filename and extension case
   - descriptive `alt`
   - intrinsic `width` and `height` in pixels
   - optional `caption`
4. Add its ID to `homePhotoIds`, a collection's `photoIds`, and/or `previewPhotoIds` as appropriate. These selections are independent and explicitly ordered; adding, deleting, renaming or reordering files alone does not update the site.
5. When replacing a file under the same name, update its dimensions if necessary and change `photoRevision` in `content/photos.ts` to invalidate browser and optimizer caches. `next.config.ts` uses that revision to permit the query string.
6. Remove or update affected IDs and paths when files are removed or renamed, then run tests and build.

Example object:

`{ id: 107, src: "/photos/places/new-image.jpg", alt: "Description", width: 2400, height: 1600 }`

Current collection sequences: Places groups New York, Marrakech, UK, Italy, Portugal, Netherlands; Nature groups Birds, Landscape, Doug; Motorsport follows its numbers. Specific Places overrides place New York 1 immediately after New York 4 and Marrakech 2 immediately after Marrakech 9. Preview and homepage order are independent of these sequences.

---

## Image Guidelines

Preferred formats:

- JPG/JPEG (primary)
- PNG (only if needed)

Best practices:

- Target optimized file size around 200–300KB where possible
- Keep long edge under ~2500px where practical
- Preserve color quality and avoid heavy compression artifacts

Never:

- replace photography with AI-generated imagery
- alter existing photos in ways that change artistic intent without approval

---

## Performance Notes

- `next/image` provides responsive delivery and WebP formatting (per `next.config.ts`)
- Gallery images are lazily loaded by default
- Lightbox loads eagerly only after user interaction

---

## Security and Privacy

Do not introduce:

- ad trackers
- invasive cookies
- third-party analytics beyond approved tooling

Current approved telemetry in production:

- `@vercel/analytics`
- `@vercel/speed-insights`

---

## Accessibility Expectations

Maintain:

- descriptive `alt` text for all photos
- semantic HTML structure
- keyboard operability (including lightbox controls)
- sufficient contrast and readable typography

---

## Development Commands

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm test`
- `npm run test:watch`
- `npm run test:coverage`

Local production check:

1. `npm run build`
2. `npm run start`

---

## Allowed Agent Changes

Agents may assist with:

- performance improvements
- accessibility improvements
- SEO/metadata updates
- layout/styling refinements that keep photography-first design
- bug fixes and code quality improvements

## Disallowed Agent Changes

Agents must **not**:

- scrape/export image libraries
- introduce AI-generated or stock replacement images
- create reposting/content syndication pipelines
- remove copyright attribution
- change curated image selections without owner approval

---

## Contact

Owner: Jonathan Mallett  
Email in site content: contact@jonathanmallett.com (forwards to jrhmallett@gmail.com)  
Domain: https://jonathanmallett.com  
GitHub: https://github.com/jrhmallett

© Jonathan Mallett — All photography rights reserved.

---

Last updated: November 14, 2026
