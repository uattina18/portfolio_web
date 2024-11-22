import React from "react";

const About = () => {
  return (
    <section id="About" className="about--section">
      <div className="about--section--content">
        <p className="about--section--heading">About</p>
        <div className="about--section--content--box about--section--box">
          <div className="about--section--img grid-item-1">
            <img
              src="./img/apeArnia.png"
              alt="apicoltori"
              className="apicoltore "
            />
          </div>
          <div className="about--section--container">
            <div className="about--section--card grid-item-2">
              <h1 className="about--section--title">La nostra storia</h1>
              <p className="about--section--description">
                Da generazioni, la famiglia di "L'Antica Fonte" ha coltivato la
                terra e nutrito l'anima con la bellezza e la bontà della
                campagna italiana. Quello che inizia come un piccolo vigneto e
                un'apicoltura di famiglia è cresciuto nel corso degli anni,
                portando con sé una passione profonda per la natura e la
                produzione di prodotti autentici.
              </p>
              <h1 className="about--section--title">La nostra filosofia</h1>
              <p className="about--section--description">
                Siamo guidati dalla tradizione e dal rispetto per l'ambiente.
                Crediamo che la terra ci fornisca il nostro più grande tesoro, e
                ci impegniamo a preservarla per le future generazioni. La
                sostenibilità è al centro di tutto ciò che facciamo, dalla
                coltivazione delle uve per i nostri vini alla produzione del
                miele e dello zafferano. La qualità e l'autenticità sono i
                nostri obiettivi principali.
              </p>
              <h1 className="about--section--title">La nostra missione</h1>
              <p className="about--section--description">
                La missione di "L'Antica Fonte" è quella di portare i tesori
                della nostra terra direttamente alla tua tavola. Ogni bottiglia
                di vino, barattolo di miele o confezione di zafferano
                rappresenta un viaggio nella natura, una dedizione alla
                produzione di qualità superiore e un impegno a condividere il
                gusto dell'autenticità con il mondo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
