import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import FeaturedAvatars from './components/FeaturedAvatars';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';

// This component represents your main landing page
const HomePage = () => (
  <>
    <Hero />
    <TrustedBrands />
    
    
    <Features />
    <HowItWorks />
    <FeaturedAvatars /> 
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        {/* Only show the footer if we aren't on the login page */}
       
      </div>
    </Router>
  );
}

export default App;