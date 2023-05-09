import React from "react";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

  export const Cursor = ()=> {
    
    return (
        <div>
           <AnimatedCursor 
        innerSize={30}
      outerSize={40}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
        
        />  
        </div>
       
 
    )
  }

  export default Cursor;