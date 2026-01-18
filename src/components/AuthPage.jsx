import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('Business'); // Initial state updated to Business
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', fullName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 // src/components/AuthPage.jsx

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
  
  // Include the 'role' state in both Login and Register payloads
  const payload = isLogin 
    ? { emailOrUsername: formData.email, password: formData.password, role: role }
    : { ...formData, role: role };

  try {
    const response = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);

    // CRITICAL: Save username for the Navbar to display
    localStorage.setItem('token', data.token);
    localStorage.setItem('userRole', data.role);
    localStorage.setItem('username', data.username);

    // 4. ROLE-BASED REDIRECTION
    if (data.role === 'Creator') {
      navigate('/dashboard/creator');
    } else if (data.role === 'Business') {
      navigate('/dashboard/business');
    }
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs - Role Specific Colors */}
      <div className={`absolute w-96 h-96 blur-[120px] transition-all duration-1000 ${role === 'Business' ? 'bg-blue-600/20' : 'bg-purple-600/20'}`}></div>

      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
        <h1 className="text-3xl font-bold text-white font-mochi text-center mb-8">Likens</h1>

        {/* Role Toggle */}
        <div className="flex p-1 bg-black/40 rounded-2xl mb-8 border border-white/5">
          {['Business', 'Creator'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${role === r ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400'}`}
            >
              {r}
            </button>
          ))}
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl mb-4 text-xs text-center">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input name="fullName" required placeholder="Company or Full Name" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="username" required placeholder="Username" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </>
          )}
          <input name="email" required placeholder={isLogin ? "Email or Username" : "Email Address"} onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="password" type="password" required placeholder="Password" onChange={handleInputChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500" />
          
          <button type="submit" className={`w-full py-4 rounded-xl font-bold text-white shadow-xl transition-all ${role === 'Business' ? 'bg-blue-600' : 'bg-[#7C3AED]'}`}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400 text-sm">
          {isLogin ? "Need an account?" : "Have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-blue-400 font-bold hover:underline">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;