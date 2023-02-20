/* eslint-disable react/no-unknown-property */
import {
  OrbitControls,
  shaderMaterial,
  Stage,
  useGLTF,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import './MainStage.css';
import * as THREE from 'three';
import { DoubleSide } from 'three';
import crtFragment from '../../shaders/crtFragment';
import crtVertex from '../../shaders/crtVertex';
import { useRef } from 'react';

const CrtMaterial = shaderMaterial(
  {
    randomFactors: [1, 1, 1],
    uTime: 0,
  },
  crtVertex,
  crtFragment
);
extend({ CrtMaterial });

const CRT = () => {
  const crt = useGLTF('/CRT/Television_01_1k.gltf');
  const crtMaterial = useRef();

  useFrame((state, delta) => {
    crtMaterial.current.uTime += delta * 2;
  });

  return (
    <>
      <group
        dispose={null}
        scale={15}
        position={[0, 0.5, 2]}
        castShadow
        receiveShadow
      >
        <primitive object={crt.scene} />
      </group>
      <mesh position={[-1, 4.4, 4.89]}>
        <planeGeometry args={[5.5, 4.2]} />
        <crtMaterial ref={crtMaterial} />
      </mesh>
    </>
  );
};

export default function MainStage() {
  return (
    <div className="mainstage">
      <Canvas
        className="mainstage-canvas"
        camera={{ near: 0, far: 100, zoom: 1, position: [0, 0, 1], fov: 15 }}
        onCreated={({ gl }) => {
          gl.outputEncoding = THREE.sRGBEncoding;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
      >
        <Stage shadows="contact" center position={[0, 1, -5]}>
          <ambientLight intensity={0.5} />
          <CRT />
        </Stage>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          makeDefault
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
