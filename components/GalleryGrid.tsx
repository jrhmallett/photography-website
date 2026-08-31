'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface Photo {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

interface GalleryGridProps {
  photos: Photo[];
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageDimensions, setImageDimensions] = useState<Map<number, ImageDimensions>>(new Map());
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumnCount = () => {
      const viewportWidth = window.innerWidth;
      const matches = (query: string, minimumWidth: number) =>
        typeof window.matchMedia === 'function'
          ? window.matchMedia(query).matches
          : viewportWidth >= minimumWidth;

      if (matches('(min-width: 1280px)', 1280)) {
        setColumnCount(4);
      } else if (matches('(min-width: 1024px)', 1024)) {
        setColumnCount(3);
      } else if (matches('(min-width: 640px)', 640)) {
        setColumnCount(2);
      } else {
        setColumnCount(1);
      }
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);

    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < photos.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleImageLoad = (photoId: number, naturalWidth: number, naturalHeight: number) => {
    const aspectRatio = naturalWidth / naturalHeight;
    setImageDimensions(prev => {
      const next = new Map(prev);
      next.set(photoId, { width: naturalWidth, height: naturalHeight, aspectRatio });
      return next;
    });
  };

  const columns = Array.from({ length: columnCount }, (_, columnIndex) => {
    const columnPhotos = photos.filter((_, photoIndex) => photoIndex % columnCount === columnIndex);

    const lastPhotoIsInFirstColumn = (photos.length - 1) % columnCount === 0;

    if (columnCount > 1 && lastPhotoIsInFirstColumn && columnIndex === 0) {
      return columnPhotos.slice(0, -1);
    }

    if (columnCount > 1 && lastPhotoIsInFirstColumn && columnIndex === columnCount - 1) {
      return [...columnPhotos, ...photos.slice(-1)];
    }

    return columnPhotos;
  });

  return (
    <>
      <div className="mx-auto flex max-w-[1800px] gap-[8px] bg-white">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex min-w-0 flex-1 flex-col gap-[8px]">
            {column.map((photo) => {
              const photoIndex = photos.findIndex((item) => item.id === photo.id);
              const aspectRatio = imageDimensions.get(photo.id)?.aspectRatio ?? 4 / 3;

              return (
                <button
                  key={photo.id}
                  type="button"
                  aria-label={`Open ${photo.alt}`}
                  className="group relative block w-full shrink-0 cursor-zoom-in overflow-hidden bg-white text-left"
                  style={{ aspectRatio }}
                  onClick={() => openLightbox(photoIndex)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={(event) => {
                      const img = event.currentTarget;
                      handleImageLoad(photo.id, img.naturalWidth, img.naturalHeight);
                    }}
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={photos[lightboxIndex].src}
          alt={photos[lightboxIndex].alt}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrevious={goToPrevious}
          hasNext={lightboxIndex < photos.length - 1}
          hasPrevious={lightboxIndex > 0}
        />
      )}
    </>
  );
}
