import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { collections } from '@/content/collections';
import { photoImageSrc, selectPhotos } from '@/content/photos';

export const metadata: Metadata = {
  title: 'Work | Jonathan Mallett Photography',
  description: 'A selection of photographs by Jonathan Mallett, from places and wildlife to sport.',
};

export default function Work() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pb-24 pt-12 sm:px-8 sm:pb-36 sm:pt-16 lg:px-14">
        <h1 className="sr-only">Selected work</h1>
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {collections.map((collection) => (
            <section key={collection.id} aria-labelledby={`collection-${collection.id}`}>
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id={`collection-${collection.id}`} className="text-2xl tracking-tight sm:text-3xl">{collection.title}</h2>
                </div>
                <Link href={`/work/${collection.slug}`} className="shrink-0 text-sm underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-500">View collection <span className="sr-only">{collection.title}</span><span aria-hidden="true"> ↗</span></Link>
              </div>
              <Link href={`/work/${collection.slug}`} aria-label={`View ${collection.title} collection`} className="group grid grid-cols-2 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 sm:grid-cols-3 sm:gap-6 lg:gap-8">
                {selectPhotos(collection.previewPhotoIds).map((photo) => (
                  <Image key={photo.id} src={photoImageSrc(photo.src)} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 639px) 50vw, (max-width: 1600px) 33vw, 480px" className="max-h-[320px] w-full object-contain transition-opacity duration-300 group-hover:opacity-90" />
                ))}
              </Link>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}