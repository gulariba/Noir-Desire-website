"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: Send to backend or service
  };

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="bg-zinc-900 py-20 text-center">
        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        <p className="mt-4 text-gray-400">
          We&apos;d love to hear from you. Whether it&apos;s questions, collaborations, or custom requests.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-darkRed">Contact Information</h2>
          <p className="text-gray-400">Reach out to us through the following ways:</p>

          <div className="text-gray-300 space-y-2">
            <p><strong>Email:</strong> contact@noirdesire.com</p>
            <p><strong>Phone:</strong> +92 300 1234567</p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-darkRed">Business Hours</h3>
            <p className="text-gray-400 text-sm">Monday – Friday: 10am to 6pm</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-darkRed mb-6">Send Us a Message</h2>
          {submitted ? (
            <div className="text-green-400 bg-zinc-800 p-6 rounded-lg">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-darkRed hover:bg-red-700 transition px-6 py-3 rounded text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
