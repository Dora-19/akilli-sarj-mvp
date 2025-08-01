// src/main.jsx (Güncellenmiş Hali)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Temel CSS stilleri
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);