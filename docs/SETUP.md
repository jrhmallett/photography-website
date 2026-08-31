
# Photography Website - Setup Guide

**Last Updated:** August 31, 2026

This guide explains how to run and validate the Jonathan Mallett Photography portfolio locally.

---

## Prerequisites

- Node.js 18+
- npm 9+
- Git 2+

Verify your environment:

```bash
node --version
npm --version
git --version
```

---

## Initial Setup

### 1) Clone the Repository

```bash
git clone https://github.com/jrhmallett/photography-website.git
cd photography-website
```

### 2) Install Dependencies

```bash
npm install
```

### 3) Start Development Server

```bash
npm run dev
```

Open: http://localhost:3000

Stop server: `Ctrl + C`

---

## Build and Run in Production Mode

```bash
npm run build
npm run start
```

This is the recommended local production check before shipping changes.

---

## Quality Checks

Run these before committing:

```bash
npm run lint
npm test
npm run build
```

Optional coverage run:

```bash
npm run test:coverage
```

---

## Project Commands

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

## Project Structure (Current)

```text
app/
  layout.tsx
  page.tsx
  loading.tsx
  not-found.tsx
  about/page.tsx
components/
  Header.tsx
  GalleryGrid.tsx
  Lightbox.tsx
  Footer.tsx
public/
  photos/
tests/
docs/
next.config.ts
package.json
```

---

## Adding New Images

1. Add the image file to the appropriate `public/photos/<category>/` folder.
2. Add a photo object to the curated `photos` list in `app/page.tsx`.
3. Include a unique `id`, the exact `src`, and descriptive `alt` text.
4. Place the entry where it should appear in the homepage sequence.

Example photo object:

```ts
{ id: 34, src: "/photos/places/new-image.jpg", alt: "Description" }
```

---

## Troubleshooting

### Port 3000 already in use

```bash
lsof -i :3000
kill -9 <PID>
```

Or run on another port:

```bash
npm run dev -- -p 3001
```

### Module not found / dependency issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build issues after major changes

```bash
rm -rf .next
npm run build
```

### Jest cache issues

```bash
npx jest --clearCache
npm test
```

---

## Deployment Notes

The project deploys via Vercel from GitHub-connected branches.

Typical flow:

```text
Local changes → Push to GitHub → Vercel preview/production build
```

The final application routes are `/` and `/about`. The removed `/portfolio` route is expected to return 404.

---

## References

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/FEATURES.md`
- `Agents.md`
