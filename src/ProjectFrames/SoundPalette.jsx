/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Center, Float, Html, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useState, useRef } from 'react';
import './SoundPalette.css';

export default function SoundPalette() {
  return (
    <Html position={[-1, 4.34, 4.8]} transform wrapperClass="soundPalette" distanceFactor={1.25} >
      <iframe scrolling="no" title="Sound Palette" src="https://sound-palette.netlify.app" />
    </Html>
  );
}
