import Link from "next/link";

/**
 * Header Component
 * 
 * Shared navigation header used across all pages.
 * Features a fixed position with backdrop blur for a modern glass effect.
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Site Title */}
          <Link 
            href="/" 
            className="text-xl font-light tracking-wide text-white hover:text-gray-300 transition-colors"
          >
            Jonathan Mallett Photography
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/portfolio" 
              className="text-sm font-light tracking-wider text-white hover:text-gray-300 transition-colors uppercase"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-light tracking-wider text-white hover:text-gray-300 transition-colors uppercase"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
