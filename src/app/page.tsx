import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { productData } from "./utils/productData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 px-6 bg-black text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
          {productData.slice(0, 3).map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
