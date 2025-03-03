import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We specialize in helping small and medium-sized businesses across various industries. Our clients range from healthcare providers and financial services to e-commerce platforms and professional service firms. If you're looking to leverage technology to grow your business, we're here to help."
    },
    {
      question: "How do you incorporate AI into your solutions?",
      answer: "We strategically integrate AI technologies like OpenAI and Claude to automate processes, enhance decision-making, and create intelligent workflows. Our solutions can include natural language processing, predictive analytics, and automated customer service, all tailored to your specific business needs."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. A typical automation project might take 2-4 weeks, while a comprehensive digital transformation could span 3-6 months. We pride ourselves on transparent communication and will provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. Our team remains available for updates, optimizations, and addressing any questions or concerns. We're committed to your long-term success and growth."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "Security is paramount in everything we build. We implement industry-standard encryption, secure authentication methods, and regular security audits. We also ensure compliance with relevant data protection regulations and industry-specific requirements."
    },
    {
      question: "What makes your automation solutions different?",
      answer: "Our solutions combine cutting-edge technologies like Make.com and n8n with custom integrations tailored to your workflow. We focus on creating scalable, maintainable systems that grow with your business, rather than quick fixes that need frequent updates."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in creating seamless integrations between various platforms and legacy systems. Whether you're using CRMs, ERPs, or custom solutions, we can build bridges that make everything work together efficiently."
    },
    {
      question: "What's your pricing model?",
      answer: "We offer flexible pricing models based on project scope and requirements. This includes fixed-price projects, monthly retainers, and custom arrangements. We'll provide detailed pricing during our consultation after understanding your specific needs."
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Get answers to common questions about our services, process, and how we can help transform your business.
            </p>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#21222c] rounded-lg p-6 hover:bg-[#2a2b35] transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </h3>
                    <FaChevronDown className="text-gray-400 group-hover:text-blue-400 transition-colors mt-1" />
                  </div>
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-8">
              We're here to help. Schedule a free consultation to discuss your specific needs.
            </p>
            <button 
              onClick={() => window.open("https://outlook.office365.com/book/ProductManagerHub1@productmanagerhub.io/", "_blank")}
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

export default FAQ; 