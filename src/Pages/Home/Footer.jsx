import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer--link--container">
        <div>
          <img src="./img/AnticaFonte.png" alt="logoAF" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="HeroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="About"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Products"
                className="text-md"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Gallery"
                className="text-md"
              >
                Vetrina
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="ContactMe"
                className="text-md"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
    </footer>
  );
}

export default Footer;
