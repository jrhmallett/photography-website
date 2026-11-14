/**
 * Home Page - Unit Tests
 * 
 * Tests for the image-first homepage gallery.
 */

import { render, screen } from '@testing-library/react';
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

  test('renders the curated gallery images', () => {
    render(<Home />);

    const galleryImages = screen.getAllByRole('img');
    expect(galleryImages).toHaveLength(13);
    expect(galleryImages.map((image) => image.getAttribute('src'))).toEqual(homePhotos.map((photo) => photoImageSrc(photo.src)));
  });

  test('uses the balanced layout for all homepage photos', () => {
    render(<Home />);
    const figures = screen.getAllByRole('figure');
    expect(figures[0].parentElement).toHaveClass('md:grid-cols-2');
    homePhotos.forEach((photo, index) => {
      expect(figures[index]).not.toHaveClass('md:col-span-10');
      if (photo.height > photo.width) {
        expect(figures[index]).toHaveClass('max-w-[calc(min(75vh,600px)*var(--photo-ratio))]');
        expect(figures[index].style.getPropertyValue('--photo-ratio')).toBe(String(photo.width / photo.height));
      } else {
        expect(figures[index]).not.toHaveClass('justify-self-center');
      }
    });
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

  test('links Portfolio to the work page without an extra gallery link', () => {
    render(<Home />);

    const workLink = screen.getByRole('link', { name: /^portfolio$/i });
    expect(workLink).toHaveAttribute('href', '/work');
    expect(screen.queryByRole('link', { name: /view all work/i })).not.toBeInTheDocument();
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
