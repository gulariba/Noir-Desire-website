// app/shop/page.tsx

import Link from "next/link";
import { productData } from "@/app/utils/productData";
import ProductCard from "@/app/components/ProductCard";

export default function ShopPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productData.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <Link href={`/product/${product.id}`}>
              <p className="mt-2 underline text-red-500 hover:text-red-400">
                View Details
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
