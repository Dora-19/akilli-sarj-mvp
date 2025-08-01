// src/App.jsx (Güncellenmiş Hali)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nasil-calisir" element={<HowItWorksPage />} />
          <Route path="/hakkimizda" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;