import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
 

const bgImages = [
  
  '/solution/tr11.png',
  '/solution/tr1.png',
  '/solution/tr2.jpg',
  
  '/solution/tr4.jpg'
]; // TODO: replace with track specific images

export default function Track() {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % bgImages.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
  {/* Hero */}
  <div className="relative h-[53vh] w-full overflow-hidden">
        {bgImages.map((src, i) => (
          <div key={src} className="absolute inset-0 bg-center bg-cover transition-opacity duration-[1500ms] ease-in-out" style={{ backgroundImage: `url(${src})`, opacity: slide === i ? 1 : 0 }} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/55 via-slate-800/40 to-slate-900/55" />
        <div className="relative h-full flex items-center px-8 md:px-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Reliable Solutions</span>{' '}for Rail & Road Safety
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-medium text-blue-100 max-w-3xl leading-relaxed">Intelligent monitoring for rail and road networks—improving safety, reliability and long-term performance.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Intro */}
      <section className="relative pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 pl-3 border-l-4 border-sky-500/80">
                <span className="text-xs tracking-widest font-medium text-slate-600 uppercase">Reliability & Safety</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                <span className="block">Comprehensive</span>
                <span className="block mt-3"><span className="bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Rail & Road</span></span>
                <span className="block text-slate-800 mt-2">Solutions</span>
              </h2>
            </div>
            <div className="text-slate-800 text-lg leading-relaxed space-y-6 text-justify">
<p>We provide specialized monitoring systems for railways, metro tracks, highways, and roads, detecting cracks, misalignments, settlement, and vibrations in real time. Our solutions ensure safe, uninterrupted operations and optimized maintenance across large networks.</p>
<p>With expertise in rail and road infrastructure, we deliver cost-effective systems that reduce downtime, prevent accidents, and extend the service life of tracks, bridges, and pavements.</p>

            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Context & Approach (unified video styling) */}
      <section className="relative w-full h-[65vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-900/80" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.04)_35%,transparent_70%)]" />
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-white">
              <div className="relative space-y-5 pl-4 rounded-xl p-6 backdrop-blur-xl bg-gradient-to-br from-slate-900/55 via-slate-800/45 to-slate-900/50 ring-1 ring-white/10 shadow-[0_6px_22px_-6px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">Track</span> Monitoring Matters</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 rounded-full" />
                <p className="text-slate-100 leading-relaxed text-base md:text-lg max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]">Rail tracks and roadways endure constant stress from heavy loads, vibrations and weather conditions. Without monitoring, minor cracks or deformations can escalate into accidents, costly repairs and traffic disruptions.</p>
              </div>
              <div className="relative space-y-5 pl-4 rounded-xl p-6 backdrop-blur-xl bg-gradient-to-br from-slate-900/55 via-slate-800/45 to-slate-900/50 ring-1 ring-white/10 shadow-[0_6px_22px_-6px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">SPPL <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">Approach</span></h3>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 rounded-full" />
                <ul className="text-slate-100 text-base md:text-lg leading-relaxed space-y-3 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
                  {[
                   'Sensors for vibration, displacement & surface stress',
  'Real-time dashboards with condition alerts',
  'Predictive analytics for track & pavement wear',
  'Custom solutions for highways, bridges & railways'
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="mt-[6px] h-2 w-2 rounded-full bg-gradient-to-r from-sky-300 to-cyan-300 shadow-[0_0_0_3px_rgba(255,255,255,0.08)]" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Benefits (Aligned with Bridges layout) */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-stretch">
            {/* Left: The SPPL Edge with page-specific bullets */}
            <div className="rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 bg-white/90 backdrop-blur-sm shadow-sm flex flex-col h-full justify-between">
              <div className="inline-flex items-center gap-2 pl-3 border-l-4 border-sky-500/90"></div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                The <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">SPPL</span> Edge
              </h2>
              <div className="mt-2 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full" />
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] text-slate-700">
                {[
               'Reduced accidents & service disruptions',
  'Lower maintenance costs through early detection',
  'Compliance with transportation safety standards',
  'Extended life of rail tracks & roadways'

                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/10 to-cyan-500/10 ring-1 ring-sky-200 text-[11px] text-sky-700">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-slate-700">
                  {['Sensors','Edge gateway','Secure backhaul','Cloud analytics','Dashboards','Alerts'].map((chip, idx) => (
                    <React.Fragment key={chip}>
                      <span className="px-2 py-0.5 rounded-md ring-1 ring-slate-300 bg-white">{chip}</span>
                      {idx < 5 && <span className="text-slate-300">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Key Benefits with KPI + tiles; preserve previous right-card heading as caption */}
            <div className="rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 bg-white/90 backdrop-blur-sm shadow-sm flex flex-col h-full justify-between">
              <div className="inline-flex items-center gap-2 pl-3 border-l-4 border-sky-500/90"></div>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Key <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Benefits</span>
              </h2>
              
              <div className="mt-2 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full" />
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="px-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-800">25%</div>
                  <div className="text-[11px] md:text-xs text-slate-600 leading-snug">Fewer manual patrols</div>
                </div>
                <div className="px-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-800">3x</div>
                  <div className="text-[11px] md:text-xs text-slate-600 leading-snug">Faster risk flagging</div>
                </div>
                <div className="px-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-slate-800">24/7</div>
                  <div className="text-[11px] md:text-xs text-slate-600 leading-snug">Monitoring & alerts</div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg ring-1 ring-slate-200 bg-white/70 hover:ring-sky-400/40 transition">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-600"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Safety first</div>
                    <div className="text-xs text-slate-600 leading-snug">Fewer incidents via early warnings.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg ring-1 ring-slate-200 bg-white/70 hover:ring-sky-400/40 transition">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-600"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 3v4m0 10v4m18-4v4M3 7c3 0 6 8 9 8s6-8 9-8"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Lower OPEX</div>
                    <div className="text-xs text-slate-600 leading-snug">Target tamping and renewal windows.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg ring-1 ring-slate-200 bg-white/70 hover:ring-sky-400/40 transition">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-600"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0h4m-4 0H8m9 5l2 2m-1 9a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Real‑time</div>
                    <div className="text-xs text-slate-600 leading-snug">Actionable alerts from live data.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg ring-1 ring-slate-200 bg-white/70 hover:ring-sky-400/40 transition">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-600"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">Compliance</div>
                    <div className="text-xs text-slate-600 leading-snug">Clear records for audit & review.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Applications */}
      <section className="relative pt-20 pb-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="mb-14">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"><span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Industries</span>{' '}We Serve</h3>
            <div className="mt-4 h-[3px] w-40 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full" />
          </div>
          <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              { label: 'Railway tracks & bridges', icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-700"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M8 3v18M16 3v18M3 7h18M3 11h18M3 15h18"/></svg>
              )},
              { label: 'Highways & expressways', icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-700"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-7 5 3 8-6-4-6 4 3-8-7-5h7l3-7z"/></svg>
              )},
              { label: 'Urban roads & flyovers', icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-700"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 19h18M6 19v-6l6-4 6 4v6M9 10h1m4 0h1"/></svg>
              )},
              { label: 'Tunnels & underpasses', icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-sky-700"><path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 20V10a8 8 0 0116 0v10M9 20v-6a3 3 0 116 0v6"/></svg>
              )}
            ].map(({ icon, label }) => (
              <div key={label} className="group relative flex flex-col rounded-xl p-6 bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-400/50 transition-all overflow-hidden" style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 select-none shadow-sm">{icon}</div>
                    <h4 className="font-medium text-slate-800 text-sm md:text-[15px] leading-snug tracking-tight">{label}</h4>
                  </div>
                  <div className="h-[3px] w-20 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
