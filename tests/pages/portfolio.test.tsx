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
    
    const wildlifeHeading = screen.getByRole('heading', { name: /nature/i, level: 2 });
    const wildlifeLink = screen.getByRole('link', { name: /nature/i });
    
    expect(wildlifeHeading).toBeInTheDocument();
    expect(wildlifeLink).toHaveAttribute('href', '/portfolio/wildlife');
  });

  test('renders Travel category card', () => {
    render(<Portfolio />);
    
    const travelHeading = screen.getByRole('heading', { name: /travel/i, level: 2 });
    const travelLink = screen.getByRole('link', { name: /travel/i });
    
    expect(travelHeading).toBeInTheDocument();
    expect(travelLink).toHaveAttribute('href', '/portfolio/travel');
  });

  test('renders category images', () => {
    render(<Portfolio />);
    
    const sportImage = screen.getByAltText(/sport photography/i);
    const wildlifeImage = screen.getByAltText(/wildlife photography/i);
    const travelImage = screen.getByAltText(/travel photography/i);
    
    expect(sportImage).toBeInTheDocument();
    expect(wildlifeImage).toBeInTheDocument();
    expect(travelImage).toBeInTheDocument();
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
    
    // Should have h2 for each category (4 total: Travel, Wildlife, Sport, People)
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBe(4);
  });

  test('all category cards are keyboard accessible', () => {
    render(<Portfolio />);
    
    const sportLink = screen.getByRole('link', { name: /sport/i });
    const wildlifeLink = screen.getByRole('link', { name: /wildlife/i });
    const travelLink = screen.getByRole('link', { name: /travel/i });
    const peopleLink = screen.getByRole('link', { name: /people/i });
    
    expect(sportLink).toBeVisible();
    expect(wildlifeLink).toBeVisible();
    expect(travelLink).toBeVisible();
    expect(peopleLink).toBeVisible();
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
