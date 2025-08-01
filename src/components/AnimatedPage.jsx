// src/components/AnimatedPage.jsx
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: -50 }, // Sayfa ilk başta görünmez ve solda
  animate: { opacity: 1, x: 0 },   // Görünür hale gelir ve ortaya kayar
  exit: { opacity: 0, x: 50 },      // Sayfadan çıkarken görünmez olur ve sağa kayar
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }} // Animasyon süresi
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;