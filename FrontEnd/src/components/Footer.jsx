import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
  return (
    <footer className="mm-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Maison Denise Masson</h3>
          <p className="footer-address">
            Avenue de la Menara, Angle Rue Oued ZEM<br />
            Résidence Oumnia, 3ème étage, Appt. 7<br />
            MARRAKECH - MAROC
          </p>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            Tél: +212 (0) 524 43 07 38<br />
            Email: <a href="mailto:contact@maisondenisemasson.ma">contact@maisondenisemasson.ma</a>
          </p>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-title">Horaires</h3>
          <p className="footer-hours">
            Lundi au Vendredi: 9h - 12h et 14h - 17h<br />
            Samedi: 9h - 12h<br />
            Dimanche: Fermé
          </p>
        </div>
        
        <div className="footer-column social-column">
          <h3 className="footer-title">Suivez-nous</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/maisondenisemasson" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/maisondenisemasson.ifm/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/user/maisondenisemasson" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maison Denise Masson - Tous droits réservés</p>
      </div>
    </footer>
  );
};

