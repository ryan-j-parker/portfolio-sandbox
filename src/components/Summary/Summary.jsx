/* eslint-disable react/no-unknown-property */
import { Center, Float, Loader, PresentationControls, Stars, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { sRGBEncoding } from 'three';
import './Summary.css';
import * as THREE from 'three';
import App3dText from '../Main/App3dText';
import gsap from 'gsap';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Summary() {
  const props = {
    font: '/Roboto_Slab_Regular.json',
    size: 5,
    width: 30,
    bevelEnabled: true,
    widthSegments: 20,
    bevelSegments: 12,
  };

  const hiRef = useRef();
  const myRef = useRef();
  const ryanRef = useRef();
  const imARef = useRef();

  // useEffect(() => {
  //   gsap.from(hiRef, { duration: 4, opacity: 0, x: -10, delay: 0.5 });
  // }, []);
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
        <div className="further">
          <div className="resume">
            <a
              className="appLink"
              href="https://drive.google.com/file/d/1ZjwvYU8JQeSnCxEKKeexbT4eZmWRmRIr/view?usp=share_link"
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
      </div>
    </>
  );
}
