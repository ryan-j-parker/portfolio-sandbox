import React from 'react';
// import './Portfolio.css';
import { Projects } from './Projects';
import './PortfolioAlt.css';

function PortfolioProject() {
  const card = Projects.map((project) => {
    return (
      <>
        <div key={project.id} className="card">
          <p className="projectName">{project.name}</p>
          <div className="imageBox">
            <div className="linksBox">
              <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
                <img className="githubIcon" src="/projects/github-icon-white.png" />
              </a>
              <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
                <img className="netlifyIcon" src="/projects/netlify-icon.png" />
              </a>
            </div>
            <img src={`../projects/sq-${project.image}.png`} className="projectImg" />
          </div>
          <div className="descriptionBox">
            <p className="projectDesc">{project.description}</p>
            <p className="personal">{project.personal}</p>
          </div>
        </div>
      </>
    );
  });
  return <>{card}</>;
}

export function Portfolio() {
  return (
    <div className="projectsWrapper">
      <PortfolioProject />
    </div>
  );
}
