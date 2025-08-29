import React from 'react';

const cardBase = "group relative rounded-2xl bg-gradient-to-br from-blue-100 via-white to-sky-100 backdrop-blur-md shadow-lg border border-sppl-blue/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover-ring";

const IconBell = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .53-.21 1.04-.6 1.4L4 17h5m6 0a3 3 0 11-6 0m6 0H9" />
  </svg>
);

const IconNews = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M19 20H6a2 2 0 01-2-2V6h13a2 2 0 012 2v12z"/>
    <path strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" d="M8 8h7M8 12h7M8 16h5"/>
  </svg>
);

const Ticker = ({ title, items, icon }) => (
  <div className={`${cardBase} p-6 h-64`}> 
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sppl-blue">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <span className="text-xs text-sppl-blue/80">Live</span>
      </div>
      <div className="mt-2 h-px bg-gradient-to-r from-transparent via-sppl-blue/30 to-transparent" />
    </div>
    <div className="relative h-[192px] v-ticker-container fade-mask">
      <div className="absolute inset-x-0 v-ticker space-y-6">
        {items.concat(items).map((text, idx) => (
          <div key={idx} className="text-base text-gray-900 leading-relaxed px-1 text-shadow-soft">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Highlights = () => {
  const announcements = [
    'New deployment scheduled for SHM nodes in northern corridor this week.',
    'Maintenance window: Analytics dashboard updates on Friday 10 PM IST.',
    'Partnership announcement releasing next week. Stay tuned.'
  ];

  const news = [
    'Bridge monitoring shows improved stability after retrofitting phase 2.',
    'AI model achieved higher accuracy in anomaly detection trials.',
    'Live sensors report nominal activity across 97% of sites.'
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 md:-mt-16 mb-12 md:mb-16">
      <div className="max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Ticker title="Latest Announcement" items={announcements} icon={<IconBell className="h-5 w-5" />} />
          <Ticker title="News Update" items={news} icon={<IconNews className="h-5 w-5" />} />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
