import React, { useState, useEffect } from 'react';

const CaretDown = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about', dropdown: [
      { label: 'Item 1', href: '#about-1' },
      { label: 'Item 2', href: '#about-2' },
      { label: 'Item 3', href: '#about-3' },
      { label: 'Item 4', href: '#about-4' },
      { label: 'Item 5', href: '#about-5' },
      { label: 'Item 6', href: '#about-6' },
      { label: 'Item 7', href: '#about-7' },
      { label: 'Item 8', href: '#about-8' },
    ]},
    { label: 'Business Verticals', href: '#business-verticals', dropdown: [
      { label: 'Vertical 1', href: '#bv-1' },
      { label: 'Vertical 2', href: '#bv-2' },
    ]},
    { label: 'Products', href: '#products' },
    { label: 'Projects', href: '#projects' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact', dropdown: [
      { label: 'Email Us', href: '#contact-email' },
      { label: 'Locations', href: '#contact-locations' },
    ]},
  ];

  const flatNavForSearch = navItems.flatMap(item =>
    item.dropdown ? [item, ...item.dropdown.map(d => ({ ...d, isChild: true, parent: item.label }))] : [item]
  );

  const filtered = query
    ? flatNavForSearch.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`} style={{ top: isScrolled ? 0 : 36 }}>
      <div className="w-full px-6 sm:px-8">
        <div className="flex items-center h-20">
          {/* Logo and Company Name - pinned far left */}
          <div className="flex items-center space-x-2 ml-2 sm:ml-4 shrink-0">
            <img 
              src="/img/logo3.png" 
              alt="SPPL Logo" 
              className="w-14 h-14 object-contain"
            />
            <div className="text-left">
              <div className="text-3xl font-bold text-sppl-blue leading-tight">SPPL India</div>
              <div className="text-base text-gray-600">An IIT Delhi Company</div>
            </div>
          </div>

          {/* Right pane widened: starts slightly left of center, extends to right */}
          <div className="hidden md:flex items-center w-3/4 ml-auto">
            {/* Desktop Navigation - wraps with small gaps */}
            <div className="flex items-center gap-x-1 whitespace-nowrap flex-1 justify-end">
              {navItems.map(item => (
                <div key={item.label} className={`relative group`}>
                  <a href={item.href} className={`nav-link-compact px-3 ${item.dropdown ? 'pr-8' : ''}`}>
                    {item.label}
                    {item.dropdown && (
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white transition-colors">
                        <CaretDown className="h-4 w-4" />
                      </span>
                    )}
                  </a>
                  {item.dropdown && (
                    <div className="pointer-events-none absolute left-0 mt-2 min-w-max w-56 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                      <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-2">
                        {item.dropdown.map(sub => (
                          <a key={sub.label} href={sub.href} className="dropdown-item">
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon + Panel pinned at far right of right pane */}
            <div
              className="flex items-center relative ml-4"
              onMouseEnter={() => { setIsSearchOpen(true); }}
              onMouseLeave={() => { setIsSearchOpen(false); }}
            >
              <button
                aria-label="Search"
                onClick={() => { setIsSearchOpen(s => !s); setQuery(""); }}
                className="p-2 rounded-full text-gray-600 hover:text-white hover:bg-sppl-dark-blue bg-gray-100 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-72">
                  <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-2">
                    <div className="flex items-center gap-2 px-2 pb-2">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        autoFocus
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search navigation..."
                        className="w-full bg-gray-100 rounded-full px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sppl-blue"
                      />
                    </div>
                    {filtered.length > 0 ? (
                      <div className="max-h-64 overflow-auto">
                        {filtered.map(res => (
                          <a key={(res.parent ? res.parent + '-' : '') + res.label} href={res.href} className="dropdown-item">
                            {res.parent && <span className="text-gray-400 mr-2">{res.parent} ›</span>}
                            {res.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">{query ? 'No matches' : 'Type to search menu'}</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
