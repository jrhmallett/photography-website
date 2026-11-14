import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | Jonathan Mallett Photography',
  description: 'About Jonathan Mallett and his approach to photography.',
};

export default function About() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1600px] px-5 pb-24 sm:px-8 sm:pb-36 lg:px-14">
        <h1 className="sr-only">About Jonathan Mallett</h1>
        <div className="grid items-start gap-12 pt-12 md:grid-cols-12 md:gap-10 md:pt-16">
          <div className="max-w-sm md:col-span-4">
            <Image src="/photos/about/profile.jpg" alt="Jonathan Mallett, photographer" width={1200} height={1600} sizes="(max-width: 767px) 80vw, 33vw" className="h-auto w-full" />
          </div>
          <div className="max-w-xl space-y-5 text-base leading-8 text-neutral-700 md:col-span-7 md:col-start-6">
            <p>My interest in photography developed later in life, initially as a way of capturing everyday moments and things that caught my attention. Over time, this has grown into exploring different genres and ways of shooting, which is reflected in the variety of photographs I take. I&apos;ve also found that photography helps me slow down and pay more attention to what&apos;s happening around me.</p>
            <p>I enjoy trying different types of photography and I don&apos;t have one particular subject or style that I stick to. I tend to photograph whatever interests me at the time, whether that&apos;s places, nature, sport or something completely different.</p>
            <div className="pt-6">
              <h2 className="text-xs uppercase tracking-[0.16em] text-neutral-500">Get in touch</h2>
              <a href="mailto:contact@jonathanmallett.com" className="mt-3 inline-block text-sm underline decoration-neutral-300 underline-offset-4 hover:text-neutral-500">contact@jonathanmallett.com</a>
              <Link href="/work" className="ml-6 inline-block text-sm underline decoration-neutral-300 underline-offset-4 hover:text-neutral-500">View the work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}