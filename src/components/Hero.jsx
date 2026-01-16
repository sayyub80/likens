import React from 'react';
// 1. Import your image
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
import heroBg from '../assets/heroBg.jpg'; 


const Hero = () => {
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
      {/* 2. Background Overlay (Darkens the image slightly so text is readable) */}
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
            License AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#022164] to-[#] font-extrabold text-7xl">Avatars</span> from  Verified <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-7xl">Creators </span> 
          </h1>
          

          
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            The first marketplace connecting brands with AI avatar creators. 
            Legal, verified, and ready for your campaigns.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gray-100 text-black px-8 py-3 rounded-xl font-normal text-lg hover:bg-indigo-100 cursor-pointer transition shadow-xl">
              Browse Marketplace
            </button>
            <button className="cursor-pointer bg-transparent border-2 border-zinc-200 text-zinc-600 px-8 py-3 rounded-xl font-normal text-lg hover:bg-white/10 transition">
              Become a Creator
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1 space-x-12">
                <div className="text-3xl ">{stat.value}</div>
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