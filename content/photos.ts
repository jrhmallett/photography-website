export interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  pinToFirstColumn?: boolean;
}

// Change this revision when replacing image files without changing filenames.
export const photoRevision = '20261114-2';
export function photoImageSrc(src: string): string {
  return `${src}?v=${photoRevision}`;
}

// Dimensions reserve the correct space before images load.
export const photoCatalog: Photo[] = [
  { id: 1, src: '/photos/places/places-marrakech-7.jpg', alt: 'Marrakech travel photography', width: 2048, height: 1365 },
  { id: 2, src: '/photos/places/places-marrakech-8.jpg', alt: 'Marrakech travel photography', width: 2048, height: 1365 },
  { id: 3, src: '/photos/places/places-marrakech-9.jpg', alt: 'Marrakech travel photography', width: 2048, height: 1365 },
  { id: 4, src: '/photos/places/places-marrakech-12.jpg', alt: 'Marrakech travel photography', width: 2048, height: 1365 },
  { id: 5, src: '/photos/places/places-marrakech-14.jpg', alt: 'Marrakech travel photography', width: 1365, height: 2048 },
  { id: 6, src: '/photos/places/places-marrakech-17.jpg', alt: 'Marrakech travel photography', width: 5144, height: 5144 },
  { id: 7, src: '/photos/places/places-marrakech-20.jpg', alt: 'Marrakech travel photography', width: 5086, height: 6217 },
  { id: 8, src: '/photos/places/places-switzerland-1.jpg', alt: 'Switzerland travel photography', width: 5533, height: 3812 },
  { id: 9, src: '/photos/places/places-switzerland-3.jpg', alt: 'Switzerland travel photography', width: 5853, height: 3902 },
  { id: 10, src: '/photos/places/places-switzerland-6.jpg', alt: 'Switzerland travel photography', width: 5769, height: 3245 },
  { id: 11, src: '/photos/places/places-uk-25.jpg', alt: 'UK travel photography', width: 7648, height: 5099 },
  { id: 12, src: '/photos/places/places-uk-23.jpg', alt: 'UK travel photography', width: 6565, height: 3693 },
  { id: 13, src: '/photos/places/places-uk-26.jpg', alt: 'UK travel photography', width: 7691, height: 5127 },
  { id: 14, src: '/photos/places/places-italy-35.jpg', alt: 'Italy travel photography', width: 5463, height: 3641 },
  { id: 15, src: '/photos/sport/sport-silverstone-2026-1.jpg', alt: 'Silverstone 2026 sport photography', width: 4595, height: 2585 },
  { id: 16, src: '/photos/sport/sport-silverstone-2026-3.jpg', alt: 'Silverstone 2026 sport photography', width: 5253, height: 3077 },
  { id: 17, src: '/photos/sport/sport-silverstone-2026-4.jpg', alt: 'Silverstone 2026 sport photography', width: 5256, height: 2957 },
  { id: 18, src: '/photos/sport/sport-silverstone-2026-5.jpg', alt: 'Silverstone 2026 sport photography', width: 3993, height: 2246 },
  { id: 19, src: '/photos/sport/sport-silverstone-2026-6.jpg', alt: 'Silverstone 2026 sport photography', width: 5264, height: 2961 },
  { id: 20, src: '/photos/sport/sport-silverstone-2025-24.jpg', alt: 'Silverstone 2025 sport photography', width: 2048, height: 1365 },
  { id: 21, src: '/photos/sport/sport-silverstone-2025-11.jpg', alt: 'Silverstone 2025 sport photography', width: 7050, height: 3966 },
  { id: 22, src: '/photos/nature/Nature-birds-1.jpg', alt: 'Birds wildlife photography', width: 2048, height: 1365 },
  { id: 23, src: '/photos/nature/nature-birds-5.jpg', alt: 'Birds wildlife photography', width: 4785, height: 2692 },
  { id: 24, src: '/photos/nature/nature-birds-8.jpg', alt: 'Birds wildlife photography', width: 1935, height: 1088 },
  { id: 25, src: '/photos/nature/nature-birds-9.jpg', alt: 'Birds wildlife photography', width: 1434, height: 1434 },
  { id: 26, src: '/photos/nature/nature-birds-14.jpg', alt: 'Birds wildlife photography', width: 5605, height: 3153 },
  { id: 27, src: '/photos/nature/nature-birds-15.jpg', alt: 'Birds wildlife photography', width: 5081, height: 2858 },
  { id: 28, src: '/photos/nature/nature-birds-18.jpg', alt: 'Birds wildlife photography', width: 3981, height: 2986 },
  { id: 29, src: '/photos/nature/nature-birds-19.jpg', alt: 'Birds wildlife photography', width: 6048, height: 3402 },
  { id: 30, src: '/photos/nature/nature-birds-22.jpg', alt: 'Birds wildlife photography', width: 2237, height: 2237 },
  { id: 31, src: '/photos/nature/nature-birds-23.jpg', alt: 'Birds wildlife photography', width: 7728, height: 5152 },
  { id: 32, src: '/photos/nature/nature-birds-29.jpg', alt: 'Birds wildlife photography', width: 5870, height: 3913 },
  { id: 33, src: '/photos/nature/nature-birds-31.jpg', alt: 'Birds wildlife photography', width: 6910, height: 4605 },
  { id: 34, src: '/photos/nature/Nature_Landscape4.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1600 },
  { id: 35, src: '/photos/nature/Nature_Landscape3.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1350 },
  { id: 36, src: '/photos/nature/Nature_Doug1.jpg', alt: 'Nature photograph of Doug', width: 1600, height: 2400, pinToFirstColumn: true },
  { id: 37, src: '/photos/nature/Nature_Birds9.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 2400 },
  { id: 38, src: '/photos/nature/Nature_Birds15.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1600 },
  { id: 39, src: '/photos/places/Places_New_York4.jpg', alt: 'New York photograph', width: 2401, height: 1600 },
  { id: 40, src: '/photos/places/Places_New_York3.jpg', alt: 'New York photograph', width: 2845, height: 1600 },
  { id: 41, src: '/photos/places/Places_New_York1.jpg', alt: 'New York photograph', width: 2844, height: 1600 },
  { id: 42, src: '/photos/places/Places_Marrakech9.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 43, src: '/photos/places/Places_Italy1.jpg', alt: 'Italy photograph', width: 2400, height: 1600 },
  { id: 44, src: '/photos/sport/Motorsport7.jpg', alt: 'Motorsport photograph', width: 5106, height: 2872 },
  { id: 45, src: '/photos/sport/Motorsport9.jpg', alt: 'Motorsport photograph', width: 5182, height: 2915 },
  { id: 46, src: '/photos/sport/Motorsport11.jpg', alt: 'Motorsport photograph', width: 2400, height: 1350 },
  { id: 47, src: '/photos/sport/Motorsport14.jpg', alt: 'Motorsport photograph', width: 2400, height: 1600 },
  { id: 48, src: '/photos/sport/Motorsport15.jpg', alt: 'Motorsport photograph', width: 2400, height: 1350 },
  { id: 49, src: '/photos/places/Places_Portugal1.jpg', alt: 'Portugal photograph', width: 2400, height: 2400 },
  { id: 50, src: '/photos/places/Places_Croatia1.jpg', alt: 'Croatia photograph', width: 2400, height: 2400 },
  { id: 51, src: '/photos/places/Places_Italy2.jpg', alt: 'Italy photograph', width: 2400, height: 1600 },
  { id: 52, src: '/photos/places/Places_Italy3.jpg', alt: 'Italy photograph', width: 1600, height: 2400 },
  { id: 53, src: '/photos/places/Places_Italy4.jpg', alt: 'Italy photograph', width: 2400, height: 1600 },
  { id: 54, src: '/photos/places/Places_Italy5.jpg', alt: 'Italy photograph', width: 1600, height: 2400 },
  { id: 55, src: '/photos/places/Places_Italy6.jpg', alt: 'Italy photograph', width: 1618, height: 2400 },
  { id: 56, src: '/photos/places/Places_Italy7.jpg', alt: 'Italy photograph', width: 1666, height: 2400 },
  { id: 57, src: '/photos/places/Places_Marrakech1.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 58, src: '/photos/places/Places_Marrakech2.jpg', alt: 'Marrakech photograph', width: 1309, height: 1600 },
  { id: 59, src: '/photos/places/Places_Marrakech4.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 60, src: '/photos/places/Places_Marrakech5.jpg', alt: 'Marrakech photograph', width: 1600, height: 2400 },
  { id: 61, src: '/photos/places/Places_Marrakech6.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 62, src: '/photos/places/Places_Marrakech7.jpg', alt: 'Marrakech photograph', width: 1600, height: 2400 },
  { id: 63, src: '/photos/places/Places_Marrakech8.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 64, src: '/photos/places/Places_Marrakech10.jpg', alt: 'Marrakech photograph', width: 2400, height: 1600 },
  { id: 65, src: '/photos/places/Places_Netherlands1.jpg', alt: 'Netherlands photograph', width: 1600, height: 2400 },
  { id: 66, src: '/photos/places/Places_New_York2.jpg', alt: 'New York photograph', width: 2401, height: 1600 },
  { id: 67, src: '/photos/places/Places_New_York5.jpg', alt: 'New York photograph', width: 1600, height: 2400 },
  { id: 68, src: '/photos/places/Places_UK1.jpg', alt: 'UK photograph', width: 1600, height: 2400 },
  { id: 69, src: '/photos/places/Places_UK2.jpg', alt: 'UK photograph', width: 2400, height: 1600 },
  { id: 70, src: '/photos/places/Places_UK3.jpg', alt: 'UK photograph', width: 1600, height: 2400 },
  { id: 71, src: '/photos/places/Places_UK4.jpg', alt: 'UK photograph', width: 2400, height: 1600 },
  { id: 72, src: '/photos/nature/Nature_Birds1.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1600 },
  { id: 73, src: '/photos/nature/Nature_Birds2.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1599 },
  { id: 74, src: '/photos/nature/Nature_Birds3.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1600 },
  { id: 75, src: '/photos/nature/Nature_Birds4.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1600 },
  { id: 76, src: '/photos/nature/Nature_Birds5.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1350 },
  { id: 77, src: '/photos/nature/Nature_Birds6.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1350 },
  { id: 78, src: '/photos/nature/Nature_Birds7.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1800 },
  { id: 79, src: '/photos/nature/Nature_Birds8.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1350 },
  { id: 80, src: '/photos/nature/Nature_Birds10.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 1350 },
  { id: 81, src: '/photos/nature/Nature_Birds11.jpg', alt: 'Bird wildlife photograph', width: 1434, height: 1434 },
  { id: 82, src: '/photos/nature/Nature_Birds12.jpg', alt: 'Bird wildlife photograph', width: 2400, height: 2400 },
  { id: 83, src: '/photos/nature/Nature_Birds13.jpg', alt: 'Bird wildlife photograph', width: 1881, height: 1254 },
  { id: 84, src: '/photos/nature/Nature_Birds14.jpg', alt: 'Bird wildlife photograph', width: 7128, height: 4793 },
  { id: 85, src: '/photos/nature/Nature_Landscape1.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1683 },
  { id: 86, src: '/photos/nature/Nature_Landscape2.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1600 },
  { id: 87, src: '/photos/nature/Nature_Landscape5.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1350 },
  { id: 88, src: '/photos/nature/Nature_Landscape6.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1350 },
  { id: 89, src: '/photos/nature/Nature_Landscape7.JPG', alt: 'Nature landscape photograph', width: 2048, height: 1365 },
  { id: 90, src: '/photos/nature/Nature_Landscape8.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1600 },
  { id: 91, src: '/photos/nature/Nature_Landscape9.jpg', alt: 'Nature landscape photograph', width: 6048, height: 4032 },
  { id: 92, src: '/photos/nature/Nature_Landscape10.jpg', alt: 'Nature landscape photograph', width: 2400, height: 1350 },
  { id: 93, src: '/photos/nature/Nature_Monkeys1.jpg', alt: 'Monkey wildlife photograph', width: 2400, height: 1600 },
  { id: 94, src: '/photos/nature/Nature_Monkeys2.jpg', alt: 'Monkey wildlife photograph', width: 1600, height: 2400 },
  { id: 95, src: '/photos/nature/Nature_Squirrels1.jpg', alt: 'Squirrel wildlife photograph', width: 1074, height: 1612 },
  { id: 96, src: '/photos/sport/Motorsport1.jpg', alt: 'Motorsport photograph', width: 5682, height: 3196 },
  { id: 97, src: '/photos/sport/Motorsport2.jpg', alt: 'Motorsport photograph', width: 5264, height: 2961 },
  { id: 98, src: '/photos/sport/Motorsport3.jpg', alt: 'Motorsport photograph', width: 5012, height: 2819 },
  { id: 99, src: '/photos/sport/Motorsport4.jpg', alt: 'Motorsport photograph', width: 5256, height: 2957 },
  { id: 100, src: '/photos/sport/Motorsport5.jpg', alt: 'Motorsport photograph', width: 4595, height: 2585 },
  { id: 101, src: '/photos/sport/Motorsport6.jpg', alt: 'Motorsport photograph', width: 2400, height: 1350 },
  { id: 102, src: '/photos/sport/Motorsport8.jpg', alt: 'Motorsport photograph', width: 4558, height: 2564 },
  { id: 103, src: '/photos/sport/Motorsport10.jpg', alt: 'Motorsport photograph', width: 3154, height: 1774 },
  { id: 104, src: '/photos/sport/Motorsport12.jpg', alt: 'Motorsport photograph', width: 2400, height: 1350 },
  { id: 105, src: '/photos/sport/Motorsport13.jpg', alt: 'Motorsport photograph', width: 2400, height: 1350 },
  { id: 106, src: '/photos/sport/Motorsport16.jpg', alt: 'Motorsport photograph', width: 2400, height: 1600 },
];

// The homepage is grouped by subject, with each subject ordered by image number.
export const homePhotoIds = [
  40, 39, 66, 41, 67,
  58, 59, 61, 62, 63, 42,
  72, 73, 74, 75, 76, 77, 78, 79, 37, 80, 81, 82, 83, 84,
  36,
  96, 97, 98, 99, 100, 101, 44, 102, 45, 103, 46, 104, 105, 47, 48, 106,
  85, 86, 35, 34, 87, 88,
  68, 69, 70, 71,
  49,
  43, 51, 52, 53, 54, 55, 56,
];

export function selectPhotos(ids: number[]): Photo[] {
  return ids.map((id) => {
    const photo = photoCatalog.find((item) => item.id === id);
    if (!photo) throw new Error(`Unknown photo ID: ${id}`);
    return photo;
  });
}

export const homePhotos = selectPhotos(homePhotoIds);