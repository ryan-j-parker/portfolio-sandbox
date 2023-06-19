// /* eslint-disable react/no-unknown-property */
// import { Center, Html, OrbitControls, Text3D } from '@react-three/drei';
// import { Canvas } from '@react-three/fiber';
// import React from 'react';
// import { ACESFilmicToneMapping } from 'three';
// import { sRGBEncoding } from 'three';

// export default function Main() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 10] }}
//       gl={{
//         antialias: true,
//         encoding: sRGBEncoding,
//         toneMapping: ACESFilmicToneMapping,
//         toneMappingExposure: 1,
//         minFilter: 'LinearFilter',
//         magFilter: 'NearestFilter',
//         mapping: 'EquirectangularReflectionMapping',
//         anisotropy: 16,
//       }}
//     >
//       <OrbitControls />
//       <Center>
//         <group position={[0, 0, 0]}
//           onClick={() => {
//             window.location.href = '/experience';
//           }}
//         >
//           <Text3D
//             position-y={1.1}
//             textAlign="center"
//             font={'/Righteous_Regular.json'}
//             size={1.35}
//             bevelEnabled={true}
//           >
//             Ryan Parker
//             <meshNormalMaterial />
//           </Text3D>
//           <Text3D position-y={-1.5} font={'/Righteous_Regular.json'} size={1} bevelEnabled={true}>
//             Full-stack
//             <meshNormalMaterial />
//           </Text3D>
//           <Text3D position-y={-3} font={'/Righteous_Regular.json'} size={1} bevelEnabled={true}>
//             Software
//             <meshNormalMaterial />
//           </Text3D>
//           <Text3D position-y={-4.5} font={'/Righteous_Regular.json'} size={1} bevelEnabled={true}>
//             Engineer
//             <meshNormalMaterial />
//           </Text3D>
//         </group>
//       </Center>
//       {/* <Html>
//         <div className="button">
//           <a href="/scene">
//             <button type="button">Enter</button>
//           </a>
//         </div>
//       </Html> */}
//       <ambientLight intensity={0.5} />
//     </Canvas>
//   );
// }
