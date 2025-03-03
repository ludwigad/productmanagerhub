import React from 'react';
import { 
  FaCode, 
  FaDatabase, 
  FaCog, 
  FaRobot, 
  FaBrain, 
  FaGithub, 
  FaCloud,
  FaTerminal,
  FaServer,
  FaTools
} from 'react-icons/fa';

const TechScroll = () => {
  const technologies = [
    {
      name: 'Cursor',
      icon: <FaCode size={24} className="text-blue-400" />,
      description: 'AI-Powered Code Editor'
    },
    {
      name: 'Pinecone',
      icon: <FaDatabase size={24} className="text-green-400" />,
      description: 'Vector Database'
    },
    {
      name: 'Make.com',
      icon: <FaCog size={24} className="text-purple-400" />,
      description: 'Workflow Automation'
    },
    {
      name: 'n8n',
      icon: <FaTools size={24} className="text-orange-400" />,
      description: 'Workflow Orchestration'
    },
    {
      name: 'Claude',
      icon: <FaRobot size={24} className="text-blue-500" />,
      description: 'Advanced AI Assistant'
    },
    {
      name: 'OpenAI',
      icon: <FaBrain size={24} className="text-green-500" />,
      description: 'AI Integration'
    },
    {
      name: 'Bubble',
      icon: <FaCloud size={24} className="text-purple-500" />,
      description: 'No-Code Platform'
    },
    {
      name: 'Replit',
      icon: <FaTerminal size={24} className="text-blue-300" />,
      description: 'Cloud Development'
    },
    {
      name: 'Supabase',
      icon: <FaServer size={24} className="text-green-300" />,
      description: 'Backend Platform'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} className="text-gray-300" />,
      description: 'Version Control'
    },
  ];

  return (
    <div className="bg-[#21222c] py-16 overflow-hidden border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Cutting-Edge Tech Stack
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We leverage the latest AI-powered tools and enterprise-grade technologies to build scalable, 
          efficient solutions that transform your business operations.
        </p>
      </div>
      <div className="relative">
        <div className="flex space-x-12 animate-scroll">
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center bg-[#2a2b35] rounded-xl p-6 min-w-[160px] group hover:bg-[#2f3042] transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                {tech.name}
              </span>
              <span className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors text-center">
                {tech.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechScroll; 