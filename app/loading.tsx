/**
 * Loading State Component
 * 
 * Displays while pages are loading (SSR/SSG).
 * Simple spinner matching the minimalist design.
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-white" />
        <p className="mt-4 text-sm font-light tracking-wider uppercase text-gray-400">
          Loading
        </p>
      </div>
    </div>
  );
}
