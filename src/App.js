import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Pages/Home/Navbar";
import HeroSection from "./Pages/Home/HeroSection";
import Products from "./Pages/Home/Products";
import About from "./Pages/Home/About";
import Contacts from "./Pages/Home/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
