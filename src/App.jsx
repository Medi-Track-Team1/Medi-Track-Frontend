import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReportHome from "@/components/Report/ReportHome";
import NotFound from "@/pages/Reception-pages/NotFound";
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));

// Patient Components
import Home from "./components/Patient_panel/Home";
import Login from "./components/Patient_panel/Login";
import PatientProfile from "./components/Patient_panel/PatientProfile";
import AppointmentForm from "./components/Patient_panel/AppointmentForm";
import AppointmentHistory from "./components/Patient_panel/AppointmentHistory";
import Prescription from "./components/Patient_panel/Prescription";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/medi-track">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* ✅ Nested Routes under PatientProfile */}
           <Route path="/PatientProfile" element={<PatientProfile />} />
<Route path="/appointment" element={<AppointmentForm />} />
<Route path="/history" element={<AppointmentHistory />} />
<Route path="/prescriptions" element={<Prescription />} />


            {/* Reception Routes */}
            <Route path="/reception/*" element={<ReceptionPage />} />
            <Route path="/report/*" element={<ReportHome />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
