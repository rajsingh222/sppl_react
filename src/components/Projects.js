import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Golden Gate Bridge Monitoring",
      category: "Bridge Infrastructure",
      description: "Comprehensive structural health monitoring system for one of the world's most iconic bridges",
      image: "🌉",
      technologies: ["IoT Sensors", "AI Analytics", "Real-time Monitoring"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Hoover Dam Safety System",
      category: "Dam Infrastructure",
      description: "Advanced monitoring solution ensuring the safety of critical water infrastructure",
      image: "💧",
      technologies: ["Strain Gauges", "Vibration Sensors", "Data Analytics"],
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Empire State Building",
      category: "Skyscraper",
      description: "Structural integrity monitoring for one of New York's tallest buildings",
      image: "🏙️",
      technologies: ["Structural Sensors", "Wind Monitoring", "Foundation Analysis"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Highway Network Monitoring",
      category: "Transportation",
      description: "Comprehensive monitoring system for major highway infrastructure across multiple states",
      image: "🛣️",
      technologies: ["Traffic Sensors", "Load Monitoring", "Predictive Analytics"],
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we're revolutionizing structural health monitoring across various 
            infrastructure projects, from iconic bridges to critical dams and skyscrapers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{project.image}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-sppl-blue transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-sm text-sppl-blue font-semibold mb-3">
                  {project.category}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white text-xs text-gray-600 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-sppl-blue font-semibold hover:text-sppl-dark-blue transition-colors duration-200">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="bg-gradient-to-r from-sppl-blue to-sppl-light-blue rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Structures Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoring Support</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
