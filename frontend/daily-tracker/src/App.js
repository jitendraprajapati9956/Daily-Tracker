import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Dashboard from "./pages/Dashboard";
import MonthlyReport from "./pages/MonthlyReport";
import StreakPage from "./pages/StreakPage";
import RoutinePage from "./pages/RoutinePage";
import NamJapTrackerPage from "./pages/NamJapTrackerPage";
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/report" element={<ProtectedRoute><MonthlyReport /></ProtectedRoute>} />
      <Route path="/streak" element={<ProtectedRoute><StreakPage /></ProtectedRoute>} />
      <Route path="/routine" element={<ProtectedRoute><RoutinePage /></ProtectedRoute>} />
      <Route
        path="/namjaptracker"
        element={<NamJapTrackerPage />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}