/* eslint-disable react/no-unknown-property */
import { Center, Float, OrbitControls, Stars, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { sRGBEncoding } from 'three';
import './Summary.css';
import * as THREE from 'three';

export default function Summary() {
  return (
    <>
      {/* <div className="image-wrapper">
        <img className="headshot" src="/ryanparker34.png" />
      </div> */}
      <Canvas 
        className="intro-canvas" 
        orthographic
        // camera={{ position: [0, 0, 10], fov: 75 }}
        camera={{ near: 0, far: 1000, zoom: 10, position: [0, 0, 10], fov: 15 }}
        onCreated={({ gl }) => {
          gl.encoding = THREE.sRGBEncoding;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
          gl.outputEncoding = sRGBEncoding;
        }}
      >
        <ambientLight intensity={5} />
        <directionalLight 
          position={[0, 0, 1]} 
          intensity={1}
          color={'#ffff30'}
        />
        <OrbitControls makeDefault />
        <Stars 
          radius={100}
          depth={10}
          count={1000}
          factor={4}
          saturation={0}
          fade
        />
        <Center>
          <Float
            floatSpeed={0.5}
            rotationIntensity={0.5}
          >
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
      </Canvas>
      <div className="intro">
        <h1 className="hi">Hi.</h1>
        <h2 className="my">My name is</h2>
        <h1 className="name">Ryan Parker.</h1>
      </div>
      <div className="summary">
        {/* <p className="summary-text">
          I&apos;m a full-stack software developer with a passion for crafting intuitive and
          engaging user experiences, beautiful UI, and 3D graphics and animation.
        </p> */}
        <p className="summary-text">full-stack software developer</p>
      </div>
    </>
  );
}
