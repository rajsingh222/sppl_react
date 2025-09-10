import React, { useEffect, useState } from 'react';

const items = [
  {
    title: 'Structural Health Monitoring',
    text: 'Comprehensive Structural Health Monitoring solutions for bridges, buildings, and all civil infrastructure.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M3 5h18v2H3V5Zm0 6h18v2H3v-2Zm0 6h18v2H3v-2Z"/>
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
    title: 'Real-time monitoring',
    text: 'Indigenous sensors (Make in India) manufactured through patented technology of IIT Delhi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sky-600">
        <path d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Zm0 4a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3V7Zm0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-9 1a9 9 0 0 1 9-9v2a7 7 0 0 0-7 7H3Zm0 0a9 9 0 0 0 9 9v-2a7 7 0 0 1-7-7H3Z"/>
      </svg>
    ),
  },
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
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Why Choose Us</h2>
          <p className="mt-3 text-slate-700 max-w-3xl mx-auto">
            An IIT Delhi incubated company with leading expertise in technical operations and research
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative rounded-2xl bg-white/90 backdrop-blur border border-slate-200 ring-1 ring-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(6px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-cyan-100 ring-1 ring-sky-200/60">
                  {it.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm">{it.text}</p>
              </div>
              <div className="absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-sky-300/60 via-blue-300/60 to-cyan-300/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
