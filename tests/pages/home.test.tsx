/**
 * Home Page - Unit Tests
 * 
 * Tests for the image-first homepage gallery.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
import Home from '@/app/page';
import { homePhotos, photoImageSrc } from '@/content/photos';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Home Page', () => {
  test('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

 test('renders site name in header', () => {
    render(<Home />);
    
    const siteNameLinks = screen.getAllByRole('link', { name: /jonathan mallett photography/i });
    expect(siteNameLinks[0]).toBeInTheDocument();
    expect(siteNameLinks[0]).toHaveAttribute('href', '/');
  });

  test('renders About navigation link', () => {
    render(<Home />);
    
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(aboutLinks[0]).toHaveAttribute('href', '/about');
  });

  test('renders every available portfolio photograph', () => {
    render(<Home />);

    const galleryImages = screen.getAllByRole('img');
    const sources = galleryImages.map((image) => image.getAttribute('src'));
    expect(sources).toHaveLength(homePhotos.length);
    expect(new Set(sources)).toEqual(new Set(homePhotos.map((photo) => photoImageSrc(photo.src))));
    const availablePhotoPaths = ['places', 'nature', 'sport'].flatMap((folder) =>
      fs.readdirSync(path.join(process.cwd(), 'public', 'photos', folder))
        .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
        .map((name) => `/photos/${folder}/${name}`),
    );
    expect(homePhotos).toHaveLength(availablePhotoPaths.length);
    expect(new Set(homePhotos.map((photo) => photo.src))).toEqual(new Set(availablePhotoPaths));
    homePhotos.forEach((photo) => {
      expect(fs.existsSync(path.join(process.cwd(), 'public', photo.src.replace(/^\//, '')))).toBe(true);
    });
  });

  test('balances images into compact columns with consistent spacing', () => {
    const originalWidth = window.innerWidth;
    window.innerWidth = 1024;
    render(<Home />);
    const figures = screen.getAllByRole('figure');
    const gallery = figures[0].parentElement?.parentElement;
    expect(gallery).toHaveClass('gap-x-2.5');
    expect(gallery).toHaveStyle({ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' });
    const columns = [...gallery!.children];
    expect(columns).toHaveLength(3);
    columns.forEach((column) => expect(column).toHaveClass('flex-col', 'gap-y-2.5'));
    figures.forEach((figure) => {
      expect(figure).toHaveClass('min-w-0');
      expect(figure).not.toHaveClass('max-w-[calc(min(75vh,450px)*var(--photo-ratio))]');
    });
    window.innerWidth = 700;
    fireEvent(window, new Event('resize'));
    expect(gallery).toHaveStyle({ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' });
    window.innerWidth = 1400;
    fireEvent(window, new Event('resize'));
    expect(gallery).toHaveStyle({ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' });
    window.innerWidth = originalWidth;
    fireEvent(window, new Event('resize'));
  });

  test('opens with selected photography without introductory or approach sections', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /selected photography/i, level: 1 })).toHaveClass('sr-only');
    expect(screen.queryByText(/looking a little closer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/photographic approach/i)).not.toBeInTheDocument();
  });

  test('has main element with proper semantic HTML', () => {
    render(<Home />);
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('header is present', () => {
    const { container } = render(<Home />);
    
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  test('navigation is present', () => {
    const { container } = render(<Home />);
    
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });
});

describe('Home Page Accessibility', () => {
  test('all images have alt text', () => {
    render(<Home />);
    
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  test('does not show a separate Portfolio link', () => {
    render(<Home />);

    expect(screen.queryByRole('link', { name: /^portfolio$/i })).not.toBeInTheDocument();
  });

  test('navigation links are keyboard accessible', () => {
    render(<Home />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
    });
  });

  test('all links have proper href attributes', () => {
    render(<Home />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).not.toBe('');
    });
  });
});
