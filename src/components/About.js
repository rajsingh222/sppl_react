import React, { useRef, useEffect, useState } from 'react';

const About = () => {
  const features = [
  {
  icon: "🏗️",
  title: "Bridge & Track Monitoring",
  description: "Specialized solutions for continuous health monitoring of bridges and railway tracks"
},
{
  icon: "📡",
  title: "Real-Time Insights",
  description: "Live monitoring systems that keep you informed about infrastructure condition"
},
{
  icon: "🔍",
  title: "Issue Detection",
  description: "Spot potential structural problems early to prevent costly failures"
},
{
  icon: "🛡️",
  title: "Reliability & Safety",
  description: "Strengthening public safety and trust through smarter infrastructure management"
}

  ];

  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`scroll-mt-28 py-20 bg-gray-50 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title relative inline-block text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
            About SPPL
            <span className="block mt-3 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           An IIT Delhi incubated company with leading expertise in technical operations and research
          </p>
        </div>

  <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 flex flex-col justify-center h-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pioneering Structural Health Monitoring
            </h3>
            <div className="space-y-4">
              <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
                <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                  At SPPL Sanrachna Prahari Pvt Ltd., we develop and provide advanced monitoring solutions that enable infrastructure to ‘communicate its health’ in real time.
                </span>
              </div>
              <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
                <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                  We help metro systems, railways and critical structures shift from reactive checks to proactive, continuous monitoring.
                </span>
              </div>
              <div className="group flex items-start gap-3 bg-white/80 rounded-xl shadow-sm p-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✨</span>
                <span className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                  Our expertise ensures safer, more reliable and future-ready infrastructure through smart, data-driven monitoring solutions.
                </span>
              </div>
            </div>
            {/* Merged: feature chips and phone callout moved below text */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <span className="text-lg">🏆</span>
                  <span className="text-sm md:text-base font-medium text-gray-800">Award Winning</span>
                </div>
                <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <span className="text-lg">👩‍💼</span>
                  <span className="text-sm md:text-base font-medium text-gray-800">Professional Staff</span>
                </div>
                <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <span className="text-lg">🕘</span>
                  <span className="text-sm md:text-base font-medium text-gray-800">24/7 Support</span>
                </div>
                <div className="group flex items-center gap-3 bg-white/80 rounded-xl shadow-sm p-3 border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <span className="text-lg">💰</span>
                  <span className="text-sm md:text-base font-medium text-gray-800">Fair Prices</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
                <span className="text-2xl">📞</span>
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-gray-600 leading-tight">Call to ask any question</p>
                  <p className="text-base md:text-lg font-semibold text-gray-800">+91 70555 59999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="w-full max-w-[180px] md:max-w-[240px] lg:max-w-[300px] flex items-center">
              <video
                className="rounded-2xl shadow-2xl border-2 border-blue-200 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                src="/videos/intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/hero-fallback.jpg"
                style={{ width: '100%', height: '100%', aspectRatio: '9/16' }}
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
