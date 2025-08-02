// src/pages/HowItWorksPage.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

// İçerik, projenin teknik vizyonunu yansıtacak şekilde.
const steps = [
  {
    icon: '🚗',
    title: '1. Araç Entegrasyonu (API)',
    description: 'Kullanıcı, aracının markasını seçerek resmi API\'ler üzerinden platformumuza güvenli bir şekilde erişim izni verir. Bu sayede aracın anlık şarj durumu (SoC), batarya kapasitesi ve sağlık durumu gibi kritik verileri anlık olarak okuyabiliriz.',
    tech: 'Smartcar API, Enode API gibi platformlar veya doğrudan üretici API\'leri (Tesla, VW Grubu vb.)',
  },
  {
    icon: '⚡',
    title: '2. Şebeke ve Tarife Verisi (EPİAŞ & Dağıtım Şirketleri)',
    description: 'Türkiye Elektrik İletim A.Ş. (TEİAŞ) ve Enerji Piyasaları İşletme A.Ş. (EPİAŞ) tarafından yayınlanan anlık üretim verilerini ve Gün Öncesi Piyasası (GÖP) fiyatlarını takip ederiz. Kullanıcının seçtiği dağıtım şirketinin (örn: BEDAŞ, OEDAŞ) üç zamanlı (Gündüz, Puant, Gece) tarife verilerini sisteme entegre ederiz.',
    tech: 'EPİAŞ Şeffaflık Platformu API, Dağıtım Şirketi Web Servisleri',
  },
  {
    icon: '🧠',
    title: '3. Akıllı Optimizasyon Motoru',
    description: 'Yapay zeka modelimiz, araçtan gelen verilerle şebekeden gelen verileri birleştirir. Kullanıcının "sabah 08:00\'de %90 şarj istiyorum" gibi hedeflerini göz önünde bulundurarak, şarj işlemini en ucuz (genellikle gece tarifesi) ve şebekedeki yenilenebilir enerji oranının en yüksek olduğu zaman dilimine otomatik olarak kaydırır.',
    tech: 'Makine Öğrenmesi (Zaman Serisi Analizi, Optimizasyon Algoritmaları)',
  },
  {
    icon: '📲',
    title: '4. Komut Gönderme ve Raporlama',
    description: 'Optimizasyon motorunun belirlediği en uygun zamanda, araç API\'si üzerinden "şarjı başlat" veya "şarjı durdur" komutlarını göndeririz. Kullanıcı, mobil uygulama üzerinden şarj sürecini takip edebilir ve her şarj sonunda ne kadar tasarruf ettiğini ve karbon ayak izini ne kadar azalttığını detaylı raporlarda görebilir.',
    tech: 'Araç API\'leri, Mobil Bildirim Servisleri',
  },
];

// Her bir metin bloğunun ekrana girip girmediğini kontrol edecek yardımcı bileşen
const StepContent = ({ children, onInView }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px" // Ekranın tam ortasına geldiğinde tetiklen
  });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return <div ref={ref}>{children}</div>;
};

const HowItWorksPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <AnimatedPage>
      <div style={styles.header}>
        <h1 style={styles.h1}>Teknik Yaklaşımımız ve Vizyonumuz</h1>
        
        {/* YENİ VURGU KUTUSU */}
        <motion.div 
            style={styles.visionContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
        >
            <div style={styles.visionIconWrapper}>
                <span role="img" aria-label="Strateji ikonu">🧭</span>
            </div>
            <div style={styles.visionTextWrapper}>
                <h4 style={styles.visionTitle}>Stratejik Yaklaşımımız</h4>
                <p style={styles.visionDescription}>
                    ev.energy gibi başarılı platformların izinden giderek, Türkiye pazarına özel veri kaynakları ve entegrasyonlarla değer yaratmayı hedefliyoruz.
                </p>
            </div>
        </motion.div>
      </div>
      <div style={styles.mainContainer}>
        {/* SOL SÜTUN: KAYAN METİNLER */}
        <div style={styles.leftColumn}>
          {steps.map((step, index) => (
            <StepContent key={index} onInView={() => setActiveStep(index)}>
              <div style={styles.stepContent}>
                <h2 style={styles.h2}>{step.title}</h2>
                <p style={styles.description}>{step.description}</p>
                <p style={styles.techLabel}>Kullanılacak Teknolojiler/Veri Kaynakları:</p>
                <p style={styles.tech}>{step.tech}</p>
              </div>
            </StepContent>
          ))}
        </div>

        {/* SAĞ SÜTUN: SABİT GÖRSEL ALANI */}
        <div style={styles.rightColumn}>
          <div style={styles.stickyVisual}>
            <div style={styles.phoneMockup}>
              <div style={styles.phoneScreen}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    style={styles.iconContainer}
                  >
                    <span style={styles.icon}>{steps[activeStep].icon}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

// --- STİLLER ---
const styles = {
  header: {
    textAlign: 'center',
    padding: '4rem 2rem 2rem 2rem',
  },
  h1: { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' },
  mainContainer: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    marginTop: '4rem',
  },
  leftColumn: {
    flex: 1.2,
    paddingRight: '4rem',
  },
  stepContent: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem 0',
  },
  rightColumn: {
    flex: 0.8,
  },
  stickyVisual: {
    position: 'sticky',
    top: '150px',
    height: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneMockup: {
    width: '300px',
    height: '600px',
    backgroundColor: '#111',
    borderRadius: '40px',
    border: '10px solid #000',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: '30px',
    overflow: 'hidden',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '6rem',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: 1.7,
    color: '#333',
    minHeight: '120px',
  },
  techLabel: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#007CF0',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },
  tech: {
    fontSize: '1rem',
    color: '#555',
    fontStyle: 'italic',
  },
  // Yeni eklenen vurgu kutusu stilleri
  visionContainer: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '850px',
    margin: '2rem auto 0 auto',
    backgroundColor: 'rgba(0, 124, 240, 0.05)',
    border: '1px solid rgba(0, 124, 240, 0.1)',
    borderRadius: '16px',
    padding: '1.5rem 2rem',
    textAlign: 'left',
  },
  visionIconWrapper: {
    fontSize: '2rem',
    marginRight: '1.5rem',
    backgroundColor: 'rgba(0, 124, 240, 0.1)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  visionTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  visionTitle: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#0052d4',
  },
  visionDescription: {
    margin: '0.25rem 0 0 0',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#334155',
  },
};

export default HowItWorksPage;