import Image from "next/image";

/**
 * Home Page Component
 * 
 * The landing page for Jonathan's Photography portfolio.
 * Features a hero image with site title and tagline.
 * 
 * Story 2.1: Basic Home Page with Hero Image
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/hero.jpg"
            alt="Featured photography showcasing Jonathan's work - landscape photograph"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Jonathan&apos;s Photography
          </h1>
          <p className="max-w-2xl text-xl text-gray-200 md:text-2xl">
            Capturing moments, telling stories through the lens
          </p>
          
          {/* Call to Action */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="/gallery"
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105"
            >
              View Gallery
            </a>
            <a
              href="/about"
              className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-black"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Featured Section - Placeholder for future content */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-black md:text-4xl">
            Welcome to My Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-700">
            Explore my collection of photography work, from landscapes to portraits.
            Each image tells a unique story captured through my lens.
          </p>
        </div>
      </section>
    </main>
  );
}
