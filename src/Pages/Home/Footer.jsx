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
                className="f--item"
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
                className="f--item"
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
                className="f--item"
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
                className="f--item"
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
                className="last-f--item"
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
