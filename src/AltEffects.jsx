// /* eslint-disable react/no-unknown-property */
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { FlyControls, Billboard, Html, OrbitControls, Stars } from '@react-three/drei';

// export default function AltEffects() {
//   const projects = [
//     {
//       id: 1,
//       name: 'Sound Palette',
//       image_src: '/',
//     },
//     {
//       id: 2,
//       name: 'Collabo',
//       image_src: '/',
//     },
//     {
//       id: 3,
//       name: 'Escape from Terminal Forest',
//       image_src: '/',
//     },
//     {
//       id: 4,
//       name: "Maddie's Marble Ninja Warrior",
//       image_src: '/',
//     },
//     {
//       id: 5,
//       name: 'Alchemy Tic-Tac-Toe',
//       image_src: '/',
//     },
//     {
//       id: 6,
//       name: 'React Countries',
//       image_src: '/',
//     },
//     {
//       id: 7,
//       name: 'Pokemon Compendium',
//       image_src: '/',
//     },
//     {
//       id: 8,
//       name: 'R3F Portal',
//       image_src: '/',
//     },
//     {
//       id: 9,
//       name: 'Billboard 9',
//       image_src: '/',
//     },
//   ];

//   return (
//     <Canvas camera={{ position: [0, 0, 0.1], fov: 50 }}>
//       {projects.map((project) => (
//         <Html key={project.id} position={[0, project.id - 1, 0]}>
//           <div className="project-card">
//             <h3 className="project-name">{project.name}</h3>
//             <img className="project-image" src={project.image_src} alt={project.name} />
//           </div>
//         </Html>
//       ))}
//       <fog attach="fog" args={['white', 1, 20]} />
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//       <pointLight position={[-10, -10, -10]} />
//       <OrbitControls />
//       <Stars 
//         radius={100}
//         depth={50}
//         count={5000}
//         factor={4}
//         saturation={10}
//         fade
//       />
//     </Canvas>
//   );
// }
