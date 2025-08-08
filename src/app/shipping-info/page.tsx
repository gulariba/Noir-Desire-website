// app/shipping-info/page.tsx
"use client";

import Link from "next/link";

export default function ShippingInfoPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Shipping Information</h1>
        <p className="text-sm text-gray-400">Last updated: August 8, 2025</p>

        <p>
          At <span className="font-semibold">Noir Desire</span>, we understand the excitement of receiving your order. Our shipping process is fast, secure, and discreet — designed to ensure your privacy and satisfaction.
        </p>

        <h2 className="text-2xl font-semibold">1. Processing Time</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Orders are typically processed within 1–3 business days (excluding weekends & public holidays).</li>
          <li>You will receive an order confirmation email immediately after placing your order and a tracking link once shipped.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Shipping Methods & Timelines</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Standard Delivery (Pakistan):</strong> 3–5 business days</li>
          <li><strong>Express Delivery:</strong> 1–2 business days (available in major cities)</li>
          <li><strong>International Shipping:</strong> Currently unavailable. (Coming soon)</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Shipping Charges</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Delivery charges vary by location and order weight.</li>
          <li>Free shipping is available on orders over PKR 5000.</li>
          <li>All applicable shipping costs will be displayed at checkout.</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Discreet Packaging</h2>
        <p>
          All orders from Noir Desire are shipped in plain, unmarked packaging without any logos or labels related to the contents. Your privacy is always our top priority.
        </p>

        <h2 className="text-2xl font-semibold">5. Delays & Tracking</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Once dispatched, you will receive a tracking number via SMS or email.</li>
          <li>We are not responsible for courier delays, strikes, or delivery failures due to incorrect address details.</li>
          <li>Please track your parcel and contact the courier if it’s delayed beyond the estimated time.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Delivery Issues</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>If your package is marked as delivered but hasn’t been received, contact us immediately.</li>
          <li>Ensure someone is available to receive the parcel at the shipping address during delivery hours.</li>
        </ul>

        <h2 className="text-2xl font-semibold">7. Need Help?</h2>
        <p>
          For shipping-related questions or urgent concerns, feel free to contact our support team.
        </p>
        <p className="text-gray-300">
          <strong>Email:</strong> support@noirdesire.com
          <br />
          <strong>Phone:</strong> +92 300 1234567
        </p>

        <div className="pt-8">
          <Link href="/" className="text-blue-400 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
