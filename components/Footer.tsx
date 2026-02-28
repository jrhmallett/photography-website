import Link from "next/link";

/**
 * Footer Component
 * 
 * Site-wide footer with copyright and social links.
 * Minimal design matching the overall aesthetic.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-light tracking-wide hover:text-gray-300 transition-colors">
              Jonathan Mallett Photography
            </Link>
            <p className="mt-2 text-sm font-light text-gray-400">
              A curated collection of travel, wildlife, sport, and people photography.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-light tracking-widest uppercase text-gray-400">
              Navigate
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-sm font-light text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-light tracking-widest uppercase text-gray-400">
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:contact@jonathanmallett.com" 
                className="text-sm font-light text-gray-300 hover:text-white transition-colors"
              >
                contact@jonathanmallett.com
              </a>
              {/* Add social media links as needed */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-sm font-light text-gray-400">
            © {currentYear} Jonathan Mallett Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
