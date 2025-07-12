import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Setup query client
const queryClient = new QueryClient();

// Lazy loaded page
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));

// Static imports
import NotFound from "@/pages/Reception-pages/NotFound";

// ✅ Patient Panel Components
import Home from "./components/Patient_panel/Home";
import Login from "./components/Patient_panel/Login";
import PatientProfile from "./components/Patient_panel/PatientProfile";
import AppointmentForm from "./components/Patient_panel/AppointmentForm";
import AppointmentHistory from "./components/Patient_panel/AppointmentHistory";
import Prescription from "./components/Patient_panel/Prescription";
import SettingsPage from "./components/Patient_panel/SettingsPage";

// ✅ Inventory Module Components
import Inventory from "./components/Inventory/Inventory";
import Overview from "./components/Inventory/Overview";
import Prescript from "./components/Inventory/Prescript";
import Stock_mov from "./components/Inventory/Stock_mov";

// ✅ Report Module
import ReportHome from "@/components/Report/ReportHome";

// Optional: Protected Route (currently commented out)
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/medi-track">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
           {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/PatientProfile" element={<PatientProfile />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />

            {/* Flat Patient Pages */}
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/history" element={<AppointmentHistory />} />
            <Route path="/prescriptions" element={<Prescription />} />

            {/* 🧾 Reports */}
            <Route path="/report/*" element={<ReportHome />} />

            {/* 💊 Inventory Module */}
            <Route path="/Pharm-Inventory" element={<Overview />} />
            <Route path="/Pharm-Inventory/Inventory" element={<Inventory />} />
            <Route path="/Pharm-Inventory/Stock_mov" element={<Stock_mov />} />
            <Route path="/Pharm-Inventory/Prescript" element={<Prescript />} />

            {/* 🔐 Reception Panel */}
            <Route
              path="/reception/*"
              element={
                // <ProtectedRoute>
                <ReceptionPage />
                // </ProtectedRoute>
              }
            />

            {/* ❌ 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
