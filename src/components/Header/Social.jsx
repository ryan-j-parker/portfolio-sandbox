import React from 'react';
import './Social.css';

export default function Social() {
  return (
    <div className="social-wrapper">
      <ul className="social-list">
        <li>
          <a 
            data-title="resume" 
            href="https://drive.google.com/file/d/1rdInWg42z5PoM4_Xqqqgrl8PAL_xlrTu/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className="fas fa-address-card icon" />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/ryanparkerdev" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className="fab fa-twitter icon" />
          </a>
        </li>
        <li>
          <a 
            href="https://linkedin.com/in/ryanparkerdev" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in icon" />
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/ryan-j-parker" 
            target="_blank" 
            rel="noreferrer"
          >
            <i className="fab fa-github icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
