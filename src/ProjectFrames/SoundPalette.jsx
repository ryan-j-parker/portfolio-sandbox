// /* eslint-disable react/no-unknown-property */
// import React from 'react';
// import { Center, Float, Html, OrbitControls, Text3D } from '@react-three/drei';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
// import { useState, useRef } from 'react';
// import './SoundPalette.css';
// // import upArrow from '../Main/up-arrow-svgrepo-com.svg';
// // import downArrow from '../Main/down-arrow-svgrepo-com.svg';

// export default function SoundPalette() {
//   const [source, setSource] = useState('https://sound-palette.netlify.app/');
//   // const [sourceIndex, setSourceIndex] = useState(0);
//   // const sources = [
//   //   'https://sound-palette.netlify.app/',
//   //   'https://marble-ninja-warrior.netlify.app/',
//   //   'https://collabomusic.co',
//   // ];

//   // src={sources[0]}

//   return (
//     <>
//       <Html position={[-1, 4.4, 4.8]} transform wrapperClass="soundPalette" distanceFactor={1.25}>
//         <iframe scrolling="no" title="Sound Palette" src={source} />
//       </Html>
//       <Html position={[3.2, 5, 4.8]} transform>
//         <div className="channel">
//           {/* <img src={upArrow} className="upArrow" /> */}
//         </div>
//         <div className="channel">
//           {/* <img src={downArrow} className="downArrow" /> */}
//         </div>
//       </Html>
//     </>
//   );
// }
