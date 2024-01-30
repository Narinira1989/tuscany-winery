import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Contacts from "./components/Contacts";
import logo from "./components/pictures/logo.png";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef();

  const showNavbar = () => {
    setMenuOpen(true);
    navRef.current.classList.toggle("responsiveNav");
  };

  const hideNavbar = () => {
    setMenuOpen(false);
    navRef.current.classList.remove("responsiveNav");
  };

  return (
    <div className="App">
      <div>
        <Router>
          <header>
            <img className="logo" src={logo} alt="Logo" width="100px" />
            <nav ref={navRef}>
              <Link to="/"> HOME </Link>
              <Link to="/about-us"> ABOUT </Link>
              <Link to="/shop"> SHOP </Link>
              <Link to="/contacts"> CONTACTS </Link>

              <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
                <FaTimes />
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </header>

          <Routes>
            <Route path="/" element={<Home menuOpen={menuOpen} />} />
            <Route path="/about-us" element={<About menuOpen={menuOpen} />} />
            <Route path="/shop" element={<Shop menuOpen={menuOpen} />} />
            <Route path="/contacts" element={<Contacts menuOpen={menuOpen} />}
            />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
