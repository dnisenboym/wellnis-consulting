'use client';

import Image from 'next/image';

export default function Page() {
  const services = [
    { title: "Consulting for Clinics & Founders", desc: "End-to-end help selecting devices and designing safe, effective wellness programs (SOPs, consents, staff training, KPIs)." },
    { title: "1:1 Coaching for Individuals", desc: "Personalized guidance on lifestyle, sleep, nutrition, training, and supplement strategies with clear weekly actions." },
    { title: "Peptides & Longevity Protocols", desc: "Evidence-informed roadmaps: goals, dosing frameworks, cycles, safety notes, and when to speak with your clinician." },
    { title: "NAD+ Programs", desc: "IV / IM / oral strategies, titration and scheduling, interactions/contraindications, recovery and performance use-cases." },
    { title: "Red / Infrared Light Therapy", desc: "Device selection, dosage (irradiance • time • distance), skin, pain, recovery and circadian protocols." },
    { title: "Advanced Modalities", desc: "PEMF, HBOT/EBOT, cryo, sauna, breathwork; stack design and progression plans that fit real life." },
  ];

  const socials = [
    { name: "Instagram", href: "https://instagram.com/", handle: "@wellness.consulting" },
    { name: "Email", href: "mailto:d.nisenboym@gmail.com", handle: "d.nisenboym@gmail.com" },
    { name: "Phone", href: "tel:+13054505709", handle: "+1 (305) 450-5709" },
    { name: "WhatsApp", href: "https://wa.me/13054505709", handle: "Chat on WhatsApp" },
    { name: "Telegram", href: "https://t.me/yourtelegramusername", handle: "@yourtelegramusername" },
  ];

  const faqs = [
    { q: "Who do you work with?", a: "Clinics, spas, gyms, founders—and motivated individuals who want practical, safe, and results-driven wellness." },
    { q: "How does an engagement start?", a: "Begin with a 30–60 minute consult. Then choose an implementation sprint (2–6 weeks) or a monthly advisory plan." },
    { q: "Do you implement on site?", a: "Yes. For clinics I build SOPs, train staff, and help vet vendors/devices. For individuals we set metrics and weekly actions." },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1587502536263-1d04e1b249d3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588776814546-2e64d5f2b32e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612158732275-34c829fcd6e3?q=80&w=1200&auto=format&fit=crop"
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">Wellness Consulting</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#results" className="hover:opacity-80">Results</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a href="#contact" className="rounded-2xl px-4 py-2 text-sm font-medium bg-zinc-900 text-white hover:opacity-90">Book a consult</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 text-xs border border-emerald-200 text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
            Clinics & Individuals • Evidence-informed • Safety-first
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Build a smarter wellness stack
            <span className="block text-zinc-500 text-[.9em] font-normal">
              Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern modalities that actually work.
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90">Start with a consult</a>
            <a href="#services" className="rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Explore services</a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Energy • Recovery • Longevity</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl">Wellness in action — simple, practical, sustainable.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {gallery.map((src) => (
            <div key={src} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200">
              <Image src={src} alt="Wellness visual" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl">
          Choose a focused implementation sprint or ongoing advisory. Every engagement ends with clear next steps and tools you can use tomorrow.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              I'm David, founder of Wellness Consulting. I advise clinics and individual clients on modern wellness strategies—
              from lifestyle foundations and supplements to peptides, NAD+, red/infrared light, and other modalities. My approach
              is simple: evidence-informed, practical, and safety-first.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a key={s.name} className="text-sm underline underline-offset-4 hover:no-underline" href={s.href} target="_blank" rel="noreferrer">
                  {s.name} <span className="text-zinc-500">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="font-medium">{f.q}</p>
              <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Book a consult</h2>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <input className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Name" />
            <input className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Email" type="email" />
            <textarea className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2" rows={5} placeholder="What do you want to improve?" />
            <button className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max">Send</button>
          </form>

          {/* Quick contacts */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Call: +1 (305) 450-5709</a>
            <a href="mailto:d.nisenboym@gmail.com" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Email: d.nisenboym@gmail.com</a>
            <a href="https://wa.me/13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 hover:bg-green-50">WhatsApp</a>
            <a href="https://t.me/yourtelegramusername" className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 hover:bg-sky-50">Telegram</a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Educational guidance only. Not medical advice. Consult your licensed clinician for diagnosis or treatment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Wellness Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
