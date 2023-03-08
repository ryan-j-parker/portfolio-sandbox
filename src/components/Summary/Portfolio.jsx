/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
// import './Portfolio.css';
import { Projects } from './Projects';
import './PortfolioAlt.css';

function PortfolioProject() {
  // const parallax = useParallax({
  //   speed: -10,
  //   offset: 100,
  // });

  const [hovered, setHovered] = useState(false);

  const card = Projects.map((project) => {
    return (
      <>
        {/* <Parallax offset={1} speed={5}> */}
        <div
          key={project.id}
          className="card"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <p className="projectName">{project.name}</p>
          {/* <div className="imageBox"> */}
          {/* {hovered && (
            <div className="linksBox">
              <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
                <img className="githubIcon" src="/projects/github-icon-white.png" />
              </a>
              <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
                <img className="netlifyIcon" src="/projects/netlify-icon.png" />
              </a>
            </div>
          )} */}
          {/* </div> */}
          <img src={`../projects/sq-${project.image}.png`} className="projectImg" />
          <div className="descriptionBox">
            {/* <p className="projHeader descriptionHeader">Description:</p> */}
            {/* <Parallax speed={25}> */}
            <p className="projectDesc">{project.description}</p>
            {/* </Parallax> */}
            {/* <p className="projHeader contributionHeader">Primary contributions:</p> */}
            {/* <Parallax speed={30}> */}
            <p className="personal">{project.personal}</p>
            {/* </Parallax> */}
          </div>
          {/* <div className="linksBox">
            <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
              <img className="githubIcon" src="/projects/github-icon-white.png" />
            </a>
            <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
              <img className="netlifyIcon" src="/projects/netlify-icon.png" />
            </a>
          </div> */}
          <div className="linksBox">
            <a className="githubLink" href={project.github} rel="noreferrer" target="_blank">
              <button className="ghBtn">GitHub</button>
            </a>
            <a className="netlifyLink" href={project.netlify} rel="noreferrer" target="_blank">
              <button className="liveBtn">Live</button>
            </a>
          </div>
        </div>
        {/* </Parallax> */}
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
