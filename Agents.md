# Photography Website – Agent Instructions

## Project Overview

**Site:** Jonathan Mallett Photography Portfolio  
**Type:** Next.js App Router photography portfolio with category galleries and lightbox  
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

- `app/page.tsx` — Home (hero image)
- `app/portfolio/page.tsx` — Portfolio category landing
- `app/portfolio/[category]/page.tsx` — Dynamic category gallery pages
- `app/about/page.tsx` — About page
- `app/layout.tsx` — Root metadata, fonts, analytics, speed insights
- `components/Header.tsx` — Shared top navigation
- `components/GalleryGrid.tsx` — Masonry-style gallery + lightbox trigger
- `components/Lightbox.tsx` — Modal viewer with keyboard navigation
- `components/Footer.tsx` — Available component (currently not mounted by pages)
- `public/photos/*` — Image assets by category
- `next.config.ts` — Image format/size optimization config

Guidelines:

- Keep photos organized under `public/photos/<category>/`
- Avoid unnecessary directory nesting
- Do not rename existing image files unless required

---

## Gallery Behavior (Implemented)

### Masonry Layout (`components/GalleryGrid.tsx`)

Implemented features:

- CSS grid with dense packing (`gridAutoFlow: 'dense'`)
- Runtime orientation detection via `onLoadingComplete`
- Dynamic row span assignment based on image aspect ratio
- Hover zoom and optional title reveal

Row span rules (current logic):

| Aspect Ratio | Row Span Class |
|---|---|
| `< 0.85` | `row-span-3` |
| `0.85 – <1.15` | `row-span-2` |
| `1.15 – <1.5` | `row-span-2` |
| `>= 1.5` | `row-span-1` |

Grid settings (current classes):

- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- `gap-6`
- `auto-rows-[200px]`
- `gridAutoFlow: 'dense'`

Responsive behavior:

- Mobile: 1 column
- Small/Tablet+: 2 columns (`sm` breakpoint)
- Desktop: 3 columns (`lg` breakpoint)

### Lightbox Behavior (`components/Lightbox.tsx`)

- Lightbox opens only when a gallery item is clicked
- Keyboard controls: `Escape`, `ArrowLeft`, `ArrowRight`
- Body scroll is disabled while lightbox is open
- Backdrop click closes the lightbox
- Lightbox image uses `loading="eager"` and `object-contain`

Note: Lightbox does **not** switch to a separate original-file endpoint; it requests the same source path at a larger display context via Next.js image optimization.

---

## Routing and Content Categories

Available gallery categories:

- `/portfolio/people`
- `/portfolio/travel` (Places)
- `/portfolio/wildlife`
- `/portfolio/sport`

`app/portfolio/[category]/page.tsx` uses a local `categoryData` map and `generateStaticParams()` for static generation of these categories.

---

## Adding New Images (Current Workflow)

1. Add image file to `public/photos/<category>/`.
2. Add a new photo object in the relevant category array inside `app/portfolio/[category]/page.tsx`.
3. Place new entries at the **top** of the array if they should appear first.
4. Ensure each item has:
   - unique numeric `id`
   - valid `src`
   - descriptive `alt`
   - optional `title`

Example object:

`{ id: 101, src: "/photos/people/new-image.jpg", alt: "Description", title: "Optional Title" }`

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
- Hero image on home page uses `priority` and `quality={95}`
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

Last updated: March 7, 2026
