import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-full max-w-[1800px] items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-base font-normal tracking-[0.16em] text-neutral-900 uppercase transition-colors hover:text-neutral-500 sm:text-lg"
        >
          Jonathan Mallett Photography
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="text-xs font-normal tracking-[0.18em] text-neutral-900 uppercase transition-colors hover:text-neutral-500 sm:text-sm"
          >
            Portfolio
          </Link>

          <Link
            href="/about"
            className="text-xs font-normal tracking-[0.18em] text-neutral-900 uppercase transition-colors hover:text-neutral-500 sm:text-sm"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
