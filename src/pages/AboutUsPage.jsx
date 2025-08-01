// src/pages/AboutUsPage.jsx

import React from 'react';
import { color, motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

// LinkedIn ikonu için basit bir SVG bileşeni (Aynı kalıyor)
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


const AboutUsPage = () => {
  return (
    <AnimatedPage>
      <div style={styles.pageWrapper}>
        <div style={styles.mainContainer}>

          {/* SOL SÜTUN: HİKAYE VE MİSYON */}
          <motion.div 
            style={styles.leftColumn}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h1 style={styles.h1}>Bizim Hikayemiz</h1>
            <p style={styles.p}>
              Biz, İstanbul Teknik Üniversitesi'nde (İTÜ) öğrenim gören iki teknoloji meraklısı girişimciyiz. Üniversitenin ilk yılında, ortak bir tutkuyu paylaştığımızı fark ettik: büyük sorunlara basit ve akıllı çözümler üretmek. Elektrikli araçların yaygınlaşmasının önündeki şarj maliyetleri ve karmaşasına bir son verme hayaliyle AkıllıŞarj projesini başlattık.
            </p>
            <blockquote style={styles.quote}>
              "İTÜ'nün 'Arı' mottosundan ilhamla, çalışkanlığımızı ve teknolojiye olan merakımızı birleştirerek hem kullanıcılar hem de gezegenimiz için değer yaratabileceğimize inanıyoruz."
            </blockquote>
          </motion.div>

          {/* SAĞ SÜTUN: KURUCU EKİP */}
          <motion.div 
            style={styles.rightColumn}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            {/* Profil Kartı 1 */}
            <div style={styles.profileCard}>
              <div style={styles.photoPlaceholder}></div>
              <div style={styles.profileInfo}>
                <h3 style={styles.name}>İsim Soyisim</h3>
                <p style={styles.title}>Kurucu Ortak, Ürün Geliştirme</p>
                <a href="#" style={styles.socialLink} aria-label="LinkedIn Profili"><LinkedInIcon /></a>
              </div>
            </div>
            
            {/* Profil Kartı 2 */}
            <div style={styles.profileCard}>
              <div style={styles.photoPlaceholder}></div>
              <div style={styles.profileInfo}>
                <h3 style={styles.name}>Arkadaşının İsmi</h3>
                <p style={styles.title}>Kurucu Ortak, Teknoloji Geliştirme</p>
                <a href="#" style={styles.socialLink} aria-label="LinkedIn Profili"><LinkedInIcon /></a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
};


// --- YENİ KOMPAKT STİLLER ---
const styles = {
  pageWrapper: {
    width: '100%',
    minHeight: 'calc(100vh - 80px)', // Sayfanın en azından ekran boyunda olmasını sağlar
    display: 'flex',
    alignItems: 'center', // İçeriği dikeyde ortala
    padding: '4rem 0',
    backgroundColor: '#f8f9fa',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row', // Sütunları yan yana koy
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 2rem',
    gap: '4rem', // Sütunlar arası boşluk
    // Not: Mobil için bu flexDirection: 'column' olmalı
  },
  leftColumn: {
    flex: 1.2, // Sol sütun biraz daha geniş olsun
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 0.8, // Sağ sütun biraz daha dar
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem', // Profil kartları arası boşluk
  },
  h1: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#1a202c', // Koyu ve okunaklı bir renk
  },
  p: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#333',
    marginBottom: '2rem',
  },
  quote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#007CF0',
    paddingLeft: '1.5rem',
    borderLeft: '3px solid #007CF0',
  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid #e9ecef',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  },
  photoPlaceholder: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#dee2e6',
    flexShrink: 0, // Daralmamasını sağlar
  },
  profileInfo: {
    marginLeft: '1.5rem',
  },
  name: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: 0,
  },
  title: {
    fontSize: '0.9rem',
    color: '#007CF0',
    margin: '0.25rem 0 0.5rem 0',
  },
  socialLink: {
    color: '#495057',
  },
};

export default AboutUsPage;