// this is still a WIP - bars need to expand and show vertical list when clicked
import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
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
        {/* {clicked ? (
          <span className="bar">X</span>
        ) : (
          <> */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        {/* </>
        )} */}
      </a>
      {/* {clicked ? (
        <div className="vertical" id="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects3d">3D</Link>
            </li>
          </ul>
        </div>
      ) : null} */}
      <div className="navbar-links" id="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/RJP-SWE-resume-2023.pdf">Resume</a>
          </li>
          <li>
            <a href="/projects3d">3D</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
