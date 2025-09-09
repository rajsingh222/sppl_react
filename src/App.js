import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './pages/Projects';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import BusinessVerticals from './components/BusinessVerticals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import TopInfoBar from './components/TopInfoBar';
import { useRef } from 'react';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import KeyServices from './components/KeyServices';
import AboutPage from './pages/about/AboutPage';
import VisionMission from './pages/about/VisionMission';
import OurScope from './pages/about/OurScope';
import InnovationResearch from './pages/about/InnovationResearch';
import TrainingConsultation from './pages/about/TrainingConsultation';
import ProcessFeatures from './pages/about/ProcessFeatures';
import BusinessPolicy from './pages/about/BusinessPolicy';
import RulesClientsPartners from './pages/about/RulesClientsPartners';
import BusinessProduct from './pages/BusinessProduct';
import BusinessServices from './pages/BusinessServices';
import BusinessResearch from './pages/BusinessResearch';
import BuildingHealthMonitoring from './pages/solutions/BuildingHealthMonitoring';
import Bridges from './pages/solutions/Bridges';
import Track from './pages/solutions/Track';
import Tunnel from './pages/solutions/Tunnel';
import Airport from './pages/solutions/Airport';
import Industries from './pages/solutions/Industries';

// Reveal removed for instant rendering
// Removed PageTransition for instant route changes

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Removed cursor glow mousemove handler to prevent frequent re-renders and visual artifacts

  // TopInfoBar logic moved to AppInner so it only runs on the Home route

  // Handles scrolling to hash targets like #about and scroll to top on route change
  const ScrollToHash = () => {
    const location = useLocation();
    const prevPathRef = React.useRef(location.pathname);
    const prevHashRef = React.useRef(location.hash);
    useEffect(() => {
      const { hash, pathname } = location;

      // If hash changed and exists, scroll to target with offset
      if (hash && hash !== prevHashRef.current) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            const header = document.querySelector('nav');
            const offset = (header?.offsetHeight || 0) + 8; // header height + small padding
            const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'auto' });
            // Remove hash to avoid browser re-anchoring when layout changes
            try {
              const url = new URL(window.location.href);
              url.hash = '';
              window.history.replaceState({}, '', url.toString());
            } catch {}
          }, 0);
        }
        prevHashRef.current = hash;
        prevPathRef.current = pathname;
        return;
      }

      // Only scroll to top when the path actually changes (not on hash-only or state updates)
      if (pathname !== prevPathRef.current) {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
        prevPathRef.current = pathname;
        prevHashRef.current = hash;
      }
    }, [location.pathname, location.hash]);
    return null;
  };

  // Routes without crossfade transitions
  const AnimatedRoutes = ({ isLoading, heroRef }) => {
    const location = useLocation();
    return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <>
            <div ref={heroRef}>
              <Hero isLoading={isLoading} />
            </div>
            {/* Sections now render instantly (no Reveal) */}
            <Highlights />
            <About />
            <KeyServices />
            <WhyChooseUs />
            <Testimonials />
            <Footer/>
          </>
        } />
        {/* About pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/scope" element={<OurScope />} />
        <Route path="/about/innovation-research" element={<InnovationResearch />} />
        <Route path="/about/training-consultation" element={<TrainingConsultation />} />
        <Route path="/about/process-features" element={<ProcessFeatures />} />
        <Route path="/about/business-policy" element={<BusinessPolicy />} />
        <Route path="/about/rules-clients-partners" element={<RulesClientsPartners />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Business Verticals pages */}
        <Route path="/business-verticals/product" element={<BusinessProduct />} />
        <Route path="/business-verticals/services" element={<BusinessServices />} />
        <Route path="/business-verticals/research" element={<BusinessResearch />} />
        {/* Solutions pages */}
        <Route path="/solutions/building-health-monitoring" element={<BuildingHealthMonitoring />} />
        <Route path="/solutions/bridges" element={<Bridges />} />
        <Route path="/solutions/track" element={<Track />} />
        <Route path="/solutions/tunnel" element={<Tunnel />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/solutions/airport" element={<Airport />} />
        <Route path="/solutions/industries" element={<Industries />} />
      </Routes>
    );
  };

  // Render TopInfoBar only on home route and manage its scroll behavior locally
  const AppInner = () => {
    const location = useLocation();
    const [showTopInfoBar, setShowTopInfoBar] = useState(false);

    useEffect(() => {
      if (location.pathname !== '/') {
        setShowTopInfoBar(false);
        try { document.documentElement.style.setProperty('--topbar-offset', '0px'); } catch {}
        return;
      }
      let ticking = false;
      let lastY = window.pageYOffset || 0;
      const showRef = { current: false };
      const computeInitial = () => {
        let next = false;
        try {
          if (heroRef.current) {
            const rect = heroRef.current.getBoundingClientRect();
            const inView = rect.bottom > 0 && rect.top < window.innerHeight;
            next = inView;
          }
        } catch {}
        showRef.current = next;
        setShowTopInfoBar(next);
      };
      requestAnimationFrame(computeInitial);
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.pageYOffset || 0;
          const delta = y - lastY;
          const goingUp = delta < -6;
          const goingDown = delta > 6;
          let nextShow = showRef.current;
          if (goingUp) nextShow = true;
          else if (goingDown) nextShow = false;
          if (nextShow !== showRef.current) {
            showRef.current = nextShow;
            setShowTopInfoBar(nextShow);
          }
          lastY = y;
          ticking = false;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [location.pathname]);

    const isHome = location.pathname === '/';
    const contentTopPad = isHome ? 'pt-0' : 'pt-20'; // pad for fixed navbar on non-home

    return (
      <>
        {isHome && <TopInfoBar show={showTopInfoBar} />}
        <Navbar />
        <div className={`relative z-10 overflow-hidden ${contentTopPad}`}>
          <AnimatedRoutes isLoading={isLoading} heroRef={heroRef} />
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 relative overflow-x-hidden">
        <ScrollToHash />
        {/* Cursor glow removed for performance and to stop content flicker */}
        <AppInner />
      </div>
    </Router>
  );
}

export default App;
