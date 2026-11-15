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
- One homepage gallery containing all 60 available portfolio photographs
- Responsive one-, three-, and four-column masonry layout with consistent spacing
- Lightbox modal with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`) and touch swipes
- Shared light monochrome header with About navigation
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
      stories/page.tsx
      stories/[slug]/page.tsx
components/
      Header.tsx
      GalleryGrid.tsx
      Lightbox.tsx
      Footer.tsx
content/
      photos.ts
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
- Photo details and the homepage sequence are maintained in `content/photos.ts`. `homePhotoIds` contains every available portfolio photograph and controls its sequence. When adding a photograph, supply its catalogue entry and add its ID to this list. Include the original pixel dimensions and meaningful alt text.
- When replacing images without changing their filenames, update their dimensions if necessary and change `photoRevision` in `content/photos.ts` so browsers and the image optimizer fetch the new files.
- `/work`, `/work/[slug]`, and `/portfolio` are not used; the full photo gallery is on `/`.

## Homepage Gallery

The homepage balances images into the shortest available column to create a compact masonry layout. Photos marked `pinToFirstColumn` stay in the leftmost column. It uses one column on mobile, three on desktop, and four on wide screens. Images keep their natural proportions and are not cropped.

`homePhotoIds` groups images by subject in this order: New York, Marrakech, Birds, Doug, Motorsport, Landscape, UK, Portugal and Italy. Numbered sequences are ascending except New York, which is ordered 3, 4, 2, 1, 5. Nature_Doug is pinned to the leftmost column before the Motorsport images. The lightbox follows the configured sequence.

## Optional Stories

Add real projects to the `stories` array in `content/stories.ts` with a unique URL-safe `slug`, a `title`, an optional `introduction`, and a sequenced `photos` array. Use the same photo fields as the portfolio; an optional `caption` is shown beneath an image. Story links and the homepage section appear automatically when the array is nonempty. With no stories, the navigation and section are hidden and `/stories` shows the not-found page.

The generic image descriptions should be refined with specific details supplied by the photographer.

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

