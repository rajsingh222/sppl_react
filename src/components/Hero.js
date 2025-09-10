import React, { useEffect, useState, useRef } from 'react';

const Hero = ({ isLoading }) => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const messages = [
    {
      heading: 'We Offer',
      sub: 'Affordable and Sustainable Structural Health Monitoring',
    },
    {
      heading: 'We Provide',
      sub: 'Real-Time Monitoring for Safer Infrastructure',
    },
    {
      heading: 'We Ensure',
      sub: 'Early Detection of Structural Issues',
    },
    {
      heading: 'We Prepare',
      sub: 'AI & Machine Learning Insights for the Future',
    },
  ];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // Show current, then fade out before switching to next
    setVisible(true);
    const fadeOutTimer = setTimeout(() => setVisible(false), 2600); // visible time
    const nextTimer = setTimeout(() => setIndex((prev) => (prev + 1) % messages.length), 3200); // switch time

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(nextTimer);
    };
  }, [index, isLoading]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-[100svh] min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
    <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-bottom md:object-center"
          poster="/myimg/bridge.jpg"
          onError={() => { setVideoReady(true); }}
          onLoadStart={() => { setVideoReady(false); }}
          onLoadedData={() => { setVideoReady(true); }}
          onCanPlay={() => { setVideoReady(true); }}
          onPlaying={() => { setVideoReady(true); }}
        >
          {/* Add your video file to the public/videos folder */}
          <source src="/videos/construction.mp4" type="video/mp4" />
          <source src="/videos/background-video.webm" type="video/webm" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
  {/* Overlay removed; readability handled by local text backdrop below */}
      </div>

  {/* No gradient overlay; fold handled purely by layout overlap */}

      {/* Hero Content - cycling text */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-8"></div>
            <div className="h-16 bg-white/20 rounded-lg mx-auto mb-4 max-w-2xl"></div>
            <div className="h-8 bg-white/20 rounded-lg mx-auto max-w-lg"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div
              className={`transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
              }`}
            >
              <div className="inline-block rounded-xl bg-black/24 px-4 py-3 md:px-6 md:py-4 backdrop-blur-[1.5px]">
                <div className="mb-2 md:mb-3">
                  <span className="inline-block text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-blue-100 via-white to-blue-200 text-transparent bg-clip-text drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)] font-hero-heading">
                    {messages[index].heading}
                  </span>
                </div>
                <p className="text-2xl md:text-4xl text-white/95 font-medium max-w-5xl leading-relaxed mx-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] font-hero-sub">
                  {messages[index].sub}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
