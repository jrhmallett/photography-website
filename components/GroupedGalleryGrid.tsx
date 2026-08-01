'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

interface Group {
  heading: string;
  photos: Photo[];
}

interface GroupedGalleryGridProps {
  groups: Group[];
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export default function GroupedGalleryGrid({ groups }: GroupedGalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageDimensions, setImageDimensions] = useState<Map<string, ImageDimensions>>(new Map());

  const allPhotos = useMemo(() => groups.flatMap((group) => group.photos), [groups]);

  const photoIndexBySrc = useMemo(() => {
    const indexMap = new Map<string, number>();
    allPhotos.forEach((photo, index) => {
      indexMap.set(photo.src, index);
    });
    return indexMap;
  }, [allPhotos]);

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < allPhotos.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleImageLoad = (photoSrc: string, naturalWidth: number, naturalHeight: number) => {
    const aspectRatio = naturalWidth / naturalHeight;
    setImageDimensions((prev) => {
      const next = new Map(prev);
      next.set(photoSrc, { width: naturalWidth, height: naturalHeight, aspectRatio });
      return next;
    });
  };

  const getRowSpan = (photoSrc: string): string => {
    const dimensions = imageDimensions.get(photoSrc);
    if (!dimensions) return 'row-span-2';

    const { aspectRatio } = dimensions;

    if (aspectRatio < 0.85) {
      return 'row-span-3';
    } else if (aspectRatio < 1.15) {
      return 'row-span-2';
    } else if (aspectRatio < 1.5) {
      return 'row-span-2';
    } else {
      return 'row-span-1';
    }
  };

  return (
    <>
      <div className="space-y-16">
        {groups.map((group) => (
          <section key={group.heading}>
            <h2 className="text-2xl font-light tracking-wide mb-6">{group.heading}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]" style={{ gridAutoFlow: 'dense' }}>
              {group.photos.map((photo) => {
                const rowSpanClass = getRowSpan(photo.src);
                const photoIndex = photoIndexBySrc.get(photo.src);

                return (
                  <div key={photo.src} className={rowSpanClass}>
                    <div
                      className="group relative w-full h-full overflow-hidden bg-gray-900 cursor-pointer"
                      onClick={() => {
                        if (photoIndex !== undefined) {
                          setLightboxIndex(photoIndex);
                        }
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onLoad={(event) => {
                          const img = event.currentTarget;
                          handleImageLoad(photo.src, img.naturalWidth, img.naturalHeight);
                        }}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          src={allPhotos[lightboxIndex].src}
          alt={allPhotos[lightboxIndex].alt}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          hasNext={lightboxIndex < allPhotos.length - 1}
          hasPrevious={lightboxIndex > 0}
        />
      )}
    </>
  );
}
