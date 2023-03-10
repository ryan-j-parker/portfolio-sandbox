import { Html } from '@react-three/drei';
import React, { useState, useRef } from 'react';
import './Project.css';

export default function Project({ sourceIndex }) {
  const sources = [
    'https://tv-static-shader.netlify.app',
    'https://sound-palette.netlify.app',
    'https://collabomusic.co',
    'https://marble-ninja-warrior.netlify.app',
    'https://r3f-portal.netlify.app',
    'https://xs-vs-os.netlify.app',
    'https://flags-of-earth.netlify.app',
    'https://3x3x3-algorithms.netlify.app',
    'https://nature-soundboard.netlify.app',
    'https://r3f-frame.netlify.app',
    'https://cube-field.netlify.app',
  ];

  const projectRef = useRef();

  // project is where index, mainstage is where buttons are, 
  // buttons depend on setIndex mainstage --> CRT --> project (path of index);;; 
  // pass index through CRT component to project, which uses index to 
  // change channel (mainstage buttons, CRT index)

  // src={sources[0]}

  // onClick --> increment index % 3

  // buttons will be a level above --> will send an index prop down to project
  // buttons will be in mainstage -->
  return (
    <Html position={[0, 0.4, 0]} 
      transform 
      wrapperClass="projectIframe" 
      args={[5.5, 4.2]}
      style={{ width: '100%', height: '100%' }}
      // ref={projectRef} 
      distanceFactor={1.25}
    >
      <iframe src={sources[sourceIndex]} />
    </Html>
  );
}
