import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

import '../../styles/Header.css';

const Header = () => {
  const navigate = useNavigate(); // ✅ Import the hook here

  const goToBooking = () => {
   navigate('/appointment')  // Navigate programmatically to /appointment :contentReference[oaicite:2]{index=2}
  };

  const goToLogin = () => {
    navigate('/login'); // Navigate programmatically to /appointment :contentReference[oaicite:2]{index=2}
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">

          {/* Logo and Brand */}
          <div className="header-left">
            <div className="header-brand">
              <div className="header-logo"><span>M</span></div>
              <h1 className="header-title">Medi<span className="header-highlight">Track</span></h1>
            </div>
          </div>

          {/* Navigation & Buttons */}
          <div className="header-right">
            <nav className="header-nav">
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                {/* <li><a href="#departments">Department</a></li> */}
                <li><a href="#doctors">Doctors</a></li>
                <li><a href="#contact">Contact</a></li>
                 <div className="header-actions">
              <Button className="appointment-btn" onClick={goToLogin}>Login</Button>
              <Button className="appointment-btn" onClick={goToBooking}>
                Make an Appointment
              </Button>
            </div>
              </ul>
            </nav>

           
          </div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
