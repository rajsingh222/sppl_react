import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const CaretDown = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('home');
  const [openDrops, setOpenDrops] = useState({});

  // Sync active item with current route/hash when they change
  useEffect(() => {
    if (location.pathname === '/products') {
      setActiveItem('products');
      return;
    }
    if (location.pathname === '/projects') {
      setActiveItem('projects');
      return;
    }
    if (location.pathname === '/blogs') {
      setActiveItem('blogs');
      return;
    }
    if (location.pathname === '/dashboard') {
      setActiveItem('dashboard');
      return;
    }
    if (location.pathname.startsWith('/about')) {
      setActiveItem('about');
      return;
    }
    if (location.pathname === '/') {
      setActiveItem('home');
      return;
    }
  }, [location.pathname, location.hash]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const toggleDropdown = (label) => {
    setOpenDrops(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about', dropdown: [
      { label: 'About SPPL', to: '/about' },
      { label: 'Vision and Mission', to: '/about/vision-mission' },
      { label: 'Our Scope', to: '/about/scope' },
      { label: 'Innovation & Research', to: '/about/innovation-research' },
      { label: 'Training & Consultation', to: '/about/training-consultation' },
      { label: 'Process Features', to: '/about/process-features' },
      { label: 'Business Policy', to: '/about/business-policy' },
      { label: 'Rules for Clients and Partners', to: '/about/rules-clients-partners' },
    ]},
    { label: 'Business Verticals', to: '/#business-verticals', dropdown: [
      { label: 'Product', to: '/#bv-1' },
      { label: 'Services', to: '/#bv-2' },
      { label: 'Research and Development', to: '/#bv-3' },
    ]},
    { label: 'Products', to: '/products' },
    { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Dashboard', to: '/dashboard' },
    { label: 'Gallery', to: '/#gallery' },
    { label: 'Contact', to: '/#contact', dropdown: [
      { label: 'Client', to: '/#contact-client' },
      { label: 'Partnership', to: '/#contact-partnership' },
      { label: 'Organisation', to: '/#contact-organisation' },
    ]},
  ];

  const flatNavForSearch = navItems.flatMap(item =>
    item.dropdown ? [item, ...item.dropdown.map(d => ({ ...d, isChild: true, parent: item.label }))] : [item]
  );

  const filtered = query
    ? flatNavForSearch.filter(i => i.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <nav
      className="fixed left-0 right-0 z-[90] bg-white h-18 border-b border-gray-100 shadow-sm "
      style={{ top: 'var(--topbar-offset)' }} // pushes down when TopInfoBar is visible
    >
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center h-20">
          {/* Logo and Company Name - pinned far left */}
          <div className="flex items-center space-x-2 ml-2 sm:ml-4 shrink-0">
            <img 
              src="/img/logo3.png" 
              alt="SPPL Logo" 
              className="w-12 h-12 object-contain"
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
                  <Link
                    to={(item.to === '/products' && location.search.includes('section=')) ? `/products${location.search}` : item.to}
                    className={`nav-link-compact px-3 ${item.dropdown ? 'pr-8' : ''} ${
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to === '/about') ||
                      (activeItem === 'products' && item.to === '/products') ||
                      (activeItem === 'projects' && item.to === '/projects')
                      || (activeItem === 'blogs' && item.to === '/blogs')
                      || (activeItem === 'dashboard' && item.to === '/dashboard')
                        ? 'bg-sppl-dark-blue text-white rounded-full'
                        : ''
                    }`}
                    onClick={(e) => {
                      // Handle Home link when already on '/'
                      if (item.to === '/') {
                        e.preventDefault();
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveItem('home');
                        return;
                      }
                      // About root and children
                      if (item.to.startsWith('/about')) {
                        setActiveItem('about');
                      }
                      if (item.to === '/products') setActiveItem('products');
                      if (item.to === '/projects') setActiveItem('projects');
                      if (item.to === '/dashboard') setActiveItem('dashboard');
                    }}
                    aria-current={
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to === '/about') ||
                      (activeItem === 'products' && item.to === '/products') ||
                      (activeItem === 'projects' && item.to === '/projects')
                      || (activeItem === 'blogs' && item.to === '/blogs')
                      || (activeItem === 'dashboard' && item.to === '/dashboard')
                        ? 'page'
                        : undefined
                    }
                  >
                    {item.label}
                    {item.dropdown && (
                      <span className={`absolute right-2 top-1/2 -translate-y-1/2 transition-colors ${
                        (activeItem === 'about' && item.to === '/about') ? 'text-white' : 'text-gray-500 group-hover:text-white'
                      }`}>
                        <CaretDown className="h-4 w-4" />
                      </span>
                    )}
                  </Link>
                  {item.dropdown && (
                    <div className="pointer-events-none absolute left-0 mt-2 min-w-max w-56 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                      <div className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-xl p-2">
                        {item.dropdown.map(sub => (
                          <Link key={sub.label} to={sub.to} className="dropdown-item">
                            {sub.label}
                          </Link>
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
                          <Link key={(res.parent ? res.parent + '-' : '') + res.label} to={res.to} className="dropdown-item">
                            {res.parent && <span className="text-gray-400 mr-2">{res.parent} ›</span>}
                            {res.label}
                          </Link>
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

          {/* Mobile hamburger */}
          <div className="md:hidden ml-auto mr-1">
            <button
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="p-2 rounded-lg text-gray-700 hover:text-white hover:bg-sppl-dark-blue bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                // X icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden absolute left-0 right-0 top-20 origin-top bg-white border-t border-gray-100 shadow-xl transition-all duration-200 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isDrop = !!item.dropdown;
            const isOpen = !!openDrops[item.label];
            return (
              <div key={item.label} className="">
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`flex-1 px-3 py-2 rounded-lg text-gray-800 hover:bg-gray-50 ${
                      (activeItem === 'home' && item.to === '/') ||
                      (activeItem === 'about' && item.to.startsWith('/about')) ||
                      (activeItem === 'products' && item.to === '/products') ||
                      (activeItem === 'projects' && item.to === '/projects')
                        ? 'bg-sppl-dark-blue text-white'
                        : ''
                    }`}
                    onClick={(e) => {
                      if (item.to === '/') {
                        e.preventDefault();
                        if (location.pathname !== '/') navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveItem('home');
                        setIsMobileMenuOpen(false);
                        return;
                      }
                      if (item.to.startsWith('/about')) setActiveItem('about');
                      if (item.to === '/products') setActiveItem('products');
                      if (item.to === '/projects') setActiveItem('projects');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                  {isDrop && (
                    <button
                      className="ml-2 p-2 text-gray-600 hover:text-sppl-blue"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-drop-${item.label}`}
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <CaretDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {isDrop && (
                  <div
                    id={`mobile-drop-${item.label}`}
                    className={`pl-3 mt-1 space-y-1 overflow-hidden transition-all ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to}
                        className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                        onClick={() => {
                          setActiveItem(item.label.toLowerCase());
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
