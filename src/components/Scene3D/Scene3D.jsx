import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
// Floating animated cube component
const FloatingCube = () => {
  const meshRef = useRef();

  // Animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time) * 0.3;
      meshRef.current.rotation.y = Math.sin(time * 1.5) * 0.5;
      meshRef.current.position.y = Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.1}
        metalness={0.9}
        emissive="#1e40af"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Decorative floating spheres
const FloatingSpheres = () => {
  const sphereRefs = useRef([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    sphereRefs.current.forEach((sphere, index) => {
      if (sphere) {
        sphere.position.y = Math.sin(time + index * 0.5) * 0.3 + 1.5;
        sphere.rotation.x = time * 0.5 + index;
        sphere.rotation.y = time * 0.3 + index;
      }
    });
  });

  const spheres = [];
  for (let i = 0; i < 5; i++) {
    spheres.push(
      <mesh
        key={i}
        ref={(el) => (sphereRefs.current[i] = el)}
        position={[
          Math.cos((i / 5) * Math.PI * 2) * 2,
          1.5,
          Math.sin((i / 5) * Math.PI * 2) * 2,
        ]}
        scale={0.3}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={i % 2 === 0 ? "#f97316" : "#ec4899"}
          roughness={0.1}
          metalness={0.8}
          emissive={i % 2 === 0 ? "#9a3412" : "#831843"}
          emissiveIntensity={0.3}
        />
      </mesh>
    );
  }

  return <>{spheres}</>;
};

// Ground plane with reflective surface
const Ground = () => {
  return (
    <ContactShadows
      position={[0, -1.5, 0]}
      opacity={0.6}
      scale={10}
      blur={1}
      far={2}
    />
  );
};

// Main 3D scene component
const Scene3D = () => {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Enhanced lighting */}
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#60a5fa"
        />

        {/* Environment map for reflections */}
        <Environment preset="city" />

        {/* Main animated cube */}
        <FloatingCube />

        {/* Decorative elements */}
        <FloatingSpheres />

        {/* Reflective ground */}
        <Ground />

        {/* Interactive controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={3}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export { Scene3D };
