import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { homePhotos } from '@/content/photos';
import { stories } from '@/content/stories';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <section aria-labelledby="selected-work" className="pb-24 pt-6 sm:pb-36 sm:pt-8">
          <h1 id="selected-work" className="sr-only">Selected photography</h1>
          <GalleryGrid photos={homePhotos} masonry />
        </section>

        {stories.length > 0 && (
          <section className="border-t border-neutral-200 py-20 sm:py-28">
            <h2 className="text-xs uppercase tracking-[0.16em] text-neutral-500">Featured stories</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {stories.map((story) => <Link key={story.slug} href={`/stories/${story.slug}`} className="border-b border-neutral-200 pb-5 text-2xl tracking-tight hover:text-neutral-500">{story.title} <span aria-hidden="true">↗</span></Link>)}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}