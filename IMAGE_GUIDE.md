# Photography Website - Image Guide

**Last Updated:** November 15, 2026

All photographs are copyrighted by Jonathan Mallett and are provided only for display on this website. Do not scrape, export or redistribute them, use them for AI training, or create derivatives without approval.

## Image Locations

- `public/photos/places/` — Places collection
- `public/photos/nature/` — Nature collection
- `public/photos/sport/` — Motorsport collection
- `public/photos/about/profile.jpg` — About page portrait

The homepage displays the full gallery. No separate category cover images are required.

## Adding or Replacing a Photograph

The site **does not automatically discover or order files**. Configure each selection explicitly:

1. Add the file to the appropriate category directory. Keep the exact spelling and extension case in its path.
2. Add an entry to `photoCatalog` in `content/photos.ts` with a unique numeric `id`, `src`, descriptive `alt`, and the image's intrinsic `width` and `height` in pixels. An optional `caption` is supported.
3. Add its ID to `homePhotoIds` in `content/photos.ts` to include it in the homepage and choose its position in the sequence.
4. If replacing a file without changing its name, update the dimensions when needed and change `photoRevision` in `content/photos.ts`. This changes the URLs used by `next/image` and prevents stale browser or image-optimizer cache entries. `next.config.ts` uses the same revision in its local image patterns.
5. For a removed or renamed file, update every affected live selection or catalogue path. A file can be retained in the catalogue for historical reference, but must not be referenced by an active selection if it is absent.
6. Run `npm test` and `npm run build`, and verify the affected galleries and lightbox locally. Folder changes alone do not modify photo order or selections.

Example entry (choose an unused ID and actual dimensions):

```ts
{ id: 107, src: '/photos/places/new-image.jpg', alt: 'Description of the photograph', width: 2400, height: 1600 }
```

## Homepage Image Sequence

`homePhotoIds` begins with the existing featured photographs and includes all 62 currently available portfolio images. The lightbox follows this configured sequence. Renaming or renumbering photos can change which image a selected path identifies; update affected paths and alt text.

## Layout and Delivery

The homepage uses two columns on mobile, three on desktop, and four on wide screens. Each image flows into the shortest column, with a consistent 10px gap regardless of its aspect ratio. Images keep their original proportions without cropping, and the lightbox provides a larger view. Optional stories use editorial gallery placements.

`next/image` supplies responsive images with WebP output configured in `next.config.ts`. Gallery photos lazy-load by default; the lightbox image loads eagerly after opening. JPG/JPEG is preferred for photographs; aim for good visual quality and efficient file sizes without changing artistic intent.

## Local Verification

Start the site with `npm run dev`, or use `npm run build` followed by `npm run start` for a production-mode check. Verify the homepage and About page:

- `/` — full photo gallery
- `/about` — profile image

`/work`, `/work/[slug]`, and `/portfolio` should return 404. If an image is missing, check the exact filename, catalogue path, active selection and dimensions. After replacing a file under the same name, confirm `photoRevision` was changed and refresh the browser.
