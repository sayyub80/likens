import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🔐",
      title: "Legally Verified",
      description: "Every creator is identity-verified with proper rights management and licensing agreements."
    },
    {
      icon: "⚡",
      title: "Instant Licensing",
      description: "Get licensed access to AI avatars in minutes. No lengthy negotiations or contracts."
    },
    {
      icon: "📊",
      title: "Usage Analytics",
      description: "Track performance, impressions, and ROI with detailed analytics dashboards."
    },
    {
      icon: "💰",
      title: "Fair Pricing",
      description: "Transparent pricing tiers based on usage. No hidden fees or surprise charges."
    },
    {
      icon: "🎨",
      title: "High Quality",
      description: "Professional-grade AI avatars with 4K output and authentic expressions."
    },
    {
      icon: "🛡️",
      title: "Full Protection",
      description: "Comprehensive legal protection and indemnification for all licensed content."
    }
  ];

  return (
    <section className="bg-white py-7 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 font-mochi">
            Why Choose Likens?
          </h2>
          <p className="text-lg text-gray-500 font-relyne">
            The safest, most transparent AI avatar licensing platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] border border-gray-100 bg-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-mochi">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-relyne">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;