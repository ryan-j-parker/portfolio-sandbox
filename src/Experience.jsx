/* eslint-disable react/no-unknown-property */
import { Center, Html, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { TweenLite } from 'gsap/gsap-core';
import React, { useRef } from 'react';
import { ACESFilmicToneMapping, DoubleSide, sRGBEncoding } from 'three';

function RotatingCircle({ position }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    TweenLite.to(meshRef.current.rotation, 2, {
      y: meshRef.current.rotation.y + delta * ((2 * Math.PI) / 5),
      ease: 'Power0.easeNone',
    });
  });

  return (
    <mesh ref={meshRef} position={position}>
      <circleBufferGeometry />
      <meshBasicMaterial />
    </mesh>
  );
}

export default function Experience() {
  const red = useRef();
  const orange = useRef();
  const yellow = useRef();
  const green = useRef();
  const blue = useRef();
  const indigo = useRef();
  const violet = useRef();
  const dots = useRef();

  // useFrame((state, delta) => {
  //   gsap.duration(red.current.rotation, {
  //     //   duration: 10,
  //     y: (red.current.rotation.y += delta * ((2 * Math.PI) / 5)),
  //     // repeat: 1,
  //     ease: 'power0.easeNone',
  //   });
  // gsap.to(orange.current.rotation, {
  //   duration: 10,
  //   y: 2 * Math.PI,
  //   repeat: 1,
  //   ease: 'none',
  // });
  // });

  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      gl={{
        antialias: true,
        encoding: sRGBEncoding,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1,
      }}
    >
      <Center>
        <Html
          // position={[0, 0, 0]}
          position-x={-4}
          scale={2}
        >
          <img src="/r-fav.png" className="image" alt="Ryan Parker" />
        </Html>
        <Html position-y={4}>
          <div className="boxBlue" />
        </Html>
        <Html position-y={4} position-x={-4}>
          <div className="boxOrange" />
        </Html>
        <group ref={dots}>
          <Html position-y={-2.5} position-x={0}>
            <div className="dot" />
          </Html>
          <Html position-y={-2.5} position-x={1.25}>
            <div className="dot" />
          </Html>
          <Html position-y={-2.5} position-x={2.5}>
            <div className="dot" />
          </Html>
          <Html position-y={-1.25} position-x={2.5}>
            <div className="dot" />
          </Html>
          <Html position-y={0} position-x={2.5}>
            <div className="dot" />
          </Html>
        </group>
      </Center>

      {/* <RotatingCircle 
        position={[0, 0, 0]}
      /> */}
      {/* <group>
        <mesh ref={red}>
          <torusGeometry args={[3.9, 4.2, 100, 100]} />
          <meshBasicMaterial color="red" flatShading side={DoubleSide} />
        </mesh> */}
      {/* <mesh ref={orange}>
          <ringGeometry args={[3.6, 3.9, 100]} />
          <meshBasicMaterial color="orange" flatShading side={DoubleSide} />
        </mesh>
        <mesh ref={yellow}>
          <ringGeometry args={[3.3, 3.6, 100]} />
          <meshBasicMaterial color="yellow" flatShading side={DoubleSide} />
        </mesh>
        <mesh ref={green}>
          <ringGeometry args={[3, 3.3, 100]} />
          <meshBasicMaterial color="green" flatShading side={DoubleSide} />
        </mesh>
        <mesh ref={blue}>
          <ringGeometry args={[2.7, 3, 100]} />
          <meshBasicMaterial color="blue" flatShading side={DoubleSide} />
        </mesh>
        <mesh ref={indigo}>
          <ringGeometry args={[2.4, 2.7, 100]} />
          <meshBasicMaterial color="indigo" flatShading side={DoubleSide} />
        </mesh>
        <mesh ref={violet}>
          <ringGeometry args={[2.1, 2.4, 100]} />
          <meshBasicMaterial color="violet" flatShading side={DoubleSide} />
        </mesh> */}
      {/* </group> */}

      <OrbitControls />
    </Canvas>
  );
}
