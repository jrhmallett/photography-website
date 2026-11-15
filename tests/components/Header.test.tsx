/**
 * Header Component - Unit Tests
 * 
 * Tests for the shared navigation header component.
 * Validates navigation links and structure.
 */

import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  test('renders site name link', () => {
    render(<Header />);
    
    const siteName = screen.getByRole('link', { name: /jonathan mallett photography/i });
    expect(siteName).toBeInTheDocument();
    expect(siteName).toHaveAttribute('href', '/');
  });

  test('renders About navigation link', () => {
    render(<Header />);
    
    const aboutLink = screen.getByRole('link', { name: /^about$/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  test('has proper semantic HTML structure', () => {
    const { container } = render(<Header />);
    
    const header = container.querySelector('header');
    const nav = container.querySelector('nav');
    
    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });

  test('all navigation links are present', () => {
    render(<Header />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2); // Home and About
  });

  test('does not render a separate Portfolio link', () => {
    render(<Header />);

    expect(screen.queryByRole('link', { name: /^portfolio$/i })).not.toBeInTheDocument();
  });
});

describe('Header Accessibility', () => {
  test('all links are keyboard accessible', () => {
    render(<Header />);
    
    const links = screen.getAllByRole('link');
    
    links.forEach((link) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href');
    });
  });

  test('navigation has appropriate structure', () => {
    const { container } = render(<Header />);
    
    const header = container.querySelector('header');
    const nav = container.querySelector('nav');
    
    expect(header).toContainElement(nav);
  });
});
