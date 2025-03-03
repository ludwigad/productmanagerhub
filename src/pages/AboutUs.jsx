import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaUsers, FaLightbulb, FaHandshake, FaRocket, FaRobot, FaShieldAlt } from 'react-icons/fa';

const AboutUs = () => {
  const values = [
    {
      icon: <FaRobot className="text-purple-400" size={32} />,
      title: "AI-First Approach",
      description: "We believe in harnessing the power of AI to revolutionize how product managers work and make decisions."
    },
    {
      icon: <FaUsers className="text-blue-400" size={32} />,
      title: "Community Driven",
      description: "Our platform is built on the collective wisdom of product managers, fostering collaboration and knowledge sharing."
    },
    {
      icon: <FaLightbulb className="text-green-400" size={32} />,
      title: "Innovation Focus",
      description: "We're constantly pushing boundaries to create tools that make product management more efficient and effective."
    },
    {
      icon: <FaShieldAlt className="text-orange-400" size={32} />,
      title: "Enterprise Ready",
      description: "Built with security and scalability in mind, our platform is ready for teams of any size."
    }
  ];

  const clients = [
    "Technology Companies",
    "SaaS Platforms",
    "Enterprise Software",
    "AI/ML Companies",
    "Digital Agencies",
    "Product Teams",
    "Startups",
    "Scale-ups"
  ];

  return (
    <div className="min-h-screen bg-[#1a1b1e]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building the Future of<br />
              Product Management
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              We're creating an AI-powered ecosystem that empowers product managers 
              to make better decisions, collaborate effectively, and build amazing products.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Founded with a vision to democratize access to cutting-edge technology, Product Manager Hub bridges the gap between enterprise-level solutions and small to medium-sized businesses.
                  </p>
                  <p>
                    We recognized that while AI, automation, and digital transformation were revolutionizing large enterprises, smaller organizations often struggled to access and implement these game-changing technologies.
                  </p>
                  <p>
                    Today, we're proud to have helped numerous businesses across various industries streamline their operations, reduce costs, and achieve their digital transformation goals.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-[#21222c] p-6 rounded-xl hover:bg-[#2a2b35] transition-all">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 bg-[#21222c]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Who We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-[#2a2b35] p-6 rounded-xl text-center hover:bg-[#2f3042] transition-all hover:scale-105"
                >
                  <span className="text-gray-300 font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>
            <button 
              onClick={() => window.open("https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </section>

        {/* Platform Vision */}
        <section className="py-20 bg-[#21222c]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Platform Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">AI-Powered Assistant</h3>
                <p className="text-gray-400">
                  Oden, our AI assistant, is designed specifically for product managers, 
                  offering instant answers, guidance, and best practices.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Community Hub</h3>
                <p className="text-gray-400">
                  A space for product managers to connect, share knowledge, and collaborate 
                  through forums and private channels.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Product Notebook</h3>
                <p className="text-gray-400">
                  Intelligent tools for backlog management, prioritization, and technical 
                  debt visualization.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Prompt Studio</h3>
                <p className="text-gray-400">
                  Specialized prompts and templates for product managers to get the most 
                  out of AI interactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs; 