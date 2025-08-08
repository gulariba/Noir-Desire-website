"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: August 8, 2025</p>

        <p>
          At <span className="font-semibold">Noir Desire</span>, we value your privacy. This Privacy Policy describes how we collect, use, and protect your information when you visit our website or make a purchase from us.
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personal Information: Name, email address, phone number, shipping address.</li>
          <li>Payment Details: Processed securely via third-party services (e.g., Stripe, EasyPaisa).</li>
          <li>Usage Data: Pages visited, time spent, browser/device info.</li>
          <li>Cookies: For user session management and analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To process and deliver your orders.</li>
          <li>To improve our website experience and services.</li>
          <li>To communicate order updates, promotions, and support messages.</li>
          <li>To ensure secure transactions and fraud protection.</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
        <p>
          We do <strong>not sell</strong> your personal information. However, we may share your information with:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Trusted payment providers to process transactions.</li>
          <li>Shipping companies to fulfill your orders.</li>
          <li>Analytics tools to understand site usage (e.g., Google Analytics).</li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Data Retention</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>

        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Opt-out of marketing communications at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information. However, no online platform is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
        <p>
          Our site may contain links to other websites. We are not responsible for the privacy practices or content of those sites.
        </p>

        <h2 className="text-2xl font-semibold">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date.
        </p>

        <h2 className="text-2xl font-semibold">9. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p className="text-gray-300">
          <strong>Email:</strong> support@yourcompany.com
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
