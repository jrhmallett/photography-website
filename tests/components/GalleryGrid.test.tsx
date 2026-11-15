import { fireEvent, render, screen } from '@testing-library/react';
import GalleryGrid from '@/components/GalleryGrid';
import { homePhotos, photoImageSrc } from '@/content/photos';

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