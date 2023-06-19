// /* eslint-disable react/no-unknown-property */
// import {
//   Center,
//   Cloud,
//   Html,
//   OrbitControls,
//   Stars,
//   useAnimations,
//   useGLTF,
// } from '@react-three/drei';
// import { Canvas, useFrame } from '@react-three/fiber';
// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import './Scrollable.css';

// function SpotLight() {
//   const lightRef = useRef();
//   return (
//     <spotLight ref={lightRef} intensity={0.6} position={[10, 15, 10]} angle={0.3} penumbra={1} />
//   );
// }

// function MechDrone() {
//   const { scene, animations } = useGLTF('/mech_drone.glb');
//   const mechRef = useRef();
//   const { actions } = useAnimations(animations, mechRef);

//   useEffect(() => {
//     actions['Take 001'].play();
//   }, [actions]);

//   useFrame(({ clock }) => {
//     mechRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.15;
//     mechRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.25;
//     mechRef.current.position.z = Math.cos(clock.getElapsedTime()) * 0.25;
//   });

//   return (
//     <group dispose={null} ref={mechRef}>
//       <mesh scale={22} rotation={[0, Math.PI * -0.95, 0]} position={[0, -5, -2]}>
//         <primitive object={scene} />
//       </mesh>
//     </group>
//   );
// }

// function HoverText() {
//   const [hover, setHover] = useState(false);

//   return (
//     <Center position-y={-4}>
//       <Html
//         className="hoverText"
//         style={{ color: hover ? 'white' : 'pink' }}
//         onPointerOver={() => setHover(true)}
//         onPointerOut={() => setHover(false)}
//       >
//         <h1 style={{ width: '100%' }}>
//           Email Ryan at: <br />{' '}
//           <a href="mailto:ryan.jos.parker@gmail.com">ryan.jos.parker@gmail.com</a>
//         </h1>
//         <meshBasicMaterial color="white" />
//       </Html>
//     </Center>
//   );
// }

// export default function Scrollable() {
//   return (
//     <div className="scrollable">
//       <Canvas
//         camera={{ position: [0, 0, 14] }}
//         onCreated={({ gl }) => {
//           gl.toneMapping = THREE.ReinhardToneMapping;
//           gl.outputEncoding = THREE.sRGBEncoding;
//           gl.setClearColor(new THREE.Color('#020207'));
//         }}
//         className="scrollableCanvas"
//       >
//         <Stars fade />
//         <Cloud position-z={-12} />
//         <MechDrone />
//         <HoverText />
//         <OrbitControls makeDefault />
//         <ambientLight intensity={1.5} />
//         <spotLight
//           intensity={0.6}
//           position={[10, 15, 10]}
//           angle={0.3}
//           penumbra={1}
//           color={'#ff0000'}
//         />
//         <spotLight
//           intensity={0.6}
//           position={[-10, 15, -10]}
//           angle={0.3}
//           penumbra={1}
//           color={'#00ffff'}
//         />
//         <SpotLight />
//       </Canvas>
//     </div>
//   );
// }

// useGLTF.preload('/mech_drone.glb');
