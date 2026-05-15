import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <img
            src={logoImg}
            alt="Planet Creative World logo"
            className="navbar__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="navbar__links"
          aria-label="Main navigation"
        >
          <a href="#home">Home</a>
          <a href="#data">Solar System</a>
          <a href="#planets">Planets</a>
          <a href="#facts">Data</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar__mobile-menu">
          <a
            href="#home"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </a>

          <a
            href="#data"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Solar System
          </a>

          <a
            href="#planets"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Planets
          </a>

          <a
            href="#facts"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Data
          </a>

          <a
            href="#contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;