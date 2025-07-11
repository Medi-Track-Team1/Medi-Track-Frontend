import React from 'react';
import './css/stock.css';
import { useNavigate } from "react-router-dom";

function Stock_mov() {
     const navigate = useNavigate();
        const redirectToPg1 = () => {
            navigate("/Pharm-Inventory/"); 
        };
        const redirectToPg2 = () => {
            navigate("/Pharm-Inventory/Inventory"); 
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
          <button className="nav-button inventory-button" onClick={redirectToPg1}>Over View</button>
          <button className="nav-button stock-button active" onClick={redirectToPg2}>Inventory</button>
          <button className="nav-button prescription-button" onClick={redirectToPg4}>Prescription</button>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="movement-header">
          <h2>Stock Movements</h2>
          <div className="movement-actions">
            <button className="add-movement-btn">
              <span>+</span> Add Movement
            </button>
            <div className="search-bar">
              <input type="text" placeholder="Search movements..." />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>

        <div className="movement-filter">
          <button className="filter-btn active">All Movements</button>
          <button className="filter-btn">Stock In</button>
          <button className="filter-btn">Stock Out</button>
        </div>

        <div className="movement-table-container">
          <table className="movement-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Medicine</th>
                <th>Quantity</th>
                <th>Date & Time</th>
                <th>Reference</th>
                <th>Reason</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              <tr className="stock-in">
                <td>
                  <span className="movement-type">Stock In</span>
                </td>
                <td>Paracetamol 500mg</td>
                <td className="quantity positive">+100</td>
                <td>
                  <div className="date">2024-01-05</div>
                  <div className="time">10:30 AM</div>
                </td>
                <td>PO-2024-001</td>
                <td>Purchase Order</td>
                <td>Generic Pharma</td>
              </tr>
              <tr className="stock-out">
                <td>
                  <span className="movement-type">Stock Out</span>
                </td>
                <td>Amoxicillin 250mg</td>
                <td className="quantity negative">-21</td>
                <td>
                  <div className="date">2024-01-15</div>
                  <div className="time">02:15 PM</div>
                </td>
                <td>R0001</td>
                <td>Prescription Dispensed</td>
                <td>N/A</td>
              </tr>
              <tr className="stock-in">
                <td>
                  <span className="movement-type">Stock In</span>
                </td>
                <td>Ibuprofen 400mg</td>
                <td className="quantity positive">+50</td>
                <td>
                  <div className="date">2024-01-14</div>
                  <div className="time">09:45 AM</div>
                </td>
                <td>PO-2024-002</td>
                <td>Purchase Order</td>
                <td>HealthCorp</td>
              </tr>
              <tr className="stock-out">
                <td>
                  <span className="movement-type">Stock Out</span>
                </td>
                <td>Cetirizine 10mg</td>
                <td className="quantity negative">-10</td>
                <td>
                  <div className="date">2024-01-14</div>
                  <div className="time">04:20 PM</div>
                </td>
                <td>R0002</td>
                <td>Prescription Dispensed</td>
                <td>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stock_mov;