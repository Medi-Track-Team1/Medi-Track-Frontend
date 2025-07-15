import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Doctor_panel/Navbar";

import PrescribePage from "./PrescribePage";
import DoctorDashboard from "./DoctorDashboard";
import SchedulePage from "./SchedulePage";
import PatientsAppointments from "./PatientsAppointments";

// src/pages/Doctor_panel/DoctorLayout.jsx
import React from "react";
// import Navbar from "../../components/Doctor_panel/Navbar";
import { Outlet } from "react-router-dom";

const Doctorpanel = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Doctorpanel;
