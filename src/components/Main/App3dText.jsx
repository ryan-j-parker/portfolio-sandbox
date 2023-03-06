/* eslint-disable react/no-unknown-property */
import { Center, Float, Text3D, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';

export default function App3dText({ text, position }) {
  const textRef = useRef();
  //   const matcap = useTexture('/matcaps/matcapBl1.png');
  //   const matcap = useTexture('/matcaps/matcapBl2.png');

  //   const matcap = useTexture('/matcaps/matcapB1.png');
  // const matcap = useTexture('/matcaps/matcapB2.png');
  //   const matcap = useTexture('/matcaps/matcapOB1.png');
  //   const matcap = useTexture('/matcaps/matcapOG1.png');
  const matcap = useTexture('/matcaps/matcapW1.png');
  // const matcap = useTexture('/matcaps/matcapG.png');
  // const matcap = useTexture('/matcaps/matcapChr.png');

  return (
    <group ref={textRef} position={position} castShadow receiveShadow>
      <Center>
        <Float floatIntensity={0.1} floatingRange={0.1} rotationIntensity={0.1}>
          <Text3D
            size={1.6}
            font={'/Righteous_Regular.json'}
            bevelEnabled
            bevelSegments={3}
            bevelSize={0.05}
            bevelThickness={0.25}
          >
            {text}
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </Float>
      </Center>
    </group>
  );
}
