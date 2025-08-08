import { productData } from "@/app/utils/productData";
import Image from "next/image";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);
  const product = productData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg">
          Product not found.{" "}
          <Link href="/" className="text-red-500 underline">
            Go back
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link href="/" className="text-gray-400 hover:text-red-500">
          Home
        </Link>{" "}
        &gt;{" "}
        <span className="text-gray-400">{product.category}</span> &gt;{" "}
        <span className="text-white">{product.name}</span>
      </nav>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="group relative">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-cover w-full transform group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-red-500 font-semibold mb-4">
            {product.price}
          </p>
          <p className="mb-6 text-gray-300">{product.description}</p>

          <p className="text-sm text-gray-400 mb-1">
            <span className="font-semibold">Collection:</span>{" "}
            {product.collection}
          </p>
          <p className="text-sm text-gray-400 mb-6">
            <span className="font-semibold">Category:</span>{" "}
            {product.category}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
              Add to Cart
            </button>
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
