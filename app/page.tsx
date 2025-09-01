'use client';

import { useState } from 'react';

/** Pastel-friendly image component with graceful fallback */
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
      {/* soft light-blue tint for a consistent pastel look */}
      <div className="pointer-events-none absolute inset-0 bg-sky-200/20 mix-blend-multiply" />
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
}

export default function Page() {
  const paletteNote =
    'Pastel palette: light blue, light gray, white with dark-blue accents.';

  const gallery = [
    {
      local: '/energy.jpg', // put your horizontal cartoon/illustration here
      fallback:
        'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1600&auto=format&fit=crop',
      alt: 'Energy — happy movement and vitality',
    },
    {
      local: '/recovery.jpg', // put your horizontal cartoon/illustration here
      fallback:
        'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1600&auto=format&fit=crop',
      alt: 'Recovery — calm balance and restoration',
    },
    {
      local: '/longevity.jpg', // put your horizontal cartoon/illustration here
      fallback:
        'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
      alt: 'Longevity — sustainable healthy living',
    },
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
        'Goal-based stacking for energy, fat loss and focus',
        'Weekly actions with progress tracking and accountability',
      ],
    },
    {
      title: 'Peptides & Longevity Protocols',
      points: [
        'Goals → strategy → dosing cycles → monitoring',
        'Compatibility/contraindications; when to speak to your clinician',
        'Integration with training, sleep and nutrition',
      ],
    },
    {
      title: 'NAD+ Programs',
      points: [
        'IV / IM / oral — titration, frequency, tolerability',
        'Support for energy, cognition and recovery',
        'Return-to-baseline plan and check-ins',
      ],
    },
    {
      title: 'Red / Infrared Light Therapy',
      points: [
        'Device selection: spectra/irradiance/beam angle; eye/skin safety',
        'Dosing: time • distance • frequency — skin, pain, recovery, sleep',
      ],
    },
    {
      title: 'Advanced Modalities',
      points: [
        'PEMF, HBOT/EBOT, cryo, sauna, breathwork',
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
      a: 'Yes. For clinics: SOPs, staff training and vendor/device vetting. For individuals: metrics, weekly actions and adjustments.',
    },
  ];

  return (
    <main
      className="min-h-screen text-slate-900"
      style={{
        // soft multi-stop gradient with light blue + white + light gray
        background:
          'linear-gradient(180deg, #eff6ff 0%, #ffffff 40%, #f6f7fb 100%)',
      }}
      aria-label={paletteNote}
    >
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a
            href="#home"
            className="font-semibold text-lg tracking-tight text-blue-900"
          >
            Wellness Consulting
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-blue-700">
              Services
            </a>
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#results" className="hover:text-blue-700">
              Results
            </a>
            <a href="#faq" className="hover:text-blue-700">
              FAQ
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl px-4 py-2 text-sm font-medium bg-blue-900 text-sky-50 hover:opacity-90"
          >
            Book a consult
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-xs border border-sky-200 text-sky-800 bg-sky-50 px-2 py-1 rounded-full">
            Clinics & Individuals • Evidence-informed • Safety-first
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
            Build a smarter wellness stack
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern
            modalities that actually work — delivered with clear protocols and measurable wins.
          </p>

          <ul className="mt-6 grid md:grid-cols-3 gap-3 text-sm text-slate-800">
            <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              Evidence-informed, safety-first
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              Simple checklists and protocols
            </li>
            <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              Measurable results for clinics & individuals
            </li>
          </ul>

          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700"
            >
              Start with a consult
            </a>
            <a
              href="#services"
              className="rounded-2xl px-5 py-3 text-sm font-medium border border-slate-300 text-slate-800 hover:bg-slate-50"
            >
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* ===== Personal Story (T1D remission) ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
            My story: T1D remission through lifestyle
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            In 2021, I was diagnosed with Type 1 Diabetes. Since then, I’ve focused relentlessly on
            foundational habits and smart protocols — nutrition, training, sleep, stress management
            and modern wellness tools. I’m proud to share that I’m currently in remission thanks to
            my diet and lifestyle.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            This journey fuels my mission: I’ve helped and motivated many people to change their
            lifestyle, lose weight and improve their overall wellbeing. Whether you’re an individual
            or a clinic, I bring practical, safe and realistic plans that create sustainable results.
          </p>
        </div>
      </section>

      {/* ===== Gallery (Energy • Recovery • Longevity) ===== */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-900">
          Energy • Recovery • Longevity
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl mx-auto text-center">
          Positive, sustainable changes — the foundation of everything we do.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Img
            className="rounded-2xl border border-slate-200"
            src={gallery[0].local}
            fallback={gallery[0].fallback}
            alt={gallery[0].alt}
            ratio="16 / 9"
          />
          <Img
            className="rounded-2xl border border-slate-200"
            src={gallery[1].local}
            fallback={gallery[1].fallback}
            alt={gallery[1].alt}
            ratio="16 / 9"
          />
          <Img
            className="rounded-2xl border border-slate-200"
            src={gallery[2].local}
            fallback={gallery[2].fallback}
            alt={gallery[2].alt}
            ratio="16 / 9"
          />
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Pick an implementation sprint (2–6 weeks) or ongoing advisory. Every engagement ends with
          clear next steps and tools you can use tomorrow.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-slate-900">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">About me</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I’m David, founder of Wellness Consulting. I advise clinics and individuals on modern
            wellness strategies — from lifestyle foundations and supplements to peptides, NAD+, red/
            infrared light and advanced modalities. My approach is simple: evidence-informed,
            practical and safety-first. We build a system, not one-off procedures.
          </p>
          <ul className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
            <li className="rounded-xl border border-slate-200 bg-sky-50 text-slate-800 px-4 py-3">
              Clear protocols & checklists your team can use tomorrow
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 text-slate-800 px-4 py-3">
              Realistic weekly actions and simple metrics
            </li>
            <li className="rounded-xl border border-slate-200 bg-white text-slate-800 px-4 py-3">
              Vendor-neutral guidance and device vetting
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Results ===== */}
      <section id="results" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Results</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-medium text-slate-900">Protocols • SOPs • Staff training</p>
            <p className="mt-2 text-slate-600">
              Practical playbooks you can hand to the team tomorrow.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-medium text-slate-900">Safety • Compliance • Checklists</p>
            <p className="mt-2 text-slate-600">
              Clear guardrails, consent language and risk-mitigation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-medium text-slate-900">Measurable wins</p>
            <p className="mt-2 text-slate-600">
              KPIs for clinics; simple habit metrics for individuals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">FAQ</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-medium text-slate-900">{f.q}</p>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact (Formspree) ===== */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Book a consult</h2>

          {/* Show a "Thanks" banner after Formspree redirect to #thanks */}
          <div id="thanks" className="hidden"></div>
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
            className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800"
          >
            <p className="font-medium">Thanks! I’ll get back to you shortly.</p>
            <p className="mt-1 text-sm">Your message has been received.</p>
          </div>

          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            action="https://formspree.io/f/mqadbyqj"
            method="POST"
          >
            <input
              name="name"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Name"
              required
            />
            <input
              name="email"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm"
              placeholder="Email"
              type="email"
              required
            />
            <textarea
              name="message"
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm md:col-span-2"
              rows={5}
              placeholder="What do you want to improve?"
              required
            />
            {/* Email subject + redirect back to site with a #thanks banner */}
            <input
              type="hidden"
              name="_subject"
              value="New inquiry from Wellness Consulting site"
            />
            <input
              type="hidden"
              name="_next"
              value="https://wellnis-consulting.vercel.app/#thanks"
            />
            <button className="rounded-2xl px-5 py-3 text-sm font-medium bg-sky-600 text-white hover:bg-sky-700 md:w-max">
              Send
            </button>
          </form>

          {/* Quick contacts */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+13054505709"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50"
            >
              Call: +1 (305) 450-5709
            </a>
            <a
              href="mailto:d.nisenboym@gmail.com"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-slate-300 hover:bg-slate-50"
            >
              Email: d.nisenboym@gmail.com
            </a>
            <a
              href="https://instagram.com/heal_yourself_david"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-pink-300 bg-pink-50 hover:bg-pink-100"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/13054505709"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 bg-green-50 hover:bg-green-100"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/wellnisconsult"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 bg-sky-50 hover:bg-sky-100"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Educational guidance only. Not medical advice. Consult your licensed clinician for diagnosis or treatment.
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Wellness Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/heal_yourself_david" className="hover:text-blue-700">
              Instagram
            </a>
            <a href="https://t.me/wellnisconsult" className="hover:text-blue-700">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
