import React from 'react';
import './info.css'; // Adjust the path as necessary
export const InfosPratiques = () => {
  return (
    <div className="infos-pratiques-container">
      <div className="page-header">
        <h1>INFOS PRATIQUES</h1>
      </div>

      <div className="content-section">
        <div className="left-column">
          <div className="info-block">
            <h2>HORAIRES D'OUVERTURE</h2>
            <p>Du mardi au samedi</p>
            <p>De 10h à 13h et de 15h à 18h</p>
            <p>Fermé les jours fériés</p>
          </div>

          <div className="info-block">
            <h2>TARIFS</h2>
            <p>Entrée libre et gratuite</p>
          </div>

          <div className="info-block">
            <h2>ADRESSE</h2>
            <p>Maison Denise Masson</p>
            <p>Rue de la Kasbah, Marrakech</p>
            <p>(En face du Lycée Victor Hugo)</p>
          </div>
        </div>

        <div className="right-column">
          <div className="map-container">
            <iframe 
              title="Maison Denise Masson Location"
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.058220662417!2d-7.9952281000000465!3d31.63212659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee66f09a7e69%3A0x941bc494129870af!2sMaison%20Denise%20Masson!5e1!3m2!1sfr!2sma!4v1745491162125!5m2!1sfr!2sma'
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-block">
            <h2>CONTACT</h2>
            <p>Tél: +212 (0) 5 24 38 27 40</p>
            <p>Email: contact@maisondenisemasson.ma</p>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <h2>ACCÈS</h2>
        <p>
          La Maison Denise Masson est située en plein cœur de Marrakech, 
          à proximité de la Kasbah et en face du Lycée Victor Hugo. 
          Elle est facilement accessible en taxi ou à pied depuis la place Jemaa el-Fna.
        </p>
        <p>
          Pour les groupes et les visites scolaires, merci de nous contacter 
          à l'avance pour organiser votre venue.
        </p>
      </div>
    </div>
  );
};

