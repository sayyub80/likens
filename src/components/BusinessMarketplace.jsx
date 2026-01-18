import React, { useState } from 'react';
import LicenseRequest from './LicenseRequest'; // Import the modal component
import { useNavigate } from 'react-router-dom'; // Import the navigation hook

// Assets imports
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';

const BusinessMarketplace = () => {
  const navigate = useNavigate(); // Initialize the navigator

  const handleLicenseClick = (creator) => {
    // Redirect to the checkout page and pass the creator object in state
    navigate('/checkout/license', { state: { creator } });
  };
  // State to track which creator is being licensed
  const [requestingCreator, setRequestingCreator] = useState(null);
const creators = [
    {
      id: "chloe-chen", // EXACT match for assetData key
      name: "Chloe Chen",
      specialty: "Gaming & 3D Avatars",
      price: 250,
      image: avatar1,
      rating: "5.0",
      assetsCount: 12,
      tags: ["High Fidelity", "Motion Ready"]
    },
    {
      id: "alex-park", // EXACT match for assetData key
      name: "Alex Park",
      specialty: "Tech & Corporate",
      price: 300,
      image: avatar2,
      rating: "5.0",
      assetsCount: 8,
      tags: ["Professional", "4K Output"]
    },
    {
      id: "sarah-miller", // Use a string slug for consistent routing
      name: "Sarah Miller",
      specialty: "Fitness & Lifestyle",
      price: 200,
      image: avatar3,
      rating: "4.9",
      assetsCount: 15,
      tags: ["Dynamic", "Engaging"]
    },
    {
      id: "james-wilson", // Use a string slug for consistent routing
      name: "James Wilson",
      specialty: "Business Strategy",
      price: 400,
      image: avatar4,
      rating: "4.8",
      assetsCount: 6,
      tags: ["Authoritative", "Verified"]
    }
  ];
  return (
    <div className="min-h-screen bg-[#0B0E14] pt-32 pb-20 px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-mochi">
              Marketplace for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]">Businesses</span>
            </h1>
            <p className="text-gray-400 font-relyne text-lg max-w-xl">
              Browse verified creators and license high-quality AI avatars for your brand campaigns.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 w-full md:w-80">
              <span className="text-gray-500">🔍</span>
              <input 
                type="text" 
                placeholder="Search specialty or creator..." 
                className="bg-transparent text-white outline-none font-relyne w-full placeholder:text-gray-600"
              />
            </div>
          </div>
        </div>

        {/* Creator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <div 
              key={creator.id} 
              className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Creator Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold font-moldie flex items-center gap-1">
                  ⭐ {creator.rating}
                </div>
              </div>

              {/* Creator Details */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white font-mochi">{creator.name}</h3>
                    <p className="text-[#7C3AED] font-relyne text-sm font-semibold">{creator.specialty}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-xl font-moldie">${creator.price}</div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest font-relyne">Per License</div>
                  </div>
                </div>

                {/* Stats & Tags */}
                <div className="flex items-center gap-4 py-4 border-y border-white/5">
                  <div className="text-center flex-1">
                    <div className="text-white font-bold font-moldie">{creator.assetsCount}</div>
                    <div className="text-gray-500 text-[10px] uppercase font-relyne">Assets</div>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex-[3] flex flex-wrap gap-2">
                    {creator.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-white/5 border border-white/10 text-gray-400 px-2 py-1 rounded-md font-relyne uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button: Triggers the Modal */}
    <button 
     onClick={() => navigate(`/marketplace/asset/${creator.id}`)}
      className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-purple-500/20 transition-all active:scale-95"
    >
      License Assets
    </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- LICENSE REQUEST MODAL --- */}
      {requestingCreator && (
        <LicenseRequest 
          creator={requestingCreator} 
          onClose={() => setRequestingCreator(null)} 
        />
      )}
    </div>
  );
};

export default BusinessMarketplace;