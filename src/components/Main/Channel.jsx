/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react';

export default function Channel() {
  const [hovered, setHovered] = useState(false);
  const channel = useRef();

  return (
    <group
      ref={channel}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <circleGeometry args={[0.51, 24]} />
        <meshPhongMaterial color={hovered ? '#ccd234' : '#ffd639'} />
      </mesh>
    </group>
  );
}
