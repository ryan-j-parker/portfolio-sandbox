/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Projects } from './Projects';
// import './PortfolioAlt.css';
import './PortfolioCSS.css';

function PortfolioProject() {

  const [hovered, setHovered] = useState(false);

  const card = Projects.map((project) => {
    return (
      <>
        <div
          key={project.id}
          className="card"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <p className="projectName">{project.name}</p>
          <img src={`../projects/sq-${project.image}.png`} className="projectImg" />
          <div className="descriptionBox">
            <p className="projectDesc">{project.description}</p>
            <p className="personal">{project.personal}</p>
          </div>
          <div className="linksBox">
            <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
              <button className="ghBtn">GitHub</button>
            </a>
            <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
              <button className="liveBtn">Live</button>
            </a>
          </div>
        </div>
      </>
    );
  });
  return <>{card}</>;
}

export function Portfolio() {
  return (
    <>
      <div className="projectsWrapper">
        <PortfolioProject />
      </div>
    </>
  );
}
