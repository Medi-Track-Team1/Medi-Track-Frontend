import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportHome from "@/components/Report/ReportHome";

const queryClient = new QueryClient();

// Lazy loaded
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));
import NotFound from "@/pages/Reception-pages/NotFound";

// ✅ Patient pages
import Home from "./components/Patient_panel/Home";
import AppointmentForm from './components/Patient_panel/AppointmentForm';
import PatientProfile from './components/Patient_panel/PatientProfile';
import AppointmentHistory from './components/Patient_panel/AppointmentHistory';

 // Make sure this exists
 import Prescription from './components/Patient_panel/Prescription';

import Login from './components/Patient_panel/Login';

// Protected route (if needed)
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/medi-track">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>

            {/* ✅ Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* 🔐 Nested Patient Profile Routes */}
            <Route path="/PatientProfile" element={<PatientProfile />}>
              <Route path="appointment" element={<AppointmentForm />} />
              <Route path="history" element={<AppointmentHistory />} />
              <Route path="prescriptions" element={<Prescription />} />
            </Route>

            {/* Reception */}
            <Route path="/reception/*" element={<ReceptionPage />} />

            {/* Report */}
            <Route path="/report/*" element={<ReportHome />} />

            {/* ❌ Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
