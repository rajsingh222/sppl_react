import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

// Image component with robust fallbacks for details page
const ProductImage = ({ product }) => {
  const n = (product?.name || '').toString();
  const normalizedDash = n.replace(/\s+/g, '-');
  const normalizedPlain = n.replace(/\s+/g, '');
  const idStr = (product?.id || '').toString();
  const category = (product?.category || '').toString().toLowerCase();
  const categoryFolderMap = {
    decentralized: 'distributed',
    decentralised: 'distributed',
    centralized: 'centralised',
    centralised: 'centralised',
    portable: 'portable',
    'user-focused': 'personal',
    sensors: 'sensors',
  };
  const folder = categoryFolderMap[category] || '';

  const candidates = React.useMemo(() => {
    const list = [];
    if (product?.imgSrc) list.push(product.imgSrc);
    // Guesses under public/items and category subfolders
    list.push(`/items/${idStr}-Photoroom.jpg`);
    list.push(`/items/${idStr}.jpg`);
    list.push(`/items/${normalizedDash}-Photoroom.jpg`);
    list.push(`/items/${normalizedDash}.jpg`);
    list.push(`/items/${normalizedPlain}-Photoroom.jpg`);
    list.push(`/items/${normalizedPlain}.jpg`);
    if (folder) {
      list.push(`/items/${folder}/${idStr}-Photoroom.jpg`);
      list.push(`/items/${folder}/${idStr}.jpg`);
      list.push(`/items/${folder}/${normalizedDash}-Photoroom.jpg`);
      list.push(`/items/${folder}/${normalizedDash}.jpg`);
      list.push(`/items/${folder}/${normalizedPlain}-Photoroom.jpg`);
      list.push(`/items/${folder}/${normalizedPlain}.jpg`);
    }
    // Legacy download guesses
    list.push(`/download/${idStr}-Photoroom.jpg`);
    list.push(`/download/${idStr}.jpg`);
    // Final fallback logo
    list.push(`/img/sppl-logo.png`);
    return list;
  }, [product?.imgSrc, idStr, normalizedDash, normalizedPlain, folder]);

  const [imgIndex, setImgIndex] = React.useState(0);
  React.useEffect(() => { setImgIndex(0); }, [product?.id, product?.imgSrc]);
  const current = candidates[imgIndex];

  return (
    <img
      src={current}
      alt={product?.name}
      loading="lazy"
      className="max-h-full max-w-full object-contain"
      onError={() => setImgIndex((idx) => (idx + 1 < candidates.length ? idx + 1 : idx))}
    />
  );
};

// Full product data for all products (synced with Products.js)
const productData = [
  // Decentralized
  { id: 'xInc', name: 'xInc', category: 'Decentralized',
    overview: 'Introducing xInc – Precision Inclinometer for SHM xInc is a fully digital inclinometer built for harsh industrial environments, combining robustness with advanced data acquisition. Designed for versatility, it can operate as a standalone or wireless device, making it ideal for both urban infrastructure and complex facilities. Whether measuring depression, elevation or tilt, xInc delivers high-precision real-time data for reliable structural health monitoring.',
     features: [
       'Advanced connectivity with Wi‑Fi, Ethernet and GSM.',
       'Internal SD card storage with customizable sensor compatibility.',
       'Energy‑efficient design with solar and battery options.',
       'Rugged IP67‑rated Aluminium enclosure for harsh environments.',
       'User‑friendly interface with display and web‑based monitoring.'
  ], imgSrc: '/products/items/12.jpg' },
  { id: 'xAlarm', name: 'xAlarm', category: 'Decentralized', 
     overview: 'It activates external devices during triggered events and instantly delivers SMS alerts with critical values. With flexible integration into BMS, alarms, elevators and power systems, it offers reliable long-term performance and effortless installation.',
      features: [
        'Rugged IP67 Aluminium enclosure for reliable outdoor use.',
'4 relays and 10 TTL outputs for flexible event triggering.',
'SMS notifications with user-configurable parameters.',
'Easy setup through Voyager interface, supports multiple units.',
'Ultra-low power consumption with PoE capability.',
'Wide operating temperature range (-40°C to 85°C).'
      ], imgSrc: '/products/items/dist1-Photoroom.jpg' },
  { id: 'xGeo', name: 'xGeo', category: 'Decentralized',  overview: 'Monitor structural health with precision using our fully digital geophone. Built for affordability and flexibility, it enables reliable field and remote data acquisition even in the harshest environments. Its compact, rugged design, certified for industrial use from -40°C to 55°C, ensures long-lasting performance. Operate it as a standalone unit or seamlessly integrate it into a daisy-chain system with simple network installation. The high-sensitivity tri-axial geophone delivers accurate, real-time data, making it the ideal choice for long-term monitoring and analysis.',

    features: [
      'Standalone or daisy-chain operation for flexible deployment.',
'Rugged IP67 Aluminium enclosure for harsh environments.',
'Embedded high-quality tri-axial geophone with configurable sampling rates.',
'Multiple connectivity options: Ethernet, Wi-Fi, GSM with onboard Micro SD storage.',
'GPS/RTC synchronization, self-test function, and easy installation with leveling plate.',
'Ultra-low power consumption with PoE support and wide operating temperature range (-40°C to 85°C).'

    ], imgSrc: '/products/items/dist2-Photoroom.jpg' },
  { id: 'xPlorer', name: 'xPlorer', category: 'Decentralized', overview: 'Get real-time data management in harsh environments with our affordable, flexible solution. Perfect for field and remote data acquisition, structural analysis and small spaces. Compact, lightweight and certified for international safety and environments. Run reliably for days, months or even years without stopping.',
     features: [
      'Industrial-grade rugged enclosure for harsh environments.',
'Real-time data acquisition, management and analysis.',
'SQL data archiving with web-based reporting.',
'Event management with triggering, data compression and digital outputs.',
'Ethernet, Wi-Fi connectivity with GPS/RTC time synchronization.',
'Self-testing, remote control and efficient power management with low power consumption and PoE support.',
'Wide operating temperature range.'

     ], imgSrc: '/products/items/dist3-Photoroom.jpg' },
  { id: 'xStrain', name: 'xStrain', category: 'Decentralized', overview: 'xStrain – Flexible, Reliable Strain Monitoring xStrain is an affordable and adaptable solution for monitoring Wheatstone Bridge sensors in harsh environments. Ideal for field and remote data acquisition of low-voltage output sensors, it features a compact, rugged design certified for industrial use from -40°C to 55°C. Operate it as a standalone unit or integrate it into a network for easy installation. With a variety of sensor options, xStrain delivers precise monitoring and long-term reliable performance.',

     features: [
      'Distributed monitoring system for Wheatstone Bridge sensors.',
'Rugged Aluminium enclosure with IP67 protection.',
'High-resolution 24-bit AD conversion.',
'Multiple channels with configurable sampling rate and wireless/Ethernet communication.',
'Internal storage, GPS/RTC synchronization, self-test function and easy installation.',
'Low power consumption with PoE support.',
'Wide operating temperature range.'

     ], imgSrc: '/products/items/dist4-Photoroom.jpg' },
  { id: 'xWave', name: 'xWave', category: 'Decentralized',  overview: 'Reliable, Flexible SHM Monitoring Our fully digital solution provides affordable and versatile structural health monitoring for buildings. Ideal for field and remote data acquisition and analysis, it features a compact, rugged design certified for harsh industrial environments from -40°C to 55°C. Operate it as a standalone unit or integrate it into a network for easy installation. With a variety of sensor options, it delivers precise monitoring and long-term reliable performance for days, months or even years of continuous operation.',
     features: ['Operates standalone or in a daisy-chain SHM network.',
'Rugged IP67 Aluminium enclosure for harsh environments.',
'High-quality 32-bit AD conversion with embedded 3-channel accelerometer.',
'High sampling rate (200Hz) with user-configurable settings.',
'Multiple communication options with wireless support and internal storage.',
'GPS/RTC time synchronization and self-test function.',
'Easy installation, low power consumption, wide operating temperature range.'
], imgSrc: '/products/items/dist5-Photoroom.jpg' },
  { id: 'xSense', name: 'xSense', category: 'Decentralized', overview: 'xSense – Flexible, Reliable SHM Monitoring Unlock the full potential of structural health monitoring with xSense, a fully digital solution for acquiring data from any voltage-output sensor. Affordable and adaptable, it is designed for harsh environments and confined spaces. Its compact, rugged design is certified for industrial use from -40°C to 55°C. Easy network installation allows integration of a variety of sensors for precise monitoring, ensuring long-term reliable performance.',
     features: ['Distributed digitizer for monitoring voltage, current, and RTD sensors (displacement, temperature, humidity, wind, inclination, corrosion, etc.).',
'Rugged IP67 Aluminium enclosure for reliable operation in harsh environments.',
'High-quality 16-bit AD conversion with 8/16 channels for versatile sensor connectivity.',
'Configurable sampling rate with Ethernet, Wi-Fi, GSM connectivity, Micro SD storage and GPS/RTC synchronization.',
'Easy installation with self-test function, PoE capability (9-72VDC) and long-term reliable performance.'
], imgSrc: '/products/items/dist6-Photoroom.jpg' },
  { id: 'xMet', name: 'xMet', category: 'Decentralized',  overview: 'xMet – Advanced Weather Station Gateway Take your environmental monitoring to the next level with xMet, an advanced gateway for weather stations. Seamlessly integrate almost any Modbus-compatible weather station into your SHM system for real-time data acquisition of wind, temperature, humidity, pressure, solar radiation, precipitation and more. Its compact, rugged design ensures reliable performance in harsh environments for continuous operation over days, months or even years.',
     features: ['Rugged, durable design with IP67 protection for harsh environments.',
'RS-485 bus with Modbus protocol for easy integration and user-configurable channels.',
'Monitor multiple units with a single account for centralized management.',
'Flexible installation with wired or wireless connectivity, ultra-low power consumption and PoE support.',
'Wide operating temperature range (-40°C to 85°C) for extreme conditions.'
], imgSrc: '/items/dist7-Photoroom (1).jpg' },
  // Centralized
  { id: 'xRover', name: 'xRover', category: 'Centralized', overview: 'Experience precision and reliability with xRover. This custom-configured high-performance system delivers multi-channel, real-time data acquisition and structural analysis. It supports user-defined sampling rates and integrates seamlessly with all sensor types. Built in a durable, compact design, it ensures reliable performance even in harsh environments. With secure cloud-based tools, you can access real-time data and generate automated PDF reports from any internet-enabled device.',
     features: ['IP67-rated aluminium enclosure built for harsh environments.',
'Real-time data capture with centralized recording.',
'Quality AD conversion with customizable resolutions and sampling rates.',
'Adjustable number and type of channels to suit project needs.',
'Supports Ethernet and GSM protocols for seamless data transfer.',
'Internal SSD storage with GPS/RTC synchronization for precise data and time-stamping.'
], imgSrc: '/products/items/cent8-photoroom.jpg' },
  { id: 'Accelerometers', name: 'Accelerometers', category: 'Centralized', overview: 'Upgrade your SHM system with high-precision accelerometers. These force-balanced MEMS capacitive sensors deliver a wide dynamic range, excellent bandwidth and an ultra-low noise floor for high-resolution, accurate measurements. Combining performance with affordability, they offer exceptional value for advanced structural monitoring.',
     features: ['Durable Aluminium construction with IP67 protection.',
'Wide range of accelerometers with different sensitivities for diverse applications.',
'Available in both uni-axial and tri-axial configurations.',
'Easy mounting on various surfaces with a special leveling plate.',
'High precision and long-term dependability with simple installation.'
], imgSrc: '/products/items/cent9-photoroom.jpg' },
  // All-in-One
  { id: 'xWave Max', name: 'Digital Standalone Unit', category: 'All-in-One',  overview: 'This System represents a new benchmark in Structural Health Monitoring (SHM). This fully digital standalone unit is engineered for harsh environments and confined spaces, delivering precise control and advanced data acquisition in a compact rugged design. With an operating range from -40 °C to +55 °C and compliance with international safety and EMC standards, it is a reliable choice for a wide variety of SHM applications.',
      features: [
        'Fully digital standalone acquisition & processing',
        'Rugged compact enclosure for harsh environments',
        'Wide operating temperature (-40°C to +55°C)',
        'Integrated storage & edge analytics',
        'Standards compliant safety & EMC design'
      ],
      imgSrc: '/products/download/image.png' },
  // Portable
  { id: 'xWave-Ambient', name: 'xWave-Ambient', category: 'Portable', overview: 'Introducing a next-generation wireless solution for Structural Health Monitoring. With a self-healing algorithm, the system ensures seamless data transmission, even if some sensors temporarily lose connection. Devices communicate directly with each other, enhancing reliability and reducing dependency on gateways. Supporting standard Wi-Fi protocols (802.11n/g/b), it enables easy coverage extension and hassle-free sensor connectivity—no advanced network expertise required. Designed with portability in mind, its 12+ hour battery life makes it ideal for field measurements. Upgrade your SHM system with a smarter, more reliable wireless network.',
     features: ['Fully digital standalone unit engineered for harsh environments and confined spaces.',
'Precise control and advanced data acquisition in a compact rugged design.',
'Operating temperature range from -40°C to +55°C for reliable performance.',
'Compliant with international safety and EMC standards for versatile SHM applications.'
], imgSrc: '/products/items/port11-photoroom.jpg' },
  { id: 'xPlorer-Ambient', name: 'xPlorer-Ambient', category: 'Portable', overview: 'The xPlorer Ambient is a complete solution for reliable data acquisition and analysis in demanding field environments. With its portable design and long battery life, it’s built for extended measurements anytime, anywhere. Advanced features such as real-time monitoring, automated alerts and remote access keep you in control with ease. From structural health monitoring to environmental data collection, xPlorer Ambient is the ideal choice for versatile field applications.',
    features: ['Rugged enclosure designed for harsh environments.',
'Web-based reporting, archiving and real-time streaming with event triggering.',
'Supports Ethernet, Wi-Fi and GSM communication.',
'Low power use, GPS synchronization and pre/post-event data management.',
'Internal battery for 24 hours of operation plus charging support for connected nodes.'
], imgSrc: '/products/items/port215-photoroom.jpg' },
  { id: 'Carry Box', name: 'Carry Box', category: 'Portable', overview: 'Ambient Equipment Carry Box', features: ['Equipment storage', 'Portable', 'Durable'], imgSrc: '/products/items/portable/portable2-16.png' },
  { id: 'xNet-Ambient', name: 'xNet-Ambient', category: 'Portable',  overview: 'Introducing a next-generation wireless solution for Structural Health Monitoring. With a self-healing algorithm, the system ensures seamless data transmission, even if some sensors temporarily lose connection. Devices communicate directly with each other, enhancing reliability and reducing dependency on gateways. Supporting standard Wi-Fi protocols (802.11n/g/b), it enables easy coverage extension and hassle-free sensor connectivity—no advanced network expertise required. Designed with portability in mind, its 12+ hour battery life makes it ideal for field measurements. Upgrade your SHM system with a smarter, more reliable wireless network.',
     features: ['ABS enclosure (UL94V-0) built to withstand tough conditions.',
'Supports 802.11 b/g/n at 2.4 GHz with performance optimization.',
'Simple web interface and easy installation.',
'Low power consumption, soft On/Off switch, auto-charging and battery level indicator.',
'Compatible with Pulse units and other wireless monitoring devices.'
], imgSrc: '/products/items/xNet-Photoroom.jpg' },
  // User-Focused
  { id: 'Pulse', name: 'Pulse', category: 'User-Focused',  overview: 'Personalized structural health monitoring dashboard delivering actionable real-time insights.', features: [ 'Customizable widgets', 'Real-time alerting', 'Analytics & reporting exports', 'Multi-role access control' ], imgSrc: '/products/items/Pulse-Photoroom (1).jpg' },
  { id: 'xPlorer', name: 'xPlorer', category: 'User-Focused', overview: 'Adaptive intelligent interface that adjusts visualizations and controls to user context.', features: [ 'Context-aware UI', 'Seamless device scaling', 'Integrated data annotations', 'Fast search & filtering' ], imgSrc: '/products/items/xplo-Photoroom.jpg' },
  // Sensors
  { id: 'smart-sensors', name: 'Smart Sensors', category: 'Sensors',  overview: 'Our linearized velocitimeters are built using geophone cells with eigen-frequencies of either 4.5 Hz or 2 Hz. Although this approach has certain limitations, it allows achieving a flat response bandwidth that extends beyond the geophone’s natural band by shifting the eigen-frequency to a lower value. This technique is particularly effective for noise surveys, as the sensors demonstrate improved tolerance to tilting. Additionally, the high amplification factor (400 V/m/s) is advantageous when working with low-cost digitizers with poor signal-to-noise ratios or with older equipment.',
     features: ['Extended flat bandwidth by lowering the eigen-frequency beyond the geophone’s natural band.',
'Improved tilt tolerance, suitable for environmental noise surveys.',
'High amplification (400 V/m/s) for use with low SNR or older digitizers.'
], imgSrc: '/products/download/sara3-Photoroom.jpg' },
  { id: 'environmental-monitor', name: 'Environmental Monitor', category: 'Sensors', overview: 'This sensor is a Force Balance Accelerometer (FBA), fully designed and assembled in our laboratory for use in both seismological and engineering applications. It is capable of recording very low-energy vibrations without saturation even under very high-energy events. The sensor features a wide dynamic range, offering performance comparable to high-end instruments while maintaining excellent value for money. Its compatibility with third-party digitizers, low power consumption and very low instrumental noise make it a versatile choice for a broad range of applications.', 
    features: ['Wide dynamic range with reliable performance from low to high-energy vibrations.',
'Low power consumption and very low instrumental noise.',
'Compatible with third-party digitizers for flexible integration.'
], imgSrc: '/products/download/sara2-Photoroom.jpg' },
  { id: 'power-monitor', name: 'Power Monitor', category: 'Sensors', overview: 'This Sensor is optimized for fast deployment and operates reliably across a wide temperature range. The sensing elements are enclosed in a durable steel and aluminum case, minimizing mechanical stress caused by atmospheric pressure variations. It ensures highly accurate signal recording with ultra-low noise and low power consumption. Its high tilt tolerance allows recording to begin within minutes after deployment.',
     features: ['Wide dynamic range with reliable performance from low to high-energy vibrations.',
'Low power consumption and very low instrumental noise.',
'Compatible with third-party digitizers for flexible integration.'
], imgSrc: '/products/items/sensors/3.jpg' },
  { id: 'structural-sensors', name: 'Structural Sensors', category: 'Sensors', overview: 'This sensor is designed to integrate different types of instruments, such as velocitimeters and accelerometers. A mechanical passive-spring blocking system allows precise orientation control up to 10–15 meters below the surface, while motorized locking systems enable deployment at greater depths.',
     features: ['Supports integration of velocitimeters and accelerometers.',
'Mechanical passive-spring system for orientation control up to 10–15 m depth.',
'Motorized locking system for deployment at greater depths.'
], imgSrc: '/products/items/sensors/4.jpg' },
  { id: 'vibration-sensors', name: 'Vibration Sensors', category: 'Sensors', overview: 'Landcase geophones are widely used in both surface and deep exploration geophysics. They are available in different versions, varying by eigen-frequency, sensitivity, and orientation.Our digital seismograph fully leverages their high gain, making them especially effective for surface wave analysis. For proper operation, landcase geophones should be firmly coupled to the ground. When this is not possible, a holder or tripod can be used to acquire data reliably.',
     features: ['Available in different versions with varying eigen-frequency, sensitivity, and orientation.',
'High gain performance optimized for surface wave analysis with digital seismographs.',
'Flexible installation using direct ground coupling, holder, or tripod.'
], imgSrc: '/products/download/sara5-Photoroom.jpg' },
  { id: 'multi-sensor-array', name: 'Multi-Sensor Array', category: 'Sensors', overview: 'This sensor, commonly referred to as a Downhole, is a 5-channel modular probe designed for use with our systems. It is extremely user-friendly, featuring an electrical blocking system and an integrated battery, making field operations highly practical. With four horizontal channels, orientation control inside the borehole is not required. The standard version reaches depths of up to 50 meters, with customizable maximum lengths available. The latest version also offers a detachable sensor head for easier transportation.',
     features: ['5-channel modular probe with integrated battery and electrical blocking system for easy field use.',
'Four horizontal channels eliminate the need for orientation control in the borehole.',
'Standard depth up to 50 m (customizable), with detachable sensor head for easier transport.'
], imgSrc: '/products/download/sara4-Photoroom.jpg' },
  { id: 'multi-sensor-array', name: 'Multi-Sensor Array', category: 'Sensors', overview: 'This is a portable, compact, triaxial seismometer with short, mid and broad-band capability. It is designed for quick installation, reliable operation across wide temperature ranges and safe, convenient transport.', features: ['Compact and portable design.',
'Triaxial with short, mid and broad-band capability.',
'Quick installation and wide temperature operation.'
], imgSrc: '/products/download/sara1-Photoroom.jpg' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-sppl-blue">Product Not Found</h2>
            <button onClick={() => navigate('/products')} className="btn-primary">Back to Products</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 flex flex-col">
  <main className="flex-1 pb-12">
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white mb-10">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              {/* Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-sppl-blue mb-2">Overview</h2>
                <p className="text-gray-700 leading-relaxed bg-white rounded-xl p-6 shadow border border-gray-100">{product.overview}</p>
              </section>
              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-semibold text-sppl-blue mb-2">Key Features</h2>
                <ul className="space-y-2 bg-white rounded-xl p-6 shadow border border-gray-100">
                  {(product.features || []).map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 leading-relaxed">
                      <span aria-hidden="true" className="mt-1 w-3 h-3 rounded-full bg-sppl-dark-blue ring-2 ring-sppl-blue/30 shadow-sm flex-shrink-0"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 via-white to-sky-100">
                <div className="w-full h-80 md:h-96 flex items-center justify-center bg-white/80 p-4">
                  {/* Product Image with robust fallback */}
                  <ProductImage product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
