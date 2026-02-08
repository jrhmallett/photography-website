import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";

/**
 * Dynamic Category Gallery Page Component
 * 
 * Displays a grid of photos for a specific category (Sport, Wildlife, or Travel).
 * Uses Next.js dynamic routes to handle multiple categories with one component.
 */

// Define available categories and their photo collections
const categoryData: Record<string, {
  title: string;
  description: string;
  photos: Array<{
    id: number;
    src: string;
    alt: string;
    title?: string;
  }>;
}> = {
  sport: {
    title: "Sport",
    description: "Athletic moments and competitive spirit",
    photos: [
      { id: 1, src: "/photos/sport/sport-1.jpg", alt: "Sport photography 1", title: "Action Shot" },
      { id: 2, src: "/photos/sport/sport-2.jpg", alt: "Sport photography 2", title: "Training" },
      { id: 3, src: "/photos/sport/sport-3.jpg", alt: "Sport photography 3", title: "Victory" },
      { id: 4, src: "/photos/sport/sport-4.jpg", alt: "Sport photography 4", title: "Intensity" },
      { id: 5, src: "/photos/sport/sport-5.jpg", alt: "Sport photography 5", title: "Focus" },
      { id: 6, src: "/photos/sport/sport-6.jpg", alt: "Sport photography 6", title: "Movement" },
    ],
  },
  wildlife: {
    title: "Wildlife",
    description: "Nature's beauty in its purest form",
    photos: [
      { id: 1, src: "/photos/wildlife/wildlife-1.jpg", alt: "Wildlife photography 1", title: "In the Wild" },
      { id: 2, src: "/photos/wildlife/wildlife-2.jpg", alt: "Wildlife photography 2", title: "Natural Habitat" },
      { id: 3, src: "/photos/wildlife/wildlife-3.jpg", alt: "Wildlife photography 3", title: "Untamed" },
      { id: 4, src: "/photos/wildlife/wildlife-4.jpg", alt: "Wildlife photography 4", title: "Grace" },
      { id: 5, src: "/photos/wildlife/wildlife-5.jpg", alt: "Wildlife photography 5", title: "Instinct" },
      { id: 6, src: "/photos/wildlife/wildlife-6.jpg", alt: "Wildlife photography 6", title: "Majesty" },
    ],
  },
  travel: {
    title: "Travel",
    description: "Stories from around the world",
    photos: [
      { id: 1, src: "/photos/travel/travel-1.jpg", alt: "Travel photography 1", title: "Wanderlust" },
      { id: 2, src: "/photos/travel/travel-2.jpg", alt: "Travel photography 2", title: "Culture" },
      { id: 3, src: "/photos/travel/travel-3.jpg", alt: "Travel photography 3", title: "Landscape" },
      { id: 4, src: "/photos/travel/travel-4.jpg", alt: "Travel photography 4", title: "Adventure" },
      { id: 5, src: "/photos/travel/travel-5.jpg", alt: "Travel photography 5", title: "Discovery" },
      { id: 6, src: "/photos/travel/travel-6.jpg", alt: "Travel photography 6", title: "Journey" },
    ],
  },
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: 'sport' },
    { category: 'wildlife' },
    { category: 'travel' },
  ];
}

export default async function CategoryGallery({ params }: PageProps) {
  const { category } = await params;
  
  // Check if category exists
  const data = categoryData[category];
  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Gallery Content */}
      <main className="pt-24 pb-12 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Category Header */}
          <div className="mb-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-sm font-light text-gray-400 hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Portfolio
            </Link>
            
            <h1 className="text-4xl font-light tracking-wide mb-2">
              {data.title}
            </h1>
          </div>

          {/* Photo Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                
                {/* Photo Title on Hover */}
                {photo.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-sm font-light tracking-wider uppercase">
                      {photo.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Copyright Footer */}
      <div className="bg-black text-white text-center py-6 text-sm font-light text-gray-400">
        © {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.
      </div>
    </div>
  );
}
