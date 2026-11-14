import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

test('provides working links from the not-found page', () => {
  render(<NotFound />);

  expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/');
  expect(screen.getByRole('link', { name: 'View Portfolio' })).toHaveAttribute('href', '/work');
});