import React, { useEffect, useRef, useState } from 'react';

const IconLocation = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const IconPhone = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h2l2 4-2 1a11 11 0 006 6l1-2 4 2v2a2 2 0 01-2 2h-1C8.82 18 6 15.18 6 12V11a2 2 0 00-2-2H3V5z" />
  </svg>
);

const IconMail = ({ className = 'h-4 w-4' }) => (
  <svg className={className + ' text-sppl-blue'} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
  </svg>
);

const INFO_BAR_HEIGHT_PX = 36; // matches h-9

const TopInfoBar = ({ show }) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--topbar-offset',
      show ? `${INFO_BAR_HEIGHT_PX}px` : '0px'
    );
  }, [show]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-sppl-blue/20">
        <div className="w-full px-6 sm:px-8">
          <div className="flex items-center justify-between h-9 text-[13px] text-gray-900">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 font-medium"><IconLocation /><span>2-A-2A, Second Floor Research & Innovation Park IIT Delhi- 110016 India</span></div>
              <div className="hidden md:flex items-center gap-2 font-medium"><IconPhone /><a href="tel:+917055559999" className="hover:text-sppl-blue">+91 70555 59999</a></div>
              <div className="hidden sm:flex items-center gap-2 font-medium"><IconMail /><a href="mailto:ceo@spplindia.org" className="hover:text-sppl-blue">ceo@spplindia.org</a></div>
            </div>
            <div className="hidden md:flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;

/* Example CSS for Top Info Bar and Navbar */
// filepath: c:\Users\Sanrachna Prahari 3\sppl-website\client\src\index.css

