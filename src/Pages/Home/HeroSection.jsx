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
            <img src="./img/apeArnia.png" alt="apicoltore al lavoro" />
          </div>
        </div>
      </div>
    </section>
  );
}
