import React from 'react';
// Reveal removed (now a no-op)

const features = [
  {
    icon: '🛡️',
    title: 'Proven Reliability',
    text: 'Industrial‑grade systems designed to perform in real‑world conditions.'
  },
  {
    icon: '⚙️',
    title: 'Engineering First',
    text: 'Built by domain experts with deep SHM and sensing experience.'
  },
  {
    icon: '📊',
    title: 'Actionable Insights',
    text: 'From clean data to clear decisions—no noise, just signals.'
  },
  {
    icon: '🤝',
    title: 'Partner Mindset',
    text: 'Responsive support and long‑term collaboration on your goals.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 overflow-hidden">
      {/* softly layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-sppl-light-blue/20 to-sky-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-300/20 to-sppl-dark-blue/10 blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-sppl-blue/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs tracking-wider uppercase text-sppl-dark-blue/70 bg-white/60 backdrop-blur px-3 py-1 rounded-full border border-sppl-dark-blue/10">Trusted Engineering</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">Why Choose Us</span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Minimal by design. Powerful in performance. A focused stack that simply works.</p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue shadow-sm" />
            </div>
          </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={i} className="group relative h-full">
                {/* glowing border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sppl-light-blue/20 via-white to-sky-200/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />

                <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm ring-1 ring-sppl-light-blue/10 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 text-2xl">
                        {/* soft inner glow */}
                        <span className="absolute inset-0 rounded-xl bg-white/60 blur opacity-60" />
                        <span className="relative">{f.icon}</span>
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{f.text}</p>
                    <div className="mt-6">
                      <div className="h-px w-1/2 bg-gradient-to-r from-sppl-blue/40 to-transparent" />
                    </div>
                  </div>
                </div>
        </div>
          ))}
        </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mt-14">
            <p className="text-sm text-gray-600">Designed for clarity, built for scale, delivered with care.</p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-sppl-blue/20 bg-white/80 px-4 py-2 text-sppl-blue hover:bg-white transition">
                <span>Talk to us</span>
                <span className="text-base">→</span>
              </a>
              <a href="/products" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white px-4 py-2 shadow-sm hover:shadow-md transition">
                Explore products
              </a>
            </div>
      </div>
      </div>
    </section>
  );
}
