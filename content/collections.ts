export interface Collection {
  id: string;
  slug: string;
  title: string;
  description?: string;
  previewPhotoIds: number[];
  photoIds: number[];
}

// Preview and gallery selections can be ordered independently using IDs from
// photoCatalog. Gallery groups follow the chosen order, with individual overrides where requested.
export const collections: Collection[] = [
  {
    id: 'people-and-places',
    slug: 'people-and-places',
    title: 'Places',
    description: 'Photographs of places and moments encountered along the way.',
    previewPhotoIds: [40, 39, 41],
    photoIds: [
      66, 40, 39, 41, 67,
      57, 59, 61, 62, 63, 42, 58,
      68, 69, 70, 71,
      43, 51, 52, 53, 54, 55, 56,
      49, 65,
    ],
  },
  {
    id: 'land-and-environment',
    slug: 'land-and-environment',
    title: 'Nature',
    description: 'Photographs of wildlife and the natural world.',
    previewPhotoIds: [72, 86, 88],
    photoIds: [
      72, 73, 74, 75, 76, 77, 78, 79, 37, 80, 81, 82, 83, 84,
      85, 86, 35, 34, 87, 88,
      36,
    ],
  },
  {
    id: 'movement-and-action',
    slug: 'movement-and-action',
    title: 'Motorsport',
    description: 'Photographs of sport, movement and moments in action.',
    previewPhotoIds: [97, 98, 102],
    photoIds: [96, 97, 98, 99, 100, 101, 44, 102, 45, 103, 46, 104, 105, 47, 48, 106],
  },
];