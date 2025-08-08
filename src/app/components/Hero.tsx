"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image using Next.js Image */}
      <Image
        src="/assets/bg2.jpg"
        alt="Kink Fashion Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 bg-black/50">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-800 leading-tight">
            Unleash Your Dark Elegance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-4 sm:mt-6">
            Discover bold, refined kink fashion built for confidence and connection.
          </p>
          <Link href="/shop">
            <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-red-800 hover:bg-red-700 transition rounded text-white text-sm sm:text-base font-semibold uppercase tracking-wide">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
