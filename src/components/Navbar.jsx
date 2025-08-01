// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#f0f0f0' }}>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/nasil-calisir">Nasıl Çalışır?</Link>
      <Link to="/hakkimizda">Hakkımızda</Link>
    </nav>
  );
};

export default Navbar;