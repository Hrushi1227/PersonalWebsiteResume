// src/components/Navigation.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; // Import CSS file for the Navigation component

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link" activeClassName="active">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            href="/resume.pdf"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
