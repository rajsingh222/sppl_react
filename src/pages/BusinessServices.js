import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';

export default function BusinessServices() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Services</h1>
              </Reveal>
              {/* Keep only the main heading for consistency with Product page */}
            </div>
          </div>
        </section>

  {/* Content */}
  <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
          {/* Overview */}
          <Reveal>
            <section className="max-w-3xl mx-auto">
              <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-sppl-blue">Comprehensive Services for Smarter Infrastructure</h2>
                <p className="mt-4 text-gray-800 leading-relaxed">
                  Beyond developing advanced SHM sensors, SPPL provides end-to-end services that ensure accurate deployment, reliable performance and actionable insights for infrastructure monitoring projects.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Our Key Services */}
          <section>
            <Reveal>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Key Services</h3>
                <div className="mt-3 mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue" />
              </div>
            </Reveal>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  icon: '🏭',
                  title: 'Sensor Manufacturing',
                  points: [
                    'Custom design and manufacturing of SHM sensors.',
                    'Built using patented IIT Delhi technology.',
                    'Tailored to bridges, buildings and industrial facilities.'
                  ]
                },
                {
                  icon: '🧪',
                  title: 'Sensor Calibration & QA',
                  points: [
                    'Precision calibration to ensure data accuracy.',
                    'Adherence to international standards and specs.',
                    'Regular testing and quality checks for reliability.'
                  ]
                },
                {
                  icon: '🔌',
                  title: 'Deployment & Integration',
                  points: [
                    'On-site installation and commissioning of sensors.',
                    'Integration with dashboards and cloud platforms.',
                    'Training for client teams on system and data.'
                  ]
                },
                {
                  icon: '📊',
                  title: 'Data Monitoring & Analysis',
                  points: [
                    'Continuous monitoring of structural performance.',
                    'Analysis using NumPy, Pandas, Matplotlib.',
                    'Actionable insights for predictive maintenance.'
                  ]
                },
                {
                  icon: '🛠️',
                  title: 'Maintenance & Support',
                  points: [
                    'Ongoing technical support for deployed systems.',
                    'Periodic sensor recalibration and updates.',
                    'Quick response to client needs and issues.'
                  ]
                }
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="group relative bg-white/90 backdrop-blur rounded-2xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                    <span className="absolute left-0 top-5 bottom-5 w-1 rounded-full bg-gradient-to-b from-sppl-blue to-sppl-dark-blue" />
                    <div className="flex items-start gap-4 pl-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sppl-blue to-sppl-dark-blue text-white shadow-md shrink-0">
                        <span className="text-2xl">{s.icon}</span>
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900">{s.title}</h4>
                        <ul className="mt-3 space-y-2 text-gray-600">
                          {s.points.map((p, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <span className="mt-0.5 text-green-600">✔️</span>
                              <span className="leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
