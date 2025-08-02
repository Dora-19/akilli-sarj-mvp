// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowSize from '../hooks/useWindowSize';

// Logo için altıgen (petek) ikonu
const LogoIcon = () => (
    <svg height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
        <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Hamburger menü ikonu
const HamburgerIcon = ({ onClick }) => (
    <motion.button style={styles.hamburgerButton} onClick={onClick} aria-label="Menüyü aç">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </motion.button>
);

// Kapatma (X) ikonu
const CloseIcon = ({ onClick }) => (
    <motion.button style={styles.closeButton} onClick={onClick} aria-label="Menüyü kapat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </motion.button>
);


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // NavLink için aktif stil
  const activeLinkStyle = {
    color: '#0070f3',
    fontWeight: 'bold',
  };
  
  const navLinks = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/nasil-calisir", label: "Nasıl Çalışır?" },
    { path: "/hakkimizda", label: "Hakkımızda" },
  ];

  return (
    <>
        <motion.nav
            style={styles.nav}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <Link to="/" style={styles.logo} onClick={closeMenu}>
                <LogoIcon />
                <span>Arı Şarj</span>
            </Link>

            {/* Masaüstü Menüsü */}
            {!isMobile && (
                <div style={styles.linksContainer}>
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} style={({ isActive }) => isActive ? {...styles.link, ...activeLinkStyle} : styles.link}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>
            )}

            {/* Mobil Menü Tetiği */}
            {isMobile && <HamburgerIcon onClick={toggleMenu} />}
        </motion.nav>

        {/* Mobil Menü İçeriği */}
        <AnimatePresence>
            {isMobile && isMenuOpen && (
                <motion.div
                    style={styles.mobileMenuOverlay}
                    initial={{ opacity: 0, y: "-100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    <div style={styles.mobileMenuHeader}>
                        <Link to="/" style={styles.logo} onClick={closeMenu}>
                            <LogoIcon />
                            <span>ArıŞarj</span>
                        </Link>
                        <CloseIcon onClick={toggleMenu} />
                    </div>
                    <div style={styles.mobileLinksContainer}>
                         {navLinks.map(link => (
                            <NavLink key={link.path} to={link.path} style={({ isActive }) => isActive ? {...styles.mobileLink, ...activeLinkStyle} : styles.mobileLink} onClick={closeMenu}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

// --- STİLLER ---
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    width: '100%',
    boxSizing: 'border-box',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#0070f3',
  },
  linksContainer: {
    display: 'flex',
    gap: '2.5rem',
  },
  link: {
    color: '#333',
    fontWeight: '500',
    fontSize: '1rem',
    position: 'relative',
    paddingBottom: '4px',
  },
  hamburgerButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 110,
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 110,
  },
  mobileMenuOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.98)',
    backdropFilter: 'blur(10px)',
    zIndex: 105,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  },
  mobileLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    gap: '2.5rem',
  },
  mobileLink: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Navbar;