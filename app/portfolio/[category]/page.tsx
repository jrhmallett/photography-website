import Link from "next/link";
import { notFound } from "next/navigation";
import { readdir } from "node:fs/promises";
import path from "node:path";
import Header from "@/components/Header";
import GroupedGalleryGrid from "@/components/GroupedGalleryGrid";

/**
 * Dynamic Category Gallery Page Component
 * 
 * Displays a grid of photos for a specific category (Sport, Nature, or Places).
 * Uses Next.js dynamic routes to handle multiple categories with one component.
 */

const categoryData: Record<string, {
  title: string;
  description: string;
  folder: string;
}> = {
  sport: {
    title: "Sport",
    description: "Athletic moments and competitive spirit",
    folder: "sport",
  },
  nature: {
    title: "Nature",
    description: "Nature's beauty in its purest form",
    folder: "nature",
  },
  places: {
    title: "Places",
    description: "Stories from around the world",
    folder: "places",
  },
};

interface GalleryPhoto {
  id: number;
  src: string;
  alt: string;
}

interface GalleryGroup {
  heading: string;
  photos: GalleryPhoto[];
  sortLabel: string;
  sortYear?: number;
  sortStart?: number;
  sortEnd?: number;
}

const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const toDisplayText = (value: string) => {
  if (value.toLowerCase() === "uk") {
    return "UK";
  }

  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
};

async function buildGroupedGallery(category: string): Promise<GalleryGroup[]> {
  const categoryConfig = categoryData[category];

  if (!categoryConfig) {
    return [];
  }

  const photoDir = path.join(process.cwd(), "public", "photos", categoryConfig.folder);
  const fileNames = await readdir(photoDir);

  const groups = new Map<string, { heading: string; sortLabel: string; sortYear?: number; sortStart?: number; sortEnd?: number; photos: Array<{ src: string; alt: string; sequence: number }> }>();

  for (const fileName of fileNames) {
    if (fileName.startsWith(".")) {
      continue;
    }

    const extension = path.extname(fileName).toLowerCase();
    if (!supportedExtensions.has(extension)) {
      continue;
    }

    if (category === "places") {
      const match = fileName.match(/^places-(.+)-(\d+)\.(jpg|jpeg|png|webp)$/i);
      if (!match) {
        continue;
      }

      const countrySlug = match[1].toLowerCase();
      const sequence = Number.parseInt(match[2], 10);
      const groupKey = countrySlug;
      const heading = toDisplayText(countrySlug);
      const existing = groups.get(groupKey) ?? { heading, sortLabel: heading, sortStart: sequence, sortEnd: sequence, photos: [] };

      existing.sortStart = Math.min(existing.sortStart ?? sequence, sequence);
      existing.sortEnd = Math.max(existing.sortEnd ?? sequence, sequence);

      existing.photos.push({
        src: `/photos/places/${fileName}`,
        alt: `${heading} travel photography`,
        sequence,
      });

      groups.set(groupKey, existing);
      continue;
    }

    if (category === "sport") {
      const match = fileName.match(/^sport-(.+)-(\d{4})-(\d+)\.(jpg|jpeg|png|webp)$/i);
      if (!match) {
        continue;
      }

      const placeSlug = match[1].toLowerCase();
      const year = Number.parseInt(match[2], 10);
      const sequence = Number.parseInt(match[3], 10);
      const place = toDisplayText(placeSlug);
      const heading = `${place} ${year}`;
      const groupKey = `${placeSlug}-${year}`;
      const existing = groups.get(groupKey) ?? { heading, sortLabel: place, sortYear: year, photos: [] };

      existing.photos.push({
        src: `/photos/sport/${fileName}`,
        alt: `${heading} sport photography`,
        sequence,
      });

      groups.set(groupKey, existing);
      continue;
    }

    if (category === "nature") {
      const match = fileName.match(/^nature-(.+)-(\d+)\.(jpg|jpeg|png|webp)$/i);
      if (!match) {
        continue;
      }

      const animalSlug = match[1].toLowerCase();
      const sequence = Number.parseInt(match[2], 10);
      const heading = toDisplayText(animalSlug);
      const groupKey = animalSlug;
      const existing = groups.get(groupKey) ?? { heading, sortLabel: heading, photos: [] };

      existing.photos.push({
        src: `/photos/nature/${fileName}`,
        alt: `${heading} wildlife photography`,
        sequence,
      });

      groups.set(groupKey, existing);
    }
  }

  const sortedGroups = Array.from(groups.values()).sort((a, b) => {
    if (category === "places") {
      const startDiff = (a.sortStart ?? Number.MAX_SAFE_INTEGER) - (b.sortStart ?? Number.MAX_SAFE_INTEGER);
      if (startDiff !== 0) {
        return startDiff;
      }

      const endDiff = (a.sortEnd ?? Number.MAX_SAFE_INTEGER) - (b.sortEnd ?? Number.MAX_SAFE_INTEGER);
      if (endDiff !== 0) {
        return endDiff;
      }
    }

    if (category === "sport") {
      const yearDiff = (b.sortYear ?? 0) - (a.sortYear ?? 0);
      if (yearDiff !== 0) {
        return yearDiff;
      }
    }

    return a.sortLabel.localeCompare(b.sortLabel);
  });

  return sortedGroups.map((group) => {
    const sortedPhotos = group.photos
      .sort((a, b) => a.sequence - b.sequence)
      .map((photo, index) => ({
        id: index + 1,
        src: photo.src,
        alt: photo.alt,
      }));

    return {
      heading: group.heading,
      photos: sortedPhotos,
      sortLabel: group.sortLabel,
      sortYear: group.sortYear,
        sortStart: group.sortStart,
        sortEnd: group.sortEnd,
    };
  });
}

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

  const groupedPhotos = await buildGroupedGallery(category);

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

          {/* Grouped Photo Grids with shared lightbox navigation */}
          <GroupedGalleryGrid groups={groupedPhotos} />
        </div>
      </main>

      {/* Copyright Footer */}
      <div className="bg-black text-white text-center py-6 text-sm font-light text-gray-400">
        © {new Date().getFullYear()} Jonathan Mallett Photography. All rights reserved.
      </div>
    </div>
  );
}
