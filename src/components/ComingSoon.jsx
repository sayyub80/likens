import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = ({ pageName = "This Page" }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0B0E14]/50 backdrop-blur-sm px-4">
      {/* Background Radial Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative w-full max-w-[420px] text-center p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Animated Rocket Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] shadow-lg shadow-purple-500/20 animate-pulse">
          <span className="text-3xl">🚀</span>
        </div>

        {/* Text Content */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 font-mochi tracking-tight">
          Still Working <br /> 
          <span className="text-purple-400">On {pageName}</span>
        </h1>

        <p className="text-gray-400 text-sm mb-8 font-relyne leading-relaxed px-4">
          We're currently building this feature for you. 
          Stay tuned, we'll be live very soon!
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="flex-1 py-3 rounded-xl bg-white/5 text-white text-xs font-bold border border-white/10 hover:bg-white/10 transition-all active:scale-95"
          >
            Go Back
          </button>
          <button 
            onClick={() => navigate('/')}
            className="flex-[1.5] py-3 rounded-xl bg-[#7C3AED] text-white text-xs font-bold shadow-lg shadow-purple-500/20 hover:bg-[#6D28D9] transition-all active:scale-95"
          >
            Dashboard
          </button>
        </div>

        {/* Status indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
          <span className="text-[9px] text-gray-400 uppercase tracking-[0.2em] font-black">
            In Development
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;