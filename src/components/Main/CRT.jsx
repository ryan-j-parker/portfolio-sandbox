/* eslint-disable react/no-unknown-property */
import { shaderMaterial, useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import './MainStage.css';
import { useRef, useState, useEffect } from 'react';
import Project from '../../ProjectFrames/Project';
import Channel from './Channel';
import dotsVertex from '../../shaders/dotsVertex';
import dotsFragment from '../../shaders/dotsFragment';
import attractFragment from '../../shaders/attractFragment';
import attractVertex from '../../shaders/attractVertex';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CrtMaterial = shaderMaterial(
  {
    randomFactors: [1, 1, 1],
    uTime: 0,
  },
  crtVertex,
  crtFragment
);
extend({ CrtMaterial });

const DotsMaterial = shaderMaterial(
  {
    u_resolution: [window.innerWidth, window.innerHeight],
    u_mouse: [0.7 * window.innerWidth, window.innerHeight],
    u_time: 0,
    u_frame: 0,
  },
  dotsVertex,
  dotsFragment
);
extend({ DotsMaterial });

const AttractMaterial = shaderMaterial(
  {
    u_resolution: [window.innerWidth, window.innerHeight],
    u_mouse: [0.7 * window.innerWidth, window.innerHeight],
    u_time: 0,
    u_frame: 0,
  },
  attractVertex,
  attractFragment
);
extend({ AttractMaterial });

export default function CRT({ sourceIndex }) {
  const crt = useGLTF('/CRT/Television_01_1k.gltf');

  // // TODO: import GLTFLoader
  // const gltfLoader = new GLTFLoader();
  // const [crt, setCrt] = useState();
  // useEffect(() => {
  //   gltfLoader.load('/CRT/Television_01_1k.gltf', (gltf) => {
  //     setCrt(gltf);
  //   });
  // }, []);

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
        onClick={handleClick}
        castShadow
        receiveShadow
      >
        <primitive object={crt.scene} />
      </group>
      <group position={[-1, 4.4, 4.89]}>
        <Project sourceIndex={sourceIndex} />
        <mesh>
          <planeGeometry args={[5.5, 4.2]} />
          <crtMaterial ref={crtMaterial} />
        </mesh>
      </group>
      <group position={[3.17, 5.7, 5]}>
        <Channel />
      </group>
      <group position={[3.17, 4.5, 5]}>
        <Channel />
      </group>
    </>
  );
}
