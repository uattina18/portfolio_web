import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home.js";
import Products from "./components/Products";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
