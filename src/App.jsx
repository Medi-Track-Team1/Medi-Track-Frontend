import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Overview from './components/Inventory/Overview'; 
import Inventory from './components/Inventory/Inventory';
import Stock_mov from './components/Inventory/Stock_mov';
import Prescript from './components/Inventory/Prescript';
// Regular pages
import Index from "@/pages/Reception-pages/Index";
import NotFound from "@/pages/Reception-pages/NotFound";


// Lazy-loaded Reception Dashboard
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));


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
        <Route path="/Pharm-Inventory/" element={<Overview/>} /> {/* Pg1 on the root path */}
                      <Route path="/Pharm-Inventory/Inventory" element={<Inventory/>} /> { }
                      <Route path="/Pharm-Inventory/Stock_mov" element={<Stock_mov/>} />
                      <Route path="/Pharm-Inventory/Prescript" element={<Prescript/>} />

        {/* Other Routes */}


        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
