import Header from "@/components/Header";
import GalleryGrid from "@/components/GalleryGrid";

const photos = [
  { id: 1, src: "/photos/places/places-marrakech-7.jpg", alt: "Marrakech travel photography" },
  { id: 2, src: "/photos/places/places-marrakech-8.jpg", alt: "Marrakech travel photography" },
  { id: 3, src: "/photos/places/places-marrakech-9.jpg", alt: "Marrakech travel photography" },
  { id: 4, src: "/photos/places/places-marrakech-12.jpg", alt: "Marrakech travel photography" },
  { id: 5, src: "/photos/places/places-marrakech-14.jpg", alt: "Marrakech travel photography" },
  { id: 6, src: "/photos/places/places-marrakech-17.jpg", alt: "Marrakech travel photography" },
  { id: 7, src: "/photos/places/places-marrakech-20.jpg", alt: "Marrakech travel photography" },
  { id: 8, src: "/photos/places/places-switzerland-1.jpg", alt: "Switzerland travel photography" },
  { id: 9, src: "/photos/places/places-switzerland-3.jpg", alt: "Switzerland travel photography" },
  { id: 10, src: "/photos/places/places-switzerland-6.jpg", alt: "Switzerland travel photography" },
  { id: 11, src: "/photos/places/places-uk-25.jpg", alt: "UK travel photography" },
  { id: 12, src: "/photos/places/places-uk-23.jpg", alt: "UK travel photography" },
  { id: 13, src: "/photos/places/places-uk-26.jpg", alt: "UK travel photography" },
  { id: 14, src: "/photos/places/places-italy-35.jpg", alt: "Italy travel photography" },
  { id: 15, src: "/photos/sport/sport-silverstone-2026-1.jpg", alt: "Silverstone 2026 sport photography" },
  { id: 16, src: "/photos/sport/sport-silverstone-2026-3.jpg", alt: "Silverstone 2026 sport photography" },
  { id: 17, src: "/photos/sport/sport-silverstone-2026-4.jpg", alt: "Silverstone 2026 sport photography" },
  { id: 18, src: "/photos/sport/sport-silverstone-2026-5.jpg", alt: "Silverstone 2026 sport photography" },
  { id: 19, src: "/photos/sport/sport-silverstone-2026-6.jpg", alt: "Silverstone 2026 sport photography" },
  { id: 20, src: "/photos/sport/sport-silverstone-2025-24.jpg", alt: "Silverstone 2025 sport photography" },
  { id: 21, src: "/photos/sport/sport-silverstone-2025-11.jpg", alt: "Silverstone 2025 sport photography" },
  { id: 22, src: "/photos/nature/Nature-birds-1.jpg", alt: "Birds wildlife photography" },
  { id: 23, src: "/photos/nature/nature-birds-5.jpg", alt: "Birds wildlife photography" },
  { id: 24, src: "/photos/nature/nature-birds-8.jpg", alt: "Birds wildlife photography" },
  { id: 25, src: "/photos/nature/nature-birds-9.jpg", alt: "Birds wildlife photography" },
  { id: 26, src: "/photos/nature/nature-birds-14.jpg", alt: "Birds wildlife photography" },
  { id: 27, src: "/photos/nature/nature-birds-15.jpg", alt: "Birds wildlife photography" },
  { id: 28, src: "/photos/nature/nature-birds-18.jpg", alt: "Birds wildlife photography" },
  { id: 29, src: "/photos/nature/nature-birds-19.jpg", alt: "Birds wildlife photography" },
  { id: 30, src: "/photos/nature/nature-birds-22.jpg", alt: "Birds wildlife photography" },
  { id: 31, src: "/photos/nature/nature-birds-23.jpg", alt: "Birds wildlife photography" },
  { id: 32, src: "/photos/nature/nature-birds-29.jpg", alt: "Birds wildlife photography" },
  { id: 33, src: "/photos/nature/nature-birds-31.jpg", alt: "Birds wildlife photography" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main className="px-4 pb-8 pt-24 sm:px-6 sm:pt-28">
        <GalleryGrid photos={photos} />
      </main>
    </div>
  );
}
