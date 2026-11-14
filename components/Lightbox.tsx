'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function Lightbox({ src, alt, onClose, onNext, onPrevious, hasNext = false, hasPrevious = false }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && hasNext) onNext?.();
      if (event.key === 'ArrowLeft' && hasPrevious) onPrevious?.();
      if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (!dialogRef.current?.contains(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photograph: ${alt}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafafa] p-4 sm:p-8"
      onClick={onClose}
      onTouchStart={(event) => { const touch = event.touches[0]; touchStart.current = { x: touch.clientX, y: touch.clientY }; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;
        if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy)) return;
        if (dx < 0 && hasNext) onNext?.();
        if (dx > 0 && hasPrevious) onPrevious?.();
      }}
    >
      <button ref={closeRef} type="button" onClick={onClose} className="absolute right-4 top-4 z-10 p-2 text-neutral-700 hover:text-neutral-400 sm:right-6 sm:top-6" aria-label="Close lightbox">
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
      {hasPrevious && <button type="button" onClick={(event) => { event.stopPropagation(); onPrevious?.(); }} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-[#fafafa]/80 p-2 text-neutral-700 hover:text-neutral-400 sm:left-4" aria-label="Previous image"><svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg></button>}
      {hasNext && <button type="button" onClick={(event) => { event.stopPropagation(); onNext?.(); }} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-[#fafafa]/80 p-2 text-neutral-700 hover:text-neutral-400 sm:right-4" aria-label="Next image"><svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg></button>}
      <div className="relative h-[80vh] w-full max-w-7xl" onClick={(event) => event.stopPropagation()}>
        <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" loading="eager" />
      </div>
    </div>
  );
}