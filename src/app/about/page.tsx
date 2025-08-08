"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Full Background Image */}
      <Image
        src="/assets/aboutbg.jpg"
        alt="About Noir Desire Background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Page Content Over Background */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section className="h-96 w-full flex items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            About Noir Desire
          </h1>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-darkRed mb-6">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            At Noir Desire, we believe in empowering self-expression through bold, high-quality kink fashion.
            We craft every piece with intention—fusing elegance, sensuality, and confidence.
            Our products are designed for those who embrace both power and passion in their identity.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-darkRed mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Founded in 2025, Noir Desire started with a dream: to redefine kinkwear as high fashion.
              What began as a small passion project has grown into a premium brand trusted by explorers, creators,
              and lovers around the world. Our team consists of designers and artisans dedicated to quality and detail,
              pushing boundaries while keeping sophistication at the center.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-semibold text-darkRed mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-zinc-800/80 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-white">Empowerment</h3>
              <p className="text-gray-300 text-sm">
                We encourage self-expression and celebrate individuality through kinkwear.
              </p>
            </div>
            <div className="bg-zinc-800/80 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-white">Elegance</h3>
              <p className="text-gray-300 text-sm">
                Designs that reflect luxury, grace, and bold sophistication.
              </p>
            </div>
            <div className="bg-zinc-800/80 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-white">Consent & Respect</h3>
              <p className="text-gray-300 text-sm">
                Core pillars in our message, product choices, and community presence.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
