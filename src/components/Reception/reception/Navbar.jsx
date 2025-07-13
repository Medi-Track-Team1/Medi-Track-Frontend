import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Slide,
  Fade,
  Grow,
} from "@mui/material";

function Navbar() {
  const navbarStyle = {
    backgroundColor: '#2563eb',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  };

  const logoSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const logoStyle = {
    width: '30px',
    height: '30px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color:'black'
  };

  const centerTextStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '1.8rem',
    fontWeight: '600',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo & Brand */}
      <div style={logoSectionStyle}>
        <div style={logoStyle}>M</div>
        <div style={brandStyle}>
          Medi<span style={{ color: 'white' }}>Track</span>
        </div>
      </div>

      {/* Center Text */}
      <div style={centerTextStyle}>Reception</div>

    </nav>
  );
}

export default Navbar;
