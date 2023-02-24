import { Html } from '@react-three/drei';
import React, { useRef } from 'react';

export default function Project({ src }) {
  const projectRef = useRef();

  return (
    <Html
      position={[-1, 4.4, 4.8]}
      transform
      ref={projectRef}
    >
      <iframe className="projectIframe" src={src} />
    </Html>
  );
}
