import React from 'react';
import Navbar from '../components/Navbar';
import { FaRocket, FaCode, FaCogs, FaChartLine } from 'react-icons/fa';
import Footer from '../components/Footer';
import TechScroll from '../components/TechScroll';

const BOOKING_URL = "https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/";

const Home = () => {
  const handleBooking = () => {
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      
      {/* Hero Section with Gradient Animation */}
      <main>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We Build The Future<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                One Pixel at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
              Transforming small and medium businesses with cutting-edge technology solutions. 
              We don't just build software—we build your digital future.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                See Our Work
              </button>
              <button 
                onClick={handleBooking}
                className="border border-gray-600 hover:border-blue-500 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </section>

        <TechScroll />

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">
              Solutions That Drive Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaRocket className="text-blue-500" size={24} />,
                  title: "Custom Software Development",
                  description: "Tailored solutions that perfectly fit your business needs and growth trajectory."
                },
                {
                  icon: <FaCode className="text-purple-500" size={24} />,
                  title: "Web Applications",
                  description: "Modern, responsive, and lightning-fast web applications built with cutting-edge tech."
                },
                {
                  icon: <FaCogs className="text-green-500" size={24} />,
                  title: "Process Automation",
                  description: "Streamline your operations with smart automation solutions that save time and money."
                },
                {
                  icon: <FaChartLine className="text-orange-500" size={24} />,
                  title: "Digital Transformation",
                  description: "Guide your business into the digital age with our comprehensive transformation services."
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#21222c] p-8 rounded-xl hover:bg-[#2a2b35] transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <button 
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home; 