import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <div className="hero--section-img">
            <img
              src="./img/Herosection.jpg"
              alt="albero con prodotti"
              className="hero--img"
            />
          </div>
          <hgroup>
            <h1 className="hero--section--title">
              Benvenuti a "L'Antica Fonte"
            </h1>
            <h1 className="hero--section--subtitle">
              La Natura e la Tradizione nel Cuore della Nostra Famiglia.
            </h1>
            <p className="hero--section--description">
              Siamo una piccola azienda agricola a gestione familiare, situata
              in una delle zone più belle e incontaminate dell'Italia. Ci
              dedichiamo con passione alla produzione di prodotti di alta
              qualità, provenienti dalla nostra terra generosa e dalle nostre
              api laboriose.
            </p>
          </hgroup>

          <Link to="ContactMe">
            <button className="btn btn-primary">Get In Touch</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
