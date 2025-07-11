import React from 'react';
import './css/prescript.css';
import { useNavigate } from "react-router-dom";

function Prescript() {
    const navigate = useNavigate();
    const redirectToPg1 = () => {
        navigate("/Pharm-Inventory/"); 
    };
    const redirectToPg2 = () => {
        navigate("/Pharm-Inventory/Inventory"); 
    };
    const redirectToPg3 = () => {
        navigate("/Pharm-Inventory/Stock_mov"); 
    };
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-main">
          <h1>Pharmacy Management System</h1>
          <div className="header-info">
            <span className="date-display">{new Date().toLocaleDateString()}</span>
            <button className="notification-bell">🔔</button>
          </div>
        </div>
        <nav className="header-nav">
             <button className="nav-button stock-button" onClick={redirectToPg1}>Over-view</button>
          <button className="nav-button inventory-button" onClick={redirectToPg2}>Inventory</button>
          <button className="nav-button prescription-button active" onClick={redirectToPg3}>Stock Movements</button>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="prescription-header">
          <h2>Prescription Validation</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search prescriptions..." />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="prescription-stats">
          <div className="stat-card">
            <div className="stat-value">1</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1</div>
            <div className="stat-label">Validated</div>
          </div>
        </div>

        <div className="prescription-table-container">
          <table className="prescription-table">
            <thead>
              <tr>
                <th>Prescription ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
                <th>Fulfillment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RX001</td>
                <td>John Doe</td>
                <td>Dr. Smith</td>
                <td>2024-01-15</td>
                <td>
                  <span className="status-icon">📂</span>
                  <span className="status-text">Pending</span>
                </td>
                <td>
                  <span className="fulfillment-badge cannot">Cannot fulfill</span>
                </td>
                <td>
                  <button className="view-details-btn">View Details</button>
                </td>
              </tr>
              <tr>
                <td>RX002</td>
                <td>Jane Smith</td>
                <td>Dr. Johnson</td>
                <td>2024-01-15</td>
                <td>
                  <span className="status-icon">💷</span>
                  <span className="status-text">Valuation</span>
                </td>
                <td>
                  <span className="fulfillment-badge can">Can fulfill</span>
                </td>
                <td>
                  <button className="view-details-btn">View Details</button>
                </td>
              </tr>
              <tr>
                <td>RX003</td>
                <td>Bob Wilson</td>
                <td>Dr. Davis</td>
                <td>2024-01-14</td>
                <td>
                  <span className="status-icon">💸</span>
                  <span className="status-text">Objects</span>
                </td>
                <td>
                  <span className="fulfillment-badge cannot">Cannot fulfill</span>
                </td>
                <td>
                  <button className="view-details-btn">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Prescript;