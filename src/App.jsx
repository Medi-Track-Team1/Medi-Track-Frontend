import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Setup query client
const queryClient = new QueryClient();

// Reception pages
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));
import NotFound from "@/pages/Reception-pages/NotFound";

// Patient pages
import Home from "./components/Patient_panel/Home";
import AppointmentForm from './components/Patient_panel/AppointmentForm';
import Profile from './components/Patient_panel/Profile';
import AppointmentHistory from './components/Patient_panel/AppointmentHistory';
// import Login from './components/Patient_panel/Login'; // Uncomment if used

// Protected route component
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/medi-track">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {/* ✅ Home Page (Public) */}
            <Route path="/" element={<Home />} />

            {/* 🔐 Patient Panel Protected Routes */}
            <Route
              path="/appointment"
              element={
                // <ProtectedRoute>
                  <AppointmentForm />
                // </ProtectedRoute>
              }
            />
            <Route  x
              path="/profile"
              element={
                // <ProtectedRoute>
                  <Profile />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                // <ProtectedRoute>
                  <AppointmentHistory />
              //  </ProtectedRoute>
              }
            />

            {/* 🔐 Reception Panel Protected Route */}
            <Route
              path="/reception/*"
              element={
                // <ProtectedRoute>
                  <ReceptionPage />
                // </ProtectedRoute>
              }
            />

            {/* ❌ Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
