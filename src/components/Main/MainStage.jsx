/* eslint-disable react/no-unknown-property */
import {
  Center,
  OrbitControls,
  PresentationControls,
  shaderMaterial,
  Stage,
  Text3D,
  useGLTF,
  Float,
  Html,
  Loader,
  useTexture,
  Backdrop,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import './MainStage.css';
import * as THREE from 'three';
import { DoubleSide } from 'three';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { Suspense, useRef, useState } from 'react';
import SoundPalette from '../../ProjectFrames/SoundPalette';
import gsap from 'gsap';
import upArrow from './up-arrow-svgrepo-com.svg';
import downArrow from './down-arrow-svgrepo-com.svg';
import Project from '../../ProjectFrames/Project';
import CRT from './CRT';
import App3dText from './App3dText';

function InfoText() {
  return (
    <div className="infoText">
      <p>Click on the screen to view the project</p>
    </div>
  );
}

export default function MainStage() {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleClickUp = () => {
    sourceIndex < 5 ? setSourceIndex(sourceIndex + 1) : setSourceIndex(0);
  };

  const handleClickDown = () => {
    sourceIndex > 0 ? setSourceIndex(sourceIndex - 1) : setSourceIndex(2);
  };

  return (
    <div className="mainstage">
      <Suspense fallback={<Loader />}>
        <Canvas
          className="mainstage-canvas"
          camera={{ near: 0, far: 100, zoom: 20, position: [0, 0, 10], fov: 15 }}
          onCreated={({ gl }) => {
            gl.outputEncoding = THREE.sRGBEncoding;
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1;
          }}
          style={{ height: '100%', width: '100%' }}
        >
          <ambientLight intensity={0.25} />
          <PresentationControls
            target={[0, 20, 0]}
            polar={[-0.4, 0.4]}
            azimuth={[-1, 1]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 2, tension: 400 }}
          >
            <App3dText
              text={'Projects'}
              title="click on the channels below to see my latest projects"
            />
            <Stage
              shadows="contact"
              // adjustCamera={25}
              preset="soft"
            >
              <CRT sourceIndex={sourceIndex} position={[0, 0, -20]} />
              <Html position={[3.18, 5.34, 4.8]} transform>
                <div className="channel">
                  <img src={upArrow} className="upArrow" onClick={handleClickUp} />
                  {/* <div className="upDial" onClick={handleClickUp} /> */}
                </div>
                <div className="channel">
                  <img src={downArrow} className="downArrow" onClick={handleClickDown} />
                  {/* <div className="downDial" onClick={handleClickDown} /> */}
                </div>
              </Html>
            </Stage>
          </PresentationControls>
        </Canvas>
      </Suspense>
    </div>
  );
}
