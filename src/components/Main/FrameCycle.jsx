// /* eslint-disable react/no-unknown-property */
// import { useGLTF, Html, shaderMaterial } from '@react-three/drei';
// import { Canvas, extend, useFrame } from '@react-three/fiber';
// import './MainStage.css';
// import { useRef, useState } from 'react';
// import Project from '../../ProjectFrames/Project';
// import Channel from './Channel';
// import ShaderMaterial from './ShaderMaterial';
// import voidFragment from '../../shaders/voidFragment';
// import voidVertex from '../../shaders/voidVertex';
// import attractFragment from '../../shaders/attractFragment';
// import attractVertex from '../../shaders/attractVertex';

// const VoidMaterial = shaderMaterial(
//   {
//     randomFactors: [1, 1, 1],
//     uTime: 1,
//   },
//   voidVertex,
//   voidFragment
// );
// extend({ VoidMaterial });

// const AttractMaterial = shaderMaterial(
//   {
//     u_resolution: [window.innerWidth, window.innerHeight],
//     u_mouse: [0.7 * window.innerWidth, window.innerHeight],
//     u_time: 0,
//     u_frame: 0,
//   },
//   attractVertex,
//   attractFragment
// );
// extend({ AttractMaterial });

// function ShaderEl() {
//   const projectRef = useRef();
//   const [sourceIndex, setSourceIndex] = useState(0);

//   const voidMaterial = useRef();
//   const attractMaterial = useRef();

//   useFrame((state, delta) => {
//     voidMaterial.current.uTime += delta;
//   });

//   return (
//     <group>
//       <mesh position={[0, 0, 0]}>
//         <planeGeometry args={[1, 1]} />
//         <voidMaterial ref={voidMaterial} />
//         {/* <attractMaterial ref={attractMaterial} /> */}
//       </mesh>
//     </group>
//   );
// }

// function FrameCycle() {
//   const sources = [
//     'https://tv-static-shader.netlify.app',
//     'https://sound-palette.netlify.app',
//     'https://marble-ninja-warrior.netlify.app',
//     'https://collabomusic.co',
//     'https://r3f-portal.netlify.app',
//     'https://xs-vs-os.netlify.app',
//     // 'https://tv-static-shader.netlify.app',
//   ];

//   return (
//     <div className="mainstage">
//       <Canvas
//         className="mainstageCanvas"
//         camera={{ position: [0, 0, 5], fov: 50 }}
//         onCreated={({ gl }) => {
//           gl.setClearColor('#000000');
//         }}
//       >
//         <ShaderEl />
//         {/* <Html
//           position={[0, 0, -10]}
//           transform
//           wrapperClass="projectIframe"
//           // args={[5.5, 4.2]}
//           // style={{ width: '100%', height: '100%' }}
//           ref={projectRef}
//           distanceFactor={1.25}
//         >
//           <iframe scrolling="no" src={sources[sourceIndex]} />
//         </Html> */}
//         {/* <iframe scrolling="no" src={sources[sourceIndex]} /> */}
//       </Canvas>
//     </div>
//   );
// }

// // export default FrameCycle;
