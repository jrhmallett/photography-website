# Photography Website - Architecture Documentation

**Last Updated:** November 15, 2026
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

- `/` → complete portfolio gallery (`app/page.tsx`)
- `/about` → about/profile page (`app/about/page.tsx`)
- `/stories` and `/stories/[slug]` → optional story pages; the index returns 404 and links are hidden while `content/stories.ts` is empty
- `/work`, `/work/[slug]`, `/portfolio`, and their former category routes return 404.

---

## Component Architecture

### Shared Layout and Navigation

- `app/layout.tsx` defines global metadata, font setup, and mounts Analytics + Speed Insights
- `components/Header.tsx` is used by all page routes
- `components/Footer.tsx` is mounted by the homepage, About and story pages

### Gallery System

`components/GalleryGrid.tsx` responsibilities:

- render the full homepage photo selection in two, three or four masonry columns, based on viewport width
- balance each next photo into the currently shortest column to keep spacing tight across mixed aspect ratios
- use catalogue width and height to reserve space and preserve aspect ratios without cropping
- keep the configured sequence for lightbox navigation
- open/close lightbox and handle next/previous state

Optional story pages use the component's default editorial placements.

### Lightbox System

`components/Lightbox.tsx` responsibilities:

- modal image display with `object-contain`
- keyboard handling: `Escape`, `ArrowLeft`, `ArrowRight`
- previous/next buttons and horizontal swipe navigation
- backdrop click to close
- temporary body scroll lock, dialog focus containment and focus restoration

The lightbox requests the same image source path in a larger view; it does not switch to a separate original-file endpoint.

---

## Content Model

`content/photos.ts` holds the photo catalogue with numeric IDs, exact source paths, alt text and intrinsic pixel dimensions. `homePhotoIds` contains the complete 62-photo homepage sequence, beginning with the existing featured images. `content/stories.ts` contains optional stories and is currently empty.

The portfolio is maintained in code rather than through a CMS or automatic filesystem discovery. Adding, removing, renaming or reordering files requires corresponding catalogue and selection updates. See [IMAGE_GUIDE.md](../IMAGE_GUIDE.md) for the workflow and current ordering exceptions.

---

## Image and Performance Strategy

- `next/image` is used across the site for responsive optimization
- `next.config.ts` enables WebP output and explicit image/device sizes
- `photoRevision` in `content/photos.ts` versions gallery and lightbox image URLs; `next.config.ts` allows that query for local photos. Update the revision after replacing files under existing names.
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
