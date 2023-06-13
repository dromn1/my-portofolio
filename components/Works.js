import React, { useRef, useEffect } from "react";
import Model_3d from './Model'
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';
import Image from "next/image";
import project_1 from "image/salony1less.png"
import blender_project from "image/blender_project.png"
import kids_project from "image/kids_project.png"
import Link from "next/link"
export const Works = ()=> {

  const {ref, inView} = useInView({
    threshold:0.7
  });

  const animation = useAnimation();

    useEffect(()=>{
      console.log("I'm here", inView)
      if(inView){
        animation.start({
          y:0,
          opacity:1,
          transition: { type: "spring", stiffness: 260, damping: 20, duration: 0.9, delay:0.1}  
          
        })
      }
      if(!inView){
        animation.start({
          y:'10vh',
          opacity:0
          
        })
      }
    },[inView])
// animate={animation} ref={ref}
    return (
      <>
      <motion.div animate={animation} ref={ref} className="container text-center no-color vh-100 d-flex align-items-center position-relative">
        
      <div className="col">
        <h1 className="color-whity fs-2 mb-3 mt-5 text-bg fw-bold"><strong>Here some of my designs</strong></h1>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="row d-flex justify-content-center">

            <div className="col">
            <button className="btn-purple rounded-3 no-border" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon mt-1" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
            </div>

            <div className="col">
              <button className="btn-purple rounded-3 no-border" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon mt-1" aria-hidden="true"></span>
          </button>
            </div>

          </div>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
              <div className="carousel-inner py-4">

              <div className="carousel-item active">
              <div className="card d-flex no-color no-border align-items-center">
              <Image src={project_1} height={600} alt="CTI" className="img-fluid rounded-3"/>
              <div className="card-body  border-purple rounded-3 mt-2 mb-4 animate__animated animate__fadeInDown">
              <h5 className="card-title color-whity">Salony</h5>
              <p className="card-text color-whity">my Senior Project in college, and this app will help you to book and find your favorite salon easily</p>
              <p className="grayly-color m-0">Preview</p>
              </div>
              </div>
              </div>

              <div className="carousel-item">
              <div className="card d-flex no-color no-border align-items-center">
              <Image src={blender_project} height={600} alt="CTI" className="img-fluid rounded-3"/>
              <div className="card-body  border-purple rounded-3 mt-2 mb-4 animate__animated animate__fadeInDown">
              <h5 className="card-title color-whity">3D Donut</h5>
              <p className="card-text color-whity">this donut I made it by using Blender software and you can preview it by click on "Preview" below </p>
              <Link href={"/models"} target="_blank" className="color-purple">Preview</Link>
              </div>
              </div>
              </div>

              <div className="carousel-item">
              <div className="card d-flex no-color no-border align-items-center">
              <Image src={kids_project} height={600} alt="CTI" className="img-fluid rounded-3"/>
              <div className="card-body  border-purple rounded-3 mt-2 mb-4 animate__animated animate__fadeInDown">
              <h5 className="card-title color-whity">Kids Future App</h5>
              <p className="card-text color-whity">Simple, Easy to use, clear UI all that to help the kids to choose their future university majors by AI</p>
              <Link href={"https://kidscareer.online/"} target="_blank" className="color-purple">Preview</Link>
              </div>
              </div>
              </div>

          </div>
          
        </div>
      </div>
</motion.div>
      </>
    )
  }

  export default Works;