export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Azienda agricola</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">L'antica Fonte</span>
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Culpa, ipsam.
          </p>
          <button className="btn btn-primary">Get In Touch</button>
          <div className="hero--section-img">
            <img
              src="./img/Herosection.jpg"
              alt="albero con prodotti"
              className="hero--img"
            />
          </div>
          <h1 className="hero--section--title">Benvenuti a "L'Antica Fonte"</h1>
          <p className="hero--section--description">
            La Natura e la Tradizione nel Cuore della Nostra Famiglia. Siamo una
            piccola azienda agricola a gestione familiare, situata in una delle
            zone più belle e incontaminate dell'Italia. Ci dedichiamo con
            passione alla produzione di prodotti di alta qualità, provenienti
            dalla nostra terra generosa e dalle nostre api laboriose.
          </p>
        </div>
      </div>
    </section>
  );
}
