import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // We'll need to add the logo file to this path

const Navbar = () => {
  return (
    <nav className="bg-[#1a1b1e] py-2 px-6 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Product Manager Hub" 
              className="h-20"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 