import React from "react";
import About from '../../components/About'
import Works from '../../components/Works'
import Contact from '../../components/Contact'
import Tools from '../../components/Tools'
import Nav from '../../components/Nav'
import Cursor from '../../components/Cursor'
export const route_pages = ()=> {
    return (
        <>
    <div className='container availabel-scroll'>
      <ul className="circles animate__animated animate__fadeInUp animate__delay-0s">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      </ul>
        <Nav />
        <Cursor />
        <div className='sec-scroll position-relative'>
        <section className='sec2 d-flex justify-content-center align-items-center color-whity'>
        <About/>
        </section>

        <section>
        <Works/>
        </section>
        
        <section>
        <Tools/>
        </section>
        
        <section>
        <Contact/>
        </section>
        </div>
        
        
      </div>
        
 </>
    )
  }

  export default route_pages;