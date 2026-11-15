'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { photoImageSrc, type Photo } from '@/content/photos';
import Lightbox from './Lightbox';

// Optional story galleries use editorial placements rather than the homepage masonry layout.
const placements = [
  'md:col-span-7', 'md:col-span-5',
  'md:col-span-6', 'md:col-span-6',
  'md:col-span-10 md:col-start-2',
  'md:col-span-6', 'md:col-span-6',
  'md:col-span-5', 'md:col-span-7',
  'md:col-span-10 md:col-start-2',
];

export default function GalleryGrid({ photos, masonry = false }: { photos: Photo[]; masonry?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(2);
  const masonryColumns: Array<Array<{ photo: Photo; index: number }>> = Array.from(
    { length: columnCount },
    () => [],
  );

  if (masonry) {
    const columnHeights = Array(columnCount).fill(0);
    photos.forEach((photo, index) => {
      const columnIndex = photo.pinToFirstColumn
        ? 0
        : columnHeights.indexOf(Math.min(...columnHeights));
      masonryColumns[columnIndex].push({ photo, index });
      columnHeights[columnIndex] += photo.height / photo.width;
    });
  }

  useEffect(() => {
    if (!masonry) return;

    const updateColumnCount = () => {
      setColumnCount(window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 3 : 1);
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, [masonry]);

  const renderPhoto = (photo: Photo, index: number) => (
    <figure
      key={photo.id}
      className={masonry ? 'min-w-0' : placements[index % placements.length]}
    >
      <button type="button" aria-label={`Open photograph: ${photo.alt}`} className="group block w-full cursor-zoom-in overflow-hidden bg-neutral-100 text-left focus-visible:outline-2 focus-visible:outline-offset-4" onClick={() => setLightboxIndex(index)}>
        <Image src={photoImageSrc(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} sizes={masonry ? `(max-width: 1600px) ${100 / columnCount}vw, ${1600 / columnCount}px` : '(max-width: 767px) 100vw, (max-width: 1200px) 75vw, 1100px'} className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90" />
      </button>
      {photo.caption && <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">{photo.caption}</figcaption>}
    </figure>
  );

  return (
    <>
      <div className={masonry ? 'grid gap-x-2.5' : 'grid grid-cols-1 items-center gap-x-6 gap-y-8 sm:gap-y-12 md:grid-cols-12 md:gap-x-8 md:gap-y-10 lg:gap-x-10 lg:gap-y-12'} style={masonry ? { gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` } : undefined}>
        {masonry
          ? masonryColumns.map((column, index) => (
            <div key={index} className="flex min-w-0 flex-col gap-y-2.5">
              {column.map(({ photo, index: photoIndex }) => renderPhoto(photo, photoIndex))}
            </div>
          ))
          : photos.map(renderPhoto)}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          src={photoImageSrc(photos[lightboxIndex].src)}
          alt={photos[lightboxIndex].alt}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((index) => index === null ? null : Math.min(index + 1, photos.length - 1))}
          onPrevious={() => setLightboxIndex((index) => index === null ? null : Math.max(index - 1, 0))}
          hasNext={lightboxIndex < photos.length - 1}
          hasPrevious={lightboxIndex > 0}
        />
      )}
    </>
  );
}