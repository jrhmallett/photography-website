import Link from 'next/link';
import { stories } from '@/content/stories';

export default function Header() {
  return (
    <header className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
      <nav aria-label="Main navigation" className="flex min-h-24 items-center justify-between gap-5 border-b border-neutral-200 py-6 sm:min-h-28">
        <Link href="/" className="text-sm font-medium tracking-tight transition-colors hover:text-neutral-500 sm:text-base">
          Jonathan Mallett <span className="font-normal text-neutral-500">Photography</span>
        </Link>
        <div className="flex items-center gap-5 text-xs sm:gap-9 sm:text-sm">
          <Link href="/work" className="transition-colors hover:text-neutral-500">Portfolio</Link>
          {stories.length > 0 && <Link href="/stories" className="transition-colors hover:text-neutral-500">Stories</Link>}
          <Link href="/about" className="transition-colors hover:text-neutral-500">About</Link>
        </div>
      </nav>
    </header>
  );
}