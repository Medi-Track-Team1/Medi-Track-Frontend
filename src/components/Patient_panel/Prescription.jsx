import React, { useState } from "react";
import {
  Eye,
  Pill,
  User,
  Calendar,
  RefreshCw,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  CalendarClock
} from "lucide-react";
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

const prescriptions = Array.from({ length: 20 }, (_, i) => ({
  id: `rx${i + 1}`,
  medicationName: `Medicine ${i + 1}`,
  dosage: `${500 - i * 10}mg`,
  frequency: i % 2 === 0 ? "Twice a day" : "Once a day",
  datePrescribed: "2025-07-01",
  prescribingDoctor: i % 2 === 0 ? "Dr. Smith" : "Dr. Patel",
  instructions: "Use as directed",
  refillsRemaining: i % 3,
  status: i % 3 === 0 ? "active" : i % 3 === 1 ? "completed" : "discontinued",
  nextRefillDate: i % 3 === 0 ? "2025-07-20" : null
}));

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
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewDetails = (prescription) => {
    alert(`Viewing: ${prescription.medicationName}`);
  };

  const filteredPrescriptions = prescriptions.filter((p) =>
    selectedTab === "history" ? p.status !== "active" : p.status === selectedTab
  );

  const visiblePrescriptions = filteredPrescriptions.slice(0, visibleCount);

  return (
    <div className="prescription-page-wrapper">
      <div className="prescription-header">
  <button className="back-button" onClick={() => navigate(-1)}>
    <ArrowLeft size={20} />
    <h2 className="header-title">Prescription Details</h2>
  </button>
</div>


      {/* Profile */}
      <div className="profile-card">
  <div className="profile-top-row">
    {/* Left Column - Avatar & Name */}
    <div className="left-column">
      <div className="avatar-section">
        <User size={36} />
      </div>
      <div className="name-section">
        <h3>{patientInfo.name}</h3>
        <p>Patient ID: {patientInfo.id}</p>
      </div>
    </div>

    {/* Right Column - Blue Info Box */}
    <div className="right-column">
      <div className="profile-details-box">
        <div className="info-item">
          <CalendarClock size={14} />
          <span>DOB: {formatDate(patientInfo.dob)}</span>
        </div>
        <div className="info-item">
          <Phone size={14} />
          <span>{patientInfo.phone}</span>
        </div>
        <div className="info-item">
          <Mail size={14} />
          <span>{patientInfo.email}</span>
        </div>
        <div className="info-item">
          <MapPin size={14} />
          <span>{patientInfo.address}</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Tabs */}
      <div className="prescription-tabs">
        {['active', 'completed', 'history'].map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? "tab active" : "tab"}
            onClick={() => {
              setSelectedTab(tab);
              setVisibleCount(6); // Reset on tab switch
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="prescription-container">
        {visiblePrescriptions.map((prescription) => (
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

      {/* Load More */}
      {filteredPrescriptions.length > visibleCount && (
        <div className="text-center mt-6">
          <button
            className="view-button"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Prescription;
