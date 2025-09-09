import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Actual logo filenames present in public/logo (update as you add more)
  const logos = [
    'AIIMS_New_Delhi.png',
    'avgc.png',
    'Fitt.png',
    'Indian_Institute_of_Technology_Delhi_Logo.svg.png',
    'ishms-logo.png',
    'Larsen&Toubro_logo.svg',
    'moc 1.svg',
    'MSME Logo Vector.jpg',
    'nhai.jpg',
    'railways 1.webp',
    'richter.png',
  ];

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Media', href: '#news' }
    ],
    services: [
      { name: 'Bridge Monitoring', href: '#bridge-monitoring' },
      { name: 'Building Monitoring', href: '#building-monitoring' },
      { name: 'Dam Safety', href: '#dam-safety' },
      { name: 'Custom Solutions', href: '#custom-solutions' }
    ],
    resources: [
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'White Papers', href: '#white-papers' },
      { name: 'Documentation', href: '#documentation' },
      { name: 'Support Center', href: '#support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' }
    ]
  };

  const socialMedia = [
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/company/sppl' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com/sppl' },
    { name: 'Facebook', icon: '📘', href: 'https://facebook.com/sppl' },
    { name: 'YouTube', icon: '📺', href: 'https://youtube.com/sppl' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Logo Slider (above footer content) */}
  <div className="bg-gray-50 border-t border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative overflow-hidden" aria-label="Partner logos">
            {/* Edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            {/* marquee track: duplicate logos set for seamless loop */}
            <div className="flex items-center gap-8 animate-marquee will-change-transform">
              {[...Array(2)].map((_, dupIdx) => (
                <div key={dupIdx} className="flex items-center gap-6 shrink-0">
          {logos.map((file, i) => {
                    const src = encodeURI(`/logo/${file}`);
                    const label = file.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ');
                    return (
            <div key={`${dupIdx}-${i}`} className="h-16 w-40 md:w-48 flex items-center justify-center bg-white/80 backdrop-blur rounded-xl border border-gray-200/60 shadow-sm p-3 opacity-90 hover:opacity-100 transition">
                        <img
                          src={src}
                          alt={label}
              className="max-h-12 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const card = e.currentTarget.parentElement;
                            if (card) card.classList.add('hidden');
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sppl-blue to-sppl-dark-blue flex items-center justify-center ring-1 ring-white/10">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue">SPPL</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Pioneering the future of structural health monitoring through advanced 
              technology and innovative solutions. Ensuring infrastructure safety worldwide.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors duration-200 group ring-1 ring-white/10"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300/80 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300/80 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300/80 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sppl-blue via-sky-500 to-sppl-dark-blue">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on structural health monitoring technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="whitespace-nowrap inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white px-5 py-3 shadow-sm hover:shadow-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  </div>

  {/* Bottom Footer */}
  <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div className="text-gray-400 text-sm">
              © {currentYear} SPPL. All rights reserved. | Structural Health Monitoring Solutions
            </div>
            
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-sppl-blue hover:bg-sppl-dark-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
