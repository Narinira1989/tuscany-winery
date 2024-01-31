
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.body;
    body.classList.toggle("navOpen");
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="contentWrapper">
        <Router>
          <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;