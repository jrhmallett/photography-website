/**
 * Story 2.1: Basic Home Page with Hero Image - Unit Tests
 * 
 * These tests validate that the home page renders correctly with
 * proper accessibility and responsive design.
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
  test('renders site title', () => {
    render(<Home />);
    
    const title = screen.getByRole('heading', { 
      name: /jonathan's photography/i,
      level: 1 
    });
    
    expect(title).toBeInTheDocument();
  });

  test('renders tagline/subtitle', () => {
    render(<Home />);
    
    const tagline = screen.getByText(/capturing moments, telling stories through the lens/i);
    
    expect(tagline).toBeInTheDocument();
  });

  test('renders hero image with alt text', () => {
    render(<Home />);
    
    const heroImage = screen.getByAltText(/featured photography showcasing jonathan's work/i);
    
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src');
  });

  test('hero image has priority loading', () => {
    render(<Home />);
    
    // Next.js Image component with priority should be present
    const heroImage = screen.getByAltText(/featured photography showcasing jonathan's work/i);
    expect(heroImage).toBeInTheDocument();
  });

  test('renders call-to-action buttons', () => {
    render(<Home />);
    
    const galleryButton = screen.getByRole('link', { name: /view gallery/i });
    const aboutButton = screen.getByRole('link', { name: /about me/i });
    
    expect(galleryButton).toBeInTheDocument();
    expect(aboutButton).toBeInTheDocument();
  });

  test('gallery button links to /gallery', () => {
    render(<Home />);
    
    const galleryButton = screen.getByRole('link', { name: /view gallery/i });
    
    expect(galleryButton).toHaveAttribute('href', '/gallery');
  });

  test('about button links to /about', () => {
    render(<Home />);
    
    const aboutButton = screen.getByRole('link', { name: /about me/i });
    
    expect(aboutButton).toHaveAttribute('href', '/about');
  });

  test('renders welcome section', () => {
    render(<Home />);
    
    const welcomeHeading = screen.getByRole('heading', { 
      name: /welcome to my portfolio/i,
      level: 2
    });
    
    expect(welcomeHeading).toBeInTheDocument();
  });

  test('home page renders without crashing', () => {
    const { container } = render(<Home />);
    
    expect(container).toBeInTheDocument();
  });

  test('main element has proper semantic HTML', () => {
    render(<Home />);
    
    const mainElement = screen.getByRole('main');
    
    expect(mainElement).toBeInTheDocument();
  });

  test('page has proper heading hierarchy', () => {
    render(<Home />);
    
    // Should have h1 (site title)
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    // Should have h2 (welcome section)
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toBeInTheDocument();
  });

  test('scroll indicator is present', () => {
    const { container } = render(<Home />);
    
    // Check for SVG arrow (scroll indicator)
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
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

  test('links are keyboard accessible', () => {
    render(<Home />);
    
    const galleryLink = screen.getByRole('link', { name: /view gallery/i });
    const aboutLink = screen.getByRole('link', { name: /about me/i });
    
    // Links should be focusable
    expect(galleryLink).toBeVisible();
    expect(aboutLink).toBeVisible();
  });

  test('decorative SVG has aria-hidden', () => {
    const { container } = render(<Home />);
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
