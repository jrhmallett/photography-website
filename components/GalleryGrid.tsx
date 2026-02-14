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

export default function GalleryGrid({ photos }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => {
          // Check if filename ends with '-ls' before extension (landscape)
          const isLandscape = photo.src.includes('-ls.');
          
          // Landscape aspect ratios for images ending in '-ls'
          const landscapeHeights = ['aspect-[16/9]', 'aspect-[4/3]', 'aspect-[3/2]', 'aspect-video'];
          // Portrait aspect ratios for standard images
          const portraitHeights = ['aspect-[3/4]', 'aspect-[2/3]', 'aspect-[4/5]', 'aspect-square'];
          
          const heights = isLandscape ? landscapeHeights : portraitHeights;
          const heightClass = heights[index % heights.length];
          
          return (
            <div
              key={photo.id}
            >
              <div 
                className={`group relative ${heightClass} overflow-hidden bg-gray-900 cursor-pointer`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
