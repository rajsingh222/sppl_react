import React, { useEffect, useState } from 'react';

const items = [
  {
    title: 'Structural Health Monitoring',
    text: 'Comprehensive Structural Health Monitoring solutions for bridges, buildings and all infrastructures.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M3 5h18v2H3V5Zm0 6h18v2H3v-2Zm0 6h18v2H3v-2Z"/>
      </svg>
    ),
  },
   {
    title: 'Assessment and Planning',
    text: 'Identifying potential risks or structural vulnerabilities',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M3 5h14v14H3V5Zm16 0h2v14h-2V5Zm-4 2H5v10h10V7Z"/>
      </svg>
    ),
  },
  {
    title: 'System Design & Installation',
    text: 'Selection of appropriate sensors and aquisition systems for the monitoring system',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M10 6V4h4v2h-4Zm7 0h2v4h-2V6ZM5 6h2v4H5V6Zm2 8H5v4h2v-4Zm10 0h2v4h-2v-4Zm-7 0v2h4v-2h-4Z"/>
      </svg>
    ),
  },
  {
    title: 'Data Aquisition',
    text: 'Advanced diagnostics, real-time data monitoring, and actionable insights for preventive maintenance and safety.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M12 3C7 3 3 4.79 3 7v10c0 2.21 4 4 9 4s9-1.79 9-4V7c0-2.21-4-4-9-4Zm0 2c4.42 0 7 .99 7 2s-2.58 2-7 2-7-.99-7-2 2.58-2 7-2Zm7 6c0 1.01-2.58 2-7 2s-7-.99-7-2V9.26C6.67 10.32 9.33 11 12 11s5.33-.68 7-1.74V11Zm0 4c0 1.01-2.58 2-7 2s-7-.99-7-2v-1.74C6.67 14.32 9.33 15 12 15s5.33-.68 7-1.74V15Z"/>
      </svg>
    ),
  },
 
  
 {
  title: 'Real-time monitoring & AI/ML insights',
  text: 'Indigenous sensors (Make in India) with patented IIT Delhi technology, integrated with AI/ML analytics for predictive maintenance.',
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
      <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Zm0 4a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V7Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-9 1a9 9 0 0 1 9-9v2a7 7 0 0 0-7 7H3Zm0 0a9 9 0 0 0 9 9v-2a7 7 0 0 1-7-7H3Z"/>
    </svg>
  ),
}
,
  {
    title: 'Experienced Professionals',
    text: 'A dedicated team of experts with deep technical expertise and a passion for infrastructure sustainability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 9a7 7 0 0 1 14 0H5Z"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="why-choose-us" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Decorative ambient accents for consistency */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-200/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-200/30 via-sky-200/20 to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-600 to-sppl-dark-blue">
            Why Choose Us
            <span className="block mt-3 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue"></span>
          </h2>
          <p className="mt-4 text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            An IIT Delhi incubated company with leading expertise in technical operations and research
          </p>
        </div>

  <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative flex flex-col rounded-2xl p-6 bg-white/95 backdrop-blur-[2px] shadow-[0_8px_24px_rgba(2,6,23,0.06)] ring-1 ring-slate-200 hover:shadow-[0_14px_38px_rgba(2,132,199,0.14)] hover:ring-sky-300 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:scale-[1.01]"
              style={{
                fontFamily: "'Poppins','Segoe UI',sans-serif",
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(6px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Hover overlay sweeping bottom -> top */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-sky-50 via-cyan-50 to-transparent" />
              {/* Bottom accent bar that grows on hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 text-2xl select-none shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-sky-300">
                    {it.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base md:text-lg leading-snug tracking-tight">{it.title}</h3>
                </div>

                <div className="mt-6 h-[3px] w-16 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 translate-y-2 group-hover:translate-y-0" />

                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-[0.95rem] text-center">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
