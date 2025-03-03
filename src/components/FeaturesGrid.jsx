import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = () => {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Insights",
      description: "Get instant answers to your product management questions with our advanced AI technology.",
      timing: "Available Now",
      colorClass: "text-green-400"
    },
    {
      icon: "💡",
      title: "Community Knowledge Base",
      description: "Access curated resources and best practices from experienced product managers.",
      timing: "Coming Q2 2024",
      colorClass: "text-blue-400"
    },
    {
      icon: "👥",
      title: "Peer Network",
      description: "Connect with other product managers and share experiences in a supportive environment.",
      timing: "Coming Q3 2024",
      colorClass: "text-purple-400"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track your learning progress and identify areas for improvement.",
      timing: "Coming Q4 2024",
      colorClass: "text-orange-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid; 