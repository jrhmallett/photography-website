import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

/**
 * Portfolio Landing Page Component
 * 
 * Category selection page for different photography styles.
 * Users click on a category (Sport, Wildlife, Travel) to view that gallery.
 */

const categories = [
  {
    slug: "travel",
    title: "Travel",
    description: "Global stories, diverse cultures, breathtaking landscapes",
    image: "/photos/categories/travel.jpg",
  },
  {
    slug: "wildlife",
    title: "Wildlife",
    description: "Nature's beauty, untamed creatures, natural habitats",
    image: "/photos/categories/wildlife-ls.jpg",
  },
  {
    slug: "sport",
    title: "Sport",
    description: "Athletic moments, peak performance, competitive spirit",
    image: "/photos/categories/sport-ls.jpg",
  },
  {
    slug: "people",
    title: "People",
    description: "Human connection, portraits, and stories",
    image: "/photos/categories/people-ls.jpg",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Portfolio Categories */}
      <main className="pt-24 pb-12 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-light tracking-wide mb-4">
              Portfolio
            </h1>
          </div>

          {/* Category Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="group relative aspect-[3/4] overflow-hidden bg-gray-900"
              >
                {/* Category Image */}
                <Image
                  src={category.image}
                  alt={`${category.title} photography by Jonathan Mallett`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60" />

                {/* Category Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 text-center">
                  <h2 className="text-3xl font-light tracking-wide">
                    {category.title}
                  </h2>
                </div>
              </Link>
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
