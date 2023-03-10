/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react';
import './Summary.css';

export default function Summary() {

  const hiRef = useRef();
  const myRef = useRef();
  const ryanRef = useRef();
  const imARef = useRef();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div className="summary">
        <div ref={hiRef} className="summaryText" id="hi">
          Hi.
        </div>
        <div ref={myRef} className="summaryText" id="myNameIs">
          <span id="my">My</span> <span id="name">name</span> <span id="is">is</span>
        </div>
        <div ref={ryanRef} className="ryan" id="ryan">
          Ryan Parker.
        </div>
        <div ref={imARef} className="summaryText" id="imA">
          I&apos;m a{' '}
          <span className="software" id="software">
            full-stack software developer
          </span>{' '}
          based in <span className="portland">Portland, Oregon.</span>
        </div>
      </div>

      <div className="further">
        <div className="resume">
          <a 
            className="appLink" 
            href="https://drive.google.com/file/d/1rdInWg42z5PoM4_Xqqqgrl8PAL_xlrTu/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
          >
            resume
          </a>
        </div>
        <div className="projects">
          <a className="appLink" href="/projects">
            projects
          </a>
        </div>
        <div className="proj3d">
          <a className="appLink" href="/projects3d">
            3D
          </a>
        </div>
      </div>
    </>
  );
}
