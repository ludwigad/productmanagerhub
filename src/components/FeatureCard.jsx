import React from 'react';

const FeatureCard = ({ icon, title, description, timing, colorClass }) => {
  return (
    <div className="bg-[#21222c] p-6 rounded-xl">
      <div className="w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <span className={`text-sm ${colorClass} font-medium`}>{timing}</span>
    </div>
  );
};

export default FeatureCard; 