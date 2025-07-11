import React from 'react';
import './css/Inventory.css'; 
import { useNavigate } from "react-router-dom";


function Inventory() {
    const navigate = useNavigate(); 
    const redirectToPg1 = () => {
        navigate("/Pharm-Inventory/"); 
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
          <button className="nav-button inventory-button active" onClick={redirectToPg1}>Over-View</button>
          <button className="nav-button stock-button" onClick={redirectToPg3}>Stock Movement</button>
          <button className="nav-button prescription-button" onClick={redirectToPg4}>Prescription</button>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="inventory-header">
          <h2>Medicine Inventory</h2>
          <div className="inventory-actions">
            <button className="add-medicine-btn">
              <span>+</span> Add Medicine
            </button>
            <div className="search-bar">
              <input type="text" placeholder="Search medicines..." />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>

        <div className="category-filter">
          <button className="category-btn active">All Categories</button>
          <button className="category-btn">Analgesic</button>
          <button className="category-btn">Antibiotic</button>
          <button className="category-btn">Anti-inflammatory</button>
          <button className="category-btn">Antihistamine</button>
        </div>

        <div className="inventory-table-container">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Category</th>
                <th>Manufacturer</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="medicine-name">Paracetamol</div>
                  <div className="medicine-dose">500mg</div>
                </td>
                <td>Analgesic</td>
                <td>Genetic Pharma</td>
                <td>
                  <div>150</div>
                  <div className="min-stock">Min:50</div>
                </td>
                <td>
                  <div className="unit-price">$2.5</div>
                  <div className="total-value">$1,200</div>
                </td>
                <td>
                  <span className="status-badge in-stock">In Stock</span>
                </td>
                <td>
                  <button className="action-btn edit">✏️</button>
                  <button className="action-btn delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="medicine-name">Amoxicillin</div>
                  <div className="medicine-dose">250mg</div>
                </td>
                <td>Antibiotic</td>
                <td>MedLife</td>
                <td>
                  <div>8</div>
                  <div className="min-stock">Min:30</div>
                </td>
                <td>
                  <div className="unit-price">$15.75</div>
                  <div className="total-value">$126</div>
                </td>
                <td>
                  <span className="status-badge low-stock">Low Stock</span>
                </td>
                <td>
                  <button className="action-btn edit">✏️</button>
                  <button className="action-btn delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="medicine-name">Ibuprofen</div>
                  <div className="medicine-dose">400mg</div>
                </td>
                <td>Anti-inflammatory</td>
                <td>HealthCorp</td>
                <td>
                  <div>85</div>
                  <div className="min-stock">Min:40</div>
                </td>
                <td>
                  <div className="unit-price">$8.25</div>
                  <div className="total-value">$701.25</div>
                </td>
                <td>
                  <span className="status-badge in-stock">In Stock</span>
                </td>
                <td>
                  <button className="action-btn edit">✏️</button>
                  <button className="action-btn delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="medicine-name">Ceftrizine</div>
                  <div className="medicine-dose">10mg</div>
                </td>
                <td>Antihistamine</td>
                <td>Genetic Pharma</td>
                <td>
                  <div>12</div>
                  <div className="min-stock">Min:25</div>
                </td>
                <td>
                  <div className="unit-price">$12</div>
                  <div className="total-value">$144</div>
                </td>
                <td>
                  <span className="status-badge low-stock">Low Stock</span>
                </td>
                <td>
                  <button className="action-btn edit">✏️</button>
                  <button className="action-btn delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;