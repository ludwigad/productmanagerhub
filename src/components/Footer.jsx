import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaGithub size={20} />, 
      color: 'hover:text-gray-300',
      url: 'https://github.com/ludwigad'
    },
    { 
      icon: <FaYoutube size={20} />, 
      color: 'hover:text-red-500',
      url: 'https://www.youtube.com/@ludwigad'
    },
    { 
      icon: <FaTwitter size={20} />, 
      color: 'hover:text-blue-400',
      url: 'https://x.com/AnthonyLudwig_'
    },
    { 
      icon: <FaInstagram size={20} />, 
      color: 'hover:text-pink-500',
      url: 'https://www.instagram.com/productmanagerhub/'
    },
    { 
      icon: <FaLinkedin size={20} />, 
      color: 'hover:text-blue-600',
      url: 'https://www.linkedin.com/company/productmanager-hub'
    }
  ];

  return (
    <footer className="bg-[#21222c] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Copyright */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
                src={logo} 
                alt="Product Manager Hub" 
                className="h-8"
              />
            </Link>
          </div>
          <p className="text-sm">
            © 2025 Product Manager Hub. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/about" 
                className="hover:text-white transition-colors hover:translate-x-1 inline-block transform"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-white font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/faq" 
                className="hover:text-white transition-colors hover:translate-x-1 inline-block transform"
              >
                FAQ
              </Link>
            </li>
            <li>
              <a 
                href="mailto:ludwigad@productmanagerhub.io" 
                className="hover:text-white transition-colors hover:translate-x-1 inline-block transform"
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link 
                to="/privacy" 
                className="hover:text-white transition-colors hover:translate-x-1 inline-block transform"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all hover:scale-110 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 