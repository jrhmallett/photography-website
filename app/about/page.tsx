import Image from "next/image";
import Header from "@/components/Header";

/**
 * About Page Component
 * 
 * Single page about Jonathan Mallett and his photography.
 * Clean, minimalist design with bio and information.
 */
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* About Content */}
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        {/* Profile Section */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Profile Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
            <Image
              src="/photos/profile.jpg"
              alt="Jonathan Mallett - Photographer"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Bio Text */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-light tracking-wide">
              Jonathan Mallett
            </h1>
            
            <div className="space-y-4 text-gray-300 font-light leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Contact/Social */}
            <div className="pt-4">
              <h2 className="mb-3 text-sm font-light tracking-widest uppercase text-gray-400">
                Get in touch
              </h2>
              <div className="flex flex-col gap-2 text-sm font-light">
                <a href="mailto:jrhmallett@gmail.com" className="hover:text-gray-400 transition-colors">
                  jrhmallett@gmail.com
                </a>
                {/* Add social media links as needed */}
              </div>
            </div>
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
