import React from 'react';
import '../../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo-container">
              <div className="footer-logo">M</div>
              <h3 className="footer-brand-name">
                Medi<span className="footer-brand-highlight">Track</span>
              </h3>
            </div>
            <p className="footer-description">
              Your comprehensive healthcare management platform. Track appointments, 
              prescriptions, medical reports, and stay connected with your healthcare providers.
            </p>
            <div className="footer-links">
              <a href="/medi-track/home">Privacy Policy</a>
              <a href="/medi-track/home">Terms of Service</a>
              <a href="/medi-track/home">HIPAA Compliance</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="/medi-track/appointment">Book Appointment</a></li>
              <li><a href="/medi-track/prescriptions">View Prescriptions</a></li>
              <li><a href="/medi-track/report">Medical Reports</a></li>
              <li><a href="/medi-track/history">Visit History</a></li>
              <li><a href="/medi-track/">Notifications</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul>
              <li><a href="#contact">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Emergency: 911</a></li>
              <li><a href="#">24/7 Nurse Line</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MediTrack. All rights reserved. Healthcare data protected under HIPAA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
