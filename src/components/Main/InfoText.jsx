/* eslint-disable react/no-unknown-property */
import React from 'react';
import {
  Center,
  OrbitControls,
  PresentationControls,
  shaderMaterial,
  Stage,
  Text3D,
  useGLTF,
  Float,
  Html,
  Loader,
  useTexture,
  Backdrop,
  Text,
} from '@react-three/drei';

export default function InfoText() {
  return (
    <Html className="infoText">
      <Text color="green" fontSize={4} position={[0, 2, 5]} textAlign="center" anchorX="center">
        Click on the channel dials to navigate through the projects
      </Text>
    </Html>
  );
}
