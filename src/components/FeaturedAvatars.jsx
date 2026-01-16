import React from 'react';
// Import your avatar images from assets
import celeb1 from '../assets/celeb1.jpg';
import celeb2 from '../assets/celeb2.jpg';
import celeb3 from '../assets/celeb3.jpg';
import celeb4 from '../assets/celeb4.jpg';

const FeaturedAvatars = () => {
  const avatars = [
    {
      name: "Selena Gomez",
      creator: "Chloe Chen",
      price: "250",
      rating: "5.0",
      image: celeb1
    },
    {
      name: "Emma Stone",
      creator: "Alex Park",
      price: "300",
      rating: "5.0",
      image: celeb2
    },
    {
      name: "Jennifer Laurence",
      creator: "Sarah Miller",
      price: "200",
      rating: "4.9",
      image: celeb3
    },
    {
      name: "Jenna Ortega",
      creator: "James Wilson",
      price: "400",
      rating: "4.8",
      image: celeb4
    }
  ];

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with View All Button */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-normal text-gray-900 font-mochi">
              Featured Avatars
            </h2>
            <p className="text-lg text-gray-500 font-relyne">
              Top-rated AI digital assests this month
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-light font-relyne flex items-center gap-2 transition-all group">
            View All <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Avatars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {avatars.map((avatar, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={avatar.image} 
                  alt={avatar.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <span className="text-yellow-400">★</span> {avatar.rating}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 font-mochi">{avatar.name}</h3>
                  <p className="text-gray-400 text-sm font-relyne">by {avatar.creator}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="font-relyne">
                    <span className="text-blue-600 font-bold text-xl">${avatar.price}</span>
                    <span className="text-gray-400 text-sm">/mo</span>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="bg-green-50 text-green-500 px-3 py-1 rounded-full text-[10px] font-bold border border-green-100 flex items-center gap-1 uppercase tracking-wider">
                    <span className="bg-green-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">✓</span>
                    Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAvatars;