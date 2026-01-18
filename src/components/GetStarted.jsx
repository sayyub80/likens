import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Sync auth state to personalize the final CTA
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    if (token) {
      setUser({ role });
    }
  }, []);

  return (
    <section className="relative">
      {/* 1. Brand Gradient Background */}
      <div className="absolute inset-"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight font-mochi">
          {user ? `Ready to Build More, ${user.role}?` : "Ready to Get Started?"}
        </h2>
        
        <p className="text-xl text-white/80 max-w-2xl mx-auto font-relyne">
          Join 500+ brands and creators using Likens to power their AI avatar content.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          {/* PRIMARY CTA: Changes based on user role */}
          <button 
            onClick={() => {
              if (!user) navigate('/marketplace');
              else if (user.role === 'Creator') navigate('/dashboard/creator');
              else navigate('/dashboard/business');
            }}
            className="bg-white text-[#4F46E5] px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all active:scale-95"
          >
            {!user ? "Browse Marketplace" : user.role === 'Creator' ? "Go to My Studio" : "View My Dashboard"}
          </button>

          {/* SECONDARY CTA: Hidden or changed for logged-in users */}
          {!user ? (
            <button 
              onClick={() => navigate('/login')}
              className="border-2 border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
            >
              Become a Creator
            </button>
          ) : (
            <button 
              onClick={() => navigate(user.role === 'Creator' ? '/my-avatars' : '/marketplace')}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
            >
              {user.role === 'Creator' ? "Upload New Avatar" : "Find More Creators"}
            </button>
          )}
        </div>
      </div>

      {/* 2. Abstract background shapes for extra polish */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default GetStarted;