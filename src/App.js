import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Products from './components/Products';
import BusinessVerticals from './components/BusinessVerticals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import TopInfoBar from './components/TopInfoBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

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

  return (
    <div className="App min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 relative overflow-x-hidden">
      <div className="cursor-glow" style={{ transform: `translate(${cursorPos.x - 12}px, ${cursorPos.y - 12}px)` }} />
      <TopInfoBar />
      <Navbar />
      <Hero isLoading={isLoading} />
      <Highlights />
      
      {/* <About />
      <Projects />
      <Products />
      <BusinessVerticals />
      <Contact />
      <Footer /> */}
      
    </div>
  );
}

export default App;
