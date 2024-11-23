import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Vetrina() {
  const images = [
    { id: 1, src: "./img/Gallery/apina.jpg", alt: "Image 1" },
    { id: 2, src: "./img/Gallery/Miele.jpg", alt: "Image 2" },
    { id: 3, src: "./img/Gallery/produzione-vino.jpg", alt: "Image 3" },
    { id: 4, src: "./img/Gallery/produzione.jpg", alt: "Image 4" },
    { id: 5, src: "./img/Gallery/smielare.jpg", alt: "Image 5" },
    { id: 6, src: "./img/Gallery/oova.jpg", alt: "Image 6" },
    { id: 7, src: "./img/Gallery/uva2.jpg", alt: "Image 7" },
  ];
  return (
    <section className="vetrina-section">
      <h2 className="vetrina-heading">Gallery</h2>
      <p className="vetrina--subtitle">La nostra gallery</p>
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          transitionTime={3}
          stopOnHover
          dynamicHeight={false}
        >
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
