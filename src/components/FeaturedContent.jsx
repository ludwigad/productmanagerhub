import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';

const FeaturedContent = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const articles = {
    technical: [
      {
        title: "The Essential Skills Every Technical Product Manager Needs to Succeed",
        excerpt: "Discover the key technical and soft skills that make successful technical product managers stand out in today's competitive landscape.",
        readTime: "3 min read",
        tag: "management"
      },
      {
        title: "Building Data-Driven Product Strategies",
        excerpt: "Learn how to leverage data analytics to make informed product decisions and drive measurable results.",
        readTime: "5 min read",
        tag: "strategy"
      }
    ],
    discovery: [
      // ... discovery articles
    ]
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Featured Content</h2>
        <div className="flex space-x-4">
          <button 
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'technical' 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('technical')}
          >
            Technical PM Articles
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'discovery' 
                ? 'bg-purple-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('discovery')}
          >
            Product Discovery
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles[activeTab].map((article, index) => (
          <div 
            key={index}
            className="bg-[#21222c] p-6 rounded-xl hover:bg-[#2a2b30] transition-colors"
          >
            <div className="flex items-start space-x-4">
              <FaFileAlt className="text-purple-500 text-xl flex-shrink-0" />
              <div>
                <span className="text-xs text-purple-500 px-2 py-1 bg-purple-500/10 rounded-full">
                  #{article.tag}
                </span>
                <h3 className="text-white font-semibold text-lg mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                  <a href="#" className="text-purple-500 hover:text-purple-400">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedContent; 