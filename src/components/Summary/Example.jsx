import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

export default function Example() {
  const ref = useRef();
  return (
    <Parallax pages={3} ref={ref}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Layers can contain anything</p>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={-2} factor={1.5} horizontal />

      <ParallaxLayer sticky={{ start: 1, end: 2 }} />

      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>
    </Parallax>
  );
}
