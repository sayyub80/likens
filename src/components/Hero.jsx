import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import heroBg from '../assets/heroBg.jpg'; 

const Hero = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Sync auth state to show personalized buttons
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    if (token) {
      setUser({ role });
    }
  }, []);

  const stats = [
    { label: "AI Avatars", value: "1,200+" },
    { label: "Active Brands", value: "500+" },
    { label: "Creator Earnings", value: "$2M+" },
  ];

  return (
    <section 
      className="relative px-8 py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-brandPurple/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brandPurple/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-black/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-md font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Trusted by 500+ Brands
          </div>
          
          <h1 className="text-8xl sbb para md:text-7xl font-bold leading-tight text-gray-600">
            {user?.role === 'Creator' ? "Manage Your" : "License AI"}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-7xl">
              Avatars
            </span>{' '}
            {user?.role === 'Creator' ? "Portfolio" : "from Verified"}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-7xl">
              {user?.role === 'Creator' ? "Studio" : "Creators"}
            </span> 
          </h1>
          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            {user?.role === 'Creator' 
              ? "Access your creator dashboard to track your earnings, manage your licensed avatars, and view real-time performance analytics." 
              : "The first marketplace connecting brands with AI avatar creators. Legal, verified, and ready for your campaigns."}
          </p>

          <div className="flex flex-wrap gap-4">
            {/* DYNAMIC PRIMARY BUTTON */}
            <button 
              onClick={() => {
                if (!user) navigate('/marketplace');
                else if (user.role === 'Creator') navigate('/dashboard/creator');
                else navigate('/dashboard/business');
              }}
              className="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-purple-500/25"
            >
              {!user ? "Browse Creators" : user.role === 'Creator' ? "Go to Studio" : "Go to Dashboard"}
            </button>

            {/* DYNAMIC SECONDARY BUTTON */}
            {!user ? (
              <button 
                onClick={() => navigate('/login')}
                className="cursor-pointer bg-transparent border-2 border-zinc-200 text-zinc-600 px-8 py-3 rounded-xl font-normal text-lg hover:bg-white/10 transition"
              >
                Become a Creator
              </button>
            ) : (
              <button 
                onClick={() => navigate(user.role === 'Creator' ? '/analytics' : '/marketplace')}
                className="cursor-pointer bg-transparent border-2 border-zinc-200 text-zinc-600 px-8 py-3 rounded-xl font-normal text-lg hover:bg-white/10 transition"
              >
                {user.role === 'Creator' ? "View Earnings" : "Browse Marketplace"}
              </button>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image Grid */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img src={avatar1} alt="Avatar 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl mt-8">
            <img src={avatar2} alt="Avatar 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl -mt-8">
            <img src={avatar3} alt="Avatar 3" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
            <img src={avatar4} alt="Avatar 4" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;