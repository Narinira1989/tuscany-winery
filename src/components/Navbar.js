
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./pictures/logo.png";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const body = document.body;
    body.classList.toggle("navOpen");
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" width="100px" />
      </Link>
      <nav className={menuOpen ? "responsiveNav" : ""}>
        
        <Link to="/" onClick={toggleMenu}>
          HOME
        </Link>
        <Link to="/about-us" onClick={toggleMenu}>
          ABOUT
        </Link>
        <Link to="/shop" onClick={toggleMenu}>
          SHOP
        </Link>
        <Link to="/contacts" onClick={toggleMenu}>
          CONTACTS
        </Link>

        <button className="nav-btn nav-close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleMenu}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
