// app/[collection]/page.tsx
"use client";

import ProductCard from "@/app/components/ProductCard";
import { productData } from "@/app/utils/productData";

export default function CollectionPage({ params }: { params: { collections: string } }) {
  const collectionSlug = params.collections?.toLowerCase();

  const filtered = productData.filter(
    (p) => p.collection.toLowerCase() === collectionSlug
  );

  if (!collectionSlug) {
    return <div className="p-10 text-white">Invalid collection</div>;
  }

  if (filtered.length === 0) {
    return <div className="p-10 text-white">No products found in this collection.</div>;
  }

  return (
    <div className="p-6 md:p-12 bg-black text-white min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 capitalize">
        {collectionSlug.replace("-", " ")} Collection
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
