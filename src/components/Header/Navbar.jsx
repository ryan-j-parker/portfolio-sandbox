// this is still a WIP - bars need to expand and show vertical list when clicked 
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="toggle-button" id="toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links" id="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/mainstage">Projects</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
