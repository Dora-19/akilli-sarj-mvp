// src/App.jsx (Güncellenmiş Hali)
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Bileşenler ve Sayfalar
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {/* AnimatePresence: Sayfalar arası geçiş animasyonlarını yönetir */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/nasil-calisir" element={<HowItWorksPage />} />
            <Route path="/hakkimizda" element={<AboutUsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// Router'ı App bileşeninin dışında, main.jsx'te sarmak daha temiz bir pratiktir.
// main.jsx dosyanızı aşağıdaki gibi güncelleyin.
export default App;