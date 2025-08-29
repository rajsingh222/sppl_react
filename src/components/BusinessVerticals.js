import React from 'react';

const BusinessVerticals = () => {
  const verticals = [
    {
      id: 1,
      title: "Transportation Infrastructure",
      description: "Comprehensive monitoring solutions for bridges, highways, tunnels, and railway systems",
      icon: "🚗",
      services: ["Bridge Health Monitoring", "Traffic Load Analysis", "Tunnel Safety Systems", "Railway Infrastructure"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Building & Construction",
      description: "Advanced monitoring for commercial buildings, residential complexes, and industrial structures",
      icon: "🏢",
      services: ["Structural Integrity", "Foundation Monitoring", "Wind Load Analysis", "Seismic Monitoring"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Water Infrastructure",
      description: "Specialized monitoring for dams, reservoirs, water treatment plants, and coastal structures",
      icon: "💧",
      services: ["Dam Safety Monitoring", "Water Level Sensors", "Leak Detection", "Coastal Erosion"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Energy Infrastructure",
      description: "Monitoring solutions for power plants, transmission towers, and renewable energy facilities",
      icon: "⚡",
      services: ["Power Plant Monitoring", "Transmission Tower Health", "Wind Farm Monitoring", "Solar Infrastructure"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      id: 5,
      title: "Mining & Industrial",
      description: "Safety monitoring for mining operations, industrial facilities, and heavy machinery",
      icon: "⛏️",
      services: ["Mine Safety Systems", "Equipment Monitoring", "Structural Stability", "Environmental Monitoring"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      title: "Smart Cities",
      description: "Integrated monitoring solutions for modern urban infrastructure and smart city initiatives",
      icon: "🏙️",
      services: ["Urban Infrastructure", "Smart Buildings", "Public Safety", "Environmental Monitoring"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="business-verticals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Business Verticals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SPPL serves diverse industries with specialized structural health monitoring solutions, 
            ensuring safety and reliability across all sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {verticals.map((vertical) => (
            <div 
              key={vertical.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${vertical.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{vertical.icon}</div>
                <h3 className="text-xl font-bold mb-2">{vertical.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {vertical.description}
                </p>
              </div>
              
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Our Services:</h4>
                <ul className="space-y-2 mb-6">
                  {vertical.services.map((service, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${vertical.color} mr-3`}></div>
                      {service}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 border border-gray-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="bg-gradient-to-r from-sppl-blue to-sppl-light-blue rounded-2xl p-8 text-white mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Impact Across Industries
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Countries Reached</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2B+</div>
              <div className="text-blue-100">Infrastructure Protected</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Secure Your Infrastructure?
            </h3>
            <p className="text-gray-600 mb-6">
              Let our experts help you implement the right monitoring solution for your industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-sppl-blue font-semibold py-3 px-6 rounded-full transition-all duration-300 border-2 border-sppl-blue hover:border-sppl-dark-blue">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
