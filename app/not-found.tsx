import Link from "next/link";

/**
 * Custom 404 Not Found Page
 * 
 * Displayed when a user navigates to a non-existent route.
 * Maintains the minimalist design aesthetic.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-light tracking-wide mb-4">404</h1>
        <h2 className="text-2xl font-light tracking-wide mb-6 text-gray-300">
          Page Not Found
        </h2>
        <p className="text-gray-400 font-light mb-8 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/portfolio"
            className="px-6 py-3 border border-white/20 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
