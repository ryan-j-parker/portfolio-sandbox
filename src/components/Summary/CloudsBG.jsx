/* eslint-disable react/no-unknown-property */
import { Cloud, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

function CloudsBG() {
  return (
    <Suspense fallback={null}>
      <Canvas className="summaryCanvas">
        <ambientLight intensity={0.15} />
        <Cloud
          position={[0, 0, -10]}
          scale={[1, 1, 1]}
          width={15}
          depth={1}
          segments={30}
          speed={0.25}
        />
        <Stars radius={100} depth={50} count={1000} fade />
      </Canvas>
    </Suspense>
  );
}

export default CloudsBG;
