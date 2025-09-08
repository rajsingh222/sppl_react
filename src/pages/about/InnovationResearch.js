import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function InnovationResearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        <div className="relative text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-white/20 to-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovation & Research</h1>
            <p className="text-lg md:text-xl text-blue-100">R&D initiatives and collaborations powering SPPL.</p>
            <span className="block mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-white/60 to-blue-200/60"></span>
          </div>
        </div>
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-gray-800 space-y-4">
            <p>We innovate at the intersection of sensing, analytics, and infrastructure engineering.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
