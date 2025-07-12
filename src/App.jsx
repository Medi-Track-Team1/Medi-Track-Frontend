import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportHome from "@/components/Report/ReportHome";
// Setup query client
const queryClient = new QueryClient();

// Lazy load reception page
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));
import NotFound from "@/pages/Reception-pages/NotFound";

// ✅ Patient pages
import Home from "./components/Patient_panel/Home";
import AppointmentForm from "./components/Patient_panel/AppointmentForm";
import Profile from "./components/Patient_panel/Profile";
import AppointmentHistory from "./components/Patient_panel/AppointmentHistory";
import Login from "./components/Patient_panel/Login"; // ✅ Login page
// ✅ Inventorey pages
import Inventory from "./components/Inventory/Inventory";
import Overview from "./components/Inventory/Overview"
import Prescript from "./components/Inventory/Prescript"
import Stock_mov from "./components/Inventory/Stock_mov"
// Protected route component
import ProtectedRoute from "./components/ProtectedRoute";

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

            {/* ✅ Login Page (Public) */}
            <Route path="/login" element={<Login />} />

            {/* 🔐 Patient Panel Protected Routes */}
            <Route
              path="/appointment"
              element={
                // <ProtectedRoute>
                <AppointmentForm />
                // </ProtectedRoute>
              }
            />
            <Route
              x
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
            <Route path="/report/*" element={<ReportHome />} />

            {/* ❌ Fallback */}
            <Route path="*" element={<NotFound />} />
            {/* Inventory Module Route */}
            <Route path="/Pharm-Inventory/" element={<Overview />} />
            <Route path="/Pharm-Inventory/Inventory" element={<Inventory />} />
            <Route path="/Pharm-Inventory/Stock_mov" element={<Stock_mov />} />
            <Route path="/Pharm-Inventory/Prescript" element={<Prescript />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
