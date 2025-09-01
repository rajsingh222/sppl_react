import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductCard = ({ image, name, description, category }) => (
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
    <div className="aspect-video bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
      <div className="w-16 h-16 bg-sppl-blue/20 rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold text-sppl-blue">{image}</span>
      </div>
    </div>
    <div className="p-5">
      <div className="mb-2">
        <span className="inline-block px-2 py-1 bg-blue-50 text-sppl-blue text-xs font-medium rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-sppl-blue transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <button className="w-full bg-sppl-blue text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:bg-sppl-dark-blue hover:shadow-md">
        View Details
      </button>
    </div>
  </div>
);

const ProductSection = ({ title, description, cards, category }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((card, index) => (
          <ProductCard key={index} {...card} category={category} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-sppl-blue mb-4">Overview</h3>
          <p className="text-gray-700 leading-relaxed">
            Our {title.toLowerCase()} solutions provide comprehensive monitoring capabilities designed for modern infrastructure needs. 
            Built with cutting-edge technology and user-centric design principles, these systems deliver reliable performance 
            and actionable insights for critical decision-making processes.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100">
          <h3 className="text-2xl font-bold text-sppl-blue mb-4">Key Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sppl-blue rounded-full"></span>
              Real-time data monitoring and analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sppl-blue rounded-full"></span>
              Advanced AI-powered insights
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sppl-blue rounded-full"></span>
              Scalable architecture for growth
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sppl-blue rounded-full"></span>
              User-friendly interface design
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => {
  const productSections = [
    {
      title: "Decentralized Solutions",
      description: "Distributed monitoring systems that operate independently across multiple locations",
      category: "Decentralized",
      cards: [
        { image: "🔗", name: "Node Manager Pro", description: "Advanced node management system for distributed networks" },
        { image: "🌐", name: "Cloud Sync", description: "Seamless cloud synchronization across multiple locations" },
        { image: "⚡", name: "Edge Processor", description: "High-performance edge computing for real-time processing" },
        { image: "🔄", name: "Auto Balancer", description: "Intelligent load balancing for optimal performance" },
        { image: "📡", name: "Signal Hub", description: "Centralized signal processing and distribution" },
        { image: "🔒", name: "Secure Gateway", description: "Protected communication channels between nodes" }
      ]
    },
    {
      title: "Centralized Systems",
      description: "Unified monitoring platforms with centralized control and data management",
      category: "Centralized",
      cards: [
        { image: "🏢", name: "Command Center", description: "Centralized control hub for all operations" },
        { image: "📊", name: "Data Warehouse", description: "Comprehensive data storage and management" },
        { image: "🎯", name: "Control Panel", description: "User-friendly interface for system management" },
        { image: "📈", name: "Analytics Suite", description: "Advanced analytics and reporting tools" },
        { image: "🔧", name: "System Manager", description: "Complete system administration and maintenance" },
        { image: "📱", name: "Mobile App", description: "Mobile access to centralized systems" }
      ]
    },
    {
      title: "All-in-One Solutions",
      description: "Comprehensive monitoring packages that combine multiple functionalities",
      category: "All-in-One",
      cards: [
        { image: "📦", name: "Complete Suite", description: "Full-featured monitoring solution in one package" },
        { image: "🔄", name: "Integrated Platform", description: "Seamlessly integrated monitoring and analysis" },
        { image: "🎨", name: "Custom Builder", description: "Tailored solutions for specific requirements" },
        { image: "🚀", name: "Enterprise Pack", description: "Scalable solution for large organizations" },
        { image: "💼", name: "Business Suite", description: "Complete business monitoring solution" },
        { image: "🌟", name: "Premium Bundle", description: "Advanced features with premium support" }
      ]
    },
    {
      title: "Portable Systems",
      description: "Mobile and transportable monitoring solutions for field operations",
      category: "Portable",
      cards: [
        { image: "📱", name: "Mobile Monitor", description: "Portable monitoring device for field work" },
        { image: "💻", name: "Laptop Kit", description: "Complete monitoring setup for laptops" },
        { image: "📦", name: "Field Kit", description: "Portable kit for remote monitoring" },
        { image: "🔋", name: "Battery Pack", description: "Long-lasting power solutions for field use" },
        { image: "📡", name: "Wireless Hub", description: "Portable wireless communication hub" },
        { image: "🎒", name: "Backpack System", description: "Complete portable monitoring system" }
      ]
    },
    {
      title: "User-Focused Solutions",
      description: "Intuitive interfaces and user experience designed for all skill levels",
      category: "User-Focused",
      cards: [
        { image: "👤", name: "User Dashboard", description: "Personalized dashboard for individual users" },
        { image: "🎯", name: "Smart Interface", description: "Intelligent interface that adapts to users" },
        { image: "📚", name: "Learning Center", description: "Interactive tutorials and help system" },
        { image: "🎨", name: "Custom Themes", description: "Personalizable appearance and layout" },
        { image: "🔔", name: "Smart Alerts", description: "Intelligent notification system" },
        { image: "📱", name: "Mobile First", description: "Mobile-optimized user experience" }
      ]
    },
    {
      title: "Sensor Technology",
      description: "Advanced sensor systems for precise data collection and monitoring",
      category: "Sensors",
      cards: [
        { image: "📡", name: "Smart Sensors", description: "Intelligent sensors with built-in processing" },
        { image: "🌡️", name: "Environmental Monitor", description: "Multi-parameter environmental sensors" },
        { image: "⚡", name: "Power Monitor", description: "Electrical power monitoring sensors" },
        { image: "🏗️", name: "Structural Sensors", description: "Structural health monitoring sensors" },
        { image: "🌊", name: "Vibration Sensors", description: "High-precision vibration monitoring" },
        { image: "🔍", name: "Multi-Sensor Array", description: "Integrated sensor array system" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100">
      <Navbar />
      <div className="pt-20">
        <div className="text-center py-16 bg-gradient-to-r from-sppl-blue to-sppl-dark-blue text-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive monitoring solutions designed for modern infrastructure needs. 
              From decentralized networks to portable field systems, we provide cutting-edge technology 
              that delivers reliable performance and actionable insights.
            </p>
          </div>
        </div>
        
        {productSections.map((section, index) => (
          <ProductSection key={index} {...section} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
