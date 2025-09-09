import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
        <h3 className="text-lg font-normal text-gray-800 mb-2 group-hover:text-sppl-blue transition-colors tracking-tight">
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

const ProductSection = ({ title, description, cards, category, overview, features, hideDetails }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sppl-blue mb-4 drop-shadow-lg tracking-tight">{title}</h2>
  <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">{description}</p>
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

      {!hideDetails && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-2xl p-10 border border-blue-200 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-sppl-blue mb-4">Overview</h3>
            <p className="text-gray-800 leading-relaxed text-base">
              {overview || (
                <>Our {title.toLowerCase()} solutions provide comprehensive monitoring capabilities designed for modern infrastructure needs. Built with cutting-edge technology and user-centric design principles, these systems deliver reliable performance and actionable insights.</>
              )}
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-100 via-white to-sky-50 rounded-2xl p-10 border border-sky-200 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-bold text-sppl-blue mb-4">Key Features</h3>
            <ul className="space-y-3 text-gray-800">
              {(features && features.length ? features : [
                'Real-time data monitoring and analysis',
                'Advanced AI-powered insights',
                'Scalable architecture for growth',
                'User-friendly interface design'
              ]).map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 bg-sppl-blue rounded-full animate-pulse"></span>
                  <span className="font-semibold leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

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
      overview: "This system delivers advanced structural monitoring with real-time data acquisition and analysis from multiple sensors. It can instantly distribute alerts and updates to remote locations over the internet, ensuring rapid response during emergencies such as earthquakes.With its quick analysis feature, the system offers valuable insights into how dynamic loads interact with a structure’s modal characteristics—making it a powerful tool for engineers and researchers. Highly versatile, it supports various unit types and sensor configurations for advanced analysis.",
      features: [
        'Independent edge nodes with local buffering',
'Wireless / hybrid connectivity options',
'Time-synchronized acquisition',
'Fault isolation and resilience',
'Scales linearly across wide assets',
      ],
  cards: [
  { id: "xInc", name: "Digital Inclinometer Unit", imgSrc: "/products/items/12.jpg"},
  { id: "xAlarm", name: "Digital Alarming Unit",imgSrc: "/products/items/dist1-Photoroom.jpg"},
  { id: "xGeo", name: "Digital Geophone Unit",imgSrc: "/products/items/dist2-Photoroom.jpg" },
  { id: "xPlorer", name: "Central Recording and Processing Unit",  imgSrc: "/products/items/dist3-Photoroom.jpg" },
  { id: "xStrain", name: "Bridge Sensor Digitizer",  imgSrc: "/products/items/dist4-Photoroom.jpg" },
  { id: "xWave", name: "Digital Accelerometer Unit", imgSrc: "/products/items/dist5-Photoroom.jpg" },
  { id: "xSense", name: "Voltage Sensor Digitizer", imgSrc: "/products/items/dist6-Photoroom.jpg" },
  { id: "xMet", name: "Weather Station",  imgSrc: "/products/items/dist7-Photoroom (1).jpg" }
      ]
    },
    {
      title: "Centralised Systems",
      description: "Unified monitoring platforms with centralized control and data management",
      category: "Centralised",
      overview: "This system delivers advanced monitoring capabilities for structures by using intelligent software to gather and analyze real-time data from multiple sensors. It can instantly distribute alerts and data to remote locations over the internet, ensuring rapid response in emergencies such as earthquakes.With its quick analysis feature, the system provides valuable insights into the interaction between dynamic loads and a structure’s modal characteristics—making it a powerful tool for engineers and researchers. Highly versatile, it supports different sensor types and advanced accelerometers for in-depth structural analysis.",
      features: [
       'Easy IoT connectivity with scalable expansion options',
'Choose wireless or low-cost cable connections with noise-free digital signals at the sensor',
'Low power use with PoE capability and automated PDF reporting',
'Supports up to 256 units with parallel networks for large installations',
'Quick on-site setup, easy maintenance and multi-sensor compatibility',
      ],
      cards: [
  { id: "xRover",name: "Multi-channel Real-Time Data",imgSrc: "/products/items/cent8-photoroom.jpg" },
  { id: "Accelerometers", name: "Analog Accelerometers", imgSrc: "/products/items/cent9-photoroom.jpg" },
      ]
    },
    {
      title: "All-in-One Solutions",
      description: "Comprehensive monitoring packages that combine multiple functionalities",
      category: "All-in-One",
      overview: "This System represents a new benchmark in Structural Health Monitoring (SHM). This fully digital standalone unit is engineered for harsh environments and confined spaces, delivering precise control and advanced data acquisition in a compact rugged design. With an operating range from -40 °C to +55 °C and compliance with international safety and EMC standards, it is a reliable choice for a wide variety of SHM applications.",
      features: [
       'Rugged standalone design for harsh environments and confined spaces',
'Wide operating range from -40 °C to +55 °C with global compliance',
'High-precision digital control and advanced data acquisition',
      ],
      cards: [
  { id: "xWave Max", name: "Digital Standalone Unit",  imgSrc: "/products/download/image.png" },
      ]
    },
    {
      title: "Portable Systems",
      description: "Mobile and transportable monitoring solutions for field operations",
      category: "Portable",
      overview: "A portable, battery-powered system designed for reliable vibration monitoring in structures. With wireless connectivity, it’s easy to set up anywhere, supporting multiple sensor types and extended coverage.",

      features: [
       'Real-time measurement with noise-free digital technology',
'Long battery life with fast charging and one-button operation',
'Easy wireless or wired connectivity with automated reporting',
'Rugged outdoor-ready design with low maintenance',
      ],
      cards: [
  { id: "xWave-Ambient", name: "Portable Digital Accelerometer Unit", imgSrc: "/products/items/port11-photoroom.jpg" },
  { id: "xPlorer-Ambient", name: "Central Portable Acquisition Unit", imgSrc: "/products/items/port215-photoroom.jpg"},
  { id: "Carry Box", name: "Ambient Equipment Carry Box", imgSrc: "/products/items/portable/portable2-16.png"},
  { id: "xNet-Ambient", name: "Portable Network Unit", imgSrc: "/products/items/xNet-Photoroom.jpg" },

      ]
    },
    {
      title: "User-Focused Solutions",
      description: "Intuitive interfaces and user experience designed for all skill levels",
      category: "User-Focused",
      overview: "A Smarter, Cost-Effective Way to Monitor Any Structure From single-story homes to high-rise buildings and unique constructions, this SHM system delivers reliable and accurate monitoring at an affordable cost. With advanced accelerometer technology and seamless cloud integration. It provides real-time insights with unmatched precision. Connect one or more Pulse units for effortless data acquisition, processing and structural health tracking — anytime, anywhere.",

      features: [
        'Real-time streaming and flexible recording with Pulse units',
'Secure cloud-based software with remote monitoring',
'High-precision 20-bit AD conversion with low-noise  3-channel accelerometers',
'Versatile power options, customizable settings and seamless tool integration',
      ],
      cards: [
  { id: "Pulse", name: "Personalized dashboard" ,imgSrc: "/products/items/Pulse-Photoroom (1).jpg"},
  { id: "xPlorer",  name: "Intelligent interface that adapts to users",imgSrc: "/products/items/xplo-Photoroom.jpg" },
      ]
    },
    {
      title: "Sensor Technology",
      description: "Advanced sensor systems for precise data collection and monitoring",
      category: "Sensors",
      hideDetails: true,
      features: [
        'Low-noise broadband performance',
        'Temperature & drift compensated',
        'Energy harvesting options',
        'Environmental sealing (IP rated)',
        'Calibration traceability'
      ],
      cards: [
  { id: "smart-sensors", description: "Short-Period Seismometers optimized for microtremor studies and geophysical surveys." ,imgSrc: "/products/download/sara3-Photoroom.jpg"},
  { id: "environmental-monitor", description: "A true force-balance accelerometer offering ultra-high dynamic range and ultra-low noise." ,imgSrc: "/products/download/sara2-Photoroom.jpg"},
  { id: "power-monitor",  description: "Listening to the planet’s heartbeat with a true Broadband Sensor, crafted in Italy." ,imgSrc: "/products/items/sensors/3.jpg"},
  { id: "structural-sensors",  description: "Designed to capture seismic sources at depth." ,imgSrc: "/products/items/sensors/4.jpg"},
  { id: "vibration-sensors",  description: "Rugged land-cased geophones for reliable seismic exploration",imgSrc: "/products/download/sara5-Photoroom.jpg" },
  { id: "multi-sensor-array", description: "High-performance sensor designed for downhole seismic exploration.",imgSrc: "/products/download/sara4-Photoroom.jpg"},
  { id: "multi-sensor-array",  description: "High-sensitivity Compact Broadband Seismometer",imgSrc: "/products/download/sara1-Photoroom.jpg"}
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
  <div>
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-6">
             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
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
