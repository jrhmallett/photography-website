# Photography Website

Jonathan Mallett photography portfolio built with Next.js App Router.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

---

## Overview

This project is a minimalist photography portfolio focused on image presentation, fast performance, and accessibility.

Primary goals:

1. Present original photography in a distraction-free gallery experience
2. Maintain image quality while optimizing delivery performance
3. Keep the codebase simple, reliable, and easy to maintain

---

## Current Features

- Next.js 16 App Router project with an editorial, image-first homepage
- A 13-photo homepage selection and a collection-based Portfolio overview
- Responsive one- or two-column galleries with consistent column widths and a portrait-height limit
- Lightbox modal with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`) and touch swipes
- Shared light monochrome header with Portfolio and About links
- About page with photographer bio and contact email
- `@vercel/analytics` and `@vercel/speed-insights` enabled in root layout
- Jest + React Testing Library test suite

---

## Quick Start

### Prerequisites

- Node.js 20.9 or newer (required by Next.js 16)
- npm

### Installation

```bash
git clone https://github.com/jrhmallett/photography-website.git
cd photography-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm test
npm run test:watch
npm run test:coverage
```

---

## Project Structure

```text
app/
      layout.tsx
      page.tsx
      about/page.tsx
      work/page.tsx
      work/[slug]/page.tsx
      stories/page.tsx
      stories/[slug]/page.tsx
components/
      Header.tsx
      GalleryGrid.tsx
      Lightbox.tsx
      Footer.tsx
content/
      photos.ts
      collections.ts
      stories.ts
public/
      photos/
tests/
docs/
```

---

## Image Handling

- All images are served with `next/image`
- WebP output is configured in `next.config.ts`
- Gallery images lazy-load by default
- Lightbox image loads eagerly only after user interaction
- Photo details and the homepage sequence are maintained in `content/photos.ts`. Edit `homePhotoIds` to select and reorder homepage photographs. Supply the original pixel dimensions and meaningful alt text when adding a photo. The previous `workPhotoIds` sequence is retained for reference.
- When replacing images without changing their filenames, update their dimensions if necessary and change `photoRevision` in `content/photos.ts` so browsers and the image optimizer fetch the new files.
- The existing `/portfolio` route and its former category routes remain removed and return 404; the portfolio collections are at `/work`.

## Work Collections

Edit `content/collections.ts` to change collection IDs, URL slugs, titles and optional descriptions. `previewPhotoIds` controls the Work overview; `photoIds` controls each collection gallery. Both arrays refer to IDs in `content/photos.ts` and can be reordered independently. Add an entry with a unique ID and URL-safe slug to create another collection; its gallery route and metadata are generated automatically.

Collection galleries and previews are explicitly curated; filesystem changes do not update them automatically. Places is grouped New York, Marrakech, UK, Italy, Portugal, Netherlands; New York 1 follows New York 4 and Marrakech 2 follows Marrakech 9. Nature is grouped Birds, Landscape, Doug, and Motorsport follows its current numbers. Previews and the homepage have independent selections and ordering. The current galleries contain 25 Places, 21 Nature and 16 Motorsport photos.

Homepage and collection galleries use one column below the `md` breakpoint and two equal columns at `md` and above. Homepage portraits and squares are centered and limited to `min(75vh, 500px)` in height to balance mixed-orientation rows. Collection portraits are limited to `min(75vh, 600px)`; collection squares and landscapes use the available column width. Images retain their proportions and are not cropped. The homepage uses tighter spacing than the collection pages.

## Optional Stories

Add real projects to the `stories` array in `content/stories.ts` with a unique URL-safe `slug`, a `title`, an optional `introduction`, and a sequenced `photos` array. Use the same photo fields as the portfolio; an optional `caption` is shown beneath an image. Story links and the homepage section appear automatically when the array is nonempty. With no stories, the navigation and section are hidden and `/stories` shows the not-found page.

The homepage sequence can be reordered in `homePhotoIds`. The existing generic image descriptions should also be refined with specific details supplied by the photographer.

---

## Deployment

This site is deployed on **Vercel** with GitHub-connected deployments.

Deployment flow:

```text
Local changes → GitHub push → Vercel build → Production/Preview deployment
```

Direct production deploy from local machine (optional):

```bash
npx vercel --prod
```

---

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — system architecture and design decisions
- [docs/SETUP.md](docs/SETUP.md) — setup and local development notes
- [docs/FEATURES.md](docs/FEATURES.md) — feature tracking
- [IMAGE_GUIDE.md](IMAGE_GUIDE.md) — photo selection, ordering and cache workflow
- [Agents.md](Agents.md) — agent operating constraints and implementation truth source
- Historical audit and deployment walkthroughs are retained for context; they do not establish the status of the latest deployment.

---

## Contact

- Website: https://jonathanmallett.com
- Email: contact@jonathanmallett.com
- GitHub: https://github.com/jrhmallett/photography-website

© Jonathan Mallett — All photography rights reserved.

---

**Last Updated:** November 14, 2026

