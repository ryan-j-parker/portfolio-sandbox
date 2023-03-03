/* eslint-disable react/no-unknown-property */
import { Center, Float, PresentationControls, Stars, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
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

  return (
    <>
      <div className="summary">
        <div ref={hiRef} className="summaryText" id="hi">
          Hi.
        </div>
        <div ref={myRef} className="summaryText" id="myNameIs">
          <span id="my">My</span> <span id="name">name</span> <span id="is">is</span>
        </div>
        <div ref={ryanRef} className="ryan">Ryan Parker.</div>
        <div ref={imARef} className="summaryText" id="imA">
          I&apos;m a <span className="software">full-stack software developer</span> based in{' '}
          <span className="portland">Portland, Oregon.</span>
        </div>
      </div>
    </>
  );
}
