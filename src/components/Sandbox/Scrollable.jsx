/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

export default function Scrollable() {
  return (
    <div className="scrollable">
      <Canvas
        camera={{ position: [0, 0, 10] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ReinhardToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.setClearColor(new THREE.Color('#020207'));
        }}
        className="scrollableCanvas"
      >
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[10, 15, 10]} angle={0.3} penumbra={1} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}
