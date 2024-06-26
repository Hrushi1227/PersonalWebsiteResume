import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css"; // Import CSS file for the Navigation component

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            exact
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
      {/* Add an empty div with class "content" to allow shifting */}
      <div className="content"></div>
    </nav>
  );
};

export default Navigation;
