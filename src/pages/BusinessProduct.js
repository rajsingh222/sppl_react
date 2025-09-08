import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function BusinessProduct() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="text-center py-16 md:py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
            <div className="max-w-4xl mx-auto px-6">
              <Reveal>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Product</h1>
              </Reveal>
              {/** Intentionally keeping only the main heading as requested **/}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          {/* Product Overview */}
          <Reveal>
            <section className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Structural Health Monitoring (SHM) Sensors</h2>
                <p className="mt-4 text-gray-800 leading-relaxed">
                  Our SHM sensors are designed to measure structural responses such as stress, strain, vibration and environmental effects. They combine precision monitoring with energy-harvesting capabilities to enable long-term autonomous operation in bridges, buildings and industrial facilities.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Advanced Structural Health Monitoring (SHM) Sensors</h2>
                <p className="mt-4 text-gray-800 leading-relaxed">
                  SPPL provides cutting-edge, indigenous sensors that monitor the health of critical infrastructure while harnessing energy from structural vibrations. Developed using patented technology from IIT Delhi, our sensors deliver accurate, real-time insights for safer, smarter and more sustainable structures.
                </p>
              </div>
             
            </section>
          </Reveal>

          {/* Key Features */}
          <section>
            <Reveal>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Key Features</h3>
                <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-stretch gap-6">
              {[{icon:'🧬',title:'Patented Indigenous Technology',text:'Developed in collaboration with IIT Delhi.'},
                {icon:'📈',title:'Real-Time Monitoring',text:'Capture structural health data continuously.'},
                {icon:'⚡',title:'Energy Harvesting',text:'Converts structural vibrations into sustainable power.'},
                {icon:'🛡️',title:'Durable Design',text:'Operates reliably in diverse environmental conditions.'},
                {icon:'🚀',title:'Scalable Deployment',text:'Suitable for bridges, buildings and industrial plants.'}]
                .map((f,i)=> (
                <Reveal key={f.title} delay={i*80}>
                  <div className="group h-full min-h-[220px] bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform flex flex-col">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md">
                        <span className="text-2xl">{f.icon}</span>
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                    <p className="mt-2 text-gray-600 leading-relaxed">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Services */}
          <section>
            <Reveal>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Services</h3>
                <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            </Reveal>
            <div className="max-w-3xl mx-auto space-y-6">
              <Reveal>
                <div className="group relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
                  <div className="flex items-start gap-4 pl-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center text-2xl shadow-md">🏭</div>
                    <div className="min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">Manufacturing</h4>
                      <p className="mt-1 text-gray-600">Custom-built sensors tailored to specific infrastructure requirements.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="group relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
                  <div className="flex items-start gap-4 pl-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center text-2xl shadow-md">🧪</div>
                    <div className="min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">Calibration</h4>
                      <p className="mt-1 text-gray-600">Precision calibration to ensure accurate and reliable measurements.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="group relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                  <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
                  <div className="flex items-start gap-4 pl-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center text-2xl shadow-md">🔗</div>
                    <div className="min-w-0">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900">Integration Support</h4>
                      <p className="mt-1 text-gray-600">Assistance integrating sensors into monitoring dashboards and systems.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Applications / Target Market */}
          <section>
            <Reveal>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Applications / Target Market</h3>
                <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-6">
              {[{
                icon: '🏛️',
                title: 'Government Infrastructure Projects',
                text: 'Bridges, highways and public buildings that require continuous structural monitoring.'
              }, {
                icon: '🏗️',
                title: 'Private Infrastructure Developers',
                text: 'Structural monitoring during construction and operation for durability and safety.'
              }, {
                // Use a reliable inline SVG instead of an emoji to "fix the logo" rendering on all platforms
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                    <path d="M3 20h18v-2H3v2zm2-4h2v-3h3v3h2v-6l4 3V7l4 3V5h-2v2l-4-3v5l-4-3v6H7v3z" />
                  </svg>
                ),
                title: 'Industrial Facilities',
                text: 'Sites requiring compliance-focused monitoring for critical assets and structures.'
              }].map((a, i) => (
                <Reveal key={a.title} delay={60 + i * 80}>
                  <div className="h-full bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center shadow-md" aria-label={a.title}>
                        {a.svg ? a.svg : <span className="text-2xl">{a.icon}</span>}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{a.title}</h4>
                        <p className="mt-1 text-gray-600">{a.text}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section>
            <Reveal>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Why Choose SPPL Sensors</h3>
                <div className="mt-3 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 items-stretch gap-6">
              {[
                { icon: '🛠️', text: 'Proactive infrastructure monitoring reduces maintenance costs and prevents failures.' },
                { icon: '📊', text: 'Real-time insights enable informed decision-making for safety and longevity.' },
                { icon: '🌱', text: 'Sustainable design with energy harvesting reduces operational dependency.' },
                { icon: '✅', text: 'Fully compliant with industry standards and regulations.' }
              ].map((b, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="h-full min-h-[120px] bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all transform">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white flex items-center justify-center text-xl shadow-md">{b.icon}</div>
                      <p className="text-gray-800 leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
