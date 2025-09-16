import React, { useEffect, useState, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import TopInfoBar from './components/TopInfoBar';
import Loader from './components/Loader';

import KeyServices from './components/KeyServices';
import Reveal from './components/Reveal';
import TeamMembers from './components/TeamMembers';


import ClientContactForm from './components/handlers/ClientForm';
import PartnershipContactForm from './components/handlers/PartnershipForm';
import OrganisationContactForm from './components/handlers/OrganisationForm';
import CollaborationForm from './components/handlers/OrganisationForm';
const Projects = React.lazy(() => import('./pages/Projects'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
// import BusinessVerticals from './components/BusinessVerticals';
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));

const AboutPage = React.lazy(() => import('./pages/about/AboutPage'));
const VisionMission = React.lazy(() => import('./pages/about/VisionMission'));
const OurScope = React.lazy(() => import('./pages/about/OurScope'));
const InnovationResearch = React.lazy(() => import('./pages/about/InnovationResearch'));
const TrainingConsultation = React.lazy(() => import('./pages/about/TrainingConsultation'));
// const ProcessFeatures = React.lazy(() => import('./pages/about/ProcessFeatures'));
const BusinessPolicy = React.lazy(() => import('./pages/about/BusinessPolicy'));
const RulesClientsPartners = React.lazy(() => import('./pages/about/RulesClientsPartners'));
const BusinessProduct = React.lazy(() => import('./pages/BusinessProduct'));
const BusinessServices = React.lazy(() => import('./pages/BusinessServices'));
const BusinessResearch = React.lazy(() => import('./pages/BusinessResearch'));
const BuildingHealthMonitoring = React.lazy(() => import('./pages/solutions/BuildingHealthMonitoring'));
const Bridges = React.lazy(() => import('./pages/solutions/Bridges'));
const Track = React.lazy(() => import('./pages/solutions/Track'));
const Tunnel = React.lazy(() => import('./pages/solutions/Tunnel'));
const Airport = React.lazy(() => import('./pages/solutions/Airport'));
const Industries = React.lazy(() => import('./pages/solutions/Industries'));
const Offshore = React.lazy(() => import('./pages/solutions/Offshore'));
const Electric = React.lazy(() => import('./pages/solutions/Electric'));
const Prestressed = React.lazy(() => import('./pages/solutions/Presetressed'));


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
            {/* Smooth, lazy-like in-view reveals */}
            <Reveal y={16}>
              <Highlights />
            </Reveal>
            <Reveal y={16} delay={60}>
              <About />
            </Reveal>
            <Reveal y={16} delay={100}>
              <KeyServices />
            </Reveal>
            <Reveal y={16} delay={120}>
              <Suspense fallback={<Loader label="Loading section…" size="md" />}> 
                <WhyChooseUs />
              </Suspense>
            </Reveal>
            <Reveal y={16} delay={140}>
              <Suspense fallback={<Loader label="Loading testimonials…" size="md" />}> 
                <Testimonials />
              </Suspense>
            </Reveal>
            <Reveal y={16} delay={160}>
              <TeamMembers />
            </Reveal>
            <Footer/>
          </>
        } />
        {/* About pages */}
  <Route path="/about" element={<Suspense fallback={<Loader label="Loading About…" size="lg" />}><AboutPage /></Suspense>} />
  <Route path="/about/vision-mission" element={<Suspense fallback={<Loader label="Loading Vision & Mission…" size="lg" />}><VisionMission /></Suspense>} />
  <Route path="/about/scope" element={<Suspense fallback={<Loader label="Loading Scope…" size="lg" />}><OurScope /></Suspense>} />
  <Route path="/about/innovation-research" element={<Suspense fallback={<Loader label="Loading Innovation & Research…" size="lg" />}><InnovationResearch /></Suspense>} />
  <Route path="/about/training-consultation" element={<Suspense fallback={<Loader label="Loading Training…" size="lg" />}><TrainingConsultation /></Suspense>} />
        {/* <Route path="/about/process-features" element={<Suspense fallback={<div className="p-6 text-slate-500">Loading…</div>}><ProcessFeatures /></Suspense>} /> */}
  <Route path="/about/business-policy" element={<Suspense fallback={<Loader label="Loading Policy…" size="lg" />}><BusinessPolicy /></Suspense>} />
  <Route path="/about/rules-clients-partners" element={<Suspense fallback={<Loader label="Loading Rules & Clients…" size="lg" />}><RulesClientsPartners /></Suspense>} />
  <Route path="/products" element={<Suspense fallback={<Loader label="Loading Products…" size="lg" />}><Products /></Suspense>} />
  <Route path="/products/:id" element={<Suspense fallback={<Loader label="Loading Product…" size="lg" />}><ProductDetails /></Suspense>} />
        {/* Business Verticals pages */}
  <Route path="/business-verticals/product" element={<Suspense fallback={<Loader label="Loading Product Vertical…" size="lg" />}><BusinessProduct /></Suspense>} />
  <Route path="/business-verticals/services" element={<Suspense fallback={<Loader label="Loading Services Vertical…" size="lg" />}><BusinessServices /></Suspense>} />
  <Route path="/business-verticals/research" element={<Suspense fallback={<Loader label="Loading Research Vertical…" size="lg" />}><BusinessResearch /></Suspense>} />
        {/* Solutions pages */}
    <Route path="/solutions/building-health-monitoring" element={<Suspense fallback={<Loader label="Loading Building Solutions…" size="lg" />}><BuildingHealthMonitoring /></Suspense>} />
    <Route path="/solutions/bridges" element={<Suspense fallback={<Loader label="Loading Bridges…" size="lg" />}><Bridges /></Suspense>} />
    <Route path="/solutions/track" element={<Suspense fallback={<Loader label="Loading Track…" size="lg" />}><Track /></Suspense>} />
    <Route path="/solutions/tunnel" element={<Suspense fallback={<Loader label="Loading Tunnel…" size="lg" />}><Tunnel /></Suspense>} />
  <Route path="/solutions/offshore" element={<Suspense fallback={<Loader label="Loading Offshore…" size="lg" />}><Offshore /></Suspense>} />
  <Route path="/solutions/prestressed" element={<Suspense fallback={<Loader label="Loading Prestressed…" size="lg" />}><Prestressed /></Suspense>} />
  <Route path="/solutions/electric" element={<Suspense fallback={<Loader label="Loading Electric…" size="lg" />}><Electric /></Suspense>} />
    <Route path="/dashboard" element={<Suspense fallback={<Loader label="Loading Dashboard…" size="xl" />}><Dashboard /></Suspense>} />
    <Route path="/projects" element={<Suspense fallback={<Loader label="Loading Projects…" size="lg" />}><Projects /></Suspense>} />
    <Route path="/blogs" element={<Suspense fallback={<Loader label="Loading Blogs…" size="lg" />}><Blogs /></Suspense>} />
    <Route path="/solutions/airport" element={<Suspense fallback={<Loader label="Loading Airport…" size="lg" />}><Airport /></Suspense>} />
  <Route path="/solutions/industries" element={<Suspense fallback={<Loader label="Loading Industries…" size="lg" />}><Industries /></Suspense>} />

  <Route path="/contact/client" element={<ClientContactForm />} />
  <Route path="/contact/partnership" element={<PartnershipContactForm />} />
  <Route path="/contact/organisation" element={<CollaborationForm />} />
        {/* Fallback route */}
        
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
