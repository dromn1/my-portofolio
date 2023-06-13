import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion"
import Image from "next/image";
import {useInView} from 'react-intersection-observer';
import logo from "image/logo.svg"
import menu_icon from "image/menu_icon.svg"
import nasif from "image/nasif.jpg"
import nextjs from "image/nextjs.png"
import vue from "image/vue.png"
import laravel from "image/laravel.png"
import flutter from "image/flutter.png"
import wordpress from "image/wordpress.png"
import wix from "image/wix.png"
import js from "image/js.png"
import css from "image/css.png"
import html from "image/html.png"
import dart from "image/dart.png"
import php from "image/php.png"
import python from "image/python.png"
import sql from "image/sql.png"
import java from "image/java.png"
import jquery from "image/jquery.png"
import xd from "image/xd.png"
import ai from "image/ai.png"
import ps from "image/ps.png"
import figma from "image/figma.png"
import threejs from "image/threejs.png"
import blender from "image/blender.png"
import bootstrap from "image/bootstrap.png"
import tailwind from "image/tailwind.png"
import animatecss from "image/animatecss.png"
import mdb from "image/mdb.png"
import angular from "image/angular.png"
import ts from "image/ts.png"
import sass from "image/sass.png"
import { three } from "maath";


  export const Tools = ()=> {

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
  // ===========================================
  
  <>
  <motion.main animate={animation} ref={ref} id="swup" className="main-bg">
    <div className="container mt-1">
    <div className="container d-flex align-items-center position-relative">
    <div className="col">
    {/* Alert Start */}
    <div className="col-md-12 col-sm-6 alert mt-5 alert-secondary position-relative fw-medium no-border p-2" style={{backgroundColor:"#9c9aa7", color:"#442fac"}} role="alert">
      <p className="text-center no-color" style={{color:"#503eab"}}>You can find below all programming languages and softwares that I can work with it and what I used in this site.</p>
    </div>
    {/* Alert End */}

    {/* Statues Start */}
    <div className="row m-custom-b">
        {/* s 1 */}
        <div className="col-12 d-flex justify-content-center">
      
        <div className="col-3 d-flex align-items-center justify-content-center">
        <div className="statue-box rounded-2 greenly-color me-2"></div> 
        <span className="color-whity m-0 p-0">used</span>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
        <div className="statue-box rounded-2 yelowly-color me-2"></div> 
        <span className="color-whity">work with</span>
        </div>
        
        </div>
        {/* s 1 */}
        
        {/* s 2 */}
        {/* <div className="col">
        <div className="row d-flex justify-content-start">
        <div className="col-1 me-2">
        <div className="statue-box rounded-2 yelowly-color"></div>  
        </div>
        <div className="col-4">
        <span className="color-whity">can work with</span>
        </div>
        </div>
        </div> */}
        {/* s 2 */}
        
    </div>

    {/* Statues End */}

    {/* Tabs Start */}
    <ul className="nav nav-tabs d-flex justify-content-between border-purple p-2 mb-2 rounded-4" id="myTab" role="tablist">
        <li className="nav-item d-block" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link active" id="freamworks-tab" data-bs-toggle="tab" data-bs-target="#freamworks-tab-pane" type="button" role="tab" aria-controls="freamworks-tab-pane" aria-selected="true">Freamworks</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link" id="cms-tab" data-bs-toggle="tab" data-bs-target="#cms-tab-pane" type="button" role="tab" aria-controls="cms-tab-pane" aria-selected="false">CMS</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link" id="p-Languages-tab" data-bs-toggle="tab" data-bs-target="#p-Languages-tab-pane" type="button" role="tab" aria-controls="p-Languages-tab-pane" aria-selected="false">P Languages</button>
        </li>
        {/* plus btn */}
        <li className="nav-item" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link" id="ui-ux-tools-tab" data-bs-toggle="tab" data-bs-target="#ui-ux-tools-tab-pane" type="button" role="tab" aria-controls="ui-ux-tools-tab-pane" aria-selected="false">UI/UX Tools</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link" id="3d-tools-tab" data-bs-toggle="tab" data-bs-target="#3d-tools-tab-pane" type="button" role="tab" aria-controls="3d-tools-tab-pane" aria-selected="false">3D Software's</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className=" position-relative btn  px-4 mb-1 no-color no-border color-whity fs-6 fw-medium nav-link" id="ui-freamwork-tab" data-bs-toggle="tab" data-bs-target="#ui-freamwork-tab-pane" type="button" role="tab" aria-controls="ui-freamwork-tab-pane" aria-selected="false">UI Freamworks</button>
        </li>
      </ul>


<div className="tab-content tool-scroll " id="myTabContent">
  
  
        {/* <!-- First content start --> */}
        <div className="tab-pane fade show active animate__animated animate__fadeInDown" id="freamworks-tab-pane" role="tabpanel" aria-labelledby="freamworks-tab" tabIndex="1">
          <div className="row justify-content-start">
          <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
                <div className="m-3">
                <Image className="img-fluid mt-1" src={nextjs} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">React NextJs 13</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={vue} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Vue Js</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>


            <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={angular} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Angular</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>


              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={laravel} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Laravel</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>


              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={flutter} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Flutter</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
            
          
        </div>
        </div>
        {/* <!-- First content end --> */}
  
  
  
  
  
  
        {/* <!-- Second content start --> */}
        <div className="tab-pane fade show animate__animated animate__fadeInDown" id="cms-tab-pane" role="tabpanel" aria-labelledby="cms-tab" tabIndex="0">
        <div className="row">
        <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={wordpress} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Wordpress</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={wix} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Wix</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
            
        </div>
        </div>
        {/* <!-- Second content end --> */}
  
  
  
  
  
  
  
        {/* <!-- Third content start --> */}
        <div className="tab-pane fade show animate__animated animate__fadeInUp" id="p-Languages-tab-pane" role="tabpanel" aria-labelledby="p-Languages-tab" tabIndex="0">
        <div className="row">
        <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={html} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">HTML</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={css} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">CSS</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={sass} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Sass</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={js} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">JavaScript 🔥</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={ts} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">TypeScript</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={dart} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Dart</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={php} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">PHP</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={sql} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">PL SQL</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={java} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Java</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={python} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Python</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={jquery} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">JQuery</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
            
        </div>
        </div>
        {/* <!-- Third content end --> */}

  
        {/* <!-- Forth content start --> */}
        <div className="tab-pane fade show animate__animated animate__fadeInDown" id="ui-ux-tools-tab-pane" role="tabpanel" aria-labelledby="ui-ux-tools-tab" tabIndex="0">
        <div className="row">
        <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={xd} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Adobe XD 🔥</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={ai} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Adobe Illustrator</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={ps} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Photoshop</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={figma} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Figma</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
            
          
        </div>
        </div>
        {/* <!-- Forth content end --> */}


        {/* <!-- Fifth content start --> */}
        <div className="tab-pane fade show animate__animated animate__fadeInDown" id="3d-tools-tab-pane" role="tabpanel" aria-labelledby="3d-tools-tab" tabIndex="0">
        <div className="row">
        <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={threejs} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Three.Js</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={blender} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Blender</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
        </div>
        </div>
        {/* <!-- Fifth content end --> */}


        {/* <!-- Sixth content start --> */}
        <div className="tab-pane fade show animate__animated animate__fadeInDown" id="ui-freamwork-tab-pane" role="tabpanel" aria-labelledby="ui-freamwork-tab" tabIndex="0">
        <div className="row">
        <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={bootstrap} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Bootstrap 🔥</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1" src={tailwind} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Tailwind</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1 rounded-3" src={animatecss} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">Animate.css 🔥</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 greenly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>

              <div className="col-6 col-lg-3 my-3">
              <div className="card d-flex align-items-center border-purple black-bg">
              <div className="m-3">
                <Image className="img-fluid mt-1 rounded-3" src={mdb} height={200} />
                </div>
                <div className="card-body p-1">
                    <h5 className="card-title color-whity  sizeable-text center-text-sizable">MDB</h5>
                    </div>
                <div className="card-body p-1 col-10 d-flex justify-content-center">
                  <div className="col-6 d-flex align-items-center">
                    <div className="statue-box rounded-2 yelowly-color"></div> 
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                     <a href="#" className="card-link p-1 sizeable-text">Learn</a> 
                  </div>
                </div>
                </div>
              </div>
            
          
        </div>
        </div>
        {/* <!-- Sixth content end --> */}
  
        
  
  
  
      </div>
    {/* Tabs End */}

    </div>
    </div>
    </div>
    </motion.main>
  </>
  
  // ===========================================
    )
  }

  export default Tools;