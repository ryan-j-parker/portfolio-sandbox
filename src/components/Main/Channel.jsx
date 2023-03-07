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
        <circleGeometry args={[0.5, 24]} />
        <meshBasicMaterial color={hovered ? '#ffc53d' : '#ebebeb'} />
      </mesh>
    </group>
  );
}
