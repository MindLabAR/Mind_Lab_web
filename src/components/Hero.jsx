import { OrbitControls, Sphere } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { pointsInner } from "../JS/Utils";

const Hero = () => {
  return (
    <div className=" h-full w-full ">
      <Canvas
        camera={{ position: [0, 0, 14] }}
        className="bg-[#ffffff]"
        style={{ height: "100vh" }}
      >
        {/* <OrbitControls /> */}
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCricle />
      </Canvas>
    </div>
  );
};

const PointCricle = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.2;
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point1 key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point1 = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;
