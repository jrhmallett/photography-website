'use client';

import { useState } from 'react';
import Image from 'next/image';
import { photoImageSrc, type Photo } from '@/content/photos';
import Lightbox from './Lightbox';

// Paired and offset images retain their source order at every viewport size.
const placements = [
  'md:col-span-7', 'md:col-span-5',
  'md:col-span-6', 'md:col-span-6',
  'md:col-span-10 md:col-start-2',
  'md:col-span-6', 'md:col-span-6',
  'md:col-span-5', 'md:col-span-7',
  'md:col-span-10 md:col-start-2',
];

export default function GalleryGrid({ photos, compact = false, balancedPhotoIds = [], balancedLayout = false }: { photos: Photo[]; compact?: boolean; balancedPhotoIds?: number[]; balancedLayout?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 items-center ${balancedLayout ? 'md:grid-cols-2' : 'md:grid-cols-12'} ${compact ? 'gap-x-5 gap-y-6 sm:gap-y-8 md:gap-x-6 md:gap-y-8 lg:gap-x-8 lg:gap-y-10' : 'gap-x-6 gap-y-8 sm:gap-y-12 md:gap-x-8 md:gap-y-10 lg:gap-x-10 lg:gap-y-12'}`}>
        {photos.map((photo, index) => (
          <figure
            key={photo.id}
            className={`${balancedLayout ? '' : placements[index % placements.length]} ${balancedLayout && photo.height > photo.width ? 'w-full max-w-[calc(min(75vh,600px)*var(--photo-ratio))] justify-self-center' : balancedPhotoIds.includes(photo.id) ? 'w-full max-w-[calc(min(70vw,440px)*var(--photo-ratio))] justify-self-center' : ''}`}
            style={(balancedLayout && photo.height > photo.width) || balancedPhotoIds.includes(photo.id) ? { '--photo-ratio': photo.width / photo.height } as React.CSSProperties : undefined}
          >
            <button type="button" aria-label={`Open photograph: ${photo.alt}`} className="group block w-full cursor-zoom-in overflow-hidden bg-neutral-100 text-left focus-visible:outline-2 focus-visible:outline-offset-4" onClick={() => setLightboxIndex(index)}>
              <Image src={photoImageSrc(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 767px) 100vw, (max-width: 1200px) 75vw, 1100px" className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90" />
            </button>
            {photo.caption && <figcaption className="mt-3 text-xs leading-relaxed text-neutral-500">{photo.caption}</figcaption>}
          </figure>
        ))}
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