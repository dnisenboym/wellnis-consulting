'use client';

import { useState } from 'react';

export default function Page() {
  const services = [
    { title: "Consulting for Clinics & Founders", desc: "End-to-end help selecting devices, peptides, protocols, SOPs, and staff training." },
    { title: "1:1 Coaching for Individuals", desc: "Personalized guidance on lifestyle, supplements, peptides, NAD+, and recovery therapies." },
    { title: "Peptides & Longevity Protocols", desc: "Evidence-informed roadmaps: goals, dosing strategies, titration, and scheduling." },
    { title: "NAD+ Programs", desc: "IV / IM / oral strategies for energy, brain health, and cellular repair." },
    { title: "Red / Infrared Light Therapy", desc: "Device selection, dosage, and integration into lifestyle routines." },
    { title: "Advanced Modalities", desc: "PEMF, HBOT/EBOT, cryo, sauna, breathwork; stacking protocols for better results." },
  ];

  const gallery = [
    { src: "/fitness.jpg", alt: "Active recovery / athlete" },
    { src: "/meditation.jpg", alt: "Calm breath / meditation" },
    { src: "/iv-drip.jpg", alt: "IV therapy / vitamins & peptides" },
  ];

  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="font-sans antialiased text-zinc-900">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build a smarter wellness stack
        </h1>
        <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
          Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern modalities that actually work.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90">
            Start with a consult
          </a>
          <a href="#services" className="rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">
            Explore services
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Energy • Recovery • Longevity</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl">Wellness in action — simple, practical, sustainable.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {gallery.map(({ src, alt }) => (
            <figure key={src} className="relative rounded-2xl overflow-hidden border border-zinc-200" style={{ aspectRatio: '4 / 3' }}>
              <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="pointer-events-none absolute inset-0 bg-sky-200/20 mix-blend-multiply" />
              <figcaption className="sr-only">{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Book a consult</h2>

          {submitted ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-700">
              <p className="font-medium">Thanks! I’ll get back to you shortly.</p>
            </div>
          ) : (
            <form
              className="mt-6 grid md:grid-cols-2 gap-4"
              action="https://formspree.io/f/mqadbyqj"
              method="POST"
              onSubmit={() => setSubmitted(true)}
            >
              <input
                name="name"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm"
                placeholder="Name"
                required
              />
              <input
                name="email"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm"
                placeholder="Email"
                type="email"
                required
              />
              <textarea
                name="message"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2"
                rows={5}
                placeholder="What do you want to improve?"
                required
              />
              <button
                type="submit"
                className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max"
              >
                Send
              </button>
            </form>
          )}

          {/* Quick contacts */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Call: +1 (305) 450-5709</a>
            <a href="mailto:d.nisenboym@gmail.com" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Email: d.nisenboym@gmail.com</a>
            <a href="https://instagram.com/heal_yourself_david" className="rounded-2xl px-4 py-2 text-sm font-medium border border-pink-300 hover:bg-pink-50">Instagram</a>
            <a href="https://wa.me/13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 hover:bg-green-50">WhatsApp</a>
            <a href="https://t.me/wellnisconsult" className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 hover:bg-sky-50">Telegram</a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Educational guidance only. Not medical advice. Consult your licensed clinician for diagnosis or treatment.
          </p>
        </div>
      </section>
    </main>
  );
}
