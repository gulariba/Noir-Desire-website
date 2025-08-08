// app/terms/page.tsx
"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="text-sm text-gray-400">Effective Date: August 8, 2025</p>

        <p>
          Welcome to <span className="font-semibold">Noir Desire</span>. By accessing our website or placing an order, you agree to the terms outlined below. Please read them carefully before using our services.
        </p>

        <h2 className="text-2xl font-semibold">1. Use of the Website</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>You must be at least 18 years old to access or purchase from our store.</li>
          <li>You agree not to misuse the website or engage in any illegal or prohibited activity.</li>
          <li>All content, images, and designs are the property of Noir Desire and may not be reused without permission.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Products & Descriptions</h2>
        <p>
          We strive to ensure that all product descriptions and images are accurate. However, slight variations in color or design may occur. We reserve the right to modify or discontinue any product at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold">3. Pricing & Payments</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>All prices are listed in PKR (or your selected currency) and are inclusive of applicable taxes.</li>
          <li>We accept payments via secure gateways (e.g., EasyPaisa, JazzCash, Bank Transfer).</li>
          <li>We reserve the right to correct any errors in pricing or product information.</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Shipping & Delivery</h2>
        <p>
          We aim to process and dispatch all orders within 1–3 business days. Delivery timelines may vary depending on your location. Noir Desire is not responsible for delays caused by courier services.
        </p>

        <h2 className="text-2xl font-semibold">5. Returns & Exchanges</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Due to the intimate nature of our products, returns or exchanges are only accepted in case of damage or defect.</li>
          <li>Requests must be made within 48 hours of delivery and include photo evidence.</li>
          <li>No return will be accepted for used or opened products for hygiene reasons.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
        <p>
          All content, branding, and visuals on this website are owned by Noir Desire. Any unauthorized reproduction or use may result in legal action.
        </p>

        <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
        <p>
          Noir Desire shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or products. All items are used at the buyer’s own discretion and responsibility.
        </p>

        <h2 className="text-2xl font-semibold">8. Privacy</h2>
        <p>
          Your privacy is important to us. Please refer to our <Link href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link> to understand how your information is collected and used.
        </p>

        <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms & Conditions at any time. Continued use of the website signifies your agreement to the latest version.
        </p>

        <h2 className="text-2xl font-semibold">10. Contact</h2>
        <p>
          For questions about these Terms & Conditions, please contact us at:
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
