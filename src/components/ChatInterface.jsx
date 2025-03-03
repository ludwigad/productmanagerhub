import React from 'react';
import { FaLightbulb, FaMicrophone, FaPlus, FaPaperPlane } from 'react-icons/fa';

const ChatInterface = () => {
  const exampleQuestions = [
    {
      icon: "🔍",
      text: "What are the key metrics for measuring product success?",
    },
    {
      icon: "📊",
      text: "How do I create an effective product roadmap?",
    },
    {
      icon: "⚖️",
      text: "What's the difference between MVP and MLP?",
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-[#222327] rounded-xl p-6">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-white text-xl font-semibold">Ask Oden</h3>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <FaLightbulb />
            <span className="text-sm">Example Questions</span>
          </div>
        </div>

        {/* Example Questions Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {exampleQuestions.map((question, index) => (
            <div 
              key={index}
              className="bg-[#2a2b30] p-4 rounded-lg cursor-pointer hover:bg-[#2f3035] transition-colors"
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{question.icon}</span>
                <div>
                  <p className="text-gray-300 text-sm mb-2">{question.text}</p>
                  <span className="text-purple-500 text-sm">Try this question →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="bg-[#2a2b30] rounded-lg flex items-center p-3 space-x-3">
          <FaPlus className="text-gray-400 cursor-pointer" />
          <input 
            type="text"
            placeholder="5 questions remaining..."
            className="flex-1 bg-transparent text-white border-none focus:outline-none"
          />
          <div className="flex items-center space-x-3 text-gray-400">
            <FaMicrophone className="cursor-pointer" />
            <FaPaperPlane className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 