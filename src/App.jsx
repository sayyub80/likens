import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import FeaturedAvatars from './components/FeaturedAvatars';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import BusinessMarketplace from './components/BusinessMarketplace';
import LicenseCheckout from './components/LicenseCheckout';
import BusinessDashboard from './components/BusinessDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ComingSoon from './components/ComingSoon';
import AssetDetails from './components/AssetDetails';

// Layout that includes the Navbar
const NavbarLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

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
        <main>
          <Routes>
            {/* 1. PUBLIC ROUTES WITH NAVBAR */}
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<BusinessMarketplace />} />

              {/* PROTECTED BUSINESS ROUTES */}
              <Route element={<ProtectedRoute allowedRoles={['Business']} />}>
                <Route path="/marketplace/asset/:id" element={<AssetDetails />} />
                <Route path="/dashboard/business" element={<BusinessDashboard />} />
                <Route path="/checkout/license" element={<LicenseCheckout />} />
                <Route path="/licenses" element={<ComingSoon />} />
              </Route>

              {/* PROTECTED CREATOR ROUTES */}
              <Route element={<ProtectedRoute allowedRoles={['Creator']} />}>
                <Route path="/dashboard/creator" element={<Dashboard />} />
                <Route path="/my-avatars" element={<ComingSoon />} />
                <Route path="/payments" element={<ComingSoon />} />
                <Route path="/analytics" element={<ComingSoon />} />
              </Route>
            </Route>

            {/* 2. GUEST ONLY ROUTES */}
            {/* Logic moved directly into the element to check localStorage on every render */}
            <Route 
              path="/login" 
              element={
                localStorage.getItem('token') ? (
                  <Navigate 
                    to={localStorage.getItem('userRole') === 'Creator' ? '/dashboard/creator' : '/dashboard/business'} 
                    replace 
                  />
                ) : (
                  <AuthPage />
                )
              } 
            />

            {/* Catch-all: Redirect unknown paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;