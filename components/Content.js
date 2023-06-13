import React, { useRef, useEffect, Suspense  } from "react";
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'
// import Model_3d from './Model'
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';
import {Model} from './Purple_planet'
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import downtipe from "image/downtipe.svg"
import Link from 'next/link';

 const Content = ()=> {

  const {ref, inView} = useInView({
    threshold:0.2
  });

  const animation = useAnimation();

    useEffect(()=>{
      console.log("I'm here", inView)
      if(inView){
        animation.start({
          opacity:1,
          transition: { duration: 0.9 },
          
        })
      }
      if(!inView){
        animation.start({
          opacity:0,
          transition: { duration: 0.9 },
        })
      }
    },[inView])

    return (
        <main id="swup" className="main-bg ">
    
    <div className="container">
      {/* <!--Section: Content Start--> */}
      <div className="row rounded d-flex mt-5 justify-content-between">
          

        

        <div className="col-xxl-6 m-1 d-flex align-items-center desktop-ver1">
          <div className="content-side m-1">
            <div className="row center-text-sizable d-flex align-items-end">
              <motion.h1 initial={{ y: 50, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{type: "spring", ease: "easeOut", stiffness: 100, damping: 15,  delay:1.2}}  className="content-1 display-4 mt-5"><strong>Hey, I'm Ahmad</strong></motion.h1>
            </div>
            <div className="row center-text-sizable">
              <motion.h1 initial={{ y: 80, opacity:0 }} animate={{ y: 0, opacity:1 }} transition={{type: "spring", ease: "easeOut", stiffness: 100, damping: 15,  delay:1.5}}  className="content-1 fw-bold display-4 my-4">
              <strong><span className="color-purple">UI</span>
                <span className="icon-brush"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                <span className="color-purple">UX</span> Designer<span className="color-purple"> and </span><span>Web/App </span><span className="color-purple">Developer.</span></strong></motion.h1>
                <h4 className="animate__animated animate__fadeIn animate__delay-2s content-1 h4 mb-5">who could single-handedly tackle every layer of Web & App design.</h4>
            </div>
          
          </div>
            
        </div>

        <div className="col-xxl-5 d-flex justify-content-center position-relative ">
          <Canvas className="mysvg">
          <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} autoRotate/>
            <Suspense fallback={null}>
              <Model />
              <Environment preset="sunset"  />
            </Suspense>
          </Canvas>
          {/* <Model_3d/> */}
          
          
        </div>


        <div className="col-12 center-text-sizable justify-content-start animate__animated animate__fadeIn animate__delay-3s  position-relative">
        <Link href="/routing"><button className="btn-purple position-relative btn p-2 full-width fs-6 color-whity custom-mar-bottom">Let's talk</button></Link>
        </div>

      </div>

{/* <div className="col-12 p-1 sticky-bottom position-absolute no-color d-flex justify-content-center">
      © 2021 Copyright:
      <a className="color-purple" href="#">ahmad-nasif.com</a>
    </div> */}
      {/* <!--Section: Content End--> */}
    </div>
  </main>
    )
  }

  export default Content;