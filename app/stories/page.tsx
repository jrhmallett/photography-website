import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { stories } from '@/content/stories';

export const metadata = { title: 'Stories | Jonathan Mallett Photography' };

export default function Stories() {
  if (stories.length === 0) notFound();
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[60vh] max-w-[1600px] px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:px-14">
        <h1 className="text-4xl tracking-[-0.045em] sm:text-5xl">Stories</h1>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {stories.map((story) => <Link key={story.slug} href={`/stories/${story.slug}`} className="border-t border-neutral-200 pt-5 text-2xl tracking-tight hover:text-neutral-500">{story.title} <span aria-hidden="true">↗</span></Link>)}
        </div>
      </main>
      <Footer />
    </>
  );
}