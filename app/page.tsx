import Image from "next/image";
import Header from "@/components/Header";

/**
 * Home Page Component
 * 
 * Minimalist landing page for Jonathan Mallett Photography.
 * Inspired by Alan Schaller's clean, elegant design.
 * 
 * Features:
 * - Simple header with navigation
 * - Large hero image showcasing photography
 * - Minimal text, maximum impact
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section - Full Screen Image */}
      <main className="relative h-screen w-full">
        <Image
          src="/photos/hero.jpg"
          alt="Featured photograph by Jonathan Mallett"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
        />
        
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-px bg-white/50" />
        </div>
      </main>

      {/* Copyright Footer */}
      <div className="bg-black text-white text-center py-6 text-sm font-light text-gray-400">
        © {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.
      </div>
    </div>
  );
}
