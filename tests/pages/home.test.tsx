/**
 * Home Page - Unit Tests
 * 
 * Tests for the minimalist landing page inspired by Alan Schaller's design.
 * Validates navigation, hero image, and accessibility.
 */

import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

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

  test('renders Portfolio navigation link', () => {
    render(<Home />);
    
    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i });
    expect(portfolioLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks[0]).toHaveAttribute('href', '/portfolio');
  });

  test('renders hero image with alt text', () => {
    render(<Home />);
    
    const heroImage = screen.getByAltText(/featured photograph by jonathan mallett/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src');
  });

  test('hero image has priority loading', () => {
    render(<Home />);
    
    const heroImage = screen.getByAltText(/featured photograph by jonathan mallett/i);
    expect(heroImage).toBeInTheDocument();
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
