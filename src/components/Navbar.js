// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Portfolio
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/projects" className="navbar-link">
            Projects
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

