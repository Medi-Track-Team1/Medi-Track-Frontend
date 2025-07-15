import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/Reception/ui/toaster";
import { Toaster as Sonner } from "@/components/Reception/ui/sonner";
import { TooltipProvider } from "@/components/Reception/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Doctor Panel Imports
import Doctorpanel from "./pages/Doctor_panel/Doctorpanel";
import DoctorDashboard from "./pages/Doctor_panel/DoctorDashboard";
import PatientsAppointments from "./pages/Doctor_panel/PatientsAppointments";
import PrescribePage from "./pages/Doctor_panel/PrescribePage";
import SchedulePage from "./pages/Doctor_panel/SchedulePage";
1
// ✅ Lazy Loaded Pages
const ReceptionPage = lazy(() => import("@/pages/Reception-pages/Reception"));

// ✅ Static Pages
import NotFound from "@/pages/Reception-pages/NotFound";

// ✅ Patient Panel Components
import Home from "./components/Patient_panel/Home";
import Login from "./components/Patient_panel/Login";
import SignupForm from "./components/Patient_panel/SignupForm";
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

// ✅ Setup query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/medi-track">
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {/* ✅ Doctor Panel Nested Routes */}
          <Route path="/Doctor" element={<Doctorpanel />}>
  <Route index element={<DoctorDashboard />} />
  <Route path="dashboard" element={<DoctorDashboard />} />
  <Route path="patients" element={<PatientsAppointments />} />
  <Route path="prescribe" element={<PrescribePage />} />
  <Route path="schedule" element={<SchedulePage />} />
</Route>


            {/* ✅ Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignupForm" element={<SignupForm />} />
            <Route path="/PatientProfile" element={<PatientProfile />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />

            {/* ✅ Patient Appointment Pages */}
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/history" element={<AppointmentHistory />} />
            <Route path="/prescriptions" element={<Prescription />} />

            {/* ✅ Reports */}
            <Route path="/report/*" element={<ReportHome />} />

            {/* ✅ Inventory Module */}
            <Route path="/Pharm-Inventory" element={<Overview />} />
            <Route path="/Pharm-Inventory/Inventory" element={<Inventory />} />
            <Route path="/Pharm-Inventory/Stock_mov" element={<Stock_mov />} />
            <Route path="/Pharm-Inventory/Prescript" element={<Prescript />} />

            {/* ✅ Reception Panel */}
            <Route
              path="/reception/*"
              element={
                // <ProtectedRoute>
                <ReceptionPage />
                // </ProtectedRoute>
              }
            />

            {/* ❌ 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
