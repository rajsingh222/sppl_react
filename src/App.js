import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './pages/Projects';
import Products from './pages/Products';
import BusinessVerticals from './components/BusinessVerticals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import TopInfoBar from './components/TopInfoBar';
import { useRef } from 'react';
import AboutPage from './pages/about/AboutPage';
import VisionMission from './pages/about/VisionMission';
import OurScope from './pages/about/OurScope';
import InnovationResearch from './pages/about/InnovationResearch';
import TrainingConsultation from './pages/about/TrainingConsultation';
import ProcessFeatures from './pages/about/ProcessFeatures';
import BusinessPolicy from './pages/about/BusinessPolicy';
import RulesClientsPartners from './pages/about/RulesClientsPartners';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showTopInfoBar, setShowTopInfoBar] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowTopInfoBar(entry.isIntersecting);
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
  }, [heroRef]);

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
            window.scrollTo({ top: y, behavior: 'smooth' });
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

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 relative overflow-x-hidden">
  <ScrollToHash />
        <div className="cursor-glow" style={{ transform: `translate(${cursorPos.x - 12}px, ${cursorPos.y - 12}px)` }} />
        <TopInfoBar show={showTopInfoBar} />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div ref={heroRef}>
                <Hero isLoading={isLoading} />
              </div>
              <Highlights />
              <About />
              {/* <BusinessVerticals />
              <Contact />
              <Footer /> */}
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
          <Route path="/products" element={
            <>
              <Products />
              {/* Add shared layout/components here if needed */}
            </>
          } />
          <Route path="/projects" element={
            <>
              <Projects />
              {/* Add shared layout/components here if needed */}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
