// src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sosyal medya ikonları için basit SVG bileşenleri
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const XIcon = () => ( // Twitter (X) ikonu
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const Footer = () => {
  return (
    <motion.footer 
      style={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.0 }}
    >
      <div style={styles.container}>
        <div style={styles.topSection}>
            {/* Sol Taraf: Marka Bilgisi */}
            <div style={styles.branding}>
                <h3 style={styles.logo}>Arı Şarj</h3>
                <p style={styles.tagline}>Geleceğin şarj teknolojisi, bugünün tasarrufu.</p>
            </div>

            {/* Sağ Taraf: Linkler */}
            <div style={styles.linksWrapper}>
                <div style={styles.linkColumn}>
                    <h4 style={styles.linkColumnTitle}>Ürün</h4>
                    <Link to="/nasil-calisir" style={styles.footerLink}>Nasıl Çalışır?</Link>
                    <Link to="/#simulator" style={styles.footerLink}>Tasarruf Hesapla</Link>
                    {/* <Link to="/sss" style={styles.footerLink}>SSS</Link> */}
                </div>
                <div style={styles.linkColumn}>
                    <h4 style={styles.linkColumnTitle}>Şirket</h4>
                    <Link to="/hakkimizda" style={styles.footerLink}>Hakkımızda</Link>
                    {/* <Link to="/iletisim" style={styles.footerLink}>İletişim</Link> */}
                </div>
                <div style={styles.linkColumn}>
                    <h4 style={styles.linkColumnTitle}>Yasal</h4>
                    {/* <Link to="/gizlilik" style={styles.footerLink}>Gizlilik Politikası</Link> */}
                    {/* <Link to="/kullanim" style={styles.footerLink}>Kullanım Koşulları</Link> */}
                    <p style={styles.footerLinkDisabled}>Gizlilik Politikası</p>
                    <p style={styles.footerLinkDisabled}>Kullanım Koşulları</p>
                </div>
            </div>
        </div>

        <div style={styles.bottomSection}>
            {/* Copyright */}
            <p style={styles.copyright}>© {new Date().getFullYear()} Arı Şarj. Tüm Hakları Saklıdır.</p>

            {/* Sosyal Medya İkonları */}
            <div style={styles.socialIcons}>
                <a href="#" style={styles.socialIconLink} aria-label="X (Twitter) Profili"><XIcon /></a>
                <a href="#" style={styles.socialIconLink} aria-label="LinkedIn Profili"><LinkedInIcon /></a>
            </div>
        </div>
      </div>
    </motion.footer>
  );
};

// --- STİLLER ---
const styles = {
    footer: {
        backgroundColor: '#1a202c', // Koyu, profesyonel bir arka plan
        color: '#a0aec0', // Okunaklı, yumuşak bir metin rengi
        padding: '4rem 0 2rem 0',
        marginTop: 'auto', // Sayfa içeriği kısa olsa bile footer'ı en alta iter
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    topSection: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Mobil için alt alta geçmeyi sağlar
        gap: '2rem',
        paddingBottom: '3rem',
    },
    branding: {
        flex: '1 1 300px', // Esnek bir genişlik
    },
    logo: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '1rem',
    },
    tagline: {
        fontSize: '1rem',
        lineHeight: 1.6,
    },
    linksWrapper: {
        display: 'flex',
        gap: '3rem',
        flexWrap: 'wrap',
    },
    linkColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    linkColumnTitle: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '0.5rem',
    },
    footerLink: {
        color: '#a0aec0',
        transition: 'color 0.2s ease-in-out',
    },
    footerLinkDisabled: { // Henüz aktif olmayan linkler için
        color: '#718096',
        cursor: 'not-allowed',
        margin: 0,
    },
    bottomSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid #2d3748', // Ayırıcı çizgi
        flexWrap: 'wrap',
        gap: '1rem',
    },
    copyright: {
        fontSize: '0.9rem',
    },
    socialIcons: {
        display: 'flex',
        gap: '1.5rem',
    },
    socialIconLink: {
        color: '#a0aec0',
        transition: 'color 0.2s ease-in-out',
    }
};

export default Footer;