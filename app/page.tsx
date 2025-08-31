'use client';

export default function Page() {
  const services = [
    { title: "Consulting for Clinics & Founders", desc: "End-to-end help selecting devices and designing safe, effective wellness programs that convert (SOPs, consents, staff training, KPIs)." },
    { title: "1:1 Coaching for Individuals", desc: "Personalized guidance on lifestyle, sleep, nutrition, training, and supplement strategies with clear weekly actions." },
    { title: "Peptides & Longevity Protocols", desc: "Evidence-informed roadmaps: goals, dosing frameworks, cycles, safety notes, and when to speak with your clinician." },
    { title: "NAD+ Programs", desc: "IV / IM / oral strategies, titration and scheduling, interactions/contraindications, recovery and performance use-cases." },
    { title: "Red / Infrared Light Therapy", desc: "Device selection, dosage (irradiance • time • distance), skin, pain, recovery and circadian protocols." },
    { title: "Advanced Modalities", desc: "PEMF, HBOT/EBOT, cryo, sauna, breathwork; stack design and progression plans that fit real life." },
  ];

  const faqs = [
    { q: "Who do you work with?", a: "Clinics, spas, gyms, founders—and motivated individuals who want practical, safe, and results-driven wellness." },
    { q: "How does an engagement start?", a: "Begin with a 30–60 minute consult. From there choose an implementation sprint (2–6 weeks) or a monthly advisory plan." },
    { q: "Do you implement on site?", a: "Yes. For clinics I build SOPs, train staff, and help vet vendors/devices. For individuals we set metrics and weekly actions." },
  ];

  const socials = [
    { name: "Instagram", href: "https://instagram.com/", handle: "@wellness.consulting" },
    { name: "Email", href: "mailto:hello@wellness.consulting", handle: "hello@wellness.consulting" },
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
        <div className="absolute inset-0 -z-10">
          <div className="h-[600px] w-[140%] -left-20 top-[-200px] absolute rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.emerald.300),transparent_60%)]" />
          <div className="h-[500px] w-[120%] right-0 top-[-120px] absolute rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.sky.300),transparent_60%)]" />
        </div>
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

      {/* Trust row */}
      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-600">
          <p>Protocols • SOPs • Staff Training</p>
          <p>Device Vetting • Vendor-neutral</p>
          <p>Safety • Compliance • Checklists</p>
          <p>Practical Coaching • Measurable Wins</p>
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
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="font-medium">Highlights</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• Clear protocols and checklists that keep people safe</li>
              <li>• Vendor-neutral device comparisons with real-world ROI</li>
              <li>• Staff training that sticks (scripts, SOPs, metrics)</li>
              <li>• Practical coaching that fits a busy schedule</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Results</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { h: "+27% consult-to-close for a clinic", p: "Built a simple protocol stack, staff scripts, and follow-up checklist." },
            { h: "4-week peptide sprint", p: "Defined goals, picked the right tools, and set a clear progression plan." },
            { h: "RLT rollout that patients use", p: "Dosimetry made simple + habit design = higher adherence." },
          ].map((r) => (
            <div key={r.h} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-lg font-semibold">{r.h}</p>
              <p className="mt-2 text-sm text-zinc-600">{r.p}</p>
            </div>
          ))}
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
          <p className="mt-2 text-zinc-600">
            Tell me about your goals. I’ll reply with available times and a short pre-call checklist.
          </p>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <input className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Name" />
            <input className="rounded-xl border border-zinc-300 px-4 py-3 text-sm" placeholder="Email" type="email" />
            <input className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2" placeholder="Company / Instagram" />
            <textarea className="rounded-xl border border-zinc-300 px-4 py-3 text-sm md:col-span-2" rows={5} placeholder="What do you want to improve?" />
            <button className="rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:opacity-90 md:w-max">Send</button>
          </form>
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
