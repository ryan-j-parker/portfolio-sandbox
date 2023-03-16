import React, { useState } from 'react';
import './AppNavBar.css';

function Bars() {
  return (
    <>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </>
  );
}

function XBar() {
  return (
    <>
      <span className="bar x-bar-left" />
      <span className="bar x-bar-right" />
    </>
  );
}

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
        {clicked ? 
          // <XBar />
          <p className="x-bar">✖</p> 
          : <Bars />}
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
            <a
              href="https://drive.google.com/file/d/1rdInWg42z5PoM4_Xqqqgrl8PAL_xlrTu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="/projects3d">3D</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
