import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const goToBooking = () => navigate('/appointment');
  const goToLogin = () => navigate('/login');

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo"><span>M</span></div>
          <h1 className="header-title">Medi<span className="header-highlight">Track</span></h1>
        </div>

        <div className="header-right">
          <nav className="header-nav">
  <ul className="nav-list">
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#doctors">Doctors</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<div className="header-actions">
  <Button className="appointment-btn" onClick={goToLogin}>Login</Button>
  <Button className="appointment-btn" onClick={goToBooking}>
    Appointment
  </Button>
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;
