# Photography Website - Features

**Last Updated:** November 14, 2026

This document tracks what is currently implemented in the photography portfolio and what remains optional future work.

---

## Current Product Scope

The site is a minimal, photography-first portfolio with:

- Curated homepage gallery with 13 photographs
- Portfolio overview and Places, Nature and Motorsport collection galleries
- About page and optional, currently empty Stories section
- Responsive balanced grids with natural image proportions
- Lightbox with keyboard and touch navigation

---

## Implemented Features

### 1) Application Foundation

- Next.js 16 App Router project
- React 19 + TypeScript
- Tailwind CSS 4 styling system
- ESLint + Jest + React Testing Library setup
- Root metadata and Open Graph configuration in `app/layout.tsx`

### 2) Routing and Pages

- `/` unified portfolio gallery
- `/work` collection overview and `/work/[slug]` collection galleries
- `/about` profile and biography page
- `/stories` and `/stories/[slug]` support optional stories; the empty index returns 404 and navigation is hidden
- `/portfolio` and its former category routes are removed and return 404

### 3) Portfolio Gallery

- Curated homepage and collection photo lists with explicit, independent display orders
- Category folders retained for asset organization
- Portfolio navigation links to `/work`; overview previews are selected separately

### 4) Gallery Layout and Rendering

- `GalleryGrid` reusable component
- Homepage and collection galleries use one column below `md`, two equal columns at `md` and above
- Intrinsic dimensions from the photo catalogue reserve space before loading
- Portrait height is capped at `min(75vh, 600px)`; landscapes and squares use the available column width
- Natural image proportions without cropping
- Consistent responsive spacing, with a compact homepage variant

### 5) Lightbox Interaction

- Click-to-open modal viewer
- Next/previous image navigation
- Keyboard controls: `Escape`, `ArrowLeft`, `ArrowRight`
- Horizontal swipes and previous/next buttons
- Backdrop click-to-close behavior
- Body scroll lock and focus management while lightbox is open
- Eager image loading in modal after user interaction

### 6) Image Delivery and Performance

- `next/image` used throughout key surfaces
- WebP output enabled in `next.config.ts`
- Gallery images lazy-loaded by default
- Responsive image sizing through `next/image`
- Revisioned image URLs support cache invalidation when source files are replaced under existing names

### 7) Accessibility and Usability

- Alt text for image assets
- Keyboard-accessible lightbox controls
- Semantic page structure with clear headings
- Light monochrome UI with readable typography

### 8) Analytics and Deployment

- `@vercel/analytics` enabled
- `@vercel/speed-insights` enabled
- Vercel deployment with GitHub-connected workflow

---

## Implemented Components

- `Header` (shared top navigation)
- `GalleryGrid` (responsive gallery + lightbox trigger)
- `Lightbox` (modal, keyboard + nav controls)
- `Footer` (shared footer on main pages)

---

## Testing Coverage Areas

Current tests in `tests/` cover:

- Setup and documentation checks
- Header component behavior
- Gallery layout and lightbox interactions
- Homepage, About and collection pages, including image ordering and previews

Use:

- `npm test`
- `npm run test:watch`
- `npm run test:coverage`

---

## Deferred / Future Enhancements

Potential future additions (not currently implemented):

- Contact form with backend/email integration
- Search/filter tooling across photos
- Extended SEO artifacts (e.g., sitemap/robots automation if needed)
- Additional accessibility auditing and refinements
- Optional CMS-backed content management

All enhancements should preserve the photography-first, minimal UX.

---

## Non-Goals

The project does not currently include:

- User accounts or authentication
- Social feed features
- AI-generated image replacements
- Ad/tracker-heavy integrations

---

## Notes for Contributors/Agents

- Keep image curation and category order intentional
- Avoid UI additions that compete with photography
- Preserve copyright and anti-scraping intent
- Follow constraints documented in `Agents.md`
