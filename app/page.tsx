'use client';

import { useState } from 'react';

/** Маленький компонент: если локальная картинка не найдена — покажем fallback */
function Img({
  src,
  fallback,
  alt,
  className,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      onError={() => setCurrent(fallback)}
      className={className}
      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%' }}
    />
  );
}

export default function Page() {
  /** Галерея: светло-голубой тон, спорт / медитация / IV */
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

  const services = [
    {
      title: 'Consulting for Clinics & Founders',
      desc:
        'End-to-end help selecting devices and designing safe, effective programs: SOPs, consents, staff training, vendor vetting.',
    },
    {
      title: '1:1 Coaching for Individuals',
      desc:
        'Personalized guidance on lifestyle, sleep, nutrition, training, supplements — weekly actions and measurable wins.',
    },
    {
      title: 'Peptides & Longevity Protocols',
      desc:
        'Evidence-informed roadmaps: goals, dosing frameworks, cycles, safety notes, and when to speak with your clinician.',
    },
    {
      title: 'NAD+ Programs',
      desc:
        'IV / IM / oral strategies. Titration and scheduling for energy, focus and recovery.',
    },
    {
      title: 'Red / Infrared Light Therapy',
      desc:
        'Device selection and dosing (irradiance • time • distance). Skin, pain, recovery and circadian protocols.',
    },
    {
      title: 'Advanced Modalities',
      desc:
        'PEMF, HBOT/EBOT, cryo, sauna, breathwork; stack design and progression plans that fit real life.',
    },
  ];

  const faqs = [
    {
      q: 'Who do you work with?',
      a:
        'Clinics, spas, gyms, founders — and motivated individuals who want practical, safe and results-driven wellness.',
    },
    {
      q: 'How do we start?',
      a:
        'Begin with a 30–60 minute consult. Then choose an implementation sprint (2–6 weeks) or a monthly advisory plan.',
    },
    {
      q: 'Do you implement on site?',
      a:
        'Yes. For clinics I build SOPs, train staff, help vet vendors/devices. For individuals we set metrics and weekly actions.',
    },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* === Header === */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            Wellness Consulting
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80">
              Services
            </a>
            <a href="#about" className="hover:opacity-80">
              About
            </a>
            <a href="#results" className="hover:opacity-80">
              Results
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl px-4 py-2 text-sm font-medium bg-zinc-900 text-white hover:opacity-90"
          >
            Book a consult
          </a>
        </div>
      </header>

      {/* === Hero === */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Build a smarter wellness stack
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
            Lifestyle, vitamins & supplements, peptides, NAD+, red/infrared light, and modern
            modalities that actually work.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90"
            >
              Start with a consult
            </a>
            <a
              href="#services"
              className="rounded-2xl px-5 py-3 text-sm font-medium border border-zinc-300 hover:bg-zinc-50"
            >
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* === Gallery === */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Energy • Recovery • Longevity
        </h2>
        <p className="mt-2 text-zinc-600 max-w-2xl mx-auto text-center">
          Wellness in action — simple, practical, sustainable.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {gallery.map(({ local, fallback, alt }) => (
            <figure
              key={local}
              className="relative rounded-2xl overflow-hidden border border-zinc-200"
              style={{ aspectRatio: '4 / 3' }}
            >
              <Img src={local} fallback={fallback} alt={alt} />
              {/* мягкий голубой тинт для единого стиля */}
              <div className="pointer-events-none absolute inset-0 bg-sky-200/20 mix-blend-multiply" />
              <figcaption className="sr-only">{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* === Services === */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <p className="mt-2 text-zinc-600 max-w-2xl">
          Choose a focused implementation sprint or ongoing advisory. Every engagement ends with
          clear next steps and tools you can use tomorrow.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === About === */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
            <p className="mt-3 text-zinc-700 leading-relaxed">
              I’m David, founder of Wellness Consulting. I advise clinics and individual clients on
              modern wellness strategies — from lifestyle foundations and supplements to peptides,
              NAD+, red/infrared light, and other modalities. My approach is simple:
              evidence-informed, practical, and safety-first.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="https://instagram.com/heal_yourself_david"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <span className="text-zinc-500">@heal_yourself_david</span>
              </a>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="mailto:d.nisenboym@gmail.com"
              >
                Email <span className="text-zinc-500">d.nisenboym@gmail.com</span>
              </a>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="tel:+13054505709"
              >
                Phone <span className="text-zinc-500">+1 (305) 450-5709</span>
              </a>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="https://wa.me/13054505709"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="underline underline-offset-4 hover:no-underline"
                href="https://t.me/wellnisconsult"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === Results (короткие преимущества) === */}
      <section id="results" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Results</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Protocols • SOPs • Staff training</p>
            <p className="mt-2 text-zinc-600">
              Practical playbooks you can hand to the team tomorrow.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Safety • Compliance • Checklists</p>
            <p className="mt-2 text-zinc-600">
              Clear guardrails, consent language and risk-mitigation.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-medium">Measurable wins</p>
            <p className="mt-2 text-zinc-600">
              KPIs for clinics; simple habit metrics for individuals.
            </p>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
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

      {/* === Contact (HTML → Formspree, без JS API) === */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Book a consult</h2>

          {/* Показываем «спасибо», если пришли с #thanks */}
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

          <form
            className="mt-6 grid md:grid-cols-2 gap-4"
            action="https://formspree.io/f/mqadbyqj"
            method="POST"
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
            {/* тема письма и редирект (замени домен, если подключишь свой) */}
            <input
              type="hidden"
              name="_subject"
              value="New inquiry from wellness-consulting site"
            />
            <input
              type="hidden"
              name="_next"
              value="https://wellnis-consulting.vercel.app/#thanks"
            />
            <button className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max">
              Send
            </button>
          </form>

          {/* Быстрые контакты */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+13054505709"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50"
            >
              Call: +1 (305) 450-5709
            </a>
            <a
              href="mailto:d.nisenboym@gmail.com"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-zinc-300 hover:bg-zinc-50"
            >
              Email: d.nisenboym@gmail.com
            </a>
            <a
              href="https://instagram.com/heal_yourself_david"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-pink-300 hover:bg-pink-50"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/13054505709"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-green-300 hover:bg-green-50"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/wellnisconsult"
              className="rounded-2xl px-4 py-2 text-sm font-medium border border-sky-300 hover:bg-sky-50"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Educational guidance only. Not medical advice. Consult your licensed clinician for
            diagnosis or treatment.
          </p>
        </div>
      </section>

      {/* === Footer === */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Wellness Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://instagram.com/heal_yourself_david" className="hover:opacity-80">
              Instagram
            </a>
            <a href="https://t.me/wellnisconsult" className="hover:opacity-80">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
