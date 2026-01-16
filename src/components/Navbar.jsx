import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-8 py-1 bg-white border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brandPurple rounded-xl flex items-center justify-center">
           <span className="text-white font-bold text-xl">★</span>
        </div>
        <span className="text-[2.5rem] font-black text-gray-800 tracking-wider logo">Likens</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-4 text-gray-600 font-medium text-md">
  <a href="#" className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-indigo-50 hover:text-indigo-600 active:scale-95">
    Marketplace
  </a>
  <a href="#" className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-50 hover:text-indigo-600 active:scale-95">
    For Creators
  </a>
  <a href="#" className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-50 hover:text-indigo-600 active:scale-95">
    For Businesses
  </a>
  <a href="#" className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-50 hover:text-indigo-600 active:scale-95">
    Pricing
  </a>
  <a href="#" className="px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-50 hover:text-indigo-600 active:scale-95">
    Resources
  </a>
</div>

      {/* Auth Actions */}
      <div className="flex items-center gap-6">
        {/* Change this button to a Link that goes to /login */}
        <Link 
          to="/login" 
          className="text-white font-semibold hover:text-purple-200 transition font-relyne"
        >
          Sign In
        </Link>
        
        <Link 
          to="/login" 
          className="bg-white text-[#7C3AED] px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg font-relyne"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;