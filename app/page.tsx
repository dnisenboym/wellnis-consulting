'use client';

import { useState } from 'react';

export default function Page() {
  // 👉 ВСТАВЬТЕ сюда ваш адрес из Formspree (пример: "https://formspree.io/f/abcdwxyz")
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/abcdwxyz";

  const [status, setStatus] = useState<"idle"|"loading"|"sent"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const services = [
    { title: "Consulting for Clinics & Founders", desc: "End-to-end help selecting devices and designing safe, effective wellness programs (SOPs, consents, staff training, KPIs)." },
    { title: "1:1 Coaching for Individuals", desc: "Personalized guidance on lifestyle, sleep, nutrition, training, and supplement strategies with clear weekly actions." },
    { title: "Peptides & Longevity Protocols", desc: "Evidence-informed roadmaps: goals, dosing frameworks, cycles, safety notes, and when to speak with your clinician." },
    { title: "NAD+ Programs", desc: "IV / IM / oral strategies, titration and scheduling, interactions/contraindications, recovery and performance use-cases." },
    { title: "Red / Infrared Light Therapy", desc: "Device selection, dosage (irradiance • time • distance), skin, pain, recovery and circadian protocols." },
    { title: "Advanced Modalities", desc: "PEMF, HBOT/EBOT, cryo, sauna, breathwork; stack design and progression plans that fit real life." },
  ];

  const socials = [
    { name: "Instagram", href: "https://instagram.com/heal_yourself_david", handle: "@heal_yourself_david" },
    { name: "Email", href: "mailto:d.nisenboym@gmail.com", handle: "d.nisenboym@gmail.com" },
    { name: "Phone", href: "tel:+13054505709", handle: "+1 (305) 450-5709" },
    { name: "WhatsApp", href: "https://wa.me/13054505709", handle: "Chat on WhatsApp" },
    { name: "Telegram", href: "https://t.me/wellnisconsult", handle: "@wellnisconsult" },
  ];

  const faqs = [
    { q: "Who do you work with?", a: "Clinics, spas, gyms, founders—and motivated individuals who want practical, safe, and results-driven wellness." },
    { q: "How does an engagement start?", a: "Begin with a 30–60 minute consult. Then choose an implementation sprint (2–6 weeks) or a monthly advisory plan." },
    { q: "Do you implement on site?", a: "Yes. For clinics I build SOPs, train staff, and help vet vendors/devices. For individuals we set metrics and weekly actions." },
  ];

  // Локальные картинки из /public (загрузите туда эти файлы!)
  const gallery = [
    { src: "/fitness.jpg", alt: "Active recovery / athlete" },
    { src: "/meditation.jpg", alt: "Calm breath / meditation" },
    { src: "/iv-drip.jpg", alt: "IV therapy / vitamins & peptides" },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value ?? "",
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? "",
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? "",
      _subject: "New inquiry from wellness-consulting site",
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const txt = await res.text();
        setErrorMsg(txt || "Submission failed.");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error.");
      setStatus("error");
    }
  }

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
          {gallery.map(({ src, alt }) => (
            <figure key={src} className="relative rounded-2xl overflow-hidden border border-zinc-200" style={{ aspectRatio: '4 / 3' }}>
              <img src={src} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
              <div className="pointer-events-none absolute inset-0 bg-sky-200/20 mix-blend-multiply" />
              <figcaption className="sr-only">{alt}</figcaption>
            </figure>
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

          {status === "sent" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-emerald-700 font-medium">Thanks! I’ll get back to you shortly.</p>
              <p className="text-emerald-700 mt-1 text-sm">Your message has been received.</p>
              <button
                className="mt-4 rounded-2xl px-4 py-2 text-sm font-medium border border-emerald-300 hover:bg-emerald-100"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              {status === "error" && (
                <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700 text-sm">
                  Oops, something went wrong. {errorMsg || "Please try again."}
                </div>
              )}

              <form className="grid md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <input name="name" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Name" required />
                <input name="email" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Email" type="email" required />
                <textarea name="message" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2" rows={5} placeholder="What do you want to improve?" required />
                <button
                  className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max disabled:opacity-60"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Send"}
                </button>
              </form>
            </>
          )}

          {/* Quick contacts */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Call: +1 (305) 450-5709</a>
            <a href="mailto:d.nisenboym@gmail.com" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Email: d.nisenboym@gmail.com</a>
            <a href="https://wa.me/13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 hover:bg-green-50">WhatsApp</a>
            <a href="https://t.me/wellnisconsult" className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 hover:bg-sky-50">Telegram</a>
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
            <a href="https://instagram.com/heal_yourself_david" className="hover:opacity-80">Instagram</a>
            <a href="https://t.me/wellnisconsult" className="hover:opacity-80">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
