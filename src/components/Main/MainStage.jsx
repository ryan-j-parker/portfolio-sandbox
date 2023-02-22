/* eslint-disable react/no-unknown-property */
import {
  Center,
  OrbitControls,
  PresentationControls,
  shaderMaterial,
  Stage,
  Text3D,
  useGLTF,
  Float,
  Html,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import './MainStage.css';
import * as THREE from 'three';
import { DoubleSide } from 'three';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { useRef, useState } from 'react';
import SoundPalette from '../../ProjectFrames/SoundPalette';
import gsap from 'gsap';
import upArrow from './up-arrow-svgrepo-com.svg';
import downArrow from './down-arrow-svgrepo-com.svg';

const CrtMaterial = shaderMaterial(
  {
    randomFactors: [1, 1, 1],
    uTime: 0,
  },
  crtVertex,
  crtFragment
);
extend({ CrtMaterial });

const CRT = () => {
  const crt = useGLTF('/CRT/Television_01_1k.gltf');
  const crtMaterial = useRef();

  useFrame((state, delta) => {
    crtMaterial.current.uTime += delta;
  });

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  console.log(clicked);

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
        <mesh>
          <planeGeometry args={[5.5, 4.2]} />
          <crtMaterial ref={crtMaterial} />
        </mesh>
      </group>
      {clicked ? (
        // <group position={[-3.8, 6.6, 4.9]}>
        <SoundPalette />
      ) : // </group>
        null}
    </>
  );
};

const ProjectsText = () => {
  const textRef = useRef();

  // useFrame(() => {
  //   gsap.fromTo(textRef, {
  //     x: 200,
  //     ease: 'power2.inOut',
  //     duration: 4,
  //   }, {
  //     x: -200,
  //     ease: 'power2.inOut',
  //     duration: 4,
  //   });
  // });

  return (
    <group ref={textRef}>
      <Center position-y={5}>
        <Float floatIntensity={0.1} floatingRange={0.1} rotationIntensity={0.1}>
          <Text3D size={1.4} font={'/Righteous_Regular.json'}>
            Projects
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </group>
  );
};

export default function MainStage() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <div className="mainstage">
      <Canvas
        className="mainstage-canvas"
        camera={{ near: 0, far: 100, zoom: 1, position: [0, 0, 1], fov: 15 }}
        onCreated={({ gl }) => {
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
      >
        <ProjectsText />
        <PresentationControls
          polar={[-0.4, 0.4]}
          azimuth={[-1, 1]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <Stage shadows="contact" center>
            <ambientLight intensity={0.5} />
            <CRT
            // onClick={handleClick}
            />
            <Html
              position={[3.2, 5, 4.8]}
              transform
            >
              <div className="channel">
                <img src={upArrow} className="upArrow" />
              </div>
              <div className="channel">
                <img src={downArrow} className="downArrow" />
              </div>
            </Html>
          </Stage>
        </PresentationControls>

        {/* {clicked ? null : (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            makeDefault
            maxPolarAngle={Math.PI / 2}
          />
        )} */}
      </Canvas>
    </div>
  );
}
