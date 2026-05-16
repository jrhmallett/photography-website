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
    <div className="relative h-screen overflow-hidden bg-black">
      <Header />

      {/* Hero Section - Scales with viewport and avoids page scroll */}
      <main className="relative mt-20 h-[calc(100vh-5rem)] w-full">
        <Image
          src="/photos/Hero.jpg"
          alt="Featured photograph by Jonathan Mallett"
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
          quality={75}
        />
        
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </main>

      {/* Copyright Footer */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 bg-black/70 text-white text-center py-4 text-sm font-light text-gray-300 backdrop-blur-sm">
        © {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.
      </div>
    </div>
  );
}
