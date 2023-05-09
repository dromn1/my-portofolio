import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";

export const Model_3d = ()=> {
    return (
        
        <Canvas>

        <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} autoRotate/>
        <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.7} />
        <Sphere args={[1, 50, 50]} scale={2.6}>
        <MeshDistortMaterial color="#5B4BAF" attach="material" distort={0.4} speed={2.5}/>
        </Sphere>
        <Environment preset="sunset"  />
        </Suspense>
        </Canvas>
 
    )
  }

  export default Model_3d;