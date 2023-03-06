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
    <Html className="infoText">
      <p>Click on the channel dials to navigate through the projects</p>
    </Html>
  );
}

export default function MainStage() {
  const [sourceIndex, setSourceIndex] = useState(0);

  const infoRef = useRef();

  const handleClickUp = () => {
    sourceIndex < 5 ? setSourceIndex(sourceIndex + 1) : setSourceIndex(0);
  };

  const handleClickDown = () => {
    sourceIndex > 0 ? setSourceIndex(sourceIndex - 1) : setSourceIndex(2);
  };

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
    if (hover) {
      gsap.to('.upArrow', { duration: 0.5, y: 0 });
      gsap.to('.downArrow', { duration: 0.5, y: 0 });
    }
  };

  return (
    <div className="mainstage">
      <Suspense fallback={<Loader />}>
        <Canvas
          className="mainstageCanvas"
          camera={{
            near: 0,
            far: 100,
            zoom: 10,
            position: [0, 2, 10],
            fov: 45,
          }}
          onCreated={({ gl }) => {
            gl.outputEncoding = THREE.sRGBEncoding;
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1;
          }}
          style={{ height: '100%', width: '100%' }}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          {/* <ambientLight intensity={0.25} /> */}
          <PresentationControls
            target={[0, 20, 0]}
            polar={[-0.4, 0.4]}
            azimuth={[-1, 1]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 2, tension: 400 }}
          >
            <Stage shadows="contact" adjustCamera={10} preset="soft">
              <App3dText
                position={[0, 8.75, 2]}
                text={'Projects'}
                title="click on the channels below to see my latest projects"
                castShadow
              />
              <CRT sourceIndex={sourceIndex} position={[0, 0, -20]} />
              <Html position={[3.18, 5.34, 4.8]} transform>
                <div className="channel upArrow" onClick={handleClickUp}>
                  {/* <img src={upArrow} /> */}
                  {/* <div className="upDial" onClick={handleClickUp} /> */}
                </div>
                <div className="channel downArrow" onClick={handleClickDown}>
                  {/* <img src={downArrow} /> */}
                  {/* <div className="downDial" onClick={handleClickDown} /> */}
                </div>
              </Html>
            </Stage>
            <group className="infoBox">
              {/* <Html className="infoText"></Html> */}
              <InfoText />
            </group>
          </PresentationControls>
        </Canvas>
      </Suspense>
    </div>
  );
}
