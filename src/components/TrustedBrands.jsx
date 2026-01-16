import React from 'react';

const TrustedBrands = () => {
  const brands = [
    "Nike",
    "Apple",
    "Google",
    "Amazon",
    "Meta",
    "Tesla"
  ];

  return (
    <section className="bg-white py-10 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Subtitle */}
        <p className="text-center text-gray-400 font-relyne text-sm tracking-widest uppercase mb-10">
          Trusted by leading brands worldwide
        </p>

        {/* Brand Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-3xl font-bold text-gray-300 font-moldie hover:text-gray-400 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;