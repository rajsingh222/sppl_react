import React from 'react';

const SERVICES = [
  { icon: '🌉', label: 'Bridge Monitoring', pdf: 'bridge-monitoring.pdf' },
  { icon: '🏢', label: 'Building Monitoring', pdf: 'building-monitoring.pdf' },
  { icon: '🚇', label: 'Tunnel Monitoring', pdf: 'tunnel-monitoring.pdf' },
  { icon: '🚆', label: 'Rail & Road', pdf: 'rail-road.pdf' },
  { icon: '🛡️', label: 'Critical & Strategic Infrastructure', pdf: 'critical-strategic-infrastructure.pdf' },
  { icon: '⚡', label: 'Electric Power & Communication', pdf: 'electric-power-communication.pdf' },
  { icon: '🏗️', label: 'Prestressed Structures', pdf: 'prestressed-structures.pdf' },
  { icon: '🌊', label: 'Offshore & Hydraulic Structures', pdf: 'offshore-hydraulic-structures.pdf' },
  // Removed last item per request. Add more here if needed.
];

export default function KeyServices() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white" id="key-services">
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
          {SERVICES.map(({ icon, label, pdf }) => (
            <a
              key={label}
              href={`/pdfs/${pdf}`}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative flex flex-col rounded-2xl p-6 bg-white/95 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 hover:shadow-[0_14px_38px_rgba(2,132,199,0.14)] hover:ring-sky-300 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              style={{ fontFamily: "'Poppins','Segoe UI',sans-serif" }}
            >
              {/* Hover overlay sweeping bottom -> top */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-sky-50 via-cyan-50 to-transparent" />
              {/* Bottom accent bar that grows on hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 text-2xl select-none shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-sky-300">{icon}</div>
                  <h3 className="font-semibold text-slate-900 text-base md:text-lg leading-snug tracking-tight">{label}</h3>
                </div>

                <div className="mt-6 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 translate-y-2 group-hover:translate-y-0" />

                <div className="mt-auto pt-6">
                  <span className="relative inline-flex items-center gap-1 text-sky-800 text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h9.69l-3.72-3.72a.75.75 0 111.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06l3.72-3.72H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
