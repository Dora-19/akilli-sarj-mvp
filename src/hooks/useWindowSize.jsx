// src/hooks/useWindowSize.js

import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Sayfa ilk yüklendiğinde boyutu al
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}