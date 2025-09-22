import React from 'react';

export const Descriptif = () => {
  return (
    <div className="descriptif-page">
      <div className="page-header">
        <h1>DESCRIPTIF</h1>
      </div>

      <div className="content-container">
        <div className="main-content">
          <div className="text-section">
            <p>
              La Maison Denise Masson, située au cœur de la médina de Marrakech, 
              est un lieu de mémoire dédié à l'œuvre de cette grande figure intellectuelle 
              du XXe siècle. Installée dans une demeure traditionnelle marocaine 
              soigneusement restaurée, elle abrite aujourd'hui un centre culturel 
              et une bibliothèque spécialisée.
            </p>
            
            <h2>LA MAISON</h2>
            <p>
              Construite selon les principes de l'architecture marocaine traditionnelle, 
              la maison s'organise autour d'un patio central arboré. Les différents 
              espaces ont été préservés dans leur authenticité tout en étant adaptés 
              aux besoins d'un centre culturel contemporain.
            </p>
            
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="img/14.jpg" alt="Patio de la Maison Denise Masson" />
                
              </div>
              <div className="gallery-item">
                <img src="img/09.jpg" alt="Bibliothèque" />
                
              </div>
            </div>
            
            <h2>LES ESPACES</h2>
            <ul className="space-list">
              <li>
                <strong>La bibliothèque</strong> - Conserve plus de 3 000 ouvrages 
                dont le fonds personnel de Denise Masson
              </li>
              <li>
                <strong>La salle de lecture</strong> - Espace calme pour la consultation 
                des documents
              </li>
              <li>
                <strong>La salle d'exposition</strong> - Présente des expositions temporaires 
                sur Denise Masson et son œuvre
              </li>
              <li>
                <strong>Le patio</strong> - Lieu de convivialité et d'événements culturels
              </li>
              <li>
                <strong>Le jardin</strong> - Espace de tranquillité avec des essences 
                traditionnelles marocaines
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-section">
            <h3>DENISE MASSON</h3>
            <img 
              src="img/DM.jpg" 
              alt="Portrait de Denise Masson" 
              className="portrait"
            />
            <p>
              Orientaliste et islamologue française (1901-1994), Denise Masson 
              a consacré sa vie au dialogue islamo-chrétien. Installée à Marrakech 
              à partir de 1935, elle est notamment connue pour sa traduction 
              du Coran en français.
            </p>
          </div>
          
          <div className="sidebar-section">
            <h3>ACTIVITÉS</h3>
            <ul className="activities-list">
              <li>Visites guidées</li>
              <li>Conférences</li>
              <li>Expositions temporaires</li>
              <li>Rencontres littéraires</li>
              <li>Ateliers pédagogiques</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

