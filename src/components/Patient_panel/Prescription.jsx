import React, { useState } from "react";
import { Eye, Pill, User, Calendar, RefreshCw, ArrowLeft, Mail, Phone, MapPin, CalendarClock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/Prescription.css";

const patientInfo = {
  name: "John Doe",
  id: "P123456",
  dob: "1990-05-15",
  phone: "+91 9876543210",
  email: "john.doe@example.com",
  address: "123 Main Street, Coimbatore, India"
};

const prescriptions = [
  {
    id: "rx1",
    medicationName: "Paracetamol",
    dosage: "500mg",
    frequency: "Twice a day",
    datePrescribed: "2025-07-10",
    prescribingDoctor: "Dr. Smith",
    instructions: "Take after meals",
    refillsRemaining: 2,
    status: "active",
    nextRefillDate: "2025-07-20"
  },
  {
    id: "rx2",
    medicationName: "Amoxicillin",
    dosage: "250mg",
    frequency: "Thrice a day",
    datePrescribed: "2025-07-01",
    prescribingDoctor: "Dr. Patel",
    instructions: "Complete full course",
    refillsRemaining: 0,
    status: "completed"
  },
  {
    id: "rx3",
    medicationName: "Cetirizine",
    dosage: "10mg",
    frequency: "Once a day",
    datePrescribed: "2024-12-15",
    prescribingDoctor: "Dr. Rana",
    instructions: "Take before sleep",
    refillsRemaining: 0,
    status: "discontinued"
  }
];

const getStatusClass = (status) => {
  switch (status) {
    case "active":
      return "badge badge-active";
    case "completed":
      return "badge badge-completed";
    case "discontinued":
      return "badge badge-discontinued";
    default:
      return "badge";
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-GB");
};

const Prescription = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("active");

  const handleViewDetails = (prescription) => {
    alert(`Viewing: ${prescription.medicationName}`);
  };

  const filteredPrescriptions = prescriptions.filter((p) =>
    selectedTab === "history" ? p.status !== "active" : p.status === selectedTab
  );

  return (
    <div className="prescription-page-wrapper">
      {/* Header */}
      <div className="prescription-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} /><h2>Prescription Details</h2>
          
        </button>
       
      </div>

      {/* User Info */}
      <div className="profile-card">
        <div className="profile-left">
          <User size={40} className="user-avatar" />
          <div>
            <h3 className="profile-name">{patientInfo.name}</h3>
            <p className="profile-id">Patient ID: {patientInfo.id}</p>
          </div>
        </div>
        <div className="profile-info-grid">
          <p><CalendarClock size={14} /> DOB: {formatDate(patientInfo.dob)}</p>
          <p><Phone size={14} /> {patientInfo.phone}</p>
          <p><Mail size={14} /> {patientInfo.email}</p>
          <p><MapPin size={14} /> {patientInfo.address}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="prescription-tabs">
        <button
          className={selectedTab === "active" ? "tab active" : "tab"}
          onClick={() => setSelectedTab("active")}
        >
          Active
        </button>
        <button
          className={selectedTab === "completed" ? "tab active" : "tab"}
          onClick={() => setSelectedTab("completed")}
        >
          Completed
        </button>
        <button
          className={selectedTab === "history" ? "tab active" : "tab"}
          onClick={() => setSelectedTab("history")}
        >
          History
        </button>
      </div>

      {/* Cards */}
      <div className="prescription-container">
        {filteredPrescriptions.map((prescription) => (
          <div className="prescription-card" key={prescription.id}>
            <div className="card-header">
              <div className="header-left">
                <div className="icon-bg">
                  <Pill size={16} />
                </div>
                <div>
                  <h3 className="medication-title">{prescription.medicationName}</h3>
                  <p className="dosage">{prescription.dosage}</p>
                </div>
              </div>
              <span className={getStatusClass(prescription.status)}>
                {prescription.status}
              </span>
            </div>

            <div className="card-info">
              <p><RefreshCw size={14} className="info-icon" /> Frequency: <strong>{prescription.frequency}</strong></p>
              <p><User size={14} className="info-icon" /> Doctor: <strong>{prescription.prescribingDoctor}</strong></p>
              <p><Calendar size={14} className="info-icon" /> Date: <strong>{formatDate(prescription.datePrescribed)}</strong></p>
            </div>

            {prescription.status === "active" && (
              <div className="refill-box">
                <div>
                  <p className="refill-label">Refills Remaining</p>
                  <p className="refill-count">{prescription.refillsRemaining}</p>
                </div>
                {prescription.nextRefillDate && (
                  <div className="next-refill">
                    <p className="refill-next-label">Next Refill</p>
                    <p className="refill-next-date">{formatDate(prescription.nextRefillDate)}</p>
                  </div>
                )}
              </div>
            )}

            <button
              className="view-button"
              onClick={() => handleViewDetails(prescription)}
            >
              <Eye size={16} className="eye-icon" />
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prescription;
