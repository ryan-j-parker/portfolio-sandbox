/* eslint-disable react/no-unknown-property */
import { Center, Text3D, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';

export default function App3dText({ text, position, size, matcapIndex }) {
  const textRef = useRef();

  const matcaps = useTexture([
    '/matcaps/matcapLBL2.png',
    '/matcaps/matcapOO3.png',
  ]);

  return (
    <group ref={textRef} position={position} castShadow receiveShadow>
      <Center>
        <Text3D
          size={size}
          font={'/Righteous_Regular.json'}
          bevelEnabled
          bevelSegments={3}
          bevelSize={0.05}
          bevelThickness={0.25}
        >
          {text}
          <meshMatcapMaterial matcap={matcaps[matcapIndex]} />
        </Text3D>
      </Center>
    </group>
  );
}
