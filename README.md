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

- Next.js 16 App Router project with static category generation via `generateStaticParams`
- Hero landing page with high-quality featured image
- Portfolio category landing page and four gallery routes (`people`, `travel` [Places], `wildlife`, `sport`)
- Masonry-style gallery grid with runtime aspect-ratio row spanning
- Lightbox modal with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`)
- Shared header navigation across pages
- About page with photographer bio and contact email
- `@vercel/analytics` and `@vercel/speed-insights` enabled in root layout
- Jest + React Testing Library test suite

---

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

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
      portfolio/page.tsx
      portfolio/[category]/page.tsx
components/
      Header.tsx
      GalleryGrid.tsx
      Lightbox.tsx
      Footer.tsx
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

---

## Deployment

This site is deployed on **Vercel** with GitHub-connected deployments.

Deployment flow:

```text
Local changes → GitHub push → Vercel build → Production/Preview deployment
```

---

## Documentation

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — system architecture and design decisions
- [docs/SETUP.md](docs/SETUP.md) — setup and local development notes
- [docs/FEATURES.md](docs/FEATURES.md) — feature tracking
- [Agents.md](Agents.md) — agent operating constraints and implementation truth source

---

## Contact

- Website: https://jonathanmallett.com
- Email: jrhmallett@gmail.com
- GitHub: https://github.com/jrhmallett/photography-website

© Jonathan Mallett — All photography rights reserved.

---

**Last Updated:** March 7, 2026

