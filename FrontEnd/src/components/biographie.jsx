import React from 'react';

export const Biography = () => {
  return (
    <div className="biography-page">
      <header className="bio-header">
        <h1>Madame Denise Masson</h1>
        <p className="bio-dates">1901 - 1994</p>
      </header>

      <main className="bio-content">
        <section className="bio-section">
          <div className="bio-text">
            <p>
              [Nom complet], née le [date] à [lieu], est une figure marquante de [domaine]. 
              Son parcours exceptionnel et ses contributions majeures à [domaine] ont laissé 
              une empreinte indélébile. Dès son plus jeune âge, elle manifesta un vif intérêt 
              pour [sujet], ce qui orienta l'ensemble de sa carrière.
            </p>
            <p>
              Après des études à [lieu], elle se consacra à [activité principale]. 
              Son travail novateur sur [sujet spécifique] révolutionna la manière dont 
              nous concevons [concept]. À travers ses nombreux écrits et conférences, 
              elle partagea sa vision avec le monde entier.
            </p>
          </div>
          <div className="bio-image">
            <img src="img/DM.jpg" alt="Portrait de jeunesse" />
          </div>
        </section>

        <div className="full-width-image">
          <img src="img/2.jpg" alt="Photo d'archive importante" />
        </div>

        <section className="bio-section reverse">
          <div className="bio-text">
            <h2>Ses années de formation</h2>
            <p>
              Les années [années] furent déterminantes dans la formation de sa pensée. 
              À [lieu], elle étudia auprès de [mentor], qui eut une influence profonde 
              sur son approche de [sujet]. C'est durant cette période qu'elle élabora 
              les bases de ce qui deviendra plus tard [théorie/œuvre majeure].
            </p>
            <p>
              Son mémoire sur [sujet], rédigé en [année], jetait déjà les bases de 
              ses travaux ultérieurs. Les chercheurs de l'époque furent frappés par 
              la maturité de sa réflexion et l'originalité de ses analyses, qualités 
              qui ne feront que se renforcer au fil des ans.
            </p>
          </div>
          <div className="bio-image">
            <img src="IMG/4.jpg" alt="Photo durant ses études" />
          </div>
        </section>

        <section className="bio-section dual-images">
          <div className="bio-images">
            <img src="img/1.jpg" alt="Travail en cours" />
            <img src="img/11.jpg" alt="En conférence" />
          </div>
          <div className="bio-text">
            <h2>L'apogée de sa carrière</h2>
            <p>
              La période de [années] à [années] marqua l'apogée de sa carrière. 
              Son ouvrage "[Titre]", publié en [année], fut salué comme une contribution 
              majeure à [domaine]. Traduit en [nombre] langues, il influença toute une 
              génération de [spécialistes].
            </p>
            <p>
              Parallèlement à ses travaux académiques, elle s'engagea activement dans 
              [cause/mouvement], apportant sa rigueur intellectuelle et sa profonde 
              humanité à ce combat. Ses conférences à [lieux importants] attiraient 
              un public toujours plus nombreux, séduit par sa capacité à rendre accessibles 
              des concepts complexes.
            </p>
          </div>
        </section>

        <div className="full-width-image">
          <img src="img/dm7.jpg" alt="Photo de reconnaissance" />
        </div>

        <section className="bio-section text-only">
          <h2>Son héritage</h2>
          <p>
            L'influence de [Nom] perdure bien au-delà de sa disparition en [année]. 
            Le [institution/fondation] qui porte son nom continue de diffuser ses idées 
            et de soutenir les recherches dans le domaine de [domaine]. Ses archives, 
            conservées à [lieu], constituent une ressource inestimable pour les chercheurs.
          </p>
          <p>
            Plus qu'une théoricienne, [Nom] fut avant tout une humaniste, convaincue 
            que [principe/philosophie]. Cette conviction anima l'ensemble de son œuvre 
            et explique pourquoi, encore aujourd'hui, ses travaux résonnent avec une 
            telle actualité.
          </p>
        </section>
      </main>

    </div>
  );
};


