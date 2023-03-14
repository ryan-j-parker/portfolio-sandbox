/* eslint-disable react/no-unknown-property */
import {
  PresentationControls,
  Stage,
  Float,
  Html,
  Loader,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './MainStage.css';
import * as THREE from 'three';
import { Suspense, useRef, useState } from 'react';
import CRT from './CRT';
import App3dText from './App3dText';

export default function MainStage() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const ref = useRef();

  const handleClickUp = () => {
    sourceIndex < 10 ? setSourceIndex(sourceIndex + 1) : setSourceIndex(0);
  };

  const handleClickDown = () => {
    sourceIndex > 0 ? setSourceIndex(sourceIndex - 1) : setSourceIndex(10);
  };

  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="mainstage">
        <Suspense fallback={<Loader />}>
          <Canvas
            shadows
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
                    text={'click on the dials to view'}
                    title="click dials see projects"
                    castShadow
                    size={0.55}
                    matcapIndex={13}
                  />
                  <App3dText
                    position={[0, 8.75, 2]}
                    text={'Projects'}
                    size={1.6}
                    title="projects"
                    castShadow
                    matcapIndex={12}
                  />
                </Float>
                <mesh castShadow receiveShadow>
                  <CRT sourceIndex={sourceIndex} position={[0, 0, -20]} />
                </mesh>
                <Html position={[3.18, 4.74, 4.8]} transform>
                  <div className="channel upArrow" onClick={handleClickUp} />
                  <div className="channel downArrow" onClick={handleClickDown} />
                </Html>
              </Stage>
            </PresentationControls>
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}
