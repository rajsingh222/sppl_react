import React from 'react';

const About = () => {
  const features = [
    {
      icon: "🏗️",
      title: "Infrastructure Monitoring",
      description: "Advanced sensors and IoT devices for real-time structural health assessment"
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "AI-powered analysis for predictive maintenance and risk assessment"
    },
    {
      icon: "🔍",
      title: "Early Detection",
      description: "Identify structural issues before they become critical problems"
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Ensuring public safety through proactive monitoring solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About SPPL</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading company specializing in structural health monitoring, 
            providing cutting-edge solutions to ensure the safety and longevity of critical infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Pioneering Structural Health Monitoring
            </h3>
            <p className="text-gray-600 leading-relaxed">
              SPPL has been at the forefront of structural health monitoring technology for over a decade. 
              Our innovative approach combines state-of-the-art sensors, advanced data analytics, and 
              machine learning algorithms to provide comprehensive monitoring solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We work with government agencies, construction companies, and infrastructure managers 
              to ensure the safety and reliability of bridges, buildings, dams, and other critical structures.
            </p>
            <button className="btn-primary">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-sppl-blue to-sppl-light-blue rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h4 className="text-xl font-semibold mb-2">Trusted by Industry Leaders</h4>
                <p className="text-blue-100">
                  Monitoring 500+ critical structures across the country
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-gray-800">
              10+
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
