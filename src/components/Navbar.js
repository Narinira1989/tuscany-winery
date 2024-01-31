
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./pictures/logo.png";

const Navbar = (props) => {
  const { menuOpen, toggleMenu } = props;

  return (
    <header>
      <img className="logo" src={logo} alt="Logo" width="100px" />
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
