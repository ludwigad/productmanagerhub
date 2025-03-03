import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaRobot, FaUsers, FaBook, FaLightbulb, FaClipboardList } from 'react-icons/fa';

const Roadmap = () => {
  const features = [
    {
      quarter: 'Q1 2025',
      title: 'Community Hub',
      icon: <FaUsers className="text-blue-400" size={24} />,
      color: 'from-blue-500/20 to-blue-600/20',
      textColor: 'text-blue-400',
      features: [
        'Exclusive PM community access',
        'Discussion forums',
        'Private Slack channels',
        'Expert-led AMAs',
        'Resource sharing'
      ],
      status: 'In Development'
    },
    {
      quarter: 'Q2 2025',
      title: 'Product Notebook',
      icon: <FaBook className="text-green-400" size={24} />,
      color: 'from-green-500/20 to-green-600/20',
      textColor: 'text-green-400',
      features: [
        'AI-powered backlog management',
        'Intelligent prioritization',
        'Technical debt visualization',
        'Sprint planning assistant',
        'Integration with major tools'
      ],
      status: 'Product Definition'
    },
    {
      quarter: 'Q3 2025',
      title: 'Release Notes AI',
      icon: <FaClipboardList className="text-pink-400" size={24} />,
      color: 'from-pink-500/20 to-pink-600/20',
      textColor: 'text-pink-400',
      features: [
        'AI-powered release note generation',
        'Customizable templates',
        'Multi-channel distribution',
        'Impact analysis',
        'Automated changelog creation'
      ],
      status: 'Product Discovery'
    },
    {
      quarter: 'Q4 2025',
      title: 'Ask Oden (Basic)',
      icon: <FaRobot className="text-purple-400" size={24} />,
      color: 'from-purple-500/20 to-purple-600/20',
      textColor: 'text-purple-400',
      features: [
        'Unlimited questions for premium members',
        'Advanced response quality',
        'Full conversation history',
        'Specialized PM knowledge base',
        'Context-aware responses'
      ],
      status: 'In Discovery'
    },
    {
      quarter: 'Q1 2026',
      title: 'Prompt Studio',
      icon: <FaLightbulb className="text-yellow-400" size={24} />,
      color: 'from-yellow-500/20 to-yellow-600/20',
      textColor: 'text-yellow-400',
      features: [
        'Specialized PM prompts',
        'Template library',
        'Collaborative prompt engineering',
        'Custom prompt builder',
        'Performance analytics'
      ],
      status: 'In Discovery'
    }
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
              Join Us in Shaping the Future of Product Management
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-8">
              We're building the most comprehensive AI-powered platform for product managers. 
              Be among the first to experience these groundbreaking tools and help shape their development.
            </p>
            <button 
              onClick={() => window.open("https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Become a Founding Member
            </button>
          </div>
        </section>

        {/* Pricing Section - New */}
        <section className="py-16 bg-[#21222c]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Founding Member Offer
              </h2>
              <p className="text-gray-400">
                Lock in our lowest price forever. Price increases with each feature release.
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-[#2a2b35] rounded-2xl p-8 border border-blue-500/20 relative">
              {/* Early Adopter Badge */}
              <div className="absolute -top-3 right-4 bg-amber-500 text-black text-sm font-semibold px-4 py-1 rounded-full">
                Early Adopter
              </div>

              <div className="text-center mb-8">
                {/* Crown Icon */}
                <div className="text-amber-500 mb-2">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75 2.25 17.385 2.25 12zM12 7.5a.75.75 0 01.75.75v3.75h3.75a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75V8.25A.75.75 0 0112 7.5z" />
                  </svg>
                </div>
                <div className="text-amber-500 font-bold text-xl mb-2">Founding Member</div>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">$9.99</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <div className="text-sm text-amber-500/80 font-medium">
                  Special early adopter rate - Limited time offer
                </div>
              </div>
              
              {/* Features with enhanced icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Early access to all new features</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Price locked for life</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Unlimited access to all tools</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Premium community status</span>
                </div>
              </div>

              {/* Future Price Increases with enhanced styling */}
              <div className="bg-[#21222c] rounded-xl p-4 mb-8">
                <div className="font-semibold text-white mb-3">Future Price Increases:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Community Hub Launch: $19.99/mo
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Product Notebook Launch: $29.99/mo
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    Release Notes Launch: $39.99/mo
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Ask Oden Launch: $49.99/mo
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => window.open("https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/", "_blank")}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg transition-all hover:scale-105 font-semibold"
              >
                Become a Founding Member
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#21222c]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Founding Member Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2a2b35] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Early Access</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Priority access to all new features</li>
                  <li>• Exclusive beta testing opportunities</li>
                  <li>• Shape product development</li>
                </ul>
              </div>
              <div className="bg-[#2a2b35] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Lifetime Benefits</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Special founding member pricing</li>
                  <li>• Unlimited access to all features</li>
                  <li>• Premium community status</li>
                </ul>
              </div>
              <div className="bg-[#2a2b35] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Exclusive Perks</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Direct access to founding team</li>
                  <li>• Monthly founder sessions</li>
                  <li>• Featured member spotlights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-16 text-center">
              Product Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  {/* Quarter Badge */}
                  <div className={`absolute -top-4 right-4 px-4 py-1 rounded-full bg-gradient-to-r ${feature.color} ${feature.textColor} text-sm font-semibold`}>
                    {feature.quarter}
                  </div>

                  {/* Feature Card */}
                  <div className="bg-[#21222c] rounded-xl p-8 h-full hover:bg-[#2a2b35] transition-all group-hover:scale-[1.02]">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`inline-block px-4 py-2 rounded-full ${feature.color} ${feature.textColor} text-sm font-medium`}>
                      {feature.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Updated */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lock In Our Lowest Price Ever
            </h2>
            <p className="text-gray-400 mb-8">
              Join now at $9.99/month before prices increase with each feature release. 
              Your founding member rate will be locked in for life.
            </p>
            <button 
              onClick={() => window.open("https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Schedule a Founding Member Call
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap; 