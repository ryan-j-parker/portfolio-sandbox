/* eslint-disable react/no-unknown-property */
import { shaderMaterial, useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import './MainStage.css';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { useRef, useState } from 'react';
import Project from '../../ProjectFrames/Project';

const CrtMaterial = shaderMaterial(
  {
    randomFactors: [1, 1, 1],
    uTime: 0,
  },
  crtVertex,
  crtFragment
);
extend({ CrtMaterial });

export default function CRT({ sourceIndex }) {
  const crt = useGLTF('/CRT/Television_01_1k.gltf');
  const crtMaterial = useRef();

  useFrame((state, delta) => {
    crtMaterial.current.uTime += delta;
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <group
        dispose={null}
        scale={15}
        position={[0, 0.5, 2]}
        castShadow
        receiveShadow
        onClick={handleClick}
      >
        <primitive object={crt.scene} />
      </group>
      <group position={[-1, 4.4, 4.89]}>
        {/* {clicked ? ( */}
        <Project sourceIndex={sourceIndex} />
        {/* ) : ( */}
        <mesh>
          <planeGeometry args={[5.5, 4.2]} />
          <crtMaterial ref={crtMaterial} />
        </mesh>
        {/* )} */}
      </group>
    </>
  );
}
