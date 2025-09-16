import React from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { label: 'Building Monitoring', to: '/solutions/building-health-monitoring', desc: 'Real-time SHM for buildings.' },
  { label: 'Bridge Monitoring', to: '/solutions/bridges', desc: 'Continuous safety for bridges.' },
  { label: 'Tunnel Monitoring', to: '/solutions/tunnel', desc: 'Insight into tunnel behavior.' },
  { label: 'Rail & Road', to: '/solutions/track', desc: 'Track and roadway health.' },
  { label: 'Critical & Strategic Infrastructure', to: '/solutions/industries', desc: 'Mission-critical assets.' },
  { label: 'Electric Power & Communication', to: '/solutions/electric', desc: 'Power lines and towers.' },
  { label: 'Prestressed Structures', to: '/solutions/prestressed', desc: 'Tensioned members under watch.' },
  { label: 'Offshore & Hydraulic Structures', to: '/solutions/offshore', desc: 'Marine and hydro assets.' },
];

export default function KeyServices() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-sky-50 to-white" id="key-services">
      {/* Decorative ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-200/30 via-sky-200/20 to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">
            Key Services
            <span className="block mt-3 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue"></span>
          </h2>
          <p className="mt-4 text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Structural Health Monitoring Solutions
          </p>
        </div>

  <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map(({ label, to, desc }) => (
            <Link
              key={label}
              to={to}
              className="group relative flex flex-col rounded-2xl p-6 bg-white/95 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 hover:shadow-[0_14px_38px_rgba(2,132,199,0.14)] hover:ring-sky-300 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}
            >
              {/* Hover overlay sweeping bottom -> top */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-sky-50 via-cyan-50 to-transparent" />
              {/* Bottom accent bar that grows on hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 text-2xl select-none shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-sky-300">
                    {/* Small search/eye icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-sky-600">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 110-14 7 7 0 010 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base md:text-lg leading-snug tracking-tight">{label}</h3>
                    <p className="mt-1 text-slate-600 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>

                <div className="mt-5 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 translate-y-2 group-hover:translate-y-0" />

                {/* No Read More; entire card is clickable */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
