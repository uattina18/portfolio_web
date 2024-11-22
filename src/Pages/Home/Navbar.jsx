import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  // Funzione per attivare/disattivare il menu
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  // Funzione per chiudere il menu
  const closeMenu = () => {
    setNavActive(false);
  };

  // Effetto per chiudere il menu su resize a larghezza <= 1200px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
        <img
          src="./img/AnticaFonte.png"
          alt="LogoAF"
          className="logoAf"
          hspace="-50"
        />
      </div>

      {/* Hamburger Menu */}
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>

      {/* Menu items */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="HeroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="About"
              className="navbar--content"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Products"
              className="navbar--content"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Gallery"
              className="navbar--content"
            >
              Vetrina
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="ContactMe"
              className="navbar--content"
            >
              ContactMe
            </Link>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/tuoProfilo" // Sostituisci con il link al tuo profilo Facebook
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://www.instagram.com/tuoProfilo" // Sostituisci con il link al tuo profilo Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
