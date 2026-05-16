import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

/**
 * Dynamic Category Gallery Page Component
 * 
 * Displays a grid of photos for a specific category (Sport, Nature, or Places).
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
      { id: 0, src: "/photos/categories/sport-ls.jpg", alt: "Sport photography" },
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
      { id: 27, src: "/photos/sport/sport-27-ls.jpg", alt: "Sport photography" },
    ],
  },
  nature: {
    title: "Nature",
    description: "Nature's beauty in its purest form",
    photos: [
      { id: 35, src: "/photos/nature/Nature-35-ls.jpg", alt: "Wildlife photography" },
      { id: 0, src: "/photos/nature/wildlife-ls.jpg", alt: "Wildlife photography" },
      { id: 1, src: "/photos/nature/wildlife-1.jpg", alt: "Wildlife photography" },
      { id: 2, src: "/photos/nature/wildlife-2-ls.jpg", alt: "Wildlife photography" },
      { id: 3, src: "/photos/nature/wildlife-3-ls.jpg", alt: "Wildlife photography" },
      { id: 4, src: "/photos/nature/wildlife-4-ls.jpg", alt: "Wildlife photography" },
      { id: 5, src: "/photos/nature/wildlife-5.jpg", alt: "Wildlife photography" },
      { id: 6, src: "/photos/nature/wildlife-6.jpg", alt: "Wildlife photography" },
      { id: 7, src: "/photos/nature/wildlife-7-ls.jpg", alt: "Wildlife photography" },
      { id: 8, src: "/photos/nature/wildlife8.jpg", alt: "Wildlife photography" },
      { id: 10, src: "/photos/nature/wildlife-10-ls.jpg", alt: "Wildlife photography" },
      { id: 11, src: "/photos/nature/wildlife-11-ls.jpg", alt: "Wildlife photography" },
      { id: 12, src: "/photos/nature/wildlife-12-ls.jpg", alt: "Wildlife photography" },
      { id: 13, src: "/photos/nature/wildlife-13-ls.jpg", alt: "Wildlife photography" },
      { id: 14, src: "/photos/nature/wildlife-14-ls.jpg", alt: "Wildlife photography" },
      { id: 15, src: "/photos/nature/wildlife-15-ls.jpg", alt: "Wildlife photography" },
      { id: 17, src: "/photos/nature/wildlife-17-ls.jpg", alt: "Wildlife photography" },
      { id: 18, src: "/photos/nature/wildlife-18-ls.jpg", alt: "Wildlife photography" },
      { id: 19, src: "/photos/nature/wildlife-19.jpg", alt: "Wildlife photography" },
      { id: 20, src: "/photos/nature/wildlife-20.jpg", alt: "Wildlife photography" },
      { id: 21, src: "/photos/nature/wildlife-21-ls.jpg", alt: "Wildlife photography" },
      { id: 22, src: "/photos/nature/wildlife-22-ls.jpg", alt: "Wildlife photography" },
      { id: 27, src: "/photos/nature/wildlife-27-ls.jpg", alt: "Wildlife photography" },
      { id: 28, src: "/photos/nature/wildlife-28-ls.jpg", alt: "Wildlife photography" },
      { id: 29, src: "/photos/nature/wildlife-29-ls.jpg", alt: "Wildlife photography" },
      { id: 30, src: "/photos/nature/wildlife-30.jpg", alt: "Wildlife photography" },
      { id: 31, src: "/photos/nature/wildlife-31.jpg", alt: "Wildlife photography" },
      { id: 32, src: "/photos/nature/wildlife-32.jpg", alt: "Wildlife photography" },
      { id: 33, src: "/photos/nature/wildlife-33.jpg", alt: "Wildlife photography" },
    ],
  },
  places: {
    title: "Places",
    description: "Stories from around the world",
    photos: [
      { id: 116, src: "/photos/places/places-ls.jpg", alt: "Travel photography" },
      { id: 115, src: "/photos/places/Places-115-ls.jpg", alt: "Travel photography" },
      { id: 114, src: "/photos/places/Places-114-ls.jpg", alt: "Travel photography" },
      { id: 113, src: "/photos/places/Places-113-ls.jpg", alt: "Travel photography" },
      { id: 112, src: "/photos/places/Places-112-ls.jpg", alt: "Travel photography" },
      { id: 111, src: "/photos/places/Places-111-ls.jpg", alt: "Travel photography" },
      { id: 101, src: "/photos/places/Travel101.jpg", alt: "Travel photography" },
      { id: 102, src: "/photos/places/Travel102.jpg", alt: "Travel photography" },
      { id: 103, src: "/photos/places/Travel103.jpg", alt: "Travel photography" },
      { id: 104, src: "/photos/places/Travel104.jpg", alt: "Travel photography" },
      { id: 105, src: "/photos/places/Travel105.jpg", alt: "Travel photography" },
      { id: 106, src: "/photos/places/Travel106.jpg", alt: "Travel photography" },
      { id: 107, src: "/photos/places/Travel107.jpg", alt: "Travel photography" },
      { id: 108, src: "/photos/places/Travel108.jpg", alt: "Travel photography" },
      { id: 109, src: "/photos/places/Travel109.jpg", alt: "Travel photography" },
      { id: 1, src: "/photos/places/travel-117.jpg", alt: "Travel photography" },
      { id: 2, src: "/photos/places/travel-2.jpg", alt: "Travel photography" },
      { id: 3, src: "/photos/places/travel-3-ls.jpg", alt: "Travel photography" },
      { id: 4, src: "/photos/places/travel-4-ls.jpg", alt: "Travel photography" },
      { id: 5, src: "/photos/places/travel-5-ls.jpg", alt: "Travel photography" },
      { id: 6, src: "/photos/places/travel-6-ls.jpg", alt: "Travel photography" },
      { id: 8, src: "/photos/places/travel-8-ls.jpg", alt: "Travel photography" },
      { id: 11, src: "/photos/places/travel-11-ls.jpg", alt: "Travel photography" },
      { id: 12, src: "/photos/places/travel-12.jpg", alt: "Travel photography" },
      { id: 14, src: "/photos/places/travel-14.jpg", alt: "Travel photography" },
      { id: 15, src: "/photos/places/Travel-15-ls.jpg", alt: "Travel photography" },
      { id: 17, src: "/photos/places/travel-17.jpg", alt: "Travel photography" },
      { id: 18, src: "/photos/places/travel-18-ls.jpg", alt: "Travel photography" },
      { id: 19, src: "/photos/places/travel-19-ls.jpg", alt: "Travel photography" },
      { id: 20, src: "/photos/places/travel-20.jpg", alt: "Travel photography" },
      { id: 21, src: "/photos/places/travel-21-ls.jpg", alt: "Travel photography" },
      { id: 22, src: "/photos/places/travel-22-ls.jpg", alt: "Travel photography" },
      { id: 23, src: "/photos/places/travel-23-ls.jpg", alt: "Travel photography" },
      { id: 25, src: "/photos/places/travel-25.jpg", alt: "Travel photography" },
      { id: 26, src: "/photos/places/travel-26.jpg", alt: "Travel photography" },
      { id: 27, src: "/photos/places/travel-27.jpg", alt: "Travel photography" },
      { id: 28, src: "/photos/places/travel-28-ls.jpg", alt: "Travel photography" },
      { id: 29, src: "/photos/places/travel-29.jpg", alt: "Travel photography" },
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
    { category: 'places' },
    { category: 'nature' },
    { category: 'sport' },
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
