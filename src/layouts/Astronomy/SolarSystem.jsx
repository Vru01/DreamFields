import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        {/* <ambientLight intensity={0.5} /> */}
        {/* <directionalLight position={[2, 5, 2]} intensity={0.5}/> */}
        <Stars count={10000} factor={3} />
        <OrbitControls enableZoom={false} />
        {/* Add your planet components here */}
      </Canvas>
    </div>
  );
};

export default SolarSystem;
