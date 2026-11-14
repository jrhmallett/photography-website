
# Photography Website - Setup Guide

**Last Updated:** November 14, 2026

This guide explains how to run and validate the Jonathan Mallett Photography portfolio locally.

---

## Prerequisites

- Node.js 20.9 or newer (required by Next.js 16)
- npm
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
next.config.ts
package.json
```

---

## Adding New Images

1. Add the image file to the appropriate `public/photos/<category>/` folder.
2. Add a photo object to `photoCatalog` in `content/photos.ts` with a unique `id`, exact `src`, descriptive `alt`, and intrinsic pixel `width` and `height`.
3. Add the ID in the desired position in `homePhotoIds`, the appropriate collection's `photoIds`, and/or `previewPhotoIds` in `content/collections.ts`. These selections are independent; folder contents do not automatically update the site.
4. If replacing an image under the same filename, update its dimensions as needed and change `photoRevision` in `content/photos.ts` to refresh optimizer and browser caches.
5. Remove or update affected paths and selections when photos are removed or renamed, and run tests and build.

Example photo object:

```ts
{ id: 107, src: "/photos/places/new-image.jpg", alt: "Description", width: 2400, height: 1600 }
```

See [IMAGE_GUIDE.md](../IMAGE_GUIDE.md) for collection ordering and full image handling guidance.

---

## Troubleshooting

### Port 3000 already in use

```bash
lsof -i :3000
```

Stop the identified server if appropriate, or run on another port:

```bash
npm run dev -- -p 3001
```

### Module not found / dependency issues

```bash
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

Verify `/`, `/work`, the Places, Nature and Motorsport collection routes under `/work`, and `/about`. The removed `/portfolio` route is expected to return 404. Stories navigation is hidden and `/stories` returns 404 while its content list is empty. A local build or preview does not mean changes have been deployed; check Vercel for deployment status.

---

## References

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/FEATURES.md`
- `Agents.md`
