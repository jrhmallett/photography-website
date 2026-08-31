# Photography Website - Features

**Last Updated:** August 31, 2026

This document tracks what is currently implemented in the photography portfolio and what remains optional future work.

---

## Current Product Scope

The site is a minimal, photography-first portfolio with:

- Curated homepage portfolio gallery with 33 photographs
- About page
- Responsive masonry columns with natural image proportions
- Lightbox with keyboard navigation

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
- `/about` profile and biography page
- `/portfolio` and its former category routes are removed and return 404

### 3) Portfolio Gallery

- Curated photo list with explicit display order
- Category folders retained for asset organization
- Portfolio navigation link returns to the homepage

### 4) Gallery Layout and Rendering

- `GalleryGrid` reusable component
- Responsive masonry columns
- Runtime image aspect-ratio detection via image `onLoad`
- Natural image proportions without cropping
- Consistent 8px gutters between images

### 5) Lightbox Interaction

- Click-to-open modal viewer
- Next/previous image navigation
- Keyboard controls: `Escape`, `ArrowLeft`, `ArrowRight`
- Backdrop click-to-close behavior
- Body scroll lock while lightbox is open
- Eager image loading in modal after user interaction

### 6) Image Delivery and Performance

- `next/image` used throughout key surfaces
- WebP output enabled in `next.config.ts`
- Gallery images lazy-loaded by default
- Responsive image sizing through `next/image`

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
- `GalleryGrid` (masonry grid + lightbox trigger)
- `Lightbox` (modal, keyboard + nav controls)
- `Footer` (available in codebase, currently not mounted by page routes)

---

## Testing Coverage Areas

Current tests in `tests/` cover:

- Setup and documentation checks
- Header component behavior
- Core pages (`home`, `about`)

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
