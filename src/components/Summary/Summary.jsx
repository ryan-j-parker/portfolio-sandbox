/* eslint-disable react/no-unknown-property */
import {
  Center,
  Float,
  PresentationControls,
  Stars,
  Text3D,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { sRGBEncoding } from 'three';
import './Summary.css';
import * as THREE from 'three';

export default function Summary() {
  return (
    <>
      <Canvas
        className="intro-canvas"
        orthographic
        camera={{ near: 0, far: 1000, zoom: 10, position: [0, 0, 10], fov: 15 }}
        onCreated={({ gl }) => {
          gl.encoding = THREE.sRGBEncoding;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
          gl.outputEncoding = sRGBEncoding;
        }}
      >
        <PresentationControls
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap
        >
          <ambientLight intensity={5} />
          <directionalLight position={[0, 0, 1]} intensity={1} color={'#ffff30'} />
          <Stars radius={100} depth={10} count={1000} factor={4} saturation={0} fade />

          <Center>
            <Float floatSpeed={0.5} rotationIntensity={0.5}>
              <Text3D
                font={'/Roboto_Slab_Regular.json'}
                size={5}
                width={30}
                bevelEnabled={true}
                widthSegments={20}
                bevelSegments={12}
              >
                Ryan Parker
                <meshPhysicalMaterial />
              </Text3D>
            </Float>
          </Center>
        </PresentationControls>
      </Canvas>
      <div className="intro">
        <h1 className="hi">Hi.</h1>
        <h2 className="my">My name is</h2>
        <h1 className="name">Ryan Parker.</h1>
      </div>
      <div className="summary">
        <p className="summary-text">full-stack software developer</p>
      </div>
    </>
  );
}
