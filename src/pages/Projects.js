import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectCard = ({ image, name, description, category, status }) => (
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer">
    <div className="aspect-video bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center relative overflow-hidden">
      <div className="w-20 h-20 bg-sppl-blue/20 rounded-full flex items-center justify-center">
        <span className="text-3xl font-bold text-sppl-blue">{image}</span>
      </div>
      <div className="absolute top-4 right-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
          status === 'Completed' ? 'bg-green-100 text-green-700' :
          status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
          'bg-blue-100 text-sppl-blue'
        }`}>
          {status}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="mb-3">
        <span className="inline-block px-2 py-1 bg-blue-50 text-sppl-blue text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sppl-blue transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      <button className="w-full bg-sppl-blue text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-sppl-dark-blue hover:shadow-md transform hover:scale-105">
        View Project
      </button>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: "🏗️",
      name: "Smart Bridge Monitoring System",
      description: "Advanced structural health monitoring system for major infrastructure projects. Real-time data collection, AI-powered analysis, and predictive maintenance capabilities for bridges across the country.",
      category: "Infrastructure",
      status: "Completed"
    },
    {
      image: "🏭",
      name: "Industrial Plant Safety Network",
      description: "Comprehensive safety monitoring solution for industrial facilities. Continuous monitoring of critical parameters, automated alerts, and emergency response integration for enhanced workplace safety.",
      category: "Industrial",
      status: "In Progress"
    },
    {
      image: "🏢",
      name: "Smart Building Management",
      description: "Intelligent building monitoring and control system for commercial complexes. Energy optimization, environmental monitoring, and automated facility management for modern smart buildings.",
      category: "Commercial",
      status: "Completed"
    },
    {
      image: "🌉",
      name: "Highway Infrastructure Monitoring",
      description: "Large-scale monitoring network for national highway infrastructure. Distributed sensor arrays, real-time traffic analysis, and predictive maintenance for optimal road conditions.",
      category: "Transportation",
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="text-center py-20 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover our innovative projects that demonstrate the power of advanced monitoring technology. 
              From infrastructure to industrial applications, we deliver cutting-edge solutions that make a difference.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Impact</h2>
              <p className="text-lg text-gray-600">Our solutions have been deployed across various sectors</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sppl-blue mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sppl-blue mb-2">25+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sppl-blue mb-2">1000+</div>
                <div className="text-gray-600">Sensors Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sppl-blue mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Achieved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our monitoring solutions can benefit your infrastructure and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-sppl-blue text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 hover:bg-sppl-dark-blue hover:shadow-lg transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-sppl-blue text-sppl-blue py-3 px-8 rounded-lg font-medium transition-all duration-200 hover:bg-sppl-blue hover:text-white hover:shadow-lg transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
