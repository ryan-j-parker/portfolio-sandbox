/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import dotsVertex from '../../shaders/dotsVertex';
import dotsFragment from '../../shaders/dotsFragment';
import attractFragment from '../../shaders/attractFragment';
import attractVertex from '../../shaders/attractVertex';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { shaderMaterial } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';

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

export default function ShaderMaterial() {
  const ref = useRef();
  const dotsMaterial = useRef();

  useFrame((state, delta) => {
    dotsMaterial.current.u_time += delta;
    dotsMaterial.current.u_frame += delta;
  });

  return (
    <mesh>
      <planeGeometry args={[5.5, 4.2]} />
      <dotsMaterial ref={dotsMaterial} />
    </mesh>
  );
}
