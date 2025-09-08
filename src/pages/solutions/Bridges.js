import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const bgImages = [
  '/solution/b12.png',
  '/solution/b11.jpg',
  
  '/solution/b13.jpg',
  '/solution/bridge-1.jpg'
]; // TODO: replace with bridge specific images e.g. /solution/bridge-1.jpg

export default function Bridges() {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % bgImages.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      {/* Hero slideshow */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {bgImages.map((src, i) => (
          <div key={src} className="absolute inset-0 bg-center bg-cover transition-opacity duration-[1500ms] ease-in-out" style={{ backgroundImage: `url(${src})`, opacity: slide === i ? 1 : 0 }} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/55 via-slate-800/40 to-slate-900/55" />
        <div className="relative h-full flex items-center px-8 md:px-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Bridge</span>{' '}Health Monitoring
            </h1>
            <p className="mt-6 text-lg md:text-2xl font-medium text-blue-100 max-w-3xl leading-relaxed">Real-time structural condition intelligence for safer, longer-lasting bridges.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Intro */}
      <section className="relative py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 pl-3 border-l-4 border-sky-500/80">
                <span className="text-xs tracking-widest font-medium text-slate-600 uppercase">Precision & Resilience</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                <span className="block">Continuous</span>
                <span className="block mt-3"><span className="bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">Bridge</span></span>
                <span className="block text-slate-800 mt-2">Assessment</span>
              </h2>
            </div>
            <div className="text-slate-800 text-lg leading-relaxed space-y-6">
              <p>We instrument bridges with smart sensing networks to capture vibration, displacement, strain, temperature and traffic effects—building a living profile of structural performance.</p>
              <p>Actionable analytics support life-extension decisions, maintenance prioritization and early anomaly detection across diverse bridge types and environments.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400/80" />
      {/* Context & Approach (unified video styling) */}
      <section className="relative w-full h-[65vh] min-h-[520px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/solution/b15.mp4"
          poster="/solution/b3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ filter: 'brightness(0.78) contrast(1.05) saturate(1.0)' }}
        />
        <div className="absolute inset-0 bg-slate-950/15 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-900/45 to-slate-900/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_70%,transparent_85%)]" />
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-white">
              <div className="relative space-y-5 pl-4 rounded-xl p-6 backdrop-blur-xl bg-gradient-to-br from-slate-900/55 via-slate-800/45 to-slate-900/50 ring-1 ring-white/10 shadow-[0_6px_22px_-6px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">Bridge</span> Monitoring</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 rounded-full" />
                <p className="text-slate-100 leading-relaxed text-base md:text-lg max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.65)]">Aging infrastructure, growing traffic loads and climatic extremes accelerate fatigue and deterioration. Continuous monitoring turns uncertainty into engineering clarity.</p>
              </div>
              <div className="relative space-y-5 pl-4 rounded-xl p-6 backdrop-blur-xl bg-gradient-to-br from-slate-900/55 via-slate-800/45 to-slate-900/50 ring-1 ring-white/10 shadow-[0_6px_22px_-6px_rgba(0,0,0,0.45)]">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400">Approach</span></h3>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 rounded-full" />
                <ul className="text-slate-100 text-base md:text-lg leading-relaxed space-y-3 max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
                  {[
                    'Modal & dynamic response extraction',
                    'Strain / displacement correlation & trending',
                    'Fatigue usage & stress range analytics',
                    'Environmental & load influence separation'
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
      {/* Benefits */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Key Structural Advantages</h3>
              <ul className="space-y-5 text-lg text-slate-700">
                {[
                  'Early fatigue hotspot identification',
                  'Improved load rating confidence',
                  'Optimized maintenance scheduling',
                  'Lifecycle extension & risk reduction',
                  'Event & extreme response capture'
                ].map(item => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400 text-white ring-1 ring-sky-400/40">
                      <span className="text-base font-semibold leading-none">✔</span>
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group flex items-center justify-center">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 opacity-30 blur-lg" />
              <div className="relative rounded-2xl bg-white/85 backdrop-blur-xl ring-1 ring-slate-200 shadow-[0_8px_32px_-10px_rgba(30,64,175,0.25)] flex items-center justify-center h-full w-full p-8 md:p-10">
                <h3 className="text-center leading-tight">
                  <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800">Bridge Insight</span>
                  <span className="block text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mt-1">Delivered</span>
                </h3>
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
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"><span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">Applications</span>{' '}We Serve</h3>
            <div className="mt-4 h-[3px] w-40 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full" />
          </div>
          <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {[
              '🌉 Long-span suspension / cable-stayed',
              '🛤️ Rail & combined transport bridges',
              '🧱 Masonry & heritage spans',
              '🪨 Arch & box girder systems',
              '🌁 Urban flyovers & viaducts'
            ].map(text => {
              const [icon, ...rest] = text.split(' ');
              return (
                <div key={text} className="group relative flex flex-col rounded-xl p-6 bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:ring-sky-400/50 transition-all overflow-hidden" style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-cyan-500/10 text-3xl select-none">{icon}</div>
                      <h4 className="font-medium text-slate-800 text-sm md:text-[15px] leading-snug tracking-tight">{rest.join(' ')}</h4>
                    </div>
                    <div className="h-[3px] w-20 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
