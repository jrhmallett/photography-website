# Photography Website - Architecture Documentation

**Last Updated:** August 31, 2026  
**Project:** Jonathan Mallett Photography Portfolio  
**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4

---

## Overview

This repository is a photography-first portfolio application using the Next.js App Router. The architecture favors static rendering where possible, minimal UI chrome, and optimized image delivery.

Core architectural priorities:

1. Preserve visual quality of photographs
2. Keep route and component structure simple
3. Maintain strong performance on image-heavy pages
4. Ensure keyboard-accessible interactions (especially lightbox navigation)

---

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Image delivery:** `next/image` with WebP output in `next.config.ts`
- **Analytics:** `@vercel/analytics`, `@vercel/speed-insights`
- **Testing:** Jest + React Testing Library
- **Deployment:** Vercel

---

## Route Architecture

### Primary Routes

- `/` → unified curated portfolio gallery (`app/page.tsx`)
- `/about` → about/profile page (`app/about/page.tsx`)
- `/portfolio` and its former category routes are intentionally removed and return 404.

---

## Component Architecture

### Shared Layout and Navigation

- `app/layout.tsx` defines global metadata, font setup, and mounts Analytics + Speed Insights
- `components/Header.tsx` is used by all page routes
- `components/Footer.tsx` exists but is currently not mounted by page routes

### Gallery System

`components/GalleryGrid.tsx` responsibilities:

- render responsive masonry columns with a consistent 8px gutter
- compute image aspect ratio at runtime via image `onLoad`
- open/close lightbox and handle next/previous state

### Lightbox System

`components/Lightbox.tsx` responsibilities:

- modal image display with `object-contain`
- keyboard handling: `Escape`, `ArrowLeft`, `ArrowRight`
- backdrop click to close
- temporary body scroll lock while open

The lightbox requests the same image source path in a larger view; it does not switch to a separate original-file endpoint.

---

## Content Model

The homepage contains a curated list of 33 photo objects in `app/page.tsx`. Each object has a stable numeric ID, an image source, and descriptive alt text. The selected assets remain organized by category under `public/photos/`, but the homepage presents them as one portfolio sequence.

Current filename conventions:

- Places: `places-country-number.jpg`
- Sport: `sport-occasion-year-number.jpg`
- Nature: `nature-animal-number.jpg`

The portfolio is intentionally maintained in code rather than through a CMS so its selection and order remain explicit and reviewable.

---

## Image and Performance Strategy

- `next/image` is used across the site for responsive optimization
- `next.config.ts` enables WebP output and explicit image/device sizes
- Gallery images remain lazy-loaded by default
- Lightbox image loads eagerly only when opened

---

## Testing and Quality

- ESLint is configured via `eslint.config.mjs`
- Unit/integration tests are in `tests/`
- Jest config is in `jest.config.js`

Primary commands:

- `npm run lint`
- `npm test`
- `npm run test:coverage`
- `npm run build`

---

## Deployment Architecture

### Hosting Platform

Production and preview deployments run on **Vercel** from the connected GitHub repository.

### Deployment Flow

```text
Local changes → GitHub push → Vercel build → Preview/Production deployment
```

---

## Future Evolution (Constrained)

Any future changes should preserve the photography-first approach. Potential additions should remain lightweight and avoid visual clutter, including:

- small metadata/SEO refinements
- accessibility improvements
- performance tuning for larger image sets

---

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
