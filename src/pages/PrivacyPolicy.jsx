import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: "At Product Manager Hub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site."
    },
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us when you fill out forms, communicate with us, or interact with our services. This may include your name, email address, phone number, company information, and any other information you choose to provide."
    },
    {
      title: "How We Use Your Information",
      bullets: [
        "To provide and maintain our services",
        "To notify you about changes to our services",
        "To provide customer support",
        "To gather analysis or valuable information to improve our services",
        "To monitor the usage of our services",
        "To detect, prevent and address technical issues"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure."
    },
    {
      title: "Third-Party Services",
      content: "Our service may contain links to third-party websites or services that are not owned or controlled by Product Manager Hub. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
    },
    {
      title: "Updates to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'last updated' date."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us through our consultation booking system or via our social media channels."
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Last updated: January 2024
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-invert prose-lg max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-gray-400 mb-4">
                      {section.content}
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {section.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 