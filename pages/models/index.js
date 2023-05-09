import React, { useRef, useEffect, Suspense  } from "react";
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
// import Model_3d from './Model'
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from 'next/link';
import Model from '../../components/Dount'

export default function Routing() {
    return (
      <>
      <div className="container vh-100 d-flex align-items-center px-1 my-5 position-relative">
        <Canvas>
          <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} autoRotate/>
            <Suspense fallback={null}>
              <Model />
              <Environment preset="sunset"  />
            </Suspense>
          </Canvas>
      </div>
    
    </>  
    )
    
  }