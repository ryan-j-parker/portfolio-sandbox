// /* eslint-disable react/no-unknown-property */
// import { Center, Float, Html, OrbitControls, Text3D } from '@react-three/drei';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import React, { useState, useRef } from 'react';
// // import TextEl from './TextEl';

// export default function Sandbox() {

//   return (
//     <Canvas
//       style={{ height: '100vh', width: '100vw' }}
//       camera={{ position: [0, 0, 5] }}
//       onCreated={({ gl }) => {
//         gl.setClearColor('black');
//         gl.shadowMap.enabled = true;
//         gl.shadowMap.type = THREE.PCFSoftShadowMap;
//         gl.toneMapping = THREE.ACESFilmicToneMapping;
//         gl.toneMappingExposure = 0.5;
//         gl.antialias = true;
//         gl.outputEncoding = THREE.sRGBEncoding;
//       }}
//     >
//       {/* <pointLight position={[10, 10, 10]} /> */}
//       {/* <TextEl /> */}
//       <Float speed={0.5}>
//         <rectAreaLight
//           width={2.5}
//           height={2.5}
//           intensity={65}
//           color={'#ff6900'}
//           rotation={[0.5, Math.PI, 0]}
//           position={[0, 5, 0]}
//         />
//         <Html
//           position={[0, 0, 0]}
//           wrapperClass="sound-palette"
//           distanceFactor={2.5}
//         >
//           <iframe title="Sound Palette" src="https://sound-palette.netlify.app" />
//         </Html>
//       </Float>
//       <Float speed={0.5}>
//         <rectAreaLight
//           width={2.5}
//           height={2.5}
//           intensity={65}
//           // color={'#ff6900'}
//           rotation={[0.5, Math.PI, 0]}
//           // position={[-3, -5, 0]}
//         />
//         <Html
//           position={[-3, -5, 0]}
//           wrapperClass="collabo"
//           distanceFactor={2.5}
//         >
//           <iframe title="Collabo" src="https://collabo-music.netlify.app" />
//         </Html>
//       </Float>
//       <Float speed={0.5}>
//         <rectAreaLight
//           width={2.5}
//           height={2.5}
//           intensity={65}
//           // color={'#ff6900'}
//           rotation={[0.5, Math.PI, 0]}
//           // position={[-3, -5, 0]}
//         />
//         <Html
//           position={[-3, -5, 0]}
//           wrapperClass="collabo"
//           distanceFactor={2.5}
//         >
//           <iframe title="Marble Runner" src="https://idyllic-frangollo-1ec6ab.netlify.app/" />
//         </Html>
//       </Float>
//       {/* <ambientLight /> */}
//       <OrbitControls />
//     </Canvas>
//   );
// }
