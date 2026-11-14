# Photography Website - Image Guide

**Last Updated:** November 14, 2026

All photographs are copyrighted by Jonathan Mallett and are provided only for display on this website. Do not scrape, export or redistribute them, use them for AI training, or create derivatives without approval.

## Image Locations

- `public/photos/places/` — Places collection
- `public/photos/nature/` — Nature collection
- `public/photos/sport/` — Motorsport collection
- `public/photos/about/profile.jpg` — About page portrait

The homepage is a curated gallery, not a separate hero image. Portfolio overview images are selected from the photo catalogue; no category cover files are required.

## Adding or Replacing a Photograph

The site **does not automatically discover or order files**. Configure each selection explicitly:

1. Add the file to the appropriate category directory. Keep the exact spelling and extension case in its path.
2. Add an entry to `photoCatalog` in `content/photos.ts` with a unique numeric `id`, `src`, descriptive `alt`, and the image's intrinsic `width` and `height` in pixels. An optional `caption` is supported.
3. Add its ID wherever it should appear: `homePhotoIds` in `content/photos.ts`, and/or the relevant `previewPhotoIds` and `photoIds` in `content/collections.ts`. These are separate ordered selections.
4. If replacing a file without changing its name, update the dimensions when needed and change `photoRevision` in `content/photos.ts`. This changes the URLs used by `next/image` and prevents stale browser or image-optimizer cache entries. `next.config.ts` uses the same revision in its local image patterns.
5. For a removed or renamed file, update every affected live selection or catalogue path. A file can be retained in the catalogue for historical reference, but must not be referenced by an active selection if it is absent.
6. Run `npm test` and `npm run build`, and verify the affected galleries and lightbox locally. Folder changes alone do not modify photo order or selections.

Example entry (choose an unused ID and actual dimensions):

```ts
{ id: 107, src: '/photos/places/new-image.jpg', alt: 'Description of the photograph', width: 2400, height: 1600 }
```

## Current Collection Order

- **Places:** New York, Marrakech, UK, Italy, Portugal, Netherlands. Within groups, images follow their numbers except New York 1 immediately follows New York 4 and Marrakech 2 immediately follows Marrakech 9.
- **Nature:** Birds, Landscape, Doug, with images in number order within each group.
- **Motorsport:** current image numbers in ascending order.

The overview previews and homepage sequence are curated independently of the collection galleries. Renaming or renumbering photos can change which image a selected path identifies; review affected selections and update alt text where needed.

## Layout and Delivery

The homepage and collection galleries show one column below `md` and two equal columns at `md` and above. Homepage portraits and squares are centered with a maximum display height of `min(75vh, 500px)`; collection portraits are limited to `min(75vh, 600px)`. Landscapes and collection squares use the available column width. Images keep their original aspect ratios without cropping, and the lightbox provides a larger view.

`next/image` supplies responsive images with WebP output configured in `next.config.ts`. Gallery photos lazy-load by default; the lightbox image loads eagerly after opening. JPG/JPEG is preferred for photographs; aim for good visual quality and efficient file sizes without changing artistic intent.

## Local Verification

Start the site with `npm run dev`, or use `npm run build` followed by `npm run start` for a production-mode check. Verify the homepage and the appropriate collection pages:

- `/work` — collection previews
- `/work/people-and-places` — Places
- `/work/land-and-environment` — Nature
- `/work/movement-and-action` — Motorsport
- `/about` — profile image

If an image is missing, check the exact filename, catalogue path, active selection and dimensions. After replacing a file under the same name, confirm `photoRevision` was changed and refresh the browser. The former `/portfolio` routes are no longer implemented.
