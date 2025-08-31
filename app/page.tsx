'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mqadbyqj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus("SUCCESS");
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Build a smarter wellness stack</h1>
        <p className="text-lg text-gray-600 mb-6">
          Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern modalities that actually work.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#consult" className="px-6 py-3 bg-green-600 text-white rounded-lg">Start with a consult</a>
          <a href="#services" className="px-6 py-3 border rounded-lg">Explore services</a>
        </div>
      </section>

      {/* Services with images */}
      <section id="services" className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Energy • Recovery • Longevity</h2>
        <p className="text-center text-gray-600 mb-8">
          Wellness in action — simple, practical, sustainable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=800&q=80"
              alt="Active recovery / athlete"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center font-semibold">Active recovery / athlete</div>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
              alt="Calm breath / meditation"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center font-semibold">Calm breath / meditation</div>
          </div>
          <div className="rounded-lg overflow-hidden shadow">
            <Image
              src="https://images.unsplash.com/photo-1631372994374-94b1e1b324f1?auto=format&fit=crop&w=800&q=80"
              alt="IV therapy / vitamins & peptides"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4 text-center font-semibold">IV therapy / vitamins & peptides</div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="consult" className="mb-16 p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Book a consult</h2>
        {status === "SUCCESS" && (
          <p className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Thanks! We’ll get back to you shortly.
          </p>
        )}
        {status === "ERROR" && (
          <p className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            Something went wrong. Please try again.
          </p>
        )}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="border rounded p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="border rounded p-2"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="border rounded p-2"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+13054505709" className="px-4 py-2 border rounded-lg">
            Call: +1 (305) 450-5709
          </a>
          <a href="mailto:d.nisenboym@gmail.com" className="px-4 py-2 border rounded-lg">
            Email: d.nisenboym@gmail.com
          </a>
          <a href="https://instagram.com/heal_yourself_david" target="_blank" className="px-4 py-2 border rounded-lg bg-pink-100">
            Instagram
          </a>
          <a href="https://wa.me/13054505709" target="_blank" className="px-4 py-2 border rounded-lg bg-green-100">
            WhatsApp
          </a>
          <a href="https://t.me/wellnisconsult" target="_blank" className="px-4 py-2 border rounded-lg bg-blue-100">
            Telegram
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Educational guidance only. Not medical advice. Consult your licensed clinician for diagnosis or treatment.
        </p>
      </footer>
    </main>
  );
}
