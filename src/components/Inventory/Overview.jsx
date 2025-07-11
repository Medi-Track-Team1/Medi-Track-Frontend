import React from 'react';
import './css/overview.css';
import { useNavigate } from "react-router-dom";

function Overview(){
    const navigate = useNavigate(); 
    const redirectToPg2 = () => {
        navigate("/Pharm-Inventory/Inventory"); 
    };
     const redirectToPg3 = () => {
        navigate("/Pharm-Inventory/Stock_mov"); 
    };
     const redirectToPg4 = () => {
        navigate("/Pharm-Inventory/Prescript"); 
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
          <button className="nav-button inventory-button" onClick={redirectToPg2}>Inventory</button>
          <button className="nav-button stock-button" onClick={redirectToPg3}>Stock Movement</button>
          <button className="nav-button prescription-button" onClick={redirectToPg4}>Prescription</button>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="metrics-grid">
          {/* Overview Card */}
          <div className="metric-card overview-card">
            <h2>Overview</h2>
            <div className="metric-value">1,247</div>
            <div className="metric-label">Total Medicines</div>
            <div className="metric-change positive">↑ 41% vs last month</div>
          </div>

          {/* Inventory Card */}
          <div className="metric-card inventory-card">
            <h2>Inventory</h2>
            <div className="metric-value">23</div>
            <div className="metric-label">Low Stock Alerts</div>
            <div className="metric-change positive">↑ 41% vs last month</div>
          </div>

          {/* Prescriptions Card */}
          <div className="metric-card prescriptions-card">
            <h2>Prescriptions</h2>
            <div className="metric-value">8</div>
            <div className="metric-label">Out of Stock</div>
            <div className="metric-change negative">↓ 2 vs last month</div>
          </div>

          {/* Stock Movements Card */}
          <div className="metric-card movements-card">
            <h2>Stock Movements</h2>
            <div className="metric-value">156</div>
            <div className="metric-label">Recent Orders</div>
            <div className="metric-change positive">↑ 41% vs last month</div>
          </div>
        </div>

        {/* Low Stock Alerts Section */}
        <div className="alerts-section">
          <h2>Low Stock Alerts</h2>
          <div className="alerts-grid">
            <div className="alert-item">
              <div className="alert-name">Paracetamol 500mg</div>
              <div className="alert-stock">
                <span className="current">Current: 15</span>
                <span className="minimum">Minimum: 50</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '30%' }}></div>
              </div>
              <button className="order-button">Place Order</button>
            </div>

            <div className="alert-item">
              <div className="alert-name">Annexicillin 250mg</div>
              <div className="alert-stock">
                <span className="current">Current: 8</span>
                <span className="minimum">Minimum: 30</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '26.67%' }}></div>
              </div>
              <button className="order-button">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview