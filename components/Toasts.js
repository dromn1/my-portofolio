import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toasts = ()=> {
    return (
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
 
    )
  }

  export default Toasts;