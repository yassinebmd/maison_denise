import React, { useEffect } from 'react';
import styled from 'styled-components';

export const Archives = () => {
    // Load header and footer


    return (
        <div className="home">
<header className="bio-header">
        <h1>ARCHIVES</h1>
      </header>
            <ArchiveContainer>
               

                <TabsContainer>
                    <TabWrapper>
                        <TabInput type="radio" name="tabs" id="tab-2" defaultChecked />
                        <TabLabel htmlFor="tab-2">Contenu des archives</TabLabel>
                        <TabPanel>
                            <ArchiveContent>
                                <p>
                                    Les archives proprement dites, consultables à l’Institut Français, se divisent en six grandes thématiques :
                                </p>
                                <ol>
                                    <ArchiveListItem>
                                        Le dossier familial qui outre les albums photographiques comporte les pièces concernant le divorce de ses
                                        parents, la succession de son père (mort à Marrakech en 1947), ainsi que les legs effectués par lui, puis
                                        par elle, au Musée des Beaux-Arts de Lille ;{' '}
                                        <ArchiveLink
                                            href="archive/1. Courrier de DM au Directeur des Musées de france 11 décembre 1967.pdf"
                                            target="_blank"
                                        >
                                            "Courrier de Denise Masson à Monsieur le Directeur des Musées de France"
                                        </ArchiveLink>
                                    </ArchiveListItem>

                                    <ArchiveListItem>
                                        L’acquisition du riad et les travaux effectués ;
                                    </ArchiveListItem>

                                    <ArchiveListItem>
                                        Les correspondances relatives à ses efforts pour mettre en place une formation d’assistantes sociales au Maroc
                                        et les cours préparés à cet effet ;
                                    </ArchiveListItem>

                                    <ArchiveListItem>
                                        Les fiches de lecture et les cahiers de notes ;{' '}
                                        <ArchiveLink href="archive/4. Note DM Salat.pdf" target="_blank">
                                            "Note de lecture sur la prière"
                                        </ArchiveLink>
                                    </ArchiveListItem>

                                    <ArchiveListItem>
                                        La correspondance relative à sa traduction du Coran et à la réédition bilingue préparée pour le Machrek ;{' '}
                                        <ArchiveLink
                                            href="archive/5. Courrier du Pr Jacques Mercanton 24 juin 1967.pdf"
                                            target="_blank"
                                        >
                                            "Lettre du Professeur Jacques Mercanton à Denise Masson à propos de sa traduction du coran"
                                        </ArchiveLink>
                                    </ArchiveListItem>

                                    <ArchiveListItem>
                                        Les coupures de journaux sur des sujets divers.{' '}
                                        <ArchiveLink
                                            href="archive/6. Article Libération 29 juin 89.pdf"
                                            target="_blank"
                                        >
                                            "Article de Libération du 29 juin 1989 à l'occasion de la publication des mémoires de Denise Masson"
                                        </ArchiveLink>
                                    </ArchiveListItem>
                                </ol>
                            </ArchiveContent>

                        </TabPanel>

                        <TabInput type="radio" name="tabs" id="tab-1" />
                        <TabLabel htmlFor="tab-1">Consultation</TabLabel>
                        <TabPanel>
                            <ConsultationContent>
                                <h3>Accès réservé aux chercheurs sur rendez-vous.</h3>
                                <p>
                                    Les archives sont consultables sur RDV
                                    <br />
                                    <a href="mailto:kamal.moueddene@ifmaroc.com">kamal.moueddene@ifmaroc.com</a>
                                </p>
                                
                                <p>
                                La bibliothèque de Denise Masson est accessible sur RDV
                                    <br />
                                    <a href="archive/INVENTAIRE MDM.pdf" target="_blank">INVENTAIRE Bibliothèque Denise Masson</a>
                                    <br />
                                    <a href="mailto:kamal.moueddene@ifmaroc.com">kamal.moueddene@ifmaroc.com</a>
                                </p>
                                {/* Add other consultation content */}
                            </ConsultationContent>
                        </TabPanel>
                    </TabWrapper>
                </TabsContainer>
            </ArchiveContainer>

        </div>
    );
};

// Styled components
const ArchiveContainer = styled.div`
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
    margin-bottom: 15px;
  }
`;

const TabsContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
`;

const TabWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TabInput = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label {
    background: #fff;
    color: #000;
    border-bottom: 2px solid #edb52e;
  }
`;

const TabLabel = styled.label`
  width: 100%;
  padding: 20px 30px;
  background: #f8f9fa;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #7f7f7f;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
  }

  @media (min-width: 768px) {
    width: auto;
    order: 1;
  }
`;

const TabPanel = styled.div`
  display: none;
  padding: 30px;
  width: 100%;
  order: 99;

  ${TabInput}:checked + ${TabLabel} + & {
    display: block;
  }
`;

const ArchiveContent = styled.div`
  ol {
    padding-left: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 1.5rem;
  }
`;

const ArchiveListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const ArchiveLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #009fe3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ConsultationContent = styled.div`
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }

  a {
    color: #009fe3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

