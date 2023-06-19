// /* eslint-disable react/no-unknown-property */
// import React, { Suspense, useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { Canvas, extend, useFrame } from '@react-three/fiber';
// import { Extrude, OrbitControls, Center, Loader, shaderMaterial } from '@react-three/drei';
// import './MainStage.css';
// import crtVertex from '../../shaders/crtVertex';
// import crtFragment from '../../shaders/crtFragment';
// import dotsVertex from '../../shaders/dotsVertex';
// import dotsFragment from '../../shaders/dotsFragment';
// import attractVertex from '../../shaders/attractVertex';
// import attractFragment from '../../shaders/attractFragment';

// const CrtMaterial = shaderMaterial(
//   {
//     randomFactors: [1, 1, 1],
//     uTime: 0,
//   },
//   crtVertex,
//   crtFragment
// );
// extend({ CrtMaterial });

// const DotsMaterial = shaderMaterial(
//   {
//     u_resolution: [window.innerWidth, window.innerHeight],
//     u_mouse: [0.7 * window.innerWidth, window.innerHeight],
//     u_time: 0,
//     u_frame: 0,
//   },
//   dotsVertex,
//   dotsFragment
// );
// extend({ DotsMaterial });

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

// // const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
// // const SIDE = 10;
// const extrudeSettings = { steps: 4, depth: 10, bevelEnabled: false };
// const SIDE = 10;

// function Block(props) {
//   const shape = React.useMemo(() => {
//     const _shape = new THREE.Shape();

//     // _shape.moveTo(0, 0);
//     // _shape.lineTo(SIDE, 0);
//     // _shape.lineTo(SIDE, SIDE * 2);
//     // _shape.lineTo(0, SIDE * 2);
//     // _shape.lineTo(0, SIDE * 3);
//     // _shape.lineTo(-SIDE, SIDE * 3);
//     // _shape.lineTo(-SIDE, SIDE);
//     // _shape.lineTo(0, SIDE);

//     _shape.moveTo(0, 0);
//     _shape.lineTo(10, 0);
//     _shape.lineTo(10, 10 * 2);
//     _shape.lineTo(0, 10 * 2);
//     _shape.lineTo(0, 10 * 3);
//     _shape.lineTo(-10, 10 * 3);
//     _shape.lineTo(-10, 10);
//     _shape.lineTo(0, 10);

//     return _shape;
//   }, []);

//   const crtMaterial = useRef();
//   const dotsMaterial = useRef();
//   const attractMaterial = useRef();

//   useFrame((state, delta) => {
//     crtMaterial.current.uTime += delta;
//   });

//   useFrame((state, delta) => {
//     dotsMaterial.current.u_time += delta;
//     dotsMaterial.current.u_frame += delta;
//   });

//   useFrame((state, delta) => {
//     attractMaterial.current.u_time += delta;
//     attractMaterial.current.u_frame += delta;
//   });

//   const shapeRef = useRef();

//   useEffect(() => {
//     const { current } = shapeRef;
//     const { current: crt } = crtMaterial;
//     const { current: dots } = dotsMaterial;
//     const { current: attract } = attractMaterial;

//     const onMouseMove = (e) => {
//       crt.uMouse = [e.clientX, e.clientY];
//       dots.u_mouse = [e.clientX, e.clientY];
//       attract.u_mouse = [e.clientX, e.clientY];
//     };

//     const onResize = () => {
//       crt.uResolution = [window.innerWidth, window.innerHeight];
//       dots.u_resolution = [window.innerWidth, window.innerHeight];
//       attract.u_resolution = [window.innerWidth, window.innerHeight];
//     };

//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('resize', onResize);

//     return () => {
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('resize', onResize);
//     };
//   }, []);

//   return (
//     <>
//       <Extrude args={[shape, extrudeSettings]} {...props}>
//         {/* <meshPhysicalMaterial
//           flatShading
//           color="#3E64FF"
//           thickness={SIDE}
//           roughness={0.4}
//           clearcoat={1}
//           clearcoatRoughness={1}
//           transmission={0.8}
//           ior={1.25}
//           attenuationTint="#fff"
//           attenuationDistance={0}
//           emissive="#fca"
//           emissiveIntensity={0.5}
//         /> */}
//         {/* <crtMaterial ref={crtMaterial} /> */}
//         <dotsMaterial ref={dotsMaterial} />
//         {/* <attractMaterial ref={attractMaterial} /> */}
//       </Extrude>
//       <Extrude args={[shape, extrudeSettings]} {...props} position={[12, 12, 0]}>
//         <crtMaterial ref={crtMaterial} />
//       </Extrude>
//       <Extrude args={[shape, extrudeSettings]} {...props} position={[-12, -12, 0]}>
//         <attractMaterial ref={attractMaterial} />
//       </Extrude>
//     </>
//   );
// }

// function AltCanvas() {
//   return (
//     <div className="mainstage">
//       <Suspense fallback={<Loader />}>
//         <Canvas
//           dpr={window.devicePixelRatio}
//           // camera={{ position: new THREE.Vector3(8, 5, 40) }}
//           camera={{ position: new THREE.Vector3(8, 15, 20) }}
//           className="mainstageCanvas"
//           style={{ height: '100%', width: '100%' }}
//         >
//           <ambientLight intensity={2.5} />
//           {/* <color attach="background" args={['#06092c']} /> */}
//           <pointLight position={[-20, 10, 25]} />
//           <gridHelper
//             args={[240, 20, '#FB7C45', '#44E4FC']}
//             position={[0, 0, 120]}
//             rotation={[-Math.PI / 2, 0, 0]}
//           />
//           <gridHelper
//             args={[240, 20, '#FB7C45', '#44E4FC']}
//             position={[0, 0, -120]}
//             rotation={[-Math.PI / 2, 0, 0]}
//           />
//           <gridHelper
//             args={[240, 20, '#FB7C45', '#44E4FC']}
//             position={[-120, 0, 0]}
//             rotation={[0, 0, -Math.PI / 2]}
//           />
//           <gridHelper
//             args={[240, 20, '#FB7C45', '#44E4FC']}
//             position={[120, 0, 0]}
//             rotation={[0, 0, -Math.PI / 2]}
//           />
//           <gridHelper
//             args={[240, 40, '#FB7C45', '#44E4FC']}
//             position={[0, 120, 0]}
//             rotation={[0, -Math.PI / 2, 0]}
//           />
//           <gridHelper
//             args={[240, 40, '#FB7C45', '#44E4FC']}
//             position={[0, -120, 0]}
//             rotation={[0, -Math.PI / 2, 0]}
//           />
//           <Center>
//             <Block />
//           </Center>
//           <OrbitControls autoRotate autoRotateSpeed={-2.5} />
//         </Canvas>
//       </Suspense>
//     </div>
//   );
// }

// // export default AltCanvas;
