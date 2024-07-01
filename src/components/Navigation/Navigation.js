import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css"; // Import CSS file for the Navigation component

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button" onClick={navigateHome}>
            R.
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/blog"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="/resume.pdf"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-right">
          <button className="nav-button" onClick={() => alert("Hi!")}>
            Say Hi
          </button>
        </div>
        {/* Add an empty div with class "content" to allow shifting */}
        <div className="content"></div>
      </nav>
    </div>
  );
};

export default Navigation;
