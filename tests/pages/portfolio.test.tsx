/**
 * Portfolio Landing Page - Unit Tests
 * 
 * Tests for the portfolio category landing page.
 * Validates category cards, navigation, and links.
 */

import { render, screen } from '@testing-library/react';
import Portfolio from '@/app/portfolio/page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Portfolio Landing Page', () => {
  test('renders without crashing', () => {
    const { container } = render(<Portfolio />);
    expect(container).toBeInTheDocument();
  });

  test('renders site name in header', () => {
    render(<Portfolio />);
    
    const siteName = screen.getByRole('link', { name: /jonathan mallett photography/i });
    expect(siteName).toBeInTheDocument();
    expect(siteName).toHaveAttribute('href', '/');
  });

  test('renders navigation links', () => {
    render(<Portfolio />);
    
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const portfolioLink = screen.getByRole('link', { name: /portfolio/i });
    
    expect(aboutLink).toBeInTheDocument();
    expect(portfolioLink).toBeInTheDocument();
  });

  test('renders Portfolio heading', () => {
    render(<Portfolio />);
    
    const heading = screen.getByRole('heading', { name: /portfolio/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders Sport category card', () => {
    render(<Portfolio />);
    
    const sportHeading = screen.getByRole('heading', { name: /sport/i, level: 2 });
    const sportLink = screen.getByRole('link', { name: /sport/i });
    
    expect(sportHeading).toBeInTheDocument();
    expect(sportLink).toHaveAttribute('href', '/portfolio/sport');
  });

  test('renders Nature category card', () => {
    render(<Portfolio />);
    
    const natureHeading = screen.getByRole('heading', { name: /nature/i, level: 2 });
    const natureLink = screen.getByRole('link', { name: /nature/i });
    
    expect(natureHeading).toBeInTheDocument();
    expect(natureLink).toHaveAttribute('href', '/portfolio/nature');
  });

  test('renders Places category card', () => {
    render(<Portfolio />);
    
    const placesHeading = screen.getByRole('heading', { name: /places/i, level: 2 });
    const placesLink = screen.getByRole('link', { name: /places/i });
    
    expect(placesHeading).toBeInTheDocument();
    expect(placesLink).toHaveAttribute('href', '/portfolio/places');
  });

  test('renders category images', () => {
    render(<Portfolio />);
    
    const sportImage = screen.getByAltText(/sport photography/i);
    const natureImage = screen.getByAltText(/nature photography/i);
    const placesImage = screen.getByAltText(/places photography/i);
    
    expect(sportImage).toBeInTheDocument();
    expect(natureImage).toBeInTheDocument();
    expect(placesImage).toBeInTheDocument();
  });

  test('has main element', () => {
    render(<Portfolio />);
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});

describe('Portfolio Landing Page Accessibility', () => {
  test('all images have alt text', () => {
    render(<Portfolio />);
    
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  test('proper heading hierarchy', () => {
    render(<Portfolio />);
    
    // Should have h1 (Portfolio)
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    // Should have h2 for each category (3 total: Nature, Places, Sport)
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBe(3);
  });

  test('renders category cards in alphabetical order', () => {
    render(<Portfolio />);

    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    const categoryTitles = h2Elements.map((heading) => heading.textContent);

    expect(categoryTitles).toEqual(['Nature', 'Places', 'Sport']);
  });

  test('all category cards are keyboard accessible', () => {
    render(<Portfolio />);
    
    const sportLink = screen.getByRole('link', { name: /sport/i });
    const natureLink = screen.getByRole('link', { name: /nature/i });
    const placesLink = screen.getByRole('link', { name: /places/i });
    
    expect(sportLink).toBeVisible();
    expect(natureLink).toBeVisible();
    expect(placesLink).toBeVisible();
  });

  test('all links have proper href attributes', () => {
    render(<Portfolio />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link.getAttribute('href')).not.toBe('');
    });
  });
});
