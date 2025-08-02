// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={navStyle}
    >
      <Link to="/" style={logoStyle}>Arı Şarj</Link>
      <div style={linksContainerStyle}>
        <Link to="/" style={linkStyle}>Ana Sayfa</Link>
        <Link to="/nasil-calisir" style={linkStyle}>Nasıl Çalışır?</Link>
        <Link to="/hakkimizda" style={linkStyle}>Hakkımızda</Link>
      </div>
    </motion.nav>
  );
};

// Basit stiller
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

const logoStyle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  textDecoration: 'none',
  color: '#0070f3',
};

const linksContainerStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
};

export default Navbar;