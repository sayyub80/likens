import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation

const AuthPage = () => {
  // State for toggling between Login and Sign-up
  const [isLogin, setIsLogin] = useState(true);
  // State for toggling between User and Creator
  const [role, setRole] = useState('User');
  
  // Initialize the navigate hook
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Logic: In a real app, you'd validate credentials here.
    // For now, we redirect directly to the dashboard path.
    console.log(`Logging in as ${role}`);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>

      {/* Main Auth Card (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
        
        {/* Brand Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 mb-3">
            <span className="text-yellow-400 text-2xl">✨</span>
          </div>
          <h1 className="text-3xl font-bold text-white font-mochi tracking-tight">Aura</h1>
        </div>

        {/* Role Toggle (User vs Creator) */}
        <div className="flex p-1.5 bg-black/40 rounded-2xl mb-8 border border-white/5">
          <button
            onClick={() => setRole('User')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              role === 'User' 
              ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white shadow-lg shadow-purple-500/30' 
              : 'text-gray-400 hover:text-white'
            }`}
          >
            User
          </button>
          <button
            onClick={() => setRole('Creator')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              role === 'Creator' 
              ? 'bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white shadow-lg shadow-purple-500/30' 
              : 'text-gray-400 hover:text-white'
            }`}
          >
            Creator
          </button>
        </div>

        {/* Header Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isLogin ? `Welcome Back, ${role}` : `Join as a ${role}`}
          </h2>
          <p className="text-gray-400 text-sm">
            {isLogin ? "Enter your details to access your account" : "Create an account to start your journey"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-gray-300 text-sm ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-gray-300 text-sm ml-1">Email or Username</label>
            <input 
              required
              type="text" 
              placeholder="aura@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-gray-300 text-sm">Password</label>
              {isLogin && (
                <a href="#" className="text-xs text-[#7C3AED] hover:underline">Forgot Password?</a>
              )}
            </div>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-purple-500/20 hover:opacity-90 transition-all active:scale-[0.98] mt-4"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8 text-gray-600">
          <div className="flex-1 border-t border-white/10"></div>
          <span className="px-4 text-[10px] uppercase tracking-widest">or continue with</span>
          <div className="flex-1 border-t border-white/10"></div>
        </div>

        {/* Google Sign In */}
        <button 
          type="button"
          onClick={handleSubmit} // Added redirect to Google button as well for testing
          className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-3.5 rounded-xl font-medium hover:bg-white/10 transition-all"
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" className="w-5 h-5" />
          Google
        </button>

        {/* Toggle between Login/Sign-up */}
        <p className="text-center mt-8 text-gray-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            type="button"
            onClick={toggleForm}
            className="ml-2 text-[#7C3AED] font-bold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;