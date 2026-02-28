'use client';

import { useState } from 'react';
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

  // Calculate row span based on aspect ratio
  const getRowSpan = (photoId: number): string => {
    const dimensions = imageDimensions.get(photoId);
    if (!dimensions) return 'row-span-2'; // Default while loading
    
    const { aspectRatio } = dimensions;
    
    // Portrait images (taller than wide): span more rows
    if (aspectRatio < 0.85) {
      return 'row-span-3'; // Very tall portraits
    } else if (aspectRatio < 1.15) {
      return 'row-span-2'; // Standard portraits and squares
    } else if (aspectRatio < 1.5) {
      return 'row-span-2'; // Slightly wide
    } else {
      return 'row-span-1'; // Landscape images
    }
  };

  return (
    <>
      {/* Photo Grid - Masonry Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]" style={{ gridAutoFlow: 'dense' }}>
        {photos.map((photo, index) => {
          const rowSpanClass = getRowSpan(photo.id);
          
          return (
            <div
              key={photo.id}
              className={`${rowSpanClass}`}
            >
              <div 
                className="group relative w-full h-full overflow-hidden bg-gray-900 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoadingComplete={({ naturalWidth, naturalHeight }) => 
                    handleImageLoad(photo.id, naturalWidth, naturalHeight)
                  }
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                
                {/* Photo Title on Hover */}
                {photo.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-sm font-light tracking-wider uppercase">
                      {photo.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
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
