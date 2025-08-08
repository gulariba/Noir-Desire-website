"use client";

import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  collection: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg shadow-lg">
      {/* Optimized Image Container */}
      <div className="relative w-full h-64 rounded overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority // Optional: for better LCP
        />
      </div>

      {/* Product Info */}
      <h2 className="text-xl font-bold mt-4 text-white">{product.name}</h2>
      <p className="text-sm text-gray-300 mt-1">{product.description}</p>
      <p className="mt-2 text-lg font-semibold text-red-500">{product.price}</p>
    </div>
  );
}
