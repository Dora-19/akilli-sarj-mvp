// src/pages/HomePage.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import useWindowSize from '../hooks/useWindowSize'; // MOBİL İÇİN EKLENDİ

// --- VERİLER VE AYARLAR ---

const carData = {
  toggT10X_V2: { name: 'Togg T10X V2 (88.5 kWh)', battery: 88.5 },
  toggT10X_V1: { name: 'Togg T10X V1 (52.4 kWh)', battery: 52.4 },
  teslaModelY_LR: { name: 'Tesla Model Y LR (75 kWh)', battery: 75 },
  mg4_Comfort: { name: 'MG4 Comfort (64 kWh)', battery: 64 },
  bydAtto3: { name: 'BYD Atto 3 (60.5 kWh)', battery: 60.5 },
  renaultZoe: { name: 'Renault Zoe (52 kWh)', battery: 52 },
};


// EPDK'nın en güncel ulusal mesken tarifesinden alınmış, vergiler dahil yaklaşık değerler
// (Ağustos 2025 itibarıyla tahminidir)
const tariffs = {
  // Gündüz (06:00-17:00) ve Puant (17:00-22:00) saatleri için ortalama bir değer
  peak: 4.95,  // TL/kWh
  // Gece (22:00-06:00) tarifesi
  offPeak: 2.70, // TL/kWh
};

// --- ANA SAYFA BİLEŞENİ ---
const HomePage = () => {
  // Simulator state'leri (formun durumunu tutar)
  const [selectedCar, setSelectedCar] = useState('toggT10X_V2');
  const [currentCharge, setCurrentCharge] = useState(20);
  const [targetCharge, setTargetCharge] = useState(90);
  const [result, setResult] = useState(null);

  // --- MOBİL İÇİN EKLENEN KISIM BAŞLANGICI ---
  const { width } = useWindowSize();
  const isMobile = width < 768; // Sadece telefonlar için mobil görünüm
  // --- MOBİL İÇİN EKLENEN KISIM SONU ---

  // Stilleri dinamik hale getiriyoruz
  const styles = getStyles(isMobile);

  // Hesaplama Fonksiyonu
  const handleCalculate = () => {
    const car = carData[selectedCar];
    const neededKwh = (car.battery * (targetCharge - currentCharge)) / 100;

    const smartCost = neededKwh * tariffs.offPeak;
    const dumbCost = neededKwh * tariffs.peak;
    const savings = dumbCost - smartCost;

    setResult({
      smartCost: smartCost.toFixed(2),
      dumbCost: dumbCost.toFixed(2),
      savings: savings.toFixed(2),
    });
  };

  return (
    <AnimatedPage>
      <div style={styles.pageContainer}>

        {/* BÖLÜM 1: GİRİŞ (HERO) */}
        <motion.section
          style={styles.heroSection}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.h1}>Geleceği Şarj Edin, Paranız Cebinizde Kalsın.</h1>
          <p style={styles.p}>
            Yapay zeka destekli platformumuzla elektrikli aracınızı en ucuz ve en verimli zamanlarda şarj ederek, faturanızı yarıya indirin.
          </p>
        </motion.section>

        {/* BÖLÜM 2: UYGULAMA (SİMÜLATÖR & ÖZELLİKLER) */}
        <div style={styles.appSection}>
          
          {/* SOL SÜTUN: İNTERAKTİF SİMÜLATÖR */}
          <motion.div
            style={styles.simulatorCard}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 style={styles.h2}>Tasarrufunu Anında Gör</h2>
            
            {/* Araç Seçimi */}
            <label style={styles.label}>Araç Seçin</label>
            <select style={styles.select} value={selectedCar} onChange={(e) => setSelectedCar(e.target.value)}>
              <option value="toggT10X_V2">Togg T10X V2 (88.5 kWh)</option>
              <option value="toggT10X_V1">Togg T10X V1 (52.4 kWh)</option>
              <option value="teslaModelY_LR">Tesla Model Y LR (75 kWh)</option>
              <option value="mg4_Comfort">MG4 Comfort (64 kWh)</option>
              <option value="bydAtto3">BYD Atto 3 (60.5 kWh)</option>
              <option value="renaultZoe">Renault Zoe (52 kWh)</option>
            </select>

            {/* Mevcut Şarj */}
            <label style={styles.label}>Mevcut Şarj: {currentCharge}%</label>
            <input type="range" min="0" max="100" style={styles.slider} value={currentCharge} onChange={(e) => setCurrentCharge(e.target.value)} />
            
            {/* Hedef Şarj */}
            <label style={styles.label}>Hedef Şarj: {targetCharge}%</label>
            <input type="range" min="0" max="100" style={styles.slider} value={targetCharge} onChange={(e) => setTargetCharge(e.target.value)} />

            {/* Hesapla Butonu */}
            <motion.button 
              style={styles.button} 
              onClick={handleCalculate}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HESAPLA
            </motion.button>
            
            {/* Sonuç Alanı */}
            <AnimatePresence>
              {result && (
                <motion.div
                  style={styles.resultBox}
                  initial={{ opacity: 0, height: 0, y: 20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <p style={styles.resultText}>Bu Şarjda <strong style={styles.savingsHighlight}>{result.savings} TL</strong> Tasarruf Ettiniz!</p>
                  <div style={styles.costComparison}>
                    <span>Normal Şarj: {result.dumbCost} TL</span>
                    <span>Akıllı Şarj: {result.smartCost} TL</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          {/* SAĞ SÜTUN: ÖZELLİKLER */}
          <motion.div 
            style={styles.featuresColumn}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
            }}
          >
            <FeatureItem icon="💰" title="Maliyet Optimizasyonu" description="En ucuz gece tarifesini otomatik yakalar, faturanızı düşürür." />
            <FeatureItem icon="🌱" title="Yeşil Enerji Önceliği" description="Şebekedeki yenilenebilir enerji oranının en yüksek olduğu anlarda şarj eder." />
            <FeatureItem icon="🧠" title="Yapay Zeka Planlama" description="Sürüş alışkanlıklarınızı öğrenir ve size özel en verimli şarj planını oluşturur." />
            <FeatureItem icon="🔋" title="Batarya Sağlığı Koruma" description="Akıllı şarj algoritmaları ile bataryanızın ömrünü uzatır." />
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
};


// --- YARDIMCI BİLEŞENLER ---

const FeatureItem = ({ icon, title, description }) => (
    <motion.div 
        style={getStyles().featureItem} // Stili getStyles'tan alıyoruz
        variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        }}
    >
        <span style={getStyles().featureIcon}>{icon}</span>
        <div>
            <h3 style={getStyles().h3}>{title}</h3>
            <p style={getStyles().featureDescription}>{description}</p>
        </div>
    </motion.div>
);


// --- STİLLER BÖLÜMÜ GÜNCELLENDİ: SABİT BİR OBJEDEN, isMobile DEĞİŞKENİNİ ALAN BİR FONKSİYONA DÖNÜŞTÜRÜLDÜ ---
const getStyles = (isMobile) => ({
  pageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '2rem 2rem', // Mobil için yan boşlukları azalt
    fontFamily: 'sans-serif',
  },
  heroSection: {
    textAlign: 'center',
    maxWidth: '900px',
    marginBottom: '4rem',
  },
  h1: {
    fontSize: isMobile ? '2.5rem' : '4rem', // Mobil için fontu küçült
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '1.5rem',
    background: 'linear-gradient(90deg, #007CF0, #00DFD8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  p: {
    fontSize: isMobile ? '1rem' : '1.25rem', // Mobil için fontu küçült
    color: '#555',
    lineHeight: '1.6',
  },
  appSection: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Mobil için sütunları alt alta getir
    gap: '2rem',
    width: '100%',
    maxWidth: '1200px',
  },
  simulatorCard: {
    flex: 1,
    background: 'white',
    padding: '2rem',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    border: '1px solid #eee',
  },
  featuresColumn: {
    flex: 1.2,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  h2: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  h3: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: '#555',
    marginBottom: '0.5rem',
  },
  select: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  },
  slider: {
    width: '100%',
    marginBottom: '1.5rem',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '1rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(90deg, #007CF0, #00DFD8)',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 4px 15px rgba(0, 124, 240, 0.4)',
  },
  resultBox: {
    marginTop: '2rem',
    padding: '1.5rem',
    background: 'rgba(0, 124, 240, 0.05)',
    borderRadius: '12px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  resultText: {
    margin: 0,
    fontWeight: '500',
  },
  savingsHighlight: {
    color: '#007CF0',
    fontSize: '1.5rem',
  },
  costComparison: {
      marginTop: '1rem',
      fontSize: '0.8rem',
      color: '#666',
      display: 'flex',
      justifyContent: 'space-around'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    background: 'white',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid #f0f0f0'
  },
  featureIcon: {
      fontSize: '2rem',
      background: '#f0f5ff',
      padding: '0.8rem',
      borderRadius: '12px',
  },
  featureDescription: {
    color: '#555',
    fontSize: '0.9rem',
    lineHeight: 1.5,
  }
});

export default HomePage;