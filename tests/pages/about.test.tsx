/**
 * About Page - Unit Tests
 * 
 * Tests for the About page featuring profile image, bio, and philosophy.
 * Validates layout, navigation, and content structure.
 */

import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

// Mock Next.js Image and Link components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('About Page', () => {
  test('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  test('renders site name in header', () => {
    render(<About />);
    
    const siteNameLinks = screen.getAllByRole('link', { name: /jonathan mallett photography/i });
    expect(siteNameLinks[0]).toBeInTheDocument();
    expect(siteNameLinks[0]).toHaveAttribute('href', '/');
  });

  test('renders navigation links', () => {
    render(<About />);
    
    const aboutLinks = screen.getAllByRole('link', { name: /about/i });
    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i });
    
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(portfolioLinks.length).toBeGreaterThan(0);
  });

  test('renders main heading with photographer name', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', { name: /^jonathan mallett$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders profile image', () => {
    render(<About />);
    
    const profileImage = screen.getByAltText(/jonathan mallett/i);
    expect(profileImage).toBeInTheDocument();
  });

  test('renders bio text', () => {
    render(<About />);
    
    const bioTexts = screen.getAllByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit/i);
    expect(bioTexts.length).toBeGreaterThan(0);
  });

  test('renders contact email section', () => {
    render(<About />);
    
    const contactHeading = screen.getByRole('heading', { name: /get in touch/i, level: 2 });
    expect(contactHeading).toBeInTheDocument();
  });

  test('email link is present and correct', () => {
    render(<About />);
    
    const emailLinks = screen.getAllByRole('link', { name: /contact@jonathanmallett.com/i });
    expect(emailLinks[0]).toBeInTheDocument();
    expect(emailLinks[0]).toHaveAttribute('href', 'mailto:contact@jonathanmallett.com');
  });

  test('has main element', () => {
    render(<About />);
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});

describe('About Page Accessibility', () => {
  test('all images have alt text', () => {
    render(<About />);
    
    const images = screen.getAllByRole('img');
    
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  test('proper heading hierarchy', () => {
    render(<About />);
    
    // Should have h1 (About)
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    // Should have h2 sections
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
    
    // Should have h3 for categories - none now since philosophy section removed
    const h3Elements = screen.queryAllByRole('heading', { level: 3 });
    expect(h3Elements.length).toBe(0);
  });

  test('all navigation links are keyboard accessible', () => {
    render(<About />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
    });
  });

  test('email link has proper mailto protocol', () => {
    render(<About />);
    
    const emailLinks = screen.getAllByRole('link', { name: /contact@jonathanmallett.com/i });
    expect(emailLinks[0].getAttribute('href')).toMatch(/^mailto:/);
  });
});
