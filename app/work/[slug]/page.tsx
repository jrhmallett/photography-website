import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { collections } from '@/content/collections';
import { selectPhotos } from '@/content/photos';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  return collection ? { title: `${collection.title} | Jonathan Mallett Photography`, description: collection.description } : {};
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 sm:pb-36 lg:px-14">
        <div className="pb-10 pt-5 sm:pb-12 sm:pt-6">
          <Link href="/work" className="text-xs uppercase tracking-[0.16em] text-neutral-500 transition-colors hover:text-neutral-900"><span aria-hidden="true">← </span>Portfolio</Link>
          <h1 className="mt-8 text-4xl tracking-[-0.045em] sm:text-5xl lg:text-6xl">{collection.title}</h1>
        </div>
        <GalleryGrid photos={selectPhotos(collection.photoIds)} balancedLayout />
        <Link href="/work" className="mt-16 inline-block text-sm underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-500"><span aria-hidden="true">← </span>Portfolio</Link>
      </main>
      <Footer />
    </>
  );
}