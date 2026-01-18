import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  
  // Retrieve current auth data directly from storage
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  // 1. If no token, the user is logged out. Redirect to login
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. If the user's role is not authorized for this route, send them home
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // 3. If everything is correct, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;