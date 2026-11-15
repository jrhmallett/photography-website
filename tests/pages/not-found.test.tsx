import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

test('provides a working home link without a portfolio link', () => {
  render(<NotFound />);

  expect(screen.getByRole('link', { name: 'Go Home' })).toHaveAttribute('href', '/');
  expect(screen.queryByRole('link', { name: 'View Portfolio' })).not.toBeInTheDocument();
});