// src/pages/HowItWorksPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

// Adımları bir dizi olarak tanımlayalım, yönetmesi kolay olsun.
const steps = [
  {
    icon: '🔌',
    title: '1. Fişe Tak & Unut',
    description: 'Akşam eve geldiğinizde aracınızı şarja takmanız yeterli. Geri kalan her şeyi AkıllıŞarj sizin için düşünür.',
    image: 'https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    icon: '🧠',
    title: '2. Yapay Zeka Devreye Girer',
    description: 'Sistemimiz, elektrik şebekesinin ve tarifenizin en uygun olduğu zamanı tespit eder. Şarj işlemini en ucuz saatlere otomatik olarak planlar.',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    icon: '✅',
    title: '3. Güne Hazır Başla',
    description: 'Sabah uyandığınızda, aracınız istediğiniz şarj seviyesinde, en düşük maliyetle şarj edilmiş ve güne hazır bir şekilde sizi bekler.',
    image: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const HowItWorksPage = () => {
  return (
    <AnimatedPage>
      <div style={styles.pageContainer}>
        {/* Sayfa Başlığı */}
        <div style={styles.header}>
          <h1 style={styles.h1}>3 Basit Adımda Akıllı Şarj</h1>
          <p style={styles.p}>Karmaşık ayarlara son. Sadece fişe takın ve tasarruf etmeye başlayın.</p>
        </div>

        {/* Adımlar */}
        <div style={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              style={{
                ...styles.step,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Sırayla sağa ve sola yasla
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Ekrana girince animasyonu başlat
              viewport={{ once: true, amount: 0.5 }} // Animasyon bir kere çalışsın
              transition={{ duration: 0.8 }}
            >
              {/* Metin Alanı */}
              <div style={styles.textContainer}>
                <span style={styles.icon}>{step.icon}</span>
                <h2 style={styles.h2}>{step.title}</h2>
                <p style={styles.description}>{step.description}</p>
              </div>

              {/* Görsel Alanı */}
              <div style={styles.imageContainer}>
                <img src={step.image} alt={step.title} style={styles.image} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

// --- STİLLER ---
const styles = {
    pageContainer: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '4rem 2rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '5rem',
    },
    h1: { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' },
    p: { fontSize: '1.2rem', color: '#555' },
    stepsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8rem', // Adımlar arası boşluk
    },
    step: {
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
    },
    textContainer: {
        flex: 1,
    },
    icon: {
        fontSize: '2.5rem',
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '1rem 0',
    },
    description: {
        fontSize: '1.1rem',
        lineHeight: 1.7,
        color: '#333',
    },
    imageContainer: {
        flex: 1,
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block',
    }
};

export default HowItWorksPage;