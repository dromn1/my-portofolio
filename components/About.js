import React,{useRef, useEffect} from "react";
import Image from "next/image";
import cti from "image/cti.png"
import nasif from "image/nasif.jpg"
import hungerstation from "image/hungerstation.png"
import { motion, useAnimation } from "framer-motion"
import {useInView} from 'react-intersection-observer';

  export const About = ()=> {
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


    return (
      <>
        <div className="container vh-100 d-flex align-items-center px-1 my-5 position-relative">
        <motion.div animate={animation} ref={ref} className="container py-2 px-4 text-center no-color rounded-3">
        <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.2}} className="color-whity fs-2 mb-4 text-bg fw-bold"><strong>About Me</strong></motion.h1>
        {/* <!--Section: Content Start--> */}
  
        <ul className="nav nav-tabs d-flex justify-content-center no-border" id="myTab" role="tablist">
        <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.5}} className="nav-item" role="presentation">
          <button className=" position-relative btn p-2 full-width mb-1 black-bg border-purple color-purple fs-6 nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Who am I ?</button>
        </motion.li>
        <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.6}} className="nav-item" role="presentation">
          <button className=" position-relative btn p-2 full-width mb-1 mx-3 black-bg border-purple color-purple fs-6 nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Education</button>
        </motion.li>
        <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.7}} className="nav-item" role="presentation">
          <button className=" position-relative btn p-2 full-width mb-1 black-bg border-purple color-purple fs-6 nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Experince</button>
        </motion.li>
        <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:0.8}} className="nav-item" role="presentation">
          <button className=" position-relative btn p-2 full-width mb-1 mx-3 black-bg border-purple color-purple fs-6 nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#resume-tab-pane" type="button" role="tab" aria-controls="resume-tab-pane" aria-selected="false">Download</button>
        </motion.li>
      </ul>
  
  
  
  
  
      {/* <!-- Tab content start --> */}
      <div className="tab-content" id="myTabContent">
  
  
  
  
  
        {/* <!-- First content start --> */}
        <motion.div initial={{ y: -200, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:1.5}} className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={"0"}>
          <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-sm-12 col-xs-12">
          <Image src={nasif} height={200} alt="Ahmad Nasif" className="rounded-4 mt-4 mb-2"/>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12  mt-4 animate__animated animate__fadeInUp animate__delay-0s">
            
            <div className="row">
              <div className="col-12">
                <p className="color-whity fs-2">Hello, I'm Ahmad Nasif</p>
              </div>
              <div className="col-12">
                <p className="color-whity sizeable-text">
                  I'm <span className="sizeable-text color-purple text-decoration-underline">24</span>, 
                  and I'm a Mid-Senior Frontend Developer and UI/UX designer with <span className="sizeable-text color-purple text-decoration-underline">3 years</span> experience and specialization in web\App development design, also I'm an Animation Artist and 3D Modeling</p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
        {/* <!-- First content end --> */}
  
  
  
  
  
  
        {/* <!-- Second content start --> */}
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={"0"}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-sm-12 col-xs-12">
          <Image src={cti} height={200} alt="Communications and Information College" className="rounded-4 mt-4 mb-2"/>
            
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12  mt-4 animate__animated animate__fadeInUp animate__delay-0s">
            
            <div className="row">
              <div className="col-12">
                <p className="color-whity fs-2">Certificate</p>
              </div>
              <div className="col-12">
                <p className="color-whity sizeable-text">
                 Bachelor's in Engineering Computer, graduate in <span className="sizeable-text color-purple text-decoration-underline">Feb 2023</span> from CTI "Communications and Information College".
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <!-- Second content end --> */}
  
  
  
  
  
  
  
        {/* <!-- Third content start --> */}
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={"0"}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-sm-12 col-xs-12">
          <Image src={hungerstation} height={200} alt="Communications and Information College" className="rounded-4 mt-4 mb-2"/>
            
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12  mt-4 animate__animated animate__fadeInUp animate__delay-0s">
            
            <div className="row">
              <div className="col-12">
                <p className="color-whity fs-2">Hungerstation Company Limited</p>
              </div>
              <div className="col-12">
                <p className="color-whity sizeable-text">
                   For 3+ years experience I've worked in Hungerstation Company as an Opreation System Specialist who is resposible for creating  offers and determining area, in addition to darw the zoon's for restaurants and sync it with the system.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <!-- Third content end --> */}
  
  
  
        {/* <!-- Forth content start --> */}
        <div className="tab-pane fade" id="resume-tab-pane" role="tabpanel" aria-labelledby="resume-tab" tabIndex={"0"}>
        
          <div className="col-md-12 px-5 col-sm-12 col-xs-12  mt-4 animate__animated animate__fadeInUp animate__delay-0s">
            
            <div className="row">
              <div className="col-12">
                <p className="color-whity fs-2">Download my resume</p>
              </div>
              <div className="col-12">
                <p className="color-whity sizeable-text">
                   <a href="./Ahmad Nasif.pdf" download={"Ahmad Nasif Resume"} className="sizeable-text color-purple text-decoration-underline">Download</a>
                </p>
              </div>
              <div className="col-12 mt-1">
                <p className="color-whity">Scroll down to my designs</p>
              <svg className="arrowsvg" xmlns="http://www.w3.org/2000/svg" width="auto" height="50" viewBox="0 0 56 93">
                <g id="downtipe" transform="translate(-408 -654)">
                  <g id="squr" transform="translate(408 654)" fill="none" stroke="#6b5eae" stroke-width="5" opacity="0">
                    <rect width="56" height="93" rx="15" stroke="none"/>
                    <rect x="2.5" y="2.5" width="51" height="88" rx="12.5" fill="none"/>
                  </g>
                  <g id="arrow1" transform="translate(417.75 674.86)">
                    <line id="Line_1" data-name="Line 1" x1="18" y2="18" transform="translate(18.5)" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                    <line id="Line_2" data-name="Line 2" x2="18" y2="18" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                  </g>
                  <g id="arrow2" transform="translate(417.75 695.416)">
                    <line id="Line_1-2" data-name="Line 1" x1="18" y2="18" transform="translate(18.5)" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                    <line id="Line_2-2" data-name="Line 2" x2="18" y2="18" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                  </g>
                  <g id="arrow3" transform="translate(417.75 715.973)">
                    <line id="Line_1-3" data-name="Line 1" x1="18" y2="18" transform="translate(18.5)" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                    <line id="Line_2-3" data-name="Line 2" x2="18" y2="18" fill="none" stroke="#6b5eae" stroke-linecap="round" stroke-width="3"/>
                  </g>
                </g>
              </svg>
              </div>
            </div>
          </div>
        
        </div>
        {/* <!-- Forth content end --> */}
  
  
  
      </div>
      {/* <!-- Tab content end -->           */}
  
        
      </motion.div>
      </div>
      </>
    )
  }

  export default About;