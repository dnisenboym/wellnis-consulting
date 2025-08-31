'use client';

import { useState } from 'react';

/** Image with graceful fallback (light-blue tone kept consistent) */
function Img({
  src,
  fallback,
  alt,
  className,
  ratio = '4 / 3',
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  ratio?: string;
}) {
  const [current, setCurrent] = useState(src);
  return (
    <figure className={`relative overflow-hidden ${className || ''}`} style={{ aspectRatio: ratio }}>
      <img
        src={current}
        alt={alt}
        onError={() => setCurrent(fallback)}
        className="w-full h-full object-cover block"
      />
      <div className="pointer-events-none absolute inset-0 bg-sky-200/20 mix-blend-multiply" />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export default function Page() {
  const valueBullets = [
    'Evidence-informed • Safety-first',
    'Clear protocols and checklists',
    'Measurable results: habits for individuals, KPIs for clinics',
  ];

  const services = [
    {
      title: 'Consulting for Clinics & Founders',
      points: [
        'Device & modality selection (RLT, PEMF, HBOT/EBOT, cryo, sauna, etc.)',
        'SOPs/consents, safety checklists, patient flows',
        'Staff training, offer design, metrics/KPIs',
        'Vendor vetting: specs, dosimetry, ROI comparison',
      ],
    },
    {
      title: '1:1 Coaching for Individuals',
      points: [
        'Lifestyle plan: sleep, stress, nutrition, training, recovery',
        'Vitamins & supplements: what works, doses and cycles',
        'Stack design for energy/fat loss/focus without hype or risk',
        'Weekly actions with progress tracking',
      ],
    },
    {
      title: 'Peptides & Longevity Protocols',
      points: [
        'Goals → strategy → dosing cycles → monitoring',
        'Compatibility/contraindications and when to speak to your clinician',
        'Integration with training, sleep and nutrition',
      ],
    },
    {
      title: 'NAD+ Programs',
      points: [
        'IV / IM / oral — titration, frequency, tolerability',
        'Energy, cognitive support and recovery',
        'Return-to-baseline plan and check-ins',
      ],
    },
    {
      title: 'Red / Infrared Light Therapy',
      points: [
        'Device selection: spectra/irradiance/beam angle; eye/skin safety',
        'Dosing: time • distance • frequency — skin, pain, recovery, sleep',
        'Routine integration: morning/evening and smart stacking',
      ],
    },
    {
      title: 'Advanced Modalities',
      points: [
        'PEMF, HBOT/EBOT, cryo, sauna, breathwork',
        'Goal-based stacking (energy, fat loss, recovery)',
        'Progression plan with safety guardrails',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Who do you work with?',
      a: 'Clinics, spas, gyms and founders — and motivated individuals who want practical, safe and results-driven wellness.',
    },
    {
      q: 'How do we start?',
      a: 'Begin with a 30–60 minute consult. Then choose an implementation sprint (2–6 weeks) or monthly advisory.',
    },
    {
      q: 'Do you implement on site?',
      a: 'Yes. For clinics: SOPs, training and vendor/device vetting. For individuals: metrics, weekly actions and adjustments.',
    },
  ];

  const gallery = [
    {
      local: '/fitness.jpg',
      fallback:
        'https://images.unsplash.com/photo-1518400614611-8e87f1c2cd1a?q=80&w=1600&auto=format&fit=crop',
      alt: 'Active recovery / athlete',
    },
    {
      local: '/meditation.jpg',
      fallback:
        'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Calm breath / meditation',
    },
    {
      local: '/iv-drip.jpg',
      fallback:
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
      alt: 'IV therapy / vitamins & peptides',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
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
          <a href="#contact" className="rounded-2xl px-4 py-2 text-sm font-medium bg-zinc-900 text-white hover:opacity-90">
            Book a consult
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center">
        <p className="inline-flex items-center gap-2 text-xs border border-emerald-200 text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
          Clinics & Individuals • Evidence-informed • Safety-first
        </p>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          Build a smarter wellness stack
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
          Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern modalities that actually work.
        </p>
        <ul className="mt-6 grid md:grid-cols-3 gap-3 text-sm text-zinc-700">
          {valueBullets.map((b) => (
            <li key={b} className="rounded-xl border border-zinc-200 bg-white px-4 py-3">{b}</li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#contact" className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90">
            Start with a consult
          </a>
          <a href="#services" className="rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">
            Explore services
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Energy • Recovery • Longevity</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl mx-auto text-center">
          Wellness in action — simple, practical, sustainable.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {gallery.map(({ local, fallback, alt }) => (
            <Img key={local} src={local} fallback={fallback} alt={alt} className="rounded-2xl border border-zinc-200" />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl">
          Pick an implementation sprint (2–6 weeks) or ongoing advisory. Every engagement ends with clear next steps and tools you can use tomorrow.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
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
              I’m David, founder of Wellness Consulting. I advise clinics and individuals on modern wellness strategies — from
              lifestyle foundations and supplements to peptides, NAD+, red/infrared light and advanced modalities. The approach is
              evidence-informed, practical and safety-first. We build a system, not one-off procedures.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="underline underline-offset-4 hover:no-underline" href="https://instagram.com/heal_yourself_david" target="_blank" rel="noreferrer">
                Instagram <span className="text-zinc-500">@heal_yourself_david</span>
              </a>
              <a className="underline underline-offset-4 hover:no-underline" href="mailto:d.nisenboym@gmail.com">
                Email <span className="text-zinc-500">d.nisenboym@gmail.com</span>
              </a>
              <a className="underline underline-offset-4 hover:no-underline" href="tel:+13054505709">
                Phone <span className="text-zinc-500">+1 (305) 450-5709</span>
              </a>
              <a className="underline underline-offset-4 hover:no-underline" href="https://wa.me/13054505709" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="underline underline-offset-4 hover:no-underline" href="https://t.me/wellnisconsult" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Img className="rounded-2xl border border-zinc-200 col-span-2" src={gallery[0].local} fallback={gallery[0].fallback} alt={gallery[0].alt} ratio="16 / 9" />
            <Img className="rounded-2xl border border-zinc-200" src={gallery[1].local} fallback={gallery[1].fallback} alt={gallery[1].alt} />
            <Img className="rounded-2xl border border-zinc-200" src={gallery[2].local} fallback={gallery[2].fallback} alt={gallery[2].alt} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Results</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Protocols • SOPs • Staff training</p>
            <p className="mt-2 text-zinc-600">Practical playbooks your team can use tomorrow.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Safety • Compliance • Checklists</p>
            <p className="mt-2 text-zinc-600">Guardrails, consent language and risk-mitigation.</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Measurable wins</p>
            <p className="mt-2 text-zinc-600">KPIs for clinics; simple habit metrics for individuals.</p>
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

      {/* Contact (HTML → Formspree) */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Book a consult</h2>

          {/* “Thanks” message after redirect */}
          <div id="thanks" className="hidden" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  if (location.hash === '#thanks') {
                    var box = document.getElementById('thankyou-box');
                    if (box) box.style.display = 'block';
                  }
                })();
              `,
            }}
          />
          <div
            id="thankyou-box"
            style={{ display: 'none' }}
            className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-700"
          >
            <p className="font-medium">Thanks! I’ll get back to you shortly.</p>
            <p className="mt-1 text-sm">Your message has been received.</p>
          </div>

          <form className="mt-6 grid md:grid-cols-2 gap-4" action="https://formspree.io/f/mqadbyqj" method="POST">
            <input name="name" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Name" required />
            <input name="email" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Email" type="email" required />
            <textarea name="message" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2" rows={5} placeholder="What do you want to improve?" required />
            <input type="hidden" name="_subject" value="New inquiry from wellness-consulting site" />
            <input type="hidden" name="_next" value="https://wellnis-consulting.vercel.app/#thanks" />
            <button className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max">
              Send
            </button>
          </form>

          {/* Quick contacts */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="tel:+13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Call: +1 (305) 450-5709</a>
            <a href="mailto:d.nisenboym@gmail.com" className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50">Email: d.nisenboym@gmail.com</a>
            <a href="https://instagram.com/heal_yourself_david" className="rounded-2xl px-4 py-2 text-sm font-medium border border-pink-300 hover:bg-pink-50" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://wa.me/13054505709" className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 hover:bg-green-50" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://t.me/wellnisconsult" className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 hover:bg-sky-50" target="_blank" rel="noreferrer">Telegram</a>
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
