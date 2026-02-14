/**
 * Category Gallery Pages - Unit Tests
 * 
 * Tests for the dynamic category gallery pages (Sport, Wildlife, Travel).
 * Validates photo grids, navigation, and back links.
 */

import { render, screen } from '@testing-library/react';
import CategoryGallery from '@/app/portfolio/[category]/page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Sport Category Gallery', () => {
  const sportParams = Promise.resolve({ category: 'sport' });

  test('renders without crashing', async () => {
    const { container } = render(await CategoryGallery({ params: sportParams }));
    expect(container).toBeInTheDocument();
  });

  test('renders site name in header', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const siteNameLinks = screen.getAllByRole('link', { name: /jonathan mallett photography/i });
    expect(siteNameLinks[0]).toBeInTheDocument();
  });

  test('renders Sport heading', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const heading = screen.getByRole('heading', { name: /^sport$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders back to portfolio link', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const portfolioLinks = screen.getAllByRole('link', { name: /^portfolio$/i });
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toHaveAttribute('href', '/portfolio');
  });

  test('renders 24 gallery images', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const images = screen.getAllByRole('img');
    // Filter out navigation images (only count gallery images)
    const galleryImages = images.filter(img => 
      img.getAttribute('alt')?.includes('Sport photography')
    );
    
    expect(galleryImages.length).toBe(24);
  });

  test('all gallery images have alt text', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });
});

describe('Wildlife Category Gallery', () => {
  const wildlifeParams = Promise.resolve({ category: 'wildlife' });

  test('renders without crashing', async () => {
    const { container } = render(await CategoryGallery({ params: wildlifeParams }));
    expect(container).toBeInTheDocument();
  });

  test('renders Wildlife heading', async () => {
    render(await CategoryGallery({ params: wildlifeParams }));
    
    const heading = screen.getByRole('heading', { name: /^wildlife$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders 33 gallery images', async () => {
    render(await CategoryGallery({ params: wildlifeParams }));
    
    const images = screen.getAllByRole('img');
    const galleryImages = images.filter(img => 
      img.getAttribute('alt')?.includes('Wildlife photography')
    );
    
    expect(galleryImages.length).toBe(33);
  });

  test('renders back to portfolio link', async () => {
    render(await CategoryGallery({ params: wildlifeParams }));
    
    const portfolioLinks = screen.getAllByRole('link', { name: /^portfolio$/i });
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toHaveAttribute('href', '/portfolio');
  });
});

describe('Travel Category Gallery', () => {
  const travelParams = Promise.resolve({ category: 'travel' });

  test('renders without crashing', async () => {
    const { container } = render(await CategoryGallery({ params: travelParams }));
    expect(container).toBeInTheDocument();
  });

  test('renders Travel heading', async () => {
    render(await CategoryGallery({ params: travelParams }));
    
    const heading = screen.getByRole('heading', { name: /^travel$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders 29 gallery images', async () => {
    render(await CategoryGallery({ params: travelParams }));
    
    const images = screen.getAllByRole('img');
    const galleryImages = images.filter(img => 
      img.getAttribute('alt')?.includes('Travel photography')
    );
    
    expect(galleryImages.length).toBe(29);
  });

  test('renders back to portfolio link', async () => {
    render(await CategoryGallery({ params: travelParams }));
    
    const portfolioLinks = screen.getAllByRole('link', { name: /^portfolio$/i });
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toHaveAttribute('href', '/portfolio');
  });
});

describe('Category Gallery Accessibility', () => {
  const sportParams = Promise.resolve({ category: 'sport' });

  test('proper heading hierarchy', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    // Should have h1 (category name)
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
  });

  test('navigation links are present', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const aboutLinks = screen.getAllByRole('link', { name: /^about$/i });
    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i });
    
    expect(aboutLinks[0]).toBeVisible();
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toBeVisible();
  });

  test('all links have proper href attributes', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).not.toBe('');
    });
  });

  test('has main element', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
