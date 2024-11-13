import React from "react";

const vetrina = () => {
  return (
    <section id="Gallery">
      <div className="gallery--section">
        <h2 className="gallery--section--heading">Gallery</h2>
        <br />
        <div className="gallery--section--container">
          <div className="gallery--section--card">
            <img src=".\img\Gallery\apina.jpg" alt="Gallery Element 1" />
          </div>
          <div className="gallery--section--card">
            <img src=".\img\Gallery\Miele.jpg" alt="Gallery Element 2" />
          </div>
          <div className="gallery--section--card">
            <img
              src=".\img\Gallery\produzione-vino.jpg"
              alt="Gallery Element 3"
            />
          </div>
          <div className="gallery--section--card">
            <img src=".\img\Gallery\produzione.jpg" alt="Gallery Element 4" />
          </div>
          <div className="gallery--section--card">
            <img src=".\img\Gallery\smielare.jpg" alt="Gallery Element 5" />
          </div>
          <div className="gallery--section--card">
            <img src=".\img\Gallery\uva.jpg" alt="Gallery Element 6" />
          </div>
          <div className="gallery--section--card">
            <img src=".\img\Gallery\uva2.jpg" alt="Gallery Element 7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default vetrina;
