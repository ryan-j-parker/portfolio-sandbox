import React from 'react';
// import { useParallax, Parallax } from 'react-scroll-parallax';
import './Summary.css';

export default function Summary() {
  // const { ref } = useParallax({ speed: 40 });

  return (
    <>
      {/* <div className="summary-wrapper" ref={ref}> */}
      {/* <Parallax translateY={[-200, 20]}> */}
      <div className="image-wrapper">
        <img className="headshot" src="/ryanparker34.png" />
      </div>
      {/* </Parallax> */}
      <div className="intro">
        <h1 className="hi">Hi.</h1>
        <h2 className="my">My name is</h2>
        <h1 className="name">Ryan Parker.</h1>
      </div>
      <div className="summary">
        <p className="summary-text">
          I&apos;m a full-stack software developer with a passion for crafting intuitive and
          engaging user experiences, beautiful UI, and 3D graphics and animation.
        </p>
      </div>
      {/* </div> */}
    </>
  );
}
