import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h2>L'antica fonte</h2>
        </div>

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
    </div>
  );
}

export default Navbar;
