import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Head Office",
      details: ["123 Innovation Drive", "Tech Park, Silicon Valley", "CA 94025, USA"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@sppl.com", "support@sppl.com"]
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to secure your infrastructure? Contact our experts today to discuss 
            your structural health monitoring needs and discover how SPPL can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="general">General Inquiry</option>
                  <option value="bridge-monitoring">Bridge Monitoring</option>
                  <option value="building-monitoring">Building Monitoring</option>
                  <option value="dam-monitoring">Dam Monitoring</option>
                  <option value="custom-solution">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sppl-blue focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of structural health monitoring experts is ready to help you 
                implement the right solution for your infrastructure needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-sppl-blue to-sppl-light-blue rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Need Immediate Assistance?</h4>
              <p className="text-blue-100 mb-4">
                Call our 24/7 emergency hotline for urgent structural safety concerns.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">+1 (555) 911-0000</div>
                <p className="text-blue-100 text-sm">Emergency Hotline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-4xl mb-2">🗺️</div>
            <p>Interactive Map Coming Soon</p>
            <p className="text-sm">Our office locations and project sites</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
