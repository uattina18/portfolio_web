import React from "react";
import "../../src/styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>L'antica Fonte</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
