import React from 'react';
import './Social.css';

export default function Social() {
  return (
    <div className="social-wrapper">
      <ul className="social-list">
        <li>
          <a href="https://linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
            <i className="fas fa-address-card icon"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/ryan-j-parker" target="_blank" rel="noreferrer">
            <i className="fab fa-github icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}