import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 bg-[#1a1b1e] text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to our AI First Community
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Ask Oden: AI-powered knowledge, human-driven insights
        </p>
        <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1b1e] transition-colors">
          What is an AI First Community?
        </button>
      </div>
    </section>
  );
};

export default Hero; 