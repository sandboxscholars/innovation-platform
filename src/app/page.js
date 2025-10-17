import React from "react";
import Image from "next/image";


export default function HomePage() {
  return (
    <main
      className="font-sans bg-[#a4c2db] text-black min-h-screen p-8 lg:p-16 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl">
        {/* Headings */}
        <div className="sm:grid sm:grid-cols-3 mb-2 sm:mb-0 sm:items-center">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-semibold sm:font-bold col-span-2"
            aria-label="Hello there!"
          >
            Hello there!
          </h1>
          {/* Red X Icon (SVG syntax corrected and shadow simplified) */}
          <div className="hidden sm:flex items-center justify-end w-15 h-15 md:w-23 md:h-23 lg:w-24 lg:h-24 flex-shrink-0">
            <svg
              className="w-full h-full text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true" 
            >
              <defs>
                <filter id="shadow">
                  <feDropShadow 
                    dx="3"
                    dy="3"
                    stdDeviation="2"
                    floodColor="rgba(0,0,0,0.3)"
                  />
                </filter>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                filter="url(#shadow)"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold leading-tight mb-2">
          Looks like you are a bit too early...
          <br />
          This webpage is under construction.
        </h2>
        <article className="text-lg sm:text-xl font-medium max-w-3xl mb-10 md:mb-0 space-y-4">
          <p>
            We are still working hard on polishing our webpage. Just a few final
            touches and our online presence is all set for our audience!
          </p>
          <p>Have a great day!</p>
        </article>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {/* Contact Box */}
          <div className="p-5 border border-black max-w-xs text-lg rounded-lg shadow-lg bg-white/10 relative">
            <p className="mb-1">If any queries</p>
            <a
              href="mailto:sandboxscholars.team@gmail.com"
              className="text-lg font-medium sm:font-bold underline hover:text-red-700 transition duration-150"
              aria-label="Contact Us via Email: sandboxscholars.team@gmail.com"
            >
              Contact Us
            </a>
            <div className="mt-4 pt-4 pb-6 border-t border-black/30">
              <p className="text-lg sm:text-xl font-medium sm:font-bold mb-1">
                Sandbox Scholars team
              </p>
              <p className="text-base text-gray-700">
                sandboxscholars.team@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full h-80 lg:col-span-2 hidden md:block relative">
            <Image
              src="/under-construction.png"
              fill
              className="object-contain max-w-[80%] max-h-[80%] lg:max-w-[100%] lg:max-h-[100%] md:mx-auto" 
              alt="An illustration of an under construction sign and a worker"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px" 
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}