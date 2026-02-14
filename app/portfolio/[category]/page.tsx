import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

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
  people: {
    title: "People",
    description: "Human connection, portraits, and stories",
    photos: [
      { id: 1, src: "/photos/people/people-ls.jpg", alt: "People photography" },
      { id: 2, src: "/photos/people/people-2.jpg", alt: "People photography" },
      { id: 3, src: "/photos/people/people-3.jpg", alt: "People photography" },
      { id: 4, src: "/photos/people/people-4.jpg", alt: "People photography" },
      { id: 5, src: "/photos/people/people-5.jpg", alt: "People photography" },
      { id: 6, src: "/photos/people/people-6.jpg", alt: "People photography" },
      { id: 7, src: "/photos/people/people-7.jpg", alt: "People photography" },
      { id: 8, src: "/photos/people/people-8-ls.jpg", alt: "People photography" },
      { id: 9, src: "/photos/people/people-9.jpg", alt: "People photography" },
      { id: 10, src: "/photos/people/people-10.jpg", alt: "People photography" },
      { id: 11, src: "/photos/people/people-11-ls.jpg", alt: "People photography" },
      { id: 12, src: "/photos/people/people-12.jpg", alt: "People photography" },
    ],
  },
  sport: {
    title: "Sport",
    description: "Athletic moments and competitive spirit",
    photos: [
      { id: 0, src: "/photos/sport/sport-ls.jpg", alt: "Sport photography" },
      { id: 1, src: "/photos/sport/sport-1-ls.jpg", alt: "Sport photography" },
      { id: 2, src: "/photos/sport/sport-2-ls.jpg", alt: "Sport photography" },
      { id: 3, src: "/photos/sport/sport-3-ls.jpg", alt: "Sport photography" },
      { id: 4, src: "/photos/sport/sport-4-ls.jpg", alt: "Sport photography" },
      { id: 5, src: "/photos/sport/sport-5-ls.jpg", alt: "Sport photography" },
      { id: 6, src: "/photos/sport/sport-6-ls.jpg", alt: "Sport photography" },
      { id: 7, src: "/photos/sport/sport-7-ls.jpg", alt: "Sport photography" },
      { id: 8, src: "/photos/sport/sport-8-ls.jpg", alt: "Sport photography" },
      { id: 9, src: "/photos/sport/sport-9-ls.jpg", alt: "Sport photography" },
      { id: 10, src: "/photos/sport/sport-10-ls.jpg", alt: "Sport photography" },
      { id: 11, src: "/photos/sport/sport-11-ls.jpg", alt: "Sport photography" },
      { id: 13, src: "/photos/sport/sport-13-ls.jpg", alt: "Sport photography" },
      { id: 14, src: "/photos/sport/sport-14-ls.jpg", alt: "Sport photography" },
      { id: 15, src: "/photos/sport/sport-15-ls.jpg", alt: "Sport photography" },
      { id: 16, src: "/photos/sport/sport-16-ls.jpg", alt: "Sport photography" },
      { id: 17, src: "/photos/sport/sport-17-ls.jpg", alt: "Sport photography" },
      { id: 18, src: "/photos/sport/sport-18-ls.jpg", alt: "Sport photography" },
      { id: 19, src: "/photos/sport/sport-19-ls.jpg", alt: "Sport photography" },
      { id: 21, src: "/photos/sport/sport-21-ls.jpg", alt: "Sport photography" },
      { id: 22, src: "/photos/sport/sport-22-ls.jpg", alt: "Sport photography" },
      { id: 23, src: "/photos/sport/sport-23-ls.jpg", alt: "Sport photography" },
      { id: 24, src: "/photos/sport/sport-24-ls.jpg", alt: "Sport photography" },
      { id: 25, src: "/photos/sport/sport-25-ls.jpg", alt: "Sport photography" },
      { id: 26, src: "/photos/sport/sport-26-ls.jpg", alt: "Sport photography" },
    ],
  },
  wildlife: {
    title: "Wildlife",
    description: "Nature's beauty in its purest form",
    photos: [
      { id: 0, src: "/photos/wildlife/wildlife-ls.jpg", alt: "Wildlife photography" },
      { id: 1, src: "/photos/wildlife/wildlife-1.jpg", alt: "Wildlife photography" },
      { id: 2, src: "/photos/wildlife/wildlife-2-ls.jpg", alt: "Wildlife photography" },
      { id: 3, src: "/photos/wildlife/wildlife-3-ls.jpg", alt: "Wildlife photography" },
      { id: 4, src: "/photos/wildlife/wildlife-4-ls.jpg", alt: "Wildlife photography" },
      { id: 5, src: "/photos/wildlife/wildlife-5.jpg", alt: "Wildlife photography" },
      { id: 6, src: "/photos/wildlife/wildlife-6.jpg", alt: "Wildlife photography" },
      { id: 7, src: "/photos/wildlife/wildlife-7-ls.jpg", alt: "Wildlife photography" },
      { id: 8, src: "/photos/wildlife/wildlife8.jpg", alt: "Wildlife photography" },
      { id: 10, src: "/photos/wildlife/wildlife-10-ls.jpg", alt: "Wildlife photography" },
      { id: 11, src: "/photos/wildlife/wildlife-11-ls.jpg", alt: "Wildlife photography" },
      { id: 12, src: "/photos/wildlife/wildlife-12-ls.jpg", alt: "Wildlife photography" },
      { id: 13, src: "/photos/wildlife/wildlife-13-ls.jpg", alt: "Wildlife photography" },
      { id: 14, src: "/photos/wildlife/wildlife-14-ls.jpg", alt: "Wildlife photography" },
      { id: 15, src: "/photos/wildlife/wildlife-15-ls.jpg", alt: "Wildlife photography" },
      { id: 16, src: "/photos/wildlife/wildlife-16-ls.jpg", alt: "Wildlife photography" },
      { id: 17, src: "/photos/wildlife/wildlife-17-ls.jpg", alt: "Wildlife photography" },
      { id: 18, src: "/photos/wildlife/wildlife-18-ls.jpg", alt: "Wildlife photography" },
      { id: 19, src: "/photos/wildlife/wildlife-19.jpg", alt: "Wildlife photography" },
      { id: 20, src: "/photos/wildlife/wildlife-20.jpg", alt: "Wildlife photography" },
      { id: 21, src: "/photos/wildlife/wildlife-21-ls.jpg", alt: "Wildlife photography" },
      { id: 22, src: "/photos/wildlife/wildlife-22-ls.jpg", alt: "Wildlife photography" },
      { id: 23, src: "/photos/wildlife/wildlife-23-ls.jpg", alt: "Wildlife photography" },
      { id: 24, src: "/photos/wildlife/wildlife-24-ls.jpg", alt: "Wildlife photography" },
      { id: 25, src: "/photos/wildlife/wildlife-25-ls.jpg", alt: "Wildlife photography" },
      { id: 26, src: "/photos/wildlife/wildlife-26.jpg", alt: "Wildlife photography" },
      { id: 27, src: "/photos/wildlife/wildlife-27-ls.jpg", alt: "Wildlife photography" },
      { id: 28, src: "/photos/wildlife/wildlife-28-ls.jpg", alt: "Wildlife photography" },
      { id: 29, src: "/photos/wildlife/wildlife-29-ls.jpg", alt: "Wildlife photography" },
      { id: 30, src: "/photos/wildlife/wildlife-30.jpg", alt: "Wildlife photography" },
      { id: 31, src: "/photos/wildlife/wildlife-31.jpg", alt: "Wildlife photography" },
      { id: 32, src: "/photos/wildlife/wildlife-32.jpg", alt: "Wildlife photography" },
      { id: 33, src: "/photos/wildlife/wildlife-33.jpg", alt: "Wildlife photography" },
      { id: 34, src: "/photos/wildlife/wildlife-34.jpg", alt: "Wildlife photography" },
    ],
  },
  travel: {
    title: "Travel",
    description: "Stories from around the world",
    photos: [
      { id: 1, src: "/photos/travel/travel.jpg", alt: "Travel photography" },
      { id: 2, src: "/photos/travel/travel-2.jpg", alt: "Travel photography" },
      { id: 3, src: "/photos/travel/travel-3-ls.jpg", alt: "Travel photography" },
      { id: 4, src: "/photos/travel/travel-4-ls.jpg", alt: "Travel photography" },
      { id: 5, src: "/photos/travel/travel-5-ls.jpg", alt: "Travel photography" },
      { id: 6, src: "/photos/travel/travel-6-ls.jpg", alt: "Travel photography" },
      { id: 7, src: "/photos/travel/travel-7.jpg", alt: "Travel photography" },
      { id: 8, src: "/photos/travel/travel-8-ls.jpg", alt: "Travel photography" },
      { id: 9, src: "/photos/travel/travel-9.jpg", alt: "Travel photography" },
      { id: 10, src: "/photos/travel/travel-10.jpg", alt: "Travel photography" },
      { id: 11, src: "/photos/travel/travel-11-ls.jpg", alt: "Travel photography" },
      { id: 12, src: "/photos/travel/travel-12.jpg", alt: "Travel photography" },
      { id: 13, src: "/photos/travel/travel-13.jpg", alt: "Travel photography" },
      { id: 14, src: "/photos/travel/travel-14.jpg", alt: "Travel photography" },
      { id: 15, src: "/photos/travel/Travel-15-ls.jpg", alt: "Travel photography" },
      { id: 16, src: "/photos/travel/travel-16.jpg", alt: "Travel photography" },
      { id: 17, src: "/photos/travel/travel-17.jpg", alt: "Travel photography" },
      { id: 18, src: "/photos/travel/travel-18-ls.jpg", alt: "Travel photography" },
      { id: 19, src: "/photos/travel/travel-19-ls.jpg", alt: "Travel photography" },
      { id: 20, src: "/photos/travel/travel-20.jpg", alt: "Travel photography" },
      { id: 21, src: "/photos/travel/travel-21-ls.jpg", alt: "Travel photography" },
      { id: 22, src: "/photos/travel/travel-22-ls.jpg", alt: "Travel photography" },
      { id: 23, src: "/photos/travel/travel-23-ls.jpg", alt: "Travel photography" },
      { id: 24, src: "/photos/travel/travel-24-ls.jpg", alt: "Travel photography" },
      { id: 25, src: "/photos/travel/travel-25.jpg", alt: "Travel photography" },
      { id: 26, src: "/photos/travel/travel-26.jpg", alt: "Travel photography" },
      { id: 27, src: "/photos/travel/travel-27.jpg", alt: "Travel photography" },
      { id: 28, src: "/photos/travel/travel-28-ls.jpg", alt: "Travel photography" },
      { id: 29, src: "/photos/travel/travel-29.jpg", alt: "Travel photography" },
      { id: 30, src: "/photos/travel/travel-30.jpg", alt: "Travel photography" },
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
    { category: 'travel' },
    { category: 'wildlife' },
    { category: 'sport' },
    { category: 'people' },
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

          {/* Photo Grid - Masonry style with varying heights */}
          <GalleryGrid photos={data.photos} />
        </div>
      </main>

      {/* Copyright Footer */}
      <div className="bg-black text-white text-center py-6 text-sm font-light text-gray-400">
        © {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.
      </div>
    </div>
  );
}
