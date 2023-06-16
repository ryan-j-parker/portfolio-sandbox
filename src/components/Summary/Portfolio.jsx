/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Projects } from './Projects';
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
          <div className="column left">
            <p className="projectName">{project.name}</p>
            <img
              src={`../projects/sq-${project.image}.png`}
              className="projectImg"
              loading="lazy"
            />
            <div className="projectTools">
              {/* <p className="tools">Tools used:</p> */}
              {project.tools.map((tool) => (
                <img
                  key={project.id + tool}
                  src={`../icons/${tool}-icon.png`}
                  className="toolImg"
                  alt={tool}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="column right">
            <div className="descriptionBox">
              <p className="projectDesc">{project.description}</p>
              &nbsp;
              {/* <p className="personal">{project.personal}</p> */}
            </div>
            <div className="linksBox">
              <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
                {/* <button className="ghBtn">GitHub</button> */}
                <img src="../icons/github-icon.png" className="ghImg" loading="lazy" alt="github" />
                <p className="img-p">Source code</p>
              </a>
              <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
                {/* <button className="liveBtn">Live</button> */}
                <img
                  src="../icons/netlify-icon.png"
                  className="netlifyImg"
                  loading="lazy"
                  alt="netlify"
                />
                <p className="img-p">Deployed</p>
              </a>
            </div>
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
      <div className="space" />
      <div className="projectsWrapper">
        <PortfolioProject />
      </div>
    </>
  );
}
