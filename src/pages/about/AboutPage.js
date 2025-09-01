import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="relative text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white overflow-hidden">
          {/* gradient accents */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SPPL</h1>
            <p className="text-lg md:text-xl text-blue-100">
              An IIT Delhi incubated company enabling infrastructure to communicate its health in real time.
            </p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-sppl-blue mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                  SPPL builds advanced Structural Health Monitoring (SHM) solutions for bridges, tracks,
                  and critical infrastructure. We deliver reliable, data-driven systems that enable
                  proactive maintenance and enhance public safety.
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100">
                <h2 className="text-2xl font-bold text-sppl-blue mb-4">Explore More</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>Vision & Mission</li>
                  <li>Our Scope</li>
                  <li>Innovation & Research</li>
                  <li>Training & Consultation</li>
                  <li>Process Features</li>
                  <li>Business Policy</li>
                  <li>Rules for Clients & Partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
