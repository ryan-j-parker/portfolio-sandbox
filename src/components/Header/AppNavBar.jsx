import React, { useState } from 'react';
import './AppNavBar.css';

export default function AppNavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked === true) {
      document.getElementById('toggle').classList.remove('active');
      document.getElementById('links').classList.remove('active');
    } else if (clicked === false) {
      document.getElementById('toggle').classList.add('active');
      document.getElementById('links').classList.add('active');
    }
    setClicked(!clicked);
  };

  return (
    <div className="navbar">
      <a href="#" className="toggle-button" id="toggle" onClick={handleClick}>
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
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ZjwvYU8JQeSnCxEKKeexbT4eZmWRmRIr/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>
          </li>
          <li>
            <a href="/projects3d">3D</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
