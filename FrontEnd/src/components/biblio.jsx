import React from 'react';

export const Bibliotheque = () => {
  return (
    <div className="bibliography-page">
      {/* Header Section */}
      <header className="bib-header">
        <h1>Bibliographie</h1>
        <div className="header-divider"></div>
      </header>

      {/* Main Content */}
      <main className="bib-content">
        {/* Section with left image and text */}
        <section className="bib-section">
          <div className="bib-image left">
            <img 
              src="img/photo 6.jpg" 
              alt="Couverture du livre 'Le Coran et la révélation chrétienne'" 
              onError={(e) => e.target.src = 'placeholder-book.jpg'}
            />
          </div>
          <div className="bib-text">
            <h2>Le Coran et la révélation chrétienne</h2>
            <div className="publication-info">
              <span>Éditions Beauchesne, 1958</span>
              <span>420 pages</span>
            </div>
            <p>
              Cet ouvrage fondamental représente le fruit de plusieurs années de recherche 
              comparée entre les textes sacrés de l'islam et du christianisme. Denise Masson 
              y aborde avec une rigueur scientifique rare les points de convergence et de 
              divergence entre ces deux traditions abrahamiques. Son analyse minutieuse des 
              textes, enrichie par sa parfaite maîtrise de l'arabe classique, apporte un 
              éclairage nouveau sur les liens théologiques entre ces religions.
            </p>
            <p>
              L'ouvrage se divise en trois parties principales : une étude historique 
              contextuelle, une analyse textuelle comparative, et une réflexion sur les 
              implications théologiques de ces rapprochements. Particulièrement remarqué 
              fut son chapitre sur la figure de Marie dans les deux traditions, qui demeure 
              une référence incontournable dans les études interreligieuses.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider"></div>

        {/* Section with right image and text */}
        <section className="bib-section reverse">
          <div className="bib-image right">
            <img 
              src="img/photo 2.jpg" 
              alt="Couverture de la traduction du Coran par Denise Masson" 
              onError={(e) => e.target.src = 'placeholder-book.jpg'}
            />
          </div>
          <div className="bib-text">
            <h2>Le Coran - Essai de traduction</h2>
            <div className="publication-info">
              <span>Gallimard, 1967</span>
              <span>Édition revue et corrigée 1980</span>
            </div>
            <p>
              Monument de la traductologie, cette version française du Coran représente 
              l'aboutissement de vingt années de travail acharné. Denise Masson y apporte 
              une attention particulière à restituer à la fois la lettre et l'esprit du 
              texte original. Sa profonde connaissance de la langue arabe et sa sensibilité 
              aux nuances théologiques lui permirent de produire une œuvre qui fait encore 
              autorité aujourd'hui.
            </p>
            <p>
              La traduction est accompagnée d'un appareil critique remarquable comprenant 
              plus de 3,000 notes explicatives, un index thématique détaillé et une 
              introduction historique substantielle. L'édition de 1980 incorpora les 
              dernières avancées de la recherche en islamologie, notamment dans 
              l'interprétation des termes techniques et des allusions historiques.
            </p>
            <p>
              Ce travail fut salué par la communauté scientifique pour son équilibre 
              entre fidélité au texte source et accessibilité pour le lectorat 
              francophone. Il constitue sans doute la contribution la plus durable 
              de Denise Masson au dialogue interculturel.
            </p>
          </div>
        </section>

        {/* Additional publications list */}
        <section className="other-publications">
          <h3>Autres publications importantes</h3>
          <ul>
            <li>
              <strong>"Monothéisme coranique et monothéisme biblique"</strong> (1963) - 
              Essai comparatif sur les conceptions de l'unicité divine
            </li>
            <li>
              <strong>"L'Islam et le dialogue interreligieux"</strong> (1972) - 
              Recueil d'articles et de conférences
            </li>
            <li>
              <strong>"La Cité des Saints"</strong> (1978) - Étude sur Fès comme centre spirituel
            </li>
          </ul>
        </section>
      </main>

    
    </div>
  );
};

