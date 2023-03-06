/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Extrude, OrbitControls, Center, Loader, shaderMaterial } from '@react-three/drei';
import './MainStage.css';
import crtVertex from '../../shaders/crtVertex';
import crtFragment from '../../shaders/crtFragment';
import dotsVertex from '../../shaders/dotsVertex';
import dotsFragment from '../../shaders/dotsFragment';
import attractVertex from '../../shaders/attractVertex';
import attractFragment from '../../shaders/attractFragment';

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

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
const SIDE = 10;

function Block(props) {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  const crtMaterial = useRef();
  const dotsMaterial = useRef();
  const attractMaterial = useRef();

  // useFrame((state, delta) => {
  //   crtMaterial.current.uTime += delta;
  // });

  // useFrame((state, delta) => {
  //   dotsMaterial.current.u_time += delta;
  //   // dotsMaterial.current.u_frame += delta;
  // });

  useFrame((state, delta) => {
    attractMaterial.current.u_time += delta;
    attractMaterial.current.u_frame += delta;
  });

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
        {/* <meshPhysicalMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
          emissive="#fca"
          emissiveIntensity={0.5}
        /> */}
        {/* <crtMaterial ref={crtMaterial} /> */}
        {/* <dotsMaterial ref={dotsMaterial} /> */}
        <attractMaterial ref={attractMaterial} />
      </Extrude>
    </>
  );
}

export default function AltCanvas() {
  return (
    <div className="mainstage">
      <Suspense fallback={<Loader />}>
        <Canvas
          dpr={window.devicePixelRatio}
          camera={{ position: new THREE.Vector3(8, 5, 40) }}
          className="mainstageCanvas"
          style={{ height: '100%', width: '100%' }}
        >
          <ambientLight intensity={2.5} />
          <color attach="background" args={['#06092c']} />
          <pointLight position={[-20, 10, 25]} />
          <gridHelper
            args={[100, 20, '#4D089A', '#4D089A']}
            position={[0, 0, -10]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <Center>
            <Block />
          </Center>
          <OrbitControls autoRotate autoRotateSpeed={5} />
        </Canvas>
      </Suspense>
    </div>
  );
}
