// app/returns/page.tsx
"use client";

import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Returns & Refund Policy</h1>
        <p className="text-sm text-gray-400">Effective Date: August 8, 2025</p>

        <p>
          At <span className="font-semibold">Noir Desire</span>, your satisfaction matters to us. However, due to the intimate nature of our products, we maintain strict hygiene standards to ensure your safety and privacy.
        </p>

        <h2 className="text-2xl font-semibold">1. Eligibility for Returns</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>We only accept returns or exchanges for items that are received damaged, defective, or incorrect.</li>
          <li>Requests must be made within <strong>48 hours</strong> of receiving your order.</li>
          <li>Items must be <strong>unused, unworn, unwashed, and in original packaging</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Non-Returnable Items</h2>
        <p>
          For hygiene and safety reasons, we do <strong>not accept returns</strong> or exchanges on:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lingerie, bodysuits, or any intimate wear</li>
          <li>BDSM gear or toys once packaging is opened</li>
          <li>Custom or made-to-order items</li>
          <li>Items purchased during sales, promotions, or clearance</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Refunds (if applicable)</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>If your return is approved, your refund will be processed to your original payment method.</li>
          <li>Refunds may take 5–10 business days depending on your bank or payment provider.</li>
          <li>Shipping fees are non-refundable.</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. How to Request a Return</h2>
        <p>Please follow these steps to request a return:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>Email us at <strong>support@noirdesire.com</strong> within 48 hours of receiving your item.</li>
          <li>Include your order number and clear photos of the item(s) showing the damage or issue.</li>
          <li>Wait for confirmation and instructions before shipping anything back.</li>
        </ol>

        <h2 className="text-2xl font-semibold">5. Return Shipping</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You are responsible for covering return shipping costs unless the product was sent in error.</li>
          <li>Please use a trackable shipping method. We are not responsible for lost returns.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need an exchange, follow the return request process and mention your preferred replacement.
        </p>

        <h2 className="text-2xl font-semibold">7. Questions?</h2>
        <p>
          For any questions or concerns regarding returns or refunds, don’t hesitate to reach out:
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
