/* eslint-disable react/no-unknown-property */
import { Center, Float, Text3D, useTexture } from '@react-three/drei';
import React, { useRef } from 'react';

export default function App3dText({ text, position, size }) {
  const textRef = useRef();

  //   const matcap = useTexture('/matcaps/matcapB1.png');
  // const matcap = useTexture('/matcaps/matcapB2.png');
  //   const matcap = useTexture('/matcaps/matcapBl1.png');
  //   const matcap = useTexture('/matcaps/matcapBl2.png');
  // const matcap = useTexture('/matcaps/matcapChr.png');
  // const matcap = useTexture('/matcaps/matcapGold1.png');
  // const matcap = useTexture('/matcaps/matcapGold2.png');
  // const matcap = useTexture('/matcaps/matcapGr1.png');
  // const matcap = useTexture('/matcaps/matcapGr2.png');
  // const matcap = useTexture('/matcaps/matcapGr3.png');
  // const matcap = useTexture('/matcaps/matcapOB1.png');
  // const matcap = useTexture('/matcaps/matcapOG1.png');
  const matcapRed = useTexture('/matcaps/matcapR1.png');
  // const matcap = useTexture('/matcaps/matcapW1.png');
  // const matcap = useTexture('/matcaps/matcapW2.png');

  return (
    <group ref={textRef} position={position} castShadow receiveShadow>
      <Center>
        {/* <Float
          floatIntensity={0.75} 
          floatingRange={0.05} 
          rotationIntensity={0.5}
          rotateOnAxis={'y'}
          

        > */}
        <Text3D
          size={size}
          font={'/Righteous_Regular.json'}
          bevelEnabled
          bevelSegments={3}
          bevelSize={0.05}
          bevelThickness={0.25}
        >
          {text}
          <meshMatcapMaterial matcap={matcapRed} />
        </Text3D>
        {/* </Float> */}
      </Center>
    </group>
  );
}
