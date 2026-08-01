/**
 * Category Gallery Pages - Unit Tests
 * 
 * Tests for the dynamic category gallery pages (Sport, Nature, Places).
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

  test('renders sport subsection headings', async () => {
    render(await CategoryGallery({ params: sportParams }));

    expect(screen.getByRole('heading', { name: /silverstone 2026/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /silverstone 2025/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /silverstone 2024/i, level: 2 })).toBeInTheDocument();
  });

  test('renders 33 gallery images', async () => {
    render(await CategoryGallery({ params: sportParams }));
    
    const images = screen.getAllByRole('img');
    // Filter out navigation images (only count gallery images)
    const galleryImages = images.filter(img => 
      /sport photography/i.test(img.getAttribute('alt') ?? '')
    );
    
    expect(galleryImages.length).toBe(33);
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

describe('Nature Category Gallery', () => {
  const natureParams = Promise.resolve({ category: 'nature' });

  test('renders without crashing', async () => {
    const { container } = render(await CategoryGallery({ params: natureParams }));
    expect(container).toBeInTheDocument();
  });

  test('renders Nature heading', async () => {
    render(await CategoryGallery({ params: natureParams }));
    
    const heading = screen.getByRole('heading', { name: /^nature$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders nature subsection headings', async () => {
    render(await CategoryGallery({ params: natureParams }));

    expect(screen.getByRole('heading', { name: /^birds$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^dogs$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^monkeys$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^squirrel$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^goat$/i, level: 2 })).toBeInTheDocument();
  });

  test('renders 41 gallery images', async () => {
    render(await CategoryGallery({ params: natureParams }));
    
    const images = screen.getAllByRole('img');
    const galleryImages = images.filter(img => 
      /wildlife photography/i.test(img.getAttribute('alt') ?? '')
    );
    
    expect(galleryImages.length).toBe(41);
  });

  test('renders back to portfolio link', async () => {
    render(await CategoryGallery({ params: natureParams }));
    
    const portfolioLinks = screen.getAllByRole('link', { name: /^portfolio$/i });
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toHaveAttribute('href', '/portfolio');
  });
});

describe('Places Category Gallery', () => {
  const placesParams = Promise.resolve({ category: 'places' });

  test('renders without crashing', async () => {
    const { container } = render(await CategoryGallery({ params: placesParams }));
    expect(container).toBeInTheDocument();
  });

  test('renders Places heading', async () => {
    render(await CategoryGallery({ params: placesParams }));
    
    const heading = screen.getByRole('heading', { name: /^places$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders places subsection headings', async () => {
    render(await CategoryGallery({ params: placesParams }));

    expect(screen.getByRole('heading', { name: /^croatia$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^italy$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^marrakech$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^porto$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^switzerland$/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^uk$/i, level: 2 })).toBeInTheDocument();
  });

  test('renders places groups in file-number order', async () => {
    render(await CategoryGallery({ params: placesParams }));

    const subsectionHeadings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent);

    expect(subsectionHeadings).toEqual([
      'Switzerland',
      'Marrakech',
      'UK',
      'Porto',
      'Croatia',
      'Italy',
    ]);
  });

  test('renders ascending photo numbers inside each places group', async () => {
    render(await CategoryGallery({ params: placesParams }));

    const images = screen.getAllByRole('img');
    const placeImages = images.filter((img) => /travel photography/i.test(img.getAttribute('alt') ?? ''));

    const numbersByCountry = new Map<string, number[]>();

    placeImages.forEach((img) => {
      const src = img.getAttribute('src') ?? '';
      const match = src.match(/\/photos\/places\/places-([a-z-]+)-(\d+)\.(jpg|jpeg|png|webp)$/i);
      if (!match) {
        return;
      }

      const country = match[1].toLowerCase();
      const number = Number.parseInt(match[2], 10);
      const existing = numbersByCountry.get(country) ?? [];
      existing.push(number);
      numbersByCountry.set(country, existing);
    });

    numbersByCountry.forEach((numbers) => {
      const sorted = [...numbers].sort((a, b) => a - b);
      expect(numbers).toEqual(sorted);
    });
  });

  test('renders 35 gallery images', async () => {
    render(await CategoryGallery({ params: placesParams }));
    
    const images = screen.getAllByRole('img');
    const galleryImages = images.filter(img => 
      /travel photography/i.test(img.getAttribute('alt') ?? '')
    );
    
    expect(galleryImages.length).toBe(35);
  });

  test('renders back to portfolio link', async () => {
    render(await CategoryGallery({ params: placesParams }));
    
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
