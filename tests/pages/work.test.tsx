import { render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';
import Work from '@/app/work/page';
import CollectionPage, { generateMetadata, generateStaticParams } from '@/app/work/[slug]/page';
import { collections } from '@/content/collections';
import { homePhotos, photoImageSrc, selectPhotos } from '@/content/photos';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

test('shows configured collection previews and links in order', () => {
  render(<Work />);
  expect(screen.getByRole('heading', { name: 'Selected work', level: 1 })).toHaveClass('sr-only');
  expect(screen.queryByText('A collection of photographs from places visited, moments noticed and time spent looking.')).not.toBeInTheDocument();
  expect(screen.queryByText('The portfolio')).not.toBeInTheDocument();
  expect(screen.getAllByRole('img').map((image) => image.getAttribute('src'))).toEqual(collections.flatMap((collection) => selectPhotos(collection.previewPhotoIds).map((photo) => photoImageSrc(photo.src))));
  for (const collection of collections) {
    expect(screen.getByRole('heading', { name: collection.title, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: `View ${collection.title} collection` })).toHaveAttribute('href', `/work/${collection.slug}`);
    if (collection.description) expect(screen.queryByText(collection.description)).not.toBeInTheDocument();
  }
});

test('uses the requested preview photographs in order', () => {
  render(<Work />);
  expect(screen.getAllByRole('img').map((image) => image.getAttribute('src'))).toEqual([
    '/photos/places/Places_New_York3.jpg', '/photos/places/Places_New_York4.jpg', '/photos/places/Places_New_York1.jpg',
    '/photos/nature/Nature_Birds1.jpg', '/photos/nature/Nature_Landscape2.jpg', '/photos/nature/Nature_Landscape6.jpg',
    '/photos/sport/Motorsport2.jpg', '/photos/sport/Motorsport3.jpg', '/photos/sport/Motorsport8.jpg',
  ].map(photoImageSrc));
});

test('does not advertise stories before projects are added', () => {
  render(<Work />);
  expect(screen.queryByRole('link', { name: 'Stories' })).not.toBeInTheDocument();
});

test('homepage and portfolio preview paths exist with exact filename casing', () => {
  const photos = [...homePhotos, ...collections.flatMap((collection) => selectPhotos(collection.previewPhotoIds))];
  photos.forEach((photo) => {
    const relative = photo.src.replace(/^\//, '');
    const directory = path.join(process.cwd(), 'public', path.dirname(relative));
    expect(fs.readdirSync(directory)).toContain(path.basename(relative));
  });
});

test.each([
  ['places', ['Places_New_York', 'Places_Marrakech', 'Places_UK', 'Places_Italy', 'Places_Portugal', 'Places_Netherlands']],
  ['nature', ['Nature_Birds', 'Nature_Landscape', 'Nature_Doug']],
  ['sport', ['Motorsport']],
] as const)('uses existing %s images in the requested order', (folder, groups) => {
  const collection = collections.find((item) => selectPhotos(item.photoIds)[0].src.startsWith(`/photos/${folder}/`))!;
  const names = selectPhotos(collection.photoIds).map((photo) => path.basename(photo.src));
  const available = fs.readdirSync(path.join(process.cwd(), 'public', 'photos', folder))
    .filter((name) => /\.(jpe?g|png|webp)$/i.test(name));
  const expected = groups.flatMap((group) => available.filter((name) => name.startsWith(group))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })));
  if (folder === 'places') {
    const newYorkOne = expected.indexOf('Places_New_York1.jpg');
    const [photo] = expected.splice(newYorkOne, 1);
    expected.splice(expected.indexOf('Places_New_York4.jpg') + 1, 0, photo);
    const marrakechTwo = expected.indexOf('Places_Marrakech2.jpg');
    const [marrakechPhoto] = expected.splice(marrakechTwo, 1);
    expected.splice(expected.indexOf('Places_Marrakech9.jpg') + 1, 0, marrakechPhoto);
  }
  groups.forEach((group) => expect(available.some((name) => name.startsWith(group))).toBe(true));
  expect(new Set(names).size).toBe(names.length);
  expect(expected).toHaveLength(available.length);
  expect(names).toEqual(expected);
});

test.each(collections)('renders the $title gallery and metadata', async (collection) => {
  const props = { params: Promise.resolve({ slug: collection.slug }) };
  expect(generateStaticParams()).toContainEqual({ slug: collection.slug });
  expect(await generateMetadata(props)).toMatchObject({ title: `${collection.title} | Jonathan Mallett Photography` });
  render(await CollectionPage(props));
  expect(screen.getByRole('heading', { name: collection.title, level: 1 })).toBeInTheDocument();
  if (collection.description) expect(screen.queryByText(collection.description)).not.toBeInTheDocument();
  expect(screen.getAllByRole('img').map((image) => image.getAttribute('src'))).toEqual(selectPhotos(collection.photoIds).map((photo) => photoImageSrc(photo.src)));
  expect(screen.getAllByRole('figure')[0].parentElement).toHaveClass('md:grid-cols-2');
  selectPhotos(collection.photoIds).forEach((photo, index) => {
    const figure = screen.getAllByRole('figure')[index];
    if (photo.height > photo.width) {
      expect(figure).toHaveClass('max-w-[calc(min(75vh,600px)*var(--photo-ratio))]');
      expect(figure.style.getPropertyValue('--photo-ratio')).toBe(String(photo.width / photo.height));
    } else {
      expect(figure).not.toHaveClass('justify-self-center');
    }
  });
  expect(screen.getAllByRole('link', { name: /^portfolio$/i })).toHaveLength(3);
  screen.getAllByRole('link', { name: /^portfolio$/i }).forEach((link) => expect(link).toHaveAttribute('href', '/work'));
});

test('unknown collections return not found', async () => {
  await expect(CollectionPage({ params: Promise.resolve({ slug: 'unknown' }) })).rejects.toThrow();
});