import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ResourcesPage = () => {
  
  return (
    <div className="home">
      
      <MainContainer>
        
        <header className="bio-header">
        <h1>LIENS / RESSOURCES</h1>
      </header>

        <ContentSection>
          <SectionTitle>Bibliographie de Denise Masson</SectionTitle>
          <BookList>
            <BookItem>
              <i>Le Coran et la révélation judéo-chrétienne. Études comparées,</i> Paris, A. Maisonneuve, 1958, 829 p. en 2 vols.
            </BookItem>
            {/* Add other book items following the same pattern */}
          </BookList>

          <SectionTitle>Inventaire de la bibliothèque de D. Masson</SectionTitle>
          <ResourceList>
            <ResourceItem>
              <a href="archive/DM biblio 1988.pdf" target="_blank" rel="noopener noreferrer">
                DM inventaire 1988.pdf
              </a>
            </ResourceItem>
          </ResourceList>

          <SectionTitle>Ressources audiovisuelles</SectionTitle>
          <ResourceList>
            <ResourceItem>
              <a href="https://www.lejourduseigneur.com/videos/denise-masson-la-dame-de-marrakech-59" target="_blank" rel="noopener noreferrer">
                Documentaire "La Dame de Marrakech" par Marie-Christine Gambart, France, 2010
              </a>
            </ResourceItem>
            {/* Add other media resources */}
          </ResourceList>

          <SectionTitle>Articles et comptes-rendus</SectionTitle>
          <ResourceList>
            <ResourceItem>
              <a href="https://www.persee.fr/doc/horma_0984-2616_1987_num_9_1_1443" target="_blank" rel="noopener noreferrer">
                Article écrit par Denise Masson sur Louis Gardet dans <i>Horizons maghrébins</i>, 1987
              </a>
            </ResourceItem>
            {/* Add other articles */}
          </ResourceList>

          <SectionTitle>Oeuvres sur Denise Masson</SectionTitle>
          <BookList>
            <BookItem>
              <CoverImage src="img/Couverture Melle Masson - lettres à un jeune homme (1).jpg" alt="Couverture" />
              Nicole de Pontcharra, <i>Mademoiselle Masson. Lettres à un jeune homme,</i> Tarik éditions, Rabat, 2009.
            </BookItem>
            {/* Add other works */}
          </BookList>

          <Note>
            N. B.: Les lettres fictives composées par N. de Pontcharra pour sa biographie romancée parue en 2009 sont
            utilisées dans le documentaire de M.-C. Gambart en 2010.
          </Note>
        </ContentSection>
      </MainContainer>

    </div>
  );
};

// Styled components
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Jumbotron = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0;
  }
`;

const ContentSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h3`
  color: #b27f2b;
  border-left: 5px solid #009fe3;
  padding-left: 10px;
  margin: 2rem 0 1.5rem;
  font-size: 1.5rem;
`;

const BookList = styled.ul`
  list-style-type: circle;
  margin-left: 20px;
  color: #6f6f6f;
  padding-left: 20px;
`;

const BookItem = styled.li`
  position: relative;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  padding-left: 1rem;

  &:hover {
    color: #009fe3;
  }

  i {
    font-style: italic;
  }
`;

const ResourceList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ResourceItem = styled.li`
  margin-bottom: 1rem;
  
  a {
    color: #009fe3;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
    
    i {
      font-style: italic;
    }
  }
`;

const CoverImage = styled.img`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  height: auto;
  z-index: 1000;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  ${BookItem}:hover & {
    display: block;
  }
`;

const Note = styled.p`
  margin-top: 2rem;
  font-style: italic;
  color: #666;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

