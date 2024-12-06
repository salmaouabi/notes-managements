// Importation des modules nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Le composant principal de l'application
import { BrowserRouter } from 'react-router-dom'; // Pour gérer la navigation dans l'application
import './index.css'; // Fichier CSS pour les styles globaux

// Sélectionne l'élément dans le fichier HTML avec l'ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le DOM
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
