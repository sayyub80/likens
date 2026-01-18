import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.includes('dashboard');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Sync auth state from localStorage
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');
    const username = localStorage.getItem('username');

    if (token && username) {
      setUser({ token, role, username });
    } else {
      setUser(null);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // inside src/components/Navbar.jsx

const handleLogout = () => {
  // 1. Clear all session data immediately
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('username');
  
  // 2. Reset the local state so the Navbar updates to 'Logged Out' mode
  setUser(null);
  setShowDropdown(false);

  // 3. Force redirect to the home page
  navigate('/', { replace: true });
};

  const navStyles = isDashboard
    ? "bg-white border-b border-slate-200 py-3 text-slate-900 shadow-sm"
    : scrolled
      ? "bg-[#0f0c29]/80 backdrop-blur-xl border-b border-white/10 py-3 text-white shadow-2xl"
      : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-6 text-white";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 transition-all duration-300 ${navStyles}`}>
      
      {/* 1. Logo */}
      <Link to="/" className="flex items-center gap-2 group transition-transform active:scale-95">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDashboard ? 'bg-[#7C3AED]' : 'bg-white/10'}`}>
           <span className="text-white text-sm">✨</span>
        </div>
        <span className={`text-2xl font-bold tracking-wider font-mochi ${isDashboard ? 'text-slate-900' : 'text-white'}`}>
          Likens
        </span>
      </Link>

      {/* 2. ROLE-SPECIFIC NAVIGATION LINKS */}
      <div className={`hidden md:flex items-center gap-6 font-relyne text-sm font-bold ${isDashboard ? 'text-slate-600' : 'text-white/80'}`}>
        {user?.role === 'Creator' ? (
          <>
            <Link to="/dashboard/creator" className="hover:text-purple-600 transition-colors">Dashboard</Link>
            <Link to="/my-avatars" className="hover:text-purple-600 transition-colors">My Avatars</Link>
            <Link to="/analytics" className="hover:text-purple-600 transition-colors">Analytics</Link>
            <Link to="/payments" className="hover:text-purple-600 transition-colors">Payments</Link>
          </>
        ) : user?.role === 'Business' ? (
          <>
            <Link to="/dashboard/business" className="hover:text-blue-600 transition-colors">Dashboard</Link>
            <Link to="/marketplace" className="hover:text-blue-600 transition-colors">Marketplace</Link>
            <Link to="/licenses" className="hover:text-blue-600 transition-colors">Licenses</Link>
            <Link to="/analytics" className="hover:text-blue-600 transition-colors">Analytics</Link>
          </>
        ) : (
          ['Marketplace', 'Features', 'Pricing', 'Resources'].map(item => (
            <a key={item} href="#" className="hover:text-white transition-opacity">{item}</a>
          ))
        )}
      </div>

      {/* 3. User Identity and Profile Dropdown */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="relative" ref={dropdownRef} className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className={`text-xs font-bold leading-tight ${isDashboard ? 'text-slate-900' : 'text-white'}`}>{user.username}</p>
              <p className={`text-[10px] uppercase font-black ${user.role === 'Creator' ? 'text-purple-500' : 'text-blue-500'}`}>{user.role}</p>
            </div>
            
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm active:scale-95 transition-all"
            >
              {user.username?.charAt(0).toUpperCase() || 'U'}
            </button>

            {showDropdown && (
              <div className={`absolute right-0 top-12 mt-2 w-48 rounded-2xl shadow-2xl py-2 border ${isDashboard ? 'bg-white border-slate-100' : 'bg-[#1a1645] border-white/10'}`}>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="bg-white text-[#7C3AED] px-6 py-2 rounded-full font-bold hover:scale-105 transition-all">
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;