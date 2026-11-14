import { fireEvent, render, screen } from '@testing-library/react';
import GalleryGrid from '@/components/GalleryGrid';
import { homeBalancedPhotoIds, homePhotos, photoImageSrc } from '@/content/photos';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    void fill;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Editorial gallery', () => {
  test('reserves natural image dimensions and keeps sequence', () => {
    render(<GalleryGrid photos={homePhotos.slice(0, 2)} />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('width', String(homePhotos[0].width));
    expect(images[0]).toHaveAttribute('height', String(homePhotos[0].height));
    expect(images[1]).toHaveAttribute('src', photoImageSrc(homePhotos[1].src));
  });

  test('balances portraits without cropping or enlarging landscape images', () => {
    const photos = [
      { id: 1, src: '/landscape.jpg', alt: 'Landscape', width: 2400, height: 1600 },
      { id: 2, src: '/portrait.jpg', alt: 'Portrait', width: 1600, height: 2400 },
    ];
    render(<GalleryGrid photos={photos} balancedLayout />);
    const figures = screen.getAllByRole('figure');
    expect(figures[0].parentElement).toHaveClass('md:grid-cols-2');
    expect(figures[0]).not.toHaveClass('md:col-span-7');
    expect(figures[0]).not.toHaveClass('justify-self-center');
    expect(figures[1]).toHaveClass('justify-self-center', 'max-w-[calc(min(75vh,600px)*var(--photo-ratio))]');
    expect(figures[1].style.getPropertyValue('--photo-ratio')).toBe(String(1600 / 2400));
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('width', '1600');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('height', '2400');
  });

  test('balances the selected photos regardless of orientation', () => {
    render(<GalleryGrid photos={homePhotos} compact balancedPhotoIds={homeBalancedPhotoIds} />);
    const figures = screen.getAllByRole('figure');
    homePhotos.forEach((photo, index) => {
      if (homeBalancedPhotoIds.includes(photo.id)) {
        expect(figures[index]).toHaveClass('justify-self-center');
        expect(figures[index].style.getPropertyValue('--photo-ratio')).toBe(String(photo.width / photo.height));
        expect(figures[index]).toHaveClass('max-w-[calc(min(70vw,440px)*var(--photo-ratio))]');
      } else {
        expect(figures[index]).not.toHaveClass('justify-self-center');
      }
      expect(screen.getAllByRole('img')[index]).toHaveAttribute('width', String(photo.width));
      expect(screen.getAllByRole('img')[index]).toHaveAttribute('height', String(photo.height));
    });
  });

  test('supports keyboard navigation, focus and scroll restoration', () => {
    document.body.style.overflow = 'auto';
    render(<GalleryGrid photos={homePhotos.slice(0, 2)} />);
    const trigger = screen.getAllByRole('button')[0];
    trigger.focus();
    fireEvent.click(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close lightbox' })).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByRole('dialog')).toHaveAccessibleName(`Photograph: ${homePhotos[1].alt}`);
    expect(screen.queryByRole('button', { name: 'Next image' })).not.toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(screen.getByRole('dialog')).toHaveAccessibleName(`Photograph: ${homePhotos[0].alt}`);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('auto');
  });

  test('navigates by horizontal swipe', () => {
    render(<GalleryGrid photos={homePhotos.slice(0, 2)} />);
    fireEvent.click(screen.getAllByRole('button')[0]);
    const dialog = screen.getByRole('dialog');
    fireEvent.touchStart(dialog, { touches: [{ clientX: 200, clientY: 100 }] });
    fireEvent.touchEnd(dialog, { changedTouches: [{ clientX: 100, clientY: 102 }] });
    expect(dialog).toHaveAccessibleName(`Photograph: ${homePhotos[1].alt}`);
  });
});