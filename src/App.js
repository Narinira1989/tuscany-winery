
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
    setMenuOpen(!menuOpen);
  };


  

  return (
    <div className="App">
      <Router>
        <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home menuOpen={menuOpen} />} />
          <Route path="/about-us" element={<About menuOpen={menuOpen} />} />
          <Route path="/shop" element={<Shop menuOpen={menuOpen} />} />
          <Route path="/contacts" element={<Contacts menuOpen={menuOpen} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
