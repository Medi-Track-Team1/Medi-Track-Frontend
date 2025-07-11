import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Regular pages
import Index from "@/pages/Reception-pages/Index";
import NotFound from "@/pages/Reception-pages/NotFound";


// Lazy-loaded Reception Dashboard
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));
// import NotFound from "@/pages/Reception-pages/NotFound";

// Patient pages
import Home from "./components/Patient_panel/Home";
import AppointmentForm from './components/Patient_panel/AppointmentForm';
import Profile from './components/Patient_panel/Profile';
import AppointmentHistory from './components/Patient_panel/AppointmentHistory';
// import Login from './components/Patient_panel/Login'; // Uncomment if used

// Protected route component
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  // <QueryClientProvider client={queryClient}>
  //   <TooltipProvider>
  //     <Toaster />
  //     <Sonner />

  //   </TooltipProvider>
  // </QueryClientProvider>
  <BrowserRouter basename="/medi-track">
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Index />} />

        {/* Reception Module Route */}
        <Route path="/reception/*" element={<ReceptionPage />} />
         {/* Inventory Module Route */}
          <Route path="/Pharm-Inventory/" element={<Overview/>} /> 
          <Route path="/Pharm-Inventory/Inventory" element={<Inventory/>} /> 
          <Route path="/Pharm-Inventory/Stock_mov" element={<Stock_mov/>} />
          <Route path="/Pharm-Inventory/Prescript" element={<Prescript/>} />
           
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;