import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const ProductCard = ({ image, name, description, category, id, imgSrc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imgIndex, setImgIndex] = useState(0);
  const candidates = React.useMemo(() => {
    const list = [];
    if (imgSrc) list.push(imgSrc);
    // Single, safe fallback
    list.push(`/img/sppl-logo.png`);
    return list;
  }, [imgSrc]);

  const currentSrc = candidates[imgIndex];

  // Ensure we always start from the provided imgSrc when the product changes
  React.useEffect(() => {
    setImgIndex(0);
  }, [id, imgSrc, name]);

  return (
    <div className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 hover:scale-[1.04] cursor-pointer relative">
      <div className="bg-gradient-to-br from-blue-100 via-white to-sky-100">
    <div className="w-full h-56 md:h-64 flex items-center justify-center bg-white/80 p-3">
          {currentSrc && (
            <img
              src={currentSrc}
              alt={name}
              loading="lazy"
      className="max-h-full max-w-full object-contain"
              onError={() => setImgIndex((idx) => (idx + 1 < candidates.length ? idx + 1 : idx))}
            />
          )}
        </div>
        {!currentSrc && (
          <div className="flex items-center justify-center py-6">
            <div className="w-16 h-16 bg-gradient-to-tr from-sppl-blue/30 to-sppl-dark-blue/30 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <span className="text-3xl font-extrabold text-sppl-blue drop-shadow-lg">{image}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-sppl-blue text-xs font-semibold rounded-full shadow">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sppl-blue transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
        </p>
        <button
          className="w-full bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 hover:bg-sppl-dark-blue hover:shadow-lg shadow-md"
          onClick={() => navigate(`/products/${id}${location.search || ''}`)}
        >
          View Details
        </button>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-sppl-blue transition-all duration-300"></div>
    </div>
  );
};

const ProductSection = ({ title, description, cards, category }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sppl-blue mb-4 drop-shadow-lg tracking-tight">{title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {cards.map((card, index) => (
          <ProductCard
      key={`${category}-${(card.id || card.name)}-${index}`}
            {...card}
            category={category}
            id={(card.id || card.name)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl p-10 border border-blue-200 shadow-lg backdrop-blur-md">
          <h3 className="text-2xl font-bold text-sppl-blue mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed text-base">
            Our {title.toLowerCase()} solutions provide comprehensive monitoring capabilities designed for modern infrastructure needs. 
            Built with cutting-edge technology and user-centric design principles, these systems deliver reliable performance 
            and actionable insights for critical decision-making processes.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-100 via-white to-sky-50 rounded-2xl p-10 border border-sky-200 shadow-lg backdrop-blur-md">
          <h3 className="text-2xl font-bold text-sppl-blue mb-4">Key Features</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-sppl-blue rounded-full animate-pulse"></span>
              <span className="font-semibold">Real-time data monitoring and analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-sppl-blue rounded-full animate-pulse"></span>
              <span className="font-semibold">Advanced AI-powered insights</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-sppl-blue rounded-full animate-pulse"></span>
              <span className="font-semibold">Scalable architecture for growth</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-sppl-blue rounded-full animate-pulse"></span>
              <span className="font-semibold">User-friendly interface design</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12">
        <div className="h-1 w-2/3 bg-gradient-to-r from-sppl-blue via-sppl-dark-blue to-sky-400 rounded-full opacity-40"></div>
      </div>
    </div>
  </section>
);



const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const productSections = [
    {
      title: "Decentralised Solutions",
      description: "Distributed monitoring systems that operate independently across multiple locations",
      category: "Decentralised",
  cards: [
  { id: "xInc", name: "xInc", description: "Digital Inclinometer Unit", imgSrc: "/products/items/12.jpg"},
  { id: "xAlarm", name: "xAlarm", description: "Digital Alarming Unit", imgSrc: "/products/items/dist1-Photoroom.jpg"},
  { id: "xGeo", name: "xGeo", description: "Digital Geophone Unit", imgSrc: "/products/items/dist2-Photoroom.jpg" },
  { id: "xPlorer", name: "xPlorer", description: "Central Recording and Processing Unit", imgSrc: "/products/items/dist3-Photoroom.jpg" },
  { id: "xStrain", name: "xStrain", description: "Bridge Sensor Digitizer", imgSrc: "/products/items/dist4-Photoroom.jpg" },
  { id: "xWave", name: "xWave", description: "Digital Accelerometer Unit", imgSrc: "/products/items/dist5-Photoroom.jpg" },
  { id: "xSense", name: "xSense", description: "Voltage Sensor Digitizer", imgSrc: "/products/items/dist6-Photoroom.jpg" },
  { id: "xMet", name: "xMet", description: "Weather Station", imgSrc: "/products/items/dist7-Photoroom (1).jpg" }
      ]
    },
    {
      title: "Centralised Systems",
      description: "Unified monitoring platforms with centralized control and data management",
      category: "Centralised",
      cards: [
  { id: "xRover", name: "xRover", description: "Multi-channel Real-Time Data",imgSrc: "/products/items/cent8-photoroom.jpg" },
  { id: "Accelerometers", name: "Accelerometers", description: "Analog Accelerometers", imgSrc: "/products/items/cent9-photoroom.jpg" },
      ]
    },
    {
      title: "All-in-One Solutions",
      description: "Comprehensive monitoring packages that combine multiple functionalities",
      category: "All-in-One",
      cards: [
  { id: "xWave Max", name: "xWave Max", description: "Digital Standalone Unit", imgSrc: "/products/download/image.png" },
      ]
    },
    {
      title: "Portable Systems",
      description: "Mobile and transportable monitoring solutions for field operations",
      category: "Portable",
      cards: [
  { id: "xWave-Ambient", name: "xWave-Ambient", description: "Portable Digital Accelerometer Unit", imgSrc: "/products/items/port11-photoroom.jpg" },
  { id: "xPlorer-Ambient", name: "xPlorer-Ambient", description: "Central Portable Acquisition Unit Unit" ,imgSrc: "/products/items/port215-photoroom.jpg"},
  { id: "Carry Box",  name: "Carry Box", description: "Ambient Equipment Carry Box" ,imgSrc: "/products/items/portable/portable2-16.png"},
  { id: "xNet-Ambient", name: "xNet-Ambient", description: "Portable Network Unit",imgSrc: "/products/items/xNet-Photoroom.jpg" },

      ]
    },
    {
      title: "User-Focused Solutions",
      description: "Intuitive interfaces and user experience designed for all skill levels",
      category: "User-Focused",
      cards: [
  { id: "Pulse", name: "Pulse", description: "Personalized dashboard" ,imgSrc: "/products/items/Pulse-Photoroom (1).jpg"},
  { id: "xPlorer", name: "xPlorer", description: "Intelligent interface that adapts to users",imgSrc: "/products/items/xplo-Photoroom.jpg" },
      ]
    },
    {
      title: "Sensor Technology",
      description: "Advanced sensor systems for precise data collection and monitoring",
      category: "Sensors",
      cards: [
  { id: "smart-sensors", name: "Smart Sensors", description: "Short-Period Seismometers optimized for microtremor studies and geophysical surveys." ,imgSrc: "/products/download/sara3-Photoroom.jpg"},
  { id: "environmental-monitor", name: "Environmental Monitor", description: "A true force-balance accelerometer offering ultra-high dynamic range and ultra-low noise." ,imgSrc: "/products/download/sara2-Photoroom.jpg"},
  { id: "power-monitor", name: "Power Monitor", description: "Listening to the planet’s heartbeat with a true Broadband Sensor, crafted in Italy." ,imgSrc: "/products/items/sensors/3.jpg"},
  { id: "structural-sensors",  name: "Structural Sensors", description: "Designed to capture seismic sources at depth." ,imgSrc: "/products/items/sensors/4.jpg"},
  { id: "vibration-sensors",  name: "Vibration Sensors", description: "Rugged land-cased geophones for reliable seismic exploration",imgSrc: "/products/download/sara5-Photoroom.jpg" },
  { id: "multi-sensor-array", name: "Multi-Sensor Array", description: "High-performance sensor designed for downhole seismic exploration.",imgSrc: "/products/download/sara4-Photoroom.jpg"},
  { id: "multi-sensor-array",  name: "Multi-Sensor Array", description: "High-sensitivity Compact Broadband Seismometer",imgSrc: "/products/download/sara1-Photoroom.jpg"}
      ]
    }
  ];

  // Section icons for buttons
  const sectionIcons = [
    '🔗', // Decentralized
    '🏢', // Centralized
    '📦', // All-in-One
    '📱', // Portable
    '👤', // User-Focused
    '📡', // Sensors
  ];

  // Show all 6 sections (including Sensors)
  const visibleSections = productSections;
  const sectionKeys = React.useMemo(
    () => visibleSections.map(s => (s.title || '').toString().toLowerCase().replace(/\s+/g, '-')),
    [visibleSections]
  );
  const [activeSection, setActiveSection] = useState(0); // default: first section open

  // On mount and when URL changes, sync active section from ?section=
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionParam = params.get('section');
    if (sectionParam) {
      const idx = sectionKeys.indexOf(sectionParam);
      if (idx !== -1 && idx !== activeSection) setActiveSection(idx);
    }
  }, [location.search, sectionKeys]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive monitoring solutions designed for modern infrastructure needs. 
              From decentralized networks to portable field systems, we provide cutting-edge technology 
              that delivers reliable performance and actionable insights.
            </p>
          </div>
        </div>

        {/* Section Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12">
          {visibleSections.map((section, idx) => (
            <button
              key={section.title}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300 border-2 focus:outline-none text-xl tracking-tight
                ${activeSection === idx ? 'bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white border-sppl-blue scale-105 shadow-2xl' : 'bg-white text-sppl-blue border-blue-200 hover:bg-blue-50 hover:scale-105'} animate-fade-in`}
              style={{ boxShadow: activeSection === idx ? '0 8px 32px 0 rgba(44, 62, 80, 0.15)' : undefined }}
              onClick={() => {
                setActiveSection(idx);
                const key = sectionKeys[idx];
                const params = new URLSearchParams(location.search);
                params.set('section', key);
                navigate({ pathname: location.pathname, search: `?${params.toString()}` }, { replace: false });
              }}
            >
              <span className={`text-3xl transition-transform duration-300 ${activeSection === idx ? 'scale-125 drop-shadow-lg' : ''}`}>{section.cards[0]?.image || sectionIcons[idx]}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Expanded Section with background blur and divider */}
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-lg rounded-3xl -z-10"></div>
          <ProductSection key={visibleSections[activeSection].title} {...visibleSections[activeSection]} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
