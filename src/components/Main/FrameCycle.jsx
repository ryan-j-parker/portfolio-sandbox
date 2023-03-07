/* eslint-disable react/no-unknown-property */
import { useGLTF, Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import './MainStage.css';
import { useRef, useState } from 'react';
import Project from '../../ProjectFrames/Project';
import Channel from './Channel';
import ShaderMaterial from './ShaderMaterial';

export default function FrameCycle() {
  const sources = [
    'https://tv-static-shader.netlify.app',
    'https://sound-palette.netlify.app',
    'https://marble-ninja-warrior.netlify.app',
    'https://collabomusic.co',
    'https://r3f-portal.netlify.app',
    'https://xs-vs-os.netlify.app',
    // 'https://tv-static-shader.netlify.app',
  ];

  const projectRef = useRef();

  // project is where index, mainstage is where buttons are,
  // buttons depend on setIndex mainstage --> CRT --> project (path of index);;;
  // pass index through CRT component to project, which uses index to
  // change channel (mainstage buttons, CRT index)

  // src={sources[0]}

  // onClick --> increment index % 3

  // buttons will be a level above --> will send an index prop down to project
  // buttons will be in mainstage -->
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleClickUp = () => {
    sourceIndex < 5 ? setSourceIndex(sourceIndex + 1) : setSourceIndex(0);
  };

  const handleClickDown = () => {
    sourceIndex > 0 ? setSourceIndex(sourceIndex - 1) : setSourceIndex(2);
  };

  return (
    <div className="mainstage">
      <Canvas
        className="mainstageCanvas"
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000');
        }}
      >
        <group scale={15}>
          <Html
            position={[0, 0, -10]}
            transform
            wrapperClass="projectIframe"
            // args={[5.5, 4.2]}
            // style={{ width: '100%', height: '100%' }}
            ref={projectRef}
            distanceFactor={1.25}
          >
            <iframe scrolling="no" src={sources[sourceIndex]} />
          </Html>
          <Html position={[0, -3, -10]} transform distanceFactor={1.25}>
            <button className="upBtn" onClick={handleClickUp}>
              UP
            </button>
            <button className="downBtn" onClick={handleClickDown}>
                DOWN
            </button>
          </Html>
        </group>
      </Canvas>
    </div>
  );
}
