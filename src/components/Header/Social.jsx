import React from 'react';
import './Social.css';

export default function Social() {
  return (
    <div className="social-wrapper">
      <ul className="social-list">
        <li>
          <a title="click to see my resume" href="https://drive.google.com/file/d/1ZjwvYU8JQeSnCxEKKeexbT4eZmWRmRIr/view?usp=share_link" target="_blank" rel="noreferrer">
            <i className="fas fa-address-card icon"></i>
          </a>
        </li>
        <li>
          <a title="find me on twitter" href="https://twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a title="visit my linkedin" href="https://linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a title="check out my gihub" href="https://github.com/ryan-j-parker" target="_blank" rel="noreferrer">
            <i className="fab fa-github icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
