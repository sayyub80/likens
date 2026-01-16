import React from 'react';
// Import your step images from assets
import step1 from '../assets/step1.jpg'; 
import step2 from '../assets/step2.jpg'; 
import step3 from '../assets/step3.jpg'; 

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Browse & Search",
      description: "Explore our marketplace of 1,200+ verified AI avatars across all categories.",
      image: step1
    },
    {
      id: "02",
      title: "Choose License",
      description: "Select the pricing tier that matches your usage needs. Monthly or annual billing.",
      image: step2
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download assets, access API, and start using your licensed avatar immediately.",
      image: step3
    }
  ];

  return (
    <section className="bg-gray-100 py-10 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-light text-gray-900 font-mochi">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 font-relyne">
            Get started in 3 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6 group">
              
              {/* Step Number Badge */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
                  {step.id}
                </div>
              </div>

              {/* Step Image Card */}
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 transform group-hover:-translate-y-2 transition-transform duration-300">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-gray-900 font-mochi">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-relyne px-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;