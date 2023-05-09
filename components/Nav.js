import React from "react";
import { motion} from "framer-motion"
import Image from "next/image";
import logo from "image/logo.svg"
import menu_icon from "image/menu_icon.svg"
import Link from "next/link"
  export const Nav = ()=> {
    const [move, setMove] = React.useState(false);
    return (
        
        // <!-- Navbar -->
    

  // ===========================================
  <nav className="navbar fixed-top z-1 p-4 no-color">
  <div className="container no-color">
  <Link href={"/"}><motion.button  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:2.2}} className="navbar-brand no-color no-border" href="#"><Image src={logo} className="navbar-logo"/></motion.button></Link>
    <Link href={"/"}><motion.button  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:2}}  className="navbar-toggler" type="button" >
      <Image className="navbar-logo-menu" src={menu_icon} />
    </motion.button></Link>
    <div className="offcanvas offcanvas-bottom navbar-size black-bg border-purple rounded-4 mar-nav" >
      
      <div className="offcanvas-header rounded-4 m-1">
        <h5 className="offcanvas-title color-whity" id="offcanvasNavbarLabel">Looking for what?</h5>
        <button type="button" className="btn-close color-whity whity-bg" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body black-bg rounded-4">
        <div className="row">
          <div className="col border-purple d-flex justify-content-center p-4 rounded-4 m-1">
          <Link href={"/routing"}>
          <button className="nav-link active " >
            About
          </button>
          </Link>
          </div>
          <div className="col border-purple d-flex justify-content-center p-4 rounded-4 m-1">
          <h4 className="content-1 h4 ">Works</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border-purple d-flex justify-content-center p-4 rounded-4 m-1">
          <h4 className="content-1 h4 ">Tools</h4>
          </div>
          <div className="col border-purple d-flex justify-content-center p-4 rounded-4 m-1">
          <h4 className="content-1 h4 ">Contact</h4>
          </div>
        </div>
        {/* <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:4}} className="nav-link  active " aria-current="page" href="/about.html"><p className=" fw-bold color-whity ">About</p></motion.a>
          </li>
          <li className="nav-item">
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:4.2}} className="nav-link" href="/works.html"><p className=" fw-bold color-whity ">Works</p></motion.a>
          </li>
          <li className="nav-item ">
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:4.4}} className="nav-link" href="#"><p className=" fw-bold color-whity ">Tools</p></motion.a>
          </li>
          <li className="nav-item ">
          <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20, delay:4.6}} className="nav-link"><p className=" fw-bold color-whity ">Contact</p></motion.a>
          </li>
        </ul> */}
      </div>

    </div>
  </div>
</nav>
  
  // ===========================================
    )
  }

  export default Nav;