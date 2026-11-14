import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { stories } from '@/content/stories';

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  return story ? { title: `${story.title} | Jonathan Mallett Photography`, description: story.introduction } : {};
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 sm:pb-36 lg:px-14">
        <div className="py-20 sm:py-28">
          <Link href="/stories" className="text-xs uppercase tracking-[0.16em] text-neutral-500 hover:text-neutral-900">← All stories</Link>
          <h1 className="mt-8 text-4xl tracking-[-0.045em] sm:text-5xl">{story.title}</h1>
          {story.introduction && <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{story.introduction}</p>}
        </div>
        <GalleryGrid photos={story.photos} />
        <Link href="/work" className="mt-20 inline-block text-sm underline decoration-neutral-300 underline-offset-4 hover:text-neutral-500">Portfolio</Link>
      </main>
      <Footer />
    </>
  );
}