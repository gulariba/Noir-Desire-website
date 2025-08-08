"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white mt-18">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Noir Desire</h2>
          <p className="text-sm mt-4 text-gray-300">
            Explore your deepest desires with premium kink fashion, built for
            elegance and passion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/shipping-info">Shipping Info</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
          </ul>
        </div>

        {/* Social + Payment */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect</h3>
          <div className="flex items-center gap-4 mt-4 text-gray-300">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl hover:text-white" />
            </a>
            <a href="mailto:contact@noirdesire.com" aria-label="Email">
              <FaEnvelope className="text-xl hover:text-white" />
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <Image src="/payments/visa.png" alt="Visa" width={40} height={24} />
            <Image src="/payments/mastercard.png" alt="MasterCard" width={40} height={24} />
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 text-center text-sm py-4 text-gray-400">
        &copy; {new Date().getFullYear()} Noir Desire. All rights reserved.
      </div>
    </footer>
  );
}
