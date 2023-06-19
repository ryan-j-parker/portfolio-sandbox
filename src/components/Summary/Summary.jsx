/* eslint-disable react/no-unknown-property */
import { Cloud, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import './Summary.css';
import CloudsBG from './CloudsBG';

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

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const showHeadshot = () => {
    if (clicked) {
      return (
        <>
          <div className="image-wrapper">
            <p className="wave">👋</p>
            <img src="/headshot-gradient-1024.png" className="headshot profile-pic" />
          </div>
          <p className="emailBox">ryan.jos.parker@gmail.com</p>
          <div className="easteregg">
            <a title="let's build something wonderful!" href="mailto:ryan.jos.parker@gmail.com">
              <i className="fa fa-envelope email" aria-hidden="true" />
            </a>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <CloudsBG />
      <div className="summary" onClick={() => setClicked(!clicked)}>
        <div ref={hiRef} className="summaryText" id="hi">
          Hi.
          {/* </div>
        <div ref={myRef} className="summaryText" id="myNameIs"> */}
          <span id="my"> My</span> <span id="name">name</span> <span id="is">is</span>
        </div>
        <div
          ref={ryanRef}
          className="ryan"
          id="ryan"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          Ryan J. Parker.
        </div>
        <div ref={imARef} className="summaryText" id="imA">
          I&apos;m a{' '}
          <span className="software" id="software">
            full stack software developer
          </span>{' '}
          based in <span className="portland">Portland, Oregon.</span>
        </div>
      </div>
      {showHeadshot()}
    </>
  );
}
