# Photography Website - Architecture Documentation

**Last Updated:** March 7, 2026  
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

- `/` → home hero page (`app/page.tsx`)
- `/portfolio` → category landing (`app/portfolio/page.tsx`)
- `/portfolio/[category]` → category gallery (`app/portfolio/[category]/page.tsx`)
- `/about` → about/profile page (`app/about/page.tsx`)

### Category Route Generation

`app/portfolio/[category]/page.tsx` defines `generateStaticParams()` for:

- `travel` (displayed as Places)
- `wildlife`
- `sport`
- `people`

Unknown categories are handled with `notFound()`.

---

## Component Architecture

### Shared Layout and Navigation

- `app/layout.tsx` defines global metadata, font setup, and mounts Analytics + Speed Insights
- `components/Header.tsx` is used by all page routes
- `components/Footer.tsx` exists but is currently not mounted by page routes

### Gallery System

`components/GalleryGrid.tsx` responsibilities:

- render masonry-style CSS grid
- compute image aspect ratio at runtime via `onLoadingComplete`
- assign row-span classes to reduce whitespace
- open/close lightbox and handle next/previous state

Current grid behavior:

- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- `auto-rows-[200px]`
- `gridAutoFlow: 'dense'`

### Lightbox System

`components/Lightbox.tsx` responsibilities:

- modal image display with `object-contain`
- keyboard handling: `Escape`, `ArrowLeft`, `ArrowRight`
- backdrop click to close
- temporary body scroll lock while open

The lightbox requests the same image source path in a larger view; it does not switch to a separate original-file endpoint.

---

## Content Model

Category image data is stored in a local `categoryData` object inside `app/portfolio/[category]/page.tsx`.

Each photo entry uses:

- numeric `id`
- `src` under `public/photos/<category>/`
- `alt`
- optional `title`

This keeps the project static and straightforward to maintain without a CMS.

---

## Image and Performance Strategy

- `next/image` is used across the site for responsive optimization
- `next.config.ts` enables WebP output and explicit image/device sizes
- Home hero image is prioritized and uses high quality (`quality={95}`)
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
