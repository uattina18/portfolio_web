import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="../assets/AnticaFonte" alt="LogoAF"></img>
      </div>
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navBar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Home"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
            ></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

//   return (
//     <div className="container">
//       <nav>
//         <div className="logo">
//           <h2>L'antica fonte</h2>
//         </div>

//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/products">Products</a>
//           </li>
//           <li>
//             <a href="/contacts">Contacts</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
export default Navbar;
