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
  Text,
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
import InfoText from './InfoText';

export default function MainStage() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const ref = useRef();
  const infoRef = useRef();

  const handleClickUp = () => {
    sourceIndex < 5 ? setSourceIndex(sourceIndex + 1) : setSourceIndex(0);
  };

  const handleClickDown = () => {
    sourceIndex > 0 ? setSourceIndex(sourceIndex - 1) : setSourceIndex(2);
  };

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    if (hover) {
      ref.current.position.y = 3;
    } else if (!hover) {
      ref.current.position.y = -10;
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
              <Float
                floatIntensity={0.75}
                floatingRange={0.05}
                rotationIntensity={0.5}
                rotateOnAxis={'y'}
              >
                <App3dText
                  position={[0, 10.25, 2]}
                  text={'change the channels to see'}
                  title="click to see projects"
                  castShadow
                  onPointerOver={() => setHover(true)}
                  onPointerOut={() => setHover(false)}
                  size={0.5}
                />
                <App3dText
                  position={[0, 8.75, 2]}
                  text={'Projects'}
                  size={1.6}
                  title="projects"
                  castShadow
                  onPointerOver={() => setHover(true)}
                  onPointerOut={() => setHover(false)}
                />
              </Float>
              {/* {hover && <InfoText />} */}
              <CRT sourceIndex={sourceIndex} position={[0, 0, -20]} />
              <Html position={[3.18, 5.34, 4.8]} transform>
                <div className="channel upArrow" onClick={handleClickUp}>
                  {/* <img src={upArrow} /> */}
                  {/* <div className="upDial" onClick={handleClickUp} /> */}
                  <div className="upDial" />
                </div>
                <div className="channel downArrow" onClick={handleClickDown}>
                  {/* <img src={downArrow} /> */}
                  {/* <div className="downDial" onClick={handleClickDown} /> */}
                  {/* <div className="downDial" /> */}
                </div>
              </Html>
            </Stage>
          </PresentationControls>
          {/* <group className="infoBox" ref={ref}> */}
          {/* <Html className="infoText"></Html> */}
          {/* <InfoText /> */}
          {/* </group> */}
        </Canvas>
      </Suspense>
    </div>
  );
}
