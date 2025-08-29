import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "SmartBridge Monitor",
      category: "Bridge Monitoring",
      description: "Advanced IoT-based monitoring system for bridges with real-time data collection and analysis",
      features: ["Strain Monitoring", "Vibration Analysis", "Weather Resistance", "5G Connectivity"],
      price: "Contact Us",
      image: "🌉",
      popular: true
    },
    {
      id: 2,
      name: "Structural Health Dashboard",
      category: "Software Solution",
      description: "Comprehensive web-based dashboard for monitoring and analyzing structural health data",
      features: ["Real-time Monitoring", "Predictive Analytics", "Custom Alerts", "Mobile App"],
      price: "Subscription Based",
      image: "📊",
      popular: false
    },
    {
      id: 3,
      name: "Foundation Sensor Array",
      category: "Building Monitoring",
      description: "High-precision sensors for monitoring building foundations and structural integrity",
      features: ["Settlement Monitoring", "Load Distribution", "Temperature Compensation", "Long Battery Life"],
      price: "Contact Us",
      image: "🏗️",
      popular: false
    },
    {
      id: 4,
      name: "Dam Safety Suite",
      category: "Dam Infrastructure",
      description: "Complete monitoring solution for dams including water level, structural integrity, and seismic monitoring",
      features: ["Water Level Sensors", "Seismic Monitoring", "Leak Detection", "Emergency Alerts"],
      price: "Contact Us",
      image: "💧",
      popular: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge products designed specifically for structural health monitoring, 
            from advanced sensors to intelligent software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 ${
                product.popular ? 'ring-2 ring-sppl-blue' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-sppl-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{product.image}</div>
                  <span className="text-sm text-sppl-blue font-semibold">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sppl-blue">
                    {product.price}
                  </span>
                  <button className="btn-primary">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Comparison */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Why Choose SPPL Products?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sppl-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sppl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Certified Quality</h4>
              <p className="text-gray-600 text-sm">All products meet international safety and quality standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sppl-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sppl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock technical support and maintenance services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sppl-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sppl-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Secure & Reliable</h4>
              <p className="text-gray-600 text-sm">Enterprise-grade security and 99.9% uptime reliability</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-primary">
            Request Product Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
