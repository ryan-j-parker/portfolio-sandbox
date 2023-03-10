import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <>
      <img src="/RJP-SWE-resume-2023.png" className="resumeImg" />
      <a href="/RJP-SWE-resume-2023.pdf" type="download" className="resumeLink" target="_blank" rel="noreferrer">
        <img src="/png-icon.png" className="resumeIcon" alt="resume icon" />
        <p className="linkText">Download Resume</p>
      </a>
    </>
  );
}
